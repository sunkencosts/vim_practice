// =============================================================================
// VIM MOTIONS PRACTICE — Yank and Paste
// yy       : yank (copy) the current line
// Y        : yank to end of line (same as y$)
// yw       : yank from cursor to start of next word
// yiw      : yank inner word
// y{motion}: yank whatever the motion covers
// p        : paste after cursor (or below current line for linewise yank)
// P        : paste before cursor (or above current line for linewise yank)
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: yy and p
//
// TASK: The "validateInput" call should be duplicated — it should appear both
//       before and after "processData".
//       1. Put your cursor on the validateInput line.
//       2. Press yy to yank the whole line.
//       3. Move to the processData line.
//       4. Press p to paste a copy below it.
// -----------------------------------------------------------------------------
function run(input: string): void {
  validateInput(input);
  processData(input);
  saveResult(input);
}

declare function validateInput(s: string): void;
declare function processData(s: string): void;
declare function saveResult(s: string): void;


// -----------------------------------------------------------------------------
// MOTION: yiw and p
//
// TASK: The second and third functions use the wrong variable name internally.
//       The correct name is used in "formatPrimary" — yank it and paste it.
//       1. Put your cursor on "primaryValue" in formatPrimary.
//       2. Press yiw to yank just that word.
//       3. Navigate to "wrongName" in formatSecondary, use ciw then Ctrl+r "
//          to paste the yanked word.
//       4. Repeat for "wrongName" in formatTertiary.
// -----------------------------------------------------------------------------
function formatPrimary(primaryValue: number): string {
  return `primary: ${primaryValue}`;
}

function formatSecondary(primaryValue: number): string {
  return `secondary: ${wrongName}`;
}

function formatTertiary(primaryValue: number): string {
  return `tertiary: ${wrongName}`;
}


// -----------------------------------------------------------------------------
// MOTION: yy and P (paste above)
//
// TASK: The import statement is missing from the top of this block.
//       1. Yank the import line that IS present (the "path" import).
//       2. Press P to paste a copy above it.
//       3. Use ciw to change "path" to "fs" in the new line.
// -----------------------------------------------------------------------------
import { join } from "path";


// -----------------------------------------------------------------------------
// MOTION: y with text objects (yi", yi()
//
// TASK: Three functions should all use the same base URL currently in fetchUsers.
//       1. Put your cursor inside the quotes of the URL in fetchUsers.
//       2. Use yi" to yank the text inside the quotes.
//       3. Navigate to fetchPosts, use ci" then Ctrl+r " to paste.
//       4. Repeat for fetchComments.
// -----------------------------------------------------------------------------
function fetchUsers(): void {
  fetch("https://api.example.com/v2/users");
}

function fetchPosts(): void {
  fetch("https://wrong-url.com/posts");
}

function fetchComments(): void {
  fetch("https://also-wrong.com/comments");
}

declare function fetch(url: string): void;


// -----------------------------------------------------------------------------
// MOTION: yy, dd, p — move a line
//
// TASK: The lines inside "buildPipeline" are in the wrong order.
//       They should run: validate -> sanitize -> transform -> save.
//       Use dd and p (or yy and p) to reorder them.
// -----------------------------------------------------------------------------
function buildPipeline(input: string): void {
  transform(input);
  validate(input);
  save(input);
  sanitize(input);
}

declare function transform(s: string): void;
declare function sanitize(s: string): void;
