// Bug for gg/G exercise (Exercise 10) — MAX_RETRIES should be 3
const MAX_RETRIES = 3;

// =============================================================================
// VIM MOTIONS PRACTICE — MIXED SESSION 2
// Motions: f{char} · ; · A · ci" · ci( · % · }/{ · . · r{char} · gg/G
// Run /review when done to update progress.md
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: f{char}
//
// TASK: The config object has three properties set to null. They need real values.
//       Navigate to each line and use fn to jump to "null", then cw to replace it:
//         timeout: null  ->  timeout: 5000
//         retries: null  ->  retries: 3
//         host: null     ->  host: "localhost"
// -----------------------------------------------------------------------------
const appConfig = {
  timeout: 5000,
  retries: 3,
  host: "localhost",
};


// -----------------------------------------------------------------------------
// MOTION: ;
//
// TASK: Each console.error call passes "err" but should pass "msg".
//       On the first console.error line, use fe to jump to "err", then cw to type "msg".
//       Move to the second line; press ; to repeat the fe jump, then cw.
//       Repeat for the third line with ; then cw.
// -----------------------------------------------------------------------------
function logWarnings(msg: string): void {
  console.error("msg", "network issue");
  console.error("msg", "timeout");
  console.error("msg", "retry limit");
}


// -----------------------------------------------------------------------------
// MOTION: A
//
// TASK: Each interface property is missing its type annotation.
//       Navigate to each line and press A to jump to the end and enter insert mode.
//       Type the missing annotation + semicolon:
//         id       ->  append ": number;"
//         username ->  append ": string;"
//         active   ->  append ": boolean;"
//         score    ->  append ": number;"
// -----------------------------------------------------------------------------
interface PlayerProfile {
  id:number;
  username: string;
  active: boolean;
  score: number;
}


// -----------------------------------------------------------------------------
// MOTION: ci"
//
// TASK: The event names in this listener registration are wrong.
//       Put your cursor anywhere on each line and use ci" to clear inside the quotes
//       and type the correct event name.
//         "click"   ->  "submit"
//         "keyup"   ->  "keydown"
//         "hover"   ->  "mouseenter"
//         "unload"  ->  "beforeunload"
// -----------------------------------------------------------------------------
function registerListeners(el: Element): void {
  el.addEventListener("submit", handleSubmit);
  el.addEventListener("keydown", handleKey);
  el.addEventListener("mouseenter", handleEnter);
  el.addEventListener("unload", handleUnload);
}


// -----------------------------------------------------------------------------
// MOTION: ci(
//
// TASK: Each function call has the wrong argument(s). Move your cursor inside
//       each set of parentheses and use ci( to clear inside and retype the correct value.
//         parseInt("123", 8)   ->  parseInt("123", 10)
//         Math.min(a, b)       ->  Math.max(a, b)
//         setTimeout(cb, 100)  ->  setTimeout(cb, 1000)
// -----------------------------------------------------------------------------
function setup(a: number, b: number, cb: () => void): void {
  const parsed = parseInt("123", 10 );
  const larger = Math.min(a,b);
  setTimeout(cb,1000);
  console.log(parsed, larger);
}


// -----------------------------------------------------------------------------
// MOTION: %
//
// TASK: There is an extra "}" in this function body.
//       Put your cursor on the "{" at the end of the function signature line.
//       Press % — it jumps to what vim considers the matching "}".
//       If it lands on the stray "}" at the bottom instead of the real closing brace,
//       that is the extra one. Press dd to delete that line.
// -----------------------------------------------------------------------------
function fetchUser(id: number): object {
  if (id <= 0) {
    return {};
  }
  return { id, name: "unknown" };
}


// -----------------------------------------------------------------------------
// MOTION: } and {
//
// TASK: Three functions are defined below. Use } to jump forward through them.
//       Fix two bugs — navigate to each with } (and { to go back if you overshoot):
//         double: returns n + 2 instead of n * 2  (use f+ then r*)
//         square: returns n + n instead of n * n  (use f+ then r*)
//       cube is correct — leave it alone.
// -----------------------------------------------------------------------------
function double(n: number): number {
  return n * 2;
}

function square(n: number): number {
  return n * n;
}

function cube(n: number): number {
  return n * n * n;
}


// -----------------------------------------------------------------------------
// MOTION: .
//
// TASK: Each declaration uses "let" but should use "const".
//       Put your cursor on the "l" of the first "let". Use cw to type "const", Escape.
//       Move to the next "let" with j then ^.
//       Press . to repeat the cw change. Do this for all four lines.
// -----------------------------------------------------------------------------
function computeStats(data: number[]): object {
  const total = data.reduce((sum, n) => sum + n, 0);
  const mean = total / data.length;
  const min = Math.min(...data);
  const max = Math.max(...data);
  return { total, mean, min, max };
}


// -----------------------------------------------------------------------------
// MOTION: r{char}
//
// TASK: Four values are off by exactly one character. Navigate to the wrong character
//       (use f or w), then press r + the correct character to fix it in-place.
//         port: 3001    ->  port: 3000    (f1 on the trailing 1, then r0)
//         version: "v2" ->  version: "v1" (f2 inside the string, then r1)
//         timeout: 5001 ->  timeout: 5000 (f1 on the trailing 1, then r0)
//         retries: 4    ->  retries: 3    (f4, then r3)
// -----------------------------------------------------------------------------
const serverConfig = {
  port: 3000,
  version: "v1",
  timeout: 5001,
  retries: 4,
};


// -----------------------------------------------------------------------------
// MOTION: gg and G
//
// TASK: This file has a bug at the very top and at the very bottom.
//       1. Press gg to jump to line 1.
//          MAX_RETRIES is set to 0 — it should be 3.
//          Use f0 to jump to "0" and press r3 to replace it.
//       2. Press G to jump to the last line of the file.
//          The function getResponse() returns status 400 for a success case.
//          It should return 200. Use f4 then r2 to fix it.
// -----------------------------------------------------------------------------


// Bug for G exercise (Exercise 10) — status 400 should be 200
function getResponse(ok: boolean): object {
  if (ok) return { status: 200, body: "success" };
  return { status: 500, body: "error" };
}
