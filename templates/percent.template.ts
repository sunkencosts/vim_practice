// =============================================================================
// VIM MOTIONS PRACTICE — %
// %: jump to the matching bracket, paren, or brace ({ } [ ] ( ))
// Works from either the opening or closing character.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: %
//
// TASK: There is an extra closing brace in this function that has no match.
//       Put your cursor on the opening "{" on the function signature line.
//       Press % — vim jumps to what it considers the matching closing brace.
//       If it lands on the stray "}" at the bottom of the function, that is the
//       extra one — press dd to delete it.
//       Press % again to confirm the braces now match correctly.
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
// MOTION: %
//
// TASK: The condition has a missing closing parenthesis — it has (( but only one ).
//       Put your cursor on the first "(" of the condition.
//       Press % to jump to what vim considers its match and inspect where it lands.
//       Add the missing ")" in the right place to balance the expression.
//       Correct condition: if ((a > 0 && b > 0))  — or simplify to: if (a > 0 && b > 0)
// -----------------------------------------------------------------------------
function bothPositive(a: number, b: number): boolean {
  if ((a > 0 && b > 0) {
    return true;
  }
  return false;
}


// -----------------------------------------------------------------------------
// MOTION: %
//
// TASK: Use % to navigate. Put your cursor on the "[" of the array literal.
//       Press % to jump to the matching "]".
//       The closing bracket is on the wrong line — it should be after the last element.
//       Use % to jump back and forth to understand the structure, then fix it:
//       move the stray "]" to immediately follow "cherry" on the same line.
// -----------------------------------------------------------------------------
function getFruits(): string[] {
  return [
    "apple",
    "banana",
    "cherry"
  ]
  ;
}


// -----------------------------------------------------------------------------
// MOTION: %
//
// TASK: There is an extra closing bracket "]" in the destructuring that breaks it.
//       Put your cursor on the opening "[" of the destructure.
//       Press % — if it does not land on the correct closing "]", there is an extra one.
//       Find and dd or x the extra "]".
// -----------------------------------------------------------------------------
function getFirst(items: number[]): number {
  const [first]] = items;
  return first;
}


// -----------------------------------------------------------------------------
// MOTION: %
//
// TASK: The try block has an extra closing brace that makes the catch unreachable.
//       Put your cursor on the "{" after "try".
//       Press % to jump to its match and see where it lands.
//       Delete the stray "}" (the one that appears before the catch).
// -----------------------------------------------------------------------------
function safeParse(s: string): number {
  try {
    return parseInt(s, 10);
  }
  }
  catch (e) {
    return 0;
  }
}
