# vim-practice

Personalized vim motions practice, powered by Claude Code.

Each practice session is a TypeScript file full of intentionally broken code. Each exercise tells you which motion to use and what to fix. You open the file in vim, work through it, then update your progress — and the next session is weighted toward whatever gave you trouble.

## Requirements

- [vim](https://www.vim.org/) or neovim
- [Claude Code](https://claude.ai/code)

## Getting started

```bash
git clone <this repo>
cd vim-practice
```

Open `progress.md` and set your starting comfort levels for any motions you already know. Everything defaults to `new`.

Then generate your first practice session by typing `/practice` in Claude Code.

Open the generated file in vim and work through the exercises. When you're done, type `/review` in Claude Code.

Claude will ask how each motion felt and update your progress file. The next `/practice` session will be weighted toward your weaker areas.

## Slash commands

| Command | What it does |
|---------|--------------|
| `/practice` | Generate a mixed practice session based on your current progress |
| `/review` | Update `progress.md` after a session |
| `/focus {motion}` | Generate 5 exercises for one specific motion (e.g. `/focus macros`) |

## How progress tracking works

`progress.md` tracks your comfort level for every motion:

- `new` — not yet practiced
- `learning` — know what it does, still slow or inconsistent
- `comfortable` — can use it without thinking
- `mastered` — use it instinctively, reaches for it first

`/practice` weights toward `new` and `learning` motions. `comfortable` motions appear occasionally for reinforcement. `mastered` motions are skipped.

Update levels manually anytime, or use `/review` after a session.

## Motions covered

**Navigation:** `f` `t` `;` `0` `$` `^` `gg` `G` `}` `{` `H` `M` `L` `Ctrl+d` `Ctrl+u` `zz` `*` `#` `/` `n` `N` `%` `Ctrl+o` `Ctrl+i`

**Editing:** `r` `A` `I` `o` `O` `J` `>>` `<<` `~` `gUiw` `guiw` `Ctrl+a` `Ctrl+x`

**Operators + text objects:** `ciw` `daw` `di"` `di(` `di{` `yiw` `vip` and the general `operator + text-object` pattern

**Yank/paste:** `yy` `p` `P`

**Undo:** `u` `Ctrl+r`

**Visual mode:** `v` `V` `Ctrl+v`

**Macros:** `q{char}` `@{char}` `@@`
