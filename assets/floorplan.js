/* The building, drawn as a floor plan — v13. Hand-rendered plan language:
   black wall poché with windows, door swings, furniture with character,
   soft watercolour washes, hand-lettered italic room names, a portico with
   steps at the way in, and a scale bar (honestly labelled n.t.s.).
   Hover (or first tap) explains a room below; click / second tap walks in.
   Live counts annotate the plan from window.ROOMS_PAYLOAD if present.
   v13: "you are here" is a small glowing dot, not a text label — it sits by
   the room name instead of floating alone at the bottom. Room name + count
   default to a centered spot low in the room; a narrow room whose furniture
   fills the same column (Studio Floor's desk stack) instead gets its label
   pushed to the clear side of the room, right-aligned, at a slightly smaller
   size, so the two never compete for the same pixels.
   Usage:  window.renderFloorplan(mountElement, currentKey)
   keys:   hearth | studio | pinup | modelshop | library | precedents | roadmap | ideas
   (2026-07-28: "pinup" displays as "the charrette". "modelshop" displays as
   "strategic hub" and is now a real doorway, drawn with a corridor leading to
   three real rooms on the plan itself — precedents, roadmap, ideas — each
   with its own hue and its own href. Canvas widened 730->1000 to fit the new
   wing; the original 5 rooms did not move.)
   No dependencies, no build step, ES5. */
