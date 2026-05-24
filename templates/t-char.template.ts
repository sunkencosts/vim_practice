// =============================================================================
// VIM MOTIONS PRACTICE — t{char}
// t{char}: jump forward to just BEFORE the next occurrence of {char}
// Use ; to repeat, , to reverse
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: t{char}
//
// TASK: Remove the "[DEBUG]" prefix from the log call including its trailing ", ".
//       Put your cursor on the "[" at the start of "[DEBUG]".
//       Use dt, to delete from the cursor up to (not including) the comma.
//       Then xx to remove the remaining ", ".
//       Result: console.log(message);
// -----------------------------------------------------------------------------
function log(message: string): void {
  console.log("[DEBUG]", message);
}


// -----------------------------------------------------------------------------
// MOTION: t{char}
//
// TASK: Remove the "TODO: " annotation from the comment, leaving just the note.
//       Put your cursor on the "T" of "TODO".
//       Use dt  (t followed by a space) to delete up to but not including the space
//       after the colon, then x to remove that last space.
//       Result: // clean this up before release
// -----------------------------------------------------------------------------
function riskyOperation(): void {
  // TODO: clean this up before release
  throw new Error("not implemented");
}


// -----------------------------------------------------------------------------
// MOTION: t{char}
//
// TASK: Remove the hardcoded leading argument "0, " from the Math.max call.
//       Put your cursor on the "0".
//       Use dt, to delete up to (not including) the comma, then 2x to remove ", ".
//       Result: return Math.max(a, b);
// -----------------------------------------------------------------------------
function clampMin(a: number, b: number): number {
  return Math.max(0, a, b);
}


// -----------------------------------------------------------------------------
// MOTION: t{char}
//
// TASK: Remove the " as any" type cast at the end of the return expression.
//       Put your cursor on the space before "as".
//       Use dt; to delete up to (not including) the semicolon.
//       Result: return value;
// -----------------------------------------------------------------------------
function unsafeCast(value: unknown): unknown {
  return value as any;
}


// -----------------------------------------------------------------------------
// MOTION: t{char}
//
// TASK: Remove the stale key-value pair "debug: true, " from the object literal.
//       Put your cursor on the "d" of "debug".
//       Use dt, to delete up to (not including) the comma, then 2x to remove ", ".
//       Result: return { host, port };
// -----------------------------------------------------------------------------
function getConfig(host: string, port: number): object {
  return { debug: true, host, port };
}
