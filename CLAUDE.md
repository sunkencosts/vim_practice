# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Purpose

This is a vim motions practice repository. Each TypeScript file contains intentionally broken code with comments describing which vim motion to use and what edit to make to fix it.

## Structure

- `practice/` — active practice files to open in vim and work through
- `templates/` — original versions of each practice file; copy these to reset a practice file after completing it

## Template files

Each motion has its own template with 5 exercises:

| File | Motion |
|------|--------|
| `f-char.template.ts` | `f{char}` — jump to character on line |
| `t-char.template.ts` | `t{char}` — jump to just before character |
| `semicolon-repeat.template.ts` | `;` — repeat last f/t motion |
| `zero-dollar.template.ts` | `0` and `$` — line start/end |
| `caret.template.ts` | `^` — first non-whitespace |
| `brace-jump.template.ts` | `}` and `{` — jump between blocks |
| `gg-G.template.ts` | `gg` and `G` — file top/bottom |
| `percent.template.ts` | `%` — jump to matching bracket |
| `ci-quote.template.ts` | `ci"` — change inside double quotes |
| `ci-paren.template.ts` | `ci(` — change inside parentheses |
| `A-append.template.ts` | `A` — append at end of line |
| `I-insert.template.ts` | `I` — insert at first non-whitespace |
| `o-O-newline.template.ts` | `o` and `O` — open line below/above |
| `r-replace.template.ts` | `r{char}` — replace one character |
| `gUiw-uppercase.template.ts` | `gUiw` — uppercase word |
| `dot-repeat.template.ts` | `.` — repeat last change |

## Progress tracking

`progress.md` in the root tracks comfort level for each motion. Comfort levels are: `new` → `learning` → `comfortable` → `mastered`.

When asked to generate a mixed practice file, read `progress.md` and weight exercises toward motions marked `new` or `learning`. Motions marked `comfortable` or `mastered` can appear occasionally for reinforcement but should not dominate.

## Slash commands

Custom skills live in `.claude/skills/` and are invoked with `/`:

- `/practice` — generate a mixed session weighted toward weak motions
- `/review` — update `progress.md` after a session
- `/focus {motion}` — generate 5 exercises for one specific motion

## Adding new exercises

Each exercise block follows this format:

```
// -----------------------------------------------------------------------------
// MOTION: {motion}
//
// TASK: Step-by-step instructions using only that motion to fix the code.
// -----------------------------------------------------------------------------
```

Each exercise targets exactly one motion. The broken code should require that specific motion to fix efficiently.
