// =============================================================================
// VIM MOTIONS PRACTICE — Ctrl+a and Ctrl+x
// Ctrl+a : increment the number under (or nearest after) the cursor by 1
// Ctrl+x : decrement the number under (or nearest after) the cursor by 1
// {n}Ctrl+a : increment by n  (e.g. 10 Ctrl+a adds 10)
// {n}Ctrl+x : decrement by n
// Works on decimal, hex (0x...), octal (0...), and binary (0b...) literals.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: Ctrl+a (increment)
//
// TASK: Each port number is one less than it should be. Use Ctrl+a to fix each.
//       Put your cursor anywhere on the number and press Ctrl+a.
//         3999 -> 4000
//         8079 -> 8080
//         4433 -> 4434  (wait — check the actual target: should be 443... use Ctrl+x)
//       Actually: 3999 -> 4000, 8079 -> 8080, 4433 -> 4434 — all need +1.
// -----------------------------------------------------------------------------
const PORT_DEV  = 3999;
const PORT_HTTP = 8079;
const PORT_TLS  = 4433;


// -----------------------------------------------------------------------------
// MOTION: Ctrl+x (decrement)
//
// TASK: These timeout values are each 1 more than the correct value.
//       Put your cursor on the number and press Ctrl+x.
//         5001  -> 5000
//         30001 -> 30000
//         101   -> 100
// -----------------------------------------------------------------------------
const CONNECT_TIMEOUT = 5001;
const REQUEST_TIMEOUT = 30001;
const RETRY_DELAY     = 101;


// -----------------------------------------------------------------------------
// MOTION: {n}Ctrl+a (increment by n)
//
// TASK: Each version number needs to be bumped by a specific amount.
//       Put your cursor on the number, type the count, then press Ctrl+a.
//         MAJOR: 1 -> 2     (type 1 Ctrl+a, or just Ctrl+a)
//         MINOR: 0 -> 5     (type 5 Ctrl+a)
//         PATCH: 3 -> 23    (type 20 Ctrl+a)
// -----------------------------------------------------------------------------
const VERSION_MAJOR = 1;
const VERSION_MINOR = 0;
const VERSION_PATCH = 3;


// -----------------------------------------------------------------------------
// MOTION: Ctrl+a on a list of sequential values
//
// TASK: These IDs should be sequential starting from 1, but they all say 0.
//       Fix the first one (set it to 1 with Ctrl+a).
//       Then for each subsequent line, position on the number and use Ctrl+a
//       once per line, incrementing by 1 each time... actually that gives you
//       1, 1, 1, 1 since each line starts from 0.
//       Better: use {n}Ctrl+a: 1 Ctrl+a on line 1, 2 Ctrl+a on line 2, etc.
//       Or: manually set the first to 1, yank and paste... but practice Ctrl+a here.
//       Set each to its correct value using {n}Ctrl+a:
//         0 -> 1 (1 Ctrl+a)
//         0 -> 2 (2 Ctrl+a)
//         0 -> 3 (3 Ctrl+a)
//         0 -> 4 (4 Ctrl+a)
// -----------------------------------------------------------------------------
const ROLE_GUEST  = 0;
const ROLE_USER   = 0;
const ROLE_ADMIN  = 0;
const ROLE_OWNER  = 0;


// -----------------------------------------------------------------------------
// MOTION: Ctrl+a on hex values
//
// TASK: Vim can increment hex literals. Each color channel is 1 less than needed.
//       Put your cursor on the hex number and press Ctrl+a to increment it.
//       Vim preserves the 0x prefix and hex format.
//         0x00 -> 0x01
//         0xfe -> 0xff
//         0x09 -> 0x0a
// -----------------------------------------------------------------------------
const CHANNEL_ALPHA = 0x00;
const CHANNEL_RED   = 0xfe;
const CHANNEL_HEX   = 0x09;
