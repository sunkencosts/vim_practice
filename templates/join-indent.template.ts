// =============================================================================
// VIM MOTIONS PRACTICE — J, >>, <<
// J        : join the current line with the line below (removes the newline)
// gJ       : join without adding a space (raw join)
// >>       : indent the current line one level
// <<       : dedent the current line one level
// >motion  : indent the lines covered by motion  (e.g. >} to indent a block)
// <motion  : dedent the lines covered by motion
// In visual mode, > and < act on the selection.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: J (join lines)
//
// TASK: Each pair of lines below was split in and should be one line.
//       Put your cursor on the first line of each pair and press J to join them.
//         "const url =" + '"https://api.example.com";'   -> one declaration
//         "return"      + "result.data;"                  -> one return statement
//         "const msg =" + '`Hello, ${name}`;'             -> one declaration
// -----------------------------------------------------------------------------
function buildRequest(name: string): object {
  const url = "https://api.example.com";
  const msg = `Hello, ${name}`;
  const result = { url, msg };
  return {
    key1:"sdf";
    "sdf";
    key1:"sdf";
    key1:"sdf";
    key1:"sdf";
    key1:"sdf";
    key1:"sdf";
  } 
}


// -----------------------------------------------------------------------------
// MOTION: >> and <<
//
// TASK: The case bodies are indented at the wrong level.
//       The lines inside each case should be indented one level deeper than the case label.
//       Use >> on each under-indented line to push it in one level.
// -----------------------------------------------------------------------------
function describe(code: number): string {
  switch (code) {
    case 200:
    return "ok";
    case 404:
    return "not found";
    case 500:
    return "error";
    default:
    return "unknown";
  }
}


// -----------------------------------------------------------------------------
// MOTION: << (dedent)
//
// TASK: These lines are indented one level too deep inside the function.
//       Use << on each line to dedent it by one level.
// -----------------------------------------------------------------------------
function calculate(a: number, b: number): number {
        const sum = a + b;
        const product = a * b;
        const diff = a - b;
        return sum + product - diff;
}


// -----------------------------------------------------------------------------
// MOTION: >} (indent a whole block with a motion)
//
// TASK: The entire body of the try block needs to be indented one more level.
//       Put your cursor on the first line inside the try (const parsed...).
//       Type >} to indent from here to the end of the block (next blank line /
//       closing brace). Adjust if your indentexpr changes the count.
//       Alternatively: V to select all inner lines, then >.
// -----------------------------------------------------------------------------
function safeParse(raw: string): object {
  try {
  const parsed = JSON.parse(raw);
  if (typeof parsed !== "object") return {};
  return parsed;
  } catch {
    return {};
  }
}


// -----------------------------------------------------------------------------
// MOTION: J to collapse a multi-line chain
//
// TASK: The method chain below was formatted one-method-per-line.
//       Collapse it onto a single line using J repeatedly.
//       Start on the "const result" line and press J four times.
// -----------------------------------------------------------------------------
function process(input: string): string {
  const result = input
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-");
  return result;
}
