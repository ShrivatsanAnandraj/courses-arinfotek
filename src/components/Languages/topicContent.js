export const topicContent = {
  python: {
    intro: {
      definition: "Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It emphasizes code readability with its clean syntax and use of significant whitespace.",
      whyUse: "Python is beginner-friendly, has a massive ecosystem of libraries, and is used across web development, data science, AI/ML, automation, and scripting. Its simple syntax lets you focus on solving problems rather than fighting the language.",
      whereUse: "Web backends (Django, Flask), data science (pandas, numpy), machine learning (TensorFlow, PyTorch), automation scripts, scientific computing, and education.",
      syntax: null,
      explanation: "Python uses indentation to define code blocks instead of curly braces. It is dynamically typed, meaning you don't need to declare variable types. Python supports multiple paradigms: procedural, object-oriented, and functional programming. The Python interpreter reads and executes code line by line.",
      examples: [
        { title: "Hello World", code: 'print("Hello, World!")', output: "Hello, World!" },
        { title: "Simple Calculation", code: 'x = 10\ny = 3\nprint(f"{x} + {y} = {x + y}")\nprint(f"{x} * {y} = {x * y}")', output: "10 + 3 = 13\n10 * 3 = 30" },
        { title: "Python as Calculator", code: 'import math\nprint(math.pi)\nprint(math.sqrt(144))\nprint(2 ** 10)', output: "3.141592653589793\n12.0\n1024" }
      ],
      keyPoints: ["Python uses indentation (typically 4 spaces) for code blocks", "It is dynamically typed - no need to declare variable types", "Python has a vast standard library and third-party package ecosystem (PyPI)", "Code is interpreted, not compiled - you run it directly"],
      commonMistakes: ["Using tabs and spaces inconsistently - this causes IndentationError", "Confusing assignment (=) with comparison (==) in conditions", "Forgetting that Python uses 0-based indexing"],
      proTips: ["Use virtual environments (venv) to isolate project dependencies", "Leverage list comprehensions for concise, Pythonic code", "Always use meaningful variable names - Python emphasizes readability"]
    },
    setup: {
      definition: "Setting up Python involves installing the Python interpreter, choosing a code editor or IDE, and verifying your installation works correctly.",
      whyUse: "A proper development environment ensures you can write, test, and debug Python code efficiently. Modern IDEs provide syntax highlighting, autocomplete, and debugging tools.",
      whereUse: "Any development machine - Windows, macOS, or Linux. Python comes pre-installed on most macOS and Linux systems.",
      syntax: null,
      explanation: "Download Python from python.org (version 3.10+ recommended). During installation on Windows, check 'Add Python to PATH'. Verify installation by running 'python --version' in your terminal. Install a code editor like VS Code with the Python extension for autocomplete and debugging support.",
      examples: [
        { title: "Check Python Version", code: "python --version", output: "Python 3.11.5" },
        { title: "Run a Python Script", code: '# Save as hello.py\nprint("Hello from Python!")\n\n# Run in terminal:\n# python hello.py', output: "Hello from Python!" },
        { title: "Install a Package with pip", code: "pip install requests\npython -c \"import requests; print(requests.__version__)\"", output: "2.31.0" }
      ],
      keyPoints: ["Always add Python to PATH during installation on Windows", "Use 'python3' command on macOS/Linux if 'python' points to Python 2", "pip is Python's package manager - use it to install third-party libraries", "VS Code with Python extension is a great free IDE choice"],
      commonMistakes: ["Not adding Python to PATH, causing 'python is not recognized' errors", "Confusing python and python3 commands on systems with both versions", "Installing packages globally instead of using virtual environments"],
      proTips: ["Use 'py' launcher on Windows to manage multiple Python versions", "Create a requirements.txt file to track project dependencies", "Use 'python -m venv myenv' to create isolated project environments"]
    },
    variables: {
      definition: "Variables are named containers that store data values. In Python, variables are created when you assign a value to them - no explicit declaration is needed.",
      whyUse: "Variables let you store, retrieve, and manipulate data in your programs. They are the fundamental building blocks of any program, allowing you to work with values dynamically.",
      whereUse: "Everywhere in programming - storing user input, calculation results, configuration values, database records, and more.",
      syntax: { description: "Variable assignment uses the = operator. Python supports multiple data types including int, float, str, bool, list, dict, tuple, and set.", code: "# Variable assignment\nname = 'Alice'        # str\nage = 25              # int\nheight = 5.6          # float\nis_student = True     # bool\n\n# Multiple assignment\nx, y, z = 1, 2, 3\n\n# Type checking\nprint(type(name))     # <class 'str'>\nprint(type(age))      # <class 'int'>" },
      explanation: "Python is dynamically typed, so you don't declare types explicitly. The type is inferred from the assigned value. Variables in Python are references to objects - the variable name points to the object in memory. You can reassign variables to different types at any time.",
      examples: [
        { title: "Basic Variable Types", code: "integer_val = 42\nfloat_val = 3.14\nstring_val = \"Hello\"\nbool_val = True\n\nprint(type(integer_val))\nprint(type(float_val))\nprint(type(string_val))\nprint(type(bool_val))", output: "<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'bool'>" },
        { title: "Type Conversion", code: 'num_str = "42"\nnum_int = int(num_str)\nnum_float = float(num_str)\n\nprint(num_int + 8)      # 50\nprint(num_float + 0.5)   # 42.5', output: "50\n42.5" },
        { title: "Variable Reassignment", code: 'x = 10\nprint(x)    # 10\nx = "now a string"\nprint(x)    # now a string\nprint(type(x))', output: "10\nnow a string\n<class 'str'>" }
      ],
      keyPoints: ["Python variables don't need explicit type declaration", "Use type() to check the type of any variable", "Python is strongly typed - you can't mix incompatible types without explicit conversion", "Variable names should be descriptive and use snake_case convention"],
      commonMistakes: ["Using Python reserved keywords as variable names (if, for, class, etc.)", "Starting variable names with numbers - must start with letter or underscore", "Not handling type conversion errors - int('hello') raises ValueError"],
      proTips: ["Use meaningful names like 'user_age' instead of 'x' or 'temp'", "Use type hints for better code documentation: def greet(name: str) -> str:", "Avoid using mutable default arguments in functions (common gotcha)"]
    },
    strings: {
      definition: "Strings in Python are immutable sequences of Unicode characters. They are one of the most commonly used data types and come with a rich set of built-in methods.",
      whyUse: "Strings are essential for handling text data - user names, messages, file paths, HTML content, data parsing, and much more. Python's string operations make text manipulation powerful and concise.",
      whereUse: "Text processing, web scraping, data cleaning, file handling, user input processing, logging, and string formatting in output.",
      syntax: { description: "Strings can be created with single quotes, double quotes, or triple quotes for multiline. Use f-strings for formatting.", code: "# String creation\nsingle = 'Hello'\ndouble = \"Hello\"\nmultiline = \"\"\"Line 1\nLine 2\nLine 3\"\"\"\n\n# f-string formatting\nname = 'Alice'\nage = 25\nprint(f'{name} is {age} years old')\n\n# String methods\nprint('hello'.upper())     # HELLO\nprint('HELLO'.lower())     # hello\nprint('  hi  '.strip())    # hi\nprint('hello world'.split()) # ['hello', 'world']" },
      explanation: "Strings are immutable - once created, they cannot be changed. Each string operation creates a new string. Python strings support indexing, slicing, and a wide variety of methods for searching, replacing, and formatting text. f-strings provide an efficient way to embed expressions inside strings.",
      examples: [
        { title: "String Slicing", code: 'text = "Hello, World!"\nprint(text[0:5])    # Hello\nprint(text[7:])     # World!\nprint(text[-6:])    # World!\nprint(text[::-1])   # !dlroW ,olleH', output: "Hello\nWorld!\nWorld!\n!dlroW ,olleH" },
        { title: "String Methods", code: 'msg = "  Python Programming  "\nprint(msg.strip())\nprint(msg.strip().replace("Python", "Java"))\nprint(msg.strip().count("m"))\nprint(msg.strip().find("Prog"))', output: "Python Programming\nJava Programming\n2\n7" },
        { title: "F-String Formatting", code: 'pi = 3.14159\nprint(f"Pi to 2 decimals: {pi:.2f}")\nprint(f"10 * 5 = {10 * 5}")\nname = "world"\nprint(f"Hello, {name.upper()}!")', output: "Pi to 2 decimals: 3.14\n10 * 5 = 50\nHello, WORLD!" }
      ],
      keyPoints: ["Strings are immutable - methods return new strings, not modify in place", "f-strings (f'...') are the modern way to format strings in Python", "Use .strip() to remove leading/trailing whitespace", "String slicing follows [start:stop:step] syntax"],
      commonMistakes: ["Trying to modify a string directly - 'hello'[0] = 'H' raises TypeError", "Forgetting that find() returns -1 when substring is not found", "Confusing string method return values - they return new strings"],
      proTips: ["Use triple quotes for multiline strings and docstrings", "Chain string methods: text.strip().lower().replace('old', 'new')", "Use 'in' operator for membership testing: if 'py' in 'python'"]
    },
    operators: {
      definition: "Operators are special symbols that perform operations on values and variables. Python provides arithmetic, comparison, logical, assignment, and membership operators.",
      whyUse: "Operators allow you to perform calculations, make comparisons, combine conditions, and manipulate data. They are fundamental to expressing logic in any program.",
      whereUse: "Mathematical calculations, conditional logic, data filtering, bitwise operations for flags, and membership testing in collections.",
      syntax: { description: "Python operators include arithmetic (+, -, *, /, //, %, **), comparison (==, !=, <, >, <=, >=), logical (and, or, not), and membership (in, not in).", code: "# Arithmetic\nprint(10 + 3)    # 13\nprint(10 - 3)    # 7\nprint(10 * 3)    # 30\nprint(10 / 3)    # 3.333...\nprint(10 // 3)   # 3\nprint(10 % 3)    # 1\nprint(2 ** 10)   # 1024\n\n# Comparison\nprint(5 == 5)    # True\nprint(5 != 3)    # True\n\n# Logical\nprint(True and False)  # False\nprint(True or False)   # True\nprint(not True)        # False" },
      explanation: "Arithmetic operators perform math operations. Note that / always returns a float while // returns the floor (integer) result. Comparison operators return Boolean values. Logical operators use short-circuit evaluation - 'and' stops at the first False, 'or' stops at the first True.",
      examples: [
        { title: "Arithmetic Operators", code: 'a, b = 17, 5\nprint(f"Add: {a} + {b} = {a + b}")\nprint(f"Floor Div: {a} // {b} = {a // b}")\nprint(f"Modulus: {a} % {b} = {a % b}")\nprint(f"Power: {a} ** 2 = {a ** 2}")', output: "Add: 17 + 5 = 22\nFloor Div: 17 // 5 = 3\nModulus: 17 % 5 = 2\nPower: 17 ** 2 = 289" },
        { title: "Logical and Membership", code: 'x = 15\nprint(10 < x < 20)\nfruits = ["apple", "banana", "cherry"]\nprint("banana" in fruits)\nprint("grape" not in fruits)', output: "True\nTrue\nTrue" },
        { title: "Assignment Operators", code: 'x = 10\nx += 5\nx -= 3\nx *= 2\nx //= 5\nprint(f"Final: {x}")', output: "Final: 4" }
      ],
      keyPoints: ["// performs floor division (rounds down to integer)", "** is the exponentiation operator (2**10 = 1024)", "Python supports chained comparisons: 1 < x < 10", "'in' and 'not in' test membership in sequences"],
      commonMistakes: ["Using = (assignment) instead of == (comparison) in conditions", "Expecting / to return an integer - it always returns float", "Forgetting operator precedence - use parentheses for clarity"],
      proTips: ["Use chained comparisons for cleaner range checks: 0 <= x <= 100", "Use divmod() to get quotient and remainder at once: divmod(17, 5) -> (3, 2)", "Remember operator precedence: not > and > or"]
    },
    conditionals: {
      definition: "Conditional statements allow your program to make decisions and execute different code paths based on whether conditions are true or false.",
      whyUse: "Programs need to respond differently to different situations - validating input, handling errors, choosing actions based on user choices. Conditionals are the backbone of decision-making logic.",
      whereUse: "Input validation, feature flags, error handling, game logic, data filtering, access control, and any scenario requiring branching logic.",
      syntax: { description: "Python uses if, elif (else if), and else keywords. Indentation defines the code block. Python also supports ternary expressions.", code: "score = 85\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\nprint(f'Grade: {grade}')\n\n# Ternary\nage = 20\nstatus = 'adult' if age >= 18 else 'minor'\nprint(status)" },
      explanation: "Python evaluates conditions from top to bottom. When a condition is True, its block executes and the rest are skipped. elif allows multiple branches. The ternary expression provides a compact way to choose between two values. Python treats non-empty, non-zero values as truthy and empty/zero values as falsy.",
      examples: [
        { title: "Grade Calculator", code: 'score = 75\nif score >= 90:\n    print("Excellent!")\nelif score >= 80:\n    print("Great job!")\nelif score >= 70:\n    print("Good work!")\nelif score >= 60:\n    print("Passed")\nelse:\n    print("Keep trying!")', output: "Good work!" },
        { title: "Nested Conditions", code: 'age = 25\nhas_license = True\n\nif age >= 18:\n    if has_license:\n        print("You can drive")\n    else:\n        print("Get a license first")\nelse:\n    print("Too young to drive")', output: "You can drive" },
        { title: "Truthy and Falsy Values", code: 'if 0:\n    print("truthy")\nelse:\n    print("falsy")\n\nif "hello":\n    print("truthy")\n\nif []:\n    print("truthy")\nelse:\n    print("falsy")', output: "falsy\ntruthy\nfalsy" }
      ],
      keyPoints: ["Use elif for multiple conditions instead of nested if-else chains", "Python treats 0, empty strings, empty collections, and None as falsy", "Ternary expressions are great for simple value selection", "Avoid deep nesting - use early returns or guard clauses instead"],
      commonMistakes: ["Using assignment (=) instead of comparison (==) in conditions", "Missing colons after if/elif/else keywords", "Indentation errors - Python requires consistent indentation in blocks"],
      proTips: ["Use 'not' to negate conditions: if not is_valid: handle_error()", "Leverage truthiness - if my_list: is cleaner than if len(my_list) > 0:", "Use match/case (Python 3.10+) for pattern matching on complex conditions"]
    },
    loops: {
      definition: "Loops allow you to execute a block of code repeatedly. Python provides 'for' loops for iterating over sequences and 'while' loops for condition-based repetition.",
      whyUse: "Loops eliminate repetitive code and process collections of data efficiently. They are essential for tasks like processing lists, reading files line by line, and implementing algorithms.",
      whereUse: "Iterating over data collections, processing files, implementing algorithms, web scraping multiple pages, batch operations, and repeated user input prompts.",
      syntax: { description: "for loops iterate over sequences. while loops continue until a condition becomes False. break, continue, and pass control loop flow.", code: "# For loop\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# While loop\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1\n\n# Loop control\nfor i in range(10):\n    if i == 3:\n        continue  # Skip 3\n    if i == 7:\n        break     # Stop at 7\n    print(i)" },
      explanation: "The for loop iterates over any iterable (list, string, range, dict). range(n) generates numbers 0 to n-1. range(start, stop, step) gives more control. while loops run as long as their condition is True. break exits the loop entirely, continue skips to the next iteration, and pass does nothing.",
      examples: [
        { title: "Iterating Over a List", code: 'fruits = ["apple", "banana", "cherry"]\nfor fruit in fruits:\n    print(f"I like {fruit}")', output: "I like apple\nI like banana\nI like cherry" },
        { title: "Nested Loops", code: 'for i in range(1, 4):\n    for j in range(1, 4):\n        print(f"{i} x {j} = {i*j}", end="  ")\n    print()', output: "1 x 1 = 1  1 x 2 = 2  1 x 3 = 3  \n2 x 1 = 2  2 x 2 = 4  2 x 3 = 6  \n3 x 1 = 3  3 x 2 = 6  3 x 3 = 9  " },
        { title: "For-Else", code: 'primes = [2, 3, 5, 7, 11]\nfor p in primes:\n    if p == 4:\n        print("Found 4!")\n        break\nelse:\n    print("4 not found in primes")', output: "4 not found in primes" }
      ],
      keyPoints: ["for loops are preferred when you know what you're iterating over", "while loops are best when the number of iterations is unknown", "Use enumerate() to get both index and value during iteration", "Always ensure while loops have a way to exit"],
      commonMistakes: ["Creating infinite loops by forgetting to update the while condition", "Modifying a list while iterating over it", "Using range(len(list)) instead of just iterating directly over the list"],
      proTips: ["Use for item in list: instead of for i in range(len(list)):", "Use enumerate(list) when you need both index and value", "Use zip() to iterate over multiple sequences simultaneously", "Use 'for-else' construct - else runs only if loop completes without break"]
    },
    lists: {
      definition: "Lists are ordered, mutable collections that can hold elements of any type. They are one of the most versatile data structures in Python.",
      whyUse: "Lists let you store and manipulate ordered collections of items. They support indexing, slicing, and a rich set of methods for adding, removing, searching, and sorting elements.",
      whereUse: "Storing collections of related items, implementing stacks/queues, data processing pipelines, matrix operations, and as building blocks for other data structures.",
      syntax: { description: "Lists are created with square brackets. They support indexing, slicing, and many built-in methods.", code: "# List creation\nfruits = ['apple', 'banana', 'cherry']\nnumbers = list(range(10))\n\n# Indexing and slicing\nprint(fruits[0])      # apple\nprint(fruits[-1])     # cherry\nprint(fruits[0:2])    # ['apple', 'banana']\n\n# Methods\nfruits.append('date')\nfruits.insert(1, 'blueberry')\nfruits.remove('banana')\nfruits.sort()\nprint(fruits)" },
      explanation: "Lists are Python's most flexible sequence type. They can contain any type of object, including other lists. Lists are mutable - you can add, remove, and change elements after creation. List comprehensions provide a concise way to create lists from expressions.",
      examples: [
        { title: "List Operations", code: 'nums = [3, 1, 4, 1, 5, 9, 2, 6]\nprint(sorted(nums))\nprint(nums.count(1))\nprint(nums.index(5))\nnums.reverse()\nprint(nums)', output: "[1, 1, 2, 3, 4, 5, 6, 9]\n2\n4\n[6, 2, 9, 5, 1, 4, 1, 3]" },
        { title: "List Comprehension", code: 'squares = [x**2 for x in range(10)]\nprint(squares)\n\nevens = [x for x in range(20) if x % 2 == 0]\nprint(evens)', output: "[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]\n[0, 2, 4, 6, 8, 10, 12, 14, 16, 18]" },
        { title: "Nested Lists", code: 'matrix = [\n    [1, 2, 3],\n    [4, 5, 6],\n    [7, 8, 9]\n]\nprint(matrix[1][2])\n\nflat = [num for row in matrix for num in row]\nprint(flat)', output: "6\n[1, 2, 3, 4, 5, 6, 7, 8, 9]" }
      ],
      keyPoints: ["Lists are mutable - you can add, remove, and change elements", "List comprehensions [expr for item in iterable if cond] are concise and fast", "Slicing creates a shallow copy: new_list = old_list[:]", "Use 'in' to check membership: if item in my_list"],
      commonMistakes: ["Forgetting that list slicing creates a shallow copy, not deep copy", "Modifying a list while iterating over it", "Using append() vs extend() incorrectly - append adds one element, extend adds multiple"],
      proTips: ["Use list comprehensions over map/filter for readability", "Use collections.deque for efficient operations at both ends", "Use *unpacking to merge lists: merged = [*list1, *list2]"]
    },
    tuples: {
      definition: "Tuples are immutable, ordered sequences of elements. Once created, their contents cannot be changed.",
      whyUse: "Tuples provide data integrity - once created, they can't be accidentally modified. They are faster than lists and can be used as dictionary keys.",
      whereUse: "Returning multiple values from functions, dictionary keys, protecting data from modification, coordinate pairs, RGB colors, and database records.",
      syntax: { description: "Tuples are created with parentheses or just commas. A single element tuple needs a trailing comma.", code: "# Tuple creation\npoint = (3, 4)\ncolor = (255, 128, 0)\nsingle = (42,)  # trailing comma required\n\n# Tuple unpacking\nx, y = point\nprint(f'x={x}, y={y}')\n\n# Swap variables\na, b = 1, 2\na, b = b, a\nprint(f'a={a}, b={b}')" },
      explanation: "Tuples support all sequence operations except those that modify contents. You can index, slice, and iterate over tuples, but you cannot add, remove, or change elements. Tuple unpacking allows you to assign multiple variables at once.",
      examples: [
        { title: "Tuple Operations", code: 'colors = ("red", "green", "blue")\nprint(len(colors))\nprint(colors[0])\nprint(colors[-1])\nprint("red" in colors)\n\nmore = colors + ("yellow",)\nprint(more)', output: "3\nred\nblue\nTrue\n('red', 'green', 'blue', 'yellow')" },
        { title: "Tuple as Dictionary Key", code: 'locations = {\n    (40.7128, -74.0060): "New York",\n    (51.5074, -0.1278): "London"\n}\nprint(locations[(40.7128, -74.0060)])', output: "New York" },
        { title: "Function Returns Multiple Values", code: 'def get_min_max(numbers):\n    return min(numbers), max(numbers)\n\nlo, hi = get_min_max([3, 1, 4, 1, 5, 9])\nprint(f"Min: {lo}, Max: {hi}")', output: "Min: 1, Max: 9" }
      ],
      keyPoints: ["Tuples are immutable - cannot be modified after creation", "Tuples can be used as dictionary keys (lists cannot)", "Tuple unpacking: a, b, c = (1, 2, 3)", "Use tuples for fixed collections that shouldn't change"],
      commonMistakes: ["Forgetting the trailing comma for single-element tuples: (42,) not (42)", "Trying to modify a tuple - raises TypeError", "Using tuples when you need mutability - use lists instead"],
      proTips: ["Use tuples to return multiple values from functions", "Use namedtuple for self-documenting tuples", "Tuples are slightly faster than lists - use them for read-only data"]
    },
    dicts: {
      definition: "Dictionaries are unordered (Python 3.7+ maintains insertion order) collections of key-value pairs. Keys must be unique and hashable.",
      whyUse: "Dictionaries provide fast lookups by key, making them ideal for mapping relationships, caching data, counting occurrences, and representing structured data like JSON.",
      whereUse: "Configurations, caching, counting word frequencies, JSON data, object attributes, database records, and implementing lookup tables.",
      syntax: { description: "Dictionaries are created with curly braces or dict(). Keys map to values using colon syntax.", code: "# Dictionary creation\nperson = {\n    'name': 'Alice',\n    'age': 25,\n    'city': 'New York'\n}\n\n# Accessing values\nprint(person['name'])\nprint(person.get('age'))\nprint(person.get('phone', 'N/A'))\n\n# Adding/updating\nperson['email'] = 'alice@example.com'\nperson['age'] = 26\n\n# Iterating\nfor key, value in person.items():\n    print(f'{key}: {value}')" },
      explanation: "Dictionaries store key-value pairs where keys must be unique and immutable (strings, numbers, tuples). Values can be any type. Dictionaries are very fast for lookups - O(1) average time complexity. Use .get() to safely access keys that might not exist.",
      examples: [
        { title: "Dictionary Methods", code: 'scores = {"Alice": 95, "Bob": 87, "Charlie": 92}\nprint(scores.keys())\nprint(scores.values())\nprint(scores.items())\n\nscores.pop("Bob")\nprint(scores)', output: "dict_keys(['Alice', 'Bob', 'Charlie'])\ndict_values([95, 87, 92])\n{'Alice': 95, 'Charlie': 92}" },
        { title: "Dictionary Comprehension", code: 'squares = {x: x**2 for x in range(6)}\nprint(squares)\n\nhigh = {k: v for k, v in squares.items() if v > 10}\nprint(high)', output: "{0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n{3: 9, 4: 16, 5: 25}" },
        { title: "Nested Dictionaries", code: 'students = {\n    "s1": {"name": "Alice", "grade": "A"},\n    "s2": {"name": "Bob", "grade": "B"}\n}\nprint(students["s1"]["name"])', output: "Alice" }
      ],
      keyPoints: ["Keys must be immutable (strings, numbers, tuples) and unique", "Use .get(key, default) to safely access potentially missing keys", "Dictionary comprehensions: {key: value for item in iterable}", "Dictionaries are O(1) for lookups by key"],
      commonMistakes: ["Accessing a missing key with bracket syntax raises KeyError", "Using mutable types as keys (lists, dicts) - they are not hashable", "Forgetting that {} creates an empty dict, not an empty set"],
      proTips: ["Use collections.defaultdict for auto-initializing missing keys", "Use collections.Counter for counting occurrences efficiently", "Use dict unpacking {**dict1, **dict2} to merge dictionaries"]
    },
    sets: {
      definition: "Sets are unordered collections of unique elements. They are optimized for membership testing and removing duplicates from sequences.",
      whyUse: "Sets automatically remove duplicates and provide fast membership testing. They also support mathematical set operations like union, intersection, and difference.",
      whereUse: "Removing duplicates, membership testing, finding common/different elements between collections, dependency resolution, and graph algorithms.",
      syntax: { description: "Sets are created with curly braces or set(). Use set() to convert a list to a set (removes duplicates).", code: "# Set creation\nfruits = {'apple', 'banana', 'cherry'}\nnumbers = set([1, 2, 2, 3, 3, 3])\nprint(numbers)  # {1, 2, 3}\n\n# Set operations\na = {1, 2, 3, 4}\nb = {3, 4, 5, 6}\nprint(a | b)   # Union: {1, 2, 3, 4, 5, 6}\nprint(a & b)   # Intersection: {3, 4}\nprint(a - b)   # Difference: {1, 2}\nprint(a ^ b)   # Symmetric diff: {1, 2, 5, 6}" },
      explanation: "Sets are unordered and unindexed - you cannot access elements by position. They are ideal for checking if an element exists in a collection. Set operations mirror mathematical set theory. Use set() to create an empty set, not {} (that creates an empty dict).",
      examples: [
        { title: "Removing Duplicates", code: 'numbers = [1, 2, 2, 3, 3, 3, 4, 4]\nunique = list(set(numbers))\nprint(unique)', output: "[1, 2, 3, 4]" },
        { title: "Set Comparisons", code: 'admin = {"alice", "bob", "charlie"}\neditors = {"bob", "diana", "charlie"}\n\nprint(admin & editors)\nprint(admin | editors)\nprint(admin - editors)', output: "{'bob', 'charlie'}\n{'alice', 'bob', 'charlie', 'diana'}\n{'alice'}" },
        { title: "Membership Testing", code: 'valid_codes = {200, 201, 204, 301, 302}\nif 200 in valid_codes:\n    print("Success!")', output: "Success!" }
      ],
      keyPoints: ["Sets only store unique elements - duplicates are automatically removed", "Use set() to create an empty set - {} creates an empty dict", "Set operations: union (|), intersection (&), difference (-), symmetric difference (^)", "Sets are unordered - you cannot access elements by index"],
      commonMistakes: ["Using {} to create an empty set - it creates an empty dict instead", "Trying to index into a set - sets don't support indexing", "Using mutable elements (lists, dicts) as set elements"],
      proTips: ["Use frozenset for immutable sets that can be used as dictionary keys", "Sets are faster than lists for membership testing", "Combine sets with comprehensions: {x for x in data if x > 0}"]
    },
    functions: {
      definition: "Functions are reusable blocks of code that perform a specific task. They accept input parameters, process them, and return results.",
      whyUse: "Functions promote code reusability, modularity, and readability. They let you write logic once and use it multiple times, making programs easier to maintain and debug.",
      whereUse: "Code organization, creating reusable utilities, API design, implementing algorithms, event handling, and breaking complex problems into manageable pieces.",
      syntax: { description: "Functions are defined with 'def', can have parameters, and return values with 'return'.", code: "# Basic function\ndef greet(name):\n    return f'Hello, {name}!'\n\nprint(greet('Alice'))  # Hello, Alice!\n\n# Default parameters\ndef greet2(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nprint(greet2('Bob', 'Hi'))  # Hi, Bob!\n\n# *args and **kwargs\ndef func(*args, **kwargs):\n    print(f'args: {args}')\n    print(f'kwargs: {kwargs}')\n\nfunc(1, 2, 3, name='Alice', age=25)" },
      explanation: "Functions encapsulate reusable logic. Parameters let you pass data in, and return sends data back. Default parameters provide fallback values. *args collects extra positional arguments into a tuple, **kwargs collects extra keyword arguments into a dictionary. Functions are first-class objects in Python.",
      examples: [
        { title: "Multiple Return Values", code: 'def analyze(numbers):\n    return min(numbers), max(numbers), sum(numbers) / len(numbers)\n\ndata = [10, 20, 30, 40, 50]\nlo, hi, avg = analyze(data)\nprint(f"Min: {lo}, Max: {hi}, Avg: {avg}")', output: "Min: 10, Max: 50, Avg: 30.0" },
        { title: "Default and Keyword Arguments", code: 'def create_profile(name, age, country="Unknown", hobby=None):\n    profile = f"{name}, {age}, {country}"\n    if hobby:\n        profile += f", Hobby: {hobby}"\n    return profile\n\nprint(create_profile("Alice", 30, "USA"))\nprint(create_profile("Bob", 25, hobby="Reading"))', output: "Alice, 30, USA\nBob, 25, Unknown, Hobby: Reading" },
        { title: "Function as First-Class Object", code: 'def apply_operation(x, y, operation):\n    return operation(x, y)\n\ndef add(a, b): return a + b\ndef multiply(a, b): return a * b\n\nprint(apply_operation(5, 3, add))\nprint(apply_operation(5, 3, multiply))', output: "8\n15" }
      ],
      keyPoints: ["Use return to send a value back from a function", "Default parameters must come after non-default parameters", "*args collects extra positional arguments, **kwargs collects keyword arguments", "Functions are first-class objects - can be passed as arguments"],
      commonMistakes: ["Using mutable default arguments (def func(x=[])) - they persist between calls", "Forgetting to return a value - function returns None by default", "Placing *args before regular parameters in function signature"],
      proTips: ["Use type hints for better documentation: def greet(name: str) -> str:", "Keep functions small and focused on one task", "Use docstrings to document function purpose, parameters, and return values"]
    },
    lambda: {
      definition: "Lambda functions are small, anonymous functions defined with the 'lambda' keyword. They can take any number of arguments but can only have a single expression.",
      whyUse: "Lambdas provide a concise way to create small throwaway functions without the overhead of a full function definition. They are commonly used with higher-order functions.",
      whereUse: "Sorting with custom keys, callback functions, short transformations with map/filter, and functional programming patterns.",
      syntax: { description: "Lambda syntax: lambda arguments: expression. The expression is automatically returned.", code: "# Lambda function\nsquare = lambda x: x ** 2\nprint(square(5))  # 25\n\n# With map\nnumbers = [1, 2, 3, 4, 5]\ndoubled = list(map(lambda x: x * 2, numbers))\nprint(doubled)  # [2, 4, 6, 8, 10]\n\n# With filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))\nprint(evens)    # [2, 4]" },
      explanation: "Lambdas are syntactically restricted to a single expression. They can reference variables from the enclosing scope but should be kept simple. For anything complex, use a regular function.",
      examples: [
        { title: "Lambda with Sorted", code: 'students = [\n    {"name": "Alice", "grade": 85},\n    {"name": "Bob", "grade": 92},\n    {"name": "Charlie", "grade": 78}\n]\n\nsorted_s = sorted(students, key=lambda s: s["grade"], reverse=True)\nfor s in sorted_s:\n    print(f"{s["name"]}: {s["grade"]}")', output: "Bob: 92\nAlice: 85\nCharlie: 78" },
        { title: "Lambda with reduce", code: 'from functools import reduce\nnumbers = [1, 2, 3, 4, 5]\nproduct = reduce(lambda x, y: x * y, numbers)\nprint(f"Product: {product}")', output: "Product: 120" },
        { title: "Lambda in Dictionary", code: 'ops = {\n    "add": lambda a, b: a + b,\n    "mul": lambda a, b: a * b\n}\nprint(ops["add"](10, 5))\nprint(ops["mul"](10, 5))', output: "15\n50" }
      ],
      keyPoints: ["Lambdas are anonymous functions - no name needed", "They can only contain a single expression", "Commonly used with map(), filter(), and sorted()", "For complex logic, use a regular def function instead"],
      commonMistakes: ["Trying to use statements or multiple expressions in a lambda", "Using lambdas when a regular function would be more readable", "Confusing map/filter return values - wrap in list() to see results"],
      proTips: ["Use lambdas for simple, short transformations", "Consider list comprehensions as an alternative: [x*2 for x in nums]", "Use operator module functions instead of lambdas for simple operations"]
    },
    scope: {
      definition: "Scope determines where a variable is accessible. Python uses the LEGB rule: Local, Enclosing, Global, and Built-in scopes.",
      whyUse: "Understanding scope prevents naming conflicts, makes code more predictable, and helps you write maintainable programs.",
      whereUse: "Preventing variable name conflicts, creating encapsulated functions, implementing closures, and organizing code into modular components.",
      syntax: { description: "Variables follow the LEGB lookup order. Use global and nonlocal keywords to modify variables in outer scopes.", code: "x = 'global'\n\ndef outer():\n    x = 'enclosing'\n    def inner():\n        x = 'local'\n        print(x)  # local\n    inner()\n    print(x)  # enclosing\n\nouter()\nprint(x)  # global" },
      explanation: "When Python encounters a variable name, it looks in Local scope first (current function), then Enclosing (outer functions), then Global (module level), then Built-in (Python's built-in names). The first match wins.",
      examples: [
        { title: "Variable Shadowing", code: 'x = 10\n\ndef func():\n    x = 20\n    print(f"Local x: {x}")\n\nfunc()\nprint(f"Global x: {x}")', output: "Local x: 20\nGlobal x: 10" },
        { title: "Using nonlocal", code: 'def outer():\n    count = 0\n    def increment():\n        nonlocal count\n        count += 1\n    increment()\n    increment()\n    print(f"Count: {count}")\n\nouter()', output: "Count: 2" },
        { title: "Built-in Scope", code: 'print(len([1, 2, 3]))\nprint(max(1, 2, 3))', output: "3\n3" }
      ],
      keyPoints: ["LEGB rule determines variable lookup order", "Use global for module-level, nonlocal for enclosing function scope", "Avoid shadowing built-in names like len, print, list", "Closures remember enclosing scope variables"],
      commonMistakes: ["Creating a local variable with the same name as a global one", "Forgetting that closures capture variables by reference, not by value", "Overusing global variables - prefer passing parameters"],
      proTips: ["Keep scope as narrow as possible", "Use closures instead of global variables for shared state", "Use underscore prefix (_var) to indicate 'private by convention' variables"]
    },
    classes: {
      definition: "Classes are blueprints for creating objects. They bundle data (attributes) and behavior (methods) into a single unit.",
      whyUse: "Classes organize code into logical units, model real-world entities, enable code reuse through inheritance, and make complex programs easier to understand.",
      whereUse: "Modeling real-world entities (User, Product, Order), building frameworks, creating reusable components, game development, and GUI applications.",
      syntax: { description: "Classes are defined with 'class' keyword. The __init__ method initializes attributes. Methods define behavior.", code: "class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\n    def bark(self):\n        return f'{self.name} says Woof!'\n\n    def __str__(self):\n        return f'Dog({self.name}, {self.age})'\n\nmy_dog = Dog('Rex', 5)\nprint(my_dog.bark())  # Rex says Woof!\nprint(my_dog)        # Dog(Rex, 5)" },
      explanation: "The __init__ method is the constructor. 'self' refers to the current instance. Instance attributes are stored on 'self'. Class attributes are shared across all instances. Special methods (dunder methods) customize object behavior.",
      examples: [
        { title: "Class with Properties", code: 'class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n\n    @property\n    def area(self):\n        return 3.14159 * self._radius ** 2\n\nc = Circle(5)\nprint(f"Area: {c.area:.2f}")', output: "Area: 78.54" },
        { title: "Class Inheritance", code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        raise NotImplementedError\n\nclass Cat(Animal):\n    def speak(self):\n        return f"{self.name} says Meow!"\n\ncat = Cat("Whiskers")\nprint(cat.speak())', output: "Whiskers says Meow!" },
        { title: "Class vs Instance Variables", code: 'class Student:\n    school = "Python Academy"\n    count = 0\n\n    def __init__(self, name):\n        self.name = name\n        Student.count += 1\n\ns1 = Student("Alice")\ns2 = Student("Bob")\nprint(f"School: {s1.school}")\nprint(f"Students: {Student.count}")', output: "School: Python Academy\nStudents: 2" }
      ],
      keyPoints: ["__init__ is the constructor method", "self refers to the current instance of the class", "Instance attributes are unique to each object, class attributes are shared", "Use @property for computed attributes"],
      commonMistakes: ["Forgetting 'self' as the first parameter in methods", "Confusing class variables with instance variables", "Not calling super().__init__() in subclasses"],
      proTips: ["Use dataclasses (@dataclass) for simple data-holding classes", "Implement __repr__ for debugging and __str__ for display", "Use composition over inheritance when possible"]
    },
    inheritance: {
      definition: "Inheritance allows a class to inherit attributes and methods from another class. The child class extends the parent class without modifying it.",
      whyUse: "Inheritance promotes code reuse - common functionality goes in the parent class, specialized behavior in child classes. It models 'is-a' relationships naturally.",
      whereUse: "Building class hierarchies, extending framework classes, implementing polymorphism, and creating specialized versions of general-purpose classes.",
      syntax: { description: "Pass the parent class in parentheses. Use super() to call parent methods.", code: "class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return '...'\n\nclass Dog(Animal):\n    def speak(self):\n        return f'{self.name} says Woof!'\n\ndog = Dog('Rex')\nprint(dog.speak())  # Rex says Woof!" },
      explanation: "When a child class inherits from a parent, it gets all the parent's methods and attributes. The child can override parent methods. super() allows the child to call parent methods. Python supports multiple inheritance.",
      examples: [
        { title: "super() Usage", code: 'class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n\nclass Employee(Person):\n    def __init__(self, name, age, emp_id):\n        super().__init__(name, age)\n        self.emp_id = emp_id\n\nemp = Employee("Alice", 30, "E001")\nprint(f"{emp.name} (ID: {emp.emp_id})")', output: "Alice (ID: E001)" },
        { title: "Multiple Inheritance", code: 'class Flyer:\n    def fly(self): return "Flying"\n\nclass Swimmer:\n    def swim(self): return "Swimming"\n\nclass Duck(Flyer, Swimmer):\n    def quack(self): return "Quack!"\n\nduck = Duck()\nprint(duck.fly())\nprint(duck.swim())', output: "Flying\nSwimming" },
        { title: "Method Resolution Order", code: 'class A:\n    def greet(self): return "Hello from A"\n\nclass B(A):\n    def greet(self): return "Hello from B"\n\nclass C(A):\n    def greet(self): return "Hello from C"\n\nclass D(B, C):\n    pass\n\nprint(D().greet())\nprint(D.__mro__)', output: "Hello from B\n(<class 'D'>, <class 'B'>, <class 'C'>, <class 'A'>, <class 'object'>)" }
      ],
      keyPoints: ["Use super().__init__() to call the parent constructor", "Child classes can override parent methods", "Python supports multiple inheritance", "MRO determines the lookup chain"],
      commonMistakes: ["Forgetting to call super().__init__() - parent attributes won't initialize", "Diamond problem in multiple inheritance", "Over-inheriting - prefer composition for 'has-a' relationships"],
      proTips: ["Use ABC (Abstract Base Classes) to define interfaces", "Keep inheritance hierarchies shallow", "Use isinstance() to check object types"]
    },
    polymorphism: {
      definition: "Polymorphism means 'many forms' - it allows objects of different types to be treated through the same interface. In Python, this happens naturally through duck typing.",
      whyUse: "Polymorphism enables writing flexible, generic code that works with any object that has the required behavior, regardless of its actual type.",
      whereUse: "Writing generic functions, plugin systems, event handlers, strategy patterns, and anywhere code needs to work with multiple types.",
      syntax: { description: "Python uses duck typing - if an object has the right methods, it can be used.", code: "class Dog:\n    def speak(self): return 'Woof!'\n\nclass Cat:\n    def speak(self): return 'Meow!'\n\ndef make_it_speak(animal):\n    print(animal.speak())\n\nfor animal in [Dog(), Cat()]:\n    make_it_speak(animal)" },
      explanation: "Python's duck typing means 'if it walks like a duck and quacks like a duck, it is a duck.' You don't need to check types - just use the methods you need. Operator overloading also enables polymorphism.",
      examples: [
        { title: "Duck Typing", code: 'class Dog:\n    def speak(self): return "Woof!"\n\nclass Cat:\n    def speak(self): return "Meow!"\n\nclass Duck:\n    def speak(self): return "Quack!"\n\nfor animal in [Dog(), Cat(), Duck()]:\n    print(f"{type(animal).__name__}: {animal.speak()}")', output: "Dog: Woof!\nCat: Meow!\nDuck: Quack!" },
        { title: "Operator Overloading", code: 'class Vector:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n    def __add__(self, other):\n        return Vector(self.x + other.x, self.y + other.y)\n\n    def __repr__(self):\n        return f"Vector({self.x}, {self.y})"\n\nv1 = Vector(1, 2)\nv2 = Vector(3, 4)\nprint(v1 + v2)', output: "Vector(4, 6)" },
        { title: "Polymorphic Function", code: 'def total_length(items):\n    return sum(len(item) for item in items)\n\nprint(total_length(["hello", "world"]))\nprint(total_length(["a", "bb", "ccc"]))', output: "10\n6" }
      ],
      keyPoints: ["Duck typing: if it has the method, it works", "The same function can work with different types", "Operator overloading enables custom type operators", "isinstance() can be used when type checking is truly necessary"],
      commonMistakes: ["Using isinstance() checks unnecessarily - prefer duck typing", "Not implementing required methods when subclassing", "Assuming all objects have the same method signatures"],
      proTips: ["Write code that works with any type that has the required behavior", "Use ABC to formally define required interfaces", "Leverage Python's protocol-based approach"]
    },
    encapsulation: {
      definition: "Encapsulation is the bundling of data with methods that operate on that data. Python uses naming conventions and properties to control access.",
      whyUse: "Encapsulation protects object integrity by preventing external code from directly modifying internal state. It provides controlled access through methods and properties.",
      whereUse: "Protecting sensitive data (passwords, bank accounts), validating input, maintaining invariants, and creating clean APIs.",
      syntax: { description: "Python uses naming conventions: _var (protected), __var (name-mangled/private). Properties provide controlled access.", code: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance\n\n    @property\n    def balance(self):\n        return self.__balance\n\n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n            return True\n        return False\n\naccount = BankAccount(1000)\nprint(account.balance)\naccount.deposit(500)\nprint(account.balance)" },
      explanation: "Python doesn't have true private variables. __name triggers name mangling. _name is a convention for 'internal use'. Properties provide a Pythonic way to control access with getter/setter logic.",
      examples: [
        { title: "Property with Validation", code: 'class Temperature:\n    def __init__(self, celsius=0):\n        self._celsius = celsius\n\n    @property\n    def celsius(self):\n        return self._celsius\n\n    @celsius.setter\n    def celsius(self, value):\n        if value < -273.15:\n            raise ValueError("Below absolute zero!")\n        self._celsius = value\n\nt = Temperature(100)\nprint(f"{t.celsius}C")', output: "100C" },
        { title: "Name Mangling", code: 'class Secret:\n    def __init__(self):\n        self.__secret = "hidden"\n\n    def get_secret(self):\n        return self.__secret\n\ns = Secret()\nprint(s._Secret__secret)', output: "hidden" },
        { title: "Protected Attributes", code: 'class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self._salary = salary\n\n    def info(self):\n        return f"{self.name}: ${self._salary}"\n\ne = Employee("Alice", 75000)\nprint(e.info())', output: "Alice: $75000" }
      ],
      keyPoints: ["__prefix triggers name mangling - not true privacy", "_prefix is a convention for 'internal use only'", "@property allows controlled access with validation", "Python emphasizes conventions over enforcement"],
      commonMistakes: ["Assuming __ makes variables truly private", "Not using properties when validation is needed", "Over-encapsulating simple data classes"],
      proTips: ["Use properties for computed attributes and validation", "Use dataclasses for simple data containers", "Follow 'we're all consenting adults' principle"]
    },
    modules: {
      definition: "Modules are Python files containing code. Packages are directories of modules. They enable code organization, reuse, and namespace management.",
      whyUse: "Modules and packages organize code into logical units, prevent naming conflicts, enable code reuse, and make large codebases manageable.",
      whereUse: "Organizing large projects, creating libraries, sharing code, and importing third-party functionality.",
      syntax: { description: "Use import to bring in modules. __name__ == '__main__' guards code that should only run when executed directly.", code: "import math\nprint(math.pi)\n\nfrom math import sqrt, pi\nprint(sqrt(144))\n\ndef main():\n    print('This runs only when executed')\n\nif __name__ == '__main__':\n    main()" },
      explanation: "When Python imports a module, it executes all code in that file. __name__ is set to the module's name when imported, but to '__main__' when run directly.",
      examples: [
        { title: "Creating a Module", code: "# utils.py\ndef add(a, b): return a + b\n\n# main.py\nimport utils\nprint(utils.add(5, 3))", output: "8" },
        { title: "from ... import", code: 'from math import pi, sqrt\nprint(f"Pi: {pi}")\nprint(f"Root: {sqrt(25)}")', output: "Pi: 3.141592653589793\nRoot: 5.0" },
        { title: "Package Structure", code: "# mypackage/\n#   __init__.py\n#   module_a.py\n#   module_b.py\n\n# Usage\nfrom mypackage import module_a", output: "" }
      ],
      keyPoints: ["__name__ == '__main__' ensures code runs only when executed directly", "Use 'from module import func' for frequently used functions", "Packages are directories with __init__.py files", "Avoid circular imports"],
      commonMistakes: ["Circular imports - module A imports B and B imports A", "Forgetting __init__.py in packages", "Using 'from module import *' - it pollutes the namespace"],
      proTips: ["Use relative imports within packages: from . import module", "Place imports at the top of the file", "Use if TYPE_CHECKING: for type hints without circular imports"]
    },
    fileio: {
      definition: "File I/O allows Python programs to read from and write to files. Context managers ensure files are properly closed.",
      whyUse: "Programs need to persist data, read configurations, process text files, handle CSV/JSON data, and generate reports.",
      whereUse: "Reading/writing files, processing CSV/JSON data, log files, configuration files, and data serialization.",
      syntax: { description: "Use 'with open()' for safe file handling. Modes: 'r' (read), 'w' (write), 'a' (append).", code: "# Reading\nwith open('data.txt', 'r') as f:\n    content = f.read()\n\n# Writing\nwith open('output.txt', 'w') as f:\n    f.write('Hello, World!')\n\n# Line by line\nwith open('data.txt', 'r') as f:\n    for line in f:\n        print(line.strip())" },
      explanation: "The with statement automatically closes the file when the block ends. 'r' opens for reading, 'w' for writing (overwrites), 'a' for appending.",
      examples: [
        { title: "Read and Process", code: '# data.txt:\n# Alice 90\n# Bob 85\n\nwith open("data.txt", "r") as f:\n    total = 0\n    count = 0\n    for line in f:\n        name, score = line.split()\n        total += int(score)\n        count += 1\n    print(f"Average: {total / count:.1f}")', output: "Average: 87.5" },
        { title: "JSON Operations", code: 'import json\n\ndata = {"name": "Alice", "scores": [90, 85]}\nwith open("data.json", "w") as f:\n    json.dump(data, f, indent=2)\n\nwith open("data.json", "r") as f:\n    loaded = json.load(f)\n    print(loaded["name"])', output: "Alice" },
        { title: "CSV Operations", code: 'import csv\n\nwith open("people.csv", "w", newline="") as f:\n    writer = csv.writer(f)\n    writer.writerow(["Name", "Age"])\n    writer.writerow(["Alice", 30])\n\nwith open("people.csv", "r") as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)', output: "['Name', 'Age']\n['Alice', '30']" }
      ],
      keyPoints: ["Always use 'with' statement - it automatically closes files", "'w' mode overwrites existing files - use 'a' to append", "Use json.dump/json.load for JSON files", "Strip newlines with .strip() when reading lines"],
      commonMistakes: ["Not using 'with' statement - files may not close properly", "Using 'w' mode when you meant 'a' - data gets overwritten", "Not handling FileNotFoundError when reading files"],
      proTips: ["Use encoding='utf-8' for cross-platform compatibility", "Use pathlib module for modern file path handling", "Use tempfile module for temporary files"]
    },
    errors: {
      definition: "Exception handling allows programs to gracefully handle runtime errors instead of crashing.",
      whyUse: "Robust programs must handle unexpected situations - file not found, network errors, invalid input.",
      whereUse: "Input validation, file operations, network requests, database operations, and any code that might fail.",
      syntax: { description: "Use try/except/else/finally blocks. Catch specific exceptions.", code: "try:\n    result = 10 / int(input('Enter number: '))\nexcept ValueError:\n    print('Not a valid number!')\nexcept ZeroDivisionError:\n    print('Cannot divide by zero!')\nelse:\n    print(f'Result: {result}')\nfinally:\n    print('This always runs')" },
      explanation: "The try block contains code that might raise an exception. except catches specific exceptions. else runs only if no exception occurred. finally always runs for cleanup.",
      examples: [
        { title: "File Error Handling", code: 'try:\n    with open("missing.txt") as f:\n        content = f.read()\nexcept FileNotFoundError:\n    print("File not found!")', output: "File not found!" },
        { title: "Custom Exception", code: 'class AgeError(Exception):\n    def __init__(self, age, msg="Invalid age"):\n        self.age = age\n        self.msg = msg\n        super().__init__(msg)\n\ndef set_age(age):\n    if age < 0 or age > 150:\n        raise AgeError(age)\n    return age\n\ntry:\n    set_age(200)\nexcept AgeError as e:\n    print(f"Error: {e.msg} (got {e.age})")', output: "Error: Invalid age (got 200)" },
        { title: "Multiple Exceptions", code: 'data = {"name": "Alice"}\ntry:\n    print(data["email"])\nexcept KeyError as e:\n    print(f"Missing key: {e}")', output: "Missing key: 'email'" }
      ],
      keyPoints: ["Always catch specific exceptions - avoid bare 'except:'", "Use 'else' for code that should run only on success", "Use 'finally' for cleanup code that must always run", "raise lets you throw custom exceptions"],
      commonMistakes: ["Catching bare except: - it catches SystemExit and KeyboardInterrupt", "Using exceptions for normal flow control", "Swallowing exceptions silently"],
      proTips: ["Use contextlib.suppress() for exceptions you intentionally ignore", "Log exceptions with traceback for debugging", "Use try/except around I/O operations"]
    },
    decorators: {
      definition: "Decorators are functions that modify the behavior of other functions. They provide a clean syntax for wrapping functionality.",
      whyUse: "Decorators add cross-cutting concerns (logging, timing, caching) without modifying the original function's code.",
      whereUse: "Logging, authentication, caching, rate limiting, timing, retry logic.",
      syntax: { description: "A decorator is a function that takes a function and returns a new function. Use @decorator syntax.", code: "import time\n\ndef timer(func):\n    def wrapper(*args, **kwargs):\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end-start:.4f}s')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    time.sleep(1)\n    return 'Done!'\n\nprint(slow_function())" },
      explanation: "A decorator wraps a function, adding behavior before/after the original. @decorator is syntactic sugar for func = decorator(func). Use functools.wraps to preserve metadata.",
      examples: [
        { title: "Logging Decorator", code: 'import functools\n\ndef log_calls(func):\n    @functools.wraps(func)\n    def wrapper(*args, **kwargs):\n        print(f"Calling {func.__name__} with {args}")\n        result = func(*args, **kwargs)\n        print(f"{func.__name__} returned {result}")\n        return result\n    return wrapper\n\n@log_calls\ndef add(a, b):\n    return a + b\n\nadd(3, 5)', output: "Calling add with (3, 5)\nadd returned 8" },
        { title: "Decorator with Arguments", code: 'import functools\n\ndef repeat(times):\n    def decorator(func):\n        @functools.wraps(func)\n        def wrapper(*args, **kwargs):\n            for _ in range(times):\n                result = func(*args, **kwargs)\n            return result\n        return wrapper\n    return decorator\n\n@repeat(times=3)\ndef greet(name):\n    print(f"Hello, {name}!")\n\ngreet("Alice")', output: "Hello, Alice!\nHello, Alice!\nHello, Alice!" },
        { title: "Class Decorator", code: 'def add_repr(cls):\n    def __repr__(self):\n        attrs = ", ".join(f"{k}={v}" for k, v in self.__dict__.items())\n        return f"{cls.__name__}({attrs})"\n    cls.__repr__ = __repr__\n    return cls\n\n@add_repr\nclass Point:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\nprint(Point(3, 4))', output: "Point(x=3, y=4)" }
      ],
      keyPoints: ["Decorators wrap functions to add behavior", "Use functools.wraps to preserve function metadata", "Decorators can be stacked: @d1 @d2 def func():", "Decorators with arguments need extra nesting"],
      commonMistakes: ["Forgetting @functools.wraps - loses original function metadata", "Not handling *args and **kwargs in wrapper", "Using decorators when simple calls would be clearer"],
      proTips: ["Use class-based decorators for stateful decorators", "Stack multiple decorators for composed behavior", "Use lru_cache for built-in memoization"]
    },
    generators: {
      definition: "Generators are functions that produce a sequence of values lazily using the yield keyword. They generate values on-the-fly.",
      whyUse: "Generators are memory-efficient - they yield one value at a time instead of creating the entire sequence in memory.",
      whereUse: "Reading large files, generating sequences, data pipelines, infinite sequences, and lazy evaluation.",
      syntax: { description: "Use yield instead of return. The function pauses at each yield and resumes when next() is called.", code: "def count_up_to(n):\n    i = 1\n    while i <= n:\n        yield i\n        i += 1\n\ncounter = count_up_to(5)\nfor num in counter:\n    print(num)" },
      explanation: "When a generator function is called, it returns a generator object. The code doesn't run until you call next() or iterate. Each yield pauses the function and returns a value.",
      examples: [
        { title: "Simple Generator", code: 'def fibonacci():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci()\nfor _ in range(8):\n    print(next(fib), end=" ")', output: "0 1 1 2 3 5 8 13" },
        { title: "Generator Expression", code: 'squares = (x**2 for x in range(10))\nprint(sum(squares))\n\nimport sys\ngen = (x * 2 for x in range(1000000))\nprint(f"Generator size: {sys.getsizeof(gen)} bytes")', output: "285\nGenerator size: 208 bytes" },
        { title: "File Reading Generator", code: 'def read_large_file(path):\n    with open(path) as f:\n        for line in f:\n            yield line.strip()', output: "(memory-efficient file reading)" }
      ],
      keyPoints: ["yield pauses the function and returns a value", "Generators are memory-efficient for large datasets", "Generator expressions: (expr for x in iterable)", "Generators can only be iterated once"],
      commonMistakes: ["Trying to index into a generator - convert to list first", "Reusing a generator - it's exhausted after one iteration", "Using return with a value in generators - use yield instead"],
      proTips: ["Use generators for large datasets to save memory", "Use yield from to delegate to sub-generators", "Combine with itertools for powerful data processing pipelines"]
    },
    comprehensions: {
      definition: "Comprehensions are concise syntax for creating lists, dictionaries, and sets from existing iterables.",
      whyUse: "Comprehensions replace verbose loops with one-line expressions. They are more readable and often faster than equivalent for loops.",
      whereUse: "Transforming data, filtering collections, creating dictionaries from lists, and building sets from sequences.",
      syntax: { description: "List: [expr for item in iterable if cond]. Dict: {k: v for item in iterable}. Set: {expr for item in iterable}.", code: "# List comprehension\nsquares = [x**2 for x in range(10)]\n\n# With condition\nevens = [x for x in range(20) if x % 2 == 0]\n\n# Dictionary comprehension\nword_lengths = {w: len(w) for w in [\"hello\", \"world\"]}\n\n# Set comprehension\nunique_lengths = {len(w) for w in [\"hi\", \"hey\", \"hello\"]}" },
      explanation: "Comprehensions create new collections by applying an expression to each item, optionally filtering. They are syntactic sugar for creating a new collection with a loop.",
      examples: [
        { title: "Nested List Comprehension", code: 'matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]\nflat = [num for row in matrix for num in row]\nprint(flat)', output: "[1, 2, 3, 4, 5, 6, 7, 8, 9]" },
        { title: "Filtering and Transforming", code: 'words = ["Hello", "World", "Python", "hi"]\nresult = [w.lower() for w in words if len(w) > 2]\nprint(result)', output: "['hello', 'world', 'python']" },
        { title: "Dict and Set Comprehensions", code: 'names = ["Alice", "Bob", "Charlie"]\nname_lengths = {n: len(n) for n in names}\nprint(name_lengths)\n\nnumbers = [1, 2, 2, 3, 3, 3]\nunique_squares = {x**2 for x in numbers}\nprint(unique_squares)', output: "{'Alice': 5, 'Bob': 3, 'Charlie': 7}\n{1, 4, 9}" }
      ],
      keyPoints: ["List comprehensions create lists: [expr for x in iterable]", "Dict comprehensions: {key: val for x in iterable}", "Set comprehensions: {expr for x in iterable}", "Use conditions to filter: [x for x in iterable if cond]"],
      commonMistakes: ["Making comprehensions too complex - use regular loops instead", "Forgetting that they create new collections (not modify existing)", "Using side effects in comprehensions - use regular loops for side effects"],
      proTips: ["Keep comprehensions readable - one expression per line if needed", "Use generator expressions for memory efficiency", "Nested comprehensions should be kept simple"]
    },
    regex: {
      definition: "Regular expressions (regex) are patterns used to match character combinations in strings. Python's re module provides regex support.",
      whyUse: "Regex enables powerful text searching, validation, and manipulation that would be tedious with string methods alone.",
      whereUse: "Input validation (emails, phones), text parsing, data extraction, search and replace, and log analysis.",
      syntax: { description: "Use re module functions: match(), search(), findall(), sub(). Patterns use special characters.", code: "import re\n\n# Basic pattern matching\ntext = 'Hello, my email is user@example.com'\npattern = r'\\w+@\\w+\\.\\w+'\n\nmatch = re.search(pattern, text)\nif match:\n    print(match.group())  # user@example.com\n\n# Find all matches\nnumbers = re.findall(r'\\d+', 'Call 555-1234 or 555-5678')\nprint(numbers)  # ['555', '1234', '555', '5678']" },
      explanation: "The re module provides regular expression operations. Patterns are strings with special syntax. re.search() finds the first match, re.findall() returns all matches, re.sub() replaces matches.",
      examples: [
        { title: "Email Validation", code: 'import re\n\npattern = r\'^[\\w.+-]+@[\\w-]+\\.[\\w.]+$\'\nemails = ["test@example.com", "invalid@", "user.name+tag@domain.co"]\n\nfor email in emails:\n    valid = "Valid" if re.match(pattern, email) else "Invalid"\n    print(f"{email}: {valid}")', output: "test@example.com: Valid\ninvalid@: Invalid\nuser.name+tag@domain.co: Valid" },
        { title: "Search and Replace", code: 'import re\n\ntext = "The price is $25.99 and $10.00"\nresult = re.sub(r\'\\$[\\d.]+\', "***", text)\nprint(result)', output: "The price is *** and ***" },
        { title: "Groups and Capturing", code: 'import re\n\ntext = "Date: 2024-01-15"\nmatch = re.search(r\'(\\d{4})-(\\d{2})-(\\d{2})\', text)\nif match:\n    print(f"Year: {match.group(1)}")\n    print(f"Month: {match.group(2)}")\n    print(f"Day: {match.group(3)}")', output: "Year: 2024\nMonth: 01\nDay: 15" }
      ],
      keyPoints: ["Use raw strings (r'...') for regex patterns", "re.search() finds first match, re.findall() finds all", "Groups () capture parts of the match", "Common patterns: \\d (digit), \\w (word char), . (any char)"],
      commonMistakes: ["Not using raw strings - backslashes get interpreted", "Using greedy matching when you need lazy (use *? or +?)", "Forgetting that . doesn't match newlines by default"],
      proTips: ["Test regex patterns at regex101.com", "Use re.compile() for patterns used multiple times", "Name groups with (?P<name>pattern) for clarity"]
    }
  },
