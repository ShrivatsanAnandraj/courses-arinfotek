const python = {
  intro: {
    definition: 'Python is a high-level, interpreted, general-purpose programming language created by Guido van Rossum in 1991. It emphasizes code readability with its use of significant indentation and supports multiple programming paradigms including procedural, object-oriented, and functional programming.',
    whyUse: 'Python is one of the most popular programming languages due to its simple and clean syntax, extensive standard library, massive ecosystem of third-party packages, and versatility across domains like web development, data science, machine learning, automation, and scripting.',
    whereUse: 'Python is used in web development (Django, Flask), data science and analytics (pandas, NumPy), machine learning and AI (TensorFlow, PyTorch), automation and scripting, scientific computing, game development, desktop applications, and embedded systems.',
    syntax: null,
    explanation: 'Python uses indentation to define code blocks instead of braces. It is dynamically typed, meaning you do not need to declare variable types. Python programs are executed line by line by the Python interpreter.',
    examples: [
      { title: 'Hello World', code: 'print("Hello, World!")', output: 'Hello, World!' },
      { title: 'Variable Assignment', code: 'name = "Alice"\nage = 25\nprint(f"My name is {name} and I am {age} years old")', output: 'My name is Alice and I am 25 years old' },
      { title: 'Simple Calculation', code: 'x = 10\ny = 3\nprint("Sum:", x + y)\nprint("Product:", x * y)', output: 'Sum: 13\nProduct: 30' },
      { title: 'List Operations', code: 'fruits = ["apple", "banana", "cherry"]\nprint(len(fruits))\nprint(fruits[0])', output: '3\napple' }
    ],
    keyPoints: [
      'Python uses indentation for code blocks, not braces',
      'It is dynamically typed — no need to declare variable types',
      'Python has a vast standard library often called the batteries-included philosophy',
      'Code readability is a core design principle of Python',
      'Python supports multiple programming paradigms'
    ],
    commonMistakes: [
      'Forgetting colons after if, for, while, def, or class statements',
      'Incorrect indentation leading to IndentationError',
      'Confusing assignment (=) with comparison (==)',
      'Using undefined variables before assigning them a value',
      'Mutable default arguments in functions (e.g., def f(x=[]))'
    ],
    proTips: [
      'Use virtual environments to manage project dependencies',
      'Follow PEP 8 style guide for consistent code formatting',
      'Use f-strings for clean and readable string formatting',
      'Leverage list comprehensions for concise data transformations',
      'Use Python\'s built-in functions like map, filter, and enumerate before writing loops'
    ]
  },

  setup: {
    definition: 'Setting up Python involves installing the Python interpreter, configuring your development environment, and verifying that everything works correctly. Python can be downloaded from the official website (python.org) or through package managers.',
    whyUse: 'A proper setup ensures you can write, run, and debug Python code efficiently. Having the right tools and environment prevents compatibility issues and makes learning and development much smoother.',
    whereUse: 'Python setup is necessary on local machines, cloud servers, Docker containers, CI/CD pipelines, and development environments like VS Code, PyCharm, and Jupyter notebooks.',
    syntax: null,
    explanation: 'After installing Python, you can verify the installation by running python --version or python3 --version in your terminal. You can then create and run .py files using the python command or an IDE.',
    examples: [
      { title: 'Check Python Version', code: 'import sys\nprint("Python version:", sys.version)', output: 'Python version: 3.x.x (details vary by installation)' },
      { title: 'Check Platform Info', code: 'import platform\nprint("Platform:", platform.system())\nprint("Python:", platform.python_version())', output: 'Platform: Linux\nPython: 3.x.x' },
      { title: 'Run a Script', code: 'print("This script is running!")\nprint("Setup complete!")', output: 'This script is running!\nSetup complete!' },
      { title: 'Check Pip Version', code: 'import subprocess\nresult = subprocess.run(["pip", "--version"], capture_output=True, text=True)\nprint(result.stdout)', output: 'pip 23.x.x from ...' }
    ],
    keyPoints: [
      'Download Python from python.org or use your system package manager',
      'Use python --version to verify installation',
      'pip is Python\'s package manager, installed automatically with Python',
      'Virtual environments help isolate project dependencies',
      'Popular IDEs include VS Code, PyCharm, and Jupyter Notebook'
    ],
    commonMistakes: [
      'Not adding Python to the system PATH during installation',
      'Using python instead of python3 on systems with Python 2 pre-installed',
      'Not creating virtual environments for different projects',
      'Mixing pip and pip3 commands',
      'Installing packages globally instead of in a virtual environment'
    ],
    proTips: [
      'Always use virtual environments (python -m venv venv) for new projects',
      'Use pyenv to manage multiple Python versions on one machine',
      'Install pip-tools for reproducible dependency management',
      'Use python -m pip to ensure you are using the correct pip version',
      'Consider using Poetry or Pipenv for advanced dependency management'
    ]
  },

  variables: {
    definition: 'Variables are named references to values stored in memory. In Python, variables are created when you assign a value to them, and you do not need to declare their type explicitly. Python is dynamically typed, so the type is determined at runtime.',
    whyUse: 'Variables allow you to store, retrieve, and manipulate data. They are fundamental to programming, enabling you to work with values, track state, and build logic.',
    whereUse: 'Variables are used everywhere in Python — for storing user input, calculation results, configuration values, function arguments, return values, and any data your program needs to work with.',
    syntax: null,
    explanation: 'You create a variable by using the assignment operator (=). Python supports multiple data types including int, float, str, bool, list, tuple, dict, and set. Variable names should follow snake_case convention and be descriptive.',
    examples: [
      { title: 'Basic Assignment', code: 'name = "Alice"\nage = 30\nheight = 5.7\nprint(name, age, height)', output: 'Alice 30 5.7' },
      { title: 'Multiple Assignment', code: 'x = y = z = 10\nprint(x, y, z)', output: '10 10 10' },
      { title: 'Unpacking', code: 'a, b, c = 1, 2, 3\nprint(a, b, c)', output: '1 2 3' },
      { title: 'Type Checking', code: 'x = 42\nprint(type(x))\ny = "hello"\nprint(type(y))', output: "<class 'int'>\n<class 'str'>" },
      { title: 'Type Conversion', code: 'num_str = "100"\nnum_int = int(num_str)\nnum_float = float(num_str)\nprint(num_int, num_float)', output: '100 100.0' }
    ],
    keyPoints: [
      'Variables in Python do not require explicit type declaration',
      'Use snake_case for variable names by convention',
      'Variables can be reassigned to values of different types',
      'Python is dynamically typed — type checking happens at runtime',
      'Use the type() function to check a variable\'s type'
    ],
    commonMistakes: [
      'Using reserved keywords as variable names (e.g., class, import, for)',
      'Forgetting that Python variables are case-sensitive (Name != name)',
      'Assuming a variable has a type it was not assigned',
      'Using hyphens in variable names (my-var is invalid, use my_var)',
      'Using mutable default arguments that persist between function calls'
    ],
    proTips: [
      'Use descriptive variable names that convey meaning',
      'Leverage multiple assignment and unpacking for cleaner code',
      'Use type hints for better code documentation and IDE support',
      'Avoid using single character variable names except in loops',
      'Use constants (ALL_CAPS) for values that should not change'
    ]
  },

  strings: {
    definition: 'Strings in Python are immutable sequences of Unicode characters. They can be enclosed in single quotes, double quotes, or triple quotes for multi-line strings. Strings support a wide range of operations including slicing, formatting, and numerous built-in methods.',
    whyUse: 'Strings are essential for handling text data — from user input and output formatting to file processing and web scraping. Python\'s rich string manipulation capabilities make text processing efficient and readable.',
    whereUse: 'Strings are used in virtually every Python program for displaying messages, processing user input, reading/writing files, building web pages, parsing data, logging, and much more.',
    syntax: null,
    explanation: 'Strings can be created with single or double quotes. Triple quotes handle multi-line strings. Strings are indexed starting at 0 and support slicing with [start:end:step]. f-strings provide a modern way to embed expressions inside strings.',
    examples: [
      { title: 'String Creation', code: "s1 = 'Hello'\ns2 = \"World\"\ns3 = '''Multi\nline'''\nprint(s1, s2)\nprint(s3)", output: 'Hello World\nMulti\nline' },
      { title: 'String Slicing', code: 's = "Hello, World!"\nprint(s[0:5])\nprint(s[7:12])\nprint(s[::-1])', output: 'Hello\nWorld\n!dlroW ,olleH' },
      { title: 'String Methods', code: 's = "  Hello, World!  "\nprint(s.strip())\nprint(s.strip().upper())\nprint(s.strip().lower())', output: 'Hello, World!\nHELLO, WORLD!\nhello, world!' },
      { title: 'f-strings', code: 'name = "Alice"\nage = 25\nprint(f"Name: {name}, Age: {age}")\nprint(f"Next year: {age + 1}")', output: 'Name: Alice, Age: 25\nNext year: 26' },
      { title: 'String Operations', code: 's1 = "Hello"\ns2 = "World"\nprint(s1 + " " + s2)\nprint(s1 * 3)\nprint(len(s1))', output: 'Hello World\nHelloHelloHello\n5' }
    ],
    keyPoints: [
      'Strings are immutable — any modification creates a new string',
      'Use f-strings (f"...") for modern string formatting',
      'Strings support indexing, slicing, and iteration',
      'Triple quotes (\'\'\' or """) are used for multi-line strings',
      'Common methods: strip(), split(), join(), replace(), upper(), lower()'
    ],
    commonMistakes: [
      'Trying to modify a string in place (strings are immutable)',
      'Forgetting that string indexing starts at 0',
      'Confusing string concatenation with number addition',
      'Not handling encoding issues when working with non-ASCII characters',
      'Using + in loops to build strings (inefficient, use join instead)'
    ],
    proTips: [
      'Use f-strings for readable and efficient string interpolation',
      'Use str.join() instead of + for concatenating many strings',
      'Leverage string methods like startswith() and endswith() for checks',
      'Use raw strings (r"...") for regex patterns and Windows paths',
      'Use the format() method for complex formatting needs'
    ]
  },

  operators: {
    definition: 'Operators are special symbols that perform operations on values and variables. Python provides arithmetic, comparison, logical, assignment, identity, and membership operators. Understanding operators is fundamental to writing expressions and controlling program flow.',
    whyUse: 'Operators allow you to perform calculations, compare values, make logical decisions, and manipulate data. They are the building blocks of expressions and conditions in every program.',
    whereUse: 'Operators are used in arithmetic calculations, conditional checks, loop conditions, data filtering, boolean logic, and throughout all types of Python programs.',
    syntax: null,
    explanation: 'Python supports several categories of operators. Arithmetic operators (+, -, *, /, //, %, **) handle math. Comparison operators (==, !=, >, <, >=, <=) return booleans. Logical operators (and, or, not) combine conditions. Membership operators (in, not in) check containment. Identity operators (is, is not) check object identity.',
    examples: [
      { title: 'Arithmetic Operators', code: 'a = 17\nb = 5\nprint("Add:", a + b)\nprint("Sub:", a - b)\nprint("Mul:", a * b)\nprint("Div:", a / b)\nprint("Floor:", a // b)\nprint("Mod:", a % b)\nprint("Pow:", a ** b)', output: 'Add: 22\nSub: 12\nMul: 85\nDiv: 3.4\nFloor: 3\nMod: 2\nPow: 1419857' },
      { title: 'Comparison Operators', code: 'x = 10\nprint(x == 10)\nprint(x != 5)\nprint(x > 5)\nprint(x < 20)\nprint(x >= 10)\nprint(x <= 9)', output: 'True\nTrue\nTrue\nTrue\nTrue\nFalse' },
      { title: 'Logical Operators', code: 'a = True\nb = False\nprint("and:", a and b)\nprint("or:", a or b)\nprint("not:", not a)', output: 'and: False\nor: True\nnot: False' },
      { title: 'Membership Operators', code: 'fruits = ["apple", "banana", "cherry"]\nprint("apple" in fruits)\nprint("grape" not in fruits)', output: 'True\nTrue' },
      { title: 'Identity Operators', code: 'a = [1, 2, 3]\nb = [1, 2, 3]\nc = a\nprint(a is b)\nprint(a is c)\nprint(a == b)', output: 'False\nTrue\nTrue' }
    ],
    keyPoints: [
      '// performs floor division (integer division)',
      '** is the exponentiation operator',
      'is checks identity, == checks equality',
      'in checks membership in a sequence',
      'and, or, not are logical operators for boolean expressions'
    ],
    commonMistakes: [
      'Using = (assignment) instead of == (comparison) in conditions',
      'Expecting / to return an integer (use // for floor division)',
      'Confusing is with == (is checks identity, not value equality)',
      'Not understanding operator precedence (PEMDAS applies)',
      'Using and/or instead of bitwise &/| for integer operations'
    ],
    proTips: [
      'Use chained comparisons: 1 < x < 10',
      'Remember short-circuit evaluation: a and b returns a if a is falsy',
      'Use operator precedence to your advantage but add parentheses for clarity',
      'Use the operator module for functional programming with operators',
      'Know that not in is a single operator, not two separate ones'
    ]
  },

  conditionals: {
    definition: 'Conditional statements allow a program to execute different blocks of code based on whether conditions evaluate to True or False. Python uses if, elif, and else keywords to create conditional logic with indentation defining the code blocks.',
    whyUse: 'Conditionals enable decision-making in programs. They allow your code to respond differently based on input, state, or computed values, making programs dynamic and intelligent.',
    whereUse: 'Conditionals are used in input validation, feature toggling, error handling, game logic, business rules, user authentication, data filtering, and essentially every program that makes decisions.',
    syntax: null,
    explanation: 'Python conditionals use if, elif (else if), and else. The condition is followed by a colon and the code block is indented. Python evaluates conditions from top to bottom and executes the first matching block. If no condition is true, the else block executes.',
    examples: [
      { title: 'Basic If-Else', code: 'x = 10\nif x > 5:\n    print("big")\nelse:\n    print("small")', output: 'big' },
      { title: 'If-Elif-Else', code: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelse:\n    print("F")', output: 'B' },
      { title: 'Nested Conditionals', code: 'age = 25\nhas_license = True\nif age >= 18:\n    if has_license:\n        print("Can drive")\n    else:\n        print("Need license")\nelse:\n    print("Too young")', output: 'Can drive' },
      { title: 'Ternary Operator', code: 'x = 10\nresult = "even" if x % 2 == 0 else "odd"\nprint(result)', output: 'even' },
      { title: 'Multiple Conditions', code: 'x = 15\nif x > 10 and x < 20:\n    print("between 10 and 20")\nif x == 10 or x == 15:\n    print("is 10 or 15")', output: 'between 10 and 20\nis 10 or 15' }
    ],
    keyPoints: [
      'elif is Python\'s equivalent of else if',
      'Python uses truthiness — non-empty strings, lists, and non-zero numbers are truthy',
      'The ternary operator syntax is: value_if_true if condition else value_if_false',
      'Only one block (if/elif/else) executes per conditional chain',
      'Nested conditionals can be replaced with logical operators for cleaner code'
    ],
    commonMistakes: [
      'Using assignment (=) instead of comparison (==) in conditions',
      'Forgetting the colon (:) after if, elif, or else',
      'Incorrect indentation causing blocks to execute unexpectedly',
      'Not handling all possible cases (missing else clause)',
      'Using elif when separate if statements are needed'
    ],
    proTips: [
      'Use early returns to reduce nesting depth',
      'Combine conditions with and/or for complex checks',
      'Use dictionary mapping instead of long if/elif chains',
      'Leverage Python\'s truthiness — no need to write x == True',
      'Keep conditions simple; extract complex logic into functions'
    ]
  },

  loops: {
    definition: 'Loops allow you to execute a block of code repeatedly. Python provides for loops for iterating over sequences and while loops for executing code as long as a condition is true. Both support break, continue, and else clauses.',
    whyUse: 'Loops automate repetitive tasks, process collections of data, implement algorithms, and are essential for tasks like searching, sorting, aggregation, and iteration over data structures.',
    whereUse: 'Loops are used in data processing, file reading, web scraping, algorithm implementation, user input handling, animation, and virtually any task requiring repetition.',
    syntax: null,
    explanation: 'for loops iterate over items of a sequence (list, tuple, string, range). while loops execute as long as a condition is true. break exits the loop early, continue skips to the next iteration, and the else clause runs if the loop completes without breaking.',
    examples: [
      { title: 'For Loop with Range', code: 'for i in range(5):\n    print(i, end=" ")', output: '0 1 2 3 4' },
      { title: 'For Loop with List', code: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(fruit)', output: 'apple\nbanana\ncherry' },
      { title: 'While Loop', code: 'count = 0\nwhile count < 5:\n    print(count, end=" ")\n    count += 1', output: '0 1 2 3 4' },
      { title: 'Break and Continue', code: 'for i in range(10):\n    if i == 3:\n        continue\n    if i == 7:\n        break\n    print(i, end=" ")', output: '0 1 2 4 5 6' },
      { title: 'For-Else', code: 'for i in range(5):\n    if i == 10:\n        print("found")\n        break\nelse:\n    print("not found")', output: 'not found' }
    ],
    keyPoints: [
      'range(n) generates numbers from 0 to n-1',
      'for-else executes the else block if the loop completes without break',
      'while-else works the same way as for-else',
      'enumerate() provides index and value when iterating',
      'zip() allows iterating over multiple sequences simultaneously'
    ],
    commonMistakes: [
      'Infinite loops when the condition never becomes false',
      'Modifying a list while iterating over it',
      'Forgetting to update the loop variable in while loops',
      'Using range(len(list)) instead of enumerate()',
      'Confusing for-else behavior (else runs when loop finishes, not on break)'
    ],
    proTips: [
      'Use enumerate() instead of manual index tracking',
      'Use zip() to iterate over multiple sequences in parallel',
      'Prefer list comprehensions over simple for loops for creating lists',
      'Use for-else to detect if a break was triggered',
      'Avoid modifying collections during iteration — use list comprehensions to filter'
    ]
  },

  lists: {
    definition: 'Lists are ordered, mutable collections that can hold elements of different types. They are one of the most commonly used data structures in Python, supporting indexing, slicing, iteration, and a rich set of methods for manipulation.',
    whyUse: 'Lists provide an ordered container for storing and manipulating sequences of data. They are flexible, support dynamic resizing, and have extensive built-in methods for common operations.',
    whereUse: 'Lists are used for storing collections of items, implementing stacks and queues, managing dynamic data, passing arguments to functions, returning multiple values, and as the foundation for many algorithms.',
    syntax: null,
    explanation: 'Lists are created with square brackets []. They are ordered (maintain insertion order), mutable (can be modified after creation), allow duplicates, and support indexing starting at 0. Slicing creates new lists with [start:end:step].',
    examples: [
      { title: 'List Creation', code: 'fruits = ["apple", "banana", "cherry"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = [1, "hello", 3.14, True]\nprint(fruits)\nprint(numbers)\nprint(mixed)', output: "['apple', 'banana', 'cherry']\n[1, 2, 3, 4, 5]\n[1, 'hello', 3.14, True]" },
      { title: 'List Methods', code: 'nums = [3, 1, 4, 1, 5]\nnums.append(9)\nprint("After append:", nums)\nnums.insert(0, 2)\nprint("After insert:", nums)\nnums.remove(1)\nprint("After remove:", nums)', output: 'After append: [3, 1, 4, 1, 5, 9]\nAfter insert: [2, 3, 1, 4, 1, 5, 9]\nAfter remove: [2, 3, 4, 1, 5, 9]' },
      { title: 'List Slicing', code: 'nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])\nprint(nums[:3])\nprint(nums[::2])\nprint(nums[::-1])', output: '[1, 2, 3]\n[0, 1, 2]\n[0, 2, 4]\n[5, 4, 3, 2, 1, 0]' },
      { title: 'List Comprehension', code: 'squares = [x**2 for x in range(6)]\nprint(squares)\nevens = [x for x in range(10) if x % 2 == 0]\nprint(evens)', output: '[0, 1, 4, 9, 16, 25]\n[0, 2, 4, 6, 8]' },
      { title: 'List Sorting', code: 'nums = [5, 2, 8, 1, 9]\nnums.sort()\nprint("Sorted:", nums)\nnums.reverse()\nprint("Reversed:", nums)', output: 'Sorted: [1, 2, 5, 8, 9]\nReversed: [9, 8, 5, 2, 1]' }
    ],
    keyPoints: [
      'Lists are mutable — elements can be added, removed, and changed',
      'Use append() to add to end, insert() to add at specific index',
      'Slicing creates a new list (does not modify the original)',
      'sort() modifies in place, sorted() returns a new sorted list',
      'Lists can contain elements of different types (heterogeneous)'
    ],
    commonMistakes: [
      'IndexError when accessing an index that does not exist',
      'Modifying a list while iterating over it',
      'Using list.sort() when you need sorted() (sort modifies in place)',
      'Confusing list assignment with copying (a = b does not create a copy)',
      'Forgetting that slicing is exclusive of the end index'
    ],
    proTips: [
      'Use list comprehensions for concise list creation and transformation',
      'Use collections.deque for frequent insertions/deletions at both ends',
      'Use [:] or copy() to create shallow copies of lists',
      'Use * for list repetition: [0] * 5 gives [0, 0, 0, 0, 0]',
      'Use map() and filter() for functional-style list operations'
    ]
  },

  tuples: {
    definition: 'Tuples are ordered, immutable collections that can hold elements of different types. They are similar to lists but cannot be modified after creation. Tuples are created with parentheses or simply by separating values with commas.',
    whyUse: 'Tuples provide a way to create fixed collections of data that should not change. They are faster than lists, can be used as dictionary keys, and are used to return multiple values from functions.',
    whereUse: 'Tuples are used for fixed data collections, returning multiple values from functions, dictionary keys, unpacking assignments, and as records in database queries.',
    syntax: null,
    explanation: 'Tuples are created with parentheses () or by separating values with commas. They are immutable — once created, elements cannot be added, removed, or changed. Tuples support indexing, slicing, and iteration but not modification methods.',
    examples: [
      { title: 'Tuple Creation', code: 'colors = ("red", "green", "blue")\nnumbers = (1, 2, 3, 4, 5)\nsingle = (42,)\nempty = ()\nprint(colors)\nprint(numbers)\nprint(single)\nprint(empty)', output: "('red', 'green', 'blue')\n(1, 2, 3, 4, 5)\n(42,)\n()" },
      { title: 'Tuple Unpacking', code: 'point = (3, 4)\nx, y = point\nprint(f"x: {x}, y: {y}")\nfirst, *rest = (1, 2, 3, 4)\nprint(first, rest)', output: 'x: 3, y: 4\n1 [2, 3, 4]' },
      { title: 'Tuple Methods', code: 'nums = (1, 2, 3, 2, 2, 4)\nprint("Count of 2:", nums.count(2))\nprint("Index of 3:", nums.index(3))\nprint("Length:", len(nums))', output: 'Count of 2: 3\nIndex of 3: 2\nLength: 6' },
      { title: 'Tuple as Dict Key', code: 'locations = {\n    (40.7128, -74.0060): "New York",\n    (34.0522, -118.2437): "Los Angeles"\n}\nprint(locations[(40.7128, -74.0060)])', output: 'New York' },
      { title: 'Tuple vs List', code: 'my_tuple = (1, 2, 3)\nmy_list = [1, 2, 3]\nprint("Tuple:", type(my_tuple))\nprint("List:", type(my_list))\nprint("Tuple iteration:", end=" ")\nfor item in my_tuple:\n    print(item, end=" ")', output: "Tuple: <class 'tuple'>\nList: <class 'list'>\nTuple iteration: 1 2 3" }
    ],
    keyPoints: [
      'Tuples are immutable — elements cannot be changed after creation',
      'Use parentheses or commas to create tuples',
      'A single-element tuple requires a trailing comma: (42,)',
      'Tuples can be used as dictionary keys (lists cannot)',
      'Tuple unpacking allows assigning multiple variables at once'
    ],
    commonMistakes: [
      'Forgetting the trailing comma for single-element tuples: (42) is int, (42,) is tuple',
      'Trying to modify a tuple (will raise TypeError)',
      'Confusing tuple unpacking with variable assignment',
      'Using tuples when lists would be more appropriate',
      'Assuming tuples are faster in all cases (difference is minimal for small collections)'
    ],
    proTips: [
      'Use tuples for returning multiple values from functions',
      'Use named tuples (collections.namedtuple) for readable tuple access',
      'Tuples are slightly faster than lists — use them for fixed data',
      'Use tuple unpacking for clean variable swaps: a, b = b, a',
      'Tuples with immutable contents can be used as dictionary keys'
    ]
  },

  dicts: {
    definition: 'Dictionaries are unordered (as of Python 3.7+, insertion-ordered), mutable collections of key-value pairs. Keys must be immutable and unique, while values can be of any type. Dictionaries provide fast lookups and are one of Python\'s most versatile data structures.',
    whyUse: 'Dictionaries provide efficient key-value storage with O(1) average lookup time. They are essential for mapping relationships, caching data, JSON processing, and representing structured data.',
    whereUse: 'Dictionaries are used for configuration storage, JSON data handling, counting frequencies, caching, representing objects with attributes, database records, and API responses.',
    syntax: null,
    explanation: 'Dictionaries are created with curly braces {} or the dict() constructor. Key-value pairs are separated by colons. Access values using square bracket notation dict[key] or the get() method. Dictionaries support iteration over keys, values, or items.',
    examples: [
      { title: 'Dictionary Creation', code: 'person = {"name": "Alice", "age": 30, "city": "NYC"}\nprint(person)\nprint(person["name"])', output: "{'name': 'Alice', 'age': 30, 'city': 'NYC'}\nAlice" },
      { title: 'Dictionary Methods', code: 'person = {"name": "Alice", "age": 30}\nperson["email"] = "alice@example.com"\nperson.update({"age": 31, "phone": "555-1234"})\nprint(person)\nprint("Keys:", list(person.keys()))\nprint("Values:", list(person.values()))', output: "{'name': 'Alice', 'age': 31, 'email': 'alice@example.com', 'phone': '555-1234'}\nKeys: ['name', 'age', 'email', 'phone']\nValues: ['Alice', 31, 'alice@example.com', '555-1234']" },
      { title: 'Dictionary Comprehension', code: 'squares = {x: x**2 for x in range(6)}\nprint(squares)\nevens = {x: x**2 for x in range(10) if x % 2 == 0}\nprint(evens)', output: '{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n{0: 0, 2: 4, 4: 16, 6: 36, 8: 64}' },
      { title: 'Iterating Dictionaries', code: 'scores = {"Alice": 90, "Bob": 85, "Charlie": 92}\nfor name, score in scores.items():\n    print(f"{name}: {score}")', output: 'Alice: 90\nBob: 85\nCharlie: 92' },
      { title: 'Nested Dictionary', code: 'students = {\n    "Alice": {"age": 25, "grade": "A"},\n    "Bob": {"age": 22, "grade": "B"}\n}\nprint(students["Alice"]["grade"])', output: 'A' }
    ],
    keyPoints: [
      'Keys must be immutable (strings, numbers, tuples)',
      'Use get() to safely access keys that may not exist',
      'Dictionaries maintain insertion order in Python 3.7+',
      'Keys are unique — duplicate keys overwrite previous values',
      'Use items(), keys(), and values() methods for iteration'
    ],
    commonMistakes: [
      'Accessing a key that does not exist (use get() or check with in)',
      'Trying to use mutable types as keys (lists cannot be dict keys)',
      'Modifying a dictionary while iterating over it',
      'Forgetting that .keys() and .values() return view objects',
      'Using == to compare dictionaries instead of checking specific keys'
    ],
    proTips: [
      'Use dict.get(key, default) to avoid KeyError',
      'Use collections.defaultdict for automatic default values',
      'Use Counter from collections for counting occurrences',
      'Use dictionary comprehensions for concise dict creation',
      'Use {**dict1, **dict2} to merge dictionaries (Python 3.5+)'
    ]
  },

  sets: {
    definition: 'Sets are unordered collections of unique elements. They are mutable and support mathematical set operations like union, intersection, difference, and symmetric difference. Sets are optimized for membership testing and removing duplicates.',
    whyUse: 'Sets provide fast membership testing (O(1) average), remove duplicates from sequences, and support mathematical set operations. They are essential for unique data storage and set-based algorithms.',
    whereUse: 'Sets are used for removing duplicates, membership testing, finding common or unique elements between collections, tracking visited items, and implementing graph algorithms.',
    syntax: null,
    explanation: 'Sets are created with curly braces {} or the set() constructor. Empty sets must be created with set() (not {} which creates a dict). Sets automatically remove duplicates and support operations like union (|), intersection (&), difference (-), and symmetric difference (^).',
    examples: [
      { title: 'Set Creation', code: 'fruits = {"apple", "banana", "cherry", "apple"}\nprint(fruits)\nnumbers = set([1, 2, 2, 3, 3, 3])\nprint(numbers)', output: "{'apple', 'cherry', 'banana'}\n{1, 2, 3}" },
      { title: 'Set Operations', code: 'a = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint("Union:", a | b)\nprint("Intersection:", a & b)\nprint("Difference:", a - b)\nprint("Sym Diff:", a ^ b)', output: 'Union: {1, 2, 3, 4, 5, 6}\nIntersection: {3, 4}\nDifference: {1, 2}\nSym Diff: {1, 2, 5, 6}' },
      { title: 'Set Methods', code: 's = {1, 2, 3}\ns.add(4)\nprint("After add:", s)\ns.remove(2)\nprint("After remove:", s)\ns.discard(10)\nprint("After discard:", s)', output: 'After add: {1, 2, 3, 4}\nAfter remove: {1, 3, 4}\nAfter discard: {1, 3, 4}' },
      { title: 'Set Comprehension', code: 'squares = {x**2 for x in range(-3, 4)}\nprint(squares)\nevens = {x for x in range(20) if x % 2 == 0}\nprint(evens)', output: '{0, 1, 4, 9, 16}\n{0, 2, 4, 6, 8, 10, 12, 14, 16, 18}' },
      { title: 'Remove Duplicates', code: 'words = ["apple", "banana", "apple", "cherry", "banana"]\nunique = list(set(words))\nprint(unique)\nprint("Original length:", len(words))\nprint("Unique length:", len(unique))', output: "['cherry', 'banana', 'apple']\nOriginal length: 5\nUnique length: 3" }
    ],
    keyPoints: [
      'Sets automatically remove duplicate elements',
      'Use set() to create an empty set (not {} which is a dict)',
      'Sets are unordered — elements have no defined index',
      'Membership testing in sets is O(1) on average',
      'Frozensets are immutable sets that can be used as dictionary keys'
    ],
    commonMistakes: [
      'Using {} to create an empty set (creates a dict instead)',
      'Trying to access elements by index (sets are unordered)',
      'Using sets when order matters (use lists or tuples instead)',
      'Forgetting that sets cannot contain mutable elements (like lists)',
      'Confusing set union (|) with logical OR'
    ],
    proTips: [
      'Use sets for fast membership testing instead of lists',
      'Use set operations to efficiently compare collections',
      'Use frozensets when you need an immutable set',
      'Use set intersection (&) to find common elements quickly',
      'Use sets to deduplicate data before processing'
    ]
  },

  functions: {
    definition: 'Functions are reusable blocks of code that perform a specific task. They are defined with the def keyword, can accept parameters, return values, and support default arguments, variable arguments, and keyword arguments. Functions are fundamental to writing clean, modular code.',
    whyUse: 'Functions promote code reuse, modularization, and abstraction. They reduce duplication, improve readability, make testing easier, and allow you to break complex problems into manageable pieces.',
    whereUse: 'Functions are used for organizing code, creating reusable utilities, implementing algorithms, handling events, processing data, and building APIs and libraries.',
    syntax: null,
    explanation: 'Functions are defined with def followed by the function name, parameters in parentheses, and a colon. The body is indented. Use return to send back a value. Parameters can have default values, *args for variable positional arguments, and **kwargs for variable keyword arguments.',
    examples: [
      { title: 'Basic Function', code: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))\nprint(greet("Bob"))', output: 'Hello, Alice!\nHello, Bob!' },
      { title: 'Default Arguments', code: 'def power(base, exp=2):\n    return base ** exp\n\nprint(power(3))\nprint(power(3, 3))\nprint(power(2, 10))', output: '9\n27\n1024' },
      { title: 'Variable Arguments', code: 'def add_all(*args):\n    return sum(args)\n\nprint(add_all(1, 2, 3))\nprint(add_all(1, 2, 3, 4, 5))', output: '6\n15' },
      { title: 'Keyword Arguments', code: 'def build_profile(**kwargs):\n    profile = {}\n    for key, value in kwargs.items():\n        profile[key] = value\n    return profile\n\nprint(build_profile(name="Alice", age=30, job="Engineer"))', output: "{'name': 'Alice', 'age': 30, 'job': 'Engineer'}" },
      { title: 'Multiple Return Values', code: 'def get_stats(numbers):\n    return min(numbers), max(numbers), sum(numbers) / len(numbers)\n\nlo, hi, avg = get_stats([4, 8, 2, 6, 10])\nprint(f"Min: {lo}, Max: {hi}, Avg: {avg}")', output: 'Min: 2, Max: 10, Avg: 6.0' }
    ],
    keyPoints: [
      'Functions are defined with the def keyword',
      'Use return to send back a value from a function',
      'Default parameter values are set in the function signature',
      '*args collects variable positional arguments into a tuple',
      '**kwargs collects variable keyword arguments into a dictionary'
    ],
    commonMistakes: [
      'Using mutable default arguments (def f(x=[])) — use None instead',
      'Forgetting to return a value (function returns None by default)',
      'Modifying mutable default arguments across calls',
      'Not handling the case when no arguments are passed',
      'Using return inside a loop when you want to continue iterating'
    ],
    proTips: [
      'Use type hints for better documentation: def greet(name: str) -> str:',
      'Keep functions small and focused on a single responsibility',
      'Use docstrings to document function purpose and parameters',
      'Leverage default arguments for optional parameters',
      'Use *args and **kwargs for flexible function signatures'
    ]
  },

  lambda: {
    definition: 'Lambda functions are small, anonymous functions defined with the lambda keyword. They can take any number of arguments but must contain a single expression. The result of the expression is automatically returned. They are commonly used for short, throwaway functions.',
    whyUse: 'Lambdas provide a concise way to create small functions without the overhead of a full def statement. They are ideal for short operations passed as arguments to higher-order functions like map, filter, and sorted.',
    whereUse: 'Lambdas are used in sorting keys, filter criteria, map transformations, GUI callbacks, event handlers, and anywhere a small, one-line function is needed.',
    syntax: null,
    explanation: 'Lambda functions are defined as lambda arguments: expression. They can take multiple arguments but only one expression. The expression is evaluated and returned. Lambdas are syntactically restricted to a single expression — no statements or multiple lines.',
    examples: [
      { title: 'Basic Lambda', code: 'square = lambda x: x ** 2\nprint(square(5))\nprint(square(10))', output: '25\n100' },
      { title: 'Lambda with Multiple Args', code: 'add = lambda x, y: x + y\nprint(add(3, 4))\nprint(add(10, 20))', output: '7\n30' },
      { title: 'Lambda with sorted()', code: 'students = [("Alice", 90), ("Bob", 85), ("Charlie", 92)]\nby_grade = sorted(students, key=lambda s: s[1])\nprint(by_grade)', output: "[('Bob', 85), ('Alice', 90), ('Charlie', 92)]" },
      { title: 'Lambda with map()', code: 'nums = [1, 2, 3, 4, 5]\nsquared = list(map(lambda x: x**2, nums))\nprint(squared)', output: '[1, 4, 9, 16, 25]' },
      { title: 'Lambda with filter()', code: 'nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)', output: '[2, 4, 6, 8, 10]' }
    ],
    keyPoints: [
      'Lambda functions are anonymous — they do not have a name (unless assigned)',
      'They can only contain a single expression',
      'Lambda is shorthand for a simple function — use def for complex logic',
      'Commonly used with map(), filter(), and sorted()',
      'Lambda returns the result of the expression automatically'
    ],
    commonMistakes: [
      'Trying to include statements or multiple expressions in a lambda',
      'Using lambdas when a named function would be more readable',
      'Forgetting that lambdas are limited to a single expression',
      'Using lambdas for complex logic — use def instead',
      'Confusing lambda syntax with function call syntax'
    ],
    proTips: [
      'Use lambdas for short, one-off functions in higher-order function calls',
      'Use def for anything beyond a simple one-liner',
      'Lambda functions are not debuggable in the same way as named functions',
      'Consider using operator module functions instead of lambdas for simple operations',
      'Use map() and filter() with lambdas for functional-style transformations'
    ]
  },

  scope: {
    definition: 'Scope determines the visibility and accessibility of variables in different parts of your code. Python follows the LEGB rule: Local, Enclosing, Global, and Built-in scopes. Understanding scope prevents naming conflicts and helps manage variable lifetimes.',
    whyUse: 'Proper scope management prevents variable naming conflicts, controls variable lifetimes, improves code organization, and makes programs more maintainable and bug-free.',
    whereUse: 'Scope is relevant in functions, classes, modules, loops, and any block of code where variables are defined and used.',
    syntax: null,
    explanation: 'Python resolves variable names using the LEGB rule: Local (inside current function), Enclosing (in enclosing function for nested functions), Global (module level), and Built-in (Python\'s built-in names). The global and nonlocal keywords allow modification of variables in outer scopes.',
    examples: [
      { title: 'Local Scope', code: 'def my_func():\n    x = 10\n    print("Local x:", x)\n\nmy_func()\ntry:\n    print(x)\nexcept NameError as e:\n    print("Error:", e)', output: 'Local x: 10\nError: name \'x\' is not defined' },
      { title: 'Global Scope', code: 'x = "global"\n\ndef my_func():\n    print("Inside func:", x)\n\nmy_func()\nprint("Outside func:", x)', output: 'Inside func: global\nOutside func: global' },
      { title: 'Nonlocal Scope', code: 'def outer():\n    x = "outer"\n    def inner():\n        nonlocal x\n        x = "inner"\n    inner()\n    print("After inner:", x)\n\nouter()', output: 'After inner: inner' },
      { title: 'LEGB Rule', code: 'x = "built-in"\ndef outer():\n    x = "enclosing"\n    def inner():\n        x = "local"\n        print("Inner:", x)\n    inner()\n    print("Outer:", x)\nouter()\nprint("Global:", x)', output: 'Inner: local\nOuter: enclosing\nGlobal: built-in' },
      { title: 'Global Keyword', code: 'counter = 0\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nincrement()\nprint("Counter:", counter)', output: 'Counter: 2' }
    ],
    keyPoints: [
      'LEGB rule: Local → Enclosing → Global → Built-in',
      'Variables defined in a function are local by default',
      'Use global to modify a global variable inside a function',
      'Use nonlocal to modify a variable in an enclosing function scope',
      'Built-in scope contains Python\'s built-in functions and exceptions'
    ],
    commonMistakes: [
      'Trying to modify a global variable without the global keyword',
      'Shadowing built-in names (e.g., naming a variable "list" or "print")',
      'Assuming a variable from an outer scope is automatically accessible',
      'Confusing scope with lifetime (scope is about visibility, not duration)',
      'Using global too often — it makes code harder to test and maintain'
    ],
    proTips: [
      'Minimize use of global variables — prefer passing arguments and returning values',
      'Use nonlocal in nested functions to modify enclosing scope variables',
      'Avoid shadowing built-in names (len, list, dict, etc.)',
      'Use closures to maintain state without global variables',
      'Understand that list comprehensions have their own scope in Python 3'
    ]
  },

  classes: {
    definition: 'Classes are blueprints for creating objects. They encapsulate data (attributes) and behavior (methods) into a single unit. Python classes support inheritance, polymorphism, and encapsulation. They are the foundation of object-oriented programming in Python.',
    whyUse: 'Classes enable you to model real-world entities, organize code into logical units, create reusable components, and implement complex systems with clear relationships between data and behavior.',
    whereUse: 'Classes are used in game development, GUI applications, web frameworks, data modeling, simulation, plugin systems, and anywhere you need to represent entities with properties and behaviors.',
    syntax: null,
    explanation: 'Classes are defined with the class keyword followed by the class name. The __init__ method initializes new objects. self refers to the current instance. Methods are functions defined inside the class that operate on instance data.',
    examples: [
      { title: 'Basic Class', code: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f"{self.name} says Woof!"\n\nmy_dog = Dog("Rex", 5)\nprint(my_dog.bark())\nprint(f"{my_dog.name} is {my_dog.age} years old")', output: 'Rex says Woof!\nRex is 5 years old' },
      { title: 'Class Attributes', code: 'class Car:\n    wheels = 4\n    \n    def __init__(self, make, model):\n        self.make = make\n        self.model = model\n\nmy_car = Car("Toyota", "Camry")\nprint(f"{my_car.make} {my_car.model}")\nprint(f"Wheels: {Car.wheels}")', output: 'Toyota Camry\nWheels: 4' },
      { title: 'Methods', code: 'class BankAccount:\n    def __init__(self, balance=0):\n        self.balance = balance\n    \n    def deposit(self, amount):\n        self.balance += amount\n        return self.balance\n    \n    def withdraw(self, amount):\n        if amount <= self.balance:\n            self.balance -= amount\n        return self.balance\n\naccount = BankAccount(100)\nprint("Deposit:", account.deposit(50))\nprint("Withdraw:", account.withdraw(30))', output: 'Deposit: 150\nWithdraw: 120' },
      { title: 'String Representation', code: 'class Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __str__(self):\n        return f"Point({self.x}, {self.y})"\n    \n    def __repr__(self):\n        return f"Point(x={self.x}, y={self.y})"\n\np = Point(3, 4)\nprint(str(p))\nprint(repr(p))', output: 'Point(3, 4)\nPoint(x=3, y=4)' },
      { title: 'Instance Methods', code: 'class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):\n        return self.width * self.height\n    \n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\nrect = Rectangle(5, 3)\nprint("Area:", rect.area())\nprint("Perimeter:", rect.perimeter())', output: 'Area: 15\nPerimeter: 16' }
    ],
    keyPoints: [
      '__init__ is the constructor method called when creating new instances',
      'self refers to the current instance of the class',
      'Class attributes are shared across all instances',
      'Instance attributes are unique to each instance',
      '__str__ and __repr__ control string representation of objects'
    ],
    commonMistakes: [
      'Forgetting self as the first parameter in method definitions',
      'Using class attributes when instance attributes are needed',
      'Not calling super().__init__() in subclasses',
      'Modifying class attributes through instances instead of the class',
      'Forgetting that methods must include self as a parameter'
    ],
    proTips: [
      'Use @property for computed attributes with getter/setter behavior',
      'Use @classmethod for methods that operate on the class itself',
      'Use @staticmethod for utility methods that don\'t need instance or class access',
      'Use dataclasses (@dataclass) to reduce boilerplate for simple classes',
      'Implement __eq__ and __hash__ for proper comparison and hashing'
    ]
  },

  inheritance: {
    definition: 'Inheritance allows a class (child/subclass) to inherit attributes and methods from another class (parent/superclass). It promotes code reuse and establishes a hierarchical relationship between classes. Python supports single, multiple, and multilevel inheritance.',
    whyUse: 'Inheritance enables code reuse, creates logical hierarchies, supports the Liskov Substitution Principle, and allows extending functionality without modifying existing code.',
    whereUse: 'Inheritance is used in framework design, GUI widget hierarchies, exception hierarchies, plugin systems, and anywhere related classes share common behavior.',
    syntax: null,
    explanation: 'A child class inherits from a parent class by listing the parent in parentheses after the class name. The child can override parent methods and add new ones. super() calls the parent class methods. Multiple inheritance is supported but should be used carefully.',
    examples: [
      { title: 'Basic Inheritance', code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return "Some sound"\n\nclass Dog(Animal):\n    def speak(self):\n        return "Woof!"\n\ndog = Dog("Rex")\nprint(f"{dog.name}: {dog.speak()}")', output: 'Rex: Woof!' },
      { title: 'Using super()', code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \nclass Student(Person):\n    def __init__(self, name, age, grade):\n        super().__init__(name, age)\n        self.grade = grade\n\nstudent = Student("Alice", 20, "A")\nprint(f"{student.name}, {student.age}, {student.grade}")', output: 'Alice, 20, A' },
      { title: 'Method Overriding', code: 'class Shape:\n    def area(self):\n        return 0\n    \nclass Circle(Shape):\n    def __init__(self, radius):\n        self.radius = radius\n    \n    def area(self):\n        return 3.14159 * self.radius ** 2\n\nc = Circle(5)\nprint(f"Area: {c.area():.2f}")', output: 'Area: 78.54' },
      { title: 'Multilevel Inheritance', code: 'class Animal:\n    def eat(self):\n        return "Eating"\n\nclass Dog(Animal):\n    def bark(self):\n        return "Barking"\n\nclass Puppy(Dog):\n    def play(self):\n        return "Playing"\n\np = Puppy()\nprint(p.eat())\nprint(p.bark())\nprint(p.play())', output: 'Eating\nBarking\nPlaying' },
      { title: 'isinstance and issubclass', code: 'class Vehicle:\n    pass\n\nclass Car(Vehicle):\n    pass\n\nc = Car()\nprint(isinstance(c, Car))\nprint(isinstance(c, Vehicle))\nprint(issubclass(Car, Vehicle))', output: 'True\nTrue\nTrue' }
    ],
    keyPoints: [
      'Child classes inherit all attributes and methods from parent classes',
      'Method overriding allows child classes to customize parent behavior',
      'super() calls the parent class methods, avoiding direct parent reference',
      'isinstance() checks if an object is an instance of a class',
      'issubclass() checks if a class is a subclass of another class'
    ],
    commonMistakes: [
      'Not calling super().__init__() in child class constructors',
      'Using multiple inheritance without understanding MRO (Method Resolution Order)',
      'Overriding parent methods without calling super() when needed',
      'Creating deep inheritance hierarchies that are hard to maintain',
      'Using isinstance() checks excessively instead of polymorphism'
    ],
    proTips: [
      'Prefer composition over inheritance when possible',
      'Use super() instead of explicitly naming the parent class',
      'Keep inheritance hierarchies shallow (2-3 levels max)',
      'Use abstract base classes (abc module) to define interfaces',
      'Understand MRO to predict method resolution in multiple inheritance'
    ]
  },

  polymorphism: {
    definition: 'Polymorphism allows objects of different classes to be treated through the same interface. In Python, polymorphism is achieved through duck typing — if an object has the required methods, it can be used regardless of its actual class. This enables flexible and extensible code.',
    whyUse: 'Polymorphism enables writing generic code that works with different types, promotes loose coupling, makes code more extensible, and supports the open-closed principle (open for extension, closed for modification).',
    whereUse: 'Polymorphism is used in plugin systems, event handlers, iterator protocols, file I/O operations, and anywhere code needs to work with multiple types through a common interface.',
    syntax: null,
    explanation: 'Python achieves polymorphism through duck typing — the type of an object matters less than the methods it defines. Functions can accept any object that implements the required methods. Method overriding in inheritance also enables polymorphism.',
    examples: [
      { title: 'Duck Typing', code: 'class Duck:\n    def speak(self):\n        return "Quack"\n\nclass Dog:\n    def speak(self):\n        return "Woof"\n\nclass Cat:\n    def speak(self):\n        return "Meow"\n\nfor animal in [Duck(), Dog(), Cat()]:\n    print(animal.speak())', output: 'Quack\nWoof\nMeow' },
      { title: 'Polymorphic Function', code: 'def make_sound(animal):\n    return animal.speak()\n\nclass Cow:\n    def speak(self):\n        return "Moo"\n\nprint(make_sound(Cow()))\nprint(make_sound(type("fake", (), {"speak": lambda self: "Bark"})()))', output: 'Moo\nBark' },
      { title: 'Built-in Polymorphism', code: 'print(len("hello"))\nprint(len([1, 2, 3, 4]))\nprint(len({"a": 1, "b": 2}))', output: '5\n4\n2' },
      { title: 'Operator Polymorphism', code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n    \n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n    \n    def __str__(self):\n        return f"({self.x}, {self.y})"\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1 + v2)', output: '(4, 6)' },
      { title: 'Protocol-based Polymorphism', code: 'class FileProcessor:\n    def process(self, file_obj):\n        return file_obj.read()\n\nclass StringIO:\n    def __init__(self, value):\n        self.value = value\n    def read(self):\n        return self.value\n\nfp = FileProcessor()\nprint(fp.process(StringIO("Hello from StringIO")))', output: 'Hello from StringIO' }
    ],
    keyPoints: [
      'Duck typing: if it walks like a duck and quacks like a duck, it\'s a duck',
      'Polymorphism works through common method interfaces, not explicit type checking',
      'Method overriding enables polymorphism in inheritance hierarchies',
      'Python\'s built-in functions (len, print, etc.) are polymorphic',
      'Operator overloading allows custom classes to use standard operators'
    ],
    commonMistakes: [
      'Using type() checks instead of relying on duck typing',
      'Not implementing required methods when using protocols',
      'Assuming objects must share a common base class for polymorphism',
      'Over-complicating hierarchies when duck typing would suffice',
      'Forgetting that Python checks method existence at runtime, not compile time'
    ],
    proTips: [
      'Embrace duck typing — focus on behavior, not type',
      'Use abstract base classes (ABC) to define required interfaces',
      'Implement __len__, __iter__, __str__ to make objects work with built-in functions',
      'Use Protocol from typing module for structural subtyping',
      'Design interfaces based on what objects can do, not what they are'
    ]
  },

  encapsulation: {
    definition: 'Encapsulation is the bundling of data and methods that operate on that data within a class, while restricting direct access to some components. Python uses naming conventions (single underscore and double underscore prefixes) to control access to attributes and methods.',
    whyUse: 'Encapsulation protects object integrity by preventing external code from directly modifying internal state, provides a clean public API, makes code easier to maintain, and supports the principle of least privilege.',
    whereUse: 'Encapsulation is used in class design, API development, library design, and anywhere you need to control how internal state is accessed and modified.',
    syntax: null,
    explanation: 'Python uses naming conventions for access control: single underscore (_attr) signals internal use (convention), double underscore (__attr) triggers name mangling (prevents subclass overriding), and @property provides controlled access. Python does not have true private access modifiers.',
    examples: [
      { title: 'Name Mangling', code: 'class Person:\n    def __init__(self, name, age):\n        self._name = name\n        self.__age = age\n    \n    def get_age(self):\n        return self.__age\n\np = Person("Alice", 30)\nprint(p._name)\nprint(p.get_age())\ntry:\n    print(p.__age)\nexcept AttributeError as e:\n    print("Error:", e)', output: 'Alice\n30\nError: \'Person\' object has no attribute \'__age\'' },
      { title: 'Property Decorator', code: 'class Temperature:\n    def __init__(self, celsius):\n        self._celsius = celsius\n    \n    @property\n    def celsius(self):\n        return self._celsius\n    \n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n    \n    @property\n    def fahrenheit(self):\n        return self._celsius * 9/5 + 32\n\nt = Temperature(100)\nprint(f"Fahrenheit: {t.fahrenheit}")\nt.celsius = 0\nprint(f"Fahrenheit: {t.fahrenheit}")', output: 'Fahrenheit: 212.0\nFahrenheit: 32.0' },
      { title: 'Getter and Setter Methods', code: 'class BankAccount:\n    def __init__(self, balance=0):\n        self.__balance = balance\n    \n    def get_balance(self):\n        return self.__balance\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n    \n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n\naccount = BankAccount(1000)\naccount.deposit(500)\naccount.withdraw(200)\nprint("Balance:", account.get_balance())', output: 'Balance: 1300' },
      { title: 'Protected Members', code: 'class Employee:\n    def __init__(self, name, salary):\n        self._name = name\n        self._salary = salary\n    \n    def _calculate_bonus(self):\n        return self._salary * 0.1\n    \nclass Manager(Employee):\n    def get_bonus(self):\n        return self._calculate_bonus()\n\nm = Manager("Bob", 80000)\nprint("Bonus:", m.get_bonus())', output: 'Bonus: 8000.0' },
      { title: 'Controlled Access', code: 'class Circle:\n    def __init__(self, radius):\n        self.__radius = radius\n    \n    @property\n    def radius(self):\n        return self.__radius\n    \n    @radius.setter\n    def radius(self, value):\n        if value < 0:\n            raise ValueError("Radius cannot be negative")\n        self.__radius = value\n    \n    @property\n    def area(self):\n        import math\n        return math.pi * self.__radius ** 2\n\nc = Circle(5)\nprint(f"Area: {c.area:.2f}")\nc.radius = 10\nprint(f"Area: {c.area:.2f}")', output: 'Area: 78.54\nArea: 314.16' }
    ],
    keyPoints: [
      'Single underscore (_attr) indicates internal/convention-private',
      'Double underscore (__attr) triggers name mangling for subclass safety',
      '@property provides controlled attribute access with validation',
      'Python does not enforce access control — it is by convention',
      'Getter/setter methods or @property are preferred over direct access'
    ],
    commonMistakes: [
      'Confusing _attr (convention) with __attr (name mangling)',
      'Using __attr unnecessarily when _attr would suffice',
      'Not using @property when you need controlled access',
      'Exposing internal implementation details through public attributes',
      'Over-encapsulating simple classes where direct access is fine'
    ],
    proTips: [
      'Use @property for attributes that need validation or computed access',
      'Use _attr for internal attributes — signal intent without enforcement',
      'Use __attr only when preventing subclass name conflicts',
      'Provide clear public methods instead of exposing internal state',
      'Follow the principle of least privilege — restrict access by default'
    ]
  },

  modules: {
    definition: 'Modules are files containing Python code (functions, classes, variables) that can be imported and reused in other programs. They help organize code into logical units, promote reuse, and prevent naming conflicts. Python\'s standard library provides hundreds of built-in modules.',
    whyUse: 'Modules enable code organization, reusability, and sharing. They allow you to break large programs into smaller, manageable files and leverage existing code from the standard library and third-party packages.',
    whereUse: 'Modules are used in every Python project for organizing code, importing functionality, creating packages, and leveraging the vast ecosystem of Python libraries.',
    syntax: null,
    explanation: 'Modules are Python files with .py extension. Use import to bring in entire modules, from...import to bring in specific names, and import...as to create aliases. The __name__ variable helps distinguish between running a file directly vs importing it.',
    examples: [
      { title: 'Import Module', code: 'import math\nprint(math.pi)\nprint(math.sqrt(16))', output: '3.141592653589793\n4.0' },
      { title: 'From Import', code: 'from random import randint, choice\nprint(randint(1, 10))\nprint(choice(["a", "b", "c"]))', output: '7\nc' },
      { title: 'Import As', code: 'import datetime as dt\nnow = dt.datetime.now()\nprint(now.year, now.month, now.day)', output: '2026 8 29' },
      { title: 'Module Variables', code: 'import sys\nprint("Python version:", sys.version_info.major)\nprint("Platform:", sys.platform)', output: 'Python version: 3\nPlatform: win32' },
      { title: 'Main Guard', code: 'def main():\n    print("Running as main")\n\nif __name__ == "__main__":\n    main()', output: 'Running as main' }
    ],
    keyPoints: [
      'Each .py file is a module',
      'import brings in the entire module',
      'from module import name brings in specific names',
      'Use import...as for aliases (import numpy as np)',
      '__name__ == "__main__" guard prevents code from running on import'
    ],
    commonMistakes: [
      'Circular imports (two modules importing each other)',
      'Name conflicts when using from module import *',
      'Not understanding that import creates a reference, not a copy',
      'Forgetting that modules are only imported once per session',
      'Using relative imports incorrectly in packages'
    ],
    proTips: [
      'Use specific imports (from mod import func) instead of import *',
      'Place imports at the top of the file (PEP 8)',
      'Use __name__ == "__main__" to make files both importable and runnable',
      'Create __init__.py files for proper package structure',
      'Use importlib for dynamic imports when needed'
    ]
  },

  fileio: {
    definition: 'File I/O (Input/Output) in Python allows reading from and writing to files on the filesystem. The built-in open() function returns a file object that supports reading, writing, and appending. Context managers (with statement) ensure proper file handling and resource cleanup.',
    whyUse: 'File I/O is essential for data persistence, configuration management, logging, data processing, and any application that needs to store or retrieve information from files.',
    whereUse: 'File I/O is used in data processing, log management, configuration file handling, CSV/JSON processing, database operations, report generation, and file system manipulation.',
    syntax: null,
    explanation: 'Use open() with modes: "r" (read), "w" (write), "a" (append), "rb"/"wb" (binary). The with statement ensures the file is properly closed. read(), readline(), and readlines() read content. write() and writelines() write content.',
    examples: [
      { title: 'Write to File', code: 'with open("test.txt", "w") as f:\n    f.write("Hello, World!\\n")\n    f.write("Second line\\n")\nprint("File written successfully")', output: 'File written successfully' },
      { title: 'Read from File', code: 'with open("test.txt", "r") as f:\n    content = f.read()\nprint(content)', output: 'Hello, World!\nSecond line' },
      { title: 'Read Line by Line', code: 'with open("test.txt", "r") as f:\n    for line in f:\n        print(line.strip())', output: 'Hello, World!\nSecond line' },
      { title: 'Append to File', code: 'with open("test.txt", "a") as f:\n    f.write("Third line\\n")\nwith open("test.txt", "r") as f:\n    print(f.read())', output: 'Hello, World!\nSecond line\nThird line' },
      { title: 'Read Lines as List', code: 'with open("test.txt", "r") as f:\n    lines = f.readlines()\nprint(f"Total lines: {len(lines)}")\nfor i, line in enumerate(lines, 1):\n    print(f"Line {i}: {line.strip()}")', output: 'Total lines: 3\nLine 1: Hello, World!\nLine 2: Second line\nLine 3: Third line' }
    ],
    keyPoints: [
      'Always use the with statement for automatic file closing',
      '"r" is read mode (default), "w" is write (overwrites), "a" is append',
      'read() returns entire file as string, readlines() returns list of lines',
      'write() returns the number of characters written',
      'Use "rb"/"wb" for binary files (images, etc.)'
    ],
    commonMistakes: [
      'Not closing files (use with statement to prevent resource leaks)',
      'Opening files in write mode when you want to append',
      'Forgetting that write mode truncates the file',
      'Not handling FileNotFoundError when reading files',
      'Using read() on very large files (memory issues)'
    ],
    proTips: [
      'Always use the with statement for automatic resource management',
      'Use try/except for handling file operations that may fail',
      'Use csv module for CSV files instead of manual parsing',
      'Use json module for reading/writing JSON data',
      'For large files, read line by line instead of loading entire file'
    ]
  },

  errors: {
    definition: 'Error handling in Python uses try, except, else, and finally blocks to manage exceptions. Exceptions are objects representing errors that occur during program execution. Python provides built-in exceptions and allows creating custom exception classes.',
    whyUse: 'Proper error handling makes programs robust, prevents crashes, provides meaningful error messages, enables graceful recovery, and helps debug issues in production systems.',
    whereUse: 'Error handling is used in file operations, network requests, user input validation, database operations, API calls, and anywhere unexpected conditions may arise.',
    syntax: null,
    explanation: 'The try block contains code that might raise an exception. The except block handles specific exceptions. The else block runs if no exception occurred. The finally block always runs (for cleanup). Use raise to trigger exceptions and assert for debugging checks.',
    examples: [
      { title: 'Basic Try-Except', code: 'try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero!")', output: 'Cannot divide by zero!' },
      { title: 'Multiple Exceptions', code: 'try:\n    num = int("abc")\nexcept ValueError:\n    print("Not a valid number")\nexcept TypeError:\n    print("Wrong type")', output: 'Not a valid number' },
      { title: 'Try-Except-Else-Finally', code: 'try:\n    result = 10 / 2\nexcept ZeroDivisionError:\n    print("Error!")\nelse:\n    print(f"Result: {result}")\nfinally:\n    print("Always executes")', output: 'Result: 5.0\nAlways executes' },
      { title: 'Raising Exceptions', code: 'def set_age(age):\n    if age < 0:\n        raise ValueError("Age cannot be negative")\n    return age\n\ntry:\n    set_age(-5)\nexcept ValueError as e:\n    print(f"Error: {e}")', output: 'Error: Age cannot be negative' },
      { title: 'Custom Exception', code: 'class InsufficientFunds(Exception):\n    def __init__(self, balance, amount):\n        self.balance = balance\n        self.amount = amount\n        super().__init__(f"Cannot withdraw {amount}, balance is {balance}")\n\ndef withdraw(balance, amount):\n    if amount > balance:\n        raise InsufficientFunds(balance, amount)\n    return balance - amount\n\ntry:\n    new_balance = withdraw(100, 150)\nexcept InsufficientFunds as e:\n    print(e)', output: 'Cannot withdraw 150, balance is 100' }
    ],
    keyPoints: [
      'try/except catches and handles exceptions',
      'else runs only if no exception occurred in try',
      'finally always runs — used for cleanup code',
      'Use raise to trigger exceptions explicitly',
      'Always catch specific exceptions, not bare except'
    ],
    commonMistakes: [
      'Using bare except: (catches everything, including SystemExit)',
      'Catching too broadly and hiding real bugs',
      'Not cleaning up resources in finally or with statements',
      'Using exceptions for normal control flow (anti-pattern)',
      'Forgetting that else runs only when no exception occurs'
    ],
    proTips: [
      'Use specific exception types instead of bare except',
      'Use context managers (with) for automatic resource cleanup',
      'Log exceptions with traceback for debugging',
      'Create custom exceptions for application-specific errors',
      'Use assert for debugging checks that should not happen in production'
    ]
  },

  decorators: {
    definition: 'Decorators are functions that modify other functions or classes. They provide a clean syntax for calling higher-order functions. The @decorator syntax is syntactic sugar for wrapping a function with another function, allowing you to extend or modify behavior without changing the original code.',
    whyUse: 'Decorators enable code reuse, separation of concerns, and cross-cutting concerns like logging, timing, authentication, caching, and validation. They keep business logic clean while adding reusable functionality.',
    whereUse: 'Decorators are used in web frameworks (route handlers), logging, authentication, caching (functools.lru_cache), timing, retry logic, and performance monitoring.',
    syntax: null,
    explanation: 'A decorator is a function that takes a function and returns a new function. The @decorator syntax is applied before the function definition. Decorators can take arguments using nested functions. functools.wraps preserves the original function\'s metadata.',
    examples: [
      { title: 'Basic Decorator', code: 'def my_decorator(func):\n    def wrapper():\n        print("Before function")\n        func()\n        print("After function")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()', output: 'Before function\nHello!\nAfter function' },
      { title: 'Decorator with Arguments', code: 'def repeat(n):\n    def decorator(func):\n        def wrapper(*args, **kwargs):\n            for _ in range(n):\n                func(*args, **kwargs)\n        return wrapper\n    return decorator\n\n@repeat(3)\ndef greet():\n    print("Hi!")\n\ngreet()', output: 'Hi!\nHi!\nHi!' },
      { title: 'functools.wraps', code: 'from functools import wraps\n\ndef my_decorator(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        return func(*args, **kwargs)\n    return wrapper\n\n@my_decorator\ndef add(a, b):\n    """Add two numbers"""\n    return a + b\n\nprint(add.__name__)\nprint(add.__doc__)', output: 'add\nAdd two numbers' },
      { title: 'Timing Decorator', code: 'import time\nfrom functools import wraps\n\ndef timer(func):\n    @wraps(func)\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f"{func.__name__} took {end - start:.4f}s")\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(0.1)\n    return "Done"\n\nprint(slow_function())', output: 'slow_function took 0.10XXs\nDone' },
      { title: 'Class Decorator', code: 'def singleton(cls):\n    instances = {}\n    def get_instance(*args, **kwargs):\n        if cls not in instances:\n            instances[cls] = cls(*args, **kwargs)\n        return instances[cls]\n    return get_instance\n\n@singleton\nclass Database:\n    def __init__(self):\n        self.connected = True\n\ndb1 = Database()\ndb2 = Database()\nprint(db1 is db2)', output: 'True' }
    ],
    keyPoints: [
      'Decorators are functions that wrap other functions',
      '@decorator syntax is syntactic sugar for func = decorator(func)',
      'Use @wraps(func) to preserve the original function\'s metadata',
      'Decorators can take arguments using nested function patterns',
      'Decorators can be applied to functions, methods, and classes'
    ],
    commonMistakes: [
      'Forgetting to use @wraps (loses function name and docstring)',
      'Not handling *args and **kwargs in wrapper functions',
      'Modifying the return value unintentionally',
      'Creating decorators that are hard to debug',
      'Stacking multiple decorators in the wrong order'
    ],
    proTips: [
      'Always use @functools.wraps to preserve function metadata',
      'Use class-based decorators for stateful behavior',
      'Consider functools.lru_cache for memoization instead of custom caching',
      'Test decorators independently before applying them',
      'Use decorator factories (decorators with arguments) for configurable behavior'
    ]
  },

  generators: {
    definition: 'Generators are special functions that produce a sequence of values lazily using the yield keyword. Instead of returning all values at once, generators produce values one at a time, making them memory-efficient for large datasets. They implement the iterator protocol.',
    whyUse: 'Generators save memory by producing values on demand, enable processing of infinite sequences, simplify iterator creation, and provide clean syntax for working with streams of data.',
    whereUse: 'Generators are used in data processing pipelines, reading large files, streaming data, implementing custom iterators, creating sequences, and working with infinite data streams.',
    syntax: null,
    explanation: 'Generators use yield instead of return. Each time yield is executed, the function\'s state is suspended and the value is produced. The function resumes from where it left off when the next value is requested. Generator expressions use parentheses with comprehension syntax.',
    examples: [
      { title: 'Basic Generator', code: 'def countdown(n):\n    while n > 0:\n        yield n\n        n -= 1\n\nfor num in countdown(5):\n    print(num, end=" ")', output: '5 4 3 2 1' },
      { title: 'Generator Expression', code: 'squares = (x**2 for x in range(6))\nfor s in squares:\n    print(s, end=" ")', output: '0 1 4 9 16 25' },
      { title: 'Infinite Generator', code: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nfor _ in range(8):\n    print(next(fib), end=" ")', output: '0 1 1 2 3 5 8 13' },
      { title: 'Generator with Send', code: 'def accumulator():\n    total = 0\n    while True:\n        value = yield total\n        if value is None:\n            break\n        total += value\n\ngen = accumulator()\nnext(gen)\nprint(gen.send(10))\nprint(gen.send(20))\nprint(gen.send(30))', output: '10\n30\n60' },
      { title: 'File Line Generator', code: 'def read_lines(filename):\n    with open(filename, "r") as f:\n        for line in f:\n            yield line.strip()', output: '' }
    ],
    keyPoints: [
      'Generators use yield to produce values lazily',
      'Generator state is suspended between yields',
      'Generator expressions use parentheses: (expr for x in iterable)',
      'next() retrieves the next value from a generator',
      'Generators implement the iterator protocol (__iter__ and __next__)'
    ],
    commonMistakes: [
      'Using return with a value in a generator (use yield instead)',
      'Trying to index a generator (generators are not subscriptable)',
      'Forgetting that generators can only be iterated once',
      'Not calling next() or iterating to advance the generator',
      'Using generators when you need to access elements multiple times'
    ],
    proTips: [
      'Use generators for large datasets to avoid memory issues',
      'Use itertools module for advanced iterator operations',
      'Chain generators with itertools.chain for sequential processing',
      'Use yield from to delegate to sub-generators',
      'Consider using generators for data pipelines (ETL processing)'
    ]
  },

  comprehensions: {
    definition: 'Comprehensions are concise syntax for creating lists, dictionaries, and sets from existing iterables. They provide a clean, readable way to transform and filter data in a single expression. List comprehensions are the most common, but dict and set comprehensions are also supported.',
    whyUse: 'Comprehensions make code more concise, readable, and often faster than equivalent for loops. They express data transformations clearly and are considered Pythonic.',
    whereUse: 'Comprehensions are used for data transformation, filtering, mapping, creating collections from other collections, and anywhere you would write a simple for loop to build a collection.',
    syntax: null,
    explanation: 'List comprehensions: [expr for item in iterable if condition]. Dict comprehensions: {key: value for item in iterable}. Set comprehensions: {expr for item in iterable}. Generator expressions: (expr for item in iterable). All support optional if conditions for filtering.',
    examples: [
      { title: 'List Comprehension', code: 'squares = [x**2 for x in range(10)]\nprint(squares)', output: '[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]' },
      { title: 'Filtered Comprehension', code: 'evens = [x for x in range(20) if x % 2 == 0]\nprint(evens)', output: '[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]' },
      { title: 'Dict Comprehension', code: 'word_lengths = {w: len(w) for w in ["hello", "world", "python"]}\nprint(word_lengths)', output: "{'hello': 5, 'world': 5, 'python': 6}" },
      { title: 'Set Comprehension', code: 'unique_lengths = {len(w) for w in ["hello", "hi", "hey", "python"]}\nprint(unique_lengths)', output: '{2, 3, 5, 6}' },
      { title: 'Nested Comprehension', code: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflattened = [num for row in matrix for num in row]\nprint(flattened)', output: '[1, 2, 3, 4, 5, 6, 7, 8, 9]' }
    ],
    keyPoints: [
      'List comprehensions: [expr for item in iterable if condition]',
      'Dict comprehensions: {key: value for item in iterable}',
      'Set comprehensions: {expr for item in iterable}',
      'Comprehensions can include conditions for filtering',
      'Nested comprehensions can flatten multi-dimensional data'
    ],
    commonMistakes: [
      'Overcomplicating comprehensions (use regular loops for complex logic)',
      'Forgetting that comprehensions create new lists (memory usage)',
      'Using side effects in comprehensions (anti-pattern)',
      'Nesting too many levels (hard to read)',
      'Using comprehensions when map/filter would be clearer'
    ],
    proTips: [
      'Keep comprehensions simple — one or two levels max',
      'Use regular loops when the logic is complex',
      'Comprehensions are often faster than equivalent for loops',
      'Use generator expressions for large datasets (memory efficient)',
      'Break long comprehensions into multiple lines for readability'
    ]
  },

  regex: {
    definition: 'Regular expressions (regex) are patterns used to match character combinations in strings. Python\'s re module provides full regex support with functions for searching, matching, and substituting patterns. Regex is powerful for text processing, validation, and extraction.',
    whyUse: 'Regex enables complex pattern matching and text manipulation that would be difficult with string methods alone. It is essential for input validation, data extraction, text parsing, and search-and-replace operations.',
    whereUse: 'Regex is used in input validation (email, phone), web scraping, log parsing, data cleaning, text mining, syntax highlighting, and any task requiring pattern-based text processing.',
    syntax: null,
    explanation: 'The re module provides functions like search(), match(), findall(), sub(), and compile(). Common patterns include \\d (digit), \\w (word character), \\s (whitespace), . (any char), * (zero or more), + (one or more), ? (zero or one), {n} (exactly n), [] (character set), and () (group).',
    examples: [
      { title: 'Basic Pattern Match', code: 'import re\ntext = "Hello, World 123"\nmatch = re.search(r"\\d+", text)\nif match:\n    print("Found:", match.group())', output: 'Found: 123' },
      { title: 'Find All Matches', code: 'import re\ntext = "cat bat sat fat"\nmatches = re.findall(r".at", text)\nprint(matches)', output: "['cat', 'bat', 'sat', 'fat']" },
      { title: 'Pattern Substitution', code: 'import re\ntext = "Phone: 123-456-7890"\nresult = re.sub(r"\\d{3}-\\d{3}-\\d{4}", "XXX-XXX-XXXX", text)\nprint(result)', output: 'Phone: XXX-XXX-XXXX' },
      { title: 'Groups', code: 'import re\ntext = "2026-08-29"\nmatch = re.search(r"(\\d{4})-(\\d{2})-(\\d{2})", text)\nif match:\n    print("Year:", match.group(1))\n    print("Month:", match.group(2))\n    print("Day:", match.group(3))', output: 'Year: 2026\nMonth: 08\nDay: 29' },
      { title: 'Compiled Pattern', code: 'import re\npattern = re.compile(r"\\b\\w{5}\\b")\ntext = "Hello World from Python"\nmatches = pattern.findall(text)\nprint(matches)', output: "['Hello', 'World', 'Python']" }
    ],
    keyPoints: [
      'Use raw strings (r"...") for regex patterns to avoid escape issues',
      're.search() finds the first match anywhere in the string',
      're.match() matches only at the beginning of the string',
      're.findall() returns all matches as a list',
      're.compile() pre-compiles patterns for repeated use'
    ],
    commonMistakes: [
      'Forgetting to use raw strings (r"...") for patterns',
      'Not escaping special characters (use re.escape() when needed)',
      'Using greedy quantifiers when you need non-greedy (use *? or +?)',
      'Not handling None returns from search/match',
      'Writing complex patterns without testing with smaller parts first'
    ],
    proTips: [
      'Use regex101.com to test patterns interactively',
      'Break complex patterns into named groups for readability',
      'Use re.VERBOSE flag for complex patterns with comments',
      'Compile patterns with re.compile() when using them multiple times',
      'Prefer string methods for simple operations (split, replace, etc.)'
    ]
  }
}

export default python
