const javascript = {
  // ==================== INTRO LEVEL ====================
  intro: {
    definition: 'JavaScript is the programming language of the web. It makes websites interactive — from button clicks to dynamic content updates.',
    whyUse: 'Every website you use daily runs on JavaScript: the Instagram like button, Google search suggestions while you type, Flipkart add-to-cart, YouTube video controls. If a website reacts when you click something, JavaScript did it.',
    whereUse: null,
    syntax: null,
    explanation: 'JavaScript was created in 1995 by Brendan Eich. Today it runs in browsers (Chrome, Firefox, Edge) and on servers (Node.js). It is case-sensitive, runs line by line from top to bottom, and needs no installation to start — just open your browser. You write it once and it works almost everywhere.',
    examples: [
      { title: 'Hello World', code: 'console.log("Hello, World!")', output: 'Hello, World!' },
      { title: 'Print a Message with a Variable', code: 'let name = "Student"\nconsole.log("Welcome, " + name + "!")', output: 'Welcome, Student!' },
      { title: 'Simple Math Output', code: 'console.log("2 + 2 =", 2 + 2)', output: '2 + 2 = 4' },
      { title: 'Single Line Comment', code: '// This is a comment\nconsole.log("Comments are ignored")', output: 'Comments are ignored' },
      { title: 'Multi-line Comment', code: '/* This is a\nmulti-line comment */\nconsole.log("Still works")', output: 'Still works' }
    ],
    keyPoints: ['JavaScript is case-sensitive — Console and console are different.', 'Code runs line by line from top to bottom.', 'Semicolons are optional but recommended.'],
    commonMistakes: ['Mixing up = (assignment) and === (comparison).', 'Typing console.log with a capital letter like Console.log.'],
    proTips: ['Always use const by default, let when you need to change the value.', 'Open the browser console (F12) and type code to test ideas fast.']
  },
  setup: {
    definition: 'You need three simple tools to start JavaScript: a code editor (VS Code), a web browser (Chrome), and optionally Node.js to run code outside the browser.',
    whyUse: 'Real developers use VS Code because it is free, fast, and gives autocomplete. The browser console lets you test code instantly without saving files. Node.js is used when you want to run JavaScript on a server or run scripts from the terminal — like running a website backend.',
    whereUse: null,
    syntax: null,
    explanation: 'Setup takes 3 steps: (1) Install VS Code from code.visualstudio.com. (2) Install Node.js LTS from nodejs.org. (3) Open Chrome, right-click the page, choose Inspect, then click the Console tab. To run JS on a web page, create an index.html file and link your script with a script tag.',
    examples: [
      { title: 'Run Code in Browser Console', code: '// Press F12 in Chrome → Console tab, then paste:\nconsole.log("It works! No setup needed")', output: 'It works! No setup needed' },
      { title: 'Link JavaScript to HTML', code: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>My First Page</h1>\n  <script src="app.js"></script>\n</body>\n</html>\n\n// app.js\nconsole.log("Loaded from file!")', output: 'Loaded from file! (open index.html in browser)' },
      { title: 'Run JS with Node.js', code: '// Save as app.js, then run in terminal: node app.js\nconsole.log("Running outside the browser!")', output: 'Running outside the browser!' },
      { title: 'Check Node Version', code: '// Run in terminal:\nnode --version', output: 'v20.11.0 (example)' },
      { title: 'Inline Script in HTML', code: '<script>\n  alert("Hello from HTML!")\n</script>', output: 'A popup appears in the browser' }
    ],
    keyPoints: ['Browser JS and Node.js have different features — document exists only in browsers.', 'Use the browser console for quick tests, VS Code for real projects.', 'VS Code + Live Server extension auto-reloads your page when you save.'],
    commonMistakes: ['Using browser-only code like document in Node.js.', 'Forgetting to save the HTML file before refreshing the browser.'],
    proTips: ['Install the "Live Server" extension in VS Code — right-click HTML → Open with Live Server.', 'Keep the console open while developing to catch errors early.']
  },
  output: {
    definition: 'console.log() prints values to the screen. Comments are notes for humans — JavaScript ignores them.',
    whyUse: 'Developers use console.log() to check if values are correct while building — like printing a student\'s total marks to verify the calculation. Comments help your team (and your future self) understand what old code does.',
    whereUse: null,
    syntax: null,
    explanation: 'Whatever you put inside console.log( ) gets printed. You can pass text, numbers, variables, or calculations. Use // for one line of comment and /* */ for a block of comment. Good commenting is what separates beginner code from professional code.',
    examples: [
      { title: 'Print Text and Numbers', code: 'console.log("My age is 20")\nconsole.log(10 + 20)', output: 'My age is 20\n30' },
      { title: 'Print Multiple Values', code: 'let name = "Ravi"\nlet marks = 85\nconsole.log("Name:", name, "Marks:", marks)', output: 'Name: Ravi Marks: 85' },
      { title: 'Print with Template Literal', code: 'let course = "JavaScript"\nconsole.log(`I am learning ${course}`)', output: 'I am learning JavaScript' },
      { title: 'Comment Out Code', code: '// console.log("This will NOT print")\nconsole.log("This will print")', output: 'This will print' },
      { title: 'Debugging with console.log', code: 'let price = 100\nlet discount = 10\nconsole.log("Price before:", price)\nlet total = price - discount\nconsole.log("Price after:", total)', output: 'Price before: 100\nPrice after: 90' }
    ],
    keyPoints: ['console.log() can print any type: text, numbers, arrays, objects.', '// comments out only one line, /* */ comments out a block.', 'Use console.log() as your debugging tool while learning.'],
    commonMistakes: ['Forgetting quotes around text: console.log(Hello) is an error.', 'Misspelling console as conosle.'],
    proTips: ['Print variable names alongside values: console.log("total:", total) — easier to debug.', 'Comment out debug logs instead of deleting them — you may need them again.']
  },
  variables: {
    definition: 'Variables store data values. Think of them as labeled boxes where you keep information.',
    whyUse: 'In real apps, variables hold everything: a user\'s name in a login form, the price of a product in a shopping cart, the score in a game. Instead of hardcoding "Ravi" everywhere, you store it in a variable and change it in one place.',
    whereUse: null,
    syntax: null,
    explanation: 'Use const by default — it prevents accidental changes. Use let when you know the value will change later. Avoid var — it has confusing scoping rules that cause bugs. Variable names should be descriptive and use camelCase (like studentName).',
    examples: [
      { title: 'Const Declaration', code: 'const name = "Alice"\nconsole.log(name)', output: 'Alice' },
      { title: 'Let Declaration', code: 'let age = 25\nage = 26\nconsole.log(age)', output: '26' },
      { title: 'Shopping Cart Example', code: 'const product = "Laptop"\nlet price = 45000\nlet quantity = 2\nconsole.log(product, "x", quantity, "=", price * quantity)', output: 'Laptop x 2 = 90000' },
      { title: 'Swap Two Variables', code: 'let a = 5\nlet b = 10\nlet temp = a\na = b\nb = temp\nconsole.log(a, b)', output: '10 5' },
      { title: 'Uninitialized Variable', code: 'let result\nconsole.log(result)', output: 'undefined' }
    ],
    keyPoints: ['const = value cannot change, let = value can change.', 'var works but has scoping problems — prefer let/const.', 'Variable names are case-sensitive: age and Age are different.'],
    commonMistakes: ['Trying to change a const: const x = 5; x = 10 → error.', 'Using the variable before declaring it.', 'Using spaces in variable names: let student name is wrong.'],
    proTips: ['Use const by default, let only when reassignment is needed.', 'Name variables with camelCase: studentName, totalPrice, isLoggedIn.']
  },
  arithmetic: {
    definition: 'Arithmetic operators do math in JavaScript: addition, subtraction, multiplication, division, modulus (remainder), and power.',
    whyUse: 'Every real app does math: an e-commerce site calculates discounts and totals, a banking app computes interest, a quiz app counts your score, a delivery app estimates time. All of these use the same simple operators you learn here.',
    whereUse: null,
    syntax: null,
    explanation: 'JavaScript has 6 main math operators: + (add), - (subtract), * (multiply), / (divide), % (remainder), ** (power). The % operator is very useful — a number is even if number % 2 === 0. Math happens in order of operations, just like in school: use parentheses to control the order.',
    examples: [
      { title: 'Basic Math', code: 'console.log(10 + 5)   // addition\nconsole.log(10 - 5)   // subtraction\nconsole.log(10 * 5)   // multiplication\nconsole.log(10 / 4)   // division', output: '15\n5\n50\n2.5' },
      { title: 'Modulus (Remainder)', code: 'console.log(10 % 3)   // remainder of 10 / 3\nconsole.log(7 % 2)    // is 7 even?', output: '1\n1' },
      { title: 'Even or Odd Check', code: 'let number = 8\nif (number % 2 === 0) {\n  console.log("Even")\n} else {\n  console.log("Odd")\n}', output: 'Even' },
      { title: 'Power Operator', code: 'console.log(2 ** 5)   // 2 x 2 x 2 x 2 x 2', output: '32' },
      { title: 'Real Life: Bill Discount', code: 'let price = 1200\nlet discountPercent = 15\nlet discount = price * discountPercent / 100\nlet finalPrice = price - discount\nconsole.log("You save:", discount)\nconsole.log("Pay:", finalPrice)', output: 'You save: 180\nPay: 1020' }
    ],
    keyPoints: ['/ gives decimals: 10 / 4 = 2.5 (not 2).', '% gives the remainder — perfect for even/odd checks.', '** is power: 2 ** 3 = 8.'],
    commonMistakes: ['Expecting 10 / 4 = 2 (integer division) — JavaScript gives 2.5.', 'Forgetting operator order: 2 + 3 * 4 = 14, not 20.'],
    proTips: ['Use parentheses to make math clear: (price * discount) / 100.', 'Use Math.round() when you need whole numbers: Math.round(2.7) → 3.']
  },
  conditionals: {
    definition: 'Conditionals let your code make decisions — run this block only if a condition is true.',
    whyUse: 'Real life is full of decisions: "if the user is 18+, allow voting", "if the password is wrong, show an error", "if the cart is empty, disable checkout". Every app you use makes thousands of these decisions per second.',
    whereUse: null,
    syntax: null,
    explanation: 'The if statement checks a condition. If true, the code inside {} runs. else handles the other case. You can chain multiple checks with else if. The ternary operator ? : is a short way to write simple decisions. switch is good when you compare one value against many fixed options.',
    examples: [
      { title: 'If-Else: Voting Age', code: 'let age = 20\nif (age >= 18) {\n  console.log("You can vote")\n} else {\n  console.log("Too young to vote")\n}', output: 'You can vote' },
      { title: 'Grades with Else If', code: 'let score = 85\nif (score >= 90) {\n  console.log("Grade: A")\n} else if (score >= 80) {\n  console.log("Grade: B")\n} else if (score >= 70) {\n  console.log("Grade: C")\n} else {\n  console.log("Grade: F")\n}', output: 'Grade: B' },
      { title: 'Switch Statement', code: 'let day = "Monday"\nswitch (day) {\n  case "Monday":\n    console.log("Start of week")\n    break\n  case "Friday":\n    console.log("Almost weekend!")\n    break\n  default:\n    console.log("Mid week")\n}', output: 'Start of week' },
      { title: 'Ternary Operator', code: 'let age = 16\nlet canVote = age >= 18 ? "Yes" : "No"\nconsole.log("Can vote?", canVote)', output: 'Can vote? No' },
      { title: 'Login Check (Real Life)', code: 'let username = "admin"\nlet password = "1234"\nif (username === "admin" && password === "1234") {\n  console.log("Login successful")\n} else {\n  console.log("Wrong username or password")\n}', output: 'Login successful' }
    ],
    keyPoints: ['Only the first true condition runs in an if/else if chain.', 'Always use break in switch to avoid running the next case.', 'Use === (strict) instead of == to compare values.'],
    commonMistakes: ['Forgetting break in switch — extra cases run by mistake.', 'Using = (assignment) instead of === (comparison) inside if.'],
    proTips: ['Keep conditions simple — save complex logic to a variable first: let isAdult = age >= 18.', 'Use early returns to reduce deep nesting.']
  },
  loops: {
    definition: 'Loops repeat a block of code until a condition becomes false.',
    whyUse: 'Loops do repetitive work: printing 100 bill items, calculating the average of 50 marks, searching a list of 1000 products, sending 500 emails. You write the logic once — the loop handles the repetition.',
    whereUse: null,
    syntax: null,
    explanation: 'Use for when you know how many times to repeat (count 1 to 10). Use while when you repeat until a condition changes (keep asking until the user types "exit"). break exits the loop immediately, continue skips the current round and moves to the next.',
    examples: [
      { title: 'For Loop: Count 1 to 5', code: 'for (let i = 1; i <= 5; i++) {\n  console.log(i)\n}', output: '1\n2\n3\n4\n5' },
      { title: 'While Loop', code: 'let count = 0\nwhile (count < 3) {\n  console.log("Count:", count)\n  count++\n}', output: 'Count: 0\nCount: 1\nCount: 2' },
      { title: 'Sum of Marks', code: 'let marks = [80, 90, 70, 85]\nlet total = 0\nfor (let i = 0; i < marks.length; i++) {\n  total = total + marks[i]\n}\nconsole.log("Total:", total, "Average:", total / marks.length)', output: 'Total: 325 Average: 81.25' },
      { title: 'Break and Continue', code: 'for (let i = 1; i <= 10; i++) {\n  if (i === 3) continue   // skip 3\n  if (i === 6) break      // stop at 6\n  console.log(i)\n}', output: '1\n2\n4\n5' },
      { title: 'Loop Through an Array', code: 'let fruits = ["apple", "banana", "cherry"]\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i])\n}', output: 'apple\nbanana\ncherry' }
    ],
    keyPoints: ['for = fixed count, while = runs until a condition changes.', 'Arrays start at index 0, so use i < arr.length (not <=).', 'break stops the loop, continue skips one round.'],
    commonMistakes: ['Infinite loops — forgetting to change the counter inside the loop.', 'Using i <= arr.length causes an "undefined" error at the end.'],
    proTips: ['Always make sure the loop can end — check your exit condition.', 'For arrays, for...of is cleaner: for (let fruit of fruits) { ... }']
  },

  // ==================== BASIC LEVEL ====================
  datatypes: {
    definition: 'Data types tell JavaScript what kind of value you are working with: text, number, true/false, empty, or collections.',
    whyUse: 'Types matter because they decide what operations work. You can multiply two numbers, but multiplying two text strings gives a wrong result. Forms collect different data types: name is text, age is a number, "I agree" checkbox is true/false. Knowing types prevents confusing bugs.',
    whereUse: null,
    syntax: null,
    explanation: 'JavaScript has 7 primitive types: string (text), number (integers and decimals), boolean (true/false), null (intentionally empty), undefined (not assigned yet), bigint, symbol. Collections — arrays and objects — are reference types. Use typeof to check any value\'s type.',
    examples: [
      { title: 'Check Types with typeof', code: 'console.log(typeof "Hello")   // string\nconsole.log(typeof 42)        // number\nconsole.log(typeof true)      // boolean\nconsole.log(typeof undefined) // undefined\nconsole.log(typeof null)      // object (a famous bug!)', output: 'string\nnumber\nboolean\nundefined\nobject' },
      { title: 'String Type', code: 'let name = "Alice"\nconsole.log(typeof name, name.length)', output: 'string 5' },
      { title: 'Number Type', code: 'let price = 99.5\nconsole.log(typeof price, price * 2)', output: 'number 199' },
      { title: 'Array and Object Types', code: 'console.log(typeof [1, 2, 3])        // object\nconsole.log(Array.isArray([1, 2, 3])) // true\nconsole.log(typeof { name: "Bob" })   // object', output: 'object\ntrue\nobject' },
      { title: 'Type in Real Life: Form Data', code: 'let username = "ravi123"      // text from input box\nlet age = "25"                 // input boxes give text!\nconsole.log(typeof age)       // string, not number\nconsole.log(Number(age) * 2)   // convert first: 50', output: 'string\n50' }
    ],
    keyPoints: ['Use typeof to check any value\'s type.', 'typeof null returns "object" — it is a known JavaScript bug.', 'Arrays are objects — use Array.isArray() to check.'],
    commonMistakes: ['Thinking input box values are numbers — they are always strings.', 'Expecting typeof [] to return "array".'],
    proTips: ['Convert form text to numbers with Number() or parseInt() before math.', 'Use === so JavaScript does not secretly change types.']
  },
  strings: {
    definition: 'Strings are text data. You create them with quotes, and JavaScript gives you many built-in methods to work with them.',
    whyUse: 'Every app handles text: usernames, product names, messages, emails, search queries. Real work includes joining a first and last name, checking if a search word exists in a product title, splitting a full address into parts, and formatting prices.',
    whereUse: null,
    syntax: null,
    explanation: 'Strings can use double quotes, single quotes, or backticks. Backticks (template literals) let you insert variables directly with ${expression}. Strings are immutable — methods like toUpperCase() return a NEW string, they never change the original.',
    examples: [
      { title: 'Template Literal', code: 'let name = "Alice"\nlet age = 25\nconsole.log(`${name} is ${age} years old`)', output: 'Alice is 25 years old' },
      { title: 'Useful String Methods', code: 'let text = "  Hello World  "\nconsole.log(text.trim())        // remove spaces\nconsole.log(text.toUpperCase())  // HELLO WORLD\nconsole.log(text.length)        // 13\nconsole.log(text.includes("World"))', output: 'Hello World\nHELLO WORLD\n13\ntrue' },
      { title: 'Find and Slice', code: 'let email = "student@school.com"\nconsole.log(email.indexOf("@"))\nconsole.log(email.slice(0, 7))', output: '7\nstudent' },
      { title: 'Split a String', code: 'let csv = "Ravi,Anita,Suresh"\nlet names = csv.split(",")\nconsole.log(names)\nconsole.log(names[1])', output: "[ 'Ravi', 'Anita', 'Suresh' ]\nAnita" },
      { title: 'Real Life: Search Box', code: 'let product = "Samsung Galaxy Phone"\nlet search = "galaxy"\nif (product.toLowerCase().includes(search)) {\n  console.log("Product found!")\n}', output: 'Product found!' }
    ],
    keyPoints: ['Template literals need backticks (`), not quotes.', 'Strings are immutable — methods return new strings.', 'Use includes() to check if text contains a word.'],
    commonMistakes: ['Changing a character directly: str[0] = "x" does not work.', 'Forgetting quotes around text: name = Alice is an error.'],
    proTips: ['Use ${} inside backticks for clean text building.', 'Convert to lower case before searching: toLowerCase().includes().']
  },
  operators: {
    definition: 'Comparison operators check if values are equal or different. Logical operators combine multiple conditions.',
    whyUse: 'Every decision in an app uses these: "if the email is valid AND the password has 8+ characters, allow signup", "if the item is in stock OR on the waitlist, show the button". Comparison and logic are the brain behind every if statement.',
    whereUse: null,
    syntax: null,
    explanation: 'Use === to compare — it checks value AND type (5 === "5" is false). == converts types first, which leads to surprises — avoid it. Logical operators: && (both must be true), || (at least one true), ! (opposite). The ternary operator ? : writes a quick yes/no decision in one line.',
    examples: [
      { title: 'Strict vs Loose Equality', code: 'console.log(5 == "5")   // loose: true (converts types)\nconsole.log(5 === "5")  // strict: false (different types)\nconsole.log(5 !== "5")  // true', output: 'true\nfalse\ntrue' },
      { title: 'Comparison Operators', code: 'console.log(10 > 5)   // true\nconsole.log(10 >= 10) // true\nconsole.log(3 < 1)    // false\nconsole.log(4 !== 4)  // false', output: 'true\ntrue\nfalse\nfalse' },
      { title: 'Logical AND / OR / NOT', code: 'let age = 25\nlet hasID = true\nconsole.log(age >= 18 && hasID)   // both must pass\nconsole.log(age >= 18 || hasID)   // one is enough\nconsole.log(!hasID)', output: 'true\ntrue\nfalse' },
      { title: 'Ternary Operator', code: 'let stock = 0\nlet status = stock > 0 ? "In Stock" : "Out of Stock"\nconsole.log(status)', output: 'Out of Stock' },
      { title: 'Real Life: Form Validation', code: 'let email = "user@example.com"\nlet password = "secret123"\nlet isValid = email.includes("@") && password.length >= 8\nconsole.log("Form valid?", isValid)', output: 'Form valid? true' }
    ],
    keyPoints: ['Always use === and !== — avoid == and !=.', '&& needs BOTH sides true, || needs only ONE.', 'Falsy values: 0, "", null, undefined, NaN, false.'],
    commonMistakes: ['Using = instead of === in conditions.', 'Forgetting that 0 and "" are falsy (false-like).'],
    proTips: ['Use ?? when you only want to handle null/undefined: name ?? "Guest".', 'Save long conditions to a variable: let canBuy = inStock && hasBalance.']
  },
  arrays: {
    definition: 'Arrays are ordered lists. They can hold anything — numbers, strings, objects, even other arrays.',
    whyUse: 'Lists are everywhere: a list of students in a class, search results, items in a cart, messages in a chat, marks in an exam. Whenever data comes as "a group of things", an array is the right tool.',
    whereUse: null,
    syntax: null,
    explanation: 'Arrays are zero-indexed — the first item is at index 0. push/pop add and remove from the end. map transforms every item, filter keeps items that pass a test, reduce combines everything into one value. These three methods are used in almost every real project.',
    examples: [
      { title: 'Create and Access', code: 'let marks = [80, 90, 70, 85]\nconsole.log(marks[0])\nconsole.log(marks.length)\nconsole.log(marks)', output: '80\n4\n[ 80, 90, 70, 85 ]' },
      { title: 'Add and Remove', code: 'let cart = ["Milk"]\ncart.push("Bread")     // add to end\ncart.unshift("Eggs")   // add to start\nconsole.log(cart)\ncart.pop()             // remove from end\nconsole.log(cart)', output: "[ 'Eggs', 'Milk', 'Bread' ]\n[ 'Eggs', 'Milk' ]" },
      { title: 'Map: Transform Every Item', code: 'let prices = [100, 200, 300]\nlet withTax = prices.map(p => p * 1.1)\nconsole.log(withTax)', output: '[ 110, 220, 330 ]' },
      { title: 'Filter: Keep What Passes', code: 'let marks = [45, 80, 30, 90, 65]\nlet passed = marks.filter(m => m >= 50)\nconsole.log(passed)', output: '[ 80, 90, 65 ]' },
      { title: 'Reduce: Combine Into One Value', code: 'let marks = [80, 90, 70]\nlet total = marks.reduce((sum, m) => sum + m, 0)\nconsole.log("Total:", total)', output: 'Total: 240' }
    ],
    keyPoints: ['First item is at index 0, last at length - 1.', 'push/pop change the original array; map/filter return a NEW one.', 'map + filter chained together is the most used pattern in real code.'],
    commonMistakes: ['Accessing an index that does not exist gives undefined (not an error).', 'Forgetting the starting value 0 in reduce with strings.'],
    proTips: ['Use [...arr] to copy an array safely.', 'Combine: arr.filter(x => x > 0).map(x => x * 2) — clean and readable.']
  },
  objects: {
    definition: 'Objects store data as key-value pairs. They are how you model real things in code — a user, a product, an order.',
    whyUse: 'A product on Amazon has a name, price, rating, and image — all about ONE thing. That is an object. An order has an id, items, and total. APIs send data as objects. Modeling real things as objects is the core of JavaScript development.',
    whereUse: null,
    syntax: null,
    explanation: 'Create objects with curly braces {}. Access values with dot notation (product.name) or brackets (product["name"]) — use brackets when the key is a variable. Destructuring pulls properties into short variables in one line. Spread {...} copies or merges objects.',
    examples: [
      { title: 'Create and Read', code: 'let student = {\n  name: "Ravi",\n  age: 21,\n  marks: 85\n}\nconsole.log(student.name)\nconsole.log(student["marks"])', output: 'Ravi\n85' },
      { title: 'Add and Update', code: 'let user = { name: "Anita" }\nuser.email = "anita@mail.com"\nuser.name = "Anita S"\nconsole.log(user)', output: "{ name: 'Anita S', email: 'anita@mail.com' }" },
      { title: 'Destructuring', code: 'let product = { name: "Phone", price: 15000, stock: 5 }\nlet { name, price } = product\nconsole.log(name, price)', output: 'Phone 15000' },
      { title: 'Object Inside an Array (Real Life)', code: 'let students = [\n  { name: "Ravi", marks: 85 },\n  { name: "Anita", marks: 92 }\n]\nconsole.log(students[1].name, students[1].marks)', output: 'Anita 92' },
      { title: 'Spread: Copy and Merge', code: 'let defaults = { color: "black", size: "M" }\nlet custom = { ...defaults, color: "red" }\nconsole.log(custom)', output: "{ color: 'red', size: 'M' }" }
    ],
    keyPoints: ['Dot notation for known keys, brackets for dynamic keys.', 'Objects are passed by reference — copies can affect the original.', 'Use {...obj} for a shallow copy.'],
    commonMistakes: ['Missing a comma or brace in nested objects.', 'Accessing a missing property gives undefined, not an error.'],
    proTips: ['Use optional chaining for safety: user?.address?.city.', 'Keep objects flat when possible — easier to work with.']
  },
  functions: {
    definition: 'Functions are reusable blocks of code. Write once, call many times. They keep your code organized and clean.',
    whyUse: 'Instead of repeating the "calculate total" logic in 5 places, write it once as a function. Real apps are built from hundreds of small functions: validateLogin(), addToCart(), calculateDiscount(), formatDate(). Functions are the building blocks of every JavaScript project.',
    whereUse: null,
    syntax: null,
    explanation: 'A function takes inputs (parameters), does work, and returns an output. Arrow functions (=>) are a shorter modern syntax. Default parameters give fallback values when nothing is passed. Functions can be passed to other functions — that powers callbacks and array methods like map.',
    examples: [
      { title: 'Function Declaration', code: 'function add(a, b) {\n  return a + b\n}\nconsole.log(add(3, 5))', output: '8' },
      { title: 'Arrow Function', code: 'const multiply = (a, b) => a * b\nconsole.log(multiply(4, 6))', output: '24' },
      { title: 'Default Parameters', code: 'function greet(name = "Student") {\n  return `Hello, ${name}!`\n}\nconsole.log(greet())\nconsole.log(greet("Ravi"))', output: 'Hello, Student!\nHello, Ravi!' },
      { title: 'Function That Uses Another Function', code: 'function applyDiscount(price, percent) {\n  return price - price * percent / 100\n}\nfunction showBill(price, percent) {\n  let final = applyDiscount(price, percent)\n  console.log(`Bill: ${price} -> ${final}`)\n}\nshowBill(1000, 20)', output: 'Bill: 1000 -> 800' },
      { title: 'Returning Objects', code: 'function createUser(name, age) {\n  return { name, age, isAdult: age >= 18 }\n}\nlet user = createUser("Ravi", 20)\nconsole.log(user)', output: "{ name: 'Ravi', age: 20, isAdult: true }" }
    ],
    keyPoints: ['Arrow functions do not have their own this.', 'return sends a value back — without it, the function gives undefined.', 'Functions can call other functions — build small, combine them.'],
    commonMistakes: ['Forgetting to return a value.', 'Calling a function with () inside map: map(fn()) is wrong — use map(fn).'],
    proTips: ['Keep each function to ONE job.', 'Name functions with verbs: calculateTotal, validateEmail, fetchUsers.']
  },
  typeconversion: {
    definition: 'Type conversion means changing a value from one type to another — like turning the text "25" into the number 25.',
    whyUse: 'Form inputs always give text — even for age and price. Before you can multiply or compare numbers from a form, you must convert them. Understanding truthy/falsy also prevents bugs where empty values are treated as "true" by mistake.',
    whereUse: null,
    syntax: null,
    explanation: 'Explicit conversion is done by you: Number("25"), String(100), Boolean(""). Implicit conversion (coercion) is done by JavaScript automatically — and can surprise you ("" + 1 = "1"). Truthy values act like true in conditions; falsy values (0, "", null, undefined, NaN, false) act like false.',
    examples: [
      { title: 'Explicit Conversion', code: 'console.log(Number("25") + 5)      // 30\nconsole.log(String(100) + "!")     // 100!\nconsole.log(Number("abc"))         // NaN', output: '30\n100!\nNaN' },
      { title: 'Common Gotcha: String + Number', code: 'console.log("5" + 1)    // "51" (text join!)\nconsole.log("5" - 1)    // 4   (math forces number)\nconsole.log("5" * 2)    // 10', output: '51\n4\n10' },
      { title: 'Falsy Values', code: 'console.log(Boolean(0))        // false\nconsole.log(Boolean(""))       // false\nconsole.log(Boolean("hello"))  // true\nconsole.log(Boolean(null))     // false\nconsole.log(Boolean(undefined))// false\nconsole.log(Boolean(NaN))      // false', output: 'false\nfalse\ntrue\nfalse\nfalse\nfalse' },
      { title: 'Real Life: Form Math', code: 'let qty = Number("3")        // input gives text\nlet price = Number("100")\nconsole.log("Total:", qty * price)', output: 'Total: 300' },
      { title: 'Check for NaN', code: 'let result = Number("hello")\nconsole.log(result, isNaN(result))', output: 'NaN true' }
    ],
    keyPoints: ['Input box values are always strings — convert with Number().', 'Falsy: 0, "", null, undefined, NaN, false. Everything else is truthy.', 'Number("abc") gives NaN (Not a Number).'],
    commonMistakes: ['Using + on text and numbers: "5" + 1 = "51".', 'Forgetting to convert input values before math.'],
    proTips: ['Use Number() instead of parseInt() when you need decimals too.', 'In conditions, remember: if (value) is the same as if (Boolean(value)).']
  },

  // ==================== MEDIUM LEVEL ====================
  scope: {
    definition: 'Scope decides where a variable can be seen. Closures let a function remember variables from where it was created.',
    whyUse: 'Scope keeps variables safe — a variable named "total" inside one function cannot break another function with its own "total". Closures power real features: counters, keeping login state private, and React hooks. Understanding scope removes the most confusing JavaScript bugs.',
    whereUse: null,
    syntax: null,
    explanation: 'let and const are block-scoped — they exist only inside their { } block. var is function-scoped and leaks outside blocks, which causes bugs. A closure happens when an inner function keeps access to the outer function\'s variables even after the outer function has finished running.',
    examples: [
      { title: 'Block Scope', code: 'if (true) {\n  let x = 10\n  var y = 20\n}\n// console.log(x) would error\nconsole.log(y)', output: '20' },
      { title: 'Function Scope', code: 'function demo() {\n  let local = "I am local"\n  console.log(local)\n}\ndemo()\n// console.log(local) would error', output: 'I am local' },
      { title: 'Scope Chain', code: 'let outer = "outer"\nfunction outerFunc() {\n  let middle = "middle"\n  function innerFunc() {\n    let inner = "inner"\n    console.log(outer, middle, inner)\n  }\n  innerFunc()\n}\nouterFunc()', output: 'outer middle inner' },
      { title: 'Closure: Private Counter', code: 'function createCounter() {\n  let count = 0          // hidden inside\n  return function() {\n    count++\n    return count\n  }\n}\nconst counter = createCounter()\nconsole.log(counter())\nconsole.log(counter())\nconsole.log(counter())', output: '1\n2\n3' },
      { title: 'Real Life: Cart Without Global Variables', code: 'function createCart() {\n  let items = []\n  return {\n    add: (item) => items.push(item),\n    show: () => items.slice()\n  }\n}\nconst cart = createCart()\ncart.add("Milk")\ncart.add("Bread")\nconsole.log(cart.show())', output: "[ 'Milk', 'Bread' ]" }
    ],
    keyPoints: ['let/const are block-scoped, var is function-scoped.', 'Inner functions can read outer variables.', 'Closures keep outer variables alive — perfect for private data.'],
    commonMistakes: ['var leaking outside its block.', 'Loop variables with var shared across all iterations.'],
    proTips: ['Use let/const everywhere — almost never use var.', 'When you need private data, use a closure or a class with # fields.']
  },
  callbacks: {
    definition: 'A callback is a function you pass to another function so it can run later — usually when something finishes.',
    whyUse: 'JavaScript is single-threaded: while it waits for a slow task (loading data, a timer, a user click), it must not freeze the page. Callbacks let the program say "do this when you are done". Every click handler, timer, and array method uses callbacks.',
    whereUse: null,
    syntax: null,
    explanation: 'You pass a function as an argument; the receiving function calls it when its work is done. Array methods like forEach, map, and filter all take callbacks. setTimeout also takes a callback to run after a delay. The pattern is simple: define what to do, pass it along.',
    examples: [
      { title: 'Basic Callback', code: 'function greet(name, callback) {\n  let msg = `Hello, ${name}`\n  callback(msg)\n}\ngreet("Ravi", (msg) => console.log(msg))', output: 'Hello, Ravi' },
      { title: 'forEach Callback', code: 'let fruits = ["apple", "banana"]\nfruits.forEach((fruit, i) => {\n  console.log(i, fruit)\n})', output: '0 apple\n1 banana' },
      { title: 'setTimeout Callback', code: 'console.log("Start")\nsetTimeout(() => {\n  console.log("Runs after 1 second")\n}, 1000)\nconsole.log("End")', output: 'Start\nEnd\n(runs after 1 second)' },
      { title: 'Callback with Array Map', code: 'function transform(arr, fn) {\n  return arr.map(fn)\n}\nlet doubled = transform([1, 2, 3], (n) => n * 2)\nconsole.log(doubled)', output: '[ 2, 4, 6 ]' },
      { title: 'Real Life: Process Order', code: 'function placeOrder(item, onDone) {\n  console.log(`Order placed for ${item}`)\n  onDone("Order confirmed!")\n}\nplaceOrder("Pizza", (status) => console.log(status))', output: 'Order placed for Pizza\nOrder confirmed!' }
    ],
    keyPoints: ['Callbacks are just functions passed as arguments.', 'They run LATER — not at the moment you define them.', 'Array methods (map, filter, forEach) all take callbacks.'],
    commonMistakes: ['Deeply nested callbacks ("callback hell") — use Promises instead.', 'Forgetting to pass the callback function itself (with brackets vs without).'],
    proTips: ['Use arrow functions for short callbacks: arr.map(x => x * 2).', 'For complex flows, move to Promises and async/await (next topics).']
  },
  promises: {
    definition: 'A Promise represents a value that will arrive later. It can succeed (fulfill) or fail (reject).',
    whyUse: 'Loading a user profile from a server takes time. A Promise lets your page keep working and handle the data the moment it arrives — or show an error if the request fails. Every modern API library is built on Promises.',
    whereUse: null,
    syntax: null,
    explanation: 'A Promise starts as pending, then becomes fulfilled (success) or rejected (failure). Use .then() for success, .catch() for errors, .finally() for cleanup that runs either way. Promise.all() waits for many Promises together — much faster than running them one by one.',
    examples: [
      { title: 'Create a Promise', code: 'const done = new Promise((resolve, reject) => {\n  resolve("Success!")\n})\ndone.then((msg) => console.log(msg))', output: 'Success!' },
      { title: 'Chaining Promises', code: 'function double(x) {\n  return new Promise((resolve) => resolve(x * 2))\n}\ndouble(5)\n  .then((n) => double(n))\n  .then((n) => console.log(n))', output: '20' },
      { title: 'Handling Failure', code: 'const fail = new Promise((resolve, reject) => {\n  reject("Something went wrong")\n})\nfail.catch((err) => console.log("Error:", err))', output: 'Error: Something went wrong' },
      { title: 'Promise.all: Run Together', code: 'const p1 = Promise.resolve("User")\nconst p2 = Promise.resolve("Profile")\nconst p3 = Promise.resolve("Posts")\nPromise.all([p1, p2, p3]).then((all) => console.log(all))', output: "[ 'User', 'Profile', 'Posts' ]" },
      { title: 'Real Life: Load Data with Delay', code: 'function fetchData() {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve({ name: "Ravi", marks: 85 }), 1000)\n  })\n}\nfetchData().then((data) => console.log("Loaded:", data.name))', output: 'Loaded: Ravi (after 1 second)' }
    ],
    keyPoints: ['Three states: pending, fulfilled, rejected.', '.then() handles success, .catch() handles failure.', 'Promise.all waits for ALL — Promise.race returns the FIRST.'],
    commonMistakes: ['Not adding .catch() — failed Promises disappear silently.', 'Creating a Promise that never resolves or rejects.'],
    proTips: ['Always chain .catch() after .then().', 'Use Promise.all() when tasks are independent — it saves a lot of time.']
  },
  async: {
    definition: 'async/await is the modern way to write Promises. It makes asynchronous code look like normal, top-to-bottom code.',
    whyUse: 'This is how professional JavaScript is written today. Fetching a user, then their orders, then showing them — written with async/await reads like plain English and is much easier to debug than nested .then() chains.',
    whereUse: null,
    syntax: null,
    explanation: 'Put async before a function — it now always returns a Promise. Use await inside to pause until a Promise finishes. Wrap risky awaits in try/catch to handle errors. await pauses only that function — the rest of the page keeps running.',
    examples: [
      { title: 'Basic Async Function', code: 'async function greet() {\n  return "Hello, Async!"\n}\ngreet().then((msg) => console.log(msg))', output: 'Hello, Async!' },
      { title: 'Await a Delay', code: 'function delay(ms) {\n  return new Promise((resolve) => setTimeout(resolve, ms))\n}\nasync function main() {\n  console.log("Start")\n  await delay(1000)\n  console.log("End after 1s")\n}\nmain()', output: 'Start\nEnd after 1s' },
      { title: 'Error Handling with Try/Catch', code: 'async function risky() {\n  try {\n    let data = await Promise.reject("Network down")\n  } catch (err) {\n    console.log("Caught:", err)\n  }\n}\nrisky()', output: 'Caught: Network down' },
      { title: 'Run Tasks in Parallel', code: 'async function loadAll() {\n  const [user, posts] = await Promise.all([\n    Promise.resolve("Ravi"),\n    Promise.resolve("5 posts")\n  ])\n  console.log(user, posts)\n}\nloadAll()', output: 'Ravi 5 posts' },
      { title: 'Real Life: Fetch Flow', code: 'async function showUser() {\n  try {\n    const user = await Promise.resolve({ name: "Anita", age: 22 })\n    console.log(`Loaded ${user.name}, age ${user.age}`)\n  } catch (err) {\n    console.log("Failed:", err)\n  }\n}\nshowUser()', output: 'Loaded Anita, age 22' }
    ],
    keyPoints: ['async functions ALWAYS return a Promise.', 'await pauses only its own function, not the whole page.', 'Use try/catch around await for error handling.'],
    commonMistakes: ['Using await outside an async function.', 'Awaiting tasks one by one when they could run in parallel.'],
    proTips: ['Use Promise.all([...awaitPromises]) for parallel loading.', 'await works inside any function marked async — including event handlers.']
  },
  dom: {
    definition: 'The DOM is the bridge between JavaScript and your HTML page. It turns your page into a tree of objects you can change live.',
    whyUse: 'Every dynamic thing on a website is DOM work: showing a "Welcome, Ravi!" message after login, hiding a menu when you click X, changing the theme to dark mode, adding a new comment to a list. DOM manipulation is what makes a page feel alive.',
    whereUse: null,
    syntax: null,
    explanation: 'The browser builds a DOM tree from your HTML. JavaScript finds elements with querySelector(), changes text with textContent, changes styles with style, and toggles classes with classList. Always wait for the page to load before touching the DOM.',
    examples: [
      { title: 'Select an Element', code: '// Runs in the browser (HTML page needed)\nconst heading = document.querySelector("h1")\nconsole.log(heading.tagName)', output: 'H1' },
      { title: 'Change Text and HTML', code: '// Browser only\nconst el = document.querySelector("#message")\nel.textContent = "Login successful!"\nel.innerHTML = "<strong>Bold</strong> message"', output: 'Updates the element live' },
      { title: 'Change Styles', code: '// Browser only\nconst box = document.querySelector(".card")\nbox.style.backgroundColor = "lightblue"\nbox.style.padding = "20px"', output: 'Card turns light blue' },
      { title: 'Toggle a CSS Class', code: '// Browser only\nconst menu = document.querySelector("#menu")\nmenu.classList.add("open")\nmenu.classList.toggle("hidden")', output: 'Adds/removes class' },
      { title: 'Create and Add Elements', code: '// Browser only\nconst list = document.querySelector("ul")\nconst item = document.createElement("li")\nitem.textContent = "New student joined"\nlist.appendChild(item)', output: 'New item appears in the list' }
    ],
    keyPoints: ['querySelector() is the most useful selector — CSS syntax works.', 'textContent is safer than innerHTML (stops injection attacks).', 'DOM code runs only in browsers, not in Node.js.'],
    commonMistakes: ['Running DOM code before the HTML is loaded.', 'Using getElementById when querySelector is more flexible.'],
    proTips: ['Run DOM code after DOMContentLoaded or at the end of body.', 'Change classes (classList) instead of many individual styles — cleaner CSS.']
  },
  events: {
    definition: 'Events are things that happen on the page — clicks, key presses, form submits, scrolling. JavaScript listens and reacts.',
    whyUse: 'Without events, pages would be dead posters. Events power: the login button, search-as-you-type suggestions, form validation while typing, closing a popup, dragging items, and infinite scrolling. Every interactive feature starts with an event listener.',
    whereUse: null,
    syntax: null,
    explanation: 'Attach a listener with element.addEventListener("click", function). The callback receives an event object e with details: e.target (what was clicked), e.key (which key), e.preventDefault() (stop the default browser action). Event delegation means one listener on a parent handles many children — great for lists.',
    examples: [
      { title: 'Click Event', code: '// Browser only\nconst btn = document.querySelector("#myBtn")\nbtn.addEventListener("click", () => {\n  console.log("Button clicked!")\n})', output: 'Logs when the button is clicked' },
      { title: 'Event Object', code: '// Browser only\ndocument.addEventListener("keydown", (e) => {\n  console.log("You pressed:", e.key)\n})', output: 'You pressed: a' },
      { title: 'Form Submit', code: '// Browser only\nconst form = document.querySelector("form")\nform.addEventListener("submit", (e) => {\n  e.preventDefault()   // stop page reload\n  console.log("Form submitted!")\n})', output: 'Logs without refreshing the page' },
      { title: 'Event Delegation', code: '// Browser only - one listener for all list items\ndocument.querySelector("ul").addEventListener("click", (e) => {\n  if (e.target.tagName === "LI") {\n    console.log("Clicked:", e.target.textContent)\n  }\n})', output: 'Works for existing AND future items' },
      { title: 'Input Event (Real Life)', code: '// Browser only\nconst search = document.querySelector("#search")\nsearch.addEventListener("input", (e) => {\n  console.log("Searching for:", e.target.value)\n})', output: 'Logs on every keystroke' }
    ],
    keyPoints: ['addEventListener is better than onclick =.', 'e.preventDefault() stops default actions (page reload, link jump).', 'Event delegation: listen on the parent, check e.target.'],
    commonMistakes: ['Forgetting e.preventDefault() on forms — page reloads and data is lost.', 'Adding listeners to elements that do not exist yet.'],
    proTips: ['Use event delegation for lists that change dynamically.', 'Use { once: true } for a button that should work only one time.']
  },
  classes: {
    definition: 'Classes are blueprints for creating objects. They group data (properties) and behavior (methods) for one real-world thing.',
    whyUse: 'Real projects model real things: a Student class holds name, marks, and a method to calculate grades. A Product class holds price and a discount method. Classes keep large apps organized and let you reuse code through inheritance — build once, extend later.',
    whereUse: null,
    syntax: null,
    explanation: 'constructor() runs when you create a new instance with new. Methods live inside the class body. extends lets a child class inherit from a parent; super() calls the parent constructor. Private fields (#) hide data so nothing outside can change it by mistake.',
    examples: [
      { title: 'Basic Class', code: 'class Student {\n  constructor(name, marks) {\n    this.name = name\n    this.marks = marks\n  }\n  grade() {\n    return this.marks >= 50 ? "Pass" : "Fail"\n  }\n}\nconst s = new Student("Ravi", 85)\nconsole.log(s.name, s.grade())', output: 'Ravi Pass' },
      { title: 'Inheritance', code: 'class Animal {\n  constructor(name) { this.name = name }\n  speak() { return `${this.name} makes a sound` }\n}\nclass Dog extends Animal {\n  speak() { return `${this.name} barks` }\n}\nconsole.log(new Dog("Tommy").speak())', output: 'Tommy barks' },
      { title: 'Static Methods', code: 'class MathHelper {\n  static add(a, b) { return a + b }\n  static isEven(n) { return n % 2 === 0 }\n}\nconsole.log(MathHelper.add(3, 4))\nconsole.log(MathHelper.isEven(4))', output: '7\ntrue' },
      { title: 'Private Fields', code: 'class BankAccount {\n  #balance = 0\n  deposit(amount) { this.#balance += amount }\n  getBalance() { return this.#balance }\n}\nconst acc = new BankAccount()\nacc.deposit(5000)\nconsole.log(acc.getBalance())', output: '5000' },
      { title: 'Real Life: Reusable Class', code: 'class Product {\n  constructor(name, price) {\n    this.name = name\n    this.price = price\n  }\n  discounted(percent) {\n    return this.price * (1 - percent / 100)\n  }\n}\nlet p = new Product("Laptop", 50000)\nconsole.log(p.name, "→", p.discounted(10))', output: 'Laptop → 45000' }
    ],
    keyPoints: ['constructor() runs on new ClassName().', 'extends + super() create child classes.', 'Private fields (#) cannot be read from outside the class.'],
    commonMistakes: ['Forgetting super() before this in a child constructor.', 'Calling static methods on instances (they belong on the class).'],
    proTips: ['Give each class ONE clear job.', 'Use private # fields for data that should not be touched directly.']
  },

  // ==================== ADVANCED LEVEL ====================
  modules: {
    definition: 'Modules let you split your code into separate files. Export what others need, import what you need — clean and organized.',
    whyUse: 'Real apps have thousands of lines. Nobody scrolls one giant file. Teams split code: one file for API calls, one for calculations, one for UI. Modules also keep variables private to each file — no accidental name clashes between teammates.',
    whereUse: null,
    syntax: null,
    explanation: 'ES modules use import and export. Named exports allow many values per file; default export is for one main item per file. Every file is its own module with its own scope. In HTML, add type="module" to the script tag. Node.js also supports modules.',
    examples: [
      { title: 'Named Export and Import', code: '// math.js\nexport const PI = 3.14159\nexport function add(a, b) { return a + b }\n\n// app.js\nimport { PI, add } from "./math.js"\nconsole.log(PI, add(2, 3))', output: '3.14159 5' },
      { title: 'Default Export', code: '// logger.js\nexport default function log(msg) {\n  console.log(msg)\n}\n\n// app.js\nimport log from "./logger.js"\nlog("Loaded from module!")', output: 'Loaded from module!' },
      { title: 'Import Everything', code: '// utils.js\nexport const upper = (s) => s.toUpperCase()\nexport const lower = (s) => s.toLowerCase()\n\n// app.js\nimport * as utils from "./utils.js"\nconsole.log(utils.upper("hello"))', output: 'HELLO' },
      { title: 'Link Module in HTML', code: '<script type="module" src="app.js"></script>\n// Without type="module", import/export will not work', output: 'Module loads in browser' },
      { title: 'Real Life: Project Structure', code: '// api.js\nexport async function getUsers() {\n  return fetch("/api/users").then(r => r.json())\n}\n\n// main.js\nimport { getUsers } from "./api.js"\ngetUsers().then(users => console.log(users.length))', output: 'Works across files' }
    ],
    keyPoints: ['Each file is a module — nothing leaks to the global scope.', 'import needs the file extension in browsers: "./math.js".', 'Modules run in strict mode automatically.'],
    commonMistakes: ['Forgetting type="module" in the script tag.', 'Forgetting ./ at the start of a local import path.'],
    proTips: ['Use named exports for utility files, default exports for main files.', 'Split by feature: cart.js, login.js, api.js — not by type only.']
  },
  json: {
    definition: 'JSON (JavaScript Object Notation) is a text format for data. It is how APIs send and receive information.',
    whyUse: 'Every API call returns JSON: your Instagram feed, weather app data, payment status. When you save data to localStorage or send it to a server, it travels as JSON. If you work with web apps, you will use JSON every single day.',
    whereUse: null,
    syntax: null,
    explanation: 'JSON.stringify(object) converts a JavaScript object INTO a JSON string (to send or save). JSON.parse(string) converts it BACK into an object (to use). JSON only supports strings, numbers, booleans, arrays, objects, and null — no functions, no undefined, and keys must be in double quotes.',
    examples: [
      { title: 'Object to JSON String', code: 'const user = { name: "Ravi", age: 21, active: true }\nconst json = JSON.stringify(user)\nconsole.log(json)\nconsole.log(typeof json)', output: '{"name":"Ravi","age":21,"active":true}\nstring' },
      { title: 'JSON String to Object', code: 'const json = \'{"name":"Anita","age":22}\'\nconst user = JSON.parse(json)\nconsole.log(user.name, user.age)', output: 'Anita 22' },
      { title: 'Pretty Print', code: 'const data = { name: "test", items: [1, 2, 3] }\nconsole.log(JSON.stringify(data, null, 2))', output: '{\n  "name": "test",\n  "items": [\n    1,\n    2,\n    3\n  ]\n}' },
      { title: 'Array of Objects (Like a Real API)', code: 'const students = [\n  { name: "Ravi", marks: 85 },\n  { name: "Anita", marks: 92 }\n]\nconst json = JSON.stringify(students)\nconst back = JSON.parse(json)\nconsole.log(back[1].name)', output: 'Anita' },
      { title: 'Remove Secrets Before Saving', code: 'const user = { name: "Ravi", password: "secret123" }\nconst safe = JSON.stringify(user, (key, val) => {\n  if (key === "password") return undefined\n  return val\n})\nconsole.log(safe)', output: '{"name":"Ravi"}' }
    ],
    keyPoints: ['JSON keys must be in double quotes: "name".', 'JSON.stringify returns undefined for functions and undefined values.', 'JSON.parse THROWS an error on broken JSON.'],
    commonMistakes: ['Trying to stringify functions or undefined.', 'Forgetting to wrap JSON.parse in try/catch.'],
    proTips: ['Always wrap JSON.parse in try/catch — bad data crashes apps.', 'Use JSON.stringify(obj, null, 2) for readable debugging.']
  },
  fetch: {
    definition: 'The Fetch API sends HTTP requests from JavaScript — it is how your app talks to servers and APIs.',
    whyUse: 'Real apps live on fetch: loading Instagram posts, checking payment status, submitting a contact form, getting weather data, logging in. Anytime your app needs data it does not have locally, it fetches it from an API.',
    whereUse: null,
    syntax: null,
    explanation: 'fetch(url) returns a Promise that resolves to a Response. Call res.json() to read the data. Important: fetch only fails on network errors — a 404 or 500 still "succeeds", so you must check res.ok yourself. For POST requests, pass options: method, headers, body.',
    examples: [
      { title: 'GET Request (Read Data)', code: 'async function getTodo() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")\n  const data = await res.json()\n  console.log(data.title)\n}\ngetTodo()', output: 'delectus aut autem (from API)' },
      { title: 'POST Request (Send Data)', code: 'async function createPost() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ title: "Hello", body: "My first post" })\n  })\n  const data = await res.json()\n  console.log("Created id:", data.id)\n}\ncreatePost()', output: 'Created id: 101 (from API)' },
      { title: 'Check for Errors (res.ok)', code: 'async function safeFetch(url) {\n  try {\n    const res = await fetch(url)\n    if (!res.ok) throw new Error(`HTTP ${res.status}`)\n    return await res.json()\n  } catch (err) {\n    console.log("Failed:", err.message)\n  }\n}\nsafeFetch("https://jsonplaceholder.typicode.com/nope")', output: 'Failed: HTTP 404' },
      { title: 'Load a List', code: 'async function loadUsers() {\n  const res = await fetch("https://jsonplaceholder.typicode.com/users")\n  const users = await res.json()\n  users.slice(0, 3).forEach((u) => console.log(u.name))\n}\nloadUsers()', output: 'Leanne Graham\nErvin Howell\nClementine Bauch (from API)' },
      { title: 'Timeout with AbortController', code: 'const controller = new AbortController()\nsetTimeout(() => controller.abort(), 5000)\n\nfetch("https://jsonplaceholder.typicode.com/posts", {\n  signal: controller.signal\n}).catch(() => console.log("Request took too long"))', output: 'Aborts after 5 seconds if slow' }
    ],
    keyPoints: ['fetch() returns a Promise — use await.', 'ALWAYS check res.ok — 404/500 do not throw by themselves.', 'Send objects as JSON.stringify(obj) in the body.'],
    commonMistakes: ['Forgetting await on res.json() — you get a Promise, not data.', 'Trusting fetch to reject on HTTP errors — it does not.'],
    proTips: ['Wrap every fetch in try/catch with async/await.', 'Use AbortController for timeouts and canceling requests.']
  },
  storage: {
    definition: 'Web Storage lets you save data in the browser so it stays even after the page reloads.',
    whyUse: 'Real features need memory: remembering a logged-in user, saving a dark-mode choice, keeping a shopping cart, storing a draft of a form. Without storage, users would have to log in again on every page refresh.',
    whereUse: null,
    syntax: null,
    explanation: 'localStorage keeps data forever (until the user clears it). sessionStorage lasts only for the current tab. Both store STRINGS only — so convert objects with JSON.stringify before saving and JSON.parse after reading. Common keys: setItem, getItem, removeItem, clear.',
    examples: [
      { title: 'Save and Read a Value', code: '// Browser only\nlocalStorage.setItem("username", "Ravi")\nconst name = localStorage.getItem("username")\nconsole.log(name)', output: 'Ravi' },
      { title: 'Save an Object', code: '// Browser only\nconst user = { name: "Anita", age: 22 }\nlocalStorage.setItem("user", JSON.stringify(user))\nconst back = JSON.parse(localStorage.getItem("user"))\nconsole.log(back.name, back.age)', output: 'Anita 22' },
      { title: 'Remove and Clear', code: '// Browser only\nlocalStorage.setItem("temp", "x")\nlocalStorage.removeItem("temp")\nlocalStorage.clear()   // wipes EVERYTHING for this site', output: 'Storage cleared' },
      { title: 'Session Storage', code: '// Browser only - cleared when tab closes\nsessionStorage.setItem("token", "abc123")\nconsole.log(sessionStorage.getItem("token"))', output: 'abc123' },
      { title: 'Real Life: Remember Dark Mode', code: '// Browser only\nlocalStorage.setItem("theme", "dark")\n// On next page load:\nconst theme = localStorage.getItem("theme")\nif (theme === "dark") {\n  document.body.classList.add("dark")\n}', output: 'Theme stays after reload' }
    ],
    keyPoints: ['localStorage = permanent, sessionStorage = until tab closes.', 'Both store strings ONLY — use JSON for objects.', 'Data is per-origin: your site cannot read another site\'s data.'],
    commonMistakes: ['Storing objects without JSON.stringify.', 'Storing huge data — localStorage has about 5MB limit.'],
    proTips: ['Wrap getItem/parse in try/catch — private browsing can block storage.', 'Do NOT store passwords or secrets in localStorage.']
  },
  error: {
    definition: 'Error handling stops your app from crashing. try/catch catches problems so the rest of the app keeps running.',
    whyUse: 'Apps fail all the time: network drops, wrong data, server down. Without error handling, one bad API response would freeze the whole page. With it, you show a friendly message like "Could not load posts. Tap to retry" and the user keeps working.',
    whereUse: null,
    syntax: null,
    explanation: 'Wrap risky code in try. If something goes wrong, catch receives the error. finally always runs — perfect for cleanup like hiding a spinner. You can throw your own errors with throw new Error("message") and create custom error classes for specific failures.',
    examples: [
      { title: 'Basic Try/Catch', code: 'try {\n  console.log("Working...")\n  undefinedFunction()\n} catch (err) {\n  console.log("Something broke:", err.message)\n}', output: 'Working...\nSomething broke: undefinedFunction is not defined' },
      { title: 'Throw Your Own Error', code: 'function divide(a, b) {\n  if (b === 0) throw new Error("Cannot divide by zero")\n  return a / b\n}\ntry {\n  console.log(divide(10, 0))\n} catch (err) {\n  console.log(err.message)\n}', output: 'Cannot divide by zero' },
      { title: 'Finally Always Runs', code: 'function process() {\n  try {\n    console.log("Start")\n    throw new Error("Oops!")\n  } catch (err) {\n    console.log("Caught:", err.message)\n  } finally {\n    console.log("Cleanup done")\n  }\n}\nprocess()', output: 'Start\nCaught: Oops!\nCleanup done' },
      { title: 'Custom Error Class', code: 'class ValidationError extends Error {\n  constructor(field, message) {\n    super(message)\n    this.field = field\n    this.name = "ValidationError"\n  }\n}\ntry {\n  throw new ValidationError("email", "Email is invalid")\n} catch (err) {\n  console.log(`${err.name} in ${err.field}: ${err.message}`)\n}', output: 'ValidationError in email: Email is invalid' },
      { title: 'Safe Fetch with Errors', code: 'async function loadPosts() {\n  try {\n    const res = await fetch("https://jsonplaceholder.typicode.com/posts")\n    if (!res.ok) throw new Error(`HTTP ${res.status}`)\n    const posts = await res.json()\n    console.log("Loaded", posts.length, "posts")\n  } catch (err) {\n    console.log("Could not load posts:", err.message)\n  } finally {\n    console.log("Done loading")\n  }\n}\nloadPosts()', output: 'Loaded 100 posts\nDone loading' }
    ],
    keyPoints: ['try/catch does NOT catch syntax errors (missing brace etc.).', 'finally runs whether you succeed or fail.', 'Async code needs try/catch around await.'],
    commonMistakes: ['Empty catch blocks — errors disappear and bugs hide.', 'Showing raw error messages to users — show friendly text instead.'],
    proTips: ['Always log errors for debugging: console.error(err).', 'Create custom error classes for different failure types.']
  },
  regex: {
    definition: 'Regular expressions (regex) are patterns for finding and checking text. They validate emails, extract numbers, and clean data.',
    whyUse: 'Forms validate with regex every day: "enter a valid email", "password must contain 8+ characters", checking a phone number format. Data tools use regex to clean messy text — removing extra spaces, extracting prices from descriptions, finding dates in logs.',
    whereUse: null,
    syntax: null,
    explanation: 'Write patterns between slashes: /pattern/flags. test() returns true/false, match() returns matches, replace() swaps them out. Common pieces: \\d = digit, \\w = word char, . = any char, * = zero or more, + = one or more, {3} = exactly 3 times, ^ and $ = start and end.',
    examples: [
      { title: 'Test a Pattern', code: 'const pattern = /hello/i   // i = ignore upper/lower case\nconsole.log(pattern.test("Hello World"))\nconsole.log(pattern.test("Goodbye"))', output: 'true\nfalse' },
      { title: 'Find Numbers in Text', code: 'const text = "Order 25 items for 1500 rupees"\nconst numbers = text.match(/\\d+/g)\nconsole.log(numbers)', output: "[ '25', '1500' ]" },
      { title: 'Validate an Email', code: 'const emailCheck = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\nconsole.log(emailCheck.test("student@school.com"))\nconsole.log(emailCheck.test("bad-email"))\nconsole.log(emailCheck.test("test@.com"))', output: 'true\nfalse\nfalse' },
      { title: 'Replace Text', code: 'const msg = "Hello    World  !"\nconst clean = msg.replace(/\\s+/g, " ")\nconsole.log(clean)', output: 'Hello World !' },
      { title: 'Extract a Date', code: 'const log = "Meeting on 2025-08-15 at 10:30"\nconst match = log.match(/(\\d{4})-(\\d{2})-(\\d{2})/)\nconsole.log(match[1], match[2], match[3])', output: '2025 08 15' }
    ],
    keyPoints: ['test() → true/false, match() → array or null.', 'Use the g flag for global (all matches).', '^ and $ anchor a pattern to the start and end.'],
    commonMistakes: ['Forgetting to escape special characters like . * + in patterns.', 'Greedy matching taking more than expected.'],
    proTips: ['Test regex at regex1001.com before using it in code.', 'For simple "contains" checks, includes() is easier than regex.']
  },
  project: {
    definition: 'Final project: build a complete JavaScript website on your own — from planning to a working, deployed site.',
    whyUse: 'This is the level employers and clients care about. Knowing syntax is not enough — you must be able to take an idea, break it into steps, write the code, fix the bugs, and ship a working website. This lesson gives you the professional workflow and a full example to build from.',
    whereUse: null,
    syntax: null,
    explanation: 'Professional workflow: (1) Plan — list the pages and features. (2) Structure — create folders and files. (3) Build the HTML skeleton first, then style with CSS, then add JavaScript. (4) Test every feature and fix errors using the console. (5) Deploy free on GitHub Pages or Netlify. Below is a complete To-Do website you can build step by step — then rebuild it for YOUR idea (portfolio, shop, quiz app) without following this guide.',
    examples: [
      { title: 'Project Folder Structure', code: 'my-website/\n├── index.html      (main page)\n├── style.css       (all styles)\n├── app.js          (all JavaScript)\n└── README.md       (what the project does)\n\n// Start every page with this skeleton:', output: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Site</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>My Website</h1>\n  <script src="app.js"></script>\n</body>\n</html>' },
      { title: 'Step 1: HTML Structure', code: '<!-- index.html -->\n<h1>My To-Do List</h1>\n<input id="taskInput" placeholder="Add a task...">\n<button id="addBtn">Add</button>\n<ul id="taskList"></ul>\n<p id="count"></p>', output: 'A simple page skeleton' },
      { title: 'Step 2: Core JavaScript Logic', code: '// app.js\nconst tasks = []\nconst input = document.getElementById("taskInput")\nconst list = document.getElementById("taskList")\nconst count = document.getElementById("count")\n\nfunction render() {\n  list.innerHTML = ""\n  tasks.forEach((task, i) => {\n    const li = document.createElement("li")\n    li.textContent = task\n    li.onclick = () => { tasks.splice(i, 1); render() }\n    list.appendChild(li)\n  })\n  count.textContent = tasks.length + " task(s)"\n}\n\ndocument.getElementById("addBtn").onclick = () => {\n  const text = input.value.trim()\n  if (text === "") return\n  tasks.push(text)\n  input.value = ""\n  render()\n}\n\nrender()', output: 'Working to-do list: add and delete tasks' },
      { title: 'Step 3: Save Data with localStorage', code: '// Keep tasks after refresh\nfunction save() {\n  localStorage.setItem("tasks", JSON.stringify(tasks))\n}\nfunction load() {\n  const saved = localStorage.getItem("tasks")\n  if (saved) tasks.push(...JSON.parse(saved))\n}\n// Call load() at the start, save() after every change', output: 'Tasks survive page reloads' },
      { title: 'Step 4: Testing Checklist', code: '// Test EVERY feature before you ship:\n// 1. Add an empty task  → should do nothing\n// 2. Add a normal task   → appears in the list\n// 3. Click a task        → gets deleted\n// 4. Refresh the page    → tasks still there\n// 5. Open Console (F12)  → no red errors\n// 6. Try on your phone   → layout looks fine', output: 'All checks pass → ready to deploy' }
    ],
    keyPoints: ['Build in order: HTML structure → CSS style → JavaScript logic.', 'The console (F12) is your debugging partner — fix every red error.', 'Test weird cases: empty input, long text, fast clicks.'],
    commonMistakes: ['Writing all JavaScript before having any HTML structure.', 'Deploying without testing on a real phone.', 'Leaving console errors visible to users.'],
    proTips: ['Finish ONE small feature completely before starting the next.', 'Deploy early on Netlify or GitHub Pages — real URLs motivate you.', 'After this project, rebuild the same idea with a new design — that proves you learned it.']
  }
}

export default javascript
