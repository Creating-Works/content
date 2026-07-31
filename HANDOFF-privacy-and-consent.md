# Handoff: privacy policy shipped to a branch, 18+ consent blocked on Code.gs

Start the next chat by reading this file. It supersedes `HANDOFF-consent-privacy.md`, which lives in
worktree `elastic-wright-43a4ce` and is now out of date on two points (the ikigai columns DO exist,
and the anonymous-matching feature IS running).

## Where things are

**`privacy-policy.html` V1.03** is written, committed and pushed on branch
`claude/title-privacy-policy-ab6fb2` in worktree `presentations-4bf0d5`. Three commits: `31ffd31`,
`c0b4a15`, `9623a37`.

It is **not published**. creating.works is served by GitHub Pages from `main`, so
`https://creating.works/privacy-policy.html` returns 404 until that branch merges. Merging is the
publish step.

**`intake.html` V6.22** is still uncommitted in worktree `elastic-wright-43a4ce` on branch
`claude/title-camp-536a01`. Do not ship it yet - see the blocker below.

## The one blocker: Code.gs does not save the consent stamps

Probed live on 2026-07-31 against the test row `sdfsd`:

- The `ikigai` sheet **already has** the `18Older` and `ackTerms` columns. `getProfile` returns both
  keys. The old handoff said these still needed adding. They do not.
- `saveIntake` **does not write either one**. Sent an ISO stamp to both, read back `''` and `''`.
- The write path is fine. In the same call `wantsSignupList` wrote and read back `True`, so
  `saveIntake` has a fixed list of fields it copies and these two are not on it.

**What this means:** if V6.22 ships as-is, a person checks both boxes and gets through, because the
page holds the answer in memory. Nothing reaches the sheet. On their next visit the block is back,
and it never goes away. Section 12 of the privacy policy also stays untrue.

**The fix needs the Code.gs source.** Jessie has to paste it. Then: make `saveIntake` copy the
`age18Older` param into the `18Older` column and the `ackTerms` param into the `ackTerms` column,
matching how the other fields are handled in that function. Give it as an exact find/replace.

Front end is already correct and needs no change. `intake.html` sends
`&age18Older=` and `&ackTerms=` on every `autoSave`, and reads them back at
`_age18=String(d['18Older']||'')` / `_ackTerms=String(d.ackTerms||'')`.

## Side finding, unresolved

`postal` does not save either. Wrote `98101` to `sdfsd` twice, once alone and once alongside other
fields, and it read back `''` both times while other fields in the same call saved. Possible that
postal lives elsewhere or is a lookup column, in which case nothing is wrong. The consent block sits
directly under the postal field in the first-pass flow, so worth understanding before shipping on
top of it. Jessie was asked and had not answered.

## Privacy policy: what is decided

Rewritten against the running software, 14 sections. Framed on operating agreement 1.3: Creating
Works is the platform, DayBalancer LLC operates it, one profile across three tools.

Confirmed by Jessie this session:

- Anonymous matching **is running on Glide today**. The match screen hides both people's name and
  photo until a connection request is accepted, then everything shows. This is now S4, scoped to
  that screen, with a closing line pointing at S3 so nobody reads it as covering their Appear page.
  S4 says "a match for jobs", not "for work".
- Hiring detail (compensation, availability, objectives) stays off the public page. Said in S1.
- No Google Apps Script, Sheets, or backend architecture detail anywhere, including source comments.
- S6 companies: Google / Glide / Cloudflare / GitHub / Squarespace / Kumu. Google Fonts and the two
  drawing services (api.qrserver.com, ui-avatars.com) were deliberately dropped at her request.
- S7 reads "We build **parts** of this software with the help of AI assistants."
- Contact is `hello@creating.works` everywhere.
- 2Gather event profiles: nothing in the product surfaces them today, so her S3 wording stands as
  written. Revisit when event profiles get socialised.

Verified live rather than assumed:

- HTTPS is true on all five domains, each with a 301 from http.
- Glide DOES set one cookie, `player-deployment-version`, Max-Age 10800. S9 says so. The old
  "we use cookies" text was wrong in the other direction and S9 now describes browser storage in
  words rather than naming the five keys.
- creating.works is served by GitHub Pages, not Cloudflare.

## Privacy policy: what is still open

1. **S12 gates publication.** It says people confirm they are 18 at registration. That becomes true
   when V6.22 plus the Code.gs fix plus the Glide flag are live. Do not merge to main before then.
2. **S10 and S11 want a lawyer's read.** They describe GDPR and CCPA rights handled by a person at
   an email address, which is the honest mechanism, but the claims are legal ones.
3. **Gift lists are public by link and S3 does not name them.** `giving.html?owner=<id>` opens to
   anyone. Jessie's S3 wording covers "profile pages on Appear or 2Gather", which a reader may not
   read as covering their gift list. She was asked and had not answered.
4. **The page still loads Google Fonts** from fonts.googleapis.com, so a reader's IP does reach
   Google on every visit, while the disclosure was removed. Either self-host DM Sans or put the line
   back. She was asked and had not answered.
5. **`intake.html` TOS_URL / PRIVACY_URL still point at daybalancer.com.** Repoint PRIVACY_URL to
   `https://creating.works/privacy-policy.html` only after the merge, or it will 404 for members.
   There is still no Terms of Service document anywhere in the repo.
6. **`giving.html saveEditByIdx` writes edits to browser storage only**, so the sheet keeps the
   original title and note. S10 tells people they can edit what is on their page. That is only fully
   true once this is fixed. Code fix, not a wording fix.
7. **Sync existing profiles.** Everyone who already checked the boxes on the Glide side still meets
   the block in intake, because intake reads the `ikigai` columns and Glide writes its own Users
   table. Needs a one-off script. First unknown: is the Glide Users table backed by a Google Sheet
   that Apps Script can open, and if so which spreadsheet and tab. Jessie had not confirmed.

## Context cost, for whoever picks this up

This session burned context faster than usual for avoidable reasons. The whole HTML file was written
out twice in full instead of edited in place, the complete track-changes policy was printed into the
chat, and a post-edit hook echoed ~180 lines of the file back. Prefer targeted edits, and put long
deliverables in a file rather than in the chat body.

## Working rules that matter here

Confirm before building: propose, get a yes, then build. Read `jessie-writing-style-v3-guide.md` in
the memory folder before drafting prose in her voice, and `writing-style.md` for the repo rules that
govern this page. Self-test before handoff. Give test links as full URLs with the domain. Do not
write memory files without discussing first. "Build" and "push" both mean commit and push together.
