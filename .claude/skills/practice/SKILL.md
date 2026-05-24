---
name: practice
description: Generate a mixed vim motions practice session weighted toward your weakest areas
---

Read `progress.md` and generate a mixed practice file.

Rules for generating the file:
- Motions marked `new` or `learning` should make up ~80% of exercises
- Motions marked `comfortable` may appear occasionally for reinforcement
- Motions marked `mastered` should be skipped unless there are fewer than 5 non-mastered motions
- Include 8–12 exercises total, each targeting a different motion
- Do not repeat the same motion twice in one session
- Draw from the corresponding template file for each motion when writing exercises, but vary the specific code so the exercises feel fresh
- Each exercise must be self-contained — no exercise should depend on a previous one

Save the file to `practice/` with the name `mixed-{n}.ts` where `{n}` is the next available number (check what files already exist in `practice/`).

After saving, tell the user which motions are covered and remind them to run `/review` when they are done.
