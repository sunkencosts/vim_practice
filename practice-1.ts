// =============================================================================
// VIM MOTIONS PRACTICE
// Each function has a comment describing the motion to practice and the task.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: f{char}  — jump forward to the next occurrence of a character on the line
// TASK: The string argument is misnamed. Cursor is somewhere on the line below.
//       Use f" to jump to the first quote, then cw to rename "usrName" to "username"
// -----------------------------------------------------------------------------
function greetUser(usrName: string): string {
  return `Hello, ${usrName}!`;
}


// -----------------------------------------------------------------------------
// MOTION: t{char}  — jump forward *until* (one before) the next character
// TASK: You need to delete the word "verbose" and the space after it.
//       Use t, to position just before the comma, then use dF  (capital F, backward)
//       Actually: put cursor at start of "verbose", use dt, to delete up-to the comma
// -----------------------------------------------------------------------------
function logEvent(verbose, level: string, message: string): void {
  console.log(`[${level}] ${message}`);
}


// -----------------------------------------------------------------------------
// MOTION: ; and ,  — repeat the last f/t/F/T motion forward and backward
// TASK: Three params below are named with abbreviations. Fix all three.
//       Use fw to jump to "wrk", cw to fix it, then ; to jump to the next "w" occurrence
//       Fix: wrk -> workspace, usr -> user, cfg -> config
// -----------------------------------------------------------------------------
function initialize(wrk: string, usr: string, cfg: object): boolean {
  console.log(`Initializing ${wrk} for ${usr}`);
  return true;
}


// -----------------------------------------------------------------------------
// MOTION: 0 and $  — jump to the start / end of the line
// TASK: This function is missing the "export" keyword at the very start,
//       and is missing a return type ": number" at the end of the signature line.
//       Use 0 to get to the beginning and add "export ", then $ to jump to the end
//       of the signature and add ": number" before the opening brace.
// -----------------------------------------------------------------------------
function calculateTotal(price: number, tax: number) {
  return price + price * tax;
}


// -----------------------------------------------------------------------------
// MOTION: ^ — jump to the first non-whitespace character of the line
// TASK: The console.log inside is indented with an extra 4 spaces (8 total).
//       Go to that line, use ^ to land on the "c", then use 0 and count
//       to understand the difference. Fix the indent by using 0 then 4x to delete 4 chars.
// -----------------------------------------------------------------------------
function fetchConfig(env: string): object {
        console.log("fetching config for", env);
  return { env };
}


// -----------------------------------------------------------------------------
// MOTION: } and {  — jump forward/backward by paragraph (empty-line-delimited block)
// TASK: These three functions are all bunched up wrong. Practice jumping between them
//       with } and {. Then notice that "processItem" has a duplicate body line —
//       go to the second `result.push(item)` line and use dd to delete it.
// -----------------------------------------------------------------------------
function processItem(items: string[]): string[] {
  const result: string[] = [];
  for (const item of items) {
    result.push(item);
    result.push(item);
  }
  return result;
}

function transformData(data: number[]): number[] {
  return data.map(n => n * 2);
}

function validateInput(input: string): boolean {
  return input.length > 0;
}


// -----------------------------------------------------------------------------
// MOTION: gg and G  — jump to the top / bottom of the file
// TASK: There is a missing import at the very top of the file (line 1 area) and a
//       missing export at the very bottom. Use gg to go to the top and add:
//         import { EventEmitter } from "events";
//       Then use G to jump to the bottom and add a new final line:
//         export default { greetUser, calculateTotal };
// -----------------------------------------------------------------------------
function emitEvent(name: string, payload: unknown): void {
  const emitter = new EventEmitter();
  emitter.emit(name, payload);
}


// -----------------------------------------------------------------------------
// MOTION: % — jump to the matching bracket/paren/brace
// TASK: The function below has mismatched braces — an extra closing brace got added.
//       Put your cursor on the opening { of the function body, press % to jump
//       to what vim thinks is its match, and determine where the extra } is. Delete it with dd.
// -----------------------------------------------------------------------------
function parseResponse(raw: string): object {
  try {
    const parsed = JSON.parse(raw);
    return parsed;
  } catch (e) {
    return {};
  }
}
}


