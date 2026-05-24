// =============================================================================
// VIM MOTIONS PRACTICE — Basic Movement
// h: left    j: down    k: up    l: right
// w: forward one word (stops at punctuation)
// b: backward one word
// e: forward to end of word
// W: forward one WORD (whitespace-delimited, skips punctuation)
// B: backward one WORD
// E: forward to end of WORD
// ge: backward to end of previous word
// H: jump to top of visible screen
// M: jump to middle of visible screen
// L: jump to bottom of visible screen
// Ctrl+d: scroll half-page down
// Ctrl+u: scroll half-page up
// zz: reposition screen so cursor is in the center
// zt: reposition screen so cursor is at the top
// zb: reposition screen so cursor is at the bottom
// =============================================================================


// -----------------------------------------------------------------------------
// MOTION: w, b, e
//
// TASK: Navigate using only w, b, e — no arrow keys, no h/l.
//       1. Start at the beginning of the line below.
//       2. Use w to jump word by word to "totalPrice".
//       3. Use e to jump to the end of "totalPrice".
//       4. Use b to jump back to "const".
//       5. Use e three times to reach the end of "discountedPrice".
//       Practice until the movement feels natural.
// -----------------------------------------------------------------------------
const totalPrice = basePrice - discountAmount;
const discountedPrice = totalPrice * (1 - discountRate);


// -----------------------------------------------------------------------------
// MOTION: W, B, E (WORD motions — skip punctuation)
//
// TASK: Compare w vs W on the line below.
//       With w, the tokens are: "config", ".", "host", ":", ":", "port"  (6 stops)
//       With W, the tokens are: "config.host::port"  (1 stop — it's one WORD)
//       1. Start at "const". Use w repeatedly, counting each stop until "port".
//       2. Go back to "const" with B or b. Now use W and count the stops.
//       3. Use E to jump to the end of "config.host::port" in one motion.
// -----------------------------------------------------------------------------
const address = config.host::port;


// -----------------------------------------------------------------------------
// MOTION: ge
//
// TASK: ge moves backward to the end of the previous word — useful when you
//       want to append to a word that is behind the cursor.
//       1. Put your cursor on "rate" in "discountRate" on the line below.
//       2. Press ge — you should land on the "e" at the end of "discount".
//       3. Press ge again — you should land on the "=" sign.
//       4. Practice: use ge from various positions and predict where it lands.
// -----------------------------------------------------------------------------
const discountRate = 0.15;
const taxRate = 0.08;
const finalRate = discountRate + taxRate;


// -----------------------------------------------------------------------------
// MOTION: H, M, L
//
// TASK: H, M, L jump within the VISIBLE screen — they depend on what is
//       currently displayed, not the file position.
//       1. Press H — your cursor jumps to the first visible line on screen.
//       2. Press L — your cursor jumps to the last visible line on screen.
//       3. Press M — your cursor jumps to the middle of the visible screen.
//       4. Scroll down a bit (Ctrl+d), then press H and M to see how they
//          track the visible window, not absolute line numbers.
// -----------------------------------------------------------------------------
function alpha(): void   { console.log("alpha");   }
function beta(): void    { console.log("beta");    }
function gamma(): void   { console.log("gamma");   }
function delta(): void   { console.log("delta");   }
function epsilon(): void { console.log("epsilon"); }
function zeta(): void    { console.log("zeta");    }
function eta(): void     { console.log("eta");     }
function theta(): void   { console.log("theta");   }


// -----------------------------------------------------------------------------
// MOTION: Ctrl+d, Ctrl+u
//
// TASK: Ctrl+d scrolls down half a page; Ctrl+u scrolls up half a page.
//       The cursor moves with the scroll — it is not left behind.
//       1. Press Ctrl+d to scroll down. Notice where your cursor lands.
//       2. Press Ctrl+u to scroll back up.
//       3. Practice until you can navigate to the "findUser" function below
//          and back to the top using only Ctrl+d and Ctrl+u.
// -----------------------------------------------------------------------------
function getUserById(id: string): object   { return {}; }
function getUserByEmail(e: string): object { return {}; }
function findUser(query: object): object   { return {}; }
function updateUser(id: string): void      {}
function deleteUser(id: string): void      {}
function listUsers(): object[]             { return []; }
function countUsers(): number              { return 0;  }
function exportUsers(): string             { return ""; }
function importUsers(csv: string): void    {}
function archiveUser(id: string): void     {}


// -----------------------------------------------------------------------------
// MOTION: zz, zt, zb
//
// TASK: These reposition the SCREEN around the cursor — the cursor does not move.
//       1. Navigate to the "zz target" comment line below (use / or j).
//       2. Press zz — the line scrolls to the vertical center of your screen.
//       3. Press zt — the line scrolls to the top of your screen.
//       4. Press zb — the line scrolls to the bottom of your screen.
//       Use zz constantly while editing to keep your work centered on screen.
// -----------------------------------------------------------------------------
function pad(s: string, n: number): string { return s.padStart(n); }
function trim(s: string): string           { return s.trim();      }
function upper(s: string): string          { return s.toUpperCase(); }
function lower(s: string): string          { return s.toLowerCase(); }

// <<< zz target: navigate here, then use zz / zt / zb to reposition the screen >>>

function repeat(s: string, n: number): string { return s.repeat(n);  }
function split(s: string, d: string): string[] { return s.split(d);  }
function join(arr: string[], d: string): string { return arr.join(d); }
function includes(s: string, q: string): boolean { return s.includes(q); }
