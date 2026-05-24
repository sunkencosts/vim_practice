// =============================================================================
// VIM MOTIONS PRACTICE — f{char}
// f{char}: jump forward to the next occurrence of {char} on the current line
// Use ; to repeat the jump, , to reverse it
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: f{char}
//
// TASK: The return statement uses the wrong variable name.
//       Put your cursor at the start of the return line.
//       Use fb to jump to "bad", then cw to replace it with "result".
// -----------------------------------------------------------------------------
function computeSquare(x: number): number {
  const result = x * x;
  return bad;
}


// -----------------------------------------------------------------------------
// MOTION: f{char}
//
// TASK: The wrong array method is called.
//       Put your cursor at the start of the arr.pop line.
//       Use fp to jump to "pop", then cw to change it to "push".
// -----------------------------------------------------------------------------
function addItem(arr: number[], item: number): void {
  arr.pop(item);
}


// -----------------------------------------------------------------------------
// MOTION: f{char}
//
// TASK: The template literal uses the wrong variable.
//       Put your cursor at the start of the return line.
//       Use fn to jump to "num" inside the template, then cw to change it to "name".
// -----------------------------------------------------------------------------
function greet(name: string): string {
  return `Hello, ${num}!`;
}


// -----------------------------------------------------------------------------
// MOTION: f{char}
//
// TASK: The comparison is inverted — it should be === not !==.
//       Put your cursor at the start of the return line.
//       Use f! to jump to the "!" at the start of "!==", then r= to replace it.
//       Result: return status === "ok";
// -----------------------------------------------------------------------------
function isOk(status: string): boolean {
  return status !== "ok";
}


// -----------------------------------------------------------------------------
// MOTION: f{char}
//
// TASK: The arithmetic uses the wrong variable.
//       Put your cursor at the start of the const total line.
//       Use fq to jump to "qty", then cw to change it to "count".
// -----------------------------------------------------------------------------
function getTotal(count: number, price: number): number {
  const total = qty * price;
  return total;
}
