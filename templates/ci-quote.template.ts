// =============================================================================
// VIM MOTIONS PRACTICE — ci"
// ci": delete everything inside the nearest double quotes and enter insert mode
// Your cursor can be anywhere on the line — vim finds the surrounding quotes.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: ci"
//
// TASK: Three status strings are placeholder values. Your cursor can be anywhere
//       on each return line. Use ci" to clear inside the quotes and enter insert mode.
//       Type the replacement, then Escape.
//         "s1" -> "pending"
//         "s2" -> "active"
//         "s3" -> "cancelled"
// -----------------------------------------------------------------------------
function getStatusLabel(code: number): string {
  if (code === 0) return "s1";
  if (code === 1) return "s2";
  if (code === 2) return "s3";
  return "unknown";
}


// -----------------------------------------------------------------------------
// MOTION: ci"
//
// TASK: Each log message uses a generic placeholder. Use ci" on each line to
//       replace it with a descriptive message.
//         "msg1" -> "user logged in"
//         "msg2" -> "session started"
//         "msg3" -> "request received"
// -----------------------------------------------------------------------------
function handleRequest(userId: string): void {
  console.log("msg1", userId);
  console.log("msg2");
  console.log("msg3");
}


// -----------------------------------------------------------------------------
// MOTION: ci"
//
// TASK: The HTTP methods are all wrong. Use ci" on each line to fix them.
//         "FETCH"  -> "GET"
//         "SUBMIT" -> "POST"
//         "CHANGE" -> "PUT"
//         "REMOVE" -> "DELETE"
// -----------------------------------------------------------------------------
const routes = [
  { path: "/users",    method: "FETCH"  },
  { path: "/users",    method: "SUBMIT" },
  { path: "/users/1",  method: "CHANGE" },
  { path: "/users/1",  method: "REMOVE" },
];


// -----------------------------------------------------------------------------
// MOTION: ci"
//
// TASK: The environment variables use the wrong key names. Fix each one with ci".
//         "DB_URL"   -> "DATABASE_URL"
//         "APP_PORT" -> "PORT"
//         "APP_ENV"  -> "NODE_ENV"
// -----------------------------------------------------------------------------
function getEnv(): object {
  return {
    database: process.env["DB_URL"],
    port:     process.env["APP_PORT"],
    env:      process.env["APP_ENV"],
  };
}


// -----------------------------------------------------------------------------
// MOTION: ci"
//
// TASK: Each error message is a filler string. Replace them with real messages.
//         "e1" -> "invalid input"
//         "e2" -> "not found"
//         "e3" -> "permission denied"
//         "e4" -> "internal error"
// -----------------------------------------------------------------------------
function throwError(code: number): never {
  if (code === 400) throw new Error("e1");
  if (code === 404) throw new Error("e2");
  if (code === 403) throw new Error("e3");
  throw new Error("e4");
}
