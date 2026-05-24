// =============================================================================
// VIM MOTIONS PRACTICE — Jump List
// Ctrl+o  : jump back to the previous position in the jump list
// Ctrl+i  : jump forward in the jump list (opposite of Ctrl+o)
// ''      : jump back to the exact position before the last "large" jump
//
// What counts as a jump (adds to the jump list):
//   gg, G, /{pattern}, ?, n, N, *, #, %, Ctrl+d, Ctrl+u, marks, etc.
// What does NOT add to the jump list: h j k l w b e (small motions)
//
// The jump list lets you retrace your navigation history across the file.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: Ctrl+o (jump back)
//
// TASK: Use * to find all usages of "config" in this file, navigate to a few,
//       then use Ctrl+o to jump back through your history.
//       1. Put your cursor on "config" in applyConfig below.
//       2. Press * to search for "config" — vim jumps to the first match.
//       3. Press n to jump to the next match. Press n again.
//       4. Now press Ctrl+o — you jump back to the previous search hit.
//       5. Press Ctrl+o again — you go back to your original position.
//       6. Press Ctrl+i to move forward again.
// -----------------------------------------------------------------------------
const config = { host: "localhost", port: 3000 };

function applyConfig(): void {
  validateConfig(config);
  mergeConfig(config);
  saveConfig(config);
}

declare function validateConfig(c: object): void;
declare function mergeConfig(c: object): void;
declare function saveConfig(c: object): void;


// -----------------------------------------------------------------------------
// MOTION: Ctrl+o after gg / G
//
// TASK: Practice jumping to the top/bottom and back with Ctrl+o.
//       1. Put your cursor on the "startServer" call inside main() below.
//       2. Press gg to jump to the top of the file.
//       3. Press Ctrl+o — you are back on the startServer line.
//       4. Press G to jump to the bottom of the file.
//       5. Press Ctrl+o — you are back on startServer again.
//       Use case: jump to the top to check an import, then Ctrl+o to return.
// -----------------------------------------------------------------------------
function main(): void {
  initDatabase();
  startServer();
  registerHandlers();
}

declare function initDatabase(): void;
declare function startServer(): void;
declare function registerHandlers(): void;


// -----------------------------------------------------------------------------
// MOTION: Ctrl+o after a search jump
//
// TASK: Use / to navigate to a distant function, make an edit, then Ctrl+o back.
//       1. You are editing the "processRequest" function (your home position).
//       2. Press /handleError and Enter to jump to the handleError function below.
//       3. Fix the bug: change "500" to "400" using f5 then r4.
//       4. Press Ctrl+o — you jump back to processRequest.
//       This is the primary use case: navigate-edit-return.
// -----------------------------------------------------------------------------
function processRequest(input: string): object {
  if (!input) return handleError("missing input");
  return { data: input };
}

function handleError(msg: string): object {
  return { error: msg, code: 500 };
}


// -----------------------------------------------------------------------------
// MOTION: '' (jump to position before last jump)
//
// TASK: '' (two apostrophes) jumps to the line of the cursor's position before
//       the last large jump — similar to Ctrl+o but only one step back.
//       1. Put your cursor on the "return" line of compute() below.
//       2. Press * to find all uses of "compute".
//       3. Navigate with n to a distant match.
//       4. Press '' — you jump back to the "return" line in compute.
//       Note: '' and Ctrl+o are similar but '' only tracks one prior position
//       and always lands on the start of that line.
// -----------------------------------------------------------------------------
function compute(a: number, b: number): number {
  const intermediate = a + b;
  return intermediate * 2;
}

function useCompute(): void {
  const x = compute(1, 2);
  const y = compute(3, 4);
  const z = compute(x, y);
  console.log(compute(z, 0));
}


// -----------------------------------------------------------------------------
// MOTION: Ctrl+i (jump forward in jump list)
//
// TASK: Ctrl+i is the complement of Ctrl+o — it moves forward after you have
//       jumped back. Think of it as undo/redo for your cursor position.
//       1. Navigate around this file with gg, G, /, n, etc. — build up history.
//       2. Press Ctrl+o several times to walk backward through your jump list.
//       3. Press Ctrl+i to walk forward again.
//       4. Note: Ctrl+i is the same key as Tab — in some terminals/configs
//          they may conflict. If Ctrl+i does not work, check your terminal settings.
// -----------------------------------------------------------------------------
function alpha(): void  { console.log("alpha");  }
function beta(): void   { console.log("beta");   }
function gamma(): void  { console.log("gamma");  }
function delta(): void  { console.log("delta");  }
function epsilon(): void { console.log("epsilon"); }
