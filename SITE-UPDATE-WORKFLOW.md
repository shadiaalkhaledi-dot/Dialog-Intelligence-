SESSION_VERSION 2026-07-25.2 — simplified after real feedback: no handoffs/
folder, no naming scheme, one shared prompt either Shadi or Ben runs. Handoff
files just get handed over directly (Cowork's shared folder, upload, or
paste) when it's time to fold something in.

# The site update workflow

## Two moments, not one

Most of the real work — Workplan Estimator, Spec Finder, whatever's next —
happens in its own Cowork/Claude session, in that project's own files. That
session has the real context. A DIALOG Intelligence site session has none of
it — it only knows what it's handed. So:

1. **Capture** — right where the work happens, in that project's own
   session, close to when it happened.
2. **Fold in** — separately, whenever either of you actually has a site
   session going. Could be right after, could be days later with several
   things to fold in at once.

No folder to manage, no file-naming convention, no project slugs to invent.
Existing projects keep whatever names they already have. When a handoff's
ready, just hand it over — drop it in the shared Cowork folder, paste it,
upload it, whatever's easiest that day.

## Part 1 — the handoff prompt (one shared prompt, either of you runs it)

Paste this into the project's own session, near the end of it, if anything
DT-facing actually moved:

```
Before we close this session: if anything happened here that DT would
actually want to know about — a status change, a real decision, a number,
a win, a fail, a new open question, a new risk — write me a short factual
note for the DIALOG Intelligence site. Don't summarize everything we did;
only what's genuinely update-worthy. If nothing like that happened, say so
and skip it — an empty cycle is fine, don't invent one.

Use this project's real name, exactly as we already call it — don't invent
a new name or shorten it into something else.

Shape:

## <this project's real name> — <YYYY-MM-DD>

**What changed:** (plainly — a stage move, a decision, a real number, a
win/fail, a new blocker, whatever's actually real)

**Not ready yet:** (anything explicitly not for public DT eyes right now)

**Real quote worth keeping, if there was one:** (an actual exchange between
Shadi and Ben working through a real disagreement or decision — not
decoration, not invented. Leave blank if there wasn't one.)

Give me the text directly — I'll hand it to Claude in a DIALOG Intelligence
session myself.
```

## Part 2 — folding it in (what to say, and what actually happens)

