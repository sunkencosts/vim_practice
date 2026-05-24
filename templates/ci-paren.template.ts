// =============================================================================
// VIM MOTIONS PRACTICE — ci(
// ci(: delete everything inside the nearest parentheses and enter insert mode
// Also works as ci) — both target the innermost enclosing parens.
// Your cursor can be anywhere between the parens.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: ci(
//
// TASK: Both function calls have completely wrong arguments.
//       Put your cursor anywhere inside each set of parens and use ci( to wipe
//       the contents and enter insert mode. Type the correct args, then Escape.
//         Math.max(1, 2, 3, 4, 5)   ->  Math.max(a, b)
//         console.log("x", "y", "z") ->  console.log("result:", value)
// -----------------------------------------------------------------------------
function computeResult(a: number, b: number): number {
  const value = Math.max(1, 2, 3, 4, 5);
  console.log("x", "y", "z");
  return value;
}


// -----------------------------------------------------------------------------
// MOTION: ci(
//
// TASK: The function is called with the wrong arguments on both lines.
//       Use ci( to replace each argument list.
//         setTimeout(wrongCallback, 9999) -> setTimeout(handler, 1000)
//         setInterval(wrongCallback, 9999) -> setInterval(poll, 5000)
// -----------------------------------------------------------------------------
function startTimers(handler: () => void, poll: () => void): void {
  setTimeout(wrongCallback, 9999);
  setInterval(wrongCallback, 9999);
}


// -----------------------------------------------------------------------------
// MOTION: ci(
//
// TASK: Each parseInt call has the wrong string argument. Fix each with ci(.
//         parseInt("wrong1", 10) -> parseInt(rawAge, 10)
//         parseInt("wrong2", 10) -> parseInt(rawYear, 10)
//         parseInt("wrong3", 10) -> parseInt(rawCount, 10)
// -----------------------------------------------------------------------------
function parseFields(rawAge: string, rawYear: string, rawCount: string): object {
  return {
    age:   parseInt("wrong1", 10),
    year:  parseInt("wrong2", 10),
    count: parseInt("wrong3", 10),
  };
}


// -----------------------------------------------------------------------------
// MOTION: ci(
//
// TASK: The array methods are called with the wrong callbacks.
//       Use ci( to fix each call.
//         .filter(x => false)   ->  .filter(n => n > 0)
//         .map(x => 0)          ->  .map(n => n * 2)
// -----------------------------------------------------------------------------
function processNumbers(nums: number[]): number[] {
  return nums
    .filter(x => false)
    .map(x => 0);
}


// -----------------------------------------------------------------------------
// MOTION: ci(
//
// TASK: Three Object utility calls have placeholder arguments.
//       Use ci( to replace each.
//         Object.keys(placeholder)    ->  Object.keys(config)
//         Object.values(placeholder)  ->  Object.values(config)
//         Object.entries(placeholder) ->  Object.entries(config)
// -----------------------------------------------------------------------------
function inspectConfig(config: Record<string, unknown>): void {
  console.log(Object.keys(placeholder));
  console.log(Object.values(placeholder));
  console.log(Object.entries(placeholder));
}
