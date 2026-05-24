// =============================================================================
// VIM MOTIONS PRACTICE — Delete motions (d)
// dd  : delete entire current line
// D   : delete from cursor to end of line
// dw  : delete from cursor to start of next word
// diw : delete inner word (whole word, cursor can be anywhere on it)
// daw : delete a word including surrounding space
// d$  : delete to end of line (same as D)
// d0  : delete from cursor to start of line
// d{  : delete back to the previous blank line
// d}  : delete forward to the next blank line
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: dd
//
// TASK: Four debug lines need to be removed entirely.
//       Navigate to each console.log line and press dd to delete it.
// -----------------------------------------------------------------------------
function processOrder(id: string): object {
  console.log("debug: entering processOrder");
  const order = { id, status: "pending" };
  console.log("debug: order created", order);
  order.status = "processing";
  console.log("debug: status updated");
  return order;
}


// -----------------------------------------------------------------------------
// MOTION: D
//
// TASK: Each line has trailing junk after the real code.
//       Put your cursor on the first unwanted character of the junk and press D
//       to delete to the end of the line.
//       The junk starts after the semicolon on each line.
// -----------------------------------------------------------------------------
function getValues(): object {
  const host = "localhost";   // REMOVE: old comment from migration
  const port = 3000;          // REMOVE: was 8080, changed 2023-01-15
  const debug = false;        // REMOVE: set true for local only
  return { host, port, debug };
}


// -----------------------------------------------------------------------------
// MOTION: diw
//
// TASK: Replace each wrong keyword. Put your cursor anywhere on the word and
//       use diw to delete it, then type the replacement in insert mode.
//       (Or use ciw which combines both steps.)
//         var   -> const   (three occurrences)
// -----------------------------------------------------------------------------
function initConfig(): void {
  var host = "localhost";
  var port = 3000;
  var retries = 3;
  console.log(host, port, retries);
}


// -----------------------------------------------------------------------------
// MOTION: daw
//
// TASK: Remove the unused middle parameter without leaving a double space.
//       Put your cursor on "legacy" and use daw.
//       Then clean up the resulting signature if a comma remains.
// -----------------------------------------------------------------------------
function createUser(name: string, legacy: boolean, role: string): object {
  return { name, role };
}


// -----------------------------------------------------------------------------
// MOTION: d} and d{
//
// TASK: Delete the entire second function block using d}.
//       1. Put your cursor on the blank line just before "function logError".
//       2. Press d} to delete from here to the next blank line — removing the
//          entire logError function.
//       Then: put your cursor anywhere in the "logWarning" function.
//       Press d{ to delete back to the previous blank line.
// -----------------------------------------------------------------------------
function logInfo(message: string): void {
  console.log("[INFO]", message);
}

function logError(message: string): void {
  console.error("[ERROR]", message);
}

function logWarning(message: string): void {
  console.warn("[WARN]", message);
}
