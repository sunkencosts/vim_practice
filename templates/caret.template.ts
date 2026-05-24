// =============================================================================
// VIM MOTIONS PRACTICE — ^
// ^: jump to the first non-whitespace character of the current line
// Contrast with 0 which jumps to column 0 regardless of indentation.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: ^
//
// TASK: The two inner lines are indented with 6 spaces instead of 2.
//       On each over-indented line, use 0 to reach column 0, then xxxx to
//       delete 4 excess spaces. Then use ^ to confirm the cursor lands on
//       the first real character — that is what ^ always gives you.
// -----------------------------------------------------------------------------
function greetUser(name: string): string {
      const greeting = `Hello, ${name}`;
      return greeting;
}


// -----------------------------------------------------------------------------
// MOTION: ^
//
// TASK: The three inner lines have 8 spaces of indent instead of 4.
//       Use 0 then xxxx on each line to remove the 4 excess spaces.
//       After each fix, press ^ to confirm the cursor lands on the keyword.
// -----------------------------------------------------------------------------
function processItems(items: number[]): number[] {
  return items.map(n => {
          const doubled = n * 2;
          const label = String(doubled);
          return label;
  });
}


// -----------------------------------------------------------------------------
// MOTION: ^
//
// TASK: Use ^ to navigate. For each line containing "let", press ^ to land
//       directly on the keyword, then cw to change "let" to "const".
//       The ^ motion reliably puts you on the first character — no need to count spaces.
// -----------------------------------------------------------------------------
function initValues(): void {
  let count = 0;
  let name = "";
  let active = false;
}


// -----------------------------------------------------------------------------
// MOTION: ^
//
// TASK: Each of the three property lines is indented with a tab instead of
//       two spaces. Put your cursor on each property line, use 0 then x to
//       delete the tab character, then i and two spaces to replace it.
//       After fixing, use ^ to confirm alignment.
// -----------------------------------------------------------------------------
function buildConfig(): object {
	const host = "localhost";
	const port = 3000;
	const debug = false;
  return { host, port, debug };
}


// -----------------------------------------------------------------------------
// MOTION: ^
//
// TASK: Three lines have been accidentally commented out (leading "// ").
//       For each line, put your cursor anywhere on it, use ^ to jump to the
//       first character (the "/"), then 3x to delete "// " and uncomment it.
// -----------------------------------------------------------------------------
function calculate(a: number, b: number): number {
  // const multiplier = 2;
  // const scaled = a * multiplier;
  // return scaled + b;
  return 0;
}
