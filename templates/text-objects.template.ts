// =============================================================================
// VIM MOTIONS PRACTICE — Text Objects
// Text objects are used with operators (c, d, y, v) to act on a region of text.
//
// "inner" (i) — the content, not the surrounding delimiters
// "a" (a)     — includes the surrounding delimiters / whitespace
//
// iw / aw   : inner word / a word (aw includes trailing space)
// i" / a"   : inside / around double quotes
// i( / a(   : inside / around parentheses  (also i) a))
// i{ / a{   : inside / around curly braces (also iB aB)
// i[ / a[   : inside / around square brackets
// ip / ap   : inner paragraph / a paragraph
// it / at   : inside / around an XML/HTML tag
//
// Combine with: c (change), d (delete), y (yank), v (select)
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: ciw (change inner word)
//
// TASK: Each variable name is a placeholder that needs to be replaced.
//       Put your cursor anywhere on the placeholder word and use ciw to delete
//       the whole word and enter insert mode. Type the correct name.
//         placeholder1 -> userId
//         placeholder2 -> sessionId
//         placeholder3 -> requestId
//       Note: ciw does not care where on the word your cursor is.
// -----------------------------------------------------------------------------
function buildRequest(placeholder1: string, placeholder2: string): object {
  const placeholder3 = `${placeholder1}-${placeholder2}`;
  return { id: placeholder3 };
}


// -----------------------------------------------------------------------------
// MOTION: daw (delete a word, including surrounding space)
//
// TASK: Remove the stale parameter "unused" from the function signature.
//       Put your cursor anywhere on the word "unused".
//       Use daw — it deletes the word AND the space before or after it,
//       leaving "role: string" cleanly without a double space.
//       Then fix the matching argument in the return if needed.
// -----------------------------------------------------------------------------
function getLabel(name: string, unused: string, role: string): string {
  return `${name} (${role})`;
}


// -----------------------------------------------------------------------------
// MOTION: di( and di{ (delete inside delimiters)
//
// TASK: Clear out the bodies / argument lists below, then retype the correct content.
//       For each, put your cursor inside the delimiters and use the text object.
//         di( on the Math.pow call  -> wipe args, type "base, exponent"
//         di{ on the return object  -> wipe body, type "name, value"
// -----------------------------------------------------------------------------
function raise(base: number, exponent: number): number {
  return Math.pow(wrongArg1, wrongArg2);
}

function pair(name: string, value: unknown): object {
  return { key: "wrong", data: "wrong" };
}


// -----------------------------------------------------------------------------
// MOTION: yi" and yiw then p (yank and paste)
//
// TASK: The second function call should reuse the same string as the first.
//       1. Put your cursor inside the quotes of "production" on the first line.
//       2. Use yi" to yank the text inside the quotes (without the quotes).
//       3. Move to the empty quotes "" on the second line.
//       4. Use ci" to enter insert mode inside the quotes, then Ctrl+r " to
//          paste from the default register — or just type "production".
//       Real use: yi" is invaluable when the string is long or complex.
// -----------------------------------------------------------------------------
function configureEnv(): void {
  setEnvironment("production");
  validateEnvironment("");
}

declare function setEnvironment(env: string): void;
declare function validateEnvironment(env: string): void;


// -----------------------------------------------------------------------------
// MOTION: vip (visually select inner paragraph) then operator
//
// TASK: The two paragraphs (function bodies) below need to be swapped.
//       1. Put your cursor anywhere in the first function body.
//       2. Use vip to visually select the inner paragraph.
//       3. Press d to delete it (it goes into the default register).
//       4. Navigate to below the second function body.
//       5. Press P to paste above.
//       This is a useful pattern for reordering blocks of code.
//
//       Simpler warm-up: use vip to select each function body and press =
//       to auto-indent it.
// -----------------------------------------------------------------------------
function first(): void {
  console.log("a");
  console.log("b");
  console.log("c");
}

function second(): void {
  console.log("x");
  console.log("y");
  console.log("z");
}
