// =============================================================================
// VIM MOTIONS PRACTICE
// Each function has a comment describing the motion to practice and the task.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: f{char}  — jump to the next occurrence of a character on the line
//
// TASK: The return statement uses the wrong variable name.
//       Your cursor is at the start of the return line.
//       Use fs to jump to "sum" (lands on the s), then cw to change it to "total".
//       There is exactly one "s" on that line before "sum" -- so fs lands right on it.
// -----------------------------------------------------------------------------
function addNumbers(a: number, b: number): number {
  const total = a + b;
  return sum;
}


// -----------------------------------------------------------------------------
// MOTION: t{char}  — jump forward until (one before) a character
//
// TASK: The first argument to console.log is a leftover debug label that needs
//       to be removed, including its trailing comma and space.
//       Put your cursor on the "[" at the start of "[DEBUG]".
//       Use dt, to delete from the cursor up-to (not including) the comma.
//       Then use x twice to delete the ", " that remains before "message".
//       Result: console.log(message);
// -----------------------------------------------------------------------------
function printMessage(message: string): void {
  console.log("[DEBUG]", message);
}


// -----------------------------------------------------------------------------
// MOTION: ;  — repeat the last f or t motion
//
// TASK: Each return line below uses a single-letter variable that needs to be
//       changed to a full name. The pattern is the same on all three lines.
//       On the first return line, use fa to jump to "a", then cw to change it to "amount".
//       Move to the second return line, press ; to jump to the next "a", then cw.
//       Repeat for the third line with ; then cw.
// -----------------------------------------------------------------------------
function formatCurrency(amount: number, symbol: string, decimals: number): string {
  if (decimals === 0) return a.toFixed(0) + symbol;
  if (decimals === 1) return a.toFixed(1) + symbol;
  if (decimals === 2) return a.toFixed(2) + symbol;
  return amount.toString();
}


// -----------------------------------------------------------------------------
// MOTION: 0 and $  — jump to the hard start / end of a line
//
// TASK: The function signature is missing "export " at the beginning and is
//       missing the return type ": number" before the opening brace at the end.
//       Use 0 to jump to column 0 of the signature line, then i to insert "export ".
//       Then use $ to jump to the end of the line. The cursor lands on "{".
//       Use i to insert before it, type ": number ", then Escape.
// -----------------------------------------------------------------------------
function calculateTotal(price: number, qty: number) {
  return price * qty;
}


// -----------------------------------------------------------------------------
// MOTION: ^  — jump to the first non-whitespace character of the line
//
// TASK: The two inner lines are indented with 6 spaces instead of 2.
//       On each over-indented line, use 0 to go to column 0, then press x
//       four times to remove 4 excess spaces.
//       After fixing both lines, use ^ on each to confirm the cursor lands on
//       the first real character -- that is what ^ always gives you.
// -----------------------------------------------------------------------------
function getUserLabel(name: string, role: string): string {
      const label = `${name} (${role})`;
      return label;
}


// -----------------------------------------------------------------------------
// MOTION: } and {  — jump forward/backward by blank-line-delimited block
//
// TASK: There are four functions below separated by blank lines.
//       Starting here, use } to jump forward through each block and { to jump back.
//       Then: "transformData" has a bug -- it multiplies by 3 instead of 2.
//       Navigate to it with } or {, then use f3 to jump to the "3", then r2 to fix it.
// -----------------------------------------------------------------------------
function parseId(raw: string): number {
  return parseInt(raw, 10);
}

function transformData(values: number[]): number[] {
  return values.map(n => n * 3);
}

function isEmpty(value: string): boolean {
  return value.length === 0;
}

function clamp(n: number, min: number, max: number): number {
  return Math.min(Math.max(n, min), max);
}


// -----------------------------------------------------------------------------
// MOTION: gg and G  — jump to the top and bottom of the file
//
// TASK: This function uses EventEmitter but the import is missing from the top.
//       Use gg to jump to line 1, then O to open a new line above and type:
//         import { EventEmitter } from "events";
//       Then use G to jump to the very last line of the file and o to open a
//       line below and type:
//         export { emitEvent };
// -----------------------------------------------------------------------------
function emitEvent(name: string, payload: unknown): void {
  const emitter = new EventEmitter();
  emitter.emit(name, payload);
}


// -----------------------------------------------------------------------------
// MOTION: %  — jump to the matching bracket, paren, or brace
//
// TASK: There is an extra closing brace in this function that does not match
//       anything. It is not obvious at a glance where the mismatch is.
//       Put your cursor on the very first "{" on the function signature line.
//       Press % -- vim jumps to what it considers the match.
//       If it lands on the stray "}" at the bottom, that is the extra one: dd to delete it.
//       Confirm by pressing % on the opening "{" again -- it should now jump correctly.
// -----------------------------------------------------------------------------
function parseConfig(raw: string): object {
  try {
    const result = JSON.parse(raw);
    if (typeof result !== "object") {
      return {};
    }
    return result;
  } catch (e) {
    return {};
  }
}
}


