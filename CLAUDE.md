# How Jessie works

Read this first. It overrides default behaviour.

## The shape of every reply

This is a form to fill in, not advice. If a reply reports anything found, changed, broken or asked,
it goes in this shape. No exceptions, even if it was all explained one message ago.

```
**1 · <short title of the item>**

**Context.** Her own words first, in quote marks — the sentence she typed, verbatim, typos and all —
then what this is about, restated in full so she never scrolls up. Never a paraphrase: without her
words at the front she has to work out which of her messages an item answers, and a paraphrase is
where I quietly substitute what I thought she asked. If an item has no words of hers behind it, say
so in the first line.
**Question.** The decision itself, in one sentence.
**Action.** Exactly what she does, with the clickable link in it. "Nothing to click" if there is none.
```

Every item carries a **number**, so she answers "1, 2 or 3" rather than quoting text back.

A finding also carries **Suggested fix: <one line naming what I would do>. Fix now?** That line lives
INSIDE this shape, underneath the Context, never instead of the shape. Ending a finding at
"Suggested fix ... Fix now?" is the failure this form exists to stop.

## Working with her

- **One step at a time.** Wait before the next one.
- **"Wait" is a mode, not a one-message flag.** When she says wait, or that she is queuing things,
  it holds until she says go, however much a later message sounds like an instruction. Log each item
  back in her words. Change nothing.
- **Propose, wait, then build.** Three separate steps. Never fuse describing with doing.
- **When she names a change, that includes pushing it.** Never ask her to push something she has
  already asked for, and never put a push in the open-questions list.
- **A change to the create form is a change to the edit form.** Both, in the same push, without
  being asked. A field the create form writes and the edit form never loads comes back empty and
  overwrites the real value the next time anybody saves, so half of this is a data loss rather than
  an inconsistency. Checked on 2026-09-07 and three were already open on the event form.
- **She is not a coder.** Ask plain-English questions and make the technical calls yourself. Say the
  user-facing effect, not the function name.
- **Never ask her to paste code into Apps Script.** Code is appended to
  `~/Documents/creating-works-gs/all.gs.js` and pushed with `npx clasp push` from a session on her
  Mac. A browser chat that cannot reach her files says so and hands her the function in ONE block,
  naming the file, so a session that can reach them puts it there. She presses Run; that part is
  hers. Her words, 2026-09-20: "I don't want to have to tell a new chat to say to do this every time."
- **Code changes come as FIND and REPLACE blocks**, complete and verbatim. Never "click before the
  brace". Keep the FIND short and unique; long multi-line FINDs fail.
- **Every reference is a clickable full URL**, and it points at the thing itself, never at a list she
  then has to search. If a page cannot address one item, add the parameter rather than write "and
  then click".
- **Name the sheet, the tab and the column.** Never "the sheet" or "the script".
- **Write a column as `Tab.field`.** `presence.lastActiveAtDate`, `Info.guestID`, `ikigai.languages`.
  A field name on its own makes her ask which tab, every time. The dotted form answers it before
  she asks and it reads faster than a sentence naming both.
- **Ask an open question ONCE, then stop asking.** It was the opposite of this until 2026-09-19,
  when re-asking every turn was found to bury the one new thing in a reply under a block she had
  already read. So: ask it once, in the reply shape, and after that it lives on its queue row, not
  in the chat. **A pending item is never reminded, not even as one line at the end** — she raises it
  when she wants it. Her words, 2026-09-18: *"dont give me a list of things everytime until we are
  doine wiht all of them. i'll tell you which one to work on"*, and again on 2026-09-22 of a
  one-line reminder appended to three replies running: *"i dont' like this at all"*. Name a pending
  thing in a few words only when it genuinely blocks the next step, never the whole block again.
- **Every open question takes the reply shape at the top of this file.** Numbered, then Context,
  Question, Action. She must never hunt for what is being asked. A question she has to go looking
  for is a question she cannot answer.
- **Offer to do it yourself, first.** Before handing her a task, say what you can do on her behalf and
  do it. Only what genuinely cannot be done from your side goes to her: a spreadsheet edit, pressing
  Run, a decision. Cloudflare deploys are yours once she has said go (2026-09-11), after the checks in
  `design/gate-worker.md`. Giving her twenty rows to delete by hand when a one-off could
  do it is the failure, and she should not have to ask.
