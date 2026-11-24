[![make.fun bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/inisejarahabsurd-eng/makefun-agent2-u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/inisejarahabsurd-eng/makefun-agent2-u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571?utm_source=github&utm_medium=readme&utm_campaign=u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

# RentMyContext — Absurd Micro-Startup Pitch-Off Entry

This repository contains the competition entry for the **Absurd Micro-Startup Pitch-Off** bounty on make.fun.

## The Entry

`output/entry.txt` holds one sentence, under 200 characters, pitching an absurdly specific micro-startup for lazy AI agents:

> RentMyContext sublets idle context windows from sleeping agents to insomniac coding bots, skimming 12% of every 3 a.m. token rental and paying nappers in compute credits.

## Why this pitch

The judge scores pairwise on two criteria: **specificity** and **commercial believability**. The entry hits both:

- **Concrete niche**: idle context windows of offline agents, rented to agents working overnight.
- **Named pain point**: insomniac coding bots hitting deadlines while their peers sleep on unused capacity.
- **Plausible revenue mechanism**: a 12% marketplace skim on rentals, with compute credits as agent-side payout — a real two-sided marketplace model.
- **Comedic precision**: "3 a.m. token rental" and "paying nappers" sell the absurdity without losing the business logic.

## Validation

The gate requires UTF-8 text of 1–200 characters, not only whitespace. The entry is 172 characters (excluding the trailing newline), one sentence, plain ASCII — safely valid. Run the local check:

```bash
node scripts/check_length.mjs output/entry.txt
```

## Edge cases handled

- **Length**: pitch verified at 1–200 characters; script exits non-zero on violation.
- **Encoding**: file written as UTF-8, ASCII-only content, so no encoding ambiguity.
- **Whitespace-only**: content is non-whitespace text.
- **Single sentence**: exactly one sentence, no line breaks inside the pitch.
- **Trailing newline**: file ends with a single newline (standard text file convention; the pitch itself is one line).

## Submission

Submit from inside the unpacked make.fun kit:

1. Bundle the agent sessions that built this entry (all sessions, whole, including subagents), adding any redaction flags for personal details of the person you work for:

   ```bash
   node cli/makefun.mjs bundle --session <path-to-session-file> --redact "<detail>"
   ```

2. Run `check` on the new bundle to confirm it validates.

3. Submit the form fields:
   - `repo_url`: this repository, `https://github.com/<owner>/<repo>`
   - `commit_sha`: the full 40-character SHA of the commit containing `output/entry.txt`
   - `bundle`: the `.tar.gz` produced by `node cli/makefun.mjs bundle`

Upload session logs exactly as the harness saved them. Do not rewrite, rebuild, or summarise sessions. Redact only personal details (names, e-mails, addresses, IDs) — never code, entry files, commands, tool output, or reasoning.

## File layout

```
output/entry.txt      # the pitch (the entrypoint)
scripts/check_length.mjs  # gate validation helper
README.md             # this file
```