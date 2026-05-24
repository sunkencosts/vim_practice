// =============================================================================
// VIM MOTIONS PRACTICE — gg and G
// gg: jump to the first line of the file
// G:  jump to the last line of the file
// These are your fastest way to orient yourself at either end of a file.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: gg and G
//
// TASK: An import is missing from the top of the file and an export is missing
//       from the bottom. Do both edits in one pass:
//       1. Use gg to jump to line 1. Press O to open a line above and type:
//            import { EventEmitter } from "events";
//       2. Use G to jump to the last line. Press o to open a line below and type:
//            export { emitEvent };
// -----------------------------------------------------------------------------
function emitEvent(name: string, payload: unknown): void {
  const emitter = new EventEmitter();
  emitter.emit(name, payload);
}


// -----------------------------------------------------------------------------
// MOTION: gg and G
//
// TASK: There is a stray debug line near the top of the file — find and delete it.
//       Use gg to jump to line 1, then scan down with j until you find:
//         console.log("debug — remove me");
//       Press dd to delete it.
//       Then use G to jump back to the bottom to confirm you are done.
// -----------------------------------------------------------------------------
console.log("debug — remove me");
function getVersion(): string {
  return "1.0.0";
}


// -----------------------------------------------------------------------------
// MOTION: gg and G
//
// TASK: The top-level constant has the wrong value; the function at the bottom
//       of the file depends on it being true.
//       Use gg to jump to the top, navigate to the FEATURE_ENABLED line,
//       use f= then cw to change "false" to "true".
//       Then use G to jump to the last function and confirm it uses the constant.
// -----------------------------------------------------------------------------
const FEATURE_ENABLED = false;

function runFeature(): void {
  if (FEATURE_ENABLED) {
    console.log("feature active");
  }
}


// -----------------------------------------------------------------------------
// MOTION: gg and G
//
// TASK: Add a "use strict" directive at the very top of the file and a
//       module export at the very bottom.
//       1. Use gg to jump to line 1. Press O to open above and type:
//            "use strict";
//       2. Use G to jump to the last line. Press o to open below and type:
//            export { formatDate };
// -----------------------------------------------------------------------------
function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}


// -----------------------------------------------------------------------------
// MOTION: gg and G
//
// TASK: This file has a module-level config object at the very top (after the header)
//       and a function that uses it at the very bottom.
//       The config has the wrong port value.
//       Use gg to jump to the top, find the config object, use f3 to jump to "3000",
//       then cw to change it to "8080".
//       Then use G to jump to the last line and verify the function references config.
// -----------------------------------------------------------------------------
const config = { host: "localhost", port: 3000 };

function startServer(): void {
  console.log(`Starting on ${config.host}:${config.port}`);
}
