# Build Spec: Collapse Intake Skills into the Potluck "What will you bring?" step

## Background / why
This is for the **Lake Ballinger Hub** event — a "potluck" gathering where the ticket to attend is **sharing something**: a skill, a good/thing, or an experience.

**The problem:** the intake flow already collects each person's **skills** (as part of who they are). A separate potluck "gift" question then asks what skill they'll bring — which (a) is duplicative for the person and (b) creates a second, messy set of skill data parallel to intake.

**The decision (chosen approach):** keep the potluck's three visible buckets, but **pre-fill the Skills bucket from the person's existing intake answers** so we never ask for skills twice. Only Things and Experiences are collected fresh, because we don't already have that data.

## The screen to build — "What will you bring to the potluck?"
This is the final step of the flow (after the person has completed their intake profile). It shows **three lanes, in this order**:

### 1. Skills — pre-populated (confirm / pick)
- Show the skills the person **already listed in intake** as selectable chips/toggles.
- Prompt: *"These come from your profile. Pick the skills you'd like to offer at the gathering."*
- Default state: recommend **unselected**, so choosing to offer is a deliberate act (offering a skill at the event != having listed it).
- Include an **"Edit my skills"** link that returns them to the intake skills step. Any edits there must flow back into this pick list (single source of truth).
- **Data rule (critical):** a selected skill here is a **reference/flag to the existing skill record** — e.g. store the list of skill IDs the person is offering at the event. **Do NOT create new skill entries from this step.** This is the entire point: no duplicate skill data.

### 2. Things — open entry
- No pre-fill (intake doesn't capture this).
- Prompt: *"Goods to share, lend, or give — tools, produce, books, materials, plants."*
- Simple add-one-or-more input.

### 3. Experiences — open entry
- No pre-fill.
- Prompt: *"Something to lead or host — a walk, a game, a tasting, a session by the lake."*
- Simple add-one-or-more input.

## Data model summary
| Bucket | Source | Storage |
|---|---|---|
| Skills | Existing intake skills | Reference/flag existing skill IDs as "offered at event" — **no new records** |
| Things | New in this step | New field(s) on the registration/event profile |
| Experiences | New in this step | New field(s) on the registration/event profile |

## Edge cases to handle
- **No skills in profile yet:** show the Skills lane with an empty state + an "Add skills" link to the intake skills step, rather than a blank box.
- **Person edits skills later:** the Skills pick list must reflect current profile skills; a removed skill that was flagged "offered" should be handled gracefully (unflag it).
- **Nothing selected in any lane:** decide whether "bring something" is required to register, or can be added later. (Flag for product — see open questions.)

## Acceptance criteria
1. A returning person sees their intake skills pre-listed in the Skills lane; picking them does **not** create new skill records.
2. Things and Experiences accept free entry and save to the event profile.
3. "Edit my skills" round-trips to intake and back, and edits are reflected.
4. No duplicate skill data exists anywhere after a person completes this step.

## Recommended companion (confirm before building — not locked in)
To handle **limited rooms** for skill-sharing, add a per-skill **"how do you want to share this?"** choice when a skill is offered:
- **Scheduled session / Q&A** — needs a room + time; **cap total to the number of rooms available.**
- **Table / corner presence** — findable at a spot.
- **Available in the room (ask-me-anything)** — no fixed space; surfaced through matching. This is the default and **scales without rooms.**

This turns "20 people want to share skills" into "6 scheduled sessions + 14 available-in-the-room," solved by matching rather than physical space. *Confirm with product before building this part.*

## Open questions for the implementing chat to confirm
1. **Which file / flow** holds the current potluck "what will you bring?" step, and where intake skills are stored — locate and confirm before editing.
2. **Default selection** for the Skills lane: unselected (recommended) or pre-checked?
3. **Is bringing something required** to complete registration, or optional/addable later?
4. **Build the room-tier companion now, or later?**

## Out of scope (for this task)
- The lakeballingerhub.com domain forwarding and the hub QR-code button (separate work).
