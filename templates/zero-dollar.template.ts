// =============================================================================
// VIM MOTIONS PRACTICE — 0 and $
// 0: jump to column 0 (the very start of the line, before any whitespace)
// $: jump to the last character of the line
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: 0 and $
//
// TASK: The function signature is missing "export " at the start and ": string"
//       before the opening brace at the end.
//       Put your cursor on the function line.
//       Use 0 then i to insert "export " at the very beginning.
//       Then use $ to jump to the end. The cursor lands on "{".
//       Use i to insert ": string " before it, then Escape.
// -----------------------------------------------------------------------------
function getGreeting(name: string) {
  return `Hello, ${name}`;
}


// -----------------------------------------------------------------------------
// MOTION: 0 and $
//
// TASK: The return line is missing "return " at the very start and ";" at the end.
//       Put your cursor on the broken expression line.
//       Use 0 then i to insert "return ".
//       Then use $ then a to append ";".
// -----------------------------------------------------------------------------
function double(n: number): number {
  n * 2
}


// -----------------------------------------------------------------------------
// MOTION: 0 and $
//
// TASK: The function needs "async " prepended and " Promise<void>" inserted
//       before the opening brace.
//       Use 0 then i to prepend "async ".
//       Use $ then i to insert " Promise<void> " before the "{", then Escape.
// -----------------------------------------------------------------------------
function fetchData(url: string) {
  console.log(url);
}


// -----------------------------------------------------------------------------
// MOTION: 0 and $
//
// TASK: The interface declaration is missing "export " at the start and
//       " extends Serializable" before the "{" at the end.
//       Use 0 then i to add "export ".
//       Use $ then i to add " extends Serializable " before the brace.
// -----------------------------------------------------------------------------
interface Config {
  host: string;
  port: number;
}


// -----------------------------------------------------------------------------
// MOTION: 0 and $
//
// TASK: The const line is missing "export " at the start and " = 3000" at the end.
//       Use 0 then i to insert "export ".
//       Use $ then a to append " = 3000".
// -----------------------------------------------------------------------------
const DEFAULT_PORT;