- **One test at a time is a practice, not a rule.** Her correction, 2026-09-07: *"this wasn't a
  rule but I like it as a practice. Sometimes I like to test a whole bunch of things that you just
  shipped, and I don't need you to keep on waiting."* So: when a batch has just shipped, hand her
  the batch. When the work is still building up, one at a time and wait. Read which of the two it
  is rather than defaulting.
- **Anything you build is handed over with a link to the screen that proves it.** Her words,
  2026-09-21: *"I need to test everything you create. Give me a link every single time for testing to
  confirm something."* She is the one who declares a thing works, and a report without a link makes
  her go and find the screen — which is where testing stops happening. Say what she should SEE there
  too. "Nothing to click" is only true when nothing was built.
- **Always name what happens next and who owns it**: you, her, or both.
- **No sign-offs**, no wrapping up, no remarks about the time of day.
- **She runs several chats at once.** Pull and re-read before editing anything.

## Before proposing anything

Her two criteria are **tech debt**, including her own operational burden, and **lag time**.

1. **What breaks today if we do not do this?** If nothing, say so and let her decide.
2. **Does it add a thing that must be kept in step with another thing?** A copy, a sync, a second
   place to update. That is debt she carries, not you.
3. **What does it cost in round trips?** The Apps Script backend measures 9 to 39 seconds. No read
   is free.
4. **What writes this column, and when?** Ask before reasoning from it. Never infer a column's
   meaning from a pattern in the values.
5. **How hard is it to undo?** Duplicate a tab before deleting it. Weight caution by reversibility.

## Two shapes of bug that keep recurring

**A page asserting something before it knows.** A default written into the HTML is a claim. If the
data has not arrived, draw nothing or say you are looking. Never a message that will be wrong for
the first forty seconds.

**A second definition winning over the first.** In Apps Script every file shares one namespace and
the last definition of a name wins. Correct code can sit in the file unreachable. If a change seems
not to take, search for a second definition before suspecting the deploy.

## Where things are

| Thing | Where |
|---|---|
| The one person table | `Info` on Creating Works Data `1Vi3D1UJbvB5GcBBY-dO-bkV1BRLBZn6nJUQzWCFHxYU` |
| Glide's and Kumu's, read-mostly | `Main` on `1XyYmK6Jai-MXcjDY7NwoNMbAXJqu09bVjl2SqIFfC8U` |
| Backend | Apps Script project **Creating.Works GS**, script id `1W0EcFkRx5qSxSXJK7n-QQvjSylgsGEQuZdlI0Hp4cnaSmZIY9HUjYlHG` |
| The Apps Script editor, to press Run | https://script.google.com/home/projects/1W0EcFkRx5qSxSXJK7n-QQvjSylgsGEQuZdlI0Hp4cnaSmZIY9HUjYlHG/edit |
| Its executions, to see a Run that already happened | https://script.google.com/home/projects/1W0EcFkRx5qSxSXJK7n-QQvjSylgsGEQuZdlI0Hp4cnaSmZIY9HUjYlHG/executions |
| Docs and handoffs | `The-New-Build-Repository/design/features/` |
| One-off scripts, readable copy | `~/Documents/creating-works-oneoffs.gs` |

**Never write an Apps Script or spreadsheet URL from memory.** Take the id from the table above, from `~/Documents/creating-works-gs/.clasp.json`, or from `design/start-here.md`. A made-up project id looks exactly like a real one and she finds out by clicking it — it happened on 2026-09-21.

Saving Apps Script is not deploying it. Deploy, Manage deployments, pencil, **New version**, Deploy.
Leaving the version dropdown alone ships nothing.

## Working alongside the other chats

Jessie runs several chats at once and she is the only wire between them. The register of which chat
does what is the table in `The-New-Build-Repository/design/start-here.md`. No count is written down
anywhere, deliberately: a number beside a list has to be kept in step with it, and three of them
were already wrong on 2026-09-21.

- **Never infer a chat's name from a branch, worktree or folder.** Those names are generated from
  whatever was on screen when the session started and are never updated — one chat's folder says
  "2gather" and its branch says "james-marohn-super-admin", and neither describes what it does. The
  table is the only register. A chat that does not know its own title asks her once.
- **Prefix every queue row with your own chat name** — `profile.1`, `groups.4`, `findatime.1`. The
  old single letter series collided twice in one morning: two different DD rows and two different DE
  rows, written minutes apart by different chats. When she then says "DD go", neither chat can be
  sure she means its own row and the wrong one may act.
