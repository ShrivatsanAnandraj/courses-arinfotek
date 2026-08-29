const python = {
  intro: {
    definition: 'Python is a popular programming language. It was created by Guido van Rossum, and released in 1991. Python can be used for web development, data science, automation, and more.',
    explanation: 'Python uses indentation for code blocks instead of curly braces. It is dynamically typed, meaning you do not need to declare variable types.',
    syntax: null,
    examples: [
      { title: 'Hello World', code: 'print("Hello, World!")', output: 'Hello, World!' },
      { title: 'Variable Assignment', code: 'name = "Alice"\nage = 25\nprint(f"My name is {name} and I am {age} years old")', output: 'My name is Alice and I am 25 years old' },
      { title: 'Simple Calculation', code: 'x = 10\ny = 3\nprint("Sum:", x + y)\nprint("Product:", x * y)', output: 'Sum: 13\nProduct: 30' }
    ],
    keyPoints: [
      'Note: Python uses indentation, not braces, for code blocks',
      'Note: Python is dynamically typed — no need to declare variable types',
      'Note: Python has a vast standard library often called "batteries included"'
    ],
    commonMistakes: [
      'Warning: Forgetting colons after if, for, while, def, or class statements',
      'Warning: Incorrect indentation leads to IndentationError',
      'Warning: Confusing assignment (=) with comparison (==)'
    ],
    proTips: [
      'Tip: Use virtual environments to manage project dependencies',
      'Tip: Follow PEP 8 style guide for consistent code formatting',
      'Tip: Use f-strings for clean and readable string formatting'
    ]
  },

  setup: {
    definition: 'To start coding in Python, you need to install the Python interpreter. You can download it from python.org or use your system\'s package manager.',
    explanation: 'After installing Python, verify it by running python --version in your terminal. You can then create and run .py files using the python command or an IDE like VS Code.',
    syntax: null,
    examples: [
      { title: 'Check Python Version', code: 'import sys\nprint("Python version:", sys.version)', output: 'Python version: 3.x.x (details vary by installation)' },
      { title: 'Check Platform Info', code: 'import platform\nprint("Platform:", platform.system())\nprint("Python:", platform.python_version())', output: 'Platform: Windows\nPython: 3.x.x' },
      { title: 'Run a Script', code: 'print("This script is running!")\nprint("Setup complete!")', output: 'This script is running!\nSetup complete!' }
    ],
    keyPoints: [
      'Note: Download Python from python.org or use your system package manager',
      'Note: Use python --version to verify installation',
      'Note: pip is Python\'s package manager, installed automatically with Python'
    ],
    commonMistakes: [
      'Warning: Not adding Python to the system PATH during installation',
      'Warning: Using python instead of python3 on systems with Python 2 pre-installed',
      'Warning: Installing packages globally instead of in a virtual environment'
    ],
    proTips: [
      'Tip: Always use virtual environments (python -m venv venv) for new projects',
      'Tip: Use pyenv to manage multiple Python versions on one machine',
      'Tip: Use python -m pip to ensure you are using the correct pip version'
    ]
  },

  variables: {
    definition: 'Variables are used to store data values. In Python, you create a variable by assigning a value to it — no declaration needed.',
    explanation: 'You create a variable using the assignment operator (=). Python is dynamically typed, so the type is determined at runtime. Variable names should use snake_case.',
    syntax: null,
    examples: [
      { title: 'Basic Assignment', code: 'name = "Alice"\nage = 30\nheight = 5.7\nprint(name, age, height)', output: 'Alice 30 5.7' },
      { title: 'Multiple Assignment', code: 'x = y = z = 10\nprint(x, y, z)', output: '10 10 10' },
      { title: 'Unpacking', code: 'a, b, c = 1, 2, 3\nprint(a, b, c)', output: '1 2 3' },
      { title: 'Type Checking', code: 'x = 42\nprint(type(x))\ny = "hello"\nprint(type(y))', output: "<class 'int'>\n<class 'str'>" }
    ],
    keyPoints: [
      'Note: Variables do not require explicit type declaration',
      'Note: Use snake_case for variable names by convention',
      'Note: Use the type() function to check a variable\'s type'
    ],
    commonMistakes: [
      'Warning: Using reserved keywords as variable names (e.g., class, import, for)',
      'Warning: Python variables are case-sensitive — Name is not the same as name',
      'Warning: Using hyphens in variable names (my-var is invalid, use my_var)'
    ],
    proTips: [
      'Tip: Use descriptive variable names that convey meaning',
      'Tip: Use type hints for better code documentation and IDE support',
      'Tip: Use constants (ALL_CAPS) for values that should not change'
    ]
  },

  strings: {
    definition: 'Strings are sequences of characters used to represent text. They are created by enclosing characters in single or double quotes.',
    explanation: 'Strings can be created with single or double quotes. Use triple quotes for multi-line strings. f-strings provide a modern way to embed expressions inside strings.',
    syntax: null,
    examples: [
      { title: 'String Creation', code: "s1 = 'Hello'\ns2 = \"World\"\nprint(s1, s2)", output: 'Hello World' },
      { title: 'String Slicing', code: 's = "Hello, World!"\nprint(s[0:5])\nprint(s[7:12])\nprint(s[::-1])', output: 'Hello\nWorld\n!dlroW ,olleH' },
      { title: 'String Methods', code: 's = "  Hello, World!  "\nprint(s.strip())\nprint(s.strip().upper())\nprint(s.strip().lower())', output: 'Hello, World!\nHELLO, WORLD!\nhello, world!' },
      { title: 'f-strings', code: 'name = "Alice"\nage = 25\nprint(f"Name: {name}, Age: {age}")\nprint(f"Next year: {age + 1}")', output: 'Name: Alice, Age: 25\nNext year: 26' }
    ],
    keyPoints: [
      'Note: Strings are immutable — any modification creates a new string',
      'Note: Use f-strings (f"...") for modern string formatting',
      'Note: Strings support indexing, slicing, and iteration'
    ],
    commonMistakes: [
      'Warning: Trying to modify a string in place — strings are immutable',
      'Warning: String indexing starts at 0, not 1',
      'Warning: Using + in loops to build strings is inefficient — use join instead'
    ],
    proTips: [
      'Tip: Use f-strings for readable and efficient string interpolation',
      'Tip: Use str.join() instead of + for concatenating many strings',
      'Tip: Use raw strings (r"...") for regex patterns and Windows paths'
    ]
  },

  operators: {
    definition: 'Operators are special symbols that perform operations on values. Python provides arithmetic, comparison, logical, and membership operators.',
    explanation: 'Python supports several categories of operators: arithmetic (+, -, *, /), comparison (==, !=, >, <), logical (and, or, not), and membership (in, not in).',
    syntax: null,
    examples: [
      { title: 'Arithmetic Operators', code: 'a = 17\nb = 5\nprint("Add:", a + b)\nprint("Sub:", a - b)\nprint("Mul:", a * b)\nprint("Div:", a / b)\nprint("Floor:", a // b)\nprint("Mod:", a % b)\nprint("Pow:", a ** b)', output: 'Add: 22\nSub: 12\nMul: 85\nDiv: 3.4\nFloor: 3\nMod: 2\nPow: 1419857' },
      { title: 'Comparison Operators', code: 'x = 10\nprint(x == 10)\nprint(x != 5)\nprint(x > 5)\nprint(x < 20)', output: 'True\nTrue\nTrue\nTrue' },
      { title: 'Logical Operators', code: 'a = True\nb = False\nprint("and:", a and b)\nprint("or:", a or b)\nprint("not:", not a)', output: 'and: False\nor: True\nnot: False' },
      { title: 'Membership Operators', code: 'fruits = ["apple", "banana", "cherry"]\nprint("apple" in fruits)\nprint("grape" not in fruits)', output: 'True\nTrue' }
    ],
    keyPoints: [
      'Note: // performs floor division (integer division)',
      'Note: ** is the exponentiation operator',
      'Note: is checks identity, == checks equality'
    ],
    commonMistakes: [
      'Warning: Using = (assignment) instead of == (comparison) in conditions',
      'Warning: Expecting / to return an integer — use // for floor division',
      'Warning: Confusing is with == — is checks identity, not value equality'
    ],
    proTips: [
      'Tip: Use chained comparisons: 1 < x < 10',
      'Tip: Remember short-circuit evaluation: and/or return the first determining value',
      'Tip: Know that not in is a single operator, not two separate ones'
    ]
  },

  conditionals: {
    definition: 'Conditional statements let you execute different code based on conditions. Python uses if, elif, and else keywords.',
    explanation: 'Python conditionals use if, elif (else if), and else. The condition is followed by a colon and the code block is indented. Python evaluates conditions from top to bottom.',
    syntax: null,
    examples: [
      { title: 'Basic If-Else', code: 'x = 10\nif x > 5:\n    print("big")\nelse:\n    print("small")', output: 'big' },
      { title: 'If-Elif-Else', code: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")', output: 'B' },
      { title: 'Ternary Operator', code: 'x = 10\nresult = "even" if x % 2 == 0 else "odd"\nprint(result)', output: 'even' },
      { title: 'Nested Conditionals', code: 'age = 25\nhas_license = True\nif age >= 18:\n    if has_license:\n        print("Can drive")\n    else:\n        print("Need license")\nelse:\n    print("Too young")', output: 'Can drive' }
    ],
    keyPoints: [
      'Note: elif is Python\'s equivalent of else if',
      'Note: The ternary syntax is: value_if_true if condition else value_if_false',
      'Note: Only one block executes per conditional chain'
    ],
    commonMistakes: [
      'Warning: Using assignment (=) instead of comparison (==) in conditions',
      'Warning: Forgetting the colon (:) after if, elif, or else',
      'Warning: Incorrect indentation causing blocks to execute unexpectedly'
    ],
    proTips: [
      'Tip: Use early returns to reduce nesting depth',
      'Tip: Use dictionary mapping instead of long if/elif chains',
      'Tip: Leverage Python\'s truthiness — no need to write x == True'
    ]
  },

  loops: {
    definition: 'Loops let you execute a block of code repeatedly. Python provides for loops for iterating over sequences and while loops for executing code as long as a condition is true.',
    explanation: 'for loops iterate over items of a sequence. while loops execute as long as a condition is true. break exits the loop, continue skips to the next iteration.',
    syntax: null,
    examples: [
      { title: 'For Loop with Range', code: 'for i in range(5):\n    print(i, end=" ")', output: '0 1 2 3 4' },
      { title: 'For Loop with List', code: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)', output: 'apple\nbanana\ncherry' },
      { title: 'While Loop', code: 'count = 0\nwhile count < 5:\n    print(count, end=" ")\n    count += 1', output: '0 1 2 3 4' },
      { title: 'Break and Continue', code: 'for i in range(10):\n    if i == 3:\n        continue\n    if i == 7:\n        break\n    print(i, end=" ")', output: '0 1 2 4 5 6' }
    ],
    keyPoints: [
      'Note: range(n) generates numbers from 0 to n-1',
      'Note: for-else executes the else block if the loop completes without break',
      'Note: enumerate() provides index and value when iterating'
    ],
    commonMistakes: [
      'Warning: Infinite loops when the condition never becomes false',
      'Warning: Modifying a list while iterating over it',
      'Warning: Forgetting to update the loop variable in while loops'
    ],
    proTips: [
      'Tip: Use enumerate() instead of manual index tracking',
      'Tip: Use zip() to iterate over multiple sequences in parallel',
      'Tip: Prefer list comprehensions over simple for loops for creating lists'
    ]
  },

  lists: {
    definition: 'Lists are ordered, mutable collections that can hold elements of different types. They are created with square brackets.',
    explanation: 'Lists are created with square brackets []. They are ordered, mutable, allow duplicates, and support indexing starting at 0. Slicing creates new lists with [start:end:step].',
    syntax: null,
    examples: [
      { title: 'List Creation', code: 'fruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4, 5]\nprint(fruits)\nprint(numbers)', output: "['apple', 'banana', 'cherry']\n[1, 2, 3, 4, 5]" },
      { title: 'List Methods', code: 'nums = [3, 1, 4, 1, 5]\nnums.append(9)\nprint("After append:", nums)\nnums.insert(0, 2)\nprint("After insert:", nums)', output: 'After append: [3, 1, 4, 1, 5, 9]\nAfter insert: [2, 3, 1, 4, 1, 5, 9]' },
      { title: 'List Slicing', code: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])\nprint(nums[:3])\nprint(nums[::-1])', output: '[1, 2, 3]\n[0, 1, 2]\n[5, 4, 3, 2, 1, 0]' },
      { title: 'List Comprehension', code: 'squares = [x**2 for x in range(6)]\nprint(squares)\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)', output: '[0, 1, 4, 9, 16, 25]\n[0, 2, 4, 6, 8]' }
    ],
    keyPoints: [
      'Note: Lists are mutable — elements can be added, removed, and changed',
      'Note: Use append() to add to end, insert() to add at specific index',
      'Note: Slicing creates a new list (does not modify the original)'
    ],
    commonMistakes: [
      'Warning: IndexError when accessing an index that does not exist',
      'Warning: Modifying a list while iterating over it',
      'Warning: Confusing list assignment with copying — a = b does not create a copy'
    ],
    proTips: [
      'Tip: Use list comprehensions for concise list creation and transformation',
      'Tip: Use [:] or copy() to create shallow copies of lists',
      'Tip: Use * for list repetition: [0] * 5 gives [0, 0, 0, 0, 0]'
    ]
  },

  tuples: {
    definition: 'Tuples are ordered, immutable collections. Once created, their elements cannot be changed. They are created with parentheses or commas.',
    explanation: 'Tuples are created with parentheses () or by separating values with commas. They support indexing, slicing, and iteration but not modification methods.',
    syntax: null,
    examples: [
      { title: 'Tuple Creation', code: 'colors = ("red", "green", "blue")\nnumbers = (1, 2, 3, 4, 5)\nsingle = (42,)\nprint(colors)\nprint(single)', output: "('red', 'green', 'blue')\n(42,)" },
      { title: 'Tuple Unpacking', code: 'point = (3, 4)\nx, y = point\nprint(f"x: {x}, y: {y}")\nfirst, *rest = (1, 2, 3, 4)\nprint(first, rest)', output: 'x: 3, y: 4\n1 [2, 3, 4]' },
      { title: 'Tuple Methods', code: 'nums = (1, 2, 3, 2, 2, 4)\nprint("Count of 2:", nums.count(2))\nprint("Index of 3:", nums.index(3))', output: 'Count of 2: 3\nIndex of 3: 2' },
      { title: 'Tuple as Dict Key', code: 'locations = {\n    (40.7128, -74.0060): "New York",\n    (34.0522, -118.2437): "Los Angeles"\n}\nprint(locations[(40.7128, -74.0060)])', output: 'New York' }
    ],
    keyPoints: [
      'Note: Tuples are immutable — elements cannot be changed after creation',
      'Note: A single-element tuple requires a trailing comma: (42,)',
      'Note: Tuples can be used as dictionary keys (lists cannot)'
    ],
    commonMistakes: [
      'Warning: Forgetting the trailing comma for single-element tuples — (42) is int, (42,) is tuple',
      'Warning: Trying to modify a tuple raises TypeError',
      'Warning: Using tuples when lists would be more appropriate'
    ],
    proTips: [
      'Tip: Use tuples for returning multiple values from functions',
      'Tip: Use named tuples (collections.namedtuple) for readable tuple access',
      'Tip: Use tuple unpacking for clean variable swaps: a, b = b, a'
    ]
  },

  dicts: {
    definition: 'Dictionaries are collections of key-value pairs. They are mutable and provide fast lookups. Keys must be unique and immutable.',
    explanation: 'Dictionaries are created with curly braces {} or the dict() constructor. Access values using dict[key] or the get() method. Dictionaries support iteration over keys, values, or items.',
    syntax: null,
    examples: [
      { title: 'Dictionary Creation', code: 'person = {"name": "Alice", "age": 30, "city": "NYC"}\nprint(person)\nprint(person["name"])', output: "{'name': 'Alice', 'age': 30, 'city': 'NYC'}\nAlice" },
      { title: 'Dictionary Methods', code: 'person = {"name": "Alice", "age": 30}\nperson["email"] = "alice@example.com"\nperson.update({"age": 31, "phone": "555-1234"})\nprint(person)', output: "{'name': 'Alice', 'age': 31, 'email': 'alice@example.com', 'phone': '555-1234'}" },
      { title: 'Dictionary Comprehension', code: 'squares = {x: x**2 for x in range(6)}\nprint(squares)', output: '{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}' },
      { title: 'Iterating Dictionaries', code: 'scores = {"Alice": 90, "Bob": 85, "Charlie": 92}\nfor name, score in scores.items():\n    print(f"{name}: {score}")', output: 'Alice: 90\nBob: 85\nCharlie: 92' }
    ],
    keyPoints: [
      'Note: Keys must be immutable (strings, numbers, tuples)',
      'Note: Use get() to safely access keys that may not exist',
      'Note: Dictionaries maintain insertion order in Python 3.7+'
    ],
    commonMistakes: [
      'Warning: Accessing a key that does not exist raises KeyError — use get() or check with in',
      'Warning: Trying to use mutable types as keys (lists cannot be dict keys)',
      'Warning: Modifying a dictionary while iterating over it'
    ],
    proTips: [
      'Tip: Use dict.get(key, default) to avoid KeyError',
      'Tip: Use collections.defaultdict for automatic default values',
      'Tip: Use {**dict1, **dict2} to merge dictionaries (Python 3.5+)'
    ]
  },

  sets: {
    definition: 'Sets are unordered collections of unique elements. They are useful for removing duplicates and performing mathematical set operations.',
    explanation: 'Sets are created with curly braces {} or the set() constructor. Empty sets must use set() (not {} which creates a dict). Sets support union (|), intersection (&), and difference (-).',
    syntax: null,
    examples: [
      { title: 'Set Creation', code: 'fruits = {"apple", "banana", "cherry", "apple"}\nprint(fruits)\nnumbers = set([1, 2, 2, 3, 3, 3])\nprint(numbers)', output: "{'apple', 'cherry', 'banana'}\n{1, 2, 3}" },
      { title: 'Set Operations', code: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint("Union:", a | b)\nprint("Intersection:", a & b)\nprint("Difference:", a - b)', output: 'Union: {1, 2, 3, 4, 5, 6}\nIntersection: {3, 4}\nDifference: {1, 2}' },
      { title: 'Set Methods', code: 's = {1, 2, 3}\ns.add(4)\nprint("After add:", s)\ns.remove(2)\nprint("After remove:", s)', output: 'After add: {1, 2, 3, 4}\nAfter remove: {1, 3, 4}' },
      { title: 'Remove Duplicates', code: 'words = ["apple", "banana", "apple", "cherry", "banana"]\nunique = list(set(words))\nprint(unique)', output: "['cherry', 'banana', 'apple']" }
    ],
    keyPoints: [
      'Note: Sets automatically remove duplicate elements',
      'Note: Use set() to create an empty set (not {} which is a dict)',
      'Note: Membership testing in sets is O(1) on average'
    ],
    commonMistakes: [
      'Warning: Using {} to create an empty set creates a dict instead',
      'Warning: Trying to access elements by index — sets are unordered',
      'Warning: Sets cannot contain mutable elements like lists'
    ],
    proTips: [
      'Tip: Use sets for fast membership testing instead of lists',
      'Tip: Use set operations to efficiently compare collections',
      'Tip: Use frozensets when you need an immutable set'
    ]
  },

  functions: {
    definition: 'Functions are reusable blocks of code that perform a specific task. They are defined with the def keyword.',
    explanation: 'Functions are defined with def followed by the name, parameters in parentheses, and a colon. Use return to send back a value. Parameters can have default values.',
    syntax: null,
    examples: [
      { title: 'Basic Function', code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))\nprint(greet("Bob"))', output: 'Hello, Alice!\nHello, Bob!' },
      { title: 'Default Arguments', code: 'def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(3, 3))', output: '9\n27' },
      { title: 'Variable Arguments', code: 'def add_all(*args):\n    return sum(args)\n\nprint(add_all(1, 2, 3))\nprint(add_all(1, 2, 3, 4, 5))', output: '6\n15' },
      { title: 'Keyword Arguments', code: 'def build_profile(**kwargs):\n    return kwargs\n\nprint(build_profile(name="Alice", age=30, job="Engineer"))', output: "{'name': 'Alice', 'age': 30, 'job': 'Engineer'}" }
    ],
    keyPoints: [
      'Note: Functions are defined with the def keyword',
      'Note: Use return to send back a value from a function',
      'Note: *args collects variable positional arguments into a tuple'
    ],
    commonMistakes: [
      'Warning: Using mutable default arguments (def f(x=[])) — use None instead',
      'Warning: Forgetting to return a value — function returns None by default',
      'Warning: Modifying mutable default arguments across calls'
    ],
    proTips: [
      'Tip: Use type hints for better documentation: def greet(name: str) -> str:',
      'Tip: Keep functions small and focused on a single responsibility',
      'Tip: Use docstrings to document function purpose and parameters'
    ]
  },

  lambda: {
    definition: 'Lambda functions are small, anonymous functions defined with the lambda keyword. They can take any number of arguments but must contain a single expression.',
    explanation: 'Lambda functions are defined as lambda arguments: expression. They take multiple arguments but only one expression. The expression is evaluated and returned automatically.',
    syntax: null,
    examples: [
      { title: 'Basic Lambda', code: 'square = lambda x: x ** 2\nprint(square(5))\nprint(square(10))', output: '25\n100' },
      { title: 'Lambda with Multiple Args', code: 'add = lambda x, y: x + y\nprint(add(3, 4))\nprint(add(10, 20))', output: '7\n30' },
      { title: 'Lambda with sorted()', code: 'students = [("Alice", 90), ("Bob", 85), ("Charlie", 92)]\nby_grade = sorted(students, key=lambda s: s[1])\nprint(by_grade)', output: "[('Bob', 85), ('Alice', 90), ('Charlie', 92)]" },
      { title: 'Lambda with map()', code: 'nums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)', output: '[1, 4, 9, 16, 25]' },
      { title: 'Lambda with filter()', code: 'nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)', output: '[2, 4, 6, 8, 10]' }
    ],
    keyPoints: [
      'Note: Lambda functions are anonymous — they do not have a name',
      'Note: They can only contain a single expression',
      'Note: Commonly used with map(), filter(), and sorted()'
    ],
    commonMistakes: [
      'Warning: Trying to include statements or multiple expressions in a lambda',
      'Warning: Using lambdas when a named function would be more readable',
      'Warning: Using lambdas for complex logic — use def instead'
    ],
    proTips: [
      'Tip: Use lambdas for short, one-off functions in higher-order function calls',
      'Tip: Use def for anything beyond a simple one-liner',
      'Tip: Use map() and filter() with lambdas for functional-style transformations'
    ]
  },

  scope: {
    definition: 'Scope determines where a variable is accessible in your code. Python follows the LEGB rule: Local, Enclosing, Global, and Built-in.',
    explanation: 'Python resolves variable names using the LEGB rule: Local (inside current function), Enclosing (in enclosing function), Global (module level), and Built-in (Python\'s built-in names).',
    syntax: null,
    examples: [
      { title: 'Local Scope', code: 'def my_func():\n    x = 10\n    print("Local x:", x)\n\nmy_func()', output: 'Local x: 10' },
      { title: 'Global Scope', code: 'x = "global"\n\ndef my_func():\n    print("Inside func:", x)\n\nmy_func()\nprint("Outside func:", x)', output: 'Inside func: global\nOutside func: global' },
      { title: 'Nonlocal Scope', code: 'def outer():\n    x = "outer"\n    def inner():\n        nonlocal x\n        x = "inner"\n    inner()\n    print("After inner:", x)\n\nouter()', output: 'After inner: inner' },
      { title: 'Global Keyword', code: 'counter = 0\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nincrement()\nprint("Counter:", counter)', output: 'Counter: 2' }
    ],
    keyPoints: [
      'Note: LEGB rule: Local - Enclosing - Global - Built-in',
      'Note: Variables defined in a function are local by default',
      'Note: Use global to modify a global variable inside a function'
    ],
    commonMistakes: [
      'Warning: Trying to modify a global variable without the global keyword',
      'Warning: Shadowing built-in names (e.g., naming a variable "list" or "print")',
      'Warning: Using global too often — it makes code harder to test'
    ],
    proTips: [
      'Tip: Minimize use of global variables — prefer passing arguments and returning values',
      'Tip: Use nonlocal in nested functions to modify enclosing scope variables',
      'Tip: Avoid shadowing built-in names (len, list, dict, etc.)'
    ]
  },

  classes: {
    definition: 'Classes are blueprints for creating objects. They encapsulate data (attributes) and behavior (methods) into a single unit.',
    explanation: 'Classes are defined with the class keyword. The __init__ method initializes new objects. self refers to the current instance. Methods are functions inside the class.',
    syntax: null,
    examples: [
      { title: 'Basic Class', code: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Rex", 5)\nprint(my_dog.bark())\nprint(f"{my_dog.name} is {my_dog.age} years old")', output: 'Rex says Woof!\nRex is 5 years old' },
      { title: 'Class Attributes', code: 'class Car:\n    wheels = 4\n    \n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n\nmy_car = Car("Toyota", "Camry")\nprint(f"{my_car.make} {my_car.model}")\nprint(f"Wheels: {Car.wheels}")', output: 'Toyota Camry\nWheels: 4' },
      { title: 'Methods', code: 'class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance\n\naccount = BankAccount(100)\nprint("Deposit:", account.deposit(50))', output: 'Deposit: 150' },
      { title: 'String Representation', code: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f"Point({self.x}, {self.y})"\n\np = Point(3, 4)\nprint(p)', output: 'Point(3, 4)' }
    ],
    keyPoints: [
      'Note: __init__ is the constructor method called when creating new instances',
      'Note: self refers to the current instance of the class',
      'Note: __str__ controls what print() displays for the object'
    ],
    commonMistakes: [
      'Warning: Forgetting self as the first parameter in method definitions',
      'Warning: Using class attributes when instance attributes are needed',
      'Warning: Not calling super().__init__() in subclasses'
    ],
    proTips: [
      'Tip: Use @property for computed attributes with getter/setter behavior',
      'Tip: Use @classmethod for methods that operate on the class itself',
      'Tip: Use dataclasses (@dataclass) to reduce boilerplate for simple classes'
    ]
  },

  inheritance: {
    definition: 'Inheritance lets a class inherit attributes and methods from another class. It promotes code reuse and creates hierarchical relationships.',
    explanation: 'A child class inherits from a parent by listing the parent in parentheses. The child can override parent methods. super() calls the parent class methods.',
    syntax: null,
    examples: [
      { title: 'Basic Inheritance', code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\ndog = Dog("Rex")\nprint(f"{dog.name}: {dog.speak()}")', output: 'Rex: Woof!' },
      { title: 'Using super()', code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \nclass Student(Person):\n    def __init__(self, name, age, grade):\n        super().__init__(name, age)\n        self.grade = grade\n\nstudent = Student("Alice", 20, "A")\nprint(f"{student.name}, {student.age}, {student.grade}")', output: 'Alice, 20, A' },
      { title: 'Method Overriding', code: 'class Shape:\n    def area(self):\n        return 0\n    \nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nc = Circle(5)\nprint(f"Area: {c.area():.2f}")', output: 'Area: 78.54' },
      { title: 'isinstance', code: 'class Vehicle:\n    pass\n\nclass Car(Vehicle):\n    pass\n\nc = Car()\nprint(isinstance(c, Car))\nprint(isinstance(c, Vehicle))\nprint(issubclass(Car, Vehicle))', output: 'True\nTrue\nTrue' }
    ],
    keyPoints: [
      'Note: Child classes inherit all attributes and methods from parent classes',
      'Note: Method overriding allows child classes to customize parent behavior',
      'Note: super() calls the parent class methods'
    ],
    commonMistakes: [
      'Warning: Not calling super().__init__() in child class constructors',
      'Warning: Creating deep inheritance hierarchies that are hard to maintain',
      'Warning: Overriding parent methods without calling super() when needed'
    ],
    proTips: [
      'Tip: Prefer composition over inheritance when possible',
      'Tip: Keep inheritance hierarchies shallow (2-3 levels max)',
      'Tip: Use abstract base classes (abc module) to define interfaces'
    ]
  },

  polymorphism: {
    definition: 'Polymorphism lets objects of different classes be treated through the same interface. In Python, this is achieved through duck typing.',
    explanation: 'Python achieves polymorphism through duck typing — the type of an object matters less than the methods it defines. Functions can accept any object that implements the required methods.',
    syntax: null,
    examples: [
      { title: 'Duck Typing', code: 'class Duck:\n    def speak(self):\n        return "Quack"\n\nclass Dog:\n    def speak(self):\n        return "Woof"\n\nclass Cat:\n    def speak(self):\n        return "Meow"\n\nfor animal in [Duck(), Dog(), Cat()]:\n    print(animal.speak())', output: 'Quack\nWoof\nMeow' },
      { title: 'Polymorphic Function', code: 'def make_sound(animal):\n    return animal.speak()\n\nclass Cow:\n    def speak(self):\n        return "Moo"\n\nprint(make_sound(Cow()))', output: 'Moo' },
      { title: 'Built-in Polymorphism', code: 'print(len("hello"))\nprint(len([1, 2, 3, 4]))\nprint(len({"a": 1, "b": 2}))', output: '5\n4\n2' },
      { title: 'Operator Polymorphism', code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __str__(self):\n        return f"({self.x}, {self.y})"\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1 + v2)', output: '(4, 6)' }
    ],
    keyPoints: [
      'Note: Duck typing — if it walks like a duck and quacks like a duck, it\'s a duck',
      'Note: Polymorphism works through common method interfaces, not type checking',
      'Note: Python\'s built-in functions (len, print, etc.) are polymorphic'
    ],
    commonMistakes: [
      'Warning: Using type() checks instead of relying on duck typing',
      'Warning: Not implementing required methods when using protocols',
      'Warning: Assuming objects must share a common base class for polymorphism'
    ],
    proTips: [
      'Tip: Embrace duck typing — focus on behavior, not type',
      'Tip: Use abstract base classes (ABC) to define required interfaces',
      'Tip: Implement __len__, __iter__, __str__ to work with built-in functions'
    ]
  },

  encapsulation: {
    definition: 'Encapsulation bundles data and methods within a class while restricting direct access to some components. Python uses naming conventions to control access.',
    explanation: 'Python uses naming conventions: single underscore (_attr) signals internal use, double underscore (__attr) triggers name mangling, and @property provides controlled access.',
    syntax: null,
    examples: [
      { title: 'Name Mangling', code: 'class Person:\n    def __init__(self, name, age):\n        self._name = name\n        self.__age = age\n    \n    def get_age(self):\n        return self.__age\n\np = Person("Alice", 30)\nprint(p._name)\nprint(p.get_age())', output: 'Alice\n30' },
      { title: 'Property Decorator', code: 'class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n\nt = Temperature(100)\nprint(f"Fahrenheit: {t.fahrenheit}")\nt.celsius = 0\nprint(f"Fahrenheit: {t.fahrenheit}")', output: 'Fahrenheit: 212.0\nFahrenheit: 32.0' },
      { title: 'Getter and Setter Methods', code: 'class BankAccount:\n    def __init__(self, balance=0):\n        self.__balance = balance\n    \n    def get_balance(self):\n        return self.__balance\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n\naccount = BankAccount(1000)\naccount.deposit(500)\nprint("Balance:", account.get_balance())', output: 'Balance: 1500' },
      { title: 'Protected Members', code: 'class Employee:\n    def __init__(self, name, salary):\n        self._name = name\n        self._salary = salary\n    \n    def _calculate_bonus(self):\n        return self._salary * 0.1\n    \nclass Manager(Employee):\n    def get_bonus(self):\n        return self._calculate_bonus()\n\nm = Manager("Bob", 80000)\nprint("Bonus:", m.get_bonus())', output: 'Bonus: 8000.0' }
    ],
    keyPoints: [
      'Note: Single underscore (_attr) indicates internal/convention-private',
      'Note: Double underscore (__attr) triggers name mangling',
      'Note: @property provides controlled attribute access with validation'
    ],
    commonMistakes: [
      'Warning: Confusing _attr (convention) with __attr (name mangling)',
      'Warning: Not using @property when you need controlled access',
      'Warning: Over-encapsulating simple classes where direct access is fine'
    ],
    proTips: [
      'Tip: Use @property for attributes that need validation or computed access',
      'Tip: Use _attr for internal attributes — signal intent without enforcement',
      'Tip: Provide clear public methods instead of exposing internal state'
    ]
  },

  modules: {
    definition: 'Modules are files containing Python code that can be imported and reused. They help organize code into logical units.',
    explanation: 'Modules are Python files with .py extension. Use import to bring in entire modules, from...import to bring in specific names, and import...as to create aliases.',
    syntax: null,
    examples: [
      { title: 'Import Module', code: 'import math\nprint(math.pi)\nprint(math.sqrt(16))', output: '3.141592653589793\n4.0' },
      { title: 'From Import', code: 'from random import randint, choice\nprint(randint(1, 10))\nprint(choice(["a", "b", "c"]))', output: '7\nc' },
      { title: 'Import As', code: 'import datetime as dt\nnow = dt.datetime.now()\nprint(now.year, now.month, now.day)', output: '2026 8 29' },
      { title: 'Main Guard', code: 'def main():\n    print("Running as main")\n\nif __name__ == "__main__":\n    main()', output: 'Running as main' }
    ],
    keyPoints: [
      'Note: Each .py file is a module',
      'Note: import brings in the entire module',
      'Note: __name__ == "__main__" guard prevents code from running on import'
    ],
    commonMistakes: [
      'Warning: Circular imports (two modules importing each other)',
      'Warning: Name conflicts when using from module import *',
      'Warning: Not understanding that import creates a reference, not a copy'
    ],
    proTips: [
      'Tip: Use specific imports (from mod import func) instead of import *',
      'Tip: Place imports at the top of the file (PEP 8)',
      'Tip: Use __name__ == "__main__" to make files both importable and runnable'
    ]
  },

  fileio: {
    definition: 'File I/O lets you read from and write to files. The built-in open() function returns a file object. The with statement ensures proper file handling.',
    explanation: 'Use open() with modes: "r" (read), "w" (write), "a" (append). The with statement ensures the file is properly closed. read() reads content, write() writes content.',
    syntax: null,
    examples: [
      { title: 'Write to File', code: 'with open("test.txt", "w") as f:\n    f.write("Hello, World!\\n")\n    f.write("Second line\\n")\nprint("File written successfully")', output: 'File written successfully' },
      { title: 'Read from File', code: 'with open("test.txt", "r") as f:\n    content = f.read()\nprint(content)', output: 'Hello, World!\nSecond line' },
      { title: 'Read Line by Line', code: 'with open("test.txt", "r") as f:\n    for line in f:\n        print(line.strip())', output: 'Hello, World!\nSecond line' },
      { title: 'Append to File', code: 'with open("test.txt", "a") as f:\n    f.write("Third line\\n")\nwith open("test.txt", "r") as f:\n    print(f.read())', output: 'Hello, World!\nSecond line\nThird line' }
    ],
    keyPoints: [
      'Note: Always use the with statement for automatic file closing',
      'Note: "r" is read mode (default), "w" is write (overwrites), "a" is append',
      'Note: Use "rb"/"wb" for binary files (images, etc.)'
    ],
    commonMistakes: [
      'Warning: Not closing files — use with statement to prevent resource leaks',
      'Warning: Opening files in write mode when you want to append',
      'Warning: Forgetting that write mode truncates the file'
    ],
    proTips: [
      'Tip: Always use the with statement for automatic resource management',
      'Tip: Use try/except for handling file operations that may fail',
      'Tip: For large files, read line by line instead of loading entire file'
    ]
  },

  errors: {
    definition: 'Error handling in Python uses try, except, else, and finally blocks to manage exceptions. Exceptions are objects representing errors during execution.',
    explanation: 'The try block contains code that might raise an exception. The except block handles specific exceptions. The else block runs if no exception occurred. The finally block always runs.',
    syntax: null,
    examples: [
      { title: 'Basic Try-Except', code: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")', output: 'Cannot divide by zero!' },
      { title: 'Multiple Exceptions', code: 'try:\n    num = int("abc")\nexcept ValueError:\n    print("Not a valid number")\nexcept TypeError:\n    print("Wrong type")', output: 'Not a valid number' },
      { title: 'Try-Except-Else-Finally', code: 'try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Error!")\nelse:\n    print(f"Result: {result}")\nfinally:\n    print("Always executes")', output: 'Result: 5.0\nAlways executes' },
      { title: 'Raising Exceptions', code: 'def set_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    return age\n\ntry:\n    set_age(-5)\nexcept ValueError as e:\n    print(f"Error: {e}")', output: 'Error: Age cannot be negative' }
    ],
    keyPoints: [
      'Note: try/except catches and handles exceptions',
      'Note: else runs only if no exception occurred in try',
      'Note: finally always runs — used for cleanup code'
    ],
    commonMistakes: [
      'Warning: Using bare except catches everything, including SystemExit',
      'Warning: Catching too broadly and hiding real bugs',
      'Warning: Using exceptions for normal control flow is an anti-pattern'
    ],
    proTips: [
      'Tip: Use specific exception types instead of bare except',
      'Tip: Use context managers (with) for automatic resource cleanup',
      'Tip: Create custom exceptions for application-specific errors'
    ]
  },

  decorators: {
    definition: 'Decorators are functions that modify other functions. The @decorator syntax is syntactic sugar for wrapping a function with another function.',
    explanation: 'A decorator is a function that takes a function and returns a new function. The @decorator syntax is applied before the function definition. Use functools.wraps to preserve metadata.',
    syntax: null,
    examples: [
      { title: 'Basic Decorator', code: 'def my_decorator(func):\n    def wrapper():\n        print("Before function")\n        func()\n        print("After function")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()', output: 'Before function\nHello!\nAfter function' },
      { title: 'Decorator with Arguments', code: 'def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet():\n    print("Hi!")\n\ngreet()', output: 'Hi!\nHi!\nHi!' },
      { title: 'functools.wraps', code: 'from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n\n@my_decorator\ndef add(a, b):\n    """Add two numbers"""\n    return a + b\n\nprint(add.__name__)\nprint(add.__doc__)', output: 'add\nAdd two numbers' },
      { title: 'Timing Decorator', code: 'import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end - start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(0.1)\n    return "Done"\n\nprint(slow_function())', output: 'slow_function took 0.10XXs\nDone' }
    ],
    keyPoints: [
      'Note: Decorators are functions that wrap other functions',
      'Note: @decorator syntax is syntactic sugar for func = decorator(func)',
      'Note: Use @wraps(func) to preserve the original function\'s metadata'
    ],
    commonMistakes: [
      'Warning: Forgetting to use @wraps loses function name and docstring',
      'Warning: Not handling *args and **kwargs in wrapper functions',
      'Warning: Stacking multiple decorators in the wrong order'
    ],
    proTips: [
      'Tip: Always use @functools.wraps to preserve function metadata',
      'Tip: Use class-based decorators for stateful behavior',
      'Tip: Consider functools.lru_cache for memoization instead of custom caching'
    ]
  },

  generators: {
    definition: 'Generators are special functions that produce a sequence of values lazily using the yield keyword. They are memory-efficient for large datasets.',
    explanation: 'Generators use yield instead of return. Each time yield is executed, the function\'s state is suspended and the value is produced. Generator expressions use parentheses with comprehension syntax.',
    syntax: null,
    examples: [
      { title: 'Basic Generator', code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor num in countdown(5):\n    print(num, end=" ")', output: '5 4 3 2 1' },
      { title: 'Generator Expression', code: 'squares = (x**2 for x in range(6))\nfor s in squares:\n    print(s, end=" ")', output: '0 1 4 9 16 25' },
      { title: 'Infinite Generator', code: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nfor _ in range(8):\n    print(next(fib), end=" ")', output: '0 1 1 2 3 5 8 13' },
      { title: 'Generator with Send', code: 'def accumulator():\n    total = 0\n    while True:\n        value = yield total\n        if value is None:\n            break\n        total += value\n\ngen = accumulator()\nnext(gen)\nprint(gen.send(10))\nprint(gen.send(20))\nprint(gen.send(30))', output: '10\n30\n60' }
    ],
    keyPoints: [
      'Note: Generators use yield to produce values lazily',
      'Note: Generator state is suspended between yields',
      'Note: Generators can only be iterated once'
    ],
    commonMistakes: [
      'Warning: Using return with a value in a generator (use yield instead)',
      'Warning: Trying to index a generator (generators are not subscriptable)',
      'Warning: Forgetting that generators can only be iterated once'
    ],
    proTips: [
      'Tip: Use generators for large datasets to avoid memory issues',
      'Tip: Use itertools module for advanced iterator operations',
      'Tip: Use yield from to delegate to sub-generators'
    ]
  },

  comprehensions: {
    definition: 'Comprehensions are concise syntax for creating lists, dictionaries, and sets from existing iterables. They are clean and readable.',
    explanation: 'List comprehensions: [expr for item in iterable if condition]. Dict comprehensions: {key: value for item in iterable}. Set comprehensions: {expr for item in iterable}.',
    syntax: null,
    examples: [
      { title: 'List Comprehension', code: 'squares = [x**2 for x in range(10)]\nprint(squares)', output: '[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]' },
      { title: 'Filtered Comprehension', code: 'evens = [x for x in range(20) if x % 2 == 0]\nprint(evens)', output: '[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]' },
      { title: 'Dict Comprehension', code: 'word_lengths = {w: len(w) for w in ["hello", "world", "python"]}\nprint(word_lengths)', output: "{'hello': 5, 'world': 5, 'python': 6}" },
      { title: 'Set Comprehension', code: 'unique_lengths = {len(w) for w in ["hello", "hi", "hey", "python"]}\nprint(unique_lengths)', output: '{2, 3, 5, 6}' },
      { title: 'Nested Comprehension', code: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [num for row in matrix for num in row]\nprint(flattened)', output: '[1, 2, 3, 4, 5, 6, 7, 8, 9]' }
    ],
    keyPoints: [
      'Note: List comprehensions: [expr for item in iterable if condition]',
      'Note: Dict comprehensions: {key: value for item in iterable}',
      'Note: Comprehensions can include conditions for filtering'
    ],
    commonMistakes: [
      'Warning: Overcomplicating comprehensions — use regular loops for complex logic',
      'Warning: Forgetting that comprehensions create new lists (memory usage)',
      'Warning: Using side effects in comprehensions is an anti-pattern'
    ],
    proTips: [
      'Tip: Keep comprehensions simple — one or two levels max',
      'Tip: Use regular loops when the logic is complex',
      'Tip: Use generator expressions for large datasets (memory efficient)'
    ]
  },

  regex: {
    definition: 'Regular expressions (regex) are patterns used to match character combinations in strings. Python\'s re module provides full regex support.',
    explanation: 'The re module provides functions like search(), match(), findall(), and sub(). Common patterns include \\d (digit), \\w (word), \\s (whitespace), and * (zero or more).',
    syntax: null,
    examples: [
      { title: 'Basic Pattern Match', code: 'import re\ntext = "Hello, World 123"\nmatch = re.search(r"\\d+", text)\nif match:\n    print("Found:", match.group())', output: 'Found: 123' },
      { title: 'Find All Matches', code: 'import re\ntext = "cat bat sat fat"\nmatches = re.findall(r".at", text)\nprint(matches)', output: "['cat', 'bat', 'sat', 'fat']" },
      { title: 'Pattern Substitution', code: 'import re\ntext = "Phone: 123-456-7890"\nresult = re.sub(r"\\d{3}-\\d{3}-\\d{4}", "XXX-XXX-XXXX", text)\nprint(result)', output: 'Phone: XXX-XXX-XXXX' },
      { title: 'Groups', code: 'import re\ntext = "2026-08-29"\nmatch = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", text)\nif match:\n    print("Year:", match.group(1))\n    print("Month:", match.group(2))\n    print("Day:", match.group(3))', output: 'Year: 2026\nMonth: 08\nDay: 29' }
    ],
    keyPoints: [
      'Note: Use raw strings (r"...") for regex patterns to avoid escape issues',
      'Note: re.search() finds the first match anywhere in the string',
      'Note: re.findall() returns all matches as a list'
    ],
    commonMistakes: [
      'Warning: Forgetting to use raw strings (r"...") for patterns',
      'Warning: Not escaping special characters when needed',
      'Warning: Using greedy quantifiers when you need non-greedy (use *? or +?)'
    ],
    proTips: [
      'Tip: Use regex101.com to test patterns interactively',
      'Tip: Use re.VERBOSE flag for complex patterns with comments',
      'Tip: Compile patterns with re.compile() when using them multiple times'
    ]
  }
}

export default python