When you're ready, open a DIALOG Intelligence session and just say something
like: *"Here's an update from a project session — update its desk, and
anything else on the site this actually affects."* Then hand over the file
(Cowork's shared folder, upload, or paste).

From there, this is on the site session to get right, not something you
need to script yourself:

1. Read the note plainly — don't infer more than it actually says.
2. Update the desk it's about, using the real existing schema (below) —
   `problem`/`how`/`proof`/`risk`/`lesson`/`asks`/`script`, whichever
   changed.
3. Then look past that one desk: does this also move the roadmap (a
   pocket's status or next step), earn a real Pin-up Wall entry, change a
   floorplan count, touch the Library, or belong in the Hearth's weekly
   line? Only touch what the note actually supports — propagate real
   implications, don't invent new ones.
4. If real ambiguity remains anywhere in that — which desk, whether a stage
   genuinely moved, whether a quote's real enough to use — ask directly
   rather than guessing or padding it out.
5. Standing rules, unchanged from how this site has always been built:
   knowledge, not people (no client names, fee data, or personal info,
   anywhere); real facts only — no invented progress, numbers, or quotes;
   verify before calling it done (JSON re-parse + byte-check on
   `rooms-payload.js`, a render check on any page touched); repackage the
   full site; log what changed in `DIALOG-Intelligence-memory.md`; present
   the result.
6. If the note flagged something as "not ready yet," leave it out and say
   so — don't silently drop it without mentioning it.

This also covers material that isn't a handoff note at all — a shared
presentation, a screenshot, a direct correction from either of you. Same
approach: read what's actually there, update what it actually supports,
ask where it doesn't.

## Part 3 — the room-by-room reference

So the fold-in step never has to go dig through `rooms-payload.js` to
remember a field name.

**Studio Floor** — one object per desk, under `studio.desks[]`:
`name`, `owner`/`owners`, `tag`, `stage` (concept/prototype/pilot/live/shelved),
`updated`, `problem`, `how`, `proof`, `risk`, `lesson`, `asks[]`
(`{status, text}`), `script[]` (`{who, t}` — the discussion).

**The Charrette** (was "Pin-up Wall," renamed 2026-07-28 — same data key, copy
only) — one object per pin, under `pinup.pins[]`: `stamp` (WIN/FAIL), `date`,
`author`, `tried`, `happened`, `verdict`, `desk`, `rule` (the standing rule
this pin earned), `category`.

**Strategic Hub** (was "Playbook," split 2026-07-28 into three rooms) — the
hub landing itself lives under `modelshop` (`{eyebrow, h1, lead, note,
doors[]}` — same data key as before, reshaped). The three rooms behind it:

- **Precedents** — `precedents.companies[]`, each a full profile (same
  shape the old `modelshop.inspiration` used: `source`, `stages[]`,
  `numbers[]`, `governance[]`, `deepDives[]`, `openQuestions[]`, `sources[]`).
- **Roadmap** — rebuilt four times the same day. First cut still revolved
  around BIG instead of us. Second cut fixed that but added
  `roadmap.ourState`, a flat per-desk bio list — real feedback that this just
  re-narrated the Studio Floor's own desks. Third cut dropped `ourState` and
  surfaced `map.branches` (present in the data since the first split but
  never rendered) as the Map tab's lead content — but left a full desk-by-desk
  walkthrough sitting underneath it, plus an 8-step "Where We're Headed" list:
  three near-duplicate representations of the same eight desks, still not a
  real roadmap. Fourth cut (current): `roadmap.map.spine` (BIG's own 4-stage
  timeline, dead in the render and wrongly labeling DIALOG's own current
  state as BIG's stage 4) deleted outright; the desk-by-desk walkthrough
  removed from the Map tab entirely — it's now just `stageTally` + the three
  `branches[]` track cards + the glossary, nothing repeated. Current shape:
  `roadmap.stageTally` (`[{stage, n}]`, real aggregate); `roadmap.map`
  (`{eyebrow, h1, lead, pockets[], opportunity, offPath[], offPathLabel,
  glossary[], branches[]}` — `pockets`/`opportunity`/`offPath` now exist
  purely as lookup data for the tracks' desk-chip links, not as their own
  rendered section; `branches[]` is `{id, color, label, sub, memberIds[],
  hubId?}`, the three real tracks); `roadmap.ourPlan` reshaped again —
  `{eyebrow, h1, lead, gate, lanes[]}`. `gate` is `{label, note, deskSlug}`,
  one real blocking decision (the sandbox / DT-partnership / DASH sign-off
  ask already logged on Dialog Intelligence's own desk). `lanes[]` is
  `{id, title, color, items[]}`, items are `{name, text, deskSlug}` —
  four lanes ("now — no gate needed", "waiting on the gate", "the one branch
  worth trying", "open even for BIG"), replacing the old flat `steps[]` and
  absorbing what used to be a separate `map.forwardRoads[]` (now deleted —
  its real content lives in the lanes, not duplicated). `roadmap.gap`,
  `.masterplan`, `.ourState`, `.map.spine`, `.map.forwardRoads`, and
  `.map.legend` no longer exist. The room's own nav is still 3 tabs: The Map,
  Where We're Headed, Learning from Precedents.
- **Ideas** — `ideas.models[]` (was `modelshop.models[]`): `name`, `status`
  (`promoted`/`abandoned`/`open`), `proposes`, `needs`, `why`. `ideas.openNote`
  covers the case where nothing's currently sitting in the `open` state —
  say so honestly rather than inventing a placeholder entry.

**Library** — `library.neighborhoods[]`, each `{name, shelves[]}`; each shelf
is `{name, status, lives, asking, kind, url}`.

**The Hearth** — `hearth.weeks[]` (in `assets/hearth-payload.js`), each
`{id, label, date, tag, topic, lines[] ({who, t})}` — the weekly headline
conversation.

## Open questions still for Shadi and Ben to settle

- Should Claude offer the Part 1 prompt on its own, near the end of any
  DIALOG-related session, instead of either of you needing to ask for it?
  Worth doing once this shape has held up under real use for a while.
- Does Ben want anything different about Part 2, or is one shared approach
  enough since you're both drawing from the same schema?
- Carried over, still unresolved: should asks carry a priority; does
  "shelved" need its own short why; is a per-desk changelog worth it beyond
  what the Pin-up Wall already records.

## Changelog

- 2026-07-28.4 — real feedback, same day: "still looks off... think of this like
  a real roadmap." Diagnosed the actual problem: the Map tab's new tracks were
  sitting on top of a full desk-by-desk walkthrough that just re-narrated the
  same eight desks a third time (tracks, walkthrough, and Where We're Headed's
  8-step list were three overlapping views of the same handful of desks).
  Deleted the walkthrough and the dead `map.spine` (BIG's own 4-stage timeline,
  never rendered, and mislabeling DIALOG's current state as BIG's own stage 4).
  Rebuilt Where We're Headed around one real gate — the sandbox / DT-partnership
  / DASH sign-off decision several old steps were separately gesturing at —
  plus four lanes organized by real dependency (moving now / waiting on the
  gate / the one branch worth trying / open even for BIG), absorbing what used
  to be a separate `forwardRoads` list. Also researched Shadi's Forma question
  directly: no dedicated Forma MCP server exists yet, but Autodesk publishes
  official ones for Revit and Fusion today plus a documented path to build
  custom MCP servers on Autodesk Platform Services, and Forma has its own
  Site Design API (beta) — logged as a real, dated open ask on the Design
  Process Tool's own desk, not just written up here. Also caught and fixed a
  bug this deletion would otherwise have caused: `index.html`, `modelshop.html`,
  and `floorplan.js` each computed a "roadmap steps" badge count by reading
  `map.forwardRoads.length` (now deleted) — badge would have silently
  undercounted instead of erroring, since all three read it through
  `(rm.forwardRoads || [])`. Changed all three to count `map.branches.length`
  instead and relabeled the badge "N-track roadmap" (was "N-step roadmap").
- 2026-07-28.3 — real feedback, same day: the floor plan never actually drew
  the three new rooms (it just renamed the old Playbook box) — redrawn with
  the Strategic Hub as one L-shaped room that IS the corridor (not a small
  box plus a separate unlabeled hallway), three real rooms visibly behind
  it. Roadmap's "Where We Stand" tab removed entirely — it was a flat re-list
  of the 8 desks, redundant with the Studio Floor. `roadmap.map.branches`
  (three real tracks, present in the data since the first split but never
  rendered, and still labeled by BIG's own stage numbers) is now the Map
  tab's actual lead content, relabeled around our own framing. 3 tabs now,
  not 4.
- 2026-07-28.2 — Roadmap rebuilt a second time same day after real feedback:
  the first split still measured DIALOG against BIG's own four stages as the
  organizing spine. Replaced with Where We Stand / Where We're Headed (both
  sourced from real desk data) / The Map (kept) / Learning from Precedents
  (kept, relabeled as one branch). Precedents rebuilt as a card-picker
  (menu → detail, like the Studio Floor) instead of dumping the full profile.
  Ideas gained a real "open" idea. Floor plan redrawn with a real corridor and
  three visible rooms behind the Strategic Hub door, each its own colour
  (teal / violet / rose) instead of one blanket blue.
- 2026-07-28.1 — room-by-room reference updated for today's restructure: Pin-up
  Wall renamed Charrette (same key); Playbook split into a Strategic Hub
  landing plus three rooms (Precedents, Roadmap, Ideas) — see the room-by-room
  section above for the new key paths.
- 2026-07-25.2 — dropped the `handoffs/` folder and project-slug naming
  from the first draft after real feedback: no new bookkeeping, no invented
  project names, handoffs get handed over directly (shared Cowork folder,
  upload, or paste). Confirmed as one shared prompt either Shadi or Ben
  runs — not separate personalized versions.
- 2026-07-25.1 — replaced PROJECT-UPDATE-PROMPT.md. Expanded from a single
  Studio Floor desk prompt to a two-part workflow covering every room, with
  a room-by-room schema reference.
- 2026-07-24.2 (carried over) — renamed the desk anatomy from
  origin/does/tuesday/broke/steal to problem/how/proof/risk/lesson, and made
  "discussion" an explicit field instead of an unlabeled script array.
- 2026-07-24.1 (carried over) — first draft, written alongside the
  stage/asks schema added to the Studio Floor cards.