- **Write a block for her to paste ONLY when it changes what another chat will BUILD, or prevents
  real damage.** Routing work to the right chat qualifies; a security hole qualifies; a decision that
  unblocks somebody qualifies. Correcting a number in our own documentation does not, and neither
  does a naming scheme or one chat answering another's correction. Rules go into this file and into
  `design/start-here.md` silently — every chat reads both at startup. Chats already running get ONE
  line, once: *"Re-read CLAUDE.md and start-here.md."* Her words, 2026-09-21, after five blocks in an
  hour of which one mattered: *"I just feel like I'm out of the loop if I'm just a copier and a
  paster for my role."* Before writing any block, answer in one sentence what the receiving chat will
  DO differently. No answer, no block. **A pattern, a convention or anything already written into
  the design docs is never a block**, however useful it is, because every chat reads those files at
  startup and a block is a second copy that makes her carry it by hand. Her words, 2026-09-22, of a
  card-layout pattern that was already in the checklist before the block was written: *"wouldn't you
  put this in the design documentation? I don't want to have to share things like this across all
  chats unless there is a discrepancy or something that needs to be fixed right now."* So the test
  is not "is this worth knowing", it is **"is something broken right now that this stops"**.
- **Every block she pastes into another chat carries a label: your chat's own letter and a number.**
  `P1`, `P2`, `P3` … counting up without limit, in the item heading AND as the first thing inside the
  fence. She pastes constantly between all these chats, and without a label unique to the sender she
  cannot tell a block she already sent from one she skipped — both look identical. **The letters are
  the table below.** Find your own chat's title in it; if your chat is not there, add a row rather
  than asking her.

| letter | chat |
|---|---|
| `A` | **burned, never reuse.** Every chat counted from `A1` for part of 2026-09-21, so two different `A2`s and an `A6` are already in circulation |
| `C` | CW and Org forms |
| `D` | Data integrity |
| `E` | Events |
| `G` | Groups |
| `H` | HTML copy |
| `J` | Jazz mono repo |
| `L` | Load times |
| `M` | Page 0 Main |
| `N` | Network |
| `P` | Profile top nav |
| `Q` | Queue |
| `R` | ArangoDB |
| `S` | Support and Tickets |
| `T` | Expressions |
| `X` | UX Design |

  Free, for the next chat: **B, F, I, K, O, U, V, W, Y, Z**. Take the one that says your chat's
  name out loud and add your row; tell her which you took, do not make her pick.

  **It is a table rather than a sentence for one reason.** It was a single run-on line until
  2026-09-21, and within one minute that day two chats added themselves to it at once in the same
  shared checkout. Both edits landed on the same physical line, so neither could be committed without
  carrying the other, and a letter came within a character of being lost silently — nothing errors, a
  chat just reads a stale line and labels its blocks wrong. One row per chat means two chats adding
  themselves touch different lines and git merges them instead of colliding.
- **Every block she pastes into another chat opens by naming the sending chat**, e.g. *From the
  Profile / top nav chat, to the Groups chat. Jessie is carrying this between chats; it is not her
  asking.* Without it the block arrives in her voice, the receiving chat reads a peer's suggestion as
  her instruction, stops weighing it, and she loses the disagreement that was the point.
- **Nobody owns a file.** Route by SUBJECT, not by which file it lives in, and say out loud when you
  cross into another chat's area. The cost of a collision is not the edit, it is the other chat
  re-deriving what you already worked out.
- **Commit by naming the files you edited. Never `git add -A`, `git add .` or `git commit -a`.**
  Several chats work in the SAME checkout, so the working tree is usually dirty with somebody else's
  half-finished edit. `-A` sweeps it into your commit and ships it under your message before they are
  ready. It happened on 2026-09-21. Checking first does not help — between the check and the commit
  another chat can write, and there is no lock. Naming your paths is the only thing that actually
  prevents it, and it costs nothing.
- **`all.gs.js` is ONE physical file that every chat writes, and nothing stops two at once.** The
  four clasp steps below protect the chat doing the pushing; this protects everybody else.
  1. **Commit the moment you append**, naming the file — not when you are ready to push. Committed
     work can be erased from the file but never from history. Uncommitted work can be erased by
     anybody's `clasp pull`, `git checkout` or save, with no error and no trace. (Events, 2026-09-22.)
  2. **Append, never rewrite.** Add with `>>` or an edit that inserts. Never write the whole file back
     from a copy you read earlier: on 2026-09-22 a commit described as a small preview change carried
     189 deletions, because the file was written back from an older read, and it erased two other
     chats' one-offs from git and from the editor.
  3. **Before every commit of `all.gs.js`, `git diff --stat all.gs.js` shows only insertions you
     made.** A deletion you did not intend means your copy is stale. Stop.
