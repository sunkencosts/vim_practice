# Vim Motions Progress

Comfort scale:
- `new` — not yet practiced
- `learning` — know what it does, still slow or inconsistent
- `comfortable` — can use it without thinking
- `mastered` — use it instinctively, reaches for it first

Future practice files will be generated from this file, weighted toward
motions marked `new` or `learning`.

---

## Line motions

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `f{char}` | Jump forward to the next occurrence of `{char}` on the current line | `mastered` | |
| `t{char}` | Jump forward to just before the next occurrence of `{char}` on the line | `learning` | |
| `;` | Repeat the last `f` or `t` motion | `comfortable` | |
| `0` | Jump to column 0 (hard line start, before any whitespace) | `comfortable` | |
| `$` | Jump to the last character of the line | `comfortable` | |
| `^` | Jump to the first non-whitespace character of the line | `comfortable` | |

## File / screen navigation

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `gg` | Jump to the first line of the file | `mastered` | |
| `G` | Jump to the last line of the file | `mastered` | |
| `}` | Jump forward to the next blank-line-separated block | `mastered` | |
| `{` | Jump backward to the previous blank-line-separated block | `mastered` | |
| `H` | Jump to the top of the visible screen | `new` | |
| `M` | Jump to the middle of the visible screen | `new` | |
| `L` | Jump to the bottom of the visible screen | `new` | |
| `Ctrl+d` | Scroll half-page down (cursor moves with it) | `new` | |
| `Ctrl+u` | Scroll half-page up (cursor moves with it) | `new` | |
| `zz` | Reposition screen so the cursor line is centered | `new` | |
| `zt` | Reposition screen so the cursor line is at the top | `new` | |
| `zb` | Reposition screen so the cursor line is at the bottom | `new` | |
| `Ctrl+o` | Jump back in the jump list | `new` | |
| `Ctrl+i` | Jump forward in the jump list | `new` | |
| `''` | Jump back to the line of the last large jump | `new` | |

## Word motions

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `w` | Forward to start of next word (stops at punctuation) | `new` | |
| `b` | Backward to start of current/previous word | `new` | |
| `e` | Forward to end of current/next word | `new` | |
| `W` | Forward to start of next WORD (whitespace-delimited) | `new` | |
| `B` | Backward to start of current/previous WORD | `new` | |
| `E` | Forward to end of current/next WORD | `new` | |
| `ge` | Backward to end of previous word | `new` | |

## Search

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `/pattern` | Search forward for pattern | `new` | |
| `?pattern` | Search backward for pattern | `new` | |
| `n` | Repeat search in the same direction | `new` | |
| `N` | Repeat search in the reverse direction | `new` | |
| `*` | Search forward for the exact word under the cursor | `new` | |
| `#` | Search backward for the exact word under the cursor | `new` | |

## Bracket matching

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `%` | Jump to the matching bracket, paren, or brace | `learning` | |

## Operators and text objects

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `ciw` | Change inner word | `new` | |
| `daw` | Delete a word including surrounding space | `new` | |
| `ci"` | Change inside double quotes | `mastered` | |
| `ci(` | Change inside parentheses | `mastered` | |
| `di{` | Delete inside curly braces | `new` | |
| `di[` | Delete inside square brackets | `new` | |
| `vip` | Visually select inner paragraph | `new` | |

## Insert motions

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `A` | Jump to end of line and enter insert mode | `mastered` | |
| `I` | Jump to first non-whitespace and enter insert mode | `comfortable` | |
| `o` | Open a new line below and enter insert mode | `new` | |
| `O` | Open a new line above and enter insert mode | `new` | |

## Delete / change

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `dd` | Delete entire current line | `new` | |
| `D` | Delete from cursor to end of line | `new` | |
| `diw` | Delete inner word | `new` | |
| `r{char}` | Replace exactly one character without entering insert mode | `mastered` | |

## Yank and paste

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `yy` | Yank (copy) the current line | `new` | |
| `yiw` | Yank inner word | `new` | |
| `p` | Paste after cursor / below current line | `new` | |
| `P` | Paste before cursor / above current line | `new` | |

## Undo / redo

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `u` | Undo the last change | `new` | |
| `Ctrl+r` | Redo (undo the undo) | `new` | |

## Visual mode

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `v` | Enter character-wise visual mode | `new` | |
| `V` | Enter line-wise visual mode | `new` | |
| `Ctrl+v` | Enter block visual mode (rectangle selection) | `new` | |

## Repeat

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `.` | Repeat the last change at the current cursor position | `learning` | |

## Line manipulation

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `J` | Join current line with the line below | `new` | |
| `>>` | Indent current line one level | `new` | |
| `<<` | Dedent current line one level | `new` | |

## Case

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `~` | Toggle case of character under cursor | `new` | |
| `guiw` | Lowercase the entire word under cursor | `new` | |
| `gUiw` | Uppercase the entire word under cursor | `new` | |
| `g~iw` | Toggle case of entire word under cursor | `new` | |

## Numbers

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `Ctrl+a` | Increment number under cursor | `new` | |
| `Ctrl+x` | Decrement number under cursor | `new` | |

## Macros

| Motion | Description | Comfort | Notes |
|--------|-------------|---------|-------|
| `q{char}` | Start recording a macro into register `{char}` | `new` | |
| `@{char}` | Replay the macro in register `{char}` | `new` | |
| `@@` | Replay the last-used macro | `new` | |
