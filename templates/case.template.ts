// =============================================================================
// VIM MOTIONS PRACTICE — Case operations
// ~        : toggle case of character under cursor (then advance)
// g~iw     : toggle case of entire word
// guiw     : lowercase the entire word under cursor
// gUiw     : uppercase the entire word under cursor
// gu{motion}: lowercase whatever the motion covers
// gU{motion}: uppercase whatever the motion covers
// g~{motion}: toggle case of whatever the motion covers
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: ~ (toggle single character case)
//
// TASK: Each function name starts with an uppercase letter but should be
//       lowercase (camelCase starting with lowercase).
//       Put your cursor on the first character of each name and press ~ to
//       toggle it from upper to lower case.
//         ProcessData  -> processData
//         FetchUser    -> fetchUser
//         BuildConfig  -> buildConfig
// -----------------------------------------------------------------------------
function ProcessData(input: string): string {
  return input.trim();
}

function FetchUser(id: string): object {
  return { id };
}

function BuildConfig(): object {
  return {};
}


// -----------------------------------------------------------------------------
// MOTION: gUiw (uppercase word)
//
// TASK: These constants should be SCREAMING_SNAKE_CASE.
//       Put your cursor on each lowercase word segment and use gUiw.
//       Each "_" splits the name into separate vim words, so do each part separately.
//         max_connections -> MAX_CONNECTIONS
//         default_timeout -> DEFAULT_TIMEOUT
//         retry_limit     -> RETRY_LIMIT
// -----------------------------------------------------------------------------
const max_connections = 10;
const default_timeout = 5000;
const retry_limit = 3;


// -----------------------------------------------------------------------------
// MOTION: guiw (lowercase word)
//
// TASK: These enum values are accidentally all-caps but should be camelCase.
//       Use guiw to lowercase each word, then fix the casing manually if needed.
//         PENDING   -> pending
//         ACTIVE    -> active
//         CANCELLED -> cancelled
// -----------------------------------------------------------------------------
type Status = "PENDING" | "ACTIVE" | "CANCELLED";

function getDefault(): Status {
  return "PENDING";
}


// -----------------------------------------------------------------------------
// MOTION: g~iw (toggle case of whole word)
//
// TASK: Each label is the wrong case — toggle it with g~iw.
//       Note that g~iw toggles every character: "hello" -> "HELLO", "HELLO" -> "hello",
//       "hEllo" -> "HeLL0" (each char flips independently).
//       These are all-lowercase and should be all-uppercase, so g~iw works perfectly.
//         error   -> ERROR
//         warning -> WARNING
//         info    -> INFO
//         debug   -> DEBUG
// -----------------------------------------------------------------------------
const LOG_LEVELS = {
  error:   0,
  warning: 1,
  info:    2,
  debug:   3,
};


// -----------------------------------------------------------------------------
// MOTION: gU with a motion (gU$ and gu$)
//
// TASK: The right-hand side of each constant should be entirely uppercase.
//       Put your cursor on the first character of the string value (after the ").
//       Use gU$ to uppercase everything from the cursor to the end of the line.
//       Then use gu to fix the closing "; if it got mangled (it won't, but practice gu).
//         "get"    -> "GET"
//         "post"   -> "POST"
//         "delete" -> "DELETE"
//         "patch"  -> "PATCH"
// -----------------------------------------------------------------------------
const METHOD_GET    = "get";
const METHOD_POST   = "post";
const METHOD_DELETE = "delete";
const METHOD_PATCH  = "patch";
