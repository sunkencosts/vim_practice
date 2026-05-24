// =============================================================================
// VIM MOTIONS PRACTICE — Visual Mode
// v        : character-wise visual mode (select char by char)
// V        : line-wise visual mode (select whole lines)
// Ctrl+v   : block visual mode (select a rectangle)
// Once in visual mode, all normal motions extend the selection.
// Then apply an operator: d (delete), y (yank), c (change), > < (indent),
//   = (auto-indent), ~ (toggle case), : (for :normal commands)
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: V (line-wise visual) + d
//
// TASK: Delete the three debug lines using visual line mode.
//       1. Put your cursor on the first console.log debug line.
//       2. Press V to enter line-wise visual mode.
//       3. Press j twice to extend the selection to all three debug lines.
//       4. Press d to delete them all at once.
// -----------------------------------------------------------------------------
function processData(input: string): string {
  console.log("debug: input =", input);
  console.log("debug: length =", input.length);
  console.log("debug: type =", typeof input);
  const result = input.trim().toLowerCase();
  return result;
}


// -----------------------------------------------------------------------------
// MOTION: Ctrl+v (block visual) — add text to multiple lines at once
//
// TASK: Each property is missing "readonly " at the start.
//       1. Put your cursor on the "h" of "host".
//       2. Press Ctrl+v to enter block visual mode.
//       3. Press 3j to extend the block down 3 lines (covering all 4 properties).
//       4. Press I (capital I) to insert at the start of each selected line.
//       5. Type "readonly " then Escape — it applies to all selected lines.
// -----------------------------------------------------------------------------
interface Config {
  host: string;
  port: number;
  debug: boolean;
  version: string;
}


// -----------------------------------------------------------------------------
// MOTION: Ctrl+v + d — delete a column
//
// TASK: Remove the extra leading spaces that form a ragged left edge.
//       The four value lines each have 2 extra spaces before the variable name.
//       1. Put your cursor on the first extra space of the first line.
//       2. Press Ctrl+v to enter block mode.
//       3. Press 3j to select down 3 lines.
//       4. Press l to extend the selection 1 character wide (2 columns total, use ll).
//       5. Press d to delete the selected block.
// -----------------------------------------------------------------------------
function getMetrics(): object {
  const  count = 42;
  const  total = 1000;
  const  ratio = count / total;
  const  label = "metrics";
  return { count, total, ratio, label };
}


// -----------------------------------------------------------------------------
// MOTION: v (character-wise) + c — change a selection
//
// TASK: Replace the inner part of the string using visual selection.
//       1. Put your cursor on the "w" of "wrong-endpoint".
//       2. Press v to enter character-wise visual mode.
//       3. Use e or w to extend the selection to the end of "wrong-endpoint".
//       4. Press c to change the selection and type "api/v2/users".
// -----------------------------------------------------------------------------
function getApiUrl(): string {
  return "https://example.com/wrong-endpoint";
}


// -----------------------------------------------------------------------------
// MOTION: V + > (indent) and V + < (dedent)
//
// TASK: The function body is indented with 4 spaces but should use 2.
//       1. Put your cursor on the first indented line inside the function.
//       2. Press V to enter line-wise visual mode.
//       3. Press j twice to select all three inner lines.
//       4. Press < to dedent once. If each indent level is 2 spaces this fixes it;
//          if it is 4 spaces per level, press < again or use 2< in normal mode.
// -----------------------------------------------------------------------------
function normalize(input: string): string {
    const trimmed = input.trim();
    const lowered = trimmed.toLowerCase();
    return lowered;
}
