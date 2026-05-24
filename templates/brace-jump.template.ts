// =============================================================================
// VIM MOTIONS PRACTICE — } and {
// }: jump forward to the next blank-line-separated block
// {: jump backward to the previous blank-line-separated block
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: } and {
//
// TASK: Use } to jump forward through the four functions below one at a time.
//       Then use { to navigate back to the top. Count how many presses each takes.
//       Finally, fix the bug: "multiply" uses + instead of *.
//       Navigate to it with } or {, use f+ to jump to the "+", then r* to replace it.
// -----------------------------------------------------------------------------
function add(a: number, b: number): number {
  return a + b;
}

function multiply(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function divide(a: number, b: number): number {
  return a / b;
}


// -----------------------------------------------------------------------------
// MOTION: } and {
//
// TASK: Use } to navigate to "validateEmail" and fix the bug:
//       it calls .test on the wrong variable — change "input" to "email".
//       Navigate with }, then use fi to jump to "input", then cw to fix it.
// -----------------------------------------------------------------------------
function formatName(first: string, last: string): string {
  return `${last}, ${first}`;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

function hashString(s: string): number {
  return s.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
}


// -----------------------------------------------------------------------------
// MOTION: } and {
//
// TASK: Three of the five functions have wrong return type annotations.
//       Use } and { to navigate between them and fix each with f: then cw or ci{.
//         isEven    — should return boolean (currently number)
//         toString  — should return string  (currently void)
//         getCount  — should return number  (currently string)
// -----------------------------------------------------------------------------
function double(n: number): number {
  return n * 2;
}

function isEven(n: number): number {
  return n % 2 === 0;
}

function toString(n: number): void {
  return String(n);
}

function negate(n: number): number {
  return -n;
}

function getCount(items: unknown[]): string {
  return items.length;
}


// -----------------------------------------------------------------------------
// MOTION: } and {
//
// TASK: Use } to reach "processOrder". Fix the bug: "items.length()" calls
//       length as a function but it is a property.
//       Use f( to jump to the "(", then d%) or 2x to delete "()".
//       Result: return (order as any).items.length;
// -----------------------------------------------------------------------------
function createOrder(id: string): object {
  return { id, items: [] };
}

function addToOrder(order: object, item: string): void {
  (order as any).items.push(item);
}

function processOrder(order: object): number {
  return (order as any).items.length();
}


// -----------------------------------------------------------------------------
// MOTION: } and {
//
// TASK: Navigate with } and { to find and fix two bugs:
//       1. "parseNum" calls parseInt without a radix — put cursor inside the parens
//          and use A to append ", 10" before the closing paren.
//          Easier: use f) then i to insert ", 10" before the ")".
//       2. "clamp" uses Math.min for the lower bound — it should be Math.max.
//          Navigate to it, use fi to jump to the second "in" (inner Math.min), then cw.
// -----------------------------------------------------------------------------
function identity<T>(x: T): T {
  return x;
}

function parseNum(s: string): number {
  return parseInt(s);
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.min(n, max), min);
}

function noop(): void {}
