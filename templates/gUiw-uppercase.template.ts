// =============================================================================
// VIM MOTIONS PRACTICE — gUiw
// gUiw: uppercase the entire word under the cursor (iw = "inner word")
// Note: underscore is NOT included in a vim "word" so each segment of
// snake_case must be uppercased separately.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: gUiw
//
// TASK: These three constants should be SCREAMING_SNAKE_CASE.
//       For "max_retries": put cursor on "max", use gUiw to get MAX,
//       then move cursor to "retries" and use gUiw again to get RETRIES.
//       Repeat for base_url and timeout_ms.
// -----------------------------------------------------------------------------
const max_retries = 3;
const base_url = "https://api.example.com";
const timeout_ms = 5000;


// -----------------------------------------------------------------------------
// MOTION: gUiw
//
// TASK: The enum values should be uppercase. Each value is a single word.
//       Put your cursor on each lowercase value and use gUiw to uppercase it.
//         pending   -> PENDING
//         active    -> ACTIVE
//         cancelled -> CANCELLED
//         completed -> COMPLETED
// -----------------------------------------------------------------------------
enum Status {
  pending   = "pending",
  active    = "active",
  cancelled = "cancelled",
  completed = "completed",
}


// -----------------------------------------------------------------------------
// MOTION: gUiw
//
// TASK: These HTTP method constants should be fully uppercase.
//       Each is a single word — use gUiw once per constant name.
//         get    -> GET
//         post   -> POST
//         put    -> PUT
//         delete -> DELETE
// -----------------------------------------------------------------------------
const get    = "get";
const post   = "post";
const put    = "put";
const del    = "delete";


// -----------------------------------------------------------------------------
// MOTION: gUiw
//
// TASK: The event name constants use snake_case and should all be uppercase.
//       Each segment separated by "_" is a separate vim word.
//         user_created    -> USER_CREATED
//         order_placed    -> ORDER_PLACED
//         payment_failed  -> PAYMENT_FAILED
// -----------------------------------------------------------------------------
const user_created   = "user.created";
const order_placed   = "order.placed";
const payment_failed = "payment.failed";


// -----------------------------------------------------------------------------
// MOTION: gUiw
//
// TASK: These config key names are used as object keys and must be uppercase
//       to match the expected interface. Use gUiw on each key name.
//         host     -> HOST
//         port     -> PORT
//         database -> DATABASE
//         password -> PASSWORD
// -----------------------------------------------------------------------------
const connectionConfig = {
  host:     "localhost",
  port:     5432,
  database: "myapp",
  password: "secret",
};
