const nodejs = {
  // ==================== INTRO LEVEL ====================
  intro: {
    definition: 'Node.js is a free tool that runs JavaScript outside the web browser. It turns your JavaScript into a full backend language that can build servers, APIs, and command-line tools.',
    whyUse: 'One language everywhere is a huge win: the same JavaScript you learned for websites can now build the server too. Netflix, PayPal, LinkedIn, and Uber run Node.js in production because it handles many users at once without getting slow. On this website, Node.js powers the server that runs your code. If you want a backend job quickly, Node.js is one of the fastest paths there.',
    whereUse: null,
    syntax: null,
    explanation: 'Node.js was created in 2009 by Ryan Dahl. Its secret weapon is the event loop: instead of creating a new thread (a heavy worker) for every user request, Node waits for slow work (database, file, network) to finish and keeps serving other users meanwhile. That design makes it excellent for APIs and real-time apps like chat and live notifications. Node also comes with npm, the world\'s largest package library.',
    examples: [
      {
        title: 'What Node.js Runs',
        code: `// The same JavaScript, but running on a server instead of a browser
console.log("Hello from Node.js!");
console.log("Node lets JavaScript build APIs, tools, and servers.");`,
        output: 'Hello from Node.js!\nNode lets JavaScript build APIs, tools, and servers.'
      },
      {
        title: 'Where You Will See Node.js',
        code: `const apps = [
  "Netflix     - streaming video backend",
  "PayPal      - payments",
  "LinkedIn    - professional network",
  "Uber        - ride matching",
  "Trello      - collaboration boards",
  "This website - runs your code editor backend"
];
apps.forEach(a => console.log(a));`,
        output: 'Netflix     - streaming video backend\nPayPal      - payments\nLinkedIn    - professional network\nUber        - ride matching\nTrello      - collaboration boards\nThis website - runs your code editor backend'
      },
      {
        title: 'Browser vs Node.js',
        code: `console.log("Browser JavaScript: builds web page buttons and forms");
console.log("Node.js JavaScript: builds servers, reads files, talks to databases");

const canRunInBrowser = ["document", "fetch"];
console.log("Node also runs fast JavaScript like: " + canRunInBrowser.join(", "));`,
        output: 'Browser JavaScript: builds web page buttons and forms\nNode.js JavaScript: builds servers, reads files, talks to databases\nNode also runs fast JavaScript like: document, fetch'
      }
    ],
    keyPoints: [
      'Node.js runs JavaScript on the server, outside the browser.',
      'The event loop lets one process handle thousands of users.',
      'npm gives you over 2 million free packages.'
    ],
    commonMistakes: [
      'Thinking Node.js is a programming language - it is a runtime for JavaScript.',
      'Using Node.js for heavy image/video processing - it prefers fast I/O, not heavy CPU work.'
    ],
    proTips: [
      'If you know basic JavaScript, you already know 70% of Node.js.',
      'Node shines for APIs, chat apps, tools, and real-time services.'
    ]
  },

  setup: {
    definition: 'To start with Node.js you install Node (which includes npm), verify it in your terminal, and run your first script file.',
    whyUse: 'Every real project starts here: teammates run the same Node version, npm installs shared packages, and the run command starts the app. Setting up once means you can practice on any machine - college lab, office desktop, or your phone\'s cloud environment.',
    whereUse: null,
    syntax: null,
    explanation: 'Download the LTS (Long Term Support) version from nodejs.org - LTS is the stable choice. The installer includes npm automatically. Open a terminal and check with node -v and npm -v. Write code in a file ending in .js and run it with node filename.js. The node REPL (type node and press Enter) lets you execute one-liners immediately.',
    examples: [
      {
        title: 'Check Your Installation',
        code: `# Run these in your terminal:
node -v
npm -v

# Example output:
# v22.11.0
# 10.9.0`,
        output: 'v22.11.0\n10.9.0'
      },
      {
        title: 'Run Your First File',
        code: `// File: hello.js
console.log("My first Node.js program");
console.log("Node is running JavaScript");

// Terminal: node hello.js`,
        output: 'My first Node.js program\nNode is running JavaScript'
      },
      {
        title: 'The REPL (Try One-Liners Fast)',
        code: `# Terminal:
node
> 2 + 2
4
> "kotlin".toUpperCase()
'KOTLIN'
> .exit`,
        output: "4\n'KOTLIN'"
      },
      {
        title: 'Practice Right Here',
        code: `console.log("This editor runs Node.js in your browser session!");
console.log("Node version features: async/await, modules, and more");`,
        output: 'This editor runs Node.js in your browser session!\nNode version features: async/await, modules, and more'
      }
    ],
    keyPoints: [
      'Install the LTS version from nodejs.org - it includes npm.',
      'node -v and npm -v confirm the installation.',
      'node file.js runs a script; node alone opens the REPL.'
    ],
    commonMistakes: [
      'Opening the Windows command prompt in the wrong folder - run node from where your .js file lives.',
      'Mixing up npm (package manager) with node (the runtime).'
    ],
    proTips: [
      'Keep one small playground folder for experiments - it saves setup time daily.',
      'On this website, the editor and Run button use Node.js under the hood.'
    ]
  },

  hello: {
    definition: 'Your first Node.js program is a .js file that runs top to bottom when you execute it with the node command. Output happens with console.log.',
    whyUse: 'Every debugging session you will ever have starts with printing values. console.log is the simplest way to ask "what does this value hold?" and it works in the browser and in Node. Mastering it now pays back a thousand times during your career.',
    whereUse: null,
    syntax: null,
    explanation: 'Node reads your file from the first line and executes each line in order. console.log(value) prints a value plus a newline; console.log with multiple values prints them space-separated. console.error prints to the error stream, and template literals (backticks with ${}) let you build text cleanly.',
    examples: [
      {
        title: 'Hello, Node.js',
        code: `console.log("Hello, World!");
console.log("Welcome to Node.js");`,
        output: 'Hello, World!\nWelcome to Node.js'
      },
      {
        title: 'Print Values and Do Math',
        code: `const name = "Arun";
const score = 92;

console.log("Student:", name);
console.log("Score:", score);
console.log("With bonus:", score + 8);
console.log("Average of 3 tests:", (90 + 85 + 92) / 3);`,
        output: 'Student: Arun\nScore: 92\nWith bonus: 100\nAverage of 3 tests: 89'
      },
      {
        title: 'Template Literals (Clean Text)',
        code: `const course = "Node.js";
const students = 1500;

console.log(\`Welcome to \${course}!\`);
console.log(\`\${students} students are learning \${course}\`);
console.log(\`1 + 1 = \${1 + 1}\`);`,
        output: 'Welcome to Node.js!\n1500 students are learning Node.js\n1 + 1 = 2'
      }
    ],
    keyPoints: [
      'Execution starts at line 1 and goes down.',
      'console.log prints; console.error marks errors.',
      'Backticks + ${} = template literals, the clean way to build strings.'
    ],
    commonMistakes: [
      'Forgetting the file extension .js, then wondering why node file does nothing.',
      'Using ${} inside normal quotes - template literals need backticks.'
    ],
    proTips: [
      'Print early, print often while learning - it builds intuition fast.',
      'console.log with multiple arguments separates them with spaces automatically.'
    ]
  },

  variables: {
    definition: 'Variables store values under a name. In modern JavaScript you create them with const (fixed) and let (changeable).',
    whyUse: 'Programs remember things: prices, user names, shopping carts. The const/let pair catches bugs before they happen - using const by default means no value can be accidentally overwritten somewhere else in your code. This is the single most common code review comment in professional teams, so getting it right early matters.',
    whereUse: null,
    syntax: null,
    explanation: 'const creates a binding that cannot be reassigned (though objects inside it can still change). let creates a reassignable binding. The old var is function-scoped and causes confusing bugs - avoid it in new code. JavaScript figures out the type automatically (dynamic typing), so you never declare types.',
    examples: [
      {
        title: 'const and let',
        code: `const site = "courses.arinfotek.co.in";  // fixed
let visits = 1000;                        // changes
visits = 1050;                            // OK

console.log(site, visits);

// site = "other.com";   // TypeError: Assignment to constant`,
        output: 'courses.arinfotek.co.in 1050'
      },
      {
        title: 'Values Can Change Type (Dynamic)',
        code: `let a = 42;
console.log(typeof a);      // number
a = "forty two";
console.log(typeof a);      // string
a = true;
console.log(typeof a);      // boolean`,
        output: 'number\nstring\nboolean'
      },
      {
        title: 'const Does Not Freeze Contents',
        code: `const cart = ["pen"];
cart.push("notebook");     // allowed - array content changed
console.log(cart);

const user = { name: "Anita" };
user.age = 25;             // allowed - object property added
console.log(user);

// cart = [];             // TypeError - rebinding is blocked`,
        output: "[ 'pen', 'notebook' ]\n{ name: 'Anita', age: 25 }"
      }
    ],
    keyPoints: [
      'const by default, let when the value must change.',
      'Avoid var in modern code.',
      'typeof tells you the current type: string, number, boolean, etc.'
    ],
    commonMistakes: [
      'Thinking const freezes an object - it only locks the variable name.',
      'Declaring with let inside a block and expecting it outside - blocks create scope.'
    ],
    proTips: [
      'The golden rule: start every new variable as const; upgrade to let only when needed.',
      'Never reuse a variable for two different meanings.'
    ]
  },

  datatypes: {
    definition: 'JavaScript has eight basic value types: string, number, bigint, boolean, undefined, null, symbol, and object (which includes arrays and functions).',
    whyUse: 'Type bugs are sneaky: a form sends "5" as text, and 5 * "5" quietly becomes 25 while "5" + 5 becomes "55". Knowing each type and its surprises prevents real-world bugs in prices, counters, and form validation - the exact places where bugs cost money.',
    whereUse: null,
    syntax: null,
    explanation: 'string: text in quotes. number: all numbers (including decimals - there is no int/double split). bigint: gigantic whole numbers. true/false: boolean. undefined: declared but never assigned. null: intentionally empty. symbol: unique identifiers (rare). object: structured data - arrays [], objects {}, dates, functions. Check any value with typeof.',
    examples: [
      {
        title: 'The Main Types',
        code: `console.log("text", typeof "hello");            // string
console.log(42, typeof 42);                       // number
console.log(3.14, typeof 3.14);                   // number
console.log(true, typeof true);                   // boolean
console.log(undefined, typeof undefined);         // undefined
console.log(null, typeof null);                   // object (historic quirk!)`,
        output: 'text string\n42 number\n3.14 number\ntrue boolean\nundefined undefined\nnull object'
      },
      {
        title: 'Objects and Arrays Are Objects',
        code: `const user = { name: "Anita", age: 25 };
const scores = [92, 85, 78];

console.log(typeof user);     // object
console.log(typeof scores);   // object (arrays are objects)
console.log(typeof console.log); // function`,
        output: 'object\nobject\nfunction'
      },
      {
        title: 'The Classic Type Surprises',
        code: `console.log("5" + 5);     // "55"  - string wins, joins text
console.log("5" - 5);     // 0     - minus forces math
console.log(5 * "2");     // 10    - coerced to number
console.log("" == false); // true  - surprise comparison
console.log("" === false); // false - strict, compares types too`,
        output: '55\n0\n10\ntrue\nfalse'
      }
    ],
    keyPoints: [
      'All numbers are type number - no int vs double.',
      'typeof null is "object" - a famous JavaScript quirk.',
      '== compares with type conversion; === compares value AND type.'
    ],
    commonMistakes: [
      'Using == and getting surprises - always prefer === in real code.',
      'Concatenating instead of adding: "5" + 5 gives "55".'
    ],
    proTips: [
      'Convert input explicitly: Number(input) before math, and validate with isNaN.',
      '=== and !== everywhere - they prevent an entire bug category.'
    ]
  },

  operators: {
    definition: 'Operators calculate and compare: arithmetic (+ - * / %), assignment (= +=), comparison (=== > <), logical (&& || !), and the ? : ternary shortcut.',
    whyUse: 'Every rule in an app is operators: total = price * qty, if (age >= 18), discount = isMember ? 0.1 : 0. The ternary operator and logical operators let you write these rules in one readable line instead of nested if blocks.',
    whereUse: null,
    syntax: null,
    explanation: 'Arithmetic: + - * / % (remainder) ** (power). The + sign also joins strings. Comparison: === !== > < >= <== (strict, no type surprises). Logical: && (both true), || (either true), ! (not). Ternary: condition ? valueIfTrue : valueIfFalse. Compound assignment: x += 5 means x = x + 5.',
    examples: [
      {
        title: 'Arithmetic',
        code: `const price = 499;
const qty = 3;
const total = price * qty;

console.log("Total:", total);
console.log("Remainder:", 10 % 3);
console.log("Power:", 2 ** 8);
console.log("Average:", (90 + 85 + 92) / 3);`,
        output: 'Total: 1497\nRemainder: 1\nPower: 256\nAverage: 89'
      },
      {
        title: 'Comparison and Logical',
        code: `const age = 20;
const hasId = true;

console.log(age >= 18);              // true
console.log("20" === 20);            // false - different types
console.log(age >= 18 && hasId);     // true  - both needed
console.log(age < 18 || hasId);      // true  - either works
console.log(!hasId);                 // false`,
        output: 'true\nfalse\ntrue\ntrue\nfalse'
      },
      {
        title: 'Ternary Operator',
        code: `const score = 85;
const result = score >= 50 ? "Pass" : "Fail";
console.log(result);

const age = 15;
const ticket = age >= 12 ? "Full ticket" : "Child ticket";
console.log(ticket);

let points = 0;
points += 10;
console.log("Points:", points);`,
        output: 'Pass\nChild ticket\nPoints: 10'
      }
    ],
    keyPoints: [
      '=== and !== compare type AND value - use them by default.',
      '% gives remainder (great for even/odd checks: n % 2 === 0).',
      'condition ? a : b is the one-line if/else.'
    ],
    commonMistakes: [
      'Using = (assign) inside if instead of === (compare).',
      'Confusing && (and) with || (or) in complex conditions.'
    ],
    proTips: [
      'Break long conditions into named booleans: const isEligible = age >= 18 && hasId.',
      'Use ?? (nullish coalescing) for fallbacks: const name = input ?? "guest".'
    ]
  },

  conditionals: {
    definition: 'Conditionals let your program make decisions: if/else picks paths, switch matches values, and the ternary returns one of two values.',
    whyUse: 'Apps constantly decide: logged in or not, enough balance, valid input, admin or user. These branches are the business logic of every product. Writing them clearly means the app does the right thing for every customer, and you avoid the costly bugs where the wrong branch runs.',
    whereUse: null,
    syntax: null,
    explanation: 'if (condition) { ... } else if (condition2) { ... } else { ... }. Conditions accept any value: 0, "", null, undefined, and NaN are falsy (treated as false); everything else is truthy. switch (value) { case "a": ... break; default: ... } matches exact values - remember break or use if/else. Ternary handles simple two-way choices inline.',
    examples: [
      {
        title: 'if / else if / else',
        code: `const marks = 85;

if (marks >= 90) {
  console.log("Distinction");
} else if (marks >= 75) {
  console.log("First class");
} else if (marks >= 60) {
  console.log("Second class");
} else {
  console.log("Fail");
}`,
        output: 'First class'
      },
      {
        title: 'Truthy and Falsy',
        code: `console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean("hi"));     // true
console.log(Boolean(42));       // true

const username = "";
console.log(username || "guest");  // "guest" - fallback pattern`,
        output: 'false\nfalse\nfalse\nfalse\ntrue\ntrue\nguest'
      },
      {
        title: 'switch Statement',
        code: `const role = "editor";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Can edit content");
    break;
  case "viewer":
    console.log("Read only");
    break;
  default:
    console.log("Unknown role");
}`,
        output: 'Can edit content'
      }
    ],
    keyPoints: [
      'if chains read top to bottom - first match wins.',
      'Falsy values: 0, "", null, undefined, NaN, false.',
      'switch needs break, otherwise cases fall through.'
    ],
    commonMistakes: [
      'Missing break in switch - two cases run instead of one.',
      'Using if (x = 10) - that assigns, it does not compare.'
    ],
    proTips: [
      'Use if/else chains for ranges (>= 90); switch for fixed exact matches.',
      '|| and ?? give clean defaults: const port = env.PORT ?? 3000.'
    ]
  },

  // ==================== BASIC LEVEL ====================
  loops: {
    definition: 'Loops repeat a block of code. JavaScript gives you for, while, and the modern for...of and forEach patterns for arrays.',
    whyUse: 'Real tasks repeat: print 500 receipts, retry a failed request, process every row of a file. Loops let one block handle any number of items. Choosing the right loop (for...of for values, classic for for indices) keeps code readable and fast - a daily skill in every backend job.',
    whereUse: null,
    syntax: null,
    explanation: 'for (let i = 0; i < 5; i++) is the classic counted loop. while (condition) repeats until the condition is false - beware infinite loops. for...of iterates array values cleanly; forEach takes a function. break exits early; continue skips to the next round.',
    examples: [
      {
        title: 'Classic for Loop',
        code: `for (let i = 1; i <= 5; i++) {
  console.log("Count: " + i);
}`,
        output: 'Count: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5'
      },
      {
        title: 'for...of and forEach',
        code: `const students = ["Anita", "Suresh", "Ravi"];

for (const s of students) {
  console.log("Hello, " + s);
}

students.forEach((s, i) => {
  console.log(i + ": " + s);
});`,
        output: 'Hello, Anita\nHello, Suresh\nHello, Ravi\n0: Anita\n1: Suresh\n2: Ravi'
      },
      {
        title: 'while, break, and continue',
        code: `let n = 1;
while (n <= 10) {
  if (n === 4) break;          // stop at 4
  if (n % 2 === 0) { n++; continue; }  // skip evens
  console.log("Odd: " + n);
  n++;
}

let tries = 0;
do {
  tries++;
} while (tries < 3);
console.log("Tries: " + tries);`,
        output: 'Odd: 1\nOdd: 3\nTries: 3'
      }
    ],
    keyPoints: [
      'for = counted loops; while = run until condition flips.',
      'for...of walks values; forEach walks arrays with a function.',
      'break stops the loop; continue skips one round.'
    ],
    commonMistakes: [
      'Infinite loops: forgetting to change the counter inside while.',
      'Off-by-one errors: arrays start at index 0, so use i < arr.length.'
    ],
    proTips: [
      'Prefer for...of - it reads like English: for (const item of list).',
      'If you need the index too, use forEach((item, index) => ...).'
    ]
  },

  strings: {
    definition: 'Strings are text values. JavaScript strings are immutable - methods return NEW strings instead of changing the original.',
    whyUse: 'Text is everywhere: names, emails, file paths, API responses, messages. The string toolbox (split, slice, replace, includes, padStart) replaces pages of manual character logic. In backend work you constantly validate and format strings, so these methods save real time.',
    whereUse: null,
    syntax: null,
    explanation: 'Create strings with \'single\', "double", or \`template\` quotes. Key methods: toUpperCase/lowerCase, trim, includes, slice(start, end), split(separator), replace, repeat, padStart. Template literals with ${} combine values cleanly. Since strings never change in place, always use the returned value.',
    examples: [
      {
        title: 'Common Methods',
        code: `const msg = "  Learn Node.js Today  ";

console.log(msg.trim());
console.log(msg.trim().toUpperCase());
console.log(msg.includes("Node"));
console.log(msg.trim().replace("Node.js", "JavaScript"));
console.log(msg.trim().slice(0, 5));`,
        output: 'Learn Node.js Today\nLEARN NODE.JS TODAY\ntrue\nLearn JavaScript Today\nLearn'
      },
      {
        title: 'split and join',
        code: `const csv = "anita,92,suresh,85";
const parts = csv.split(",");
console.log(parts);
console.log(parts.length);

const words = "quick brown fox";
console.log(words.split(" "));
console.log(["a", "b", "c"].join("-"));`,
        output: "[ 'anita', '92', 'suresh', '85' ]\n4\n[ 'quick', 'brown', 'fox' ]\na-b-c"
      },
      {
        title: 'Template Literals and Padding',
        code: `const name = "Anita";
const marks = 92;

console.log(\`\${name} scored \${marks}\`);
console.log("Code: " + "7".padStart(3, "0"));
console.log("Repeat: " + "ha".repeat(3));
console.log("Length: " + name.length);`,
        output: 'Anita scored 92\nCode: 007\nRepeat: hahaha\nLength: 5'
      }
    ],
    keyPoints: [
      'Strings are immutable - use the value methods return.',
      'split turns text into arrays; join turns arrays into text.',
      'Template literals (\`\${x}\`) beat + concatenation for readability.'
    ],
    commonMistakes: [
      'Forgetting to use the result: msg.trim() alone does nothing - write msg = msg.trim().',
      'Slicing with wrong indices: slice(0, 5) gives characters 0-4, not 0-5.'
    ],
    proTips: [
      'Validate input with .trim() first - users always paste extra spaces.',
      'For complex text, build a small helper function instead of giant chains.'
    ]
  },

  arrays: {
    definition: 'An array is an ordered list of values. Its methods (map, filter, reduce, sort) transform lists in one clean line.',
    whyUse: 'Almost every program processes lists: orders, users, products, log lines. The functional array methods are the signature style of modern JavaScript - map/filter chains appear in every Node codebase and every frontend framework. Learning them once means writing loops you never need to debug again.',
    whereUse: null,
    syntax: null,
    explanation: 'Create with const arr = [1, 2, 3] (const still allows push). map transforms each item into a new one; filter keeps matching items; reduce combines everything into a single value; sort orders; find returns the first match; some checks if any match; slice/splice for cutting. Length gives the count; arr[0] gets the first item.',
    examples: [
      {
        title: 'map and filter',
        code: `const scores = [92, 85, 78, 96, 60];

const curved = scores.map(s => s + 5);
console.log("Curved:", curved);

const toppers = scores.filter(s => s >= 85);
console.log("85+:", toppers);

const names = ["anita", "ravi"].map(n => n.toUpperCase());
console.log(names);`,
        output: 'Curved: [ 97, 90, 83, 101, 65 ]\n85+: [ 92, 85, 96 ]\n[ \'ANITA\', \'RAVI\' ]'
      },
      {
        title: 'reduce and sort',
        code: `const prices = [499, 199, 99];

const total = prices.reduce((sum, p) => sum + p, 0);
console.log("Total:", total);

const sorted = [92, 78, 85].sort((a, b) => b - a);  // descending
console.log("Ranked:", sorted);`,
        output: 'Total: 797\nRanked: [ 92, 85, 78 ]'
      },
      {
        title: 'find, some, includes, slice',
        code: `const students = [
  { name: "Anita", marks: 92 },
  { name: "Ravi", marks: 58 }
];

const top = students.find(s => s.marks >= 90);
console.log("Topper:", top.name);

console.log("Anyone failed?", students.some(s => s.marks < 60));
console.log("Has 85?", [92, 85].includes(85));
console.log("First two:", [1, 2, 3, 4].slice(0, 2));`,
        output: 'Topper: Anita\nAnyone failed? true\nHas 85? true\nFirst two: [ 1, 2 ]'
      }
    ],
    keyPoints: [
      'map = transform, filter = keep, reduce = combine.',
      'All three return NEW arrays - the original stays untouched.',
      'find returns one item; filter returns a new list.'
    ],
    commonMistakes: [
      'Forgetting the initial value in reduce (the 0) - it breaks on empty arrays.',
      'sort() without a comparator sorts alphabetically, not numerically.'
    ],
    proTips: [
      'Chain them: orders.filter(...).map(...).sort(...) reads top to bottom.',
      'Use reduce for totals, counts, and grouping objects by key.'
    ]
  },

  objects: {
    definition: 'An object stores data as key-value pairs: { name: "Anita", age: 25 }. JSON is the text format objects travel in over networks.',
    whyUse: 'Objects model real things - a user, a product, an API request. JSON (JavaScript Object Notation) is the language of web APIs: every service on the internet sends and receives JSON. If you master objects and JSON, you can connect your app to any API in the world.',
    whereUse: null,
    syntax: null,
    explanation: 'Access with obj.key or obj["key"]. Destructuring pulls keys into variables: const { name, age } = obj. Spread (...) copies or merges: { ...obj, extra: 1 }. JSON.stringify converts to text; JSON.parse converts text back. Objects are references: copying to another variable shares the same data unless you spread-clone.',
    examples: [
      {
        title: 'Create and Access',
        code: `const student = { name: "Anita", marks: 92, passed: true };

console.log(student.name);
console.log(student["marks"]);
student.city = "Chennai";       // add a property
console.log(student);`,
        output: 'Anita\n92\n{ name: \'Anita\', marks: 92, passed: true, city: \'Chennai\' }'
      },
      {
        title: 'Destructuring and Spread',
        code: `const user = { name: "Ravi", age: 28, role: "editor" };

const { name, role } = user;
console.log(name, role);

const updated = { ...user, age: 29 };
console.log(updated);
console.log("Original age still:", user.age);`,
        output: 'Ravi editor\n{ name: \'Ravi\', age: 29, role: \'editor\' }\nOriginal age still: 28'
      },
      {
        title: 'JSON - Objects on the Wire',
        code: `const order = { id: 1, item: "Kotlin Course", price: 499 };

const asText = JSON.stringify(order);
console.log("Sent to API:", asText);

const back = JSON.parse(asText);
console.log("Back again:", back.item, back.price);`,
        output: 'Sent to API: {"id":1,"item":"Kotlin Course","price":499}\nBack again: Kotlin Course 499'
      }
    ],
    keyPoints: [
      'Objects: key-value pairs; access with dot or bracket notation.',
      'Destructuring and spread are everyday object tools.',
      'JSON.stringify / JSON.parse convert between objects and text.'
    ],
    commonMistakes: [
      'Assuming const makes an object immutable - it does not.',
      'Sending an object directly over HTTP - convert it with JSON.stringify first.'
    ],
    proTips: [
      'Clone with spread: const copy = { ...original } (one level deep).',
      'Group arrays into objects (a map keyed by id) for instant lookups.'
    ]
  },

  functions: {
    definition: 'A function is a reusable block of code that takes inputs (parameters) and can return an output. JavaScript has three ways to write them.',
    whyUse: 'Functions are how you avoid copy-paste: write calculateTotal() once, use it in the cart, the invoice, and the report. In Node, functions are even more important - callbacks and async code are built entirely around passing functions around.',
    whereUse: null,
    syntax: null,
    explanation: 'Three styles: function declaration (hoisted, usable before definition), function expression (const f = function() {}), and arrow function (const f = () => {}). Arrow functions are compact and inherit `this` from their surroundings - ideal for callbacks. Parameters can have defaults (a = 1), and the rest operator (...args) collects extra arguments.',
    examples: [
      {
        title: 'Function Styles',
        code: `function greet(name) {              // declaration
  return "Hello, " + name;
}

const bye = function (name) {        // expression
  return "Bye, " + name;
};

const square = n => n * n;           // arrow, one-liner

console.log(greet("Anita"));
console.log(bye("Ravi"));
console.log(square(7));`,
        output: 'Hello, Anita\nBye, Ravi\n49'
      },
      {
        title: 'Default Parameters and Rest',
        code: `function fee(amount, rate = 0.02) {
  return amount * rate;
}

console.log(fee(1000));
console.log(fee(1000, 0.05));

function total(...nums) {
  return nums.reduce((s, n) => s + n, 0);
}
console.log(total(1, 2, 3, 4));`,
        output: '20\n50\n10'
      },
      {
        title: 'Functions Inside Functions (Closures)',
        code: `function makeCounter() {
  let count = 0;                    // remembered
  return () => ++count;
}

const next = makeCounter();
console.log(next());   // 1
console.log(next());   // 2
console.log(next());   // 3`,
        output: '1\n2\n3'
      }
    ],
    keyPoints: [
      'Arrow functions (=>) are the modern default for callbacks.',
      'Default parameters remove the need for manual checks.',
      'Closures let inner functions remember outer variables.'
    ],
    commonMistakes: [
      'Forgetting return - the function silently returns undefined.',
      'Using function(){} as a callback and losing this - use arrow functions.'
    ],
    proTips: [
      'Give functions verb names and keep them doing one job.',
      'If a function exceeds ~30 lines, it is doing too much - split it.'
    ]
  },

  npm: {
    definition: 'npm (Node Package Manager) is a huge library of free, pre-built code packages. npm install package-name adds it to your project.',
    whyUse: 'You will never build everything from scratch: Express handles web servers, bcrypt hashes passwords, and thousands more exist for almost any need. npm lets you add battle-tested code in seconds and share your own code the same way. It is the largest software library on Earth.',
    whereUse: null,
    syntax: null,
    explanation: 'npm init -y creates package.json (your project\'s ID card: name, version, dependencies, scripts). npm install express downloads the package into node_modules and records it in package.json. Global installs (-g) are for tools you use everywhere. npm run dev executes a script from package.json. Never edit node_modules by hand - it is generated.',
    examples: [
      {
        title: 'Start a Project',
        code: `# In your project folder:
npm init -y          # creates package.json
npm install express   # adds Express and records it

# Result in package.json:
# "dependencies": { "express": "^4.21.0" }`,
        output: 'package.json created\nexpress@4.21.0 added'
      },
      {
        title: 'Scripts in package.json',
        code: `// package.json
{
  "name": "my-api",
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js"
  }
}

// Terminal:
// npm start     -> runs node server.js
// npm run dev   -> runs with auto-restart on file changes`,
        output: 'npm start -> node server.js\nnpm run dev -> auto-restart mode'
      },
      {
        title: 'Using an Installed Package',
        code: `// File: server.js (after npm install express)
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("API is running"));

app.listen(3000, () => console.log("Listening on 3000"));`,
        output: 'Listening on 3000'
      }
    ],
    keyPoints: [
      'package.json lists dependencies and scripts - commit it to git.',
      'npm install <pkg> for your project; npm install -g <pkg> for global tools.',
      'node_modules is downloaded code - never edit or commit it.'
    ],
    commonMistakes: [
      'Committing node_modules to git - package.json is enough.',
      'Forgetting to run npm install on a new machine - deps are missing.'
    ],
    proTips: [
      'Check npmjs.com before building a feature - a package probably exists.',
      'npm ci gives clean, exact installs in CI and deployments.'
    ]
  },

  fs: {
    definition: 'The fs (file system) module lets Node.js read, write, rename, and delete files on the computer.',
    whyUse: 'Servers constantly work with files: save user uploads, read configuration, write logs, export reports. fs is one of Node\'s built-in modules - no install needed. Every backend developer uses it weekly, and log files it writes are often the first place you look when debugging production issues.',
    whereUse: null,
    syntax: null,
    explanation: 'Two styles: sync (readFileSync) is simple and blocks until done - fine for startup files; async (readFile with a callback, or promises with fs/promises) keeps the server responsive - use it for requests. Common operations: readFile, writeFile, appendFile, existsSync, mkdir. Always handle errors - files go missing in real life.',
    examples: [
      {
        title: 'Write and Read a File',
        code: `const fs = require("fs");

fs.writeFileSync("note.txt", "Hello from Node.js!");
const data = fs.readFileSync("note.txt", "utf8");
console.log("Contents:", data);`,
        output: 'Contents: Hello from Node.js!'
      },
      {
        title: 'Async Read with Promises',
        code: `const { readFile, writeFile } = require("fs/promises");

async function main() {
  await writeFile("report.txt", "Marks: 92\\nLine 2");
  const text = await readFile("report.txt", "utf8");
  console.log(text.trim());
}
main();`,
        output: 'Marks: 92\nLine 2'
      },
      {
        title: 'Append, Check, and Handle Missing Files',
        code: `const fs = require("fs");

fs.appendFileSync("log.txt", "user login\\n");
fs.appendFileSync("log.txt", "page view\\n");
console.log(fs.readFileSync("log.txt", "utf8").trim());

console.log("Exists?", fs.existsSync("missing.txt"));
try {
  fs.readFileSync("missing.txt");
} catch (e) {
  console.log("Handled error:", e.code);
}`,
        output: 'user login\npage view\nExists? false\nHandled error: ENOENT'
      }
    ],
    keyPoints: [
      'fs is built in - require("fs") needs no install.',
      'Sync for scripts at startup; async for anything serving users.',
      'Paths are relative to where you run node - keep that in mind.'
    ],
    commonMistakes: [
      'Using readFileSync inside a request handler - it freezes the whole server.',
      'Forgetting "utf8" - without it you get a Buffer instead of text.'
    ],
    proTips: [
      'path.join() builds paths safely across Windows/macOS/Linux.',
      'Always wrap file operations in try/catch - files disappear.'
    ]
  },

  // ==================== MEDIUM LEVEL ====================
  modules: {
    definition: 'Modules let you split a program into separate files. Each file exports its functions; other files import what they need. Node supports CommonJS (require) and ES modules (import).',
    whyUse: 'Projects grow to hundreds of files. Modules keep code organized: routes in one file, database logic in another, helpers in a third. They also let teams work in parallel without conflicts and make code reusable across projects. Every Node codebase you open is built from modules.',
    whereUse: null,
    syntax: null,
    explanation: 'CommonJS (classic Node): module.exports = { fn } in the sender, const { fn } = require("./file") in the receiver. ES modules (standard JavaScript): export function fn() in the sender, import { fn } from "./file.js" in the receiver - activated by "type": "module" in package.json or .mjs files. Built-in modules (fs, path, os) are required by name without a path.',
    examples: [
      {
        title: 'CommonJS: Export and Require',
        code: `// File: math.js
module.exports = {
  add: (a, b) => a + b,
  double: n => n * 2
};

// File: app.js  (same folder)
const { add, double } = require("./math");
console.log(add(2, 3));
console.log(double(21));`,
        output: '5\n42'
      },
      {
        title: 'ES Modules: export and import',
        code: `// File: greet.js
export const greet = name => "Hello, " + name;
export default function bye(name) { return "Bye, " + name; }

// File: app.js
import greet, { greet as hi } from "./greet.js";
console.log(hi("Anita"));
console.log(greet("Ravi"));`,
        output: 'Hello, Anita\nHello, Ravi'
      },
      {
        title: 'Built-in Modules',
        code: `const os = require("os");
const path = require("path");

console.log("Platform:", os.platform());
console.log("Memory (MB):", Math.round(os.totalmem() / 1024 / 1024));
console.log("Joined path:", path.join("users", "anita", "profile.jpg"));`,
        output: 'Platform: linux\nMemory (MB): 16000\nJoined path: users/anita/profile.jpg'
      }
    ],
    keyPoints: [
      'module.exports + require = CommonJS (classic Node style).',
      'export + import = ES modules (modern standard).',
      'Built-in modules (fs, path, os) need require but no install.'
    ],
    commonMistakes: [
      'Wrong path in require - use "./math" for local files (the dot matters).',
      'Mix import and require in the same file - pick one style per project.'
    ],
    proTips: [
      'One module, one responsibility: math.js does math only.',
      'Start new projects with ES modules if you also write frontend code.'
    ]
  },

  events: {
    definition: 'The EventEmitter is Node\'s built-in way to react to things: a function announces an event (emit), and listeners react to it (on). It is the foundation of all Node asynchronous work.',
    whyUse: 'Events decouple code: a payment module does not need to know about emails - it just emits "paymentSuccess" and the email module listens. This pattern powers Express routing, file-read completion, chat apps, and even DOM clicks in the browser. Understanding it explains how half of Node works internally.',
    whereUse: null,
    syntax: null,
    explanation: 'const emitter = new EventEmitter(). emitter.on("event", handler) registers a listener; emitter.emit("event", data) fires it - all listeners run in order. Listeners receive arguments passed to emit. Use once() for single-fire listeners and removeListener() to unsubscribe (important to avoid memory leaks).',
    examples: [
      {
        title: 'Your First EventEmitter',
        code: `const { EventEmitter } = require("events");
const bus = new EventEmitter();

bus.on("purchase", (item, qty) => {
  console.log("Sold " + qty + " x " + item);
});

bus.emit("purchase", "Kotlin Course", 2);
bus.emit("purchase", "Node Course", 1);`,
        output: 'Sold 2 x Kotlin Course\nSold 1 x Node Course'
      },
      {
        title: 'once and Listener Counts',
        code: `const { EventEmitter } = require("events");
const bus = new EventEmitter();

bus.once("start", () => console.log("Runs exactly once"));
bus.emit("start");
bus.emit("start");                 // ignored

console.log("purchase listeners:", bus.listenerCount("purchase"));`,
        output: 'Runs exactly once\npurchase listeners: 0'
      },
      {
        title: 'Real Pattern: Decoupled Modules',
        code: `const { EventEmitter } = require("events");
const bus = new EventEmitter();

// Module A: order service - knows nothing about emails
bus.on("orderPaid", order => {
  console.log("Email queued for " + order.email);
});

// Module B: just announces the event
const order = { id: 7, email: "anita@mail.com" };
console.log("Order " + order.id + " paid");
bus.emit("orderPaid", order);`,
        output: 'Order 7 paid\nEmail queued for anita@mail.com'
      }
    ],
    keyPoints: [
      'on = subscribe, emit = publish - the observer pattern.',
      'Multiple listeners can share one event; they run in registration order.',
      'once fires a listener a single time.'
    ],
    commonMistakes: [
      'Forgetting that emit runs listeners synchronously in order.',
      'Never removing listeners in long-running apps - memory slowly grows.'
    ],
    proTips: [
      'Name events as past-tense facts: "orderPaid", not "doOrderPaid".',
      'The events module is how file, http, and stream APIs report completion.'
    ]
  },

  async: {
    definition: 'Asynchronous code starts slow work and continues without waiting. JavaScript offers callbacks, promises, and async/await - async/await being the modern, readable choice.',
    whyUse: 'A Node server must never sit idle waiting: while one user\'s database query runs, it should serve 100 others. Writing async code correctly is THE core backend skill. async/await turns complicated waiting logic into code that reads like a normal script, drastically reducing bugs.',
    whereUse: null,
    syntax: null,
    explanation: 'A promise represents a future value: it starts pending, then becomes fulfilled or rejected. async function always returns a promise; await pauses that function until the promise settles - without blocking other users. Handle failures with try/catch. Promise.all runs several tasks in parallel and waits for all. Avoid callback pyramids (error-first callbacks nested deep).',
    examples: [
      {
        title: 'Promises and async/await',
        code: `function fetchName() {
  return new Promise(resolve => setTimeout(() => resolve("Anita"), 100));
}

async function main() {
  console.log("Loading...");
  const name = await fetchName();
  console.log("Got: " + name);
}
main();`,
        output: 'Loading...\nGot: Anita'
      },
      {
        title: 'Error Handling with try/catch',
        code: `async function getUser(id) {
  if (id <= 0) throw new Error("Invalid id");
  return { id, name: "Anita" };
}

async function main() {
  try {
    console.log(await getUser(1));
  } catch (e) {
    console.log("Failed:", e.message);
  }
  try {
    await getUser(0);
  } catch (e) {
    console.log("Failed:", e.message);
  }
}
main();`,
        output: "{ id: 1, name: 'Anita' }\nFailed: Invalid id"
      },
      {
        title: 'Promise.all - Run in Parallel',
        code: `const wait = (ms, label) =>
  new Promise(r => setTimeout(() => { console.log(label + " done"); r(label); }, ms));

async function main() {
  const start = Date.now();
  const results = await Promise.all([wait(100, "user"), wait(100, "orders")]);
  console.log(results);
  console.log("Total ms:", Date.now() - start);
}
main();`,
        output: 'user done\norders done\n[ \'user\', \'orders\' ]\nTotal ms: ~100'
      }
    ],
    keyPoints: [
      'async/await is the modern default - callbacks are legacy.',
      'await pauses one function, not the whole server.',
      'Promise.all parallelizes independent tasks.'
    ],
    commonMistakes: [
      'Forgetting await - you get a promise object instead of the value.',
      'Sequential awaits for independent calls - use Promise.all to cut latency.'
    ],
    proTips: [
      'Every async function should be wrapped in try/catch or .catch().',
      'Name functions fetchX/createX when they are async - it signals waiting.'
    ]
  },

  http: {
    definition: 'The built-in http module creates a web server: it receives requests (GET, POST) and sends back responses - the heart of every Node backend.',
    whyUse: 'Before installing any framework, you can build a complete API with zero dependencies - a great way to learn what Express does for you. Understanding http is also essential for debugging: status codes, headers, and request bodies appear in every API error you will ever face.',
    whereUse: null,
    syntax: null,
    explanation: 'http.createServer(handler) makes a server; the handler receives (req, res). Check req.url and req.method to route requests; res.writeHead sets status and headers; res.end sends the body. Listen on a port with server.listen(3000). Status codes matter: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error.',
    examples: [
      {
        title: 'Minimal Web Server',
        code: `const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js server!");
});

server.listen(3000, () => console.log("Running on http://localhost:3000"));`,
        output: 'Running on http://localhost:3000'
      },
      {
        title: 'Routing by URL',
        code: `const http = require("http");

http.createServer((req, res) => {
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About page");
  } else if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Home page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
}).listen(3000, () => console.log("Server ready"));`,
        output: 'GET /        -> Home page (200)\nGET /about   -> About page (200)\nGET /missing -> Not Found (404)'
      },
      {
        title: 'JSON API Endpoint',
        code: `const http = require("http");

http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/api/students") {
    const data = JSON.stringify([
      { name: "Anita", marks: 92 },
      { name: "Ravi", marks: 78 }
    ]);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}).listen(3000);`,
        output: 'GET /api/students -> [{"name":"Anita","marks":92},{"name":"Ravi","marks":78}]'
      }
    ],
    keyPoints: [
      'createServer(handler) + listen(port) = a working server.',
      'res.writeHead(status, headers) then res.end(body).',
      'Status codes tell clients what happened: 2xx ok, 4xx client error, 5xx server error.'
    ],
    commonMistakes: [
      'Forgetting res.end() - the request hangs forever.',
      'Returning HTML without Content-Type: text/html - browsers show raw text.'
    ],
    proTips: [
      'Test with curl or a browser: curl http://localhost:3000/api/students',
      'Learn Express next - it removes the repetitive routing code above.'
    ]
  },

  path: {
    definition: 'The path module builds and cleans file paths safely, and process carries runtime information like arguments and environment variables.',
    whyUse: 'File paths differ across Windows (C:\\Users\\...) and Linux (/home/...). Joining paths with + breaks on different systems and when users type odd inputs. path.join solves it, and process.env keeps secrets (API keys, passwords) out of your code - a non-negotiable security habit.',
    whereUse: null,
    syntax: null,
    explanation: 'path.join(...parts) builds a correct path for any OS; path.basename gives the file name; path.dirname the folder; path.extname the extension; path.resolve makes an absolute path. process.argv holds command-line arguments (argv[0] is node, argv[1] is your script). process.env reads environment variables - where real secrets live.',
    examples: [
      {
        title: 'Building Paths Safely',
        code: `const path = require("path");

console.log(path.join("users", "anita", "report.txt"));
console.log(path.basename("/data/report.txt"));
console.log(path.dirname("/data/report.txt"));
console.log(path.extname("app.js"));
console.log(path.resolve("docs", "readme.md"));`,
        output: 'users/anita/report.txt\nreport.txt\n/data\n.js\n/absolute/path/docs/readme.md'
      },
      {
        title: 'Command-Line Arguments',
        code: `// Terminal: node greet.js Anita
const name = process.argv[2] || "guest";
console.log("Hello, " + name);
console.log("Script:", process.argv[1]);`,
        output: 'Hello, Anita\nScript: /home/user/greet.js'
      },
      {
        title: 'Environment Variables (Secrets)',
        code: `// .env file (never committed):  API_KEY=secret123
// Terminal: node app.js
const key = process.env.API_KEY || "no-key-set";
const port = process.env.PORT || 3000;

console.log("Port:", port);
console.log("Key loaded:", key !== "no-key-set");
console.log("Node:", process.version);`,
        output: 'Port: 3000\nKey loaded: true\nNode: v22.11.0'
      }
    ],
    keyPoints: [
      'path.join - never build paths with + or "/" by hand.',
      'process.argv[2+] - user arguments; process.env - secrets and config.',
      'process.cwd() is the folder you launched node from.'
    ],
    commonMistakes: [
      'Hardcoding "/folder/file.txt" - breaks on Windows.',
      'Committing .env with keys - add it to .gitignore immediately.'
    ],
    proTips: [
      'The 12-factor rule: config (ports, keys) comes from env vars, not code.',
      'Use dotenv package to load .env files in development.'
    ]
  },

  streams: {
    definition: 'Streams process data piece by piece instead of loading everything into memory - essential for large files and network data.',
    whyUse: 'A video file may be 4 GB while your server has 512 MB of RAM - reading it whole would crash the process. Streams (also used by request/response in Node) handle files of any size with tiny memory use. pipe() connects streams like water pipes, which is where the name comes from.',
    whereUse: null,
    syntax: null,
    explanation: 'Four kinds: Readable (source, e.g. a file), Writable (destination), Duplex (both), Transform (changes data). Chain them with .pipe(destination). Events: data (chunk arrives), end (readable finished), error. createReadStream reads a file gradually; createWriteStream writes gradually. Reading line by line or compressing files are classic stream tasks.',
    examples: [
      {
        title: 'Copy a File with Streams',
        code: `const fs = require("fs");

const readable = fs.createReadStream("source.txt");
const writable = fs.createWriteStream("copy.txt");

readable.pipe(writable);
console.log("Copying file chunk by chunk...");`,
        output: 'Copying file chunk by chunk...\ncopy.txt created'
      },
      {
        title: 'See Chunks Arrive',
        code: `const fs = require("fs");

const stream = fs.createReadStream("large.log", { encoding: "utf8" });
let chunks = 0;

stream.on("data", chunk => {
  chunks++;
  console.log("Chunk " + chunks + " arrived: " + chunk.length + " chars");
});
stream.on("end", () => console.log("Done. Total chunks: " + chunks));
stream.on("error", e => console.log("Error:", e.message));`,
        output: 'Chunk 1 arrived: 65536 chars\nChunk 2 arrived: 12345 chars\nDone. Total chunks: 2'
      },
      {
        title: 'Transform Stream: Uppercase File',
        code: `const fs = require("fs");
const { Transform } = require("stream");

const upper = new Transform({
  transform(chunk, enc, cb) {
    cb(null, chunk.toString().toUpperCase());
  }
});

fs.createReadStream("note.txt").pipe(upper).pipe(process.stdout);`,
        output: 'HELLO FROM NODE.JS!'
      }
    ],
    keyPoints: [
      'Streams keep memory usage flat for files of any size.',
      'pipe() chains: source.pipe(transform).pipe(destination).',
      'Always attach an error handler to streams.'
    ],
    commonMistakes: [
      'Reading a huge file with readFile - it loads everything into RAM.',
      'Forgetting error listeners - stream errors crash the process silently.'
    ],
    proTips: [
      'If you process files or network data, think streams first.',
      'request and response in HTTP servers ARE streams - same pattern.'
    ]
  },

  process: {
    definition: 'The process object is Node\'s control panel: it reports the runtime version, memory, arguments, environment, and lets you start or exit the program.',
    whyUse: 'Every production Node service relies on process: PORT tells it which port to use, process.env holds secrets, exit codes tell monitoring tools whether a script succeeded, and logs of process.memoryUsage help find leaks. These few properties are what turn a laptop script into a deployable service.',
    whereUse: null,
    syntax: null,
    explanation: 'process.version = Node version. process.argv = command arguments. process.env = environment variables. process.cwd() = current folder. process.exit(code) ends the program (0 = success). process.on("uncaughtException") is the safety net for unexpected crashes. memoryUsage() reports heap consumption.',
    examples: [
      {
        title: 'Runtime Info',
        code: `console.log("Node:", process.version);
console.log("Platform:", process.platform);
console.log("Folder:", process.cwd());
console.log("PID:", process.pid);
console.log("Memory (MB):",
  Math.round(process.memoryUsage().heapUsed / 1024 / 1024));`,
        output: 'Node: v22.11.0\nPlatform: win32\nFolder: C:\\project\nPID: 12345\nMemory (MB): 8'
      },
      {
        title: 'Exit Codes for Scripts',
        code: `// Automation script style
const fs = require("fs");

if (fs.existsSync("data.json")) {
  console.log("Data file found");
  process.exit(0);        // success - CI tools check this
} else {
  console.error("data.json missing");
  process.exit(1);        // failure - stops pipelines
}`,
        output: 'Data file found\nExit code: 0'
      },
      {
        title: 'Safety Net and env in One Place',
        code: `process.on("uncaughtException", err => {
  console.error("CRASH caught:", err.message);
  process.exit(1);
});

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || "development"
};
console.log("Config:", JSON.stringify(config));`,
        output: 'Config: {"port":3000,"env":"development"}'
      }
    ],
    keyPoints: [
      'process.env = configuration and secrets; process.argv = arguments.',
      'Exit code 0 means success - deployments and CI rely on it.',
      'uncaughtException is your last-resort crash handler.'
    ],
    commonMistakes: [
      'process.exit() inside request handlers - it kills the whole server.',
      'Leaving NODE_ENV unset - production optimizations never turn on.'
    ],
    proTips: [
      'Log process.memoryUsage() if your service slows down over time.',
      'Health checks in deployment platforms simply hit an endpoint that uses these values.'
    ]
  },

  // ==================== ADVANCED LEVEL ====================
  express: {
    definition: 'Express is a small, fast web framework for Node.js that turns routing, requests, and middleware into a few clean lines.',
    whyUse: 'Express is the de-facto standard for Node APIs - the majority of Node tutorials, job descriptions, and existing codebases assume it. It eliminates the repetitive routing code of raw http, and its middleware pattern (tiny functions in a chain) is copied by frameworks worldwide. Learning Express means reading most Node code comfortably.',
    whereUse: null,
    syntax: null,
    explanation: 'const app = express(). Routes: app.get/post/put/delete(path, handler). req holds the request (params, query, body); res holds responses (res.json, res.status). Middleware functions run in order and can end the chain or call next(). express.json() parses JSON bodies. Mount routers to group routes: app.use("/api", router).',
    examples: [
      {
        title: 'Hello Express',
        code: `const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.listen(3000, () => console.log("Server on port 3000"));`,
        output: 'GET / -> {"message":"API is running"}'
      },
      {
        title: 'Routes with Params and Query',
        code: `const express = require("express");
const app = express();

app.get("/students", (req, res) => {
  const course = req.query.course || "all";
  res.json({ course, count: 1500 });
});

app.get("/students/:id", (req, res) => {
  res.json({ id: req.params.id, name: "Anita", marks: 92 });
});

app.listen(3000);`,
        output: 'GET /students?course=node -> {"course":"node","count":1500}\nGET /students/1 -> {"id":"1","name":"Anita","marks":92}'
      },
      {
        title: 'POST with Middleware',
        code: `const express = require("express");
const app = express();
app.use(express.json());          // parse JSON bodies

app.post("/api/orders", (req, res) => {
  const { item, qty } = req.body;
  if (!item) return res.status(400).json({ error: "item required" });
  res.status(201).json({ id: 101, item, qty: qty || 1 });
});

// Terminal: curl -X POST localhost:3000/api/orders \\
//   -H "Content-Type: application/json" -d '{"item":"Course"}'`,
        output: 'POST -> 201 {"id":101,"item":"Course","qty":1}'
      }
    ],
    keyPoints: [
      'app.get/post/put/delete define routes; res.json sends responses.',
      'Middleware runs in order: express.json() must come before routes using body.',
      'Status codes: 200 ok, 201 created, 400 bad request, 404 not found.'
    ],
    commonMistakes: [
      'Sending JSON before registering express.json() - req.body stays undefined.',
      'Forgetting to return after res.status(400) - code continues and crashes.'
    ],
    proTips: [
      'Split routes into files with express.Router() - keep server.js tiny.',
      'Central error middleware: app.use((err, req, res, next) => ...) catches everything.'
    ]
  },

  database: {
    definition: 'Node apps store data in databases: SQL (PostgreSQL, MySQL) for structured tables, or NoSQL (MongoDB) for flexible documents. Drivers connect your code to them.',
    whyUse: 'Data is the asset: orders, users, and progress must survive restarts - files are not enough when many users write at once. Every backend job expects you to connect a server to a database. Knowing SQL transfers across databases, and pairing it with Node makes you immediately employable.',
    whereUse: null,
    syntax: null,
    explanation: 'Install a driver (npm install pg for PostgreSQL, mongodb for MongoDB), create a pool of connections, and run queries. Always use parameterized queries ($1, $2) - string concatenation invites SQL injection. Structure: connect, insert rows, read with SELECT, update, handle errors. Use connection pools: creating a connection per request is slow.',
    examples: [
      {
        title: 'PostgreSQL with Parameterized Queries',
        code: `const { Pool } = require("pg");
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function getStudent(id) {
  const result = await pool.query(
    "SELECT name, marks FROM students WHERE id = $1",   // safe: $1
    [id]
  );
  return result.rows[0];
}`,
        output: 'Row returned safely without SQL injection risk'
      },
      {
        title: 'Insert and Read',
        code: `async function addStudent(name, marks) {
  const result = await pool.query(
    "INSERT INTO students (name, marks) VALUES ($1, $2) RETURNING *",
    [name, marks]
  );
  return result.rows[0];
}

async function topStudents() {
  const res = await pool.query(
    "SELECT name, marks FROM students WHERE marks >= 90 ORDER BY marks DESC"
  );
  return res.rows;
}`,
        output: 'Inserted row returned; top students ordered by marks'
      },
      {
        title: 'Why Parameters Matter (Security)',
        code: `// DANGEROUS - never do this:
// const q = "SELECT * FROM users WHERE name = '" + input + "'";
// input = "'; DROP TABLE users; --"   <- data destroyed

// SAFE - parameterized:
const safe = await pool.query(
  "SELECT * FROM users WHERE name = $1",
  ["'; DROP TABLE users; --"]
);
console.log("Parameter stays data, never becomes code");`,
        output: 'Parameter stays data, never becomes code'
      }
    ],
    keyPoints: [
      'npm install pg (PostgreSQL) or mongodb - one driver per database.',
      'ALWAYS parameterized queries ($1, $2) - they block SQL injection.',
      'Use pools, not one connection per request.'
    ],
    commonMistakes: [
      'Building queries with + and user input - the #1 database security hole.',
      'Forgetting await on queries - you get a Promise, not rows.'
    ],
    proTips: [
      'SQL knowledge transfers: PostgreSQL, MySQL, SQLite all share the basics.',
      'Practice free with Neon.tech or Supabase - no local install needed.'
    ]
  },

  security: {
    definition: 'Backend security means protecting data and users: hashing passwords, validating input, keeping secrets in environment variables, and using HTTPS.',
    whyUse: 'A single breach ends user trust and can break laws (GDPR). Breaches almost always come from the classics: plaintext passwords, injected queries, leaked API keys in git. These protections are quick to add, and interviewers and auditors both ask about them constantly.',
    whereUse: null,
    syntax: null,
    explanation: 'Hash passwords with bcrypt/argon2 (never store raw passwords). Validate and sanitize every input (express-validator). Keep secrets in .env - and .gitignore it. Use HTTPS in production (TLS encrypts traffic). Set security headers with helmet. Rate limiting blocks brute force. Never trust the client: re-check permissions on the server.',
    examples: [
      {
        title: 'Hash Passwords (Never Store Plain Text)',
        code: `const bcrypt = require("bcrypt");

async function example() {
  const hash = await bcrypt.hash("mySecret123", 10);
  console.log("Stored:", hash.slice(0, 30) + "...");

  const ok = await bcrypt.compare("mySecret123", hash);
  console.log("Login ok?", ok);

  const bad = await bcrypt.compare("wrongPassword", hash);
  console.log("Wrong password ok?", bad);
}
example();`,
        output: 'Stored: $2b$10$N9qo8uLOickgx2ZMR...\nLogin ok? true\nWrong password ok? false'
      },
      {
        title: 'Validate Input Before Using It',
        code: `function validateUser(body) {
  const errors = [];
  if (!body.email || !body.email.includes("@")) errors.push("Valid email required");
  if (!body.password || body.password.length < 8) errors.push("Password needs 8+ chars");
  return errors;
}

console.log(validateUser({ email: "a@b.com", password: "longenough" }));
console.log(validateUser({ email: "nope", password: "123" }));`,
        output: '[]\n[ \'Valid email required\', \'Password needs 8+ chars\' ]'
      },
      {
        title: 'Secrets in Environment Variables',
        code: `// .gitignore must contain:  .env
// .env (local only):  JWT_SECRET=super-random-value

const secret = process.env.JWT_SECRET;
if (!secret) {
  console.log("FATAL: JWT_SECRET missing - refusing to start");
} else {
  console.log("Secret loaded from env, never committed to git");
}`,
        output: 'Secret loaded from env, never committed to git'
      }
    ],
    keyPoints: [
      'Hash passwords (bcrypt/argon2) - never store or log plain passwords.',
      'Validate ALL input on the server - the client cannot be trusted.',
      'Secrets live in env vars, .gitignore .env, use HTTPS in production.'
    ],
    commonMistakes: [
      'Using MD5/SHA1 for passwords - they are too fast to crack.',
      'Committing .env to git - rotate the keys immediately if it happens.'
    ],
    proTips: [
      'npm audit checks your dependencies for known vulnerabilities.',
      'Add helmet + express-rate-limit to every Express app in ten minutes.'
    ]
  },

  testing: {
    definition: 'Testing runs your code automatically and checks the results, catching bugs before users do. Node has a built-in test runner (node:test) and popular frameworks like Jest and Vitest.',
    whyUse: 'Without tests, every small change risks breaking something far away - teams deploy slowly and fear their own code. Tests document how code should behave and let you refactor confidently. Test-driven work is expected in professional teams and makes take-home assignments much easier to pass.',
    whereUse: null,
    syntax: null,
    explanation: 'A test asserts: given this input, expect this output. The AAA pattern: Arrange (setup), Act (run the function), Assert (check). Node\'s built-in runner needs no install: node --test. Tests cover units (single functions), integration (routes + database), and end-to-end (full user flows). Aim to cover critical paths, not 100% numbers.',
    examples: [
      {
        title: 'Built-in Node Test Runner',
        code: `// File: math.test.js
const { test } = require("node:test");
const assert = require("node:assert");

const add = (a, b) => a + b;

test("adds two numbers", () => {
  assert.strictEqual(add(2, 3), 5);
  assert.strictEqual(add(-1, 1), 0);
});

// Terminal: node --test`,
        output: '✔ adds two numbers\nℹ tests 1\nℹ pass 1'
      },
      {
        title: 'Testing a Real Function',
        code: `const assert = require("node:assert");

function gradeOf(marks) {
  if (marks < 0 || marks > 100) throw new Error("Invalid marks");
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 60) return "C";
  return "D";
}

assert.strictEqual(gradeOf(95), "A");
assert.strictEqual(gradeOf(80), "B");
assert.throws(() => gradeOf(120), /Invalid marks/);
console.log("All assertions passed - grade logic is solid");`,
        output: 'All assertions passed - grade logic is solid'
      },
      {
        title: 'Testing an Async Function',
        code: `const assert = require("node:assert");

async function fetchPrice(id) {
  if (id <= 0) throw new Error("bad id");
  return id * 100;
}

(async () => {
  assert.strictEqual(await fetchPrice(2), 200);
  await assert.rejects(() => fetchPrice(0), /bad id/);
  console.log("Async tests passed");
})();`,
        output: 'Async tests passed'
      }
    ],
    keyPoints: [
      'node --test runs tests with zero setup - Node has it built in.',
      'assert.strictEqual checks values; assert.throws checks errors.',
      'Test the boundaries: 0, empty, negative, too large.'
    ],
    commonMistakes: [
      'Only testing the happy path - bugs hide at the edges.',
      'Writing tests tied to implementation details - test behavior, not internals.'
    ],
    proTips: [
      'Write the test first for tricky logic (gradients, parsers, money math).',
      'Add npm test script and run tests in CI before every deploy.'
    ]
  },

  performance: {
    definition: 'Node performance means keeping the event loop free: never let slow CPU work block it, batch wisely, cache what repeats, and measure before optimizing.',
    whyUse: 'One blocked event loop freezes ALL users of that process - unlike threaded servers where only one request suffers. Node\'s speed advantage disappears the moment you block it. Knowing these patterns is what separates junior code that "works on my machine" from services that handle real traffic.',
    whereUse: null,
    syntax: null,
    explanation: 'The event loop processes one task at a time - heavy synchronous work (big JSON.parse of 50 MB, image resizing, complex math) stalls everyone. Solutions: move heavy work to worker threads or a separate service, keep handlers async, use streaming for large data, cache repeated work (in-memory Map or Redis), and profile with clinic.js or --prof.',
    examples: [
      {
        title: 'Sync Work Blocks Everyone',
        code: `function busyWait(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}   // blocks the loop completely
}

console.log("start");
busyWait(500);                  // NO other request can run now
console.log("end - all users waited 500ms");`,
        output: 'start\nend - all users waited 500ms'
      },
      {
        title: 'Async Alternative Keeps Serving',
        code: `const wait = ms => new Promise(r => setTimeout(r, ms));

async function main() {
  console.log("request A started");
  const a = wait(100);                 // starts, does not block
  console.log("request B served meanwhile");   // runs instantly
  await a;
  console.log("request A finished");
}
main();`,
        output: 'request A started\nrequest B served meanwhile\nrequest A finished'
      },
      {
        title: 'Memoize Repeated Work',
        code: `function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);   // instant
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const slowSquare = memoize(n => { console.log("computing..."); return n * n; });
slowSquare(9);   // computes
slowSquare(9);   // from cache
console.log(slowSquare(9));`,
        output: 'computing...\ncomputing...\n81'
      }
    ],
    keyPoints: [
      'Never block the event loop with heavy synchronous CPU work.',
      'async/await + setTimeout-style waiting keeps the server responsive.',
      'Measure first: optimize only what profiling proves is slow.'
    ],
    commonMistakes: [
      'Parsing gigantic JSON synchronously inside a request handler.',
      'Optimizing micro-details while never profiling - wasted effort.'
    ],
    proTips: [
      'Rule: if a task takes > 50 ms of CPU, move it off the main loop (worker_threads or a queue).',
      'clinic.js and node --prof produce flame graphs that show hotspots.'
    ]
  },

  deploy: {
    definition: 'Deployment puts your Node app on a public server so users can reach it 24/7 - with the right environment, start command, and monitoring.',
    whyUse: 'Code that only runs on your laptop helps nobody. Modern deployment is nearly free (Vercel, Render, Railway, Fly.io offer generous tiers), and knowing the process - build, env vars, port, logs - is required for every backend role. Your course project becomes a live URL you can share.',
    whereUse: null,
    syntax: null,
    explanation: 'Steps: (1) push code to GitHub; (2) pick a platform - Vercel/Render/Railway for easy Node hosting, a VPS with PM2 for full control; (3) set environment variables in the dashboard (never in code); (4) the platform runs your start script (e.g. npm start); (5) your server must listen on process.env.PORT; (6) check logs and health endpoint. process.env.NODE_ENV=production turns on optimizations.',
    examples: [
      {
        title: 'Server Ready for Any Host',
        code: `const express = require("express");
const app = express();

app.get("/health", (req, res) => res.json({ status: "ok" }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on " + port));`,
        output: 'Listening on 3000\n(GET /health -> {"status":"ok"})'
      },
      {
        title: 'Deployment Checklist',
        code: `# 1. Push to GitHub
git add . && git commit -m "api ready" && git push

# 2. In the platform dashboard (Vercel/Render/Railway):
#    Build command: npm install
#    Start command: npm start
#    Env vars:      DATABASE_URL, JWT_SECRET

# 3. Check it is alive
curl https://your-app.onrender.com/health`,
        output: '{"status":"ok"}'
      },
      {
        title: 'Process Managers (VPS Style)',
        code: `# On a server with PM2:
npm install -g pm2
pm2 start server.js --name my-api
pm2 status              # running?
pm2 logs my-api         # tail logs
pm2 restart my-api      # after a fix
pm2 save && pm2 startup # survive reboots`,
        output: 'my-api online (restarts automatically on crash)'
      }
    ],
    keyPoints: [
      'Listen on process.env.PORT - hosts assign the port.',
      'Env vars live in the platform dashboard, never in git.',
      'A /health endpoint makes monitoring trivial.'
    ],
    commonMistakes: [
      'Hardcoding port 3000 - Vercel/Render need their assigned PORT.',
      'Committing .env files - secrets leak and must be rotated.'
    ],
    proTips: [
      'Vercel deploys straight from GitHub - push = deploy.',
      'Check logs first when something breaks: pm2 logs or the platform dashboard.'
    ]
  },

  project: {
    definition: 'The final project: a complete REST API with Express - routes, validation, database-style storage, tests, and a deployable structure.',
    whyUse: 'This is the artifact that gets interviews: a working API with clean structure you can demo and defend. It exercises everything in this course - modules, async code, HTTP, validation, testing. Deploying it gives you a live URL to put on your resume and your GitHub profile.',
    whereUse: null,
    syntax: null,
    explanation: 'Plan first: a Students API with GET /api/students (list + filter), GET /api/students/:id, POST /api/students (validated), PUT (update), DELETE. Structure: server.js (setup only), routes/students.js (routes), store.js (data layer), tests/students.test.js. Data can start in memory (array) and move to PostgreSQL later.',
    examples: [
      {
        title: 'Step 1: Server Skeleton',
        code: `// server.js
const express = require("express");
const students = require("./routes/students");

const app = express();
app.use(express.json());
app.use("/api/students", students);
app.use((req, res) => res.status(404).json({ error: "Not found" }));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("API on " + port));`,
        output: 'API on 3000'
      },
      {
        title: 'Step 2: Routes with Validation',
        code: `// routes/students.js
const router = require("express").Router();
let db = [];                       // in-memory store
let nextId = 1;

router.get("/", (req, res) => {
  let list = db;
  if (req.query.min) {
    list = db.filter(s => s.marks >= Number(req.query.min));
  }
  res.json(list);
});

router.post("/", (req, res) => {
  const { name, marks } = req.body;
  if (!name) return res.status(400).json({ error: "name required" });
  if (typeof marks !== "number") return res.status(400).json({ error: "marks must be a number" });
  const student = { id: nextId++, name, marks };
  db.push(student);
  res.status(201).json(student);
});

module.exports = router;`,
        output: 'POST 201 {"id":1,"name":"Anita","marks":92}'
      },
      {
        title: 'Step 3: Test It and Ship It',
        code: `// tests/students.test.js (node --test)
const { test } = require("node:test");
const assert = require("node:assert");

test("rejects missing name", async () => {
  const res = await fetch("http://localhost:3000/api/students", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ marks: 92 })
  });
  assert.strictEqual(res.status, 400);
});

// Your checklist:
// [ ] All 5 CRUD routes work (test with curl or Postman)
// [ ] Validation rejects bad input with 400
// [ ] Tests pass: npm test
// [ ] Deployed with a /health endpoint
// [ ] README: how to run, endpoints, sample requests`,
        output: '✔ rejects missing name\nAPI ready to deploy'
      }
    ],
    keyPoints: [
      'Separate server, routes, and data - never one giant file.',
      'Validate every input and return proper status codes.',
      'Finish: tests + README + a live deployment URL.'
    ],
    commonMistakes: [
      'Returning 200 for everything - 400/404/500 tell clients the truth.',
      'Building it all in one sitting without testing each route as you go.'
    ],
    proTips: [
      'Test with curl/Postman while building - do not wait until the end.',
      'Then extend it: add a PostgreSQL store and auth - that becomes a portfolio centerpiece.'
    ]
  }
}

export default nodejs
