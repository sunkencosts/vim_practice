// =============================================================================
// VIM MOTIONS PRACTICE — . (dot repeat)
// .: repeat the last change at the current cursor position
// The key insight: combine . with a navigation motion (^, j, f{char}, etc.)
// so that each repeat lands the cursor exactly where the change should apply.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: .
//
// TASK: Every property in the interface needs "readonly " prepended.
//       Put your cursor on "host". Press I, type "readonly ", then Escape.
//       Now press j then ^ to land on "port". Press . to repeat the change.
//       Continue: j^ then . for each remaining property.
//       The key insight: ^ lands you on the first character, so . always
//       inserts in exactly the right place.
// -----------------------------------------------------------------------------
interface AppConfig {
  host: string;
  port: number;
  debug: boolean;
  version: string;
  maxConnections: number;
}


// -----------------------------------------------------------------------------
// MOTION: .
//
// TASK: Each property value needs " ?? defaultConfig[key]" appended.
//       On the first line, use A to append " ?? defaultConfig.host", Escape.
//       Then: on subsequent lines use j^ to navigate, A to position at end,
//       and retype... actually: use j then $ then . to repeat the A change on
//       each line. Note that . repeats the exact text of the last change.
//       Simpler task: Each line is missing a trailing comma.
//       On the first property line, use A to append ",", Escape.
//       Then j. on each remaining line to append "," to that line.
// -----------------------------------------------------------------------------
function getConfig(): object {
  return {
    host: "localhost"
    port: 3000
    debug: false
    timeout: 30
  };
}


// -----------------------------------------------------------------------------
// MOTION: .
//
// TASK: Each "var" declaration should be "const".
//       Put your cursor on the "v" of the first "var". Use cw to type "const", Escape.
//       Move to the next "var" with n (if you searched) or j then ^.
//       Press . to repeat the cw change — it replaces the word under the cursor
//       with "const" again.
//       Repeat for all four lines.
// -----------------------------------------------------------------------------
function legacyInit(): void {
  var host = "localhost";
  var port = 3000;
  var retries = 3;
  var timeout = 5000;
  console.log(host, port, retries, timeout);
}


// -----------------------------------------------------------------------------
// MOTION: .
//
// TASK: Each argument is wrapped in a superfluous String() call that should be removed.
//       On the first log line: use f( to jump to "(", then % to jump to the matching ")",
//       x to delete it, then go back and x to delete the "(" — leaving just the variable.
//       OR: use a simpler approach — di( to get inside String(...), then type the var name.
//       Simplest for practicing .: use f( dt) approach on each, with . to repeat where possible.
//
//       Easier reformulation: wrap each bare variable in String().
//       Each variable is currently bare (name, age, active).
//       Put cursor on "name": type ciw then String(name) ... this doesn't suit .
//
//       Real task: Delete the " || null" fallback from each assignment.
//       Each line ends with " || null;". Use f| then dt; on the first line.
//       Then j^ then f| then . to repeat dt; on each subsequent line.
// -----------------------------------------------------------------------------
function normalizeUser(name: string, age: number, active: boolean): object {
  const n = name || null;
  const a = age || null;
  const f = active || null;
  return { n, a, f };
}


// -----------------------------------------------------------------------------
// MOTION: .
//
// TASK: Four lines need "// " prepended to comment them out.
//       Put cursor on the first line to comment. Use I to jump to start, type "// ", Escape.
//       Move to the next line with j. Press ^ to land on the first char, then . to repeat.
//       Repeat for the remaining two lines.
// -----------------------------------------------------------------------------
function debugDump(): void {
  console.log("host:", process.env.HOST);
  console.log("port:", process.env.PORT);
  console.log("env:", process.env.NODE_ENV);
  console.log("secret:", process.env.SECRET);
}