- **Before any `clasp push`, run the four steps below and SAY IN THE QUEUE ROW that you ran them.**
  `clasp push` sends your whole local file and replaces what is in the editor, so a push from a copy
  taken before somebody else's append wipes their work with nothing shown and nothing logged. You
  cannot check whether another chat is pushing — looking for a running process finds your own command,
  and clasp 3.4.1 cannot pull into a scratch folder. This is the only check that proves anything:
  1. **Commit the local file to git first**, so nothing can be lost whatever happens next.
  2. **`clasp pull`** — this overwrites local with whatever the editor actually holds.
  3. **`git diff`** — anything another chat added that you do not have shows as an ADDITION, a `+`
     line: the working tree now holds the editor, and your commit does not have their lines. Your
     own new work, which the editor does not have yet, is what shows as `-`. Proved on 2026-09-22:
     a one-off committed but not yet pushed came back as 75 `-` lines and zero `+`.
  4. Merge what the diff found, commit, then `clasp push`.
  Every queue row for a clasp push carries the result in as many words: **clasp check: clean**, or
  **clasp check: found `<function>` from `<chat>`, merged**. Set 2026-09-22 at her word: *"let's try
  that rule and explicitly say if this rule was used to test it later."* A rule nobody can tell was
  followed cannot be judged later, and this one is meant to be judged.
- **Name a one-off with YOUR chat's letter, never the shared `n` series.** `g1_`, `p1_`, `e1_` …
  counting up within your own chat: `g1_hostsListedTwice_2026_09_22`. The `n` series is CLOSED at
  n197 — chats numbering into one shared list collided on n196 on 2026-09-22, the same way the queue
  rows collided on DD, and a number nobody owns is a number two chats pick at once. Your letter is
  the one in the paste-block rule above, and that is the ONLY list of letters — this line
  deliberately does not repeat it, because the copy that used to sit here held nine chats when
  fourteen had letters, so Network, Support and Tickets, UX Design, Expressions and Queue each read
  a rule that gave them no letter at all. Grep the name before you define it — in Apps Script the last definition of a name wins, across every file.
- **`clasp push` replaces the WHOLE Apps Script file, so pull first, every time.** `all.gs.js` is
  append-only and several chats add one-offs to it. Git handles the repo, but `npx clasp push` sends
  your local copy to the editor and overwrites what is there — so a push from a working copy taken
  before somebody else's append silently wipes their one-off out of the editor while the repo still
  shows both. **The pull that matters is `npx clasp pull`, not `git pull`** — only clasp reads what
  the editor actually holds. In `~/Documents/creating-works-gs`: commit or set aside your change,
  run `npx clasp pull`, then `git diff`. The working tree now holds the EDITOR, and the direction
  matters: `+` lines are what the editor has and your commit does not — somebody else's work, stop
  and ask — while `-` lines are just your own change being pulled over. Then
  re-apply your change, `npx clasp push`, and `npx clasp pull` once more: a clean `git status` is
  the proof. Grepping your own file after pushing proves nothing — it can only show what you just
  sent, never what you erased.
- **`nav/topbar.js` is pinned by version in 35 pages across both repos, 27 in events and 8 in content (counted 2026-09-23, V6.29).** One chat at a time moves
  that number, and says on the queue when it does. **Edit those pages in `~/Documents/events` and
  `~/Documents/content` directly, never from a worktree** — the 27 worktrees under
  `content/.claude/worktrees` hold eight different pins between them, the oldest 58 versions behind,
  so pushing a content page from one silently reverts the bar on that page alone. Two chats bumping it at once points a whole set of
  pages at a version that was never shipped — nothing conflicts, nothing errors, the fix reaches
  nobody.

## The number that is actually free, and the one chat whose letter does not work

Counted in the project on 2026-09-22, after the letter scheme arrived. **Count from what is already
there, not from 1.** Six letters were in use long before the scheme existed, so "start at 1" puts a
second `g1_`, `e1_`, `d1_`, `h1_`, `c1_` and `m1_` into a dropdown that already has one. Do not
trust a list of numbers here — it goes stale the moment another chat adds one. Run this, with your
own letter in both places:

```
grep -ho "^function g\([0-9]*\)_" ~/Documents/creating-works-gs/*.js | sed 's/^function g//;s/_$//' | sort -n | tail -1
```

