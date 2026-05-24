---
name: focus
description: Generate 5 fresh exercises for one specific vim motion (e.g. /focus macros)
---

The user wants to practice a specific motion. They will provide the motion name as an argument (e.g. `/focus f{char}` or `/focus macros`).

1. Match their argument against the motions in `progress.md` and the template files in `templates/`. Be flexible — "macros", "macro", and "q{char}" should all resolve to `macros.template.ts`.

2. Read the corresponding template file to understand the exercise format and the kinds of code used.

3. Generate a new practice file with 5 exercises all targeting that specific motion. Write fresh exercises — do not copy the template verbatim. The code should be different but the motion being practiced should be identical.

4. Save the file to `practice/focus-{motion}-{n}.ts` where `{motion}` is a short slug and `{n}` is the next available number.

5. Tell the user what was generated and any tips specific to that motion that are worth keeping in mind while practicing.
