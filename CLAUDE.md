# How Jessie works

Read this first. It overrides default behaviour.

## The shape of every reply

This is a form to fill in, not advice. If a reply reports anything found, changed, broken or asked,
it goes in this shape. No exceptions, even if it was all explained one message ago.

```
**1 · <short title of the item>**

**Context.** What this is about, restated in full so she never scrolls up.
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
- **End every reply with the open questions**, restated in full with the exact clicks, and keep
  re-asking every turn until she answers. Silence means she missed it. Re-paste any pending code
  each time rather than pointing back up the thread.
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
| Backend | Apps Script project **Creating.Works GS** |
| Docs and handoffs | `The-New-Build-Repository/design/features/` |
| One-off scripts, readable copy | `~/Documents/creating-works-oneoffs.gs` |

Saving Apps Script is not deploying it. Deploy, Manage deployments, pencil, **New version**, Deploy.
Leaving the version dropdown alone ships nothing.

## Working alongside the other chats

Jessie runs nine chats at once and she is the only wire between them. The register of which chat
does what is the nine-row table in `The-New-Build-Repository/design/start-here.md`.

- **Never infer a chat's name from a branch, worktree or folder.** Those names are generated from
  whatever was on screen when the session started and are never updated — one chat's folder says
  "2gather" and its branch says "james-marohn-super-admin", and neither describes what it does. The
  table is the only register. A chat that does not know its own title asks her once.
- **Prefix every queue row with your own chat name** — `profile.1`, `groups.4`, `findatime.1`. The
  old single letter series collided twice in one morning: two different DD rows and two different DE
  rows, written minutes apart by different chats. When she then says "DD go", neither chat can be
  sure she means its own row and the wrong one may act.
- **Every block she pastes into another chat carries a label** — `A1`, `A2` … `A9`, then `B1`,
  counting within your own chat across the whole conversation. It goes in the item heading AND as the
  first thing inside the fence. She pastes constantly between nine chats, and without a label she
  cannot tell a block she already sent from one she skipped — both look identical.
- **Every block she pastes into another chat opens by naming the sending chat**, e.g. *From the
  Profile / top nav chat, to the Groups chat. Jessie is carrying this between chats; it is not her
  asking.* Without it the block arrives in her voice, the receiving chat reads a peer's suggestion as
  her instruction, stops weighing it, and she loses the disagreement that was the point.
- **Nobody owns a file.** Route by SUBJECT, not by which file it lives in, and say out loud when you
  cross into another chat's area. The cost of a collision is not the edit, it is the other chat
  re-deriving what you already worked out.
- **`clasp push` replaces the WHOLE Apps Script file, so pull first, every time.** `all.gs.js` is
  append-only and several chats add one-offs to it. Git handles the repo, but `npx clasp push` sends
  your local copy to the editor and overwrites what is there — so a push from a working copy taken
  before somebody else's append silently wipes their one-off out of the editor while the repo still
  shows both. Pull immediately before every push, and afterwards check the editor still holds the
  other chat's most recent function.
- **`nav/topbar.js` is pinned by version in 28 pages across both repos.** One chat at a time moves
  that number, and says on the queue when it does. Two chats bumping it at once points a whole set of
  pages at a version that was never shipped — nothing conflicts, nothing errors, the fix reaches
  nobody.

## Five ways to be told it worked when it did not

Every one of these has happened here. The shape is the danger: the failure reports success, so the
chat tells her it is done and nobody finds out for hours.

1. **A failed site build ships nothing and says nothing.** GitHub Pages errored twice on 2026-09-21
   and kept serving the previous copy. The push succeeded, git was clean, an hour of work was
   invisible. After every push, curl the live page for a string from the new code.
2. **`tagsMode=replace`, or nothing can ever be removed.** Without it the backend MERGES what you
   send into the existing tag columns. A delete does nothing and the save still reports success.
3. **A write to a field with no column is dropped in silence.** A save walks the tab's header row and
   discards what it does not recognize, reporting success anyway. That is how `photoURL` was lost
   across the site on 2026-09-16.
4. **In Apps Script the last definition of a name wins, across every file.** Correct code can sit
   permanently unreachable. It emptied every place field on the site on 2026-09-19. Grep the name
   before defining it, and suspect a second definition before suspecting the deploy.
5. **Pushing Apps Script is not deploying it.** `clasp push` saves the code; it does not ship it.

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