// -----------------------------------------------------------------------------
// MOTION: ci"  — change inside double quotes
//
// TASK: Three status strings are placeholder values. Your cursor can be anywhere
//       on each return line. Use ci" to clear inside the quotes and drop into
//       insert mode. Type the replacement, then Escape.
//       "s1" -> "pending"
//       "s2" -> "active"
//       "s3" -> "cancelled"
// -----------------------------------------------------------------------------
function getStatusLabel(code: number): string {
  if (code === 0) return "s1";
  if (code === 1) return "s2";
  if (code === 2) return "s3";
  return "unknown";
}


// -----------------------------------------------------------------------------
// MOTION: ci(  — change inside parentheses
//
// TASK: Both function calls below have the wrong arguments entirely.
//       Put your cursor anywhere between the parens and use ci( to wipe
//       everything inside and enter insert mode. Type the correct args.
//       Math.max(1, 2, 3, 4, 5)     ->  Math.max(a, b)
//       console.log("x", "y", "z")  ->  console.log("result:", value)
// -----------------------------------------------------------------------------
function computeResult(a: number, b: number): number {
  const value = Math.max(1, 2, 3, 4, 5);
  console.log("x", "y", "z");
  return value;
}


// -----------------------------------------------------------------------------
// MOTION: A  — append at the end of the line
//
// TASK: Four lines in this function are missing their semicolons.
//       Navigate to each incomplete line and press A to jump to the end
//       and enter insert mode. Type ; then Escape. Move to the next.
// -----------------------------------------------------------------------------
function buildUrl(host: string, path: string, port: number): string {
  const base = `${host}:${port}`
  const full = `${base}/${path}`
  const encoded = encodeURI(full)
  return encoded
}


// -----------------------------------------------------------------------------
// MOTION: I  — insert at the first non-whitespace character of the line
//
// TASK: Three variable declarations are missing "const ".
//       Put your cursor anywhere on each offending line and press I to jump
//       to the first real character and enter insert mode. Type "const " then Escape.
// -----------------------------------------------------------------------------
function createSession(userId: string, role: string): object {
  token = crypto.randomUUID();
  expiresAt = Date.now() + 3600 * 1000;
  label = `${role}:${userId}`;
  return { token, expiresAt, label };
}


// -----------------------------------------------------------------------------
// MOTION: o and O  — open a new line below / above and enter insert mode
//
// TASK: The function body is missing two lines.
//       Stand on the "const items" line and press o to open a line below. Type:
//         items.push("apple");
//       Then stand on the "return items" line and press O to open a line above. Type:
//         items.push("banana");
// -----------------------------------------------------------------------------
function getFruits(): string[] {
  const items: string[] = [];
  return items;
}


// -----------------------------------------------------------------------------
// MOTION: r{char}  — replace exactly one character without entering insert mode
//
// TASK: Each parameter has a single wrong character. Use r to fix each one.
//       Do not use cw. Navigate to the wrong character and press r then the correct letter.
//       naxe  -> name   (x should be m)
//       emqil -> email  (q should be a)
//       phane -> phone  (a should be o)
// -----------------------------------------------------------------------------
function createContact(naxe: string, emqil: string, phane: string): object {
  return { naxe, emqil, phane };
}


// -----------------------------------------------------------------------------
// MOTION: gUiw  — uppercase the whole word under the cursor
//
// TASK: The three constants below should be SCREAMING_SNAKE_CASE.
//       The underscore splits each name into separate words as far as vim is concerned.
//       For "max_retries": put cursor on "max", use gUiw to get MAX,
//       then move cursor to "retries" and use gUiw again to get RETRIES.
//       Repeat for base_url and timeout_ms.
// -----------------------------------------------------------------------------
const max_retries = 3;
const base_url = "https://api.example.com";
const timeout_ms = 5000;


// -----------------------------------------------------------------------------
// MOTION: .  — repeat the last change
//
// TASK: Every property in the interface needs "readonly " prepended.
//       Put your cursor on "host". Press I, type "readonly ", then Escape.
//       Now press j then ^ to land on "port". Press . to repeat the change.
//       Continue: j^ then . for each remaining property.
//       The key insight: ^ lands you on the first character, so . always inserts
//       in the right place.
// -----------------------------------------------------------------------------
interface AppConfig {
  host: string;
  port: number;
  debug: boolean;
  version: string;
  maxConnections: number;
}