const vu = ':host{display:flex;flex-direction:column;min-height:calc(100dvh - var(--header-height,0px));position:relative;background:#050505;color-scheme:dark;--color-bg-ground:#090909;--color-bg-card:#222222;--color-bg-tile:#2b2b2b;--color-fill-bright:#f1f1f1;--color-text-primary:#d9d9d9;--color-text-muted:#969696;--color-text-on-bright:#090909;--color-line:rgba(255,255,255,.14);--color-border-focus:#03a9f4;--color-accent-primary:#03a9f4;--color-accent-secondary:#d0ff00;--color-text-accent:#d0ff00;--color-text-on-accent:#090909;--color-bg-resting:#1f7a4d;--color-bg-danger:#311313;--color-bg-danger-fill:#d53d3d;--color-border-danger:#8c2e2e;--color-text-danger:#ff7777;--color-text-on-danger:#ffffff;--color-state-hover:rgba(255,255,255,.08);--color-bg-chip:#090909;--color-fill-selected:#f1f1f1;--color-text-on-selected:#090909;--color-bg-segment-selected:#2b2b2b;--wx-clear:#03a9f4;--wx-cloudy:#d8d6d6;--wx-night:#1d2b4f;--wx-cloud-bright:#f1f1f1;--color-state-pressed:rgba(255,255,255,.14);--color-state-hover-on-bright:rgba(0,0,0,.06);--color-state-pressed-on-bright:rgba(0,0,0,.12);--scrim:rgba(0,0,0,.66);--lift:rgba(0,0,0,.5)}*{box-sizing:border-box}#app{color:var(--text);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;transition:background .25s ease,color .25s ease;-webkit-font-smoothing:antialiased}[hidden]{display:none!important}button,input{font:inherit}#app{flex:1;display:flex;flex-direction:column;width:100%;margin:0;padding:0;background:var(--bg);text-align:left}#app{--bg:var(--color-bg-ground);--page:var(--color-bg-ground);--card:var(--color-bg-card);--card2:var(--color-bg-card);--modal:var(--color-bg-card);--timer:var(--color-bg-ground);--tile:var(--color-bg-tile);--tile-2:var(--color-bg-tile);--row:var(--color-bg-tile);--row-rest:var(--color-bg-tile);--raised:var(--color-bg-tile);--chip:var(--color-bg-tile);--segment:var(--color-bg-tile);--seg-on:var(--color-bg-segment-selected);--scroll-thumb:var(--color-bg-tile);--control:var(--color-bg-ground);--control-2:var(--color-bg-ground);--sunken:var(--color-bg-ground);--input:var(--color-bg-ground);--track:var(--color-bg-ground);--icon-bg:var(--color-bg-chip);--seg-bg:var(--color-bg-ground);--switch-off:var(--color-bg-ground);--stage:var(--color-bg-ground);--text:var(--color-text-primary);--soft:var(--color-text-primary);--muted:var(--color-text-muted);--accent-text:var(--color-text-accent);--border-hover:var(--color-text-muted);--knob-off:var(--color-text-muted);--today-ring:var(--color-text-muted);--line:var(--color-line);--lineb:var(--color-line);--field-line:var(--color-line);--divider:var(--color-line);--bright:var(--color-fill-bright);--slider-fill:var(--color-fill-bright);--segment-fill:var(--color-fill-bright);--timer-fill:var(--color-fill-bright);--on-bright:var(--color-text-on-bright);--hover:var(--color-state-hover);--wash-2:var(--color-state-hover);--danger:var(--color-text-danger);--danger-bg:var(--color-bg-danger);--danger-line:var(--color-border-danger);--danger-fill:var(--color-bg-danger-fill);--on-danger-fill:var(--color-text-on-danger);--primary:var(--color-accent-primary);--secondary:var(--color-accent-secondary)}.shell{flex:1;display:flex;flex-direction:column;position:relative;width:100%;background:var(--page);border-radius:0;overflow:visible;transition:background .28s ease}#app.paused .shell{background:var(--primary)}#app.light.paused .shell{background:color-mix(in srgb,var(--primary) 55%,var(--color-bg-card))}#app.light{--color-bg-ground:#eeebe8;--color-bg-card:#fbf9f6;--color-bg-tile:#f3efea;--color-fill-bright:#26221e;--color-text-primary:#26221e;--color-text-muted:#6a625a;--color-text-on-bright:#fbf9f6;--color-text-on-accent:#26221e;--color-line:rgba(38,34,30,.12);--color-text-accent:#26221e;--color-accent-secondary:#03a9f4;--color-bg-resting:#7dbb98;--color-bg-danger:#f5dede;--color-border-danger:#e3a0a0;--color-text-danger:#b42a2a;--color-state-hover:rgba(38,34,30,.06);--color-state-pressed:rgba(38,34,30,.12);--color-bg-chip:#fbf9f6;--color-fill-selected:#26221e;--color-text-on-selected:#fbf9f6;--color-bg-segment-selected:#fbf9f6;--color-accent-primary:#0288d1;--color-border-focus:#0288d1;--scrim:rgba(38,34,30,.32);--lift:rgba(38,34,30,.16)}.view{display:none;width:100%;max-width:1184px;margin:0 auto;padding:22px 22px 76.8px}.view.active{display:block;flex:1 0 auto}.card,.panel,.tile{position:relative;background:var(--card);border-radius:36px;padding:22px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb)}.grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:16px}.pill,.primary,.navBtn,.tab,.back{cursor:pointer}.pill{min-height:0;padding:3.2px 0;border:0;border-radius:0;background:transparent;color:var(--text);text-decoration-line:underline;text-decoration-thickness:.8px;text-underline-offset:3.2px}.tab,.back{border-radius:799.2px;min-height:41.6px;padding:0 16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.primary{border-radius:799.2px;min-height:41.6px;padding:0 16px;border:0;background:var(--bright);color:var(--on-bright)}.hcAreaGallery{grid-column:span 12;display:flex;gap:16px;height:288px;overflow:hidden}.hcAreaPanel{position:relative;height:288px;flex:1 1 72px;min-width:70.4px;background:var(--card);border-radius:28.8px;padding:22.4px;border-top:.32px solid var(--line);border-left:.32px solid var(--line);border-right:.32px solid var(--line);border-bottom:.16px solid var(--lineb);overflow:hidden;box-sizing:border-box;transition:flex .32s ease;cursor:pointer}.hcAreaPanel.active{flex:7 1 0;min-width:0;cursor:default}.hcAreaPanel{--edge-proximity:0;--cursor-angle:45deg;--edge-sensitivity:36;--color-sensitivity:56;--cone-spread:25;--fill-opacity:.18;--glow-color-60:hsl(199deg 97% 68% / 60%);--glow-color-40:hsl(199deg 97% 68% / 40%);--glow-color-30:hsl(199deg 97% 68% / 30%);--glow-color-20:hsl(199deg 97% 68% / 20%);--glow-color-10:hsl(199deg 97% 68% / 10%);--gradient-one:radial-gradient(at 80% 55%,#c084fc 0px,transparent 50%);--gradient-two:radial-gradient(at 69% 34%,#f472b6 0px,transparent 50%);--gradient-three:radial-gradient(at 8% 6%,#38bdf8 0px,transparent 50%);--gradient-four:radial-gradient(at 41% 38%,#c084fc 0px,transparent 50%);--gradient-five:radial-gradient(at 86% 85%,#f472b6 0px,transparent 50%);--gradient-six:radial-gradient(at 82% 18%,#38bdf8 0px,transparent 50%);--gradient-seven:radial-gradient(at 51% 4%,#f472b6 0px,transparent 50%);isolation:isolate}.hcAreaPanel:before,.hcAreaPanel:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity .18s ease-out}.hcAreaPanel:before{z-index:2;border:.8px solid transparent;background:linear-gradient(var(--card) 0 100%) padding-box,linear-gradient(#fff0 0,#fff0) border-box,var(--gradient-one) border-box,var(--gradient-two) border-box,var(--gradient-three) border-box,var(--gradient-four) border-box,var(--gradient-five) border-box,var(--gradient-six) border-box,var(--gradient-seven) border-box;opacity:clamp(0,calc(.72 * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.72);-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%));mask-image:conic-gradient(from var(--cursor-angle) at center,black calc(var(--cone-spread) * 1%),transparent calc((var(--cone-spread) + 15) * 1%),transparent calc((100 - var(--cone-spread) - 15) * 1%),black calc((100 - var(--cone-spread)) * 1%))}.hcAreaPanel:after{z-index:1;border:.8px solid transparent;background:var(--gradient-one) padding-box,var(--gradient-two) padding-box,var(--gradient-three) padding-box,var(--gradient-four) padding-box,var(--gradient-five) padding-box,var(--gradient-six) padding-box,var(--gradient-seven) padding-box;opacity:clamp(0,calc(var(--fill-opacity) * (var(--edge-proximity) - var(--color-sensitivity)) / (100 - var(--color-sensitivity))),.18);mix-blend-mode:soft-light;-webkit-mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app.light .hcAreaPanel{--glow-color-40:hsl(199deg 97% 48% / 40%);--glow-color-30:hsl(199deg 97% 48% / 30%);--glow-color-20:hsl(199deg 97% 48% / 20%);--glow-color-10:hsl(199deg 97% 48% / 10%)}.hcAreaPanel.active .panelExpanded{opacity:1;filter:blur(0);pointer-events:auto}.hcAreaPanel.active .panelCollapsed{opacity:0;filter:blur(6.4px);pointer-events:none}.panelExpanded{position:relative;z-index:4;width:100%;height:100%;min-width:0;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;transition:opacity .22s ease,filter .22s ease}.panelCollapsed{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;display:flex;align-items:center;justify-content:center;opacity:0;filter:blur(6.4px);transition:opacity .22s ease,filter .22s ease}.hcAreaPanelTop{display:flex;justify-content:space-between;align-items:flex-start;gap:22.4px;width:100%;min-width:0;box-sizing:border-box}@media (max-width:900px){.hcAreaGallery{overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:3.2px}.hcAreaPanel,.hcAreaPanel.active{height:288px;flex:0 0 min(68.8vw,544px);min-width:min(68.8vw,544px);scroll-snap-align:start}.panelCollapsed{display:none}}.activityHeader{display:flex;align-items:center;gap:var(--inset);margin-bottom:var(--inset)}.icon{width:var(--glyph-size);height:var(--glyph-size);flex:none;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}.icon *{vector-effect:non-scaling-stroke}.activityRows{display:grid;gap:9.6px}.activityRow{display:grid;grid-template-columns:43.2px minmax(0,1fr);align-items:center;gap:11.2px;background:var(--tile-2);border-radius:24px;padding:12px 14px}.activityRowMeta{color:var(--soft);margin-top:2.4px}.toast{position:absolute;right:20.8px;top:20.8px;z-index:60;background:var(--bright);color:var(--on-bright);border-radius:799.2px;padding:8.8px 12.8px;opacity:0;transform:translateY(-6.4px);pointer-events:none;transition:opacity .18s ease,transform .18s ease}.toast.show{opacity:1;transform:none}.sectionLabel{margin:0 0 8px 22.4px}.settingsHeader{display:flex;align-items:center;gap:12.8px;margin-bottom:24px}.back{width:46.4px;padding:0;font-size:24px}.tabs.rubberTabs{position:relative;display:inline-flex;gap:0;padding:3.2px;margin-bottom:17.6px;border-radius:12.8px;background:var(--control);border:.32px solid var(--line);overflow:hidden}.rubberIndicator{position:absolute;top:3.2px;left:3.2px;height:calc(100% - 6.4px);width:0;border-radius:12.8px;background:var(--bright);transition:left .34s cubic-bezier(.2,1.35,.4,1),width .34s cubic-bezier(.2,1.35,.4,1),transform .18s ease;transform-origin:center;z-index:0}.tabs.rubberTabs .tab{position:relative;z-index:1;min-height:41.6px;padding:0 16px;border:0;background:transparent;color:var(--text)}.tabs.rubberTabs .tab.active{color:var(--on-bright)}.settingsPane{display:none}.settingsPane.active{display:block}.toggleList{display:grid;gap:9.6px}.toggleRow{display:flex;justify-content:space-between;align-items:center;gap:14.4px;background:var(--raised);border-radius:22.4px;padding:14.4px 16px}.status{color:var(--muted);margin-top:3.2px}.note{color:var(--muted);line-height:1.5;max-width:688px}.switch{position:relative;width:50px;height:28px;padding:0;border-radius:var(--r-inner);background:var(--line);border:.4px solid var(--line);opacity:1;flex:0 0 auto;cursor:pointer;transition:background .18s ease,opacity .18s ease}.switch:after{content:"";position:absolute;width:24px;height:24px;top:50%;left:1.6px;border-radius:12px 4px 4px 12px;background:var(--text);transform:translateY(-50%);transition:left .18s ease,border-radius .18s ease,background .18s ease}.switch.on{background:var(--color-accent-primary);opacity:1}.switch.on:after{left:calc(100% - 25.6px);border-radius:4px 12px 12px 4px;background:var(--color-text-on-accent)}.themeChoice{display:flex;gap:9.6px;flex-wrap:wrap;align-items:center;margin:0}.themeBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.themeBtn.active{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.wxLayoutBtn{min-height:32px;padding:0 11.2px;border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);cursor:pointer}.wxLayoutBtn[aria-pressed=true]{background:var(--bright);color:var(--on-bright);border-color:var(--bright)}.settingsSelect{min-width:96px;min-height:32px;padding:0 27.2px 0 12px;border-radius:var(--r-inner);border:.32px solid var(--field-line);background:var(--control-2);color:var(--text);font:inherit}.bottomNav{position:sticky;bottom:22.4px;display:flex;gap:22.4px;z-index:100;width:max-content;margin:-65.6px 0 0 22.4px}.navBtn{width:43.2px;height:43.2px;padding:0;border-radius:16px;background:var(--control);border:.32px solid var(--line);color:var(--text)}.navBtn.active{background:var(--color-fill-selected);color:var(--color-text-on-selected)}@media (max-width:900px){.grid{grid-template-columns:1fr}}@media (max-width:620px){#app{padding:0}.shell{border-radius:0}.view{padding:14.4px 14.4px 75.2px}}.card,.panel,.tile{border-radius:var(--r-card)}:host(:fullscreen){overflow:auto;width:100vw;height:100vh}#app :focus{outline:none}#app :focus-visible{outline:2.4px solid var(--primary);outline-offset:2.4px}#app .hcAreaPanel:focus-visible{outline-offset:-2.4px}@media (max-width:620px){.bottomNav{margin-left:14.4px}}.grid>*{min-width:0}.activityRowMeta{color:var(--text);margin-top:1.6px;font-variant-numeric:tabular-nums}:host{--primary:#03A9F4;--secondary:#D0FF00;--font:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;--font-tile:Geist,var(--font);--w-regular:400;--w-medium:500;--w-semibold:600;--w-bold:700;--w-heavy:800;--t-display:52px;--t-title:22px;--t-card-title:18px;--t-value:16px;--t-section:18px;--t-strong:14px;--t-body:12px;--t-caption:12px;--lh-display:1.05;--lh-title:1;--t-wx-temp:64px;--t-wx-range:24px;--t-tile-title:14px;--lh-tile-title:20px;--t-tile-detail:16px;--lh-tile-detail:20px;--inset:10px;--r-card:34px;--r-tile:24px;--r-inner:16px;--r-fine:12px;--tile-min:60px;--chip-size:40px;--glyph-size:34px;--gutter:22px;--grid-gap:16px}@media (max-width:620px){:host{--t-display:46px;--t-title:20px;--t-value:20px;--t-section:16px;--t-strong:15px;--t-body:14px;--t-caption:11px;--lh-display:.92;--lh-title:1.05}}#app{font-family:var(--font);font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4}#app button,#app input,#app select,#app textarea{font-family:inherit}:where(#app) strong,:where(#app) b{font-weight:var(--w-bold)}.settingsTitle{font-size:var(--t-display);font-weight:var(--w-heavy);line-height:var(--lh-display);letter-spacing:-.055em}.activityTitle{font-size:var(--t-card-title);font-weight:var(--w-medium);font-style:italic;line-height:1.1;letter-spacing:-.02em;text-box:trim-both cap alphabetic}.activityRowMeta{font-size:var(--t-value);font-weight:var(--w-regular);line-height:1.15;letter-spacing:-.02em}.sectionLabel{font-size:var(--t-section);font-weight:var(--w-regular);line-height:1.2;letter-spacing:-.01em}.activityRowName,.timeLabel{font-family:var(--font-tile);font-size:var(--t-tile-title);font-weight:var(--w-semibold);line-height:var(--lh-tile-title);letter-spacing:0}.toggleRow strong,.primary,.tab,.themeBtn,.wxLayoutBtn,.toast{font-size:var(--t-strong);font-weight:var(--w-semibold);line-height:1.25;letter-spacing:-.01em}.status,.note,.settingsSelect,.pill{font-size:var(--t-body);font-weight:var(--w-regular);line-height:1.4;letter-spacing:0}.metaTable th,#app code{font-size:var(--t-caption);font-weight:var(--w-regular);line-height:1.35;letter-spacing:0}.hcAreaGallery,.hcAreaPanel{height:340px}@media (max-width:900px){.hcAreaPanel,.hcAreaPanel.active{height:320px}}@media (max-width:900px){.hcAreaGallery{height:auto}.hcAreaPanel,.hcAreaPanel.active{height:auto;min-height:320px}}@media (max-width:620px){.view{padding-left:0;padding-right:0}.settingsHeader{margin-left:16px;margin-right:16px}.tabs.rubberTabs,.sectionLabel{margin-left:16px}.grid{gap:8px}.sectionLabel{margin-bottom:8px}.hcAreaGallery{gap:8px}.hcAreaPanel,.hcAreaPanel.active{flex:0 0 100%;min-width:100%}.card,.hcAreaPanel{padding:16px}.activityRows{gap:8px}.activityRow{padding:10px 12px}}.tabs.rubberTabs .tab{white-space:nowrap}@media (max-width:620px){.tabs.rubberTabs{display:flex;width:max-content;max-width:calc(100% - 32px);overflow-x:auto;scrollbar-width:none}.tabs.rubberTabs::-webkit-scrollbar{display:none}.tabs.rubberTabs .tab{flex:0 0 auto}}.toast{position:fixed;z-index:400;display:flex;align-items:center;gap:12.8px}.toast.withAction{pointer-events:auto}.toastAction{border:0;padding:0;background:none;color:inherit;font:inherit;text-decoration:underline;text-underline-offset:3px;cursor:pointer}.metaTableWrap{overflow-x:auto}.metaTable{width:100%;border-collapse:collapse}.metaTable th{text-align:left;color:var(--muted);padding:12px 16px;border-bottom:.32px solid var(--divider);text-transform:uppercase;letter-spacing:.1em}.metaTable td{padding:12px 16px;border-top:.32px solid var(--divider);vertical-align:middle;color:var(--soft)}.metaTable tbody tr:first-child td{border-top:0}.metaTable :is(th,td):first-child{padding-left:4px}.metaTable :is(th,td):last-child{padding-right:4px}.metaTable .metaSwitchCol{width:1%;white-space:nowrap;text-align:right}.metaTable .metaSwitchCol .switch{display:inline-block;vertical-align:middle}.sheet{position:absolute;left:0;right:0;bottom:0;z-index:31;display:grid;gap:14px;max-height:88%;overflow-y:auto;overscroll-behavior:contain;padding:10px 16px calc(22px + env(safe-area-inset-bottom,0px));border-radius:var(--r-card) var(--r-card) 0 0;background:var(--modal);box-shadow:0 -.5px 0 var(--divider),0 -18px 40px var(--lift);transform:translateY(105%);visibility:hidden;transition:transform .42s cubic-bezier(.2,.9,.25,1.06),visibility 0s linear .42s}.sheet.open{transform:none;visibility:visible;transition:transform .42s cubic-bezier(.2,.9,.25,1.06)}@media (prefers-reduced-motion: reduce){.sheet{transition:none}}.card,.panel,.hcAreaPanel.active{padding:var(--inset)}.hcAreaPanel{border-radius:var(--r-tile);padding:var(--inset)}.hcAreaPanel.active,.activityRow{border-radius:var(--r-tile)}.activityRow{min-height:var(--tile-min);padding:var(--inset);gap:var(--inset)}.activityRow{grid-template-columns:var(--chip-size) minmax(0,1fr)}.activityRows{gap:12px}.activityRowMeta{color:var(--text)}.activityRowMeta{margin-top:0}.navBtn,.back{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border-radius:var(--r-inner)}.segBtn{min-height:38px;padding:0 20px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer}.segBtn:hover{background:var(--hover)}.tabs.rubberTabs{padding:4px;gap:4px;border:0;border-radius:var(--r-inner);background:var(--seg-bg)}.rubberIndicator{top:4px;left:4px;height:calc(100% - 8px);border-radius:var(--r-fine);background:var(--seg-on)}.tabs.rubberTabs .tab{min-height:38px;padding:0 20px}.tabs.rubberTabs .tab.active{color:var(--text)}#app.light .rubberIndicator{box-shadow:0 1px 3px var(--lift)}@media (max-width:620px){:host{--gutter:0px;--grid-gap:8px}}#app{--group-bg:var(--card)}.sheet{--group-bg:var(--tile)}.view{padding-left:var(--gutter);padding-right:var(--gutter)}.grid{gap:var(--grid-gap)}#settingsView .toggleList{display:grid;gap:0;border-radius:var(--r-tile);background:var(--group-bg);overflow:hidden}#settingsView .toggleRow{position:relative;display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:56px;padding:12px 16px;border-radius:0;background:transparent}#settingsView .status{color:var(--muted);margin-top:0;font-variant-numeric:tabular-nums}#settingsView .card{display:grid;gap:12px;padding:0;border:0;border-radius:0;background:none}#settingsView .card+.card{margin-top:36px}#settingsView .note{margin:0 4px 4px}#settingsView .toggleRow>div:first-child{display:grid;gap:2px;min-width:0}@keyframes wxBreathe{50%{transform:scale(1.03)}}@keyframes wxBob{50%{transform:translateY(-1px)}}@keyframes wxDrift{0%,to{transform:translate(-1.5px)}50%{transform:translate(1.5px)}}@keyframes wxFall{0%{transform:translateY(-5px);opacity:0}18%,72%{opacity:1}to{transform:translateY(9px);opacity:0}}@keyframes wxSnow{0%{transform:translateY(-6px);opacity:0}20%,75%{opacity:1}to{transform:translate(1.5px,8px);opacity:0}}@keyframes wxTwinkle{50%{opacity:.35}}.segBtn{transition:background .15s ease,transform .18s cubic-bezier(.34,1.46,.64,1),box-shadow .15s ease,color .15s ease}.segBtn:hover{background:transparent}@media (hover:hover){.segBtn:hover{background:var(--color-state-hover)}}.tabs.rubberTabs .tab.active:hover{background:transparent}.segBtn:active{background:var(--color-state-pressed);transform:scale(.97)}.segBtn:focus-visible{outline:none;box-shadow:inset 0 0 0 2px var(--color-border-focus)}.segBtn:disabled{opacity:.4;cursor:default}', yu = `#app{--hc-on-accent:#f4f3f3;--hc-open-edge:rgba(255,255,255,.1);--hc-hair:inset 0 0 0 .2px var(--line),inset 0 -.2px 0 var(--line);--hc-hair-all:inset 0 0 0 .4px var(--line)}#app.light{--hc-open-edge:#e3e3e3}#homeView .card{padding:var(--inset);border-radius:var(--r-card);box-shadow:var(--hc-hair)}#homeView .card:has(>.activityHeader){padding-top:14px;box-shadow:var(--hc-hair-all)}#homeView .activityHeader{height:28px;padding:0 18px;gap:22px;margin-bottom:10px}#homeView .activityHeader .activityIcon{display:none}:is(#homeView,.tfMoreBackdrop,.tfEditTray,.tfMiniPhone) .activityTitle{font:500 18px/1.2 var(--font-tile);font-style:normal;letter-spacing:-.01em;text-box:none}#homeView .card .activityRows{gap:0}#homeView .card .jointRows{padding:0;background:transparent}#homeView .card .activityRow{min-height:var(--tile-min);padding:var(--inset);gap:12px;border-radius:var(--r-tile);grid-template-columns:var(--chip-size) minmax(0,1fr);background:transparent}#homeView .activityRowName{font:600 14px/20px var(--font-tile)}#homeView .activityRowMeta{font:400 16px/1.15 var(--font);margin:0}#homeView .card .activityRow.tap{cursor:pointer}#homeView .card .activityRow:is(.tap,:has(.tfName)),#homeView .tfATile{transition:background .15s ease,box-shadow .15s ease}#homeView .card .activityRow:is(.tap,:has(.tfName)):hover,#homeView .tfATile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}#homeView .wxWide{gap:16px}#homeView .wxIcon.large{border-radius:28px}#homeView .wxCondition{display:flex;flex-direction:column;justify-content:space-between;gap:10px;padding:10px 16px;border-radius:28px}#homeView .wxCondName{font:400 18px/1.2 var(--font)}@media (max-width:620px){#homeView .wxIcon.large{width:60px;height:60px;border-radius:20px}#homeView .wxDeg{font-size:46px}#homeView .wxRange{font-size:20px}}.tfLabel{grid-column:1/-1}.tfCard{grid-column:span 6;align-self:start;display:flex;flex-direction:column}.tfIcon{display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);flex:none;--mdc-icon-size:var(--glyph-size)}#app.house{--hc-icon:#3a3a3a;--hc-icon-ink:var(--text)}#app.house.light{--hc-icon:#e6e6e6}@media (max-width:620px){#app.house{--grid-gap:16px}#app.house .settingsTitle{font-size:32px}#app.house .tfAreaHead .back{margin-block:calc((32px * .92 - 40px) / 2)}#app.house .tfAreaHead .back svg{width:24px;height:24px}}@container wb-bento (width < 652px){#app.house .wbBento{gap:var(--grid-gap)}#app.house .wbItem[data-size=tile]{width:calc((100% - var(--grid-gap)) / 2)}}#app.house #homeView{overflow-anchor:none}.tfCard .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfCard .activityRow{display:grid;align-items:center}.tfBack{display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;background:transparent;color:var(--text);cursor:pointer}.tfBack .icon{width:34px;height:34px}.tfGraph{display:block;width:100%;flex:1;min-height:80px}.tfGraph text{fill:var(--muted);font:400 11px var(--font)}.tfAction{display:flex;flex-direction:column;gap:14px;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfActionHead{display:flex;align-items:center;gap:12px;min-width:0}.tfAction>.tfActionHead{margin-bottom:auto}.tfActionHead>:is(div,.tfName){min-width:0}.tfAction .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfAction.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfBar{position:relative;height:46px;border-radius:16px;background:var(--tile);overflow:hidden;cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}:is(.tfBar,.tfTilt).held{outline:2px solid var(--primary);outline-offset:-2px}.tfBar i{position:absolute;inset:0 auto 0 0;background:linear-gradient(90deg,#ffc247,#fa0)}.tfBar .was{position:absolute;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--text);opacity:.22}.tfBar:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfBlock{grid-column:span 6;align-self:start;display:grid;align-content:start;min-width:0;container-type:inline-size}.tfActions{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}.tfAction{grid-column:span 2}@container (max-width:289px){.tfActions{grid-template-columns:1fr}.tfAction{grid-column:auto}}.tfBar:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:var(--hc-hair-all);pointer-events:none}.tfAction :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.house #settingsView :is(.rubberTabs:not(.houseTabs),.settingsPane:not(#housePane)){display:none}#app.house #housePane{display:block}#housePane .houseTab{display:none}#housePane .houseTab.active{display:block}#housePane .toggleRow:has(>.switch){flex-direction:row-reverse;justify-content:flex-end}#housePane .toggleRow:has(>.switch)>div:first-child{flex:1}#housePane .toggleRow:has(>.themeChoice,>.settingsSelect){flex-direction:column;align-items:stretch;gap:12px}#housePane .toggleRow>.settingsSelect{width:100%}#housePane .themeChoice[hidden]{display:none}#housePane .houseTab>.card:has(>.tfSetGroup){gap:24px}#housePane .tfSetGroup{display:grid;gap:8px}#housePane .tfSetGroup>.sectionLabel{margin:0 16px}#housePane{container:housepane/inline-size}#housePane .tfLightCards{display:none}@container housepane (width < 720px){#housePane .houseTab .metaTableWrap{display:none}#housePane .tfLightCards{display:grid;gap:8px}}#housePane .wxLayoutBtn:disabled{opacity:.4;cursor:default}.tfTableNote{margin:0 0 12px;padding:10px 14px;border-radius:var(--r-inner);background:color-mix(in srgb,var(--primary) 14%,transparent);color:var(--text)}.tfLightTable td{white-space:nowrap}.tfLightTable td strong{font:600 14px/20px var(--font-tile)}.tfLightTable .settingsSelect{min-width:150px}.tfLightTable .settingsSelect:disabled{opacity:.4}.tfDacPad{min-width:0}.tfDacPad>dual-controller-v3{display:block}.tfBento{grid-column:1/-1;min-width:0}.tfIcon.art{background-size:cover;background-position:center}.tfBar.ct{background:linear-gradient(90deg,#ff9e45,#ffd3a3 32%,#fff7ee 55%,#d7e7ff)}.tfBar.hue{background:linear-gradient(90deg,red,#ff0 17%,#0f0 33%,#0ff,#00f 67%,#f0f 83%,red)}.tfBar b{position:absolute;top:8px;bottom:8px;width:4px;margin-left:-2px;border-radius:2px;background:#fff;box-shadow:0 0 0 .5px #0006,0 1px 3px #00000040}.tfAction:not(.on) .tfBar:is(.ct,.hue){opacity:.45}.tfBar:is(.pos,.vol) i{background:var(--primary)}:is(.tfStep,.tfSeg,.tfBlocks,.tfTilt,.tfChips){font-family:var(--font-tile)}.tfStep{display:flex;align-items:center;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfStep button{flex:0 1 46px;min-width:32px;height:46px;min-height:0;padding:0;border:0;border-radius:16px;background:transparent;color:var(--text);cursor:pointer}.tfStep svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}.tfStep output{flex:1 0 auto;white-space:nowrap;text-align:center;font:500 20px/1.2 var(--font-tile);font-variant-numeric:tabular-nums}.tfSeg{display:flex;gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}.tfSeg button{flex:1;min-width:0;min-height:0;padding:0 6px;border:0;border-radius:12px;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSeg button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfSeg button:not([aria-pressed]){color:var(--text)}.tfSeg button:disabled{opacity:.4;cursor:default}.tfSeg svg{display:block;width:22px;height:22px;margin:auto;fill:currentColor}#housePane .themeChoice,.tfBoardMenu .tfHeightTabs,.wb .wbSegments{gap:4px;padding:4px;border:0;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all)}#housePane .themeChoice{display:flex;flex-wrap:nowrap;width:100%}#housePane .themeChoice>button{flex:1 1 0;overflow:hidden;text-overflow:ellipsis}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button){height:38px;min-width:0;min-height:0;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile)!important;white-space:nowrap;cursor:pointer}:is(#housePane .themeChoice :is(.wxLayoutBtn,.themeBtn),.tfBoardMenu .tfHeightTabs button,.wb .wbSegments button):hover:not(:disabled):not([aria-pressed=true]):not([aria-checked=true]):not(.active){background:transparent;color:var(--text)}:is(#housePane .themeChoice :is(.wxLayoutBtn[aria-pressed=true],.themeBtn.active),.tfBoardMenu .tfHeightTabs button[aria-checked=true],.wb .wbSegments button[aria-pressed=true]){background:var(--bright);color:var(--on-bright)}.tfChips{display:flex;flex-wrap:wrap;gap:8px}.tfChips button{height:40px;min-height:0;padding:0 14px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer;box-shadow:var(--hc-hair-all)}.tfChips button[aria-pressed=true]{background:var(--bright);color:var(--on-bright)}.tfCard .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfCardGraph{height:120px;padding:0 var(--inset)}.tfCardGraph .tfGraph{height:100%}.tfAction.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfName{flex:1;display:block;min-width:0;min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfName>span{display:block}.tfTitleBtn{min-height:0;padding:0;border:0;border-radius:0;background:none;color:inherit;text-align:left;cursor:pointer}.tfAreas{grid-column:1/-1;min-width:0}.tfAreaPanel .hcAreaPanelTop>div{min-width:0}.tfATags{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:4px;margin-left:auto;min-width:0}.tfATags .sourceTag{display:block;margin:0;max-width:100%;padding:6px 12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfBlocks{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:4px;height:46px;padding:4px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:none;-webkit-user-select:none;user-select:none;container:blocks/inline-size}.tfBlocks>span{position:relative;display:grid;place-items:center;overflow:hidden;border-radius:4px;transition:background .12s}.tfBlocks>span:first-child{border-radius:12px 4px 4px 12px}.tfBlocks>span:nth-child(4){border-radius:4px 12px 12px 4px}.tfBlocks:not(.fine)>span:hover{background:color-mix(in srgb,var(--text) 7%,transparent)}.tfBlocks i{position:absolute;inset:0 auto 0 0;border-radius:inherit;background:var(--primary)}.tfBlocks b{position:relative;color:var(--text);font:600 14px/1 var(--font-tile);transition:opacity .15s}.tfBlocks b small{font:inherit}@container blocks (width < 164px){.tfBlocks b small{display:none}}.tfBlocks b.lit{color:#fff}.tfBlocks.fine b{opacity:0}.tfTip{position:absolute;bottom:calc(100% + 8px);z-index:2;transform:translate(-50%);padding:3px 8px;border-radius:7px;background:var(--text);color:var(--card);font:700 12px/16px var(--font-tile);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .12s}.tfBlocks.fine .tfTip{opacity:1}.tfTilt{position:relative;display:flex;align-items:center;justify-content:space-between;height:46px;border-radius:16px;background:var(--tile);box-shadow:var(--hc-hair-all);cursor:pointer;touch-action:pan-y;-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}.tfTilt i{position:absolute;top:4px;bottom:4px;left:4px;border-radius:12px;background:var(--primary)}.tfTilt span{position:relative;padding:0 16px;color:var(--text);font:600 14px/1 var(--font-tile)}.tfTilt span.lit{color:#fff}:is(.tfBlocks,.tfTilt):focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfCoverBtns svg{fill:none}.tfCoverArt{align-self:center;width:min(294px,100%,max(150px,100vh - 520px));aspect-ratio:1;border-radius:24px;touch-action:none;-webkit-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.tfCoverArt.x{cursor:ew-resize}.tfCoverArt.y{cursor:ns-resize}.tfCoverArt:focus-visible{outline:none;box-shadow:0 0 0 3px var(--primary)}.tfCoverArt svg{display:block;width:100%;height:100%}.tfSide{grid-column:1/-1;align-self:start;min-width:0}.tfSideLabel{display:flex;align-items:baseline;justify-content:space-between;gap:16px;margin-right:22.4px}#homeView .tfSide.tfSums .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(150px,calc(50% - 10px)),1fr))}#homeView .tfSide.tfFavs .card .activityRows{grid-template-columns:repeat(auto-fill,minmax(min(240px,calc(50% - 10px)),1fr))}#homeView .tfSum .tfIcon{background:var(--sum,var(--hc-icon));color:var(--sum-ink,var(--hc-icon-ink))}#app.house .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}#app.house .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-l);--g1:var(--g1-l);--g2:var(--g2-l)}#app.house .tfSum[data-summary=climate] .tfIcon svg path{fill:url(#hcClimateGrad)}.tfGradDefs{position:absolute;width:0;height:0;overflow:hidden;pointer-events:none}.tfSide :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfSide .activityRow>div{min-width:0}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}:is(.tfCard,.tfMoreList,.tfMoreActions) .tfPlug.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMoreList{display:flex;flex-direction:column;gap:14px}.tfMoreGroupName{margin:0 0 4px 10px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}.tfMoreTiles.single{grid-template-columns:1fr}.tfMoreList .activityRow{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile);transition:background .15s ease}.tfMoreList .activityRow:hover{background:var(--tile)}.tfMoreList .activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreList .tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreList .tfPick{grid-template-columns:var(--chip-size) minmax(0,1fr) auto}.tfMoreList :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfStar{display:grid;place-items:center;width:34px;height:34px;min-height:0;padding:0;border:0;background:none;color:var(--muted);cursor:pointer}.tfStar[aria-pressed=true]{color:#fa0}.tfStar svg{width:24px;height:24px}.tfMoreHead .activityTitle{flex:1;min-width:0}.tfMoreBackdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073}.tfMoreBackdrop,.tfMore,.tfMoreSideInner,.tfMoreSideBody{overscroll-behavior:contain}.tfMoreBackdrop[hidden]{display:none}.tfMoreBackdrop.tfMoreUnder{z-index:179;pointer-events:none}.tfMore{flex:none;width:440px;max-width:100%;min-height:0;overflow:auto;display:flex;flex-direction:column;gap:14px;padding:20px;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreHead{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:34px}.tfMoreState{font:500 28px/1.15 var(--font-tile);letter-spacing:-.01em}.tfMoreSub{margin-top:3px;color:var(--muted);font:500 13px/18px var(--font)}.tfMoreState.live{color:var(--primary)}.tfMoreRows{display:flex;flex-direction:column}.tfMoreRow{display:flex;justify-content:space-between;gap:16px;padding:10px 0;box-shadow:inset 0 -.4px 0 var(--line);font:400 14px/20px var(--font)}.tfMoreRow span:first-child{color:var(--muted)}.tfMoreNote{color:var(--muted);font:400 12px/16px var(--font)}@media (max-width:1199px) and (min-width:901px){.tfCard{grid-column:span 6}.tfBlock{grid-column:span 12}}@media (max-width:900px){.tfCard,.tfBlock{grid-column:auto}}.tfMoreTileHead .tfName{display:grid;flex:1;min-width:0;cursor:default}.tfMoreTileHead :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreTileHead .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfMoreTileHead div.tfIcon{cursor:default}.tfMoreTileHead.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreTileHead.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}.tfMorePages{display:grid;grid-auto-flow:column;grid-auto-columns:100%;align-items:start;gap:20px;flex:none;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:contain;scroll-snap-type:x mandatory;scrollbar-width:none;transition:height .25s cubic-bezier(.2,.7,.3,1)}@media (prefers-reduced-motion:reduce){.tfMorePages{transition:none}}.tfMorePages::-webkit-scrollbar{display:none}.tfMorePage{display:flex;flex-direction:column;gap:14px;min-width:0;scroll-snap-align:start;scroll-snap-stop:always}.tfMoreSpace{flex:none;display:flex;flex-direction:column;justify-content:space-between;gap:12px;height:224px;padding:18px;border-radius:16px;background:var(--tile);overflow:hidden}.tfMoreSpace.tfMoreFill{justify-content:center;align-items:center;height:auto;padding:0;background:none;border-radius:0}.tfMoreSpace.tfMoreFill>.tfCoverArt{width:100%;height:auto;max-width:none;align-self:center}.tfMoreSpace.tfMoreFill>.tfDacPad{width:100%;height:100%}.tfMoreBig{display:flex;align-items:baseline;min-width:0;font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfMoreBig.live{color:var(--primary)}.tfMoreNum{overflow:hidden;text-overflow:ellipsis}.tfMoreUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfMoreFacts{display:flex;flex:1;flex-direction:column;justify-content:space-evenly;min-height:0}.tfMoreFact{display:flex;justify-content:space-between;gap:16px;font:400 14px/20px var(--font)}.tfMoreFact span:first-child{color:var(--muted)}.tfMoreFact span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreGraph{display:flex;flex:none;flex-direction:column;gap:6px}.tfMoreGraph .tfMoreGroupName{margin:0}.tfMoreGraph .tfGraph.tfDay{width:100%}.tfMoreDots{display:flex;flex:none;justify-content:center;gap:4px;margin-top:-4px}.tfMoreDots button{display:grid;place-items:center;width:24px;height:24px;min-height:0;padding:0;border:0;background:none;cursor:pointer}.tfMoreDots button:before{content:"";width:8px;height:8px;border-radius:50%;background:var(--muted);opacity:.45;transition:opacity .15s ease,background .15s ease}.tfMoreDots button[aria-selected=true]:before{background:var(--text);opacity:1}.tfMoreDots.tfMorePageIcons{gap:3px;align-self:center;margin-top:0;padding:3px;border-radius:19px;background:var(--tile)}.tfMoreDots.tfMorePageIcons button{width:48px;height:32px;border-radius:16px;color:var(--muted);transition:background .15s ease,color .15s ease}.tfMoreDots.tfMorePageIcons button:before{display:none}.tfMoreDots.tfMorePageIcons button svg{width:20px;height:20px;fill:currentColor}.tfMoreDots.tfMorePageIcons button[aria-selected=true]{background:var(--text);color:var(--card)}.tfMoreDots.tfMorePageIcons button:not([aria-selected=true]):hover{color:var(--text)}#homeView .grid>.tfDashTiles>.tfAction.tfHeadOnly,#homeView .grid .tfAction.tfHeadOnly{align-self:start}.tfMoreLink{margin-top:auto}.tfMoreLink svg{transform:none!important}.tfMorePage .tfMoreRows{flex:none}#app.showDensity #homeView :is(.card,.tfAction){position:relative;outline:1px dashed color-mix(in srgb,var(--primary) 70%,transparent);outline-offset:-1px}#app.showDensity #homeView :is(.card,.tfAction):after{content:attr(data-h);position:absolute;top:6px;right:12px;z-index:5;padding:2px 8px;border-radius:99px;background:var(--primary);color:#fff;font:600 11px/16px var(--font);pointer-events:none}.densityBadge{position:fixed;left:50%;bottom:calc(16px + env(safe-area-inset-bottom,0px));z-index:80;transform:translate(-50%);display:flex;align-items:center;gap:10px;padding:8px 16px;border-radius:99px;background:var(--bright);color:var(--on-bright);font:600 13px/18px var(--font);box-shadow:0 6px 20px #00000040;pointer-events:none;white-space:nowrap}.densityBadge[hidden]{display:none}.densityBadge b{font-variant-numeric:tabular-nums}.densityBadge small{font-weight:400;opacity:.75}#homeView .card.tfCard{container-type:inline-size}#homeView .card.tfCard .activityRows{grid-template-columns:repeat(2,minmax(0,1fr));gap:0}@container (max-width:279px){#homeView .card .activityRows{grid-template-columns:1fr}}.tfMorePair{position:relative;display:flex;align-items:stretch;max-width:100%;max-height:calc(100vh - 32px);max-height:calc(100dvh - 32px)}#app[data-more=sheet] .tfMoreBackdrop{place-items:end center;padding:0}#app[data-more=sheet] .tfMorePair{max-height:85vh;animation:tfSheetIn .28s cubic-bezier(.2,.7,.3,1)}#app[data-more=sheet] .tfMorePair.still{animation:none}#app[data-more=sheet] .tfMore{width:min(640px,100vw)}#app[data-more=sheet] :is(.tfMore,.tfMoreSideInner){border-radius:var(--r-card) var(--r-card) 0 0}@keyframes tfSheetIn{0%{transform:translateY(100%)}}.tfDetailsBtn{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;width:100%;height:46px;min-height:0;padding:0 12px 0 16px;border:0;border-radius:16px;background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);cursor:pointer}.tfDetailsBtn svg{width:20px;height:20px;transition:transform .2s ease}.tfDetailsBtn[aria-expanded=true] svg{transform:rotate(180deg)}.tfMoreSide{position:absolute;top:0;bottom:0;left:100%;width:0;overflow:hidden;visibility:hidden;transition:width .28s cubic-bezier(.2,.7,.3,1),visibility 0s linear .28s}.tfMorePair.details .tfMoreSide{width:312px;visibility:visible;transition:width .28s cubic-bezier(.2,.7,.3,1)}.tfMoreSideInner{box-sizing:border-box;display:flex;flex-direction:column;gap:14px;width:300px;height:100%;margin-left:12px;padding:20px;overflow:auto;border-radius:var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all)}.tfMoreSideInner .tfMoreHead{justify-content:flex-start}.tfMorePair.over .tfMoreSide{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;width:auto;transform:translate(24px);opacity:0;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease,visibility 0s linear .25s}.tfMorePair.over.details .tfMoreSide{width:auto;transform:none;opacity:1;transition:transform .25s cubic-bezier(.2,.7,.3,1),opacity .2s ease}.tfMorePair.over .tfMoreSideInner{width:100%;margin:0}@media (max-width:620px){.tfMoreSideInner{border-radius:var(--r-card) var(--r-card) 0 0}}@media (prefers-reduced-motion:reduce){.tfMorePair,.tfMoreSide{animation:none!important;transition:none!important}}#homeView .hcAreaPanel.tfAreaPanel{padding:18px 20px 10px}.tfAreaPanel .tfATiles{margin-inline:-10px}.tfAreaPanel .hcAreaPanelTop{justify-content:flex-start;gap:14px;padding:0}.tfAreaPanel .panelExpanded{justify-content:flex-start;gap:16px}.tfAreaPanel .icon{width:22px;height:22px}.tfATitle{display:flex;flex-direction:column;align-items:flex-start;min-width:0}#app .tfAName{max-width:100%;min-height:0;padding:0;border:0;border-radius:6px;background:none;color:var(--text);font:700 24px/1.2 var(--font-tile);letter-spacing:-.01em;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:pointer}.tfAreaIcon{flex:none;border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}button.tfAreaIcon{cursor:pointer}.tfAreaGlyph{display:grid;place-items:center}.tfAreaHead{grid-column:1/-1;margin-bottom:0}#app.tfAreaOpen:not(.tfWeatherOpen) #homeView .grid>.tfBento{display:none}#app.tfWeatherOpen #homeView .grid>.tfBento .wbBento{margin:0;padding:0;justify-content:flex-start}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{display:grid;grid-template-columns:repeat(var(--peg-n),var(--peg-w));grid-auto-rows:60px;grid-auto-flow:row dense;align-items:stretch;gap:16px;max-width:none}#app.tfWeatherOpen .tfBento.tfPegs .wbItem{width:auto;min-height:0;align-self:stretch;display:flex;flex-direction:column}#app.tfWeatherOpen .tfBento.tfPegs .wbItem>*{flex:1;min-height:0}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=wide]{grid-column:span 2;grid-row:span 5}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=double]{grid-column:span 2;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-size=tile]{grid-column:span 1;grid-row:span 4}#app.tfWeatherOpen .tfBento.tfPegs .wbCard.wbSquare{aspect-ratio:auto}#app.tfWeatherOpen .tfBento.tfPegs .wbWeather .wbNow{margin-bottom:auto}#app.tfWeatherOpen .tfBento.tfPegs :is(.wbStripScroll,.wbBars .wbDayBars,.wbBars.wbTabbed .wbDayBars){min-height:0}.tfABig{display:flex;flex-direction:column;align-items:flex-start;gap:4px;margin-top:auto;min-height:0;height:auto;padding:0;border:0;border-radius:8px;background:none;color:var(--text);text-align:start;cursor:pointer}.tfABigMain{font:500 64px/1 var(--font-tile);letter-spacing:-.03em;white-space:nowrap}.tfABigMain.long{font-size:40px}.tfABigUnit{margin-inline-start:6px;font-size:24px;letter-spacing:0}.tfABigSub{max-width:100%;overflow:hidden;color:var(--muted);font:400 16px/1.2 var(--font);white-space:nowrap;text-overflow:ellipsis}.tfATiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));min-height:calc(2 * var(--tile-min));align-content:end}.tfABig{max-width:100%}.panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 16px)}#app.tfBoard .tfAreas[data-rows="5"] .tfACMain{position:absolute;left:10px;right:10px;bottom:170.3px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .tfACMain{position:absolute;left:10px;right:10px;bottom:164.1px;max-width:none;text-align:center}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded:not(:has(.tfATiles)) .tfABig{margin-bottom:calc(2 * var(--tile-min) + 12px)}.tfATile{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;min-height:var(--tile-min);padding:var(--inset);border-radius:var(--r-tile)}.tfATile>:is(div,.tfName):last-child{min-width:0}.tfATile .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfATile.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfATile :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACollapsed{flex-direction:column;justify-content:space-between;padding:18px 0 10px;container-type:inline-size}.tfACTop{display:flex;flex-direction:column;align-items:center;gap:6px;max-width:calc(100% - 20px)}.tfACMain{max-width:calc(100% - 20px);font:200 32px/1.2 var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACName{max-width:100%;font:600 16px/17.5px var(--font);letter-spacing:-.1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfACTiles{display:grid;grid-template-columns:repeat(2,60px);min-height:60px}.tfACTiles:has(>:nth-child(3)){margin-top:-60px}.tfACTile{display:grid;place-items:center;width:60px;height:60px}.tfACTile .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfACTile .tfIcon[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfACTile .tfIcon.alert{background:#e53935;color:#fff}@container (max-width:119px){.tfACTiles{grid-template-columns:60px}.tfACTile:nth-child(n+3){display:none}.tfACTiles:has(>:nth-child(2)){margin-top:-60px}}.tfMore.wide{width:min(1040px,100vw - 32px);padding:40px;gap:28px;background:var(--bg)}#app[data-more=sheet] .tfMore.wide{width:min(1040px,100vw)}.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{gap:28px;padding:40px;background:var(--bg)}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:-20px -20px 0 0}#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead) .activityTitle{font-size:24px}@media (max-width:620px){#app :is(.tfMore.wide>.tfMoreHead,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreHead){margin:0}}@media (min-width:621px){#app:not([data-more=sheet]) .tfMoreBackdrop.wide{place-items:start center}}.tfMoreNowRow{display:flex;align-items:center;justify-content:space-between;gap:16px}.tfMore.wide .tfMoreGroup{display:flex;flex-direction:column;gap:14px}.tfMore.wide .tfMoreGroupName{margin:0;color:var(--text);font:400 18px/1.2 var(--font);letter-spacing:-.01em}.tfMoreActions{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(260px,100%),1fr));gap:20px}.tfMoreActions .tfAction{grid-column:auto}.tfMoreActions>.activityRow{align-self:start;display:grid;grid-auto-flow:column;grid-template-columns:auto minmax(0,1fr);align-items:center;align-content:start;gap:12px;min-width:0;padding:18px;border-radius:28px;background:var(--card);box-shadow:var(--hc-hair)}.tfMoreActions>.activityRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfMoreActions>.tfPlug .tfIcon{border:0;padding:0;cursor:pointer}.tfMoreActions>.activityRow :is(.activityRowName,.activityRowMeta){display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfMoreActions>.activityRow.alert .activityRowMeta{color:var(--danger)}@media (max-width:620px){.tfMore.wide,.tfMorePair.over .tfMore.wide+.tfMoreSide .tfMoreSideInner{width:100%;padding:20px 16px;gap:20px}}#app.tfDash #homeView{max-width:none;container:tfdash/inline-size}#app.tfDash #homeView .grid{display:flex;flex-wrap:wrap;align-items:flex-start;align-content:flex-start}#app.tfDash .tfDashTitle{order:1!important;flex:0 0 100%;margin:0}#app.tfDash .tfDashBarRow{order:2!important;flex:0 0 100%;display:flex;min-width:0}#app.tfDash .tfDash-wx{order:var(--o,3)!important}#app.tfDash .tfAreas{order:var(--o,4)!important}#app.tfDash .tfDash-favs{order:var(--o,5)!important}#app.tfDash .tfDash-act{order:var(--o,6)!important}#app.tfDash .tfDash-energy{order:var(--o,7)!important}#app.tfDash .tfDash-avg{order:var(--o,8)!important}#app.tfDash :is(.tfDash-aq,.tfDash-pollen,.tfDash-radar,.tfDash-hourly,.tfDash-sun,.tfDash-moon,.tfDash-uv,.tfDash-humidity,.tfDash-pressure,.tfDash-wind,.tfDash-visibility){order:var(--o,8)!important}#app.tfDash .tfDashTiles>*{order:var(--o,9)}#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex:1 1 460px;max-width:520px;min-width:0}@container tfdash (width < 640px){#app.tfDash :is(.tfDash-wx,.tfDash-favs,.tfDash-act,.tfDash-energy,.tfDash-avg){flex-basis:100%;max-width:none}}#app .tfNotAdded{display:none!important}#app.tfDash .tfAreas{flex:none;width:min(var(--areas-w,1131px),100%)}@media (min-width:901px){#app.tfDash .tfAreaGallery{overflow-x:auto;scrollbar-width:none}#app.tfDash .tfAreaGallery::-webkit-scrollbar{display:none}#app.tfDash .tfAreaPanel.active{flex:1 0 409px}#app.tfDash .tfAreaPanel:not(.active){flex:0 0 128px}}#app.tfDash .tfDash-bar{flex:none;max-width:100%}#app.tfDash #homeView .card.tfDash-bar{container-type:normal}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(var(--bar-cols,6),auto)}#homeView .card.tfDash-bar .activityRow{min-width:200px}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:visible;text-overflow:clip}@container tfdash (width < 640px){#app.tfDash .tfDash-bar{width:100%}#homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#homeView .card.tfDash-bar .activityRow{min-width:0}#app.tfDash .tfDash-bar :is(.activityRowName,.activityRowMeta){overflow:hidden;text-overflow:ellipsis}#app.tfDash .tfDashTitle{padding:0 16px;box-sizing:border-box}}#app.tfDash .tfDashCard:not(.tfDash-bar){container-type:inline-size}#homeView .card.tfDash-act .activityRows{grid-template-columns:minmax(0,1fr)}#homeView .card.tfDash-act>.activityRows{flex:none;margin-top:auto;max-height:300px;overflow-y:auto;overscroll-behavior:contain;scroll-snap-type:y mandatory;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:color-mix(in srgb,var(--text) 25%,transparent) transparent}#homeView .card.tfDash-act>.activityRows>.activityRow{scroll-snap-align:start}#homeView .card.tfDash-energy .activityRows{grid-template-columns:repeat(auto-fit,minmax(140px,1fr))}.tfDashCard :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfDashCard .activityRow>*{min-width:0}.tfDashNone{margin:0;padding:var(--inset) 18px;color:var(--muted)}.tfDashBento{display:flex;flex-direction:column;min-width:0}#app:not(.tfDash) .tfDashBento{display:none}.tfDashBento:not(:has(.wbItem:not([hidden]))){display:none}.tfDashBento .wb{flex:1;display:flex;flex-direction:column;min-width:0}.tfDashBento .wbBento{flex:1;max-width:none;margin:0;padding:0;display:flex;align-items:stretch}#app .tfDashBento .wbItem{width:100%;align-self:stretch;display:flex;flex-direction:column}#app.house .tfDashBento .wbItem[data-size]{width:100%}#app .tfDashBento .wbItem>.wbCard{flex:1;min-height:0}.tfDash-wx .wbCondition{display:none}#app.tfDash .tfDashTiles{display:contents}.tfDashTiles>:is(.tfAction,.tfDac){flex:none;align-self:stretch;width:calc((100% - var(--grid-gap,8px)) / 2);min-width:0;grid-column:auto}#app.tfBoard #homeView .grid{display:block;position:relative}#app.tfBoard .tfBoardItem{position:absolute;z-index:1;margin:0;max-width:none;min-height:0;box-sizing:border-box}#app.tfEditing.tfBoardReady .tfBoardItem{transition:left .25s cubic-bezier(.2,.7,.3,1),top .25s cubic-bezier(.2,.7,.3,1),height .25s cubic-bezier(.2,.7,.3,1)}#app.tfBoard .tfBoardHidden{display:none!important}#app.tfBoard .tfDashBento .wbWeather .wbNow{margin-bottom:auto}#app.tfBoard .tfDashBento .wbCard.wbSquare{aspect-ratio:auto}#app.tfBoard .tfAreas .hcAreaGallery,#app.tfBoard .tfAreas .hcAreaPanel{height:100%;min-height:0}.tfBoardCells{position:absolute;top:0;left:0;z-index:0;pointer-events:none;color:var(--text)}.tfBoardCells svg{display:block;overflow:visible}.tfBoardCells pattern circle{fill:currentColor;fill-opacity:.16}.tfBoardCells .tfGridCross{fill:none;stroke:currentColor;stroke-opacity:.45;stroke-width:1.5;stroke-linecap:round}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfDashBento){outline:1.5px solid var(--primary);outline-offset:-1.5px;border-radius:var(--r-card)}#app.tfEditing .tfBoardItem:is(.tfAction,.tfDac){border-radius:28px}#app.tfEditing .tfAreas{border-radius:24px}#app.tfEditing .tfDashBento .wbCard{outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.tfEditing .tfBoardItem:not(.tfDashTitle,.tfDashBarRow){cursor:grab;overflow:visible;-webkit-user-select:none;user-select:none;touch-action:none}.tfEditChips{position:absolute;inset:-8px -8px auto -8px;z-index:5;height:40px;display:flex;justify-content:flex-end;pointer-events:none}.tfEditGrip{position:absolute;top:-10px;left:50%;display:grid;place-items:center;width:80px;height:40px;border-radius:var(--r-inner);background:var(--text);color:var(--card);transform:translate(-50%);pointer-events:auto;cursor:grab}.tfEditGrip svg{width:24px;height:24px;fill:currentColor}.tfEditChip{display:grid;place-items:center;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:50%;background:var(--text);color:var(--card);pointer-events:auto;cursor:pointer}.tfEditChip svg{width:18px;height:18px;fill:currentColor}.tfEditChip:focus-visible{outline:2px solid var(--primary);outline-offset:2px}#app.tfEditing .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}.tfBoardLand{position:absolute;z-index:1;box-sizing:border-box;border:1.5px dashed var(--primary);border-radius:28px;background:color-mix(in srgb,var(--primary) 8%,transparent);pointer-events:none;transition:left .2s,top .2s,width .2s,height .2s}.tfBoardMenu{position:absolute;z-index:30;display:grid;gap:2px;min-width:200px;padding:6px;border-radius:var(--r-tile);background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfBoardMenu button{display:flex;align-items:center;min-height:40px;padding:0 12px;border:0;border-radius:var(--r-inner);background:transparent;color:var(--text);font:500 14px/20px var(--font);text-align:start;cursor:pointer}.tfBoardMenu button:hover:not(:disabled),.tfBoardMenu button:focus-visible{background:var(--tile);outline:none}.tfBoardMenu button:disabled{opacity:.4;cursor:default}.tfHeight{display:grid;gap:6px;padding:6px 6px 8px}.tfHeightLabel{padding:0 6px;color:var(--muted);font:500 12px/16px var(--font)}.tfHeightTabs{display:grid;grid-template-columns:repeat(5,1fr)}.tfBoardMenu .tfHeightTabs button{justify-content:center}.tfBoardMenu .tfHeightTabs button:disabled{opacity:.35}.tfWidth{padding-top:0}.tfWidth .tfHeightTabs{grid-template-columns:repeat(3,auto)}.tfBoardMenu .tfWidth .tfHeightTabs button{white-space:nowrap}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows{grid-auto-rows:var(--fill-row,60px);margin-top:0}#app.tfBoard .tfBoardItem:is(.tfDash-favs,.tfDash-act)>.activityRows>.activityRow{min-height:0;height:var(--fill-row,60px);box-sizing:border-box}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]{padding:0;gap:0}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityHeader,#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.tfDashGraph{display:none}#app.tfBoard .tfBoardItem.tfDashCard[data-rows="1"]>.activityRows{margin:0;flex:1}#app.tfBoard .tfBoardItem.tfAction[data-rows="1"]{padding:10px;border-radius:24px}.tfRoomTile{cursor:pointer}.tfRoomTile .tfRoomIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomInline,.tfRoomSub{display:none}.tfRoomReading{display:flex;flex-direction:column;gap:4px;min-width:0}.tfRoomBig{overflow:hidden;color:var(--text);font:500 46px/46px var(--font-tile);letter-spacing:-.92px;white-space:nowrap;text-overflow:ellipsis}.tfRoomSub{overflow:hidden;color:var(--muted);font:400 16px/19px var(--font);white-space:nowrap;text-overflow:ellipsis}.tfRoomDevices{display:flex;gap:12px}.tfRoomDevices .tfIcon{border:0;padding:0;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer}.tfRoomDevices .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}#app.tfBoard .tfRoomTile[data-rows="1"] .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-rows="1"] :is(.tfRoomReading,.tfRoomDevices),#app.tfBoard .tfRoomTile[data-rows="2"] .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfActionHead .activityRowMeta{display:none}#app.tfBoard .tfRoomTile:is([data-rows="4"],[data-rows="5"]) .tfRoomSub{display:block}#app.tfBoard .tfRoomTile[data-rows="4"] .tfRoomBig{font-size:52px;line-height:52px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-rows="5"] .tfRoomBig{font-size:64px;line-height:64px;letter-spacing:-1.92px}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="3"],[data-rows="4"],[data-rows="5"]) .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content)}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile[data-cols="1"][data-rows="3"]:has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfRoomTile[data-cols="1"]:is([data-rows="4"],[data-rows="5"]) .tfRoomDevices{min-height:calc(2 * var(--chip-size) + 12px);align-content:start}.tfRoomHeads{display:none;gap:12px 16px}.tfRoomDev{display:flex;align-items:center;gap:12px;min-width:0;padding:0;border:0;background:none;color:inherit;font:inherit;text-align:left;cursor:pointer}.tfRoomDev .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfRoomDev .tfIcon.on[data-light]{background:var(--light-soft);color:var(--light-ink)}.tfRoomDevName{display:flex;flex-direction:column;min-width:0}.tfRoomDevName>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]){flex-direction:row;align-items:center;gap:12px}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"])>.tfActionHead{flex:1;margin-bottom:0}#app.tfBoard .tfRoomTile[data-rows="1"]:not([data-cols="1"]) .tfRoomDevices{display:flex}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomDevices{display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-rows="1"]) .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfBoard .tfRoomTile:not([data-cols="1"]):not([data-cols="2"]):not([data-rows="1"]) .tfRoomHeads{grid-template-columns:repeat(4,minmax(0,1fr))}#app.tfBoard .tfRoomTile[data-cols="2"][data-rows="2"] .tfRoomDev:nth-child(n+3){display:none}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomInline{display:inline}#app.tfBoard .tfRoomTile:not([data-cols="1"]):is([data-rows="2"],[data-cols="2"][data-rows="3"]):has(.tfRoomDevices) .tfRoomReading{display:none}#app.tfBoard .tfDashBento[data-rows="1"] .wbCard{padding:10px;border-radius:24px}#app.tfBoard .tfDashBento[data-rows="1"] .wbVisual{display:none}#app.tfBoard .tfDash-wx[data-rows="1"] .wbNow{margin:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbWx.wbS90{width:40px;height:40px;border-radius:12px}#app.tfBoard .tfDashBento[data-rows] :is(.wb,.wbBento,.wbItem){height:100%;min-height:0}#app.tfBoard .tfDashBento[data-rows] .wbCard{height:100%;min-height:0;box-sizing:border-box;aspect-ratio:auto}#app.tfBoard .tfDash-wx[data-rows="1"] .wbDeg{font-size:20px;letter-spacing:0;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbPlace{font-size:13px;line-height:18px}#app.tfBoard .tfDash-wx[data-rows="1"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="1"] .wbUnit{font-size:14px;line-height:22px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbWx.wbS90{width:100px;height:100px;border-radius:31px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbDeg{font-size:80px;line-height:80px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbUnit{font-size:30px;line-height:38px}#app.tfBoard .tfDash-wx[data-rows="2"] .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbWeather{flex-direction:row;align-items:center;gap:16px}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNow{flex:none}#app.tfBoard .tfDash-wx[data-rows="2"]:not([data-narrow]) .wbNextHours{display:flex;flex:1 1 0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbWeather{justify-content:center;padding-top:0;padding-bottom:0}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) :is(.wbNow,.wbSummary){display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbColumns{display:flex;flex:none;height:185px}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsDay{display:none}#app.tfBoard .tfDash-wx[data-rows="3"]:not([data-narrow]) .wbAsNow{display:inline}#app.tfBoard .tfDash-wx[data-narrow] .wbCard.wbWeather{gap:12px;padding:18px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbWx.wbS90{width:64px;height:64px;border-radius:20px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbDeg{font-size:46px;line-height:46px;letter-spacing:-.92px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbUnit{font-size:20px;line-height:26px}#app.tfBoard .tfDash-wx[data-narrow]:not([data-rows="1"]) .wbTempBlock{gap:0}#app.tfBoard .tfDash-wx[data-narrow] .wbHalves{display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="3"] .wbNextHours{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow] .wbHour:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;flex:none;height:auto;margin-top:auto}#app.tfBoard .tfDash-wx[data-narrow]:is([data-rows="4"],[data-rows="5"]) .wbColumn:nth-child(n+4){display:none}#app.tfBoard .tfDash-wx[data-narrow][data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbHalves{display:none}#app.tfBoard .tfDash-wx:not([data-narrow]):is([data-rows="4"],[data-rows="5"]) .wbColumns{display:flex;margin-top:auto}#app.tfBoard .tfDash-wx:not([data-narrow])[data-rows="5"] .wbSummary{display:block}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="4"]) .wbSummary{display:none}#app.tfBoard .tfDash-wx:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) :is(.wbColumns,.wbHalves){display:none}#app.tfBoard .tfDash-wx[data-rows="4"] .wbColumns{flex:1 1 0;height:auto;min-height:0;margin-top:0}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn{justify-content:flex-start;gap:8px;padding:12px 0 16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbColumn .wbWx{width:40px;height:40px;border-radius:16px}#app.tfBoard .tfDash-wx:is([data-rows="4"],[data-narrow][data-rows="5"]) .wbTemps{gap:4px}#app.tfBoard .tfDash-wx[data-rows="4"] .wbHalves>:nth-child(n+5){display:none}#app.tfBoard .tfDash-energy[data-rows="2"] .tfDashGraph{display:none}#app.tfBoard .tfDash-energy:is([data-rows="1"],[data-rows="2"],[data-rows="3"]) .activityRows{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(0,1fr)}#app.tfBoard .tfDash-energy[data-rows="3"] .tfDashGraph{min-height:0}#app.tfBoard .tfDashBento[data-rows="2"] .wbBaseRows{display:none}#app.tfBoard .tfDashBento[data-rows="2"] :is(.wbRadar,.wbCompareBars,.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfDashBento[data-rows="3"] :is(.wbCompareWords,.wbCompareTemps){display:none}#app.tfBoard .tfAreas[data-rows="1"] .hcAreaPanel.tfAreaPanel{padding:10px}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded{display:grid;grid-template-columns:40px minmax(0,1fr);gap:0 12px;align-content:center}#app.tfBoard .tfAreas[data-rows="1"] :is(.panelExpanded>.hcAreaPanelTop,.tfACTop){display:contents}#app.tfBoard .tfAreas[data-rows="1"] .panelExpanded .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] .tfATitle .tfAName{font-size:14px;line-height:20px;height:auto}#app.tfBoard .tfAreas[data-rows="1"] .tfABig{margin:0;flex-direction:row}#app.tfBoard .tfAreas[data-rows="1"] .tfABigMain{font-size:14px;line-height:18px;letter-spacing:0}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigUnit){font-size:14px}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfABigSub,.tfATiles,.tfACTiles,.sourceTag){display:none}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed{display:grid;grid-template-columns:40px minmax(0,1fr);column-gap:12px;align-content:center;padding:0}#app.tfBoard .tfAreas[data-rows="1"] .tfACollapsed .tfAreaIcon{grid-row:span 2}#app.tfBoard .tfAreas[data-rows="1"] :is(.tfACName,.tfACMain){margin:0;font-size:14px;line-height:18px;text-align:start;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"]) .tfABig{display:none}#app.tfBoard .tfAreas[data-rows="4"] .tfABig{flex:none;margin-top:auto;margin-bottom:auto}#app.tfBoard .tfAreas[data-rows="4"] .tfATiles{margin-top:0}#app.tfBoard .tfAreas[data-rows="4"] .tfABigMain{font-size:52px}#app.tfBoard .tfAreas[data-rows="4"] .panelExpanded{row-gap:12px}#app.tfBoard .tfAreas:is([data-rows="2"],[data-rows="3"],[data-rows="4"]) .tfATiles{margin-top:auto}#app.tfBoard .tfAreas[data-rows="2"] .tfATile:nth-child(n+3),#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfATile:nth-child(n+5){display:none}#app.tfBoard .tfAreas[data-rows="2"] .tfACTiles{display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTile:nth-child(n+3){display:none}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACollapsed{justify-content:flex-start;gap:10px}#app.tfBoard .tfAreas:is([data-rows="3"],[data-rows="4"]) .tfACTiles{margin-top:auto}.tfEditTray{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px));right:0;bottom:0;z-index:160;display:flex;width:608px;max-width:calc(100vw - 56px);transform:translate(100%);transition:transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfEditTray.open{transform:none}.tfEditTray.open.tucked{transform:translate(100%)}.tfEditTray.open :is(.tfTrayInner,.tfTrayTuck){pointer-events:auto}.tfTrayTuck{position:absolute;top:20px;left:-52px;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);min-height:0;padding:0;border:0;border-radius:var(--r-inner);background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;--mdc-icon-size:22px}.tfTrayTuck svg{width:22px;height:22px}.tfEditTray:not(.open) .tfTrayTuck{visibility:hidden}.tfTrayInner{flex:1;min-width:0;display:flex;flex-direction:column;gap:20px;overflow:auto;overscroll-behavior:contain;padding:20px;border-radius:var(--r-card) 0 0 var(--r-card);background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d}.tfTrayHead{display:flex;align-items:center;justify-content:space-between;gap:12px}.tfTraySection{display:flex;flex-direction:column;gap:8px}.tfTraySection .sectionLabel{margin:0}.tfTrayNote{margin:0;color:var(--muted);font:400 14px/1.3 var(--font)}.tfTrayCards{display:flex;flex-direction:column;gap:6px}.tfTrayCard{display:flex;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 14px 0 10px;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none}.tfTrayList{display:flex;flex-direction:column;margin:0;padding:0;list-style:none}.tfTrayFav{display:grid;grid-template-columns:22px var(--chip-size) minmax(0,1fr) 36px 36px;align-items:center;gap:8px;min-height:var(--tile-min);padding:0 4px 0 6px;border-radius:var(--r-tile)}.tfTrayFav.off{cursor:grab;touch-action:none}.tfTrayFav.off :is(.tfIcon,.tfTrayName){opacity:.5}.tfTrayFav.moving{background:var(--tile)}.tfTrayGrip{display:grid;place-items:center;color:var(--muted);cursor:grab;touch-action:none}.tfTrayGrip svg{width:20px;height:20px;fill:currentColor}:is(.tfTrayFav,.tfTrayPickItem) .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.tfTrayName{display:flex;flex-direction:column;min-width:0}.tfTrayName>*{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfTrayBtn{display:grid;place-items:center;width:36px;height:36px;min-height:0;padding:0;border:0;border-radius:12px;background:none;color:var(--text);cursor:pointer}.tfTrayBtn svg{width:20px;height:20px;fill:currentColor}.tfTrayBtn:hover{background:var(--tile)}.tfTrayAdd{align-self:flex-start}.tfTrayPick{display:flex;flex-direction:column;gap:6px}.tfTrayPick[hidden]{display:none}.tfTrayPickItem{display:grid;grid-template-columns:var(--chip-size) minmax(0,1fr);align-items:center;gap:12px;width:100%;min-height:var(--tile-min);padding:0 10px;border:0;border-radius:var(--r-tile);background:none;color:var(--text);text-align:start;cursor:pointer}.tfTrayPickItem:hover{background:var(--tile)}.tfTraySuggest{margin-top:8px}.tfMiniPhone{position:fixed;top:calc(var(--header-height,0px) + env(safe-area-inset-top,0px) + 20px);bottom:20px;left:max(16px,calc(100vw - min(608px,100vw - 56px) - 380px));z-index:160;display:flex;flex-direction:column;gap:8px;width:324px;padding:12px;border-radius:44px;background:var(--card);box-shadow:var(--hc-hair-all),0 0 40px #0000004d;opacity:0;transform:translate(16px);transition:opacity .2s ease,transform .25s cubic-bezier(.2,.7,.3,1);pointer-events:none}.tfMiniPhone.open{opacity:1;transform:none;pointer-events:auto}.tfPhoneHead{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:8px 4px 0 12px}.tfMiniPhone>.tfTrayNote{padding:0 12px 4px}.tfLinkBtn{min-height:0;padding:0;border:0;background:none;color:var(--primary);font:inherit;text-decoration:underline;cursor:pointer}.tfPhoneScreen{flex:1;min-height:0;overflow:auto;overscroll-behavior:contain;scrollbar-width:thin;border-radius:34px;background:var(--bg);box-shadow:var(--hc-hair-all);padding:14px 0 24px}.tfPhoneList{display:flex;flex-wrap:wrap;gap:12.8px}.tfPhoneTitle{width:100%;padding:0 12.8px;color:var(--text);font:800 25.6px/1 var(--font);letter-spacing:-.055em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tfPhoneBlock{display:flex;align-items:flex-start;gap:10px;width:100%;min-height:0;padding:12px;border:0;border-radius:27px;background:var(--card);box-shadow:var(--hc-hair);color:var(--text);font:600 14px/20px var(--font-tile);text-align:start;cursor:grab;touch-action:none;-webkit-user-select:none;user-select:none}.tfPhoneBlock.tile{width:calc((100% - 12.8px)/2);border-radius:22.4px}.tfPhoneBlock.fixed{align-items:center;color:var(--muted);cursor:default}.tfPhoneBlock.moving{box-shadow:var(--hc-hair),0 0 0 2px var(--primary);cursor:grabbing}.tfPhoneBlock:focus-visible{outline:2px solid var(--primary);outline-offset:2px}.tfPhoneBlock .tfIcon{width:32px;height:32px;border-radius:13px;background:var(--hc-icon);color:var(--hc-icon-ink);--mdc-icon-size:22px}.tfPhoneName{min-width:0;padding-top:6px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tfTrayGhost{position:fixed;top:0;left:0;z-index:200;margin:0;pointer-events:none;opacity:.9;background:var(--tile);border-radius:var(--r-tile);box-shadow:0 8px 24px #00000059}.tfFavDrop{position:fixed;z-index:200;width:4px;border-radius:2px;background:var(--primary);pointer-events:none}.tfFavHides{position:absolute;top:0;right:0;bottom:0;left:0;z-index:4;pointer-events:none}.tfFavHide{position:absolute;display:grid;place-items:center;width:32px;height:32px;min-height:0;padding:0;border:0;border-radius:12px;background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all);cursor:pointer;pointer-events:auto}.tfFavHide svg{width:18px;height:18px;fill:currentColor}.tfDash-energy .tfDashGraph{flex:1;min-height:80px;height:auto;margin:var(--inset) 0 0}.tfDash-energy.graphAbove>.activityHeader{order:-2}.tfDash-energy.graphAbove>.tfDashGraph{order:-1;margin:0 0 var(--inset)}#homeView .card.tfDash-energy .activityRow.picked{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.toast.tfToast{top:auto;right:auto;max-width:calc(100vw - 32px);transform:translate(-50%,6px)}.toast.tfToast.show{transform:translate(-50%)}.tfDash-act .activityRow.alert .activityRowName{color:var(--danger)}.activityRow .tfIcon.alert{background:#e53935;color:#fff}.tfGraph.tfDay{flex:none;height:62px;min-height:0}.tfGraph.tfDay text{font-size:10px}#housePane .rubberIndicator{background:var(--bright)}#housePane .tab.active{color:var(--on-bright)}#app.house :is(.settingsSelect,.addInput){border:1px solid var(--muted)}#app.house{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%23d9d9d9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house.light{--select-chev:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 6l4.5 4.5L12.5 6' fill='none' stroke='%2326221e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}#app.house select.settingsSelect{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 44px 0 16px;background-image:var(--select-chev);background-repeat:no-repeat;background-position:right 16px center;background-size:16px 16px}#app.house .addInput::placeholder{color:var(--muted);opacity:1}#app .activityRows :focus-visible{outline-offset:-2.4px}#app.house :is(button,a,input,select,[tabindex]){scroll-margin-bottom:96px}@media (max-width:620px){#app.house :is(.activityRowName,.activityRowMeta){white-space:normal;text-overflow:clip;overflow:visible;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}}.tfTooltip{position:fixed;z-index:500;max-width:min(320px,calc(100vw - 16px));padding:6px 10px;border-radius:10px;background:var(--bright);color:var(--on-bright);font:500 14px/18px var(--font);overflow-wrap:break-word;box-shadow:0 4px 16px #00000040}.tfTooltip[hidden]{display:none}.tfDashGraph rect{transform-box:fill-box;transform-origin:50% 100%}#app.house:is([data-names=cut],[data-names=scroll]) :is(.activityRowName,.activityRowMeta){white-space:nowrap;overflow:hidden;text-overflow:ellipsis;overflow-wrap:normal}#app.house[data-names=wrap] :is(.activityRowName,.activityRowMeta){display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:normal;overflow:hidden;text-overflow:ellipsis;overflow-wrap:break-word;-webkit-hyphens:auto;hyphens:auto}#app.tfBoard .tfDash-favs>.activityRows{min-height:0;overflow-y:auto;scrollbar-width:thin}#app.house :is(.tfIcon,.tfAreaIcon,.tfRoomIcon){--chip-hi:.0375;background-image:linear-gradient(180deg,#ffffff08,#fff0)!important;box-shadow:inset 0 1px rgba(255,255,255,var(--chip-hi)),inset 0 -1px color-mix(in srgb,currentColor 3%,transparent),inset 0 -3px 6px color-mix(in srgb,currentColor 3.5%,transparent)}#app.house :is(.on[data-light] .tfIcon,.tfIcon.on[data-light],.tfACTile .tfIcon[data-light],.on[data-tone=alarm] .tfIcon,.tfIcon[data-light]){--chip-hi:.1375}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-xl]{grid-row:span 5}#app.tfBoard .tfDashBento:not([data-rows="5"]) .wbItem[data-xl] .wbCallouts{display:none}#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]) .wbZone{flex:1;height:auto;background:none;box-shadow:none;padding:0;align-items:flex-start}#app.tfBoard .tfDashBento[data-rows="3"] .wbItem[data-xl] .wbCallouts{display:flex;margin-top:0}#app.tfBoard .tfDashBento[data-rows="1"] :is(.wbZone,.wbCallouts){display:none}#app .wbZoneM{display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM){display:flex;align-items:flex-start;justify-content:flex-start}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZone:has(>.wbZoneM)>:not(.wbZoneM){display:none}:is(#app.tfBoard .tfDashBento:is([data-rows="2"],[data-rows="3"]),#app.tfWeatherOpen .tfBento.tfPhonePegs) .wbZoneM{display:flex}#app.tfWeatherOpen .tfBento.tfPegs .wbBento{grid-auto-flow:row}#app.tfWeatherOpen .tfBento.tfPegs .wbItem[data-break]{grid-column-start:1}#app.house.tfWeatherOpen #homeView{max-width:none}#app.house #settingsView .toggleList{border-radius:var(--r-card);padding-block:4px}#app.house #settingsView .toggleRow{padding-left:18px;padding-right:18px}#app.house #settingsView .toggleRow:not([hidden])~.toggleRow:before{left:18px}#app.house .view{margin-left:0}#app.house #settingsView .toggleList>.tfCardTitle{display:flex;align-items:center;min-height:28px;padding:14px 18px 2px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfLightView{display:flex;padding:4px 0 14px}#housePane.tfLightCardsOn .houseTab .metaTableWrap,#housePane.tfLightCardsOn .houseTab .tfTableNote{display:none}#housePane.tfLightCardsOn .tfLightCards{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:8px}#housePane:not(.tfLightCardsOn) .tfLightCards{display:none}@container housepane (width < 720px){#housePane:not(.tfLightCardsOn) .houseTab .metaTableWrap{display:none}#housePane:not(.tfLightCardsOn) .tfLightCards{display:grid}}#app.house.light .tfSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .tfSum[data-summary=climate]{--g0:var(--g0-d);--g1:var(--g1-d);--g2:var(--g2-d)}#app.house .tfTrayInner{gap:32px}#app.house .tfTraySection{gap:12px}#app.house{--font:Geist,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-family:var(--font)}#app.house #housePane .toggleRow>:is(.themeChoice,.settingsSelect){align-self:flex-start;width:auto;max-width:100%}#app.house #housePane .themeChoice{display:inline-flex}#app.house #housePane .themeChoice>button{flex:0 1 auto;min-width:0;padding:0 16px;overflow:hidden;text-overflow:ellipsis}#app.house #housePane .toggleRow{min-width:0}#app.house #housePane .toggleRow>.settingsSelect{min-width:200px}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments){display:inline-flex;width:auto;align-self:flex-start}#app.house :is(.tfBoardMenu .tfHeightTabs,.wb .wbSegments) button{flex:0 0 auto;padding:0 16px}@media (max-width:620px){#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid{display:flex!important;flex-wrap:wrap;align-items:flex-start;gap:var(--grid-gap);height:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid .tfBoardItem{position:relative!important;left:auto!important;top:auto!important}#app.house.tfDash:not(.tfEditing):not(.tfOverview) #homeView>.grid>.tfBoardItem:not(.tfDash-favs){height:auto!important}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummary{flex:none;margin-top:0;container-type:normal}#app.house.tfDash:not(.tfEditing) .tfDash-wx .wbSummaryText{position:static}}#app.house :is(#housePane .themeChoice,.wb .wbSegments,.tfBoardMenu .tfHeightTabs){height:32px;padding:3px;gap:3px;box-sizing:border-box}#app.house :is(#housePane .themeChoice>button,.wb .wbSegments button,.tfBoardMenu .tfHeightTabs button){height:26px!important;padding:0 12px;border-radius:13px!important;font:600 12px/16px var(--font-tile)!important}.tfPlantProblem{flex:1 1 0;min-height:184px;flex-direction:column}.tfGraph.tfPlantGraph{flex:1 1 0;width:calc(100% - 20px);height:auto;min-height:160px;margin:0 10px}.tfGraph .tfGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:3 4;vector-effect:non-scaling-stroke}.tfGraph .tfGuideWord{font-size:11px}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){box-shadow:inset 0 0 0 1px var(--line)}.tfDashTitle .tfGreeting{display:block;margin-bottom:6px;font:500 20px/1.2 var(--font-tile);letter-spacing:0;color:var(--muted)}#app.tfOverview.tfDash #homeView .tfSum:not([data-summary=alerts]) .tfIcon{background:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar{width:100%;max-width:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:flex;justify-content:space-between}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRow{flex:none}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows>.activityRow{min-width:0}@media (max-width:620px){#app.tfOverview.tfDash #homeView .card.tfDash-bar .activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}}#app.tfOverview.tfDash #homeView .tfDash-favs{padding:10px;border-radius:var(--r-card)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityHeader{display:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:60px;row-gap:25px;max-height:100%;margin:0;overflow-y:auto;scrollbar-width:none}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows::-webkit-scrollbar{display:none}.hcFadeList.hcMore{-webkit-mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent);mask-image:linear-gradient(to bottom,#000 calc(100% - 40px),transparent)}#app.tfOverview.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{height:60px;min-height:0;padding:10px;box-sizing:border-box}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCard.wbWeather{gap:0;padding:18px}#app.tfOverview.tfDash #homeView .tfDash-wx .wbCondition,#app.tfOverview.tfDash #homeView .tfDash-wx .wbNextHours,#app.tfOverview.tfDash #homeView .tfDash-wx .wbHalves{display:none!important}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummary{flex:none;height:auto;margin:18px 0 0;container:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbSummaryText{position:static;-webkit-line-clamp:1}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumns{display:flex!important;height:159px;margin-top:auto;border-radius:var(--r-tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn{padding:8px 0;background:none}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn:hover{background:var(--tile)}#app.tfOverview.tfDash #homeView .tfDash-wx .wbColumn .wbWx.wbS60{width:60px;height:60px;border-radius:20px}#app.tfOverview.tfDash #homeView .tfRoomTile{padding:18px;gap:0;border-radius:28px}#app.tfOverview.tfDash #homeView .tfRoomTile>.tfActionHead{margin-bottom:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfActionHead .activityRowMeta{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-top:35px;gap:0}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomBig{font:400 48px/64px var(--font-tile);letter-spacing:-1.92px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomSub{display:block;margin-top:-7px;font:400 16px/19px var(--font)}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:flex;justify-content:space-between;min-height:0;margin-top:auto;padding-top:16px}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomHeads{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{justify-content:flex-start;gap:18.67px}#app.light.tfOverview.tfDash #homeView .tfRoomTile .tfRoomIcon{background-color:#acacac;color:#fff}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar{width:max-content;max-width:100%}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows{justify-content:flex-start}#app.tfOverview.hcSumsFit.tfDash #homeView .card.tfDash-bar .activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),auto)}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs{height:auto!important;padding:10px;container-type:normal}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:flex;justify-content:space-between;grid-auto-rows:auto;row-gap:0;max-height:none}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{flex:none;width:240px;height:60px}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{display:grid;grid-template-columns:repeat(var(--bar-cols,3),minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows>.activityRow{width:auto;min-width:0}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs{width:max-content!important;max-width:100%}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows{justify-content:flex-start}#app.tfOverview.hcFavStrip.hcSumsFit.tfDash #homeView .tfDash-favs>.activityRows.hcBarRows{grid-template-columns:repeat(var(--bar-cols,3),240px)}@media (max-width:620px){#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}#app.tfOverview.hcFavStrip.tfDash #homeView .tfDash-favs>.activityRows>.activityRow{width:auto;min-width:0}}#app.tfOverview.tfBoard #homeView .hcFloor{position:absolute;z-index:1;display:flex;align-items:center;height:24px;margin:0;box-sizing:border-box}#app.tfOverview.tfBoard #homeView .hcFloorBox{position:absolute;z-index:0;border-radius:40px;background:color-mix(in srgb,var(--text) 5%,transparent);box-sizing:border-box;pointer-events:none}#app.tfOverview #homeView .hcFloorName{margin:0;font:500 16px/24px var(--font);color:var(--title,var(--text));white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app.tfOverview.tfDash #homeView .tfRoomTile{overflow:hidden}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomBig{font-size:calc(48px * var(--hc-k,1));line-height:calc(64px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaL .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomReading{margin-top:calc(14px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomBig{font-size:calc(40px * var(--hc-k,1));line-height:calc(52px * var(--hc-k,1));letter-spacing:-1.6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaM .tfRoomSub{margin-top:-6px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS{padding:12px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{margin-top:calc(8px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomBig{font-size:calc(32px * var(--hc-k,1));line-height:calc(40px * var(--hc-k,1));letter-spacing:-1.28px}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomSub{display:none}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS) .tfRoomDevices,#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaM,.hcAreaS):not(:has(.tfRoomDevices :nth-child(4))) .tfRoomDevices{display:flex;flex-wrap:wrap;justify-content:flex-start;gap:0 8px;height:var(--chip-size);overflow:hidden;padding-top:0;margin-top:auto}#app.tfOverview.tfDash #homeView .tfRoomTile.hcAreaS .tfRoomReading{flex:none}#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomReading{margin-bottom:12px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomBig{font-size:calc(64px * var(--hc-k,1));line-height:calc(80px * var(--hc-k,1));letter-spacing:-2.56px}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomReading{margin-top:calc(35px * var(--hc-k,1))}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomSub{display:block}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomDevices{display:none!important}#app.tfOverview.tfDash #homeView .tfRoomTile:is(.hcAreaS,.hcAreaM,.hcAreaL).hcAreaBig .tfRoomHeads{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:auto}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{cursor:default;outline:0}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem:not(.tfDashTitle,.tfDashBarRow,.tfRoomTile){cursor:grab;-webkit-user-select:none;user-select:none;touch-action:none;outline:1.5px solid var(--primary);outline-offset:-1.5px}#app.hcHomeEditing.tfOverview #homeView .tfBoardItem.tfRoomTile{border-radius:28px}#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:left .34s cubic-bezier(.2,1.35,.4,1),top .34s cubic-bezier(.2,1.35,.4,1)}@media (prefers-reduced-motion:reduce){#app.hcHomeEditing.tfBoardReady #homeView .tfBoardItem{transition:none}}#app.hcHomeEditing #homeView .tfBoardItem.tfDragging{z-index:20;transition:none!important;scale:1.02;cursor:grabbing;filter:drop-shadow(0 10px 30px rgba(0,0,0,.35))}@media (max-width:620px){#app.tfOverview.tfDash #homeView .tfRoomTile .tfRoomDevices{display:grid;grid-template-columns:repeat(2,max-content);gap:12px;justify-content:start}}.tfEditTray .tfTrayInner{scrollbar-width:none}.tfEditTray .tfTrayInner::-webkit-scrollbar{display:none}.hcHeChoiceLine{flex-wrap:wrap;gap:8px 12px}.hcHeChoiceLine>.hcHeChoice{margin-left:auto}.hcHeChoice.themeChoice{display:inline-flex;flex-wrap:nowrap;height:32px;padding:3px;gap:3px;box-sizing:border-box;border-radius:16px;background:var(--control-2,var(--hc-icon))}#app .hcHeChoice>button{height:26px!important;min-height:0;padding:0 12px;border:0;border-radius:13px!important;background:none;color:var(--text);font:600 12px/16px var(--font-tile)!important;white-space:nowrap}#app .hcHeChoice>button[aria-pressed=true]{background:var(--card);color:var(--text);box-shadow:var(--hc-hair-all)}.hcHeBody{display:flex;flex-direction:column;gap:12px}.hcHeBody>.tfTrayNote{margin:0 0 8px}.hcHeLabel{display:flex;align-items:center;gap:4px}.hcHeLine{display:flex;align-items:center;gap:4px;min-height:44px}.hcHeLine>.activityRowName{min-width:0}.hcHeLine>.switch{margin-left:auto}.hcHeLink{display:inline;min-height:0;padding:0;border:0;background:none;font:inherit;color:var(--primary);text-decoration:underline;cursor:pointer}.hcHeList{display:flex;flex-direction:column;gap:2px;margin:0;padding:0;list-style:none}.hcHeRow{display:grid;grid-template-columns:36px var(--chip-size) minmax(0,1fr) auto;align-items:center;gap:10px;min-height:var(--tile-min);padding:0 4px;border-radius:var(--r-tile)}.hcHeRow .tfIcon{background:var(--hc-icon);color:var(--hc-icon-ink)}.hcHeRow.moving{background:var(--card);box-shadow:var(--hc-hair-all)}.hcHeGrip{color:var(--muted);cursor:grab;touch-action:none}.hcHeSum .tfIcon{color:var(--sum-ink,var(--hc-icon-ink))}#app .hcHeRow.hcHeSum .tfIcon{background-color:transparent}#app.house .hcHeSum{--sum-ink:var(--sum-d,var(--hc-icon-ink))}#app.house.light .hcHeSum{--sum-ink:var(--sum-l,var(--hc-icon-ink))}.hcInfoBtn{display:grid;place-items:center;flex:none;width:28px;height:28px;min-height:0;padding:0;border:0;border-radius:var(--r-fine,12px);background:none;color:var(--muted);cursor:pointer}.hcInfoBtn svg{width:18px;height:18px;fill:currentColor}.hcInfoBtn:hover,.hcInfoBtn[aria-expanded=true]{background:var(--tile);color:var(--text)}.hcInfoPop{position:fixed;z-index:320;width:280px;max-width:calc(100vw - 16px);display:flex;flex-direction:column;gap:8px;padding:16px;border-radius:var(--r-inner);box-shadow:var(--hc-hair-all),0 8px 28px #0000002e}.hcInfoPop[hidden]{display:none}.hcInfoTitle{font:600 14px/20px var(--font-tile);color:var(--text)}.hcInfoText{font:400 14px/1.45 var(--font);color:var(--text)}.hcInfoText p{margin:0}.hcInfoText ul{margin:6px 0 0;padding-left:18px}.hcInfoMore{align-self:flex-start;font:600 14px/20px var(--font-tile);color:var(--primary);text-decoration:underline}#app .tfTrayAdd.hcAddBtn{display:inline-flex;align-items:center;gap:6px;height:32px;min-height:0;margin:10px 0 12px;padding:0 16px 0 12px;border:0;border-radius:16px!important;background:#03a9f4;color:#fff;font:600 14px/20px var(--font-tile);text-decoration:none!important}#app .tfTrayAdd.hcAddBtn svg{width:18px;height:18px;flex:none;fill:currentColor}#app .tfTrayAdd.hcAddBtn:hover{background:#0398dc}#app .tfTrayAdd.hcAddBtn[aria-expanded=true]{background:#0288d1}.tfEditTray:not(.hcHomeTray) .tfTraySection:not(.hcFirst){padding-top:20px;border-top:1px solid var(--line)}#app.house .tfEditTray:not(.hcHomeTray) .tfTrayInner{gap:20px}.hcHeRule{width:100%;height:0;margin:8px 0;border:0;border-top:1px solid var(--line)}.tfEditTray .hcTrayTabs{display:flex;align-self:stretch;margin:0 0 4px;flex:none}.tfEditTray .hcTrayTabs .tab{flex:1 1 0;min-height:36px;padding:0 10px;font:600 14px/20px var(--font-tile)}.tfEditTray .hcTrayTabs .rubberIndicator{background:var(--text)}.tfEditTray .hcTrayTabs .tab.active{color:var(--card)}.tfEditTray .tfTraySection[hidden]{display:none!important}.hcHeTabBody{display:flex;flex-direction:column;gap:8px}.hcHomeTray .hcTrayTabs{margin:0 0 8px}#homeView .grid.tfStack{grid-auto-rows:1px;row-gap:0}#homeView .grid.tfStack>*{align-self:start}.tfTrayPop{position:fixed;z-index:260;right:calc(min(608px,100vw - 56px) + 12px);width:300px;max-width:calc(100vw - 80px);display:grid;gap:2px;padding:10px!important;background:var(--card);box-shadow:var(--hc-hair-all),0 10px 30px #00000059}.tfTrayPop[hidden]{display:none}.tfTrayPopTitle{padding:4px 8px 8px;font:500 18px/1.2 var(--font-tile);letter-spacing:-.01em;color:var(--text)}.tfTrayPopRow{display:flex;align-items:center;gap:12px;min-height:var(--tile-min);padding:0 8px}.tfTrayPopRow .tfIcon{background-color:var(--hc-icon)}.tfTrayPopName{flex:1;min-width:0;font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#app .tfMoreBackdrop:not(.wide) .tfMore{height:min(600px,85dvh)}#app .tfMoreBackdrop:not(.wide) .tfMorePages{flex:1 1 auto;min-height:0;height:auto!important;align-items:stretch}#app .tfMoreBackdrop:not(.wide) .tfMorePage{overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none}#app .tfMoreBackdrop:not(.wide) .tfMorePage[aria-label=Control]>:first-child{margin-top:auto}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace{flex:1 1 auto;height:auto;min-height:224px}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill{min-height:0;container-type:size}#app .tfMoreBackdrop:not(.wide) .tfMoreSpace.tfMoreFill>.tfCoverArt{width:min(100%,100cqh);height:auto}.tfMorePage[aria-label=Control]>:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink)+:not(.tfMoreSpace,.tfPlantProblem,.tfMoreLink){margin-top:14px}.tfMoreSwitch{display:flex;align-items:center;justify-content:center;min-height:0;padding:0;border-radius:0;background:none}.tfMoreSwitch .tfIcon{width:min(240px,100%);height:min(240px,100%);aspect-ratio:1;min-height:0;border:0;padding:0;border-radius:40%;background:var(--hc-icon);color:var(--hc-icon-ink);cursor:pointer;--mdc-icon-size:204px}.tfMoreSwitch.on[data-light] .tfIcon{background:var(--light-soft);color:var(--light-ink)}.tfMoreSwitch.on[data-tone=alarm] .tfIcon{background:#e53935;color:#fff}@media (max-width:620px){#app .tfMoreBackdrop{place-items:end center;padding:0 16px max(16px,env(safe-area-inset-bottom,0px))}#app .tfMoreBackdrop .tfMorePair{width:100%;max-height:85dvh}#app .tfMoreBackdrop :is(.tfMore,.tfMoreSideInner){width:100%;border-radius:34px;box-shadow:inset 0 0 0 1px var(--line),0 10px 30px #00000047}#app .tfMoreBackdrop .tfMore{padding-top:10px;outline:none}#app .tfMoreBackdrop .tfMore:before{content:"";display:block;position:sticky;top:10px;z-index:2;flex:none;width:36px;height:5px;margin:0 auto;border-radius:3px;background:var(--line)}#app .tfMoreBackdrop .tfMore [data-more-close]{display:none}}`, xu = `.wb{container:wb-bento/inline-size;display:block;color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased}.wbBento{box-sizing:content-box;display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:center;gap:16px;max-width:1056px;margin:0 auto;padding:10px}.wbItem{container:wb-card/inline-size;min-width:0}.wbItem[hidden]{display:none!important}.wbItem[data-size=wide]{width:520px;align-self:stretch;display:flex;flex-direction:column}.wbItem[data-size=wide]>*{flex:1}.wbItem[data-size=wide]>.wbWeather{flex:none}.wbItem[data-size=tile]{width:252px}.wbItem[data-size=double]{width:520px}@container wb-bento (width < 652px){.wbBento{gap:10px;padding:10px}.wbItem:is([data-size=wide],[data-size=double]){width:100%}.wbItem[data-size=tile]{width:calc(50% - 5px)}}.wbCard{position:relative;display:block;box-sizing:border-box;border:0;border-radius:var(--r-card);background:var(--card);color:var(--text);font-family:var(--font);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line);transition:all .3s ease-out}.wbCard.wbHc{display:flex;flex-direction:column;gap:10px;padding:14px var(--inset) var(--inset);box-shadow:var(--hc-hair-all)}.wbHeader{display:flex;align-items:center;justify-content:space-between;gap:12px;min-height:28px;padding:0 18px}.wbTitle{margin:0;font:500 18px/1.2 var(--font-tile);letter-spacing:-.18px;color:var(--text);white-space:nowrap}.wbIcon{display:block;flex:none;width:var(--wb-icon,24px);height:var(--wb-icon,24px);fill:currentColor;pointer-events:none}.wbTile{display:flex;align-items:center;gap:12px;min-width:0;min-height:var(--tile-min);box-sizing:border-box;padding:var(--inset);border:0;border-radius:var(--r-tile);background:transparent;color:inherit;font:inherit;text-align:start}.wb button.wbTile{border-radius:var(--r-tile)!important;cursor:pointer;transition:background-color .15s ease,box-shadow .15s ease}.wb button.wbTile:hover{background:var(--tile);box-shadow:inset 0 0 0 .2px var(--line),inset 0 -.4px 0 var(--line)}.wb button.wbTile:focus-visible{outline:2px solid var(--primary)!important;outline-offset:2px!important}.wbChip{flex:none;display:grid;place-items:center;width:var(--chip-size);height:var(--chip-size);border-radius:var(--r-inner);background:var(--primary);color:var(--hc-on-accent);--wb-icon:24px}.wbChip.wbPlain{background:var(--icon-bg);color:var(--text)}.wbText{display:flex;flex-direction:column;justify-content:center;flex:1;min-width:0;align-self:stretch;overflow:hidden;white-space:nowrap}.wbName{font:600 14px/20px var(--font-tile);overflow:hidden;text-overflow:ellipsis}.wbSub{font:400 16px/1.15 var(--font);letter-spacing:-.32px;overflow:hidden;text-overflow:ellipsis}.wbCard.wbSquare{display:flex;flex-direction:column;gap:14px;aspect-ratio:1;--wb-k:1;box-sizing:border-box;padding:18px;border-radius:28px;overflow:hidden}.wbHead{display:flex;align-items:flex-start;gap:12px;min-width:0}.wbSquare .wbChip{width:40px;height:40px;border-radius:16px}.wbSquare .wbName{font-size:14px;line-height:1.4}.wbSquare .wbSub{font-size:16px}.wbVisual{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;justify-content:center;gap:10px}.wbCard.wbSquare.wbDouble{aspect-ratio:520/252;--wb-k:.4846;border-radius:34px}.wbVisual>svg{display:block;width:100%;height:100%;min-height:0}.wbVisual svg text{font-family:var(--font-tile)}.wbValue{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbValue .wbNum{font:500 clamp(30px,calc(17.5cqw * var(--wb-k,1)),44px)/1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums}.wbValue .wbUnitV{font:300 clamp(13px,calc(7.1cqw * var(--wb-k,1)),18px)/1.25 var(--font-tile);color:var(--muted)}.wbScaleNote{display:flex;justify-content:space-between;color:var(--muted);font:400 clamp(10px,calc(4.4cqw * var(--wb-k,1)),12px)/1.3 var(--font)}.wbCard.wbSquare.wbHasBackdrop{position:relative;isolation:isolate}.wbBackdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:0;overflow:hidden;border-radius:inherit;pointer-events:none}.wbBackdrop~*{position:relative;z-index:1}.wbGraph{position:relative;display:flex;flex-direction:column;justify-content:center;height:120px;box-sizing:border-box;padding:12px 16px;border-radius:10px 10px 18px 18px;background:var(--tile);overflow:hidden;--wb-scale-edge:var(--tile)}.wbChart{display:block;width:100%;height:100%;overflow:visible}.wbChart .wbLine{fill:none;stroke:var(--primary);stroke-width:1;stroke-linecap:round;stroke-linejoin:round}.wbChart .wbArea{fill:var(--primary);fill-opacity:.14}.wbChart .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}.wbChart .wbBar{fill:var(--muted);opacity:.45}.wbChart .wbBar.wbNowBar{fill:var(--primary);opacity:1}.wbChart .wbGuide{stroke:var(--muted);stroke-width:1;stroke-dasharray:2 4}.wbChart text{fill:var(--muted);font:400 11px var(--font)}.wbGraphNote{display:flex;justify-content:space-between;gap:8px;color:var(--muted);font:400 12px/1.4 var(--font)}.wbDayChart{flex:1;min-height:0;display:grid;grid-template-columns:38px minmax(0,1fr);grid-template-rows:24px minmax(0,1fr) 22px;grid-template-areas:". sun" "y plot" ". x";column-gap:8px;color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums}.wbDcSun,.wbDcX,.wbDcY,.wbDcPlot{position:relative;min-width:0}.wbDcSun{grid-area:sun}.wbDcY{grid-area:y}.wbDcPlot{grid-area:plot}.wbDcX{grid-area:x}.wbDcSunMark,.wbDcX span{position:absolute;bottom:0;transform:translate(-50%);white-space:nowrap}.wbDcSunMark{display:flex;align-items:center;gap:2px;bottom:4px;--wb-icon:14px}.wbDcSunMark .wbIcon{fill:#fea916}.wbDcX span{top:4px;bottom:auto}.wbDcY span{position:absolute;right:0;transform:translateY(-50%);white-space:nowrap}.wbDcPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbDcNight{fill:var(--page);opacity:.6}.wbDcGrid{stroke:var(--line);stroke-width:1}.wbDcSunLine{stroke:#fea916;stroke-width:1;stroke-dasharray:2 4;opacity:.7}.wbDcNow{stroke:var(--text);stroke-width:1;opacity:.4}.wbDcLine,.wbDcPast{fill:none;stroke:var(--primary);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.wbDcPast{stroke:var(--muted);stroke-width:2}.wbDcArea{fill:var(--primary);opacity:.14}.wbDcBar{position:absolute;bottom:0;min-height:3px;border-radius:4px 4px 1px 1px;background:var(--primary)}.wbDcDot{position:absolute;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 2px var(--card)}.wbDcPeak{position:absolute;transform:translate(-50%,calc(-100% - 6px));color:var(--text);font-weight:500;white-space:nowrap}.wbDcNote{position:absolute;top:0;right:0;bottom:0;left:0;display:grid;place-items:center;padding:0 8px;text-align:center;color:var(--muted);font:400 13px/1.4 var(--font)}.wbOpen{flex:1;display:flex;flex-direction:column;gap:10px;padding:var(--inset);border-radius:28px;background:var(--tile);box-shadow:inset 0 0 0 .4px var(--hc-open-edge)}.wbOpenHead{display:flex;align-items:center;gap:12px}.wbBack{flex:none;display:grid;place-items:center;width:34px;height:34px;padding:0;border:0;border-radius:var(--r-fine);background:transparent;color:var(--text);cursor:pointer;--wb-icon:24px}.wb button.wbBack{border-radius:var(--r-fine)!important}.wbBack:hover{background:var(--hover)}.wbOpen .wbGraph{flex:1;height:auto;min-height:152.2px;background:var(--card);--wb-scale-edge:var(--tile)}.wbSegments{display:inline-flex;gap:0;padding:4px;border-radius:var(--r-inner);background:var(--page)}.wbSegments button{padding:4px 12px;border:0;border-radius:var(--r-fine);background:transparent;color:var(--muted);font:600 14px/20px var(--font-tile);cursor:pointer}.wb .wbSegments button{border-radius:var(--r-fine)!important;font-family:var(--font-tile)!important}.wbSegments button[aria-pressed=true]{background:var(--tile);color:var(--text)}.wbWx{position:relative;display:block;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--icon-bg);overflow:hidden}.wbWx>svg,.wbWx>canvas{display:block;width:100%;height:100%}.wbWx>canvas{image-rendering:pixelated}.wbWx.wbS60{width:60px;height:60px;border-radius:20px}.wbWx.wbS90{width:90px;height:90px;border-radius:28px}.wb[data-style=smooth] :is(.wbWx,.wbSky):after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;border-radius:inherit;pointer-events:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n' color-interpolation-filters='sRGB'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='1.3 0 0 0 -.15 1.3 0 0 0 -.15 1.3 0 0 0 -.15 0 0 0 0 1'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:140px 140px;mix-blend-mode:overlay;opacity:.3}.wbBaseRows{display:flex;flex-direction:column;gap:4px;width:100%}.wbBaseRow{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbBaseRow>span:last-child{color:var(--text);white-space:nowrap}.wbBaseRow>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRadar{position:relative;flex:1;align-self:stretch;min-height:80px;border-radius:var(--r-inner);overflow:hidden;background-color:var(--tile);background-image:linear-gradient(color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--text) 7%,transparent) 1px,transparent 1px);background-size:24px 24px;background-position:center}.wbRadarRing{position:absolute;left:50%;top:50%;width:64%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 20%,transparent)}.wbRadarRing:after{content:"";position:absolute;top:25%;right:25%;bottom:25%;left:25%;border-radius:50%;box-shadow:0 0 0 1px color-mix(in srgb,var(--text) 14%,transparent)}.wbRadarHome{position:absolute;left:50%;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:var(--primary);box-shadow:0 0 0 3px var(--tile)}.wbWx.wbLineIcon{display:grid;place-items:center;background:var(--tile);color:var(--text)}.wbWx.wbLineIcon>svg{width:64%;height:64%}.wbWx.wbClear,.wbWx.wbPartly{background:var(--wx-clear)}.wbWx.wbCloudy{background:var(--wx-cloudy)}.wbWx.wbRain,.wbWx.wbSnow{background:#969696}.wbWx.wbNight{background:var(--wx-night)}.wbWx .wbBright{fill:var(--wx-cloud-bright)}.wbWx .wbCloudLight{fill:var(--wx-cloudy)}.wbWx .wbAccent{fill:var(--primary)}.wbWx :is(.wbSunDisc,.wbMoonPath,.wbBright,.wbCloudLight,.wbDrop,.wbFlake,.wbTwinkle){transform-box:fill-box;transform-origin:center}.wbMotion .wbWx .wbSunDisc{animation:wxBreathe 3.6s ease-in-out infinite}.wbMotion .wbWx .wbMoonPath{animation:wxBob 5.2s ease-in-out infinite}.wbMotion .wbWx :is(.wbBright,.wbCloudLight){animation:wxDrift 6.4s ease-in-out infinite}.wbMotion .wbWx .wbDrop{animation:wxFall .95s linear infinite}.wbMotion .wbWx .wbFlake{animation:wxSnow 3.2s linear infinite}.wbMotion .wbWx .wbTwinkle{animation:wxTwinkle 2.4s ease-in-out infinite}.wbCard.wbWeather{position:relative;display:flex;flex-direction:column;gap:12px;padding:18px}.wbClosed{display:contents}.wbWeather.wbIsOpen .wbClosed{visibility:hidden}.wbWeather .wbOpen{position:absolute;top:10px;right:10px;bottom:10px;left:10px;min-height:0}.wbWeather .wbOpen .wbGraph{min-height:0;padding:14px 16px 12px 12px}.wbDayTabs{display:flex}.wbNow{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.wbCurrent{display:flex;align-items:flex-start;gap:16px;min-width:0}.wb button.wbOpenPage{padding:0;border:0;border-radius:var(--r-tile)!important;background:none;color:inherit;font:inherit;text-align:start;cursor:pointer}.wb button.wbOpenPage:focus-visible{outline:2px solid var(--primary)!important;outline-offset:4px!important}.wbTempBlock{display:flex;flex-direction:column;gap:4px;min-width:0}.wbTemp{display:flex;align-items:flex-start;gap:2px;white-space:nowrap}.wbDeg{font:500 64px/1 var(--font-tile);letter-spacing:-1.28px}.wbUnit,.wbRange{font:300 24px/1.25 var(--font-tile);white-space:nowrap}.wbPlace{color:var(--muted);font:600 14px/20px var(--font-tile);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.wbCondition{flex:none;align-self:stretch;display:flex;flex-direction:column;justify-content:space-between;padding:10px 16px;border-radius:var(--r-tile);background:var(--tile)}.wbCondName{font:400 18px/1.2 var(--font);letter-spacing:-.18px;white-space:nowrap}.wbColumns{display:flex;height:185px;border-radius:28px;overflow:hidden}.wbColumn{flex:1 0 0;min-width:0;display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:16px 0;border:0;border-radius:var(--r-tile);background:var(--tile);color:var(--text);font:inherit;cursor:pointer}.wb button.wbColumn{border-radius:var(--r-tile)!important}.wbColumn:hover{background:var(--hover);box-shadow:inset 0 0 0 .4px var(--line)}.wb button.wbColumn:focus-visible{outline:2px solid var(--primary)!important;outline-offset:-2px!important}.wbDay{font:400 14px/1.4 var(--font);white-space:nowrap}.wbTemps{display:flex;flex-direction:column;align-items:center;gap:8px}.wbHi{font:400 18px/20px var(--font-tile)}.wbLo{color:var(--muted);font:400 18px/1.2 var(--font);letter-spacing:-.18px}.wbAsNow{display:none}.wbHalves{display:none;grid-template-columns:repeat(2,minmax(0,1fr))}.wbNextHours{display:none;justify-content:space-between;align-items:center;gap:8px;min-width:0}.wbHour{display:flex;flex-direction:column;align-items:center;gap:8px;min-width:0}.wbHourTime{color:var(--muted);font:400 14px/20px var(--font);white-space:nowrap}.wbHourTemp{font:400 18px/20px var(--font-tile);white-space:nowrap}.wbHour .wbWx.wbS40{width:40px;height:40px;border-radius:16px}.wbSummary{position:relative;flex:1 1 0;min-height:0;margin-top:-12px;container:wbsum/size}.wbSummaryText{position:absolute;top:12px;left:0;right:0;margin:0;color:var(--text);font:400 16px/22px var(--font);display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}@container wbsum (height < 56px){.wbSummaryText{-webkit-line-clamp:1}}@container wbsum (height < 34px){.wbSummaryText{display:none}}@container wb-card (width < 480px){.wbColumn .wbWx.wbS60{width:48px;height:48px;border-radius:16px}}@container wb-card (width < 400px){.wbCard.wbWeather{gap:16px;padding:18px 18px 10px}.wbWeather .wbWx.wbS90{width:60px;height:60px;border-radius:20px}.wbDeg{font-size:46px;letter-spacing:-.92px}.wbRange{font-size:20px}.wbCondition{align-self:flex-start;gap:0;border-radius:28px}.wbColumn .wbWx.wbS60{width:40px;height:40px;border-radius:14px}.wbWeather .wbDcX .wbMinor{display:none}}@container wb-card (width < 280px){.wbHalves{grid-template-columns:1fr}}.wbCard.wbHourly{flex:1}.wbTabs{padding:0 18px}.wbStripScroll{flex:1;min-height:160px;display:flex;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;border-radius:var(--r-tile);-webkit-user-select:none;user-select:none}.wbStripScroll::-webkit-scrollbar{display:none}.wbStripScroll.wbDragging{cursor:grabbing}.wbStrip{flex:none;display:flex;flex-direction:column;gap:8px;min-width:100%;box-sizing:border-box;padding:0 10px}.wbRow{position:relative;flex:none}.wbTimes{height:20px}.wbValues{height:44px}.wbMark{position:absolute;top:0;display:flex;flex-direction:column;align-items:center;transform:translate(-50%);white-space:nowrap}.wbMark.wbFirst{align-items:flex-start;transform:none}.wbTimes .wbMark{font:400 14px/20px var(--font);font-variant-numeric:tabular-nums}.wbTimes .wbMark.wbFirst{font:600 14px/20px var(--font-tile)}.wbSky{position:relative;flex:1;min-height:72px;border-radius:var(--r-inner);overflow:hidden}.wbStripScroll.wbPaged{container-type:inline-size;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}.wbStripScroll.wbPaged.wbHeld{scroll-snap-type:none}.wbPaged .wbStrip{position:relative;min-width:0;padding:0}.wbSnap{position:absolute;top:0;width:1px;height:1px;scroll-snap-align:start;pointer-events:none}.wbMark.wbLast{align-items:flex-end;transform:translate(-100%)}.wbPaged .wbTimes .wbMark.wbFirst{font:400 14px/20px var(--font)}.wbPaged .wbTimes .wbMark.wbNowMark{font:600 14px/20px var(--font-tile)}.wbSky .wbPast{position:absolute;top:0;bottom:0;left:0;background:var(--card);opacity:.45;pointer-events:none}.wbSky .wbNowLine{position:absolute;top:0;bottom:0;width:2px;margin-left:-1px;background:var(--text);opacity:.55;pointer-events:none}.wbSky.wbLineSky{background:var(--tile);color:var(--text)}.wbLineArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbLineArt .wbLineArc{fill:none;stroke:var(--text);stroke-width:1.5;stroke-linejoin:round;vector-effect:non-scaling-stroke;opacity:.7}.wbLineArt .wbLineHorizon{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.35}.wbLineArt .wbLineNight{fill:var(--text);opacity:.07}.wbLineArt .wbLineEdge{stroke:var(--text);stroke-width:1;vector-effect:non-scaling-stroke;opacity:.3}.wbLineTime{position:absolute;top:calc(80% + 4px);transform:translate(-50%);color:var(--muted);font:400 11px/14px var(--font);font-variant-numeric:tabular-nums;white-space:nowrap;pointer-events:none}.wbLineNow{position:absolute;width:26px;height:26px;transform:translate(-50%,-50%);border-radius:50%;background:var(--tile);pointer-events:none}.wbLineNow>svg,.wbLineGlyph>svg{display:block;width:100%;height:100%}.wbLineGlyph{position:absolute;top:calc(50% - 14px);width:28px;height:28px;transform:translate(-50%);pointer-events:none}.wbLineGlyph.wbFirst{transform:none}.wbLineGlyph.wbLast{transform:translate(-100%)}.wbSky .wbMidnight{position:absolute;top:0;bottom:0;width:0;border-left:1.5px dashed var(--text);opacity:.5;pointer-events:none}.wbDays{position:absolute;top:36px;left:0;z-index:1;display:flex;pointer-events:none}.wbDaySpan{flex:none;min-width:0}.wbDayName{position:sticky;left:8px;margin-left:8px;height:26px;min-height:0;padding:0 10px;border:0;background:color-mix(in srgb,var(--card) 82%,transparent);color:var(--text);font:600 13px/26px var(--font-tile);white-space:nowrap;cursor:pointer;pointer-events:auto}.wb .wbDayName{border-radius:13px!important;font-family:var(--font-tile)!important}.wbViews button{padding:2px 10px;font-size:13px}.wbBars .wbDayBars{flex:1 1 0;min-height:160px;display:flex;flex-direction:column;padding:0 18px;overflow-y:auto;overscroll-behavior:contain;scrollbar-width:thin}.wbBars.wbTabbed .wbDayBars{min-height:206px}.wbDayBar{flex:1 0 auto;display:grid;grid-template-columns:minmax(56px,auto) 40px 36px minmax(0,1fr) 36px;align-items:center;column-gap:12px;min-height:48px;box-shadow:inset 0 -.4px 0 var(--line)}.wbDayBar:last-child{box-shadow:none}.wbRangeDay{color:var(--text);font:600 14px/20px var(--font-tile);white-space:nowrap}.wbRangeLo{color:var(--muted);text-align:right;font:400 16px/20px var(--font);font-variant-numeric:tabular-nums}.wbRangeHi{color:var(--text);text-align:right;font:400 16px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbRangeTrack{position:relative;height:6px;border-radius:3px;background:var(--tile)}.wbRangeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:3px}.wbRangeNow{position:absolute;top:50%;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--card)}.wbSkyArt{position:absolute;top:0;height:100%}.wbSkyArt>canvas{display:block;width:100%;height:100%}.wbSkyArt>canvas.wbPixels{image-rendering:pixelated}.wbPrimaryV{font:400 18px/20px var(--font-tile);font-variant-numeric:tabular-nums}.wbSecondary{min-height:20px;color:var(--muted);font:400 15px/20px var(--font)}@container wb-card (width < 480px){.wbHourly :is(.wbHeader,.wbTabs){padding:0 8px}.wbBars .wbDayBars{padding:0 8px;min-height:380px}.wbBars.wbTabbed .wbDayBars{min-height:426px}.wbDayBar{column-gap:8px}.wbStripScroll{min-height:380px}}.wbSunSky{flex:1;min-height:0;display:flex;border-radius:16px;overflow:hidden;transition:background 1s ease}.wbSunSky svg{display:block;width:100%;height:100%;overflow:visible}.wbSunPath{fill:none;stroke:var(--wb-sun-line);stroke-opacity:.4;stroke-width:28.3}.wbHorizon{stroke:var(--wb-sun-line);stroke-opacity:.3;stroke-width:1}.wbSunTime{fill:var(--wb-sun-line);font-size:13px;font-weight:600;text-anchor:middle}.wbSunTime.wbNoon{dominant-baseline:central}.wbSunTile .wbZone{display:block}.wbSunZone{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff;transition:background 1s ease}.wbSunTrack{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbSunBand{fill:#fff;fill-opacity:.1}.wbSunBand.wbSunDay{fill-opacity:.14}.wbSunBand.wbSunDone{fill-opacity:.85}.wbSunDot{fill:#ffd84a}.wbSunDot.wbSunNight{fill:#9aa3c7}.wbSunCount{position:absolute;top:22px;right:22px;bottom:22px;left:22px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding-bottom:14px}.wbSunLeft{font:500 clamp(28px,calc(16cqw * var(--wb-k,1)),36px)/1.1 var(--font-tile);letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap}.wbSunWord{font:400 13px/18px var(--font);opacity:.85}.wbSunAt{position:absolute;bottom:32px;font:500 12px/16px var(--font);opacity:.85;font-variant-numeric:tabular-nums}.wbSunRise{left:32px}.wbSunSet{right:32px}.wbMoonBox{flex:1;min-height:0;display:flex;justify-content:center}.wbMoonArt{display:block;flex:none;width:auto;height:100%;max-width:100%}.wbMoonCaption{gap:8px}.wbMoonCaption span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbMoonCaption span:last-child{flex:none}.wbMaria{fill:#7d7d78}.wbCrater{fill:#00000017}.wbRays{stroke:#fff;stroke-width:1.2;stroke-linecap:round;opacity:.16}.wbBrightSpots{fill:#fff;opacity:.25}.wbBrightCenter{fill:#f6f6f2;opacity:.75}.wbMottle{opacity:.3;mix-blend-mode:multiply}.wbGrain{opacity:.12;mix-blend-mode:multiply}.wbMoonNight{fill:#0a0a0ebf}.wbWind .wbVisual>svg{overflow:visible}.wbTick{stroke:var(--muted);stroke-width:2.5;stroke-linecap:round}.wbTick.wbMajor{stroke:var(--text);stroke-width:3}.wbLetter{fill:var(--muted);font-size:15px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbLetter.wbNorth{fill:var(--text)}.wbMarker{fill:var(--primary)}.wbDisc{fill:var(--text)}.wbSpeed{fill:var(--card);font-size:34px;font-weight:500;letter-spacing:-.5px;text-anchor:middle;dominant-baseline:central}.wbSpeedUnit{fill:var(--card);font-size:12px;font-weight:600;text-anchor:middle;dominant-baseline:central;opacity:.7}.wbWater{position:absolute;left:0;right:0;bottom:0;transition:height 1.2s ease}.wbWater .wbBody{position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(180deg,#b2e5fc2e,#81d4fa52,#4fc3f76b 70%,#03a9f48c);-webkit-mask-image:linear-gradient(180deg,transparent,#000 26px);mask-image:linear-gradient(180deg,transparent,#000 26px)}.wbWater .wbMist{position:absolute;left:-10%;right:-10%;bottom:calc(100% - 26px);height:60px;background:radial-gradient(ellipse at 50% 100%,#b2e5fc4d,#b2e5fc00 70%);filter:blur(8px)}.wbWater .wbHaze{position:absolute;width:80%;height:45%;border-radius:50%;background:radial-gradient(closest-side,#ffffff38,#fff0);filter:blur(10px);animation:wbDrift 16s ease-in-out infinite alternate}.wbWater .wbHaze.wbOne{left:-15%;top:8%}.wbWater .wbHaze.wbTwo{right:-20%;top:40%;animation-duration:21s;animation-direction:alternate-reverse}@keyframes wbDrift{0%{transform:translate(-12%)}to{transform:translate(18%)}}.wbWaterValue{flex:1;display:flex;align-items:flex-end}.wbSea{position:relative;flex:1;min-height:0;border-radius:16px;overflow:hidden;--wb-sea-inset:clamp(8.88px,calc(4.76cqw * var(--wb-k,1)),12px)}.wbSeaArt{position:absolute;top:0;right:0;bottom:0;left:0;display:block;width:100%;height:100%;image-rendering:pixelated}.wbSeaFact{position:absolute;top:clamp(7px,calc(3.97cqw * var(--wb-k,1)),10px);inset-inline:var(--wb-sea-inset);color:#26221e;font:600 clamp(9.44px,calc(5.47cqw * var(--wb-k,1)),13.78px)/1.23 var(--font-tile)}.wbSeaValue{position:absolute;bottom:var(--wb-sea-inset);inset-inline-start:var(--wb-sea-inset);color:#fff;text-shadow:0 0 2px rgba(0,0,0,.6),0 1px 3px rgba(0,0,0,.5)}.wbSeaValue .wbUnitV{color:inherit}.wbVu{display:block;width:100%;height:100%;min-height:0;overflow:visible}.wbVuZone{fill:none;stroke-width:12.3;stroke-linecap:butt}.wbVuTick{stroke:var(--muted);stroke-width:.95;stroke-linecap:round}.wbVuTick.wbMajor{stroke:var(--text);stroke-width:1.9}.wbVisual svg text.wbVuLabel{fill:var(--muted);font-family:"Alfarn",var(--font-tile);font-size:18.9px;font-weight:600;letter-spacing:.08em;text-anchor:middle;dominant-baseline:central}.wbVuNeedle{transform-box:view-box;transform-origin:100px 130px;transform:rotate(var(--wb-angle));animation:wbSwing 1.4s cubic-bezier(.3,1.6,.5,1);transition:transform 1s cubic-bezier(.3,1.6,.5,1)}.wbVuNeedle line{stroke:#e0574d;stroke-width:2;stroke-linecap:round}@keyframes wbSwing{0%{transform:rotate(-48deg)}}.wbVuHousing{fill:var(--tile)}.wbVuValue{fill:var(--text);font-size:30.2px;font-weight:600;text-anchor:middle;dominant-baseline:central}@media (prefers-reduced-motion:reduce){.wbWater .wbHaze,.wbVuNeedle{animation:none}}.wbTapeRow{flex:1;min-height:0;display:flex;align-items:stretch;gap:8px}.wbTapeValue{flex:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.wbTapeUnit{color:var(--muted);font:300 clamp(13px,7.1cqw,18px)/1.25 var(--font-tile)}.wbTape{flex:none;width:40%;height:100%}.wbTapeTick{stroke:var(--text);stroke-width:2;stroke-linecap:round}.wbTapeLabel{fill:var(--text);font-size:15px;dominant-baseline:central}.wbTapeEnd{fill:var(--muted);font-size:14px;font-weight:600;text-anchor:middle;dominant-baseline:central}.wbTapeMarker{stroke:#e0574d;stroke-width:4;stroke-linecap:round}.wbCompare{flex:1;min-height:0;display:grid;grid-template-columns:minmax(0,1fr) calc(50% - 28px * var(--wb-k));grid-template-rows:minmax(0,1fr);gap:16px;align-items:stretch}.wbCompareText{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-width:0}.wbCompareNumber{font:500 calc(26.4cqw * var(--wb-k)) / 1 var(--font-tile);letter-spacing:-.02em;white-space:nowrap}.wbCompareWords{color:var(--muted);font:300 clamp(14px,calc(7.1cqw * var(--wb-k)),18px) / 1.25 var(--font-tile)}.wbCompareTemps{margin-top:6px;font:400 clamp(12px,calc(5.6cqw * var(--wb-k)),14px) / 1.4 var(--font)}.wbTrend{position:relative;width:100%;height:100%;min-height:0}.wbTrendPlot{position:absolute;top:22px;right:0;bottom:24px;left:0}.wbTrendPlot svg{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;overflow:visible}.wbTrendLine{fill:none;stroke:var(--text);stroke-width:2;stroke-linejoin:round;stroke-linecap:round;opacity:.8}.wbTrendDot{position:absolute;width:7px;height:7px;margin:-3.5px 0 0 -3.5px;border-radius:50%;background:var(--card);box-shadow:0 0 0 2px var(--text)}.wbTrendDot.wbToday{width:11px;height:11px;margin:-5.5px 0 0 -5.5px;background:var(--primary);box-shadow:0 0 0 3px var(--card)}.wbAvgValue{position:absolute;transform:translate(-50%,calc(-100% - 8px));color:var(--muted);font:400 10px/1 var(--font-tile);white-space:nowrap}.wbAvgValue.wbToday{color:var(--text);font-size:12px;font-weight:600}.wbTrendAvg{position:absolute;right:0;transform:translateY(4px);color:var(--muted);font:400 10px/1 var(--font-tile)}.wbTrendDays{position:absolute;left:0;right:0;bottom:0;height:16px}.wbAvgDay{position:absolute;bottom:0;transform:translate(-50%);color:var(--muted);font:400 11px/16px var(--font-tile)}.wbAvgDay.wbToday{color:var(--text);font-weight:600}.wbAvgLine{stroke:var(--text);stroke-width:1;stroke-dasharray:3 4;opacity:.6}.wbCard.wbHc.wbAqOpen{padding:var(--inset);min-height:243px}.wbAqTiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))}@container wb-card (width < 280px){.wbAqTiles{grid-template-columns:1fr}}.wbAq .wbGraph{gap:10px}.wbScale{position:relative;height:4px;border-radius:9999px}.wbScale i{position:absolute;top:50%;box-sizing:content-box;width:10px;height:10px;border-radius:50%;background-color:var(--text);border:2px solid var(--wb-scale-edge);transform:translate(-50%,-50%)}.wbZoned{gap:14px}.wbZone{position:relative;flex:none;height:198px;display:flex;align-items:center;justify-content:center;border-radius:16px;overflow:hidden}.wbCallouts{display:none;flex-direction:column;gap:4px;margin-top:-6px}.wbCallout{display:flex;justify-content:space-between;gap:12px;color:var(--muted);font:400 14px/20px var(--font)}.wbCallout>span:first-child{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbCallout>span:last-child{flex:none;color:var(--text);white-space:nowrap}.wbZone>.wbSunSky{flex:1;align-self:stretch;border-radius:0}.wbZone>.wbMoonBox{flex:none;height:150px}.wbBase .wbZone{align-items:flex-end;justify-content:flex-start}.wbZone>.wbTapeRow{align-self:stretch;height:100%}.wbItem[data-xl] .wbCallouts{display:flex}.wbUv .wbZone{display:block}.wbUvArt{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;display:block}.wbUvBig{position:absolute;right:0;bottom:0;display:flex;flex-direction:column;align-items:flex-end}.wbUvNum{font:500 64px/.9 var(--font-tile);letter-spacing:-.03em;color:var(--text);font-variant-numeric:tabular-nums}.wbUvWord{margin-top:6px;font:400 14px/20px var(--font);color:var(--muted)}.wbAqSmile .wbZone{display:block}.wbAqFill{position:absolute;top:0;right:0;bottom:0;left:0;color:#fff}.wbAqFace{position:absolute;left:12px;top:12px;width:min(140px,calc(100% - 60px));height:auto;aspect-ratio:1;fill:none;stroke:currentColor;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}.wbAqFace .wbAqEyes{stroke-width:5}.wbAqBig{position:absolute;right:14px;bottom:12px;display:flex;flex-direction:column;align-items:flex-end}.wbAqNum{font:500 56px/.9 var(--font-tile);letter-spacing:-.03em;font-variant-numeric:tabular-nums}.wbAqUnit{margin-top:4px;font:500 14px/20px var(--font)}.wbPollenAir{position:absolute;top:0;right:0;bottom:62px;left:0;overflow:hidden;pointer-events:none}.wbFloat{position:absolute;left:-12%;animation:wbFloat linear infinite}.wbBob{display:block;animation:wbBob ease-in-out infinite alternate}@keyframes wbFloat{0%{left:-12%}to{left:106%}}@keyframes wbBob{0%{transform:translateY(-6px) rotate(-14deg)}to{transform:translateY(8px) rotate(16deg)}}.wbFloat svg{display:block}.wbSeed svg{width:calc(20px * var(--s));height:calc(28px * var(--s))}.wbGrain svg{width:calc(10px * var(--s));height:calc(10px * var(--s))}.wbStem svg{width:calc(9px * var(--s));height:calc(26px * var(--s))}.wbSeed{color:var(--text);opacity:.7}.wbGrain{color:#e9c46a;opacity:.85}.wbStem{color:#a3b18a;opacity:.75}#app.light .wbGrain{color:#c99a1e}#app.light .wbStem{color:#7d8c5f}@media (prefers-reduced-motion:reduce){.wbFloat,.wbBob{animation:none}.wbFloat{left:var(--x)}}.wbPush{display:block;transition:transform .35s cubic-bezier(.2,.8,.3,1)}.wbCallout.wbAdvice>span:first-child{color:var(--text)}.wbCard.wbSquare.wbGraphCard{height:100%;min-height:0}.wbGraphCard .wbHead .wbBack{margin:-4px -6px 0 auto}.wbGraphCard .wbRangeBtn{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;max-width:100%;height:32px;padding:0 8px 0 10px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:600 12px/16px var(--font-tile);cursor:pointer}.wb button.wbRangeBtn{border-radius:12px!important}.wbRangeBtn>span{min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.wbRangeBtn .wbIcon{flex:none;width:16px;height:16px;fill:currentColor}.wbRangeBtn[aria-expanded=true]{background:var(--bright);color:var(--on-bright)}.wbItem:has(.wbRangePick){position:relative;z-index:30}.wbRangePick{position:absolute;top:116px;left:18px;z-index:30;display:flex;flex-direction:column;gap:12px;width:248px;box-sizing:border-box;padding:12px;border-radius:24px;background:var(--card);box-shadow:var(--hc-hair-all),0 18px 40px #00000059}.wbRangePick.wbPickRight{left:auto;right:18px}.wbRangePresets{display:flex;flex-direction:column;gap:2px}.wb .wbRangePreset{height:32px;padding:0 12px;border:0;border-radius:12px!important;background:transparent;color:var(--text);font:400 14px/20px var(--font);text-align:left;cursor:pointer}.wb .wbRangePreset:hover{background:var(--tile)}.wb .wbRangePreset[aria-pressed=true]{background:var(--bright);color:var(--on-bright);font-weight:600}.wbRangeDates{display:grid;grid-template-columns:1fr 1fr;gap:8px;padding-top:12px;box-shadow:inset 0 .4px 0 var(--line)}.wbRangeDates label{display:grid;gap:4px;min-width:0;color:var(--muted);font:400 12px/16px var(--font)}.wbRangeDates input{width:100%;min-width:0;height:32px;box-sizing:border-box;padding:0 6px;border:0;border-radius:12px;background:var(--tile);box-shadow:var(--hc-hair-all);color:var(--text);font:400 12px/16px var(--font);color-scheme:inherit}.wb .wbRangeApply{height:32px;padding:0 14px;border:0;border-radius:999px!important;background:var(--bright);color:var(--on-bright);font:600 12px/16px var(--font-tile);cursor:pointer}.wbGraphCard .wbGraph{flex:1;height:auto;min-height:0}.wb.wbPopup{position:fixed;top:0;right:0;bottom:0;left:0;z-index:180;display:grid;place-items:center;padding:16px;background:#00000073;overscroll-behavior:contain;container-type:normal}.wb.wbPopup[hidden]{display:none}.wbPopupBox{position:relative;width:520px;max-width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{height:auto;aspect-ratio:auto;box-shadow:var(--hc-hair-all)}.wbPopup .wbGraphCard .wbGraph{flex:none;height:auto}@media (max-width:620px){.wb.wbPopup{place-items:end stretch;padding:0}.wbPopupBox{width:100%}.wbPopup .wbCard.wbSquare.wbGraphCard{border-radius:28px 28px 0 0}}`, ku = '#app .mvPv{position:relative;transform:perspective(var(--pv-persp)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) scale(var(--sc,1));transition:transform var(--pv-ret) var(--pv-ease)}#app .mvPv.mvMoving{transition:transform 70ms linear}#app .mvPv:after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;opacity:0;mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,var(--pv-shine)),transparent var(--pv-size));transition:opacity var(--pv-ret) ease}#app .mvPv.mvLit:after{opacity:1}#app .tfBar{--mv-c:var(--light-soft,var(--primary));transform-origin:center;transition:box-shadow var(--ab-out) var(--ab-ease),transform var(--ab-out) var(--ab-ease)}#app .tfBar.mvHover{box-shadow:0 0 var(--ab-blur) var(--ab-spread) color-mix(in srgb,var(--mv-c) var(--ab-str),transparent);transition-duration:var(--ab-in)}#app .tfBar.mvHold{box-shadow:0 0 var(--ab-blur2) var(--ab-spread2) color-mix(in srgb,var(--mv-c) var(--ab-str2),transparent);transform:var(--ab-grow);transition-duration:var(--ab-in)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>:is(svg,ha-icon,ha-state-icon,span){transition:scale var(--ih-dur) var(--ih-ease)}@media (hover:hover){#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-s)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):hover:before{opacity:1}}:where(#app button.tfIcon,#app .tfBack,#app .tfEditChip,#app .tfTrayBtn,#app [data-wb=graph-close]){position:relative}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;background:color-mix(in srgb,currentColor var(--ih-tint),transparent);opacity:0;transition:opacity var(--ih-dur) var(--ih-ease)}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close]):active>:is(svg,ha-icon,ha-state-icon,span){scale:var(--ih-p)}#app .mvSegInd{position:absolute;z-index:0;pointer-events:none}#app .mvSegMoving>button{position:relative;z-index:1;background-color:transparent!important;box-shadow:none!important;transition:none!important}#app .tfMoreBackdrop{-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}#app .toast.tfToast{min-height:58px;box-sizing:border-box;padding:9px 18px 9px 9px;gap:14px;border-radius:29px;font-size:18px;line-height:1.2}#app .toast .mvTick{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:var(--r-inner);background:var(--mv-ok);color:#fff}#app .toast .mvTick svg{width:26px;height:26px;fill:none;stroke:currentColor;stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round}#app .toast .mvToastText{font-weight:600}#app .toast .toastAction{font-size:16px;margin-left:2px}#app .mvGrid{stroke:var(--divider,rgba(127,127,127,.25));stroke-width:1;vector-effect:non-scaling-stroke}#app{--ol-l:68%;--mv-ok:#4cc38a}#app.light{--ol-l:48%;--mv-ok:#1f7a4d}#app .tfAreaPanel:has(>.mvEdge){isolation:isolate;position:relative}#app .mvEdge,#app .mvEdgeFill{position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;pointer-events:none;transition:opacity var(--ol-in) ease-out}#app .mvEdgeFill{z-index:-1;background:hsl(var(--ol-h) 97% var(--ol-l));mix-blend-mode:soft-light;opacity:clamp(0,calc(var(--ol-fill) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-fill));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,transparent 5%,black 15%,black 85%,transparent 95%)}#app .mvEdge{z-index:5}#app .mvEdge:before{content:"";position:absolute;top:0;right:0;bottom:0;left:0;border-radius:inherit;box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l));opacity:clamp(0,calc(var(--ol-border) * (var(--edge-proximity,0) - var(--ol-csens)) / (100 - var(--ol-csens))),var(--ol-border));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%));mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black calc(var(--ol-cone) * 1%),transparent calc((var(--ol-cone) + 15) * 1%),transparent calc((100 - var(--ol-cone) - 15) * 1%),black calc((100 - var(--ol-cone)) * 1%))}#app .mvEdge>i{position:absolute;top:-19.2px;right:-19.2px;bottom:-19.2px;left:-19.2px;border-radius:inherit;mix-blend-mode:plus-lighter;opacity:clamp(0,calc(var(--ol-glow) * (var(--edge-proximity,0) - var(--ol-esens)) / (100 - var(--ol-esens))),var(--ol-glow));-webkit-mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%);mask-image:conic-gradient(from var(--cursor-angle,45deg) at center,black 2.5%,transparent 10%,transparent 90%,black 97.5%)}#app .mvEdge>i:before{content:"";position:absolute;top:19.2px;right:19.2px;bottom:19.2px;left:19.2px;border-radius:inherit;--s:var(--ol-size);box-shadow:inset 0 0 0 .8px hsl(var(--ol-h) 97% var(--ol-l) / 60%),inset 0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),inset 0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),inset 0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(2.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 40%),0 0 calc(6.4px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 30%),0 0 calc(12.8px*var(--s)) 0 hsl(var(--ol-h) 97% var(--ol-l) / 20%),0 0 calc(22.4px*var(--s)) calc(1.6px*var(--s)) hsl(var(--ol-h) 97% var(--ol-l) / 10%)}#app :not(.mvLitEdge)>:is(.mvEdge,.mvEdgeFill){opacity:0;transition:opacity var(--ol-out) ease-out}@media (prefers-reduced-motion:reduce){#app .mvPv{transform:none!important}#app .mvPv:after{display:none}#app .tfBar.mvHold{transform:none}#app :is(button.tfIcon,.tfBack,.tfEditChip,.tfTrayBtn,[data-wb=graph-close])>*{scale:none!important}}#app .tfBoardItem.mvDrag{scale:none}#app.tfEditing.tfBoardReady .tfBoardItem:not(.tfDragging){transition:left .42s cubic-bezier(.34,1.46,.64,1),top .42s cubic-bezier(.34,1.46,.64,1),height .42s cubic-bezier(.34,1.46,.64,1)}', Mu = `<main id="app"><div class="shell">
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
`, Gc = "homecore-theme", Su = {
  home: '<path d="M3 10.5L12 3L21 10.5V21H3V10.5Z"/>',
  settings: '<path d="M21 4H14"/><path d="M10 4H3"/><path d="M21 12H12"/><path d="M8 12H3"/><path d="M21 20H16"/><path d="M12 20H3"/><path d="M14 2V6"/><path d="M8 10V14"/><path d="M16 18V22"/>',
  fullscreen: '<path d="M8 3H5C3.9 3 3 3.9 3 5V8"/><path d="M21 8V5C21 3.9 20.1 3 19 3H16"/><path d="M3 16V19C3 20.1 3.9 21 5 21H8"/><path d="M16 21H19C20.1 21 21 20.1 21 19V16"/>',
  back: '<path d="M15 18L9 12L15 6"/>'
}, Au = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + (Su[o] || "") + "</svg>", Uc = {
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
function Cu(o, { setLight: r, fullscreenSupported: c, toggleFullscreen: p }) {
  const g = (at) => o.getElementById(at), x = g("app");
  o.querySelectorAll("[data-icon]").forEach((at) => {
    at.innerHTML = Au(at.dataset.icon);
  });
  const b = { home: g("homeView"), settings: g("settingsView") }, A = g("homeNav"), B = g("settingsNav");
  function y(at) {
    Object.entries(b).forEach(([et, U]) => U.classList.toggle("active", et === at)), A.classList.toggle("active", at === "home"), B.classList.toggle("active", at === "settings");
  }
  A.addEventListener("click", () => y("home")), B.addEventListener("click", () => y("settings")), g("settingsBack").addEventListener("click", () => y("home"));
  function H(at) {
    const et = at === "light";
    o.querySelectorAll(".themeBtn").forEach((U) => U.classList.toggle("active", U.dataset.theme === at)), x.classList.toggle("light", et), r(et);
  }
  H(Uc.get(Gc) === "light" ? "light" : "dark"), o.querySelectorAll(".themeBtn").forEach((at) => at.addEventListener("click", () => {
    H(at.dataset.theme), Uc.set(Gc, at.dataset.theme);
  }));
  const _ = g("tvNav");
  c || (_.hidden = !0), _.addEventListener("click", () => p());
  let X;
  function K(at) {
    const et = g("toast");
    et && (et.textContent = at, et.classList.add("show"), clearTimeout(X), X = setTimeout(() => et.classList.remove("show"), 2600));
  }
  return { showView: y, toast: K };
}
const _u = /* @__PURE__ */ new Set(["roaming", "test_area"]), Tu = {
  living_room: { climate: !0, cover: ["Curtains", "curtain", 62], temperature: 20.5, humidity: 44, motion: "Living room motion", plant: ["Monstera", 32, 4200, 21.4, 580] },
  kitchen: { temperature: 21.2, humidity: 48, door: "Back door", plant: ["Basil", 55, 900, 22.1, 910] },
  balcony: { solar: !0, door: "Balcony door", doorOpen: !0, valve: "Watering", plant: ["Tomatoes", 61, 18500, 14.2, 1240] },
  bedroom: { cover: ["Roller blind", "shade", 0], humidifier: !0, temperature: 18.9, humidity: 38, window: "Bedroom window" },
  office: { cover: ["Blinds", "blind", 60, 45], vacuum: !0, temperature: 21.8, humidity: 41, plant: ["Pothos", 47, 2600, 21.6, 640] },
  bathroom: { temperature: 22.4, humidity: 62 }
}, an = { moisture: [40, 70], light: [1500, 6e4], temperature: [10, 32], fertility: [350, 2e3] }, Ce = "made_up_", La = (o) => {
  var r;
  return (r = String(o).split(".")[1]) == null ? void 0 : r.startsWith(Ce);
}, ci = (o) => o.toLowerCase().replace(/[^a-z0-9]+/g, "_");
function xl(o) {
  const r = o.getHours() + o.getMinutes() / 60, c = Math.max(0, Math.sin((r - 7) / 13 * Math.PI));
  return 2.4 * c * c;
}
function Du(o) {
  const r = new Date(o.getFullYear(), o.getMonth(), o.getDate());
  let c = 0;
  for (let p = +r; p < +o; p += 10 * 60 * 1e3) c += xl(new Date(p)) / 6;
  return c;
}
function Yc(o = /* @__PURE__ */ new Date()) {
  const r = [];
  for (let c = 0; c <= 96; c++) {
    const p = +o - (96 - c) * 15 * 60 * 1e3;
    r.push([p, xl(new Date(p))]);
  }
  return r;
}
function Lu({ onChange: o }) {
  const r = {}, c = {}, p = (U, q, pt, dt) => {
    r[U] = { entity_id: U, state: pt, attributes: dt, last_changed: new Date(Date.now() - 18e6).toISOString() }, c[U] = q;
  }, g = (U, q, pt) => {
    const dt = r[U], mt = q ?? dt.state;
    r[U] = { ...dt, state: mt, attributes: { ...dt.attributes, ...pt }, last_changed: mt === dt.state ? dt.last_changed : (/* @__PURE__ */ new Date()).toISOString() };
  }, x = (U, q, pt, dt) => p("binary_sensor." + Ce + (U ? U + "_" : "") + ci(q), U, dt ? "on" : "off", { friendly_name: q, device_class: pt });
  Object.entries(Tu).forEach(([U, q]) => {
    if (q.temperature != null && p("sensor." + Ce + U + "_temperature", U, String(q.temperature), { friendly_name: "Temperature", device_class: "temperature", state_class: "measurement", unit_of_measurement: "°C" }), q.humidity != null && p("sensor." + Ce + U + "_humidity", U, String(q.humidity), { friendly_name: "Humidity", device_class: "humidity", state_class: "measurement", unit_of_measurement: "%" }), q.vacuum && p("vacuum." + Ce + "robot", U, "docked", { friendly_name: "Robot vacuum", battery_level: 100, fan_speed: "standard", rooms: [] }), q.climate && p("climate." + Ce + U, U, "heat", { friendly_name: "Thermostat", hvac_modes: ["off", "heat", "cool", "auto"], hvac_action: "heating", current_temperature: q.temperature, temperature: 21, min_temp: 7, max_temp: 30, target_temp_step: 0.5 }), q.cover) {
      const [pt, dt, mt, nt] = q.cover;
      p("cover." + Ce + U + "_" + ci(pt), U, mt ? "open" : "closed", { friendly_name: pt, device_class: dt, current_position: mt, ...nt != null ? { current_tilt_position: nt } : {} });
    }
    if (q.humidifier && p("humidifier." + Ce + U, U, "on", { friendly_name: "Humidifier", device_class: "humidifier", humidity: 45, current_humidity: q.humidity, action: "humidifying", mode: "normal", available_modes: ["normal", "eco", "sleep", "boost"], min_humidity: 30, max_humidity: 70 }), q.solar && (p("sensor." + Ce + U + "_solar_power", U, "0", { friendly_name: "Solar now", device_class: "power", state_class: "measurement", unit_of_measurement: "kW" }), p("sensor." + Ce + U + "_solar_today", U, "0", { friendly_name: "Solar today", device_class: "energy", state_class: "total_increasing", unit_of_measurement: "kWh" })), q.valve && p("valve." + Ce + U + "_" + ci(q.valve), U, "closed", { friendly_name: q.valve, device_class: "water" }), q.door && x(U, q.door, "door", q.doorOpen), q.window && x(U, q.window, "window", !1), q.motion && x(U, q.motion, "motion", !1), q.plant) {
      const [pt, dt, mt, nt, z] = q.plant, Y = Ce + ci(pt), L = (rt, St, $, Ot, N) => p("sensor." + Y + "_" + rt, U, String($), { friendly_name: St, device_class: N, state_class: "measurement", unit_of_measurement: Ot, plant_low: $ < an[rt][0], plant_high: $ > an[rt][1], icon: { moisture: "mdi:water", light: "mdi:white-balance-sunny", temperature: "mdi:thermometer", fertility: "mdi:emoticon-poop" }[rt] });
      L("moisture", "Moisture", dt, "%", "moisture"), L("light", "Light", mt, "lx", "illuminance"), L("temperature", "Temperature", nt, "°C", "temperature"), L("fertility", "Fertility", z, "µS/cm", "conductivity");
      const wt = Object.entries({ moisture: dt, light: mt, temperature: nt, fertility: z }).filter(([rt, St]) => St < an[rt][0] || St > an[rt][1]).map(([rt, St]) => rt + (St < an[rt][0] ? " low" : " high"));
      p("plant." + Y, U, wt.length ? "problem" : "ok", { friendly_name: pt, moisture: dt, brightness: mt, temperature: nt, conductivity: z, problem: wt.join(", ") || "none" });
    }
  }), p("alarm_control_panel." + Ce + "house", null, "disarmed", { friendly_name: "Alarm", supported_features: 7, code_format: null, changed_by: "Matt" }), x(null, "Front door", "door", !1), x(null, "Smoke alarm", "smoke", !1), p("sensor." + Ce + "doorbell", null, "", { friendly_name: "Doorbell", device_class: "timestamp", rang: Date.now() - 47 * 60 * 1e3 });
  const b = {}, A = {};
  let B = null;
  function y() {
    const U = /* @__PURE__ */ new Date();
    Object.keys(r).forEach((q) => {
      q.endsWith("_solar_power") && (r[q] = { ...r[q], state: xl(U).toFixed(2) }), q.endsWith("_solar_today") && (r[q] = { ...r[q], state: Du(U).toFixed(1) });
    });
  }
  y();
  let H = 0;
  function _() {
    let U = !1;
    const q = ++H % 10 === 0, pt = (nt, z, Y) => {
      g(nt, z, Y), U = !0;
    };
    Object.entries(b).forEach(([nt, z]) => {
      const Y = r[nt].attributes.current_position, L = Y < z ? Math.min(z, Y + 10) : Math.max(z, Y - 10);
      L === z && delete b[nt], pt(nt, L === z ? L === 0 ? "closed" : "open" : z > Y ? "opening" : "closing", { current_position: L });
    }), Object.entries(A).forEach(([nt, z]) => {
      const Y = r[nt].attributes.current_tilt_position, L = Y < z ? Math.min(z, Y + 25) : Math.max(z, Y - 25);
      L === z && delete A[nt], pt(nt, null, { current_tilt_position: L });
    }), Object.keys(r).filter((nt) => nt.startsWith("climate.")).forEach((nt) => {
      const z = r[nt], Y = z.attributes, L = Y.current_temperature, wt = (z.state === "heat" || z.state === "auto") && L < Y.temperature - 0.05, rt = (z.state === "cool" || z.state === "auto") && L > Y.temperature + 0.05, St = z.state === "off" ? "off" : wt ? "heating" : rt ? "cooling" : "idle", $ = q ? Math.round((L + (wt ? 0.1 : rt ? -0.1 : 0)) * 10) / 10 : L;
      ($ !== L || St !== Y.hvac_action) && pt(nt, null, { current_temperature: $, hvac_action: St });
    }), Object.keys(r).filter((nt) => nt.startsWith("humidifier.")).forEach((nt) => {
      const z = r[nt], Y = z.attributes, L = Y.current_humidity, wt = z.state === "on" && L < Y.humidity, rt = wt && q ? L + 1 : L, St = z.state !== "on" ? "off" : wt ? "humidifying" : "idle";
      if (rt !== L || St !== Y.action) {
        pt(nt, null, { current_humidity: rt, action: St });
        const $ = "sensor." + Ce + c[nt] + "_humidity";
        r[$] && pt($, String(rt));
      }
    });
    const dt = r["vacuum." + Ce + "robot"], mt = dt.attributes;
    dt.state === "cleaning" && q && pt(dt.entity_id, null, { battery_level: Math.max(5, mt.battery_level - 1) }), dt.state === "returning" && pt(dt.entity_id, "docked", {}), dt.state === "docked" && mt.battery_level < 100 && pt(dt.entity_id, null, { battery_level: Math.min(100, mt.battery_level + 2) }), B && Date.now() - B.at > 5e3 && (pt("alarm_control_panel." + Ce + "house", "armed_" + B.mode, {}), B = null), U && o();
  }
  const X = setInterval(_, 1e3), K = setInterval(() => {
    y(), o();
  }, 60 * 1e3);
  function at(U, q, pt) {
    const dt = pt == null ? void 0 : pt.entity_id;
    if (!r[dt]) return !1;
    const mt = r[dt], nt = mt.attributes, z = (Y, L) => g(dt, Y, L);
    if (U === "climate" && (q === "set_temperature" && z(null, { temperature: Math.max(nt.min_temp, Math.min(nt.max_temp, pt.temperature)) }), q === "set_hvac_mode" && z(pt.hvac_mode, pt.hvac_mode === "off" ? { hvac_action: "off" } : {}), q === "toggle" && z(mt.state === "off" ? "heat" : "off", mt.state === "off" ? {} : { hvac_action: "off" })), U === "cover") {
      const Y = q === "open_cover" ? 100 : q === "close_cover" ? 0 : q === "set_cover_position" ? pt.position : q === "toggle" ? nt.current_position > 0 ? 0 : 100 : null;
      q === "stop_cover" && (delete b[dt], delete A[dt], z(nt.current_position === 0 ? "closed" : "open")), Y != null && Y !== nt.current_position && (b[dt] = Y, z(Y > nt.current_position ? "opening" : "closing"));
      const L = q === "open_cover_tilt" ? 100 : q === "close_cover_tilt" ? 0 : q === "set_cover_tilt_position" ? pt.tilt_position : null;
      q === "stop_cover_tilt" && delete A[dt], L != null && nt.current_tilt_position != null && L !== nt.current_tilt_position && (A[dt] = L);
    }
    if (U === "humidifier" && (q === "set_humidity" && z(null, { humidity: Math.max(nt.min_humidity, Math.min(nt.max_humidity, pt.humidity)) }), q === "set_mode" && z(null, { mode: pt.mode }), q === "turn_on" || q === "turn_off" || q === "toggle")) {
      const Y = q === "turn_on" || q === "toggle" && mt.state !== "on";
      z(Y ? "on" : "off", { action: Y ? "idle" : "off" });
    }
    if (U === "vacuum" && (q === "start" && z("cleaning", { rooms: pt.rooms || nt.rooms }), q === "pause" && z("paused"), q === "return_to_base" && z("returning", { rooms: [] }), q === "locate" && z(null, { located: Date.now() }), q === "set_rooms" && z(null, { rooms: pt.rooms })), U === "valve") {
      const Y = q === "open_valve" || q === "toggle" && mt.state !== "open";
      ["open_valve", "close_valve", "toggle"].includes(q) && z(Y ? "open" : "closed");
    }
    if (U === "alarm_control_panel") {
      q === "alarm_disarm" && (B = null, z("disarmed", { changed_by: "Matt" }));
      const Y = { alarm_arm_home: "home", alarm_arm_away: "away", alarm_arm_night: "night" }[q];
      Y && (B = { mode: Y, at: Date.now() }, z("arming", { changed_by: "Matt" }));
    }
    return o(), !0;
  }
  function et(U, { madeUp: q = !0 } = {}) {
    const pt = q ? r : {}, dt = (U == null ? void 0 : U.states) || {}, mt = (U == null ? void 0 : U.entities) || {}, nt = (U == null ? void 0 : U.devices) || {}, z = (ot) => {
      var vt;
      const it = mt[ot];
      return it && (it.area_id || it.device_id && ((vt = nt[it.device_id]) == null ? void 0 : vt.area_id)) || null;
    }, Y = (ot) => {
      const it = mt[ot];
      return dt[ot] && dt[ot].state !== "unavailable" && !(it != null && it.hidden) && !(it != null && it.entity_category);
    }, L = {};
    Object.keys(dt).forEach((ot) => {
      const it = z(ot);
      it && Y(ot) && (L[it] || (L[it] = [])).push(ot);
    });
    const wt = { ...dt, ...pt }, rt = (ot) => {
      var it, vt;
      return (vt = (it = wt[ot]) == null ? void 0 : it.attributes) == null ? void 0 : vt.device_class;
    }, St = ["door", "window", "garage_door", "opening", "motion", "occupancy", "smoke", "gas"], $ = Object.keys(dt).filter((ot) => ot.startsWith("vacuum.") && Y(ot)), Ot = Object.values((U == null ? void 0 : U.areas) || {}).filter((ot) => !_u.has(ot.area_id)).map((ot) => {
      const it = ot.area_id, vt = L[it] || [], ut = (_t) => vt.filter((le) => le.startsWith(_t + ".")), bt = (_t) => ut("sensor").filter((le) => rt(le) === _t), It = (_t) => Object.keys(pt).filter((le) => c[le] === it && _t(le)), re = (_t, le) => _t.length ? _t : It(le), gt = re(bt("temperature"), (_t) => _t.endsWith(it + "_temperature")), He = re(bt("humidity"), (_t) => _t.endsWith(it + "_humidity")), wo = bt("power").filter((_t) => /^(W|kW)$/.test(wt[_t].attributes.unit_of_measurement || "")), Ho = ut("binary_sensor").filter((_t) => rt(_t) === "moisture"), vo = re(ut("plant"), (_t) => _t.startsWith("plant.")).map((_t) => ({ id: _t, readings: It((le) => le.startsWith("sensor." + _t.split(".")[1] + "_")) })), na = [...ut("binary_sensor").filter((_t) => St.includes(rt(_t))), ...It((_t) => _t.startsWith("binary_sensor."))];
      return {
        id: it,
        name: ot.name,
        icon: ot.icon,
        floor: ot.floor_id || null,
        readings: [...gt.slice(0, 1), ...He.slice(0, 1), ...Ho],
        power: wo.length ? wo.reduce((_t, le) => _t + Number(wt[le].state) * (wt[le].attributes.unit_of_measurement === "kW" ? 1e3 : 1), 0) : null,
        plugs: ut("switch"),
        lights: ut("light"),
        actions: [...ut("light"), ...re(ut("climate"), (_t) => _t.startsWith("climate.")), ...re(ut("cover"), (_t) => _t.startsWith("cover.")), ...re(ut("humidifier"), (_t) => _t.startsWith("humidifier.")), ...re(ut("valve"), (_t) => _t.startsWith("valve.")), ...ut("media_player"), ...ut("vacuum"), ...$.length ? [] : It((_t) => _t.startsWith("vacuum."))],
        solar: It((_t) => _t.includes("_solar_")),
        plants: vo,
        openings: na,
        alerts: [...Ho, ...na].filter((_t) => {
          var le;
          return ((le = wt[_t]) == null ? void 0 : le.state) === "on";
        })
      };
    }).filter((ot) => ot.readings.length || ot.plugs.length || ot.actions.length || ot.solar.length || ot.plants.length), N = Object.keys(dt).find((ot) => /^sensor\..*(p1_meter_power|grid_power)$/.test(ot) && dt[ot].state !== "unavailable") || null, Z = (ot) => Object.keys(dt).filter((it) => it.startsWith(ot + ".") && Y(it)), D = Z("alarm_control_panel"), st = $.length ? $ : q ? ["vacuum." + Ce + "robot"] : [];
    return {
      states: wt,
      rooms: Ot,
      grid: N,
      // any device's room, hidden ones too (Maintenance's batteries are mostly diagnostic)
      areaOf: (ot) => pt[ot] ? c[ot] : z(ot),
      vacuums: st,
      homeVacuums: st.filter((ot) => !Ot.some((it) => it.actions.includes(ot))),
      security: {
        alarms: D.length ? D : q ? ["alarm_control_panel." + Ce + "house"] : [],
        locks: Z("lock"),
        openings: [...Object.keys(pt).filter((ot) => ot.startsWith("binary_sensor.")), ...q ? ["sensor." + Ce + "doorbell"] : []]
      }
    };
  }
  return { model: et, call: at, stop() {
    clearInterval(X), clearInterval(K);
  } };
}
const ka = {
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
}, br = (o) => o < 0 ? 0 : o > 1 ? 1 : o, ml = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), c = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(c.slice(p, p + 2), 16) || 0);
}, Eu = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), Zc = {}, ya = (o, r, c) => {
  const p = o + r + c;
  return Zc[p] || (Zc[p] = Eu(ml(o).map((g, x) => g + (ml(r)[x] - g) * c)));
}, Kc = {}, Js = (o) => Kc[o] || (Kc[o] = ml(o));
function $d(o, r) {
  const c = String(o || "");
  return (c === "sunny" || c === "clear-night" ? "clear" : c === "partlycloudy" ? "partly" : c === "fog" ? "fog" : c === "lightning" || c === "lightning-rainy" ? "storm" : c === "snowy" || c === "snowy-rainy" ? "snow" : c === "rainy" || c === "pouring" || c === "hail" ? "rain" : "cloudy") + "/" + (c === "clear-night" || r ? "night" : "day");
}
function Bu(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [ya(r.clear[0], r.cloudy[0], 0.12), ya(r.clear[1], r.cloudy[1], 0.12)], r.storm = [ya(r.rain[0], "#000000", 0.22), ya(r.rain[1], "#000000", 0.22)], r;
}
const gl = [[61, 29, 4.4], [73, 16, 2.9], [79, 57, 3.3], [21, 77, 2.5], [13, 20, 2.3]], bl = [[29.35, 60.65], [43.04, 60.65], [56.74, 60.65]], wl = [[30, 64], [44, 61], [58, 64], [37, 74], [51, 74]];
function Ru(o, r = ka) {
  const c = { ...ka, ...r }, p = Bu(c), g = String(o).split("/"), x = p[g[0]] ? g[0] : "clear", b = g[1] === "night", A = p[x][b ? 1 : 0], B = {
    night: b,
    clearness: x === "clear" ? 1 : x === "partly" ? 0.7 : 0.25,
    sky: A,
    skyStops: [A],
    skyT: 0,
    sun: { x: 45, y: b ? 134 : 45, r: 33.26, o: 0 },
    moon: { x: 45, y: b ? 45 : 134, d: 64, o: 0 },
    cloud: { x: 134, y: 52.83, w: 58.7, o: 0, f: b ? 1 : 0 },
    stars: gl.map(() => ({ o: 0 })),
    rain: bl.map(() => ({ o: 0, dy: -16 })),
    snow: wl.map(() => ({ o: 0, dy: -16 })),
    bolt: { o: 0, dy: -10 }
  }, y = (H) => gl.map(() => ({ o: H }));
  return x === "clear" ? b ? (B.moon.o = 1, B.stars = y(1)) : B.sun.o = 1 : x === "partly" ? (B.cloud = { x: 52.83, y: 52.83, w: 58.7, o: 1, f: b ? 1 : 0 }, b ? (B.moon = { x: 34, y: 33, d: 48, o: 1 }, B.stars = y(0.7)) : B.sun = { x: 35.22, y: 33.26, r: 23.48, o: 1 }) : x === "cloudy" || x === "fog" ? (B.cloud = { x: 45, y: 42.99, w: 66.52, o: 1, f: b ? 1 : 0 }, b ? B.moon = { x: 40, y: 36, d: 40, o: 0 } : B.sun = { x: 40, y: 36, r: 20, o: 0 }) : (B.cloud = { x: 45, y: 33.26, w: 58.7, o: 1, f: 1 }, b ? B.moon = { x: 38, y: 28, d: 36, o: 0 } : B.sun = { x: 38, y: 28, r: 18, o: 0 }, x === "snow" ? B.snow = wl.map(() => ({ o: 1, dy: 0 })) : B.rain = bl.map((H, _) => ({ o: x === "storm" && _ === 1 ? 0 : 1, dy: 0 })), x === "storm" && (B.bolt = { o: 1, dy: 0 })), B;
}
const Pu = [
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
], en = (o, r) => (Pu[(r & 7) * 8 + (o & 7)] + 0.5) / 64, Hu = 0, Jd = 1, Qd = 2, tp = 3, ep = 4, Ga = 5, Ci = 6, Rn = 7, ap = 8, Xc = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), Nu = ["...##", "..##.", ".##..", "#####", "..##.", ".##..", ".#..."], Ou = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]].map((o) => [o[0] * 13 / 11, o[1] * 28 / 24]), Iu = (o, r, c) => {
  let p = !1;
  for (let g = 0, x = o.length - 1; g < o.length; x = g++) {
    const b = o[g], A = o[x];
    b[1] > c != A[1] > c && r < (A[0] - b[0]) * (c - b[1]) / (A[1] - b[1]) + b[0] && (p = !p);
  }
  return p;
};
function Fu(o, { size: r = 90, px: c = 2, oneBit: p = !1, colors: g = ka, ink: x = "#26221e", paper: b = "#fbf9f6", clock: A = 0, idle: B = !1 } = {}) {
  const y = { ...ka, ...g }, H = Math.sin, _ = Math.PI * 2, X = Math.max(6, Math.round(r / c)), K = X / 90, at = B ? Math.floor(A / 100) * 100 : 0, et = B ? H(_ * at / 3600) : 0, U = B ? 1.8 * H(_ * at / 6400) : 0, q = B ? 0.9 * H(_ * at / 4100) : 0, pt = B ? 0.8 * H(_ * at / 5200) : 0, dt = at / 3400 % 1, mt = B && o.bolt.o > 0.5 && (dt < 0.04 || dt > 0.08 && dt < 0.11), nt = new Array(X * X), z = new Uint8Array(X * X), Y = (N, Z, D, st, ot) => {
    D == null || N < 0 || Z < 0 || N >= X || Z >= X || (st >= 1 || st > en(N + 5, Z + 3)) && (nt[Z * X + N] = D, z[Z * X + N] = ot);
  }, L = (N, Z, D, st) => {
    for (let ot = Math.max(0, Math.floor(Z - D) - 1); ot <= Math.min(X - 1, Z + D + 1); ot++) for (let it = Math.max(0, Math.floor(N - D) - 1); it <= Math.min(X - 1, N + D + 1); it++) st(it, ot, it + 0.5 - N, ot + 0.5 - Z);
  }, wt = o.skyStops || [o.sky], rt = o.skyT || 0;
  for (let N = 0; N < X; N++) {
    const Z = o.night ? br(1 - (N + 0.5) / (X * 0.7)) * 0.85 : br(((N + 0.5) / X - 0.35) / 0.65) * 0.85;
    for (let D = 0; D < X; D++) {
      let st = wt[0];
      if (wt.length > 1) {
        const ot = rt * (wt.length - 1), it = Math.min(wt.length - 2, Math.floor(ot));
        st = ot - it > en(D, N) ? wt[it + 1] : wt[it];
      }
      Z > en(D + 2, N + 5) && (st = o.night ? ya(st, "#000000", 0.28) : ya(st, "#ffffff", 0.2)), nt[N * X + D] = mt ? ya(st, "#ffffff", 0.25) : st;
    }
  }
  if (o.sun.o > 0.01) {
    const N = o.sun.x * K, Z = o.sun.y * K, D = Math.max(1, o.sun.r * K);
    if (B) {
      const st = D * (1.45 + 0.06 * et), ot = ya(y.sun, "#ffffff", 0.55);
      if (L(N, Z, st, (it, vt, ut, bt) => {
        const It = Math.sqrt(ut * ut + bt * bt);
        It > D && It < st && Y(it, vt, ot, 0.26 * (1 - (It - D) / (st - D)) * o.sun.o, Hu);
      }), o.sun.o > 0.5) {
        const it = Math.floor(at / 500) % 2, vt = Math.max(1, D * 0.22);
        for (let ut = 0; ut < 8; ut++) if (ut % 2 === it) for (let bt = D + 1.5; bt < D + 1.5 + vt; bt += 0.7) Y(Math.floor(N + Math.cos(ut * Math.PI / 4) * bt), Math.floor(Z + Math.sin(ut * Math.PI / 4) * bt), y.sun, o.sun.o, ap);
      }
    }
    L(N, Z, D, (st, ot, it, vt) => {
      if (it * it + vt * vt > D * D) return;
      const ut = ((it * 0.643 + vt * 0.766) / D + 1) / 2;
      Y(st, ot, br((ut - 0.62) / 0.38) > en(st, ot) ? y.sunEdge : y.sun, o.sun.o, Jd);
    });
  }
  if (gl.forEach((N, Z) => {
    const D = o.stars[Z].o;
    if (D < 0.01) return;
    const st = Math.floor(N[0] * K), ot = Math.floor(N[1] * K), it = B ? (Math.floor(at / 300) + Z * 3) % 6 : 0;
    if (it === 5) return;
    const vt = Math.round(N[2] * K * (it === 4 ? 0.3 : it < 2 ? 1 : 0.6));
    Y(st, ot, y.star, D, Rn);
    for (let ut = 1; ut <= vt; ut++) {
      const bt = ut === vt && vt > 1 ? ya(y.star, o.sky, 0.5) : y.star;
      Y(st - ut, ot, bt, D, Rn), Y(st + ut, ot, bt, D, Rn), Y(st, ot - ut, bt, D, Rn), Y(st, ot + ut, bt, D, Rn);
    }
  }), o.moon.o > 0.01) {
    const N = Math.max(1.5, o.moon.d * K * 0.37), Z = o.moon.x * K, D = o.moon.y * K + (B && pt > 0.4 ? -1 : 0), st = Z + 0.547 * N, ot = D - 0.503 * N, it = 0.82 * N, vt = ya(y.moon, "#ffffff", 0.6);
    L(Z, D, N, (ut, bt, It, re) => {
      if (It * It + re * re > N * N) return;
      const gt = ut + 0.5 - st, He = bt + 0.5 - ot;
      gt * gt + He * He <= it * it || Y(ut, bt, br((re + N) / (2 * N) * 1.1 - 0.1) > en(ut, bt) ? y.moon : vt, o.moon.o, Qd);
    });
  }
  const St = Math.max(2, Math.round(15.65 * K)), $ = Math.max(1, Math.round(5.87 * K * 0.5));
  bl.forEach((N, Z) => {
    const D = o.rain[Z];
    let st = D.dy, ot = D.o;
    if (ot < 0.01) return;
    if (B) {
      const ut = (at / 950 + Z / 3) % 1;
      st += -5 + ut * 14, ot *= ut < 0.18 ? ut / 0.18 : ut > 0.72 ? (1 - ut) / 0.28 : 1;
    }
    const it = (N[0] + 3 + U) * K, vt = (N[1] + st) * K;
    for (let ut = 0; ut < St; ut++) for (let bt = 0; bt < $; bt++) Y(Math.floor(it - 0.208 * ut) + bt, Math.floor(vt) + ut, y.rain, ot, ep);
  });
  const Ot = Math.max(0, Math.round(7.34 * K / 2.6));
  if (wl.forEach((N, Z) => {
    const D = o.snow[Z];
    let st = D.dy, ot = 0, it = D.o;
    if (it < 0.01) return;
    if (B) {
      const bt = (at / 3200 + Z / 5) % 1;
      st += -6 + bt * 14, ot = 1.5 * H(_ * (bt * 1.5 + Z / 5)), it *= bt < 0.2 ? bt / 0.2 : bt > 0.75 ? (1 - bt) / 0.25 : 1;
    }
    const vt = Math.floor((N[0] + 3.67 + ot + U) * K), ut = Math.floor((N[1] + 3.67 + st) * K);
    Y(vt, ut, y.snow, it, Ga);
    for (let bt = 1; bt <= Ot; bt++)
      Y(vt - bt, ut, y.snow, it, Ga), Y(vt + bt, ut, y.snow, it, Ga), Y(vt, ut - bt, y.snow, it, Ga), Y(vt, ut + bt, y.snow, it, Ga), Ot > 1 && bt < Ot && (Y(vt - bt, ut - bt, y.snow, it, Ga), Y(vt + bt, ut - bt, y.snow, it, Ga), Y(vt - bt, ut + bt, y.snow, it, Ga), Y(vt + bt, ut + bt, y.snow, it, Ga));
  }), o.bolt.o > 0.01)
    if (X >= 30) {
      const N = 39 + U, Z = 50 + o.bolt.dy;
      for (let D = Math.floor(Z * K); D <= (Z + 28) * K; D++) for (let st = Math.floor(N * K); st <= (N + 13) * K; st++)
        Iu(Ou, (st + 0.5) / K - N, (D + 0.5) / K - Z) && Y(st, D, y.sun, o.bolt.o, Ci);
    } else {
      const N = X / 18, Z = 7, D = 10 + Math.round(o.bolt.dy * 0.2);
      Nu.forEach((st, ot) => st.split("").forEach((it, vt) => {
        if (it !== "#") return;
        const ut = Math.floor((Z + vt) * N), bt = Math.floor((D + ot) * N);
        for (let It = bt; It < Math.max(bt + 1, Math.floor((D + ot + 1) * N)); It++) for (let re = ut; re < Math.max(ut + 1, Math.floor((Z + vt + 1) * N)); re++) Y(re, It, y.sun, o.bolt.o, Ci);
      }));
    }
  if (o.cloud.o > 0.01) {
    const N = Math.max(3, o.cloud.w * K), Z = N * 0.6665, D = (o.cloud.x + U) * K - N / 2, st = (o.cloud.y + q) * K - Z / 2, ot = ya(y.cloudDay, y.cloudNight, Math.round(o.cloud.f * 4) / 4), it = ya(ot, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(st) - 1); vt <= Math.min(X - 1, st + Z + 1); vt++) for (let ut = Math.max(0, Math.floor(D) - 1); ut <= Math.min(X - 1, D + N + 1); ut++) {
      const bt = (ut + 0.5 - D) / N, It = (vt + 0.5 - st) / N;
      Xc(bt, It) && Y(ut, vt, !Xc(bt, It + 1 / N) || br((It - 0.42) / 0.25) * 0.8 > en(ut, vt) ? it : ot, o.cloud.o, tp);
    }
  }
  return qu(nt, z, X, X, { oneBit: p, ink: x, paper: b, snowInk: !o.night });
}
function qu(o, r, c, p, { oneBit: g, ink: x, paper: b, snowInk: A }) {
  const B = new Uint8ClampedArray(c * p * 4), y = Js(x), H = Js(b);
  for (let _ = 0; _ < p; _++) for (let X = 0; X < c; X++) {
    const K = _ * c + X, at = r[K];
    if (o[K] == null) continue;
    let et = Js(o[K]);
    if (g) {
      let U;
      at === ep || at === ap ? U = !0 : at === Ga ? U = A : at === Rn || at === Ci ? U = !1 : U = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= en(X, _), (at === Jd || at === Qd || at === tp || at === Ci) && (X > 0 && r[K - 1] !== at || X < c - 1 && r[K + 1] !== at || _ > 0 && r[K - c] !== at || _ < p - 1 && r[K + c] !== at) && (U = !0), et = U ? y : H;
    }
    B[K * 4] = et[0], B[K * 4 + 1] = et[1], B[K * 4 + 2] = et[2], B[K * 4 + 3] = 255;
  }
  return { w: c, h: p, data: B };
}
const mo = (o) => o < 0 ? 0 : o > 1 ? 1 : o, vl = (o) => {
  const r = String(o || "#000000").trim().replace("#", ""), c = r.length === 3 ? r.split("").map((p) => p + p).join("") : r;
  return [0, 2, 4].map((p) => parseInt(c.slice(p, p + 2), 16) || 0);
}, Wu = (o) => "#" + o.map((r) => Math.round(Math.max(0, Math.min(255, r))).toString(16).padStart(2, "0")).join(""), $c = {}, xa = (o, r, c) => {
  const p = o + r + c;
  return $c[p] || ($c[p] = Wu(vl(o).map((g, x) => g + (vl(r)[x] - g) * c)));
}, Jc = {}, ki = (o) => Jc[o] || (Jc[o] = vl(o));
function Vu(o) {
  const r = { clear: [o.skyClearDay, o.skyClearNight], cloudy: [o.skyCloudyDay, o.skyCloudyNight], rain: [o.skyRainDay, o.skyRainNight], snow: [o.skySnowDay, o.skySnowNight], fog: [o.skyFogDay, o.skyFogNight] };
  return r.partly = [xa(r.clear[0], r.cloudy[0], 0.12), xa(r.clear[1], r.cloudy[1], 0.12)], r.storm = [xa(r.rain[0], "#000000", 0.22), xa(r.rain[1], "#000000", 0.22)], r;
}
const ju = [
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
], uo = (o, r) => (ju[(r & 7) * 8 + (o & 7)] + 0.5) / 64, op = 1, np = 2, rp = 3, ip = 4, Pn = 5, _i = 6, yl = 7, sp = 8, Qc = (o, r) => r <= 0.6665 && ((o - 0.5) * (o - 0.5) + (r - 0.2877) * (r - 0.2877) <= 0.0824 || (o - 0.25) * (o - 0.25) + (r - 0.416) * (r - 0.416) <= 0.0625 || (o - 0.791) * (o - 0.791) + (r - 0.458) * (r - 0.458) <= 0.0437 || o >= 0.25 && o <= 0.791 && r >= 0.416), zu = (o, r, c) => {
  let p = !1;
  for (let g = 0, x = o.length - 1; g < o.length; x = g++) {
    const b = o[g], A = o[x];
    b[1] > c != A[1] > c && r < (A[0] - b[0]) * (c - b[1]) / (A[1] - b[1]) + b[0] && (p = !p);
  }
  return p;
};
function Gu(o, r, c, p, { oneBit: g, ink: x, paper: b, snowInk: A }) {
  const B = new Uint8ClampedArray(c * p * 4), y = ki(x), H = ki(b);
  for (let _ = 0; _ < p; _++) for (let X = 0; X < c; X++) {
    const K = _ * c + X, at = r[K];
    if (o[K] == null) continue;
    let et = ki(o[K]);
    if (g) {
      let U;
      at === ip || at === sp ? U = !0 : at === Pn ? U = A : at === yl || at === _i ? U = !1 : U = Math.round((0.2126 * et[0] + 0.7152 * et[1] + 0.0722 * et[2]) / 255 * 4) / 4 <= uo(X, _), (at === op || at === np || at === rp || at === _i) && (X > 0 && r[K - 1] !== at || X < c - 1 && r[K + 1] !== at || _ > 0 && r[K - c] !== at || _ < p - 1 && r[K + c] !== at) && (U = !0), et = U ? y : H;
    }
    B[K * 4] = et[0], B[K * 4 + 1] = et[1], B[K * 4 + 2] = et[2], B[K * 4 + 3] = 255;
  }
  return { w: c, h: p, data: B };
}
const Uu = { clear: 0, partly: 0.35, cloudy: 0.85, fog: 0.9, rain: 1, storm: 1, snow: 0.9 }, Yu = (o) => $d(o, !1).split("/")[0], Qs = (o) => () => {
  o |= 0, o = o + 1831565813 | 0;
  let r = Math.imul(o ^ o >>> 15, 1 | o);
  return r = r + Math.imul(r ^ r >>> 7, 61 | r) ^ r, ((r ^ r >>> 14) >>> 0) / 4294967296;
}, Zu = "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", Ku = "M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", Xu = "M0 -1L0.2687 -0.2687L1 0L0.2687 0.2687L0 1L-0.2687 0.2687L-1 0L-0.2687 -0.2687Z", $u = "M7 0L0 13L5 13L2 24L11 9L6 9L9 0Z", Ju = [[7, 0], [0, 13], [5, 13], [2, 24], [11, 9], [6, 9], [9, 0]], Qu = [".##", "##.", ".#.", "#.."];
function lp(o, { width: r, height: c, colors: p, wave: g = 0.38, soft: x = 6, glow: b = 0.6, columns: A = 6 }) {
  const B = { ...ka, dawn: "#e5a77e", ...p }, y = Vu(B), H = r, _ = c, X = H / A, K = X / 2, at = Math.PI * 2, et = o.length ? o : [{ cond: "cloudy", night: !1 }], U = [...Array(A * 2)].map((mt, nt) => {
    const z = et[Math.min(nt, et.length - 1)], Y = Yu(z.cond), L = nt % 2 === 1;
    return { cond: z.cond, k: Y, night: L, sky: y[Y][L ? 1 : 0], cover: Uu[Y] };
  }), q = (mt) => _ * (0.5 - g * Math.cos(at * (mt / X - 0.25)));
  return { C: B, S: U, W: H, H: _, cw: X, sw: K, TAU: at, yb: q, side: (mt, nt, z) => {
    const Y = (mt ? q(nt) - z : z - q(nt)) / Math.max(3, x * 1.4) + 0.5;
    return Y <= 0 ? 0 : Y >= 1 ? 1 : Y;
  }, glowAt: (mt) => {
    const nt = ((mt / X - 0.25) % 1 + 1) % 1, z = Math.max(0, Math.min(A - 1, Math.round(mt / X - 0.25))), Y = Math.max(0, Math.min(A - 1, Math.round(mt / X - 0.75))), L = 1 - (U[2 * z].cover + U[2 * Y + 1].cover) / 2, wt = Math.sin(Math.PI * Math.min(1, Math.max(0, q(mt) / _)));
    return { c: nt < 0.5 ? B.dusk : B.dawn, a: b * (0.2 + 0.8 * L) * wt * wt };
  }, soft: x, tw: X * 0.3, sy: _ / 90 };
}
function cp(o, { clock: r = 0, ambient: c = !1, seed: p = 1 }) {
  const { S: g, sw: x, side: b, C: A, TAU: B, sy: y, H } = o, _ = r, X = { stars: [], suns: [], moons: [], clouds: [], drops: [], flakes: [], fogs: [], bolts: [] };
  g.forEach((et, U) => {
    const q = Qs(p * 977 + U * 131 + 7), pt = (U + 0.5) * x, dt = et.night ? { clear: 9, partly: 5, cloudy: 2, fog: 0, rain: 0, storm: 0, snow: 1 }[et.k] : 0;
    for (let mt = 0; mt < dt; mt++) {
      const nt = pt + (q() - 0.5) * x * 1.6, z = (6 + q() * 76) * y, Y = q() < 0.35, L = 1.8 + q() * 1.6, wt = b(!0, nt, z) * (Y ? 0.95 : 0.7) * (c ? 0.6 + 0.4 * Math.sin(B * _ / 2600 + mt * 1.7 + U) : 1);
      wt >= 0.03 && X.stars.push({ x: nt, y: z, big: Y, size: L, o: wt });
    }
    if (!et.night && (et.k === "clear" || et.k === "partly")) {
      const mt = pt + (q() - 0.5) * x * 0.3, nt = Math.min(15, x * 0.29);
      X.suns.push({ x: mt, y: 32 * y, rad: nt, halo: nt * 2.8 * (c ? 1 + 0.07 * Math.sin(B * _ / 3600 + U) : 1) });
    }
    if (et.night && (et.k === "clear" || et.k === "partly")) {
      const mt = Math.min(0.78, x * 0.55 / 34), nt = pt - 23 * mt + (q() - 0.5) * x * 0.2;
      X.moons.push({ x: nt + 23 * mt, y: (4 + (c ? 0.8 * Math.sin(B * _ / 5200 + U) : 0)) * y + 23 * mt, d: 46 * mt });
    }
  });
  const K = Math.max(56, Math.min(100, H * 0.45)), at = Math.max(1, x / (K * 2.4));
  return g.forEach((et, U) => {
    const q = { clear: 0, partly: 1, cloudy: 3, fog: 0, rain: 3, storm: 3, snow: 2 }[et.k];
    if (!q) return;
    const pt = et.k === "partly" ? 1 : Math.round(q * at), dt = Qs(p * 577 + U * 71 + 3), mt = (U + 0.5) * x, nt = et.k === "rain" || et.k === "storm" || et.night ? A.cloudNight : A.cloudDay, z = et.night ? 0.82 : et.k === "storm" ? 0.75 : 1;
    for (let Y = 0; Y < pt; Y++) {
      const L = K / 46 * (et.k === "partly" ? 1 : 0.8 + dt() * 0.4), wt = mt + (et.k === "partly" ? x * 0.12 : ((Y + 0.5) / pt - 0.5) * x * 0.95 + (dt() - 0.5) * x * 0.5 / pt), rt = (et.k === "partly" ? 40 : 6 + dt() * 26) * y, St = c ? 2.5 * Math.sin(B * _ / 9e3 + U * 1.3 + Y * 2.1) : 0, $ = c ? 0.9 * Math.sin(B * _ / 6100 + U + Y) : 0;
      X.clouds.push({ x: wt - 23 * L + St, y: rt - 15.33 * L + $, w: 46 * L, h: 30.66 * L, fill: nt, o: z * (pt > 1 && Y === 0 ? 0.85 : 1) });
    }
  }), g.forEach((et, U) => {
    const q = Qs(p * 313 + U * 29 + 11), pt = (U + 0.5) * x, dt = et.cond === "pouring" ? 16 : et.cond === "rainy" || et.cond === "hail" ? 9 : et.cond === "lightning-rainy" ? 12 : et.cond === "snowy-rainy" ? 5 : 0;
    for (let nt = 0; nt < dt; nt++) {
      let z = pt + (q() - 0.5) * x * 1.05, Y = 44 + q() * 36, L = 1;
      if (c) {
        const rt = ((Y - 44 + _ * 0.04) % 36 + 36) % 36;
        z -= 0.21 * (rt - (Y - 44)), Y = 44 + rt, L = Math.min(1, rt / 6, (36 - rt) / 6);
      }
      Y *= y;
      const wt = b(et.night, z, Y) * L;
      wt >= 0.05 && X.drops.push({ x: z, y: Y, o: wt });
    }
    const mt = et.cond === "snowy" ? 11 : et.cond === "snowy-rainy" ? 6 : 0;
    for (let nt = 0; nt < mt; nt++) {
      let z = pt + (q() - 0.5) * x * 1.05, Y = 40 + q() * 44, L = 1;
      if (c) {
        const rt = ((Y - 40 + _ * 9e-3) % 44 + 44) % 44;
        Y = 40 + rt, z += 1.6 * Math.sin(B * _ / 2800 + nt * 1.9 + U), L = Math.min(1, rt / 6, (44 - rt) / 6);
      }
      Y *= y;
      const wt = b(et.night, z, Y) * L;
      wt >= 0.05 && X.flakes.push({ x: z, y: Y, o: wt });
    }
    if (et.k === "fog") {
      const nt = et.night ? "#c8ccd6" : "#ffffff", z = et.night ? 0.28 : 0.62, Y = c ? 4 * Math.sin(B * _ / 8e3 + U) : 0;
      for (let L = 0; L < 4; L++) X.fogs.push({ x: pt - x * 0.75 + L % 2 * x * 0.18 + (L % 2 ? Y : -Y), y: (30 + L * 13) * y, w: x * 1.3, c: nt, a: z });
    }
    if (et.k === "storm") {
      const nt = (_ / 3400 + U * 0.37) % 1;
      X.bolts.push({ x: pt + (q() - 0.5) * x * 0.3 - 5, y: 36 * y, o: c && !(nt < 0.05 || nt > 0.09 && nt < 0.12) ? 0.8 : 1 });
    }
  }), X;
}
function th(o, r, c, p, g, x, b, A) {
  const { S: B, C: y, cw: H, yb: _, glowAt: X, soft: K, tw: at, sy: et } = o, U = new Array(c * p), q = new Uint8Array(c * p), pt = new Uint8Array(c * p), dt = (N, Z, D, st, ot) => {
    D == null || N < 0 || Z < 0 || N >= c || Z >= p || (st >= 1 || st > uo(N + 5, Z + 3)) && (U[Z * c + N] = D, q[Z * c + N] = ot);
  }, mt = (N, Z, D, st) => {
    for (let ot = Math.max(0, Math.floor(Z - D) - 1); ot <= Math.min(p - 1, Z + D + 1); ot++) for (let it = Math.max(0, Math.floor(N - D) - 1); it <= Math.min(c - 1, N + D + 1); it++) st(it, ot, it + 0.5 - N, ot + 0.5 - Z);
  }, nt = (N, Z, D) => {
    for (let ot = 0; ot < N.length - 1; ot++) {
      const it = (ot + Z) * H;
      if (D < it - at / 2) return [N[ot], N[ot], 0];
      if (D <= it + at / 2) return [N[ot], N[ot + 1], (D - it + at / 2) / at];
    }
    const st = N[N.length - 1];
    return [st, st, 0];
  }, z = B.filter((N) => !N.night).map((N) => N.sky), Y = B.filter((N) => N.night).map((N) => N.sky), L = K / x, wt = 16 * et / x;
  for (let N = 0; N < c; N++) {
    const Z = (N + 0.5) * g, D = _(Z) / x, st = nt(z, 0.75, Z), ot = nt(Y, 1.25, Z), it = X(Z);
    for (let vt = 0; vt < p; vt++) {
      const ut = uo(N, vt), bt = vt + 0.5 - D, It = (L > 0.01 ? mo(0.5 + bt / L) : bt > 0 ? 1 : 0) > ut;
      let re = It ? st[2] > ut ? st[1] : st[0] : ot[2] > ut ? ot[1] : ot[0];
      (It ? mo(((vt + 0.5) / p - 0.45) / 0.55) * 0.7 : mo(1 - (vt + 0.5) / (p * 0.55)) * 0.7) > uo(N + 2, vt + 5) && (re = It ? xa(re, "#ffffff", 0.18) : xa(re, "#000000", 0.25)), It && bt >= 0 && bt < wt && it.a * 1.3 * (1 - bt / wt) > uo(N + 6, vt + 1) && (re = it.c), U[vt * c + N] = re, pt[vt * c + N] = It ? 0 : 1;
    }
  }
  const rt = xa(y.sun, "#ffffff", 0.55), St = xa(y.moon, "#ffffff", 0.6);
  r.stars.forEach((N) => {
    const Z = Math.floor(N.x / g), D = Math.floor(N.y / x);
    if (Z < 0 || D < 0 || Z >= c || D >= p || !pt[D * c + Z] || N.o < 0.15) return;
    const st = N.o > 0.45 ? y.star : xa(y.star, U[D * c + Z], 0.5), ot = N.big && N.o > 0.6 ? Math.floor(N.size / g) : 0;
    dt(Z, D, st, 1, yl);
    for (let it = 1; it <= ot; it++) [[Z - it, D], [Z + it, D], [Z, D - it], [Z, D + it]].forEach((vt) => {
      vt[0] >= 0 && vt[1] >= 0 && vt[0] < c && vt[1] < p && pt[vt[1] * c + vt[0]] && dt(vt[0], vt[1], st, 1, yl);
    });
  }), r.suns.forEach((N) => {
    const Z = Math.max(1.5, N.rad / g), D = N.x / g, st = N.y / x, ot = N.halo / g * 0.85;
    if (mt(D, st, ot, (it, vt, ut, bt) => {
      const It = Math.sqrt(ut * ut + bt * bt);
      It > Z && It < ot && !pt[vt * c + it] && dt(it, vt, rt, 0.3 * (1 - (It - Z) / (ot - Z)), 0);
    }), A) {
      const it = Math.floor(b / 500) % 2, vt = Math.max(1, Z * 0.3);
      for (let ut = 0; ut < 8; ut++) if (ut % 2 === it) for (let bt = Z + 1.2; bt < Z + 1.2 + vt; bt += 0.7) dt(Math.floor(D + Math.cos(ut * Math.PI / 4) * bt), Math.floor(st + Math.sin(ut * Math.PI / 4) * bt), y.sun, 1, sp);
    }
    mt(D, st, Z, (it, vt, ut, bt) => {
      ut * ut + bt * bt <= Z * Z && dt(it, vt, mo(((bt / Z + 1) / 2 - 0.6) / 0.4) > uo(it, vt) ? y.sunEdge : y.sun, 1, op);
    });
  }), r.moons.forEach((N) => {
    const Z = Math.max(1.5, N.d * 0.37 / g), D = N.x / g, st = N.y / x, ot = D + 0.547 * Z, it = st - 0.503 * Z, vt = 0.82 * Z;
    mt(D, st, Z, (ut, bt, It, re) => {
      if (It * It + re * re > Z * Z) return;
      const gt = ut + 0.5 - ot, He = bt + 0.5 - it;
      gt * gt + He * He > vt * vt && dt(ut, bt, mo((re + Z) / (2 * Z) * 1.1 - 0.1) > uo(ut, bt) ? y.moon : St, 1, np);
    });
  }), r.clouds.forEach((N) => {
    const Z = Math.max(3, N.w / g), D = Z * 0.6665, st = N.x / g, ot = N.y / x, it = xa(N.fill, "#000000", 0.16);
    for (let vt = Math.max(0, Math.floor(ot) - 1); vt <= Math.min(p - 1, ot + D + 1); vt++) for (let ut = Math.max(0, Math.floor(st) - 1); ut <= Math.min(c - 1, st + Z + 1); ut++) {
      const bt = (ut + 0.5 - st) / Z, It = (vt + 0.5 - ot) / Z;
      Qc(bt, It) && dt(ut, vt, !Qc(bt, It + 1 / Z) || mo((It - 0.42) / 0.25) * 0.8 > uo(ut, vt) ? it : N.fill, N.o, rp);
    }
  }), r.fogs.forEach((N) => {
    const Z = Math.floor(N.y / x), D = Math.max(Z, Math.floor((N.y + 6 * et) / x) - 1), st = Math.floor(N.x / g), ot = Math.floor((N.x + N.w) / g);
    for (let it = Z; it <= D; it++) for (let vt = st; vt <= ot; vt++) {
      const ut = (vt - st) / Math.max(1, ot - st);
      dt(vt, it, N.c, N.a * (ut < 0.25 ? ut / 0.25 : ut > 0.75 ? (1 - ut) / 0.25 : 1), 0);
    }
  });
  const $ = Math.max(2, Math.round(9 / x));
  r.drops.forEach((N) => {
    const Z = N.x / g, D = Math.floor(N.y / x);
    for (let st = 0; st < $; st++) dt(Math.floor(Z - 0.208 * st * x / g), D + st, y.rain, N.o, ip);
  });
  const Ot = Math.max(0, Math.round(4.4 / g / 2.6));
  return r.flakes.forEach((N) => {
    const Z = Math.floor(N.x / g), D = Math.floor(N.y / x);
    dt(Z, D, y.snow, N.o, Pn);
    for (let st = 1; st <= Ot; st++)
      dt(Z - st, D, y.snow, N.o, Pn), dt(Z + st, D, y.snow, N.o, Pn), dt(Z, D - st, y.snow, N.o, Pn), dt(Z, D + st, y.snow, N.o, Pn);
  }), r.bolts.forEach((N) => {
    if (g <= 3.5)
      for (let Z = Math.floor(N.y / x); Z <= (N.y + 24) / x; Z++) for (let D = Math.floor(N.x / g); D <= (N.x + 11) / g; D++)
        zu(Ju, (D + 0.5) * g - N.x, (Z + 0.5) * x - N.y) && dt(D, Z, y.sun, 1, _i);
    else {
      const Z = Math.round(N.x / g), D = Math.round(N.y / x);
      Qu.forEach((st, ot) => st.split("").forEach((it, vt) => {
        it === "#" && dt(Z + vt, D + ot, y.sun, 1, _i);
      }));
    }
  }), { col: U, ids: q };
}
function eh(o, r) {
  const c = r.px, p = Math.max(6, Math.round(r.width / c)), g = Math.max(6, Math.round(r.height / c)), x = r.width / p, b = r.height / g, A = r.ambient ? Math.floor((r.clock || 0) / 100) * 100 : 0, B = (K) => {
    const at = lp(K, r);
    return th(at, cp(at, { clock: A, ambient: r.ambient, seed: r.seed }), p, g, x, b, A, r.ambient);
  }, y = B(o), H = r.reveal == null ? 1 : mo(r.reveal);
  let _ = y.col, X = y.ids;
  if (H < 1) {
    const K = r.prev ? B(r.prev) : null, at = H * (p + 12);
    _ = new Array(p * g), X = new Uint8Array(p * g);
    for (let et = 0; et < p * g; et++) {
      const U = et % p, q = et / p | 0;
      (r.reduce ? H : mo((at - U) / 12)) > uo(U, q) ? (_[et] = y.col[et], X[et] = y.ids[et]) : K ? (_[et] = K.col[et], X[et] = K.ids[et]) : (_[et] = null, X[et] = 255);
    }
  }
  return Gu(_, X, p, g, { oneBit: r.oneBit, ink: r.ink || "#26221e", paper: r.paper || "#fbf9f6", snowInk: !1 });
}
function ah(o, r, c) {
  const p = c.width, g = c.height, x = c.reveal == null ? 1 : mo(c.reveal), b = (X, K) => {
    const at = lp(K, c);
    oh(X, at, cp(at, c));
  };
  if (o.clearRect(0, 0, p, g), x >= 1) {
    b(o, r);
    return;
  }
  if (c.prev && b(o, c.prev), c.reduce) {
    o.save(), o.globalAlpha = x, b(o, r), o.restore();
    return;
  }
  const A = o.canvas, B = A.__wxOff || (A.__wxOff = document.createElement("canvas"));
  (B.width !== A.width || B.height !== A.height) && (B.width = A.width, B.height = A.height);
  const y = B.getContext("2d");
  y.setTransform(o.getTransform()), y.clearRect(0, 0, p, g), b(y, r);
  const H = x * (p + 64) - 64, _ = y.createLinearGradient(H, 0, H + 64, 0);
  _.addColorStop(0, "rgba(0,0,0,1)"), _.addColorStop(1, "rgba(0,0,0,0)"), y.globalCompositeOperation = "destination-in", y.fillStyle = _, y.fillRect(0, 0, p, g), y.globalCompositeOperation = "source-over", o.save(), o.setTransform(1, 0, 0, 1, 0, 0), o.drawImage(B, 0, 0), o.restore();
}
function oh(o, r, c) {
  const { W: p, H: g, S: x, C: b, cw: A, yb: B, glowAt: y, soft: H, tw: _, sy: X } = r, K = o.getTransform().a || 1, at = ($) => {
    o.shadowColor = $ ? "rgba(28,18,8,.22)" : "transparent", o.shadowBlur = $ ? 4 * K : 0, o.shadowOffsetY = $ ? 1.5 * K : 0;
  }, et = ($, Ot) => {
    const N = ki($);
    return "rgba(" + N[0] + "," + N[1] + "," + N[2] + "," + Math.max(0, Math.min(1, Ot)).toFixed(3) + ")";
  }, U = ($, Ot) => {
    const N = o.createLinearGradient(0, 0, p, 0);
    N.addColorStop(0, $[0]);
    for (let Z = 0; Z < $.length - 1; Z++) {
      const D = (Z + Ot) * A, st = (D - _ / 2) / p, ot = (D + _ / 2) / p;
      st > 0 && st < 1 && N.addColorStop(st, $[Z]), ot > 0 && ot < 1 && N.addColorStop(ot, $[Z + 1]);
    }
    return N.addColorStop(1, $[$.length - 1]), N;
  }, q = Math.max(24, Math.ceil(p / 4)), pt = ($, Ot) => {
    o.beginPath();
    for (let N = 0; N <= q; N++) {
      const Z = p * N / q, D = $ == null ? 0 : B(Z) + $;
      N ? o.lineTo(Z, D) : o.moveTo(Z, D);
    }
    for (let N = q; N >= 0; N--) {
      const Z = p * N / q;
      o.lineTo(Z, B(Z) + Ot);
    }
    o.closePath(), o.fill();
  };
  o.save(), o.fillStyle = U(x.filter(($) => !$.night).map(($) => $.sky), 0.75), o.fillRect(0, 0, p, g);
  const dt = o.createLinearGradient(0, 0, p, 0);
  for (let $ = 0; $ <= 64; $++) {
    const Ot = y(p * $ / 64);
    dt.addColorStop($ / 64, et(Ot.c, Math.min(1, Ot.a)));
  }
  o.fillStyle = dt;
  for (let $ = 0; $ < 8; $++)
    o.globalAlpha = 1 - $ / 8, pt($ * 2 * X, ($ + 1) * 2 * X);
  o.fillStyle = U(x.filter(($) => $.night).map(($) => $.sky), 1.25);
  const mt = Math.max(0.5, H), nt = 6;
  o.globalAlpha = 1, pt(null, -mt);
  for (let $ = 0; $ < nt; $++)
    o.globalAlpha = 1 - ($ + 0.5) / nt, pt(-mt + 2 * mt * $ / nt, -mt + 2 * mt * ($ + 1) / nt);
  o.globalAlpha = 1;
  const z = new Path2D(Xu), Y = new Path2D(Ku), L = new Path2D(Zu), wt = new Path2D($u);
  o.fillStyle = b.star, c.stars.forEach(($) => {
    o.globalAlpha = $.o, $.big ? (o.save(), o.translate($.x, $.y), o.scale($.size, $.size), o.fill(z), o.restore()) : (o.beginPath(), o.arc($.x, $.y, 0.8, 0, Math.PI * 2), o.fill());
  }), o.globalAlpha = 1;
  const rt = xa(b.sun, "#ffffff", 0.55);
  c.suns.forEach(($) => {
    const Ot = o.createRadialGradient($.x, $.y, 0, $.x, $.y, $.halo);
    Ot.addColorStop(0, et(rt, 0.42)), Ot.addColorStop(0.7, et(rt, 0)), o.fillStyle = Ot, o.beginPath(), o.arc($.x, $.y, $.halo, 0, Math.PI * 2), o.fill();
    const N = o.createLinearGradient(0, $.y - $.rad, 0, $.y + $.rad);
    N.addColorStop(0.6, b.sun), N.addColorStop(1, b.sunEdge), o.fillStyle = N, at(!0), o.beginPath(), o.arc($.x, $.y, $.rad, 0, Math.PI * 2), o.fill(), at(!1);
  });
  const St = xa(b.moon, "#ffffff", 0.6);
  c.moons.forEach(($) => {
    o.save(), o.translate($.x - $.d / 2, $.y - $.d / 2), o.scale($.d / 46, $.d / 46);
    const Ot = o.createLinearGradient(0, 6, 0, 40);
    Ot.addColorStop(0, St), Ot.addColorStop(1, b.moon), o.fillStyle = Ot, at(!0), o.fill(Y), at(!1), o.restore();
  }), c.clouds.forEach(($) => {
    o.save(), o.globalAlpha = $.o, o.translate($.x, $.y), o.scale($.w / 46, $.h / 30.66), o.translate(-4, -9.67), o.fillStyle = $.fill, at(!0), o.fill(L), at(!1), o.restore();
  }), c.fogs.forEach(($) => {
    const Ot = o.createLinearGradient($.x, 0, $.x + $.w, 0);
    Ot.addColorStop(0, et($.c, 0)), Ot.addColorStop(0.25, et($.c, $.a)), Ot.addColorStop(0.75, et($.c, $.a)), Ot.addColorStop(1, et($.c, 0)), o.fillStyle = Ot, o.fillRect($.x, $.y, $.w, 6 * X);
  }), o.fillStyle = b.rain, c.drops.forEach(($) => {
    o.save(), o.globalAlpha = $.o, o.translate($.x, $.y), o.rotate(12 * Math.PI / 180), o.fillRect(-1.5, 0, 3, 9), o.restore();
  }), o.fillStyle = b.snow, c.flakes.forEach(($) => {
    o.globalAlpha = $.o, o.beginPath(), o.arc($.x, $.y, 2.2, 0, Math.PI * 2), o.fill();
  }), o.fillStyle = b.sun, c.bolts.forEach(($) => {
    o.save(), o.globalAlpha = $.o, o.translate($.x, $.y), o.fill(wt), o.restore();
  }), o.restore();
}
const nh = (o) => o === "sunny" ? "clear" : o === "clear-night" ? "night" : o === "partlycloudy" ? "partly" : ["rainy", "pouring", "lightning", "lightning-rainy", "hail"].includes(o) ? "rain" : ["snowy", "snowy-rainy"].includes(o) ? "snow" : "cloudy", Ln = { s: "M41.0875 21.224C40.4398 17.9648 38.6815 15.0313 36.1125 12.9237C33.5435 10.816 30.3229 9.66488 27 9.66651C21.4608 9.66651 16.65 12.8098 14.2542 17.3907C11.4355 17.6995 8.83007 19.0382 6.93769 21.1499C5.0453 23.2616 3.99919 25.9976 4 28.8332C4 31.8832 5.2116 34.8082 7.36827 36.9649C9.52494 39.1216 12.45 40.3332 15.5 40.3332H40.4167C41.6752 40.3332 42.9213 40.0853 44.084 39.6037C45.2468 39.1221 46.3032 38.4162 47.1931 37.5263C48.083 36.6364 48.7889 35.5799 49.2705 34.4172C49.7521 33.2545 50 32.0083 50 30.7498C50 25.6898 46.0708 21.5882 41.0875 21.224Z", sp: "M41.025 27.045C40.5181 24.4943 39.142 22.1985 37.1315 20.5491C35.121 18.8996 32.6005 17.9987 30 18C25.665 18 21.9 20.46 20.025 24.045C17.8191 24.2867 15.7801 25.3344 14.2991 26.987C12.8181 28.6396 11.9994 30.7809 12 33C12 35.3869 12.9482 37.6761 14.636 39.364C16.3239 41.0518 18.6131 42 21 42H40.5C41.4849 42 42.4602 41.806 43.3701 41.4291C44.2801 41.0522 45.1069 40.4997 45.8033 39.8033C46.4997 39.1069 47.0522 38.2801 47.4291 37.3701C47.806 36.4602 48 35.4849 48 34.5C48 30.54 44.925 27.33 41.025 27.045Z", lp: "M70.8016 48.008C69.9751 43.8493 67.7316 40.1062 64.4536 37.4168C61.1755 34.7275 57.0661 33.2587 52.8261 33.2607C45.7581 33.2607 39.6196 37.2716 36.5625 43.1167C32.9659 43.5108 29.6414 45.219 27.2267 47.9135C24.8121 50.608 23.4772 54.0991 23.4783 57.7173C23.4783 61.609 25.0243 65.3414 27.7761 68.0933C30.528 70.8452 34.2604 72.3912 38.1522 72.3912H69.9456C71.5515 72.3912 73.1416 72.0749 74.6252 71.4604C76.1088 70.8458 77.4568 69.9451 78.5923 68.8096C79.7278 67.6741 80.6286 66.3261 81.2431 64.8425C81.8576 63.3589 82.1739 61.7688 82.1739 60.1629C82.1739 53.7064 77.1603 48.4727 70.8016 48.008Z", lc: "M65.3723 37.5398C64.4356 32.8266 61.8929 28.5843 58.1778 25.5364C54.4627 22.4885 49.8054 20.8238 45 20.8262C36.9897 20.8262 30.0326 25.3718 26.5679 31.9963C22.4918 32.4429 18.724 34.3788 15.9874 37.4326C13.2508 40.4864 11.738 44.443 11.7391 48.5436C11.7391 52.9542 13.4913 57.1842 16.6101 60.3031C19.7289 63.4219 23.9589 65.174 28.3696 65.174H64.4022C66.2221 65.174 68.0243 64.8155 69.7057 64.1191C71.3871 63.4226 72.9149 62.4018 74.2018 61.1149C75.4887 59.828 76.5095 58.3002 77.2059 56.6188C77.9024 54.9374 78.2609 53.1353 78.2609 51.3153C78.2609 43.9979 72.5788 38.0664 65.3723 37.5398Z", lr: "M62.9755 28.4431C62.149 24.2844 59.9055 20.5412 56.6275 17.8519C53.3494 15.1626 49.24 13.6937 45 13.6958C37.9321 13.6958 31.7935 17.7067 28.7364 23.5518C25.1398 23.9459 21.8153 25.654 19.4006 28.3485C16.986 31.043 15.6511 34.5342 15.6522 38.1523C15.6522 42.0441 17.1982 45.7765 19.9501 48.5284C22.7019 51.2802 26.4343 52.8262 30.3261 52.8262H62.1196C63.7254 52.8262 65.3155 52.5099 66.7991 51.8954C68.2827 51.2809 69.6307 50.3802 70.7662 49.2447C71.9017 48.1092 72.8025 46.7611 73.417 45.2775C74.0315 43.7939 74.3478 42.2038 74.3478 40.598C74.3478 34.1415 69.3342 28.9078 62.9755 28.4431Z" }, di = {
  s: ["M21.0459 6.11182C19.2847 8.44583 18.2402 11.3513 18.2402 14.5005C18.2405 22.199 24.4811 28.4398 32.1797 28.4399C34.9446 28.4399 37.5211 27.634 39.6885 26.2456C38.1734 34.0818 31.2788 40.0005 23 40.0005C13.6113 40.0005 6.00026 32.3891 6 23.0005C6 14.2725 12.5775 7.08102 21.0459 6.11182Z", 6.11, 40],
  l: ["M41.1747 11.959C37.7298 16.5251 35.6875 22.2086 35.6874 28.3691C35.6874 43.4321 47.8979 55.6435 62.9608 55.6436C68.3701 55.6436 73.411 54.0676 77.6512 51.3516C74.6865 66.6826 61.197 78.2607 44.9999 78.2607C26.6305 78.2607 11.7391 63.3694 11.7391 45C11.7392 27.9244 24.6071 13.8562 41.1747 11.959Z", 11.96, 78.26],
  sp: ["M16.6201 5.0791C15.3771 6.72655 14.6397 8.7772 14.6396 11C14.6396 16.4345 19.046 20.8398 24.4805 20.8398C26.4326 20.8398 28.2502 20.2686 29.7803 19.2881C28.7119 24.821 23.8449 29 18 29C11.3726 29 6 23.6274 6 17C6 10.8393 10.6426 5.76349 16.6201 5.0791Z", 5.08, 29],
  lp: ["M32.5175 9.93848C30.0859 13.1616 28.6435 17.1729 28.6434 21.5215C28.6434 32.1541 37.2628 40.7733 47.8954 40.7734C51.7136 40.7734 55.2724 39.6622 58.2655 37.7451C56.1724 48.5666 46.6506 56.7391 35.2177 56.7393C22.251 56.7393 11.7391 46.2274 11.7391 33.2607C11.7393 21.2073 20.8226 11.2776 32.5175 9.93848Z", 9.94, 56.74]
}, tl = (o, r) => '<path class="' + r + '" d="' + o + '"/>', rh = (o, r) => ' style="animation-delay:-' + Math.round(o * 137 % r) + 'ms"', wa = (o, r, c, p) => {
  const g = c * 0.2687;
  return '<path class="wbTwinkle" fill="#fff"' + (p < 1 ? ' opacity="' + p + '"' : "") + rh(o, 2400) + ' d="M' + o + " " + (r - c) + "L" + (o + g) + " " + (r - g) + "L" + (o + c) + " " + r + "L" + (o + g) + " " + (r + g) + "L" + o + " " + (r + c) + "L" + (o - g) + " " + (r + g) + "L" + (o - c) + " " + r + "L" + (o - g) + " " + (r - g) + 'Z"/>';
}, td = ([o, r, c], p) => '<path class="wbMoonPath" d="' + o + '" fill="url(#' + p + ')"/><defs><linearGradient id="' + p + '" x1="0" y1="' + r + '" x2="0" y2="' + c + '" gradientUnits="userSpaceOnUse"><stop stop-color="#FFF4C7"/><stop offset="1" stop-color="#F2C95E"/></linearGradient></defs>', ih = (o, r) => r ? '<circle class="wbSunDisc" cx="45" cy="45" r="33.26" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="12" y1="8.5" x2="67" y2="73.5" gradientUnits="userSpaceOnUse"><stop offset=".653" stop-color="#FFE100"/><stop offset="1" stop-color="#F2C159"/></linearGradient></defs>' : '<circle class="wbSunDisc" cx="23" cy="23" r="17" fill="url(#' + o + ')"/><defs><linearGradient id="' + o + '" x1="23" y1="6" x2="23" y2="40" gradientUnits="userSpaceOnUse"><stop offset=".606" stop-color="#FFE100"/><stop offset="1" stop-color="#FFAA00"/></linearGradient></defs>', sh = (o) => (o ? ["29.35", "43.04", "56.74"].map((r, c) => '<g class="wbDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wbAccent" x="' + r + '" y="60.65" width="5.87" height="15.65" rx="2.93" transform="rotate(12 ' + r + ' 60.65)"/></g>') : [19, 26, 33].map((r, c) => '<g class="wbDrop" style="animation-delay:-' + c * 317 + 'ms"><rect class="wbAccent" width="3.03" height="9.41" rx="1.51" transform="matrix(0.9698 0.244 -0.1768 0.9843 ' + r + ' 38)"/></g>')).join(""), lh = (o) => (o ? [[33.67, 67.67], [47.67, 64.67], [61.67, 67.67], [40.67, 77.67], [54.67, 77.67]] : [[21.2, 42.2], [29.2, 40.2], [37.2, 42.2], [25.2, 48.2], [33.2, 48.2]]).map(([r, c], p) => '<circle class="wbFlake" style="animation-delay:-' + p * 640 + 'ms" cx="' + r + '" cy="' + c + '" r="' + (o ? 3.67 : 2.2) + '" fill="#fff"/>').join("");
function ch(o, r, c, p) {
  const g = (x) => '<g filter="url(#' + p + '-sh)">' + x + "</g>";
  return o === "clear" ? r ? g(td(c ? di.l : di.s, p)) + (c ? wa(70, 20, 5.83, 1) + wa(78.33, 41.67, 3.75, 0.8) + wa(60, 71.67, 3.33, 0.6) : wa(42, 12, 3.5, 1) + wa(47, 25, 2.25, 0.8) + wa(36, 43, 2, 0.6)) : g(ih(p, c)) : o === "partly" ? g(r ? td(c ? di.lp : di.sp, p) : c ? '<circle class="wbSunDisc" cx="35.22" cy="33.26" r="23.48" fill="#FFE100"/>' : '<circle class="wbSunDisc" cx="18" cy="17" r="12" fill="#FFE100"/>') + g(tl(c ? Ln.lp : Ln.sp, r ? "wbCloudLight" : "wbBright")) + (r ? c ? wa(73.33, 16.67, 4.17, 0.9) : wa(44, 10, 2.5, 0.9) : "") : o === "cloudy" ? g(tl(c ? Ln.lc : Ln.s, r ? "wbCloudLight" : "wbBright")) + (r ? c ? wa(15, 15, 3.75, 0.8) + wa(76.67, 13.33, 2.92, 0.6) : wa(9, 9, 2.25, 0.8) + wa(46, 8, 1.75, 0.6) : "") : g(tl(c ? Ln.lr : Ln.s, "wbCloudLight")) + (o === "rain" ? sh(c) : lh(c));
}
const dh = (o, r) => '<defs><filter id="' + o + '-sh" x="-25%" y="-25%" width="150%" height="160%"><feDropShadow dx="0" dy="' + (r ? 1.6 : 1) + '" stdDeviation="' + (r ? 1.8 : 1.1) + '" flood-color="#1c1208" flood-opacity=".22"/></filter></defs>';
function ph(o, r, c, p) {
  let g = nh(o);
  const x = g === "night" || !!c;
  g === "night" && (g = "clear");
  const b = r ? 90 : 54;
  return { k: g, night: x, svg: '<svg viewBox="0 0 ' + b + " " + b + '">' + dh(p, r) + ch(g, x, r, p) + "</svg>" };
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
], pi = (o, r) => (fh[r % 8 * 8 + o % 8] + 0.5) / 64, Ea = (o) => [parseInt(o.slice(1, 3), 16), parseInt(o.slice(3, 5), 16), parseInt(o.slice(5, 7), 16)], qe = (o, r, c) => [Math.round(o[0] + (r[0] - o[0]) * c), Math.round(o[1] + (r[1] - o[1]) * c), Math.round(o[2] + (r[2] - o[2]) * c)], wr = (o) => o < 0 ? 0 : o > 1 ? 1 : o, ed = (o, r) => {
  let c = o * 374761393 + r * 668265263 ^ 1540483477;
  return c = Math.imul(c ^ c >>> 13, 1274126177), ((c ^ c >>> 16) >>> 0) / 4294967296;
}, on = [255, 255, 255], Ke = Ea("#26221e"), ad = Ea("#0288d1"), uh = Ea("#01579b"), el = Ea(ka.cloudDay), al = Ea(ka.cloudNight), fi = Ea(ka.dusk), ol = Ea(ka.sunEdge), hh = Ea(ka.sun), mh = 10, od = 0.3, go = 56, dp = 21;
function gh(o) {
  const r = Array.from({ length: dp }, () => new Array(go).fill(void 0)), c = (b, A, B) => {
    r[A][b] = B;
  }, p = qe(fi, Ke, 0.35), g = qe(Ke, on, 0.22);
  for (let b = 0; b <= 6; b++) {
    const A = b < 2 ? go - 2 : go - 1;
    for (let B = 6 - b; B <= A; B++) c(B, b, b < 2 ? p : b === 6 ? g : Ke);
  }
  const x = [fi, ol, al, Ea(ka.skyRainDay), qe(fi, Ke, 0.2), qe(o, Ke, 0.35)];
  [2, 3, 2, 3, 3].forEach((b, A) => {
    const B = 9 + A * 6;
    for (let y = 0; y < b; y++) {
      const H = x[(A * 2 + y * 3) % x.length];
      for (let _ = B; _ < B + 5; _++)
        c(_, 7 + y * 2, qe(H, Ke, 0.12)), c(_, 8 + y * 2, y === b - 1 ? qe(H, on, 0.3) : H);
      c(B + 5, 7 + y * 2, Ke), c(B + 5, 8 + y * 2, Ke);
    }
  });
  for (let b = 7; b <= 12; b++) c(5, b, Ke);
  c(5, 13, ol);
  for (let b = 7; b <= 14; b++) for (let A = 42; A <= 51; A++) c(A, b, A === 51 ? al : el);
  for (let b = 43; b <= 50; b += 2)
    c(b, 12, Ke), c(b, 9, qe(Ke, el, 0.4));
  for (let b = 40; b <= 53; b++) c(b, 14, b === 40 || b === 53 ? al : el);
  for (let b = 15; b <= 18; b++) for (let A = 46; A <= 49; A++) c(A, b, b === 18 ? Ke : b === 16 ? ol : fi);
  for (let b = 15; b <= 19; b++) c(44, b, Ke);
  return c(44, 20, hh), r;
}
function bh(o, r, c, p) {
  const g = Math.max(1, Math.round(o)), x = Math.max(1, Math.round(r)), b = new Uint8ClampedArray(g * x * 4), A = Ea(p.skyClearDay), B = Ea(p.skyFogDay), y = gh(A), H = Math.round(x * 0.55), _ = wr(1 - Math.log(c / od) / Math.log(mh / od)), X = qe(A, B, _), K = (q) => wr((q - 0.1) / 0.9), at = wr((1 - Math.exp(-2 / c) - 0.2) / 0.8), et = Math.round(g / 2 - go / 2), U = H + 3;
  for (let q = 0; q < x; q++) {
    const pt = U - 1 - q, dt = q - U;
    for (let mt = 0; mt < g; mt++) {
      const nt = mt - et;
      let z, Y;
      const L = pt >= 0 && pt < dp && nt >= 0 && nt < go ? y[pt][nt] : void 0;
      if (L)
        z = L, Y = at;
      else if (pt >= 0 && pt <= 1 && nt >= 4 - pt && nt <= 5 - pt)
        z = qe(on, ad, 0.15), Y = at;
      else if (q < H) {
        const St = wr(((q + 0.5) / H - 0.15) / 0.85) * 3, $ = Math.min(3, Math.floor(St + pi(mt + 2, q + 5)));
        z = qe(X, on, $ * 0.1), Y = _ * 0.95;
      } else {
        const St = (q - H + 0.5) / (x - H), $ = Math.min(1.5, 6e-3 / (St * St)), Ot = wr(St * 1.4) * 3, N = Math.min(3, Math.floor(Ot + pi(mt + 1, q + 6)));
        z = qe(ad, uh, N / 3);
        const Z = 1 + Math.round(St * 7), D = Math.floor(mt / (Z * 3)), st = 0.06 + 0.16 * St, ot = mt % (Z * 3) < Z;
        ot && ed(D, q) < st ? z = qe(z, on, 0.18 + 0.1 * (1 - St)) : ot && St > 0.5 && ed(D, q - 1) < st && (z = qe(z, Ke, 0.12)), Y = K(1 - Math.exp(-$ / c)), dt === 0 && nt >= 3 && nt <= 8 ? (z = qe(z, on, nt < 6 ? 0.8 : 0.45), Y = at) : dt >= 0 && dt <= 2 && nt >= go && nt < go + 40 ? ((1 - (nt - go) / 40) * (dt === 1 ? 0.9 : 0.5) > pi(mt, q + 3) && (z = qe(z, on, 0.5)), Y = at) : dt === 0 && nt >= 6 && nt < go && (z = qe(z, Ke, nt % 2 === 0 ? 0.35 : 0.2), Y = at);
      }
      const wt = Y > pi(mt, q) ? B : z, rt = (q * g + mt) * 4;
      b[rt] = wt[0], b[rt + 1] = wt[1], b[rt + 2] = wt[2], b[rt + 3] = 255;
    }
  }
  return { data: b, w: g, h: x };
}
const wh = {
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
}, vh = 1.6;
function yh(o, r) {
  const c = o ? wh[String(o).toUpperCase()] : void 0;
  if (!c || !(r > 0)) return;
  const p = (x) => Math.abs(Math.log(x[2] / r)), g = c.reduce((x, b) => p(b) < p(x) ? b : x);
  return p(g) <= Math.log(vh) ? { from: g[0], to: g[1], km: g[2] } : void 0;
}
const xh = (o, r) => r === "mi" ? o * 1.609344 : r === "m" ? o / 1e3 : r === "ft" ? o * 3048e-7 : r === "yd" ? o * 9144e-7 : o, kh = (o) => o < 1 ? "very_poor" : o < 4 ? "poor" : o < 10 ? "moderate" : o < 20 ? "good" : o < 40 ? "very_good" : "excellent", ye = {
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
}, ke = { standard: "cubic-bezier(.2,0,0,1)", land: "cubic-bezier(.34,1.46,.64,1)", spring: "cubic-bezier(.2,1.2,.4,1)", soft: "cubic-bezier(.4,0,.2,1)", exit: "cubic-bezier(.4,0,1,1)" }, We = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
};
function Mh() {
  const { pivot: o, slider: r, iconbtn: c, warp: p, outline: g } = ye;
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
  ].map(([x, b]) => x + ":" + b).join(";");
}
const nl = ":is(button.primary,button.pill,.hcBtn,.wbRangeBtn,.activityRow.tap,.hcRow,a.hcRow)", Sh = "#homeView .tfAreaPanel", Ah = 300, Mi = (o) => Math.min(1, Ah / Math.max(1, o)), rl = (o, r) => 1 + (r / 100 - 1) * Mi(o.offsetWidth);
function Ch(o, r) {
  r.style.cssText += ";" + Mh();
  let c = null;
  const p = (H) => {
    H.classList.remove("mvMoving", "mvLit"), H.style.setProperty("--rx", "0deg"), H.style.setProperty("--ry", "0deg"), H.style.setProperty("--sc", 1), H._down = !1;
  };
  o.addEventListener("pointermove", (H) => {
    var q, pt;
    const _ = H.pointerType === "touch" || We() ? null : (pt = (q = H.target).closest) == null ? void 0 : pt.call(q, nl);
    if (c && c !== _ && p(c), c = _, !_ || _.disabled) return;
    const X = ye.pivot, K = _.getBoundingClientRect(), at = (H.clientX - K.left) / K.width, et = (H.clientY - K.top) / K.height, U = 1;
    _.classList.add("mvPv", "mvMoving", "mvLit"), _.style.setProperty("--pv-persp", X.persp / Mi(Math.max(_.offsetWidth, _.offsetHeight)) + "px"), _.style.setProperty("--ry", (U * (at - 0.5) * 2 * X.tilt * Mi(_.offsetWidth)).toFixed(3) + "deg"), _.style.setProperty("--rx", (U * -(et - 0.5) * 2 * X.tilt * Mi(_.offsetHeight)).toFixed(3) + "deg"), _.style.setProperty("--mx", (at * 100).toFixed(1) + "%"), _.style.setProperty("--my", (et * 100).toFixed(1) + "%"), _._down || _.style.setProperty("--sc", rl(_, X.lift));
  }, { passive: !0 }), o.addEventListener("pointerout", (H) => {
    c && !c.contains(H.relatedTarget) && (p(c), c = null);
  }), o.addEventListener("pointerdown", (H) => {
    var X, K;
    const _ = We() ? null : (K = (X = H.target).closest) == null ? void 0 : K.call(X, nl);
    _ && (_._down = !0, _.classList.add("mvPv"), _.classList.remove("mvMoving"), _.style.setProperty("--sc", rl(_, ye.pivot.press)));
  }), o.addEventListener("pointerup", (H) => {
    var X, K;
    const _ = (K = (X = H.target).closest) == null ? void 0 : K.call(X, nl);
    _ && (_._down = !1, _.style.setProperty("--sc", H.pointerType === "touch" ? 1 : rl(_, ye.pivot.lift)));
  });
  let g = null;
  o.addEventListener("pointerover", (H) => {
    var _, X, K;
    H.pointerType !== "touch" && ((K = (X = (_ = H.target).closest) == null ? void 0 : X.call(_, ".tfBar")) == null || K.classList.add("mvHover"));
  }), o.addEventListener("pointerout", (H) => {
    var X, K;
    const _ = (K = (X = H.target).closest) == null ? void 0 : K.call(X, ".tfBar");
    _ && !_.contains(H.relatedTarget) && _ !== g && _.classList.remove("mvHover");
  }), o.addEventListener("pointerdown", (H) => {
    var X, K;
    const _ = (K = (X = H.target).closest) == null ? void 0 : K.call(X, ".tfBar");
    _ && (g = _, _.classList.add("mvHold"));
  });
  const x = (H) => {
    if (!g) return;
    g.classList.remove("mvHold");
    const _ = g.getBoundingClientRect();
    (H.pointerType === "touch" || H.clientX < _.left || H.clientX > _.right || H.clientY < _.top || H.clientY > _.bottom) && g.classList.remove("mvHover"), g = null;
  };
  window.addEventListener("pointerup", x, !0), window.addEventListener("pointercancel", x, !0), o.addEventListener("focusin", (H) => {
    var _, X;
    (X = (_ = H.target).matches) != null && X.call(_, ".tfBar:focus-visible") && H.target.classList.add("mvHover");
  }), o.addEventListener("focusout", (H) => {
    var _;
    (_ = H.target.classList) == null || _.remove("mvHover", "mvHold");
  }), o.addEventListener("keydown", (H) => {
    var X, K;
    const _ = (K = (X = H.target).closest) == null ? void 0 : K.call(X, ".tfBar");
    !_ || !["ArrowRight", "ArrowUp", "ArrowLeft", "ArrowDown", "PageUp", "PageDown", "Home", "End"].includes(H.key) || (_.classList.add("mvHold"), clearTimeout(_._k), _._k = setTimeout(() => _.classList.remove("mvHold"), 350));
  }), o.addEventListener("click", (H) => {
    var X, K;
    const _ = (K = (X = H.target).closest) == null ? void 0 : K.call(X, "button.tfIcon[data-act]");
    _ && _h(_);
  });
  let b = null;
  const A = (H, _, X) => {
    H.querySelector(":scope>.mvEdge") || H.insertAdjacentHTML("afterbegin", '<span class="mvEdgeFill" aria-hidden="true"></span><span class="mvEdge" aria-hidden="true"><i></i></span>');
    const K = H.getBoundingClientRect(), at = K.width / 2, et = K.height / 2, U = _.clientX - K.left - at, q = _.clientY - K.top - et, pt = U ? at / Math.abs(U) : 1 / 0, dt = q ? et / Math.abs(q) : 1 / 0, mt = Math.min(Math.max(1 / Math.min(pt, dt), 0), 1);
    let nt = Math.atan2(q, U) * 180 / Math.PI + 90;
    nt < 0 && (nt += 360);
    const z = X ? 100 : mt * 100;
    H.style.setProperty("--edge-proximity", z.toFixed(3)), H.style.setProperty("--cursor-angle", nt.toFixed(3) + "deg"), H.classList.toggle("mvLitEdge", X || z >= ye.outline.lightAt);
  }, B = (H) => {
    H.classList.remove("mvLitEdge"), H.style.setProperty("--edge-proximity", "0"), H._down = !1;
  }, y = (H) => {
    var X;
    const _ = (X = H.closest) == null ? void 0 : X.call(H, Sh);
    return _ && !r.classList.contains("tfEditing") ? _ : null;
  };
  o.addEventListener("pointermove", (H) => {
    if (H.pointerType === "touch") return;
    const _ = y(H.target);
    b && b !== _ && B(b), b = _, _ && !_._down && A(_, H, !1);
  }, { passive: !0 }), o.addEventListener("pointerout", (H) => {
    b && !b.contains(H.relatedTarget) && (B(b), b = null);
  }), o.addEventListener("pointerdown", (H) => {
    const _ = y(H.target);
    _ && ye.outline.press && (_._down = !0, A(_, H, !0));
  }), o.addEventListener("pointerup", (H) => {
    const _ = y(H.target);
    _ && (_._down = !1, H.pointerType === "touch" ? B(_) : A(_, H, !1));
  }), new MutationObserver((H) => {
    var _;
    for (const X of H) {
      const K = X.target;
      if (X.type === "attributes") {
        (_ = K.classList) != null && _.contains("tfMoreBackdrop") && !K.hidden && X.oldValue !== null && nd(K);
        continue;
      }
      X.addedNodes.forEach((at) => {
        at.nodeType === 1 && at.classList.contains("tfMoreBackdrop") && !at.hidden && nd(at);
      });
    }
  }).observe(r, { childList: !0, subtree: !0, attributes: !0, attributeFilter: ["hidden"], attributeOldValue: !0 });
}
const pp = (o) => o.closest("[data-k],.tfMore,.tfMorePair") || o.getRootNode();
function fp(o, r) {
  const c = [];
  for (let p = o; p && p !== r && p.parentNode; p = p.parentNode) c.unshift([...p.parentNode.children].indexOf(p));
  return c;
}
const up = (o, r) => r.reduce((c, p) => c == null ? void 0 : c.children[p], o);
function _h(o) {
  var K;
  if (We() || o._warp) return;
  const r = ye.warp, c = r.amount / 100, p = o.firstElementChild;
  if (!p) return;
  const g = { squash: { scale: 1 + 0.35 * c + " " + (1 - 0.55 * c) }, pinch: { scale: String(1 - 0.5 * c) }, twist: { rotate: 140 * c + "deg", scale: String(1 - 0.35 * c) }, flip: { rotate: "y 90deg" } }[r.style], x = "blur(" + 2 * c + "px)", b = o.getRootNode(), A = pp(o), B = (K = A.dataset) == null ? void 0 : K.k, y = fp(o, A), H = o.getAttribute("aria-pressed") + "|" + o.dataset.act;
  o._warp = 1;
  const _ = p.animate([{ scale: "1", rotate: "none", filter: "blur(0px)" }, { ...g, filter: x }], { duration: r.win, easing: ke.exit, fill: "forwards" }), X = performance.now();
  _.finished.then(() => {
    const at = () => {
      var mt, nt;
      const et = B ? A.isConnected ? A : (mt = b.querySelector) == null ? void 0 : mt.call(b, '[data-k="' + CSS.escape(B) + '"]') : A, U = et && up(et, y);
      if (U === o && o.getAttribute("aria-pressed") + "|" + o.dataset.act === H && performance.now() - X < 420) {
        requestAnimationFrame(at);
        return;
      }
      (((nt = U == null ? void 0 : U.matches) != null && nt.call(U, "button.tfIcon") ? U : o).firstElementChild || p).animate([{ ...g, filter: x }, { scale: "1", rotate: "none", filter: "blur(0px)" }], { duration: r.wout, easing: ke[r.ease] }), _.cancel(), o._warp = 0;
    };
    at();
  });
}
const hp = (o) => {
  let r = "M" + o[0][0].toFixed(1) + " " + o[0][1].toFixed(1);
  for (let c = 0; c < o.length - 1; c++) {
    const p = o[c - 1] || o[c], g = o[c], x = o[c + 1], b = o[c + 2] || x, A = [g[0] + (x[0] - p[0]) / 6, g[1] + (x[1] - p[1]) / 6], B = [x[0] - (b[0] - g[0]) / 6, x[1] - (b[1] - g[1]) / 6];
    r += "C" + A.map((y) => y.toFixed(1)).join(" ") + " " + B.map((y) => y.toFixed(1)).join(" ") + " " + x.map((y) => y.toFixed(1)).join(" ");
  }
  return r;
}, mp = (o, r, c, p = "mvGrid") => [0, 1, 2].map((g) => {
  const x = (r + (c - r) * g / 2).toFixed(1);
  return '<line class="' + p + '" x1="0" x2="' + o + '" y1="' + x + '" y2="' + x + '"/>';
}).join("");
function gp(o, r = o.querySelector(".mvLine"), c = o.querySelectorAll(".mvArea,.mvDot")) {
  if (We() || !(r != null && r.getTotalLength)) return;
  const p = ye.graphs, g = r.getTotalLength();
  r.animate([{ strokeDasharray: g, strokeDashoffset: g }, { strokeDasharray: g, strokeDashoffset: 0 }], { duration: p.draw, easing: ke.standard }), [...c].forEach((x, b) => x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: p.draw * 0.6, delay: p.draw * 0.3 + b * 12, easing: ke.standard, fill: "backwards" }));
}
function Si(o, r, c, p, g) {
  if (o.getAnimations().forEach((H) => H.cancel()), o.style.left = p + "px", o.style.width = g + "px", We() || r === p && c === g) return;
  const x = ye.tabs, b = x.stretch / 100, A = (H, _) => ({ left: H + "px", width: _ + "px" }), y = p > r ? A(r + (p - r) * (0.15 * (1 - b)), p + g - (r + (p - r) * (0.15 * (1 - b)))) : A(p, r + c - p - (r - p) * (0.15 * (1 - b)));
  o.animate([A(r, c), { offset: 0.5, ...y }, A(p, g)], { duration: x.dur, easing: ke.standard });
}
function Th(o) {
  const r = ":is(.themeChoice,.wbSegments,.tfHeightTabs,.hcSeg,.tfSeg)", c = (g) => g.querySelector(':scope>[aria-pressed="true"],:scope>[aria-checked="true"],:scope>.active'), p = (g, x) => x ? [...g.children].indexOf(x) : -1;
  o.addEventListener("click", (g) => {
    var pt, dt, mt;
    const x = (dt = (pt = g.target).closest) == null ? void 0 : dt.call(pt, r + ">button"), b = x == null ? void 0 : x.parentElement;
    if (!b || We() || x.disabled) return;
    const A = c(b);
    if (!A || A === x) return;
    const B = p(b, A), y = b.getBoundingClientRect(), H = A.getBoundingClientRect(), _ = getComputedStyle(A).borderRadius, X = b.getRootNode(), K = pp(b), at = (mt = K.dataset) == null ? void 0 : mt.k, et = fp(b, K), U = performance.now(), q = () => {
      var $, Ot, N;
      const nt = at && !K.isConnected ? ($ = X.querySelector) == null ? void 0 : $.call(X, '[data-k="' + CSS.escape(at) + '"]') : K, z = nt && up(nt, et), Y = (Ot = z == null ? void 0 : z.matches) != null && Ot.call(z, r) ? c(z) : null;
      if (!Y || p(z, Y) === B) {
        performance.now() - U < 700 && requestAnimationFrame(q);
        return;
      }
      const L = z.getBoundingClientRect(), wt = Y.getBoundingClientRect(), rt = getComputedStyle(Y);
      (N = z.querySelector(":scope>.mvSegInd")) == null || N.remove();
      const St = document.createElement("span");
      St.className = "mvSegInd", St.style.cssText = "top:" + (wt.top - L.top - z.clientTop) + "px;height:" + wt.height + "px;border-radius:" + _ + ";background:" + rt.backgroundColor + ";box-shadow:" + rt.boxShadow, getComputedStyle(z).position === "static" && (z.style.position = "relative"), z.prepend(St), z.classList.add("mvSegMoving"), Si(St, H.left - y.left - z.clientLeft, H.width, wt.left - L.left - z.clientLeft, wt.width), clearTimeout(z._seg), z._seg = setTimeout(() => {
        St.remove(), z.classList.remove("mvSegMoving");
      }, ye.tabs.dur + 20);
    };
    requestAnimationFrame(q);
  }, !0);
}
const bp = (o) => getComputedStyle(o).placeItems.startsWith("end");
function nd(o) {
  const r = o.firstElementChild;
  if (We() || !r || r.classList.contains("still")) return;
  const c = ye.dialog;
  o.animate([{ opacity: 0, backdropFilter: "blur(0px)" }, { opacity: 1, backdropFilter: "blur(" + c.blur + "px)" }], { duration: c.open, easing: ke.standard }), r.style.animation = "none", r.animate(bp(o) ? [{ transform: "translateY(100%)" }, { transform: "none" }] : [{ opacity: 0, transform: "scale(" + c.from / 100 + ")" }, { opacity: 1, transform: "none" }], { duration: c.open, easing: ke[c.ease] }), [...(r.classList.contains("tfMorePair") && r.querySelector(".tfMore") || r).children].forEach((g, x) => g.animate([{ opacity: 0 }, { opacity: 1 }], { duration: c.open * 0.6, delay: c.open * 0.35 + x * 40, easing: ke.standard, fill: "backwards" }));
}
function Dh(o, r) {
  const c = o == null ? void 0 : o.firstElementChild;
  if (We() || !c || o.hidden || o._closing) {
    r();
    return;
  }
  const p = ye.dialog;
  o._closing = !0, o.style.pointerEvents = "none", o.animate([{ opacity: 1, backdropFilter: "blur(" + p.blur + "px)" }, { opacity: 0, backdropFilter: "blur(0px)" }], { duration: p.close, easing: ke.exit, fill: "forwards" });
  const g = c.animate(bp(o) ? [{ transform: "none" }, { transform: "translateY(100%)" }] : [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(" + p.from / 100 + ")" }], { duration: p.close, easing: ke.exit, fill: "forwards" });
  let x = !1;
  const b = () => {
    x || (x = !0, o._closing = !1, o.style.pointerEvents = "", o.getAnimations().forEach((A) => A.cancel()), c.getAnimations().forEach((A) => A.cancel()), r());
  };
  g.finished.then(b, b), setTimeout(b, p.close + 80);
}
const Lh = '<span class="mvTick" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M20 6L9 17L4 12" pathLength="1"/></svg></span>';
function Eh(o, r) {
  o.replaceChildren(), o.insertAdjacentHTML("afterbegin", Lh), o.appendChild(Object.assign(document.createElement("span"), { className: "mvToastText", textContent: r }));
}
function Bh(o) {
  if (We()) return;
  const r = ye.confirm;
  o.animate([{ opacity: 0, translate: "0 18px" }, { opacity: 1, translate: "0 0" }], { duration: r.dur, easing: ke.spring });
  const c = o.querySelector(".mvTick path");
  c && r.draw && c.animate([{ strokeDasharray: "1", strokeDashoffset: "1" }, { strokeDasharray: "1", strokeDashoffset: "0" }], { duration: 420, delay: r.dur * 0.5, easing: ke.standard, fill: "backwards" });
}
const rd = (o, r, c, p, g = 1) => (o + r * c * g) * Math.pow(p, g);
function id(o) {
  const r = ye.drag.squash / 100;
  !o || We() || !r || o.animate([{ transform: "scale(" + (1 + r * 0.4) + "," + (1 - r) + ")" }, { transform: "scale(" + (1 - r * 0.1) + "," + (1 + r * 0.24) + ")" }, { transform: "none" }], { duration: 340, easing: "ease-out" });
}
function sd(o) {
  if (!o || We()) return;
  const r = ye.expand;
  [...o.children].slice(1).forEach((c, p) => c.animate([{ opacity: 0, transform: "translateY(6px)" }, { opacity: 1, transform: "none" }], { duration: 260, delay: r.delay + p * r.stagger, easing: "cubic-bezier(.2,0,0,1)", fill: "backwards" }));
}
const Pe = 6e4, te = 36e5, oa = 864e5, xr = 1440, Rh = 6, Ph = 10 * Pe, ld = 3, Hh = 3, ui = { day: [6, 22], waking: [7, 23], all: [0, 24] }, Nh = [[-5, [91, 141, 239]], [5, [79, 195, 230]], [12, [95, 211, 160]], [18, [255, 211, 77]], [24, [255, 159, 67]], [30, [255, 91, 79]]], Oh = "M6.5 18.5h11a4 4 0 0 0 .4-7.98 5.5 5.5 0 0 0-10.6-1.1A4.5 4.5 0 0 0 6.5 18.5Z", cd = (o, r, c, p) => '<circle cx="' + o + '" cy="' + r + '" r="' + c + '"/><path d="' + [0, 45, 90, 135, 180, 225, 270, 315].map((g) => {
  const x = Math.cos(g * Math.PI / 180), b = Math.sin(g * Math.PI / 180), A = c + 2, B = c + 2 + p;
  return "M" + (o + x * A).toFixed(2) + " " + (r + b * A).toFixed(2) + "L" + (o + x * B).toFixed(2) + " " + (r + b * B).toFixed(2);
}).join("") + '"/>', co = (o) => '<path d="' + Oh + '"' + (o ? ' transform="' + o + '"' : "") + "/>", po = (o) => '<path d="' + o + '"/>', dd = '<path d="M19.5 14.5A7.5 7.5 0 1 1 9.5 4.5a6 6 0 0 0 10 10Z"/>';
function Ih(o, r) {
  const c = "translate(0,-3)";
  switch (o) {
    case "sunny":
      return r ? dd : cd(12, 12, 4, 2.5);
    case "clear-night":
      return dd;
    case "partlycloudy":
      return (r ? '<path d="M11.5 9.5A4.5 4.5 0 1 1 6 4a3.6 3.6 0 0 0 5.5 5.5Z"/>' : cd(7.5, 7.5, 2.6, 1.4)) + co("translate(3.6,3) scale(.85)");
    case "cloudy":
      return co();
    case "fog":
      return po("M4 8.5h16M3 12.5h18M5 16.5h14");
    case "rainy":
      return co(c) + po("M8.5 18.5 7.5 21M12.5 18.5l-1 2.5M16.5 18.5l-1 2.5");
    case "pouring":
      return co(c) + po("M7.5 18.5 6 22M11 18.5 9.5 22M14.5 18.5 13 22M18 18.5 16.5 22");
    case "snowy":
      return co(c) + po("M8 20h.01M12 21.5h.01M16 20h.01");
    case "snowy-rainy":
      return co(c) + po("M8.5 18.5 7.5 21M12 21h.01M16.5 18.5l-1 2.5");
    case "hail":
      return co(c) + '<circle cx="8" cy="20.5" r="1"/><circle cx="12" cy="21.5" r="1"/><circle cx="16" cy="20.5" r="1"/>';
    case "lightning":
      return co(c) + po("M12.5 16 10.5 19.5h3l-2 3");
    case "lightning-rainy":
      return co(c) + po("M12.5 16 10.5 19.5h3l-2 3M7.5 18.5l-1 2.5M17.5 18.5l-1 2.5");
    case "windy":
    case "windy-variant":
      return po("M3 8.5h10.5a2.5 2.5 0 1 0-2.5-2.5M3 12h15.5a2.5 2.5 0 1 1-2.5 2.5M3 15.5h8");
    default:
      return '<circle cx="12" cy="12" r="8"/>' + po("M12 8v5M12 16h.01");
  }
}
const il = (o, r) => '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + Ih(o, r) + "</svg>", Fh = /* @__PURE__ */ new Set(["rainy", "pouring", "lightning", "lightning-rainy", "hail", "snowy", "snowy-rainy"]), qh = 30 * Pe, Wh = 7, Vh = 3, pd = 1, jh = Pe, zh = 15 * Pe, Gh = 5, ee = {
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
  aqLevel: { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }
}, Uh = {
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
}, Yh = ["n", "nne", "ne", "ene", "e", "ese", "se", "sse", "s", "ssw", "sw", "wsw", "w", "wnw", "nw", "nnw"], Zh = Object.keys(ht.phases), Kh = { low: "var(--success-color, #43a047)", moderate: "var(--warning-color, #ffa600)", high: "var(--orange-color, #ff9800)", very_high: "var(--error-color, #db4437)", extreme: "var(--purple-color, #926bc7)" }, fd = { good: "var(--success-color, #43a047)", fair: "var(--lime-color, #cddc39)", moderate: "var(--warning-color, #ffa600)", poor: "var(--orange-color, #ff9800)", very_poor: "var(--error-color, #db4437)", extremely_poor: "var(--purple-color, #926bc7)" }, wp = [["good", 15], ["fair", 25], ["moderate", 37.5], ["poor", 50], ["very_poor", 75], ["extremely_poor", 1 / 0]], hi = 100, ud = "µg/m³", Xh = "weather_alerts.air_quality_pollen", Ti = ["aqi", "pm25", "pm10", "nitrogen_dioxide", "ozone"], $h = { "m/s": 1, "km/h": 1 / 3.6, mph: 0.44704, kn: 0.514444, "ft/s": 0.3048 }, Jh = [0.5, 1.6, 3.4, 5.5, 8, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7], Qh = { hPa: 1, mbar: 1, kPa: 10, inHg: 33.8639, mmHg: 1.33322 }, tm = { daily: 1, hourly: 2 }, yt = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Ie = (o, r) => o.replace(/\{(\w+)\}/g, (c, p) => r[p] ?? ""), ho = (o) => '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + o + '"/></svg>', hd = /* @__PURE__ */ new Map();
function vp(o) {
  let r = hd.get(o);
  if (r === void 0) {
    const c = "http://www.w3.org/2000/svg", p = document.createElementNS(c, "svg"), g = document.createElementNS(c, "path");
    p.setAttribute("viewBox", "0 0 24 24"), p.style.cssText = "position:absolute;width:24px;height:24px;visibility:hidden;pointer-events:none", g.setAttribute("d", o), p.append(g), document.body.append(p);
    const x = g.getBBox();
    p.remove();
    const b = Math.max(x.width, x.height), A = b ? 26 * 24 / b : 0, B = A / 24;
    r = b ? "width:" + A.toFixed(2) + "px;height:" + A.toFixed(2) + "px;translate:" + ((12 - x.x - x.width / 2) * B).toFixed(2) + "px " + ((12 - x.y - x.height / 2) * B).toFixed(2) + "px" : "", hd.set(o, r);
  }
  return r ? '<svg class="wbIcon" viewBox="0 0 24 24" aria-hidden="true" style="' + r + '"><path d="' + o + '"/></svg>' : ho(o);
}
const em = () => {
  var o;
  return !!((o = window.matchMedia) != null && o.call(window, "(prefers-reduced-motion: reduce)").matches);
}, ie = (o) => o != null && o !== "" && Number.isFinite(Number(o)), md = /* @__PURE__ */ new Map(), gd = /* @__PURE__ */ new Map(), sl = /* @__PURE__ */ new WeakMap(), am = (o) => {
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
  const g = (r == null ? void 0 : r.number_format) === "none", x = { maximumFractionDigits: 2, ...c, ...g ? { useGrouping: !1 } : {} }, b = g ? "en-US" : am(r), A = JSON.stringify([b, x]);
  let B = md.get(A);
  if (!B) {
    try {
      B = new Intl.NumberFormat(b, x);
    } catch {
      B = new Intl.NumberFormat(void 0, x);
    }
    md.set(A, B);
  }
  return B.format(p);
}
const kl = (o) => {
  var r;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.language) || (o == null ? void 0 : o.language) || void 0;
};
function om(o) {
  if (!o) return (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString().includes("10");
  if (sl.has(o)) return sl.get(o);
  const r = o.time_format, c = r === "language" || r === "system" || !r ? (/* @__PURE__ */ new Date("January 1, 2023 22:00:00")).toLocaleString(r === "language" ? o.language : void 0).includes("10") : r === "12";
  return sl.set(o, c), c;
}
const yp = (o) => {
  var r, c;
  return ((r = o == null ? void 0 : o.locale) == null ? void 0 : r.time_zone) === "server" && ((c = o == null ? void 0 : o.config) != null && c.time_zone) ? o.config.time_zone : void 0;
};
function xp(o, r) {
  const c = JSON.stringify([o, r]);
  let p = gd.get(c);
  if (!p) {
    try {
      p = new Intl.DateTimeFormat(o, r);
    } catch {
      p = new Intl.DateTimeFormat(void 0, { ...r, timeZone: void 0 });
    }
    gd.set(c, p);
  }
  return p;
}
const Fe = (o, r) => xp(kl(r), { hour: "numeric", minute: "2-digit", hourCycle: om(r == null ? void 0 : r.locale) ? "h12" : "h23", timeZone: yp(r) }).format(o), bd = (o, r) => xp(kl(r), { weekday: "short", timeZone: yp(r) }).format(o), nm = (o, r) => o.toLocaleDateString(kl(r), { weekday: "narrow" }), de = (o, r) => ie(r) ? zt(Math.round(Number(r)), o.locale) + "°" : "–", Po = (o) => {
  const r = new Date(o);
  return r.setHours(0, 0, 0, 0), r;
}, En = (o, r) => o.getFullYear() === r.getFullYear() && o.getMonth() === r.getMonth() && o.getDate() === r.getDate(), Xe = Math.PI / 180, rm = 2440588, im = 2451545, Di = Xe * 23.4397, sm = 149598e3, lm = -0.833 * Xe, cm = 0.133 * Xe, wd = 5 * Pe, kp = (o) => o.getTime() / oa - 0.5 + rm - im, Mp = (o, r) => Math.atan2(Math.sin(o) * Math.cos(Di) - Math.tan(r) * Math.sin(Di), Math.cos(o)), Sp = (o, r) => Math.asin(Math.sin(r) * Math.cos(Di) + Math.cos(r) * Math.sin(Di) * Math.sin(o)), dm = (o, r) => Xe * (280.16 + 360.9856235 * o) - r, pm = (o, r, c) => Math.asin(Math.sin(r) * Math.sin(c) + Math.cos(r) * Math.cos(c) * Math.cos(o));
function Ap(o) {
  const r = Xe * (357.5291 + 0.98560028 * o), c = Xe * (1.9148 * Math.sin(r) + 0.02 * Math.sin(2 * r) + 3e-4 * Math.sin(3 * r)), p = r + c + Xe * 102.9372 + Math.PI;
  return { ra: Mp(p, 0), dec: Sp(p, 0), dist: sm };
}
function Cp(o) {
  const r = Xe * (218.316 + 13.176396 * o), c = Xe * (134.963 + 13.064993 * o), p = Xe * (93.272 + 13.22935 * o), g = r + Xe * 6.289 * Math.sin(c), x = Xe * 5.128 * Math.sin(p);
  return { ra: Mp(g, x), dec: Sp(g, x), dist: 385001 - 20905 * Math.cos(c) };
}
const _p = (o, r, c, p) => {
  const g = kp(r), x = o(g);
  return pm(dm(g, Xe * -p) - x.ra, Xe * c, x.dec);
}, Li = (o, r, c) => _p(Ap, o, r, c), fm = (o, r, c) => _p(Cp, o, r, c);
function Tp(o, r, c, p) {
  const g = {};
  let x = c.getTime(), b = o(c) - r;
  for (let A = x + wd; A <= p.getTime(); A += wd) {
    const B = o(new Date(A)) - r;
    if (b < 0 != B < 0) {
      const y = new Date(x + (A - x) * b / (b - B));
      B > 0 ? g.rise ?? (g.rise = y) : g.set ?? (g.set = y);
    }
    x = A, b = B;
  }
  return g;
}
const Dp = (o) => {
  const r = Po(o);
  return [r, new Date(r.getTime() + oa)];
}, um = (o, r, c) => Tp((p) => Li(p, r, c), lm, ...Dp(o)), hm = (o, r, c) => Tp((p) => fm(p, r, c), cm, ...Dp(o));
function ll(o) {
  const r = kp(o), c = Ap(r), p = Cp(r), g = Math.acos(Math.sin(c.dec) * Math.sin(p.dec) + Math.cos(c.dec) * Math.cos(p.dec) * Math.cos(c.ra - p.ra)), x = Math.atan2(c.dist * Math.sin(g), p.dist - c.dist * Math.cos(g)), b = Math.atan2(Math.cos(c.dec) * Math.sin(c.ra - p.ra), Math.sin(c.dec) * Math.cos(p.dec) - Math.cos(c.dec) * Math.sin(p.dec) * Math.cos(c.ra - p.ra));
  return { fraction: (1 + Math.cos(x)) / 2, phase: 0.5 + 0.5 * x * (b < 0 ? -1 : 1) / Math.PI };
}
const mm = (o) => {
  const r = o * 28;
  return r < 0.5 || r > 27.5 ? "new_moon" : r < 6.5 ? "waxing_crescent" : r < 7.5 ? "first_quarter" : r < 13.5 ? "waxing_gibbous" : r < 14.5 ? "full_moon" : r < 20.5 ? "waning_gibbous" : r < 21.5 ? "last_quarter" : "waning_crescent";
}, kr = (o) => {
  const r = o == null ? void 0 : o.config;
  return r && ie(r.latitude) && ie(r.longitude) ? { lat: Number(r.latitude), lon: Number(r.longitude) } : null;
};
function Bn(o, r) {
  var y, H, _;
  const c = kr(o), p = c ? um(r, c.lat, c.lon) : {}, g = (y = o == null ? void 0 : o.states) == null ? void 0 : y["sun.sun"], x = Po(r).getTime(), b = (X) => {
    const K = X ? new Date(X) : null;
    return K && Number.isFinite(K.getTime()) && Po(K).getTime() === x ? K : null;
  }, A = b((H = g == null ? void 0 : g.attributes) == null ? void 0 : H.next_rising), B = b((_ = g == null ? void 0 : g.attributes) == null ? void 0 : _.next_setting);
  return A && (p.rise = A), B && (p.set = B), p;
}
function gm(o) {
  var p;
  const r = (p = o == null ? void 0 : o.states) == null ? void 0 : p["sun.sun"];
  if ((r == null ? void 0 : r.state) === "below_horizon" || (r == null ? void 0 : r.state) === "above_horizon") return r.state === "below_horizon";
  const c = kr(o);
  return c ? Li(/* @__PURE__ */ new Date(), c.lat, c.lon) < 0 : !1;
}
const nn = (o) => !!o && o.state !== "unavailable" && o.state !== "unknown", Hn = (o, r) => {
  var p;
  const c = (p = o.entities) == null ? void 0 : p[r];
  return !c || !c.hidden && !c.entity_category;
}, ve = (o, r, c) => {
  var p, g;
  for (const x of r) {
    const b = (p = o.states) == null ? void 0 : p[x];
    if (!nn(b)) continue;
    const A = (g = b.attributes) == null ? void 0 : g[c];
    if (A != null && A !== "") return { stateObj: b, value: A };
  }
}, bm = (o, r) => r.map((c) => {
  var p;
  return (p = o.states) == null ? void 0 : p[c];
}).find(nn), wm = (o, r, c) => r.map((p) => {
  var g;
  return (g = o.states) == null ? void 0 : g[p];
}).find((p) => {
  var g;
  return nn(p) && (((g = p.attributes) == null ? void 0 : g.supported_features) == null || Number(p.attributes.supported_features) & tm[c]);
});
function Ro(o, r, c) {
  var x, b, A, B;
  const p = ((b = (x = o.config) == null ? void 0 : x.unit_system) == null ? void 0 : b.length) || "", g = (r == null ? void 0 : r.attributes) || {};
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
      return g.temperature_unit || ((B = (A = o.config) == null ? void 0 : A.unit_system) == null ? void 0 : B.temperature) || "";
  }
}
function Ai(o, r, c, p) {
  try {
    if (typeof o.formatEntityAttributeValueToParts == "function") {
      const [g, ...x] = o.formatEntityAttributeValueToParts(r, c, p).map((b) => b.value);
      return { number: g, unit: x.join("").trim() };
    }
  } catch {
  }
  return { number: zt(p, o.locale), unit: Ro(o, r, c) };
}
function vd(o, r, c, p) {
  try {
    if (typeof o.formatEntityAttributeValue == "function") return o.formatEntityAttributeValue(r, c, p);
  } catch {
  }
  const g = Ai(o, r, c, p);
  return (g.number + " " + g.unit).trim();
}
function fo(o, r) {
  var p;
  try {
    if (typeof o.formatEntityState == "function") return o.formatEntityState(r);
  } catch {
  }
  const c = (p = r.attributes) == null ? void 0 : p.unit_of_measurement;
  return Uh[r.state] || (c && ie(r.state) ? zt(r.state, o.locale) + " " + c : r.state);
}
function Eo(o, r) {
  var c;
  try {
    if (typeof o.formatEntityName == "function") return o.formatEntityName(r, { type: "entity" });
  } catch {
  }
  return ((c = r.attributes) == null ? void 0 : c.friendly_name) || r.entity_id;
}
const yd = (o) => o < 3 ? "low" : o < 6 ? "moderate" : o < 8 ? "high" : o < 11 ? "very_high" : "extreme", mi = (o) => wp.find(([, r]) => o <= r)[0];
function vm(o, r) {
  if (r === "Beaufort") return Math.round(o);
  const c = r ? $h[r] : void 0;
  if (c === void 0) return;
  const p = Jh.findIndex((g) => o * c < g);
  return p === -1 ? 12 : p;
}
const xd = (o, r) => {
  const c = r ? Qh[r] : void 0;
  return c === void 0 ? void 0 : o * c;
}, kd = (o) => Object.keys(o.states || {}).find((r) => {
  var c, p;
  return r.startsWith("sensor.") && ((p = (c = o.entities) == null ? void 0 : c[r]) == null ? void 0 : p.platform) === "moon";
}), cl = (o) => Object.values(o.states || {}).filter((r) => {
  var c, p;
  return r.entity_id.startsWith("sensor.") && ((c = r.attributes) == null ? void 0 : c.device_class) === "precipitation" && ["total", "total_increasing"].includes(((p = r.attributes) == null ? void 0 : p.state_class) ?? "") && Hn(o, r.entity_id);
}).map((r) => r.entity_id).sort()[0];
function ym(o) {
  var c;
  const r = {};
  for (const [p, g] of Object.entries(((c = o == null ? void 0 : o.core) == null ? void 0 : c.integration) ?? {})) {
    if (g && "integration_type" in g) {
      r[p] = g.categories;
      continue;
    }
    for (const [x, b] of Object.entries((g == null ? void 0 : g.integrations) ?? {})) r[x] = b == null ? void 0 : b.categories;
  }
  return r;
}
const Lp = (o, r, c) => {
  var g, x, b;
  const p = (x = (g = o.entities) == null ? void 0 : g[c]) == null ? void 0 : x.platform;
  return !!p && !!((b = r[p]) != null && b.includes(Xh));
};
function xm(o, r) {
  const c = /* @__PURE__ */ new Map();
  return Object.values(o.states || {}).filter((p) => {
    var g;
    return p.entity_id.startsWith("sensor.") && Ti.includes(((g = p.attributes) == null ? void 0 : g.device_class) ?? "") && Hn(o, p.entity_id) && Lp(o, r, p.entity_id);
  }).sort((p, g) => p.entity_id.localeCompare(g.entity_id)).forEach((p) => {
    c.has(p.attributes.device_class) || c.set(p.attributes.device_class, p.entity_id);
  }), Ti.map((p) => c.get(p)).filter(Boolean);
}
const km = (o, r) => Object.values(o.states || {}).filter((c) => {
  var p, g;
  return c.entity_id.startsWith("sensor.") && Hn(o, c.entity_id) && Lp(o, r, c.entity_id) && (((g = (p = o.entities) == null ? void 0 : p[c.entity_id]) == null ? void 0 : g.translation_key) ?? c.entity_id).toLowerCase().includes("pollen");
}).map((c) => c.entity_id).sort();
function Md(o, r, c) {
  const p = Math.max(r - o, 1e-6), g = c[c.length - 1], x = c.find((y) => p / y <= 4) ?? g * Math.ceil(p / (4 * g)), b = Math.floor(o / x) * x;
  let A = Math.ceil(r / x) * x;
  A === b && (A = b + x);
  const B = [];
  for (let y = b; y <= A + x / 1e3; y += x) B.push(y);
  return { min: b, max: A, ticks: B };
}
const Mm = (o, r, c) => {
  const p = (b) => [1, 3, 5].map((A) => parseInt(b.slice(A, A + 2), 16)), g = p(o), x = p(r);
  return "rgb(" + g.map((b, A) => Math.round(b + (x[A] - b) * c)).join(", ") + ")";
}, Sm = (o, r, c, p) => {
  const g = c * Math.abs(1 - 2 * p), x = p < 0.5 ? 0 : 1;
  return "M " + o + " " + (r - c) + " A " + c + " " + c + " 0 0 0 " + o + " " + (r + c) + " A " + g + " " + c + " 0 0 " + x + " " + o + " " + (r - c) + " Z";
}, Ze = ({ icon: o, name: r, sub: c, visual: p, double: g, backdrop: x, cls: b, zone: A, callouts: B }) => '<div class="wbCard wbSquare' + (g ? " wbDouble" : "") + (x ? " wbHasBackdrop" : "") + (A != null ? " wbZoned" : "") + (b ? " " + b : "") + '">' + (x ? '<div class="wbBackdrop" aria-hidden="true">' + x + "</div>" : "") + '<div class="wbHead"><div class="wbChip wbPlain">' + vp(o) + '</div><div class="wbText"><span class="wbName">' + yt(r) + "</span>" + (c ? '<span class="wbSub">' + yt(c) + "</span>" : "") + "</div></div>" + (A != null ? '<div class="wbZone">' + A + "</div>" + (B != null && B.length ? '<div class="wbCallouts">' + B.slice(0, 3).map((y) => Array.isArray(y) ? '<span class="wbCallout"><span>' + yt(y[0]) + "</span><span>" + yt(y[1]) + "</span></span>" : '<span class="wbCallout wbAdvice"><span>' + yt(y) + "</span></span>").join("") + "</div>" : "") : '<div class="wbVisual">' + p + "</div>") + "</div>", gi = (o) => '<div class="wbZoneM">' + o + "</div>", va = (o, r) => '<div class="wbValue"><span class="wbNum">' + yt(o) + "</span>" + (r ? '<span class="wbUnitV">' + yt(r) + "</span>" : "") + "</div>";
function Am(o) {
  const r = o.max - o.min || 1, c = (A) => 100 - (Math.min(o.max, Math.max(o.min, A)) - o.min) / r * 100, p = (A) => A / xr * 100 + "%", g = (A) => A.map((B) => B.t + "," + c(B.v)).join(" "), x = o.kind === "line" ? o.points : [];
  let b = '<div class="wbDayChart"><div class="wbDcSun">' + o.sun.map((A) => '<span class="wbDcSunMark" style="left:' + p(A.t) + '">' + ho(A.rise ? ee.sunsetUp : ee.sunsetDown) + yt(A.label) + "</span>").join("") + "</div>";
  return b += '<div class="wbDcY">' + o.ticks.map((A) => '<span style="top:' + c(A) + '%">' + yt(o.format(A)) + "</span>").join("") + "</div>", b += '<div class="wbDcPlot"><svg viewBox="0 0 ' + xr + ' 100" preserveAspectRatio="none">' + o.night.map(([A, B]) => '<rect class="wbDcNight" x="' + A + '" y="0" width="' + (B - A) + '" height="100"></rect>').join("") + o.ticks.map((A) => '<line class="wbDcGrid" x1="0" x2="' + xr + '" y1="' + c(A) + '" y2="' + c(A) + '" vector-effect="non-scaling-stroke"></line>').join("") + o.sun.map((A) => '<line class="wbDcSunLine" x1="' + A.t + '" x2="' + A.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>').join("") + (o.past && o.past.length > 1 ? '<polyline class="wbDcPast" points="' + g(o.past) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (x.length > 1 ? '<polygon class="wbDcArea" points="' + x[0].t + ",100 " + g(x) + " " + x[x.length - 1].t + ',100"></polygon><polyline class="wbDcLine" points="' + g(x) + '" vector-effect="non-scaling-stroke"></polyline>' : "") + (o.now ? '<line class="wbDcNow" x1="' + o.now.t + '" x2="' + o.now.t + '" y1="0" y2="100" vector-effect="non-scaling-stroke"></line>' : "") + "</svg>" + (o.kind === "bars" ? o.points.filter((A) => A.v > 0).map((A) => '<i class="wbDcBar" style="left:' + p(A.t + 12) + ";width:" + p(36) + ";height:" + (100 - c(A.v)) + '%"></i>').join("") : "") + (o.now && o.kind === "line" ? '<i class="wbDcDot" style="left:' + p(o.now.t) + ";top:" + c(o.now.v) + '%"></i>' : "") + (o.peak ? '<span class="wbDcPeak" style="left:' + p(o.peak.t) + ";top:" + c(o.peak.v) + '%">' + yt(o.peak.label) + "</span>" : "") + (o.note ? '<span class="wbDcNote">' + yt(o.note) + "</span>" : "") + "</div>", b += '<div class="wbDcX">' + o.hours.map((A) => '<span class="' + (A.minor ? "wbMinor" : "") + '" style="left:' + p(A.t) + '">' + yt(A.label) + "</span>").join("") + "</div></div>", b;
}
function Sd(o, r, c = 120, p = 300) {
  const b = o.map((q) => q.value), A = Math.min(...b), B = Math.max(...b), y = B - A || 1, H = (q) => q / (o.length - 1) * p, _ = (q) => 18 + (1 - (q - A) / y) * (c - 18 - 18), X = o.map((q, pt) => [H(pt), _(q.value)]), K = X.length > 2 ? hp(X) : "M" + X.map((q) => q[0].toFixed(1) + " " + q[1].toFixed(1)).join("L"), at = b.indexOf(B), et = b.indexOf(A), U = (q) => q === 0 ? "start" : q === o.length - 1 ? "end" : "middle";
  return '<svg class="wbChart" viewBox="0 0 ' + p + " " + c + '" aria-hidden="true">' + mp(p, 18, c - 18) + ('<path class="wbArea" d="' + K + "L" + p + " " + (c - 18) + "L0 " + (c - 18) + 'Z"></path>') + '<path class="wbLine" d="' + K + '" vector-effect="non-scaling-stroke"></path><text x="' + H(at) + '" y="' + (_(B) - 6) + '" text-anchor="' + U(at) + '">' + yt(r(B)) + '</text><text x="' + H(et) + '" y="' + (_(A) + 14) + '" text-anchor="' + U(et) + '">' + yt(r(A)) + '</text><text x="0" y="' + c + '" text-anchor="start">' + yt(o[0].label) + '</text><text x="' + p + '" y="' + c + '" text-anchor="end">' + yt(o[o.length - 1].label) + "</text></svg>";
}
function Cm(o, r) {
  const x = o.map((_) => _.value).concat([]), b = Math.min(...x) - 2, A = Math.max(...x) + 1, B = A - b || 1, y = 300 / o.length, H = (_) => (1 - (_ - b) / B) * 104;
  return '<svg class="wbChart" viewBox="0 0 300 120" aria-hidden="true">' + o.map((_, X) => '<rect class="wbBar' + (_.now ? " wbNowBar" : "") + '" x="' + (X * y + y * 0.2) + '" y="' + H(_.value) + '" width="' + y * 0.6 + '" height="' + (104 - H(_.value)) + '" rx="6"></rect><text x="' + (X * y + y / 2) + '" y="120" text-anchor="middle">' + yt(_.label) + "</text>").join("") + "</svg>";
}
const _m = [
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
], Tm = [[60, 92, 2.2], [72, 98, 1.6], [48, 100, 1.5], [85, 88, 1.8], [38, 92, 1.3], [66, 84, 1.2], [95, 80, 1.3], [25, 40, 1.4], [82, 30, 1.3], [55, 108, 1.2]], Ad = [[54.4, 95, 1.8], [44.5, 56.6, 1.5], [33.5, 56.6, 1.1], [23.7, 40.1, 1.1]], Dm = [[30, 62], [48, 48], [72, 60], [96, 82], [86, 112], [30, 108], [16, 86]];
let Lm = 0;
function Cd(o, { getHass: r, entityId: c, style: p = "bitmap", motion: g = !0, cards: x, onOpen: b, hoursWindow: A } = {}) {
  var Wr, $n;
  const B = "wb" + ++Lm + "-", y = document.createElement("div");
  y.className = "wb", y.dataset.style = p;
  const H = document.createElement("div");
  H.className = "wbBento", y.appendChild(H), o.replaceChildren(y);
  const _ = document.createElement("div");
  _.className = "wb wbPopup", _.dataset.style = p, _.hidden = !0;
  const X = ["aq_tile", "pollen_tile", "radar_tile"], K = ["current", "hourly", "sun", "pollen_tile", "moon", "uv_index", "aq_tile", "humidity", "pressure", "wind", "visibility", "radar_tile", "compared_to_average", "precipitation", "air_quality"].filter((l) => !x || x.includes(l)), at = { current: "wide", hourly: "wide", compared_to_average: "double" }, et = ["sun", "moon", "uv_index", "aq_tile", "pollen_tile", "humidity", "pressure", "wind"], U = {};
  K.forEach((l) => {
    const u = document.createElement("div");
    u.className = "wbItem", u.dataset.card = l, u.dataset.size = at[l] || "tile", u.hidden = !0, et.includes(l) && (u.dataset.xl = ""), H.appendChild(u), U[l] = { el: u, html: null };
  });
  let q = !1, pt = null, dt = 0, mt = -1, nt = !1, z = null, Y = "";
  const L = "homecore-next-view", wt = (() => {
    try {
      return localStorage.getItem(L);
    } catch {
      return null;
    }
  })(), rt = { graph: void 0, range: { preset: "day" }, picking: !1, openDay: void 0, opener: void 0, dayMode: "temperature", hourlyMode: "temperature", hourlyView: wt === "bars" ? "bars" : "strip", aq: void 0 }, St = { todayHistory: void 0, rain: void 0, temperatureHistory: void 0, pressureHistory: void 0, aqHistory: void 0, categories: void 0, lastFetch: 0 };
  let $ = /* @__PURE__ */ new Date(), Ot = /* @__PURE__ */ new Date();
  const N = {}, Z = {}, D = {}, st = (l) => {
    var u;
    return ((u = D[l]) == null ? void 0 : u.forecast) ?? [];
  }, ot = (l, u) => {
    var m;
    return D[u] ? (m = l.states) == null ? void 0 : m[D[u].entityId] : void 0;
  };
  function it(l) {
    const u = Z[l];
    u && (u.unsub.then((m) => {
      typeof m == "function" && m();
    }).catch(() => {
    }), delete Z[l]), D[l] && delete D[l];
  }
  function vt(l, u, m) {
    var C;
    if (typeof ((C = l.connection) == null ? void 0 : C.subscribeMessage) != "function") return;
    const w = { entityId: m };
    try {
      w.unsub = Promise.resolve(l.connection.subscribeMessage((E) => {
        q || Z[u] !== w || (E != null && E.forecast ? D[u] = { entityId: m, forecast: E.forecast } : delete D[u], qo());
      }, { type: "weather/subscribe_forecast", forecast_type: u, entity_id: m }));
    } catch (E) {
      w.unsub = Promise.reject(E);
    }
    w.unsub.catch(() => {
      Z[u] === w && delete Z[u];
    }), Z[u] = w;
  }
  function ut(l, u) {
    var m;
    for (const w of ["daily", "hourly"]) {
      const C = wm(l, u, w);
      ((m = Z[w]) == null ? void 0 : m.entityId) !== (C == null ? void 0 : C.entity_id) && (it(w), C && vt(l, w, C.entity_id));
    }
  }
  const bt = (l, u, m, w = !1) => l.callWS({
    type: "history/history_during_period",
    start_time: m.toISOString(),
    end_time: (/* @__PURE__ */ new Date()).toISOString(),
    entity_ids: [u],
    minimal_response: w,
    no_attributes: w,
    significant_changes_only: !1
  });
  async function It(l, u) {
    var W, G, V;
    const m = ve(l, u, "pressure");
    if (!m) return;
    const w = m.stateObj.entity_id, C = await bt(l, w, new Date(Date.now() - 3 * te)), E = (V = (G = (W = C == null ? void 0 : C[w]) == null ? void 0 : W.find((J) => {
      var tt;
      return typeof ((tt = J.a) == null ? void 0 : tt.pressure) == "number";
    })) == null ? void 0 : G.a) == null ? void 0 : V.pressure;
    St.pressureHistory = typeof E == "number" ? { entityId: w, value: E } : void 0;
  }
  async function re(l, u) {
    var G;
    const m = ve(l, u, "temperature");
    if (!m) return;
    const w = m.stateObj.entity_id, C = Po(/* @__PURE__ */ new Date()), E = await bt(l, w, new Date(C.getTime() - Wh * oa)), W = /* @__PURE__ */ new Map();
    for (const V of (E == null ? void 0 : E[w]) ?? []) {
      const J = (G = V.a) == null ? void 0 : G.temperature, tt = new Date((V.lc ?? V.lu) * 1e3);
      if (typeof J != "number" || tt >= C) continue;
      const ft = tt.toDateString();
      W.set(ft, Math.max(W.get(ft) ?? -1 / 0, J));
    }
    St.temperatureHistory = { entityId: w, dailyHighs: [...W.values()], days: [...W.entries()].map(([V, J]) => ({ date: new Date(V), high: J })) };
  }
  async function gt(l) {
    const u = cl(l);
    if (!u) return;
    const m = await l.callWS({ type: "recorder/statistic_during_period", statistic_id: u, rolling_window: { duration: { hours: 24 } } });
    St.rain = { entityId: u, change: (m == null ? void 0 : m.change) ?? void 0 };
  }
  function He() {
    const l = r == null ? void 0 : r();
    if (!l || q || typeof l.callWS != "function") return;
    const u = na(l);
    St.lastFetch = Date.now(), [It(l, u), re(l, u), gt(l)].forEach((m) => m.then(() => qo(), () => {
    }));
  }
  async function wo() {
    const l = r == null ? void 0 : r();
    if (!l) return;
    const u = ve(l, na(l), "temperature");
    if (!u) return;
    const m = u.stateObj.entity_id, w = Po(/* @__PURE__ */ new Date());
    try {
      const C = await bt(l, m, w), E = (W) => ((C == null ? void 0 : C[m]) ?? []).map((G) => {
        var V;
        return { time: G.lu * 1e3, value: (V = G.a) == null ? void 0 : V[W] };
      }).filter((G) => typeof G.value == "number");
      St.todayHistory = { day: w.toDateString(), fetched: Date.now(), temperature: E("temperature"), humidity: E("humidity") }, qo();
    } catch {
    }
  }
  async function Ho(l) {
    const u = r == null ? void 0 : r();
    if (u)
      try {
        const m = await bt(u, l, new Date(Date.now() - 24 * te), !0), w = ((m == null ? void 0 : m[l]) ?? []).filter((E) => ie(E.s)), C = Math.max(1, Math.ceil(w.length / 48));
        St.aqHistory = { entityId: l, points: w.filter((E, W) => W % C === 0).map((E) => ({ label: Fe(new Date(E.lu * 1e3), u), value: Number(E.s) })) }, qo();
      } catch {
      }
  }
  function vo(l) {
    St.categories === void 0 && (St.categories = null, Promise.resolve().then(() => l.callWS({ type: "integration/descriptions" })).then((u) => {
      St.categories = ym(u);
    }, () => {
      St.categories = {};
    }).then(() => qo()));
  }
  function na(l) {
    var m;
    const u = Object.keys(l.states || {}).filter((w) => w.startsWith("weather.") && Hn(l, w)).sort();
    return c && ((m = l.states) != null && m[c]) ? [c, ...u.filter((w) => w !== c)] : u;
  }
  const _t = (l) => St.categories ? { air: xm(l, St.categories), pollen: km(l, St.categories) } : { air: [], pollen: [] };
  function le(l, u, m, w) {
    if (p === "line") return '<span class="wbWx wbS' + u + ' wbLineIcon" aria-hidden="true">' + il(l, m || l === "clear-night") + "</span>";
    if (p === "smooth") {
      const C = ph(l, u === 90, m, B + "g-" + w);
      return '<span class="wbWx wbS' + u + " wb" + C.k[0].toUpperCase() + C.k.slice(1) + (C.night ? " wbNight" : "") + '" aria-hidden="true">' + C.svg + "</span>";
    }
    return '<span class="wbWx wbS' + u + '" aria-hidden="true"><canvas data-wb-wx="' + yt($d(l, m)) + '" data-size="' + u + '"></canvas></span>';
  }
  const sa = () => st("daily").filter((l) => l.templow != null).slice(0, Rh);
  function Wt(l, u) {
    const m = new Date(u.datetime), w = /* @__PURE__ */ new Date();
    return En(m, w) ? ht.today : En(m, new Date(w.getTime() + oa)) ? ht.tomorrow : bd(m, l);
  }
  const Ya = (l, u, m) => m === 0 ? Wt(l, u) : bd(new Date(u.datetime), l);
  function Nn(l, u) {
    var tt, ft, Bt, Tt;
    const m = bm(l, u);
    if (!m) return "";
    const w = sa(), C = rt.openDay !== void 0 ? w[rt.openDay] : void 0, E = ve(l, u, "temperature"), W = w[0], G = W && En(new Date(W.datetime), /* @__PURE__ */ new Date()), V = ((ft = (tt = l.config) == null ? void 0 : tt.unit_system) == null ? void 0 : ft.temperature) || ((Bt = m.attributes) == null ? void 0 : Bt.temperature_unit) || "";
    let J = '<div class="wbCard wbWeather' + (C ? " wbIsOpen" : "") + '"><div class="wbClosed"' + (C ? " inert" : "") + '><div class="wbNow">' + (b ? '<button class="wbCurrent wbOpenPage" data-wb="open-page" data-wb-focus="open-page" aria-label="' + yt(ht.openPage) + '">' : '<div class="wbCurrent">') + le(m.state, 90, gm(l), "now") + '<div class="wbTempBlock">' + (E && ie(E.value) ? '<div class="wbTemp"><span class="wbDeg">' + yt(zt(Math.round(Number(E.value)), l.locale)) + '</span><span class="wbUnit">' + yt(V) + "</span></div>" : "") + '<div class="wbPlace">' + yt(((Tt = l.config) == null ? void 0 : Tt.location_name) ?? "") + "</div></div>" + (b ? "</button>" : "</div>") + '<div class="wbCondition"><div class="wbCondName">' + yt(fo(l, m)) + "</div>" + (G && W.templow != null ? '<div class="wbRange">' + yt(Ie(ht.range, { high: de(l, W.temperature), low: de(l, W.templow) })) + "</div>" : "") + "</div></div>";
    if (J += Ar(l) + ca(l), w.length) {
      const kt = G && E && ie(E.value) ? de(l, E.value) : "", Et = (Dt, lt, Ht) => Dt === 0 && kt ? '<span class="wbAsDay">' + yt(lt) + '</span><span class="wbAsNow">' + yt(Ht) + "</span>" : yt(lt);
      J += '<div class="wbColumns" role="list">' + w.map((Dt, lt) => '<button class="wbColumn" role="listitem" data-wb="day" data-index="' + lt + '" data-wb-focus="col-' + lt + '"><span class="wbDay">' + Et(lt, Ya(l, Dt, lt), ht.now) + "</span>" + le(Dt.condition ?? "cloudy", 60, !1, "col" + lt) + '<span class="wbTemps"><span class="wbHi">' + Et(lt, de(l, Dt.temperature), kt) + '</span><span class="wbLo">' + yt(de(l, Dt.templow)) + "</span></span></button>").join("") + "</div>", J += '<div class="wbHalves" role="list">' + w.map((Dt, lt) => '<button class="wbTile" role="listitem" data-wb="day" data-index="' + lt + '" data-wb-focus="half-' + lt + '">' + le(Dt.condition ?? "cloudy", 40, !1, "half" + lt) + '<span class="wbText"><span class="wbName">' + yt(Wt(l, Dt)) + '</span><span class="wbSub">' + yt(Ie(ht.highLow, { high: de(l, Dt.temperature), low: de(l, Dt.templow) })) + "</span></span></button>").join("") + "</div>";
    }
    return J + "</div>" + (C ? No(l, u, C) : "") + "</div>";
  }
  const qt = {
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
  }, la = {
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
  function Sr(l) {
    const u = Date.now(), m = st("hourly").filter((ft) => new Date(ft.datetime).getTime() > u - te).slice(0, 13);
    if (m.length < 2) return "";
    const w = (ft) => Fe(new Date(ft.datetime), l), C = (ft) => qt[ft.condition] || "", E = (ft) => la[ft.condition] || ft.condition;
    let W = C(m[0]);
    if (!W) return "";
    let G = m[0], V = 0;
    for (const ft of m.slice(1))
      V === 2 || E(ft) === E(G) || !C(ft) || (W += (V ? " and " : ", ") + C(ft) + " from " + w(ft), G = ft, V++);
    const J = Number(m[0].temperature), tt = m.filter((ft) => ie(ft.temperature));
    if (ie(J) && tt.length) {
      const ft = tt.reduce((Tt, kt) => Number(kt.temperature) < Number(Tt.temperature) ? kt : Tt), Bt = tt.reduce((Tt, kt) => Number(kt.temperature) > Number(Tt.temperature) ? kt : Tt);
      J - Number(ft.temperature) >= 3 ? W += ", down to " + de(l, ft.temperature) + " by " + w(ft) : Number(Bt.temperature) - J >= 3 && (W += ", up to " + de(l, Bt.temperature) + " by " + w(Bt));
    }
    return W[0].toUpperCase() + W.slice(1) + ".";
  }
  const Ar = (l) => {
    const u = Sr(l);
    return u ? '<div class="wbSummary"><p class="wbSummaryText">' + yt(u) + "</p></div>" : "";
  };
  function ca(l) {
    const [u, m] = ui[A == null ? void 0 : A()] || ui.day, w = Date.now(), C = st("hourly").filter((E) => {
      const W = new Date(E.datetime), G = W.getHours();
      return W.getTime() > w - te / 2 && G >= u && G < m && ie(E.temperature);
    }).slice(0, 4);
    return C.length ? '<div class="wbNextHours" role="list">' + C.map((E, W) => '<div class="wbHour" role="listitem"><span class="wbHourTime">' + yt(Fe(new Date(E.datetime), l)) + "</span>" + le(E.condition ?? "cloudy", 40, E.is_daytime === !1, "hr" + W) + '<span class="wbHourTemp">' + yt(de(l, E.temperature)) + "</span></div>").join("") + "</div>" : "";
  }
  function Me(l) {
    const u = l.getTime(), m = Date.now() - te;
    return st("hourly").filter((w) => {
      const C = new Date(w.datetime).getTime();
      return C >= u && C < u + oa && C > m;
    });
  }
  function Cr(l) {
    if (!l.length) return ["temperature"];
    const u = ["temperature"];
    return l.some((m) => m.precipitation != null || m.precipitation_probability != null) && u.push("precipitation"), l.some((m) => m.humidity != null) && u.push("humidity"), u;
  }
  function No(l, u, m) {
    const w = Po(new Date(m.datetime)), C = Me(w), E = Cr(C), W = E.includes(rt.dayMode) ? rt.dayMode : "temperature", G = (V) => V === "humidity" ? ht.humidity : ht.modes[V];
    return '<div class="wbOpen" data-wb-open="day"><div class="wbOpenHead">' + le(m.condition ?? "cloudy", 40, !1, "open") + '<div class="wbText"><span class="wbName">' + yt(Wt(l, m)) + '</span><span class="wbSub">' + yt(Ie(ht.highLow, { high: de(l, m.temperature), low: de(l, m.templow) })) + '</span></div><button class="wbBack" title="' + yt(ht.back) + '" data-wb="close-day" data-wb-focus="back-day">' + ho(ee.back) + "</button></div>" + (E.length > 1 ? '<div class="wbDayTabs"><div class="wbSegments" role="group">' + E.map((V) => '<button aria-pressed="' + (V === W) + '" data-wb="day-mode" data-mode="' + V + '" data-wb-focus="day-mode-' + V + '">' + yt(G(V)) + "</button>").join("") + "</div></div>" : "") + '<div class="wbGraph">' + Am(_r(l, u, w, C, W)) + "</div></div>";
  }
  function _r(l, u, m, w, C) {
    var yn;
    const E = m.getTime(), W = Date.now(), G = En(m, /* @__PURE__ */ new Date()), V = (Ut) => (Ut - E) / Pe, J = (Ut) => Fe(new Date(Ut), l), tt = (Ut) => new Date(Ut.datetime).getTime(), ft = [0, 3, 6, 9, 12, 15, 18, 21].map((Ut) => ({ t: Ut * 60, label: J(E + Ut * te), minor: Ut % 6 !== 0 })), { rise: Bt, set: Tt } = Bn(l, m), kt = [], Et = [];
    Bt && (kt.push({ t: V(Bt.getTime()), label: J(Bt.getTime()), rise: !0 }), Et.push([0, V(Bt.getTime())])), Tt && (kt.push({ t: V(Tt.getTime()), label: J(Tt.getTime()), rise: !1 }), Et.push([V(Tt.getTime()), xr]));
    const Dt = kr(l);
    !Bt && !Tt && Dt && Li(new Date(E + oa / 2), Dt.lat, Dt.lon) < 0 && Et.push([0, xr]);
    const lt = G ? V(W) : void 0, Ht = { hours: ft, sun: kt, night: Et };
    if (!w.length && !G) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    if (C === "precipitation") {
      const Ut = w.some((je) => je.precipitation_probability != null), ma = w.map((je) => ({ t: V(tt(je)), v: Number((Ut ? je.precipitation_probability : je.precipitation) ?? 0) })), _o = Ro(l, ot(l, "hourly"), "precipitation"), Go = Math.max(0, ...ma.map((je) => je.v)), xn = Ut ? 100 : Md(0, Math.max(Go, 1), [0.5, 1, 2, 5, 10]).max, Jn = (je) => Ut ? zt(je, l.locale) + "%" : zt(je, l.locale, { maximumFractionDigits: 1 }) + " " + _o, kn = ma.find((je) => je.v === Go);
      return {
        ...Ht,
        kind: "bars",
        points: ma,
        min: 0,
        max: xn,
        ticks: [0, xn / 2, xn],
        format: Jn,
        now: lt !== void 0 ? { t: lt, v: 0 } : void 0,
        peak: kn && Go > 0 ? { t: kn.t + 30, v: kn.v, label: Jn(kn.v) } : void 0,
        note: Go > 0 ? void 0 : ht.noRain
      };
    }
    const Rt = C === "humidity" ? "humidity" : "temperature", he = w.filter((Ut) => Ut[Rt] != null && (!G || tt(Ut) >= W)).map((Ut) => ({ t: V(tt(Ut)), v: Number(Ut[Rt]) }));
    let At, ae = [];
    if (lt !== void 0) {
      const Ut = ve(l, u, Rt);
      Ut && ie(Ut.value) && (At = { t: lt, v: Number(Ut.value) }, he.unshift(At)), ae = (((yn = St.todayHistory) == null ? void 0 : yn.day) === m.toDateString() ? St.todayHistory[Rt] : []).filter((_o) => _o.time <= W).map((_o) => ({ t: Math.max(0, V(_o.time)), v: _o.value })), At && ae.length && ae.push(At);
    }
    const oe = [...ae, ...he];
    if (!oe.length) return { ...Ht, kind: "line", points: [], min: 0, max: 1, ticks: [], format: String, note: ht.noHourly };
    const ia = oe.map((Ut) => Ut.v), Qa = Md(Math.min(...ia), Math.max(...ia), Rt === "humidity" ? [5, 10, 20, 25] : [1, 2, 5, 10]);
    Rt === "humidity" && (Qa.min = Math.max(0, Qa.min), Qa.max = Math.min(100, Qa.max), Qa.ticks = Qa.ticks.filter((Ut) => Ut >= 0 && Ut <= 100));
    const Vr = Rt === "humidity" ? (Ut) => zt(Ut, l.locale) + "%" : (Ut) => de(l, Ut), zo = Rt === "temperature" ? oe.reduce((Ut, ma) => ma.v > Ut.v ? ma : Ut) : void 0;
    return { ...Ht, kind: "line", points: he, past: ae, ...Qa, format: Vr, now: At, peak: zo ? { ...zo, label: Vr(zo.v) } : void 0 };
  }
  function rn(l) {
    const u = ["temperature"];
    return l.some((m) => m.precipitation_probability != null || m.precipitation != null) && u.push("precipitation"), l.some((m) => m.wind_speed != null) && u.push("wind"), u;
  }
  function Tr(l, u, m = ld) {
    var E, W;
    const w = st("daily"), C = [];
    for (let G = 0; G < m; G++) for (const V of [!1, !0]) {
      const J = l.getTime() + (G * 24 + (V ? 12 : 0)) * te, tt = J + 12 * te, ft = {};
      u.forEach((Tt) => {
        const kt = new Date(Tt.datetime).getTime();
        Tt.condition && kt >= J && kt < tt && (ft[Tt.condition] = (ft[Tt.condition] ?? 0) + (Fh.has(Tt.condition) ? 2 : 1));
      });
      let Bt = (E = Object.entries(ft).sort((Tt, kt) => kt[1] - Tt[1])[0]) == null ? void 0 : E[0];
      if (!Bt) {
        const Tt = new Date(J).toDateString();
        Bt = ((W = w.find((kt) => new Date(kt.datetime).toDateString() === Tt)) == null ? void 0 : W.condition) ?? "cloudy";
      }
      C.push({ cond: V && Bt === "sunny" ? "clear-night" : Bt, night: V });
    }
    return C;
  }
  function yo(l, u, m) {
    const w = ot(l, "hourly"), C = u.precipitation_probability != null ? zt(u.precipitation_probability, l.locale) + "%" : "", E = u.precipitation ? zt(u.precipitation, l.locale) + " " + Ro(l, w, "precipitation") : "";
    switch (m) {
      case "precipitation":
        return C ? [C, E] : [E || "–", ""];
      case "wind":
        return u.wind_speed != null ? [zt(Math.round(u.wind_speed), l.locale), Ro(l, w, "wind_speed")] : ["–", ""];
      default:
        return [de(l, u.temperature), (u.precipitation_probability ?? 0) >= 20 ? C : ""];
    }
  }
  function Ei(l, u, m) {
    const [w, C] = ui[A == null ? void 0 : A()] || ui.day, E = [];
    for (let W = 0; W < 4 && E.length < 3; W++) {
      const G = /* @__PURE__ */ new Date();
      G.setHours(0, 0, 0, 0), G.setDate(G.getDate() + W);
      const V = new Date(G);
      V.setHours(C, 0, 0, 0), G.setHours(w, 0, 0, 0), !(V.getTime() <= m || !u.some((J) => {
        const tt = new Date(J.datetime).getTime();
        return tt >= G.getTime() && tt <= V.getTime();
      })) && E.push({ a: G.getTime(), b: V.getTime(), label: Wt(l, { datetime: G.toISOString() }) });
    }
    return E;
  }
  function Ba(l, u, m, w, C, E) {
    const W = (m.b - u.a) / te, G = (lt) => ((lt - u.a) / te).toFixed(3), V = 80, J = 32, tt = [];
    for (const lt = new Date(u.a - oa); lt.getTime() < m.b + oa; lt.setDate(lt.getDate() + 1)) {
      const { rise: Ht, set: Rt } = Bn(l, new Date(lt));
      Ht && Rt && tt.push({ rise: Ht.getTime(), set: Rt.getTime() });
    }
    const ft = (lt, Ht) => V - (V - J) * Math.sin(Math.PI * (Ht - lt.rise) / (lt.set - lt.rise)), Bt = (lt) => !tt.some((Ht) => lt >= Ht.rise && lt <= Ht.set);
    let Tt = "", kt = "", Et = "";
    tt.forEach((lt, Ht) => {
      const Rt = [];
      for (let At = lt.rise; At <= lt.set; At += 15 * Pe) Rt.push(G(At) + "," + ft(lt, At).toFixed(2));
      Rt.push(G(lt.set) + "," + V), Tt += '<polyline class="wbLineArc" points="' + Rt.join(" ") + '"/>';
      const he = tt[Ht + 1];
      he && (Tt += '<rect class="wbLineNight" x="' + G(lt.set) + '" y="0" width="' + ((he.rise - lt.set) / te).toFixed(3) + '" height="100"/>'), [[lt.rise, "↑"], [lt.set, "↓"]].forEach(([At, ae]) => {
        At < u.a || At > m.b || (kt += '<line class="wbLineEdge" x1="' + G(At) + '" x2="' + G(At) + '" y1="0" y2="100"/>', Et += '<span class="wbLineTime" style="left:' + E(At) + '">' + ae + " " + yt(Fe(new Date(At), l)) + "</span>");
      });
    });
    const Dt = tt.find((lt) => C >= lt.rise && C <= lt.set);
    return '<svg class="wbLineArt" viewBox="0 0 ' + W + ' 100" preserveAspectRatio="none" aria-hidden="true">' + Tt + kt + '<line class="wbLineHorizon" x1="0" x2="' + W + '" y1="' + V + '" y2="' + V + '"/></svg>' + Et + (Dt ? '<span class="wbLineNow" style="left:' + E(C) + ";top:" + ft(Dt, C) + '%">' + il("sunny", !1) + "</span>" : "") + w.filter((lt) => lt.entry && !lt.now).map((lt) => '<span class="wbLineGlyph' + lt.edge + '" style="left:' + E(lt.t) + '">' + il(lt.entry.condition ?? "cloudy", Bt(lt.t)) + "</span>").join("");
  }
  function Se(l, u) {
    delete N.hourly;
    const m = rt.hourlyView === "bars" ? "bars" : "strip", w = '<div class="wbHeader"><h2 class="wbTitle">' + yt(m === "bars" ? ht.nextDays : ht.nextHours) + '</h2><div class="wbSegments wbViews" role="group" aria-label="' + yt(ht.showAs) + '">' + ["strip", "bars"].map((At) => '<button aria-pressed="' + (At === m) + '" data-wb="hourly-view" data-view="' + At + '" data-wb-focus="hourly-view-' + At + '">' + yt(ht.views[At]) + "</button>").join("") + "</div></div>";
    if (m === "bars") return Dr(l, u, w);
    const C = st("hourly"), E = Math.floor(Date.now() / Pe) * Pe, W = C.filter((At) => new Date(At.datetime).getTime() > E - te);
    if (!W.length) return "";
    const G = rn(W), V = G.includes(rt.hourlyMode) ? rt.hourlyMode : "temperature", J = Ei(l, C, E);
    if (!J.length) return "";
    const tt = J[0], ft = J[J.length - 1], Bt = (tt.b - tt.a) / te, Tt = (At) => "calc(var(--wb-u) * " + ((At - tt.a) / te).toFixed(3) + ")", kt = new Date(tt.a);
    kt.setHours(6, 0, 0, 0), kt.getTime() > tt.a && kt.setDate(kt.getDate() - 1);
    const Et = Math.ceil((ft.b - kt.getTime()) / oa);
    p !== "line" && (N.hourly = { segs: Tr(kt, C, Et), seed: kt.getDate(), columns: Et });
    const Dt = (At) => At === tt.a ? " wbFirst" : At === ft.b ? " wbLast" : "", lt = [];
    for (let At = tt.a; At < ft.b; ) {
      const ae = new Date(At);
      ae.setHours(24, 0, 0, 0);
      const oe = Math.min(ae.getTime(), ft.b);
      lt.push({ a: At, b: oe, label: Wt(l, { datetime: new Date(At).toISOString() }), page: J.find((ia) => ia.a >= At && ia.a < oe) || J.find((ia) => ia.a < oe && ia.b > At) }), At = oe;
    }
    const Ht = E > tt.a && E < ft.b ? Math.floor((E - tt.a) / (2 * te)) * 2 : 0, Rt = [];
    for (let At = tt.a; At <= ft.b; At += te) {
      const ae = new Date(At), oe = Dt(At);
      !oe && ae.getHours() % Hh || !oe && (Math.abs(tt.a - At) < 2 * te || Math.abs(ft.b - At) < 2 * te) || E >= tt.a && Math.abs(At - E) < 1.5 * te && !oe || Rt.push({ t: At, edge: oe, label: Fe(ae, l), entry: At >= E - te ? C.find((ia) => new Date(ia.datetime).getTime() === At) : void 0 });
    }
    E > tt.a && E < tt.b && Rt.push({ t: E, edge: E - tt.a < te ? " wbFirst" : tt.b - E < te ? " wbLast" : "", label: ht.now, entry: W[0], now: !0 });
    const he = (At, ae) => '<span class="wbMark' + At.edge + (At.now ? " wbNowMark" : "") + '" style="left:' + Tt(At.t) + '">' + ae + "</span>";
    return '<div class="wbCard wbHc wbHourly">' + w + (G.length > 1 ? '<div class="wbTabs"><div class="wbSegments" role="group">' + G.map((At) => '<button aria-pressed="' + (At === V) + '" data-wb="hourly-mode" data-mode="' + At + '" data-wb-focus="hourly-mode-' + At + '">' + yt(ht.modes[At]) + "</button>").join("") + "</div></div>" : "") + '<div class="wbStripScroll wbPaged" tabindex="0" aria-label="' + yt(ht.nextHours) + '" data-span="' + Bt + '" data-start="' + Ht + '"><div class="wbStrip" style="--wb-u:calc(100cqw / ' + Bt + ");width:calc(var(--wb-u) * " + (ft.b - tt.a) / te + ')">' + // a stop every two hours (Matt, 1 Nov): a swipe settles on one, a flick runs on past several
    [...Array(Math.floor((ft.b - tt.a) / (2 * te)) + 1)].map((At, ae) => '<i class="wbSnap" style="left:' + Tt(tt.a + ae * 2 * te) + '"></i>').join("") + '<div class="wbDays">' + lt.map((At, ae) => {
      var oe;
      return '<span class="wbDaySpan" style="width:calc(var(--wb-u) * ' + ((At.b - At.a) / te).toFixed(3) + ')"><button class="wbDayName" data-wb="hours-day" data-hours="' + (ae === 0 ? Ht : ((((oe = At.page) == null ? void 0 : oe.a) ?? At.a) - tt.a) / te) + '" data-wb-focus="hours-day-' + ae + '">' + yt(At.label) + "</button></span>";
    }).join("") + '</div><div class="wbRow wbTimes">' + Rt.map((At) => he(At, yt(At.label))).join("") + "</div>" + (p === "line" ? '<div class="wbSky wbLineSky">' + Ba(l, tt, ft, Rt, E, Tt) : '<div class="wbSky"><div class="wbSkyArt" style="left:' + Tt(kt.getTime()) + ";width:calc(var(--wb-u) * " + Et * 24 + ')"><canvas data-wb-strip="hourly"' + (p === "smooth" ? "" : ' class="wbPixels"') + "></canvas></div>") + (E > tt.a ? '<i class="wbPast" style="width:' + Tt(Math.min(E, ft.b)) + '"></i><i class="wbNowLine" style="left:' + Tt(E) + '"></i>' : "") + lt.slice(1).map((At) => '<i class="wbMidnight" style="left:' + Tt(At.a) + '"></i>').join("") + '</div><div class="wbRow wbValues">' + Rt.map((At) => {
      if (!At.entry) return "";
      const [ae, oe] = yo(l, At.entry, V);
      return he(At, '<span class="wbPrimaryV">' + yt(ae) + '</span><span class="wbSecondary">' + yt(oe) + "</span>");
    }).join("") + "</div></div></div></div>";
  }
  function On(l) {
    const u = Nh, m = u.findIndex(([V]) => V >= l);
    if (m <= 0) return "rgb(" + u[m < 0 ? u.length - 1 : 0][1].join(",") + ")";
    const [w, C] = u[m - 1], [E, W] = u[m], G = (l - w) / (E - w);
    return "rgb(" + C.map((V, J) => Math.round(V + (W[J] - V) * G)).join(",") + ")";
  }
  function Dr(l, u, m) {
    var Tt;
    const w = st("daily").filter((kt) => ie(kt.templow) && ie(kt.temperature)).slice(0, 7);
    if (!w.length) return "";
    const C = Math.min(...w.map((kt) => Number(kt.templow))), E = Math.max(...w.map((kt) => Number(kt.temperature))), W = Math.max(1, E - C), G = (kt) => Math.max(0, Math.min(100, (kt - C) / W * 100)).toFixed(2), V = /F/.test(Ro(l, ot(l, "daily"), "temperature")), J = (kt) => V ? (kt - 32) / 1.8 : kt, tt = "linear-gradient(90deg," + [0, 0.25, 0.5, 0.75, 1].map((kt) => On(J(C + kt * W)) + " " + kt * 100 + "%").join(",") + ")", ft = (Tt = ve(l, u, "temperature")) == null ? void 0 : Tt.value;
    return '<div class="wbCard wbHc wbHourly wbBars' + (rn(st("hourly").filter((kt) => new Date(kt.datetime).getTime() > Date.now() - te)).length > 1 ? " wbTabbed" : "") + '">' + m + '<div class="wbDayBars" role="list">' + w.map((kt, Et) => {
      const Dt = Wt(l, kt), lt = En(new Date(kt.datetime), /* @__PURE__ */ new Date()), Ht = Number(kt.templow), Rt = Number(kt.temperature);
      return '<div class="wbDayBar" role="listitem" aria-label="' + yt(Ie(ht.rangeRow, { day: Dt, low: de(l, Ht), high: de(l, Rt) })) + '"><span class="wbRangeDay">' + yt(Dt) + "</span>" + le(kt.condition, 40, !1, "r" + Et) + '<span class="wbRangeLo">' + yt(de(l, Ht)) + '</span><span class="wbRangeTrack"><i class="wbRangeFill" style="background:' + tt + ";clip-path:inset(0 " + (100 - G(Rt)) + "% 0 " + G(Ht) + '% round 4px)"></i>' + (lt && ie(ft) ? '<i class="wbRangeNow" style="left:' + G(Number(ft)) + '%"></i>' : "") + '</span><span class="wbRangeHi">' + yt(de(l, Rt)) + "</span></div>";
    }).join("") + "</div></div>";
  }
  const In = [[-120, "#0d1530"], [-60, "#1c2550"], [-15, "#c9707a"], [30, "#f2a46a"], [60, "#b49bc8"], [90, "#5aa5e6"]], jt = [[-90, "#5aa5e6"], [-60, "#a99bd0"], [-30, "#f0a54a"], [15, "#c45a5a"], [60, "#3a2a5c"], [120, "#0d1530"]], xt = (l, u) => {
    if (u <= l[0][0]) return l[0][1];
    for (let m = 1; m < l.length; m++) if (u <= l[m][0]) {
      const [w, C] = l[m - 1], [E, W] = l[m];
      return Mm(C, W, (u - w) / (E - w));
    }
    return l[l.length - 1][1];
  }, Ae = (l, u, m) => {
    if (!u || !m) return In[5][1];
    const w = (l.getTime() - m.getTime()) / Pe;
    return w >= -90 ? xt(jt, w) : xt(In, (l.getTime() - u.getTime()) / Pe);
  }, Jt = (l) => (l >= 60 ? Math.floor(l / 60) + "h " : "") + l % 60 + "m";
  function Ve(l) {
    const u = $, { rise: m, set: w } = Bn(l, u), C = m && w ? Math.round((w.getTime() - m.getTime()) / Pe) : 0, E = Math.floor(C / 60), W = C % 60, G = (he) => he ? Fe(he, l) : "–", V = new Date(u);
    V.setDate(V.getDate() + 1);
    const J = Bn(l, V), tt = J.rise && J.set ? Math.round((J.set.getTime() - J.rise.getTime()) / Pe) : 0, ft = new Date(u);
    ft.setDate(ft.getDate() - 1);
    const Bt = !!(m && w && u >= m && u <= w), Tt = !!(m && u < m), kt = Bt ? m : Tt ? Bn(l, ft).set : w, Et = Bt ? w : Tt ? m : J.rise, Dt = kt && Et ? Math.min(1, Math.max(0, (u.getTime() - kt.getTime()) / (Et.getTime() - kt.getTime()))) : 0, lt = Et ? Math.max(0, Math.round((Et.getTime() - u.getTime()) / Pe)) : 0, Ht = Et ? Jt(lt) : "–", Rt = Bt ? ht.untilSunset : ht.untilSunrise;
    return Ze({
      icon: ee.sunny,
      name: ht.sun,
      sub: C ? Ie(ht.daylightShort, { hours: E, minutes: W }) : void 0,
      cls: "wbSunTile",
      callouts: [[ht.callout.riseTomorrow, G(J.rise)], [ht.callout.setTomorrow, G(J.set)], ...tt ? [[ht.callout.dayTomorrow, Math.floor(tt / 60) + "h " + tt % 60 + "m"]] : []],
      zone: '<div class="wbSunZone" style="background:' + Ae(u, m, w) + '"><svg class="wbSunTrack" data-up="' + (Bt ? 1 : 0) + '" data-f="' + Dt.toFixed(4) + '" aria-hidden="true"></svg><div class="wbSunCount"><span class="wbSunLeft">' + yt(Ht) + '</span><span class="wbSunWord">' + yt(Rt) + '</span></div><span class="wbSunAt wbSunRise">' + yt(G(m)) + '</span><span class="wbSunAt wbSunSet">' + yt(G(w)) + "</span></div>" + // at M, the countdown alone (Matt, 10 Nov): M's zone has room for one line
      gi(va(Ht, ""))
    });
  }
  const xo = 22;
  function Fn(l) {
    const u = Math.round(l.clientWidth), m = Math.round(l.clientHeight), w = xo, C = w / 2, E = u + "x" + m + ":" + l.dataset.f + ":" + l.dataset.up;
    if (u < w * 3 || m < w * 3 || l.dataset.drawn === E) return;
    l.dataset.drawn = E;
    const W = "M" + C + " " + (m - w) + "V" + w + "A" + C + " " + C + " 0 0 1 " + w + " " + C + "H" + (u - w) + "A" + C + " " + C + " 0 0 1 " + (u - C) + " " + w + "V" + (m - w), G = "M" + (u - C) + " " + (m - w) + "A" + C + " " + C + " 0 0 1 " + (u - w) + " " + (m - C) + "H" + w + "A" + C + " " + C + " 0 0 1 " + C + " " + (m - w), V = 16, J = 6, tt = "M" + V + " 0H" + (u - V) + "A" + V + " " + V + " 0 0 1 " + u + " " + V + "V" + (m - V) + "A" + V + " " + V + " 0 0 1 " + (u - V) + " " + m + "H" + V + "A" + V + " " + V + " 0 0 1 0 " + (m - V) + "V" + V + "A" + V + " " + V + " 0 0 1 " + V + " 0ZM" + (w + J) + " " + w + "A" + J + " " + J + " 0 0 0 " + w + " " + (w + J) + "V" + (m - w - J) + "A" + J + " " + J + " 0 0 0 " + (w + J) + " " + (m - w) + "H" + (u - w - J) + "A" + J + " " + J + " 0 0 0 " + (u - w) + " " + (m - w - J) + "V" + (w + J) + "A" + J + " " + J + " 0 0 0 " + (u - w - J) + " " + w + "Z", ft = l.dataset.up === "1", Bt = Number(l.dataset.f) || 0, Tt = "http://www.w3.org/2000/svg";
    l.setAttribute("viewBox", "0 0 " + u + " " + m);
    const kt = document.createElementNS(Tt, "path");
    kt.setAttribute("d", ft ? W : G), l.replaceChildren(kt);
    const Et = kt.getTotalLength(), Dt = kt.getPointAtLength(Et * Bt), lt = ft ? Et : 0;
    l.innerHTML = '<defs><mask id="' + B + 'sun-day"><path d="' + W + '" fill="none" stroke="#fff" stroke-width="' + w * 2 + '"></path></mask><mask id="' + B + 'sun-done"><path d="' + W + '" fill="none" stroke="#fff" stroke-width="' + w * 2 + '" stroke-dasharray="' + (ft ? (lt * Bt).toFixed(1) + " " + (lt + 1).toFixed(1) : "0 99999") + '"></path></mask></defs><path class="wbSunBand" fill-rule="evenodd" d="' + tt + '"></path><path class="wbSunBand wbSunDay" fill-rule="evenodd" d="' + tt + '" mask="url(#' + B + 'sun-day)"></path><path class="wbSunBand wbSunDone" fill-rule="evenodd" d="' + tt + '" mask="url(#' + B + 'sun-done)"></path><circle class="wbSunDot' + (ft ? "" : " wbSunNight") + '" cx="' + Dt.x.toFixed(1) + '" cy="' + Dt.y.toFixed(1) + '" r="' + C + '"></circle>';
  }
  const ko = typeof ResizeObserver == "function" ? new ResizeObserver((l) => l.forEach((u) => Fn(u.target))) : null;
  function qn() {
    ko == null || ko.disconnect(), y.querySelectorAll("svg.wbSunTrack").forEach((l) => {
      Fn(l), ko == null || ko.observe(l);
    });
  }
  function Lr(l, u, m) {
    const w = (W) => B + "moon-" + W, C = l > 0.995 ? "" : '<path class="wbMoonNight" filter="url(#' + w("terminator") + ')" d="' + Sm(61, 61, 57.9, l) + '"' + (u ? ' transform="translate(122 0) scale(-1 1)"' : "") + "></path>", E = (W, G, V, J, tt, ft) => '<filter id="' + w(W) + '" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="' + G + '" numOctaves="' + V + '" seed="' + J + '"></feTurbulence><feColorMatrix values="0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0.33 0.33 0.33 0 0 0 0 0 0 1"></feColorMatrix><feComponentTransfer>' + ["R", "G", "B"].map((Bt) => "<feFunc" + Bt + ' type="linear" slope="' + tt + '" intercept="' + ft + '"></feFunc' + Bt + ">").join("") + "</feComponentTransfer></filter>";
    return '<svg class="wbMoonArt" width="122" height="122" viewBox="0 0 122 122" aria-hidden="true"><defs><radialGradient id="' + w("fill") + '" cx="0.42" cy="0.38" r="0.68"><stop offset="0" stop-color="#ECECE8"></stop><stop offset="0.7" stop-color="#D2D2CD"></stop><stop offset="1" stop-color="#ACACA7"></stop></radialGradient><clipPath id="' + w("clip") + '"><circle cx="61" cy="61" r="54.9"></circle></clipPath><filter id="' + w("soften") + '" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="2.6"></feGaussianBlur></filter><filter id="' + w("glow") + '" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.2"></feGaussianBlur></filter><filter id="' + w("terminator") + '" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1"></feGaussianBlur></filter>' + E("mottle", "0.045", 4, 3, 1.8, -0.4) + E("grain", "1.2", 2, 7, 2, -0.5) + '</defs><g clip-path="url(#' + w("clip") + ')"><circle cx="61" cy="61" r="54.9" fill="url(#' + w("fill") + ')"></circle><g' + (m ? ' transform="rotate(180 61 61)"' : "") + '><g class="wbMaria" filter="url(#' + w("soften") + ')">' + _m.map(([W, G, V, J, tt, ft]) => '<ellipse cx="' + W + '" cy="' + G + '" rx="' + V + '" ry="' + J + '" fill-opacity="' + ft + '" transform="rotate(' + tt + " " + W + " " + G + ')"></ellipse>').join("") + "</g>" + Tm.map(([W, G, V]) => '<circle class="wbCrater" cx="' + W + '" cy="' + G + '" r="' + V + '"></circle>').join("") + '<g class="wbRays" filter="url(#' + w("glow") + ')">' + Dm.map(([W, G]) => '<line x1="54.4" y1="95" x2="' + W + '" y2="' + G + '"></line>').join("") + '</g><g class="wbBrightSpots" filter="url(#' + w("glow") + ')">' + Ad.map(([W, G, V]) => '<circle cx="' + W + '" cy="' + G + '" r="' + V * 2 + '"></circle>').join("") + "</g>" + Ad.map(([W, G, V]) => '<circle class="wbBrightCenter" cx="' + W + '" cy="' + G + '" r="' + V + '"></circle>').join("") + '</g><rect class="wbMottle" width="122" height="122" filter="url(#' + w("mottle") + ')"></rect><rect class="wbGrain" width="122" height="122" filter="url(#' + w("grain") + ')"></rect>' + C + '</g><circle cx="61" cy="61" r="54.9" fill="none" stroke="#B4B4B4" stroke-width="0.2"></circle></svg>';
  }
  function Bi(l) {
    const u = Ot, m = kr(l), w = (m == null ? void 0 : m.lat) ?? 0, C = ll(u), E = kd(l), W = E ? l.states[E] : void 0, G = nn(W) && Zh.includes(W.state) ? W.state : mm(C.phase), { rise: V, set: J } = m ? hm(u, m.lat, m.lon) : {}, tt = C.phase > 0.5 != w < 0, ft = zt(Math.round(C.fraction * 100), l.locale) + "%", Bt = V ?? J;
    return Bt && Fe(Bt, l), Ze({
      icon: ee.night,
      name: ht.moon,
      sub: ht.phases[G],
      callouts: [...V ? [[ht.callout.moonrise, Fe(V, l)]] : [], ...J ? [[ht.callout.moonset, Fe(J, l)]] : [], [ht.callout.lit, ft]],
      // at M, how much of it is lit (Matt, 10 Nov)
      zone: '<div class="wbMoonBox">' + Lr(C.fraction, tt, w < 0) + "</div>" + gi(va(zt(Math.round(C.fraction * 100), l.locale), "%"))
    });
  }
  function Ri(l, u) {
    var kt;
    const m = ve(l, u, "wind_speed");
    if (!m || !ie(m.value)) return "";
    const w = ve(l, u, "wind_gust_speed"), C = ve(l, u, "wind_bearing"), E = C && ie(C.value) ? Number(C.value) : void 0, W = vm(Number(m.value), (kt = m.stateObj.attributes) == null ? void 0 : kt.wind_speed_unit), G = Ai(l, m.stateObj, "wind_speed", m.value), V = E !== void 0 ? ht.cardinal[Yh[((E + 11.25) / 22.5 | 0) % 16]] : void 0, J = w ? vd(l, w.stateObj, "wind_gust_speed", w.value) : void 0, tt = [V ? Ie(ht.windFrom, { direction: V }) : void 0, W !== void 0 ? W + " " + ht.beaufort : void 0].filter(Boolean).join(" · ") || J, ft = (Et, Dt) => {
      const lt = (Et - 90) * Math.PI / 180;
      return [100 + Dt * Math.cos(lt), 100 + Dt * Math.sin(lt)];
    }, Bt = Array.from({ length: 36 }, (Et, Dt) => Dt * 10).map((Et) => {
      const Dt = Et % 90 === 0, [lt, Ht] = ft(Et, 97), [Rt, he] = ft(Et, Dt ? 83 : 89);
      return '<line class="wbTick' + (Dt ? " wbMajor" : "") + '" x1="' + lt + '" y1="' + Ht + '" x2="' + Rt + '" y2="' + he + '"></line>';
    }).join(""), Tt = [["n", 0], ["e", 90], ["s", 180], ["w", 270]].map(([Et, Dt]) => {
      const [lt, Ht] = ft(Dt, 64);
      return '<text class="wbLetter' + (Et === "n" ? " wbNorth" : "") + '" x="' + lt + '" y="' + Ht + '">' + yt(ht.cardinal[Et]) + "</text>";
    }).join("");
    return Ze({ icon: ee.windy, name: ht.wind, sub: tt, cls: "wbWind", visual: '<svg viewBox="0 0 200 200" aria-hidden="true">' + Bt + Tt + (E !== void 0 ? '<path class="wbMarker" transform="rotate(' + E + ' 100 100)" d="M 100 24 L 91 5 L 109 5 Z"></path>' : "") + '<circle class="wbDisc" cx="100" cy="100" r="46"></circle><text class="wbSpeed" x="100" y="102">' + yt(G.number) + '</text><text class="wbSpeedUnit" x="100" y="124">' + yt(G.unit) + "</text></svg>" });
  }
  const sn = (l, u) => {
    if (l < 3) return ht.advice.fine;
    if (l < 8) return ht.advice.sunblock;
    const m = Date.now(), w = st("hourly").find((C) => C.uv_index != null && new Date(C.datetime).getTime() > m && C.uv_index < 6);
    return w && new Date(w.datetime).toDateString() === (/* @__PURE__ */ new Date()).toDateString() ? Ie(ht.advice.avoidUntil, { time: Fe(new Date(w.datetime), u) }) : ht.advice.avoidToday;
  };
  function Er(l, u) {
    const m = ve(l, u, "uv_index");
    if (!m || !ie(m.value)) return "";
    const w = Number(m.value), C = ht.uvLevel[yd(w)], E = /* @__PURE__ */ new Date();
    E.setHours(23, 59, 59, 999);
    const W = st("hourly").filter((tt) => tt.uv_index != null && new Date(tt.datetime) > /* @__PURE__ */ new Date() && new Date(tt.datetime) <= E).reduce((tt, ft) => !tt || ft.uv_index > tt.uv ? { uv: ft.uv_index, time: new Date(ft.datetime) } : tt, void 0), G = Kh[yd(w)], V = 216 * Math.min(1, Math.max(0.08, 0.4 + (w - 4.5) * (0.5 / 5.5))), J = '<svg class="wbUvArt" viewBox="0 0 216 198" preserveAspectRatio="xMinYMin slice" aria-hidden="true"><defs><radialGradient id="' + B + 'uv-sun" gradientUnits="userSpaceOnUse" cx="0" cy="0" r="' + V.toFixed(1) + '"><stop offset="0" style="stop-color:color-mix(in srgb, ' + G + ' 28%, #fff6dd)"></stop><stop offset=".62" style="stop-color:color-mix(in srgb, ' + G + ' 62%, #fff6dd)"></stop><stop offset="1" style="stop-color:' + G + '"></stop></radialGradient></defs><circle class="wbUvSun" cx="0" cy="0" r="' + V.toFixed(1) + '" fill="url(#' + B + 'uv-sun)"></circle></svg><div class="wbUvBig"><span class="wbUvNum">' + yt(zt(Math.round(w), l.locale)) + '</span><span class="wbUvWord">' + yt(C) + "</span></div>" + gi(va(zt(Math.round(w), l.locale), ""));
    return Ze({
      icon: ee.sunnyAlert,
      name: ht.metrics.uv_index,
      sub: W && W.uv > w ? Ie(ht.uvPeak, { level: C, uv_index: zt(Math.round(W.uv), l.locale), time: Fe(W.time, l) }) : C,
      zone: J,
      cls: "wbUv",
      callouts: [sn(w, l), [ht.callout.now, zt(Math.round(w), l.locale) + " · " + C], [ht.callout.peak, W && W.uv > w ? zt(Math.round(W.uv), l.locale) + " at " + Fe(W.time, l) : ht.callout.now]]
    });
  }
  function Pi(l) {
    const u = st("daily")[0], m = St.temperatureHistory;
    if (!u || new Date(u.datetime).toDateString() !== (/* @__PURE__ */ new Date()).toDateString() || !ie(u.temperature) || !m || m.dailyHighs.length < Vh) return "";
    const w = Number(u.temperature), C = m.dailyHighs.reduce((Dt, lt) => Dt + lt, 0) / m.dailyHighs.length, E = Math.round(w - C) || 0, W = E > 0 ? "above" : E < 0 ? "below" : "same", G = [...m.days, { date: /* @__PURE__ */ new Date(), high: w, today: !0 }], V = G.map((Dt) => Dt.high).concat(C), J = Math.min(...V) - 1, tt = Math.max(...V) + 1, ft = (Dt) => (1 - (Dt - J) / (tt - J)) * 100, Bt = (Dt) => (Dt + 0.5) / G.length * 100, Tt = G.map((Dt, lt) => [Bt(lt), ft(Dt.high)]), kt = Tt.map(([Dt, lt], Ht) => (Ht ? "L" : "M") + Dt.toFixed(2) + " " + lt.toFixed(2)).join(""), Et = '<div class="wbCompareBars wbTrend" aria-hidden="true"><div class="wbTrendPlot"><svg viewBox="0 0 100 100" preserveAspectRatio="none"><defs><linearGradient id="' + B + 'trend" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--primary)" stop-opacity=".28"></stop><stop offset="1" style="stop-color:var(--primary)" stop-opacity="0"></stop></linearGradient></defs><path class="wbTrendArea" d="' + kt + "L" + Tt[Tt.length - 1][0].toFixed(2) + " 100L" + Tt[0][0].toFixed(2) + ' 100Z" fill="url(#' + B + 'trend)"></path><line class="wbAvgLine" x1="0" x2="100" y1="' + ft(C).toFixed(2) + '" y2="' + ft(C).toFixed(2) + '" vector-effect="non-scaling-stroke"></line><path class="wbTrendLine" d="' + kt + '" vector-effect="non-scaling-stroke"></path></svg><span class="wbTrendAvg" style="top:' + ft(C).toFixed(2) + '%">' + yt(de(l, C)) + "</span>" + G.map((Dt, lt) => {
      const Ht = Dt.today ? " wbToday" : "", Rt = "left:" + Bt(lt).toFixed(2) + "%;top:" + ft(Dt.high).toFixed(2) + "%";
      return '<i class="wbTrendDot' + Ht + '" style="' + Rt + '"></i><span class="wbAvgValue' + Ht + '" style="' + Rt + '">' + yt(de(l, Dt.high)) + "</span>";
    }).join("") + '</div><div class="wbTrendDays">' + G.map((Dt, lt) => '<span class="wbAvgDay' + (Dt.today ? " wbToday" : "") + '" style="left:' + Bt(lt).toFixed(2) + '%">' + yt(nm(Dt.date, l)) + "</span>").join("") + "</div></div>";
    return Ze({
      icon: ee.chartLine,
      name: ht.metrics.compared_to_average,
      double: !0,
      sub: Ie(ht.highsLastDays, { days: m.days.length }),
      visual: '<div class="wbCompare"><div class="wbCompareText"><div class="wbCompareNumber">' + (E > 0 ? "+" : "") + yt(de(l, E)) + '</div><div class="wbCompareWords">' + yt(ht.average[W]) + '</div><div class="wbCompareTemps">' + yt(Ie(ht.todayVsAverage, { today: de(l, w), average: de(l, C) })) + "</div></div>" + Et + "</div>"
    });
  }
  function Oo(l, u) {
    const m = ve(l, u, "humidity");
    if (!m || !ie(m.value)) return "";
    const w = ve(l, u, "dew_point"), C = Math.max(0, Math.min(100, Number(m.value)));
    return Ze({
      icon: ee.waterPercent,
      name: ht.metrics.humidity,
      sub: w && ie(w.value) ? Ie(ht.dewPoint, { dew_point: de(l, w.value) }) : void 0,
      backdrop: '<div class="wbWater" style="height:' + C + '%"><div class="wbMist"></div><div class="wbBody"></div><div class="wbHaze wbOne"></div><div class="wbHaze wbTwo"></div></div>',
      visual: '<div class="wbWaterValue">' + va(zt(Math.round(Number(m.value)), l.locale), "%") + "</div>"
    });
  }
  function Wn(l, u) {
    var Dt, lt, Ht;
    const m = ve(l, u, "pressure");
    if (!m || !ie(m.value)) return "";
    const w = Number(m.value), C = (Dt = m.stateObj.attributes) == null ? void 0 : Dt.pressure_unit, E = xd(w, C), W = ((lt = St.pressureHistory) == null ? void 0 : lt.entityId) === m.stateObj.entity_id ? xd(St.pressureHistory.value, C) : void 0;
    let G;
    if (E !== void 0 && W !== void 0) {
      const Rt = E - W;
      G = Rt >= pd ? "rising" : Rt <= -pd ? "falling" : "steady";
    }
    const V = Ai(l, m.stateObj, "pressure", Math.round(w)), J = m.stateObj, tt = (Rt) => C === "inHg" ? Math.round(Rt * 100) / 100 : Math.round(Rt), ft = (Rt) => vd(l, J, "pressure", tt(Rt)), Bt = W !== void 0 ? St.pressureHistory.value : void 0, Tt = Bt !== void 0 ? tt(w - Bt) : void 0, kt = (Ht = J.entity_id) != null && Ht.startsWith("weather.") ? st("hourly").find((Rt) => ie(Rt.pressure) && new Date(Rt.datetime).getTime() >= Date.now() + 3 * te - 30 * Pe) : void 0, Et = [
      ...G ? [ht.advice[G]] : [],
      ...Bt !== void 0 ? [[ht.callout.hoursAgo, ft(Bt)], [ht.callout.change, (Tt > 0 ? "+" : Tt < 0 ? "−" : "") + ft(Math.abs(Tt))]] : [],
      ...kt ? [[ht.callout.inHours, ft(Number(kt.pressure))]] : []
    ];
    return Ze({
      icon: ee.gauge,
      name: ht.metrics.pressure,
      sub: G ? ht.pressure[G] : void 0,
      cls: "wbPressure",
      callouts: Et,
      zone: '<div class="wbTapeRow"><div class="wbTapeValue">' + va(V.number) + '<span class="wbTapeUnit">' + yt(V.unit) + "</span></div>" + (E !== void 0 ? ln(l, E) : "") + "</div>"
    });
  }
  function ln(l, u) {
    const C = Math.floor(u) - 11;
    return '<svg class="wbTape" viewBox="0 0 76 200" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">' + Array.from({ length: 24 }, (E, W) => C + W).map((E) => {
      const W = 100 - (E - u) * 9;
      if (W < 22 || W > 178) return "";
      const G = E % 5 === 0;
      return '<g opacity="' + Math.max(0.15, 1 - Math.abs(W - 100) / 100) + '"><line class="wbTapeTick" x1="' + (G ? 2 : 8) + '" x2="26" y1="' + W + '" y2="' + W + '"></line>' + (G ? '<text class="wbTapeLabel" x="33" y="' + W + '">' + yt(zt(E, l.locale, { useGrouping: !1 })) + "</text>" : "") + "</g>";
    }).join("") + '<text class="wbTapeEnd" x="14" y="8">' + yt(ht.high) + '</text><text class="wbTapeEnd" x="14" y="192">' + yt(ht.low) + '</text><line class="wbTapeMarker" x1="0" x2="30" y1="100" y2="100"></line></svg>';
  }
  function Br(l) {
    var V, J;
    const u = cl(l), m = u ? l.states[u] : void 0;
    if (!m || ((V = St.rain) == null ? void 0 : V.entityId) !== u || !ie(St.rain.change)) return "";
    const w = ((J = m.attributes) == null ? void 0 : J.unit_of_measurement) ?? "", C = ot(l, "hourly"), E = Date.now() + oa, W = st("hourly").filter((tt) => tt.precipitation != null && new Date(tt.datetime).getTime() <= E), G = W.reduce((tt, ft) => tt + Number(ft.precipitation), 0);
    return Ze({
      icon: ee.rainy,
      name: ht.metrics.precipitation,
      sub: C && W.length ? Ie(ht.rainExpected, { amount: zt(G, l.locale, { maximumFractionDigits: 1 }) + " " + Ro(l, C, "precipitation") }) : ht.rainLast24h,
      visual: va(zt(St.rain.change, l.locale, { maximumFractionDigits: 1 }), w) + (W.length > 1 ? Cm(W.map((tt) => ({ label: "", value: Number(tt.precipitation) }))) : "")
    });
  }
  function Hi(l, u) {
    const m = ve(l, u, "visibility");
    if (!m || !ie(m.value)) return "";
    const w = Ai(l, m.stateObj, "visibility", m.value), C = xh(Number(m.value), Ro(l, m.stateObj, "visibility"));
    return Ze({
      icon: ee.eyeOutline,
      name: ht.metrics.visibility,
      sub: ht.visibilityLevel[kh(C)],
      visual: '<div class="wbSea"><canvas class="wbSeaArt" data-wb-sea="' + C + '" aria-hidden="true"></canvas><div class="wbSeaFact">' + yt(Ni(l, C)) + '</div><div class="wbSeaValue">' + va(w.number, w.unit) + "</div></div>"
    });
  }
  function Ni(l, u) {
    var E;
    const m = yh((E = l.config) == null ? void 0 : E.country, u);
    if (m) return Ie(ht.visibilityLandmarks, { from: m.from, to: m.to });
    const w = u / Gh * 60;
    if (w < 60) {
      const W = w < 5 ? Math.max(1, Math.round(w)) : 5 * Math.round(w / 5);
      if (W < 60) return Ie(ht.walkMinutes, { minutes: zt(W, l.locale) });
    }
    const C = Math.max(1, Math.round(w / 30) / 2);
    return C < 8 ? Ie(ht.walkHours, { hours: zt(C, l.locale) }) : ht.walkDay;
  }
  function Za(l) {
    St.categories === void 0 && vo(l);
    const u = _t(l), m = (V) => V.map((J) => l.states[J]).filter(nn), w = m(u.air), C = m(u.pollen);
    if (!w.length && !C.length) return "";
    const E = [...w, ...C], W = (V) => C.includes(V) ? ee.flower : ee.airFilter, G = E.find((V) => V.entity_id === rt.aq);
    return G ? Oi(l, G, W(G)) : '<div class="wbCard wbHc wbAq"><div class="wbHeader"><h2 class="wbTitle">' + yt(ht.airQuality) + '</h2></div><div class="wbAqTiles">' + E.map((V) => '<button class="wbTile" data-wb="aq-open" data-entity="' + yt(V.entity_id) + '"><span class="wbChip">' + ho(W(V)) + '</span><span class="wbText"><span class="wbName">' + yt(Eo(l, V)) + '</span><span class="wbSub">' + yt(fo(l, V)) + "</span></span></button>").join("") + "</div></div>";
  }
  function Oi(l, u, m) {
    var tt, ft, Bt;
    const w = ((tt = u.attributes) == null ? void 0 : tt.unit_of_measurement) ?? "", C = ((ft = u.attributes) == null ? void 0 : ft.device_class) === "pm25" && w === ud && ie(u.state), E = Number(u.state), W = C ? mi(E) : void 0, G = ((Bt = St.aqHistory) == null ? void 0 : Bt.entityId) === u.entity_id ? St.aqHistory.points : void 0, V = (Tt) => Math.min(100, Math.max(0, Tt / hi * 100));
    let J;
    if (G && G.length > 1) J = Sd(G, (Tt) => (zt(Tt, l.locale, { maximumFractionDigits: 1 }) + " " + w).trim());
    else if (W) {
      let Tt = 0;
      const kt = wp.map(([Et, Dt]) => {
        const lt = V(Math.min(Dt, hi)), Ht = fd[Et] + " " + Tt + "% " + lt + "%";
        return Tt = lt, Ht;
      });
      J = '<div class="wbScale" role="meter" aria-label="' + yt(ht.fineParticles) + '" aria-valuemin="0" aria-valuemax="' + hi + '" aria-valuenow="' + E + '" style="background:linear-gradient(to right, ' + kt.join(", ") + ')"><i style="left:' + V(E) + '%"></i></div><div class="wbGraphNote"><span>0</span><span>' + hi + " " + ud + "</span></div>";
    } else J = '<span class="wbGraphNote"><span>' + yt(fo(l, u)) + "</span></span>";
    return '<div class="wbCard wbHc wbAq wbAqOpen"><div class="wbOpen"><div class="wbOpenHead"><span class="wbChip">' + ho(m) + '</span><span class="wbText"><span class="wbName">' + yt(Eo(l, u)) + '</span><span class="wbSub">' + yt(fo(l, u)) + (W ? " · " + yt(ht.aqLevel[W]) : "") + '</span></span><button class="wbBack" title="' + yt(ht.back) + '" data-wb="aq-close">' + ho(ee.back) + '</button></div><div class="wbGraph">' + J + "</div></div></div>";
  }
  const cn = { good: "Good", fair: "Fair", moderate: "Moderate", poor: "Poor", very_poor: "Very poor", extremely_poor: "Extremely poor" }, Ka = (l) => l <= 50 ? "Good" : l <= 100 ? "Moderate" : l <= 150 ? "Unhealthy for some" : l <= 200 ? "Unhealthy" : l <= 300 ? "Very unhealthy" : "Hazardous";
  function Ra(l) {
    const u = /* @__PURE__ */ new Map();
    return Object.values(l.states || {}).filter((m) => {
      var w;
      return m.entity_id.startsWith("sensor.") && Ti.includes(((w = m.attributes) == null ? void 0 : w.device_class) ?? "") && nn(m) && Hn(l, m.entity_id);
    }).sort((m, w) => m.entity_id.localeCompare(w.entity_id)).forEach((m) => {
      u.has(m.attributes.device_class) || u.set(m.attributes.device_class, m);
    }), Ti.map((m) => u.get(m)).filter(Boolean);
  }
  const da = (l) => Object.values(l.states || {}).filter((u) => {
    var m, w;
    return u.entity_id.startsWith("sensor.") && nn(u) && Hn(l, u.entity_id) && (((w = (m = l.entities) == null ? void 0 : m[u.entity_id]) == null ? void 0 : w.translation_key) ?? u.entity_id).toLowerCase().includes("pollen");
  }), Rr = ["none", "very_low", "low", "moderate", "high", "very_high"], Ne = (l) => ie(l.state) ? Number(l.state) : Rr.indexOf(String(l.state).toLowerCase().replace(/ /g, "_")), Mo = (l) => {
    const u = String(l).replace(/_/g, " ");
    return u[0].toUpperCase() + u.slice(1);
  }, Vn = (l, u, m) => {
    const w = m ? l === "aqi" ? u <= 50 ? "good" : u <= 100 ? "moderate" : "poor" : l === "pm25" ? mi(u) : null : null;
    return w === "good" || w === "fair" ? ht.advice.window : w === "moderate" || w === null ? ht.advice.fine : ht.advice.closed;
  }, Te = ["good", "fair", "moderate", "poor", "very_poor", "extremely_poor"], jn = (l) => Te[l <= 50 ? 0 : l <= 100 ? 1 : l <= 150 ? 2 : l <= 200 ? 3 : l <= 300 ? 4 : 5], ra = "M43 43q1 8 0 10M77 42q1 8 -1 10", zn = {
    good: [ra, "M34 69Q61 98 86 67"],
    fair: [ra, "M40 74Q61 89 81 72"],
    moderate: [ra, "M41 79Q60 76 80 81"],
    poor: [ra, "M41 85Q60 73 80 86"],
    very_poor: ["M36 38l13 5M84 37l-13 5M43 48q1 7 0 9M77 47q1 7 -1 9", "M37 90Q60 64 84 89"],
    extremely_poor: ["M37 41l12 11M49 41l-12 11M71 40l12 11M83 40l-12 11", "M36 84q6 -8 12 0t12 0t12 0t12 0"]
  }, Pr = (l) => '<svg class="wbAqFace" viewBox="0 0 120 120" aria-hidden="true"><path d="M60 9C89 8 112 32 110 61C109 90 87 112 58 111C30 110 9 88 10 59C11 31 33 10 63 12"></path><path class="wbAqEyes" d="' + zn[l][0] + '"></path><path d="' + zn[l][1] + '"></path></svg>';
  function Ii(l) {
    const u = Ra(l), m = u[0];
    if (!m) return Ze({ icon: ee.airFilter, name: ht.airQuality, sub: ht.noAir, visual: va("–", ""), cls: "wbBase" });
    const w = m.attributes.device_class, C = Number(m.state), E = ie(m.state), W = w === "aqi" && E ? Ka(C) : w === "pm25" && E ? cn[mi(C)] : fo(l, m), G = E ? zt(Math.round(C), l.locale) : String(m.state), V = w === "aqi" ? "AQI" : m.attributes.unit_of_measurement || "", J = E && w === "aqi" ? jn(C) : E && w === "pm25" ? mi(C) : null;
    return Ze(J ? {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: W,
      cls: "wbAqSmile",
      zone: '<div class="wbAqFill" style="background:' + fd[J] + '">' + Pr(J) + '<div class="wbAqBig"><span class="wbAqNum">' + yt(G) + "</span>" + (V ? '<span class="wbAqUnit">' + yt(V) + "</span>" : "") + "</div></div>" + gi(va(G, V)),
      callouts: [Vn(w, C, E), ...u.slice(1, 3).map((tt) => [Eo(l, tt), fo(l, tt)])]
    } : {
      icon: ee.airFilter,
      name: ht.airQuality,
      sub: W,
      cls: "wbBase",
      zone: va(G, V),
      callouts: [Vn(w, C, E), ...u.slice(1, 3).map((tt) => [Eo(l, tt), fo(l, tt)])]
    });
  }
  const Fi = [
    ["wbSeed", '<svg viewBox="0 0 22 30" aria-hidden="true"><path d="M11 28V11" fill="none" stroke="currentColor" stroke-width="1"></path><path d="M11 11L3 6M11 11L5 2.5M11 11L8.5 1M11 11L13.5 1M11 11L17 2.5M11 11L19 6" fill="none" stroke="currentColor" stroke-width=".8" stroke-linecap="round"></path><circle cx="11" cy="28.5" r="1.4" fill="currentColor"></circle></svg>'],
    ["wbGrain", '<svg viewBox="0 0 12 12" aria-hidden="true"><circle cx="6" cy="6" r="3.3" fill="currentColor"></circle><path d="M6 1.2v1.4M6 9.4v1.4M1.2 6h1.4M9.4 6h1.4M2.6 2.6l1 1M8.4 8.4l1 1M2.6 9.4l1-1M8.4 3.6l1-1" stroke="currentColor" stroke-width=".9" stroke-linecap="round"></path></svg>'],
    ["wbStem", '<svg viewBox="0 0 10 30" aria-hidden="true"><path d="M5 29Q3.6 18 5 8" fill="none" stroke="currentColor" stroke-width="1"></path><ellipse cx="5" cy="6" rx="2.3" ry="4.6" fill="currentColor"></ellipse></svg>']
  ], qi = (l) => {
    const u = [1, 3, 5, 7, 10, 13][Math.max(0, Math.min(5, Number.isFinite(l) ? Math.round(l) : 0))];
    return '<div class="wbPollenAir" aria-hidden="true">' + Array.from({ length: u }, (m, w) => {
      const [C, E] = Fi[w % 3], W = 10 + w * 7 % 9, G = 2.6 + w * 5 % 4 * 0.4;
      return '<span class="wbFloat ' + C + '" style="top:' + (4 + w * 37 % 52) + "%;--x:" + (w * 29 % 90 + 4) + "%;--s:" + (0.8 + w * 13 % 5 / 10).toFixed(1) + ";animation-duration:" + W + "s;animation-delay:-" + (w * 2.3 % W).toFixed(1) + 's"><span class="wbPush"><span class="wbBob" style="animation-duration:' + G.toFixed(1) + "s;animation-delay:-" + (w * 0.7 % G).toFixed(1) + 's">' + E + "</span></span></span>";
    }).join("") + "</div>";
  };
  function dn(l) {
    const u = da(l).sort((C, E) => Ne(E) - Ne(C));
    if (!u.length) return Ze({ icon: ee.flower, name: ht.pollen, sub: ht.noPollen, visual: va("–", ""), cls: "wbBase" });
    const m = u[0], w = (C) => ie(C.state) ? fo(l, C) : Mo(C.state);
    return Ze({
      icon: ee.flower,
      name: ht.pollen,
      sub: Eo(l, m) + " · " + w(m),
      cls: "wbBase wbPollen",
      zone: qi(Ne(m)) + va(w(m), ""),
      callouts: u.slice(0, 3).map((C) => [Eo(l, C), w(C)])
    });
  }
  function Hr(l) {
    const u = Date.now(), m = st("hourly").filter((E) => {
      const W = new Date(E.datetime).getTime();
      return W > u - te && W < u + 12 * te;
    }), w = m.find((E) => (E.precipitation_probability ?? 0) >= 50 || (E.precipitation ?? 0) >= 0.2), C = w ? Ie(ht.rainFrom, { time: Fe(new Date(Math.max(u, new Date(w.datetime).getTime())), l) }) : m.length ? ht.noRain12 : void 0;
    return Ze({ icon: ee.radar, name: ht.rainRadar, sub: C, cls: "wbBase", visual: '<div class="wbRadar" aria-hidden="true"><i class="wbRadarRing"></i><i class="wbRadarHome"></i></div>' });
  }
  const Wi = {
    current: Nn,
    hourly: Se,
    sun: Ve,
    moon: Bi,
    wind: Ri,
    uv_index: Er,
    compared_to_average: Pi,
    humidity: Oo,
    pressure: Wn,
    precipitation: Br,
    visibility: Hi,
    air_quality: Za,
    aq_tile: Ii,
    pollen_tile: dn,
    radar_tile: Hr
  }, Gn = [["day", "Last 24 hours", 1], ["week", "Last 7 days", 7], ["month", "Last 30 days", 30]], pe = (l, u) => {
    var m;
    return u.toLocaleDateString((m = l.locale) == null ? void 0 : m.language, { day: "numeric", month: "short" });
  }, pa = (l) => {
    const u = new Date(l);
    return u.setMinutes(u.getMinutes() - u.getTimezoneOffset()), u.toISOString().slice(0, 10);
  }, Gt = () => {
    const l = rt.range, u = Date.now();
    if (l.preset !== "custom") {
      const C = Gn.find(([E]) => E === l.preset)[2];
      return [u - C * oa, u];
    }
    const m = Po(/* @__PURE__ */ new Date(l.from + "T00:00")).getTime(), w = Math.min(u, Po(/* @__PURE__ */ new Date(l.to + "T00:00")).getTime() + oa);
    return [Math.min(m, w - te), w];
  }, pn = (l) => {
    const u = rt.range;
    if (u.preset !== "custom") return Gn.find(([C]) => C === u.preset)[1];
    const [m, w] = Gt();
    return u.from === u.to ? pe(l, new Date(m)) : pe(l, new Date(m)) + " – " + pe(l, new Date(w - 1));
  }, So = () => rt.range.preset === "custom" ? rt.range.from + "_" + rt.range.to : rt.range.preset, fn = (l, u) => u - l <= 2 * oa, Ao = (l, u, m, w) => fn(m, w) ? Fe(u, l) : pe(l, u), Un = (l, u = 60) => {
    const m = Math.max(1, Math.ceil(l.length / u));
    return l.filter((w, C) => C % m === 0 || C === l.length - 1);
  }, Nr = (l, u, m, w, C = !1) => l.callWS({
    type: "history/history_during_period",
    start_time: new Date(m).toISOString(),
    end_time: new Date(w).toISOString(),
    entity_ids: [u],
    minimal_response: C,
    no_attributes: C,
    significant_changes_only: !1
  }), Co = (l) => async (u, m, w, C) => {
    const E = ve(u, m, l);
    if (!E) return [];
    const W = E.stateObj.entity_id, G = await Nr(u, W, w, C);
    return Un(((G == null ? void 0 : G[W]) ?? []).map((V) => {
      var ft;
      const J = ((ft = V.a) == null ? void 0 : ft[l]) ?? (ie(V.s) ? Number(V.s) : void 0), tt = (V.lu ?? V.lc) * 1e3;
      return typeof J == "number" && tt >= w && tt <= C ? { t: new Date(tt), value: J } : null;
    }).filter(Boolean)).map((V) => ({ label: Ao(u, V.t, w, C), value: V.value }));
  }, Io = (l, u) => async (m, w, C, E) => {
    const W = l(m);
    if (!W) return [];
    const G = W.entity_id, V = await Nr(m, G, C, E, !0);
    return Un(((V == null ? void 0 : V[G]) ?? []).map((J) => {
      const tt = u(J.s), ft = J.lu * 1e3;
      return tt == null || !Number.isFinite(tt) || ft < C || ft > E ? null : { t: new Date(ft), value: tt };
    }).filter(Boolean)).map((J) => ({ label: Ao(m, J.t, C, E), value: J.value }));
  }, Yn = (l, u) => async (m, w, C, E) => {
    const W = kr(m);
    if (!W) return [];
    const G = [];
    if (fn(C, E)) for (let V = C; V <= E; V += te / 2) G.push({ label: Fe(new Date(V), m), value: l(new Date(V), W) });
    else for (let V = E; V >= C; V -= oa) {
      const J = new Date(V), tt = u(J, W, m);
      tt != null && G.unshift({ label: pe(m, J), value: tt });
    }
    return Un(G);
  }, fa = (l) => da(l).sort((u, m) => Ne(m) - Ne(u))[0], Xa = (l, u, m) => {
    const w = ve(l, u, m);
    return w ? Ro(l, w.stateObj, m) : "";
  }, Fo = {
    current: { name: () => ht.modes.temperature, icon: () => ee.sunny, load: Co("temperature"), fmt: (l, u, m) => de(l, m), now: (l, u) => {
      var m;
      return de(l, (m = ve(l, u, "temperature")) == null ? void 0 : m.value);
    } },
    sun: {
      name: () => ht.sun,
      icon: () => ee.sunny,
      load: Yn((l, u) => Math.round(Li(l, u.lat, u.lon) / Xe), (l, u, m) => {
        const w = Bn(m, l);
        return w.rise && w.set ? Math.round((w.set - w.rise) / te * 10) / 10 : null;
      }),
      fmt: (l, u, m, w) => w ? zt(m, l.locale) + "°" : zt(m, l.locale) + " h",
      sub: (l) => l ? "How high the sun was" : "Hours of daylight a day"
    },
    moon: {
      name: () => ht.moon,
      icon: () => ee.night,
      load: Yn((l) => Math.round(ll(l).fraction * 100), (l) => Math.round(ll(l).fraction * 100)),
      fmt: (l, u, m) => zt(m, l.locale) + "%",
      sub: () => "How much of it was lit"
    },
    uv_index: { name: () => ht.metrics.uv_index, icon: () => ee.sunnyAlert, load: Co("uv_index"), fmt: (l, u, m) => zt(Math.round(m * 10) / 10, l.locale), now: (l, u) => {
      const m = ve(l, u, "uv_index");
      return m ? zt(Number(m.value), l.locale) : "";
    } },
    humidity: { name: () => ht.metrics.humidity, icon: () => ee.waterPercent, load: Co("humidity"), fmt: (l, u, m) => zt(Math.round(m), l.locale) + "%", now: (l, u) => {
      const m = ve(l, u, "humidity");
      return m ? zt(Math.round(Number(m.value)), l.locale) + "%" : "";
    } },
    pressure: { name: () => ht.metrics.pressure, icon: () => ee.gauge, load: Co("pressure"), fmt: (l, u, m) => zt(Math.round(m), l.locale) + " " + Xa(l, u, "pressure"), now: (l, u) => {
      const m = ve(l, u, "pressure");
      return m ? zt(Math.round(Number(m.value)), l.locale) + " " + Xa(l, u, "pressure") : "";
    } },
    wind: { name: () => ht.wind, icon: () => ee.windy, load: Co("wind_speed"), fmt: (l, u, m) => zt(Math.round(m), l.locale) + " " + Xa(l, u, "wind_speed"), now: (l, u) => {
      const m = ve(l, u, "wind_speed");
      return m ? zt(Math.round(Number(m.value)), l.locale) + " " + Xa(l, u, "wind_speed") : "";
    } },
    visibility: { name: () => ht.metrics.visibility, icon: () => ee.eyeOutline, load: Co("visibility"), fmt: (l, u, m) => zt(Math.round(m * 10) / 10, l.locale) + " " + Xa(l, u, "visibility"), now: (l, u) => {
      const m = ve(l, u, "visibility");
      return m ? zt(Number(m.value), l.locale) + " " + Xa(l, u, "visibility") : "";
    } },
    aq_tile: {
      name: (l) => Ra(l)[0] ? Eo(l, Ra(l)[0]) : ht.airQuality,
      icon: () => ee.airFilter,
      load: Io((l) => Ra(l)[0], (l) => ie(l) ? Number(l) : null),
      fmt: (l, u, m) => {
        var E, W;
        const w = Ra(l)[0], C = (E = w == null ? void 0 : w.attributes) == null ? void 0 : E.device_class;
        return zt(Math.round(m * 10) / 10, l.locale) + (C === "aqi" ? " AQI" : (W = w == null ? void 0 : w.attributes) != null && W.unit_of_measurement ? " " + w.attributes.unit_of_measurement : "");
      },
      now: (l) => {
        const u = Ra(l)[0];
        return u ? fo(l, u) : "";
      }
    },
    pollen_tile: {
      name: (l) => fa(l) ? Eo(l, fa(l)) : ht.pollen,
      icon: () => ee.flower,
      load: Io(fa, (l) => {
        const u = Ne({ state: l });
        return u < 0 ? null : u;
      }),
      fmt: (l, u, m) => Mo(Rr[Math.round(m)] || ""),
      now: (l) => {
        const u = fa(l);
        return u ? Mo(u.state) : "";
      }
    }
  }, Pa = {};
  let ua = null;
  async function un(l) {
    const u = r == null ? void 0 : r();
    if (!u || !Fo[l]) return;
    const m = l + "|" + So(), [w, C] = Gt();
    if (Pa[m] && Date.now() - Pa[m].at < 5 * Pe) return;
    Pa[m] = { at: Date.now(), points: null };
    try {
      Pa[m].points = await Fo[l].load(u, na(u), w, C);
    } catch {
      Pa[m].points = [];
    }
    De(!0), ua === l && rt.graph === l && (ua = null, sd(_.querySelector(".wbGraphCard")));
    const E = rt.graph === l && _.querySelector(".wbGraph .wbChart");
    E && gp(E, E.querySelector(".wbLine"), E.querySelectorAll(".wbArea"));
  }
  function Or(l, u) {
    const m = rt.range, w = pa(Date.now()), [C, E] = Gt(), W = m.pickFrom || pa(C), G = m.pickTo || pa(E - 1);
    return '<div class="wbRangePick" role="dialog" aria-label="Choose date range"><div class="wbRangePresets">' + Gn.map(([V, J]) => '<button class="wbRangePreset" aria-pressed="' + (m.preset === V) + '" data-wb="graph-preset" data-range="' + V + '" data-wb-focus="graph-preset-' + V + '">' + yt(J) + "</button>").join("") + '</div><div class="wbRangeDates"><label><span>From</span><input type="date" data-range-from value="' + W + '" max="' + w + '"></label><label><span>To</span><input type="date" data-range-to value="' + G + '" max="' + w + '"></label></div><button class="wbRangeApply" data-wb="graph-apply" data-wb-focus="graph-apply">Show these dates</button></div>';
  }
  function Vi(l, u, m) {
    var ft;
    const w = Fo[m], [C, E] = Gt(), W = fn(C, E), G = (ft = Pa[m + "|" + So()]) == null ? void 0 : ft.points, V = Math.max(120, Math.min(520, innerWidth - (innerWidth <= 620 ? 0 : 32)) - 2 * 18 - 32), tt = G ? G.length > 1 ? Sd(G, (Bt) => w.fmt(l, u, Bt, W), 220, V) : '<span class="wbGraphNote"><span>No history for these dates</span></span>' : '<span class="wbGraphNote"><span>Loading…</span></span>';
    return '<div class="wbPopupBox"><div class="wbCard wbSquare wbGraphCard" role="dialog" aria-modal="true" aria-label="' + yt(w.name(l)) + '"><div class="wbHead"><div class="wbChip wbPlain">' + vp(w.icon(l)) + '</div><div class="wbText"><span class="wbName">' + yt(w.name(l)) + '</span><span class="wbSub">' + yt(w.sub ? w.sub(W) : w.now ? w.now(l, u) : "") + '</span></div><button class="wbBack" title="Close" data-wb="graph-close" data-wb-focus="graph-close">' + ho(ee.close) + '</button></div><button class="wbRangeBtn" aria-haspopup="dialog" aria-expanded="' + !!rt.picking + '" title="Choose date range" data-wb="graph-pick" data-wb-focus="graph-pick">' + ho(ee.calendar) + "<span>" + yt(pn(l)) + "</span>" + ho(ee.chevronDown) + '</button><div class="wbGraph">' + tt + "</div></div>" + (rt.picking ? Or() : "") + "</div>";
  }
  function De(l) {
    var Bt, Tt, kt, Et, Dt;
    const u = r == null ? void 0 : r();
    if (!u || q) return;
    const m = na(u);
    ut(u, m), St.lastFetch || He();
    const w = _t(u), C = kd(u), E = cl(u), W = [
      ...m.map((lt) => u.states[lt]),
      u.states["sun.sun"],
      C && u.states[C],
      E && u.states[E],
      ...w.air.map((lt) => u.states[lt]),
      ...w.pollen.map((lt) => u.states[lt]),
      ...K.some((lt) => X.includes(lt)) ? [...Ra(u), ...da(u)] : [],
      u.locale,
      u.config,
      u.entities,
      Math.floor(Date.now() / Pe)
    ];
    if (!l && pt && W.length === pt.length && W.every((lt, Ht) => lt === pt[Ht])) return;
    pt = W;
    const G = y.getRootNode(), V = G.activeElement || document.activeElement;
    for (const lt of K) {
      const Ht = U[lt];
      let Rt = "";
      try {
        Rt = Wi[lt](u, m) || "";
      } catch {
        Rt = "";
      }
      if (Rt === Ht.html) continue;
      const he = V && Ht.el.contains(V) ? (Bt = V.dataset) == null ? void 0 : Bt.wbFocus : void 0, At = Ht.el.querySelector(".wbStripScroll"), ae = At ? At.scrollLeft : null;
      Ht.html = Rt, Ht.el.hidden = !Rt, Ht.el.innerHTML = Rt;
      const oe = Ht.el.querySelector(".wbStripScroll");
      oe && ae != null ? oe.scrollTo({ left: ae }) : oe != null && oe.dataset.start && oe.scrollTo({ left: Number(oe.dataset.start) * oe.clientWidth / Number(oe.dataset.span) }), he && !z && ((Tt = Ht.el.querySelector('[data-wb-focus="' + he + '"]')) == null || Tt.focus());
    }
    let J = "";
    if (rt.graph)
      try {
        J = Vi(u, m, rt.graph) || "";
      } catch {
        J = "";
      }
    if (J !== Y) {
      const lt = V && _.contains(V) ? (kt = V.dataset) == null ? void 0 : kt.wbFocus : void 0;
      Y = J, _.innerHTML = J, _.hidden = !J, J && !_.isConnected && (y.closest("#app") || y).appendChild(_), lt && !z && ((Et = _.querySelector('[data-wb-focus="' + lt + '"]')) == null || Et.focus({ preventScroll: !0 }));
    }
    qn(), z && ((Dt = y.querySelector('[data-wb-focus="' + z + '"]') || _.querySelector('[data-wb-focus="' + z + '"]')) == null || Dt.focus({ preventScroll: !0 }), z = null);
    let tt = !1, ft = !1;
    for (const lt of K) {
      const Ht = U[lt], Rt = !Ht.el.hidden, he = at[lt] === "wide" || et.includes(lt), At = K.indexOf(lt) >= K.indexOf("moon"), ae = Rt && (At && he && !tt || !he && !ft);
      ae && he && (tt = !0), ae && !he && (ft = !0), Ht.el.toggleAttribute("data-break", ae);
    }
    mn(performance.now());
  }
  function qo() {
    nt || q || (nt = !0, queueMicrotask(() => {
      nt = !1, De(!0);
    }));
  }
  function Ir() {
    const l = getComputedStyle(y), u = (W) => l.getPropertyValue(W).trim(), m = {};
    [["skyClearDay", "--wx-clear"], ["skyClearNight", "--wx-night"], ["skyCloudyDay", "--wx-cloudy"], ["cloudDay", "--wx-cloud-bright"], ["cloudNight", "--wx-cloudy"], ["rain", "--primary"]].forEach(([W, G]) => {
      u(G) && (m[W] = u(G));
    });
    const w = u("--color-text-primary") || "#f1f1f1", C = u("--color-bg-card") || "#222222", E = !!y.closest(".light");
    return { colors: { ...ka, ...m }, ink: E ? w : C, paper: E ? C : w };
  }
  const Wo = (l, u) => {
    var m;
    l.width !== u.w && (l.width = u.w), l.height !== u.h && (l.height = u.h), (m = l.getContext("2d")) == null || m.putImageData(new ImageData(u.data, u.w, u.h), 0, 0);
  }, Vo = () => g && !em();
  function hn(l, u) {
    y.querySelectorAll("canvas[data-wb-strip]").forEach((m) => Ha(m, N[m.dataset.wbStrip], l, u));
  }
  function Ha(l, u, m, w) {
    if (!u || !l.getClientRects().length) return;
    const C = l.clientWidth, E = l.clientHeight;
    if (!C || !E) return;
    const W = { width: C, height: E, columns: u.columns || ld, colors: w.colors, clock: m, ambient: Vo(), seed: u.seed, soft: 1.5 };
    if (p === "smooth") {
      const G = Math.min(2, window.devicePixelRatio || 1), V = Math.round(C * G), J = Math.round(E * G);
      l.width !== V && (l.width = V), l.height !== J && (l.height = J);
      const tt = l.getContext("2d");
      if (!tt) return;
      tt.setTransform(G, 0, 0, G, 0, 0), ah(tt, u.segs, W);
    } else Wo(l, eh(u.segs, { ...W, px: 2, oneBit: p === "onebit", ink: w.ink, paper: w.paper }));
  }
  function mn(l) {
    if (q) return;
    const u = Ir();
    if (p !== "smooth") {
      const m = Vo();
      y.querySelectorAll("canvas[data-wb-wx]").forEach((w) => {
        w.getClientRects().length && Wo(w, Fu(Ru(w.dataset.wbWx, u.colors), { size: Number(w.dataset.size) || 40, px: 2, oneBit: p === "onebit", colors: u.colors, ink: u.ink, paper: u.paper, clock: l, idle: m }));
      });
    }
    y.querySelectorAll("canvas[data-wb-sea]").forEach((m) => {
      const w = m.clientWidth, C = m.clientHeight, E = Number(m.dataset.wbSea), W = w + "x" + C + ":" + E + ":" + u.colors.skyClearDay;
      !w || !C || !(E > 0) || m.dataset.painted === W || (m.dataset.painted = W, Wo(m, bh(w, C, E, u.colors)));
    }), hn(l, u);
  }
  function jo(l) {
    if (dt = 0, !(q || !Vo())) {
      if (!document.hidden)
        if (p === "smooth") hn(l, Ir());
        else {
          const u = Math.floor(l / 100);
          u !== mt && (mt = u, mn(l));
        }
      dt = requestAnimationFrame(jo);
    }
  }
  function Zn() {
    y.classList.toggle("wbMotion", Vo()), !dt && !q && Vo() && (dt = requestAnimationFrame(jo));
  }
  function Oe(l) {
    var m, w, C, E, W, G, V;
    if (l.target === _) {
      rt.graph = void 0, rt.picking = !1, De(!0);
      return;
    }
    const u = (w = (m = l.target).closest) == null ? void 0 : w.call(m, "[data-wb]");
    if (!u || !(y.contains(u) || _.contains(u))) {
      const J = (E = (C = l.target).closest) == null ? void 0 : E.call(C, ".wbItem"), tt = J == null ? void 0 : J.dataset.card;
      if (!J || !y.contains(J) || !Fo[tt] || rt.graph === tt || y.closest(".tfEditing") || tt === "current" && b) return;
      rt.graph = tt, rt.picking = !1, z = "graph-close", De(!0), (W = Pa[tt + "|" + So()]) != null && W.points ? sd(_.querySelector(".wbGraphCard")) : ua = tt, un(tt);
      return;
    }
    switch (u.dataset.wb) {
      case "day": {
        rt.openDay = Number(u.dataset.index), rt.opener = u.dataset.wbFocus, z = "back-day";
        const J = sa()[rt.openDay], tt = !St.todayHistory || St.todayHistory.day !== (/* @__PURE__ */ new Date()).toDateString() || Date.now() - St.todayHistory.fetched > Ph;
        J && En(new Date(J.datetime), /* @__PURE__ */ new Date()) && tt && wo();
        break;
      }
      case "close-day":
        rt.openDay = void 0, z = rt.opener, rt.opener = void 0;
        break;
      case "open-page":
        b == null || b();
        return;
      case "day-mode":
        rt.dayMode = u.dataset.mode;
        break;
      case "hourly-mode":
        rt.hourlyMode = u.dataset.mode;
        break;
      case "hourly-view":
        rt.hourlyView = u.dataset.view;
        try {
          localStorage.setItem(L, rt.hourlyView);
        } catch {
        }
        break;
      case "hours-day": {
        const J = y.querySelector(".wbStripScroll");
        J && J.scrollTo({ left: Number(u.dataset.hours) * J.clientWidth / Number(J.dataset.span), behavior: "smooth" });
        return;
      }
      case "aq-open":
        rt.aq = u.dataset.entity, Ho(rt.aq);
        break;
      case "aq-close":
        rt.aq = void 0;
        break;
      case "graph-close":
        rt.graph = void 0, rt.picking = !1;
        break;
      case "graph-pick":
        rt.picking = !rt.picking, z = rt.picking ? "graph-preset-" + (rt.range.preset === "custom" ? "day" : rt.range.preset) : "graph-pick";
        break;
      case "graph-preset":
        rt.range = { preset: u.dataset.range }, rt.picking = !1, z = "graph-pick", De(!0), un(rt.graph);
        return;
      case "graph-apply": {
        let J = rt.range.pickFrom || ((G = y.querySelector("[data-range-from]")) == null ? void 0 : G.value), tt = rt.range.pickTo || ((V = y.querySelector("[data-range-to]")) == null ? void 0 : V.value);
        if (!J || !tt) return;
        J > tt && ([J, tt] = [tt, J]), rt.range = { preset: "custom", from: J, to: tt }, rt.picking = !1, z = "graph-pick", De(!0), un(rt.graph);
        return;
      }
      default:
        return;
    }
    De(!0);
  }
  function $a(l) {
    var u, m, w, C, E, W;
    l.key === "Escape" && rt.openDay !== void 0 && ((m = (u = l.target).closest) != null && m.call(u, '[data-wb-open="day"]')) ? (rt.openDay = void 0, z = rt.opener, rt.opener = void 0, De(!0)) : l.key === "Escape" && rt.picking && ((C = (w = l.target).closest) != null && C.call(w, ".wbGraphCard")) ? (rt.picking = !1, z = "graph-pick", De(!0)) : l.key === "Escape" && rt.graph && ((W = (E = l.target).closest) != null && W.call(E, ".wbGraphCard")) && (rt.graph = void 0, De(!0));
  }
  let Ma = null;
  function gn(l) {
    var m, w;
    const u = (w = (m = l.target).closest) == null ? void 0 : w.call(m, ".wbStripScroll");
    !u || l.button !== 0 || (Ma = { startX: l.pageX, left: u.scrollLeft, moved: !1 }, u.classList.add("wbHeld"), window.addEventListener("mousemove", Fr), window.addEventListener("mouseup", Kn, { once: !0 }));
  }
  function Fr(l) {
    const u = y.querySelector(".wbStripScroll");
    if (!Ma || !u) return;
    const m = l.pageX - Ma.startX;
    !Ma.moved && Math.abs(m) > 1 && (Ma.moved = !0, u.classList.add("wbDragging")), u.scrollLeft = Ma.left - m;
  }
  function Kn() {
    Ma = null, window.removeEventListener("mousemove", Fr);
    const l = y.querySelector(".wbStripScroll");
    if (!l) return;
    l.classList.remove("wbDragging", "wbHeld");
    const u = [...l.querySelectorAll(".wbSnap")];
    if (u.length) {
      const m = u.reduce((w, C) => Math.abs(C.offsetLeft - l.scrollLeft) < Math.abs(w.offsetLeft - l.scrollLeft) ? C : w);
      l.scrollTo({ left: m.offsetLeft, behavior: "smooth" });
    }
  }
  const bn = (l) => {
    var m, w;
    const u = l.target;
    (m = u.matches) != null && m.call(u, "[data-range-from]") ? rt.range.pickFrom = u.value : (w = u.matches) != null && w.call(u, "[data-range-to]") && (rt.range.pickTo = u.value);
  };
  y.addEventListener("change", bn), y.addEventListener("click", Oe), y.addEventListener("keydown", $a), _.addEventListener("change", bn), _.addEventListener("click", Oe), _.addEventListener("keydown", $a), y.addEventListener("mousedown", gn);
  const qr = 64, Xn = 30;
  let Na = null, $e = 0;
  const wn = () => {
    $e = 0, y.querySelectorAll(".wbPollen .wbPush").forEach((l) => {
      let u = 0, m = 0;
      if (Na) {
        const w = l.parentElement.getBoundingClientRect(), C = w.left + w.width / 2 - Na.x, E = w.top + w.height / 2 - Na.y, W = Math.hypot(C, E) || 1;
        if (W < qr) {
          const G = (1 - W / qr) * Xn;
          u = C / W * G, m = E / W * G;
        }
      }
      l.style.transform = u || m ? "translate(" + u.toFixed(1) + "px," + m.toFixed(1) + "px)" : "";
    }), Na && ($e = requestAnimationFrame(wn));
  }, Oa = (l) => {
    var m, w;
    if (!((w = (m = l.target).closest) == null ? void 0 : w.call(m, ".wbPollen")) || Be != null && Be.matches) {
      Na && (Na = null, $e || ($e = requestAnimationFrame(wn)));
      return;
    }
    Na = { x: l.clientX, y: l.clientY }, $e || ($e = requestAnimationFrame(wn));
  }, Ja = () => {
    Na = null, $e || ($e = requestAnimationFrame(wn));
  };
  y.addEventListener("pointermove", Oa), y.addEventListener("pointerleave", Ja);
  const ha = typeof ResizeObserver == "function" ? new ResizeObserver(() => mn(performance.now())) : null;
  ha == null || ha.observe(y);
  const Be = (Wr = window.matchMedia) == null ? void 0 : Wr.call(window, "(prefers-reduced-motion: reduce)"), vn = () => {
    Zn(), mn(performance.now());
  };
  ($n = Be == null ? void 0 : Be.addEventListener) == null || $n.call(Be, "change", vn);
  const ji = [
    setInterval(() => {
      $ = /* @__PURE__ */ new Date(), De(!0);
    }, jh),
    setInterval(() => {
      Ot = /* @__PURE__ */ new Date(), De(!0);
    }, zh),
    setInterval(He, qh)
  ];
  return De(!0), Zn(), {
    update() {
      De(!1);
    },
    // a choice in Settings changed (Next hours' window)
    refresh() {
      De(!0);
    },
    setStyle(l) {
      !l || l === p || (p = l, y.dataset.style = p, _.dataset.style = p, De(!0), Zn());
    },
    destroy() {
      var l;
      cancelAnimationFrame($e), y.removeEventListener("pointermove", Oa), y.removeEventListener("pointerleave", Ja), q = !0, ji.forEach(clearInterval), dt && cancelAnimationFrame(dt), dt = 0, ha == null || ha.disconnect(), (l = Be == null ? void 0 : Be.removeEventListener) == null || l.call(Be, "change", vn), Kn(), y.removeEventListener("click", Oe), y.removeEventListener("change", bn), y.removeEventListener("keydown", $a), y.removeEventListener("mousedown", gn), _.removeEventListener("click", Oe), _.removeEventListener("change", bn), _.removeEventListener("keydown", $a), ["daily", "hourly"].forEach(it), y.remove(), _.remove();
    }
  };
}
const Mr = "#E1E1E1", _d = "#F7F4F0", dl = "#03a9f4", Zt = 14, $t = 172;
let Em = 0;
const ue = (o) => Math.round(o * 100) / 100, Ua = (o, r, c) => Math.max(r, Math.min(c, o)), bo = (o, r, c, p, g, x) => '<rect x="' + ue(o) + '" y="' + ue(r) + '" width="' + ue(c) + '" height="' + ue(p) + '" fill="' + g + '"' + (x != null ? ' opacity="' + x + '"' : "") + "/>", pl = (o) => o.map((r, c) => (c ? "L" : "M") + ue(r[0]) + " " + ue(r[1])).join("");
function fl(o) {
  const r = (o == null ? void 0 : o.attributes) || {};
  return r.device_class === "curtain" ? "curtain" : r.device_class === "blind" || r.current_tilt_position != null ? "venetian" : "blind";
}
const Bo = [
  [2, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]],
  [6.5, ["#0B0F1C", "#2E7FD6", "#F2743B", "#F1B6C8", 0.95]],
  [9.5, ["#8FC4EC", "#4DA3E8", "#F4FAFF", "#2F7FCF", 0.7]],
  [13, ["#9ED3F6", "#3F97E6", "#FFFFFF", "#2B86D9", 0.65]],
  [17, ["#9FC2E4", "#4A8ED4", "#FFD9B8", "#5E8FD6", 0.75]],
  [19, ["#4B5E86", "#3B86E0", "#FF6A3D", "#B07CE8", 0.95]],
  [21.5, ["#1A2140", "#1F3F7A", "#B4506E", "#3E59A6", 0.8]],
  [26, ["#070B16", "#0E2447", "#1B3A6B", "#0A1733", 0.9]]
];
function Bm(o) {
  const r = o < 2 ? o + 24 : o;
  let c = Bo[0], p = Bo[Bo.length - 1];
  for (let A = 0; A < Bo.length - 1; A++) if (r >= Bo[A][0] && r <= Bo[A + 1][0]) {
    c = Bo[A], p = Bo[A + 1];
    break;
  }
  const g = (r - c[0]) / (p[0] - c[0]), x = g * g * (3 - 2 * g), b = (A, B) => {
    const y = parseInt(A.slice(1), 16), H = parseInt(B.slice(1), 16);
    return "#" + [16, 8, 0].map((_) => Math.round((y >> _ & 255) + ((H >> _ & 255) - (y >> _ & 255)) * x).toString(16).padStart(2, "0")).join("");
  };
  return { top: b(c[1][0], p[1][0]), bot: b(c[1][1], p[1][1]), warm: b(c[1][2], p[1][2]), cool: b(c[1][3], p[1][3]), op: c[1][4] + (p[1][4] - c[1][4]) * x, t: r };
}
function Rm(o) {
  const r = parseInt(o.slice(1), 16), c = (r >> 16 & 255) / 255, p = (r >> 8 & 255) / 255, g = (r & 255) / 255, x = Math.max(c, p, g), b = Math.min(c, p, g);
  let A = 0, B = 0;
  const y = (x + b) / 2;
  if (x !== b) {
    const H = x - b;
    B = y > 0.5 ? H / (2 - x - b) : H / (x + b), A = (x === c ? (p - g) / H + (p < g ? 6 : 0) : x === p ? (g - c) / H + 2 : (c - p) / H + 4) / 6;
  }
  return [A * 360, B * 100, y * 100];
}
function Ep(o, r, c) {
  r = Ua(r, 0, 100) / 100, c = Ua(c, 0, 100) / 100;
  const p = (b) => (b + o / 30) % 12, g = r * Math.min(c, 1 - c), x = (b) => c - g * Math.max(-1, Math.min(p(b) - 3, Math.min(9 - p(b), 1)));
  return "#" + [x(0), x(8), x(4)].map((b) => Math.round(b * 255).toString(16).padStart(2, "0")).join("");
}
const [Bp, Rp, Pp] = Rm(Mr), Td = Ep(Bp, Rp, Math.max(6, Pp - 14)), Pm = Ep(Bp, Rp, Math.min(96, Pp + 16));
function Hm(o, r, c, p, g) {
  const x = $t / 2, b = $t * 0.12, A = x - (x - b) * o, B = (at) => at ** 1.3, y = Ua(c, -1.5, 1.5), H = (at) => -(Math.abs(y) * 4.6 * at ** 1.5) * Math.sign(y), _ = o * 1.4, X = (at, et) => {
    const U = Math.min(4.8, Math.abs(c) * 2.6) * (et ? 1 : -1) * Math.sign(c || 1), q = et ? at + A : at, pt = et ? at : at + A, dt = (wt) => q + H(wt) + U * Math.sin(wt * Math.PI * 1.2 + p) * B(wt) * 1.4 + _ * Math.sin(wt * Math.PI * 2 + p * 0.6) * B(wt) * (et ? 1 : -1), mt = [[pt, Zt]];
    for (let wt = 0; wt <= 12; wt++) mt.push([dt(wt / 12), Zt + $t * wt / 12]);
    mt.push([pt, Zt + $t]);
    let nt = '<path d="' + pl(mt) + 'Z" fill="' + Mr + '"/>';
    if (g) return nt;
    const z = 1.35 + ((et ? c > 0 : c < 0) ? 0.35 : 0), Y = (wt) => {
      const rt = wt / 7, St = et ? 1 - rt : rt, $ = (1 - St) ** 1.3, Ot = at + A * rt;
      return Array.from({ length: 13 }, (N, Z) => {
        const D = Z / 12;
        return [Ot + H(D) * $ + U * z * Math.sin(D * Math.PI * 1.2 + p - St * 3.2) * B(D) * 1.4 * $ + _ * 1.6 * Math.sin(D * Math.PI * 2 + p * 0.6 - St * 2.5) * B(D) * o * (0.4 + 0.6 * $), Zt + $t * D];
      });
    }, L = [1, 2, 3, 4, 5, 6].map(Y);
    for (let wt = 0; wt < 6; wt += 2) nt += '<path d="' + pl(L[wt]) + pl(L[wt + 1].slice().reverse()).replace("M", "L") + 'Z" fill="#fff"/>';
    return nt;
  }, K = x - (x - b) * r;
  return { body: X(Zt, !0) + X(Zt + $t - A, !1), rails: [{ x: Zt + K - 4, y: Zt, w: 4, h: $t }, { x: Zt + $t - K, y: Zt, w: 4, h: $t }], head: 6.4 };
}
function Nm(o, r, c) {
  const p = $t * (1 - o);
  let g = "";
  if (p > 1 && (g += bo(Zt, Zt, $t, p, Mr), !c))
    for (let x = 1; x < 7; x += 2) g += bo(Zt + $t * x / 7, Zt, $t / 7, p, "#fff");
  return { body: g, rails: [{ x: Zt, y: Zt + $t * (1 - r) - 7, w: $t, h: 11 }], head: 10.4 };
}
function Om(o, r, c, p) {
  const g = 9 - 7 * (c / 100), x = Zt + $t * (1 - o), b = Math.ceil($t / 10) + 1, A = Zt + g / 2, B = (Zt + $t - g / 2 - A) / (b - 1), y = 0.8, H = 0.6, _ = Array.from({ length: b }, (at, et) => Math.max(A + et * H, Math.min(A + et * B, x - g / 2 - (b - 1 - et) * H))), X = _.slice(0, -1).map((at, et) => Ua((_[et + 1] - at - H) / (B - H), 0, 1));
  X.push(X[b - 2]);
  let K = "";
  return _.forEach((at, et) => {
    const U = y + (g - y) * X[et], q = Math.max(0.5, U / 2), pt = Math.max(0.4, U * 0.114);
    K += bo(Zt, at - q, $t, Math.max(1, U), Mr), !p && U > 2.2 && (K += bo(Zt, at + q - pt, $t, pt, Td) + bo(Zt, at - q, $t, pt * 0.55, Pm, 0.75));
  }), p || [0.22, 0.78].forEach((at) => {
    K += bo(Zt + $t * at - 0.7, Zt, 1.4, Math.max(0, _[b - 1] + 1 - Zt), Td, 0.85);
  }), { body: K, rails: [{ x: Zt, y: Zt + $t * (1 - r) - 8, w: $t, h: 8 }], head: 8.8 };
}
const Dd = (o, r, c, p, g, x, b) => o === "curtain" ? Hm(r, c, g, x, b) : o === "venetian" ? Om(r, c, p, b) : Nm(r, c, b);
function Im(o, r) {
  let c = "", p = "";
  return r.forEach((g) => {
    const x = g.w > g.h, b = Ua(x ? Zt + $t / 2 : g.x + g.w / 2, 17, 183), A = Ua(x ? g.y + g.h / 2 : Zt + $t / 2, 17, 183);
    c += x ? bo(Zt, Ua(g.y + g.h / 2, Zt, Zt + $t) - 1, $t, 2, dl) : bo(Ua(g.x + g.w / 2, Zt, Zt + $t) - 1, Zt, 2, $t, dl);
    const B = x ? "M" + ue(b - 4) + " " + ue(A - 3) + "l4 -3l4 3M" + ue(b - 4) + " " + ue(A + 3) + "l4 3l4 -3" : "M" + ue(b - 3) + " " + ue(A - 4) + "l-3 4l3 4M" + ue(b + 3) + " " + ue(A - 4) + "l3 4l-3 4";
    p += '<circle cx="' + ue(b) + '" cy="' + ue(A) + '" r="11" fill="' + dl + '" filter="url(#' + o + 's)"/><path d="' + B + '" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>';
  }), { lines: c, knobs: p };
}
function Fm(o, r) {
  const c = /* @__PURE__ */ new Date(), p = Bm(c.getHours() + c.getMinutes() / 60), g = 42 + 18 * Math.sin(p.t * 0.5), x = p.t >= 5 && p.t <= 20 ? 40 - 48 * Math.sin(Math.PI * (p.t - 5) / 15) : 80, b = Dd(r.kind, r.pos / 100, r.bar / 100, r.tilt, r.vel, r.ph, !1), A = r.ghostAlpha > 4e-3 && r.ghost != null ? Dd(r.kind, r.ghost / 100, r.ghost / 100, r.tilt, 0, 0, !0).body : "", B = r.grip > 4e-3 ? Im(o, b.rails) : null, y = (H) => bo(Zt, Zt, $t, $t, H);
  return '<svg viewBox="0 0 200 200" aria-hidden="true" focusable="false"><defs><clipPath id="' + o + 'c"><rect x="14" y="14" width="172" height="172" rx="8"/></clipPath><linearGradient id="' + o + 'l" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p.top + '"/><stop offset="1" stop-color="' + p.bot + '"/></linearGradient><radialGradient id="' + o + 'w" cx="' + ue(g) + '%" cy="' + ue(x) + '%" r="58%"><stop offset="0" stop-color="' + p.warm + '" stop-opacity="' + ue(p.op * 0.8) + '"/><stop offset="1" stop-color="' + p.warm + '" stop-opacity="0"/></radialGradient><radialGradient id="' + o + 'k" cx="' + ue(100 - g * 0.8) + '%" cy="' + ue(100 - x * 0.6) + '%" r="62%"><stop offset="0" stop-color="' + p.cool + '" stop-opacity="' + ue(p.op * 0.64) + '"/><stop offset="1" stop-color="' + p.cool + '" stop-opacity="0"/></radialGradient><filter id="' + o + 's" x="-5%" y="-50%" width="110%" height="300%"><feDropShadow dx="0" dy="1.2" stdDeviation="1.2" flood-color="#000" flood-opacity=".18"/></filter></defs><rect x="6" y="6" width="188" height="188" rx="16" fill="' + _d + '" stroke="#E3E3E3" stroke-width=".4"/><g clip-path="url(#' + o + 'c)">' + y("url(#" + o + "l)") + y("url(#" + o + "w)") + y("url(#" + o + "k)") + (A ? '<g opacity="' + ue(r.ghostAlpha) + '">' + A + "</g>" : "") + b.body + '<rect x="14" y="14" width="172" height="' + b.head + '" fill="' + Mr + '" filter="url(#' + o + 's)"/></g>' + (B ? '<g clip-path="url(#' + o + 'c)" opacity="' + ue(r.grip) + '">' + B.lines + "</g>" : "") + '<rect x="13.5" y="13.5" width="173" height="173" rx="8.5" fill="none" stroke="' + _d + '" stroke-width="3"/>' + (B ? '<g opacity="' + ue(r.grip) + '">' + B.knobs + "</g>" : "") + "</svg>";
}
function qm({ onMove: o, onSet: r }) {
  var nt;
  const c = "cv" + ++Em, p = document.createElement("div");
  p.className = "tfCoverArt";
  const g = (nt = window.matchMedia) == null ? void 0 : nt.call(window, "(pointer: coarse)").matches;
  let x = null;
  const b = { pos: 0, tilt: 0, vel: 0, ph: 0, grip: 0, ghost: 0, gpos: null, last: 0 };
  let A = 0, B = !1, y = !1, H = null, _ = 0, X = 0;
  const K = () => (x == null ? void 0 : x.kind) === "curtain" ? "x" : "y", at = () => H || B || y || x.moving || x.target != null ? 1 : g ? performance.now() < X ? 1 : 0.4 : 0, et = () => {
    p.innerHTML = Fm(c, { kind: x.kind, pos: b.pos, bar: x.target ?? b.pos, tilt: b.tilt, vel: b.vel, ph: b.ph, ghost: b.gpos, ghostAlpha: b.ghost, grip: b.grip });
  };
  function U(z) {
    A = 0;
    const Y = b.last ? Math.min(0.064, (z - b.last) / 1e3) : 1 / 60, L = Y * 60;
    b.last = z;
    const wt = x.pos - b.pos, rt = b.pos;
    b.pos += Math.sign(wt) * Math.min(Math.abs(wt), Math.max(10.5, Math.abs(wt) * 1.4) * Y), Math.abs(x.pos - b.pos) < 0.03 && (b.pos = x.pos), b.vel = b.vel * 0.86 + (b.pos - rt) / L * 0.14, Math.abs(b.vel) < 0.015 && b.pos === x.pos && (b.vel = 0), (b.pos !== rt || b.vel) && (b.ph += (0.06 + Math.abs(b.vel) * 0.03) * L);
    const St = x.tilt - b.tilt;
    b.tilt += Math.sign(St) * Math.min(Math.abs(St), Math.max(60, Math.abs(St) * 4) * Y);
    const $ = at();
    b.grip += ($ - b.grip) * Math.min(1, Y * ($ > b.grip ? 11 : 3.5)), Math.abs($ - b.grip) < 0.01 && (b.grip = $);
    const Ot = x.target != null && Math.abs(x.target - b.pos) > 0.5 ? 0.22 : 0;
    x.target != null && (b.gpos = x.target), b.ghost += (Ot - b.ghost) * Math.min(1, Y * (Ot > b.ghost ? 16 : 3)), Math.abs(Ot - b.ghost) < 4e-3 && (b.ghost = Ot), et(), b.pos !== x.pos || b.vel || b.tilt !== x.tilt || b.grip !== $ || b.ghost !== Ot ? A = requestAnimationFrame(U) : b.last = 0;
  }
  const q = () => {
    x && !A && (A = requestAnimationFrame(U));
  }, pt = setInterval(() => {
    x && !A && et();
  }, 60 * 1e3), dt = (z) => {
    const Y = p.getBoundingClientRect();
    return K() === "x" ? (z.clientX - Y.left) / Y.width : (z.clientY - Y.top) / Y.height;
  };
  p.addEventListener("pointerdown", (z) => {
    var wt;
    if (!(x != null && x.canSet) || z.button > 0) return;
    z.preventDefault(), (wt = p.setPointerCapture) == null || wt.call(p, z.pointerId);
    const Y = x.target ?? x.pos, L = p.getBoundingClientRect();
    H = { p0: dt(z), from: Y, x0: z.clientX, value: null, side: null }, x.kind === "curtain" && Y > 0 && (H.side = (z.clientX - L.left) / L.width < 0.5 ? "L" : "R"), q();
  }), p.addEventListener("pointermove", (z) => {
    if (!H) return;
    let Y;
    if (x.kind === "curtain") {
      if (!H.side) {
        const wt = z.clientX - H.x0;
        if (Math.abs(wt) < 4) return;
        H.side = wt < 0 ? "L" : "R";
      }
      const L = ($t / 2 - $t * 0.12) / 200;
      Y = H.from + (H.side === "L" ? -1 : 1) * ((dt(z) - H.p0) / L) * 100;
    } else Y = H.from - (dt(z) - H.p0) / ($t / 200) * 100;
    H.value = Ua(Y, 0, 100), o(H.value);
  });
  const mt = () => {
    if (!H) return;
    const z = H.value;
    H = null, z != null && r(Math.round(z)), q();
  };
  return p.addEventListener("pointerup", mt), p.addEventListener("pointercancel", mt), p.addEventListener("lostpointercapture", mt), p.addEventListener("pointerenter", () => {
    B = !0, q();
  }), p.addEventListener("pointerleave", () => {
    B = !1, q();
  }), p.addEventListener("focus", () => {
    y = p.matches(":focus-visible"), q();
  }), p.addEventListener("blur", () => {
    y = !1, q();
  }), p.addEventListener("keydown", (z) => {
    if (!(x != null && x.canSet)) return;
    const Y = Math.round(x.target ?? x.pos), L = z.shiftKey ? 10 : 1, wt = { ArrowUp: Y + L, ArrowRight: Y + L, ArrowDown: Y - L, ArrowLeft: Y - L, PageUp: Y + 25, PageDown: Y - 25, Home: 0, End: 100 }[z.key];
    if (wt == null) return;
    z.preventDefault();
    const rt = Ua(wt, 0, 100);
    o(rt), clearTimeout(_), _ = setTimeout(() => r(rt), 500);
  }), {
    el: p,
    update(z) {
      const Y = !x;
      x = z, Y && (b.pos = x.pos, b.tilt = x.tilt, X = performance.now() + 1500, g && setTimeout(q, 1600)), p.classList.toggle("x", K() === "x"), p.classList.toggle("y", K() === "y"), x.canSet ? (p.tabIndex = 0, p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", "0"), p.setAttribute("aria-valuemax", "100"), p.setAttribute("aria-valuenow", String(Math.round(x.target ?? x.pos))), p.setAttribute("aria-orientation", K() === "x" ? "horizontal" : "vertical")) : p.setAttribute("role", "img"), p.setAttribute("aria-label", x.name + (x.canSet ? " position" : "")), p.setAttribute("aria-valuetext", x.text), q();
    },
    destroy() {
      cancelAnimationFrame(A), A = 0, clearInterval(pt), clearTimeout(_), p.remove();
    }
  };
}
const Ld = "homecore-density", ja = {
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
}, F = (o) => String(o ?? "").replace(/[&<>"']/g, (r) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[r]), Ed = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5"/><path d="M12 19L5 12L12 5"/></svg>', Bd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18L9 12L15 6"/></svg>', Rd = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6L18 18"/><path d="M18 6L6 18"/></svg>', bi = {
  prev: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6h2v12H6zM9.5 12L18 18V6z"/></svg>',
  next: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 6h2v12h-2zM6 18l8.5-6L6 6z"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>'
}, Pd = {
  down: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 11h14v2H5z"/></svg>',
  up: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 5h2v6h6v2h-6v6h-2v-6H5v-2h6z"/></svg>'
}, Hd = 1, Wm = 4, Nd = 16, Od = 32, Vm = 128, jm = 256, Id = 16384, zm = 1, Gm = 2, Fd = 4, Um = 8, Ym = {
  open: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7l-5 5 5 5"/><path d="M16 7l5 5-5 5"/></svg>',
  stop: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor"/></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l5 5-5 5"/><path d="M21 7l-5 5 5 5"/></svg>'
}, qd = { curtain: ["mdi:curtains", "mdi:curtains-closed"], blind: ["mdi:roller-shade", "mdi:roller-shade-closed"], venetian: ["mdi:blinds-horizontal", "mdi:blinds-horizontal-closed"] }, Zm = { curtain: "curtains", blind: "blind", venetian: "blinds" }, vr = {
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
}, Wd = ["covers", "people", "openings", "leaks", "vacuum"], Vd = "homecore_house", jd = "homecore-house-used", ul = ["switch", "fan", "input_boolean", "automation"], zd = "homecore-house-look", Km = [["look", "Look"], ["house", "House page"], ["weather", "Weather"]], Xm = [["popup", "Popup"], ["sheet", "Sheet"]], $m = [["auto", "Automatic"], ["cut", "Cut short"], ["wrap", "Two lines"], ["scroll", "Scroll"]], Jm = [["day", "Daytime 06–22"], ["waking", "Waking 07–23"], ["all", "All day"]], Qm = [["bitmap", "Pixel"], ["onebit", "1-bit"], ["smooth", "Smooth"], ["line", "Line"]], wi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7,19V17H9V19H7M11,19V17H13V19H11M15,19V17H17V19H15M7,15V13H9V15H7M11,15V13H13V15H11M15,15V13H17V15H15M7,11V9H9V11H7M11,11V9H13V11H11M15,11V9H17V11H15M7,7V5H9V7H7M11,7V5H13V7H11M15,7V5H17V7H15Z"/></svg>', t0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z"/></svg>', e0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>', Gd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"/></svg>', hl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/></svg>', a0 = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 13C6.14 13 4.59 14.28 4.14 16H2V18H4.14C4.59 19.72 6.14 21 8 21S11.41 19.72 11.86 18H22V16H11.86C11.41 14.28 9.86 13 8 13M8 19C6.9 19 6 18.1 6 17C6 15.9 6.9 15 8 15S10 15.9 10 17C10 18.1 9.1 19 8 19M19.86 6C19.41 4.28 17.86 3 16 3S12.59 4.28 12.14 6H2V8H12.14C12.59 9.72 14.14 11 16 11S19.41 9.72 19.86 8H22V6H19.86M16 9C14.9 9 14 8.1 14 7C14 5.9 14.9 5 16 5S18 5.9 18 7C18 8.1 17.1 9 16 9Z"/></svg>', Ud = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"/></svg>', vi = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/></svg>', Yd = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>', Hp = (o) => '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">' + o.map((r) => '<path d="' + r + '"/>').join("") + "</svg>", yi = Hp(["M12 20H21", "M16.5 3.5C17.33 2.67 18.67 2.67 19.5 3.5C20.33 4.33 20.33 5.67 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z"]), Zd = Hp(["M20 6L9 17L4 12"]), za = (o, r = "") => '<span class="tfAreaGlyph" data-icon-for="' + F(o || "") + '"' + (r ? ' data-icon-name="' + F(r) + '"' : "") + "></span>", o0 = (o) => '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.8l2.8 6 6.6.6-5 4.4 1.5 6.5L12 17l-5.9 3.3 1.5-6.5-5-4.4 6.6-.6z" fill="' + (o ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>', n0 = 1, r0 = [["disarmed", "Off", "alarm_disarm", 0], ["armed_home", "Home", "alarm_arm_home", 1], ["armed_away", "Away", "alarm_arm_away", 2], ["armed_night", "Night", "alarm_arm_night", 4]], Kd = { disarmed: "Disarmed", armed_home: "Armed home", armed_away: "Armed away", armed_night: "Armed night", armed_vacation: "Armed vacation", arming: "Arming", pending: "Pending", triggered: "Triggered", disarming: "Disarming" }, xi = ["door", "window", "garage_door", "opening"], Xd = { moisture: ["detected water", "dry"], smoke: ["detected smoke", "clear"], gas: ["detected gas", "clear"], carbon_monoxide: ["detected carbon monoxide", "clear"], safety: ["became unsafe", "safe"] }, yr = ["light", "climate", "cover", "humidifier", "media_player", "vacuum", "lock", "alarm_control_panel", "valve"], i0 = ["light", "switch", "fan", "lock", "cover", "climate", "humidifier", "media_player", "alarm_control_panel", "vacuum", "valve", "binary_sensor"], s0 = 10, l0 = 20, c0 = { electricity: "mdi:lightning-bolt", solar: "mdi:solar-power-variant", gas: "mdi:fire", water: "mdi:water" }, d0 = ["living room", "bedroom", "office"];
function p0(o, { config: r, getHass: c }) {
  var qc, Wc, Vc;
  const p = (t) => o.getElementById(t), g = p("app"), x = r || {}, b = String(x.layout || "").toLowerCase().replace("_", "-") === "test-focus", A = String(x.page || "").toLowerCase() === "overview";
  let B = ja.get(Ld) === "1", y = {};
  const H = (t) => {
    var e;
    return (e = c()) == null ? void 0 : e.callWS(t);
  }, _ = (t, e, a) => H({ type: "call_service", domain: t, service: e, service_data: a }), X = o.querySelector("#appearancePane .toggleList");
  X && !p("densityToggle") && (X.insertAdjacentHTML(
    "afterbegin",
    '<div class="toggleRow"><div><strong>Show density</strong><div class="status">Each card’s height, and how many readings fit on the screen.</div></div><button class="switch" id="densityToggle" type="button" aria-label="Show density"></button></div>'
  ), p("densityToggle").addEventListener("click", () => {
    B = !B, ja.set(Ld, B ? "1" : "0"), Y();
  }));
  const K = [
    ["weather", "Weather", "The forecast under Home.", (t) => t.startsWith("weather.")],
    ["grid", "Energy", "Power from the grid, for Energy.", (t) => t.startsWith("sensor.") && jt(t).device_class === "power" && /^(W|kW)$/.test(jt(t).unit_of_measurement || "")],
    ["alarm", "Alarm", "The alarm in the Security popup.", (t) => t.startsWith("alarm_control_panel.")]
  ], at = (t, e, a, n) => '<div class="themeChoice" id="' + t + '" role="group" aria-label="' + e + '">' + n.map(([i, d]) => '<button class="wxLayoutBtn" type="button" aria-pressed="false" ' + a + '="' + i + '">' + d + "</button>").join("") + "</div>", et = (t, e, a, n) => '<div class="toggleRow"' + (n ? ' id="' + n + '"' : "") + "><div><strong>" + t + "</strong>" + (e ? '<div class="status">' + e + "</div>" : "") + "</div>" + a + "</div>";
  function U() {
    var M, I;
    if (!b || p("housePane")) return;
    const t = p("settingsView");
    t.querySelector(".settingsTitle").textContent = "HomeCore settings";
    const e = [["look", "Appearance"], ["lights", "Lights"], ["sources", "Sources"], ["sums", "Summaries"]], a = (j, P) => '<div class="houseTab' + (j === "look" ? " active" : "") + '" data-house-pane="' + j + '"><section class="card">' + P + "</section></div>";
    t.querySelector(".rubberTabs").insertAdjacentHTML("afterend", '<div class="settingsPane active" id="housePane"><div class="tabs rubberTabs houseTabs"><div class="rubberIndicator" aria-hidden="true"></div>' + e.map(([j, P]) => '<button class="tab segBtn' + (j === "look" ? " active" : "") + '" type="button" data-house-tab="' + j + '">' + P + "</button>").join("") + "</div>" + // Appearance in groups (Matt, 8 Nov), each one's title inside its card as a card header (Matt, 9 Nov)
    a("look", Km.map(([j, P]) => '<div class="tfSetGroup"><div class="toggleList" data-look-group="' + j + '"><div class="tfCardTitle">' + P + "</div></div></div>").join("")) + // Lights as cards by default, with a Cards | Table choice (Matt, 9 Nov)
    a("lights", '<div class="tfLightView"><div class="themeChoice" role="group" aria-label="Show lights as"><button class="wxLayoutBtn" type="button" data-light-view="cards">Cards</button><button class="wxLayoutBtn" type="button" data-light-view="table">Table</button></div></div><p class="note tfTableNote">This is an example of a table. It is not how to control features in lights.</p><div class="metaTableWrap"><table class="metaTable tfLightTable"><thead><tr><th>Light</th><th>Room</th><th>Now</th><th class="metaSwitchCol">Favourite</th><th>Tile</th><th>Pad</th></tr></thead><tbody id="lightRows"></tbody></table></div><div class="tfLightCards" id="lightCards"></div>') + a("sources", '<div class="toggleList">' + K.map(([j, P, O]) => et(P, O, '<select class="settingsSelect" data-source="' + j + '" aria-label="' + P + '"></select>')).join("") + "</div>") + a("sums", '<div class="toggleList">' + Object.entries(vr).map(([j, P]) => et(P.name, "", '<button class="switch" type="button" role="switch" data-sum-toggle="' + j + '" aria-label="' + P.name + ' summary"></button>')).join("") + "</div>") + "</div>");
    const n = (j) => t.querySelector('[data-look-group="' + j + '"]'), i = (j) => j == null ? void 0 : j.closest(".toggleRow");
    [i(t.querySelector(".themeBtn"))].forEach((j) => j && n("look").appendChild(j));
    const d = i(p("densityToggle"));
    d && (d.hidden = !0), [i(p("moreInfoChoice")), i(p("namesChoice"))].forEach((j) => j && n("house").appendChild(j)), n("house").insertAdjacentHTML("beforeend", et("Lights", "How lights show on the house page.", at("lightsChoice", "Lights", "data-lights", [["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]]), "lightsRow") + et("Pad", "What the Dual Axis Controller’s pad sets on its tile.", at("dacPadChoice", "Pad", "data-dac-pad", [["temperature", "Temperature"], ["colour", "Colour"]]), "dacPadRow")), [i(p("hoursChoice")), i(p("wxStyleChoice"))].forEach((j) => j && n("weather").appendChild(j));
    const s = p("housePane"), f = s.querySelector(".houseTabs"), h = f.querySelector(".rubberIndicator"), k = "homecore-light-view", S = (j) => {
      s.classList.toggle("tfLightCardsOn", j === "cards"), s.querySelectorAll("[data-light-view]").forEach((P) => P.setAttribute("aria-pressed", String(P.dataset.lightView === j))), ja.set(k, j);
    };
    S(ja.get(k) === "table" ? "table" : "cards"), s.querySelector(".tfLightView").addEventListener("click", (j) => {
      const P = j.target.closest("[data-light-view]");
      P && S(P.dataset.lightView);
    }), new ResizeObserver(() => pt()).observe(s), (I = (M = document.fonts) == null ? void 0 : M.ready) == null || I.then(() => pt());
    const v = (j) => {
      const P = f.querySelector(".tab.active");
      h.style.transition = "none", j ? Si(h, h.offsetLeft, h.offsetWidth, P.offsetLeft, P.offsetWidth) : (h.style.left = P.offsetLeft + "px", h.style.width = P.offsetWidth + "px");
    };
    new ResizeObserver(() => v(!1)).observe(f), s.addEventListener("click", (j) => {
      const P = j.target.closest("[data-house-tab]");
      if (P) {
        f.querySelectorAll(".tab").forEach((R) => R.classList.toggle("active", R === P)), s.querySelectorAll(".houseTab").forEach((R) => R.classList.toggle("active", R.dataset.housePane === P.dataset.houseTab)), P.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" }), v(!0), pt();
        return;
      }
      const O = j.target.closest("[data-light-fav]");
      if (O) {
        Go(O.dataset.lightFav);
        return;
      }
      const T = j.target.closest("[data-light-pick]");
      if (T) {
        const [R, Mt] = T.dataset.lightPick.split("|"), Kt = { ...Wt[R] };
        T.dataset.v ? Kt[Mt] = T.dataset.v : delete Kt[Mt], Wt[R] = Kt, Ya(), [...Oe.keys()].filter((Nt) => Nt.endsWith(":" + Mt)).forEach((Nt) => Oe.delete(Nt)), so();
        return;
      }
      const Q = j.target.closest("[data-lights],[data-dac-pad],[data-sum-toggle]");
      if (!(!Q || Q.disabled)) {
        if (Q.dataset.lights && (Wt.lights = Q.dataset.lights), Q.dataset.dacPad && (Wt.dacPad = Q.dataset.dacPad), (Q.dataset.lights || Q.dataset.dacPad) && (Ya(), Oe.clear()), Q.dataset.sumToggle) {
          const R = Q.dataset.sumToggle, Mt = new Set(gt.hiddenSums || []);
          Mt.has(R) ? Mt.delete(R) : Mt.add(R), gt = { ...gt, hiddenSums: [...Mt] }, sa();
        }
        so();
      }
    }), s.addEventListener("change", (j) => {
      const P = j.target;
      P.dataset.source && (gt = { ...gt, sources: { ...gt.sources || {}, [P.dataset.source]: P.value || void 0 } }, sa());
      const O = P.dataset.lightStyle || P.dataset.lightPad;
      if (O) {
        const T = P.dataset.lightStyle ? "lightStyles" : "lightPads", Q = { ...Wt[T] };
        P.value ? Q[O] = P.value : delete Q[O], Wt[T] = Q, Ya(), [...Oe.keys()].filter((R) => R.endsWith(":" + O)).forEach((R) => Oe.delete(R));
      }
      so();
    });
  }
  function q() {
    var v, M;
    Ma() && Zn();
    const t = p("housePane");
    if (!t) return;
    const e = !!customElements.get(Ha);
    t.querySelectorAll("[data-lights]").forEach((I) => I.setAttribute("aria-pressed", String(I.dataset.lights === Wt.lights))), p("lightsRow").querySelector(".status").textContent = e || !Ma() ? "How lights show on the house page." : jo === "failed" ? "The Dual Axis Controller didn't load. Check the connection, or install it from HACS." : "Getting the Dual Axis Controller…", t.querySelectorAll("[data-dac-pad]").forEach((I) => I.setAttribute("aria-pressed", String(I.dataset.dacPad === Wt.dacPad))), p("dacPadRow").hidden = !Ma();
    for (const I of t.querySelectorAll("[data-source]")) {
      if (I === o.activeElement) continue;
      const [j] = K.find(([O]) => O === I.dataset.source), P = Object.keys(y).filter(K.find(([O]) => O === j)[3]).sort((O, T) => xt(O).localeCompare(xt(T)));
      I.dataset.sig !== P.join(",") && (I.innerHTML = '<option value="">Automatic</option>' + P.map((O) => '<option value="' + F(O) + '">' + F(xt(O)) + "</option>").join(""), I.dataset.sig = P.join(",")), I.value = P.includes((v = gt.sources) == null ? void 0 : v[j]) ? gt.sources[j] : "";
    }
    t.querySelectorAll("[data-sum-toggle]").forEach((I) => {
      const j = !(gt.hiddenSums || []).includes(I.dataset.sumToggle);
      I.classList.toggle("on", j), I.setAttribute("aria-checked", String(j));
    });
    const a = p("lightRows"), n = p("lightCards"), i = o.activeElement, d = a != null && a.contains(i) || n != null && n.contains(i) ? i : null;
    if (!a || d != null && d.matches("select")) {
      pt();
      return;
    }
    const s = new Set(Et()), f = (I, j, P, O) => '<option value="' + I + '"' + (I === P ? " selected" : "") + ">" + j + "</option>", h = Object.keys(y).filter((I) => I.startsWith("light.")).sort((I, j) => !_t.get(I) - !_t.get(j) || (_t.get(I) || "").localeCompare(_t.get(j) || "") || xt(I).localeCompare(xt(j))).map((I) => {
      const j = Wt.lightStyles[I] || "", P = Wt.lightPads[I] || "", O = s.has(I), T = F(xt(I));
      return "<tr><td><strong>" + T + "</strong></td><td>" + F(_t.get(I) || "—") + "</td><td>" + F(Te(I)) + '</td><td class="metaSwitchCol"><button class="switch' + (O ? " on" : "") + '" type="button" role="switch" aria-checked="' + O + '" data-light-fav="' + F(I) + '" aria-label="' + T + ' is a favourite"></button></td><td><select class="settingsSelect" data-light-style="' + F(I) + '" aria-label="' + T + ' tile">' + f("", "Default", j) + f("tile", "HomeCore tile", j) + f("dac", "Dual Axis Controller", j) + '</select></td><td><select class="settingsSelect" data-light-pad="' + F(I) + '" aria-label="' + T + ' pad"' + ($a(I) ? "" : " disabled") + ">" + f("", "Default", P) + f("temperature", "Temperature", P) + f("colour", "Colour", P) + "</select></td></tr>";
    }).join(""), k = (I, j, P, O, T) => '<div class="themeChoice" role="group" aria-label="' + P + '">' + O.map(([Q, R]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Q === T) + '" data-light-pick="' + I + "|" + F(j) + '" data-v="' + Q + '">' + R + "</button>").join("") + "</div>", S = Object.keys(y).filter((I) => I.startsWith("light.")).sort((I, j) => !_t.get(I) - !_t.get(j) || (_t.get(I) || "").localeCompare(_t.get(j) || "") || xt(I).localeCompare(xt(j))).map((I) => {
      const j = s.has(I), P = F(xt(I)), O = [_t.get(I), Te(I)].filter(Boolean).map(F).join(" · ");
      return '<div class="toggleList"><div class="toggleRow"><div><strong>' + P + '</strong><div class="status">' + O + "</div></div></div>" + et("Favourite", "", '<button class="switch' + (j ? " on" : "") + '" type="button" role="switch" aria-checked="' + j + '" data-light-fav="' + F(I) + '" aria-label="' + P + ' is a favourite"></button>') + et("Tile", "", k("lightStyles", I, P + " tile", [["", "Default"], ["tile", "HomeCore tile"], ["dac", "Dual Axis Controller"]], Wt.lightStyles[I] || "")) + ($a(I) ? et("Pad", "", k("lightPads", I, P + " pad", [["", "Default"], ["temperature", "Temperature"], ["colour", "Colour"]], Wt.lightPads[I] || "")) : "") + "</div>";
    }).join("");
    a.dataset.html !== h && (a.innerHTML = h, a.dataset.html = h), n.dataset.html !== S && (n.innerHTML = S, n.dataset.html = S), d != null && d.dataset.lightFav && ((M = (n.contains(d) ? n : a).querySelector('[data-light-fav="' + CSS.escape(d.dataset.lightFav) + '"]')) == null || M.focus({ preventScroll: !0 })), pt();
  }
  function pt() {
    var e, a, n;
    const t = p("housePane");
    if (t)
      for (const i of t.querySelectorAll(".themeChoice")) {
        const d = [...i.querySelectorAll("button")];
        let s = (e = i.nextElementSibling) != null && e.classList.contains("tfChoiceList") ? i.nextElementSibling : null;
        if (!s) {
          s = document.createElement("select"), s.className = "settingsSelect tfChoiceList", s.setAttribute("aria-label", i.getAttribute("aria-label") || ((n = (a = i.closest(".toggleRow")) == null ? void 0 : a.querySelector("strong")) == null ? void 0 : n.textContent) || ""), s.addEventListener("change", () => {
            var v;
            return (v = d[Number(s.value)]) == null ? void 0 : v.click();
          }), i.after(s);
          const S = () => {
            s.innerHTML = d.map((M, I) => '<option value="' + I + '"' + (M.disabled ? " disabled" : "") + ">" + F(M.textContent) + "</option>").join("");
            const v = d.findIndex((M) => M.getAttribute("aria-pressed") === "true" || M.classList.contains("active"));
            v >= 0 && (s.value = String(v));
          };
          new MutationObserver(S).observe(i, { subtree: !0, attributes: !0, attributeFilter: ["aria-pressed", "class", "disabled"] }), S();
        }
        const f = (S) => {
          i.hidden !== !S && (i.hidden = !S), s.hidden !== S && (s.hidden = S);
        };
        if (d.length > 3) {
          f(!1);
          continue;
        }
        if (!i.getClientRects().length && !s.getClientRects().length) {
          s.dataset.fit || f(!0);
          continue;
        }
        const h = i.hidden;
        i.hidden = !1;
        const k = d.every((S) => S.scrollWidth <= S.clientWidth + 1);
        i.hidden = h, f(k), s.dataset.fit = "1";
      }
  }
  const dt = document.createElement("div");
  dt.className = "densityBadge", dt.setAttribute("aria-live", "polite"), dt.hidden = !0, g.appendChild(dt);
  let mt = 0;
  function nt() {
    if (!B) return;
    const t = p("homeView"), e = (d) => d.offsetParent !== null && !d.closest("[hidden]");
    t.querySelectorAll(":scope .card, :scope .tfAction").forEach((d) => {
      e(d) && (d.dataset.h = Math.round(d.getBoundingClientRect().height) + " px");
    });
    const a = [...t.querySelectorAll(".activityRow, .tfAction, .wxNow")].filter(e), n = window.innerHeight, i = a.filter((d) => {
      const s = d.getBoundingClientRect();
      return s.height > 0 && s.top >= 0 && s.bottom <= n + 0.5;
    }).length;
    dt.hidden = !t.classList.contains("active"), dt.innerHTML = "<b>" + i + "</b><small>of " + a.length + " readings on screen</small>";
  }
  const z = () => {
    B && requestAnimationFrame(nt);
  };
  function Y() {
    var t;
    g.classList.toggle("showDensity", B), (t = p("densityToggle")) == null || t.classList.toggle("on", B), dt.hidden = !B, clearInterval(mt), B && (mt = setInterval(nt, 1e3), nt());
  }
  window.addEventListener("scroll", z, { capture: !0, passive: !0 }), window.addEventListener("resize", z, { passive: !0 });
  const L = o.querySelector("#homeView .grid"), wt = document.createElement("style");
  o.appendChild(wt);
  const rt = new ResizeObserver(() => Ot()), St = /* @__PURE__ */ new Set(), $ = (t) => {
    const e = t.getBoundingClientRect().height;
    return Math.abs(e - t.offsetHeight) < 1 ? e : t.offsetHeight;
  };
  function Ot() {
    const t = g.classList.contains("tfAreaOpen") && !g.classList.contains("tfWeatherOpen");
    if (L.classList.toggle("tfStack", t), St.forEach((h) => {
      (!t || !h.isConnected) && (rt.unobserve(h), St.delete(h));
    }), !t) {
      wt.textContent = "";
      return;
    }
    const e = getComputedStyle(L), a = parseFloat(e.columnGap) || 0, n = e.gridTemplateColumns.split(" ").length, i = [...L.children].filter((h) => h.dataset.k && h.offsetParent);
    wt.disabled = !0;
    const d = i.map((h) => {
      const k = getComputedStyle(h), S = /span (\d+)/.exec(k.gridColumnStart + " " + k.gridColumnEnd);
      return Math.min(n, S ? +S[1] : k.gridColumnEnd === "-1" ? n : 1);
    });
    wt.disabled = !1;
    let s = 0;
    const f = i.map((h, k) => {
      St.has(h) || (St.add(h), rt.observe(h));
      const S = d[k];
      s + S > n && (s = 0);
      const v = s + 1;
      return s = (s + S) % n, '#homeView .grid.tfStack>[data-k="' + CSS.escape(h.dataset.k) + '"]{grid-column:' + v + " / span " + S + ";grid-row-end:span " + Math.max(1, Math.ceil($(h) + a)) + "}";
    }).join(`
`);
    wt.textContent !== f && (wt.textContent = f);
  }
  new MutationObserver(Ot).observe(L, { childList: !0 }), new MutationObserver(Ot).observe(g, { attributes: !0, attributeFilter: ["class"] });
  let N = null, Z = null, D = null;
  const st = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), it = /* @__PURE__ */ new Map(), vt = 6;
  let ut = null;
  const bt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), re = /* @__PURE__ */ new Map();
  let gt = { favourites: null }, He = {}, wo = {}, Ho = [], vo = null;
  const na = (() => {
    try {
      return JSON.parse(ja.get(jd)) || {};
    } catch {
      return {};
    }
  })();
  let _t = /* @__PURE__ */ new Map(), le = 0;
  function sa() {
    clearTimeout(le), le = setTimeout(() => Promise.resolve(H({ type: "frontend/set_user_data", key: Vd, value: gt })).catch(() => {
    }), 400);
  }
  const Wt = (() => {
    let t = {};
    try {
      t = JSON.parse(ja.get(zd)) || {};
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
  })(), Ya = () => ja.set(zd, JSON.stringify(Wt)), Nn = () => {
    g.dataset.more = Wt.more, g.dataset.names = Wt.names, Ds();
  };
  b && X && !p("moreInfoChoice") && (p("densityToggle").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>More info</strong><div class="status">How a device opens on the house page.</div></div><div class="themeChoice" id="moreInfoChoice" role="group" aria-label="More info">' + Xm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Wt.more === t) + '" data-more-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("moreInfoChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-more-style]");
    e && (Wt.more = e.dataset.moreStyle, Ya(), Nn(), p("moreInfoChoice").querySelectorAll("[data-more-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("moreInfoChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Long names</strong><div class="status">How a name or state too long for its space shows.</div></div><div class="themeChoice" id="namesChoice" role="group" aria-label="Long names">' + $m.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Wt.names === t) + '" data-names-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("namesChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-names-style]");
    e && (Wt.names = e.dataset.namesStyle, Wt.namesPicked = !0, Ya(), Nn(), p("namesChoice").querySelectorAll("[data-names-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("namesChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Next hours</strong><div class="status">The hours each day shows on the Weather page.</div></div><div class="themeChoice" id="hoursChoice" role="group" aria-label="Next hours">' + Jm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Wt.hoursWindow === t) + '" data-hours-window="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("hoursChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-hours-window]");
    e && (Wt.hoursWindow = e.dataset.hoursWindow, Ya(), Me == null || Me.refresh(), p("hoursChoice").querySelectorAll("[data-hours-window]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  }), p("hoursChoice").closest(".toggleRow").insertAdjacentHTML(
    "afterend",
    '<div class="toggleRow"><div><strong>Weather art</strong><div class="status">How the weather and the sky are drawn.</div></div><div class="themeChoice" id="wxStyleChoice" role="group" aria-label="Weather art">' + Qm.map(([t, e]) => '<button class="wxLayoutBtn" type="button" aria-pressed="' + (Wt.wxStyle === t) + '" data-wx-style="' + t + '">' + e + "</button>").join("") + "</div></div>"
  ), p("wxStyleChoice").addEventListener("click", (t) => {
    const e = t.target.closest("[data-wx-style]");
    e && (Wt.wxStyle = e.dataset.wxStyle, Ya(), Me == null || Me.setStyle(Wt.wxStyle), Se == null || Se.forEach((a) => a.setStyle(Wt.wxStyle)), p("wxStyleChoice").querySelectorAll("[data-wx-style]").forEach((a) => a.setAttribute("aria-pressed", String(a === e))));
  })), U();
  let qt = { rooms: [], vacuums: [], homeVacuums: [], grid: null, security: { alarms: [], locks: [], openings: [] } };
  const la = /* @__PURE__ */ new Map();
  let Sr = "";
  const Ar = b ? Lu({ onChange: () => _e() }) : null;
  b && g.classList.add("house");
  const ca = Object.assign(document.createElement("div"), { className: "tfBento" });
  let Me = null, Cr = null, No = !1;
  function _r(t) {
    const e = oe();
    if (g.classList.toggle("houseBento", !!e), Me && (Cr !== e || t == null) && (Me.destroy(), Me = null), !e || t == null) {
      ca.remove();
      return;
    }
    ca.isConnected || L.append(ca), ca.style.order = t, !Me && !No && (Me = Cd(ca, { getHass: c, entityId: e, style: Wt.wxStyle, hoursWindow: () => Wt.hoursWindow }), Cr = e);
  }
  const rn = [
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
  ], Tr = rn.map(([t]) => t), yo = ["aq", "pollen", "radar", "hourly", "sun", "moon", "uv", "humidity", "pressure", "wind", "visibility"], Ei = { hourly: 2 }, Ba = Object.fromEntries(rn.map(([t]) => [t, Object.assign(document.createElement("div"), { className: "tfDashBento tfDash-" + t })]));
  let Se = null, On = null;
  function Dr(t) {
    const e = oe();
    Se && On !== e && (Se.forEach((a) => a.destroy()), Se = null), Object.values(Ba).forEach((a) => e ? !a.isConnected && L.append(a) : a.remove()), e && !Se && !No && (Se = /* @__PURE__ */ new Map(), On = e), In();
  }
  function In() {
    if (!Se || No) return;
    const t = new Set(ne().hidden);
    rn.forEach(([e, a]) => {
      Se.has(e) || t.has(e) && !(Yt != null && Yt.fromTray && Yt.key === e) || Se.set(e, Cd(Ba[e], { getHass: c, entityId: On, style: Wt.wxStyle, cards: a, onOpen: e === "wx" ? () => vc("weather") : void 0 }));
    });
  }
  const jt = (t) => {
    var e;
    return ((e = y[t]) == null ? void 0 : e.attributes) || {};
  }, xt = (t) => jt(t).friendly_name || t, Ae = (t, e) => La(t) || (Number(jt(t).supported_features) & e) === e, Jt = (t) => {
    const e = String(t ?? "").replace(/_/g, " ");
    return e.charAt(0).toUpperCase() + e.slice(1);
  }, Ve = (t, e = 1) => Number(t).toLocaleString(void 0, { minimumFractionDigits: e, maximumFractionDigits: e }), xo = (t) => (t == null ? void 0 : t.state) === "on" ? t.attributes.brightness != null ? Math.max(1, Math.round(t.attributes.brightness / 2.55)) : 100 : 0, Fn = (t) => jt(t).supported_color_modes || [], ko = (t, e) => [5, 3, 1].map((a) => {
    const n = (a + t / 60) % 6;
    return 255 * (1 - e / 100 * Math.max(0, Math.min(n, 4 - n, 1)));
  }), qn = (t) => (t /= 255, t <= 0.03928 ? t / 12.92 : Math.pow((t + 0.055) / 1.055, 2.4)), Lr = (t) => 0.2126 * qn(t[0]) + 0.7152 * qn(t[1]) + 0.0722 * qn(t[2]), Bi = (t, e) => {
    const a = Lr(t), n = Lr(e);
    return (Math.max(a, n) + 0.05) / (Math.min(a, n) + 0.05);
  }, Ri = 0.55, sn = ["hs", "xy", "rgb", "rgbw", "rgbww"], Er = (t) => {
    const e = jt(t), a = sn.includes(e.color_mode);
    return (a && e.rgb_color ? e.rgb_color : a && e.hs_color ? ko(...e.hs_color) : [255, 170, 0]).map((n) => Math.round(Math.max(0, Math.min(255, n))));
  }, Pi = { heat: [255, 111, 34], cool: [33, 150, 243], heat_cool: [255, 193, 7], auto: [76, 175, 80], dry: [255, 152, 0], fan_only: [0, 188, 212] };
  function Oo(t) {
    var n;
    const e = t.split(".")[0], a = (n = y[t]) == null ? void 0 : n.state;
    return !a || a === "unavailable" || a === "unknown" ? null : e === "light" ? a === "on" ? Er(t) : null : e === "climate" ? Pi[a] || null : e === "cover" ? a !== "closed" ? [146, 107, 199] : null : e === "lock" ? a !== "locked" ? [244, 67, 54] : null : e === "media_player" ? ["playing", "paused", "on", "buffering"].includes(a) ? [3, 169, 244] : null : e === "humidifier" || e === "valve" ? ["on", "open", "opening", "closing"].includes(a) ? [33, 150, 243] : null : e === "vacuum" ? ["cleaning", "returning"].includes(a) ? [0, 150, 136] : null : e === "alarm_control_panel" ? a !== "disarmed" && a !== "triggered" ? [76, 175, 80] : null : e === "fan" ? a === "on" ? [0, 188, 212] : null : (e === "switch" || e === "input_boolean") && a === "on" ? [255, 193, 7] : null;
  }
  function Wn(t, e, a = !1) {
    const [n, i, d] = t.map((j) => j / 255), s = Math.max(n, i, d), f = Math.min(n, i, d), h = s - f, k = h ? (s === n ? (i - d) / h + (i < d ? 6 : 0) : s === i ? (d - n) / h + 2 : (n - i) / h + 4) * 60 : 0, S = (s + f) / 2, v = h ? h / (1 - Math.abs(2 * S - 1)) : 0, M = h < 0.1 ? Math.min(v, 0.25) : 1, I = (j) => {
      const P = (T) => (T + k / 30) % 12, O = M * Math.min(j, 1 - j);
      return [0, 8, 4].map((T) => Math.round(255 * (j - O * Math.max(-1, Math.min(P(T) - 3, 9 - P(T), 1)))));
    };
    for (let j = 0.5; a ? j < 0.96 : j > 0.04; j += a ? 0.01 : -0.01) {
      const P = I(j);
      if (Bi(P, e) >= 3) return "rgb(" + P.join(",") + ")";
    }
    return a ? "#ffffff" : "#26221e";
  }
  const ln = (t) => {
    const e = [1, 3, 5].map((a) => parseInt(t.slice(a, a + 2), 16));
    return Math.max(...e) - Math.min(...e) < 26 ? "" : ";--sum-d:" + Wn(e, [58, 58, 58], !0) + ";--sum-l:" + Wn(e, [230, 230, 230]);
  }, Br = { d: ["#ffb894", "#d2b4ff", "#9dcbff"], l: ["#f0946a", "#b48ae6", "#6fa8e8"] }, Hi = () => [0, 1, 2].map((t) => "--g" + t + "-d:" + Br.d[t] + ";--g" + t + "-l:" + Br.l[t]).join(";"), Ni = '<svg class="tfGradDefs" aria-hidden="true" focusable="false"><defs><linearGradient id="hcClimateGrad" x1="0" y1="0" x2="0" y2="1">' + [0.15, 0.5, 0.85].map((t, e) => '<stop offset="' + t + '" style="stop-color:var(--g' + e + ')"/>').join("") + "</linearGradient></defs></svg>", Za = (t) => {
    const e = t.map((a) => Math.round(a + (255 - a) * Ri));
    return "--light-soft:rgb(" + e.join(",") + ");--light-ink:" + Wn(t, e);
  }, Oi = (t) => Za(Er(t)), cn = (t) => {
    const e = Oo(t);
    return e ? ' data-light style="' + Za(e) + '"' : "";
  }, Ka = (t) => {
    const e = Fn(t);
    return e.length ? e.some((a) => a !== "onoff") : jt(t).brightness != null;
  }, Ra = (t) => [jt(t).min_color_temp_kelvin || 2e3, jt(t).max_color_temp_kelvin || 6500], da = (t) => new Date(t).toLocaleTimeString(void 0, { hour: "2-digit", minute: "2-digit" });
  function Rr(t) {
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
  const Ne = (t) => {
    var e;
    return jt(t).current_position ?? (((e = y[t]) == null ? void 0 : e.state) === "closed" ? 0 : 100);
  }, Mo = (t) => {
    var e;
    return Oa("pos", t, ((e = bt.get(t)) == null ? void 0 : e.pos) ?? Ne(t));
  }, Vn = (t) => {
    var e;
    return Oa("tilt", t, ((e = bt.get(t)) == null ? void 0 : e.tilt) ?? jt(t).current_tilt_position);
  };
  function Te(t) {
    var s;
    const e = y[t];
    if (!e) return "Not found";
    if (e.state === "unavailable") return "Unavailable";
    const a = e.attributes, n = t.split(".")[0];
    if (n === "light") {
      if (e.state !== "on") return "Off";
      const f = a.color_temp_kelvin;
      return (Ka(t) ? xo(e) + "%" : "On") + (a.color_mode === "color_temp" && f ? " · " + Number(f).toLocaleString() + "k" : sn.includes(a.color_mode) ? " · Colour" : "");
    }
    if (n === "climate") return (e.state === "off" ? "Off" : Jt(a.hvac_action || e.state)) + " · " + Ve(a.current_temperature) + " °C now";
    if (n === "cover") {
      const f = Ne(t), h = a.current_tilt_position;
      return e.state === "opening" || e.state === "closing" ? Jt(e.state) + " - " + f + "%" : (f <= 0 ? "Closed" : f >= 100 ? "Open" : "Partially open") + (h > 0 && h < 100 ? " · tilted" : "");
    }
    if (n === "humidifier") return e.state !== "on" ? "Off" : Jt(a.action || "on") + " · " + a.current_humidity + "% now";
    if (n === "vacuum") return Jt(e.state) + (e.state === "cleaning" && ((s = a.rooms) != null && s.length) ? " · " + a.rooms.join(", ") : "") + (a.battery_level != null ? " · " + a.battery_level + "%" : "");
    if (n === "media_player") return e.state === "playing" || e.state === "paused" ? (e.state === "paused" ? "Paused · " : "") + (a.media_title || "Playing") : Jt(e.state);
    if (n === "alarm_control_panel") return Kd[e.state] || Jt(e.state);
    if (n === "lock" || n === "valve") return Jt(e.state);
    if (n === "switch") return e.state === "on" ? "On" : "Off";
    if (n === "plant") return e.state === "ok" ? "Healthy" : Jt(a.problem);
    if (n === "binary_sensor")
      return a.device_class === "battery" ? e.state === "on" ? "Low" : "Normal" : a.device_class === "problem" ? e.state === "on" ? "Problem" : "OK" : a.device_class === "moisture" ? e.state === "on" ? "Wet" : "Dry" : xi.includes(a.device_class) ? e.state === "on" ? "Open" : "Closed" : e.state === "on" ? "Detected" : "Clear";
    if (a.rang) return "Rang at " + da(a.rang);
    const i = c();
    if (i != null && i.formatEntityState && !La(t))
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
  const jn = (t) => t >= 1e3 ? Ve(t / 1e3, 2) + " kW" : Math.round(t).toLocaleString() + " W";
  function ra(t) {
    var a, n;
    const e = c();
    t.querySelectorAll("[data-icon-for]").forEach((i) => {
      var f;
      const d = y[i.dataset.iconFor], s = i.dataset.iconName || "";
      if (customElements.get("ha-state-icon") && d && !s) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-state-icon") && (i.textContent = "", h = document.createElement("ha-state-icon"), i.appendChild(h)), h.hass = e, h.stateObj = d;
      } else if (customElements.get("ha-icon")) {
        let h = i.firstElementChild;
        (!h || h.localName !== "ha-icon") && (i.textContent = "", h = document.createElement("ha-icon"), i.appendChild(h)), h.icon = s || ((f = d == null ? void 0 : d.attributes) == null ? void 0 : f.icon) || "mdi:circle-medium";
      } else i.textContent || (i.textContent = (i.dataset.letter || xt(i.dataset.iconFor) || "?").trim().charAt(0).toUpperCase());
    }), (a = t.querySelectorAll) == null || a.call(t, ".tfIcon").forEach(Pr), (n = t.classList) != null && n.contains("tfIcon") && Pr(t), Wi();
  }
  const zn = /* @__PURE__ */ new Map();
  function Pr(t) {
    var d, s, f;
    const e = (((d = t.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + (t.dataset.iconFor || ((s = t.querySelector("[data-icon-for]")) == null ? void 0 : s.dataset.iconFor) || t.getAttribute("aria-label") || ""), a = getComputedStyle(t), n = { backgroundColor: a.backgroundColor, color: a.color }, i = zn.get(e);
    zn.set(e, n), !(!i || i.backgroundColor === n.backgroundColor && i.color === n.color || (f = window.matchMedia) != null && f.call(window, "(prefers-reduced-motion: reduce)").matches) && t.animate([i, n], { duration: ye.warp.cdur, delay: ye.warp.cdelay, easing: ke[ye.warp.ease], fill: "backwards" });
  }
  const Ii = "[data-icon-for]>:is(ha-state-icon,ha-icon),.tfIcon>svg", Fi = (t) => {
    const e = [t];
    for (; e.length; ) {
      const a = e.shift();
      if (a.localName === "svg") return a;
      a.shadowRoot && e.push(...a.shadowRoot.children), e.push(...a.children);
    }
    return null;
  };
  function qi(t) {
    var I, j, P;
    const e = t.localName === "svg" ? t : Fi(t), a = e ? [...e.querySelectorAll("path,rect,circle,ellipse,polygon,polyline,line")] : [];
    if (!a.length) return !e;
    const n = (I = t.closest(".tfIcon")) == null ? void 0 : I.offsetWidth;
    if (n === void 0) return !0;
    if (!n) return !1;
    const i = n + "|" + a.map((O) => O.getAttribute("d") || O.localName).join("|");
    if (t.dataset.fitted === i) return !0;
    let d = 1 / 0, s = 1 / 0, f = -1 / 0, h = -1 / 0;
    for (const O of a) {
      const T = O.getBBox(), Q = getComputedStyle(O), R = Q.stroke !== "none" ? (parseFloat(Q.strokeWidth) || 0) / 2 : 0;
      !T.width && !T.height || (d = Math.min(d, T.x - R), s = Math.min(s, T.y - R), f = Math.max(f, T.x + T.width + R), h = Math.max(h, T.y + T.height + R));
    }
    if (!(f > d)) return !1;
    const k = (P = (j = e.viewBox) == null ? void 0 : j.baseVal) != null && P.width ? e.viewBox.baseVal : { x: 0, y: 0, width: 24, height: 24 }, S = n > 40 ? n * (26 / 40) : n - 14, v = S * k.width / Math.max(f - d, h - s), M = v / k.width;
    return t.localName === "svg" ? (t.style.width = v + "px", t.style.height = v + "px") : t.style.setProperty("--mdc-icon-size", v + "px"), e.style.translate = ((k.x + k.width / 2 - (d + f) / 2) * M).toFixed(2) + "px " + ((k.y + k.height / 2 - (s + h) / 2) * M).toFixed(2) + "px", t.dataset.fitted = i, !0;
  }
  let dn = 0;
  function Hr(t = 0) {
    clearTimeout(dn), [...o.querySelectorAll(Ii)].filter((a) => !qi(a)).length && t < 5 && (dn = setTimeout(() => Hr(t + 1), 300));
  }
  function Wi() {
    clearTimeout(dn), dn = setTimeout(() => Hr(), 60);
  }
  const Gn = (t) => {
    var e, a, n;
    return t.startsWith("light.") && y[t] && !jt(t).icon && !((n = (a = (e = c()) == null ? void 0 : e.entities) == null ? void 0 : a[t]) != null && n.icon) ? "mdi:lightbulb" : "";
  }, pe = (t, e, a) => (e = e || Gn(t), ' data-icon-for="' + F(t) + '"' + (e ? ' data-icon-name="' + F(e) + '"' : "") + (a ? ' data-letter="' + F(a) + '"' : "")), pa = (t) => t.endsWith("_solar_power") ? "mdi:solar-power-variant" : jt(t).rang ? "mdi:doorbell" : "", Gt = (t, e, a, n) => F([t, e, a, n ? JSON.stringify(n) : ""].join("|")), pn = (t) => F(JSON.stringify(t));
  function So(t) {
    const e = F(xt(t) + ", " + Te(t));
    return '<div class="activityRow tap" role="button" tabindex="0" data-more="' + F(t) + '" aria-label="' + e + '. More info"><div class="tfIcon" aria-hidden="true"' + pe(t, pa(t)) + '></div><div><div class="activityRowName">' + F(xt(t)) + '</div><div class="activityRowMeta">' + F(Te(t)) + "</div></div></div>";
  }
  const fn = (t, e, a) => '<div class="activityRow" aria-label="' + F(t + ", " + e) + '"><div class="tfIcon" aria-hidden="true"' + pe("", a, t) + '></div><div><div class="activityRowName">' + F(t) + '</div><div class="activityRowMeta">' + F(e) + "</div></div></div>";
  function Ao(t, e, a, n, i = "", d = null, s = "") {
    return '<section class="card tfCard' + (s ? " " + s : "") + '" data-tf data-k="' + F(t) + '" style="order:' + e + '" aria-label="' + F(a) + '"><div class="activityHeader">' + (d ? '<button class="activityTitle tfTitleBtn" type="button" data-more="' + F(d) + '" aria-label="' + F(a + (y[d] ? ", " + Te(d) : "") + ". More info") + '">' + F(a) + "</button>" : '<div class="activityTitle">' + F(a) + "</div>") + '</div><div class="activityRows">' + n.join("") + "</div>" + i + "</section>";
  }
  function Un(t, e) {
    const a = "readings:" + t.id, n = t.readings.map((i) => So(i));
    return t.power != null && n.push(fn("Power now", jn(t.power), "mdi:flash")), Ao(a, e, "Readings", n);
  }
  function Nr(t, e) {
    var f;
    const a = "energy:" + t.id, [n, i] = [t.solar.find((h) => h.endsWith("_power")), t.solar.find((h) => h.endsWith("_today"))], d = [n, i].filter(Boolean).map((h) => So(h)), s = Number(((f = y[n]) == null ? void 0 : f.state) || 0) * 1e3;
    return qt.grid && (d.push(So(qt.grid)), d.push(fn("House use", jn(s + Number(y[qt.grid].state)), "mdi:home-lightning-bolt"))), Ao(a, e, "Energy", d, '<div class="tfCardGraph"><svg class="tfGraph" data-solar role="img" aria-label="Solar, last 24 hours"></svg></div>');
  }
  const Co = (t, e) => Ao("plant:" + t.id, e, xt(t.id), t.readings.map((a) => So(a)), "", t.id);
  function Io(t, e, a, n, i, d, s = null) {
    const f = a == null ? null : Math.max(0, Math.min(1, a)), h = f == null ? 0 : Math.round(f * 100);
    return '<div class="tfBar ' + t + '" role="slider" tabindex="0" aria-label="' + F(n) + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + h + '"' + (i ? ' aria-valuetext="' + F(i) + '"' : "") + ' data-drag="' + F(t + "|" + e) + '">' + (s != null ? '<span class="was" aria-hidden="true" style="left:' + s + '%"></span>' : "") + (d ? f == null ? "" : '<b style="left:' + h + '%"></b>' : '<i style="width:' + h + '%"></i>') + "</div>";
  }
  const Yn = "homecore-house-last-bright", fa = (() => {
    try {
      return JSON.parse(ja.get(Yn)) || {};
    } catch {
      return {};
    }
  })();
  let Xa = 0;
  const Fo = (t, e) => {
    !e || fa[t] === e || (fa[t] = e, clearTimeout(Xa), Xa = setTimeout(() => ja.set(Yn, JSON.stringify(fa)), 500));
  }, Pa = (t, e, a, n) => '<div class="tfStep" role="group" aria-label="' + F(t) + '"><button type="button" data-act="' + a + '" aria-label="Lower ' + F(t.toLowerCase()) + '">' + Pd.down + "</button><output>" + F(e) + '</output><button type="button" data-act="' + n + '" aria-label="Raise ' + F(t.toLowerCase()) + '">' + Pd.up + "</button></div>", ua = (t, e, a) => '<div class="' + t + '" role="group" aria-label="' + F(e) + '">' + a.filter(Boolean).map((n) => '<button type="button" data-act="' + n.act + '"' + (n.pressed != null ? ' aria-pressed="' + n.pressed + '"' : "") + (n.disabled ? " disabled" : "") + (n.aria ? ' aria-label="' + F(n.aria) + '"' : "") + ">" + (n.html || F(n.label)) + "</button>").join("") + "</div>", un = (t, e) => "width:" + Math.round(Math.max(0, Math.min(1, (t - e * 25) / 25)) * 1e3) / 10 + "%;opacity:" + (0.6 + 0.4 * e / 3).toFixed(2), Or = (t) => "left:calc(4px + " + t / 100 + " * (100% - 8px))", Vi = (t, e) => '<div class="tfBlocks" role="slider" tabindex="0" aria-label="' + F(xt(t)) + ' position" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-blocks="' + F(t) + '">' + [0, 1, 2, 3].map((a) => '<span><i style="' + un(e, a) + '"></i><b' + (e >= (a + 1) * 25 - 12 ? ' class="lit"' : "") + ">" + (a + 1) * 25 + "<small>%</small></b></span>").join("") + '<output class="tfTip" aria-hidden="true" style="' + Or(e) + '">' + Math.round(e) + "%</output></div>";
  function De(t, e) {
    t.querySelectorAll(":scope>span").forEach((n, i) => {
      n.firstElementChild.setAttribute("style", un(e, i)), n.lastElementChild.classList.toggle("lit", e >= (i + 1) * 25 - 12);
    });
    const a = t.querySelector(".tfTip");
    a.setAttribute("style", Or(e)), a.textContent = Math.round(e) + "%", t.setAttribute("aria-valuenow", String(Math.round(e))), t.setAttribute("aria-valuetext", Math.round(e) + "% open");
  }
  const qo = (t, e) => '<div class="tfTilt" role="slider" tabindex="0" aria-label="' + F(xt(t)) + ' tilt" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + Math.round(e) + '" aria-valuetext="' + Math.round(e) + '% open" data-drag="tilt|' + F(t) + '"><i style="width:calc((100% - 8px) * ' + e / 100 + ')"></i><span' + (e > 8 ? ' class="lit"' : "") + ">Shut</span><span" + (e > 92 ? ' class="lit"' : "") + ">Open</span></div>", Ir = (t, e, a) => '<div class="tfSeg tfCoverBtns" role="group" aria-label="' + F(xt(t)) + '">' + [
    Ae(t, zm) && ["open", "Open", "open_cover", e >= 100 && !a],
    Ae(t, Um) && ["stop", "Stop", "stop_cover", !1],
    Ae(t, Gm) && ["close", "Close", "close_cover", e <= 0 && !a]
  ].filter(Boolean).map(([n, i, d, s]) => '<button type="button" data-act="' + Gt("cover", d, t) + '" aria-label="' + i + '"' + (s ? " disabled" : "") + ">" + Ym[n] + "</button>").join("") + "</div>", Wo = (t, e) => '<button class="tfIcon' + (e.art ? " art" : "") + '" type="button" data-act="' + e.button.act + '" aria-label="' + F(e.button.label) + '"' + (e.art ? ' style="background-image:url(&quot;' + F(e.art) + '&quot;)"' : pe(t, e.icon)) + "></button>", Vo = (t) => '<button class="tfName" type="button" data-more="' + F(t) + '" aria-label="' + F(xt(t) + ", " + Te(t) + ". More info") + '"><span class="activityRowName">' + F(xt(t)) + '</span><span class="activityRowMeta">' + F(Te(t)) + "</span></button>";
  function hn(t, e = !1, a = null) {
    const n = Ja(t), i = t.startsWith("light.") && gn(t) && !(a && er(t) < 3), d = a || (e && t.startsWith("light.") ? ["bright"] : null), s = i ? ['<div class="tfDacPad" data-dac="' + (e ? "more:" : a ? "dash:" : "tile:") + F(t) + '"></div>'] : n.sections.map((f, h) => f && (!d || d.includes((n.parts || [])[h])) ? f : "").filter(Boolean);
    return '<div class="tfAction' + (i ? " tfDac" : "") + (n.on ? " on" : "") + (!i && !s.length ? " tfHeadOnly" : "") + '" data-k="' + F(t) + '"' + (n.tone ? ' data-tone="' + n.tone + '"' : "") + cn(t) + '><div class="tfActionHead">' + Wo(t, n) + Vo(t) + "</div>" + s.join("") + "</div>";
  }
  const Ha = "dual-controller-v3", mn = "https://cdn.jsdelivr.net/gh/mbb365/Dual-Axis-Controller-v4@v9.0.5/dist/dual-axis-controller-v4.js";
  let jo = null;
  async function Zn() {
    if (jo || customElements.get(Ha)) return;
    jo = "loading";
    const t = await Promise.resolve().then(() => H({ type: "lovelace/resources" })).catch(() => null), e = Array.isArray(t) && t.some((n) => /dual-axis-controller/i.test(n.url || ""));
    if (await Promise.race([customElements.whenDefined(Ha), new Promise((n) => setTimeout(n, e ? 8e3 : 0))]), customElements.get(Ha)) return;
    const a = Object.assign(document.createElement("script"), { src: mn });
    a.onerror = () => {
      jo = "failed", q();
    }, document.head.appendChild(a);
  }
  const Oe = /* @__PURE__ */ new Map(), $a = (t) => (Wt.lightStyles[t] || Wt.lights) === "dac", Ma = () => Wt.lights === "dac" || Object.values(Wt.lightStyles).includes("dac");
  function gn(t) {
    return $a(t) && !!customElements.get(Ha);
  }
  const Fr = (t) => Wt.lightPads[t] || Wt.dacPad, Kn = () => {
    const t = c();
    return t && {
      ...t,
      themes: { ...t.themes || {}, darkMode: !g.classList.contains("light") },
      callService: (e, a, n, ...i) => t.callService(e, ...Oc(e, a, n), ...i)
    };
  }, bn = "ha-card,.hc.hcTile{padding:0!important;border:0!important;border-radius:0!important;background:none!important;box-shadow:none!important}.hcTileHead{display:none!important}.hc--dark{--hc-text:var(--color-text-primary,#f1f1f1)}.halo.is-size-tile .halo__pad-shell{height:var(--tf-dac-pad,198px)!important;transition:height .25s cubic-bezier(.2,.7,.3,1)}", qr = (t) => {
    !t.shadowRoot || t.shadowRoot.querySelector("style[data-tf]") || (t.shadowRoot.appendChild(Object.assign(document.createElement("style"), { textContent: bn })).dataset.tf = "");
  }, Xn = /* @__PURE__ */ new Map(), Na = new ResizeObserver((t) => t.forEach(({ target: e }) => {
    const a = e.parentElement;
    !a || !e.offsetHeight || (a.style.removeProperty("min-height"), Xn.set(a.dataset.dac, a.offsetHeight));
  }));
  function $e(t) {
    t.querySelectorAll("[data-dac]").forEach((e) => {
      const a = e.dataset.dac;
      let n = Oe.get(a);
      if (!n) {
        const i = a.slice(a.indexOf(":") + 1);
        n = document.createElement(Ha), n.setConfig({ type: "custom:" + Ha, entity: i, pad: Fr(i), tap_action: { action: "none" } }), Oe.set(a, n);
      }
      n.hass = Kn(), n.parentNode !== e && e.replaceChildren(n), !n.offsetHeight && Xn.has(a) && (e.style.minHeight = Xn.get(a) + "px"), Na.observe(n), qr(n);
    });
  }
  function wn() {
    const t = Kn();
    Oe.forEach((e, a) => {
      e.isConnected ? e.hass = t : Oe.delete(a);
    });
  }
  customElements.whenDefined(Ha).then(() => {
    b && (L != null && L.querySelector("[data-tf]")) && xc(so);
  });
  const Oa = (t, e, a) => it.has(t + "|" + e) ? it.get(t + "|" + e) : a;
  function Ja(t) {
    var d;
    const e = y[t], a = e.attributes, n = t.split(".")[0], i = (s, f) => ({ act: Gt(s, "toggle", t), label: f });
    if (n === "light") {
      const s = e.state === "on", f = Fn(t), [h, k] = Ra(t), S = Oa("bright", t, xo(e));
      s && Fo(t, xo(e));
      const v = Oa("ct", t, s && a.color_mode === "color_temp" ? a.color_temp_kelvin : null), M = Oa("hue", t, s && sn.includes(a.color_mode) && a.hs_color ? a.hs_color[0] : null);
      return { on: s, button: i("light", "Turn " + xt(t) + (s ? " off" : " on")), parts: ["bright", "ct", "hue"], sections: [
        Ka(t) && Io("bright", t, S / 100, xt(t) + " brightness", S + "%", !1, s ? null : fa[t] ?? null),
        f.includes("color_temp") && Io("ct", t, v == null ? null : (v - h) / (k - h), xt(t) + " warm to cool", v == null ? "" : Math.round(v) + " kelvin", !0),
        f.some((I) => sn.includes(I)) && Io("hue", t, M == null ? null : M / 360, xt(t) + " colour", "", !0)
      ] };
    }
    if (n === "climate") {
      const s = a.target_temp_step || 0.5, f = Number(a.temperature);
      return { on: e.state !== "off", tone: e.state === "cool" || a.hvac_action === "cooling" ? "cool" : "heat", button: i("climate", "Turn " + xt(t) + (e.state === "off" ? " on" : " off")), parts: ["step", "modes"], sections: [
        Number.isFinite(f) && Pa("Target temperature", Ve(f) + " °C", Gt("climate", "set_temperature", t, { temperature: f - s }), Gt("climate", "set_temperature", t, { temperature: f + s })),
        ua("tfSeg", "Mode", (a.hvac_modes || []).map((h) => ({ label: Jt(h), act: Gt("climate", "set_hvac_mode", t, { hvac_mode: h }), pressed: e.state === h })))
      ] };
    }
    if (n === "cover") {
      const s = e.state === "opening" || e.state === "closing", f = e.state === "closed", h = Mo(t), k = Vn(t);
      return { on: !f, tone: "blue", icon: qd[fl(e)][f ? 1 : 0], button: i("cover", (f ? "Open " : "Close ") + xt(t)), parts: ["blocks", "tilt", "buttons"], sections: [
        Ae(t, Fd) && Vi(t, h),
        k != null && qo(t, k),
        Ir(t, h, s)
      ] };
    }
    if (n === "humidifier") {
      const s = Number(a.humidity);
      return { on: e.state === "on", tone: "blue", icon: "mdi:air-humidifier", button: i("humidifier", "Turn " + xt(t) + (e.state === "on" ? " off" : " on")), parts: ["step", "modes"], sections: [
        Number.isFinite(s) && Pa("Target humidity", s + "%", Gt("humidifier", "set_humidity", t, { humidity: s - 1 }), Gt("humidifier", "set_humidity", t, { humidity: s + 1 })),
        ((d = a.available_modes) == null ? void 0 : d.length) && ua("tfSeg", "Mode", a.available_modes.map((f) => ({ label: Jt(f), act: Gt("humidifier", "set_mode", t, { mode: f }), pressed: a.mode === f })))
      ] };
    }
    if (n === "media_player") {
      const s = e.state === "playing", f = e.state === "off" || e.state === "standby", h = Oa("vol", t, a.volume_level), k = f ? { act: Gt("media_player", Ae(t, Vm) ? "turn_on" : "toggle", t), label: "Turn " + xt(t) + " on" } : e.state === "playing" || e.state === "paused" ? { act: Gt("media_player", "media_play_pause", t), label: (s ? "Pause " : "Play ") + xt(t) } : { act: Gt("media_player", Ae(t, jm) ? "turn_off" : "toggle", t), label: "Turn " + xt(t) + " off" };
      return { on: !f, tone: "blue", art: !f && a.entity_picture ? a.entity_picture : null, button: k, parts: ["playback", "volume"], sections: f ? [] : [
        (Ae(t, Nd) || Ae(t, Od) || Ae(t, Hd) || Ae(t, Id)) && ua("tfSeg", "Playback", [
          { html: bi.prev, aria: "Previous", act: Gt("media_player", "media_previous_track", t), disabled: !Ae(t, Nd) },
          { html: s ? bi.pause : bi.play, aria: s ? "Pause" : "Play", act: Gt("media_player", "media_play_pause", t), disabled: !(Ae(t, Hd) || Ae(t, Id)) },
          { html: bi.next, aria: "Next", act: Gt("media_player", "media_next_track", t), disabled: !Ae(t, Od) }
        ]),
        Ae(t, Wm) && h != null && Io("vol", t, h, xt(t) + " volume", Math.round(h * 100) + "%")
      ] };
    }
    if (n === "vacuum") {
      const s = e.state === "cleaning", f = a.rooms || [], h = (S) => f.includes(S) ? f.filter((v) => v !== S) : f.concat(S), k = Gt("vacuum", s ? "pause" : "start", t, La(t) ? { rooms: f } : null);
      return { on: s || e.state === "returning", tone: "blue", button: { act: k, label: (s ? "Pause " : "Start ") + xt(t) }, parts: ["controls", "rooms"], sections: [
        ua("tfSeg", xt(t), [
          { label: s ? "Pause" : "Start", act: k },
          { label: "Dock", act: Gt("vacuum", "return_to_base", t), disabled: e.state === "docked" },
          { label: "Locate", act: Gt("vacuum", "locate", t) }
        ]),
        La(t) && ua("tfChips", "Rooms to clean", qt.rooms.filter((S) => S.id !== "balcony").map((S) => ({ label: S.name, act: Gt("vacuum", "set_rooms", t, { rooms: h(S.name) }), pressed: f.includes(S.name) })))
      ] };
    }
    if (n === "lock") {
      const s = e.state === "locked";
      return { on: !s, tone: "heat", button: { act: Gt("lock", s ? "unlock" : "lock", t), label: (s ? "Unlock " : "Lock ") + xt(t) }, parts: ["controls"], sections: [
        ua("tfSeg", xt(t), [
          { label: "Lock", act: Gt("lock", "lock", t), pressed: s },
          { label: "Unlock", act: Gt("lock", "unlock", t), pressed: e.state === "unlocked" },
          Ae(t, n0) && { label: "Open", act: Gt("lock", "open", t), pressed: e.state === "open" }
        ])
      ] };
    }
    if (n === "alarm_control_panel") {
      const s = e.state === "disarmed";
      return { on: !s, tone: e.state === "triggered" ? "alarm" : "blue", button: { act: Gt("alarm_control_panel", s ? "alarm_arm_away" : "alarm_disarm", t), label: s ? "Arm " + xt(t) + ", away" : "Disarm " + xt(t) }, parts: ["controls"], sections: [
        ua("tfSeg", xt(t), r0.filter(([, , , f]) => !f || Ae(t, f)).map(([f, h, k]) => ({ label: h, act: Gt("alarm_control_panel", k, t), pressed: e.state === f })))
      ] };
    }
    if (n === "valve") {
      const s = e.state === "open";
      return { on: s, tone: "blue", icon: "mdi:sprinkler-variant", button: i("valve", (s ? "Close " : "Open ") + xt(t)), parts: ["controls"], sections: [
        ua("tfSeg", xt(t), [
          { label: "Open", act: Gt("valve", "open_valve", t), pressed: s },
          { label: "Close", act: Gt("valve", "close_valve", t), pressed: !s }
        ])
      ] };
    }
    if (ul.includes(n)) {
      const s = e.state === "on";
      return { on: s, button: i(n, "Turn " + xt(t) + (s ? " off" : " on")), parts: [], sections: [] };
    }
    return { on: !1, button: { act: "", label: xt(t) }, sections: [] };
  }
  const ha = (t) => (Number.isInteger(Number(t)) ? String(Number(t)) : Ve(t)) + "°";
  function Be(t) {
    var O;
    const e = (T) => t.readings.find((Q) => jt(Q).device_class === T), a = e("temperature"), n = e("humidity"), i = (T) => {
      var Q;
      return Number((Q = y[T]) == null ? void 0 : Q.state);
    }, d = (T) => t.actions.filter((Q) => T.test(Q)), s = t.lights.filter((T) => {
      var Q;
      return ((Q = y[T]) == null ? void 0 : Q.state) === "on";
    }), f = d(/^cover\./), h = f.filter((T) => {
      var Q;
      return ((Q = y[T]) == null ? void 0 : Q.state) !== "closed";
    }), k = [...new Set(f.map((T) => fl(y[T])))], S = d(/^climate\./)[0], v = d(/^humidifier\./)[0], M = d(/^media_player\./), I = M.find((T) => {
      var Q;
      return ((Q = y[T]) == null ? void 0 : Q.state) === "playing";
    }) || M.find((T) => {
      var Q;
      return ((Q = y[T]) == null ? void 0 : Q.state) === "paused";
    }), j = t.plugs.filter((T) => {
      var Q;
      return ((Q = y[T]) == null ? void 0 : Q.state) === "on";
    }), P = [];
    if (a && Number.isFinite(i(a)) && P.push({ key: "temp", id: a, kind: "reading", icon: za(a), label: "Temperature", value: Ve(i(a)) + "°" }), n && Number.isFinite(i(n)) && P.push({ key: "hum", id: n, kind: "reading", icon: za(n), label: "Humidity", value: Math.round(i(n)) + "%" }), t.lights.length && P.push({
      key: "lights",
      kind: "control",
      tone: "light",
      icon: za("", "mdi:lightbulb"),
      label: "Lights",
      value: s.length ? s.length + " of " + t.lights.length + " on" : "All off",
      short: s.length ? s.length + " on" : "Off",
      on: s.length > 0,
      light: s.length ? Oi(s[0]) : "",
      acts: t.lights.map((T) => ["light", s.length ? "turn_off" : "turn_on", T]),
      aria: (s.length ? "Turn off" : "Turn on") + " the lights in " + t.name
    }), f.length) {
      const T = k.length === 1 ? Zm[k[0]] : "covers", Q = Math.round(f.reduce((R, Mt) => R + Ne(Mt), 0) / f.length);
      P.push({
        key: "covers",
        kind: "control",
        tone: "blue",
        light: h.length ? Za([146, 107, 199]) : "",
        icon: za("", ((O = qd[k[0]]) == null ? void 0 : O[h.length ? 0 : 1]) || "mdi:window-shutter"),
        label: Jt(T),
        value: Q <= 0 ? "Closed" : Q >= 100 ? "Open" : Q + "% open",
        short: Q <= 0 ? "Closed" : Q + "%",
        on: h.length > 0,
        acts: f.map((R) => ["cover", h.length ? "close_cover" : "open_cover", R]),
        aria: (h.length ? "Close the " : "Open the ") + T + " in " + t.name
      });
    }
    if (S) {
      const T = jt(S), Q = y[S].state === "off";
      P.push({
        key: "climate",
        kind: "control",
        tone: T.hvac_action === "cooling" ? "cool" : "heat",
        light: Oo(S) ? Za(Oo(S)) : "",
        icon: za(S),
        label: xt(S),
        value: Q ? "Off" : Jt(T.hvac_action || y[S].state) + " · " + ha(T.temperature),
        short: Q ? "Off" : ha(T.temperature),
        on: !Q,
        acts: [["climate", "toggle", S]],
        aria: "Turn " + xt(S) + (Q ? " on" : " off")
      });
    }
    if (v) {
      const T = y[v].state === "on";
      P.push({
        key: "humidifier",
        kind: "control",
        tone: "blue",
        light: T ? Za([33, 150, 243]) : "",
        icon: za("", "mdi:air-humidifier"),
        label: xt(v),
        value: T ? "On · " + jt(v).humidity + "%" : "Off",
        short: T ? jt(v).humidity + "%" : "Off",
        on: T,
        acts: [["humidifier", "toggle", v]],
        aria: "Turn " + xt(v) + (T ? " off" : " on")
      });
    }
    if (M.length) {
      const T = I || M[0], Q = y[T], R = Q.state === "playing";
      P.push({
        key: "media",
        kind: "control",
        tone: "blue",
        light: Oo(T) ? Za(Oo(T)) : "",
        icon: za(T),
        label: xt(T),
        value: Te(T),
        short: R ? "Playing" : Q.state === "paused" ? "Paused" : Jt(Q.state),
        on: R,
        acts: [["media_player", Q.state === "playing" || Q.state === "paused" ? "media_play_pause" : "toggle", T]],
        aria: (R ? "Pause " : "Play ") + xt(T)
      });
    }
    return t.plugs.length && P.push({
      key: "plugs",
      kind: "control",
      tone: "blue",
      light: j.length ? Za([255, 193, 7]) : "",
      icon: za("", "mdi:power-plug"),
      label: "Plugs",
      value: j.length ? j.length + " of " + t.plugs.length + " on" : "All off",
      short: j.length ? j.length + " on" : "Off",
      on: j.length > 0,
      acts: t.plugs.map((T) => ["switch", j.length ? "turn_off" : "turn_on", T]),
      aria: (j.length ? "Turn off" : "Turn on") + " the plugs in " + t.name
    }), t.alerts.forEach((T) => P.push(jt(T).device_class === "moisture" ? { key: "alert:" + T, kind: "alert", icon: za(T), label: "Water leak" } : { key: "note:" + T, kind: "note", icon: za(T), label: xt(T) + " " + Te(T).toLowerCase() })), P;
  }
  const vn = (t, e) => {
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
  }, ji = (t, e, a) => '<button class="' + e + (t.on ? " on" : "") + '" type="button" data-tone="' + t.tone + '" data-acts="' + pn(t.acts) + '" aria-label="' + F(t.aria) + '" aria-pressed="' + t.on + '">' + a + "</button>", Wr = (t) => '<button class="tfAName" type="button" data-go="' + F(t.id) + '" aria-label="Open ' + F(t.name) + '">' + F(t.name) + "</button>";
  function $n(t, e, a = !1) {
    const n = e.find((f) => f.key === "lights"), i = !!(n != null && n.on), d = "", s = '<span class="tfAreaGlyph"' + pe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + "></span>";
    return a || !n ? '<span class="tfIcon tfAreaIcon' + (i ? " on" : "") + '"' + d + ' aria-hidden="true">' + s + "</span>" : '<button class="tfIcon tfAreaIcon' + (i ? " on" : "") + '" type="button"' + d + ' data-acts="' + pn(n.acts) + '" aria-label="' + F(n.aria) + '" aria-pressed="' + i + '">' + s + "</button>";
  }
  const l = (t) => t.filter((e) => e.kind === "alert" || e.kind === "note").map((e) => '<span class="sourceTag">' + F(e.label) + "</span>").join(" "), u = (t) => t.readings.find((e) => jt(e).device_class === "temperature") || [...t.readings, ...t.solar, ...t.openings, ...t.actions, ...t.plugs].find((e) => y[e]) || null, m = (t, e) => {
    const a = xt(e);
    return a.toLowerCase().startsWith(t.name.toLowerCase() + " ") ? Jt(a.slice(t.name.length + 1)) : a;
  };
  function w(t) {
    const e = y[t], a = jt(t), n = t.split(".")[0], i = Number(e.state);
    if (e.state === "unavailable") return { text: "Unavailable" };
    if (n === "sensor" && Number.isFinite(i)) {
      if (a.device_class === "temperature") return { text: ha(i) };
      const d = a.unit_of_measurement || "";
      return d === "%" ? { text: Math.round(i) + "%" } : { text: Ve(i, Number.isInteger(i) ? 0 : 1), unit: d };
    }
    if (n === "climate" && (a.current_temperature ?? a.temperature) != null) return { text: ha(a.current_temperature ?? a.temperature) };
    if (n === "light") return { text: e.state !== "on" ? "Off" : Ka(t) ? xo(e) + "%" : "On" };
    if (n === "cover") {
      const d = Ne(t);
      return { text: d <= 0 ? "Closed" : d >= 100 ? "Open" : d + "%" };
    }
    return n === "humidifier" ? { text: e.state === "on" ? a.humidity + "%" : "Off" } : n === "media_player" ? { text: e.state === "playing" ? "Playing" : e.state === "paused" ? "Paused" : Jt(e.state) } : { text: Te(t) };
  }
  const C = (t, e, a) => {
    const n = a.find((f) => f.key === "temp"), i = a.find((f) => f.key === "hum"), d = jt(e), s = y[e].state === "off";
    return e.startsWith("climate.") ? [m(t, e), s ? "Off" : Jt(d.hvac_action || y[e].state) + (d.temperature != null ? " · " + ha(d.temperature) : ""), i && i.value + " humidity"].filter(Boolean).join(" · ") : [!(n && n.id === e) && m(t, e), n && n.id !== e && n.value, i && i.id !== e && i.value + " humidity"].filter(Boolean).join(" · ");
  };
  function E(t, e, a) {
    const n = a && w(a), i = a ? C(t, a, e) : "", d = (h) => {
      const k = vn(t, h.key);
      return k.length === 1 ? k[0] : "group:" + t.id + ":" + h.key;
    }, s = e.filter((h) => h.kind === "control").slice(0, 4).map((h) => '<div class="tfATile' + (h.on ? " on" : "") + '" data-tone="' + h.tone + '"' + (h.light ? ' data-light style="' + h.light + '"' : "") + ">" + ji(h, "tfIcon", h.icon) + '<button class="tfName" type="button" data-more="' + F(d(h)) + '" aria-label="' + F(t.name + " " + h.label.toLowerCase() + ", " + h.value + ". Open") + '"><span class="activityRowName">' + F(h.label) + '</span><span class="activityRowMeta">' + F(h.value) + "</span></button></div>"), f = l(e);
    return '<div class="hcAreaPanelTop">' + $n(t, e) + '<div class="tfATitle">' + Wr(t) + "</div>" + (f ? '<div class="tfATags">' + f + "</div>" : "") + "</div>" + (a ? '<button class="tfABig" type="button" data-more="' + F(a) + '" aria-label="' + F(xt(a) + ", " + Te(a) + ". More info") + '"><span class="tfABigMain' + (n.text.length > 7 ? " long" : "") + '">' + F(n.text) + (n.unit ? '<span class="tfABigUnit">' + F(n.unit) + "</span>" : "") + "</span>" + (i ? '<span class="tfABigSub">' + F(i) + "</span>" : "") + "</button>" : "") + (s.length ? '<div class="tfATiles">' + s.join("") + "</div>" : "");
  }
  function W(t) {
    const e = t.id === N, a = Be(t), n = u(t), i = n && w(n), d = [...a.filter((s) => s.kind === "control"), ...a.filter((s) => s.kind !== "control" && s.kind !== "reading")].slice(0, 4);
    return '<article class="hcAreaPanel tfAreaPanel' + (e ? " active" : "") + '" data-area="' + F(t.id) + '" tabindex="0" aria-expanded="' + e + '" aria-label="' + F(t.name) + '"><div class="panelExpanded"' + (e ? "" : " inert") + ">" + E(t, a, n) + '</div><div class="panelCollapsed tfACollapsed"><div class="tfACTop">' + $n(t, a, !0) + '<span class="tfACName">' + F(t.name) + '</span></div><span class="tfACMain">' + (i ? F(i.text + (i.unit ? " " + i.unit : "")) : "") + '</span><span class="tfACTiles" aria-hidden="true">' + d.map((s) => '<span class="tfACTile"><span class="tfIcon' + (s.kind === "alert" ? " alert" : "") + '"' + (s.on && s.light ? ' data-light style="' + s.light + '"' : "") + ">" + s.icon + "</span></span>").join("") + "</span></div></article>";
  }
  let G = [];
  const V = () => {
    var e;
    const t = new Set(((e = gt.dash) == null ? void 0 : e.areasOff) || []);
    return G.filter((a) => !t.has(a.id));
  }, J = (t) => {
    var a;
    const e = V();
    return e.some((n) => n.id === N) || (N = ((a = e[0]) == null ? void 0 : a.id) || null), '<div class="tfAreas" data-tf data-k="areas" style="order:' + t + '"><section class="hcAreaGallery tfAreaGallery" aria-label="Areas">' + e.map(W).join("") + "</section></div>";
  }, tt = (t) => t.startsWith("room:"), ft = (t) => G.find((e) => "room:" + e.id === t);
  function Bt(t, e) {
    const a = Be(t), n = u(t), i = n && w(n), d = n ? C(t, n, a) : "", s = i ? i.text + (i.unit ? " " + i.unit : "") : "", f = (M) => {
      const I = vn(t, M.key);
      return I.length === 1 ? I[0] : "group:" + t.id + ":" + M.key;
    }, h = a.filter((M) => M.kind === "control").slice(0, 4), k = (M) => M.on && M.light ? ' data-light style="' + M.light + '"' : "", S = h.map((M) => '<button class="tfIcon' + (M.on ? " on" : "") + '" type="button" data-tone="' + M.tone + '"' + k(M) + ' data-more="' + F(f(M)) + '" aria-label="' + F(M.label + ", " + M.value + ". Open its controls") + '">' + M.icon + "</button>"), v = h.map((M) => '<button class="tfRoomDev" type="button" data-more="' + F(f(M)) + '" aria-label="' + F(M.label + ", " + M.value + ". Open its controls") + '"><span class="tfIcon' + (M.on ? " on" : "") + '" data-tone="' + M.tone + '"' + k(M) + ">" + M.icon + '</span><span class="tfRoomDevName"><span class="activityRowName">' + F(M.label) + '</span><span class="activityRowMeta">' + F(M.value) + "</span></span></button>");
    return '<div class="tfAction tfRoomTile" data-k="' + F(e) + '" data-go="' + F(t.id) + '"><div class="tfActionHead"><span class="tfIcon tfRoomIcon" aria-hidden="true"><span class="tfAreaGlyph"' + pe("area:" + t.id, t.icon || "mdi:texture-box", t.name) + '></span></span><button class="tfName" type="button" data-go="' + F(t.id) + '" aria-label="Open ' + F(t.name) + '"><span class="activityRowName">' + F(t.name) + "</span>" + (s || d ? '<span class="activityRowMeta">' + (s ? '<span class="tfRoomInline">' + F(s) + (d ? " · " : "") + "</span>" : "") + F(d) + "</span>" : "") + "</button></div>" + (s ? '<div class="tfRoomReading" aria-hidden="true"><span class="tfRoomBig">' + F(s) + "</span>" + (d ? '<span class="tfRoomSub">' + F(d) + "</span>" : "") + "</div>" : "") + (S.length ? '<div class="tfRoomDevices">' + S.join("") + '</div><div class="tfRoomHeads">' + v.join("") + "</div>" : "") + "</div>";
  }
  const Tt = () => [
    { key: "home", name: "Home", ids: qt.homeVacuums },
    ...qt.rooms.map((t) => ({ key: "room:" + t.id, name: t.name, room: t, ids: t.actions }))
  ], kt = (t, e, a) => t + " " + (t === 1 ? e : a), Et = () => (gt.favourites ?? He.favorite_entities ?? []).filter((t) => y[t]);
  function Dt() {
    if (!vo) {
      const e = Object.entries(na).sort((n, i) => i[1] - n[1]).map(([n]) => n), a = qt.rooms.flatMap((n) => n.actions);
      vo = [.../* @__PURE__ */ new Set([...Ho, ...e, ...a.filter((n) => Ja(n).on), ...a])];
    }
    const t = Et();
    return vo.filter((e) => y[e] && y[e].state !== "unavailable" && !t.includes(e));
  }
  let lt = !1;
  function Ht() {
    if (!lt || gt.favSeeded || !qt.rooms.length || A) return;
    const t = (a) => Object.keys(y).find((n) => La(n) && a(n)), e = [t((a) => a.startsWith("climate.")), t((a) => a.startsWith("cover.") && /curtain/.test(a)), t((a) => a.startsWith("valve.")), qt.security.locks[0]];
    gt = { ...gt, favourites: [.../* @__PURE__ */ new Set([...gt.favourites ?? He.favorite_entities ?? [], ...e.filter(Boolean)])], favSeeded: !0 }, sa();
  }
  const Rt = () => gt.suggest ?? !He.hide_suggested_entities;
  function he() {
    const t = new Set(A ? [] : gt.favHidden || []), e = Et().filter((n) => !t.has(n)), a = Rt() ? Dt().filter((n) => !t.has(n) && Ki(n)) : [];
    return A && !xs() ? [...e, ...a] : [...e, ...a].slice(0, s0);
  }
  const At = (t) => {
    const e = Et().includes(t);
    return '<button class="tfStar" type="button" data-star="' + F(t) + '" aria-pressed="' + e + '" aria-label="Favourite: ' + F(xt(t)) + '">' + o0(e) + "</button>";
  };
  function ae(t, { area: e = !1, star: a = !1, plain: n = !1, say: i = null, alert: d = !1 } = {}) {
    var j, P, O, T, Q, R;
    const s = n && ((Q = (j = c()) == null ? void 0 : j.devices) == null ? void 0 : Q[(T = (O = (P = c()) == null ? void 0 : P.entities) == null ? void 0 : O[t]) == null ? void 0 : T.device_id]), f = s && (s.name_by_user || s.name) || xt(t), h = t.split(".")[0], k = !n && yr.includes(h) ? Ja(t) : null, S = k ? k.on : ["on", "open", "playing"].includes((R = y[t]) == null ? void 0 : R.state), v = n ? null : k ? k.button : ul.includes(h) ? { act: Gt(h, "toggle", t), label: "Turn " + xt(t) + (S ? " off" : " on") } : h === "scene" || h === "script" ? { act: Gt(h, "turn_on", t), label: "Run " + xt(t) } : null, M = (i ?? Te(t)) + (e && _t.get(t) ? " · " + _t.get(t) : ""), I = (k == null ? void 0 : k.icon) || pa(t);
    return '<div class="activityRow' + (v ? " tfPlug" : "") + (S ? " on" : "") + (a ? " tfPick" : "") + (d ? " alert" : "") + '" data-k="' + F((e ? "fav:" : "row:") + t) + '" data-tone="' + (h === "light" ? "light" : (k == null ? void 0 : k.tone) || "blue") + '"' + cn(t) + ">" + (v && !a ? '<button class="tfIcon" type="button" data-act="' + v.act + '" aria-label="' + F(v.label) + '"' + pe(t, I) + "></button>" : '<div class="tfIcon" aria-hidden="true"' + pe(t, I) + "></div>") + '<button class="tfName" type="button" data-more="' + F(t) + '" aria-label="' + F(f + ", " + M + ". More info") + '"><span class="activityRowName">' + F(f) + '</span><span class="activityRowMeta">' + F(M) + "</span></button>" + (a ? At(t) : "") + "</div>";
  }
  const oe = () => {
    var t;
    return y[(t = gt.sources) == null ? void 0 : t.weather] ? gt.sources.weather : y["weather.forecast_home"] ? "weather.forecast_home" : Object.keys(y).find((e) => e.startsWith("weather."));
  };
  function ia() {
    var a;
    const t = (n) => Object.keys(y).filter((i) => i.startsWith("binary_sensor.") && n.includes(jt(i).device_class));
    return ((a = wo.alert_entities) != null && a.length ? wo.alert_entities : [...t(["moisture", "smoke", "gas"]).map((n) => ({ entity: n, severity: "alert" })), ...t(xi).map((n) => ({ entity: n, severity: "warning" }))]).filter((n) => y[n.entity]).map((n) => ({ ...n, on: ["on", "open", "unlocked", "triggered", "problem"].includes(y[n.entity].state) }));
  }
  function Qa() {
    const t = Object.keys(vr), e = /* @__PURE__ */ new Set(), a = [];
    (He.shortcuts || []).forEach((d) => {
      if (d.type === "summary") {
        if (!t.includes(d.key) || e.has(d.key)) return;
        e.add(d.key);
      }
      a.push(d);
    }), t.forEach((d) => {
      e.has(d) || a.push({ type: "summary", key: d });
    });
    const n = zo().sumOrder || [], i = (d) => d.type === "summary" && n.includes(d.key) ? n.indexOf(d.key) : n.length;
    return n.length ? a.map((d, s) => [d, s]).sort((d, s) => i(d[0]) - i(s[0]) || d[1] - s[1]).map(([d]) => d) : a;
  }
  function Vr() {
    var O;
    const t = ((O = c()) == null ? void 0 : O.entities) || {}, e = (T) => jt(T).device_class, a = Object.keys(y).filter((T) => T.startsWith("sensor.") && e(T) === "battery" || T.startsWith("binary_sensor.") && ["battery", "problem"].includes(e(T))), n = qt.rooms.flatMap((T) => T.plants.map((Q) => Q.id));
    if (!a.length && !n.length) return null;
    const i = (T) => {
      var R;
      const Q = (R = t[T]) == null ? void 0 : R.device_id;
      return !!Q && Object.keys(y).some((Mt) => {
        var Kt;
        return Mt.startsWith("binary_sensor.") && ((Kt = t[Mt]) == null ? void 0 : Kt.device_id) === Q && e(Mt) === "battery_charging" && y[Mt].state === "on";
      });
    }, d = (T) => T.startsWith("vacuum.") ? jt(T).battery_level <= 20 && y[T].state !== "docked" : T.startsWith("binary_sensor.") ? e(T) === "battery" && y[T].state === "on" : parseFloat(y[T].state) <= 20 && !i(T), s = [...a, ...qt.vacuums].filter((T) => y[T] && d(T)), f = [...a.filter((T) => e(T) === "problem" && y[T].state === "on"), ...n.filter((T) => {
      var Q;
      return ((Q = y[T]) == null ? void 0 : Q.state) === "problem";
    })], h = a.filter((T) => y[T].state === "unavailable"), k = [.../* @__PURE__ */ new Set([...s, ...f, ...h])], S = (T) => {
      const Q = parseFloat(y[T].state);
      return e(T) === "battery" && Number.isFinite(Q) ? Q : 101;
    }, v = [...n, ...qt.vacuums, ...[...a].sort((T, Q) => S(T) - S(Q))].filter((T) => y[T] && !k.includes(T)), M = /* @__PURE__ */ new Map();
    v.forEach((T) => {
      var R;
      const Q = ((R = qt.areaOf) == null ? void 0 : R.call(qt, T)) || "";
      M.set(Q, [...M.get(Q) || [], T]);
    });
    const I = (T) => {
      const Q = qt.rooms.findIndex((R) => R.id === T);
      return T === "" ? 1 / 0 : Q < 0 ? qt.rooms.length : Q;
    }, j = [...M.keys()].sort((T, Q) => I(T) - I(Q)), P = (T) => {
      var Q, R, Mt, Kt;
      return ((Q = qt.rooms.find((Nt) => Nt.id === T)) == null ? void 0 : Q.name) || ((Kt = (Mt = (R = c()) == null ? void 0 : R.areas) == null ? void 0 : Mt[T]) == null ? void 0 : Kt.name) || T;
    };
    return {
      value: [s.length && kt(s.length, "low battery", "low batteries"), f.length && kt(f.length, "problem", "problems"), h.length && kt(h.length, "unavailable device", "unavailable devices")].filter(Boolean).join(", ") || "All good",
      plain: !0,
      groups: [{ name: "Needs attention", ids: k, alert: !0 }, ...j.map((T) => ({ name: T ? P(T) : j.length > 1 ? "Other devices" : "Devices", ids: M.get(T) }))].filter((T) => T.ids.length)
    };
  }
  const zo = () => A ? gt.home || {} : gt, yn = (t) => Wd.includes(t) ? (zo().shownSums || []).includes(t) : !(zo().hiddenSums || []).includes(t);
  function Ut(t, e, a) {
    const n = t.flatMap((M) => a(M, /^cover\./)), i = n.filter((M) => {
      var I;
      return ["open", "opening"].includes((I = y[M]) == null ? void 0 : I.state);
    }).length, d = Object.keys(y).filter((M) => M.startsWith("person.")), s = d.filter((M) => {
      var I;
      return ((I = y[M]) == null ? void 0 : I.state) === "home";
    }).length, f = qt.security.openings.filter((M) => y[M]), h = f.filter((M) => y[M].state === "on").length, k = Object.keys(y).filter((M) => M.startsWith("binary_sensor.") && jt(M).device_class === "moisture"), S = k.filter((M) => y[M].state === "on").length, v = qt.vacuums.filter((M) => y[M]);
    return {
      covers: n.length && { value: i ? i + " open" : "All closed", groups: e((M) => a(M, /^cover\./)) },
      people: d.length && { value: s ? s + " home" : "Nobody home", groups: [{ name: "People", ids: d }] },
      openings: f.length && { value: h ? h + " open" : "All closed", groups: [{ name: "Doors and windows", ids: f }] },
      leaks: k.length && { value: S ? kt(S, "leak", "leaks") : "All dry", groups: [{ name: "Leak sensors", ids: k }] },
      vacuum: v.length && { value: Jt(y[v[0]].state), groups: [{ name: "Vacuum", ids: v }] }
    };
  }
  function ma(t = !1) {
    var ge;
    const e = qt.rooms, a = qt.security, n = (Lt, Vt) => Lt.actions.filter((Ue) => Vt.test(Ue)), i = (Lt) => e.map((Vt) => ({ name: Vt.name, ids: Lt(Vt) })).filter((Vt) => Vt.ids.length), d = e.flatMap((Lt) => Lt.lights), s = d.filter((Lt) => {
      var Vt;
      return ((Vt = y[Lt]) == null ? void 0 : Vt.state) === "on";
    }).length, f = e.map((Lt) => Lt.readings.find((Vt) => jt(Vt).device_class === "temperature")).filter(Boolean).map((Lt) => Number(y[Lt].state)).filter(Number.isFinite), [h, k] = [Ve(Math.min(...f)), Ve(Math.max(...f))], S = e.flatMap((Lt) => n(Lt, /^media_player\./)), v = S.filter((Lt) => {
      var Vt;
      return ((Vt = y[Lt]) == null ? void 0 : Vt.state) === "playing";
    }).length, M = ia(), I = M.filter((Lt) => Lt.severity === "warning" && Lt.on).length, j = a.locks.filter((Lt) => {
      var Vt;
      return ["unlocked", "jammed", "open"].includes((Vt = y[Lt]) == null ? void 0 : Vt.state);
    }).length, P = a.alarms.filter((Lt) => {
      var Vt;
      return ((Vt = y[Lt]) == null ? void 0 : Vt.state) === "disarmed";
    }).length, O = I ? kt(I, "warning", "warnings") : null, T = j ? j + " unlocked" : P ? P + " disarmed" : O ? null : "All secure", Q = Vr(), R = e.flatMap((Lt) => Lt.solar), Mt = R.find((Lt) => Lt.endsWith("_power")), Kt = {
      light: d.length && { value: s ? s + " on" : "All off", groups: i((Lt) => Lt.lights) },
      climate: f.length && { value: h === k ? h + "°" : h + " - " + k + "°", groups: i((Lt) => [...Lt.readings.filter((Vt) => ["temperature", "humidity"].includes(jt(Vt).device_class)), ...n(Lt, /^(climate|humidifier)\./)]) },
      security: (a.alarms.length || a.locks.length) && { value: [O, T].filter(Boolean).join(", "), groups: [{ name: "Alarm and locks", ids: [...a.alarms, ...a.locks] }, { name: "Doors and windows", ids: a.openings }].filter((Lt) => Lt.ids.length) },
      media_players: S.length && { value: v ? v + " playing" : "No media playing", groups: i((Lt) => n(Lt, /^media_player\./)) },
      maintenance: Q,
      energy: qt.grid && { value: jn(Number(((ge = y[Mt]) == null ? void 0 : ge.state) || 0) * 1e3 + Number(y[qt.grid].state)) + " now", groups: [{ name: "Energy", ids: [...R, qt.grid] }] },
      ...Ut(e, i, n)
    }, Nt = [], Xt = M.filter((Lt) => Lt.severity !== "warning" && Lt.on);
    return Xt.length && Nt.push({ key: "alerts", name: "Alerts", icon: "mdi:alarm-plus", colour: "#f44336", value: kt(Xt.length, "active alert", "active alerts"), groups: [{ name: "Active", ids: Xt.map((Lt) => Lt.entity) }] }), Qa().forEach((Lt) => {
      Lt.type !== "summary" ? Nt.push({ key: "path:" + Lt.path, name: Lt.label || Lt.path, icon: Lt.icon || "mdi:link-variant", colour: "", value: "" }) : !Lt.hidden && Kt[Lt.key] && (t || yn(Lt.key)) && Nt.push({ key: Lt.key, ...vr[Lt.key], ...Kt[Lt.key] });
    }), Nt;
  }
  const _o = (t) => '<div class="activityRow tap tfSum" role="button" tabindex="0" data-summary="' + F(t.key) + '" data-k="sum:' + F(t.key) + '" aria-label="' + F(t.name + (t.value ? ", " + t.value : "")) + '"' + (t.key === "alerts" ? ' style="--sum:' + t.colour + ';--sum-ink:#ffffff"' : t.key === "climate" ? ' style="' + Hi() + '"' : t.colour && ln(t.colour) ? ' style="' + ln(t.colour).slice(1) + '"' : "") + ">" + (t.key === "climate" ? Ni : "") + '<div class="tfIcon" aria-hidden="true"' + pe(t.id || "", t.icon, t.name) + '></div><div><div class="activityRowName">' + F(t.name) + "</div>" + (t.value ? '<div class="activityRowMeta">' + F(t.value) + "</div>" : "") + "</div></div>";
  function Go(t) {
    const e = Et();
    gt = { ...gt, favourites: e.includes(t) ? e.filter((a) => a !== t) : [...e, t], favHidden: (gt.favHidden || []).filter((a) => a !== t) }, sa(), _e();
  }
  function xn(t) {
    document.querySelector("home-assistant") && (st.pushState(null, "", t), window.dispatchEvent(new CustomEvent("location-changed", { detail: { replace: !1 } })));
  }
  function Jn(t, e) {
    if (t.startsWith("path:")) {
      xn(t.slice(5));
      return;
    }
    ei("summary:" + t, e);
  }
  async function kn() {
    const t = (s) => Promise.resolve().then(() => H(s)).catch(() => null), [e, a, n, i] = await Promise.all([
      t({ type: "frontend/get_user_data", key: Vd }),
      t({ type: "frontend/get_system_data", key: "home" }),
      t({ type: "frontend/get_system_data", key: "security" }),
      t({ type: "usage_prediction/common_control" })
    ]), d = (e == null ? void 0 : e.value) || {};
    gt = { favourites: d.favourites ?? null, sources: d.sources, hiddenSums: d.hiddenSums, shownSums: d.shownSums, home: d.home, dash: d.dash, named: d.named, favHidden: d.favHidden, suggest: d.suggest, favSeeded: d.favSeeded }, He = (a == null ? void 0 : a.value) || {}, wo = (n == null ? void 0 : n.value) || {}, Ho = Array.isArray(i == null ? void 0 : i.entities) ? i.entities : [], vo = null, Object.keys(y).length && _e(), Np(), lt = !0, Ht();
  }
  const je = "HomeCore";
  async function Np() {
    var n, i, d;
    const t = location.pathname.split("/")[1], e = gt.named || [];
    if (!((i = (n = c()) == null ? void 0 : n.user) != null && i.is_admin) || !t || e.includes(t)) return;
    const a = () => {
      gt = { ...gt, named: [...e, t] }, sa();
    };
    try {
      const s = (d = await H({ type: "lovelace/dashboards/list" })) == null ? void 0 : d.find((k) => k.url_path === t);
      if (!s || s.mode === "yaml") return;
      if (s.title === je) {
        a();
        return;
      }
      const f = await H({ type: "lovelace/config", url_path: t }), h = ((f == null ? void 0 : f.views) || []).flatMap((k) => [...k.cards || [], ...(k.sections || []).flatMap((S) => S.cards || [])]);
      if (!h.length || !h.every((k) => (k == null ? void 0 : k.type) === "custom:homecore-card" && !k.page)) return;
      await H({ type: "lovelace/dashboards/update", dashboard_id: s.id, title: je }), a();
    } catch {
    }
  }
  let Qn = null, zi = 0, Gi = !1;
  const Ml = (t) => {
    const e = t.split(".")[0], a = jt(t).device_class;
    return i0.includes(e) && (e !== "binary_sensor" || xi.includes(a) || !!Xd[a]);
  }, Ui = (t) => t.startsWith("binary_sensor.") ? Xd[jt(t).device_class] : null;
  async function Op() {
    var t;
    if (!(Gi || Date.now() - zi < 30 * 1e3)) {
      Gi = !0, zi = Date.now();
      try {
        const e = Object.keys(((t = c()) == null ? void 0 : t.states) || {}).filter(Ml), a = e.length ? await H({ type: "logbook/get_events", start_time: new Date(Date.now() - 24 * 3600 * 1e3).toISOString(), end_time: (/* @__PURE__ */ new Date()).toISOString(), entity_ids: e }) : null;
        Qn = Array.isArray(a) ? a.filter((n) => n.entity_id && n.state != null && n.when) : null;
      } catch {
        Qn = null;
      }
      Gi = !1, _e();
    }
  }
  function Ip() {
    const t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Map(), a = (i) => {
      if (!y[i.entity_id] || !Ml(i.entity_id) || !Ki(i.entity_id) || ["unavailable", "unknown"].includes(i.state)) return;
      if (Ui(i.entity_id)) {
        const s = e.get(i.entity_id);
        i.state === "on" ? (!s || i.when > s.when + 1) && e.set(i.entity_id, { ...i, alarm: !0, cleared: null }) : s && !s.cleared && i.when > s.when && (s.cleared = i.when);
        return;
      }
      const d = t.get(i.entity_id);
      (!d || i.when > d.when + 1) && t.set(i.entity_id, i);
    };
    [...Qn || []].sort((i, d) => i.when - d.when).forEach(a);
    const n = Qn ? zi / 1e3 - 5 : 0;
    return Object.keys(y).forEach((i) => {
      var f;
      const d = y[i], s = d.last_changed ? Date.parse(d.last_changed) / 1e3 : 0;
      s > n && a({ entity_id: i, state: d.state, when: s, context_user_id: (f = d.context) == null ? void 0 : f.user_id });
    }), [...t.values(), ...e.values()].sort((i, d) => d.when - i.when).slice(0, l0);
  }
  function Fp(t) {
    var n;
    const e = t.context_user_id && Object.keys(y).find((i) => i.startsWith("person.") && jt(i).user_id === t.context_user_id);
    if (e) return xt(e);
    const a = (n = c()) == null ? void 0 : n.user;
    return a && t.context_user_id === a.id ? a.name : ["automation", "script"].includes(t.context_domain) || t.context_event_type === "automation_triggered" ? t.context_name || "Home Assistant" : "";
  }
  function qp(t) {
    const e = t.entity_id.split(".")[0], a = String(t.state);
    return e === "lock" ? { locked: "locked", unlocked: "unlocked", open: "opened", jammed: "jammed", locking: "locking", unlocking: "unlocking" }[a] || Jt(a).toLowerCase() : e === "cover" || e === "valve" ? { open: "opened", closed: "closed", opening: "opening", closing: "closing" }[a] || Jt(a).toLowerCase() : e === "binary_sensor" ? a === "on" ? "opened" : "closed" : e === "climate" ? a === "off" ? "turned off" : "set to " + Jt(a).toLowerCase() : e === "media_player" ? { playing: "started playing", paused: "paused", idle: "stopped", off: "turned off", standby: "turned off", on: "turned on" }[a] || Jt(a).toLowerCase() : e === "alarm_control_panel" ? (Kd[a] || Jt(a)).toLowerCase() : e === "vacuum" ? { cleaning: "started cleaning", docked: "docked", returning: "went home", paused: "paused", idle: "stopped" }[a] || Jt(a).toLowerCase() : a === "on" ? "turned on" : a === "off" ? "turned off" : Jt(a).toLowerCase();
  }
  function Wp(t) {
    const e = t.entity_id, a = t.alarm && Ui(e), n = xt(e) + " " + (a ? a[0] : qp(t)), i = a ? da(t.when * 1e3) + (t.cleared ? " · " + a[1] + " since " + da(t.cleared * 1e3) : "") : [Fp(t), da(t.when * 1e3)].filter(Boolean).join(" · ");
    return '<div class="activityRow' + (a ? " alert" : "") + '"><div class="tfIcon' + (a ? " alert" : "") + '" aria-hidden="true"' + pe(e, pa(e)) + '></div><button class="tfName" type="button" data-more="' + F(e) + '" data-at="' + Math.round(t.when * 1e3) + '" aria-label="' + F(n + ", " + i + ". More info") + '"><span class="activityRowName">' + F(n) + '</span><span class="activityRowMeta">' + F(i) + "</span></button></div>";
  }
  let Sa = null, Sl = 0;
  const Vp = [["electricity", "Electricity", 4.3, "kWh"], ["solar", "Solar", 2.3, "kWh"], ["gas", "Gas", 0.21, "m³"], ["water", "Water", 0.2, "m³"]];
  async function Al() {
    var e;
    if (Date.now() - Sl < 5 * 60 * 1e3) return;
    Sl = Date.now();
    const t = [];
    try {
      const a = ((e = await H({ type: "energy/get_prefs" })) == null ? void 0 : e.energy_sources) || [], n = (i) => a.filter((d) => d.type === i).flatMap((d) => i === "grid" ? (d.flow_from || []).map((s) => s.stat_energy_from) : [d.stat_energy_from]).filter(Boolean);
      for (const [i, d, s] of [["electricity", "Electricity", n("grid")], ["solar", "Solar", n("solar")], ["gas", "Gas", n("gas")], ["water", "Water", n("water")]]) {
        if (!s.length) continue;
        const f = await Promise.all(s.map((h) => Promise.resolve(H({ type: "recorder/statistic_during_period", statistic_id: h, calendar: { period: "day" }, types: ["change"] })).then((k) => Number(k == null ? void 0 : k.change) || 0, () => 0)));
        t.push({ key: i, name: d, id: s[0], ids: s, value: f.reduce((h, k) => h + k, 0), unit: jt(s[0]).unit_of_measurement || (i === "gas" || i === "water" ? "m³" : "kWh") });
      }
    } catch {
    }
    Sa = t, _e();
  }
  let Mn = null, Cl = [];
  function Yi() {
    var d;
    const t = Cl = Sa != null && Sa.length ? Sa : Vp.map(([s, f, h, k]) => {
      if (s === "solar") {
        const v = Object.keys(y).find((M) => M.endsWith("_solar_today") && !M.includes("made_up_energy"));
        v && Number.isFinite(Number(y[v].state)) && (h = Number(y[v].state));
      }
      const S = "sensor.made_up_energy_" + s;
      return y[S] = { entity_id: S, state: String(h), last_changed: (/* @__PURE__ */ new Date()).toISOString(), attributes: { friendly_name: f + " today", unit_of_measurement: k, state_class: "total_increasing" } }, { key: s, name: f, id: S, value: h, unit: k };
    });
    ot.clear(), t.some((s) => s.id === Mn) || (Mn = t[0].id);
    const e = t.map((s) => {
      const f = Number(s.value).toLocaleString(void 0, { maximumFractionDigits: s.value < 10 ? 2 : 1 }) + " " + s.unit, h = c0[s.key], k = s.id === Mn;
      return ot.set(s.id, { name: s.name, text: f, icon: h }), '<div class="activityRow tap' + (k ? " picked" : "") + '" role="button" tabindex="0" data-energy-pick="' + F(s.id) + '" aria-pressed="' + k + '" aria-label="' + F(s.name + ", " + f) + '. Show its day in the graph"><div class="tfIcon" aria-hidden="true"' + pe("", h, s.name) + '></div><div><div class="activityRowName">' + F(s.name) + '</div><div class="activityRowMeta">' + F(f) + "</div></div></div>";
    }), a = t.find((s) => s.id === Mn), n = (((d = ne().opts.energy) == null ? void 0 : d.graph) || "above") === "below", i = '<div class="tfCardGraph tfDashGraph"><svg class="tfGraph" data-graph="' + F(a.id) + '" role="img" aria-label="' + F(a.name) + ', last 24 hours"></svg></div>';
    return Ao("dash:energy", 0, "Energy today", e, i, ma().some((s) => s.key === "energy") ? "summary:energy" : null, "tfDashCard tfDash-energy" + (n ? "" : " graphAbove"));
  }
  function _l(t) {
    const e = L.querySelector(".tfDash-energy"), a = e == null ? void 0 : e.querySelector(".tfDashGraph svg");
    !a || t === Mn || (Mn = t, e.querySelectorAll("[data-energy-pick]").forEach((n) => {
      const i = n.dataset.energyPick === t;
      n.classList.toggle("picked", i), n.setAttribute("aria-pressed", String(i));
    }), a.dataset.graph = t, a.dataset.drawn = "", la.set("dash:energy", Yi()), hc(!0));
  }
  const Tl = {
    electricity: [15, 12, 10, 10, 10, 12, 25, 45, 40, 30, 25, 30, 35, 30, 25, 25, 35, 60, 80, 70, 55, 45, 30, 20],
    gas: [2, 2, 2, 2, 3, 8, 18, 20, 12, 6, 4, 4, 4, 4, 4, 5, 8, 14, 16, 14, 10, 6, 3, 2],
    water: [0, 0, 0, 0, 0, 2, 12, 18, 8, 4, 3, 4, 6, 3, 2, 3, 4, 6, 10, 8, 5, 5, 3, 1]
  }, Dl = /* @__PURE__ */ new Map();
  async function jp(t) {
    const e = /* @__PURE__ */ new Date(), a = new Date(e).setHours(0, 0, 0, 0), n = e.getHours(), i = e.getMinutes() / 60, d = Array.from({ length: 24 }, (f, h) => h <= n ? 0 : null);
    if (!t.ids) {
      const f = Tl[t.key] || Tl.electricity, h = f.map((S, v) => v < n ? S : v === n ? S * i : 0), k = h.reduce((S, v) => S + v, 0) || 1;
      return d.map((S, v) => S == null ? null : t.value * h[v] / k);
    }
    const s = Dl.get(t.id);
    if (s && s.day === a && Date.now() - s.at < 5 * 60 * 1e3) return s.hours;
    try {
      const f = await H({ type: "recorder/statistics_during_period", start_time: new Date(a).toISOString(), end_time: e.toISOString(), statistic_ids: t.ids, period: "hour", types: ["change"] });
      t.ids.forEach((S) => ((f == null ? void 0 : f[S]) || []).forEach((v) => {
        const M = typeof v.start == "number" ? v.start : Date.parse(v.start), I = new Date(M).getHours();
        M >= a && I < n && (d[I] += Number(v.change) || 0);
      }));
      const h = new Date(e).setMinutes(0, 0, 0), k = await Promise.all(t.ids.map((S) => Promise.resolve(H({ type: "recorder/statistic_during_period", statistic_id: S, fixed_period: { start_time: new Date(h).toISOString(), end_time: e.toISOString() }, types: ["change"] })).then((v) => Number(v == null ? void 0 : v.change) || 0, () => 0)));
      d[n] = k.reduce((S, v) => S + v, 0);
    } catch {
    }
    return Dl.set(t.id, { at: Date.now(), day: a, hours: d }), d;
  }
  async function zp(t, e) {
    const a = await jp(e);
    if (!t.isConnected) return;
    const n = Math.max(120, t.clientWidth || 260), i = Math.max(60, t.clientHeight || 130), d = 18, s = i - 18, f = n / 24, h = f * 0.72, k = (/* @__PURE__ */ new Date()).getHours(), S = a.map((O) => O ?? 0), v = Math.max(0, ...S), M = (O) => s - (v > 0 ? O / v * (s - d) : 0), I = (O) => O.toLocaleString(void 0, { maximumFractionDigits: O < 10 ? 2 : 1 }) + " " + e.unit, j = (O) => String(O).padStart(2, "0") + ":00", P = v > 0 ? S.indexOf(v) : -1;
    t.setAttribute("viewBox", "0 0 " + n + " " + i), t.setAttribute("aria-label", e.name + " today by the hour: " + I(e.value) + (P >= 0 ? ", most " + I(v) + " at " + j(P) : "")), t.innerHTML = [d, (d + s) / 2, s].map((O) => '<line x1="0" x2="' + n + '" y1="' + O + '" y2="' + O + '" stroke="var(--line)" stroke-width="1"/>').join("") + a.map((O, T) => O > 0 ? '<rect x="' + (T * f + (f - h) / 2).toFixed(1) + '" y="' + M(O).toFixed(1) + '" width="' + h.toFixed(1) + '" height="' + (s - M(O)).toFixed(1) + '" rx="2" fill="' + (T === k ? "var(--primary)" : "var(--text)") + '"' + (T === k ? "" : ' fill-opacity=".5"') + "/>" : "").join("") + [0, 6, 12, 18].map((O) => '<text x="' + (O * f).toFixed(1) + '" y="' + (i - 3) + '">' + String(O).padStart(2, "0") + "</text>").join("") + (P >= 0 ? '<text x="0" y="11">Most: ' + F(I(v)) + " at " + j(P) + "</text>" : "");
  }
  function Gp(t) {
    var e;
    (e = window.matchMedia) != null && e.call(window, "(prefers-reduced-motion: reduce)").matches || t.querySelectorAll("rect").forEach((a, n) => a.animate([{ transform: "scaleY(0)" }, { transform: "scaleY(1)" }], { duration: 500, delay: n * 18, easing: "cubic-bezier(.2,.7,.3,1)", fill: "backwards" }));
  }
  function Ll(t) {
    var n;
    if ((n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    const [e, a] = t.querySelectorAll("path");
    gp(t, a, [e].filter(Boolean));
  }
  let jr = null, Zi = 0;
  const Ki = (t) => !t.startsWith("light.") || d0.includes((_t.get(t) || "").toLowerCase()), Xi = () => Math.max(2, Yo((L == null ? void 0 : L.clientWidth) || 0).n), El = (t) => {
    const e = Ja(t);
    return e.sections.map((a, n) => a && (e.parts || [])[n]).filter(Boolean);
  }, Up = (t) => El(t).slice(0, er(t) - 1);
  function Bl(t) {
    const e = ne().tiles;
    if (e) return e.filter((n) => y[n] || ft(n));
    if (!jr) {
      const n = (i) => {
        var d;
        return (((d = y[i]) == null ? void 0 : d.state) === "on" ? 1e6 : 0) + (na[i] || 0);
      };
      jr = {
        lights: qt.rooms.flatMap((i) => i.lights).filter((i) => {
          var d;
          return Ki(i) && ((d = y[i]) == null ? void 0 : d.state) !== "unavailable";
        }).sort((i, d) => n(d) - n(i) || xt(i).localeCompare(xt(d))),
        climates: qt.rooms.flatMap((i) => i.actions.filter((d) => d.startsWith("climate.")))
      };
    }
    const a = jr.climates.filter((n) => y[n]).slice(0, t > 3 ? 2 : 1);
    return [...jr.lights.filter((n) => y[n]).slice(0, Math.max(0, t - a.length)), ...a];
  }
  const $i = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.welcome) ?? !0;
  }, Yp = () => {
    var e, a;
    const t = (e = c()) == null ? void 0 : e.user;
    return (t == null ? void 0 : t.name) || ((a = Object.values(y).find((n) => {
      var i;
      return n.entity_id.startsWith("person.") && (t == null ? void 0 : t.id) && ((i = n.attributes) == null ? void 0 : i.user_id) === t.id;
    })) == null ? void 0 : a.attributes.friendly_name) || "";
  }, Zp = () => {
    const t = (/* @__PURE__ */ new Date()).getHours(), e = Yp();
    return (t >= 5 && t < 12 ? "Good morning" : t >= 12 && t < 18 ? "Good afternoon" : "Good evening") + (e ? ", " + e : "");
  }, Rl = (t, e, a, n) => (i) => '<section class="card tfCard tfDashCard ' + t + '" data-tf data-k="' + e + '" aria-label="' + a + '">' + (n ? '<div class="activityHeader">' + (e === "favs" ? '<button class="activityTitle tfTitleBtn" type="button" data-more="favourites" aria-label="Favourites. More info">' + a + "</button>" : '<div class="activityTitle">' + a + "</div>") + "</div>" : "") + '<div class="activityRows">' + i + "</div></section>";
  function Kp(t, e) {
    var d, s;
    t.dash = !0, t.push({ key: "dash:title", html: '<h1 class="settingsTitle tfDashTitle" data-tf data-k="dash:title">' + ((A ? $i() : ne().welcome) ? '<span class="tfGreeting">' + F(Zp()) + "</span>" : "") + F(((s = (d = c()) == null ? void 0 : d.config) == null ? void 0 : s.location_name) || "Home") + "</h1>" }), e.length && t.push({ key: "sums", wrap: (f) => '<div class="tfDashBarRow" data-tf data-k="sums">' + Rl("tfDash-bar", "sums-bar", "Summaries", !1)(f).replace(" data-tf", "") + "</div>", tiles: e.map((f) => ({ key: "sum:" + f.key, html: _o(f) })) }), !A && V().length && t.push({ key: "areas", html: J(0) });
    const a = he();
    if (a.length && t.push({ key: "favs", wrap: Rl("tfDash-favs", "favs", "Favourites", !0), tiles: a.map((f) => ({ key: "fav:" + f, html: ae(f, { area: !0 }) })) }), A)
      return Al(), Gl() && t.push({ key: "dash:energy", html: Yi() }), Zi = Xi(), Bl(0).forEach((f) => t.push({
        key: "dash:tile:" + f,
        wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + F(f) + '">' + h + "</div>",
        tiles: [{ key: f, html: Bt(ft(f), f) }]
      })), t;
    const n = Ip();
    t.push({ key: "dash:act", html: Ao("dash:act", 0, "Activity", n.length ? n.map(Wp) : ['<p class="tfDashNone">Nothing has changed in the last day.</p>'], "", null, "tfDashCard tfDash-act") }), t.push({ key: "dash:energy", html: Yi() });
    const i = Xi();
    return Zi = i, Bl(i >= 3 ? i : i * 2).forEach((f) => t.push({
      key: "dash:tile:" + f,
      wrap: (h) => '<div class="tfDashTiles" data-tf data-k="dash:tile:' + F(f) + '">' + h + "</div>",
      tiles: [{ key: f, html: tt(f) ? Bt(ft(f), f) : hn(f, !1, Up(f)) }]
    })), Op(), Al(), t;
  }
  const tr = 252, se = 16, Xp = 200, $p = Math.round(tr * 1.25), Jp = 60, Aa = Jp + se, Qp = 3, Pl = {
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
  }, tf = ["wx", "favs", "act", "energy", "avg"], Hl = ["XS", "S", "M", "L", "XL"], Nl = Hl.length, ef = ["Narrow", "Wide", "Really wide"], af = { wx: 5, areas: 5, favs: 5, act: 5, energy: 4, avg: 4, aq: 4, pollen: 4, radar: 4, hourly: 4, sun: 4, moon: 4, uv: 4, humidity: 4, pressure: 4, wind: 4, visibility: 4 }, Ol = (t) => !t.includes(".") || !y[t] || t.startsWith("light.") && $a(t) ? Nl : Math.min(Nl, El(t).length + 1), er = (t) => {
    const e = ne().opts[t] || {}, a = Ol(t), n = Number(e.h) || (e.tall ? 5 : af[t] || Il);
    return Math.max(1, Math.min(a, n));
  }, Il = 2, of = 90, nf = 56, ga = (t) => {
    var e;
    return Pl[t] || (t.startsWith("room:") ? ((e = G.find((a) => "room:" + a.id === t)) == null ? void 0 : e.name) || "Area" : xt(t));
  }, rf = 409, sf = 128;
  let Je = !1, Yt = null, ze = null, Ji = !1, Uo = /* @__PURE__ */ new Map(), zr = 0, To = 0;
  const to = ["title", "sums"], Yo = (t) => {
    const e = Math.max(1, Math.floor((t + se) / (Xp + se)));
    return { n: e, w: Math.max(1, Math.min($p, Math.floor((t - (e - 1) * se) / e))) };
  }, lf = () => G.map((t) => "room:" + t.id);
  function cf() {
    const t = lf();
    return {
      cells: {},
      spans: { favs: 2 },
      hidden: Object.keys(Pl).filter((e) => {
        var a, n;
        return !["title", ...((a = gt.home) == null ? void 0 : a.sums) === !1 ? [] : ["sums"], ...((n = gt.home) == null ? void 0 : n.favs) === !1 ? [] : ["favs"], ...uf() ? ["wx"] : [], ...Gl() ? ["energy"] : []].includes(e);
      }),
      opts: { favs: { h: 5 }, ...Object.fromEntries(t.map((e) => [e, { h: 5 }])) },
      tiles: t,
      known: yo,
      areasOff: []
    };
  }
  const ne = () => A ? cf() : Qi(), Qi = () => {
    let t = { cells: {}, spans: {}, hidden: [], opts: {}, ...gt.dash || {} };
    t.sumsOff && (t = { ...t, hidden: [...t.hidden, "sums"] });
    const e = yo.filter((a) => !(t.known || []).includes(a) && !t.hidden.includes(a));
    return e.length ? { ...t, hidden: [...t.hidden, ...e] } : t;
  };
  function Zo(t) {
    A || (gt = { ...gt, dash: { ...t, known: yo } }, sa());
  }
  function Ko() {
    const t = (e) => L.querySelector(e);
    return [
      ["title", t(".tfDashTitle"), "full"],
      ["sums", t(".tfDashBarRow"), "full"],
      ["wx", Ba.wx, 2],
      ["areas", t(".tfAreas"), "areas"],
      ["favs", t(".tfDash-favs"), 2],
      ["act", t(".tfDash-act"), 2],
      ["energy", t(".tfDash-energy"), 2],
      ["avg", Ba.avg, 2],
      ...yo.map((e) => [e, Ba[e], Ei[e] || 1]),
      ...[...L.querySelectorAll(".tfDashTiles > [data-k]")].map((e) => [e.dataset.k, e, 1, !0])
    ].filter(([, e]) => e == null ? void 0 : e.isConnected).map(([e, a, n, i = !1]) => ({ key: e, el: a, span: n, tile: i }));
  }
  const Fl = (t, e, a) => {
    var n;
    if (t.span === "full") return e;
    if (t.span === "areas") {
      const i = Math.ceil((rf + Math.max(0, V().length - 1) * (sf + se) + se) / (a + se));
      return Math.max(Math.min(e, 2), Math.min(i, e - (((n = ne().cells.areas) == null ? void 0 : n.col) || 0)));
    }
    return Math.min(e, ne().spans[t.key] ?? t.span);
  }, ql = (t) => er(t.key);
  function Wl(t, e, a = null) {
    const n = ne().cells, i = t.every((f) => !n[f.key] || n[f.key].col + f.cols <= e), d = (f) => n[f.key] || { row: 1e9, col: 0 };
    return (() => {
      const f = /* @__PURE__ */ new Set(), h = /* @__PURE__ */ new Map(), k = (P, O, T, Q) => {
        for (let R = O; R < O + Q; R++) for (let Mt = P; Mt < P + T; Mt++) if (f.has(Mt + "," + R)) return !1;
        return !0;
      }, S = (P, O, T) => {
        for (let Q = T; Q < T + P.rows; Q++) for (let R = O; R < O + P.cols; R++) f.add(R + "," + Q);
        h.set(P.key, { col: O, row: T, cols: P.cols, rows: P.rows });
      }, v = (P, O, T) => {
        for (O = Math.max(0, Math.min(e - P.cols, O)), T = Math.max(0, T); !k(O, T, P.cols, P.rows); ) T++;
        S(P, O, T);
      }, M = (P) => {
        for (let O = 0; ; O++) for (let T = 0; T <= e - P.cols; T++) if (k(T, O, P.cols, P.rows)) {
          S(P, T, O);
          return;
        }
      };
      a && v(a, Yt.col, Yt.row);
      const I = t.filter((P) => P !== a), j = (P, O) => d(P).row - d(O).row || d(P).col - d(O).col;
      return i ? (I.filter((P) => n[P.key]).sort(j).forEach((P) => v(P, n[P.key].col, n[P.key].row)), I.filter((P) => !n[P.key]).forEach(M), h) : ([...I].sort(j).forEach(M), h);
    })();
  }
  function df(t, e) {
    const a = /* @__PURE__ */ new Set(), n = /* @__PURE__ */ new Map(), i = (d, s, f) => {
      for (let h = s; h < s + f.rows; h++) for (let k = d; k < d + f.cols; k++) if (a.has(k + "," + h)) return !1;
      return !0;
    };
    return t.forEach((d) => {
      for (let s = 0; ; s++) {
        let f = 0;
        for (; f <= e - d.cols && !i(f, s, d); ) f++;
        if (!(f > e - d.cols)) {
          for (let h = s; h < s + d.rows; h++) for (let k = f; k < f + d.cols; k++) a.add(k + "," + h);
          n.set(d.key, { col: f, row: s, cols: d.cols, rows: d.rows });
          return;
        }
      }
    }), n;
  }
  function ts() {
    const t = ne(), e = new Set(t.hidden), a = Ko().filter((s) => !to.includes(s.key));
    let n = Uo;
    if (!n.size) {
      const s = t.pegs || 4, f = a.filter((h) => !e.has(h.key));
      f.forEach((h) => {
        h.cols = Fl(h, s, tr), h.rows = ql(h) ?? Il;
      }), n = Wl(f, s);
    }
    const i = (s) => !e.has(s.key) && n.get(s.key) || { row: 1e9, col: 0 };
    a.sort((s, f) => i(s).row - i(f).row || i(s).col - i(f).col);
    const d = (t.phone || []).map((s) => a.find((f) => f.key === s && !e.has(s))).filter(Boolean);
    return [...d, ...a.filter((s) => !d.includes(s))];
  }
  const pf = () => {
    const t = ts();
    t.forEach((e, a) => e.el.style.setProperty("--o", String(3 + a))), es([...Ko().filter((e) => to.includes(e.key)), ...t].map((e) => e.el));
  };
  function es(t) {
    if (Yt) return;
    const e = o.activeElement;
    let a = null;
    for (const n of new Set(t.map((i) => {
      for (; i && i.parentElement !== L; ) i = i.parentElement;
      return i;
    }).filter(Boolean))) {
      const i = a ? a.nextSibling : L.querySelector(":scope > [data-tf]");
      if (n !== i)
        try {
          L.moveBefore ? L.moveBefore(n, i) : L.insertBefore(n, i);
        } catch {
          L.insertBefore(n, i);
        }
      a = n;
    }
    e && e !== o.activeElement && e.isConnected && e.focus({ preventScroll: !0 });
  }
  const Sn = (t, e) => Zo({ ...t, cells: e, pegs: Yo(L.clientWidth).n });
  function Re() {
    var Q;
    if (!b || !L) return;
    const t = L.clientWidth, e = t < 2 * tr + se, a = g.classList.contains("tfDash");
    A && (Je = !1), g.classList.toggle("tfOverview", A);
    const { n, w: i } = e ? { n: 2, w: Math.floor((t - se) / 2) } : Yo(t);
    ca.classList.add("tfPegs"), ca.style.setProperty("--peg-n", n), ca.style.setProperty("--peg-w", i + "px");
    const d = new Set(ne().hidden);
    yo.forEach((R) => {
      var Mt;
      return (Mt = Ba[R]) == null ? void 0 : Mt.classList.toggle("tfNotAdded", d.has(R) && !(Yt != null && Yt.fromTray && Yt.key === R));
    }), In(), g.classList.toggle("tfBoard", a), g.classList.toggle("tfEditing", a && Je && !e);
    const s = p("dashEditNav");
    !a && ro && ks(!1), s && A ? (s.hidden = !a, ro || (s.classList.remove("active"), s.setAttribute("aria-pressed", "false"), s.setAttribute("aria-label", "Edit Home page"), s.title = "Edit", s.innerHTML = yi)) : s && (s.hidden = !a || e, s.classList.toggle("active", Je), s.setAttribute("aria-pressed", String(Je)), s.setAttribute("aria-label", Je ? "Done editing" : "Edit custom dashboard"), s.title = Je ? "Done" : "Edit", s.innerHTML = Je ? Zd : yi);
    const f = a ? Ko() : [];
    if ((!a || !A) && L.querySelectorAll(":scope > :is(.hcFloor,.hcFloorBox)").forEach((R) => R.remove()), !a) {
      L.style.height = "", L.querySelectorAll(".tfBoardItem").forEach((R) => {
        R.classList.remove("tfBoardItem", "tfBoardHidden"), R.style.left = R.style.top = R.style.width = R.style.height = "";
      }), (Q = L.querySelector(".tfDash-act > .activityRows")) == null || Q.style.removeProperty("max-height"), rs(!1), g.classList.contains("tfDash") && pf(), xe();
      return;
    }
    if (A) {
      gf(f, t, e);
      return;
    }
    L.style.setProperty("--peg-w", i + "px");
    const h = new Set(ne().hidden), k = i + se;
    Yt != null && Yt.fromTray && h.delete(Yt.key), f.forEach((R) => R.el.classList.toggle("tfBoardHidden", h.has(R.key)));
    const S = f.filter((R) => !h.has(R.key) && getComputedStyle(R.el).display !== "none");
    let v = 0;
    S.filter((R) => to.includes(R.key)).forEach((R) => {
      R.el.classList.add("tfBoardItem"), Object.assign(R.el.style, { width: t + "px", height: "", left: "0px", top: v + "px" });
      const Mt = R.key === "sums" && R.el.querySelector(".tfDash-bar"), Kt = Mt ? Mt.querySelectorAll(".activityRow").length : 0;
      Mt && (Mt.style.maxWidth = "none");
      for (let Nt = 1; Mt && Nt <= Kt && (Mt.style.setProperty("--bar-cols", String(Math.ceil(Kt / Nt))), !(Mt.offsetWidth <= t)); Nt++)
        ;
      Mt && (Mt.style.maxWidth = ""), v += R.el.offsetHeight + se;
    }), To = v;
    const M = S.filter((R) => !to.includes(R.key));
    M.forEach((R) => {
      R.cols = Fl(R, n, i), R.el.classList.add("tfBoardItem"), R.el.style.width = (R.cols === n ? t : R.cols * i + (R.cols - 1) * se) + "px", R.el.style.height = "", R.rows = ql(R) ?? Math.max(1, Math.ceil((R.el.offsetHeight + se - 6) / Aa));
    });
    const I = Yt && M.find((R) => R.key === Yt.key), j = e && ts().map((R) => R.key), P = (R) => j.includes(R.key) ? j.indexOf(R.key) : -1, O = e ? df([...M].sort((R, Mt) => P(R) - P(Mt)), n) : Wl(M, n, I);
    O.forEach((R) => Object.assign(R, { x: R.cols === n ? 0 : R.col * k, y: To + R.row * Aa, w: R.cols === n ? t : R.cols * i + (R.cols - 1) * se, h: R.rows * Aa - se })), M.forEach((R) => {
      const Mt = O.get(R.key);
      R.el.style.height = Mt.h + "px", R.el.dataset.rows = e && R.key === "wx" ? 5 : er(R.key), R.el.toggleAttribute("data-narrow", !e && Mt.cols === 1 && n > 1), R.el.dataset.cols = Mt.cols, R.el.classList.contains("tfDac") && R.el.style.setProperty("--tf-dac-pad", Mt.h - of + "px"), !(R === I && !Yt.fromTray) && (R.el.style.left = Mt.x + "px", R.el.style.top = Mt.y + "px");
    }), e || (Uo = O), es([...S.filter((R) => to.includes(R.key)), ...M.slice().sort((R, Mt) => O.get(R.key).row - O.get(Mt.key).row || O.get(R.key).col - O.get(Mt.key).col)].map((R) => R.el)), [["favs", ".tfDash-favs"], ["act", ".tfDash-act"]].forEach(([R, Mt]) => {
      const Kt = O.get(R), Nt = Kt && L.querySelector(Mt), Xt = Nt == null ? void 0 : Nt.querySelector(":scope > .activityRows"), ge = Nt == null ? void 0 : Nt.querySelector(":scope > .activityHeader");
      if (!Xt || !ge) return;
      const Lt = Xt.getBoundingClientRect().top - Nt.getBoundingClientRect().top, Vt = Kt.rows === 1 ? Kt.h : Math.floor(Kt.h - Lt - parseFloat(getComputedStyle(Nt).paddingBottom)), Ue = Math.max(1, Math.floor(Vt / nf));
      Xt.style.setProperty("--fill-row", (Vt / Ue).toFixed(2) + "px"), Xt.style.maxHeight = Vt + "px";
    }), zr = Math.max(0, ...[...O.values()].map((R) => R.row + R.rows));
    let T = To + zr * Aa - se;
    T = rs(Je && !e, M, O, T, n, i), L.style.height = T + "px", requestAnimationFrame(() => g.classList.add("tfBoardReady")), f.forEach((R) => ns.observe(R.el)), hc(), xe();
  }
  const Qe = { gap: 20, phoneGap: 16, inner: 16, col: 252, row: 337, nameGap: 16, sumsGap: 16, full: 1336, floorTop: 12, floorHead: 24, floorGap: 16 }, Vl = { s: { w: 160, h: 192 }, m: { w: 200, h: 240 }, l: { w: 252, h: 337 } }, jl = () => {
    var t;
    return Vl[(t = gt.home) == null ? void 0 : t.areaSize] ? gt.home.areaSize : "s";
  }, as = () => {
    var t;
    return ["rows", "columns", "bento"].includes((t = gt.home) == null ? void 0 : t.areaLayout) ? gt.home.areaLayout : "bento";
  }, zl = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.cardsAs) === "rows" ? "rows" : "stacked";
  }, ff = { byFloor: !0, bentoBoxes: !0, bentoMixed: !1 }, uf = () => {
    var t;
    return !!((t = gt.home) != null && t.weather && oe());
  }, Gl = () => {
    var t;
    return !!((t = gt.home) != null && t.energy && (Sa != null && Sa.length));
  }, Xo = (t) => {
    var e;
    return ((e = gt.home) == null ? void 0 : e[t]) ?? ff[t];
  };
  function hf() {
    var i;
    const t = Object.values(((i = c()) == null ? void 0 : i.floors) || {}), e = new Set(t.map((d) => d.floor_id)), a = t.map((d) => ({ id: d.floor_id, name: d.name, rooms: G.filter((s) => s.floor === d.floor_id) })), n = G.filter((d) => !e.has(d.floor));
    return n.length && a.push({ id: "", name: t.length ? "Other areas" : "", rooms: n }), a;
  }
  const Ul = (t) => t.classList.toggle("hcMore", t.scrollHeight - t.scrollTop - t.clientHeight > 1);
  let me = null, Yl = [], ar = /* @__PURE__ */ new Map();
  function os(t) {
    let e = L.querySelector(".hcHomeLand");
    if (!t) {
      e == null || e.remove();
      return;
    }
    e || (e = Object.assign(document.createElement("div"), { className: "tfBoardLand hcHomeLand" }), L.appendChild(e)), Object.assign(e.style, { left: t.x + "px", top: t.y + "px", width: t.w + "px", height: t.h + "px" });
  }
  function mf(t) {
    if (!A || !ro || t.button !== 0 || L.clientWidth < 2 * tr + se) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Ko().find((f) => f.el === e);
    if (!a || to.includes(a.key) || tt(a.key)) return;
    t.preventDefault();
    const n = L.getBoundingClientRect(), i = ar.get(a.key);
    me = { key: a.key, el: e, on: !1, x0: t.clientX, y0: t.clientY, left: i.x, top: i.y, order: [...Yl] };
    const d = (f) => {
      const h = f.clientX - me.x0, k = f.clientY - me.y0;
      if (!me.on && Math.hypot(h, k) < 5) return;
      me.on || (me.on = !0, e.classList.add("tfDragging"), We() || e.animate([{ scale: "1" }, { scale: "1.05" }, { scale: "1.02" }], { duration: 260, easing: "cubic-bezier(.2,1.35,.4,1)" })), Object.assign(e.style, { left: me.left + h + "px", top: me.top + k + "px" });
      const S = f.clientX - n.left, v = f.clientY - n.top + L.scrollTop;
      let M = null, I = 1 / 0;
      if (ar.forEach((T, Q) => {
        if (Q === a.key || !me.order.includes(Q)) return;
        const R = Math.hypot(S - (T.x + T.w / 2), v - (T.y + T.h / 2));
        R < I && (I = R, M = { key: Q, b: T });
      }), !M) return;
      const j = me.order.filter((T) => T !== a.key), P = j.indexOf(M.key) + (S > M.b.x + M.b.w / 2 ? 1 : 0), O = [...j.slice(0, P), a.key, ...j.slice(P)];
      O.join() !== me.order.join() ? (me.order = O, Re()) : os(ar.get(a.key));
    }, s = () => {
      removeEventListener("pointermove", d), removeEventListener("pointerup", s), removeEventListener("pointercancel", s);
      const f = me;
      me = null, e.classList.remove("tfDragging"), f.on && _a({ order: f.order }), Re(), f.on && !We() && setTimeout(() => id(e), 340);
    };
    addEventListener("pointermove", d), addEventListener("pointerup", s), addEventListener("pointercancel", s);
  }
  function gf(t, e, a) {
    var zc;
    const n = new Set(ne().hidden);
    t.forEach((ct) => ct.el.classList.toggle("tfBoardHidden", n.has(ct.key)));
    const i = t.filter((ct) => !n.has(ct.key) && getComputedStyle(ct.el).display !== "none"), d = a ? Qe.phoneGap : Qe.gap, s = Math.min(e, Qe.full);
    let f = 0;
    const h = xs();
    g.classList.toggle("hcSumsFit", nc()), g.classList.toggle("hcFavStrip", h);
    const k = i.filter((ct) => to.includes(ct.key) || h && ct.key === "favs");
    k.sort((ct, Pt) => ["title", "sums", "favs"].indexOf(ct.key) - ["title", "sums", "favs"].indexOf(Pt.key)), k.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.toggleAttribute("data-narrow", !1), Object.assign(ct.el.style, { width: (ct.key === "title" ? e : s) + "px", height: "", left: "0px", top: f + "px" });
      const Pt = ct.key !== "title" && (ct.el.querySelector(".tfDash-bar>.activityRows") || ct.key === "favs" && ct.el.querySelector(":scope>.activityRows")), be = Pt ? Pt.children.length : 0;
      if (Pt && (Pt.classList.remove("hcBarRows"), !a && Pt.scrollWidth > Pt.clientWidth + 1))
        for (let ce = 2; ce <= be && (Pt.classList.add("hcBarRows"), Pt.style.setProperty("--bar-cols", String(Math.ceil(be / ce))), !(Pt.scrollWidth <= Pt.clientWidth + 1)); ce++)
          ;
      f += ct.el.offsetHeight + (ct.key === "title" ? Qe.nameGap : Qe.sumsGap);
    });
    const S = a ? 1 : Math.max(0.85, Math.min(1, e / Qe.full)), v = ["favs", "wx", "energy"], M = (me == null ? void 0 : me.order) || ((zc = gt.home) == null ? void 0 : zc.order), I = M ? [...M.filter((ct) => v.includes(ct)), ...v.filter((ct) => !M.includes(ct))] : v;
    Yl = I;
    const j = i.filter((ct) => v.includes(ct.key) && !(h && ct.key === "favs")).sort((ct, Pt) => I.indexOf(ct.key) - I.indexOf(Pt.key));
    ar = /* @__PURE__ */ new Map();
    const P = (ct, Pt) => {
      if (ar.set(ct.key, Pt), Object.assign(ct.el.style, { width: Pt.w + "px", height: Pt.h + "px" }), me != null && me.on && me.key === ct.key) {
        os(Pt);
        return;
      }
      Object.assign(ct.el.style, { left: Pt.x + "px", top: Pt.y + "px" });
    }, O = a ? e : Math.round((2 * Qe.col + Qe.inner) * S), T = Math.round(Qe.row * S), Q = jl(), R = Vl[Q], Mt = as(), Kt = Xo("byFloor"), Nt = zl() === "stacked" && !a && j.length > 0;
    let Xt = 0, ge = 0, Lt = f;
    j.forEach((ct) => {
      ct.el.classList.add("tfBoardItem"), ct.el.dataset.rows = 5, ct.el.dataset.cols = 2, ct.el.toggleAttribute("data-narrow", !1);
      let Pt = T;
      if ((a || ct.key === "favs") && (Object.assign(ct.el.style, { width: O + "px", height: "" }), Pt = ct.el.offsetHeight), Nt) {
        P(ct, { x: 0, y: Lt, w: O, h: Pt }), Lt += Pt + d;
        return;
      }
      Xt && Xt + O > e && (f += ge + d, Xt = 0, ge = 0), P(ct, { x: Xt, y: f, w: O, h: Pt }), Xt += O + d, ge = Math.max(ge, Pt);
    }), j.length && !Nt && (f += ge + d);
    const Vt = Nt ? O + d : 0, Ue = Nt ? e - O - d : e, Va = a ? Math.floor((e - d) / 2) : Math.round(R.w * S), ri = Math.round(R.h * S), ur = a ? 2 : Math.max(1, Math.floor((Ue + d) / (Va + d))), ii = new Map(i.filter((ct) => tt(ct.key)).map((ct) => [ct.key, ct])), mr = (Kt ? hf() : [{ id: "", name: "", rooms: G }]).map((ct) => ({ ...ct, cards: ct.rooms.map((Pt) => ii.get("room:" + Pt.id)).filter(Boolean) })).filter((ct) => ct.cards.length), Vs = Mt === "bento", js = Vs && Xo("bentoMixed"), fu = Vs && Kt && Xo("bentoBoxes"), uu = Mt === "columns" && Kt && !a, gr = 12, hu = (ct) => ct.name ? Qe.floorHead + Qe.floorGap : 0, zs = (ct, Pt, be) => {
      const ce = /* @__PURE__ */ new Set(), fe = [];
      ct.cards.forEach((Ft, Do) => {
        const Ye = js && Do === 0 && Pt >= 2 && ct.cards.length > 1, Lo = Ye ? 2 : 1, si = Ye && !a ? 2 : 1;
        Ft.el.classList.remove("hcAreaS", "hcAreaM", "hcAreaL", "hcAreaBig"), Ft.el.classList.add("hcArea" + Q.toUpperCase()), Ft.el.classList.toggle("hcAreaBig", Ye), Ft.el.style.setProperty("--hc-k", String(S)), Ft.el.classList.add("tfBoardItem"), Ft.el.dataset.rows = si > 1 ? 10 : 5, Ft.el.dataset.cols = Lo, Ft.el.toggleAttribute("data-narrow", !1);
        for (let li = 0; ; li++) {
          const Ks = [...Array(Math.max(0, Pt - Lo + 1)).keys()].find((Xs) => [...Array(Lo).keys()].every(($s) => [...Array(si).keys()].every((wu) => !ce.has(li + wu + "," + (Xs + $s)))));
          if (Ks != null) {
            [...Array(Lo).keys()].forEach((Xs) => [...Array(si).keys()].forEach(($s) => ce.add(li + $s + "," + (Ks + Xs)))), fe.push({ it: Ft, r: li, c: Ks, sc: Lo, sr: si });
            break;
          }
        }
      });
      const Ee = Math.max(0, ...fe.map((Ft) => Ft.r + Ft.sr));
      Vs && !a && fe.forEach((Ft) => {
        for (; Ft.r + Ft.sr < Ee && !ce.has(Ft.r + Ft.sr + "," + Ft.c) && Ft.sc === 1; )
          ce.add(Ft.r + Ft.sr + "," + Ft.c), Ft.sr++;
      }), fe.forEach((Ft) => Object.assign(Ft.it.el.style, { width: Ft.sc * be + (Ft.sc - 1) * d + "px", height: a ? "" : Ft.sr * ri + (Ft.sr - 1) * d + "px" }));
      const Qo = [...Array(Ee)].map(() => a ? 0 : ri);
      a && fe.forEach((Ft) => {
        Qo[Ft.r] = Math.max(Qo[Ft.r], Ft.it.el.offsetHeight);
      });
      const tn = [];
      let lo = hu(ct);
      return Qo.forEach((Ft, Do) => {
        tn[Do] = lo, lo += Ft + d;
      }), { h: lo - (Ee ? d : 0), places: fe.map((Ft) => ({ it: Ft.it, x: Ft.c * (be + d), y: tn[Ft.r], w: Ft.sc * be + (Ft.sc - 1) * d, h: Qo.slice(Ft.r, Ft.r + Ft.sr).reduce((Do, Ye) => Do + Ye, 0) + (Ft.sr - 1) * d })) };
    }, Gs = new Map([...L.querySelectorAll(":scope > .hcFloor")].map((ct) => [ct.dataset.floor, ct])), Us = new Map([...L.querySelectorAll(":scope > .hcFloorBox")].map((ct) => [ct.dataset.floor, ct])), jc = [], mu = (ct, Pt, be, ce) => {
      if (!ct.name) return;
      let fe = Gs.get(ct.id);
      Gs.delete(ct.id), fe || (fe = Object.assign(document.createElement("div"), { className: "hcFloor" }), fe.dataset.floor = ct.id, L.appendChild(fe)), fe.dataset.sig !== ct.name && (fe.dataset.sig = ct.name, fe.innerHTML = '<h2 class="hcFloorName">' + F(ct.name) + "</h2>"), Object.assign(fe.style, { left: Pt + "px", top: be + "px", width: ce + "px" }), jc.push(fe);
    }, gu = (ct, Pt, be, ce, fe) => {
      let Ee = Us.get(ct.id);
      Us.delete(ct.id), Ee || (Ee = Object.assign(document.createElement("div"), { className: "hcFloorBox" }), Ee.dataset.floor = ct.id, Ee.setAttribute("aria-hidden", "true"), L.prepend(Ee)), Object.assign(Ee.style, { left: Pt + "px", top: be + "px", width: ce + "px", height: fe + "px" });
    }, bu = (ct) => parseFloat(getComputedStyle(ct.cards[0].el).paddingLeft) || 0, Ys = (ct, Pt, be, ce, fe = 0) => {
      mu(ct, be + fe, ce, (Pt.w ?? e) - fe), Pt.places.forEach((Ee) => P(Ee.it, { x: be + Ee.x, y: ce + Ee.y, w: Ee.w, h: Ee.h }));
    };
    if (mr.length && j.length && !Nt && (f += Qe.floorTop), uu) {
      let ct = 0, Pt = f;
      mr.forEach((be) => {
        const ce = { ...zs(be, 1, Va), w: Va };
        ct && ct + Va > Ue && (f = Pt + d + Qe.floorTop, ct = 0), Ys(be, ce, Vt + ct, f), Pt = Math.max(Pt, f + ce.h), ct += Va + d;
      }), f = Pt + d;
    } else if (fu) {
      const ct = Array(ur).fill(f);
      mr.forEach((Pt) => {
        const be = Pt.cards.length + (js && Pt.cards.length > 1 ? 3 : 0), ce = a ? 2 : Math.min(ur, Math.max(js && Pt.cards.length > 1 ? 2 : 1, be <= 3 ? be : Math.ceil(be / 2))), fe = ce * (Va + d) - d, Ee = Math.floor((fe - 2 * gr - (ce - 1) * d) / ce), Qo = { ...zs(Pt, ce, Ee), w: fe - 2 * gr };
        let tn = 0, lo = 1 / 0;
        for (let Ye = 0; Ye + ce <= ur; Ye++) {
          const Lo = Math.max(...ct.slice(Ye, Ye + ce));
          Lo < lo && (lo = Lo, tn = Ye);
        }
        const Ft = Vt + tn * (Va + d), Do = Qo.h + 2 * gr;
        gu(Pt, Ft, lo, fe, Do), Ys(Pt, Qo, Ft + gr, lo + gr, bu(Pt));
        for (let Ye = tn; Ye < tn + ce; Ye++) ct[Ye] = lo + Do + d;
      }), f = Math.max(f, ...ct);
    } else
      mr.forEach((ct, Pt) => {
        Pt && (f += Qe.floorTop);
        const be = zs(ct, ur, Va);
        Ys(ct, { ...be, w: Ue }, Vt, f), f += be.h + d;
      });
    Nt && (f = Math.max(f, Lt)), Gs.forEach((ct) => ct.remove()), Us.forEach((ct) => ct.remove()), me != null && me.on || os(null), L.style.height = Math.max(0, f - d) + "px", es([...k.map((ct) => ct.el), ...j.map((ct) => ct.el), ...jc, ...mr.flatMap((ct) => ct.cards.map((Pt) => Pt.el))]), rs(!1), t.forEach((ct) => [...ct.el.children].forEach((Pt) => Pt.toggleAttribute("inert", ro)));
    const Zs = L.querySelector(".tfDash-favs>.activityRows");
    Zs && (Zs.classList.toggle("hcFadeList", !h), Ul(Zs)), requestAnimationFrame(() => g.classList.add("tfBoardReady")), t.forEach((ct) => ns.observe(ct.el)), xe();
  }
  const Gr = () => {
    Ji || (Ji = !0, requestAnimationFrame(() => {
      Ji = !1, Re();
    }));
  }, ns = new ResizeObserver(() => {
    Yt || Gr();
  });
  function bf(t, e, a) {
    const n = a + se, i = t * a + (t - 1) * se, d = e * Aa - se, s = se / 2, f = n / Math.max(1, Math.round(n / (Aa / 4))), h = Aa / 4, k = 6;
    let S = "";
    for (let v = 0; v <= t; v++) for (let M = 0; M <= e; M++) {
      const I = v * n - s, j = M * Aa - s;
      S += "M" + (I - k) + " " + j + "H" + (I + k) + "M" + I + " " + (j - k) + "V" + (j + k);
    }
    return '<svg width="' + i + '" height="' + d + '" viewBox="0 0 ' + i + " " + d + '"><defs><pattern id="tfGridDots" patternUnits="userSpaceOnUse" x="' + -s + '" y="' + -s + '" width="' + f.toFixed(3) + '" height="' + h + '"><circle cx="0" cy="0" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="0" r="1.4"></circle><circle cx="0" cy="' + h + '" r="1.4"></circle><circle cx="' + f.toFixed(3) + '" cy="' + h + '" r="1.4"></circle></pattern></defs><rect class="tfGridDots" x="' + -s + '" y="' + -s + '" width="' + (i + se) + '" height="' + (d + se) + '" fill="url(#tfGridDots)"></rect><path class="tfGridCross" d="' + S + '"></path></svg>';
  }
  function rs(t, e = [], a = /* @__PURE__ */ new Map(), n = 0, i = 1, d = tr) {
    L.querySelectorAll(".tfEditChips").forEach((S) => {
      (!t || !S.closest(".tfBoardItem")) && S.remove();
    }), L.querySelectorAll(".tfFavHides").forEach((S) => S.remove()), L.querySelectorAll(".tfBoardItem").forEach((S) => [...S.children].forEach((v) => {
      v.classList.contains("tfEditChips") || v.toggleAttribute("inert", t);
    }));
    let s = L.querySelector(".tfBoardCells"), f = L.querySelector(".tfBoardLand");
    if (!t)
      return s == null || s.remove(), f == null || f.remove(), Ia(), n;
    const h = zr + Qp;
    if (s || (s = Object.assign(document.createElement("div"), { className: "tfBoardCells" }), s.setAttribute("aria-hidden", "true"), L.prepend(s)), s.style.top = To + "px", s.dataset.size !== i + "x" + h + "x" + d && (s.dataset.size = i + "x" + h + "x" + d, s.innerHTML = bf(i, h, d)), n = Math.max(n, To + h * Aa - se), e.forEach((S) => {
      const v = S.el;
      !v || v.querySelector(":scope > .tfEditChips") || v.insertAdjacentHTML("beforeend", '<div class="tfEditChips"><span class="tfEditGrip" aria-hidden="true">' + wi + '</span><button class="tfEditChip" type="button" data-board-more="' + F(S.key) + '" aria-label="' + F(ga(S.key)) + ' options" aria-haspopup="menu">' + t0 + "</button></div>");
    }), Yt && a.has(Yt.key)) {
      f || (f = Object.assign(document.createElement("div"), { className: "tfBoardLand" }), L.appendChild(f));
      const S = a.get(Yt.key);
      Object.assign(f.style, { left: S.x + "px", top: S.y + "px", width: S.w + "px", height: S.h + "px" });
    } else f == null || f.remove();
    const k = L.querySelector(".tfDash-favs.tfBoardItem:not(.tfBoardHidden)");
    if (k) {
      const S = k.getBoundingClientRect();
      k.insertAdjacentHTML("beforeend", '<div class="tfFavHides">' + [...k.querySelectorAll('[data-k^="fav:"]')].map((v) => {
        const M = v.getBoundingClientRect(), I = v.dataset.k.slice(4);
        return '<button class="tfFavHide" type="button" data-fav-hide="' + F(I) + '" aria-label="Hide ' + F(xt(I)) + ' from the dashboard" style="left:' + Math.round(M.right - S.left - 42) + "px;top:" + Math.round(M.top - S.top + (M.height - 32) / 2) + 'px">' + Gd + "</button>";
      }).join("") + "</div>");
    }
    return n;
  }
  let is = "";
  function ss(t) {
    Je = t, t || (Yt = null, eo = ao = !1, Ia()), Re(), t ? is = JSON.stringify(gt) : is && JSON.stringify(gt) !== is && ba("Changes saved");
  }
  function wf(t, e) {
    var P, O;
    Ia();
    const a = Uo.get(t), { n } = Yo(L.clientWidth), i = ne(), d = i.spans[t] ?? (tt(t) ? 1 : 2);
    if (!a) return;
    const s = a.cols >= n, f = (T, Q, R) => '<button type="button" role="menuitem" data-board-act="' + T + '"' + (R ? " disabled" : "") + ">" + Q + "</button>", h = Object.assign(document.createElement("div"), { className: "tfBoardMenu" });
    h.setAttribute("role", "menu"), h.setAttribute("aria-label", ga(t) + " options");
    const k = L.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]'), S = Ol(t), v = er(t), M = '<div class="tfHeight" role="group" aria-label="Height"><span class="tfHeightLabel" aria-hidden="true">Height</span><div class="tfHeightTabs">' + Hl.map((T, Q) => '<button type="button" role="menuitemradio" aria-checked="' + (Q + 1 === v) + '" aria-label="' + T + ", " + (Q + 1) + (Q ? " rows" : " row") + '" data-board-act="h:' + (Q + 1) + '"' + (Q < S ? "" : " disabled") + ">" + T + "</button>").join("") + "</div></div>", I = tf.includes(t) || tt(t) ? '<div class="tfHeight tfWidth" role="group" aria-label="Width"><span class="tfHeightLabel" aria-hidden="true">Width</span><div class="tfHeightTabs">' + ef.map((T, Q) => '<button type="button" role="menuitemradio" aria-checked="' + (Q + 1 === Math.min(d, n)) + '" aria-label="' + T + ", " + (Q + 1) + (Q ? " columns" : " column") + '" data-board-act="w:' + (Q + 1) + '"' + (Q < n ? "" : " disabled") + ">" + T + "</button>").join("") + "</div></div>" : "";
    h.innerHTML = M + I + (t === "energy" ? f("graph", (((P = i.opts.energy) == null ? void 0 : P.graph) || "above") === "above" ? "Graph below" : "Graph above") : "") + f("left", "Move left", s || a.col === 0) + f("right", "Move right", s || a.col + a.cols >= n) + f("up", "Move up", a.row <= 0) + f("down", "Move down") + (k ? f("remove", "Remove") : f("hide", "Hide")), L.appendChild(h);
    const j = Math.min(a.x + a.w - h.offsetWidth, L.clientWidth - h.offsetWidth);
    Object.assign(h.style, { left: Math.max(0, j) + "px", top: a.y + 28 + "px" }), ze = { key: t, menu: h, opener: e }, (O = h.querySelector("button:not([disabled])")) == null || O.focus();
  }
  function Ia(t) {
    if (!ze) return;
    const { menu: e, opener: a } = ze;
    ze = null, e.remove(), t && (a == null || a.focus());
  }
  const $o = () => Object.fromEntries([...Uo].map(([t, e]) => [t, { col: e.col, row: e.row }]));
  function vf(t, e) {
    var f, h;
    if (e === "remove") {
      Ia(), yf(t);
      return;
    }
    const a = gt, n = ne(), i = $o(), d = i[t] || { col: 0, row: 0 };
    e.startsWith("w:") && (n.spans = { ...n.spans, [t]: e === "w:full" ? "full" : Number(e.slice(2)) }), e.startsWith("h:") && (n.opts = { ...n.opts, [t]: { ...n.opts[t] || {}, h: Number(e.slice(2)), tall: void 0 } }), e === "graph" && (n.opts = { ...n.opts, energy: { ...n.opts.energy || {}, graph: (((f = n.opts.energy) == null ? void 0 : f.graph) || "above") === "above" ? "below" : "above" } }), e === "left" && (i[t] = { ...d, col: d.col - 1 }), e === "right" && (i[t] = { ...d, col: d.col + 1 }), e === "up" && (i[t] = { ...d, row: d.row - 1 }), e === "down" && (i[t] = { ...d, row: d.row + 1 }), e === "hide" && (n.hidden = [.../* @__PURE__ */ new Set([...n.hidden, t])]), ["left", "right", "up", "down"].includes(e) && (Yt = { key: t, col: i[t].col, row: i[t].row }), Sn(n, i), Yt && (Re(), Yt = null, Sn(ne(), $o()));
    const s = /^[hw]:/.test(e) && !We() && (ze == null ? void 0 : ze.menu.querySelector('[data-board-act="' + CSS.escape(e) + '"]'));
    if (s) {
      const k = ze;
      s.parentElement.querySelectorAll("[aria-checked]").forEach((S) => S.setAttribute("aria-checked", String(S === s))), setTimeout(() => {
        ze === k && Ia();
      }, ye.tabs.dur);
    } else Ia();
    e === "graph" && (la.delete("dash:energy"), _e()), e.startsWith("h:") && t.includes(".") && _e(), Re(), e !== "hide" ? (h = L.querySelector('[data-board-more="' + CSS.escape(t) + '"]')) == null || h.focus() : ba(ga(t) + " hidden", $r(a));
  }
  const Zl = (t) => {
    var e;
    return yo.includes(t) && !(((e = gt.dash) == null ? void 0 : e.cells) || {})[t] ? " added" : " put back";
  };
  function ls(t) {
    const e = ne(), a = ga(t) + Zl(t);
    Zo({ ...e, hidden: e.hidden.filter((n) => n !== t) }), Re(), ba(a);
  }
  const Ur = () => ne().tiles || [...L.querySelectorAll(".tfDashTiles > [data-k]")].map((t) => t.dataset.k).filter((t) => !ne().hidden.includes(t));
  function Kl(t, e) {
    const a = ne();
    Sn({ ...a, tiles: t, hidden: a.hidden.filter((n) => !n.includes(".")) }, e), _e(), xe();
  }
  const Xl = (t) => {
    Kl([...Ur().filter((e) => e !== t), t], $o()), ba(ga(t) + " added"), Sf(t);
  }, yf = (t) => {
    const e = gt, a = $o();
    delete a[t], Kl(Ur().filter((n) => n !== t), a), ba(ga(t) + " removed", $r(e));
  };
  let cs = 0;
  function ba(t, e = null) {
    var s;
    const a = p("toast");
    if (!a) return;
    if (Eh(a, t), e) {
      const f = Object.assign(document.createElement("button"), { type: "button", className: "toastAction", textContent: "Undo" });
      f.addEventListener("click", () => {
        clearTimeout(cs), a.classList.remove("show", "withAction"), e();
      }), a.appendChild(f);
    }
    const n = g.getBoundingClientRect(), i = (s = o.querySelector(".bottomNav")) == null ? void 0 : s.getBoundingClientRect(), d = Qt.classList.contains("open") && !Fa ? Math.min(n.right, Qt.getBoundingClientRect().left) : n.right;
    a.style.left = (n.left + d) / 2 + "px", a.style.bottom = (i != null && i.height ? window.innerHeight - i.top + 12 : 26) + "px", a.classList.add("tfToast", "show"), a.classList.toggle("withAction", !!e), Bh(a), clearTimeout(cs), cs = setTimeout(() => a.classList.remove("show", "withAction"), e ? 5e3 : ye.confirm.stay);
  }
  const xf = 700, kf = 1e3, ta = Object.assign(document.createElement("div"), { className: "tfTooltip", hidden: !0 });
  ta.setAttribute("role", "tooltip"), ta.setAttribute("aria-hidden", "true"), g.appendChild(ta);
  let Yr = null, or = 0, An = 0, $l = -1 / 0;
  const ds = (t) => {
    if (t.nodeType !== 1) return !1;
    const e = getComputedStyle(t);
    return e.textOverflow === "ellipsis" && t.scrollWidth > t.clientWidth + 1 || e.webkitLineClamp !== "none" && t.scrollHeight > t.clientHeight + 1;
  }, Mf = (t) => {
    for (let e = t; e && e !== g; e = e.parentElement) if (ds(e)) return e;
    return null;
  };
  function Jl(t, e) {
    clearTimeout(or), clearTimeout(An);
    const a = () => {
      if (!t.isConnected) return;
      Yr = t, ta.textContent = e, ta.hidden = !1;
      const n = t.getBoundingClientRect(), i = ta.getBoundingClientRect(), d = n.top - i.height - 8 >= 8 ? n.top - i.height - 8 : n.bottom + 8;
      ta.style.left = Math.max(8, Math.min(window.innerWidth - i.width - 8, n.left + n.width / 2 - i.width / 2)) + "px", ta.style.top = d + "px";
    };
    !ta.hidden || performance.now() - $l < kf ? a() : or = setTimeout(a, xf);
  }
  function Zr() {
    clearTimeout(or), clearTimeout(An), ta.hidden || ($l = performance.now()), ta.hidden = !0, Yr = null;
  }
  o.addEventListener("pointerover", (t) => {
    if (t.pointerType === "touch") return;
    if (ta.contains(t.target)) {
      clearTimeout(An);
      return;
    }
    const e = Mf(t.target);
    if (e && Wt.names === "scroll" && e.matches(Kr)) {
      ps(e);
      return;
    }
    if (e) {
      e !== Yr ? Jl(e, e.textContent.trim()) : clearTimeout(An);
      return;
    }
    clearTimeout(or), clearTimeout(An), An = setTimeout(Zr, 120);
  }), o.addEventListener("focusin", (t) => {
    var n;
    const e = t.target;
    if (!((n = e.matches) != null && n.call(e, ":focus-visible"))) return;
    let a = [e, ...e.querySelectorAll("*")].filter(ds);
    Wt.names === "scroll" && (a.filter((i) => i.matches(Kr)).forEach(ps), a = a.filter((i) => !i.matches(Kr))), a.length && Jl(e, a.map((i) => i.textContent.trim()).join(" · "));
  }), o.addEventListener("focusout", (t) => {
    t.target === Yr && Zr();
  }), o.addEventListener("keydown", (t) => {
    t.key === "Escape" && !ta.hidden && (t.stopPropagation(), Zr());
  }, !0), window.addEventListener("scroll", () => {
    (!ta.hidden || or) && Zr();
  }, { capture: !0, passive: !0 });
  const Kr = ".activityRowName,.activityRowMeta", Xr = /* @__PURE__ */ new WeakSet();
  function ps(t) {
    var a;
    if (Wt.names !== "scroll" || Xr.has(t) || t.closest("[inert]") || (a = window.matchMedia) != null && a.call(window, "(prefers-reduced-motion: reduce)").matches) return;
    Xr.add(t);
    const e = () => Promise.all([t.closest(".hcAreaPanel"), t.closest(".panelExpanded")].filter(Boolean).flatMap((n) => n.getAnimations()).map((n) => n.finished.catch(() => {
    })));
    setTimeout(async () => {
      await e();
      const n = t.isConnected && !t.closest("[inert]") ? t.scrollWidth - t.clientWidth : 0;
      if (n < 2) {
        Xr.delete(t);
        return;
      }
      const i = n / 30 * 1e3, d = i + 1e3 + i;
      t.style.textOverflow = "clip";
      const s = t.animate([
        { textIndent: "0px", offset: 0, easing: "ease-in-out" },
        { textIndent: -n + "px", offset: i / d },
        { textIndent: -n + "px", offset: (1e3 + i) / d, easing: "ease-in-out" },
        { textIndent: "0px", offset: 1 }
      ], { duration: d });
      s.onfinish = s.oncancel = () => {
        t.style.textOverflow = "", Xr.delete(t);
      };
    }, 600);
  }
  const Ql = new IntersectionObserver((t) => t.forEach((e) => {
    e.isIntersecting && !e.target.closest("[inert]") && (Ql.unobserve(e.target), ps(e.target));
  }), { threshold: 1 });
  let fs = !1;
  new MutationObserver(() => {
    fs || Wt.names !== "scroll" || (fs = !0, setTimeout(() => {
      fs = !1, o.querySelectorAll(Kr).forEach((t) => {
        !t.dataset.glided && ds(t) && (t.dataset.glided = "1", Ql.observe(t));
      });
    }, 300));
  }).observe(o, { childList: !0, subtree: !0 });
  const $r = (t) => () => {
    gt = t, sa(), _e(), Re(), xe();
  };
  function Sf(t) {
    const e = () => L.querySelector('.tfDashTiles > [data-k="' + CSS.escape(t) + '"]');
    setTimeout(() => {
      var s;
      const a = e();
      if (!a) return;
      const n = (s = window.matchMedia) == null ? void 0 : s.call(window, "(prefers-reduced-motion: reduce)").matches, i = a.getBoundingClientRect();
      (i.top < 0 || i.bottom > window.innerHeight) && a.scrollIntoView({ behavior: n ? "auto" : "smooth", block: "center" });
      const d = (f) => "0 0 0 4px color-mix(in srgb,var(--primary) " + f + "%,transparent),0 0 24px color-mix(in srgb,var(--primary) " + f + "%,transparent)";
      a.animate([{ boxShadow: d(55) }, { boxShadow: d(0) }], { duration: 1500, easing: n ? "steps(1, end)" : "ease-out" });
    }, Af(t) ? 260 : 0);
  }
  function Af(t) {
    const e = Uo.get(t);
    if (!e || !Qt.classList.contains("open") || Fa) return !1;
    const { n: a, w: n } = Yo(L.clientWidth), i = Qt.getBoundingClientRect().left - L.getBoundingClientRect().left, d = (h) => h * (n + se) + e.cols * n + (e.cols - 1) * se <= i;
    if (d(e.col)) return !1;
    const s = /* @__PURE__ */ new Set();
    Uo.forEach((h, k) => {
      if (k !== t) for (let S = h.row; S < h.row + h.rows; S++) for (let v = h.col; v < h.col + h.cols; v++) s.add(v + "," + S);
    });
    const f = (h, k) => {
      for (let S = k; S < k + e.rows; S++) for (let v = h; v < h + e.cols; v++) if (s.has(v + "," + S)) return !1;
      return !0;
    };
    for (let h = 0; h <= zr; h++) for (let k = 0; k + e.cols <= a && d(k); k++)
      if (f(k, h))
        return Sn(ne(), { ...$o(), [t]: { col: k, row: h } }), Re(), !0;
    return !1;
  }
  const tc = /^(light|switch|cover|climate|fan|lock|valve|media_player|humidifier|vacuum|scene|script|alarm_control_panel|water_heater|input_boolean)\./, Cf = [["page", "Page"], ["cards", "Cards"], ["areas", "Areas"], ["favs", "Favourites"]];
  let us = "page";
  const _f = (t) => t.matches('[data-tray="welcome"],[data-tray="phone"]') ? "page" : t.querySelector("[data-room-add]") ? "areas" : t.querySelector('[data-tray="favs"]') ? "favs" : "cards";
  function ec(t = !1) {
    const e = Qt.querySelector(".tfTrayInner"), a = Qt.querySelector(".hcTrayTabs"), n = a.querySelector(".rubberIndicator");
    let i = !0;
    e.querySelectorAll(":scope>.tfTraySection").forEach((s) => {
      s.hidden = _f(s) !== us, s.classList.toggle("hcFirst", !s.hidden && i), s.hidden || (i = !1);
    }), a.querySelectorAll("[data-tray-tab]").forEach((s) => {
      const f = s.dataset.trayTab === us;
      s.classList.toggle("active", f), s.setAttribute("aria-selected", String(f));
    });
    const d = a.querySelector(".tab.active");
    d != null && d.offsetWidth && (n.style.transition = "none", t ? Si(n, n.offsetLeft, n.offsetWidth, d.offsetLeft, d.offsetWidth) : (n.style.left = d.offsetLeft + "px", n.style.width = d.offsetWidth + "px"));
  }
  const Qt = Object.assign(document.createElement("aside"), { className: "tfEditTray" });
  Qt.setAttribute("aria-label", "Edit custom dashboard"), Qt.innerHTML = '<button class="tfTrayTuck" type="button" data-tray-tuck></button><div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit custom dashboard</div><button class="pill" type="button" data-tray-done>Done</button></div><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit custom dashboard"><div class="rubberIndicator" aria-hidden="true"></div>' + Cf.map(([t, e], a) => '<button class="tab segBtn' + (a ? "" : " active") + '" type="button" role="tab" aria-selected="' + !a + '" data-tray-tab="' + t + '">' + e + "</button>").join("") + '</div><section class="tfTraySection" data-tray="welcome"></section><section class="tfTraySection" data-tray="cards"></section><section class="tfTraySection" data-tray="weather"></section><section class="tfTraySection"><div class="sectionLabel">Tiles</div><p class="tfTrayNote">Remove a tile from its ⋯.</p><button class="pill tfTrayAdd hcAddBtn" type="button" data-tile-add aria-expanded="false">' + vi + '<span>Add tile</span></button><div class="tfTrayPick" data-pick="tiles" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-tile-search><ul class="tfTrayList" data-tray="tilepick"></ul></div></section><section class="tfTraySection"><div class="sectionLabel">Areas</div><p class="tfTrayNote">Which areas the Areas card shows, and one area on its own instead.</p><button class="pill tfTrayAdd" type="button" data-area-choose aria-expanded="false">Choose areas</button><button class="pill tfTrayAdd hcAddBtn" type="button" data-room-add aria-expanded="false">' + vi + '<span>Add area</span></button><ul class="tfTrayList" data-tray="roompick" hidden></ul></section><section class="tfTraySection" data-tray="phone"></section><section class="tfTraySection"><div class="sectionLabel">Favourites</div><ul class="tfTrayList" data-tray="favs"></ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-fav-add aria-expanded="false">' + vi + '<span>Add favourite</span></button><div class="tfTrayPick" data-pick="favs" hidden><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-fav-search><ul class="tfTrayList" data-tray="pick"></ul></div><div class="toggleRow tfTraySuggest" data-tray="suggest"></div></section></div>', g.appendChild(Qt);
  const ea = Object.assign(document.createElement("div"), { className: "card tfTrayPop" });
  ea.setAttribute("role", "dialog"), ea.setAttribute("aria-label", "Areas"), ea.hidden = !0, g.appendChild(ea);
  const Jr = () => Qt.querySelector("[data-area-choose]");
  function Tf() {
    const t = new Set(V().map((e) => e.id));
    ea.innerHTML = '<div class="tfTrayPopTitle">Areas</div>' + G.map((e) => '<div class="tfTrayPopRow"><button class="switch' + (t.has(e.id) ? " on" : "") + '" type="button" role="switch" aria-checked="' + t.has(e.id) + '" aria-label="' + F(e.name) + '" data-area-on="' + F(e.id) + '"></button><span class="tfIcon"><span class="tfAreaGlyph"' + pe("area:" + e.id, e.icon || "mdi:texture-box", e.name) + '></span></span><span class="tfTrayPopName">' + F(e.name) + "</span></div>").join(""), ra(ea);
  }
  function hs() {
    var t;
    ea.hidden || (ea.hidden = !0, (t = Jr()) == null || t.setAttribute("aria-expanded", "false"));
  }
  function Df() {
    if (!ea.hidden) {
      hs();
      return;
    }
    Tf(), ea.hidden = !1, Jr().setAttribute("aria-expanded", "true");
    const t = Jr().getBoundingClientRect();
    ea.style.top = Math.max(16, Math.min(t.top - 12, innerHeight - ea.offsetHeight - 16)) + "px";
  }
  ea.addEventListener("click", (t) => {
    var i;
    const e = t.target.closest("[data-area-on]");
    if (!e) return;
    const a = !e.classList.contains("on"), n = new Set(((i = gt.dash) == null ? void 0 : i.areasOff) || []);
    a ? n.delete(e.dataset.areaOn) : n.add(e.dataset.areaOn), Zo({ ...ne(), areasOff: [...n] }), e.classList.toggle("on", a), e.setAttribute("aria-checked", String(a)), _e();
  }), ea.addEventListener("keydown", (t) => {
    var e;
    t.key === "Escape" && (t.stopPropagation(), hs(), (e = Jr()) == null || e.focus());
  });
  let Fa = !1, eo = !1, ao = !1, nr = !1, Ge = null, oo = !1;
  const ms = {}, no = (t, e) => {
    if (ms[t] === e) return;
    ms[t] = e;
    const a = Qt.querySelector('[data-tray="' + t + '"]');
    a.innerHTML = e, ra(a);
  }, gs = (t, e) => '<span class="tfTrayName"><span class="activityRowName">' + F(xt(t)) + '</span><span class="activityRowMeta">' + F(e) + "</span></span>", Lf = (t, e, a) => '<li class="tfTrayFav' + (e ? " off" : "") + '" data-tray-fav="' + F(t) + '"><span class="tfTrayGrip" aria-hidden="true">' + wi + '</span><span class="tfIcon"' + pe(t, pa(t)) + "></span>" + gs(t, e ? "Hidden" + (_t.get(t) ? " · " + _t.get(t) : "") : _t.get(t) || Te(t)) + '<button class="tfTrayBtn" type="button" data-fav-eye="' + F(t) + '" aria-pressed="' + !e + '" aria-label="' + (e ? "Show " : "Hide ") + F(xt(t)) + ' on the dashboard">' + (e ? Gd : e0) + "</button>" + (a ? '<button class="tfTrayBtn" type="button" data-fav-remove="' + F(t) + '" aria-label="Remove ' + F(xt(t)) + ' from favourites">' + hl + "</button>" : "<span></span>") + "</li>";
  function bs(t, e, a, n) {
    const i = t.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return Object.keys(y).filter((s) => e(s) && !a.has(s) && y[s].state !== "unavailable").filter((s) => {
      const f = (xt(s) + " " + (_t.get(s) || "") + " " + s).toLowerCase();
      return i.every((h) => f.includes(h));
    }).sort((s, f) => (_t.get(s) || "~").localeCompare(_t.get(f) || "~") || xt(s).localeCompare(xt(f))).slice(0, 40).map((s) => '<li><button class="tfTrayPickItem" type="button" ' + n + '="' + F(s) + '"><span class="tfIcon"' + pe(s, pa(s)) + "></span>" + gs(s, _t.get(s) || "—") + "</button></li>").join("") || '<li class="tfTrayNote">Nothing matches.</li>';
  }
  const Ef = "https://www.home-assistant.io/dashboards/", ac = {
    welcome: ["Welcome message", "<p>Shows a <strong>greeting</strong> above your home's name: good morning, afternoon or evening, then your name.</p>"],
    weather: ["Weather", "<p>The forecast card: now, the next hours in a sentence and the week ahead. Its <strong>Now</strong> opens the Weather page.</p>"],
    energy: ["Energy today", "<p>What your home has used and made today, hour by hour, with <strong>Electricity</strong>, <strong>Solar</strong>, <strong>Gas</strong> and <strong>Water</strong> under it. From your Energy dashboard.</p>"],
    favs: ["Favourite entities", "<p>The devices you use most, at the top of Home.</p><ul><li><strong>Drag</strong> one to change the order</li><li>Press <strong>×</strong> to take it off</li></ul>"],
    suggest: ["Suggested entities", "<p>Fills Favourites with devices you often use, after your own. They change as you use your home.</p>"],
    sums: ["Summaries", "<p>Each summary sums up one kind of thing across your home, like <strong>Lights</strong>: how many are on.</p><ul><li>Switch one off to hide it</li><li><strong>Drag</strong> one to change the order</li></ul>"]
  }, we = Object.assign(document.createElement("aside"), { className: "tfEditTray hcHomeTray" });
  we.setAttribute("aria-label", "Edit Home page"), we.toggleAttribute("inert", !0);
  let ro = !1, Ca = !1, ws = "", vs = null, Qr = "page";
  function ys(t, e) {
    const a = we.querySelector(".hcTrayTabs"), n = a == null ? void 0 : a.querySelector(".rubberIndicator"), i = a == null ? void 0 : a.querySelector(".tab.active");
    if (!(i != null && i.offsetWidth)) {
      requestAnimationFrame(() => {
        var d;
        return ((d = we.querySelector(".hcTrayTabs .tab.active")) == null ? void 0 : d.offsetWidth) && ys(t, e);
      });
      return;
    }
    n.style.transition = "none", t && e ? Si(n, e.left, e.width, i.offsetLeft, i.offsetWidth) : (n.style.left = i.offsetLeft + "px", n.style.width = i.offsetWidth + "px");
  }
  const Jo = (t) => '<button class="hcInfoBtn" type="button" data-info="' + t + '" aria-expanded="false" aria-label="About ' + F(ac[t][0]) + '">' + Ud + "</button>", qa = (t, e, a) => '<button class="switch' + (t ? " on" : "") + '" type="button" role="switch" aria-checked="' + t + '" aria-label="' + F(e) + '" ' + a + "></button>", oc = (t) => '<button class="tfTrayBtn hcHeGrip" type="button" data-he-grip aria-label="Move ' + F(t) + '. Use the up and down arrows">' + wi + "</button>", nc = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.sumsWidth) === "fit";
  }, xs = () => {
    var t;
    return ((t = gt.home) == null ? void 0 : t.favsAs) === "strip";
  }, rr = (t, e, a, n) => '<div class="hcHeLine hcHeChoiceLine"><span class="activityRowName">' + t + '</span><div class="themeChoice hcHeChoice" role="group" aria-label="' + F(t) + '">' + n.map(([i, d]) => '<button class="wxLayoutBtn" type="button" ' + e + '="' + i + '" aria-pressed="' + (a === i) + '">' + d + "</button>").join("") + "</div></div>", rc = () => ma(!0).filter((t) => vr[t.key]).map((t) => t.key);
  function Cn() {
    var s, f, h, k, S;
    if (!ro) return;
    const t = Et(), e = (v) => '<li class="hcHeRow" data-he-id="' + F(v) + '">' + oc(xt(v)) + '<span class="tfIcon"' + pe(v, pa(v)) + "></span>" + gs(v, _t.get(v) || Te(v)) + '<button class="tfTrayBtn" type="button" data-he-remove="' + F(v) + '" aria-label="Take ' + F(xt(v)) + ' off Favourites">' + hl + "</button></li>", a = (v) => {
      const M = vr[v];
      return '<li class="hcHeRow hcHeSum" data-he-id="' + F(v) + '"' + (M.colour && ln(M.colour) ? ' style="' + ln(M.colour).slice(1) + '"' : "") + ">" + oc(M.name) + '<span class="tfIcon"' + pe("", M.icon, M.name) + '></span><span class="activityRowName">' + F(M.name) + "</span>" + qa(yn(v), M.name, 'data-he-sum="' + F(v) + '"') + "</li>";
    }, n = ((s = we.querySelector("[data-he-search]")) == null ? void 0 : s.value) || "", i = [["page", "Page"], ["favs", "Favourites"], ["sums", "Summaries"]], d = {
      page: '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Jo("welcome") + qa($i(), "Welcome message", "data-he-welcome") + "</div>" + // the weather card and Energy today, where the house has them
      (oe() ? '<div class="hcHeLine"><span class="activityRowName">Weather</span>' + Jo("weather") + qa(!!((f = gt.home) != null && f.weather), "Weather", 'data-he-card="weather"') + "</div>" : "") + (Sa != null && Sa.length ? '<div class="hcHeLine"><span class="activityRowName">Energy today</span>' + Jo("energy") + qa(!!((h = gt.home) != null && h.energy), "Energy today", 'data-he-card="energy"') + "</div>" : "") + rr("Cards", "data-he-cards-as", zl(), [["stacked", "Stacked"], ["rows", "Rows"]]) + '<hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Group by floor</span>' + qa(Xo("byFloor"), "Group by floor", 'data-he-flag="byFloor"') + "</div>" + rr("Layout", "data-he-area-layout", as(), [["rows", "Rows"], ["columns", "Columns"], ["bento", "Bento"]]) + (as() === "bento" ? '<div class="hcHeLine"><span class="activityRowName">Floors as boxes</span>' + qa(Xo("bentoBoxes"), "Floors as boxes", 'data-he-flag="bentoBoxes"') + '</div><div class="hcHeLine"><span class="activityRowName">Mixed sizes</span>' + qa(Xo("bentoMixed"), "Mixed sizes", 'data-he-flag="bentoMixed"') + "</div>" : "") + rr("Area cards", "data-he-area-size", jl(), [["s", "Small"], ["m", "Medium"], ["l", "Large"]]),
      favs: '<div class="hcHeLine"><span class="activityRowName">Show favourites</span>' + qa(((k = gt.home) == null ? void 0 : k.favs) !== !1, "Show favourites", 'data-he-card="favs"') + '</div><hr class="hcHeRule"><div class="hcHeLabel"><span class="activityRowName">Favourite entities</span>' + Jo("favs") + "</div>" + rr("Show as", "data-he-favs-as", xs() ? "strip" : "card", [["card", "Card"], ["strip", "Strip"]]) + '<ul class="tfTrayList hcHeList" data-he-list="favs">' + (t.map(e).join("") || '<li class="tfTrayNote">No favourites yet.</li>') + '</ul><button class="pill tfTrayAdd hcAddBtn" type="button" data-he-add aria-expanded="' + Ca + '">' + vi + '<span>Add favourite</span></button><div class="tfTrayPick" data-he-pick' + (Ca ? "" : " hidden") + '><input class="addInput" type="search" placeholder="Search devices" aria-label="Search devices" autocomplete="off" data-he-search value="' + F(n) + '"><ul class="tfTrayList">' + (Ca ? bs(n, (v) => tc.test(v), new Set(t), "data-he-pick-id") : "") + '</ul></div><hr class="hcHeRule"><div class="hcHeLine"><span class="activityRowName">Suggested entities</span>' + Jo("suggest") + qa(Rt(), "Suggested entities", "data-he-suggest") + "</div>",
      sums: '<div class="hcHeLine"><span class="activityRowName">Show summaries</span>' + Jo("sums") + qa(((S = gt.home) == null ? void 0 : S.sums) !== !1, "Show summaries", 'data-he-card="sums"') + "</div>" + rr("Width", "data-he-sums-width", nc() ? "fit" : "match", [["match", "Match the cards"], ["fit", "Fit the summaries"]]) + '<hr class="hcHeRule"><ul class="tfTrayList hcHeList" data-he-list="sums">' + rc().map(a).join("") + "</ul>"
    };
    we.querySelector("[data-he-body]").innerHTML = // the note about the areas page first (Matt, 12 Nov: "to the top of the rollover"), as Home Assistant's dialog has it
    '<p class="tfTrayNote hcHeAreasNote">You can rearrange your floors and areas in the order that best represents your house on the <button type="button" class="hcHeLink" data-path="/config/areas/dashboard">areas page</button>.</p><div class="tabs rubberTabs hcTrayTabs" role="tablist" aria-label="Edit Home page"><div class="rubberIndicator" aria-hidden="true"></div>' + i.map(([v, M]) => '<button class="tab segBtn' + (v === Qr ? " active" : "") + '" type="button" role="tab" aria-selected="' + (v === Qr) + '" data-he-tab="' + v + '">' + M + "</button>").join("") + '</div><div class="hcHeTabBody" role="tabpanel">' + d[Qr] + "</div>", ys(!1), ra(we);
  }
  const ir = (t) => {
    gt = { ...gt, ...t }, sa(), _e(), Cn();
  }, _a = (t) => ir({ home: { ...gt.home || {}, ...t } });
  function ks(t) {
    sr(), ro = t, Ca = !1, we.classList.toggle("open", t), we.toggleAttribute("inert", !t), g.classList.toggle("hcHomeEditing", t), b && L && Re();
    const e = p("dashEditNav"), a = we.querySelector(".tfTrayHead");
    e && t && (vs = e.parentElement, a.appendChild(e)), e && !t && vs && vs.appendChild(e), e && (e.classList.toggle("active", t), e.setAttribute("aria-pressed", String(t)), e.setAttribute("aria-label", t ? "Done editing Home" : "Edit Home page"), e.title = t ? "Done" : "Edit", e.innerHTML = t ? Zd : yi), t ? (ws = JSON.stringify(gt), Cn()) : ws && JSON.stringify(gt) !== ws && ba("Changes saved");
  }
  we.innerHTML = '<div class="tfTrayInner"><div class="tfTrayHead"><div class="activityTitle">Edit Home page</div></div><div class="hcHeBody" data-he-body></div></div>', g.appendChild(we);
  let io = null;
  const Ta = Object.assign(document.createElement("div"), { className: "card hcInfoPop", hidden: !0 });
  Ta.setAttribute("role", "dialog"), g.appendChild(Ta);
  function sr() {
    io && (io.setAttribute("aria-expanded", "false"), io = null, Ta.hidden = !0);
  }
  function ic(t) {
    const e = io;
    if (sr(), e === t) return;
    const [a, n] = ac[t.dataset.info];
    Ta.setAttribute("aria-label", a), Ta.innerHTML = '<div class="hcInfoTitle">' + F(a) + '</div><div class="hcInfoText">' + n + '</div><a class="hcInfoMore" href="' + Ef + '" target="_blank" rel="noopener">Learn more</a>', Ta.hidden = !1, io = t, t.setAttribute("aria-expanded", "true");
    const i = t.getBoundingClientRect(), d = Ta.offsetWidth, s = Ta.offsetHeight;
    Ta.style.left = Math.max(8, Math.min(innerWidth - d - 8, i.left + i.width / 2 - d / 2)) + "px", Ta.style.top = (i.bottom + 8 + s > innerHeight - 8 ? Math.max(8, i.top - 8 - s) : i.bottom + 8) + "px";
  }
  o.addEventListener("pointerdown", (t) => {
    io && !t.composedPath().some((e) => e === Ta || e === io) && sr();
  }, !0), o.addEventListener("keydown", (t) => {
    var e;
    if (t.key === "Escape") {
      if (io) {
        t.stopPropagation();
        const a = io;
        sr(), a.focus();
        return;
      }
      if (Ca) {
        t.stopPropagation(), Ca = !1, Cn();
        return;
      }
      ro && (t.stopPropagation(), ks(!1), (e = p("dashEditNav")) == null || e.focus());
    }
  }, !0);
  const Bf = (t) => t.dataset.heList === "favs" ? Et() : rc(), sc = (t, e) => t.dataset.heList === "favs" ? ir({ favourites: e }) : _a({ sumOrder: e });
  we.addEventListener("keydown", (t) => {
    var f;
    const e = t.target.closest("[data-he-grip]");
    if (!e || !["ArrowUp", "ArrowDown"].includes(t.key)) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement, i = Bf(n), d = i.indexOf(a.dataset.heId), s = d + (t.key === "ArrowUp" ? -1 : 1);
    s < 0 || s >= i.length || (i.splice(s, 0, i.splice(d, 1)[0]), sc(n, i), (f = we.querySelector('[data-he-list="' + n.dataset.heList + '"] [data-he-id="' + CSS.escape(a.dataset.heId) + '"] [data-he-grip]')) == null || f.focus());
  }), we.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-he-grip]");
    if (!e || t.button !== 0) return;
    t.preventDefault();
    const a = e.closest("[data-he-id]"), n = a.parentElement;
    a.classList.add("moving");
    const i = (s) => {
      const f = [...n.children].filter((k) => k !== a), h = f.find((k) => {
        const S = k.getBoundingClientRect();
        return s.clientY < S.top + S.height / 2;
      });
      h !== a.nextElementSibling && n.insertBefore(a, h || null);
    }, d = () => {
      removeEventListener("pointermove", i), removeEventListener("pointerup", d), a.classList.remove("moving"), sc(n, [...n.children].map((s) => s.dataset.heId).filter(Boolean));
    };
    addEventListener("pointermove", i), addEventListener("pointerup", d);
  }), we.addEventListener("input", (t) => {
    if (t.target.matches("[data-he-search]")) {
      const e = t.target.selectionStart;
      Cn();
      const a = we.querySelector("[data-he-search]");
      a.focus(), a.setSelectionRange(e, e);
    }
  }), we.addEventListener("click", (t) => {
    var j, P;
    const e = t.target, a = e.closest("[data-info]");
    if (a) {
      ic(a);
      return;
    }
    const n = e.closest("[data-he-tab]");
    if (n) {
      const O = we.querySelector(".hcTrayTabs .rubberIndicator"), T = { left: O.offsetLeft, width: O.offsetWidth };
      Qr = n.dataset.heTab, Ca = !1, sr(), Cn(), ys(!0, T), we.querySelector(".tfTrayInner").scrollTop = 0;
      return;
    }
    if (e.closest("[data-he-welcome]")) {
      _a({ welcome: !$i() });
      return;
    }
    const i = e.closest("[data-he-card]");
    if (i) {
      const O = i.dataset.heCard, T = ["sums", "favs"].includes(O) ? ((j = gt.home) == null ? void 0 : j[O]) !== !1 : !!((P = gt.home) != null && P[O]);
      _a({ [O]: !T });
      return;
    }
    const d = e.closest("[data-he-favs-as]");
    if (d) {
      _a({ favsAs: d.dataset.heFavsAs });
      return;
    }
    const s = e.closest("[data-he-sums-width]");
    if (s) {
      _a({ sumsWidth: s.dataset.heSumsWidth });
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
    const k = e.closest("[data-he-cards-as]");
    if (k) {
      _a({ cardsAs: k.dataset.heCardsAs });
      return;
    }
    const S = e.closest("[data-he-flag]");
    if (S) {
      const O = S.dataset.heFlag;
      _a({ [O]: !Xo(O) });
      return;
    }
    if (e.closest("[data-he-suggest]")) {
      ir({ suggest: !Rt() });
      return;
    }
    const v = e.closest("[data-he-sum]");
    if (v) {
      const O = v.dataset.heSum, T = !yn(O), Q = gt.home || {};
      _a(Wd.includes(O) ? { shownSums: T ? [...Q.shownSums || [], O] : (Q.shownSums || []).filter((R) => R !== O) } : { hiddenSums: T ? (Q.hiddenSums || []).filter((R) => R !== O) : [...Q.hiddenSums || [], O] });
      return;
    }
    const M = e.closest("[data-he-remove]");
    if (M) {
      ir({ favourites: Et().filter((O) => O !== M.dataset.heRemove) });
      return;
    }
    if (e.closest("[data-he-add]")) {
      Ca = !Ca, Cn(), Ca && we.querySelector("[data-he-search]").focus({ preventScroll: !0 });
      return;
    }
    const I = e.closest("[data-he-pick-id]");
    I && (Ca = !1, we.querySelector("[data-he-search]").value = "", ir({ favourites: [...Et(), I.dataset.hePickId] }));
  });
  function xe() {
    var k, S;
    const t = Je && g.classList.contains("tfBoard");
    if (Qt.classList.toggle("open", t), Qt.classList.toggle("tucked", t && Fa), Qt.toggleAttribute("inert", !t), t || (oo = !1), (!t || !g.classList.contains("tfEditing")) && hs(), fc(), !t) return;
    const e = Qt.querySelector("[data-tray-tuck]");
    e.innerHTML = Fa ? Bd : Yd, e.setAttribute("aria-expanded", String(!Fa)), e.setAttribute("aria-label", Fa ? "Show the edit tray" : "Tuck the edit tray away");
    const a = ne().hidden.filter((v) => !to.includes(v) && Ko().some((M) => M.key === v)), n = (v, M) => '<button class="tfTrayCard" type="button" data-tray-card="' + F(v) + '" aria-label="' + F(ga(v)) + ": drag it onto the board, or press to " + M + '"><span class="tfTrayGrip" aria-hidden="true">' + wi + "</span>" + F(ga(v)) + "</button>", i = a.filter((v) => !Tr.includes(v)), d = Tr.filter((v) => a.includes(v));
    no("welcome", '<div class="hcHeLine"><span class="activityRowName">Welcome message</span>' + Jo("welcome") + '<button class="switch' + (ne().welcome ? " on" : "") + '" type="button" role="switch" aria-checked="' + !!ne().welcome + '" aria-label="Welcome message" data-dash-welcome></button></div><div class="hcHeLine"><span class="activityRowName">Show summaries</span><button class="switch' + ((k = gt.dash) != null && k.sumsOff ? "" : " on") + '" type="button" role="switch" aria-checked="' + !((S = gt.dash) != null && S.sumsOff) + '" aria-label="Show summaries" data-dash-sums></button></div>'), requestAnimationFrame(() => ec(!1)), no("cards", '<div class="sectionLabel">Hidden and new cards</div>' + (i.length ? '<div class="tfTrayCards">' + i.map((v) => n(v, "put it back")).join("") + "</div>" : '<p class="tfTrayNote">Cards you hide, and new ones, wait here.</p>')), no("weather", '<div class="sectionLabel">Weather</div>' + (d.length ? `<p class="tfTrayNote">The Weather page's widgets. Drag one onto the board, or press to add it.</p><div class="tfTrayCards">` + d.map((v) => n(v, "add it")).join("") + "</div>" : '<p class="tfTrayNote">Every weather widget is on the board.</p>')), no("phone", '<div class="sectionLabel">Phone</div><p class="tfTrayNote">' + (ne().phone ? "Phones have an order of their own." : "Phones follow the board's order.") + '</p><button class="pill tfTrayAdd" type="button" data-phone-toggle aria-pressed="' + oo + '">' + (oo ? "Hide the phone" : "Show the phone") + "</button>");
    const s = new Set(gt.favHidden || []), f = Et(), h = [...f, ...[...s].filter((v) => !f.includes(v) && y[v])];
    if (no("favs", h.map((v) => Lf(v, s.has(v), f.includes(v))).join("") || '<li class="tfTrayNote">No favourites yet.</li>'), Qt.querySelector('[data-pick="tiles"]').hidden = !ao, Qt.querySelector("[data-tile-add]").setAttribute("aria-expanded", String(ao)), ao && no("tilepick", bs(Qt.querySelector("[data-tile-search]").value, (v) => yr.includes(v.split(".")[0]), new Set(Ur()), "data-tile-pick")), Qt.querySelector('[data-tray="roompick"]').hidden = !nr, Qt.querySelector("[data-room-add]").setAttribute("aria-expanded", String(nr)), nr) {
      const v = new Set(Ur());
      no("roompick", G.filter((M) => !v.has("room:" + M.id)).map((M) => '<li><button class="tfTrayPickItem" type="button" data-room-pick="' + F(M.id) + '"><span class="tfIcon"><span class="tfAreaGlyph"' + pe("area:" + M.id, M.icon || "mdi:texture-box", M.name) + '></span></span><span class="tfTrayName"><span class="activityRowName">' + F(M.name) + "</span></span></button></li>").join("") || '<li class="tfTrayNote">Every area is on the board.</li>');
    }
    Qt.querySelector('[data-pick="favs"]').hidden = !eo, Qt.querySelector("[data-fav-add]").setAttribute("aria-expanded", String(eo)), eo && no("pick", bs(Qt.querySelector("[data-fav-search]").value, (v) => tc.test(v), new Set(Et()), "data-fav-pick")), no("suggest", '<div><strong>Show suggestions</strong><div class="status">Fills the card after your favourites.</div></div><button class="switch' + (Rt() ? " on" : "") + '" type="button" role="switch" aria-checked="' + Rt() + '" data-fav-suggest aria-label="Show suggestions"></button>');
  }
  const _n = (t) => {
    gt = { ...gt, ...t }, sa(), _e(), xe();
  };
  function lc(t, e) {
    const a = gt, n = new Set(gt.favHidden || []);
    e ? n.delete(t) : n.add(t), _n({ favHidden: [...n] }), e ? ba(xt(t) + " put back") : ba(xt(t) + " hidden", $r(a));
  }
  const Rf = (t) => {
    const e = gt;
    _n({ favourites: Et().filter((a) => a !== t), favHidden: (gt.favHidden || []).filter((a) => a !== t) }), ba(xt(t) + " removed from favourites", $r(e));
  }, Pf = (t) => {
    _n({ favourites: [...Et().filter((e) => e !== t), t], favHidden: (gt.favHidden || []).filter((e) => e !== t) }), ba(xt(t) + " added to favourites");
  };
  Qt.addEventListener("click", (t) => {
    var a, n;
    const e = t.target.closest("button");
    if (e) {
      if (e.hasAttribute("data-tray-tab")) {
        us = e.dataset.trayTab, ec(!0), Qt.querySelector(".tfTrayInner").scrollTop = 0;
        return;
      }
      if (e.hasAttribute("data-tray-done")) ss(!1);
      else if (e.hasAttribute("data-info")) ic(e);
      else if (e.hasAttribute("data-dash-sums"))
        Zo({ ...Qi(), hidden: Qi().hidden.filter((i) => i !== "sums"), sumsOff: !((a = gt.dash) != null && a.sumsOff) }), _e(), xe();
      else if (e.hasAttribute("data-dash-welcome")) {
        const i = ne();
        Zo({ ...i, welcome: !i.welcome }), _e(), xe();
      } else e.hasAttribute("data-tray-tuck") ? (Fa = !Fa, xe()) : e.hasAttribute("data-phone-toggle") ? (oo = !oo, xe(), oo && ((n = aa.querySelector("[data-phone-key]")) == null || n.focus({ preventScroll: !0 }))) : e.dataset.trayCard ? t.detail === 0 && (ls(e.dataset.trayCard), xe()) : e.dataset.favEye ? lc(e.dataset.favEye, e.getAttribute("aria-pressed") !== "true") : e.dataset.favRemove ? Rf(e.dataset.favRemove) : e.hasAttribute("data-fav-add") ? (eo = !eo, xe(), eo && Qt.querySelector("[data-fav-search]").focus({ preventScroll: !0 })) : e.dataset.favPick ? Pf(e.dataset.favPick) : e.hasAttribute("data-tile-add") ? (ao = !ao, xe(), ao && Qt.querySelector("[data-tile-search]").focus({ preventScroll: !0 })) : e.dataset.tilePick ? Xl(e.dataset.tilePick) : e.hasAttribute("data-area-choose") ? Df() : e.hasAttribute("data-room-add") ? (nr = !nr, xe()) : e.dataset.roomPick ? Xl("room:" + e.dataset.roomPick) : e.hasAttribute("data-fav-suggest") && _n({ suggest: !Rt() });
    }
  }), Qt.addEventListener("input", (t) => {
    t.target.matches("[data-fav-search],[data-tile-search]") && xe();
  }), Qt.addEventListener("keydown", (t) => {
    var a, n;
    const e = !!((n = (a = t.target).closest) != null && n.call(a, '[data-pick="tiles"],[data-tile-add]'));
    t.key !== "Escape" || !(e ? ao : eo) || (t.stopPropagation(), e ? ao = !1 : eo = !1, xe(), Qt.querySelector(e ? "[data-tile-add]" : "[data-fav-add]").focus({ preventScroll: !0 }));
  });
  function cc(t, e, a, n) {
    t.preventDefault();
    const i = t.clientX, d = t.clientY;
    let s = null, f = 0;
    const h = Object.assign(document.createElement("div"), { className: "tfFavDrop" }), k = (v) => {
      if (!s) {
        if (Math.hypot(v.clientX - i, v.clientY - d) < 4) return;
        s = e.cloneNode(!0), s.classList.add("tfTrayGhost"), s.style.width = e.offsetWidth + "px", g.appendChild(s);
      }
      s.style.transform = "translate(" + (v.clientX - 24) + "px," + (v.clientY - 24) + "px)";
      const M = !Fa && v.clientX >= Qt.getBoundingClientRect().left;
      if (a === "card") {
        const P = L.getBoundingClientRect(), { w: O } = Yo(L.clientWidth);
        Yt = !M && v.clientX >= P.left && v.clientX <= P.right && v.clientY >= P.top + To ? { key: n, col: Math.max(0, Math.floor((v.clientX - P.left) / (O + se))), row: Math.max(0, Math.floor((v.clientY - P.top - To) / Aa)), fromTray: !0 } : null, f || (f = requestAnimationFrame(() => {
          f = 0, Re();
        }));
        return;
      }
      const I = L.querySelector(".tfDash-favs"), j = I == null ? void 0 : I.getBoundingClientRect();
      if (Ge = null, j && !M && v.clientX >= j.left && v.clientX <= j.right && v.clientY >= j.top && v.clientY <= j.bottom) {
        let P = 1 / 0;
        I.querySelectorAll('[data-k^="fav:"]').forEach((O, T) => {
          const Q = O.getBoundingClientRect(), R = Math.hypot(v.clientX - (Q.left + Q.width / 2), v.clientY - (Q.top + Q.height / 2));
          R < P && (P = R, Ge = { i: T, r: Q, after: v.clientX > Q.left + Q.width / 2 });
        }), Ge || (Ge = { i: 0, r: null, after: !1 });
      }
      Ge != null && Ge.r ? (h.isConnected || g.appendChild(h), Object.assign(h.style, { left: (Ge.after ? Ge.r.right : Ge.r.left) - 2 + "px", top: Ge.r.top + 8 + "px", height: Ge.r.height - 16 + "px" })) : h.remove();
    }, S = () => {
      if (window.removeEventListener("pointermove", k), window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), cancelAnimationFrame(f), s == null || s.remove(), h.remove(), a === "card") {
        if (!s) ls(n);
        else if (Yt != null && Yt.fromTray) {
          Re();
          const P = ga(n) + Zl(n), O = ne(), T = $o();
          Yt = null, Sn({ ...O, hidden: O.hidden.filter((Q) => Q !== n) }, T), ba(P);
        }
        Yt = null, Re(), _e(), xe();
        return;
      }
      if (!Ge) return;
      const v = new Set(gt.favHidden || []);
      v.delete(n);
      const M = Et().filter((P) => P !== n), I = M.filter((P) => !v.has(P)), j = I[Math.min(Ge.i + (Ge.after ? 1 : 0), I.length)];
      M.splice(j ? M.indexOf(j) : M.length, 0, n), Ge = null, _n({ favourites: M, favHidden: [...v] }), ba(xt(n) + " put back");
    };
    window.addEventListener("pointermove", k), window.addEventListener("pointerup", S), window.addEventListener("pointercancel", S);
  }
  const dc = {
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
  }, pc = 136, Hf = 288, Nf = 0.8, Of = { wx: "mdi:weather-partly-cloudy", areas: "mdi:home", favs: "mdi:star", act: "mdi:history", energy: "mdi:lightning-bolt", avg: "mdi:chart-line", aq: "mdi:air-filter", pollen: "mdi:flower-pollen", radar: "mdi:radar" }, aa = Object.assign(document.createElement("aside"), { className: "tfMiniPhone" });
  aa.setAttribute("aria-label", "Phone order"), aa.innerHTML = '<div class="tfPhoneHead"><div class="activityTitle">Phone</div><button class="tfTrayBtn" type="button" data-phone-close aria-label="Close the phone">' + hl + '</button></div><p class="tfTrayNote" data-phone="note"></p><div class="tfPhoneScreen"><div class="tfPhoneList" data-phone="list"></div></div>', g.appendChild(aa);
  let Ms = "";
  function fc() {
    var f;
    const t = oo && Je && g.classList.contains("tfBoard") && !Fa;
    if (aa.classList.toggle("open", t), aa.toggleAttribute("inert", !t), !t) return;
    const e = ts().filter((h) => !ne().hidden.includes(h.key)), a = e.length, n = (h) => Math.round(h * Nf * 10) / 10 + "px", i = (h, k) => {
      const S = h.el.classList.contains("tfDac"), v = h.tile ? S ? Hf : pc : dc[h.key] || pc;
      return '<button class="tfPhoneBlock' + (h.tile ? " tile" : "") + '" type="button" data-phone-key="' + F(h.key) + '" style="min-height:' + n(v) + '" aria-label="' + F(ga(h.key) + ", " + (k + 1) + " of " + a + ". Drag, or use the arrow keys, to move it") + '"><span class="tfIcon"' + (h.tile ? pe(h.key, pa(h.key)) : pe(h.key, Of[h.key])) + '></span><span class="tfPhoneName">' + F(ga(h.key)) + "</span></button>";
    }, d = '<div class="tfPhoneTitle">' + F(((f = L.querySelector(".tfDashTitle")) == null ? void 0 : f.textContent) || "") + '</div><div class="tfPhoneBlock fixed" style="min-height:' + n(dc.sums) + '"><span class="tfPhoneName">' + F(ga("sums")) + "</span></div>" + e.map(i).join("");
    if (aa.querySelector('[data-phone="note"]').innerHTML = ne().phone ? 'Phones use this order. <button class="tfLinkBtn" type="button" data-phone-reset>Follow the board</button>' : "Phones follow the board. Drag a card to give them an order of their own.", d === Ms) return;
    Ms = d;
    const s = aa.querySelector('[data-phone="list"]');
    s.innerHTML = d, ra(s);
  }
  function uc(t, e) {
    var a;
    Zo({ ...ne(), phone: t }), xe(), e && ((a = aa.querySelector('[data-phone-key="' + CSS.escape(e) + '"]')) == null || a.focus({ preventScroll: !0 }));
  }
  const Ss = () => [...aa.querySelectorAll("[data-phone-key]")].map((t) => t.dataset.phoneKey);
  function If(t, e) {
    t.preventDefault();
    const a = e.parentElement, n = aa.querySelector(".tfPhoneScreen"), i = Ss().join();
    e.classList.add("moving");
    const d = (f) => {
      const h = n.getBoundingClientRect();
      f.clientY > h.bottom - 40 ? n.scrollTop += 12 : f.clientY < h.top + 40 && (n.scrollTop -= 12);
      const k = [...a.querySelectorAll("[data-phone-key]")].find((M) => {
        const I = M.getBoundingClientRect();
        return M !== e && f.clientX >= I.left && f.clientX <= I.right && f.clientY >= I.top && f.clientY <= I.bottom;
      });
      if (!k) return;
      const S = k.getBoundingClientRect(), v = k.classList.contains("tile") ? f.clientX < S.left + S.width / 2 : f.clientY < S.top + S.height / 2;
      a.insertBefore(e, v ? k : k.nextSibling);
    }, s = () => {
      window.removeEventListener("pointermove", d), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), e.classList.remove("moving");
      const f = Ss();
      Ms = "", f.join() !== i ? uc(f) : fc();
    };
    window.addEventListener("pointermove", d), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s);
  }
  aa.addEventListener("pointerdown", (t) => {
    const e = t.target.closest("[data-phone-key]");
    e && t.button <= 0 && If(t, e);
  }), aa.addEventListener("click", (t) => {
    var a;
    const e = t.target.closest("button");
    if (e != null && e.hasAttribute("data-phone-close"))
      oo = !1, xe(), (a = Qt.querySelector("[data-phone-toggle]")) == null || a.focus({ preventScroll: !0 });
    else if (e != null && e.hasAttribute("data-phone-reset")) {
      const { phone: n, ...i } = ne();
      Zo(i), xe();
    }
  }), aa.addEventListener("keydown", (t) => {
    var s, f, h, k;
    if (t.key === "Escape") {
      t.stopPropagation(), oo = !1, xe(), (s = Qt.querySelector("[data-phone-toggle]")) == null || s.focus({ preventScroll: !0 });
      return;
    }
    const e = (k = (h = (f = t.target).closest) == null ? void 0 : h.call(f, "[data-phone-key]")) == null ? void 0 : k.dataset.phoneKey, a = { ArrowUp: -1, ArrowLeft: -1, ArrowDown: 1, ArrowRight: 1 }[t.key];
    if (!e || !a) return;
    t.preventDefault();
    const n = Ss(), i = n.indexOf(e), d = i + a;
    d < 0 || d >= n.length || ([n[i], n[d]] = [n[d], n[i]], uc(n, e));
  });
  function Ff(t, e) {
    t.preventDefault();
    const a = e.parentElement;
    e.classList.add("moving");
    const n = (d) => {
      const s = [...a.children].find((f) => {
        const h = f.getBoundingClientRect();
        return f !== e && d.clientY >= h.top && d.clientY <= h.bottom;
      });
      if (s) {
        const f = s.getBoundingClientRect();
        a.insertBefore(e, d.clientY < f.top + f.height / 2 ? s : s.nextSibling);
      }
    }, i = () => {
      window.removeEventListener("pointermove", n), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i), e.classList.remove("moving");
      const d = new Set(Et());
      ms.favs = null, _n({ favourites: [...a.children].map((s) => s.dataset.trayFav).filter((s) => d.has(s)) });
    };
    window.addEventListener("pointermove", n), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", i);
  }
  Qt.addEventListener("pointerdown", (t) => {
    if (t.button > 0) return;
    const e = t.target.closest("[data-tray-card]"), a = t.target.closest(".tfTrayFav");
    e ? cc(t, e, "card", e.dataset.trayCard) : a && t.target.closest(".tfTrayGrip") ? Ff(t, a) : a != null && a.classList.contains("off") && !t.target.closest("button") && cc(t, a, "fav", a.dataset.trayFav);
  });
  function qf(t) {
    if (!Je || t.button !== 0 || t.target.closest("[data-board-more],.tfBoardMenu,.tfFavHides")) return;
    const e = t.target.closest(".tfBoardItem"), a = e && Ko().find((Xt) => Xt.el === e);
    if (!a || to.includes(a.key)) return;
    const n = Uo.get(a.key), { w: i } = Yo(L.clientWidth);
    if (!n) return;
    t.preventDefault(), Ia();
    const d = t.clientX, s = t.clientY;
    let f = !1, h = 0;
    const k = ye.drag, S = We();
    let v = 0, M = 0, I = 0, j = 0, P = 0, O = 0, T = S || k.stick === 0, Q = 0;
    const R = (Xt, ge, Lt, Vt) => {
      e.style.transform = "translate(" + I.toFixed(2) + "px," + j.toFixed(2) + "px) rotate(" + Xt.toFixed(2) + "deg) rotate(" + ge + "rad) scale(" + Lt.toFixed(4) + "," + Vt.toFixed(4) + ") rotate(" + -ge + "rad)";
    }, Mt = () => {
      if (Q = requestAnimationFrame(Mt), S) {
        I = v, j = M, R(0, 0, 1, 1);
        return;
      }
      if (!T) {
        const Ue = Math.min(Math.hypot(v, M) / Math.max(1, k.stick), 1);
        I = v * 0.35, j = M * 0.35, R(0, Math.atan2(M, v), 1 + 0.155 * Ue, 1 - 0.1 * Ue);
        return;
      }
      P = rd(P, v - I, k.pull / 100, k.keep / 100), O = rd(O, M - j, k.pull / 100, k.keep / 100), I += P, j += O;
      const Xt = Math.hypot(P, O), ge = Math.min(Xt / 48, 1), Lt = Math.max(-5, Math.min(k.tilt, P * 0.32)), Vt = 1 + k.lift / 100;
      R(Lt, Math.atan2(O, P), Vt * (1 + 0.1 * ge), Vt * (1 - 0.063 * ge));
    }, Kt = (Xt) => {
      if (v = Xt.clientX - d, M = Xt.clientY - s, !f) {
        if (Math.hypot(v, M) < 4) return;
        f = !0, Yt = { key: a.key, col: n.col, row: n.row }, e.classList.add("tfDragging", "mvDrag"), Q = requestAnimationFrame(Mt);
      }
      !T && Math.hypot(v, M) > k.stick && (T = !0, P = v * 0.085, O = M * 0.085), Yt.col = Math.round((n.x + v) / (i + se)), Yt.row = Math.round((n.y + M - To) / Aa), h || (h = requestAnimationFrame(() => {
        h = 0, Re();
      }));
    }, Nt = () => {
      var ii;
      if (window.removeEventListener("pointermove", Kt), window.removeEventListener("pointerup", Nt), window.removeEventListener("pointercancel", Nt), !f) return;
      const Xt = (hr) => {
        hr.preventDefault(), hr.stopImmediatePropagation();
      };
      window.addEventListener("click", Xt, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", Xt, { capture: !0 }), 300), cancelAnimationFrame(h), cancelAnimationFrame(Q);
      const ge = e.getBoundingClientRect(), Lt = a.key;
      e.style.transition = "none", Re(), e.classList.remove("tfDragging", "mvDrag"), e.style.transform = "", Yt = null, Sn(ne(), $o()), Re(), _e();
      const Vt = (ii = Ko().find((hr) => hr.key === Lt)) == null ? void 0 : ii.el;
      if (requestAnimationFrame(() => {
        e.style.transition = "", Vt && (Vt.style.transition = "");
      }), !Vt || S) return;
      Vt.style.transition = "none";
      const Ue = Vt.getBoundingClientRect(), Va = ge.left + ge.width / 2 - (Ue.left + Ue.width / 2), ri = ge.top + ge.height / 2 - (Ue.top + Ue.height / 2);
      Vt.style.zIndex = "20", Vt.animate([{ transform: "translate(" + Va + "px," + ri + "px) scale(" + (1 + k.lift / 100) + ")" }, { transform: "none" }], { duration: k.slide, easing: ke.land }).finished.then(() => {
        Vt.style.zIndex = "", id(Vt);
      }, () => {
        Vt.style.zIndex = "";
      });
    };
    window.addEventListener("pointermove", Kt), window.addEventListener("pointerup", Nt), window.addEventListener("pointercancel", Nt);
  }
  function hc(t = !1) {
    const e = L == null ? void 0 : L.querySelector(".tfDashGraph svg[data-graph]");
    if (!(e != null && e.clientWidth)) return;
    const a = e.dataset.graph + "@" + e.clientWidth + "x" + e.clientHeight + "@" + Math.floor(Date.now() / 3e5);
    if (e.dataset.drawn === a) return;
    const n = !e.dataset.drawn;
    e.dataset.drawn = a;
    const i = Cl.find((d) => d.id === e.dataset.graph);
    i ? zp(e, i).then(() => {
      (t || n) && Gp(e);
    }) : Hc(e.dataset.graph, e).then(() => {
      t && Ll(e);
    });
  }
  function mc() {
    var h, k, S;
    qt = Ar.model(c(), { madeUp: !A }), Ht(), y = qt.states, y[(h = gt.sources) == null ? void 0 : h.grid] && (qt.grid = gt.sources.grid), y[(k = gt.sources) == null ? void 0 : k.alarm] && (qt.security.alarms = [gt.sources.alarm]), bt.forEach((v, M) => {
      const I = y[M], j = (I == null ? void 0 : I.attributes) || {};
      if (!I || Date.now() - v.at > 2 * 60 * 1e3) {
        bt.delete(M);
        return;
      }
      v.pos != null && I.state !== "opening" && I.state !== "closing" && Math.abs(Ne(M) - v.pos) < 1 && delete v.pos, v.tilt != null && Math.abs((j.current_tilt_position ?? -1) - v.tilt) < 1 && delete v.tilt, v.pos == null && v.tilt == null && bt.delete(M);
    });
    const t = [];
    let e = 0;
    const a = Tt();
    G = a.filter((v) => v.room).map((v) => v.room), G.some((v) => v.id === N) || (N = ((S = G[0]) == null ? void 0 : S.id) || null);
    const n = Z === "weather" ? { key: "weather", name: "Weather" } : Z && a.find((v) => v.key === Z);
    if (n || (Z = null), g.classList.toggle("tfAreaOpen", !!n), g.classList.toggle("tfWeatherOpen", (n == null ? void 0 : n.key) === "weather"), g.classList.toggle("tfDash", !n), _t = /* @__PURE__ */ new Map(), qt.rooms.forEach((v) => [...v.actions, ...v.plugs, ...v.readings, ...v.openings, ...v.solar, ...v.plants.flatMap((M) => [M.id, ...M.readings])].forEach((M) => _t.set(M, v.name))), !n) return Kp(t, ma());
    if (t.push({ key: "areahead", html: Wf(n, ++e) }), n.key === "weather")
      return t.weather = ++e, t;
    const i = n.ids, d = n.room ? n.room.id : n.key, s = n.room;
    s != null && s.solar.length && t.push({ key: "energy:" + s.id, html: Nr(s, ++e) }), s && (s.readings.length || s.power != null) && t.push({ key: "readings:" + s.id, html: Un(s, ++e) }), s == null || s.plants.forEach((v) => t.push({ key: "plant:" + v.id, html: Co(v, ++e) }));
    const f = [...i, ...((s == null ? void 0 : s.plugs) || []).filter((v) => !i.includes(v))];
    return f.length && t.push({ key: "block:" + d, order: ++e, tiles: f.map((v) => ({ key: v, html: hn(v) })) }), t;
  }
  const Wf = (t, e) => '<div class="settingsHeader tfAreaHead" data-tf data-k="areahead" style="order:' + e + '"><button class="back" type="button" data-area-back aria-label="Back to the house">' + Bd + '</button><div class="settingsTitle">' + F(t.name) + "</div></div>";
  let gc = 0, bc = null;
  const wc = (t) => t === "weather" ? Ba.wx : t.startsWith("room:") && L.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || L.querySelector(".tfAreas");
  function vc(t) {
    var e, a;
    Z || (gc = cr().scrollTop, bc = ((e = wc(t)) == null ? void 0 : e.getBoundingClientRect().top) ?? null), Z = t, t.startsWith("room:") && (N = t.slice(5)), so(), cr().scrollTop = 0, (a = L.querySelector("[data-area-back]")) == null || a.focus({ preventScroll: !0 });
  }
  let lr = null;
  function Vf(t, e) {
    if (lr == null || lr(), e == null) return;
    const a = cr(), n = performance.now() + 1500, i = ["wheel", "touchstart", "pointerdown", "keydown"];
    let d = 0;
    const s = () => {
      cancelAnimationFrame(d), i.forEach((h) => window.removeEventListener(h, s, !0)), lr = null;
    }, f = () => {
      const h = t();
      if (h != null && h.isConnected) {
        const k = h.getBoundingClientRect().top - e;
        Math.abs(k) > 0.5 && (a.scrollTop += k);
      }
      performance.now() < n ? d = requestAnimationFrame(f) : s();
    };
    i.forEach((h) => window.addEventListener(h, s, { capture: !0, passive: !0 })), lr = s, f();
  }
  function As() {
    var a;
    const t = Z;
    Z = null, so(), cr().scrollTop = gc, Vf(() => wc(t), bc);
    const e = t.startsWith("room:") ? L.querySelector('.tfRoomTile[data-k="' + CSS.escape(t) + '"]') || L.querySelector('.tfAreaPanel[data-area="' + CSS.escape(t.slice(5)) + '"]') : t === "weather" ? Ba.wx.querySelector(".wbOpenPage") : L.querySelector('[data-k="sum:' + CSS.escape(t) + '"]');
    (a = (e == null ? void 0 : e.querySelector("[data-go]")) || e) == null || a.focus({ preventScroll: !0 });
  }
  const jf = (t) => t.wrap ? t.wrap(t.tiles.map((e) => e.html).join(""), t) : '<div class="tfBlock" data-tf data-k="' + F(t.key) + '" style="order:' + t.order + '"><div class="tfActions">' + t.tiles.map((e) => e.html).join("") + "</div></div>", yc = (t) => t.map((e) => e.key + (e.tiles ? "(" + e.tiles.map((a) => a.key).join(",") + ")" : "")).join(";");
  function cr() {
    for (let t = g.parentElement || g.getRootNode().host; t; t = t.parentElement || t.getRootNode().host) {
      const e = getComputedStyle(t).overflowY;
      if ((e === "auto" || e === "scroll") && t.scrollHeight > t.clientHeight) return t;
    }
    return document.scrollingElement;
  }
  function xc(t) {
    const e = cr(), a = (f) => {
      const h = f.getBoundingClientRect();
      return h.height && h.bottom > 0 && h.top < window.innerHeight;
    }, n = [...L.children, ...L.querySelectorAll(".tfDashTiles > *")].find((f) => !f.matches(".tfDashTiles") && a(f)), i = n == null ? void 0 : n.dataset.k, d = n == null ? void 0 : n.getBoundingClientRect().top;
    t();
    const s = n != null && n.isConnected ? n : i && L.querySelector('[data-k="' + CSS.escape(i) + '"]');
    s != null && s.isConnected && d != null && (e.scrollTop += s.getBoundingClientRect().top - d);
  }
  function so() {
    if (!b || !L) return;
    const t = mc(), e = (i) => {
      var d;
      return (((d = i.closest("[data-k]")) == null ? void 0 : d.dataset.k) || "") + "|" + i.dataset.iconFor + "|" + (i.dataset.iconName || "");
    }, a = /* @__PURE__ */ new Map();
    L.querySelectorAll("[data-tf] [data-icon-for]").forEach((i) => {
      i.firstElementChild && (a.get(e(i)) || a.set(e(i), []).get(e(i))).push(i.firstElementChild);
    }), L.querySelectorAll("[data-tf]").forEach((i) => i.remove()), la.clear();
    const n = document.createElement("div");
    n.innerHTML = t.map((i) => i.tiles ? jf(i) : i.html).join(""), t.forEach((i) => i.tiles ? i.tiles.forEach((d) => la.set(d.key, d.html)) : la.set(i.key, i.html)), Sr = yc(t), n.querySelectorAll("[data-icon-for]").forEach((i) => {
      var s;
      const d = !i.firstElementChild && ((s = a.get(e(i))) == null ? void 0 : s.shift());
      d && i.appendChild(d);
    }), L.append(...n.children), _r(t.weather), Dr(), ns.disconnect(), Re(), ra(L), Bs(L), $e(L), q(), Nc(), Dn(), Cc(), requestAnimationFrame(nt);
  }
  const kc = (t) => {
    var a;
    const e = o.activeElement && t.contains(o.activeElement) ? o.activeElement : null;
    return e && { label: e.getAttribute("aria-label"), act: (a = e.dataset) == null ? void 0 : a.act };
  }, Cs = (t, e) => {
    var a;
    e && ((a = e.label && t.querySelector('[aria-label="' + CSS.escape(e.label) + '"]') || e.act && t.querySelector('[data-act="' + CSS.escape(e.act) + '"]')) == null || a.focus({ preventScroll: !0 }));
  };
  function _s(t, e) {
    if (!t.querySelector(".tfDacPad"))
      return t.replaceWith(e), e;
    const a = t.matches(".tfDac") && t.querySelector(":scope > .tfDacPad"), n = e.querySelector(":scope > .tfDacPad");
    if (a)
      return (n == null ? void 0 : n.dataset.dac) !== a.dataset.dac ? (t.replaceWith(e), e) : (t.querySelector(":scope > .tfActionHead").replaceWith(e.querySelector(":scope > .tfActionHead")), t.classList.toggle("on", e.classList.contains("on")), ["data-light", "data-tone"].forEach((s) => e.hasAttribute(s) ? t.setAttribute(s, e.getAttribute(s)) : t.removeAttribute(s)), [...t.style].filter((s) => s.startsWith("--") && !s.startsWith("--tf-")).forEach((s) => t.style.removeProperty(s)), [...e.style].forEach((s) => t.style.setProperty(s, e.style.getPropertyValue(s))), t);
    const i = (s) => {
      var f;
      return ((f = s.dataset) == null ? void 0 : f.iconFor) !== void 0;
    };
    if (i(t) && i(e) && !e.children.length && t.dataset.iconFor === e.dataset.iconFor && t.dataset.iconName === e.dataset.iconName && t.firstElementChild)
      return [...t.attributes].forEach((s) => {
        e.hasAttribute(s.name) || t.removeAttribute(s.name);
      }), [...e.attributes].forEach((s) => {
        t.getAttribute(s.name) !== s.value && t.setAttribute(s.name, s.value);
      }), t;
    if (t.tagName !== e.tagName || t.children.length !== e.children.length)
      return t.replaceWith(e), e;
    [...t.attributes].forEach((s) => {
      e.hasAttribute(s.name) || t.removeAttribute(s.name);
    }), [...e.attributes].forEach((s) => t.setAttribute(s.name, s.value));
    const d = [...e.children];
    return [...t.children].forEach((s, f) => _s(s, d[f])), t;
  }
  function zf(t, e) {
    const a = document.createElement("div");
    a.innerHTML = e;
    const n = kc(t), i = _s(t, a.firstElementChild);
    ra(i), Bs(i), $e(i), Cs(i, n);
  }
  function _e() {
    !b || !L || Yt || xc(Gf);
  }
  function Gf() {
    if (!L.querySelector("[data-tf]")) {
      so();
      return;
    }
    const t = mc();
    if (yc(t) !== Sr) {
      so();
      return;
    }
    const e = (a) => [...it.keys()].some((n) => {
      const i = n.slice(n.indexOf("|") + 1);
      return a === i || a.endsWith(":" + i);
    });
    t.forEach((a) => (a.tiles || [a]).forEach((n) => {
      if (la.get(n.key) === n.html || e(n.key)) return;
      const i = L.querySelector('[data-k="' + CSS.escape(n.key) + '"]');
      i && (la.set(n.key, n.html), zf(i, n.html), n.key.startsWith("energy:") && Nc());
    })), Dn(), Cc(), wn(), q(), Me == null || Me.update(), Se == null || Se.forEach((a) => a.update()), g.classList.contains("tfDash") && Gr(), requestAnimationFrame(nt);
  }
  const Tn = {
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
  }, Uf = (t) => La(t) ? '<div class="tfMoreNote">Made up for this page</div>' : "";
  function Yf(t, e = {}, a = !1) {
    return '<div class="tfMoreList">' + t.map((n) => '<div class="tfMoreGroup"><div class="tfMoreGroupName">' + F(n.name) + '</div><div class="tfMoreTiles' + (a ? " single" : "") + '">' + n.ids.map((i) => ae(i, e)).join("") + "</div></div>").join("") + "</div>";
  }
  const Ct = document.createElement("div");
  Ct.className = "tfMoreBackdrop", Ct.hidden = !0, g.appendChild(Ct);
  const Da = document.createElement("div");
  Da.className = "tfMoreBackdrop tfMoreUnder", Da.hidden = !0, g.insertBefore(Da, Ct);
  const Ts = (t, e) => {
    for (let a = t; a && a !== Ct; a = a.parentElement) {
      const n = getComputedStyle(a).overflowY;
      if ((n === "auto" || n === "scroll") && a.scrollHeight > a.clientHeight + 1 && (e < 0 ? a.scrollTop > 0 : a.scrollTop + a.clientHeight < a.scrollHeight - 1)) return !0;
    }
    return !1;
  };
  let dr = null;
  Ct.addEventListener("touchstart", (t) => {
    dr = { x: t.touches[0].clientX, y: t.touches[0].clientY };
  }, { passive: !0 }), Ct.addEventListener("touchmove", (t) => {
    var i, d;
    if (!dr || t.touches.length > 1 || (d = (i = t.target).closest) != null && d.call(i, "input,textarea,select")) return;
    const e = t.touches[0], a = dr.x - e.clientX, n = dr.y - e.clientY;
    dr = { x: e.clientX, y: e.clientY }, Math.abs(n) >= Math.abs(a) && !Ts(t.target, n) && t.preventDefault();
  }, { passive: !1 }), Ct.addEventListener("wheel", (t) => {
    var e, a;
    Math.abs(t.deltaX) > Math.abs(t.deltaY) && ((a = (e = t.target).closest) != null && a.call(e, "[data-more-pages]")) || Ts(t.target, t.deltaY) || t.preventDefault();
  }, { passive: !1 });
  const Zf = () => window.innerWidth <= 620;
  let Le = null;
  Ct.addEventListener("pointerdown", (t) => {
    const e = Ct.querySelector(".tfMorePair");
    !Zf() || !e || !e.contains(t.target) || !t.isPrimary || Ct._closing || t.target.closest("input,textarea,select,.tfDacPad,[data-cover-art],.tfMoreSide") || (Le = { x: t.clientX, y: t.clientY, t: performance.now(), dy: 0, v: 0, pair: e, from: t.target, grab: t.target.matches(".tfMore") || !!t.target.closest(".tfMoreHead") });
  }, !0), Ct.addEventListener("pointermove", (t) => {
    if (!Le || !t.isPrimary) return;
    const e = t.clientY - Le.y, a = performance.now();
    if (!Le.on) {
      if (Math.abs(t.clientX - Le.x) > 8 || e < -8 || !Le.grab && Ts(Le.from, -1)) {
        Le = null;
        return;
      }
      if (e < 8) return;
      Le.on = !0;
      try {
        Ct.setPointerCapture(t.pointerId);
      } catch {
      }
    }
    Le.v = (e - Le.dy) / Math.max(1, a - Le.t), Le.dy = e, Le.t = a, Le.pair.style.transform = "translateY(" + Math.max(0, e) + "px)";
  });
  const Mc = (t) => {
    if (!Le || !t.isPrimary) return;
    const e = Le;
    if (Le = null, !e.on) return;
    const a = (k) => {
      k.preventDefault(), k.stopImmediatePropagation();
    };
    window.addEventListener("click", a, { capture: !0, once: !0 }), setTimeout(() => window.removeEventListener("click", a, { capture: !0 }), 300);
    const n = t.type === "pointerup" && (e.dy > 120 || e.v > 0.5), i = "translateY(" + Math.max(0, e.dy) + "px)";
    if (e.pair.style.transform = "", !n || We()) {
      n ? Is() : e.pair.animate([{ transform: i }, { transform: "none" }], { duration: 320, easing: ke.spring });
      return;
    }
    const d = D;
    Ct._closing = !0, Ct.style.pointerEvents = "none", Ct.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: ke.exit, fill: "forwards" });
    const s = e.pair.animate([{ transform: i }, { transform: "translateY(calc(100% + 40px))" }], { duration: 220, easing: ke.exit, fill: "forwards" });
    let f = !1;
    const h = () => {
      f || (f = !0, Ct._closing = !1, Ct.style.pointerEvents = "", Ct.getAnimations().forEach((k) => k.cancel()), e.pair.getAnimations().forEach((k) => k.cancel()), D === d && Is());
    };
    s.finished.then(h, h), setTimeout(h, 300);
  };
  Ct.addEventListener("pointerup", Mc), Ct.addEventListener("pointercancel", Mc);
  function Ds() {
    const t = Ct.querySelector(".tfMorePair"), e = Ct.querySelector(".tfMore");
    t == null || t.classList.toggle("over", window.innerWidth <= 620 || (window.innerWidth - e.offsetWidth) / 2 < 328);
  }
  window.addEventListener("resize", Ds, { passive: !0 }), b && Nn();
  let Wa = [];
  const Kf = (t) => t === "favourites" || t.startsWith("summary:") || t.startsWith("group:");
  function Xf(t) {
    const e = (h, k = "") => '<div class="tfMoreHead">' + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Ed + "</button>" : "") + '<div class="activityTitle" id="tfMoreTitle">' + F(h) + "</div>" + k + '<button class="tfBack" type="button" data-more-close aria-label="Close">' + Rd + "</button></div>", a = (h, k) => '<div class="tfMoreNow"><div class="tfMoreState">' + F(h) + "</div></div>", n = Yf;
    if (t === "favourites") {
      const h = Et(), k = new Set(h), S = [{ name: "Starred", ids: h }, { name: "Home", ids: qt.homeVacuums }, { name: "Security", ids: [...qt.security.alarms, ...qt.security.locks] }, ...qt.rooms.map((v) => ({ name: v.name, ids: [...v.actions, ...v.plugs] }))].map((v, M) => M ? { ...v, ids: v.ids.filter((I) => !k.has(I)) } : v).filter((v) => v.ids.length);
      return [e("Favourites"), a(h.length ? h.length + " starred" : "None starred"), n(S, { star: !0 }, !0)];
    }
    const i = (h, { name: k = "", alert: S = !1, plain: v = !1 } = {}) => {
      const M = v ? [] : h.filter((P) => yr.includes(P.split(".")[0])), I = h.filter((P) => !M.includes(P)), j = (P) => P.startsWith("vacuum.") && jt(P).battery_level != null ? jt(P).battery_level + "%" : null;
      return '<div class="tfMoreGroup">' + (k ? '<div class="tfMoreGroupName">' + F(k) + "</div>" : "") + '<div class="tfMoreActions">' + M.map((P) => hn(P, !0)).join("") + I.map((P) => ae(P, { plain: v, alert: S, say: v ? j(P) : null })).join("") + "</div></div>";
    };
    if (t.startsWith("summary:")) {
      const h = ma().find((M) => M.key === t.slice(8));
      if (!h) return null;
      const k = h.key === "light" ? (h.groups || []).flatMap((M) => M.ids) : [], S = k.some((M) => {
        var I;
        return ((I = y[M]) == null ? void 0 : I.state) === "on";
      }), v = k.length ? '<button class="primary" type="button" data-acts="' + pn(k.map((M) => ["light", S ? "turn_off" : "turn_on", M])) + '">' + (S ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(h.name), '<div class="tfMoreNowRow">' + a(h.value) + v + "</div>", ...(h.groups || []).map((M) => i(M.ids, { name: M.name === h.name ? "" : M.name, alert: M.alert, plain: h.plain }))];
    }
    if (t.startsWith("group:")) {
      const [, h, k] = t.split(":"), S = qt.rooms.find((I) => I.id === h), v = S && Be(S).find((I) => I.key === k);
      if (!v) return null;
      const M = v.acts ? '<button class="primary" type="button" data-acts="' + pn(v.acts) + '">' + (v.on ? "Turn all off" : "Turn all on") + "</button>" : "";
      return [e(S.name + " " + v.label.toLowerCase()), '<div class="tfMoreNowRow">' + a(v.value) + M + "</div>", i(vn(S, k))];
    }
    const d = t.split(".")[0];
    y[t];
    const s = yr.includes(d) ? Ja(t) : Sc(t), f = (D == null ? void 0 : D.page) || 0;
    return [
      $f(t, s),
      '<div class="tfMorePages" data-more-pages><section class="tfMorePage" aria-label="Control">' + Qf(t) + (d === "plant" ? nu(t).join("") : "") + s.sections.filter(Boolean).join("") + '</section><section class="tfMorePage" aria-label="Info">' + eu(t) + "</section></div>",
      // the pages' icons in place of their dots (Matt, 12 Nov): Control's sliders and Info's (i), a small segmented pair
      '<div class="tfMoreDots tfMorePageIcons" role="tablist" aria-label="Pages">' + [["Control", a0], ["Info", Ud]].map(([h, k], S) => '<button type="button" role="tab" aria-selected="' + (S === f) + '" aria-label="' + h + '" title="' + h + '" data-more-page="' + S + '"' + (S === f ? "" : ' tabindex="-1"') + ">" + k + "</button>").join("") + "</div>"
    ];
  }
  function $f(t, e, a) {
    var s, f, h, k, S;
    const n = (s = qt.areaOf) == null ? void 0 : s.call(qt, t), i = n && (((f = qt.rooms.find((v) => v.id === n)) == null ? void 0 : f.name) || ((S = (k = (h = c()) == null ? void 0 : h.areas) == null ? void 0 : k[n]) == null ? void 0 : S.name)) || "", d = e.button ? Wo(t, e) : '<div class="tfIcon"' + pe(t, e.icon) + "></div>";
    return '<div class="tfMoreHead tfMoreTileHead' + (e.on ? " on" : "") + '"' + (e.tone ? ' data-tone="' + e.tone + '"' : "") + cn(t) + ">" + (D != null && D.back ? '<button class="tfBack" type="button" data-more-back aria-label="Back">' + Ed + "</button>" : "") + d + '<div class="tfName"><span class="activityRowName" id="tfMoreTitle">' + F(xt(t)) + "</span>" + (i ? '<span class="activityRowMeta">' + F(i) + "</span>" : "") + '</div><button class="tfBack" type="button" data-more-close aria-label="Close">' + Rd + "</button></div>";
  }
  const Jf = ["lock", "alarm_control_panel", "switch", "input_boolean", "fan", "valve", "media_player", "automation", "script", "scene", "button"];
  function Sc(t) {
    var i;
    const e = t.split(".")[0], a = ((i = y[t]) == null ? void 0 : i.state) === "on", n = ul.includes(e) ? { act: Gt(e, "toggle", t), label: "Turn " + xt(t) + (a ? " off" : " on") } : e === "scene" || e === "script" ? { act: Gt(e, "turn_on", t), label: "Run " + xt(t) } : null;
    return { sections: [], on: a, button: n, icon: pa(t) };
  }
  function Qf(t) {
    const e = t.split(".")[0];
    if (Jf.includes(e) || e === "light" && !gn(t)) {
      const i = yr.includes(e) ? Ja(t) : Sc(t);
      return i != null && i.button ? '<div class="tfMoreSpace tfMoreSwitch' + (i.on ? " on" : "") + '"' + (i.tone ? ' data-tone="' + i.tone + '"' : "") + cn(t) + ">" + Wo(t, i) + "</div>" : "";
    }
    if (e === "cover") return '<div class="tfMoreSpace tfMoreFill"><div data-cover-art="' + F(t) + '"></div></div>';
    if (e === "light" && gn(t)) return '<div class="tfMoreSpace tfMoreFill"><div class="tfDacPad" data-dac="more:' + F(t) + '"></div></div>';
    const { big: a, lines: n } = tu(t);
    return '<div class="tfMoreSpace"><div class="tfMoreBig' + (Oa("pos", t) != null ? " live" : "") + '"><span class="tfMoreNum">' + F(a[0]) + "</span>" + (a[1] ? '<span class="tfMoreUnit">' + F(a[1]) + "</span>" : "") + '</div><div class="tfMoreFacts">' + n.map(([i, d]) => '<div class="tfMoreFact"><span>' + F(i) + "</span><span>" + F(d) + "</span></div>").join("") + "</div></div>";
  }
  function tu(t) {
    var S;
    const e = y[t], a = jt(t), n = t.split(".")[0], i = (((S = Tn[n]) == null ? void 0 : S.call(Tn, a)) || []).filter(([, v]) => v != null && v !== ""), d = (v) => {
      const M = i.findIndex(([I]) => I === v);
      return M < 0 ? null : i.splice(M, 1)[0][1];
    }, s = (v) => {
      const M = String(v).match(/^(-?[\d.,]+)\s*(.*)$/);
      return M ? [M[1], M[2]] : [String(v), ""];
    }, f = () => [Jt(String(e.state).replace(/_/g, " ")), ""];
    let h;
    n === "light" ? (d("Brightness"), h = e.state === "on" && Ka(t) ? [String(xo(e)), "%"] : f()) : n === "climate" ? h = s(d("Current temperature") || Ve(a.current_temperature) + " °C") : n === "cover" ? (d("Position"), h = a.current_position != null ? [String(Ne(t)), "%"] : f()) : n === "humidifier" ? h = s(d("Current humidity") || e.state) : n === "vacuum" ? h = s(d("Battery") || e.state) : n === "plant" ? h = s(d("Moisture") || e.state) : ["media_player", "lock", "alarm_control_panel", "valve"].includes(n) ? h = f() : h = s(e.state + (a.unit_of_measurement ? " " + a.unit_of_measurement : ""));
    const k = i.length ? i.slice(0, 4) : [["State", Te(t)]];
    return { big: h, lines: k };
  }
  function eu(t) {
    var k, S, v, M, I, j, P;
    const e = y[t], a = c(), n = (k = a == null ? void 0 : a.entities) == null ? void 0 : k[t], i = n != null && n.device_id ? (S = a == null ? void 0 : a.devices) == null ? void 0 : S[n.device_id] : null, d = '<div class="tfMoreGraph"><div class="tfMoreGroupName">Last 24 hours</div><svg class="tfGraph tfDay" data-day="' + F(t) + '" role="img" aria-label="' + F(xt(t)) + ', last 24 hours"></svg></div>', s = (v = qt.areaOf) == null ? void 0 : v.call(qt, t), f = s && (((M = qt.rooms.find((O) => O.id === s)) == null ? void 0 : M.name) || ((j = (I = a == null ? void 0 : a.areas) == null ? void 0 : I[s]) == null ? void 0 : j.name)) || "", h = [
      ...((P = Tn[t.split(".")[0]]) == null ? void 0 : P.call(Tn, jt(t))) || [],
      ["Changed", e.last_changed && Rr(Date.parse(e.last_changed))],
      ["Area", f],
      ["Device", i && (i.name_by_user || i.name)],
      ["Integration", (n == null ? void 0 : n.platform) && Jt(n.platform.replace(/_/g, " "))],
      ["Entity", t]
    ].filter(([, O]) => O != null && O !== "");
    return d + '<div class="tfMoreRows">' + h.map(([O, T]) => '<div class="tfMoreRow"><span>' + F(O) + "</span><span>" + F(T) + "</span></div>").join("") + "</div>" + Uf(t) + (i ? '<button class="tfDetailsBtn tfMoreLink" type="button" data-path="/config/devices/device/' + F(n.device_id) + '"><span>Device page</span>' + Yd + "</button>" : "");
  }
  const au = () => "";
  let Ls = "";
  function Es(t) {
    var e;
    D && (D.details = t, Dn(), (e = Ct.querySelector(t ? "[data-details-close]" : "[data-details]")) == null || e.focus({ preventScroll: !0 }));
  }
  const ti = (t) => {
    const e = y[t], a = Ne(t), n = Mo(t);
    return { kind: fl(e), name: xt(t), text: Te(t), pos: a, target: Math.abs(n - a) > 0.5 ? n : null, moving: e.state === "opening" || e.state === "closing", tilt: Vn(t) ?? 100, canSet: Ae(t, Fd) };
  };
  function Bs(t) {
    t.querySelectorAll("[data-cover-art]").forEach((e) => {
      const a = e.dataset.coverArt, n = e.dataset.artKey || "more:" + a;
      let i = It.get(n);
      i || (i = qm({ onMove: (d) => pr(a, d), onSet: (d) => {
        pr(a, d), fr("pos", a);
      } }), i.coverId = a, It.set(n, i)), e.replaceWith(i.el), i.update(ti(a));
    });
  }
  const Ac = (t) => [...It.values()].filter((e) => e.coverId === t), Rs = () => It.forEach((t) => {
    y[t.coverId] && t.update(ti(t.coverId));
  }), Cc = () => {
    It.forEach((t, e) => {
      t.el.isConnected || (t.destroy(), It.delete(e));
    }), Rs();
  };
  function Dn() {
    var d, s;
    if (!D || !(Kf(D.id) || y[D.id])) {
      Ct.hidden = !0;
      return;
    }
    if ([...it.keys()].some((f) => f.endsWith("|" + D.id))) {
      Rs();
      return;
    }
    const t = Xf(D.id), e = Ct.querySelector(".tfMore");
    if (!t) {
      ai();
      return;
    }
    const a = kc(Ct), n = au(D.id), i = D.frame ? D.frame.wide : D.id.startsWith("summary:") || D.id.startsWith("group:");
    if (Ct.hidden || !e || t.length !== Wa.length || e.classList.contains("wide") !== i) {
      const f = Ns ? D.scroll || 0 : !Ct.hidden && e ? e.scrollTop : 0;
      if (Ct.innerHTML = '<div class="tfMorePair' + (Ct.hidden ? "" : " still") + '" role="dialog" aria-modal="true" aria-labelledby="tfMoreTitle"><section class="tfMore' + (i ? " wide" : "") + '"' + (D.frame ? ' style="height:' + D.frame.h + 'px"' : "") + ' tabindex="-1">' + t.join("") + "</section></div>", Ls = n, Ct.classList.toggle("wide", i), Ct.hidden = !1, Ds(), Bs(Ct), $e(Ct), ra(Ct), Ct.querySelectorAll("[data-day]").forEach((h) => Rc(h.dataset.day, h, D.at)), Lc(Ct), f && (Ct.querySelector(".tfMore").scrollTop = f), _c(), Cs(Ct, a), !Ct.contains(o.activeElement)) {
        const h = Ct.querySelector("[data-more-close]");
        (d = h != null && h.offsetParent ? h : Ct.querySelector(".tfMore")) == null || d.focus({ preventScroll: !0 });
      }
    } else {
      if (t.forEach((f, h) => {
        var v, M;
        if (f === Wa[h] || f.includes("data-cover-art") || e.children[h].contains((M = (v = o.activeElement) == null ? void 0 : v.matches) != null && M.call(v, "input,select") ? o.activeElement : null) || [...it.keys()].some((I) => e.children[h].querySelector('[data-drag="' + CSS.escape(I) + '"]'))) return;
        const k = document.createElement("div");
        k.innerHTML = f;
        const S = _s(e.children[h], k.firstElementChild);
        ra(S), Lc(S), $e(S);
      }), n !== Ls) {
        const f = Ct.querySelector(".tfMoreSideBody");
        f && (f.innerHTML = n), Ls = n;
      }
      e.querySelectorAll("[data-day]").forEach((f) => {
        f.innerHTML || Rc(f.dataset.day, f, D.at);
      }), _c(), Ct.contains(o.activeElement) || Cs(Ct, a);
    }
    (s = Ct.querySelector(".tfMorePair")) == null || s.classList.toggle("details", !!(D.details && n)), Wa = t, Rs();
  }
  function _c() {
    const t = Ct.querySelector("[data-more-pages]");
    !t || !D || (t.scrollTo({ left: (D.page || 0) * t.clientWidth, behavior: "instant" }), Hs(), Ps(t));
  }
  function Ps(t) {
    const e = t.children[(D == null ? void 0 : D.page) || 0];
    e && (t.style.height = e.scrollHeight + "px");
  }
  function Hs() {
    const t = (D == null ? void 0 : D.page) || 0;
    Ct.querySelectorAll("[data-more-page]").forEach((e) => {
      const a = Number(e.dataset.morePage) === t;
      e.setAttribute("aria-selected", String(a)), e.tabIndex = a ? 0 : -1;
    });
  }
  function Tc(t, e) {
    var n, i;
    const a = Ct.querySelector("[data-more-pages]");
    !a || !D || (D.page = Math.max(0, Math.min(1, t)), a.scrollTo({ left: D.page * a.clientWidth, behavior: (n = window.matchMedia) != null && n.call(window, "(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" }), Hs(), Ps(a), (i = Ct.querySelector('[data-more-page="' + D.page + '"]')) == null || i.focus({ preventScroll: !0 }));
  }
  let Dc = 0;
  Ct.addEventListener("scroll", (t) => {
    var a;
    const e = t.target;
    !((a = e.matches) != null && a.call(e, "[data-more-pages]")) || !D || (clearTimeout(Dc), Dc = setTimeout(() => {
      if (!D) return;
      const n = Math.round(e.scrollLeft / Math.max(1, e.clientWidth));
      n !== (D.page || 0) && (D.page = n, Hs(), Ps(e));
    }, 80));
  }, !0), setInterval(() => {
    D && Dn();
  }, 15 * 1e3);
  function ei(t, e) {
    var i, d;
    const a = !!(D && e && Ct.contains(e)), n = a && Ct.querySelector(".tfMore");
    if (a && (D.scroll = n.scrollTop), a && !D.under) {
      const s = Ct.querySelector(".tfMorePair"), f = { more: D, parts: Wa, opener: e };
      s.classList.add("still"), s.style.transform = "", s.inert = !0, Da.innerHTML = "", Da.appendChild(s), Da.classList.toggle("wide", Ct.classList.contains("wide")), Da.hidden = !1, Ct.hidden = !0, Ct.innerHTML = "", D = { id: t, opener: e, back: null, frame: null, under: f, at: Number((i = e == null ? void 0 : e.dataset) == null ? void 0 : i.at) || null }, Os();
      return;
    }
    D = { id: t, opener: a ? D.opener : e, back: a ? D : null, frame: a ? D.frame || { wide: n.classList.contains("wide"), h: n.offsetHeight } : null, under: a ? D.under : null, at: Number((d = e == null ? void 0 : e.dataset) == null ? void 0 : d.at) || null }, Os();
  }
  let Ns = !1;
  function Os() {
    Wa = [], Ns = !Ct.hidden, It.forEach((t, e) => {
      e !== D.id && Ct.contains(t.el) && (t.destroy(), It.delete(e));
    }), Dn(), Ns = !1;
  }
  function ai() {
    if (!D) return;
    const t = D;
    Dh(Ct, () => {
      D === t && Is();
    });
  }
  function Is() {
    var n, i, d, s, f, h, k, S;
    const t = D == null ? void 0 : D.opener, e = D == null ? void 0 : D.under;
    D = null, It.forEach((v, M) => {
      Ct.contains(v.el) && (v.destroy(), It.delete(M));
    }), Oe.forEach((v, M) => {
      M.startsWith("more:") && Oe.delete(M);
    }), Ct.hidden = !0, Ct.innerHTML = "";
    const a = { preventScroll: !0 };
    if (e) {
      const v = Da.firstElementChild;
      D = e.more, Wa = e.parts, v && (v.inert = !1, Ct.appendChild(v)), Ct.classList.toggle("wide", Da.classList.contains("wide")), Da.hidden = !0, Da.innerHTML = "", Ct.hidden = !1;
      const M = Ct.querySelector(".tfMore");
      M && (M.scrollTop = D.scroll || 0), Dn(), (i = (n = e.opener) != null && n.isConnected ? e.opener : Ct.querySelector("[data-more-close]")) == null || i.focus(a);
      return;
    }
    t != null && t.isConnected ? t.focus(a) : (d = t == null ? void 0 : t.dataset) != null && d.more ? (s = L.querySelector('[data-more="' + CSS.escape(t.dataset.more) + '"]')) == null || s.focus(a) : (f = t == null ? void 0 : t.dataset) != null && f.summary ? (h = L.querySelector('[data-summary="' + CSS.escape(t.dataset.summary) + '"]')) == null || h.focus(a) : (k = t == null ? void 0 : t.hasAttribute) != null && k.call(t, "data-favs-edit") && ((S = L.querySelector("[data-favs-edit]")) == null || S.focus(a));
  }
  const ou = { moisture: "moisture", light: "light", brightness: "light", temperature: "temperature", fertility: "fertility", conductivity: "fertility" };
  function nu(t) {
    const e = String(jt(t).problem || ""), a = "sensor." + t.split(".")[1] + "_";
    return e === "none" ? [] : e.split(",").map((n) => n.trim().split(" ")).map(([n, i]) => {
      const d = ou[n], s = a + d;
      if (!d || !y[s] || !an[d]) return "";
      const f = jt(s).unit_of_measurement || "", [h, k] = an[d], S = i === "low";
      return '<div class="tfMoreGroup tfPlantProblem"><div class="tfMoreGroupName">' + F(xt(s)) + '</div><svg class="tfGraph tfPlantGraph" data-plant-graph="' + F(s) + '" data-guide="' + (S ? h : k) + '" data-guide-word="' + F("Wants " + (S ? "" : "up to ") + (S ? h : k).toLocaleString() + (f === "%" ? "%" : f ? " " + f : "") + (S ? " or more" : "")) + '" role="img" aria-label="' + F(xt(s)) + ', last 24 hours"></svg></div>';
    }).filter(Boolean);
  }
  const Lc = (t) => t.querySelectorAll("[data-plant-graph]").forEach((e) => Hc(e.dataset.plantGraph, e, { guide: Number(e.dataset.guide), guideWord: e.dataset.guideWord }).then(() => Ll(e)));
  function Fs(t, e, a, n = {}) {
    const i = e.map((O) => O[1]).concat(n.guide != null ? [n.guide] : []), d = n.zero ? 0 : Math.min(...i), s = Math.max(...i), f = Math.max(120, t.clientWidth || 260), h = Math.max(60, t.clientHeight || 130), k = 8, S = h - 20, v = Date.now() - 24 * 3600 * 1e3, M = 24 * 3600 * 1e3, I = (O) => Math.max(0, Math.min(f, (O - v) / M * f)), j = (O) => s === d ? (k + S) / 2 : S - (O - d) / (s - d) * (S - k);
    let P = "M" + I(e[0][0]).toFixed(1) + " " + j(e[0][1]).toFixed(1);
    if (e.length > 2) P = hp(e.map((O) => [I(O[0]), j(O[1])]));
    else for (let O = 1; O < e.length; O++) P += n.smooth ? "L" + I(e[O][0]).toFixed(1) + " " + j(e[O][1]).toFixed(1) : "H" + I(e[O][0]).toFixed(1) + "V" + j(e[O][1]).toFixed(1);
    t.setAttribute("viewBox", "0 0 " + f + " " + h), t.setAttribute("aria-label", a), t.innerHTML = mp(f, k, S) + '<path d="' + P + "V" + S + "H" + I(e[0][0]).toFixed(1) + 'Z" fill="' + (n.colour || "var(--primary)") + '" fill-opacity=".14"/><path d="' + P + '" fill="none" stroke="' + (n.colour || "var(--primary)") + '" stroke-width="' + ye.graphs.weight + '" stroke-linejoin="round" stroke-linecap="round"/><text x="0" y="' + (h - 4) + '">24 h ago</text><text x="' + f + '" y="' + (h - 4) + '" text-anchor="end">Now</text>' + (n.guide != null ? '<line class="tfGuide" x1="0" x2="' + f + '" y1="' + j(n.guide).toFixed(1) + '" y2="' + j(n.guide).toFixed(1) + '"/><text class="tfGuideWord" x="' + f + '" y="' + (j(n.guide) < 20 ? j(n.guide) + 14 : j(n.guide) - 5).toFixed(1) + '" text-anchor="end">' + F(n.guideWord || "") + "</text>" : "");
  }
  const Ec = { lock: ["unlocked", "open", "opening"], cover: ["open", "opening", "closing"], valve: ["open", "opening", "closing"], vacuum: ["cleaning", "returning"] }, ru = (t, e) => {
    const a = t.split(".")[0];
    return Ec[a] ? Ec[a].includes(e) : a === "alarm_control_panel" || a === "climate" || a === "media_player" ? !["off", "standby", "disarmed", "unavailable", "unknown"].includes(e) : e === "on";
  }, iu = (t) => {
    const e = t.split(".")[0], a = jt(t).device_class;
    return e === "binary_sensor" ? { moisture: "Wet", smoke: "Smoke", gas: "Gas", carbon_monoxide: "Carbon monoxide", safety: "Unsafe" }[a] || (xi.includes(a) ? "Open" : "On") : { lock: "Unlocked", cover: "Open", valve: "Open", vacuum: "Cleaning", alarm_control_panel: "Armed" }[e] || "On";
  }, Bc = /* @__PURE__ */ new Map();
  let su = 0;
  async function lu(t) {
    var i;
    let e = Bc.get(t);
    if (!e || Date.now() - e.at > 60 * 1e3) {
      let d = [];
      if (La(t) && Number.isFinite(Number((i = y[t]) == null ? void 0 : i.state))) d = Pc(t).map(([s, f]) => [s, String(f)]);
      else try {
        const s = await H({ type: "history/history_during_period", start_time: new Date(Date.now() - 864e5).toISOString(), entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 });
        d = ((s == null ? void 0 : s[t]) || []).map((f) => [f.lu != null ? f.lu * 1e3 : Date.parse(f.last_updated || f.last_changed), String(f.s ?? f.state)]).filter(([f]) => Number.isFinite(f));
      } catch {
      }
      d.length || (d = (Qn || []).filter((s) => s.entity_id === t).map((s) => [s.when * 1e3, String(s.state)])), e = { at: Date.now(), pts: d }, Bc.set(t, e);
    }
    const a = y[t], n = e.pts.slice().sort((d, s) => d[0] - s[0]);
    return a && (!n.length || n[n.length - 1][1] !== a.state) && n.push([Date.parse(a.last_changed) || Date.now(), a.state]), n;
  }
  async function Rc(t, e, a) {
    const n = await lu(t);
    if (!e.isConnected) return;
    const i = n.map(([R, Mt]) => [R, Number(Mt)]);
    if (n.length > 1 && i.every(([, R]) => Number.isFinite(R))) {
      Fs(e, i, xt(t) + ", last 24 hours");
      return;
    }
    const d = Date.now(), s = d - 864e5, f = Math.max(200, e.clientWidth || 360), h = 62, k = (R) => Math.max(0, Math.min(f, (R - s) / 864e5 * f)), S = [];
    let v = null;
    n.forEach(([R, Mt]) => {
      const Kt = ru(t, Mt);
      Kt && v == null ? v = Math.max(R, s) : !Kt && v != null && (S.push([v, Math.max(R, s)]), v = null);
    }), v != null && S.push([v, d]);
    const M = Ui(t) ? "var(--danger)" : t.startsWith("light.") ? "#ffaa00" : "var(--primary)", I = iu(t), j = "tfDayClip" + ++su, P = S.map(([R, Mt]) => I + (Mt >= d - 1e3 && R <= s + 1e3 ? " all day" : Mt >= d - 1e3 ? " since " + da(R) : R <= s + 1e3 ? " until " + da(Mt) : " " + da(R) + "–" + da(Mt)));
    let O = "", T = -1 / 0;
    S.forEach(([R], Mt) => {
      const Kt = P[Mt].length * 5.4, Nt = Math.min(k(R), f - Kt);
      Nt < T + 8 || (O += '<text x="' + Nt.toFixed(1) + '" y="10">' + F(P[Mt]) + "</text>", T = Nt + Kt);
    });
    let Q = '<text x="' + f + '" y="' + (h - 2) + '" text-anchor="end">Now</text>';
    [0, 6, 12, 18].forEach((R) => {
      let Mt = new Date(d).setHours(R, 0, 0, 0);
      Mt > d && (Mt -= 864e5), k(Mt) > 8 && k(Mt) < f - 34 && (Q += '<text x="' + k(Mt).toFixed(1) + '" y="' + (h - 2) + '" text-anchor="middle">' + String(R).padStart(2, "0") + "</text>");
    }), e.setAttribute("viewBox", "0 0 " + f + " " + h), e.setAttribute("aria-label", xt(t) + ", last 24 hours: " + (P.length ? P.join(", ") : "no changes")), e.innerHTML = '<clipPath id="' + j + '"><rect x="0" y="18" width="' + f + '" height="26" rx="8"/></clipPath>' + O + '<rect x="0" y="18" width="' + f + '" height="26" rx="8" fill="var(--text)" fill-opacity=".1"/><g clip-path="url(#' + j + ')">' + S.map(([R, Mt]) => '<rect x="' + k(R).toFixed(1) + '" y="18" width="' + Math.max(2, k(Mt) - k(R)).toFixed(1) + '" height="26" fill="' + M + '"/>').join("") + "</g>" + (a && a >= s ? '<line x1="' + k(a).toFixed(1) + '" x2="' + k(a).toFixed(1) + '" y1="13" y2="49" stroke="var(--text)" stroke-width="2" stroke-linecap="round"/>' : "") + Q;
  }
  function Pc(t) {
    var n;
    const e = Number((n = y[t]) == null ? void 0 : n.state), a = Date.now();
    if (jt(t).state_class === "total_increasing") {
      const i = (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0), d = Math.max(1, a - i);
      return [...Array(49)].map((s, f) => i + d * f / 48).map((s) => [s, Math.round(e * Math.pow((s - i) / d, 1.3) * 100) / 100]);
    }
    if (La(t) && t.endsWith("_moisture")) return [...Array(48)].map((i, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round((e + 22 * Math.pow(1 - d / 48, 1.2)) * 10) / 10]);
    if (La(t) && t.endsWith("_light")) {
      const i = (s) => {
        const f = new Date(s).getHours() + new Date(s).getMinutes() / 60;
        return Math.max(0, Math.sin((f - 6) / 14 * Math.PI));
      }, d = (s) => 0.8 + 0.2 * i(s);
      return [...Array(48)].map((s, f) => a - (48 - f) * 30 * 60 * 1e3).map((s) => [s, Math.round(e * d(s) / d(a))]);
    }
    return [...Array(48)].map((i, d) => [a - (48 - d) * 30 * 60 * 1e3, Math.round(e * (0.96 + 0.04 * Math.sin(d / 6)) * 10) / 10]);
  }
  async function Hc(t, e, a = {}) {
    var j, P;
    let n = st.get(t);
    if (t.endsWith("_solar_power")) n = { at: Date.now(), points: Yc() };
    else if (La(t)) n = { at: Date.now(), points: Pc(t) };
    else if (!n || Date.now() - n.at > 5 * 60 * 1e3) {
      try {
        const O = new Date(Date.now() - 864e5).toISOString(), T = await H({ type: "history/history_during_period", start_time: O, entity_ids: [t], minimal_response: !0, no_attributes: !0, significant_changes_only: !1 }), Q = ((T == null ? void 0 : T[t]) || []).map((R) => [R.lu != null ? R.lu * 1e3 : Date.parse(R.last_updated || R.last_changed), Number(R.s ?? R.state)]).filter(([R, Mt]) => Number.isFinite(R) && Number.isFinite(Mt));
        n = { at: Date.now(), points: Q };
      } catch {
        n = { at: Date.now(), points: [] };
      }
      st.set(t, n);
    }
    const i = e || L.querySelector('[data-graph="' + CSS.escape(t) + '"]');
    if (!i) return;
    const d = y[t], s = ((j = d == null ? void 0 : d.attributes) == null ? void 0 : j.unit_of_measurement) || "", f = n.points.slice(), h = Number(d == null ? void 0 : d.state);
    if (Number.isFinite(h) && !t.endsWith("_solar_power") && f.push([Date.now(), h]), f.length < 2) {
      i.setAttribute("aria-label", xt(t) + ": no history for the last 24 hours"), i.innerHTML = '<text x="0" y="16">No history for the last 24 hours</text>';
      return;
    }
    const k = f.map((O) => O[1]), S = Math.min(...k), v = Math.max(...k), M = (O) => O.toLocaleString(void 0, { maximumFractionDigits: Math.abs(O) >= 100 ? 0 : 1 }), I = ((P = d == null ? void 0 : d.attributes) == null ? void 0 : P.state_class) === "total_increasing";
    Fs(i, f, xt(t) + ", last 24 hours: " + (I ? "+" + M(k[k.length - 1] - k[0]) : S === v ? M(S) : M(S) + " to " + M(v)) + (s ? " " + s : ""), { smooth: t.endsWith("_solar_power"), zero: t.endsWith("_solar_power"), ...a });
  }
  function Nc() {
    const t = L == null ? void 0 : L.querySelector("[data-solar]");
    if (!t) return;
    const e = Yc();
    Fs(t, e, "Solar, last 24 hours: up to " + Ve(Math.max(...e.map((a) => a[1])), 1) + " kW", { smooth: !0, zero: !0, colour: "#ffaa00" });
  }
  function cu(t, e) {
    const a = e.entity_id, n = bt.get(a) || {}, i = { open_cover: 100, close_cover: 0, set_cover_position: e.position, toggle: Ne(a) > 0 ? 0 : 100 }[t], d = { open_cover_tilt: 100, close_cover_tilt: 0, set_cover_tilt_position: e.tilt_position }[t];
    i != null && (n.pos = i), d != null && (n.tilt = d), t === "stop_cover" && (delete n.pos, delete n.tilt), t === "stop_cover_tilt" && delete n.tilt, n.at = Date.now(), bt.set(a, n);
  }
  function Oc(t, e, a) {
    var i;
    const n = a == null ? void 0 : a.entity_id;
    return t !== "light" || typeof n != "string" || !fa[n] || !Ka(n) || a.brightness_pct != null || a.brightness != null ? [e, a] : e !== "turn_on" && !(e === "toggle" && ((i = y[n]) == null ? void 0 : i.state) !== "on") ? [e, a] : ["turn_on", { ...a, brightness_pct: fa[n] }];
  }
  function oi(t, e, a, n) {
    let i = { entity_id: a, ...n || {} };
    return [e, i] = Oc(t, e, i), t === "cover" && cu(e, i), na[a] = (na[a] || 0) + 1, ja.set(jd, JSON.stringify(na)), Ar.call(t, e, i) ? Promise.resolve() : Promise.resolve(_(t, e, i));
  }
  function qs(t) {
    const [e, a, n, i] = t.split("|");
    oi(e, a, n, i ? JSON.parse(i) : null).catch(() => {
    });
  }
  function pr(t, e) {
    it.set("pos|" + t, e), la.delete(t), Wa = Wa.map(() => ""), [L, Ct].forEach((n) => n.querySelectorAll('[data-blocks="' + CSS.escape(t) + '"]').forEach((i) => De(i, e)));
    const a = L.querySelector('.tfAction[data-k="' + CSS.escape(t) + '"] .tfName .activityRowMeta');
    if (a && (a.textContent = Math.round(e) + "%"), (D == null ? void 0 : D.id) === t) {
      const n = Ct.querySelector(".tfMoreState"), i = Ct.querySelector(".tfMoreSub");
      n && (n.textContent = Math.round(e) + "%", n.classList.add("live")), i && (i.textContent = "Currently " + Ne(t) + "%");
    }
    Ac(t).forEach((n) => n.update(ti(t)));
  }
  const du = (t, e) => {
    const a = t.shiftKey ? 10 : 1, n = { ArrowUp: e + a, ArrowRight: e + a, ArrowDown: e - a, ArrowLeft: e - a, PageUp: e + 25, PageDown: e - 25, Home: 0, End: 100 }[t.key];
    return n == null ? null : Math.max(0, Math.min(100, Math.round(n)));
  };
  function pu(t, e) {
    var P;
    const a = t.dataset.blocks;
    (P = t.setPointerCapture) == null || P.call(t, e.pointerId);
    const n = (O) => {
      const T = t.getBoundingClientRect();
      return Math.max(0, Math.min(100, (O.clientX - T.left) / T.width * 100));
    }, i = n(e), d = e.clientX;
    let s = !1, f = Mo(a), h = i, k = 0;
    const S = () => {
      f = Math.abs(h - f) < 0.2 ? h : f + (h - f) * 0.14, pr(a, f), k = requestAnimationFrame(S);
    }, v = () => {
      s || (s = !0, t.classList.add("fine"), k = requestAnimationFrame(S));
    }, M = setTimeout(v, 350), I = (O) => {
      h = n(O), Math.abs(O.clientX - d) > 6 && (clearTimeout(M), v());
    }, j = () => {
      clearTimeout(M), cancelAnimationFrame(k), t.removeEventListener("pointermove", I), t.removeEventListener("pointerup", j), t.removeEventListener("pointercancel", j), t.classList.remove("fine"), pr(a, s ? Math.round(f) : (Math.min(3, Math.floor(i / 25)) + 1) * 25), fr("pos", a);
    };
    t.addEventListener("pointermove", I), t.addEventListener("pointerup", j), t.addEventListener("pointercancel", j);
  }
  function Ic(t) {
    var e;
    N = t.dataset.area, L.querySelectorAll(".tfAreaPanel").forEach((a) => {
      var i;
      const n = a === t;
      a.classList.toggle("active", n), a.setAttribute("aria-expanded", String(n)), (i = a.querySelector(".panelExpanded")) == null || i.toggleAttribute("inert", !n);
    }), la.set("areas", J(((e = L.querySelector('[data-k="areas"]')) == null ? void 0 : e.style.order) || 1));
  }
  const Ws = {
    bright: { value: (t, e) => Math.round(e * 100), text: (t, e) => e ? e + "%" : "Off", send: (t, e) => e > 0 ? ["light", "turn_on", { brightness_pct: e }] : ["light", "turn_off", {}] },
    ct: { value: (t, e) => {
      const [a, n] = Ra(t);
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
  function ni(t, e, a, n) {
    var h;
    const i = Ws[e].value(a, n);
    it.set(e + "|" + a, i);
    const d = Math.round(n * 100) + "%", s = t.querySelector("i");
    if (e === "tilt") {
      s.style.width = "calc((100% - 8px) * " + n + ")";
      const [k, S] = t.querySelectorAll("span");
      k.classList.toggle("lit", n > 0.08), S.classList.toggle("lit", n > 0.92), la.delete(a), Wa = Wa.map(() => ""), Ac(a).forEach((v) => v.update(ti(a)));
    } else if (s) s.style.width = d;
    else {
      let k = t.querySelector("b");
      k || (k = document.createElement("b"), t.appendChild(k)), k.style.left = d;
    }
    t.setAttribute("aria-valuenow", String(Math.round(n * 100)));
    const f = (h = t.closest(".tfAction") || t.closest(".tfMore")) == null ? void 0 : h.querySelector(".tfName .activityRowMeta, .tfMoreState");
    f && (f.textContent = Ws[e].text(a, i));
  }
  function fr(t, e) {
    const a = it.get(t + "|" + e), [n, i, d] = Ws[t].send(e, a), s = () => setTimeout(() => {
      it.delete(t + "|" + e), _e();
    }, 1500);
    oi(n, i, e, d).then(s, s);
  }
  function Fc(t) {
    t.addEventListener("click", (e) => {
      var n;
      const a = e.target.closest("[data-act],[data-acts],[data-more],[data-more-close],[data-more-back],[data-details],[data-details-close],[data-go],[data-summary],[data-star],[data-favs-edit],[data-area-back],[data-board-more],[data-board-act],[data-board-show],[data-fav-hide],[data-energy-pick],[data-more-page],[data-path],.tfAreaPanel");
      if (ze && !e.target.closest(".tfBoardMenu,[data-board-more]") && Ia(), !(!a || !t.contains(a) || a.disabled))
        if (a.dataset.boardMore)
          (ze == null ? void 0 : ze.key) === a.dataset.boardMore ? Ia(!0) : wf(a.dataset.boardMore, a);
        else if (a.dataset.boardAct) vf(ze.key, a.dataset.boardAct);
        else if (a.dataset.boardShow) ls(a.dataset.boardShow);
        else if (a.dataset.favHide) lc(a.dataset.favHide, !1);
        else if (a.dataset.energyPick) _l(a.dataset.energyPick);
        else if (a.dataset.act) qs(a.dataset.act);
        else if (a.hasAttribute("data-details")) Es(!(D != null && D.details));
        else if (a.hasAttribute("data-details-close")) Es(!1);
        else if (a.dataset.summary) Jn(a.dataset.summary, a);
        else if (a.dataset.star) Go(a.dataset.star);
        else if (a.hasAttribute("data-more-back")) {
          const i = D.id;
          D = D.back, Os(), (n = Ct.querySelector('.tfMore [data-more="' + CSS.escape(i) + '"]')) == null || n.focus({ preventScroll: !0 });
        } else a.hasAttribute("data-favs-edit") ? ei("favourites", a) : a.dataset.acts ? JSON.parse(a.dataset.acts).forEach(([i, d, s, f]) => oi(i, d, s, f).catch(() => {
        })) : a.dataset.more ? ei(a.dataset.more, a) : a.hasAttribute("data-more-close") ? ai() : a.dataset.morePage ? Tc(Number(a.dataset.morePage)) : a.dataset.path ? xn(a.dataset.path) : a.dataset.go ? vc("room:" + a.dataset.go) : a.hasAttribute("data-area-back") ? As() : a.classList.contains("tfAreaPanel") && !a.classList.contains("active") && Ic(a);
    }), t.addEventListener("keydown", (e) => {
      var n, i, d, s, f, h, k;
      const a = e.target;
      if ((n = a.dataset) != null && n.more && a.tagName !== "BUTTON" && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), ei(a.dataset.more, a)), (i = a.dataset) != null && i.energyPick && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), _l(a.dataset.energyPick)), (d = a.classList) != null && d.contains("tfAreaPanel") && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Ic(a)), (s = a.dataset) != null && s.summary && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), Jn(a.dataset.summary, a)), e.key === "Escape" && ze && t === L) {
        e.preventDefault(), Ia(!0);
        return;
      }
      if (e.key === "Escape" && Je && t === L) {
        e.preventDefault(), ss(!1), (f = p("dashEditNav")) == null || f.focus();
        return;
      }
      if (e.key === "Escape" && Z && t === L && (e.preventDefault(), As()), (h = a.dataset) != null && h.blocks) {
        const S = a.dataset.blocks, v = du(e, Math.round(Mo(S)));
        if (v == null) return;
        e.preventDefault(), pr(S, v), clearTimeout(re.get(S)), re.set(S, setTimeout(() => fr("pos", S), 500));
        return;
      }
      if ((k = a.dataset) != null && k.drag && ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
        e.preventDefault();
        const [S, v] = a.dataset.drag.split("|"), M = Number(a.getAttribute("aria-valuenow")) / 100, I = e.key === "Home" ? 0 : e.key === "End" ? 1 : Math.max(0, Math.min(1, M + (e.key === "ArrowLeft" || e.key === "ArrowDown" ? -0.05 : 0.05)));
        ni(a, S, v, I), fr(S, v);
      }
    }), t.addEventListener("pointerdown", (e) => {
      var Kt;
      const a = e.target.closest("[data-blocks]");
      if (a && e.button === 0) {
        e.preventDefault(), pu(a, e);
        return;
      }
      const n = e.target.closest("[data-drag]");
      if (!n || e.button > 0) return;
      const [i, d] = n.dataset.drag.split("|"), s = i === "bright" && !Ka(d), f = e.pointerType !== "mouse";
      if (s && !f) {
        qs(Gt("light", "toggle", d));
        return;
      }
      const h = i === "bright" && ((Kt = y[d]) == null ? void 0 : Kt.state) !== "on", k = i === "tilt" ? 4 : 0, S = () => n.getBoundingClientRect().width - k * 2, v = (Nt) => {
        const Xt = n.getBoundingClientRect();
        return Math.max(0, Math.min(1, (Nt.clientX - Xt.left - k) / S()));
      };
      let M = f ? "waiting" : h ? "pressed" : "dragging", I = 0;
      const j = e.clientX, P = e.clientY, O = (Nt, Xt) => Math.hypot(Nt.clientX - j, Nt.clientY - P) > Xt, T = () => {
        try {
          n.setPointerCapture(e.pointerId);
        } catch {
        }
      };
      f || (e.preventDefault(), T()), M === "dragging" && ni(n, i, d, v(e));
      const Q = () => {
        var Nt, Xt;
        M = "sliding", ut = n, n.classList.add("held"), T(), (Nt = navigator.userActivation) != null && Nt.hasBeenActive && ((Xt = navigator.vibrate) == null || Xt.call(navigator, 8)), I = h ? (fa[d] ?? 100) / 100 : Number(n.getAttribute("aria-valuenow")) / 100;
      }, R = (Nt) => {
        M === "waiting" && O(Nt, vt) ? !s && Math.abs(Nt.clientX - j) > Math.abs(Nt.clientY - P) ? Q() : M = "gone" : M === "pressed" && O(Nt, 4) && (M = "dragging"), M === "sliding" ? ni(n, i, d, Math.max(0, Math.min(1, I + (Nt.clientX - j) / S()))) : M === "dragging" && ni(n, i, d, v(Nt));
      }, Mt = (Nt) => {
        ["pointermove", "pointerup", "pointercancel"].forEach((Xt, ge) => n.removeEventListener(Xt, ge ? Mt : R)), n.classList.remove("held"), ut === n && (ut = null), M === "sliding" || M === "dragging" ? fr(i, d) : Nt.type === "pointerup" && s ? qs(Gt("light", "toggle", d)) : Nt.type === "pointerup" && h && (M === "waiting" || M === "pressed") && oi("light", "turn_on", d).catch(() => {
        });
      };
      n.addEventListener("pointermove", R), n.addEventListener("pointerup", Mt), n.addEventListener("pointercancel", Mt);
    }), t.addEventListener("touchmove", (e) => {
      ut && e.cancelable && e.preventDefault();
    }, { passive: !1 });
  }
  return L && b && (kn(), Fc(L), Fc(Ct), Ct.addEventListener("click", (t) => {
    t.target === Ct && ai();
  }), (qc = o.getElementById("homeNav")) == null || qc.addEventListener("click", () => {
    Z && As();
  }), (Wc = o.querySelector(".bottomNav")) == null || Wc.insertAdjacentHTML("beforeend", '<button class="navBtn" id="dashEditNav" type="button" title="Edit" aria-label="Edit the dashboard" aria-pressed="false" hidden>' + yi + "</button>"), (Vc = p("dashEditNav")) == null || Vc.addEventListener("click", () => A ? ks(!ro) : ss(!Je)), L.addEventListener("pointerdown", qf), L.addEventListener("pointerdown", mf), L.addEventListener("click", (t) => {
    A && ro && t.target.closest(".tfBoardItem") && (t.preventDefault(), t.stopPropagation());
  }, !0), L.addEventListener("scroll", (t) => {
    var e;
    (e = t.target.classList) != null && e.contains("hcFadeList") && Ul(t.target);
  }, !0), new ResizeObserver(() => {
    g.classList.contains("tfDash") && Xi() !== Zi ? _e() : Gr();
  }).observe(L), window.addEventListener("resize", Gr, { passive: !0 }), Ct.addEventListener("keydown", (t) => {
    var e, a;
    t.key === "Escape" ? (t.stopPropagation(), D != null && D.details ? Es(!1) : ai()) : (t.key === "ArrowLeft" || t.key === "ArrowRight") && ((a = (e = t.target).closest) != null && a.call(e, ".tfMoreDots")) && (t.preventDefault(), Tc(((D == null ? void 0 : D.page) || 0) + (t.key === "ArrowRight" ? 1 : -1)));
  })), Y(), {
    update(t) {
      if (!b) return;
      const e = !Object.keys(y).length;
      y = { ...Object.fromEntries(Object.entries(y).filter(([n]) => La(n))), ...t || {} };
      for (const n in y) n.startsWith("light.") && y[n].state === "on" && Ka(n) && Fo(n, xo(y[n]));
      e ? so() : _e();
    },
    // the bento's animation runs while it's mounted, so it goes while the card is away
    suspend() {
      No = !0, Me == null || Me.destroy(), Me = null, Se == null || Se.forEach((t) => t.destroy()), Se = null;
    },
    resume() {
      No = !1, !(!b || !(L != null && L.querySelector("[data-tf]"))) && (ca.isConnected && _r(ca.style.order), Dr());
    }
  };
}
const f0 = "0.1.0";
function u0() {
  if (document.getElementById("homecore-fonts")) return;
  const o = document.createElement("link");
  o.id = "homecore-fonts", o.rel = "stylesheet", o.href = "https://fonts.googleapis.com/css2?family=Geist:wght@200;300;400;500;600;700&family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;1,500&display=swap", document.head.appendChild(o);
}
class h0 extends HTMLElement {
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
    u0();
    const r = this.shadowRoot || this.attachShadow({ mode: "open" });
    r.innerHTML = `<style>${vu}${yu}${xu}${ku}</style>${Mu}`;
    const c = r.getElementById("app");
    c.style.opacity = "0", this._shell = Cu(r, {
      setLight: (p) => this.classList.toggle("lightBody", p),
      fullscreenSupported: !!(this.requestFullscreen || this.webkitRequestFullscreen),
      toggleFullscreen: () => this._toggleFullscreen()
    }), this._lastStates = this._hass.states, this._test = p0(r, { config: this._config, getHass: () => this._hass }), this._test.update(this._hass.states), Ch(r, c), Th(r), this.isConnected || this._test.suspend(), c.style.transition = "opacity .2s ease", c.style.opacity = "";
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
customElements.get("homecore-card") || (customElements.define("homecore-card", h0), window.customCards = window.customCards || [], window.customCards.push({
  type: "homecore-card",
  name: "HomeCore",
  description: "A page for your whole house, to try HomeCore with your own devices.",
  preview: !1
}), console.info(`%c HOMECORE %c ${f0} `, "background:#D0FF00;color:#090909;font-weight:700", ""));
