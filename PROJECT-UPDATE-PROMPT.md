# The project-update prompt

PROMPT_VERSION 2026-07-24.2 — revised after renaming the desk anatomy from a
personal-project narrative (origin/does/tuesday/broke/steal) to a proper project
record (problem/how/proof/risk/lesson), because the old shape stopped making sense
once these desks are real projects DT is evaluating, not just show-and-tell between
two people. Keep iterating this file as Shadi and Ben actually use it; it's a living
tool, not a spec.

## What this is

Shadi and Ben each work on several tools in parallel, often in separate AI sessions
per project. This is the one prompt either of them runs, inside that project's own
session, to pull a status update in a shape that drops straight into
`assets/rooms-payload.js` on the Studio Floor — no manual reformatting.

Run it roughly weekly, before the Hearth's Friday refresh, on any desk that moved.
A desk with nothing new is allowed to skip a cycle — don't invent progress.

## The prompt

Paste this into the project's own session (the one that actually has context on the
tool — its code, its data, its recent history):

```
You're helping me write a status update for this project's desk on the DIALOG
Intelligence Studio Floor. This has to read as a real project record — DT reviews
these — not a highlight reel. Look at what's actually changed since the last
update — code, data, decisions, conversations — and answer honestly, not
optimistically.

Give me back exactly this JSON shape, nothing else:

{
  "stage": "concept | prototype | pilot | live | shelved",
  "updated": "YYYY-MM-DD",
  "problem": "the problem being solved and who it affects — one person's workflow,
              a studio's, or firm-wide. Not 'an annoyance' — the actual stakes.",
  "how": "how it actually works today, specific enough that a technical reader
          could evaluate it. No marketing language.",
  "proof": "a concrete Before: ... After: ... — and any real numbers you have
            (time saved, accuracy, projects touched, adoption). An anecdote
            alone isn't proof once this is a real project.",
  "risk": "what's still unproven or fragile if this scaled past the desk it's on
           today. Known limitations and how they're being handled — not just
           what broke in the past, though that belongs here too.",
  "lesson": "the one lesson worth reusing elsewhere",
  "asks": [
    { "status": "open | answered", "text": "one concrete thing needed from DT —
      access, a decision, a resource. Leave the array empty if there's genuinely
      nothing to ask for right now." }
  ],
  "discussion": [
    { "who": "amber | ben", "t": "one real exchange line" }
  ]
}

Rules:
- Knowledge, not people: no client names, no fee or rate data, no personal
  information, anywhere in the output.
- Stage moves forward (or to "shelved") only when something real changed it —
  not on a schedule.
- "risk" is mandatory in spirit: a desk with no risk section hasn't been used
  enough to be on this floor, or someone's being optimistic. Say "nothing new
  this cycle" if that's the honest answer — don't leave it blank.
- Asks are for DT specifically — things only he can unblock. Not a wishlist,
  not a task list for Shadi or Ben.
- "discussion" is the two of you actually working through the risk, the
  readiness, or a disagreement — not decoration, and not invented. If there
  wasn't a real conversation this cycle, leave the array empty rather than
  writing a fake one. A missing discussion is honest; a fabricated one isn't.
```

## Dropping the result in

1. Open `assets/rooms-payload.js`.
2. Find the desk by name under `studio.desks`.
3. Update `stage`, `updated`, and `asks` directly; merge `problem`/`how`/`proof`/
   `risk`/`lesson`/`discussion` (the `script` field) by hand if the new wording is
   better than what's there (don't auto-overwrite prose without reading it — the
   voice matters as much as the facts).
4. Re-parse the file before saving over the real one (`JSON.parse` after stripping
   the `window.ROOMS_PAYLOAD = ` prefix) and byte-check the write. This is a house
   rule now, pinned 2026-07-12 for a reason: a silent truncation on a file this size
   won't announce itself.
5. If a stage changed, or an ask opened or closed, that's worth a line on the
   Pin-up Wall — it's exactly the kind of real movement that wall exists to record.

## Open questions for Shadi and Ben to settle as this gets used

- Should asks carry a priority (urgent / whenever), or does open/answered cover it?
- Does "shelved" need its own short "why," the way abandoned Charrette ideas do?
- Worth a lightweight changelog per desk (last 3 updates), or is the Pin-up Wall
  already that changelog?
- Should "proof" require at least one real number once a desk reaches "pilot" or
  "live," or is a before/after still enough on its own?

## Changelog

- 2026-07-24.2 — renamed the anatomy from origin/does/tuesday/broke/steal to
  problem/how/proof/risk/lesson, and made "discussion" an explicit field instead
  of an unlabeled script array — same honesty rule applies: don't fabricate one.
- 2026-07-24.1 — first draft, written alongside the stage/asks schema added to the
  Studio Floor cards.
