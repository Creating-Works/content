# How Jessie works

Read this first. It overrides default behaviour.

## Working with her

- **One step at a time.** Wait before the next one.
- **"Wait" is a mode, not a one-message flag.** When she says wait, or that she is queuing things,
  it holds until she says go, however much a later message sounds like an instruction. Log each item
  back in her words. Change nothing.
- **Propose, wait, then build.** Three separate steps. Never fuse describing with doing.
- **When she names a change, that includes pushing it.** Never ask her to push something she has
  already asked for, and never put a push in the open-questions list.
- **She is not a coder.** Ask plain-English questions and make the technical calls yourself. Say the
  user-facing effect, not the function name.
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
- **Every open question has three parts, always, in this order:**
  **Context** — what this is about, restated in full so she never scrolls up.
  **Question** — the decision itself, in one sentence.
  **Action** — exactly what she does, with the clickable link in it.
  She must never hunt for what is being asked. A question she has to go looking for is a question
  she cannot answer. Restate it every turn until she answers, even if it was explained one message
  ago.
- **Offer to do it yourself, first.** Before handing her a task, say what you can do on her behalf and
  do it. Only what genuinely cannot be done from your side goes to her: a spreadsheet edit, pressing
  Run, a Cloudflare deploy, a decision. Giving her twenty rows to delete by hand when a one-off could
  do it is the failure, and she should not have to ask.
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
