// =============================================================================
// VIM MOTIONS PRACTICE — r{char}
// r{char}: replace exactly one character under the cursor without entering insert mode
// Faster than cw for single-character fixes.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: r{char}
//
// TASK: Each parameter name has exactly one wrong character. Use r to fix each.
//       Do not use cw — navigate to the wrong character and press r then the
//       correct letter.
//         naxe  -> name   (x should be m)
//         emqil -> email  (q should be a)
//         phane -> phone  (a should be o)
// -----------------------------------------------------------------------------
function createContact(naxe: string, emqil: string, phane: string): object {
  return { naxe, emqil, phane };
}


// -----------------------------------------------------------------------------
// MOTION: r{char}
//
// TASK: Each operator has exactly one wrong character. Use r to fix it.
//         a =+ b  ->  a += b   (= should be +... wait: navigate to = before +, r+)
//         a =- b  ->  a -= b   (navigate to = before -, r-)
//         a =* b  ->  a *= b   (navigate to = before *, r*)
//       Hint: put cursor on the "=" at the start of "=+" and use r to replace it
//       with the correct operator character, giving "+=" etc.
// -----------------------------------------------------------------------------
function updateCounters(a: number, b: number): void {
  let x = a;
  x =+ b;
  x =- b;
  x =* b;
  console.log(x);
}


// -----------------------------------------------------------------------------
// MOTION: r{char}
//
// TASK: Three boolean values have the wrong letter capitalization. Use r to fix
//       the first character of each.
//         False  -> false   (F should be f)
//         True   -> true    (T should be t)
//         False  -> false   (F should be f)
// -----------------------------------------------------------------------------
function getFlags(): object {
  return {
    enabled: False,
    debug:   True,
    verbose: False,
  };
}


// -----------------------------------------------------------------------------
// MOTION: r{char}
//
// TASK: Each comparison operator has one wrong character. Use r to fix it.
//         n =< 0   ->  n <= 0   (= and < are swapped; navigate to = then r<,
//                                then navigate to < then r=  — or just fix the
//                                first char to get <=)
//         n => 100  ->  n >= 100  (same issue: fix = to get >=)
//       Simpler framing: the "=" and the other char are in the wrong order.
//       On the first line put cursor on "=" (first char of "=<"), press r<.
//       Then move to "<" (now second char) and press r=.
//       Repeat for "=>" -> ">=".
// -----------------------------------------------------------------------------
function isInRange(n: number): boolean {
  return n =< 0 || n => 100;
}


// -----------------------------------------------------------------------------
// MOTION: r{char}
//
// TASK: The string delimiters are wrong — they use ' instead of `.
//       Each template literal should start and end with a backtick.
//       Navigate to each ' that should be ` and use r` to replace it.
//         'Hello, ${name}!'  ->  `Hello, ${name}!`
//         'Port: ${port}'    ->  `Port: ${port}`
// -----------------------------------------------------------------------------
function buildMessages(name: string, port: number): string[] {
  return [
    'Hello, ${name}!',
    'Port: ${port}',
  ];
}
