// =============================================================================
// VIM MOTIONS PRACTICE — ; (repeat last f or t)
// ;: repeat the last f{char} or t{char} motion from the current cursor position
// After setting up the motion on the first line, use ; on each subsequent line
// instead of retyping f{char}.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: ;
//
// TASK: Three return lines each use "x" where they should use "value".
//       On the first return line, use fx to jump to "x", then cw to type "value".
//       Move to the second return line, press ; to jump to "x", then cw.
//       Repeat for the third line with ; then cw.
// -----------------------------------------------------------------------------
function transform(value: number, mode: number): number {
  if (mode === 1) return x * 2;
  if (mode === 2) return x * 3;
  if (mode === 3) return x * 4;
  return value;
}


// -----------------------------------------------------------------------------
// MOTION: ;
//
// TASK: Four lines call functions with "old" where they should use "current".
//       On the first call line, use fo to jump to "old", then cw to type "current".
//       On each of the next three lines, press ; then cw.
//       (Each line has exactly one "o" before "old".)
// -----------------------------------------------------------------------------
function migrate(current: object): void {
  validate(old);
  transform(old);
  save(old);
  log(old);
}


// -----------------------------------------------------------------------------
// MOTION: ;
//
// TASK: Three property accesses use "tmp" instead of "data".
//       On the first property line, use ft to jump to "tmp", then cw to type "data".
//       Move to the second line, press ; then cw.
//       Repeat for the third line.
// -----------------------------------------------------------------------------
function extractFields(data: Record<string, unknown>): object {
  return {
    name: tmp.name,
    id: tmp.id,
    value: tmp.value,
  };
}


// -----------------------------------------------------------------------------
// MOTION: ;
//
// TASK: Each guard uses "bad" instead of the correct parameter name "valid".
//       On the first if line, use fb to jump to "bad", then cw to type "valid".
//       Move to the next if line, press ; then cw. Repeat for all three.
// -----------------------------------------------------------------------------
function checkAll(valid: boolean, b: boolean, c: boolean): boolean {
  if (!bad) return false;
  if (!bad) return false;
  if (!bad) return false;
  return true;
}


// -----------------------------------------------------------------------------
// MOTION: ;
//
// TASK: The variable "res" appears in three concatenation lines but should be "output".
//       On the first output += line, use fr to jump to "res", then cw to type "output".
//       Move to the next line, press ; then cw. Repeat for the third line.
// -----------------------------------------------------------------------------
function buildOutput(): string {
  let output = "";
  output += res.header;
  output += res.body;
  output += res.footer;
  return output;
}
