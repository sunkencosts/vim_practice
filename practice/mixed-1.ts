// =============================================================================
// VIM MOTIONS PRACTICE — Mixed Session 1
// Motions covered: f{char}, t{char}, r{char}, A, I, ci", ci(, ^, 0/$, .
// =============================================================================

// -----------------------------------------------------------------------------
// MOTION: r{char}
//
// TASK: Each parameter has one wrong character. Navigate to it and press r
//       then the correct letter. Do not use cw.
//         naxe  -> name   (x -> m)
//         emqil -> email  (q -> a)
//         phane -> phone  (a -> o)
// -----------------------------------------------------------------------------
function createContact(name: string, email: string, phone: string): object {
  return { name, email, phone };
}

// -----------------------------------------------------------------------------
// MOTION: f{char}
//
// TASK: The return statement uses the wrong variable.
//       Put your cursor at the start of the return line.
//       Use fb to jump to "bad", then cw to replace it with "result".
// -----------------------------------------------------------------------------
function computeSquare(x: number): number {
  const result = x * x;
  return result;
}

// -----------------------------------------------------------------------------
// MOTION: A
//
// TASK: Four lines are missing their semicolons.
//       Navigate to each and press A to jump to the end and enter insert mode.
//       Type ; then Escape.
// -----------------------------------------------------------------------------
function buildUrl(host: string, path: string, port: number): string {
  const base = `${host}:${port}`;
  const full = `${base}/${path}`;
  const encoded = encodeURI(full);
  return encoded;
}

// -----------------------------------------------------------------------------
// MOTION: ci"
//
// TASK: Three status strings are placeholders. Your cursor can be anywhere on
//       the line. Use ci" to replace the contents of the quotes.
//         "s1" -> "pending"
//         "s2" -> "active"
//         "s3" -> "cancelled"
// -----------------------------------------------------------------------------
function getStatusLabel(code: number): string {
  if (code === 0) return "pending";
  if (code === 1) return "";
  if (code === 2) return "s3";
  return "unknown";
}

// -----------------------------------------------------------------------------
// MOTION: t{char}
//
// TASK: Remove the "[DEBUG]" prefix from the log call including its trailing ", ".
//       Put your cursor on the "[".
//       Use dt, to delete up to (not including) the comma, then xx to remove ", ".
//       Result: console.log(message);
// -----------------------------------------------------------------------------
function log(message: string): void {
  console.log("[DEBUG]", message);
}

// -----------------------------------------------------------------------------
// MOTION: ^
//
// TASK: The two inner lines are indented with 6 spaces instead of 2.
//       On each over-indented line, use 0 then xxxx to remove 4 excess spaces.
//       Then press ^ to confirm the cursor lands on the first real character.
// -----------------------------------------------------------------------------
function greetUser(name: string): string {
  const greeting = `Hello, ${name}`;
  return greeting;
}

// -----------------------------------------------------------------------------
// MOTION: I
//
// TASK: Three variable declarations are missing "const ".
//       Put your cursor anywhere on each line and press I to jump to the first
//       real character and enter insert mode. Type "const " then Escape.
// -----------------------------------------------------------------------------
function createSession(userId: string, role: string): object {
  const token = crypto.randomUUID();
  const expiresAt = Date.now() + 3600 * 1000;
  const label = `${role}:${userId}`;
  return { token, expiresAt, label };
}

// -----------------------------------------------------------------------------
// MOTION: ci(
//
// TASK: Both function calls have completely wrong arguments.
//       Put your cursor anywhere inside each set of parens and use ci( to wipe
//       the contents and enter insert mode. Type the correct args, then Escape.
//         Math.max(1, 2, 3, 4, 5)    ->  Math.max(a, b)
//         console.log("x", "y", "z") ->  console.log("result:", value)
// -----------------------------------------------------------------------------
function computeResult(a: number, b: number): number {
  const value = Math.max(a, b);
  console.log("result", value);
  return value;
}

// -----------------------------------------------------------------------------
// MOTION: 0 and $
//
// TASK: The function signature is missing "export " at the start and ": number"
//       before the opening brace at the end.
//       Use 0 then i to insert "export " at the very beginning.
//       Use $ then i to insert ": number " before the "{", then Escape.
// -----------------------------------------------------------------------------
export function calculateTotal(price: number, qty: number): number {
  return price * qty;
}

// -----------------------------------------------------------------------------
// MOTION: . (dot repeat)
//
// TASK: Every property needs "readonly " prepended.
//       Put your cursor on "host". Press I, type "readonly ", then Escape.
//       Press j then ^ to land on "port". Press . to repeat.
//       Continue with j^ then . for each remaining property.
// -----------------------------------------------------------------------------
interface ServerConfig {
  readonly host: string;
  readonly port: number;
  readonly debug: boolean;
  readonly timeout: number;
}