**The Network chat cannot use its own letter.** `n1_` to `n9_` belong to the retired `n` series,
which is closed at `n197`, so Network uses **`nw1_`** upward. Its row in the table above still says
`N`, because that is the paste-block letter and it is not the same thing.

**And a correction to the REASON, because a wrong reason gets applied elsewhere.** A prefix clash
does not silently override anything: the whole function name is the identifier, so
`g1_previewOfferToMe` and `g1_hostsListedTwice` are two different functions and both run. What
last-definition-wins needs is the WHOLE name repeated — which is why grepping the exact name before
defining it is the rule doing the protecting, and this one is tidiness.

## Six ways to be told it worked when it did not

Every one of these has happened here. The shape is the danger: the failure reports success, so the
chat tells her it is done and nobody finds out for hours.

1. **A failed site build ships nothing and says nothing.** GitHub Pages errored twice on 2026-09-21
   and kept serving the previous copy. The push succeeded, git was clean, an hour of work was
   invisible. After every push, curl the live page for a string from the new code.
   **But `errored` in the Pages API does not always mean it failed.** When two chats push within a
   minute, the first build is CANCELLED and reported as `errored`, while the second one ships BOTH
   commits. On 2026-09-22 two pushes 59 seconds apart both showed `errored` and both were live.
   So the string on the live page is the answer, never the build status on its own, and
   `gh run list` tells cancelled from failed where `gh api .../pages/builds` cannot.
2. **`tagsMode=replace`, or nothing can ever be removed.** Without it the backend MERGES what you
   send into the existing tag columns. A delete does nothing and the save still reports success.
3. **A write to a field with no column is dropped in silence.** A save walks the tab's header row and
   discards what it does not recognize, reporting success anyway. That is how `photoURL` was lost
   across the site on 2026-09-16.
4. **In Apps Script the last definition of a name wins, across every file.** Correct code can sit
   permanently unreachable. It emptied every place field on the site on 2026-09-19. Grep the name
   before defining it, and suspect a second definition before suspecting the deploy.
5. **Pushing Apps Script is not deploying it.** `clasp push` saves the code; it does not ship it.
6. **A lookup that hides its failures is indistinguishable from a column nobody filled in.**
   `ikigai.fullName` was an `IFERROR(VLOOKUP(...))` that had matched nothing since the day it was
   written, and all 406 misses came back as empty cells. It read as missing data, and the request
   it produced was "put the names in" — which would have destroyed the lookup. Use `IFERROR` for a
   miss you expect, never around a lookup that should always hit. **A column that is wholly empty
   gets checked before it gets filled.**

## Say what a problem does, not what it resembles

No war, weapon or disaster words for a technical problem. **Landmine, trap, minefield, blow up,
kill, attack, fire, bomb, hostage, casualty, war room** — none of them. Nor alarm framing like *a
big concern* or *this is dangerous*. Jessie, 2026-09-22: *"Instead of big concern or anything else
nothing to do with war"*, and *"Regarding land mines or any words that you use"*.

They are worse than decoration. A word like *landmine* says a thing is frightening without saying
what it does, so she has to ask what actually happens — and every one of these problems already has
a plain and more useful sentence sitting behind it. **Name the effect and who it reaches.**

| not this | this |
|---|---|
| `ikigai.topics` is a landmine | the header is `" topics"` with a leading space, so a write to `topics` is dropped and says it succeeded |
| this will blow up the save | the save drops the field and reports success, so it looks like it worked |
| a big concern on the profile | six people see a copy of their own answers from months ago |
| the deploy is a disaster | the push succeeded and the site is still serving the old copy |

The same goes for anything written as her: the queue, the docs, commit messages, a block she pastes
into another chat.

## Nothing internal goes in a page we serve

The pages are public and anyone can read the source, so **no comments in shipped HTML or JS** — not
our reasoning, not our decisions, not our internal notes. Code only; explanation goes in the queue
log or in `design/`. A check runs on every push to the events repo and fails the build on any
comment it finds, keeping only the copyright line, licence notices and bare version stamps. If you
ever need to strip comments, use a parser, never a regex — a regex cannot tell a comment from a
slash inside a string and will corrupt working code while claiming to clean it.

**Before chasing a visual bug, ask whether the state in her screenshot is one the CSS can even
produce.** A cropped screenshot looks exactly like a broken layout. If the page has no rule that
could draw what you are looking at, suspect the image first.
