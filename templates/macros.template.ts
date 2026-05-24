// =============================================================================
// VIM MOTIONS PRACTICE — Macros
// q{char}  : start recording a macro into register {char}
// q        : stop recording
// @{char}  : replay the macro stored in {char}
// @@       : replay the last-used macro
// {n}@{char}: replay the macro n times
//
// Macros record every keystroke — motions, operators, insert-mode text, etc.
// The key to a reusable macro: end each replay in a position ready for the next.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: basic macro record and replay
//
// TASK: Every property name below needs to be wrapped in quotes to become
//       a valid JSON-style string key. The pattern is the same on every line.
//       Record a macro to do it on one line, then replay it on the rest.
//
//       1. Put your cursor on "host" on the first line.
//       2. Press qa to start recording into register a.
//       3. Press I to jump to line start in insert mode, type a " (quote), Escape.
//       4. Use f: to jump to the colon, press i " (quote + space if needed), Escape.
//          Simpler: use ^ to go to start, then f: to find colon, i" Escape.
//          Even simpler approach: use I to prepend ", then f: i" Escape, then j^ to
//          position for the next line.
//       5. Press q to stop recording.
//       6. Press @a on each remaining line, or 3@a to replay 3 times.
//
//       Target result for each line:
//         "host": "localhost",
// -----------------------------------------------------------------------------
const jsonObject = {
  host: "localhost",
  port: 3000,
  debug: false,
  version: "1.0.0",
};


// -----------------------------------------------------------------------------
// MOTION: macro to fix repeated pattern
//
// TASK: Each console.log should be prefixed with a log level tag.
//       The pattern: console.log("...") -> console.log("[INFO]", "...")
//       1. Put your cursor on the first console.log line.
//       2. Press qb to record into register b.
//       3. Use f" to jump to the opening quote, then i[INFO], Escape.
//          (This inserts "[INFO], " before the existing first argument.)
//       4. Press j to move to the next line. Press q to stop.
//       5. Press 3@b to replay on the remaining 3 lines.
// -----------------------------------------------------------------------------
function logEvents(): void {
  console.log("server started");
  console.log("connection established");
  console.log("request received");
  console.log("response sent");
}


// -----------------------------------------------------------------------------
// MOTION: macro with a counter (applied n times)
//
// TASK: Add a trailing comma to each object entry. The last line should NOT
//       get a comma (it already has one, or it is the closing brace).
//       1. Put your cursor on the first property line ("id: 1").
//       2. Press qc to record into register c.
//       3. Press A to append, type , then Escape.
//       4. Press j to advance to the next line. Press q to stop.
//       5. Press @c then @@ twice more to fix the remaining lines.
//          Or: 2@c to replay twice from the second line.
// -----------------------------------------------------------------------------
const records = [
  { id: 1, name: "Alice" }
  { id: 2, name: "Bob" }
  { id: 3, name: "Carol" }
];


// -----------------------------------------------------------------------------
// MOTION: macro to transform a list of declarations
//
// TASK: Convert each "var" declaration to "const" and add a type annotation.
//       Pattern: var {name} = {value}  ->  const {name}: string = {value}
//       Only the string variables need ": string" — but for practice add it to all.
//       1. Record into qd: use ^ then cw to change "var" to "const", then
//          f= then i: string then Escape, then j^.
//       2. Stop recording with q.
//       3. Replay with 3@d on the remaining three lines.
// -----------------------------------------------------------------------------
function legacy(): void {
  var username = "alice";
  var email = "alice@example.com";
  var role = "admin";
  var token = "abc123";
  console.log(username, email, role, token);
}


// -----------------------------------------------------------------------------
// MOTION: @@ (replay last macro)
//
// TASK: Each function is exported but should not be — remove "export " from each.
//       1. Put cursor on "export" on the first function.
//       2. Press qe to record, use ^ then dw to delete "export ", then j^. Stop with q.
//       3. Press @@ (or @e) for each remaining line.
//       Practice: after replaying once with @e, use @@ for the rest.
// -----------------------------------------------------------------------------
export function alpha(): void {}
export function beta(): void {}
export function gamma(): void {}
export function delta(): void {}
