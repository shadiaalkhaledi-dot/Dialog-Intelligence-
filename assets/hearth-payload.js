/* The Hearth's content — plain payload, no gate. The weekly drain rewrites this.
   `weeks` is the archive: newest first. This week is weeks[0]; older weeks page
   back from it. The drain appends a new object to the front of `weeks` each Friday.
   `bar` topics are NOT authored here — the Hearth builds them live from the real
   per-desk conversations in rooms-payload.js, so the bar can never drift from the
   floor. Feynman's lines adapted near-verbatim from Ben's drafted intro material. */
window.HEARTH_PAYLOAD = {
 "version": "2026-07-28.1",
 "hero": {
  "eyebrow": "DIALOG INTELLIGENCE",
  "line": "A working record of what two of us are building with AI at DIALOG."
 },
 "intro": {
  "eyebrow": "NEW HERE? START WITH A JOURNEY",
  "title": "What's in the building, and where to start",
  "body": [
   "Plenty of people at DIALOG already use AI day to day. This is the corner where two of us — Shadi and Ben — publish our results in the open: the tools we build, what they change on an ordinary Tuesday, and what breaks.",
   "One rule governs everything you'll read: knowledge, not people. Tools, lessons, and numbers about the work — never client names, fee data, or anyone's personal information."
  ],
  "voicesNote": "Two voices narrate the building, equal weight:",
  "journeyLabel": "If you haven't been here before, read the rooms in this order:",
  "journey": [
   {
    "n": 1,
    "room": "Strategic Hub",
    "href": "modelshop.html",
    "why": "Start here. One door into three rooms — Precedents (what other firms have actually done), Roadmap (an honest read of where DIALOG stands, and what follows), Ideas (sparks that haven't become anything yet). Open Roadmap first for the context everything else on this site sits inside."
   },
   {
    "n": 2,
    "room": "Studio Floor",
    "href": "studio.html",
    "why": "One desk per real tool — status, what's needed from DT, and the actual argument behind each decision, not just a headline."
   },
   {
    "n": 3,
    "room": "Charrette",
    "href": "pinup.html",
    "why": "The house rules we've actually earned from real wins and real fails — how we build, how we judge."
   },
   {
    "n": 4,
    "room": "The Library",
    "href": "library.html",
    "why": "The map of DIALOG's own knowledge — what a future grounded-AI answer would actually be built on."
   },
   {
    "n": 5,
    "room": "The Hearth",
    "href": "index.html",
    "why": "You're already here. Come back to this room for the weekly conversation and what's changed since your last visit."
   }
  ]
 },
 "weeks": [
  {
   "id": "2026-07-28",
   "label": "By the fire — this week",
   "date": "2026-07-28",
   "tag": "weekly",
   "topic": "The Playbook became three rooms",
   "lines": [
    {
     "who": "amber",
     "t": "Housekeeping, out loud: the Pin-up Wall is now the Charrette. Same room, same ritual -- we're just calling the exercise what it actually is, and leading with it as house rules instead of a diary of old pins."
    },
    {
     "who": "ben",
     "t": "And the Playbook's gone -- split into three. Precedents holds the outside research, BIG so far. Roadmap is our own state, informed by that but ours. Ideas is the actual pin-up wall now: raw sparks that haven't become anything yet."
    },
    {
     "who": "amber",
     "t": "One door in from the floor plan -- the Strategic Hub -- three doors out. Same content as the old six-tab page, just given room to actually grow instead of getting buried under a tab."
    },
    {
     "who": "ben",
     "t": "Nothing invented here. Every number on Precedents and Roadmap moved verbatim from the old Playbook. The only new thing is a slot on Ideas for something that hasn't resolved yet -- empty for now, on purpose."
    }
   ],
   "handoff": {
    "t": "Walk the Strategic Hub →",
    "href": "modelshop.html"
   }
  },
  {
   "id": "2026-07-08",
   "label": "By the fire — this week",
   "date": "2026-07-08",
   "tag": "intro",
   "topic": "Welcome to the studio",
   "lines": [
    {
     "who": "amber",
     "t": "Since you're new here, the short version: plenty of people at DIALOG use AI day to day. This is the corner where two of us publish our results — the tools we build, what they change, and what breaks. That last part stays on the record on purpose."
    },
    {
     "who": "ben",
     "t": "I'm Feynman. I check the numbers before anyone celebrates — mostly because I've been wrong enough times to know better. Cherenkov blue, if you're wondering: the glow a reactor gives off when it's actually running."
    },
    {
     "who": "amber",
     "t": "I'm Amber — Shadi's voice, your host. The floor plan above is real navigation: hover a room to see what happens inside it, click to walk in."
    },
    {
     "who": "ben",
     "t": "If you only have a minute, start with the wall. Wins and fails, dated, equal typography. If it were all wins, we'd be lying — that's why it isn't."
    },
    {
     "who": "amber",
     "t": "And one rule governs everything you'll read: knowledge, not people. Tools and lessons — never client names, fee data, or anyone's personal information."
    }
   ],
   "handoff": {
    "t": "Continue to the wall →",
    "href": "pinup.html"
   }
  }
 ],
 "spots": {
  "bar": {
   "label": "At the bar — side conversations, by topic",
   "quiet": "Quiet this week. Conversations land here as the work happens — and a quiet week is allowed to look quiet.",
   "note": "Pulled live from the desks on the Studio Floor. Pick a topic to hear the two of us think it through — then walk over to the desk itself."
  },
  "gallery": {
   "label": "In the gallery — latest from the wall",
   "handoff": {
    "t": "All pins →",
    "href": "pinup.html"
   }
  }
 },
 "voices": [
  {
   "name": "Amber",
   "tag": "the host · Shadi",
   "state": "occupied",
   "desc": "The voice on the amber side. Runs the room: welcomes you in, tells the truth about the state of the work, and points you to the right door."
  },
  {
   "name": "Feynman",
   "tag": "the inspector · Ben",
   "state": "occupied-ben",
   "desc": "The voice on the blue side. Plain and quantified — every claim comes with a receipt. Cherenkov blue: the glow of a reactor that's actually running."
  }
 ],
 "rules": [
  {
   "h": "Honest by design",
   "t": "A failure is pinned with the same typography as a win. A month with no FAIL on the wall means we stopped experimenting."
  },
  {
   "h": "Knowledge, not people",
   "t": "Tools, lessons, and numbers about the work — never client names, fee or rate data, or anyone's personal information."
  },
  {
   "h": "A weekly rhythm",
   "t": "The hearth changes every Friday: a new headline, new conversations at the edges. A quiet week is allowed to look quiet."
  }
 ],
 "footer": "DIALOG Intelligence — an honest record of two people using AI at DIALOG. Knowledge, not people."
};
/* Back-compat: some views still read spots.fire — keep it pointed at this week. */
window.HEARTH_PAYLOAD.spots.fire = window.HEARTH_PAYLOAD.weeks[0];
