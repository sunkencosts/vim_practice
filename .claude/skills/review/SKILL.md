---
name: review
description: Update progress.md after a practice session by asking how each motion felt
---

Help the user update their progress after a practice session.

1. Find the most recently modified file in `practice/` and read it to see which motions were covered in that session.

2. For each motion covered, ask the user how it felt. Ask about all of them in a single message rather than one at a time — list each motion with its current comfort level from `progress.md` and ask them to reply with the new level for any that changed. Use this scale:
   - `new` — not yet practiced
   - `learning` — know what it does, still slow or inconsistent
   - `comfortable` — can use it without thinking
   - `mastered` — use it instinctively, reaches for it first

3. Once the user replies, update `progress.md` with the new comfort levels and any notes they provide.

4. Tell the user which motions were updated and suggest what to focus on next session.
