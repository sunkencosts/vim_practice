// =============================================================================
// VIM MOTIONS PRACTICE — I
// I: jump to the first non-whitespace character of the line and enter insert mode
// Equivalent to ^i but faster — one keystroke instead of two.
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: I
//
// TASK: Three variable declarations are missing "const ".
//       Put your cursor anywhere on each offending line and press I to jump
//       to the first real character and enter insert mode. Type "const " then Escape.
// -----------------------------------------------------------------------------
function createSession(userId: string, role: string): object {
  token = crypto.randomUUID();
  expiresAt = Date.now() + 3600 * 1000;
  label = `${role}:${userId}`;
  return { token, expiresAt, label };
}


// -----------------------------------------------------------------------------
// MOTION: I
//
// TASK: Each function is missing its "export " keyword.
//       Use I on each function signature line to prepend "export ".
// -----------------------------------------------------------------------------
function formatCurrency(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

function parseDate(raw: string): Date {
  return new Date(raw);
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-");
}


// -----------------------------------------------------------------------------
// MOTION: I
//
// TASK: Each interface property needs "readonly " prepended.
//       Put your cursor anywhere on each property line and use I to jump to the
//       start of the property name. Type "readonly " then Escape.
// -----------------------------------------------------------------------------
interface UserRecord {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}


// -----------------------------------------------------------------------------
// MOTION: I
//
// TASK: Three lines of code are missing "await " before their async calls.
//       Use I on each line to jump to the start, then type "await ".
//       (Each line currently starts with "const" — after I you land on "c"
//        and type "await " which inserts before "const".)
//       Hmm — better: each line starts with the call directly, no const.
//       Use I then type "await " to prepend it.
// -----------------------------------------------------------------------------
async function loadAll(): Promise<void> {
  fetchUser();
  fetchPosts();
  fetchComments();
}


// -----------------------------------------------------------------------------
// MOTION: I
//
// TASK: Each case label is missing its "case " keyword — they are bare numbers.
//       Use I on each bare number line to prepend "case " and then fix the colon
//       manually if needed. (The lines currently just have "0:", "1:", etc.)
//       After I, type "case " then Escape.
// -----------------------------------------------------------------------------
function getLabel(code: number): string {
  switch (code) {
    0:
      return "zero";
    1:
      return "one";
    2:
      return "two";
    default:
      return "other";
  }
}