// -----------------------------------------------------------------------------
// MOTION: ci" — change inside quotes  (ci', ci`, ci( etc.)
// TASK: The error messages below are placeholder strings. Change each one.
//       Put cursor anywhere on the line, use ci" to delete the quoted text and enter insert mode.
//       Change them to more descriptive messages.
//       "err1" -> "Invalid user ID provided"
//       "err2" -> "Configuration file not found"
//       "err3" -> "Network request timed out"
// -----------------------------------------------------------------------------
function handleError(code: number): string {
  if (code === 400) return "err1";
  if (code === 404) return "err2";
  if (code === 408) return "err3";
  return "Unknown error";
}


// -----------------------------------------------------------------------------
// MOTION: di( / da(  — delete inside / around parentheses
// TASK: The function call arguments below need to be completely replaced.
//       Use di( to delete everything inside the parens and retype the correct args.
//       Fix each call:
//         setTimeout("wrong", "args", "here")  ->  setTimeout(callback, 1000)
//         console.log("a", "b", "c", "d")       ->  console.log("done")
// -----------------------------------------------------------------------------
function runWithDelay(callback: () => void): void {
  setTimeout("wrong", "args", "here");
  console.log("a", "b", "c", "d");
}


// -----------------------------------------------------------------------------
// MOTION: A and I  — append at end of line / insert at first non-whitespace
// TASK: Several lines in this function are incomplete.
//       Use A to append the missing semicolons and values at line ends.
//       Use I to insert "const " at the start of the un-declared variables.
//       Fix:
//         host = "localhost"          (missing "const " at start)
//         port = 5432                 (missing "const " at start)
//         connectionString = ...      (missing "const " at start)
//         return connectionString     (missing semicolon at end)
// -----------------------------------------------------------------------------
function buildConnectionString(db: string): string {
  host = "localhost";
  port = 5432;
  connectionString = `postgres://${host}:${port}/${db}`;
  return connectionString
}


// -----------------------------------------------------------------------------
// MOTION: o and O  — open new line below / above and enter insert mode
// TASK: The function below is missing two lines of logic.
//       Use o on the "const users" line to add a new line below it:
//         users.push({ id: 1, name: "admin" });
//       Use O on the "return users" line to insert a line above it:
//         users.push({ id: 2, name: "guest" });
// -----------------------------------------------------------------------------
function seedUsers(): object[] {
  const users: object[] = [];
  return users;
}


// -----------------------------------------------------------------------------
// MOTION: r{char}  — replace a single character without entering insert mode
// TASK: Several variable names below have a single wrong character (typos).
//       Use r to fix each one without using cw.
//       naxe  -> name
//       emqil -> email
//       phane -> phone
// -----------------------------------------------------------------------------
function createContact(naxe: string, emqil: string, phane: string): object {
  return { naxe, emqil, phane };
}


// -----------------------------------------------------------------------------
// MOTION: ~ — toggle case of character under cursor  (or use g~ with a motion)
// TASK: The constant names below should be SCREAMING_SNAKE_CASE but are lowercase.
//       Use ~ to toggle each letter one at a time, or use gU with a motion (gUw)
//       to uppercase a whole word.
//       max_retries -> MAX_RETRIES
//       base_url    -> BASE_URL
//       timeout_ms  -> TIMEOUT_MS
// -----------------------------------------------------------------------------
const max_retries = 3;
const base_url = "https://api.example.com";
const timeout_ms = 5000;


// -----------------------------------------------------------------------------
// MOTION: . — repeat the last change
// TASK: Every property in the object below needs to be prefixed with "readonly ".
//       Add "readonly " to the first property manually, then use j0 to jump to
//       the next property start and press . to repeat. Do this for all 5 properties.
// -----------------------------------------------------------------------------
interface AppConfig {
  host: string;
  port: number;
  debug: boolean;
  version: string;
  maxConnections: number;
}