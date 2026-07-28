window.ROOMS_PAYLOAD = {
  "building": [
    {
      "name": "The Hearth",
      "href": "index.html"
    },
    {
      "name": "Studio Floor",
      "href": "studio.html"
    },
    {
      "name": "Charrette",
      "href": "pinup.html"
    },
    {
      "name": "Strategic Hub",
      "href": "modelshop.html"
    },
    {
      "name": "The Library",
      "href": "library.html"
    }
  ],
  "studio": {
    "eyebrow": "THE STUDIO FLOOR",
    "h1": "Where the desks are.",
    "lead": "Every project gets a desk, narrated by whoever built it. Desks appear when something's worth building, and they're allowed to retire — a floor where nothing ever dies is marketing, not a studio.",
    "desks": [
      {
        "name": "The Work Tracker",
        "owner": "shared",
        "owners": [
          "amber",
          "cherenkov"
        ],
        "tag": "Shared desk — Shadi + Ben",
        "status": "live",
        "script": [
          {
            "who": "amber",
            "t": "This one's mine originally — TASKS.md in, tracker out. Then a friend stood up their own copy from the starter kit, no help from me."
          },
          {
            "who": "ben",
            "t": "The friend was practice. I run the real second instance — same root, my own vault, my own deadlines."
          },
          {
            "who": "amber",
            "t": "And you found the schema drift bug on your copy before I found it on mine."
          },
          {
            "who": "ben",
            "t": "Receipts. Passed it back the same day. That's the whole loop."
          },
          {
            "who": "amber",
            "t": "Update, since we're being honest about where this actually sits: I moved it from concept to pilot on the wall. Two real instances, real use, a real bug caught in the wild — that's not a demo anymore."
          },
          {
            "who": "ben",
            "t": "It's also not live. It's two files on GitHub Pages behind a password, not a tool DIALOG runs. 'Pilot' is the right word — 'live' was me being generous to myself."
          },
          {
            "who": "amber",
            "t": "Fair. Full integration is the actual next step, and now it's written down instead of implied."
          },
          {
            "who": "ben",
            "t": "Good. Implied things don't get fixed. Written-down things do."
          }
        ],
        "stage": "pilot",
        "updated": "2026-07-24",
        "asks": [],
        "problem": "Deadlines scattered across notebooks, chats, and memory. The chasing took longer than the work. Ben had the same problem on his own desk.",
        "how": "TASKS.md in Obsidian becomes data.json becomes a password-gated GitHub Pages tracker, with a Quick Capture line for logging on the go. Two files, no server — and a starter kit good enough that someone else could stand one up alone. Ben did: his own tracker, same root, kept in his own vault.",
        "proof": "Before: 'where did I write that deadline?' — twenty minutes, three apps. After: one page, one freshness stamp, ten seconds. True on both of our trackers.",
        "risk": "Schema drift kept silently eating fields until a regression guard was built into the generator. Running two independent instances off one root turned into its own small feedback loop — a fix or a habit either of us finds gets passed to the other, informally, session by session. It also still lives on GitHub Pages rather than a DIALOG-native tool — full integration is the real next step before this moves past pilot.",
        "lesson": "The starter kit and full guide are on the main site — Work Tracker page. KIT_VERSION stamped, password gate included. One root, two trackers, one open channel of feedback between them."
      },
      {
        "name": "Spec Finder",
        "owner": "amber",
        "tag": "Shadi's desk",
        "status": "v0.1 · 2 seeds, one typology",
        "script": [
          {
            "who": "amber",
            "t": "This one's mine — a static page carrying a 476-section catalog and a 3,250-keyword dictionary. No server, no model calls, all client-side."
          },
          {
            "who": "amber",
            "t": "Two seeds on the books right now, both airports. 88 and 72 on one, 54 and 49 on the other — good numbers on a small, single-typology sample, and I'm not calling that proven yet."
          },
          {
            "who": "amber",
            "t": "The scan isn't the hard part. Making a keyword earn its keep across more than one project before I trust it — that's the hard part."
          },
          {
            "who": "amber",
            "t": "Update: the site itself is at v1 now. Which sounds further along than it is — v1 means the interface is done, not that the dictionary's proven."
          },
          {
            "who": "amber",
            "t": "The honest next step isn't a feature. It's access — more previous drawings, more previous spec lists, more typologies than two airports. I can't out-code my way past a sample size problem."
          },
          {
            "who": "amber",
            "t": "So this stays a prototype until the sample grows, no matter how finished the page looks. A polished v1 on thin data is still thin data."
          }
        ],
        "stage": "prototype",
        "updated": "2026-07-24",
        "asks": [],
        "problem": "Assembling a spec list from a drawing set means checking the full MasterFormat catalog by hand against what's actually drawn — easy to miss a section that should be there, or pad the list with ones that shouldn't.",
        "how": "A single static index.html, no server, no model calls, holds a 476-section MasterFormat catalog and a roughly 3,250-keyword dictionary. Load a drawing set's PDF and it scans the sheet text client-side, proposing which sections the project needs. Behind it, an offline Python pipeline is the actual source of truth: it measures the live scan's precision and recall against real issued spec lists from seed projects, cross-references the misses and false positives across every seed to fix or add keywords, and re-bakes the published page.",
        "proof": "Before: work the full section list against the drawings by memory and habit, hoping nothing's missed. After: load the set, get a scored proposal, cross-check the couple of sections it flagged.",
        "risk": "Only two seed projects logged so far, both airport interior fit-outs — 88%/72% precision-recall on one, 54%/49% on the other. Numbers that clean on one building type aren't proof on the next, and the fix loop is still proposing changes by hand rather than the code doing it end to end. The site itself is at v1; the real open work now is access to a wider set of previous drawings and specifications to test against, plus the design of the tool itself — how it lives, how it's used, how it keeps improving. Also genuinely undecided, dictated directly: where this actually goes next isn't settled — it might stay project-support like the Work Tracker, or evolve into something else entirely. Noted as open, not resolved.",
        "lesson": "Keep ground truth immutable and human-issued only — never let the tool grade itself. And no single project gets to move the dictionary; a fix only applies once it agrees across multiple seeds, held out and re-measured before it's trusted."
      },
      {
        "name": "Clash Coordination",
        "owner": "amber",
        "tag": "Shadi's desk",
        "status": "v1.8.1 · piloting on one real project, built on Google Apps Script/Sheets",
        "script": [
          {
            "who": "amber",
            "t": "This one sits on top of Revizto — it doesn't re-track the clashes, it tracks whether the coordination process is healthy. Meetings, accountability, resolution trends."
          },
          {
            "who": "amber",
            "t": "Confession: I built the whole thing before Cowork existed in the office. Apps Script and Sheets, because that's what I had. It works. That's not the same as it being right."
          },
          {
            "who": "amber",
            "t": "The early trap was trusting Revizto's own statuses. 'Solved' means the geometry's fixed; it doesn't mean anyone decided what to do about it. I had to build a translation layer before the counts told the truth."
          },
          {
            "who": "amber",
            "t": "It's running one real project right now, which is the part I'm proud of. The part I'm not proud of is that it still lives outside DIALOG's actual ecosystem — a spreadsheet stack with my name on it, not a supported tool."
          },
          {
            "who": "amber",
            "t": "So the ask on the wall is real, not decorative: pick a platform, and I migrate it. Until then this is a very good prototype wearing a pilot's badge."
          }
        ],
        "stage": "pilot",
        "updated": "2026-07-24",
        "asks": [
          {
            "status": "open",
            "text": "A decision on which DIALOG-native platform this should migrate to before it can ship as a supported firm tool."
          }
        ],
        "problem": "Revizto finds the clashes. But the coordination around them — who owns each one, what got decided last meeting, whether a \"solved\" clash is actually closed or just geometrically fixed — lived in spreadsheets and memory, and scattered the moment the meeting ended.",
        "how": "A managerial layer on top of Revizto that tracks the health of the coordination process, not the clashes themselves. A single-file dashboard (\"DIALOG — BIM Coordination Studio\") drives a Google Apps Script backend (~4,100 lines, 99 functions) that auto-builds a multi-tab Sheets database — clash matrix, coordination zones, meeting log, assignee tracker, resolution trends, decision/waiver log, and a decision-history audit. Revizto exports flow in; the dashboard runs the bi-weekly meeting live, tracks accountability per assignee, escalates by priority (P1/P2/P3 at 3/7/14 days), and snapshots each sprint for trends. A genericized Template turns the whole thing into a reusable BIM Coordination Hub.",
        "proof": "Before: export the clash list, re-sort it by hand, and try to recall what got decided last meeting. After: open the dashboard — new items needing a decision, overdue flags, accountability by person — run the meeting from it, and the decisions become tickable checklist items with an audit trail behind them.",
        "risk": "The first version trusted Revizto's own statuses as the coordination status. But Revizto tracks whether a clash is geometrically solved, not whether the team decided what to do about it — \"Solved\" isn't \"Done,\" and \"Closed/Waived\" means accepted-as-is, not fixed. The counts were wrong until a shared status model was built to translate Revizto states into decision states explicitly. It was also built before Cowork was available in the studio, on Google Apps Script and Sheets — outside DIALOG's actual ecosystem. It's testing on a real project now; the real work ahead is migrating it onto DIALOG's own tooling so it can ship as a supported tool rather than live as one coordinator's spreadsheet stack.",
        "lesson": "Don't inherit another tool's status model. Revizto tracks geometry; a coordination process tracks decisions. Map between them on purpose — or your dashboard will confidently report the wrong thing."
      },
      {
        "name": "The Second Mind",
        "owner": "shared",
        "owners": [
          "amber",
          "cherenkov"
        ],
        "tag": "Shared desk — Shadi + Ben",
        "status": "evolving",
        "script": [
          {
            "who": "amber",
            "t": "Same annoyance, built twice, on purpose — I went agent-narrated. Two vaults and a bouncer."
          },
          {
            "who": "ben",
            "t": "I went structure. One graph, tags and links, orphan notes left dangling so I can't pretend they're connected."
          },
          {
            "who": "amber",
            "t": "Yours looks like a crime board. Mine looks like it talks back."
          },
          {
            "who": "ben",
            "t": "Two builds, one lesson: neither of us gets to skip the tagging discipline. Mine's still catching up on it."
          },
          {
            "who": "amber",
            "t": "Update, and it's a real one: the Pipelines used to have its own desk on this floor. It doesn't anymore — it was never standalone, it's mine, filed under this branch where it always belonged."
          },
          {
            "who": "ben",
            "t": "That's not a demotion, that's a correction. A desk that's actually a sub-part of another desk is just confusing, not impressive."
          },
          {
            "who": "amber",
            "t": "Which is also why this whole thing is still 'concept,' not 'live' — I had it marked live before. Two people researching separately isn't the same as one proven system, even if both halves work."
          },
          {
            "who": "ben",
            "t": "Correct label, finally. I'd rather be accurately unfinished than falsely done."
          }
        ],
        "stage": "concept",
        "updated": "2026-07-24",
        "asks": [],
        "problem": "One project, two branches: Shadi's and Ben's, each hitting the same annoyance separately and still being worked through as one shared project. Context kept dying between sessions for Shadi — every conversation started by re-explaining the same systems. Ben's references — precedent, code, product data, a notebook's worth of day-to-day notes — stayed scattered instead of connected.",
        "lesson": "Same concept, two different builds, reached independently — that's the actual proof it generalizes. What used to be the Pipelines desk is now understood as part of Shadi's branch, not a standalone tool; its worked examples are the lessons-learned material this branch is still mining. Also worth watching, dictated directly: the two branches may be trending toward becoming two separate personal projects rather than staying one shared desk — Shadi's and Ben's focus keep diverging. Not enough yet to actually split the desk; noted here so the eventual split isn't a surprise when it happens.",
        "branches": [
          {
            "owner": "amber",
            "label": "Shadi's branch",
            "how": "Obsidian vaults as the memory, NotebookLM for querying the archive, Claude connected to both — plus a set of repeatable research and report pipelines, born from an early-morning experiment that hit a token wall, for turning that archive into structured output. What was listed here as a separate desk, \"The Pipelines,\" lives inside this branch now, not as a standalone tool.",
            "proof": "Before: re-explain the project, or dig through notes, every time. After: mornings start at the actual question, with pipelines that already know the shape of a research task before I open one.",
            "risk": "Tagging discipline — a memory system is only as good as the habit that feeds it, a people problem, not a tools problem. The pipelines side is still concept-stage research: two real token-economics failures and real lessons, but not yet a proven repeatable system."
          },
          {
            "owner": "cherenkov",
            "label": "Ben's branch",
            "how": "One Obsidian vault as a structured, queryable graph — tags and links instead of a file tree, orphan notes left visible on purpose, as a standing prompt to connect them.",
            "proof": "Before: dig through notes every time. After: the graph shows what's still unconnected at a glance.",
            "risk": "Still mid-migration — a long-standing analog-notebook habit is moving into the vault, honestly unfinished."
          }
        ]
      },
      {
        "name": "The Workplan Estimation Tool",
        "owner": "shared",
        "tag": "Shared desk — Shadi + Ben",
        "status": "demo build · synthetic comparables",
        "script": [
          {
            "who": "ben",
            "t": "One engine, three front doors — a Claude skill that interviews the PM and runs the real Python live, and a web app with a switch: AI on to steer it, AI off for the version Finance can audit. Same numbers underneath."
          },
          {
            "who": "amber",
            "t": "And it already left the building. We put this in front of DT's head and a partner from Edmonton. That's not a demo anymore, that's a pitch."
          },
          {
            "who": "ben",
            "t": "It's a pitch built on synthetic comparables and indicative rates. I don't want the reaction in that room to outrun what's actually true about the data."
          },
          {
            "who": "amber",
            "t": "Fair. But the reaction is real, and that's worth something — it's why there's a path to v1 now instead of just a Python script on my desk."
          },
          {
            "who": "ben",
            "t": "The path is real: 5 to 8 seed projects with real actuals attached, a backtest before we trust it, and Ben's modifier percentages set instead of guessed. Until that's done, I'm calling this prototype, not pilot, no matter how good the meeting went."
          },
          {
            "who": "amber",
            "t": "Noted, and on the record. I'll take 'the meeting went well' over 'the tool is ready' any day — they're not the same sentence."
          },
          {
            "who": "ben",
            "t": "Read the strategic map properly now that we have it. It says the bottleneck is data, not software — ingest 5 to 8 real seed projects with real actuals, that's the actual next step, everything else waits on it."
          },
          {
            "who": "amber",
            "t": "And it hands DT a real decision, not a vague ask: Airtable versus something in-tenant, before this ever goes multi-user. That's worth putting in front of them directly, now, while it's cheap — not retrofitted later."
          }
        ],
        "stage": "prototype",
        "updated": "2026-07-24",
        "asks": [
          {
            "status": "open",
            "text": "Real access to 5–8 seed project workplans — replacing the synthetic test data currently in place. The tool's own strategic map calls seeding the base the single highest-leverage next step."
          },
          {
            "status": "open",
            "text": "Actual hours and outcomes for those same seed projects — required, not optional. Without real actuals the tool learns from past guesses, not past truth; the map flags this as higher-value than ingesting more workplans."
          },
          {
            "status": "open",
            "text": "Ben's modifier default adjustment percentages, currently pending — fallback adjustments stay blind until they're set."
          },
          {
            "status": "open",
            "text": "A backtest on 2–3 known projects — re-estimating them as if new — before trusting the tool on a real proposal. The v0.1 validation gate, and the cheapest test of whether the comparable-matching is sane."
          },
          {
            "status": "open",
            "text": "An IT/leadership decision on data residency — Airtable vs. an in-tenant alternative — needed before any multi-user v0.3 rollout. The map's own recommendation: raise it now, not at v0.3."
          }
        ],
        "problem": "DIALOG's PM team estimates staffing and hours for a new fee proposal by filling in an Excel template from gut feel. How similar past projects actually turned out lives only in individual PMs' memories, scattered across the network share — never centralized, never queryable.",
        "how": {
          "summary": "One engine, two faces: a Claude skill that interviews the PM and runs the real Python scoring live, and a web app with an AI-on/AI-off switch — same numbers underneath, DIALOG's own Python readable line by line in the AI-off view for Finance and QA to check. Comparables are scored on typology, GFA closeness, modifier overlap and recency — case-based reasoning, not ML — and nothing writes to Airtable or Excel without the estimator's approval.",
          "steps": [
            "PM inputs project scope — typology, size, complexity, disciplines",
            "Tool scores comparable past projects and blends them into an initial estimate",
            "PM reviews and refines the estimate, steering the tool in plain language",
            "Approved estimate exports into the PM's own Excel workplan template"
          ]
        },
        "proof": "Before: a blank workplan template and whatever the PM remembers about similar jobs. After: a draft with named comparables, a similarity score on each, and a costed role × phase breakdown to edit — in minutes, from either a brief or a conversation.",
        "risk": [
          {
            "label": "Still synthetic",
            "text": "Comparables are synthetic test data, not real projects — this stays a demonstration build until a real reference set is ingested and backtested."
          },
          {
            "label": "Over-trust beats distrust",
            "text": "A formatted estimate with similarity scores looks authoritative even on a handful of projects. Must always show a range, never a single point — point estimates invite false precision."
          },
          {
            "label": "Data starvation",
            "text": "Ingestion friction could stall seeding around 6 projects and leave everything low-confidence. Minimize required fields per ingest; timebox it."
          },
          {
            "label": "Modifier compounding",
            "text": "Ben's gut-feel percentage adjustments stack multiplicatively and can compound wildly — needs a cap, and every application logged for later recalibration."
          },
          {
            "label": "Template drift",
            "text": "A PM template reissue will silently break the Excel push unless the template is version-stamped and checked on every write."
          },
          {
            "label": "Rates — mostly done",
            "text": "45 provincial rates now real, merged from a colleague's own Fee Generation base (2026-07-10) — 4 role mappings still owed by Ben."
          },
          {
            "label": "Data residency",
            "text": "Fee data living in a third-party SaaS (Airtable) is an accepted risk short-term, but an IT/leadership call on Airtable vs. an in-tenant alternative is needed before any multi-user rollout."
          },
          {
            "label": "Scope may widen",
            "text": "Dictated directly, not yet decided: this may evolve past fee estimation into a broader project-management tool set connected to other DIALOG initiatives. Noted here so the desk doesn't go stale — not yet reflected in how it's grouped on the roadmap."
          }
        ],
        "lesson": "Make the trustworthy version the deterministic one — same numbers, no AI, no network, the source Python readable line by line — so Finance and QA can believe it before any AI layer goes on top. Position it internally as institutional memory and a draft generator, never as a predictor — that framing is what survives an early miss.",
        "owners": [
          "amber",
          "cherenkov"
        ]
      },
      {
        "name": "The Design Process Tool",
        "owner": "cherenkov",
        "tag": "Ben's desk",
        "status": "evolving",
        "script": [
          {
            "who": "ben",
            "t": "Claimed what a parcel abutted from satellite scale once. Got it wrong once. Wrote the rule down so it only happens once."
          },
          {
            "who": "ben",
            "t": "The spine's real job isn't the massing model — it's the decision log. What we said no to matters as much as what we said yes to."
          },
          {
            "who": "ben",
            "t": "Still work-in-progress. I'd rather say that plainly than dress it up for the floor."
          },
          {
            "who": "ben",
            "t": "Nothing new to report this cycle, and I'd rather say that too than manufacture progress that isn't real. Shadi's been heads-down on the floor's redesign; this one's still where it was."
          },
          {
            "who": "ben",
            "t": "Which is fine. A desk that's honestly paused is more trustworthy than one padded with busywork just to look alive."
          }
        ],
        "stage": "prototype",
        "updated": "2026-07-07",
        "asks": [
          {
            "status": "open",
            "text": "Checked 2026-07-28: no dedicated Forma MCP server exists yet. Autodesk currently publishes official MCP servers for Revit and Fusion (with a Fusion Automation one “coming soon”), plus a documented guide for building custom MCP servers on Autodesk Platform Services -- and Forma itself has its own Site Design API, still in beta. So the real path, if this is worth pursuing: either wait for Autodesk's own Forma MCP, or build a thin custom one on top of the existing Forma API, the same way the Revit connection already works."
          }
        ],
        "problem": "Design decisions — and the alternatives that got rejected along the way — don't get written down anywhere. The next project relearns, from scratch, a lesson the last one already paid for.",
        "how": "A design copilot that walks precedents → site → massing → space planning → materiality, held together by a per-project 'spine' — a decision log that records what got rejected, and why, not only what got chosen.",
        "proof": "Before: a rejected direction vanishes the moment the meeting ends. After: the spine keeps it on record, so the reasoning survives past the person who made the call.",
        "risk": "Claimed what a parcel abutted from satellite scale — and got it wrong. The rule that came out of it, now load-bearing: never claim adjacency from satellite imagery.",
        "lesson": "Don't trust a claim you haven't checked at ground truth, however convincing it looks from above."
      },
      {
        "name": "The CERB Pipeline",
        "owner": "cherenkov",
        "tag": "Ben's desk",
        "status": "live",
        "script": [
          {
            "who": "ben",
            "t": "Ten reports on the Syllabus track, not four. First two cost me eight hours each — timesheets, categories, the whole evening."
          },
          {
            "who": "ben",
            "t": "Scripts do the arithmetic now. I read the draft, fix what the conversion report flags, sign. That's the whole afternoon."
          },
          {
            "who": "ben",
            "t": "The backlog was never the tool. It was years of my own notes that had no structure yet — I built the pipeline and then pointed it at myself first."
          },
          {
            "who": "ben",
            "t": "Update: it only knows one system. RAIC, CERB, fourteen categories. That's the whole world it understands."
          },
          {
            "who": "ben",
            "t": "Which is fine for me and not fine as a pitch. NCARB logs differently. The AAA logs differently again. 'It works' and 'it works for everyone' are not the same sentence, and I keep having to say that out loud so I don't start believing the second one."
          },
          {
            "who": "ben",
            "t": "So before this goes anywhere past my own desk, that's real research, not a feature request. Different regulator, different categories, maybe a different tool wearing the same scripts."
          }
        ],
        "stage": "live",
        "updated": "2026-07-24",
        "asks": [],
        "problem": "Every ~1,000 hours, an intern architect owes the regulator a CERB report: hours collated across 14 experience categories, plus written narratives of the project work. On the RAIC Syllabus track that's roughly ten reports instead of the usual four — and the first two took about 8 hours each.",
        "how": "Pulls hour-by-hour records from a structured Airtable, builds the hours grid, fills the official PDF form fields, drafts the project descriptions in the IAP manual's own approved language, and exports everything to a dated folder — with a conversion report logging every mapping it made. Scripts do the arithmetic. Nothing is eyeballed.",
        "proof": "Before: a submission deadline eats a weekend evening — squinting at timesheets, tallying by hand, hoping the categories add up. After: pull, read the draft, fix the two things the conversion report flagged, sign. Eight hours to under one, ten times over.",
        "risk": "The tool worked on day one; the data didn't. Years of pre-2025 hours lived in raw, unstructured text notes — invisible to any pipeline. The first real job was pointing the tool backwards: backfilling the unstructured past into structured records before a single report could generate. It only covers one licensing path — RAIC/CERB — today. Whether to extend it to NCARB, the AAA, or other logging requirements is still open; that needs its own research before committing.",
        "lesson": "Don't automate the report — structure the record. The report writes itself once the data has somewhere honest to live. And keep your raw notes even after you've outgrown them: you'll need every line of them the day you backfill."
      },
      {
        "name": "Dialog Intelligence",
        "owner": "shared",
        "owners": [
          "amber",
          "cherenkov"
        ],
        "tag": "Shared desk — Shadi + Ben",
        "status": "evolving",
        "script": [
          {
            "who": "amber",
            "t": "This is the one neither of us can finish alone."
          },
          {
            "who": "ben",
            "t": "I keep saying it: wrapping an LLM and a website around the data is the easy part. The data structure is the whole project."
          },
          {
            "who": "amber",
            "t": "You're not wrong. My tour needs your receipts before it's a pitch."
          },
          {
            "who": "ben",
            "t": "Then build the miniature first. The Workplan tool's already running — that's the proof, not the plan."
          },
          {
            "who": "amber",
            "t": "Small update, real one: this floor we're standing on — the desks, the wall, the asks — that's part of the seeding work too. It's not just a report about the project, it's a rehearsal of the project."
          },
          {
            "who": "ben",
            "t": "Fair, as long as we don't confuse a well-organized floor with a finished capstone. Three asks are still open, and none of them are 'make the site prettier.'"
          },
          {
            "who": "amber",
            "t": "Noted. And the Strategic Hub's version of this idea — I know it's due for a rethink too. That's a later conversation, not this one."
          },
          {
            "who": "ben",
            "t": "Good. One reimagining at a time."
          }
        ],
        "stage": "concept",
        "updated": "2026-07-24",
        "asks": [
          {
            "status": "open",
            "text": "DT partnership to scope one real pilot — one knowledge source, one studio."
          },
          {
            "status": "open",
            "text": "A secure sandbox on firm infrastructure."
          },
          {
            "status": "open",
            "text": "Sign-off that the Library's map of DASH is right before anything gets built on it."
          }
        ],
        "problem": "The question behind this whole site: could the firm's knowledge answer questions? Two people took it on — one a believer in the vision, one a believer in the plumbing. The desk needs both.",
        "how": "The working study for a firm-wide intelligence: what it would take to seed, structure, and keep current DIALOG's project knowledge — rehearsed first at the scale of our own tools. Part of that seeding work is this feedback loop itself — the Studio Floor, the Charrette, the Hearth — being built out now. The Strategic Hub's version of this idea will get reimagined separately, on its own timeline.",
        "proof": "Before: 'find reference projects with pools' means asking whoever might remember. After — the goal: the answer arrives with sources attached.",
        "risk": "Nothing yet at full scale, which is itself the honest status: it isn't running. Its miniature is — the Workplan Estimation Tool (v0.1) already answers fee-proposal questions from named comparable past projects.",
        "lesson": "Start with the data structure, not the wrapper. Every tool on this floor is a rehearsal for this desk."
      }
    ],
    "note": "Every desk follows the same anatomy on purpose — annoyance, function, Tuesday test, what broke, steal this. If a desk can't fill in 'what broke,' it hasn't been used enough to be on the floor."
  },
  "pinup": {
    "eyebrow": "THE CHARRETTE",
    "h1": "Fails pinned with the same care as wins.",
    "lead": "The room where the work actually gets critiqued -- pin it up, take the critique out loud, together. Everything else in the building is context for what happens here. BIG runs this ritual firm-wide every two weeks; this is the two-person version.",
    "note": "House rule: if a month passes with no FAIL pinned, we aren't experimenting hard enough -- or we've started lying to the wall.",
    "pins": [
      {
        "stamp": "FAIL",
        "date": "early 2026 · amber",
        "author": "amber",
        "tried": "A school for expert agents — one orchestration agent whose only job was building and running other agents.",
        "happened": "Token wall. The whole thing stopped mid-thought, unrecoverable.",
        "verdict": "The failure became the Pipelines desk. Best fail on the wall so far, and the reason this wall exists.",
        "desk": "The Second Mind",
        "rule": "Let a real failure become the next attempt, not just a postmortem.",
        "category": "judge"
      },
      {
        "stamp": "WIN",
        "date": "2026-06 · amber",
        "author": "amber",
        "tried": "Packaging the work tracker as a starter kit — password gate, templates, version stamp — so someone else could stand one up without help.",
        "happened": "A friend did, without help.",
        "verdict": "Repeatability proven once. Once is not a pattern, but it's no longer a claim.",
        "desk": "The Work Tracker",
        "rule": "Don't call something reusable until someone else has proven it without your help.",
        "category": "judge"
      },
      {
        "stamp": "WIN",
        "date": "2026-07-02 · amber",
        "author": "amber",
        "tried": "Interviewing an existing persona into shape instead of assuming it — the same discovery interview a new persona gets.",
        "happened": "Voice confirmed, origin story corrected, signature color exposed as a placeholder and replaced.",
        "verdict": "Interview beats assumption, even for the person who built the thing.",
        "rule": "Interview, don't assume — even for a system you already built.",
        "category": "judge"
      },
      {
        "stamp": "FAIL",
        "date": "2026-07-03 · amber",
        "author": "amber",
        "tried": "Shipping the Annex with a remember-the-knock feature.",
        "happened": "The storage key was never defined — the feature silently did nothing for a day, and nobody noticed until someone went looking.",
        "verdict": "Trust, but verify round-trips. Now a mandatory check before anything ships from this studio.",
        "rule": "Trust, but verify round-trips — before anything ships.",
        "category": "build"
      },
      {
        "stamp": "FAIL",
        "date": "2026-07-12 · amber",
        "author": "amber",
        "tried": "Trusted the Cowork Write tool to save a large building-content.json in one shot, no byte-check.",
        "happened": "It silently truncated the file mid-string past roughly 18.5KB — twice. The second time it landed at the exact same byte count as the first, by pure coincidence, which nearly hid the bug entirely.",
        "verdict": "Author anything sizeable in the sandbox with a plain shell heredoc and byte-check (cmp/wc -c) before it touches the real folder. That's a standing rule now, not a one-off fix.",
        "rule": "Byte-check anything sizeable before it touches the real file. Never trust a single write.",
        "category": "build"
      },
      {
        "stamp": "WIN",
        "date": "2026-07-12 · amber",
        "author": "amber",
        "tried": "Gave every desk on the Studio Floor its own voice, not just the three shared ones.",
        "happened": "Four solo desks now think out loud in one voice each; the exchange label swaps automatically between \"AMBER, ON THIS DESK\" and \"FEYNMAN, ON THIS DESK\" depending on who's actually speaking, instead of always claiming both.",
        "verdict": "The floor was quieter than it needed to be. A desk with real facts on it can carry a monologue fine — the two-voice exchange was never the only way to do this.",
        "rule": "Let a desk speak in one voice when that's honest — don't force an exchange where there's only one owner.",
        "category": "judge"
      },
      {
        "stamp": "WIN",
        "date": "2026-07-12 · amber",
        "author": "amber",
        "tried": "Diffed the live site against Ben's freshly revised persona file instead of assuming last version's lines still matched.",
        "happened": "Found three spots still running his old, ego-heavier draft almost verbatim — the Hearth's intro, two page narrators, and one line I'd written myself in his voice.",
        "verdict": "A persona revision is a real edit, not a memo. It has to be chased down everywhere the old voice was quoted, not just filed away.",
        "rule": "A voice or persona revision is a real edit — chase it everywhere it's quoted, don't just file it away.",
        "category": "build"
      },
      {
        "stamp": "FAIL",
        "date": "2026-07-12 · amber",
        "author": "amber",
        "tried": "Assumed the Boardroom's risk section was still accurate since nobody had touched it in months.",
        "happened": "It was still describing a password \"knock\" that came off the site back in v6 — a partner-facing page making a false claim about how the site is protected.",
        "verdict": "Stale copy is a fail like any other. Content needs the same audit a codebase gets after a real architecture change, not just a skim.",
        "desk": "Dialog Intelligence",
        "rule": "Audit content with the same rigor as code after a real change. Stale copy is a fail too.",
        "category": "build"
      }
    ],
    "lastPinned": "2026-07-12"
  },
  "modelshop": {
    "eyebrow": "STRATEGIC HUB",
    "h1": "One door. Three rooms.",
    "lead": "This used to be one long room called the Playbook. Split 2026-07-28, after Shadi and Ben's meeting: the ground rules moved out to the Charrette, and everything else split into three focused rooms instead of one long scroll.",
    "note": "Walk through whichever door you actually need -- they used to be one page, now each gets its own room.",
    "doors": [
      {
        "key": "precedents",
        "label": "Precedents",
        "href": "precedents.html",
        "desc": "Profiles of what other companies have actually done with AI -- BIG so far, more as we research them."
      },
      {
        "key": "roadmap",
        "label": "Roadmap",
        "href": "roadmap.html",
        "desc": "Our own current state and plan -- informed by Precedents, but ours."
      },
      {
        "key": "ideas",
        "label": "Ideas",
        "href": "ideas.html",
        "desc": "Raw sparks that haven't become anything yet -- the actual pin-up wall of ideas."
      }
    ]
  },
  "library": {
    "eyebrow": "THE LIBRARY",
    "h1": "Where Dialog's knowledge already lives.",
    "lead": "You can't ground an AI in a firm's knowledge until you've mapped where the knowledge is. This room is that map — real neighborhoods, real shelves, honest statuses. Today everything reads 'mapped.' The project is turning shelves 'connected,' one at a time.",
    "rule": "The founding law of this room: knowledge, not people. Names, HR records, anniversaries, anything personal — none of it ever crosses into this project. What gets mapped is what the firm knows, never who the firm is.",
    "note": "Scanned straight off DASH's own navigation, section by section. Full cards below are curated knowledge — judgment, standards, or expertise you'd otherwise have to ask a person for. Compact lists are quick reference — real, mapped, but a pointer to a file or tool, not something worth discovering for its own sake. Excluded entirely: Connect, People, Groups, per-studio directories, and every named byline or post encountered along the way.",
    "neighborhoods": [
      {
        "name": "Employee Basics",
        "shelves": [
          {
            "name": "Learning & Career Development",
            "status": "mapped",
            "lives": "DASH → Discover → Employee Basics → Learning & Career Development: Architectural Foundation Series, BuildDIALOG leadership program, CoachDIALOG, Educational Assistance, plus the Dayforce Performance Portal and The Learning Studio.",
            "asking": "'What's the recommended path to learn X here, and does DIALOG cover it?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/54797/learning-career-development"
          },
          {
            "name": "Life, Benefits & Perks",
            "status": "mapped",
            "lives": "DASH → Discover → Employee Basics → Life, Benefits & Perks: EFAP, disability coverage, GreenShield, Recognition, Money Matters, Perks, Time Away From Work, Parental Leave, Wellness.",
            "asking": "'What's covered under my benefits for X, and how do I actually use it?'",
            "kind": "reference"
          },
          {
            "name": "Payroll, Expenses & Timesheets",
            "status": "mapped",
            "lives": "DASH → Discover → Employee Basics → Payroll, Expenses & Timesheets: Overhead Timesheet and Expense Codes, Timesheet Orientation, Expense Guidelines and FAQs, Dayforce & Your Employee Records.",
            "asking": "'What's the overhead code for X?' — answered from the codes page instead of asking a neighbor.",
            "kind": "reference"
          },
          {
            "name": "Studio Services",
            "status": "mapped",
            "lives": "DASH → Discover → Employee Basics → Studio Services: Accessing the Studio, Ergonomics, File Management, Business Cards, Meeting Rooms, Shipping, Travel, per-studio Seating Plans.",
            "asking": "'How do I book a room / order supplies / arrange travel in my studio?'",
            "kind": "reference"
          },
          {
            "name": "Tech Tools & Support",
            "status": "mapped",
            "lives": "DASH → Discover → Employee Basics → Tech Tools & Support, routed through DIALOG Beacon for IT tickets.",
            "asking": "'Who do I actually contact — IT, DT Solutions, or someone else — for this problem?'",
            "kind": "reference"
          },
          {
            "name": "Using DASH",
            "status": "mapped",
            "lives": "DASH → Discover → Employee Basics → Using DASH: bookmarks, comments, creating pages and social groups, following and alerts.",
            "asking": "'How do I bookmark this, or start a conversation on DASH?'",
            "kind": "reference"
          }
        ]
      },
      {
        "name": "Safety",
        "shelves": [
          {
            "name": "Emergency Procedures",
            "status": "mapped",
            "lives": "DASH → Discover → Safety → Emergency Procedures: eleven named procedures — evacuation, bomb threat, earthquake, gas leak, tornado, workplace injury (first aid and non-first aid).",
            "asking": "'What's the exact procedure if X happens right now?'",
            "kind": "procedural",
            "url": "https://dash.dialogdesign.ca/content/2770/emergency-procedures"
          },
          {
            "name": "Hazard Assessments & Job Types",
            "status": "mapped",
            "lives": "DASH → Discover → Safety → Hazard Assessments and Job Types & Matrices: the JSHA form (studio vs. construction site), and Job Type A/B/C classification by site exposure.",
            "asking": "'Do I need a hazard assessment for this site visit, and what job type am I?'",
            "kind": "procedural",
            "url": "https://dash.dialogdesign.ca/content/2839/hazard-assessments",
            "alsoUrls": [
              "https://dash.dialogdesign.ca/content/2824/job-types-matrices"
            ]
          },
          {
            "name": "Job Procedures & PPE",
            "status": "mapped",
            "lives": "DASH → Discover → Safety → Job Procedures and Health & Safety Policy: PPE requirements, driving safety rules, incident reporting chain, ladder and equipment procedures.",
            "asking": "'What PPE do I need for this site, and who do I report an incident to?'",
            "kind": "procedural",
            "url": "https://dash.dialogdesign.ca/content/2751/job-procedures",
            "alsoUrls": [
              "https://dash.dialogdesign.ca/content/37543/health-safety-policy"
            ]
          },
          {
            "name": "Internal Safety Audit & Forms",
            "status": "mapped",
            "lives": "DASH → Discover → Safety → Internal Safety Audit and Forms & Handouts: audit results, Certificates of Recognition (COR), incident report and investigation forms.",
            "asking": "'Where's the incident investigation form, and how did our last safety audit go?'",
            "kind": "procedural",
            "url": "https://dash.dialogdesign.ca/content/2804/internal-safety-audit",
            "alsoUrls": [
              "https://dash.dialogdesign.ca/content/2819/forms-handouts"
            ]
          }
        ]
      },
      {
        "name": "Design Technology",
        "shelves": [
          {
            "name": "BIM & CAD Standards",
            "status": "mapped",
            "lives": "DASH → Practice → Practice Support Teams → Technology & Knowledge Management → Design Technology → Standards: BIM Standards (Getting Started, BIM Project Execution Plan, Asset Management Execution Plan, BIM Best Practices), CAD Standard for AutoCAD, CAD Standards for VectorWorks.",
            "asking": "'What's our workset structure / file naming / layer standard, and does it differ for AutoCAD vs. Revit?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/5570/standards",
            "alsoUrls": [
              "https://dash.dialogdesign.ca/content/5458/bim-standards",
              "https://dash.dialogdesign.ca/content/5876/cad-standard-for-autocad",
              "https://dash.dialogdesign.ca/content/6794/cad-standards-for-vectorworks"
            ]
          },
          {
            "name": "Design Technology Resources",
            "status": "mapped",
            "lives": "DASH → ...Design Technology → Resources: Architectural Base Details, ISO 19650 BIM Standards, the Design Technology Reference Library, Revit Workflows, Design Technology Software & Add-ins, Maker Labs.",
            "asking": "'Is there an add-in for this already, and where's the reference detail library?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/4319/resources"
          },
          {
            "name": "Design Technology for New Hire",
            "status": "mapped",
            "lives": "DASH → ...Design Technology for New Hire: the full onboarding doc — who to contact (IT vs. DT Solutions vs. DevHub vs. VIZLAB vs. Maker Labs vs. MarCom vs. Studio Admin), UNIFI, Clarity/Revit Server, BIM 360, File Tree Structure.",
            "asking": "'Why don't contractors get our full Revit families, and who do I actually ask about a Revit problem?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/4313/design-technology-for-new-hire"
          },
          {
            "name": "Computational Design",
            "status": "mapped",
            "lives": "DASH → ...Computational Design: Grasshopper and Dynamo add-ins, tutorials and primers, the Grasshopper/Dynamo Knowledge Network.",
            "asking": "'Is there a Grasshopper script for X already, and who are the subject matter experts?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/31333/computational-design"
          }
        ]
      },
      {
        "name": "Practice & Culture",
        "shelves": [
          {
            "name": "Communities of Practice",
            "status": "mapped",
            "lives": "DASH → Practice → Communities of Practice: structured Practice Roundtables (seven topic areas including Green, Materials, Project Management, Quality Management, Integrated Building Technology) vs. informal Knowledge Networks.",
            "asking": "'Who's thinking about X practice-wide — is it a structured Roundtable or an informal Network?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/24/communities-of-practice"
          },
          {
            "name": "Practice Bulletins",
            "status": "mapped",
            "lives": "DASH → Practice → DIALOG Practice Bulletins: numbered, firm-wide position statements (e.g. responding to contractor delay and force majeure claims).",
            "asking": "'What's our current firm-wide position on X?' answered from a bulletin instead of a guess.",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/25203/dialog-practice-bulletins"
          },
          {
            "name": "Professional Practice & Licensing",
            "status": "mapped",
            "lives": "DASH → Practice → Professional Practice & Licensing: regulatory and ethical standards across the disciplines and jurisdictions DIALOG practices in.",
            "asking": "'What are our licensing or regulatory obligations for this discipline in this province?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/7573/professional-practice-licensing"
          },
          {
            "name": "Purposeful Practice",
            "status": "mapped",
            "lives": "DASH → Practice → Purposeful Practice: DEI commitments, the Carbon Action Plan, community wellbeing framing.",
            "asking": "'What's our stance and active program on DEI, carbon, or community wellbeing?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/46828/purposeful-practice"
          }
        ]
      },
      {
        "name": "Practice Support Teams",
        "shelves": [
          {
            "name": "Risk & Commercial Management",
            "status": "mapped",
            "lives": "DASH → Practice → Practice Support Teams → Risk & Commercial Management: agreement review tools and risk-protection guidance for DIALOGers and Partners.",
            "asking": "'What's our position on this contract clause, or this kind of risk exposure?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/1058/risk-commercial-management"
          },
          {
            "name": "Financial Operations",
            "status": "mapped",
            "lives": "DASH → ...Financial Operations: BST fiscal-year codes, timesheet compliance tracking, invoicing legislation updates.",
            "asking": "'What's the current fiscal-year code, and what counts as 'proper' invoicing under current legislation?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/54/financial-operations"
          },
          {
            "name": "Administration",
            "status": "mapped",
            "lives": "DASH → ...Administration: partner administrative support assignments, studio event and culturally-significant-days calendars.",
            "asking": "'Who supports which partner, and what's on the studio calendar?'",
            "kind": "reference"
          },
          {
            "name": "Marketing & Communications",
            "status": "mapped",
            "lives": "DASH → ...Marketing & Communications (MarCom): Our Brand, Awards/Highlights & Recognition, proposal resources and knowledge.",
            "asking": "'Where's the current brand asset, award writeup, or proposal template?'",
            "kind": "reference"
          }
        ]
      },
      {
        "name": "About DIALOG",
        "shelves": [
          {
            "name": "Our Practice",
            "status": "mapped",
            "lives": "DASH → Discover → About DIALOG → Our Practice: Governance Model, firm history, Partners by studio, Our Commitment to Safety, our Communities of Practice, DEI.",
            "asking": "'How is the Practice actually governed, and who leads what?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/55038/our-practice"
          },
          {
            "name": "Our Business",
            "status": "mapped",
            "lives": "DASH → ...Our Business: Strategic Plan, Environmental Commitments (AIA 2030, Carbon Action Plan, Embodied Carbon Playbook), B Corp Commitment, Project Wins.",
            "asking": "'What's our environmental commitment on X, and what have we won lately?'",
            "kind": "knowledge",
            "url": "https://dash.dialogdesign.ca/content/55039/our-business"
          },
          {
            "name": "Our Community",
            "status": "mapped",
            "lives": "DASH → ...Our Community: DIALOG in the Community, Local Initiatives, the Indigenous Storytelling Team.",
            "asking": "'What community initiatives is DIALOG actually part of?'",
            "kind": "reference"
          }
        ]
      },
      {
        "name": "Systems & Tools",
        "shelves": [
          {
            "name": "Information Systems Directory",
            "status": "mapped",
            "lives": "DASH → Access → Information Systems: the full software directory — BST Global, Dayforce, DIALOG Beacon, DIALOG Files, The Learning Studio, Power BI, Miro, Onware, OpenAsset, Portals, SAP Concur, Software Center, Unanet, VIZLAB.",
            "asking": "'Is there already a system for X before I build a workaround?'",
            "kind": "reference"
          },
          {
            "name": "Brand Inspiration Guide",
            "status": "mapped",
            "lives": "DASH → Access → Our Brand: the Brand Inspiration Guide.",
            "asking": "'Is this on-brand?' answered by the guide, not by taste.",
            "kind": "reference"
          }
        ]
      },
      {
        "name": "Current Awareness",
        "shelves": [
          {
            "name": "News & Events",
            "status": "mapped",
            "lives": "DASH → News & Events: Featured Announcements, All DIALOG Town Halls, DIALOG in the News, DIALOG in the Community. A live feed, not stable knowledge — mapped as a category, individual posts never pulled in.",
            "asking": "'What did the last Town Hall actually cover?'",
            "kind": "reference"
          }
        ]
      }
    ],
    "ragCallout": {
      "eyebrow": "WHY THIS ROOM MATTERS MORE THAN IT LOOKS",
      "title": "This is the RAG project. You're already using a small version of it.",
      "body": [
        "RAG — retrieval-augmented generation — just means an AI answer that's grounded in a real, fetched document instead of guessed from memory. Before any of that can happen, something has to know which documents exist and where they live. That's what this room is. Every shelf below is a candidate for grounding a future answer; today, none of them are wired up yet.",
        "The search box above is already a small, honest demo of the idea — type a question and it retrieves the shelves whose titles and descriptions match, instead of guessing. That's retrieval. What it doesn't do yet is read the shelf's actual content (the real bulletin, the real standard) and use it to write a grounded answer — that's the generation half, and it's still missing on purpose. 'Mapped' means we know a shelf exists. 'Connected' would mean it's actually indexed and retrievable — the real RAG step, still ahead of us."
      ],
      "roadmapLink": "This room is exactly what “RAG over DASH” on the Roadmap room depends on — you can't ground an AI in DASH until a room like this one exists first.",
      "firstCandidates": [
        {
          "name": "DIALOG Practice Bulletins",
          "why": "Curated, firm-wide, already a judgment call someone made once — the highest-value, lowest-risk kind of answer to ground."
        },
        {
          "name": "BIM & CAD Standards",
          "why": "Stable, referenced constantly, exactly the kind of question people currently have to ask a person to get right."
        },
        {
          "name": "Communities of Practice",
          "why": "Answers ‘who's already thinking about this’ — pure firm knowledge, no personal data at all."
        }
      ],
      "platformNote": "Confirmed with Shadi: DASH itself is a custom website, not an out-of-the-box platform — some of what it links to lives on SharePoint, which may already have a usable connector path, but the custom DASH pages themselves would still need their own real export or scrape pipeline before any of this can be indexed. That's a fact, not a guess — it changes what “a real sandbox, first” on the roadmap actually has to build."
    },
    "glossary": [
      {
        "term": "RAG (retrieval-augmented generation)",
        "def": "An AI answer grounded in a real, fetched document instead of guessed from memory. This whole room is what has to exist before RAG can work on DASH."
      },
      {
        "term": "Mapped",
        "def": "We know this shelf exists and where it lives. Nothing is wired up yet — this is a map, not a live connection."
      },
      {
        "term": "Connected",
        "def": "The real RAG step: the shelf's actual content is indexed and retrievable, so a question gets a grounded answer instead of a guess. No shelf is here yet."
      },
      {
        "term": "Knowledge shelf vs. reference shelf",
        "def": "A knowledge shelf holds judgment or standards you'd otherwise have to ask a person for. A reference shelf is a quick pointer to a file or tool — real, but not worth grounding an answer in on its own."
      }
    ]
  },
  "__schemaNote": "stage/asks/updated added 2026-07-24, stage inferred from prior status text -- confirm with Shadi/Ben",
  "__schemaNote2": "anatomy fields renamed 2026-07-24: origin->problem, does->how, tuesday->proof, broke->risk, steal->lesson (content unchanged, keys only)",
  "precedents": {
    "eyebrow": "PRECEDENTS",
    "h1": "What other firms have actually done.",
    "lead": "One company profiled so far — BIG's own AI adoption story, stage by stage. Pick a card for the full profile. More get added here as we research them; each new one should update how we read the others, not just sit next to them.",
    "companies": [
      {
        "slug": "big",
        "name": "BIG (Bjarke Ingels Group)",
        "eyebrow": "BIG (BJARKE INGELS GROUP)",
        "h1": "How BIG actually got here.",
        "lead": "Before there's a master plan, there's a real education. This is BIG's (Bjarke Ingels Group's) own AI adoption story, stage by stage, with the concepts explained as they were needed — not as jargon up front, but as the actual problem each one solved. Read it the way you'd read a desk: trigger, what they built, what changed.",
        "source": {
          "event": "ATN Summit 2026",
          "when": "18–19 March 2026, London",
          "speaker": "Germán Otto Bodenbender, Director of Design Technology, BIG (Bjarke Ingels Group)",
          "note": "Ben watched the talk; Shadi ran a structured Gemini analysis of it afterward to get the stages, numbers, and quotes right rather than working from memory. Cross-checked against public reporting on the same talk — sources listed below."
        },
        "stages": [
          {
            "n": 1,
            "name": "Exploration — generative images, no control yet",
            "dates": "2021 – early 2023",
            "trigger": "Nothing existed yet that let architects generate images from a prompt at all. The opportunity was just: what if you could sketch an idea in words instead of software?",
            "activity": "Experimented with Midjourney v1 for early concept renders. Eighteen months later, v4 landed and the aesthetic quality jumped enormously — suddenly the images looked genuinely good.",
            "concepts": [
              {
                "term": "Text-to-image / diffusion model",
                "plain": "The engine behind tools like Midjourney. It starts from random visual noise and gradually removes it, step by step, guided by your text prompt, until a picture appears. It's genuinely inventing pixels, not retrieving a photo — which is exactly why it doesn't reliably respect real-world constraints like a building's actual floor height or site boundary."
              }
            ],
            "quote": "",
            "resultNote": "Beautiful images, but a hard limit: complete lack of control over spatial proportions, tectonics, or real architectural function. Pretty was not the same as buildable."
          },
          {
            "n": 2,
            "name": "Geometric control, on purpose",
            "dates": "2023",
            "trigger": "An architecture proposal has to respect exact site boundaries, floor heights, and structural logic. A model that just invents composition freely can't be trusted with any of that.",
            "activity": "Adopted a node-based pipeline: ComfyUI to assemble the steps, ControlNet plus Canny edge detection to lock the geometry down, and LoRA adapters trained on 20 years of BIG's own project archive so the output looked like their buildings, not generic AI buildings.",
            "concepts": [
              {
                "term": "ComfyUI",
                "plain": "A visual, node-based way of building an AI image pipeline. Instead of one text box, you wire together separate boxes — take this 3D view, run edge detection on it, apply this style, generate the image — so the whole recipe is visible and reusable, not buried inside one prompt."
              },
              {
                "term": "Canny edge detection",
                "plain": "A decades-old, non-AI computer vision technique that traces the sharp outlines in an image or a 3D view: the edge of a wall, a roofline, a floor plate. It's the input the next tool uses to know exactly where the ‘do not move this’ lines are."
              },
              {
                "term": "ControlNet",
                "plain": "An add-on to a diffusion model that gives it a second, non-negotiable instruction alongside the text prompt: the composition has to match this. Feed it the edge map from Canny, and it forces the generated image to keep those edges in place even while it invents materials, lighting, and mood on top."
              },
              {
                "term": "LoRA (Low-Rank Adaptation)",
                "plain": "A small, lightweight file — often under 200MB — that nudges a big general-purpose model toward a specific look, without retraining the whole model from scratch. Train one on twenty years of your own project photos, and the model starts generating things that look like your buildings instead of generic AI-building-clipart."
              }
            ],
            "quote": "We sacrificed quality for control — we started dropping in quality because we don't have that beautiful Midjourney effect, but now our geometry gets respected. I want to control the geometry, the spaces, the proportions. I don't want AI to be suggestive on that part.",
            "resultNote": "Geometry finally respected. New problem surfaced immediately: node graphs are genuinely complex, and most designers in the firm had no interest in becoming node-graph specialists just to render a concept."
          },
          {
            "n": 3,
            "name": "Simplification and firm-wide rollout",
            "dates": "Late 2023 – 2024",
            "trigger": "Managing dozens of individual subscriptions and a web of specialist-only node graphs was unsustainable for a design technology team of just a handful of people supporting hundreds of designers.",
            "activity": "Built lightweight open-source interfaces (BU-Conf) and a unified collaborative canvas (Xfigra) that hid the pipeline complexity behind simple, point-and-click or sketch-based workflows connected directly to Rhino. Then ran hands-on training workshops firm-wide.",
            "concepts": [
              {
                "term": "Why the UI layer mattered",
                "plain": "A powerful pipeline that only three specialists can operate isn't a firm capability, it's a bottleneck with really good technology behind it. The actual unlock wasn't a smarter model — it was hiding the node graph behind an interface a designer could learn in an afternoon."
              }
            ],
            "quote": "For a designer to benefit from all of this, you have to maneuver through so many different steps. For me and the team to manage subscriptions and enterprise codes is an absolute nightmare.",
            "resultNote": "330 architects trained in under a month across 14 workshops. The bottleneck moved from ‘who can operate this’ to ‘what should we point it at next.’"
          },
          {
            "n": 4,
            "name": "BIG Intelligence — one knowledge graph, everywhere",
            "dates": "2025 – 2026",
            "trigger": "Plain text answers from a chatbot were, in Bodenbender's word, boring — they stripped the diagrams out of manuals that used to be visual. And the firm's real knowledge (20 years of projects, technical standards, live model data) stayed trapped in silos or individual people's heads, unqueryable as a whole.",
            "activity": "Built “BIG Intelligence” (internally BIGSTER): an internal chat/agent wrapper connecting an enterprise LLM to the firm's actual data — project images and history in OpenAsset, technical documentation, and live Revit models — through custom API calls, with charts rendered inline via Mermaid.js.",
            "concepts": [
              {
                "term": "RAG (Retrieval-Augmented Generation)",
                "plain": "The difference between an AI answering from memory and an AI actually looking something up before it answers. Instead of trusting whatever the model absorbed in training, RAG has it search real documents or a real database first, then write its answer grounded in what it actually found — the main defense against a confident, plausible-sounding wrong answer."
              },
              {
                "term": "SQL over RAG",
                "plain": "A layer on top of RAG specifically for numbers. Instead of the AI reading documents and estimating a figure, it translates a plain-English question into an actual database query, runs it, and hands back the real number — the difference between ‘roughly’ and ‘exactly.’"
              },
              {
                "term": "MCP (Model Context Protocol)",
                "plain": "A standardized way for an AI chat to reach directly into a live piece of software — like Revit — and read (or eventually write) real data, instead of someone exporting a schedule and pasting it in. It's the plumbing that turns ‘ask a question’ into ‘ask a question about what's actually open on my screen right now.’"
              }
            ],
            "quote": "We connected with Mermaid and started doing charts on the fly, and now it's acting as our own internal MCP — we can have a discussion natively where people are working, and not just give an answer but help you act on that answer.",
            "resultNote": "900 AI-generated images a day, firm-wide. A two-minute storytelling video that used to cost €100,000 outsourced now made in-house, professionally, in under an hour."
          }
        ],
        "numbers": [
          "830 people, 72 nationalities, spread across 8–9 centers worldwide — supported by a Design Technology team of just 14 specialists.",
          "330 architects trained in under a month, across 14 workshops.",
          "900 images produced per day as a global running total.",
          "A 2-minute storytelling video that used to cost roughly €100,000 outsourced is now made in-house, at professional quality, in under an hour.",
          "The push to build “BIG Intelligence” itself started as roughly a day of a 3–4 person Design Technology team in Barcelona asking ‘how do we actually do this,’ followed by about a week of focused build."
        ],
        "governance": [
          "A deliberately simple strategy: enterprise agreements, sandboxed API calls, and separated data centers — so people can explore safely inside real security and IP boundaries, instead of being told AI is off-limits.",
          "Local processing where it matters: some pipelines run on local open-source servers (e.g. Barcelona) rather than calling external cloud services with sensitive geometry.",
          "Access routed through internal logins, moving toward being bound directly to firm-wide single sign-on so permissions stay governed centrally.",
          "The LLM never gets handed a raw file server. It queries through restricted, custom-built functions against verified repositories like OpenAsset — the AI can only ask for what a function was deliberately built to give it."
        ],
        "deepDives": [
          {
            "title": "The proof it actually works: Claremont McKenna College",
            "body": "The clearest demonstration Bodenbender showed: the same prompt run twice. Once through a generic, unmodified model — which produced a generic glass building with no identity at all. Once through the same prompt with BIG's own LoRAs active — which produced a render that reflected BIG's actual structural logic, signature light, and material language. The real payoff: the LoRA-guided concept render, made two years before construction, looked almost identical to a photo of the finished atrium, completed roughly six months before the talk."
          },
          {
            "title": "Revit, from the inside",
            "body": "Instead of exporting a schedule and asking a chatbot to interpret it, BIG built a background plugin inside Revit that exposes live project data — areas, elements, parameters — through a local API. Ask BIG Intelligence a plain-English question about a live model (‘what are the current area metrics for this project’), and the request routes through their MCP server, hits the Revit API bridge, pulls the real numbers from the actual open session, and renders them back as an inline chart. Bodenbender's own framing of where this goes next: from just answering questions about a model, to actually acting on the model — executing parameter changes from a text request, not just reading them."
          }
        ],
        "openQuestions": [
          "Whether firm-wide AI image generation at this volume is compute-sustainable long-term, by Bodenbender's own on-stage aside — flagged as his inference in the moment, not a settled answer.",
          "Extending a tool tested on a small local server in one office (Barcelona) safely to 830+ people worldwide is an infrastructure and security question they haven't fully closed.",
          "Two-way BIM control: today the connection reads Revit. Writing back — letting the AI actually execute parametric edits inside the live model — is the acknowledged next frontier, not a shipped feature.",
          "Generating a real 2D floor plan from an AI massing model is still primitive by their own account — it still needs a human to sketch and refine it, not just prompt it."
        ],
        "sources": [
          {
            "t": "ATN Summit 2026 — Rethinking the Future of Architecture Through Technology",
            "u": "https://parametric-architecture.com/atn-summit-2026/"
          },
          {
            "t": "ATN Summit 2026 schedule",
            "u": "https://www.atn-summit.com/schedule"
          },
          {
            "t": "Learning from Bjarke Ingels Group (BIG): The Frontline of Architecture x AI and BIG Intelligence",
            "u": "https://note.com/xence/n/n3941e61f7737?hl=en"
          },
          {
            "t": "ATN Summit 2026: From an Online Platform to a New Conference (ArchDaily)",
            "u": "https://www.archdaily.com/1037886/atn-summit-2026-from-an-online-platform-to-a-new-architecture-and-technology-conference"
          }
        ],
        "teaser": "Four stages, 2021→2026: image exploration → geometric control → firm-wide rollout → BIG Intelligence, a firm-wide knowledge graph over their own project history.",
        "useful": "The two most directly reusable pieces for our own Roadmap: the governance model (sandboxed API calls, local processing, no raw file-server access) and RAG-over-OpenAsset — an asset manager DIALOG already runs."
      }
    ]
  },
  "roadmap": {
    "eyebrow": "OUR ROADMAP",
    "h1": "Where we actually stand, and where it leads.",
    "lead": "Our own current state and our own plan, with one branch — Learning from Precedents — for what's worth borrowing from outside research. Heavily informed by watching BIG; not a copy of them.",
    "map": {
      "eyebrow": "THE MAP",
      "h1": "Where it branches, where it converges.",
      "lead": "Three real tracks -- not a re-list of the Studio Floor's own desks. One converges into a hub; one real gap sits untouched; a few tools just run in parallel. What's actually next lives on Where We're Headed, organized the same way: one real gate, then four lanes.",
      "pockets": [
        {
          "id": "workplan",
          "label": "The Workplan Estimation Tool",
          "deskSlug": "the-workplan-estimation-tool",
          "status": "prototype",
          "note": "Case-based comparable-project scoring — a small hand-built cousin of RAG over OpenAsset. (Watch: may be evolving into a broader project-management tool set — still sitting here for now.)",
          "convergesToHub": true,
          "nextStep": "Real strategic map now in hand: the actual bottleneck is seeding 5–8 real projects (with real outcomes, not just workplans), then a leave-one-out backtest before trusting it on a real proposal — plus a live IT/leadership decision on data residency (Airtable vs. in-tenant) before any multi-user rollout."
        },
        {
          "id": "spec-finder",
          "label": "Spec Finder",
          "deskSlug": "spec-finder",
          "status": "prototype",
          "note": "Scores a drawing set against real issued spec lists from past projects — retrieval against project history, the same family as RAG over OpenAsset, just smaller and offline.",
          "convergesToHub": true,
          "nextStep": "Access to a wider set of past drawings and specs to test against, plus the tool's own design — how it lives, how it's used, how it keeps improving."
        },
        {
          "id": "second-mind",
          "label": "The Second Mind",
          "deskSlug": "the-second-mind",
          "status": "concept",
          "note": "Two branches, same problem — Shadi's and Ben's vaults, not yet merged into one system. (Watch: may trend toward two separate personal projects rather than staying merged.)",
          "hasBranches": true,
          "convergesToHub": true,
          "nextStep": "The two branches — Shadi's and Ben's — haven't merged into one system yet. That's still the open work."
        },
        {
          "id": "dialog-intelligence",
          "label": "Dialog Intelligence",
          "deskSlug": "dialog-intelligence",
          "status": "concept",
          "note": "The capstone — the hub the other small pockets are meant to converge into, eventually.",
          "isHub": true,
          "nextStep": "Three real asks, all open: DT partnership to scope one real pilot, a secure sandbox on firm infrastructure, and sign-off that the Library's map of DASH is right before anything gets built on it."
        }
      ],
      "opportunity": {
        "id": "design-process-tool",
        "label": "The Design Process Tool",
        "deskSlug": "the-design-process-tool",
        "status": "prototype",
        "note": "Walks precedent → site → massing → space planning → materiality, with a decision log that keeps what got rejected and why. The one real project already sitting in BIG's stage 1–2 territory.",
        "nextStep": "It just isn't using any of BIG's actual techniques yet — ComfyUI, ControlNet, a LoRA trained on our own portfolio. That's the specific opportunity here, not a different project."
      },
      "glossary": [
        {
          "term": "RAG (retrieval-augmented generation)",
          "def": "Instead of an AI answering purely from memory, it first retrieves real matching documents — a DASH bulletin, an OpenAsset record — and grounds its answer in those, instead of guessing."
        },
        {
          "term": "MCP (Model Context Protocol)",
          "def": "The connector standard that lets an AI tool safely reach into a real system — DASH, Revit, Cowork's own connectors — instead of someone copy-pasting content in by hand."
        },
        {
          "term": "Hub",
          "def": "Where a few smaller, separately-built projects are meant to converge into one system, instead of staying separate forever."
        },
        {
          "term": "Sandbox",
          "def": "A permissioned, contained space where a new AI tool can touch real firm data safely, with the rules already agreed — instead of everyone testing informally through personal accounts."
        },
        {
          "term": "Concept",
          "def": "An idea being actively explored. Nothing built yet."
        },
        {
          "term": "Prototype",
          "def": "Something real and working — but for one project or one person, not yet dependable at scale."
        },
        {
          "term": "Pilot",
          "def": "In real use on an actual project, being tested under real conditions."
        },
        {
          "term": "Live",
          "def": "Dependable, running as an actual tool people rely on."
        }
      ],
      "offPath": [
        {
          "label": "The Work Tracker",
          "deskSlug": "the-work-tracker",
          "category": "Project management",
          "note": "Deadline and task tracking. A real, useful category of its own — just not one BIG's playbook has anything to say about.",
          "id": "work-tracker",
          "nextStep": "Full integration onto DIALOG-native infrastructure — the real next step before this moves past pilot."
        },
        {
          "label": "Clash Coordination",
          "category": "BIM improvements / clash detection",
          "deskSlug": "clash-coordination",
          "note": "Coordination and accountability on top of Revizto. A BIM-improvement idea, not a knowledge-grounding or image-generation one.",
          "id": "clash-coordination",
          "nextStep": "A decision on which DIALOG-native platform this should migrate to before it can ship as a supported firm tool."
        },
        {
          "label": "The CERB Pipeline",
          "category": "Architect registration / licensing",
          "deskSlug": "the-cerb-pipeline",
          "note": "Automates a regulatory reporting requirement for licensure. Live and working — its own category entirely.",
          "id": "cerb-pipeline",
          "nextStep": "Whether to extend it to NCARB, the AAA, or other logging requirements is still open — needs its own research."
        }
      ],
      "offPathLabel": "Our own categories — real ideas running in parallel to BIG's path, not measured against it",
      "root": "DIALOG's AI roadmap",
      "branches": [
        {
          "id": "branch-a",
          "color": "violet",
          "label": "Grounding our own project knowledge",
          "sub": "Comparable-project scoring, spec-list retrieval, notes search — three desks doing pieces of the same idea by hand. Not three separate ideas; the same one, at three desks, meant to converge.",
          "memberIds": [
            "workplan",
            "spec-finder",
            "second-mind"
          ],
          "hubId": "dialog-intelligence"
        },
        {
          "id": "branch-b",
          "color": "amber",
          "label": "Untouched: generative design assistance",
          "sub": "Real gap, not failure — nobody's tried a generative-image technique here yet. Precedents has real technique worth borrowing once someone picks this up.",
          "memberIds": [
            "design-process-tool"
          ]
        },
        {
          "id": "branch-c",
          "color": "indigo",
          "label": "Firm operations, running in parallel",
          "sub": "Real tools solving real problems that were never about knowledge-grounding to begin with — deadlines, coordination, licensing. Not behind on anyone's roadmap; this was never that roadmap.",
          "memberIds": [
            "work-tracker",
            "clash-coordination",
            "cerb-pipeline"
          ]
        }
      ]
    },
    "ourPlan": {
      "eyebrow": "WHERE WE'RE HEADED",
      "h1": "One real gate, then four lanes -- not eight steps in a row.",
      "lead": "Every item below still traces to a real, already-logged ask or risk on a real desk. What changed is the shape: one decision blocks real convergence; some work needs nobody's permission to keep moving; one branch is worth trying because of what Precedents showed; one road is genuinely still open even for BIG.",
      "gate": {
        "label": "The one real gate",
        "note": "Before any RAG layer touches real DIALOG data, three things need an answer: a DT partnership to scope one real pilot (one knowledge source, one studio), a secure sandbox on firm infrastructure, and sign-off that the Library's map of DASH is right before anything gets built on it. Nothing in “waiting on the gate” below is safe to build at real scale until this resolves.",
        "deskSlug": "dialog-intelligence"
      },
      "lanes": [
        {
          "id": "now",
          "title": "Moving now -- no gate needed",
          "color": "indigo",
          "items": [
            {
              "name": "Seed the Workplan Estimation Tool for real",
              "text": "5–8 real project workplans plus actual outcomes, replacing the synthetic test data — the tool's own strategic map calls this the single highest-leverage next step.",
              "deskSlug": "the-workplan-estimation-tool"
            },
            {
              "name": "Backtest before trusting it",
              "text": "Re-estimate 2–3 known projects as if new, before the Workplan Tool touches a live proposal — the cheapest real test of whether the comparable-matching is sane.",
              "deskSlug": "the-workplan-estimation-tool"
            },
            {
              "name": "Settle the Workplan Tool's own data residency",
              "text": "An IT/leadership call on Airtable vs. an in-tenant alternative for fee data — its own, smaller-scope decision, separate from the enterprise sandbox question in the gate above.",
              "deskSlug": "the-workplan-estimation-tool"
            },
            {
              "name": "Pick a DIALOG-native home for Clash Coordination",
              "text": "A decision on which platform this migrates to, so it can ship as a supported firm tool instead of living as one coordinator's spreadsheet stack.",
              "deskSlug": "clash-coordination"
            },
            {
              "name": "Merge The Second Mind's two branches",
              "text": "Shadi's and Ben's vaults are still separate systems solving the same problem — the open work is making them one.",
              "deskSlug": "the-second-mind"
            },
            {
              "name": "Take the Work Tracker fully DIALOG-native",
              "text": "Proven at two-instance pilot scale on GitHub Pages; full integration onto DIALOG's own infrastructure is the real next step before calling it live.",
              "deskSlug": "the-work-tracker"
            }
          ]
        },
        {
          "id": "waiting",
          "title": "Waiting on the gate",
          "color": "violet",
          "items": [
            {
              "name": "RAG over DASH",
              "text": "Start with the knowledge that's already curated and low-risk: practice bulletins, standards, the Library's own map. Sequenced as a real step once the gate opens, not a loose idea competing with everything else.",
              "deskSlug": "dialog-intelligence"
            },
            {
              "name": "RAG over OpenAsset",
              "text": "DIALOG already has the exact system BIG's whole knowledge platform is built on. The gap isn't the asset manager, it's the retrieval layer on top of it — formalizing what the Workplan Estimation Tool and Spec Finder are already doing by hand.",
              "deskSlug": "dialog-intelligence"
            }
          ]
        },
        {
          "id": "branch",
          "title": "The one branch worth trying",
          "color": "amber",
          "items": [
            {
              "name": "Try one real generative-geometry technique",
              "text": "ComfyUI, ControlNet, a LoRA on our own portfolio — the one territory nobody's touched. The Design Process Tool is the natural first home for it, precisely because it's the one project already closest to this stage of BIG's own path.",
              "deskSlug": "the-design-process-tool"
            }
          ]
        },
        {
          "id": "open",
          "title": "Longer horizon — open even for BIG",
          "color": "neutral",
          "items": [
            {
              "name": "A Revit MCP",
              "text": "Genuinely still open even for BIG — their own two-way control is unsolved too. DIALOG isn't behind on this one; nobody's ahead on it yet.",
              "deskSlug": null
            }
          ]
        }
      ]
    },
    "learningFromPrecedents": {
      "eyebrow": "LEARNING FROM PRECEDENTS",
      "h1": "We're at the beginning of this, on purpose said out loud.",
      "lead": "This is one branch of our roadmap — the part that's explicitly about closing a gap by watching someone who's already walked it. It's not the whole plan; Where We're Headed above is ours regardless of what BIG did.",
      "honestStart": "Everything on the Studio Floor was learned tool-by-tool, on the specific problem in front of us -- not from a curriculum. Reading BIG's actual path made that obvious: RAG, MCP, and LoRA were all names we'd half-understood at best until this page forced the question.",
      "goals": [
        "Test the pyRevit MCP that DT already has access to — this is the one gap that's a concrete next action, not a someday-goal, given real hands-on MCP experience already exists.",
        "Checked (2026-07-28): no dedicated Forma MCP server exists yet -- Autodesk's own MCP servers today cover Revit and Fusion, with a documented path for building custom ones on Autodesk Platform Services. Forma has its own Site Design API (beta). Real next step logged on the Design Process Tool's own desk, not just here.",
        "Get RAG from ‘taught once, tied to something I built’ to ‘could explain it to DT unprompted' — the single highest-leverage concept here, since Dialog Intelligence's entire premise depends on it.",
        "Get hands-on with at least one node-based image pipeline (ComfyUI or equivalent), even at toy scale, before ever pitching geometric control to DT.",
        "Understand what an enterprise sandbox and an enterprise agreement actually require — technically and contractually — well enough to be an informed participant in that conversation with DT and IT, not just a requester.",
        "Run Ben through the same calibration interview — his starting point hasn't actually been asked yet, only guessed at."
      ],
      "habit": "The actual mechanism that produced this page -- watch a real talk, then run a structured analysis on it (the same shape as the Gemini prompt used here), then get interviewed on the real gaps instead of assuming them -- is worth repeating on purpose. Next candidate gets logged here when we find one.",
      "note": "This section is explicitly a draft, and the calibration above has a date on it on purpose — it's expected to look different next time someone checks it. Update it when a goal gets crossed off, or when something we thought we understood turns out to be wrong.",
      "calibration": [
        {
          "who": "Shadi",
          "date": "2026-07-24",
          "items": [
            {
              "topic": "Generative image AI (diffusion models, ComfyUI, ControlNet, Canny, LoRA)",
              "level": "Knows Midjourney/diffusion conceptually, never used one hands-on. ComfyUI, ControlNet, and Canny edges were entirely new. Knew BIG built “something” with LoRA but not what it does or how it connects to OpenAsset."
            },
            {
              "topic": "RAG and grounding",
              "level": "Never heard of it before this page — taught from zero, anchored to the Workplan Estimation Tool's own hand-built retrieval-then-generate pattern, which turned out to already be a small, real version of the same idea."
            },
            {
              "topic": "MCP",
              "level": "Strongest area, and hands-on already — uses MCP daily via Cowork's own connectors (NotebookLM, Microsoft 365, Airtable). Knows DT already has a pyRevit MCP but hasn't tested it personally yet."
            },
            {
              "topic": "Sandbox / enterprise agreements",
              "level": "Heard the term, fuzzy on the actual technical and legal mechanics."
            }
          ]
        }
      ]
    },
    "stageTally": [
      {
        "stage": "live",
        "n": 1
      },
      {
        "stage": "pilot",
        "n": 2
      },
      {
        "stage": "prototype",
        "n": 3
      },
      {
        "stage": "concept",
        "n": 2
      }
    ]
  },
  "ideas": {
    "eyebrow": "IDEAS",
    "h1": "Sparks that haven't become anything yet.",
    "lead": "The actual pin-up wall of raw thoughts -- things someone floated that never got built, distinct from a committed Roadmap step or a Studio Floor desk. Nothing has to resolve immediately; an idea is allowed to just sit here, open, until it's promoted or abandoned.",
    "models": [
      {
        "name": "The Persona Pipeline",
        "status": "promoted",
        "proposes": "Interview in, persona out — the repeatable on-ramp for every new voice in this building.",
        "why": "Promoted to the Lobby: it built the seat you'll see filled next. The tooling stays offline until person three exists."
      },
      {
        "name": "The everything-agent",
        "status": "abandoned",
        "proposes": "One agent to run all systems at once — tracker, pipelines, memory, everything.",
        "why": "Abandoned on token economics and honest reflection: five small tools that each do one thing beat one big tool that almost does everything. The shelf keeps it as a warning."
      },
      {
        "name": "Scale the Charrette firm-wide",
        "status": "open",
        "proposes": "BIG runs their own pin-up/crit ritual firm-wide, every two weeks. Ours — the Charrette — is still a two-person prototype. Take the same cadence firm-wide once it's proven at two-person scale.",
        "needs": "Someone to actually run it as a firm-wide cadence, not just narrate the idea — that's the difference between an idea and a promoted direction.",
        "why": null
      }
    ],
    "openNote": "One open idea now sits here, sourced directly from what's already true on the Charrette's own page — not invented for this room.",
    "note": "A direction gets promoted when someone commits real hours to it, and abandoned when we can say why in one sentence. Both moves get announced on the wall, in the Charrette.",
    "otherDirectionsLabel": "Also on the board",
    "otherDirectionsNote": "A direction gets promoted when someone commits real hours to it, and abandoned when we can say why in one sentence. Both moves get announced on the wall, in the Charrette."
  },
  "__schemaNote3": "2026-07-28: Pin-up Wall renamed Charrette (same key 'pinup', copy only). Playbook (key 'modelshop') split into a Strategic Hub landing plus precedents/roadmap/ideas rooms.",
  "__schemaNote4": "2026-07-28, same day: Roadmap rebuilt around our own desks -- roadmap.gap/masterplan/learningPlan replaced by roadmap.ourState/ourPlan/map/learningFromPrecedents.",
  "__schemaNote5": "2026-07-28, third pass: roadmap.ourState (flat desk-bio list + open-asks re-listing) removed as redundant with the Studio Floor -- real feedback that it just re-narrated the desks. Kept only roadmap.stageTally. roadmap.map.branches (three tracks -- grounding-our-knowledge / untouched-generative / firm-ops-parallel, with hubId convergence) was present in data but never rendered; it is now the Map tab's primary content, relabeled away from BIG's own stage numbers. Where We Stand tab removed from the roadmap.html nav -- 3 tabs now: The Map, Where We're Headed, Learning from Precedents."
};
window.ROOMS_PAYLOAD.__schemaNote6 = "2026-07-28, fourth pass: roadmap.map.spine (BIG own 4-stage timeline, unused in render, and wrongly labeling DIALOG own current state as BIG stage 4) deleted -- dead and mis-framed. map.forwardRoads folded into a rebuilt roadmap.ourPlan: {eyebrow,h1,lead,gate,lanes[]} -- one real gate (sandbox/DT-partnership/DASH sign-off) plus four lanes (now / waiting-on-gate / one-branch-worth-trying / open-even-for-BIG), replacing a flat 8-step list that was really the desks a third time. map.legend removed (tied to the old walkthrough, meaningless without it); glossary kept. Real research finding on Forma MCP connectivity logged as an open ask on the Design Process Tool desk, and folded into the matching Learning from Precedents goal.";