(function () {
  /* each room's own colour, tied to who actually narrates that page — Amber (Shadi)
     or Cherenkov (Ben/Feynman) — not one universal tint for every "here" state. */
  var HUES = {
    hearth:     { wash: "#fff3da", deep: "#b45309", dot: "#f59e0b" }, /* the true amber — home */
    studio:     { wash: "#fdf0d5", deep: "#92400e", dot: "#d97706" }, /* amber family, gold shade */
    library:    { wash: "#fdf6e3", deep: "#a16207", dot: "#ca8a04" }, /* amber family, sand shade */
    pinup:      { wash: "#e3f6ff", deep: "#0b7cb5", dot: "#3fc6ff" }, /* Ben's real cherenkov cyan — the Charrette */
    modelshop:  { wash: "#eef2ff", deep: "#4338ca", dot: "#6366f1" }, /* the site's own indigo — the Strategic Hub doorway */
    precedents: { wash: "#e6f7f5", deep: "#0f766e", dot: "#14b8a6" }, /* teal — outside research */
    roadmap:    { wash: "#f2eeff", deep: "#6d28d9", dot: "#8b5cf6" }, /* violet — indigo's own family, still distinct */
    ideas:      { wash: "#fdf1f3", deep: "#be123c", dot: "#fb7185" }  /* rose — raw, unresolved sparks */
  };

  var ROOMS = [
    { key: "hearth",    name: "the hearth",   href: "index.html",     x: 230, y: 40,  w: 260, h: 360, hearth: true, wash: "#fdf7ec", hue: "hearth",
      desc: "The Hearth — the front of house. Each week's headline conversation and the studio life around it. It changes every Friday." },
    { key: "studio",    name: "studio floor", href: "studio.html",    x: 30,  y: 80,  w: 200, h: 320, wash: "#f9f8f5", labelSide: "right", labelY: 350, hue: "studio",
      desc: "The Studio Floor — one desk per tool in real use: the problem, how it works, proof it works, the risk, and what's needed from DT." },
    { key: "pinup",     name: "the charrette",  href: "pinup.html",     x: 490, y: 40,  w: 210, h: 150, wash: "#fafaf7", labelSide: "right", hue: "pinup",
      desc: "The Charrette — house rules, earned from real wins and real fails, not a changelog. The fails are still the point." },
    { key: "modelshop", name: "strategic hub", href: "modelshop.html", x: 490, y: 190, w: 210, h: 105, wash: "#fafaf7", labelSide: "right", hue: "modelshop",
      path: "M490,190 L780,190 L780,480 L700,480 L700,295 L490,295 Z",
      desc: "Strategic Hub — the room IS the hallway. One continuous space off the Hearth, leading straight to three real rooms: Precedents, Roadmap, Ideas." },
    { key: "library",   name: "the library",  href: "library.html",   x: 490, y: 295, w: 170, h: 105, wash: "#f9f8f5", labelSide: "right", planLabel: "library", hue: "library",
      desc: "The Library — a map of what the firm knows: where the knowledge lives, what shape it's in, and what it would take to make it answer questions." },
    { key: "precedents", name: "precedents",  href: "precedents.html", x: 780, y: 190, w: 200, h: 92,  wash: "#fafaf7", labelSide: "right", hue: "precedents",
      desc: "Precedents — profiles of what other firms have actually done with AI. One so far, built to grow." },
    { key: "roadmap",    name: "roadmap",     href: "roadmap.html",    x: 780, y: 286, w: 200, h: 104, wash: "#fafaf7", labelSide: "right", hue: "roadmap",
      desc: "Roadmap — our own current state and where the desks are actually headed, with a branch for what's worth learning from Precedents." },
    { key: "ideas",      name: "ideas",       href: "ideas.html",      x: 780, y: 394, w: 200, h: 86,  wash: "#fafaf7", labelSide: "right", hue: "ideas",
      desc: "Ideas — the actual pin-up wall of raw sparks that haven't become anything yet." }
  ];
  function cx(r){ return r.x + r.w / 2; }
  function cy(r){ return r.y + r.h / 2; }

  var DEFAULT_DESC = "Plenty of people at DIALOG use AI. This corner is where two of us publish our results — the tools, the numbers, the failures. Hover a room to look inside; click to walk in.";
  var TOUCH_DESC = "Plenty of people at DIALOG use AI. This corner is where two of us publish our results. Tap a room to look inside; tap again to walk in.";

  var STYLE_ID = "fp-style";
  function injectStyle() {
    if (document.getElementById(STYLE_ID)) return;
    var s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent =
      ".fp-wrap{max-width:960px;margin:26px auto 0;padding:0 16px;}" +
      ".fp-svg{display:block;width:100%;height:auto;}" +
      ".fp-room{cursor:pointer;transition:opacity .35s ease;}" +
      ".fp-svg.lit .fp-room:not(.peek):not(:hover){opacity:.45;}" +
      ".fp-room .cell{stroke:#26241f;stroke-width:7;stroke-linejoin:miter;transition:fill .25s ease;}" +
      /* hand-lettered: italic serif names, quiet counts */
      ".fp-room .rname{fill:#26241f;font-family:Fraunces,Georgia,serif;font-style:italic;font-weight:500;font-size:17.5px;transition:fill .2s;}" +
      ".fp-room .fp-badge{fill:#7d7970;font-family:Fraunces,Georgia,serif;font-style:italic;font-size:12px;}" +
      /* a narrow room with furniture in the same column gets a smaller, side-set label */
      ".fp-room.side-label .rname{font-size:15px;}" +
      ".fp-room.side-label .fp-badge{font-size:10.5px;}" +
      ".fp-room .fp-detail{opacity:.7;transition:opacity .3s ease;}" +
      ".fp-room:hover .fp-detail,.fp-room.peek .fp-detail,.fp-room.here .fp-detail{opacity:1;}" +
      ".fp-room:hover .cell,.fp-room:focus .cell,.fp-room.peek .cell{fill:#fff3da !important;}" +
      ".fp-room:hover .rname,.fp-room:focus .rname,.fp-room.peek .rname{fill:var(--room-deep,#b45309);}" +
      ".fp-room.here .rname{fill:var(--room-deep,#b45309);}" +
      ".fp-gap{fill:#ffffff;}" +
      ".fp-win{stroke:#26241f;stroke-width:1.1;fill:none;}" +
      ".fp-swing{stroke:#26241f;stroke-width:1.1;fill:none;}" +
      ".fp-ink{stroke:#26241f;stroke-width:1.5;fill:none;stroke-linecap:round;stroke-linejoin:round;}" +
      /* the "you are here" marker: a small dot with a soft pulsing halo, set beside the room's own label */
      ".fp-here-dot{fill:var(--room-dot,#f59e0b);}" +
      ".fp-here-dot-halo{fill:var(--room-dot,#f59e0b);opacity:.35;animation:fpGlow 2.6s ease-in-out infinite;}" +
      ".fp-meta{fill:#a3a099;font-size:10px;font-weight:600;letter-spacing:.16em;font-family:Inter,sans-serif;}" +
      ".fp-n{fill:#5f5c55;font-family:Fraunces,Georgia,serif;font-style:italic;font-size:12.5px;}" +
      "@keyframes fpGlow{0%,100%{opacity:.2;}50%{opacity:.55;}}" +
      ".fp-hearth-glow{animation:fpGlow 6s ease-in-out infinite;}" +
      ".fp-explain{max-width:640px;margin:14px auto 0;min-height:56px;text-align:center;font-size:.95rem;line-height:1.65;color:#52504c;padding:0 8px;font-family:Fraunces,Georgia,serif;}" +
      "@media (prefers-reduced-motion: reduce){.fp-hearth-glow,.fp-here-dot-halo{animation:none;opacity:.28;}.fp-room{transition:none;}}" +
      "@media(max-width:520px){.fp-room .rname{font-size:17px;}.fp-room.side-label .rname{font-size:14px;}}";
    document.head.appendChild(s);
  }

  function esc(t){ return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

  function badge(r, data) {
    if (r.key === "studio")    { var d = (data.studio && data.studio.desks) || [];  return d.length ? d.length + " desks" : ""; }
    if (r.key === "pinup")     { var p = (data.pinup && data.pinup.pins) || [];     var f = 0, j; for (j = 0; j < p.length; j++) if (p[j].stamp === "FAIL") f++; return p.length ? p.length + " pins · " + f + " fails" : ""; }
    if (r.key === "modelshop") {
      var doors = (data.modelshop && data.modelshop.doors) || [];
      return doors.length ? doors.length + " rooms" : "";
    }
    if (r.key === "precedents") {
      var comp = (data.precedents && data.precedents.companies) || [];
      return comp.length ? comp.length + " compan" + (comp.length === 1 ? "y" : "ies") : "";
    }
    if (r.key === "roadmap") {
      var rm = data.roadmap && data.roadmap.map;
      if (!rm) return "";
      var n = (rm.branches || []).length;
      return n ? n + "-track roadmap" : "";
    }
    if (r.key === "ideas") {
      var models = (data.ideas && data.ideas.models) || [];
      return models.length ? models.length + " idea" + (models.length === 1 ? "" : "s") : "";
    }
    if (r.key === "library") {
      var neigh = (data.library && data.library.neighborhoods) || [];
      if (neigh.length) {
        var total = 0, k;
        for (k = 0; k < neigh.length; k++) total += (neigh[k].shelves || []).length;
        if (total) return total + " shelves";
      }
      var flat = (data.library && data.library.shelves) || [];
      return flat.length ? flat.length + " shelves" : "";
    }
    if (r.key === "hearth")    { return "changes weekly"; }
    return "";
  }

  /* a window in a wall: white break + double glazing lines */
  function winV(x, y1, y2) {
    return '<rect class="fp-gap" x="' + (x - 4.5) + '" y="' + y1 + '" width="9" height="' + (y2 - y1) + '"/>' +
           '<line class="fp-win" x1="' + (x - 2) + '" y1="' + y1 + '" x2="' + (x - 2) + '" y2="' + y2 + '"/>' +
           '<line class="fp-win" x1="' + (x + 2) + '" y1="' + y1 + '" x2="' + (x + 2) + '" y2="' + y2 + '"/>' +
           '<line class="fp-win" x1="' + (x - 4.5) + '" y1="' + y1 + '" x2="' + (x + 4.5) + '" y2="' + y1 + '"/>' +
           '<line class="fp-win" x1="' + (x - 4.5) + '" y1="' + y2 + '" x2="' + (x + 4.5) + '" y2="' + y2 + '"/>';
  }
  function winH(y, x1, x2) {
    return '<rect class="fp-gap" x="' + x1 + '" y="' + (y - 4.5) + '" width="' + (x2 - x1) + '" height="9"/>' +
           '<line class="fp-win" x1="' + x1 + '" y1="' + (y - 2) + '" x2="' + x2 + '" y2="' + (y - 2) + '"/>' +
           '<line class="fp-win" x1="' + x1 + '" y1="' + (y + 2) + '" x2="' + x2 + '" y2="' + (y + 2) + '"/>' +
           '<line class="fp-win" x1="' + x1 + '" y1="' + (y - 4.5) + '" x2="' + x1 + '" y2="' + (y + 4.5) + '"/>' +
           '<line class="fp-win" x1="' + x2 + '" y1="' + (y - 4.5) + '" x2="' + x2 + '" y2="' + (y + 4.5) + '"/>';
  }

  /* furniture — hand-rendered character, kept clear of the lettering */
  function details(r, data) {
    var g = '<g class="fp-detail">', i;
    if (r.key === "studio") {
      var desks = (data.studio && data.studio.desks) || [];
      for (i = 0; i < Math.min(desks.length, 10); i++) {
        var o = desks[i].owner === "cherenkov" ? "#3fc6ff" : desks[i].owner === "shared" ? "url(#fpShared)" : "#f59e0b";
        var dy = 112 + i * 36;
        g += '<rect x="50" y="' + dy + '" width="28" height="15" rx="1.5" fill="' + o + '" opacity=".8" stroke="#26241f" stroke-width="1"/>';
        g += '<rect x="55" y="' + (dy + 3) + '" width="11" height="9" fill="#fff" opacity=".7"/>';       // paper on the desk
        g += '<circle cx="88" cy="' + (dy + 7) + '" r="3.2" fill="none" stroke="#26241f" stroke-width="1"/>'; // chair
      }
    }
    if (r.key === "hearth") {
      // the fire, recessed in the north wall
      g += '<rect class="fp-gap" x="342" y="34" width="36" height="12"/>';
      g += '<path class="fp-swing" d="M342 46 A18 12 0 0 0 378 46"/>';
      g += '<circle class="fp-hearth-glow" cx="360" cy="54" r="30" fill="#f59e0b" filter="url(#fpBlur)"/>';
      g += '<circle cx="360" cy="50" r="5" fill="#f59e0b"/>';
      // the rug — a watercolour wash
      g += '<ellipse cx="360" cy="118" rx="62" ry="34" fill="#f59e0b" opacity=".1"/>';
      // two host sofas flanking the fire, a low table between
      g += '<rect x="306" y="98" width="38" height="16" rx="5" fill="#f59e0b" opacity=".85" stroke="#26241f" stroke-width="1"/>';
      g += '<rect x="376" y="98" width="38" height="16" rx="5" fill="#3fc6ff" opacity=".85" stroke="#26241f" stroke-width="1"/>';
      g += '<circle cx="360" cy="126" r="9" fill="none" stroke="#26241f" stroke-width="1.1"/>';
      // guest chairs completing the circle
      var seatsArc = [[330,140],[347,148],[373,148],[390,140]];
      for (i = 0; i < seatsArc.length; i++)
        g += '<circle cx="' + seatsArc[i][0] + '" cy="' + seatsArc[i][1] + '" r="3.6" fill="none" stroke="#26241f" stroke-width="1"/>';
      // the bar along the east wall
      g += '<line x1="478" y1="270" x2="478" y2="340" stroke="#26241f" stroke-width="3"/>';
      g += '<circle cx="468" cy="284" r="3" fill="none" stroke="#26241f" stroke-width="1"/>';
      g += '<circle cx="468" cy="306" r="3" fill="none" stroke="#26241f" stroke-width="1"/>';
      g += '<circle cx="468" cy="328" r="3" fill="none" stroke="#26241f" stroke-width="1"/>';
    }
    if (r.key === "pinup") {
      // the wall itself, drawn along the north face, pins from real data
      g += '<line x1="520" y1="78" x2="672" y2="78" stroke="#26241f" stroke-width="1.2"/>';
      var pins = (data.pinup && data.pinup.pins) || [];
      for (i = 0; i < Math.min(pins.length, 8); i++) {
        var win = pins[i].stamp === "WIN";
        g += '<rect x="' + (528 + i * 19) + '" y="62" width="11" height="14" rx="1" fill="' + (win ? "#15734f" : "#98958f") + '" opacity=".85" stroke="#26241f" stroke-width=".8"/>';
      }
      // crit chairs facing the wall
      g += '<circle cx="560" cy="150" r="3.6" fill="none" stroke="#26241f" stroke-width="1"/>' +
           '<circle cx="595" cy="156" r="3.6" fill="none" stroke="#26241f" stroke-width="1"/>' +
           '<circle cx="630" cy="150" r="3.6" fill="none" stroke="#26241f" stroke-width="1"/>';
    }
    if (r.key === "modelshop") {
      // a single bench, kept well clear of the label -- this room doesn't need
      // more furniture than that; it's a hallway, not a lounge
      g += '<rect x="520" y="255" width="30" height="14" rx="4" fill="#f5f0e6" stroke="#26241f" stroke-width="1"/>';
    }
    if (r.key === "precedents") {
      // a small stack of profile cards
      for (i = 0; i < 3; i++)
        g += '<rect x="' + (804 + i * 6) + '" y="' + (215 - i * 3) + '" width="34" height="24" rx="2" fill="#fff" stroke="#26241f" stroke-width="1" opacity="' + (1 - i * 0.15) + '"/>';
    }
    if (r.key === "roadmap") {
      // a branching path, three small forks
      g += '<path class="fp-ink" style="stroke-width:1.2" d="M800 320 L830 320 M830 320 L850 308 M830 320 L850 332"/>';
      g += '<circle cx="800" cy="320" r="2.6" fill="#26241f"/><circle cx="850" cy="308" r="2.6" fill="none" stroke="#26241f" stroke-width="1"/><circle cx="850" cy="332" r="2.6" fill="none" stroke="#26241f" stroke-width="1"/>';
    }
    if (r.key === "ideas") {
      // scattered pin dots, not a neat row -- these haven't organized themselves yet
      var sparks = [[805,420],[822,432],[812,443],[835,418],[845,436]];
      for (i = 0; i < sparks.length; i++)
        g += '<circle cx="' + sparks[i][0] + '" cy="' + sparks[i][1] + '" r="2.4" fill="none" stroke="#26241f" stroke-width="1" stroke-dasharray="1.5 1.5"/>';
    }
    if (r.key === "library") {
      // the stacks — double-line shelving like the reference
      for (i = 0; i < 3; i++) {
        var lx = 512 + i * 20;
        g += '<line x1="' + lx + '" y1="310" x2="' + lx + '" y2="352" stroke="#26241f" stroke-width="1.1"/>' +
             '<line x1="' + (lx + 5) + '" y1="310" x2="' + (lx + 5) + '" y2="352" stroke="#26241f" stroke-width="1.1"/>';
      }
      // a reading chair by the window
      g += '<circle cx="628" cy="332" r="4" fill="none" stroke="#26241f" stroke-width="1"/>';
    }
    return g + '</g>';
  }

  function roomSVG(r, current, data) {
    var here = r.key === current;
    var X = cx(r), Y = cy(r);
    var side = r.labelSide === "right";
    var cls = "fp-room" + (here ? " here" : "") + (side ? " side-label" : "");
    var hue = HUES[r.hue] || HUES.amber;
    var style = "--room-deep:" + hue.deep + ";--room-wash:" + hue.wash + ";--room-dot:" + hue.dot + ";";
    var g = '<a href="' + r.href + '" class="' + cls + '" data-key="' + r.key + '" style="' + style + '">';
    g += '<title>' + esc(r.name) + (here ? " — you are here" : "") + '</title>';
    // most rooms are a plain rectangle; a room can instead give its own outline path
    // (the Strategic Hub does — it IS the hallway, drawn as one continuous L, not a
    // small box with a separate corridor bolted on beside it)
    if (r.path) g += '<path class="cell" d="' + r.path + '" fill="' + (here ? hue.wash : r.wash) + '"/>';
    else g += '<rect class="cell" x="' + r.x + '" y="' + r.y + '" width="' + r.w + '" height="' + r.h + '" fill="' + (here ? hue.wash : r.wash) + '"/>';
    g += details(r, data);

    // the label: centered, low in the room, by default — clear of the furniture
    // in every room except one. Studio's desk stack fills that same low-center
    // spot, so its label moves to the room's clear side instead, right-aligned.
    var anchor = side ? "end" : "middle";
    var lx = side ? (r.x + r.w - 14) : X;
    var ly = (r.labelY !== undefined) ? r.labelY : (side ? Y : (r.key === "hearth" ? Y + 26 : Y + 9));

    if (here) {
      var dotY = ly - (side ? 19 : 17);
      g += '<circle class="fp-here-dot-halo" cx="' + lx + '" cy="' + dotY + '" r="7.5"/>';
      g += '<circle class="fp-here-dot" cx="' + lx + '" cy="' + dotY + '" r="4"/>';
    }

    g += '<text class="rname" x="' + lx + '" y="' + ly + '" text-anchor="' + anchor + '">' + esc(r.planLabel || r.name) + '</text>';
    var b = badge(r, data);
    if (b) g += '<text class="fp-badge" x="' + lx + '" y="' + (ly + 17) + '" text-anchor="' + anchor + '">' + esc(b) + '</text>';
    return g + '</a>';
  }

  /* a door through a vertical shared wall at x, opening span [y1,y2] */
  function doorV(x, y1, y2, dir) {
    var span = y2 - y1;
    return '<rect class="fp-gap" x="' + (x - 5) + '" y="' + y1 + '" width="10" height="' + span + '"/>' +
           '<line class="fp-swing" x1="' + x + '" y1="' + y1 + '" x2="' + (x + dir * span) + '" y2="' + y1 + '"/>' +
           '<path class="fp-swing" d="M' + (x + dir * span) + ' ' + y1 + ' A' + span + ' ' + span + ' 0 0 ' + (dir > 0 ? 1 : 0) + ' ' + x + ' ' + y2 + '"/>';
  }

  function build(current, data) {
    var svg = '<svg class="fp-svg" viewBox="0 0 1000 510" role="img" aria-label="Floor plan of the open studio" xmlns="http://www.w3.org/2000/svg">';
    svg += '<defs><filter id="fpBlur" x="-80%" y="-80%" width="260%" height="260%"><feGaussianBlur stdDeviation="12"/></filter>' +
           '<linearGradient id="fpShared" x1="0" y1="0" x2="1" y2="0"><stop offset="46%" stop-color="#f59e0b"/><stop offset="54%" stop-color="#3fc6ff"/></linearGradient></defs>';
    // rooms — thick strokes are the poché; shared edges merge into party walls.
    // the Strategic Hub is drawn as one L-shaped room, not a small box plus a
    // separate corridor — it IS the hallway, so there's no extra shape here.
    for (var i = 0; i < ROOMS.length; i++) svg += roomSVG(ROOMS[i], current, data);
    // windows in the outer walls
    svg += winV(30, 140, 195) + winV(30, 250, 305);        // studio, west light
    svg += winH(40, 262, 320) + winH(40, 400, 458);        // hearth, north light either side of the fire
    svg += winH(40, 560, 640);                              // pin-up wall, north light
    svg += winV(660, 318, 372);                             // library, east light
    svg += winV(980, 218, 258) + winV(980, 316, 356) + winV(980, 420, 452); // the new wing, east light
    // doors off the Hearth
    svg += doorV(230, 210, 246, -1);   // -> studio
    svg += doorV(490, 105, 141, 1);    // -> pin-up wall
    svg += doorV(490, 225, 261, 1);    // -> strategic hub
    svg += doorV(490, 330, 366, 1);    // -> library
    // three doors off the hub's own east wall, straight into each room --
    // no intermediate corridor wall, because the hub already is the corridor
    svg += doorV(780, 218, 248, 1);    // hub -> precedents
    svg += doorV(780, 322, 352, 1);    // hub -> roadmap
    svg += doorV(780, 420, 450, 1);    // hub -> ideas
    // the way in — a portico with steps through the south wall
    svg += '<rect class="fp-gap" x="342" y="395" width="36" height="10"/>';
    svg += '<path class="fp-swing" d="M342 396 A36 36 0 0 1 378 396"/>';
    for (i = 0; i < 3; i++)
      svg += '<line class="fp-ink" style="stroke-width:1.1" x1="' + (338 - i * 4) + '" y1="' + (410 + i * 7) + '" x2="' + (382 + i * 4) + '" y2="' + (410 + i * 7) + '"/>';
    svg += '<path class="fp-ink" d="M360 452 L360 438"/><path class="fp-ink" d="M356 444 L360 436 L364 444"/>';
    svg += '<text class="fp-n" x="374" y="452">way in</text>';
    // north arrow
    svg += '<g transform="translate(964,22)"><line class="fp-ink" x1="0" y1="14" x2="0" y2="-6"/>' +
           '<path class="fp-ink" d="M-4 -1 L0 -9 L4 -1"/><text class="fp-n" x="0" y="27" text-anchor="middle">N</text></g>';
    // title block + a scale bar that tells the truth -- sits below every room now,
    // clear of the new wing (its lowest room, Ideas, bottoms out at y=480)
    svg += '<text class="fp-meta" x="20" y="494">DIALOG INTELLIGENCE</text>';
    svg += '<text class="fp-meta" x="980" y="494" text-anchor="end">FLOOR PLAN &#183; v2026-07-28.4</text>';
    svg += '<g transform="translate(20,502)">' +
           '<rect x="0" y="0" width="24" height="4" fill="#26241f"/><rect x="24" y="0" width="24" height="4" fill="none" stroke="#26241f" stroke-width=".8"/>' +
           '<rect x="48" y="0" width="24" height="4" fill="#26241f"/>' +
           '<text class="fp-n" x="82" y="6">n.t.s. &#8212; it&#8217;s a metaphor</text></g>';
    svg += '<text class="fp-meta" x="980" y="507" text-anchor="end" style="letter-spacing:.1em;fill:#b8b4ac;">THE DESKS (LAYER 2) ARE OFF-PLAN &#8212; BY DESIGN</text>';
    svg += '</svg>';
    return svg;
  }

  window.renderFloorplan = function (mount, current) {
    if (!mount) return;
    injectStyle();
    var data = window.ROOMS_PAYLOAD || {};
    var touch = window.matchMedia && window.matchMedia("(hover: none)").matches;
    mount.className = (mount.className ? mount.className + " " : "") + "fp-wrap";
    mount.innerHTML = build(current, data) + '<div class="fp-explain" aria-live="polite"></div>';

    var svg = mount.querySelector(".fp-svg");
    var explain = mount.querySelector(".fp-explain");
    var defaultDesc = touch ? TOUCH_DESC : DEFAULT_DESC;
    function setDesc(txt){ explain.textContent = txt; }
    setDesc(defaultDesc);

    var peeked = null;
    var anchors = mount.querySelectorAll(".fp-room");
    for (var i = 0; i < anchors.length; i++) (function(a){
      var key = a.getAttribute("data-key"), room = null;
      for (var j = 0; j < ROOMS.length; j++) if (ROOMS[j].key === key) room = ROOMS[j];
      if (!room) return;
      if (touch) {
        a.addEventListener("click", function(e){
          if (peeked !== key) {
            e.preventDefault();
            if (peeked) { var prev = mount.querySelector('.fp-room[data-key="' + peeked + '"]'); if (prev) prev.classList.remove("peek"); }
            peeked = key; a.classList.add("peek"); svg.classList.add("lit"); setDesc(room.desc);
          }
        });
      } else {
        a.addEventListener("mouseenter", function(){ svg.classList.add("lit"); setDesc(room.desc); });
        a.addEventListener("focus", function(){ svg.classList.add("lit"); setDesc(room.desc); });
        a.addEventListener("mouseleave", function(){ svg.classList.remove("lit"); setDesc(defaultDesc); });
        a.addEventListener("blur", function(){ svg.classList.remove("lit"); setDesc(defaultDesc); });
      }
    })(anchors[i]);
  };
})();
