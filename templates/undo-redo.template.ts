// =============================================================================
// VIM MOTIONS PRACTICE — Undo and Redo
// u        : undo the last change
// Ctrl+r   : redo (undo the undo)
// U        : undo all changes on the current line (use sparingly)
//
// Each exercise asks you to make a specific change, then undo and redo it to
// build muscle memory for recovering from mistakes.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: u (undo)
//
// TASK: Practice undoing a word change.
//       1. Put your cursor on "result" in the return line.
//       2. Use ciw to change it to "output" — a deliberate wrong change.
//       3. Press Escape to finish.
//       4. Press u to undo — "result" should come back.
//       5. Repeat: make the change again, undo it again, until u feels instant.
// -----------------------------------------------------------------------------
function computeValue(a: number, b: number): number {
  const result = a * b;
  return result;
}


// -----------------------------------------------------------------------------
// MOTION: u and Ctrl+r
//
// TASK: Make a change, undo it, then redo it.
//       1. Delete the entire "const debug" line with dd.
//       2. Press u to undo — the line reappears.
//       3. Press Ctrl+r to redo — the line is deleted again.
//       4. Press u to undo one more time so the file is clean.
//       Goal: get comfortable with the undo/redo cycle.
// -----------------------------------------------------------------------------
function initServer(): object {
  const host = "localhost";
  const port = 3000;
  const debug = true;
  return { host, port, debug };
}


// -----------------------------------------------------------------------------
// MOTION: multiple u presses
//
// TASK: Make several changes in sequence, then undo them one at a time.
//       1. On the "status" line: use ciw to change "pending" to "active".
//       2. On the "retries" line: use ciw to change "3" to "10".
//       3. On the "timeout" line: use ciw to change "5000" to "1000".
//       4. Now press u three times — watch each change reverse in order.
//       5. Press Ctrl+r three times to redo all changes.
// -----------------------------------------------------------------------------
const status = "pending";
const retries = 3;
const timeout = 5000;


// -----------------------------------------------------------------------------
// MOTION: u to recover from a bad delete
//
// TASK: You will accidentally delete too much, then recover.
//       1. Put your cursor on the blank line between the two functions.
//       2. Press dj — this deletes the current line AND the line below (too much!).
//       3. Press u immediately to recover.
//       4. Practice this pattern: act fast, recognise the mistake, u to fix it.
// -----------------------------------------------------------------------------
function ping(): boolean {
  return true;
}

function pong(): boolean {
  return false;
}


// -----------------------------------------------------------------------------
// MOTION: u with Ctrl+r — navigating the undo tree
//
// TASK: Make several small changes, then selectively undo.
//       1. Change "GET" to "POST" on the first route line (use ciw or f" + ci").
//       2. Change "/users" to "/accounts" on the second line.
//       3. Change 200 to 201 on the third line.
//       4. Press u once — only the last change (200->201) is undone.
//       5. Press u again — the second change is undone.
//       6. Press Ctrl+r — the second change is redone.
//       This shows you can walk back and forth through history precisely.
// -----------------------------------------------------------------------------
const routes = [
  { method: "GET",  path: "/users",   status: 200 },
  { method: "POST", path: "/users",   status: 201 },
  { method: "GET",  path: "/users/1", status: 200 },
];
