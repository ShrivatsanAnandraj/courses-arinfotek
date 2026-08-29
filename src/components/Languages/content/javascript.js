const javascript = {
  intro: {
    definition: 'JavaScript is a high-level, interpreted programming language primarily used for creating interactive and dynamic content on websites. It runs in web browsers and on servers (via Node.js).',
    whyUse: 'JavaScript enables interactivity on websites, supports object-oriented and functional programming, has a massive ecosystem (npm), and runs on both client and server.',
    whereUse: 'Web development (frontend and backend), mobile app development (React Native), desktop applications (Electron), game development, and IoT.',
    syntax: null,
    explanation: 'JavaScript uses C-style syntax with curly braces for blocks and semicolons to end statements. Variables are declared with let, const, or var. Functions can be declared, expressed, or arrow functions.',
    examples: [
      { title: 'Hello World', code: 'console.log("Hello, World!")', output: 'Hello, World!' },
      { title: 'Single Line Comment', code: '// This is a comment\nconsole.log("Comments are ignored")', output: 'Comments are ignored' },
      { title: 'Multi-line Comment', code: '/* This is a\nmulti-line comment */\nconsole.log("Still works")', output: 'Still works' },
      { title: 'Semicolon Usage', code: 'let x = 5; let y = 10; console.log(x + y)', output: '15' }
    ],
    keyPoints: ['JavaScript is case-sensitive', 'Semicolons are optional but recommended', 'Comments use // or /* */', 'Code runs line by line from top to bottom'],
    commonMistakes: ['Forgetting semicolons can cause unexpected behavior', 'Mixing up = (assignment) and === (comparison)', 'Using var instead of let/const in modern code'],
    proTips: ['Always use const by default, let when reassignment is needed', 'Use a linter like ESLint to catch errors early', 'Learn both browser JS and Node.js basics']
  },
  setup: {
    definition: 'Setting up JavaScript involves either using a browser console, embedding scripts in HTML, or setting up a Node.js environment for server-side development.',
    whyUse: 'Proper setup allows you to run, test, and debug JavaScript code efficiently in different environments.',
    whereUse: 'Browser console for quick tests, HTML script tags for web pages, Node.js for server-side and CLI applications.',
    syntax: null,
    explanation: 'JavaScript can be run directly in browser developer tools (Console tab), embedded in HTML with script tags, or executed via Node.js runtime. For Node.js, you need to install it from nodejs.org.',
    examples: [
      { title: 'Browser Console', code: 'console.log("Run this in browser console!")', output: 'Run this in browser console!' },
      { title: 'HTML Script Tag', code: '<script>\n  console.log("Embedded in HTML")\n</script>', output: 'Embedded in HTML' },
      { title: 'Node.js Run', code: '// Save as app.js then run: node app.js\nconsole.log("Running with Node.js")', output: 'Running with Node.js' },
      { title: 'Check Node Version', code: '// Run in terminal: node --version\nconsole.log("Node.js is installed")', output: 'Node.js is installed' }
    ],
    keyPoints: ['Browser JS and Node.js have different APIs', 'Node.js provides access to file system and network', 'Use browser console for quick experimentation', 'Node.js uses modules (CommonJS or ES modules)'],
    commonMistakes: ['Using browser-only APIs like document in Node.js', 'Not installing Node.js before trying to run scripts', 'Forgetting to save the file before running'],
    proTips: ['Use VS Code with JavaScript extensions for better IDE support', 'Install Node.js LTS version for stability', 'Use nodemon for automatic restart during development']
  },
  variables: {
    definition: 'Variables are named containers that store data values. JavaScript provides three ways to declare variables: var, let, and const.',
    whyUse: 'Variables allow you to store, retrieve, and manipulate data throughout your program.',
    whereUse: 'Everywhere in JavaScript - storing user input, calculations, configuration values, function results, etc.',
    syntax: 'let variableName = value;\nconst variableName = value;\nvar variableName = value;',
    explanation: 'const creates a variable that cannot be reassigned (but objects/arrays can still be mutated). let creates a block-scoped variable that can be reassigned. var is function-scoped and hoisted - avoid using it in modern code.',
    examples: [
      { title: 'Const Declaration', code: 'const name = "Alice";\nconsole.log(name)', output: 'Alice' },
      { title: 'Let Declaration', code: 'let age = 25;\nage = 26;\nconsole.log(age)', output: '26' },
      { title: 'Var Declaration', code: 'var city = "New York";\nconsole.log(city)', output: 'New York' },
      { title: 'Multiple Declarations', code: 'let x = 1, y = 2, z = 3;\nconsole.log(x + y + z)', output: '6' },
      { title: 'Uninitialized Variable', code: 'let result;\nconsole.log(result)', output: 'undefined' }
    ],
    keyPoints: ['const cannot be reassigned but objects/arrays can be mutated', 'let is block-scoped, var is function-scoped', 'Always initialize variables when possible', 'Use descriptive variable names'],
    commonMistakes: ['Reassigning a const variable causes an error', 'Using var can lead to scoping bugs', 'Declaring the same variable twice with let in the same scope'],
    proTips: ['Use const by default, let only when needed', 'Avoid var in modern JavaScript', 'Name variables with camelCase convention']
  },
  types: {
    definition: 'JavaScript has primitive types (string, number, boolean, null, undefined, symbol, bigint) and reference types (object, array, function).',
    whyUse: 'Understanding types helps you write correct code and avoid unexpected behavior from type coercion.',
    whereUse: 'Data validation, type checking, conditional logic, API responses, database operations.',
    syntax: 'typeof variableName',
    explanation: 'Primitive values are immutable and stored by value. Reference types (objects, arrays, functions) are stored by reference. JavaScript is dynamically typed - variables can hold any type.',
    examples: [
      { title: 'String Type', code: 'let str = "Hello";\nconsole.log(typeof str)', output: 'string' },
      { title: 'Number Type', code: 'let num = 42;\nconsole.log(typeof num)', output: 'number' },
      { title: 'Boolean Type', code: 'let bool = true;\nconsole.log(typeof bool)', output: 'boolean' },
      { title: 'Undefined Type', code: 'let undef;\nconsole.log(typeof undef)', output: 'undefined' },
      { title: 'Object Type', code: 'let obj = { name: "test" };\nconsole.log(typeof obj)', output: 'object' }
    ],
    keyPoints: ['typeof returns a string indicating the type', 'null typeof returns "object" (historical bug)', 'Arrays are objects - typeof [] returns "object"', 'Use Array.isArray() to check for arrays'],
    commonMistakes: ['typeof null returns "object" - not null', 'typeof [] returns "object" - use Array.isArray()', 'NaN is of type number', 'typeof undefined returns "undefined"'],
    proTips: ['Use === (strict equality) to avoid type coercion', 'Check for null and undefined separately', 'Use Array.isArray() for array checking']
  },
  strings: {
    definition: 'Strings represent textual data. They can be created with single quotes, double quotes, or backticks (template literals).',
    whyUse: 'Strings are essential for displaying text, building HTML, formatting data, and communicating with users.',
    whereUse: 'User interface text, data formatting, string manipulation, template rendering, API data.',
    syntax: 'let str1 = \'hello\';\nlet str2 = "hello";\nlet str3 = `hello ${name}`;',
    explanation: 'Template literals (backticks) support string interpolation with ${expression} and multi-line strings. Strings have many built-in methods for searching, slicing, and transforming.',
    examples: [
      { title: 'Template Literal', code: 'let name = "Alice";\nconsole.log(`Hello, ${name}!`)', output: 'Hello, Alice!' },
      { title: 'String Length', code: 'let str = "JavaScript";\nconsole.log(str.length)', output: '10' },
      { title: 'String Methods', code: 'let str = "Hello World";\nconsole.log(str.toUpperCase())', output: 'HELLO WORLD' },
      { title: 'String Slicing', code: 'let str = "abcdef";\nconsole.log(str.slice(1, 4))', output: 'bcd' },
      { title: 'String Split', code: 'let str = "a,b,c";\nconsole.log(str.split(","))', output: '[ \'a\', \'b\', \'c\' ]' }
    ],
    keyPoints: ['Template literals use backticks and ${} for interpolation', 'Strings are immutable - methods return new strings', 'Use includes() to check if a string contains text', 'trim() removes whitespace from both ends'],
    commonMistakes: ['Cannot change a character directly: str[0] = "x" does not work', 'Forgetting template literals need backticks not quotes', 'Confusing slice and substring parameters'],
    proTips: ['Use template literals for complex string building', 'Chain string methods for clean transformations', 'Use startsWith() and endsWith() for prefix/suffix checks']
  },
  operators: {
    definition: 'Operators perform operations on values and variables. JavaScript has arithmetic, comparison, logical, assignment, and other operator types.',
    whyUse: 'Operators are fundamental for performing calculations, making comparisons, and combining logic in your code.',
    whereUse: 'Math operations, conditional checks, data transformation, logical flow control.',
    syntax: '// Arithmetic: +, -, *, /, %, **\n// Comparison: ==, ===, !=, !==, >, <, >=, <=\n// Logical: &&, ||, !',
    explanation: 'Arithmetic operators do math. Comparison operators return boolean values. Logical operators combine boolean expressions. The === operator checks both value and type (strict equality).',
    examples: [
      { title: 'Arithmetic Operators', code: 'console.log(10 + 5);   // addition\nconsole.log(10 - 5);   // subtraction\nconsole.log(10 * 5);   // multiplication\nconsole.log(10 / 5);   // division\nconsole.log(10 % 3);   // modulus\nconsole.log(2 ** 3);   // exponent', output: '15\n5\n50\n2\n1\n8' },
      { title: 'Strict vs Loose Equality', code: 'console.log(5 == "5");   // loose\nconsole.log(5 === "5");  // strict\nconsole.log(5 != "5");   // loose\nconsole.log(5 !== "5");  // strict', output: 'true\nfalse\nfalse\ntrue' },
      { title: 'Logical Operators', code: 'let a = true, b = false;\nconsole.log(a && b);   // AND\nconsole.log(a || b);   // OR\nconsole.log(!a);        // NOT', output: 'false\ntrue\nfalse' },
      { title: 'Nullish Coalescing', code: 'let val1 = null;\nlet val2 = "default";\nconsole.log(val1 ?? val2)', output: 'default' },
      { title: 'Ternary Operator', code: 'let age = 20;\nlet status = age >= 18 ? "adult" : "minor";\nconsole.log(status)', output: 'adult' }
    ],
    keyPoints: ['Always use === for comparisons to avoid type coercion', '?? (nullish coalescing) only checks null/undefined', '|| returns the first truthy value, ?? returns the first defined value', 'Operator precedence determines evaluation order'],
    commonMistakes: ['Using = instead of === for comparison', 'Not understanding truthy/falsy values with ||', 'Mixing up && and || logic'],
    proTips: ['Use ?? instead of || when you want to handle only null/undefined', 'Use optional chaining ?. with nullish coalescing for safe access', 'Remember: 0, "", null, undefined, NaN, false are falsy']
  },
  conditionals: {
    definition: 'Conditional statements allow code to execute different blocks based on whether conditions are true or false.',
    whyUse: 'Conditionals enable decision-making in programs, allowing different behavior based on data or user input.',
    whereUse: 'Form validation, user authentication, game logic, data filtering, feature toggling.',
    syntax: 'if (condition) {\n  // code\n} else if (otherCondition) {\n  // code\n} else {\n  // code\n}',
    explanation: 'if/else if/else chains evaluate conditions in order. switch statements match exact values. The ternary operator provides a shorthand for simple conditionals.',
    examples: [
      { title: 'If-Else', code: 'let score = 85;\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else {\n  console.log("Grade: C");\n}', output: 'Grade: B' },
      { title: 'Switch Statement', code: 'let day = "Monday";\nswitch (day) {\n  case "Monday":\n    console.log("Start of week");\n    break;\n  case "Friday":\n    console.log("Almost weekend");\n    break;\n  default:\n    console.log("Mid week");\n}', output: 'Start of week' },
      { title: 'Ternary Operator', code: 'let age = 16;\nlet canVote = age >= 18 ? "Yes" : "No";\nconsole.log(canVote)', output: 'No' },
      { title: 'Logical Operators in Conditions', code: 'let temp = 22;\nlet sunny = true;\nif (temp > 20 && sunny) {\n  console.log("Nice weather!");\n}', output: 'Nice weather!' },
      { title: 'Nested Conditions', code: 'let hasTicket = true;\nlet age = 15;\nif (hasTicket) {\n  if (age >= 18) {\n    console.log("Regular entry");\n  } else {\n    console.log("Child entry");\n  }\n} else {\n  console.log("Buy a ticket");\n}', output: 'Child entry' }
    ],
    keyPoints: ['Only the first matching block executes in if/else if chains', 'Always use break in switch cases to avoid fall-through', 'Empty strings, 0, null, undefined, NaN, false are falsy', 'Complex conditions can be broken into variables'],
    commonMistakes: ['Missing break in switch causing fall-through', 'Using assignment = instead of comparison === in conditions', 'Forgetting to handle all cases in switch'],
    proTips: ['Keep conditions simple - extract complex logic to variables', 'Use early returns to reduce nesting', 'Use switch when comparing the same variable to many values']
  },
  loops: {
    definition: 'Loops repeat a block of code multiple times. JavaScript provides for, while, do-while, and for...of/for...in loops.',
    whyUse: 'Loops are essential for processing collections of data, repeating tasks, and iterating through arrays and objects.',
    whereUse: 'Array processing, data transformation, API pagination, animation frames, game loops.',
    syntax: 'for (let i = 0; i < 5; i++) {\n  // code\n}\n\nwhile (condition) {\n  // code\n}\n\nfor (let item of array) {\n  // code\n}',
    explanation: 'for loops are best when you know the iteration count. while loops are best when the condition determines termination. for...of iterates over iterable values (arrays, strings). for...in iterates over object keys.',
    examples: [
      { title: 'For Loop', code: 'for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}', output: '1\n2\n3\n4\n5' },
      { title: 'While Loop', code: 'let count = 0;\nwhile (count < 3) {\n  console.log("Count:", count);\n  count++;\n}', output: 'Count: 0\nCount: 1\nCount: 2' },
      { title: 'For...of Loop', code: 'let fruits = ["apple", "banana", "cherry"];\nfor (let fruit of fruits) {\n  console.log(fruit);\n}', output: 'apple\nbanana\ncherry' },
      { title: 'For...in Loop', code: 'let person = { name: "Alice", age: 25 };\nfor (let key in person) {\n  console.log(`${key}: ${person[key]}`);\n}', output: 'name: Alice\nage: 25' },
      { title: 'Do-While Loop', code: 'let i = 0;\ndo {\n  console.log(i);\n  i++;\n} while (i < 3)', output: '0\n1\n2' }
    ],
    keyPoints: ['for...of for array values, for...in for object keys', 'while loops may not execute if condition is initially false', 'do-while always executes at least once', 'Use break to exit early, continue to skip an iteration'],
    commonMistakes: ['Infinite loops when the exit condition is never met', 'Using for...in on arrays (use for...of instead)', 'Off-by-one errors in loop boundaries'],
    proTips: ['Use array methods (map, filter, reduce) instead of loops when possible', 'Use for...of for clean iteration over arrays', 'Always ensure the loop has a termination condition']
  },
  arrays: {
    definition: 'Arrays are ordered collections of values, indexed starting from 0. They can hold any type of data and are dynamic in size.',
    whyUse: 'Arrays are fundamental for storing lists of data, processing collections, and working with ordered information.',
    whereUse: 'Storing user lists, managing state, data processing, API responses, rendering UI elements.',
    syntax: 'let arr = [1, 2, 3];\narr.push(4);      // add to end\narr.pop();        // remove from end\narr.length;       // get size',
    explanation: 'Arrays have many built-in methods for adding, removing, searching, and transforming data. Methods like push, pop, shift, unshift modify the array. Methods like map, filter, reduce return new arrays.',
    examples: [
      { title: 'Array Creation', code: 'let nums = [1, 2, 3, 4, 5];\nconsole.log(nums);\nconsole.log(nums.length)', output: '[ 1, 2, 3, 4, 5 ]\n5' },
      { title: 'Push and Pop', code: 'let arr = [1, 2, 3];\narr.push(4);\nconsole.log(arr);\narr.pop();\nconsole.log(arr)', output: '[ 1, 2, 3, 4 ]\n[ 1, 2, 3 ]' },
      { title: 'Map Method', code: 'let nums = [1, 2, 3];\nlet doubled = nums.map(n => n * 2);\nconsole.log(doubled)', output: '[ 2, 4, 6 ]' },
      { title: 'Filter Method', code: 'let nums = [1, 2, 3, 4, 5];\nlet evens = nums.filter(n => n % 2 === 0);\nconsole.log(evens)', output: '[ 2, 4 ]' },
      { title: 'Reduce Method', code: 'let nums = [1, 2, 3, 4];\nlet sum = nums.reduce((acc, n) => acc + n, 0);\nconsole.log(sum)', output: '10' }
    ],
    keyPoints: ['Arrays are zero-indexed', 'push/pop modify the original array', 'map/filter/reduce return new arrays', 'Use spread [...] to copy arrays'],
    commonMistakes: ['Mutating arrays when you intended to create new ones', 'Not handling empty arrays', 'Using for...in on arrays instead of for...of or index loops'],
    proTips: ['Use immutable array methods for predictable state', 'Destructure arrays for clean variable extraction', 'Use Array.from() to convert array-like objects']
  },
  objects: {
    definition: 'Objects are collections of key-value pairs. They are the primary way to structure and organize data in JavaScript.',
    whyUse: 'Objects model real-world entities, group related data, and provide a flexible structure for complex data.',
    whereUse: 'Data modeling, configuration, API responses, component state, database records.',
    syntax: 'let obj = {\n  key1: "value1",\n  key2: "value2"\n};\nobj.key1;          // dot notation\nobj["key2"];       // bracket notation',
    explanation: 'Objects store data as properties (key-value pairs). Properties can be accessed with dot notation or bracket notation. Objects can contain methods (functions as properties).',
    examples: [
      { title: 'Object Creation', code: 'let person = {\n  name: "Alice",\n  age: 25,\n  greet: function() {\n    return `Hi, I am ${this.name}`;\n  }\n};\nconsole.log(person.name)\nconsole.log(person.greet())', output: 'Alice\nHi, I am Alice' },
      { title: 'Adding Properties', code: 'let car = { make: "Toyota" };\ncar.model = "Camry";\ncar.year = 2023;\nconsole.log(car)', output: '{ make: \'Toyota\', model: \'Camry\', year: 2023 }' },
      { title: 'Object Destructuring', code: 'let user = { name: "Bob", age: 30, city: "NYC" };\nlet { name, age } = user;\nconsole.log(name, age)', output: 'Bob 30' },
      { title: 'Object Keys and Values', code: 'let obj = { a: 1, b: 2, c: 3 };\nconsole.log(Object.keys(obj));\nconsole.log(Object.values(obj))', output: '[ \'a\', \'b\', \'c\' ]\n[ 1, 2, 3 ]' },
      { title: 'Spread Operator', code: 'let defaults = { color: "red", size: "medium" };\nlet custom = { ...defaults, color: "blue" };\nconsole.log(custom)', output: '{ color: \'blue\', size: \'medium\' }' }
    ],
    keyPoints: ['Use dot notation for known properties, bracket for dynamic keys', 'Objects are passed by reference', 'Use spread {...} to shallow copy objects', 'Object.keys(), Object.values(), Object.entries() for iteration'],
    commonMistakes: ['Accessing a non-existent property returns undefined, not an error', 'Forgetting that objects are reference types', 'Using const does not prevent object mutation'],
    proTips: ['Use destructuring for clean property extraction', 'Use optional chaining ?. to safely access nested properties', 'Freeze objects with Object.freeze() when immutability is needed']
  },
  functions: {
    definition: 'Functions are reusable blocks of code that perform a specific task. They can accept parameters and return values.',
    whyUse: 'Functions promote code reuse, organization, abstraction, and make programs easier to test and debug.',
    whereUse: 'Code organization, event handling, data processing, API calls, calculations, utility operations.',
    syntax: '// Declaration\nfunction greet(name) {\n  return `Hello, ${name}`;\n}\n\n// Arrow\nconst greet = (name) => `Hello, ${name}`;',
    explanation: 'Functions can be declared, expressed, or arrow functions. Arrow functions have shorter syntax and lexically bind this. Functions are first-class values - they can be passed as arguments and returned.',
    examples: [
      { title: 'Function Declaration', code: 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(3, 5))', output: '8' },
      { title: 'Arrow Function', code: 'const multiply = (a, b) => a * b;\nconsole.log(multiply(4, 6))', output: '24' },
      { title: 'Default Parameters', code: 'function greet(name = "World") {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet())\nconsole.log(greet("Alice"))', output: 'Hello, World!\nHello, Alice!' },
      { title: 'Rest Parameters', code: 'function sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconsole.log(sum(1, 2, 3, 4))', output: '10' },
      { title: 'Function Expression', code: 'const square = function(x) {\n  return x * x;\n};\nconsole.log(square(5))', output: '25' }
    ],
    keyPoints: ['Arrow functions do not have their own this', 'Use default parameters for fallback values', 'Rest parameters (...args) collect arguments into an array', 'Functions can return any type including other functions'],
    commonMistakes: ['Forgetting to return a value', 'Arrow functions do not bind their own this', 'Not handling missing arguments'],
    proTips: ['Use arrow functions for short callbacks', 'Use named functions for readability in complex logic', 'Keep functions small and focused on one task']
  },
  scope: {
    definition: 'Scope determines where variables are accessible in your code. JavaScript has global, function, and block scope.',
    whyUse: 'Understanding scope prevents variable name conflicts and bugs from unexpected variable access.',
    whereUse: 'Variable management, avoiding global pollution, encapsulation, module patterns.',
    syntax: '// Global scope\nlet global = "I am global";\n\n// Function scope\nfunction demo() {\n  let local = "I am local";\n}\n\n// Block scope\nif (true) {\n  let block = "I am block scoped";\n}',
    explanation: 'var creates function-scoped variables. let and const create block-scoped variables. Global variables are accessible everywhere. Closures allow functions to access variables from their outer scope.',
    examples: [
      { title: 'Global Scope', code: 'let globalVar = "I am global";\nfunction showGlobal() {\n  console.log(globalVar);\n}\nshowGlobal()', output: 'I am global' },
      { title: 'Function Scope', code: 'function demo() {\n  let localVar = "I am local";\n  console.log(localVar);\n}\ndemo();\n// console.log(localVar) would error', output: 'I am local' },
      { title: 'Block Scope', code: 'if (true) {\n  let x = 10;\n  var y = 20;\n}\n// console.log(x) would error\nconsole.log(y)', output: '20' },
      { title: 'Scope Chain', code: 'let outer = "outer";\nfunction outerFunc() {\n  let middle = "middle";\n  function innerFunc() {\n    let inner = "inner";\n    console.log(outer, middle, inner);\n  }\n  innerFunc();\n}\nouterFunc()', output: 'outer middle inner' },
      { title: 'Closure', code: 'function counter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst increment = counter();\nconsole.log(increment());\nconsole.log(increment());\nconsole.log(increment())', output: '1\n2\n3' }
    ],
    keyPoints: ['let/const are block-scoped, var is function-scoped', 'Inner scopes can access outer scope variables', 'Closures preserve outer scope variables in functions', 'Avoid global variables when possible'],
    commonMistakes: ['var ignoring block scope boundaries', 'Accidentally creating global variables', 'Confusion about when closures capture variables'],
    proTips: ['Use let/const to control variable scope precisely', 'Minimize global scope usage', 'Leverage closures for data privacy and state management']
  },
  callbacks: {
    definition: 'A callback is a function passed as an argument to another function, to be executed later when an operation completes.',
    whyUse: 'Callbacks enable asynchronous programming, event handling, and customizing function behavior.',
    whereUse: 'Async operations, event listeners, array methods, timers, file I/O, API calls.',
    syntax: 'function doSomething(callback) {\n  // do work\n  callback(result);\n}\n\ndoSomething(function(result) {\n  console.log(result);\n});',
    explanation: 'Callbacks are fundamental to JavaScript async patterns. They are used in setTimeout, event listeners, and array methods like forEach. The callback function receives the result as an argument.',
    examples: [
      { title: 'Basic Callback', code: 'function greet(name, callback) {\n  let greeting = `Hello, ${name}`;\n  callback(greeting);\n}\ngreet("Alice", function(msg) {\n  console.log(msg);\n})', output: 'Hello, Alice' },
      { title: 'Array forEach', code: 'let nums = [1, 2, 3];\nnums.forEach(function(num) {\n  console.log(num * 2);\n})', output: '2\n4\n6' },
      { title: 'setTimeout Callback', code: 'setTimeout(function() {\n  console.log("Executed after 1 second");\n}, 1000)', output: 'Executed after 1 second (after 1s delay)' },
      { title: 'Error-First Callback', code: 'function fetchData(callback) {\n  let error = null;\n  let data = { id: 1, name: "test" };\n  callback(error, data);\n}\nfetchData(function(err, data) {\n  if (err) console.log("Error:", err);\n  else console.log("Data:", data);\n})', output: 'Data: { id: 1, name: \'test\' }' },
      { title: 'Callback with Return', code: 'function process(arr, callback) {\n  return callback(arr);\n}\nlet result = process([1, 2, 3], function(arr) {\n  return arr.map(x => x * 10);\n});\nconsole.log(result)', output: '[ 10, 20, 30 ]' }
    ],
    keyPoints: ['Callbacks are functions passed as arguments', 'Error-first convention: callback(error, result)', 'Callbacks can be synchronous or asynchronous', 'Arrow functions make callbacks more concise'],
    commonMistakes: ['Callback hell - deeply nested callbacks', 'Not handling errors in async callbacks', 'Forgetting to call the callback function'],
    proTips: ['Use Promises or async/await for complex async flows', 'Keep callbacks shallow and simple', 'Use named functions for complex callbacks']
  },
  promises: {
    definition: 'Promises are objects representing the eventual completion or failure of an asynchronous operation and its resulting value.',
    whyUse: 'Promises provide a cleaner alternative to callbacks for handling async operations, avoiding callback hell.',
    whereUse: 'API calls, file operations, database queries, timers, any async operation that may succeed or fail.',
    syntax: 'const promise = new Promise((resolve, reject) => {\n  if (success) resolve(result);\n  else reject(error);\n});\n\npromise.then(result => ...).catch(error => ...);',
    explanation: 'A Promise starts in pending state, then moves to fulfilled (resolved) or rejected. .then() handles success, .catch() handles errors, .finally() runs regardless. Promises can be chained.',
    examples: [
      { title: 'Creating a Promise', code: 'const myPromise = new Promise((resolve, reject) => {\n  resolve("Success!");\n});\nmyPromise.then(result => console.log(result))', output: 'Success!' },
      { title: 'Promise Chain', code: 'function double(x) {\n  return new Promise(resolve => {\n    resolve(x * 2);\n  });\n}\ndouble(5)\n  .then(result => double(result))\n  .then(result => console.log(result))', output: '20' },
      { title: 'Promise.all', code: 'const p1 = Promise.resolve(1);\nconst p2 = Promise.resolve(2);\nconst p3 = Promise.resolve(3);\nPromise.all([p1, p2, p3])\n  .then(values => console.log(values))', output: '[ 1, 2, 3 ]' },
      { title: 'Handling Errors', code: 'const failingPromise = new Promise((resolve, reject) => {\n  reject("Something went wrong");\n});\nfailingPromise\n  .catch(error => console.log("Error:", error))', output: 'Error: Something went wrong' },
      { title: 'Promise.race', code: 'const fast = new Promise(resolve =>\n  setTimeout(() => resolve("fast"), 100)\n);\nconst slow = new Promise(resolve =>\n  setTimeout(() => resolve("slow"), 500)\n);\nPromise.race([fast, slow])\n  .then(winner => console.log(winner))', output: 'fast' }
    ],
    keyPoints: ['Promises have three states: pending, fulfilled, rejected', '.catch() handles errors from .then() as well', 'Promise.all waits for all, Promise.race returns first', 'Always return promises in chains for proper sequencing'],
    commonMistakes: ['Not catching promise rejections', 'Creating promises that never resolve or reject', 'Using Promise.all when you need sequential execution'],
    proTips: ['Use Promise.all for parallel async operations', 'Always add .catch() to handle errors', 'Use Promise.allSettled() when you need all results regardless of success']
  },
  async: {
    definition: 'async/await is syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code.',
    whyUse: 'async/await makes async code more readable and easier to debug compared to Promise chains.',
    whereUse: 'Any asynchronous operation - API calls, file operations, database queries, complex async workflows.',
    syntax: 'async function fetchData() {\n  try {\n    const response = await fetch(url);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error(error);\n  }\n}',
    explanation: 'The async keyword makes a function return a Promise. The await keyword pauses execution until a Promise resolves. await can only be used inside async functions. Use try/catch for error handling.',
    examples: [
      { title: 'Basic Async/Await', code: 'async function greet() {\n  return "Hello, Async!";\n}\ngreet().then(msg => console.log(msg))', output: 'Hello, Async!' },
      { title: 'Await Promise', code: 'function delay(ms) {\n  return new Promise(resolve =>\n    setTimeout(resolve, ms)\n  );\n}\nasync function main() {\n  console.log("Start");\n  await delay(1000);\n  console.log("End");\n}\nmain()', output: 'Start\nEnd (after 1s delay)' },
      { title: 'Error Handling', code: 'async function risky() {\n  try {\n    let result = await Promise.reject("Error!");\n  } catch (err) {\n    console.log("Caught:", err);\n  }\n}\nrisky()', output: 'Caught: Error!' },
      { title: 'Parallel Async', code: 'async function parallel() {\n  const [a, b, c] = await Promise.all([\n    Promise.resolve(1),\n    Promise.resolve(2),\n    Promise.resolve(3)\n  ]);\n  console.log(a, b, c);\n}\nparallel()', output: '1 2 3' },
      { title: 'Sequential vs Parallel', code: 'async function sequential() {\n  const a = await Promise.resolve(1);\n  const b = await Promise.resolve(2);\n  console.log("Sequential:", a, b);\n}\nsequential()', output: 'Sequential: 1 2' }
    ],
    keyPoints: ['async functions always return a Promise', 'await pauses execution until Promise resolves', 'Use try/catch for error handling with async/await', 'Top-level await is supported in ES modules'],
    commonMistakes: ['Using await outside an async function', 'Not handling errors with try/catch', 'Sequential awaits when parallel would be faster'],
    proTips: ['Use Promise.all() with await for parallel operations', 'Use try/finally for cleanup code', 'Top-level await works in ES modules']
  },
  dom: {
    definition: 'The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page as a tree of nodes that JavaScript can manipulate.',
    whyUse: 'DOM manipulation allows JavaScript to dynamically change HTML content, structure, and styling in response to user actions.',
    whereUse: 'Dynamic web pages, single-page applications, form handling, animations, interactive UIs.',
    syntax: 'document.getElementById("id");\ndocument.querySelector(".class");\nelement.textContent = "new text";\nelement.classList.add("active");',
    explanation: 'The DOM represents HTML as a tree of objects. JavaScript can find elements using selectors, modify their content, change their attributes, and alter their styles. Note: DOM manipulation requires a browser environment.',
    examples: [
      { title: 'Select Element', code: '// Browser only - shows the pattern\nconst element = document.querySelector("#myId");\nconsole.log(element.tagName)', output: 'DIV (in browser)' },
      { title: 'Change Content', code: '// Browser only - shows the pattern\nconst heading = document.querySelector("h1");\nheading.textContent = "New Title";\nheading.innerHTML = "<em>Bold</em> Title"', output: 'Updates heading in browser' },
      { title: 'Add CSS Class', code: '// Browser only - shows the pattern\nconst btn = document.querySelector("button");\nbtn.classList.add("active");\nbtn.classList.toggle("hidden")', output: 'Modifies button classes' },
      { title: 'Create Element', code: '// Browser only - shows the pattern\nconst div = document.createElement("div");\ndiv.textContent = "I am new!";\ndocument.body.appendChild(div)', output: 'Appends div to body' },
      { title: 'Event Listener', code: '// Browser only - shows the pattern\nconst btn = document.querySelector("button");\nbtn.addEventListener("click", () => {\n  console.log("Button clicked!");\n})', output: 'Logs on button click' }
    ],
    keyPoints: ['DOM manipulation requires a browser environment', 'querySelector is more versatile than getElementById', 'textContent is safer than innerHTML (prevents XSS)', 'Events bubble up through the DOM tree'],
    commonMistakes: ['Using DOM methods in Node.js (not available)', 'Manipulating DOM before it is loaded', 'Memory leaks from not removing event listeners'],
    proTips: ['Use event delegation for performance with many elements', 'Minimize DOM manipulation - batch updates', 'Use document fragments for multiple insertions']
  },
  events: {
    definition: 'Events are actions or occurrences that happen in the browser, such as clicks, key presses, or page loads. JavaScript can respond to these events.',
    whyUse: 'Events make web pages interactive by allowing code to respond to user actions and browser states.',
    whereUse: 'Click handlers, form submissions, keyboard input, mouse movement, scroll events, page load.',
    syntax: 'element.addEventListener("event", handler);\nelement.removeEventListener("event", handler);',
    explanation: 'Event listeners are attached to DOM elements. When the event occurs, the handler function executes. Events have properties like target, type, and preventDefault(). Note: Events require a browser environment.',
    examples: [
      { title: 'Click Event', code: '// Browser pattern - shows the concept\nconst btn = document.querySelector("button");\nbtn.addEventListener("click", (e) => {\n  console.log("Clicked!", e.target.textContent);\n})', output: 'Fires on button click' },
      { title: 'Keyboard Event', code: '// Browser pattern - shows the concept\ndocument.addEventListener("keydown", (e) => {\n  console.log("Key:", e.key, "Code:", e.code);\n})', output: 'Logs key info on press' },
      { title: 'Form Submit', code: '// Browser pattern - shows the concept\nconst form = document.querySelector("form");\nform.addEventListener("submit", (e) => {\n  e.preventDefault();\n  console.log("Form submitted!");\n})', output: 'Prevents default and logs' },
      { title: 'Event Delegation', code: '// Browser pattern - shows the concept\ndocument.querySelector("ul")\n  .addEventListener("click", (e) => {\n    if (e.target.tagName === "LI") {\n      console.log("Clicked:", e.target.textContent);\n    }\n  })', output: 'Handles list item clicks' },
      { title: 'Custom Events', code: '// Browser pattern - shows the concept\nconst event = new CustomEvent("userAction", {\n  detail: { action: "login" }\n});\ndocument.dispatchEvent(event)', output: 'Dispatches custom event' }
    ],
    keyPoints: ['addEventListener is preferred over onclick', 'use e.preventDefault() to stop default behavior', 'Event delegation improves performance', 'Remove event listeners to prevent memory leaks'],
    commonMistakes: ['Not removing event listeners causing memory leaks', 'Using anonymous functions making removal impossible', 'Not using preventDefault() on forms'],
    proTips: ['Use event delegation for dynamic content', 'Use once option for single-fire events', 'Use passive events for scroll performance']
  },
  classes: {
    definition: 'Classes are templates for creating objects with predefined properties and methods. They provide syntactic sugar over prototype-based inheritance.',
    whyUse: 'Classes provide a clean, organized way to create objects and implement inheritance in JavaScript.',
    whereUse: 'Object-oriented design, game entities, UI components, data models, API clients.',
    syntax: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}',
    explanation: 'Classes use the class keyword with a constructor method for initialization. Methods are defined inside the class body. Classes support inheritance with the extends keyword and super() calls.',
    examples: [
      { title: 'Basic Class', code: 'class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n  introduce() {\n    return `I am ${this.name}, age ${this.age}`;\n  }\n}\nconst p = new Person("Alice", 25);\nconsole.log(p.introduce())', output: 'I am Alice, age 25' },
      { title: 'Inheritance', code: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    return `${this.name} makes a sound`;\n  }\n}\nclass Dog extends Animal {\n  speak() {\n    return `${this.name} barks`;\n  }\n}\nconst dog = new Dog("Rex");\nconsole.log(dog.speak())', output: 'Rex barks' },
      { title: 'Static Methods', code: 'class MathHelper {\n  static add(a, b) {\n    return a + b;\n  }\n  static multiply(a, b) {\n    return a * b;\n  }\n}\nconsole.log(MathHelper.add(3, 4))\nconsole.log(MathHelper.multiply(3, 4))', output: '7\n12' },
      { title: 'Getters and Setters', code: 'class Temperature {\n  constructor(celsius) {\n    this._celsius = celsius;\n  }\n  get fahrenheit() {\n    return this._celsius * 9/5 + 32;\n  }\n  set fahrenheit(f) {\n    this._celsius = (f - 32) * 5/9;\n  }\n}\nconst temp = new Temperature(100);\nconsole.log(temp.fahrenheit)', output: '212' },
      { title: 'Private Fields', code: 'class BankAccount {\n  #balance = 0;\n  deposit(amount) {\n    this.#balance += amount;\n  }\n  getBalance() {\n    return this.#balance;\n  }\n}\nconst acc = new BankAccount();\nacc.deposit(1000);\nconsole.log(acc.getBalance())', output: '1000' }
    ],
    keyPoints: ['constructor() is called when creating a new instance', 'extends creates a subclass that inherits from a parent', 'super() calls the parent class constructor', 'Private fields use # prefix'],
    commonMistakes: ['Forgetting to call super() in subclass constructors', 'Using this before calling super()', 'Confusing class methods with regular functions'],
    proTips: ['Use private fields for encapsulation', 'Use static methods for utility functions', 'Keep classes focused on a single responsibility']
  },
  modules: {
    definition: 'Modules are reusable pieces of code that can be exported from one file and imported into another. They help organize code into separate, maintainable files.',
    whyUse: 'Modules prevent global namespace pollution, enable code reuse, and make large applications manageable.',
    whereUse: 'Organizing components, utility functions, constants, API clients, any reusable code.',
    syntax: '// Export\nexport const name = "value";\nexport function greet() { ... }\n\n// Import\nimport { name } from "./module.js";\nimport myModule from "./module.js";',
    explanation: 'ES modules use import/export syntax. Named exports export multiple values. Default exports export a single value. Modules have their own scope - nothing leaks to global.',
    examples: [
      { title: 'Named Export', code: '// math.js\nexport const PI = 3.14159;\nexport function add(a, b) {\n  return a + b;\n}\n\n// app.js\nimport { PI, add } from "./math.js";\nconsole.log(PI, add(2, 3))', output: '3.14159 5' },
      { title: 'Default Export', code: '// logger.js\nexport default function log(msg) {\n  console.log(msg);\n}\n\n// app.js\nimport log from "./logger.js";\nlog("Hello module!")', output: 'Hello module!' },
      { title: 'Import All', code: '// utils.js\nexport function upper(s) { return s.toUpperCase(); }\nexport function lower(s) { return s.toLowerCase(); }\n\n// app.js\nimport * as utils from "./utils.js";\nconsole.log(utils.upper("hello"))', output: 'HELLO' },
      { title: 'Re-exporting', code: '// index.js\nexport { add, subtract } from "./math.js";\nexport { default as multiply } from "./multiply.js";', output: 'Re-exports from other modules' },
      { title: 'Dynamic Import', code: 'async function loadModule() {\n  const module = await import("./heavy-module.js");\n  module.doSomething();\n}\nloadModule()', output: 'Loads module on demand' }
    ],
    keyPoints: ['Every file is a module in ES modules', 'Modules are always in strict mode', 'import statements are hoisted', 'Dynamic import() loads modules asynchronously'],
    commonMistakes: ['Forgetting to add .js extension in imports', 'Circular dependencies causing issues', 'Using require() with ES modules'],
    proTips: ['Use named exports for multiple values', 'Use index.js files to re-export for cleaner imports', 'Use dynamic imports for code splitting']
  },
  json: {
    definition: 'JSON (JavaScript Object Notation) is a lightweight data interchange format. It is a text-based format that is easy for humans to read and machines to parse.',
    whyUse: 'JSON is the standard format for data exchange between servers and clients, configuration files, and data storage.',
    whereUse: 'API communication, configuration files, data storage, data serialization, messaging.',
    syntax: 'JSON.stringify(object)   // convert to JSON string\nJSON.parse(string)      // convert from JSON string',
    explanation: 'JSON supports objects, arrays, strings, numbers, booleans, and null. It does not support functions, undefined, or dates directly. JSON.stringify converts JS objects to JSON strings. JSON.parse converts JSON strings to JS objects.',
    examples: [
      { title: 'Stringify Object', code: 'const obj = { name: "Alice", age: 25 };\nconst json = JSON.stringify(obj);\nconsole.log(json);\nconsole.log(typeof json)', output: '{"name":"Alice","age":25}\nstring' },
      { title: 'Parse JSON', code: 'const json = \'{"name":"Bob","age":30}\';\nconst obj = JSON.parse(json);\nconsole.log(obj.name);\nconsole.log(obj.age)', output: 'Bob\n30' },
      { title: 'Pretty Print', code: 'const data = { name: "test", items: [1, 2, 3] };\nconsole.log(JSON.stringify(data, null, 2))', output: '{\n  "name": "test",\n  "items": [\n    1,\n    2,\n    3\n  ]\n}' },
      { title: 'Replacer Function', code: 'const data = { name: "Alice", age: 25, pass: "secret" };\nconst json = JSON.stringify(data, (key, val) => {\n  if (key === "pass") return undefined;\n  return val;\n});\nconsole.log(json)', output: '{"name":"Alice","age":25}' },
      { title: 'Nested Objects', code: 'const data = {\n  user: { name: "Bob" },\n  scores: [10, 20, 30]\n};\nconst json = JSON.stringify(data);\nconst parsed = JSON.parse(json);\nconsole.log(parsed.user.name)', output: 'Bob' }
    ],
    keyPoints: ['JSON keys must be double-quoted strings', 'JSON.stringify returns undefined for functions and undefined values', 'JSON.parse throws on invalid JSON', 'JSON does not support comments'],
    commonMistakes: ['Trying to stringify functions or undefined', 'Using single quotes in JSON strings', 'Forgetting that JSON.parse can throw errors'],
    proTips: ['Always wrap JSON.parse in try/catch', 'Use replacer functions to filter sensitive data', 'Use JSON.stringify for quick object debugging']
  },
  fetch: {
    definition: 'The Fetch API provides a modern interface for making HTTP requests. It returns Promises that resolve to the Response to that request.',
    whyUse: 'Fetch enables communication with servers, APIs, and external services from JavaScript.',
    whereUse: 'API calls, loading data, sending form data, uploading files, webhooks.',
    syntax: 'fetch(url)\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error(error));',
    explanation: 'fetch() returns a Promise that resolves to a Response object. You typically call .json() or .text() to get the body. Note: fetch requires a browser environment or Node.js 18+.',
    examples: [
      { title: 'Basic GET Request', code: 'fetch("https://jsonplaceholder.typicode.com/todos/1")\n  .then(res => res.json())\n  .then(data => console.log(data.title))', output: 'delectus aut autem (from API)' },
      { title: 'Async/Await Fetch', code: 'async function getUser() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");\n  const user = await res.json();\n  console.log(user.name);\n}\ngetUser()', output: 'Leanne Graham (from API)' },
      { title: 'POST Request', code: 'fetch("https://jsonplaceholder.typicode.com/posts", {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify({ title: "New Post", body: "Content" })\n})\n.then(res => res.json())\n.then(data => console.log(data.id))', output: '101 (from API)' },
      { title: 'Error Handling', code: 'async function safeFetch(url) {\n  try {\n    const res = await fetch(url);\n    if (!res.ok) throw new Error(`HTTP ${res.status}`);\n    return await res.json();\n  } catch (err) {\n    console.log("Error:", err.message);\n  }\n}\nsafeFetch("https://invalid.url")', output: 'Error: Failed to fetch' },
      { title: 'Abort Controller', code: 'const controller = new AbortController();\nsetTimeout(() => controller.abort(), 5000);\n\nfetch("https://jsonplaceholder.typicode.com/posts", {\n  signal: controller.signal\n})\n.then(res => res.json())\n.catch(err => {\n  if (err.name === "AbortError") {\n    console.log("Request aborted");\n  }\n})', output: 'Aborts after 5s if slow' }
    ],
    keyPoints: ['fetch() returns a Promise', 'Check res.ok before processing the response', '.json() also returns a Promise', 'Use AbortController for request cancellation'],
    commonMistakes: ['Not checking res.ok - fetch does not reject on HTTP errors', 'Forgetting to call .json() on the response', 'Not handling network errors'],
    proTips: ['Always wrap fetch in try/catch with async/await', 'Use AbortController for timeouts', 'Consider using axios for more features']
  },
  storage: {
    definition: 'Web Storage APIs (localStorage and sessionStorage) allow storing key-value pairs in the browser persistently or per-session.',
    whyUse: 'Storage enables saving user preferences, form data, authentication tokens, and application state on the client.',
    whereUse: 'User preferences, shopping carts, form drafts, caching, offline data.',
    syntax: 'localStorage.setItem("key", "value");\nlocalStorage.getItem("key");\nlocalStorage.removeItem("key");\nlocalStorage.clear();',
    explanation: 'localStorage persists data even after the browser is closed. sessionStorage is cleared when the tab is closed. Both store strings - use JSON.stringify/parse for objects. Note: Storage requires a browser environment.',
    examples: [
      { title: 'Store Data', code: '// Browser only - shows the pattern\nlocalStorage.setItem("username", "Alice");\nconst name = localStorage.getItem("username");\nconsole.log(name)', output: 'Alice' },
      { title: 'Store Object', code: '// Browser only - shows the pattern\nconst user = { name: "Bob", age: 30 };\nlocalStorage.setItem("user", JSON.stringify(user));\nconst stored = JSON.parse(localStorage.getItem("user"));\nconsole.log(stored.name)', output: 'Bob' },
      { title: 'Remove and Clear', code: '// Browser only - shows the pattern\nlocalStorage.setItem("temp", "data");\nlocalStorage.removeItem("temp");\nlocalStorage.setItem("a", "1");\nlocalStorage.setItem("b", "2");\nlocalStorage.clear();', output: 'Clears all storage' },
      { title: 'Session Storage', code: '// Browser only - shows the pattern\nsessionStorage.setItem("token", "abc123");\nconsole.log(sessionStorage.getItem("token"))', output: 'abc123' },
      { title: 'Storage Events', code: '// Browser only - shows the pattern\nwindow.addEventListener("storage", (e) => {\n  console.log(`Key: ${e.key}, New: ${e.newValue}`);\n});\nlocalStorage.setItem("test", "value")', output: 'Logs storage changes' }
    ],
    keyPoints: ['localStorage persists across browser sessions', 'sessionStorage is per-tab only', 'Both only store strings', 'Storage limit is typically 5-10MB'],
    commonMistakes: ['Trying to store objects directly without JSON.stringify', 'For localStorage quota exceeded errors', 'Not parsing JSON when retrieving objects'],
    proTips: ['Use JSON.stringify/parse for object storage', 'Wrap storage access in try/catch for quota errors', 'Use storage events for cross-tab synchronization']
  },
  error: {
    definition: 'Error handling in JavaScript uses try/catch/finally blocks to gracefully handle runtime errors and maintain program stability.',
    whyUse: 'Proper error handling prevents crashes, provides user-friendly messages, and aids debugging.',
    whereUse: 'API calls, file operations, user input validation, parsing data, any operation that may fail.',
    syntax: 'try {\n  // code that might fail\n} catch (error) {\n  // handle error\n} finally {\n  // always runs\n}',
    explanation: 'try wraps code that might throw an error. catch handles the error. finally runs regardless of success or failure. You can throw custom errors with the throw keyword.',
    examples: [
      { title: 'Basic Try/Catch', code: 'try {\n  let result = riskyOperation();\n} catch (error) {\n  console.log("Error:", error.message);\n}', output: 'Error: riskyOperation is not defined' },
      { title: 'Throw Custom Error', code: 'function divide(a, b) {\n  if (b === 0) {\n    throw new Error("Division by zero");\n  }\n  return a / b;\n}\ntry {\n  console.log(divide(10, 0));\n} catch (err) {\n  console.log(err.message);\n}', output: 'Division by zero' },
      { title: 'Finally Block', code: 'function process() {\n  try {\n    console.log("Starting...");\n    throw new Error("Oops!");\n  } catch (err) {\n    console.log("Caught:", err.message);\n  } finally {\n    console.log("Cleanup done");\n  }\n}\nprocess()', output: 'Starting...\nCaught: Oops!\nCleanup done' },
      { title: 'Custom Error Classes', code: 'class ValidationError extends Error {\n  constructor(field, message) {\n    super(message);\n    this.field = field;\n    this.name = "ValidationError";\n  }\n}\ntry {\n  throw new ValidationError("email", "Invalid email");\n} catch (err) {\n  console.log(`${err.name}: ${err.field} - ${err.message}`);\n}', output: 'ValidationError: email - Invalid email' },
      { title: 'Async Error Handling', code: 'async function fetchData() {\n  try {\n    const res = await fetch("https://invalid.url");\n    return await res.json();\n  } catch (err) {\n    console.log("Fetch failed:", err.message);\n  }\n}\nfetchData()', output: 'Fetch failed: Failed to fetch' }
    ],
    keyPoints: ['try/catch does not catch syntax errors', 'finally always executes even with return', 'throw can throw any value (not just Error objects)', 'Async errors need try/catch with async/await'],
    commonMistakes: ['Empty catch blocks swallowing errors', 'Not re-throwing errors when needed', 'Catching errors too broadly'],
    proTips: ['Always log errors for debugging', 'Use custom error classes for specific error types', 'Use finally for cleanup regardless of success']
  },
  regex: {
    definition: 'Regular expressions (regex) are patterns used to match character combinations in strings. They are powerful tools for text searching and manipulation.',
    whyUse: 'Regex enables complex string validation, searching, extraction, and replacement operations.',
    whereUse: 'Form validation, data parsing, text search, string manipulation, log analysis.',
    syntax: 'let pattern = /pattern/flags;\nlet pattern = new RegExp("pattern", "flags");\n\npattern.test(string);    // returns boolean\nstring.match(pattern);    // returns matches',
    explanation: 'Regex patterns use special characters: . (any char), * (zero or more), + (one or more), ? (optional), ^ (start), $ (end), \\d (digit), \\w (word char). Flags: g (global), i (case-insensitive), m (multiline).',
    examples: [
      { title: 'Test Match', code: 'const pattern = /hello/i;\nconsole.log(pattern.test("Hello World"));\nconsole.log(pattern.test("Goodbye"))', output: 'true\nfalse' },
      { title: 'Match Method', code: 'const str = "The year is 2024";\nconst matches = str.match(/\\d+/g);\nconsole.log(matches)', output: '[ \'2024\' ]' },
      { title: 'Replace with Regex', code: 'const str = "Hello World 123";\nconst result = str.replace(/\\d+/g, "NUM");\nconsole.log(result)', output: 'Hello World NUM' },
      { title: 'Email Validation', code: 'const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\nconsole.log(emailPattern.test("user@example.com"));\nconsole.log(emailPattern.test("invalid-email"));\nconsole.log(emailPattern.test("test@.com"))', output: 'true\nfalse\nfalse' },
      { title: 'Capture Groups', code: 'const str = "2024-01-15";\nconst match = str.match(/(\\d{4})-(\\d{2})-(\\d{2})/);\nconsole.log(match[1], match[2], match[3])', output: '2024 01 15' }
    ],
    keyPoints: ['Test returns boolean, match returns array or null', 'Use g flag for global matching', 'Escape special characters with backslash', 'Groups use parentheses ()'],
    commonMistakes: ['Forgetting to escape special characters', 'Not using the g flag when needed', 'Greedy vs lazy matching surprises'],
    proTips: ['Use online regex testers for debugging', 'Name capture groups for clarity', 'Use regex for complex string patterns, indexOf for simple searches']
  },
  iterators: {
    definition: 'Iterators are objects that define how to traverse a collection. JavaScript has built-in iteration protocols (iterable and iterator) and generator functions.',
    whyUse: 'Iterators provide a standardized way to loop over data structures and enable custom iteration behavior.',
    whereUse: 'Custom collections, lazy evaluation, infinite sequences, generators, for...of loops.',
    syntax: '// Generator function\nfunction* myGenerator() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\n\n// Using iterator protocol\nconst iterator = myGenerator();\niterator.next(); // { value: 1, done: false }',
    explanation: 'An iterable implements Symbol.iterator. An iterator has a next() method returning { value, done }. Generators (function*) create iterators with yield statements. Each yield pauses and resumes the function.',
    examples: [
      { title: 'Generator Function', code: 'function* count() {\n  yield 1;\n  yield 2;\n  yield 3;\n}\nconst gen = count();\nconsole.log(gen.next());\nconsole.log(gen.next());\nconsole.log(gen.next());\nconsole.log(gen.next())', output: '{ value: 1, done: false }\n{ value: 2, done: false }\n{ value: 3, done: false }\n{ value: undefined, done: true }' },
      { title: 'For...of with Generator', code: 'function* range(start, end) {\n  for (let i = start; i <= end; i++) {\n    yield i;\n  }\n}\nfor (let num of range(1, 5)) {\n  console.log(num);\n}', output: '1\n2\n3\n4\n5' },
      { title: 'Generator with Return', code: 'function* fibonacci() {\n  let a = 0, b = 1;\n  while (true) {\n    yield a;\n    [a, b] = [b, a + b];\n  }\n}\nconst fib = fibonacci();\nconsole.log(fib.next().value);\nconsole.log(fib.next().value);\nconsole.log(fib.next().value);\nconsole.log(fib.next().value)', output: '0\n1\n1\n2' },
      { title: 'Custom Iterable', code: 'class Range {\n  constructor(start, end) {\n    this.start = start;\n    this.end = end;\n  }\n  [Symbol.iterator]() {\n    let current = this.start;\n    const end = this.end;\n    return {\n      next() {\n        if (current <= end) {\n          return { value: current++, done: false };\n        }\n        return { done: true };\n      }\n    };\n  }\n}\nfor (let num of new Range(1, 4)) {\n  console.log(num);\n}', output: '1\n2\n3\n4' },
      { title: 'Generator as Iterator', code: 'function* powers(base) {\n  let exponent = 0;\n  while (true) {\n    yield Math.pow(base, exponent++);\n  }\n}\nconst powersOf2 = powers(2);\nconsole.log(powersOf2.next().value);\nconsole.log(powersOf2.next().value);\nconsole.log(powersOf2.next().value);\nconsole.log(powersOf2.next().value)', output: '1\n2\n4\n8' }
    ],
    keyPoints: ['Generators use function* and yield', 'next() returns { value, done }', 'Generators are lazy - they produce values on demand', 'for...of works with any iterable'],
    commonMistakes: ['Confusing yield with return (yield pauses, return ends)', 'Not consuming all generator values', 'Trying to use generators in non-iteration contexts'],
    proTips: ['Use generators for lazy evaluation of large datasets', 'Combine generators with Promises for async iteration', 'Use yield* to delegate to another generator']
  }
}

export default javascript
