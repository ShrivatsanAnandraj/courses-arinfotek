const javascript = {
  intro: {
    definition: 'JavaScript is the language of the web. It makes websites interactive — from button clicks to dynamic content updates.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'JavaScript runs in every web browser and on servers via Node.js. You write it once and it works almost everywhere. Start with console.log to see output — that\'s your best friend for learning.',
    examples: [
      { title: 'Hello World', code: 'console.log("Hello, World!")', output: 'Hello, World!' },
      { title: 'Single Line Comment', code: '// This is a comment\nconsole.log("Comments are ignored")', output: 'Comments are ignored' },
      { title: 'Multi-line Comment', code: '/* This is a\nmulti-line comment */\nconsole.log("Still works")', output: 'Still works' },
      { title: 'Semicolon Usage', code: 'let x = 5; let y = 10; console.log(x + y)', output: '15' }
    ],
    keyPoints: ['JavaScript is case-sensitive.', 'Semicolons are optional but recommended.', 'Code runs line by line from top to bottom.'],
    commonMistakes: ['Mixing up = (assignment) and === (comparison).', 'Using var instead of let/const in modern code.'],
    proTips: ['Always use const by default, let when you need to reassign.', 'Use a linter like ESLint to catch errors early.']
  },
  setup: {
    definition: 'You can run JavaScript right in your browser — no installation needed. Open the console and start typing.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Open your browser, press F12, and click the Console tab. That\'s your playground. For bigger projects, use Node.js to run JS files from the terminal.',
    examples: [
      { title: 'Browser Console', code: 'console.log("Run this in browser console!")', output: 'Run this in browser console!' },
      { title: 'HTML Script Tag', code: '<script>\n  console.log("Embedded in HTML")\n</script>', output: 'Embedded in HTML' },
      { title: 'Node.js Run', code: '// Save as app.js then run: node app.js\nconsole.log("Running with Node.js")', output: 'Running with Node.js' },
      { title: 'Check Node Version', code: '// Run in terminal: node --version\nconsole.log("Node.js is installed")', output: 'Node.js is installed' }
    ],
    keyPoints: ['Browser JS and Node.js have different APIs.', 'Use browser console for quick experimentation.', 'Node.js uses modules (CommonJS or ES modules).'],
    commonMistakes: ['Using browser-only APIs like document in Node.js.', 'Not installing Node.js before trying to run scripts.'],
    proTips: ['Use VS Code with JavaScript extensions for better IDE support.', 'Use nodemon for automatic restart during development.']
  },
  variables: {
    definition: 'Variables store data values. Use const for constants and let when you need to change a value later.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Use const by default — it prevents accidental reassignment. Use let when you know the value will change. Avoid var — it has confusing scoping behavior that causes bugs.',
    examples: [
      { title: 'Const Declaration', code: 'const name = "Alice";\nconsole.log(name)', output: 'Alice' },
      { title: 'Let Declaration', code: 'let age = 25;\nage = 26;\nconsole.log(age)', output: '26' },
      { title: 'Var Declaration', code: 'var city = "New York";\nconsole.log(city)', output: 'New York' },
      { title: 'Multiple Declarations', code: 'let x = 1, y = 2, z = 3;\nconsole.log(x + y + z)', output: '6' },
      { title: 'Uninitialized Variable', code: 'let result;\nconsole.log(result)', output: 'undefined' }
    ],
    keyPoints: ['const cannot be reassigned but objects/arrays can be mutated.', 'let is block-scoped, var is function-scoped.', 'Use descriptive variable names in camelCase.'],
    commonMistakes: ['Reassigning a const variable causes an error.', 'Using var can lead to scoping bugs.'],
    proTips: ['Use const by default, let only when needed.', 'Name variables with camelCase convention.']
  },
  types: {
    definition: 'JavaScript has 7 primitive types and reference types. Knowing types helps you avoid weird bugs.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Use typeof to check a value\'s type. Primitives (string, number, boolean, null, undefined, symbol, bigint) are immutable. Objects, arrays, and functions are reference types stored differently in memory.',
    examples: [
      { title: 'String Type', code: 'let str = "Hello";\nconsole.log(typeof str)', output: 'string' },
      { title: 'Number Type', code: 'let num = 42;\nconsole.log(typeof num)', output: 'number' },
      { title: 'Boolean Type', code: 'let bool = true;\nconsole.log(typeof bool)', output: 'boolean' },
      { title: 'Undefined Type', code: 'let undef;\nconsole.log(typeof undef)', output: 'undefined' },
      { title: 'Object Type', code: 'let obj = { name: "test" };\nconsole.log(typeof obj)', output: 'object' }
    ],
    keyPoints: ['typeof returns a string indicating the type.', 'typeof null returns "object" — that\'s a historical bug.', 'Use Array.isArray() to check for arrays.'],
    commonMistakes: ['typeof null returns "object", not null.', 'typeof [] returns "object" — use Array.isArray().', 'NaN is of type number.'],
    proTips: ['Use === (strict equality) to avoid type coercion.', 'Check for null and undefined separately.']
  },
  strings: {
    definition: 'Strings are text data. You can create them with quotes or backticks, and JavaScript gives you tons of methods to work with them.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Template literals (backticks) let you embed variables directly with ${expression} and create multi-line strings. Strings are immutable — methods like toUpperCase() return new strings, they don\'t change the original.',
    examples: [
      { title: 'Template Literal', code: 'let name = "Alice";\nconsole.log(`Hello, ${name}!`)', output: 'Hello, Alice!' },
      { title: 'String Length', code: 'let str = "JavaScript";\nconsole.log(str.length)', output: '10' },
      { title: 'String Methods', code: 'let str = "Hello World";\nconsole.log(str.toUpperCase())', output: 'HELLO WORLD' },
      { title: 'String Slicing', code: 'let str = "abcdef";\nconsole.log(str.slice(1, 4))', output: 'bcd' },
      { title: 'String Split', code: 'let str = "a,b,c";\nconsole.log(str.split(","))', output: '[ \'a\', \'b\', \'c\' ]' }
    ],
    keyPoints: ['Template literals use backticks and ${} for interpolation.', 'Strings are immutable — methods return new strings.', 'Use includes() to check if a string contains text.'],
    commonMistakes: ['Cannot change a character directly: str[0] = "x" does not work.', 'Forgetting template literals need backticks, not quotes.'],
    proTips: ['Use template literals for complex string building.', 'Chain string methods for clean transformations.']
  },
  operators: {
    definition: 'Operators do the work — math, comparisons, logic. They\'re the building blocks of every expression.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Arithmetic operators (+, -, *, /, %, **) do math. Comparison operators (==, ===, !=, !==) return booleans. Always use === for strict comparison — it checks both value AND type.',
    examples: [
      { title: 'Arithmetic Operators', code: 'console.log(10 + 5);   // addition\nconsole.log(10 - 5);   // subtraction\nconsole.log(10 * 5);   // multiplication\nconsole.log(10 / 5);   // division\nconsole.log(10 % 3);   // modulus\nconsole.log(2 ** 3);   // exponent', output: '15\n5\n50\n2\n1\n8' },
      { title: 'Strict vs Loose Equality', code: 'console.log(5 == "5");   // loose\nconsole.log(5 === "5");  // strict\nconsole.log(5 != "5");   // loose\nconsole.log(5 !== "5");  // strict', output: 'true\nfalse\nfalse\ntrue' },
      { title: 'Logical Operators', code: 'let a = true, b = false;\nconsole.log(a && b);   // AND\nconsole.log(a || b);   // OR\nconsole.log(!a);        // NOT', output: 'false\ntrue\nfalse' },
      { title: 'Nullish Coalescing', code: 'let val1 = null;\nlet val2 = "default";\nconsole.log(val1 ?? val2)', output: 'default' },
      { title: 'Ternary Operator', code: 'let age = 20;\nlet status = age >= 18 ? "adult" : "minor";\nconsole.log(status)', output: 'adult' }
    ],
    keyPoints: ['Always use === for comparisons to avoid type coercion.', '?? (nullish coalescing) only checks null/undefined.', '|| returns the first truthy value.'],
    commonMistakes: ['Using = instead of === for comparison.', 'Not understanding truthy/falsy values with ||.'],
    proTips: ['Use ?? instead of || when you want to handle only null/undefined.', 'Remember: 0, "", null, undefined, NaN, false are falsy.']
  },
  conditionals: {
    definition: 'Conditionals let your code make decisions — run this code if that condition is true.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'if/else if/else chains evaluate conditions in order and run the first matching block. switch matches exact values — remember to use break. The ternary operator is a one-liner for simple yes/no decisions.',
    examples: [
      { title: 'If-Else', code: 'let score = 85;\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else {\n  console.log("Grade: C");\n}', output: 'Grade: B' },
      { title: 'Switch Statement', code: 'let day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of week");\n    break;\n  case "Friday":\n    console.log("Almost weekend");\n    break;\n  default:\n    console.log("Mid week");\n}', output: 'Start of week' },
      { title: 'Ternary Operator', code: 'let age = 16;\nlet canVote = age >= 18 ? "Yes" : "No";\nconsole.log(canVote)', output: 'No' },
      { title: 'Logical Operators in Conditions', code: 'let temp = 22;\nlet sunny = true;\nif (temp > 20 && sunny) {\n  console.log("Nice weather!");\n}', output: 'Nice weather!' },
      { title: 'Nested Conditions', code: 'let hasTicket = true;\nlet age = 15;\nif (hasTicket) {\n  if (age >= 18) {\n    console.log("Regular entry");\n  } else {\n    console.log("Child entry");\n  }\n} else {\n  console.log("Buy a ticket");\n}', output: 'Child entry' }
    ],
    keyPoints: ['Only the first matching block executes in if/else if chains.', 'Always use break in switch to avoid fall-through.', 'Empty strings, 0, null, undefined, NaN, false are falsy.'],
    commonMistakes: ['Missing break in switch causing fall-through.', 'Using assignment = instead of comparison === in conditions.'],
    proTips: ['Keep conditions simple — extract complex logic to variables.', 'Use early returns to reduce nesting.']
  },
  loops: {
    definition: 'Loops repeat code blocks. JavaScript gives you for, while, and for...of/for...in for different situations.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Use for when you know the count. Use while when the condition determines when to stop. for...of loops over array values, for...in loops over object keys. Most of the time, you can skip loops entirely and use array methods like map and filter.',
    examples: [
      { title: 'For Loop', code: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}', output: '1\n2\n3\n4\n5' },
      { title: 'While Loop', code: 'let count = 0;\nwhile (count < 3) {\n  console.log("Count:", count);\n  count++;\n}', output: 'Count: 0\nCount: 1\nCount: 2' },
      { title: 'For...of Loop', code: 'let fruits = ["apple", "banana", "cherry"];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}', output: 'apple\nbanana\ncherry' },
      { title: 'For...in Loop', code: 'let person = { name: "Alice", age: 25 };\nfor (let key in person) {\n  console.log(`${key}: ${person[key]}`);\n}', output: 'name: Alice\nage: 25' },
      { title: 'Do-While Loop', code: 'let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 3)', output: '0\n1\n2' }
    ],
    keyPoints: ['for...of for array values, for...in for object keys.', 'do-while always executes at least once.', 'Use break to exit early, continue to skip an iteration.'],
    commonMistakes: ['Infinite loops when the exit condition is never met.', 'Using for...in on arrays — use for...of instead.'],
    proTips: ['Use array methods (map, filter, reduce) instead of loops when possible.', 'Always ensure the loop has a termination condition.']
  },
  arrays: {
    definition: 'Arrays are ordered lists. They can hold anything — numbers, strings, objects, even other arrays.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Arrays are zero-indexed — the first item is at index 0. push/pop add and remove from the end. map, filter, and reduce transform arrays without changing the original. Use spread [...] to copy arrays safely.',
    examples: [
      { title: 'Array Creation', code: 'let nums = [1, 2, 3, 4, 5];\nconsole.log(nums);\nconsole.log(nums.length)', output: '[ 1, 2, 3, 4, 5 ]\n5' },
      { title: 'Push and Pop', code: 'let arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);\narr.pop();\nconsole.log(arr)', output: '[ 1, 2, 3, 4 ]\n[ 1, 2, 3 ]' },
      { title: 'Map Method', code: 'let nums = [1, 2, 3];\nlet doubled = nums.map(n => n * 2);\nconsole.log(doubled)', output: '[ 2, 4, 6 ]' },
      { title: 'Filter Method', code: 'let nums = [1, 2, 3, 4, 5];\nlet evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens)', output: '[ 2, 4 ]' },
      { title: 'Reduce Method', code: 'let nums = [1, 2, 3, 4];\nlet sum = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(sum)', output: '10' }
    ],
    keyPoints: ['Arrays are zero-indexed.', 'push/pop modify the original array, map/filter/reduce return new ones.', 'Use spread [...] to copy arrays.'],
    commonMistakes: ['Mutating arrays when you intended to create new ones.', 'Using for...in on arrays instead of for...of.'],
    proTips: ['Use immutable array methods for predictable state.', 'Destructure arrays for clean variable extraction.']
  },
  objects: {
    definition: 'Objects store data as key-value pairs. They\'re how you model real things in code — a user, a product, a config.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Access properties with dot notation (obj.name) or bracket notation (obj["name"]). Use bracket notation when the key is dynamic. Destructuring lets you pull properties into variables in one line.',
    examples: [
      { title: 'Object Creation', code: 'let person = {\n  name: "Alice",\n  age: 25,\n  greet: function() {\n    return `Hi, I am ${this.name}`;\n  }\n};\nconsole.log(person.name)\nconsole.log(person.greet())', output: 'Alice\nHi, I am Alice' },
      { title: 'Adding Properties', code: 'let car = { make: "Toyota" };\ncar.model = "Camry";\ncar.year = 2023;\nconsole.log(car)', output: '{ make: \'Toyota\', model: \'Camry\', year: 2023 }' },
      { title: 'Object Destructuring', code: 'let user = { name: "Bob", age: 30, city: "NYC" };\nlet { name, age } = user;\nconsole.log(name, age)', output: 'Bob 30' },
      { title: 'Object Keys and Values', code: 'let obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.keys(obj));\nconsole.log(Object.values(obj))', output: '[ \'a\', \'b\', \'c\' ]\n[ 1, 2, 3 ]' },
      { title: 'Spread Operator', code: 'let defaults = { color: "red", size: "medium" };\nlet custom = { ...defaults, color: "blue" };\nconsole.log(custom)', output: '{ color: \'blue\', size: \'medium\' }' }
    ],
    keyPoints: ['Use dot notation for known properties, bracket for dynamic keys.', 'Objects are passed by reference.', 'Use spread {...} to shallow copy objects.'],
    commonMistakes: ['Accessing a non-existent property returns undefined, not an error.', 'Using const does not prevent object mutation.'],
    proTips: ['Use destructuring for clean property extraction.', 'Use optional chaining ?. to safely access nested properties.']
  },
  functions: {
    definition: 'Functions are reusable blocks of code. Write once, call many times. They\'re the backbone of organized JavaScript.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Arrow functions (=>) are shorter and don\'t have their own this. Functions can take parameters, return values, and be passed as arguments to other functions. Default parameters give fallback values when arguments are missing.',
    examples: [
      { title: 'Function Declaration', code: 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 5))', output: '8' },
      { title: 'Arrow Function', code: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 6))', output: '24' },
      { title: 'Default Parameters', code: 'function greet(name = "World") {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet())\nconsole.log(greet("Alice"))', output: 'Hello, World!\nHello, Alice!' },
      { title: 'Rest Parameters', code: 'function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4))', output: '10' },
      { title: 'Function Expression', code: 'const square = function(x) {\n  return x * x;\n};\nconsole.log(square(5))', output: '25' }
    ],
    keyPoints: ['Arrow functions do not have their own this.', 'Use default parameters for fallback values.', 'Rest parameters (...args) collect arguments into an array.'],
    commonMistakes: ['Forgetting to return a value.', 'Arrow functions do not bind their own this.'],
    proTips: ['Use arrow functions for short callbacks.', 'Keep functions small and focused on one task.']
  },
  scope: {
    definition: 'Scope determines where a variable can be accessed. Think of it as variable visibility zones.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'let and const are block-scoped — they only exist inside their { } block. var is function-scoped — it leaks outside blocks, which causes bugs. Closures let functions remember variables from their outer scope even after that scope is gone.',
    examples: [
      { title: 'Global Scope', code: 'let globalVar = "I am global";\nfunction showGlobal() {\n  console.log(globalVar);\n}\nshowGlobal()', output: 'I am global' },
      { title: 'Function Scope', code: 'function demo() {\n  let localVar = "I am local";\n  console.log(localVar);\n}\ndemo();\n// console.log(localVar) would error', output: 'I am local' },
      { title: 'Block Scope', code: 'if (true) {\n  let x = 10;\n  var y = 20;\n}\n// console.log(x) would error\nconsole.log(y)', output: '20' },
      { title: 'Scope Chain', code: 'let outer = "outer";\nfunction outerFunc() {\n  let middle = "middle";\n  function innerFunc() {\n    let inner = "inner";\n    console.log(outer, middle, inner);\n  }\n  innerFunc();\n}\nouterFunc()', output: 'outer middle inner' },
      { title: 'Closure', code: 'function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst increment = counter();\nconsole.log(increment());\nconsole.log(increment());\nconsole.log(increment())', output: '1\n2\n3' }
    ],
    keyPoints: ['let/const are block-scoped, var is function-scoped.', 'Inner scopes can access outer scope variables.', 'Closures preserve outer scope variables in functions.'],
    commonMistakes: ['var ignoring block scope boundaries.', 'Accidentally creating global variables.'],
    proTips: ['Use let/const to control variable scope precisely.', 'Leverage closures for data privacy and state management.']
  },
  callbacks: {
    definition: 'A callback is a function you pass to another function to run later. It\'s how JavaScript handles "do this when you\'re done."',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Callbacks are used everywhere — setTimeout, event listeners, array methods like forEach. The function receiving the callback calls it when the work is done. Error-first callbacks pass (error, result) as arguments.',
    examples: [
      { title: 'Basic Callback', code: 'function greet(name, callback) {\n  let greeting = `Hello, ${name}`;\n  callback(greeting);\n}\ngreet("Alice", function(msg) {\n  console.log(msg);\n})', output: 'Hello, Alice' },
      { title: 'Array forEach', code: 'let nums = [1, 2, 3];\nnums.forEach(function(num) {\n  console.log(num * 2);\n})', output: '2\n4\n6' },
      { title: 'setTimeout Callback', code: 'setTimeout(function() {\n  console.log("Executed after 1 second");\n}, 1000)', output: 'Executed after 1 second (after 1s delay)' },
      { title: 'Error-First Callback', code: 'function fetchData(callback) {\n  let error = null;\n  let data = { id: 1, name: "test" };\n  callback(error, data);\n}\nfetchData(function(err, data) {\n  if (err) console.log("Error:", err);\n  else console.log("Data:", data);\n})', output: 'Data: { id: 1, name: \'test\' }' },
      { title: 'Callback with Return', code: 'function process(arr, callback) {\n  return callback(arr);\n}\nlet result = process([1, 2, 3], function(arr) {\n  return arr.map(x => x * 10);\n});\nconsole.log(result)', output: '[ 10, 20, 30 ]' }
    ],
    keyPoints: ['Callbacks are functions passed as arguments.', 'Error-first convention: callback(error, result).', 'Arrow functions make callbacks more concise.'],
    commonMistakes: ['Callback hell — deeply nested callbacks.', 'Not handling errors in async callbacks.'],
    proTips: ['Use Promises or async/await for complex async flows.', 'Keep callbacks shallow and simple.']
  },
  promises: {
    definition: 'Promises represent a future value. They let you handle async operations cleanly instead of nesting callbacks forever.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'A Promise starts pending, then resolves (success) or rejects (failure). Chain .then() for success, .catch() for errors, .finally() for cleanup. Promises can run in parallel with Promise.all().',
    examples: [
      { title: 'Creating a Promise', code: 'const myPromise = new Promise((resolve, reject) => {\n  resolve("Success!");\n});\nmyPromise.then(result => console.log(result))', output: 'Success!' },
      { title: 'Promise Chain', code: 'function double(x) {\n  return new Promise(resolve => {\n    resolve(x * 2);\n  });\n}\ndouble(5)\n  .then(result => double(result))\n  .then(result => console.log(result))', output: '20' },
      { title: 'Promise.all', code: 'const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconst p3 = Promise.resolve(3);\nPromise.all([p1, p2, p3])\n  .then(values => console.log(values))', output: '[ 1, 2, 3 ]' },
      { title: 'Handling Errors', code: 'const failingPromise = new Promise((resolve, reject) => {\n  reject("Something went wrong");\n});\nfailingPromise\n  .catch(error => console.log("Error:", error))', output: 'Error: Something went wrong' },
      { title: 'Promise.race', code: 'const fast = new Promise(resolve =>\n  setTimeout(() => resolve("fast"), 100)\n);\nconst slow = new Promise(resolve =>\n  setTimeout(() => resolve("slow"), 500)\n);\nPromise.race([fast, slow])\n  .then(winner => console.log(winner))', output: 'fast' }
    ],
    keyPoints: ['Promises have three states: pending, fulfilled, rejected.', '.catch() handles errors from .then() as well.', 'Promise.all waits for all, Promise.race returns first.'],
    commonMistakes: ['Not catching promise rejections.', 'Creating promises that never resolve or reject.'],
    proTips: ['Always add .catch() to handle errors.', 'Use Promise.allSettled() when you need all results regardless of success.']
  },
  async: {
    definition: 'async/await makes asynchronous code look synchronous. It\'s the modern way to handle Promises.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Put async before a function to make it return a Promise. Use await inside to pause until a Promise resolves. Wrap await calls in try/catch for error handling. It reads like regular code but works asynchronously.',
    examples: [
      { title: 'Basic Async/Await', code: 'async function greet() {\n  return "Hello, Async!";\n}\ngreet().then(msg => console.log(msg))', output: 'Hello, Async!' },
      { title: 'Await Promise', code: 'function delay(ms) {\n  return new Promise(resolve =>\n    setTimeout(resolve, ms)\n  );\n}\nasync function main() {\n  console.log("Start");\n  await delay(1000);\n  console.log("End");\n}\nmain()', output: 'Start\nEnd (after 1s delay)' },
      { title: 'Error Handling', code: 'async function risky() {\n  try {\n    let result = await Promise.reject("Error!");\n  } catch (err) {\n    console.log("Caught:", err);\n  }\n}\nrisky()', output: 'Caught: Error!' },
      { title: 'Parallel Async', code: 'async function parallel() {\n  const [a, b, c] = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n    Promise.resolve(3)\n  ]);\n  console.log(a, b, c);\n}\nparallel()', output: '1 2 3' },
      { title: 'Sequential vs Parallel', code: 'async function sequential() {\n  const a = await Promise.resolve(1);\n  const b = await Promise.resolve(2);\n  console.log("Sequential:", a, b);\n}\nsequential()', output: 'Sequential: 1 2' }
    ],
    keyPoints: ['async functions always return a Promise.', 'await pauses execution until Promise resolves.', 'Use try/catch for error handling with async/await.'],
    commonMistakes: ['Using await outside an async function.', 'Sequential awaits when parallel would be faster.'],
    proTips: ['Use Promise.all() with await for parallel operations.', 'Top-level await works in ES modules.']
  },
  dom: {
    definition: 'The DOM is your bridge between JavaScript and HTML. It turns the page into a tree of objects you can control.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'The browser creates a DOM tree from your HTML. JavaScript can find elements with querySelector, change their text with textContent, and add styles with classList. Everything happens live in the browser.',
    examples: [
      { title: 'Select Element', code: '// Browser only - shows the pattern\nconst element = document.querySelector("#myId");\nconsole.log(element.tagName)', output: 'DIV (in browser)' },
      { title: 'Change Content', code: '// Browser only - shows the pattern\nconst heading = document.querySelector("h1");\nheading.textContent = "New Title";\nheading.innerHTML = "<em>Bold</em> Title"', output: 'Updates heading in browser' },
      { title: 'Add CSS Class', code: '// Browser only - shows the pattern\nconst btn = document.querySelector("button");\nbtn.classList.add("active");\nbtn.classList.toggle("hidden")', output: 'Modifies button classes' },
      { title: 'Create Element', code: '// Browser only - shows the pattern\nconst div = document.createElement("div");\ndiv.textContent = "I am new!";\ndocument.body.appendChild(div)', output: 'Appends div to body' },
      { title: 'Event Listener', code: '// Browser only - shows the pattern\nconst btn = document.querySelector("button");\nbtn.addEventListener("click", () => {\n  console.log("Button clicked!");\n})', output: 'Logs on button click' }
    ],
    keyPoints: ['DOM manipulation requires a browser environment.', 'querySelector is more versatile than getElementById.', 'textContent is safer than innerHTML (prevents XSS).'],
    commonMistakes: ['Using DOM methods in Node.js (not available).', 'Manipulating DOM before it is loaded.'],
    proTips: ['Use event delegation for performance with many elements.', 'Minimize DOM manipulation — batch updates.']
  },
  events: {
    definition: 'Events are user actions — clicks, key presses, scrolls. JavaScript listens and responds to make pages interactive.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Attach event listeners with addEventListener. The callback receives an event object with info like what was clicked (e.target) and what key was pressed (e.key). Use e.preventDefault() to stop default browser behavior.',
    examples: [
      { title: 'Click Event', code: '// Browser pattern - shows the concept\nconst btn = document.querySelector("button");\nbtn.addEventListener("click", (e) => {\n  console.log("Clicked!", e.target.textContent);\n})', output: 'Fires on button click' },
      { title: 'Keyboard Event', code: '// Browser pattern - shows the concept\ndocument.addEventListener("keydown", (e) => {\n  console.log("Key:", e.key, "Code:", e.code);\n})', output: 'Logs key info on press' },
      { title: 'Form Submit', code: '// Browser pattern - shows the concept\nconst form = document.querySelector("form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  console.log("Form submitted!");\n})', output: 'Prevents default and logs' },
      { title: 'Event Delegation', code: '// Browser pattern - shows the concept\ndocument.querySelector("ul")\n  .addEventListener("click", (e) => {\n    if (e.target.tagName === "LI") {\n      console.log("Clicked:", e.target.textContent);\n    }\n  })', output: 'Handles list item clicks' },
      { title: 'Custom Events', code: '// Browser pattern - shows the concept\nconst event = new CustomEvent("userAction", {\n  detail: { action: "login" }\n});\ndocument.dispatchEvent(event)', output: 'Dispatches custom event' }
    ],
    keyPoints: ['addEventListener is preferred over onclick.', 'use e.preventDefault() to stop default behavior.', 'Event delegation improves performance.'],
    commonMistakes: ['Not removing event listeners causing memory leaks.', 'Not using preventDefault() on forms.'],
    proTips: ['Use event delegation for dynamic content.', 'Use once option for single-fire events.']
  },
  classes: {
    definition: 'Classes are blueprints for creating objects. They bundle data and behavior together in a clean, organized way.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Classes use constructor() to set up new instances. Methods go inside the class body. extends lets a class inherit from another, and super() calls the parent constructor. Private fields (#) keep data hidden.',
    examples: [
      { title: 'Basic Class', code: 'class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  introduce() {\n    return `I am ${this.name}, age ${this.age}`;\n  }\n}\nconst p = new Person("Alice", 25);\nconsole.log(p.introduce())', output: 'I am Alice, age 25' },
      { title: 'Inheritance', code: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    return `${this.name} barks`;\n  }\n}\nconst dog = new Dog("Rex");\nconsole.log(dog.speak())', output: 'Rex barks' },
      { title: 'Static Methods', code: 'class MathHelper {\n  static add(a, b) {\n    return a + b;\n  }\n  static multiply(a, b) {\n    return a * b;\n  }\n}\nconsole.log(MathHelper.add(3, 4))\nconsole.log(MathHelper.multiply(3, 4))', output: '7\n12' },
      { title: 'Getters and Setters', code: 'class Temperature {\n  constructor(celsius) {\n    this._celsius = celsius;\n  }\n  get fahrenheit() {\n    return this._celsius * 9/5 + 32;\n  }\n  set fahrenheit(f) {\n    this._celsius = (f - 32) * 5/9;\n  }\n}\nconst temp = new Temperature(100);\nconsole.log(temp.fahrenheit)', output: '212' },
      { title: 'Private Fields', code: 'class BankAccount {\n  #balance = 0;\n  deposit(amount) {\n    this.#balance += amount;\n  }\n  getBalance() {\n    return this.#balance;\n  }\n}\nconst acc = new BankAccount();\nacc.deposit(1000);\nconsole.log(acc.getBalance())', output: '1000' }
    ],
    keyPoints: ['constructor() is called when creating a new instance.', 'extends creates a subclass that inherits from a parent.', 'Private fields use # prefix.'],
    commonMistakes: ['Forgetting to call super() in subclass constructors.', 'Using this before calling super().'],
    proTips: ['Use private fields for encapsulation.', 'Use static methods for utility functions.']
  },
  modules: {
    definition: 'Modules let you split code into separate files. Export what others need, import what you need — clean and organized.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'ES modules use import/export syntax. Named exports let you export multiple values per file. Default exports are for one main thing per file. Each module has its own scope — nothing leaks to the global namespace.',
    examples: [
      { title: 'Named Export', code: '// math.js\nexport const PI = 3.14159;\nexport function add(a, b) {\n  return a + b;\n}\n\n// app.js\nimport { PI, add } from "./math.js";\nconsole.log(PI, add(2, 3))', output: '3.14159 5' },
      { title: 'Default Export', code: '// logger.js\nexport default function log(msg) {\n  console.log(msg);\n}\n\n// app.js\nimport log from "./logger.js";\nlog("Hello module!")', output: 'Hello module!' },
      { title: 'Import All', code: '// utils.js\nexport function upper(s) { return s.toUpperCase(); }\nexport function lower(s) { return s.toLowerCase(); }\n\n// app.js\nimport * as utils from "./utils.js";\nconsole.log(utils.upper("hello"))', output: 'HELLO' },
      { title: 'Re-exporting', code: '// index.js\nexport { add, subtract } from "./math.js";\nexport { default as multiply } from "./multiply.js";', output: 'Re-exports from other modules' },
      { title: 'Dynamic Import', code: 'async function loadModule() {\n  const module = await import("./heavy-module.js");\n  module.doSomething();\n}\nloadModule()', output: 'Loads module on demand' }
    ],
    keyPoints: ['Every file is a module in ES modules.', 'Modules are always in strict mode.', 'Dynamic import() loads modules asynchronously.'],
    commonMistakes: ['Forgetting to add .js extension in imports.', 'Circular dependencies causing issues.'],
    proTips: ['Use named exports for multiple values.', 'Use dynamic imports for code splitting.']
  },
  json: {
    definition: 'JSON is the universal data format. It\'s how APIs send and receive data — basically a text version of JavaScript objects.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'JSON.stringify() converts a JS object to a JSON string. JSON.parse() converts it back. JSON only supports strings, numbers, booleans, arrays, objects, and null — no functions or undefined.',
    examples: [
      { title: 'Stringify Object', code: 'const obj = { name: "Alice", age: 25 };\nconst json = JSON.stringify(obj);\nconsole.log(json);\nconsole.log(typeof json)', output: '{"name":"Alice","age":25}\nstring' },
      { title: 'Parse JSON', code: 'const json = \'{"name":"Bob","age":30}\';\nconst obj = JSON.parse(json);\nconsole.log(obj.name);\nconsole.log(obj.age)', output: 'Bob\n30' },
      { title: 'Pretty Print', code: 'const data = { name: "test", items: [1, 2, 3] };\nconsole.log(JSON.stringify(data, null, 2))', output: '{\n  "name": "test",\n  "items": [\n    1,\n    2,\n    3\n  ]\n}' },
      { title: 'Replacer Function', code: 'const data = { name: "Alice", age: 25, pass: "secret" };\nconst json = JSON.stringify(data, (key, val) => {\n  if (key === "pass") return undefined;\n  return val;\n});\nconsole.log(json)', output: '{"name":"Alice","age":25}' },
      { title: 'Nested Objects', code: 'const data = {\n  user: { name: "Bob" },\n  scores: [10, 20, 30]\n};\nconst json = JSON.stringify(data);\nconst parsed = JSON.parse(json);\nconsole.log(parsed.user.name)', output: 'Bob' }
    ],
    keyPoints: ['JSON keys must be double-quoted strings.', 'JSON.stringify returns undefined for functions and undefined values.', 'JSON.parse throws on invalid JSON.'],
    commonMistakes: ['Trying to stringify functions or undefined.', 'Forgetting that JSON.parse can throw errors.'],
    proTips: ['Always wrap JSON.parse in try/catch.', 'Use JSON.stringify for quick object debugging.']
  },
  fetch: {
    definition: 'The Fetch API lets you make HTTP requests from JavaScript. It\'s how you talk to servers and APIs.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'fetch() returns a Promise that resolves to a Response object. Call .json() on the response to get the data. fetch only rejects on network errors — you need to check res.ok for HTTP errors like 404 or 500.',
    examples: [
      { title: 'Basic GET Request', code: 'fetch("https://jsonplaceholder.typicode.com/todos/1")\n  .then(res => res.json())\n  .then(data => console.log(data.title))', output: 'delectus aut autem (from API)' },
      { title: 'Async/Await Fetch', code: 'async function getUser() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");\n  const user = await res.json();\n  console.log(user.name);\n}\ngetUser()', output: 'Leanne Graham (from API)' },
      { title: 'POST Request', code: 'fetch("https://jsonplaceholder.typicode.com/posts", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ title: "New Post", body: "Content" })\n})\n.then(res => res.json())\n.then(data => console.log(data.id))', output: '101 (from API)' },
      { title: 'Error Handling', code: 'async function safeFetch(url) {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    return await res.json();\n  } catch (err) {\n    console.log("Error:", err.message);\n  }\n}\nsafeFetch("https://invalid.url")', output: 'Error: Failed to fetch' },
      { title: 'Abort Controller', code: 'const controller = new AbortController();\nsetTimeout(() => controller.abort(), 5000);\n\nfetch("https://jsonplaceholder.typicode.com/posts", {\n  signal: controller.signal\n})\n.then(res => res.json())\n.catch(err => {\n  if (err.name === "AbortError") {\n    console.log("Request aborted");\n  }\n})', output: 'Aborts after 5s if slow' }
    ],
    keyPoints: ['fetch() returns a Promise.', 'Check res.ok before processing the response.', 'Use AbortController for request cancellation.'],
    commonMistakes: ['Not checking res.ok — fetch does not reject on HTTP errors.', 'Forgetting to call .json() on the response.'],
    proTips: ['Always wrap fetch in try/catch with async/await.', 'Use AbortController for timeouts.']
  },
  storage: {
    definition: 'Web Storage lets you save data in the browser. localStorage persists forever, sessionStorage clears when the tab closes.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Both APIs store strings only — use JSON.stringify/parse for objects. localStorage keeps data even after closing the browser. sessionStorage only lasts for the current tab session.',
    examples: [
      { title: 'Store Data', code: '// Browser only - shows the pattern\nlocalStorage.setItem("username", "Alice");\nconst name = localStorage.getItem("username");\nconsole.log(name)', output: 'Alice' },
      { title: 'Store Object', code: '// Browser only - shows the pattern\nconst user = { name: "Bob", age: 30 };\nlocalStorage.setItem("user", JSON.stringify(user));\nconst stored = JSON.parse(localStorage.getItem("user"));\nconsole.log(stored.name)', output: 'Bob' },
      { title: 'Remove and Clear', code: '// Browser only - shows the pattern\nlocalStorage.setItem("temp", "data");\nlocalStorage.removeItem("temp");\nlocalStorage.setItem("a", "1");\nlocalStorage.setItem("b", "2");\nlocalStorage.clear();', output: 'Clears all storage' },
      { title: 'Session Storage', code: '// Browser only - shows the pattern\nsessionStorage.setItem("token", "abc123");\nconsole.log(sessionStorage.getItem("token"))', output: 'abc123' },
      { title: 'Storage Events', code: '// Browser only - shows the pattern\nwindow.addEventListener("storage", (e) => {\n  console.log(`Key: ${e.key}, New: ${e.newValue}`);\n});\nlocalStorage.setItem("test", "value")', output: 'Logs storage changes' }
    ],
    keyPoints: ['localStorage persists across browser sessions.', 'sessionStorage is per-tab only.', 'Both only store strings.'],
    commonMistakes: ['Trying to store objects directly without JSON.stringify.', 'Forgetting to parse JSON when retrieving objects.'],
    proTips: ['Use JSON.stringify/parse for object storage.', 'Wrap storage access in try/catch for quota errors.']
  },
  error: {
    definition: 'Error handling prevents your app from crashing. Try/catch lets you catch problems and recover gracefully.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Wrap risky code in try. If something goes wrong, catch handles the error. finally always runs — useful for cleanup. You can throw your own errors with throw new Error().',
    examples: [
      { title: 'Basic Try/Catch', code: 'try {\n  let result = riskyOperation();\n} catch (error) {\n  console.log("Error:", error.message);\n}', output: 'Error: riskyOperation is not defined' },
      { title: 'Throw Custom Error', code: 'function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Division by zero");\n  }\n  return a / b;\n}\ntry {\n  console.log(divide(10, 0));\n} catch (err) {\n  console.log(err.message);\n}', output: 'Division by zero' },
      { title: 'Finally Block', code: 'function process() {\n  try {\n    console.log("Starting...");\n    throw new Error("Oops!");\n  } catch (err) {\n    console.log("Caught:", err.message);\n  } finally {\n    console.log("Cleanup done");\n  }\n}\nprocess()', output: 'Starting...\nCaught: Oops!\nCleanup done' },
      { title: 'Custom Error Classes', code: 'class ValidationError extends Error {\n  constructor(field, message) {\n    super(message);\n    this.field = field;\n    this.name = "ValidationError";\n  }\n}\ntry {\n  throw new ValidationError("email", "Invalid email");\n} catch (err) {\n  console.log(`${err.name}: ${err.field} - ${err.message}`);\n}', output: 'ValidationError: email - Invalid email' },
      { title: 'Async Error Handling', code: 'async function fetchData() {\n  try {\n    const res = await fetch("https://invalid.url");\n    return await res.json();\n  } catch (err) {\n    console.log("Fetch failed:", err.message);\n  }\n}\nfetchData()', output: 'Fetch failed: Failed to fetch' }
    ],
    keyPoints: ['try/catch does not catch syntax errors.', 'finally always executes even with return.', 'Async errors need try/catch with async/await.'],
    commonMistakes: ['Empty catch blocks swallowing errors.', 'Not re-throwing errors when needed.'],
    proTips: ['Always log errors for debugging.', 'Use custom error classes for specific error types.']
  },
  regex: {
    definition: 'Regular expressions are patterns for matching text. They validate emails, extract numbers, and find patterns in strings.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Create regex with /pattern/flags or new RegExp(). test() returns true/false. match() returns the matches. Common patterns: \\d (digit), \\w (word), . (any char), * (zero or more), + (one or more).',
    examples: [
      { title: 'Test Match', code: 'const pattern = /hello/i;\nconsole.log(pattern.test("Hello World"));\nconsole.log(pattern.test("Goodbye"))', output: 'true\nfalse' },
      { title: 'Match Method', code: 'const str = "The year is 2024";\nconst matches = str.match(/\\d+/g);\nconsole.log(matches)', output: '[ \'2024\' ]' },
      { title: 'Replace with Regex', code: 'const str = "Hello World 123";\nconst result = str.replace(/\\d+/g, "NUM");\nconsole.log(result)', output: 'Hello World NUM' },
      { title: 'Email Validation', code: 'const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconsole.log(emailPattern.test("user@example.com"));\nconsole.log(emailPattern.test("invalid-email"));\nconsole.log(emailPattern.test("test@.com"))', output: 'true\nfalse\nfalse' },
      { title: 'Capture Groups', code: 'const str = "2024-01-15";\nconst match = str.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(match[1], match[2], match[3])', output: '2024 01 15' }
    ],
    keyPoints: ['test() returns boolean, match() returns array or null.', 'Use g flag for global matching.', 'Groups use parentheses ().'],
    commonMistakes: ['Forgetting to escape special characters.', 'Greedy vs lazy matching surprises.'],
    proTips: ['Use online regex testers for debugging.', 'Use regex for complex patterns, indexOf for simple searches.']
  },
  iterators: {
    definition: 'Iterators define how to loop through data. Generators (function*) create custom iterators with yield.',
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: 'Generators use yield to pause and resume. Each call to next() returns { value, done }. They\'re lazy — values are produced on demand, which is great for large or infinite sequences.',
    examples: [
      { title: 'Generator Function', code: 'function* count() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = count();\nconsole.log(gen.next());\nconsole.log(gen.next());\nconsole.log(gen.next());\nconsole.log(gen.next())', output: '{ value: 1, done: false }\n{ value: 2, done: false }\n{ value: 3, done: false }\n{ value: undefined, done: true }' },
      { title: 'For...of with Generator', code: 'function* range(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield i;\n  }\n}\nfor (let num of range(1, 5)) {\n  console.log(num);\n}', output: '1\n2\n3\n4\n5' },
      { title: 'Generator with Return', code: 'function* fibonacci() {\n  let a = 0, b = 1;\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\nconst fib = fibonacci();\nconsole.log(fib.next().value);\nconsole.log(fib.next().value);\nconsole.log(fib.next().value);\nconsole.log(fib.next().value)', output: '0\n1\n1\n2' },
      { title: 'Custom Iterable', code: 'class Range {\n  constructor(start, end) {\n    this.start = start;\n    this.end = end;\n  }\n  [Symbol.iterator]() {\n    let current = this.start;\n    const end = this.end;\n    return {\n      next() {\n        if (current <= end) {\n          return { value: current++, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n}\nfor (let num of new Range(1, 4)) {\n  console.log(num);\n}', output: '1\n2\n3\n4' },
      { title: 'Generator as Iterator', code: 'function* powers(base) {\n  let exponent = 0;\n  while (true) {\n    yield Math.pow(base, exponent++);\n  }\n}\nconst powersOf2 = powers(2);\nconsole.log(powersOf2.next().value);\nconsole.log(powersOf2.next().value);\nconsole.log(powersOf2.next().value);\nconsole.log(powersOf2.next().value)', output: '1\n2\n4\n8' }
    ],
    keyPoints: ['Generators use function* and yield.', 'next() returns { value, done }.', 'Generators are lazy — they produce values on demand.'],
    commonMistakes: ['Confusing yield with return (yield pauses, return ends).', 'Not consuming all generator values.'],
    proTips: ['Use generators for lazy evaluation of large datasets.', 'Use yield* to delegate to another generator.']
  }
}

export default javascript
