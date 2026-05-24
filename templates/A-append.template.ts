// =============================================================================
// VIM MOTIONS PRACTICE — A
// A: jump to the end of the current line and enter insert mode
// Equivalent to $a but faster — one keystroke instead of two.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: A
//
// TASK: Four lines in this function are missing their semicolons.
//       Navigate to each incomplete line and press A to jump to the end and
//       enter insert mode. Type ; then Escape. Move to the next.
// -----------------------------------------------------------------------------
function buildUrl(host: string, path: string, port: number): string {
  const base = `${host}:${port}`
  const full = `${base}/${path}`
  const encoded = encodeURI(full)
  return encoded
}


// -----------------------------------------------------------------------------
// MOTION: A
//
// TASK: Each property in the object literal is missing a trailing comma.
//       Use A on each line (except the last) to append ",".
// -----------------------------------------------------------------------------
function getDefaults(): object {
  return {
    host: "localhost"
    port: 3000
    debug: false
    timeout: 5000
  };
}


// -----------------------------------------------------------------------------
// MOTION: A
//
// TASK: Each import line is missing its closing " from "module-name";" suffix.
//       Use A on each import line to append the missing part.
//         first line:  append  ` from "fs";`
//         second line: append  ` from "path";`
//         third line:  append  ` from "os";`
// -----------------------------------------------------------------------------
import { readFileSync }
import { join }
import { homedir }


// -----------------------------------------------------------------------------
// MOTION: A
//
// TASK: Three variable declarations are missing their type annotations.
//       Use A on each line to append the annotation before the semicolon.
//       The lines end with "=" plus a value — you will need to use A then
//       backspace to remove the semicolon, add the type, and re-add the semicolon.
//       Alternatively, use f; then i to insert before the semicolon.
//       Practice A by using it on each line and typing the annotation.
//         const name = "Alice"   ->  const name: string = "Alice";
//         const age = 30         ->  const age: number = 30;
//         const active = true    ->  const active: boolean = true;
// -----------------------------------------------------------------------------
function annotate(): void {
  const name = "Alice"
  const age = 30
  const active = true
  console.log(name, age, active);
}


// -----------------------------------------------------------------------------
// MOTION: A
//
// TASK: Each case in the switch is missing a "break;" at the end.
//       Navigate to the last line of each case block and use A to append " break;"
//       or use o to open a new line — but practice A here.
//       Add "  break;" as a new line using o, OR append " break;" directly with A.
//       (Use whichever feels natural; the goal is to practice A.)
// -----------------------------------------------------------------------------
function describeCode(code: number): string {
  let result = "";
  switch (code) {
    case 200:
      result = "ok"
    case 404:
      result = "not found"
    case 500:
      result = "error"
  }
  return result;
}
