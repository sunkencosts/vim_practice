// =============================================================================
// VIM MOTIONS PRACTICE — o and O
// o: open a new line BELOW the current line and enter insert mode
// O: open a new line ABOVE the current line and enter insert mode
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: o and O
//
// TASK: The function body is missing two lines.
//       Stand on the "const items" line and press o to open a line below. Type:
//         items.push("apple");
//       Then stand on the "return items" line and press O to open a line above. Type:
//         items.push("banana");
//       Result: items gets "apple" then "banana" pushed before the return.
// -----------------------------------------------------------------------------
function getFruits(): string[] {
  const items: string[] = [];
  return items;
}


// -----------------------------------------------------------------------------
// MOTION: o and O
//
// TASK: Two guard clauses are missing from this function.
//       Stand on the opening "{" line of the function and press o to open a line
//       below. Type:
//         if (!userId) throw new Error("userId required");
//       Then stand on the "const record" line and press O to open a line above. Type:
//         if (!db) throw new Error("db not initialized");
// -----------------------------------------------------------------------------
function getUser(userId: string, db: object): object {
  const record = (db as any)[userId];
  return record;
}


// -----------------------------------------------------------------------------
// MOTION: o and O
//
// TASK: A logging call is missing before the return and a setup line is missing
//       at the top of the function body.
//       Stand on "const result" and press O to insert above:
//         console.log("computing...");
//       Stand on the "return result" line and press O to insert above:
//         console.log("done:", result);
// -----------------------------------------------------------------------------
function compute(a: number, b: number): number {
  const result = a * b + a;
  return result;
}


// -----------------------------------------------------------------------------
// MOTION: o and O
//
// TASK: Two properties are missing from the returned object.
//       Stand on the "host:" line and press O to add above:
//         version: "1.0.0",
//       Stand on the closing "}" brace line and press O to add above:
//         debug: false,
// -----------------------------------------------------------------------------
function getServerConfig(): object {
  return {
    host: "localhost",
    port: 8080,
  };
}


// -----------------------------------------------------------------------------
// MOTION: o and O
//
// TASK: The switch statement is missing two case blocks entirely.
//       Stand on the "case 1:" line and press O to add a case above it:
//         case 0:
//           return "zero";
//       Stand on the "default:" line and press O to add a case above it:
//         case 2:
//           return "two";
// -----------------------------------------------------------------------------
function numberToWord(n: number): string {
  switch (n) {
    case 1:
      return "one";
    default:
      return "other";
  }
}
