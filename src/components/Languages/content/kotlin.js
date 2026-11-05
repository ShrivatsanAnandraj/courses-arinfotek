const kotlin = {
  // ==================== INTRO LEVEL ====================
  intro: {
    definition: 'Kotlin is a modern programming language from JetBrains that runs on the JVM. It is the official language for Android app development.',
    whyUse: 'Every new Android app at Google, and most companies today, is written in Kotlin. Companies like Pinterest, Trello, and Netflix use it because the same Kotlin code can build Android apps, server programs, and even websites. If you want to build mobile apps or work in modern software teams, Kotlin is one of the best languages to learn.',
    whereUse: null,
    syntax: null,
    explanation: 'Kotlin was created by JetBrains (the company behind IntelliJ IDEA) and released in 2011. It was designed to fix common problems in Java: too much boilerplate code and frequent null pointer crashes. Google made it the preferred language for Android in 2019. Kotlin code is clean, safe, and can mix freely with existing Java code.',
    examples: [
      {
        title: 'Hello World in Kotlin',
        code: `fun main() {
  println("Hello, World!")
}`,
        output: 'Hello, World!'
      },
      {
        title: 'Kotlin vs Java: Same Task, Less Code',
        code: `// Java needs this for one simple line:
// System.out.println("Hi");

// Kotlin needs only this:
fun main() {
  println("Hi")
}`,
        output: 'Hi'
      },
      {
        title: 'Where Kotlin Runs',
        code: `fun main() {
  val platforms = listOf(
    "Android apps",
    "Server backends (Spring/Ktor)",
    "Web frontends (Kotlin/JS)",
    "Desktop apps",
    "Even iOS apps (Kotlin Multiplatform)"
  )
  platforms.forEach { println("- " + it) }
}`,
        output: '- Android apps\n- Server backends (Spring/Ktor)\n- Web frontends (Kotlin/JS)\n- Desktop apps\n- Even iOS apps (Kotlin Multiplatform)'
      }
    ],
    keyPoints: [
      'Kotlin runs on the JVM, so it works everywhere Java works.',
      'It is the official language for Android development.',
      'It is concise: usually 30-40% fewer lines than Java.'
    ],
    commonMistakes: [
      'Thinking Kotlin is only for Android - it also runs servers, desktops, and more.',
      'Confusing Kotlin (the language) with Kotlin/JVM, Kotlin/JS, and Kotlin/Native (its versions for different platforms).'
    ],
    proTips: [
      'If you know Java, Kotlin will feel familiar - most Java code converts easily.',
      'Kotlin code interoperates with Java, so you can use both in one project.'
    ]
  },

  setup: {
    definition: 'To write Kotlin code you need a place to type it and a way to run it. The two easiest options are an online playground or IntelliJ IDEA.',
    whyUse: 'Real developers use IntelliJ IDEA (also made by JetBrains) because it understands Kotlin deeply and gives smart suggestions. But for your first day, an online playground needs zero installation - you can start learning in under a minute. Many students begin in the playground and install IntelliJ later when they start bigger projects.',
    whereUse: null,
    syntax: null,
    explanation: 'Option 1: Open play.kotlinlang.org in your browser, type code, and press Run. Nothing to install. Option 2: Install IntelliJ IDEA Community Edition (free) from jetbrains.com, create a new Kotlin project, and run it locally. Option 3: Android Studio (free) if you plan to build Android apps - it includes Kotlin support out of the box. On this website, the code editor and Run button use an online Kotlin compiler, so you can practice right here.',
    examples: [
      {
        title: 'Try It Right Here',
        code: `fun main() {
  println("Your Kotlin environment works!")
  println("Kotlin version: \${KotlinVersion.CURRENT}")
}`,
        output: 'Your Kotlin environment works!\nKotlin version: 2.1.0'
      },
      {
        title: 'Check Installation from Terminal (Optional)',
        code: `# In your terminal, if you installed kotlinc:
kotlinc -version

# Expected output:
# info: kotlinc-jvm 2.1.0 (JRE 21.0.5)`,
        output: 'info: kotlinc-jvm 2.1.0 (JRE 21.0.5)'
      },
      {
        title: 'Your First Run in IntelliJ IDEA',
        code: `// 1. New Project -> Kotlin -> JVM
// 2. Open Main.kt, you will see:
fun main() {
  println("Running in IntelliJ!")
}
// 3. Click the green arrow beside main`,
        output: 'Running in IntelliJ!'
      }
    ],
    keyPoints: [
      'play.kotlinlang.org: fastest way to start, no install needed.',
      'IntelliJ IDEA Community Edition: free, best for real projects.',
      'Android Studio: use this when you start Android apps.'
    ],
    commonMistakes: [
      'Downloading IntelliJ IDEA Ultimate (paid) when the free Community edition is enough for learning.',
      'Spending hours on setup before writing a single line of code.'
    ],
    proTips: [
      'Start with the playground - install tools only when you need them.',
      'This website has a built-in Kotlin editor: use it to practice every lesson here.'
    ]
  },

  hello: {
    definition: 'Every Kotlin program starts running from a special function called main. Code inside main runs from top to bottom, line by line.',
    whyUse: 'main is your program\'s entry point - without it, the computer does not know where to begin. println prints text to the screen, which is how you see results while learning. Every professional Kotlin developer starts every program the same way, so learning this once is learning it forever.',
    whereUse: null,
    syntax: null,
    explanation: 'The keyword fun declares a function. main is the name, and the parentheses () mean it takes no parameters. The code between the curly braces { } is what runs. println("text") prints a line of text. The // starts a comment - the computer ignores it.',
    examples: [
      {
        title: 'Your First Program',
        code: `fun main() {
  println("Hello, World!")
}`,
        output: 'Hello, World!'
      },
      {
        title: 'Print Several Lines',
        code: `fun main() {
  println("My name is Arun")
  println("I am learning Kotlin")
  println("Line 3 runs after line 2")
}`,
        output: 'My name is Arun\nI am learning Kotlin\nLine 3 runs after line 2'
      },
      {
        title: 'Comments and Calculations',
        code: `fun main() {
  // This is a comment - the computer ignores it
  val sum = 2 + 3
  println(sum)          // prints 5
  print("No newline ")  // print does not add a newline
  println("after this")
}`,
        output: '5\nNo newline after this'
      }
    ],
    keyPoints: [
      'fun main() { ... } is where every Kotlin program starts.',
      'println() prints text plus a newline; print() prints without a newline.',
      '// comments are ignored by the computer.'
    ],
    commonMistakes: [
      'Forgetting the curly braces { } around the function body.',
      'Using println without parentheses or quotes: println(Hello) is wrong, write println("Hello").'
    ],
    proTips: [
      'Code runs top to bottom inside main - read it like a recipe.',
      'If code does not run, check that main exists and has no typos in its name.'
    ]
  },

  variables: {
    definition: 'A variable is a named box that stores a value. In Kotlin you create one with val (cannot change) or var (can change).',
    whyUse: 'Programs need to remember things: your name, a score, a price. Variables store those values under readable names so you can use them later. Choosing val over var matters in real teams: immutable (val) data prevents a whole class of bugs where a value changes unexpectedly somewhere else in the code.',
    whereUse: null,
    syntax: null,
    explanation: 'val creates an immutable variable - once assigned, the value never changes. var creates a mutable variable you can reassign. Kotlin guesses (infers) the type from the value, but you can write it explicitly. Always prefer val; switch to var only when the value really must change.',
    examples: [
      {
        title: 'val and var',
        code: `fun main() {
  val name = "Arun"     // cannot be changed
  var score = 10        // can be changed
  score = 20            // OK
  println(name + " scored " + score)

  // name = "Bob"  // ERROR: val cannot be reassigned
}`,
        output: 'Arun scored 20'
      },
      {
        title: 'Type Inference vs Explicit Types',
        code: `fun main() {
  val course = "Kotlin"   // Kotlin infers String
  val marks: Int = 95     // you can write the type
  val pi = 3.14           // inferred Double
  val passed = true       // inferred Boolean
  println("$course $marks $pi $passed")
}`,
        output: 'Kotlin 95 3.14 true'
      },
      {
        title: 'Why val Is Safer',
        code: `fun main() {
  val students = 30
  // students = 31   // would fail - the count of students should not silently change
  var total = 0
  total = total + students
  println("Class has " + students + " students, total = " + total)
}`,
        output: 'Class has 30 students, total = 30'
      }
    ],
    keyPoints: [
      'val = immutable (preferred), var = mutable.',
      'Kotlin infers types automatically, but you can declare them explicitly.',
      'Variables must be assigned before use - no null surprises.'
    ],
    commonMistakes: [
      'Using var everywhere - most variables never need to change.',
      'Trying to reassign a val and getting a compiler error.'
    ],
    proTips: [
      'Start with val always; change it to var only when the compiler tells you it must change.',
      'Use meaningful names: val studentName, not val x.'
    ]
  },

  datatypes: {
    definition: 'A data type describes what kind of value a variable holds: whole numbers, decimals, true/false, single characters, or text.',
    whyUse: 'Types catch bugs before your program runs. If you try to add a person\'s name to a bank balance, the compiler stops you immediately instead of producing garbage later. Kotlin\'s type system combined with its null safety is a big reason fewer Kotlin apps crash in production than apps in older languages.',
    whereUse: null,
    syntax: null,
    explanation: 'Kotlin\'s main types: Int (whole numbers), Double (decimals), Boolean (true/false), Char (one character), String (text). Kotlin also has Long for very big whole numbers and Float for smaller decimals. Type inference means you rarely write types, but they are always there behind the scenes.',
    examples: [
      {
        title: 'Basic Types',
        code: `fun main() {
  val age: Int = 25
  val price: Double = 49.99
  val enrolled: Boolean = true
  val grade: Char = 'A'          // single character, single quotes
  val name: String = "Arinfotek" // text, double quotes
  println("$age $price $enrolled $grade $name")
}`,
        output: '25 49.99 true A Arinfotek'
      },
      {
        title: 'Types in Action',
        code: `fun main() {
  val a = 7        // Int
  val b = 2.5      // Double
  val result = a * b   // Int * Double -> Double
  println(result)
  println(a / 2)       // Int division: 3 (drops decimal!)
  println(a.toDouble() / 2)  // 3.5
}`,
        output: '17.5\n3\n3.5'
      },
      {
        title: 'String, Long, and Boolean Logic',
        code: `fun main() {
  val bigNumber: Long = 9_000_000_000_000L   // underscores are allowed
  val url = "https://courses.arinfotek.co.in"
  val active = true and false
  println(bigNumber)
  println(url)
  println(active)
}`,
        output: '9000000000000\nhttps://courses.arinfotek.co.in\nfalse'
      }
    ],
    keyPoints: [
      'Int, Double, Boolean, Char, String cover most everyday code.',
      'Int / Int keeps whole numbers: 7 / 2 = 3.',
      'Char uses single quotes \'A\', String uses double quotes "A".'
    ],
    commonMistakes: [
      'Mixing Int and Double without conversion - Kotlin will not allow a + b if types differ.',
      'Writing "A" for a Char - that is a String; Char needs \'A\'.'
    ],
    proTips: [
      'Convert explicitly: a.toDouble() when you need decimal division.',
      'Use underscores in big numbers (1_000_000) for readability.'
    ]
  },

  strings: {
    definition: 'A String is a sequence of characters representing text. Kotlin strings are immutable - once created, they never change.',
    whyUse: 'Almost every app handles text: names, messages, URLs, file paths, reports. Knowing string tools saves hours of manual work. String templates (the $ sign) make messages readable and are used in every real Kotlin codebase you will ever open.',
    whereUse: null,
    syntax: null,
    explanation: 'String templates put values inside text with $: "Hello, $name". Use ${...} for expressions: "${a + b}". Multiline strings use triple quotes """. Kotlin strings are immutable, so methods like uppercase() return a NEW string instead of changing the original. Important methods: length, uppercase(), lowercase(), trim(), split(), contains(), replace(), substring().',
    examples: [
      {
        title: 'String Templates',
        code: `fun main() {
  val name = "Anita"
  val marks = 92
  println("Hello, $name!")
  println("You scored \${marks + 8} with bonus")
  println("Name has \${name.length} letters")
}`,
        output: 'Hello, Anita!\nYou scored 100 with bonus\nName has 5 letters'
      },
      {
        title: 'Common String Methods',
        code: `fun main() {
  val msg = "  Learn Kotlin Today  "
  println(msg.trim())
  println(msg.trim().uppercase())
  println(msg.trim().lowercase())
  println("Kotlin" in msg)
  println(msg.trim().replace("Kotlin", "Java"))
}`,
        output: 'Learn Kotlin Today\nLEARN KOTLIN TODAY\nlearn kotlin today\ntrue\nLearn Java Today'
      },
      {
        title: 'Multiline Strings and Split',
        code: `fun main() {
  val receipt = """
    Store: Arinfotek
    Item: Kotlin Course
    Price: 499
  """.trimIndent()
  println(receipt)

  val csv = "anita,92,suresh,85"
  val parts = csv.split(",")
  println(parts)
}`,
        output: 'Store: Arinfotek\nItem: Kotlin Course\nPrice: 499\n[anita, 92, suresh, 85]'
      }
    ],
    keyPoints: [
      'Use $name and ${expression} inside strings - never manual concatenation.',
      'String methods return NEW strings; originals never change.',
      '""" triple quotes """ are for multiline text.'
    ],
    commonMistakes: [
      'Using $total++ instead of ${total++} - complex expressions need braces.',
      'Forgetting that trim() and uppercase() return new strings: s.trim() does nothing unless you use the result.'
    ],
    proTips: [
      'trimIndent() cleans multiline strings by removing common indentation.',
      'Always prefer templates over + concatenation - it is easier to read and to review.'
    ]
  },

  operators: {
    definition: 'Operators are symbols that perform calculations or comparisons: + - * / % for math, == != < > for comparisons, && || ! for logic.',
    whyUse: 'Every program computes something - a bill, a score, a discount, a comparison between two prices. Operators are how you express those rules. Kotlin also has range operators (..) and equality (== compares values, not memory addresses) that differ from other languages and catch real bugs.',
    whereUse: null,
    syntax: null,
    explanation: 'Arithmetic: +, -, *, /, % (remainder). Comparison: ==, !=, >, <, >=, <= (all return Boolean). Logical: && (and), || (or), ! (not). Kotlin has no ++ or -- operators; use += 1. In Kotlin == compares values (like Java\'s .equals), while === compares references. Ranges: 1..5 means 1 to 5 inclusive.',
    examples: [
      {
        title: 'Arithmetic and Comparison',
        code: `fun main() {
  val price = 499
  val qty = 3
  val total = price * qty
  println("Total: " + total)
  println("Remainder: " + (10 % 3))
  println("Too expensive? " + (total > 1000))
  println("Exactly 1000? " + (total == 1000))
}`,
        output: 'Total: 1497\nRemainder: 1\nToo expensive? true\nExactly 1000? false'
      },
      {
        title: 'Logical Operators',
        code: `fun main() {
  val hasCoupon = true
  val isMember = false
  val discount = hasCoupon && isMember
  val notify = hasCoupon || isMember
  println("Discount: " + discount)
  println("Notify: " + notify)
  println("Not member: " + !isMember)
}`,
        output: 'Discount: false\nNotify: true\nNot member: true'
      },
      {
        title: 'Ranges and Compound Assignment',
        code: `fun main() {
  var score = 50
  score += 10        // same as score = score + 10
  println(score)

  for (n in 1..5) print(n.toString() + " ")
  println()
  for (n in 10 downTo 1 step 2) print(n.toString() + " ")
  println()
  println(3 in 1..5)
}`,
        output: '60\n1 2 3 4 5 \n10 8 6 4 2 \ntrue'
      }
    ],
    keyPoints: [
      '== compares VALUES in Kotlin (not object memory like Java).',
      '% gives the remainder: 10 % 3 = 1.',
      'No ++ operator - use += 1.'
    ],
    commonMistakes: [
      'Writing x++ and getting a compile error - Kotlin removed it.',
      'Using = (assignment) when you meant == (comparison).'
    ],
    proTips: [
      'Ranges (1..10, downTo, step) make loops much cleaner.',
      'Use in to check membership: if (name in names).'
    ]
  },

  // ==================== BASIC LEVEL ====================
  conditionals: {
    definition: 'Conditionals let your program choose between paths: if runs code when a condition is true, and when is Kotlin\'s powerful switch statement.',
    whyUse: 'Real programs must react: if the user is logged in, show the dashboard; if the balance is low, warn; if the input is invalid, reject it. Kotlin\'s if is an expression (it returns a value), which eliminates the common bug of forgetting to assign a result. when replaces long if-else chains with readable branches.',
    whereUse: null,
    syntax: null,
    explanation: 'if (condition) { ... } else { ... }. Because if is an expression, you can write val grade = if (score >= 90) "A" else "B". when(value) { is Type -> ..., in range -> ..., else -> ... } checks many branches and can also return a value. When used as an expression with sealed classes or enums, else can be omitted because Kotlin checks all cases.',
    examples: [
      {
        title: 'if as Expression',
        code: `fun main() {
  val score = 85
  val result = if (score >= 50) "Pass" else "Fail"
  println(result)

  val grade = if (score >= 90) "A"
               else if (score >= 80) "B"
               else "C"
  println("Grade: " + grade)
}`,
        output: 'Pass\nGrade: B'
      },
      {
        title: 'when Statement',
        code: `fun main() {
  val day = 3
  when (day) {
    1 -> println("Monday")
    2 -> println("Tuesday")
    3 -> println("Wednesday")
    else -> println("Other day")
  }

  val code = "KTS"
  val lang = when (code) {
    "KTS" -> "Kotlin Script"
    "JAVA" -> "Java"
    else -> "Unknown"
  }
  println(lang)
}`,
        output: 'Wednesday\nKotlin Script'
      },
      {
        title: 'when with Ranges and is',
        code: `fun main() {
  val marks = 72
  val band = when {
    marks >= 90 -> "Distinction"
    marks in 75..89 -> "First class"
    marks in 60..74 -> "Second class"
    else -> "Fail"
  }
  println(band)

  val any: Any = "hello"
  if (any is String) println("Text of length " + any.length)  // smart cast
}`,
        output: 'Second class\nText of length 5'
      }
    ],
    keyPoints: [
      'if is an expression - it can return a value.',
      'when replaces long if-else chains and supports ranges and types.',
      'Smart cast: after `x is String`, use x as String automatically.'
    ],
    commonMistakes: [
      'Forgetting else in when used as an expression - Kotlin requires all paths to be covered.',
      'Using == for type checks - use `is` instead.'
    ],
    proTips: [
      'when with sealed classes and enums can drop else entirely - the compiler checks exhaustiveness.',
      'Prefer early returns: handle errors first, then the happy path.'
    ]
  },

  loops: {
    definition: 'Loops repeat code. Kotlin gives you for (over ranges and collections) and while (repeat until a condition breaks).',
    whyUse: 'Every real task repeats: process 100 orders, print every student\'s report, retry a network call. Loops express repetition without copying code. Kotlin\'s ranges (1..10, downTo, step) and forEach make loops shorter and less error-prone than in older languages.',
    whereUse: null,
    syntax: null,
    explanation: 'for (x in 1..5) repeats 5 times. while (condition) repeats while true. do-while runs at least once. Ranges: 1..5 (up), 5 downTo 1 (down), 1..10 step 2 (skip). Loop over lists with for (item in list) or with indices using list.indices. break exits the loop; continue skips to the next round.',
    examples: [
      {
        title: 'for with Ranges',
        code: `fun main() {
  for (i in 1..5) print(i.toString() + " ")
  println()
  for (i in 10 downTo 1 step 3) print(i.toString() + " ")
  println()
  for (c in 'a'..'e') print(c + " ")
  println()
}`,
        output: '1 2 3 4 5 \n10 7 4 1 \na b c d e '
      },
      {
        title: 'Looping Over Lists',
        code: `fun main() {
  val students = listOf("Anita", "Suresh", "Ravi")
  for (s in students) println("Hello, " + s)
  for (i in students.indices) println(students[i] + " is at index " + i)
}`,
        output: 'Hello, Anita\nHello, Suresh\nHello, Ravi\nAnita is at index 0\nSuresh is at index 1\nRavi is at index 2'
      },
      {
        title: 'while, do-while, break and continue',
        code: `fun main() {
  var n = 1
  while (n <= 5) {
    if (n == 4) break       // exit early
    if (n % 2 == 0) { n++; continue }  // skip even
    print(n.toString() + " ")
    n++
  }
  println()

  var tries = 0
  do {
    tries++
  } while (tries < 3)
  println("Tries: " + tries)
}`,
        output: '1 3 \nTries: 3'
      }
    ],
    keyPoints: [
      'for over ranges, lists, and any Iterable.',
      'while checks before each round; do-while runs at least once.',
      'break leaves the loop; continue skips to the next round.'
    ],
    commonMistakes: [
      'Infinite loops: forgetting to change the variable inside while.',
      'Off-by-one errors: 1..5 includes 5, but list indices stop at size - 1.'
    ],
    proTips: [
      'Prefer for over a collection when you do not need the index - cleaner and safer.',
      'Use indices only when you need positions; otherwise iterate values directly.'
    ]
  },

  functions: {
    definition: 'A function is a named block of code that performs one job. You create it with fun, and call it by name whenever you need that job done.',
    whyUse: 'Functions turn a giant wall of code into small, named, reusable pieces. In real teams, one person writes a function, another reuses it, and tests keep it correct. Kotlin adds default parameters, named arguments, and single-expression functions that make APIs pleasant to call - features many other languages lack.',
    whereUse: null,
    syntax: null,
    explanation: 'Basic form: fun name(param: Type): ReturnType { return value }. Kotlin infers the return type for single-expression functions. Parameters can have default values, so callers may skip them. Named arguments let you pass values by parameter name for clarity. Functions that return nothing omit the return type (Unit).',
    examples: [
      {
        title: 'Basic Function',
        code: `fun greet(name: String): String {
  return "Hello, $name!"
}

fun main() {
  println(greet("Anita"))
  println(greet("Kotlin"))
}`,
        output: 'Hello, Anita!\nHello, Kotlin!'
      },
      {
        title: 'Default and Named Arguments',
        code: `fun fee(amount: Double, rate: Double = 0.02, label: String = "Fee"): String {
  val value = amount * rate
  return "$label: " + "%.2f".format(value)
}

fun main() {
  println(fee(1000))                 // default rate and label
  println(fee(1000, rate = 0.05))    // named argument skips label
  println(fee(500, label = "GST"))   // order does not matter
}`,
        output: 'Fee: 20.00\nFee: 50.00\nGST: 10.00'
      },
      {
        title: 'Single-Expression and Local Functions',
        code: `fun square(n: Int) = n * n        // body-free form

fun main() {
  println(square(7))

  fun double(n: Int) = n * 2       // local function inside main
  println(double(21))
}`,
        output: '49\n42'
      }
    ],
    keyPoints: [
      'fun declares a function; parameters need types unless inferred.',
      'Default and named arguments reduce the number of overloads you write.',
      'fun name(...) = expression is a compact single-expression function.'
    ],
    commonMistakes: [
      'Missing return in a function that declares a return type.',
      'Positional arguments mixed with named ones in the wrong order (named must come after positional).'
    ],
    proTips: [
      'Give functions verb names: calculateTotal(), not total().',
      'One function, one job - if it needs a comment to explain two jobs, split it.'
    ]
  },

  null: {
    definition: 'Null means "no value". Kotlin\'s type system separates nullable (String?) from non-nullable (String) types, so null crashes are caught at compile time.',
    whyUse: 'The "null pointer exception" is the most common crash in Android apps worldwide. Kotlin\'s null safety eliminates it at the compiler level - code that would crash in Java simply will not compile in Kotlin. Companies adopted Kotlin largely for this reason: fewer crashes means fewer angry users and fewer 3 AM bug fixes.',
    whereUse: null,
    syntax: null,
    explanation: 'String cannot be null - period. String? can hold null. To use a nullable value: safe call name?.length returns null instead of crashing; elvis name ?: "default" provides a fallback; let name?.let { ... } runs code only when not null; !! asserts non-null (throws if null - use rarely).',
    examples: [
      {
        title: 'Safe Call and Elvis',
        code: `fun main() {
  val name: String? = "Anita"
  val missing: String? = null

  println(name?.length)            // 5
  println(missing?.length)         // null (no crash!)
  println(missing ?: "anonymous")  // anonymous
  println((name ?: "unknown").uppercase())
}`,
        output: '5\nnull\nanonymous\nANITA'
      },
      {
        title: 'let with Null Checks',
        code: `fun main() {
  val email: String? = "user@arinfotek.co.in"

  email?.let {
    println("Sending welcome mail to " + it.uppercase())
  }

  val none: String? = null
  none?.let {
    println("This will not print")
  }
  println("Program continues safely")
}`,
        output: 'Sending welcome mail to USER@ARINFOTEK.CO.IN\nProgram continues safely'
      },
      {
        title: 'when with Nullable Values',
        code: `fun main() {
  val input: String? = null

  when {
    input == null -> println("Please enter a value")
    input.isBlank() -> println("Value is empty")
    else -> println("Value: " + input.trim())
  }
}`,
        output: 'Please enter a value'
      }
    ],
    keyPoints: [
      'T means "never null"; T? means "may be null".',
      '?. safe call, ?: elvis fallback, ?.let for null-safe blocks.',
      '!! forces non-null - only when you are 100% sure.'
    ],
    commonMistakes: [
      'Using !! everywhere - it just moves the crash instead of preventing it.',
      'Forgetting that a nullable Int? cannot be used in math without handling null first.'
    ],
    proTips: [
      'Design functions so non-null types are parameters - push null checks to the edges.',
      '?: and ?. together handle 90% of null situations in one clean line.'
    ]
  },

  collections: {
    definition: 'Collections hold groups of values: List (ordered, can contain duplicates), Set (unique items), and Map (key-value pairs).',
    whyUse: 'Every app manages groups: an order has items, a class has students, a phone has contacts. Choosing the right collection prevents bugs like duplicate entries or slow lookups. Kotlin\'s collection operations (filter, map, reduce) let you transform data in one readable line instead of nested for loops.',
    whereUse: null,
    syntax: null,
    explanation: 'listOf() and setOf() create immutable collections; mutableListOf() and hashSetOf() create mutable ones. mapOf() creates key-value pairs. Powerful operations: filter keeps matching items, map transforms each item, reduce combines all items into one value, sorted orders them, first/last get edges, contains checks membership. These chains read like English.',
    examples: [
      {
        title: 'List and Set',
        code: `fun main() {
  val names = listOf("Anita", "Suresh", "Ravi", "Anita")
  println(names)
  println(names.size + " items, index 0 = " + names[0])

  val unique = setOf("Anita", "Suresh", "Anita")
  println(unique.size + " unique: " + unique)
}`,
        output: '[Anita, Suresh, Ravi, Anita]\n4 items, index 0 = Anita\n2 unique: [Anita, Suresh]'
      },
      {
        title: 'Map (Key-Value Pairs)',
        code: `fun main() {
  val marks = mapOf("Anita" to 92, "Suresh" to 85, "Ravi" to 78)
  println(marks["Anita"])
  println(marks.getOrDefault("New", 0))

  for ((student, score) in marks) {
    println(student + " -> " + score)
  }
}`,
        output: '92\n0\nAnita -> 92\nSuresh -> 85\nRavi -> 78'
      },
      {
        title: 'filter, map, reduce',
        code: `fun main() {
  val scores = listOf(92, 85, 78, 96, 60)

  val toppers = scores.filter { it >= 85 }
  println("85+: " + toppers)

  val curved = scores.map { it + 5 }
  println("Curved: " + curved)

  val total = scores.reduce { acc, s -> acc + s }
  println("Total: " + total)
  println("Average: " + total / scores.size)
}`,
        output: '85+: [92, 85, 96]\nCurved: [97, 90, 83, 101, 65]\nTotal: 411\nAverage: 82'
      }
    ],
    keyPoints: [
      'listOf = ordered, setOf = unique, mapOf = key-value.',
      'Immutable by default; use mutableListOf only when you must change contents.',
      'filter/map/reduce replace manual loops with readable chains.'
    ],
    commonMistakes: [
      'Calling indexOf on a huge list inside a loop (O(n^2)) - use a Map or Set for lookups.',
      'Using mutable collections when the data never changes after creation.'
    ],
    proTips: [
      'Chain operations: list.filter { }.map { }.sortedBy { } reads top to bottom.',
      'Prefer immutable collections - they make multi-threaded code safer.'
    ]
  },

  lambdas: {
    definition: 'A lambda is an anonymous function written inline: a block of code you can store in a variable or pass to another function.',
    whyUse: 'Lambdas power modern Kotlin: collection operations (filter { }, map { }), click handlers in Android, and coroutine builders all take lambdas. Learning to read and write them unlocks the most idiomatic 20% of Kotlin that makes code dramatically shorter.',
    whereUse: null,
    syntax: null,
    explanation: 'Full form: { a: Int -> a * 2 }. Parameters go before ->, the last expression is the return value. `it` is the implicit name for a single parameter. Trailing lambda syntax: list.filter { ... } puts the lambda outside parentheses. Higher-order functions are functions that accept or return other functions.',
    examples: [
      {
        title: 'Lambda Basics',
        code: `fun main() {
  val double = { n: Int -> n * 2 }
  val sayHi = { println("Hi there!") }

  println(double(21))
  sayHi()
}`,
        output: '42\nHi there!'
      },
      {
        title: 'Trailing Lambdas with Collections',
        code: `fun main() {
  val numbers = listOf(1, 2, 3, 4, 5, 6)

  val evens = numbers.filter { it % 2 == 0 }
  println("Evens: " + evens)

  val squares = numbers.map { it * it }
  println("Squares: " + squares)
}`,
        output: 'Evens: [2, 4, 6]\nSquares: [1, 4, 9, 16, 25, 36]'
      },
      {
        title: 'Higher-Order Functions',
        code: `fun operate(a: Int, b: Int, action: (Int, Int) -> Int): Int {
  return action(a, b)
}

fun main() {
  println(operate(10, 4) { x, y -> x + y })
  println(operate(10, 4) { x, y -> x * y })
}`,
        output: '14\n40'
      }
    ],
    keyPoints: [
      'Last expression of a lambda is its return value.',
      'it is shorthand for the single parameter.',
      'Trailing lambda {} goes after the closing parenthesis.'
    ],
    commonMistakes: [
      'Writing multiple statements without realizing only the last one is returned.',
      'Forgetting parameter types when the compiler cannot infer them.'
    ],
    proTips: [
      'Short lambdas should be one line - if longer, make a named function instead.',
      'Read { it >= 85 } as "keep items where it is 85 or more" - lambdas read like sentences.'
    ]
  },

  conversion: {
    definition: 'Type conversion changes a value from one type to another: text to a number, number to text, Int to Double.',
    whyUse: 'User input always arrives as text, but math needs numbers - every form, API, and file parser converts types constantly. Kotlin requires explicit conversion (unlike Java), which prevents silent rounding bugs: you must state clearly when you intend to lose precision.',
    whereUse: null,
    syntax: null,
    explanation: 'Kotlin has no automatic widening: Int + Double is an error until you convert. Use toInt(), toDouble(), toFloat(), toLong(), toChar(), toString(). Conversion functions also parse strings: "42".toInt() turns text into a number and throws an exception if the text is not a number (use toIntOrNull() for a safe null result).',
    examples: [
      {
        title: 'Number Conversions',
        code: `fun main() {
  val i = 42
  val d = i.toDouble()   // 42.0
  val s = i.toString()   // "42"
  val l = i.toLong()
  val c = '7'.digitToInt()  // 7

  println(i + " -> " + d + " -> " + s)
  println("Long: " + l + ", Char to Int: " + c)
  println("Average: " + (7 / 2) + " vs " + (7.toDouble() / 2))
}`,
        output: '42 -> 42.0 -> 42\nLong: 42, Char to Int: 7\nAverage: 3 vs 3.5'
      },
      {
        title: 'Parsing Strings to Numbers',
        code: `fun main() {
  val input = "95"
  val marks = input.toInt()
  println(marks + 5)

  val bad = "abc".toIntOrNull()
  println(bad)                  // null, no crash
  println(("abc".toIntOrNull() ?: 0) + 1)  // safe default then math
}`,
        output: '100\nnull\n1'
      },
      {
        title: 'Common Everyday Conversions',
        code: `fun main() {
  val price = 499.5
  println("Rs. " + price.toInt())          // drops decimal
  println(price.toString() + " rupees")

  val letter = 'A'
  println(letter.digitToIntOrNull())        // null, A is not a digit
  println("5".toBoolean())                  // false: only "true" is true
}`,
        output: 'Rs. 499\n499.5 rupees\nnull\nfalse'
      }
    ],
    keyPoints: [
      'No implicit conversion - call toDouble(), toString(), etc. explicitly.',
      '"95".toInt() parses; "abc".toIntOrNull() returns null safely.',
      'Int / Int truncates: convert to Double first when you need decimals.'
    ],
    commonMistakes: [
      'Expecting Int + Double to work - always convert first.',
      'Using toInt() on untrusted input - use toIntOrNull() or try/catch.'
    ],
    proTips: [
      'Default pattern: ("0".toIntOrNull() ?: 0) handles bad input in one line.',
      'Losing decimals (toDouble().toInt()) is intentional truncation - double-check it is what you want.'
    ]
  },

  // ==================== MEDIUM LEVEL ====================
  classes: {
    definition: 'A class is a blueprint for objects: it bundles data (properties) and behavior (functions) into one unit, like Customer or Invoice.',
    whyUse: 'Real software models real things: an e-commerce app has Product, Cart, and Order classes instead of loose variables everywhere. Classes group related data so it cannot get out of sync, make code testable, and are the foundation of every large Kotlin codebase - from Android apps to Spring servers.',
    whereUse: null,
    syntax: null,
    explanation: 'class Person(val name: String, var age: Int) - the primary constructor lives in the header. Properties declared there automatically get getters. init blocks run at construction. Secondary constructors use the constructor keyword. A companion object holds things that belong to the class itself (like static methods in Java). object declarations are singletons.',
    examples: [
      {
        title: 'Basic Class',
        code: `class Student(val name: String, var marks: Int) {
  fun report(): String = "$name scored $marks"
}

fun main() {
  val s = Student("Anita", 92)
  println(s.report())
  s.marks = 95
  println("Updated: " + s.report())
}`,
        output: 'Anita scored 92\nUpdated: Anita scored 95'
      },
      {
        title: 'init Blocks and Defaults',
        code: `class Course(
  val title: String,
  val price: Double = 499.0
) {
  init {
    println("Course created: $title")
  }
  fun info() = "$title costs Rs. $price"
}

fun main() {
  val c = Course("Kotlin Mastery")
  println(c.info())
  val p = Course("Advanced Kotlin", 999.0)
  println(p.info())
}`,
        output: 'Course created: Kotlin Mastery\nKotlin Mastery costs Rs. 499.0\nCourse created: Advanced Kotlin\nAdvanced Kotlin costs Rs. 999.0'
      },
      {
        title: 'Companion Object (Static-like)',
        code: `class Counter private constructor() {
  companion object {
    var total = 0
    fun create(): Counter {
      total++
      return Counter()
    }
  }
}

fun main() {
  Counter.create()
  Counter.create()
  println("Objects made: " + Counter.total)
}`,
        output: 'Objects made: 2'
      }
    ],
    keyPoints: [
      'Primary constructor goes in the class header: class C(val x: Int).',
      'Properties in the header automatically get getters (and setters for var).',
      'companion object replaces Java\'s static members.'
    ],
    commonMistakes: [
      'Writing getter/setter boilerplate - Kotlin generates property accessors for you.',
      'Forgetting new is not needed: you write Student(...), not new Student(...).'
    ],
    proTips: [
      'Prefer val properties - immutable objects are thread-safe by default.',
      'Keep classes small: if a class does three unrelated jobs, split it.'
    ]
  },

  data: {
    definition: 'A data class is a class made for holding data. Kotlin automatically generates equals, hashCode, toString, and copy for you.',
    whyUse: 'Most classes in an app are data carriers: API responses, database rows, UI models. Writing equals and toString by hand for each one is tedious and error-prone (a tiny typo breaks list comparisons). data class eliminates that boilerplate in one word - it is one of the most loved Kotlin features.',
    whereUse: null,
    syntax: null,
    explanation: 'data class User(val id: Int, val name: String). Kotlin generates: equals()/hashCode() comparing all properties, toString() like "User(id=1, name=Anita)", copy() for making modified duplicates, and component1()/component2() for destructuring. Only the constructor properties (val/var in the header) participate.',
    examples: [
      {
        title: 'data class Auto-Generated Members',
        code: `data class User(val id: Int, val name: String)

fun main() {
  val a = User(1, "Anita")
  val b = User(1, "Anita")
  println(a)                      // readable toString
  println(a == b)                 // true - value equality
  println(a === b)                // false - different objects
}`,
        output: 'User(id=1, name=Anita)\ntrue\nfalse'
      },
      {
        title: 'copy() for Safe Modifications',
        code: `data class Config(val theme: String, val fontSize: Int, val dark: Boolean)

fun main() {
  val original = Config("light", 16, false)
  val darkCopy = original.copy(dark = true)
  println(original)
  println(darkCopy)
  println("Original unchanged: " + original.dark)
}`,
        output: 'Config(theme=light, fontSize=16, dark=false)\nConfig(theme=light, fontSize=16, dark=true)\nOriginal unchanged: false'
      },
      {
        title: 'Destructuring',
        code: `data class Point(val x: Int, val y: Int)

fun main() {
  val p = Point(3, 7)
  val (x, y) = p
  println("x = $x, y = $y")
  println("First field: " + p.component1())
}`,
        output: 'x = 3, y = 7\nFirst field: 3'
      }
    ],
    keyPoints: [
      'data class gives you equals, hashCode, toString, copy for free.',
      '== compares values; === compares object identity.',
      'copy() creates a modified duplicate without mutating the original.'
    ],
    commonMistakes: [
      'Using data class for behavior-heavy classes - it is meant for data carriers.',
      'Expecting non-constructor properties to appear in equals/toString.'
    ],
    proTips: [
      'API and database models should almost always be data classes.',
      'copy() with named arguments expresses "same but one change" perfectly.'
    ]
  },

  inheritance: {
    definition: 'Inheritance lets one class reuse and extend another. Interfaces define contracts that classes promise to fulfill.',
    whyUse: 'Large systems share behavior: every payment method (Card, UPI, Wallet) shares "process payment" but does it differently. Inheritance and interfaces let you write shared code once and swap implementations freely - the core idea behind Android UI widgets, Spring services, and almost every design pattern.',
    whereUse: null,
    syntax: null,
    explanation: 'Classes are final by default - mark them open to allow inheritance. Override functions with the override keyword. Interfaces hold signatures (and can have default implementations); a class uses : Interface to implement them. Abstract classes cannot be instantiated and can hold state. Kotlin supports single class inheritance but multiple interface implementation.',
    examples: [
      {
        title: 'open, override, and super',
        code: `open class Animal(val name: String) {
  open fun sound() = "..."
  fun describe() = "$name says " + sound()
}

class Dog(name: String) : Animal(name) {
  override fun sound() = "Woof"
}

fun main() {
  println(Dog("Tommy").describe())
  // class Pet : Animal("x")   // ERROR if Animal is not open
}`,
        output: 'Tommy says Woof'
      },
      {
        title: 'Interfaces with Default Methods',
        code: `interface Payable {
  fun pay(amount: Double): String
  fun receipt(amount: Double) = "Paid Rs. $amount"   // default body
}

class CardPayment : Payable {
  override fun pay(amount: Double) = "Card charged: Rs. $amount"
}

class UpiPayment : Payable {
  override fun pay(amount: Double) = "UPI transferred: Rs. $amount"
}

fun main() {
  val methods: List<Payable> = listOf(CardPayment(), UpiPayment())
  for (m in methods) {
    println(m.pay(499))
    println(m.receipt(499))
  }
}`,
        output: 'Card charged: Rs. 499.0\nPaid Rs. 499.0\nUPI transferred: Rs. 499.0\nPaid Rs. 499.0'
      },
      {
        title: 'Abstract Class',
        code: `abstract class Shape(val name: String) {
  abstract fun area(): Double
  fun info() = "$name with area " + "%.2f".format(area())
}

class Circle(val r: Double) : Shape("Circle") {
  override fun area() = 3.14159 * r * r
}

fun main() {
  println(Circle(2.0).info())
  // Shape("x")   // ERROR: cannot instantiate abstract class
}`,
        output: 'Circle with area 12.57'
      }
    ],
    keyPoints: [
      'Classes are final by default; add open to allow subclassing.',
      'override is mandatory for overriding functions.',
      'One class parent, many interfaces - implement as many as you need.'
    ],
    commonMistakes: [
      'Forgetting open - the most common inheritance error in Kotlin.',
      'Deep inheritance chains (5+ levels) - prefer interfaces and composition.'
    ],
    proTips: [
      'Favor interfaces for contracts and composition over deep hierarchies.',
      'Program to the interface: val p: Payable = getPaymentMethod().'
    ]
  },

  sealed: {
    definition: 'Sealed classes define a fixed set of subtypes (a closed hierarchy). Enums define a fixed set of values. Both work perfectly with when.',
    whyUse: 'Many things in real apps have a known set of states: an order is Paid, Shipped, Delivered, or Cancelled - nothing else. Sealed classes model this safely: the compiler checks that your when handles every state, so adding a new state immediately finds every place you forgot to handle it. This pattern drives Android\'s StateFlow and most Kotlin API designs.',
    whereUse: null,
    syntax: null,
    explanation: 'sealed class Result { class Success(...); class Error(...) }. All subclasses must be in the same package/module (same file since Kotlin 1.5). Used as a when expression, no else branch is needed because Kotlin knows all possibilities. Enums: enum class Color { RED, GREEN, BLUE } with optional properties and methods per constant.',
    examples: [
      {
        title: 'Sealed Class with Exhaustive when',
        code: `sealed class Outcome {
  data class Success(val data: String) : Outcome()
  data class Failure(val reason: String) : Outcome()
}

fun handle(o: Outcome): String = when (o) {
  is Outcome.Success -> "Got: " + o.data
  is Outcome.Failure -> "Problem: " + o.reason
}

fun main() {
  println(handle(Outcome.Success("marks=92")))
  println(handle(Outcome.Failure("timeout")))
}`,
        output: 'Got: marks=92\nProblem: timeout'
      },
      {
        title: 'Modeling Real States',
        code: `sealed class OrderState {
  object Placed : OrderState()
  data class Paid(val txn: String) : OrderState()
  object Cancelled : OrderState()
}

fun message(s: OrderState) = when (s) {
  OrderState.Placed -> "Waiting for payment"
  is OrderState.Paid -> "Paid via " + s.txn
  OrderState.Cancelled -> "Order cancelled"
}

fun main() {
  println(message(OrderState.Placed))
  println(message(OrderState.Paid("UPI123")))
}`,
        output: 'Waiting for payment\nPaid via UPI123'
      },
      {
        title: 'Enums with Properties',
        code: `enum class Level(val weight: Int) {
  LOW(1),
  MEDIUM(2),
  HIGH(3)
}

fun main() {
  for (l in Level.entries) {
    println(l.name + " = " + l.weight)
  }
  println("Compare: " + (Level.HIGH.weight > Level.LOW.weight))
  println("Value of: " + Level.valueOf("MEDIUM"))
}`,
        output: 'LOW = 1\nMEDIUM = 2\nHIGH = 3\nCompare: true\nValue of: MEDIUM'
      }
    ],
    keyPoints: [
      'Sealed = closed set of types; enum = closed set of values.',
      'when over sealed/enum needs no else - the compiler proves coverage.',
      'Use data class / object members inside sealed hierarchies.'
    ],
    commonMistakes: [
      'Adding else to when over sealed classes - it hides future missing cases.',
      'Using sealed classes where a simple enum of names would do.'
    ],
    proTips: [
      'API responses and UI states are perfect sealed class candidates.',
      'When you add a new subtype, let the compiler find every when that must be updated.'
    ]
  },

  extensions: {
    definition: 'An extension function adds a function to an existing class without modifying or inheriting from it: fun String.addExclaim() = this + "!"',
    whyUse: 'You often wish a library class had one more method. Instead of wrapping it in utility classes (StringUtils, FileHelpers), Kotlin lets you add the method directly: "text".capWords(). Code reads better, helpers stop sprawling, and popular extension libraries (like Android KTX) are a whole industry built on this feature.',
    whereUse: null,
    syntax: null,
    explanation: 'Declared as fun Type.name(args): ReturnType { ... }. Inside, this refers to the receiver. Extension properties work too: val String.wordCount get() = split(" ").size. They are not virtual - dispatch is static based on the declared type at compile time. They cannot access private members of the receiver class.',
    examples: [
      {
        title: 'Your First Extension',
        code: `fun String.addExclaim(): String = this + "!"

fun String.wrap(bracket: String): String {
  val close = if (bracket == "(") ")" else "]"
  return bracket + this + close
}

fun main() {
  println("Great lesson".addExclaim())
  println("note".wrap("("))
  println("items".wrap("["))
}`,
        output: 'Great lesson!\n(note)\n[items]'
      },
      {
        title: 'Extension Properties',
        code: `val String.wordCount: Int
  get() = trim().split(Regex("\\\\s+")).size

val Int.isEven: Boolean
  get() = this % 2 == 0

fun main() {
  println("Kotlin makes code concise".wordCount)
  println("7 is even: " + 7.isEven)
  println("8 is even: " + 8.isEven)
}`,
        output: '4\n7 is even: false\n8 is even: true'
      },
      {
        title: 'Extending Standard Types',
        code: `fun List<Int>.averageRounded(): Int {
  if (isEmpty()) return 0
  return sum() / size
}

fun main() {
  val scores = listOf(92, 85, 78, 96)
  println("Average: " + scores.averageRounded())
  println("Max: " + scores.max())
}`,
        output: 'Average: 87\nMax: 96'
      }
    ],
    keyPoints: [
      'Extensions add methods without touching the original class.',
      'this inside the extension is the receiver object.',
      'Dispatch is static - the function is chosen at compile time.'
    ],
    commonMistakes: [
      'Naming a member and an extension the same - the member wins inside the class.',
      'Expecting extensions to access private members of the receiver - they cannot.'
    ],
    proTips: [
      'Create a small file like StringExtensions.kt for all your text helpers.',
      'If you catch yourself writing ClassNameUtil.foo(x), make it an extension instead.'
    ]
  },

  scope: {
    definition: 'Scope functions let you execute a block of code on an object in a shorter form: let, run, with, apply, and also.',
    whyUse: 'You see them in every professional Kotlin codebase, especially Android: configuration objects, null-safe blocks, and builder patterns all use them. Knowing which of the five to pick is a key skill that separates readable Kotlin from confusing Kotlin - and interviewers love asking exactly this.',
    whereUse: null,
    syntax: null,
    explanation: 'let: run on a nullable object with it as parameter (null safety + transformations). run: access members of an object directly with this, often after construction. with(obj): same as run but without a lambda extension - great for grouping calls. apply: configure an object (this, returns the object itself). also: side effects like logging (it, returns the object itself).',
    examples: [
      {
        title: 'let - Null Safety',
        code: `fun main() {
  val name: String? = "Anita"

  name?.let {
    println("Found name: " + it.uppercase())
  }

  val none: String? = null
  none?.let { println("never runs") }
  println("done")
}`,
        output: 'Found name: ANITA\ndone'
      },
      {
        title: 'apply - Configure an Object',
        code: `class Turtle {
  var x = 0
  var y = 0
  var speed = 1
}

fun main() {
  val t = Turtle().apply {
    x = 10
    y = 20
    speed = 5
  }
  println("at (\${t.x}, \${t.y}) speed \${t.speed}")
}`,
        output: 'at (10, 20) speed 5'
      },
      {
        title: 'run, with, also in One Place',
        code: `data class User(val name: String, var score: Int)

fun main() {
  val u = User("Anita", 0)

  // also - side effects, keeps building
  u.also { println("new user: " + it.name) }.score = 92

  // run - compute on the object
  val report = u.run { "$name scored $score" }
  println(report)

  // with - group calls without extending
  val text = with(u) { "Name=$name, Score=$score" }
  println(text)
}`,
        output: 'new user: Anita\nAnita scored 92\nName=Anita, Score=92'
      }
    ],
    keyPoints: [
      'let -> it, useful for null checks (obj?.let).',
      'apply -> this, returns the object: use for configuration.',
      'also -> it, returns the object: use for side effects (logging).',
      'run / with -> this, use for computing a result from the object.'
    ],
    commonMistakes: [
      'Mixing them randomly - it should answer: transform, configure, or compute?',
      'Nested scope functions more than two deep - extract a named function instead.'
    ],
    proTips: [
      'Default choices: ?.let for nulls, apply for building, also for logging.',
      'Read the lambda parameter name (it vs this) to know which function you are in.'
    ]
  },

  generics: {
    definition: 'Generics let you write functions and classes that work with any type while keeping type safety: fun <T> first(items: List<T>): T',
    whyUse: 'Without generics you would write duplicate code for List<Int>, List<String>, and so on - or use unsafe Any and discover type errors at runtime. Collections, API layers, and repositories in real projects are generic. Understanding generics is essential for reading library code and designing reusable APIs.',
    whereUse: null,
    syntax: null,
    explanation: 'Declare type parameters in angle brackets: <T>. A generic function: fun <T> swap(a: T, b: T): Pair<T, T>. A generic class: class Box<T>(var value: T). Variance: out T (covariant - produce only, like a source), in T (contravariant - consume only, like a consumer). Type bounds restrict types: fun <T : Number> sum(...).',
    examples: [
      {
        title: 'Generic Function and Class',
        code: `fun <T> firstOf(items: List<T>): T? = items.firstOrNull()

class Box<T>(var content: T) {
  fun peek(): T = content
}

fun main() {
  println(firstOf(listOf(10, 20, 30)))
  println(firstOf(listOf("a", "b")))

  val box = Box("Kotlin")
  println(box.peek())
  box.content = "Generics"
  println(box.peek())
}`,
        output: '10\na\nKotlin\nGenerics'
      },
      {
        title: 'Type Bounds (<T : Number>)',
        code: `fun <T : Number> total(values: List<T>): Double {
  var sum = 0.0
  for (v in values) sum += v.toDouble()
  return sum
}

fun main() {
  println(total(listOf(1, 2, 3)))
  println(total(listOf(1.5, 2.5)))
  // total(listOf("a"))   // ERROR: String is not a Number
}`,
        output: '6.0\n4.0'
      },
      {
        title: 'Variance: out (Produce) and in (Consume)',
        code: `interface Source<out T> {
  fun next(): T
}
interface Sink<in T> {
  fun put(value: T)
}

fun dump(source: Source<String>) {
  println("Got: " + source.next())
}

fun main() {
  // A Source<Int> is NOT a Source<Any>, but Source<String> can be
  // used where Source<Any> is expected (out = readable/produce only)
  println("Generics keep casts out of your code")
}`,
        output: 'Generics keep casts out of your code'
      }
    ],
    keyPoints: [
      '<T> declares a type parameter - the caller decides the actual type.',
      'Generics give compile-time safety instead of ClassCastException later.',
      'out = produce/read-only positions; in = consume/write-only positions.'
    ],
    commonMistakes: [
      'Using @Suppress or unchecked casts instead of properly typed generics.',
      'Overcomplicating with variance when a simple <T> would do - start simple.'
    ],
    proTips: [
      'Read library code like List<T> - generics are just placeholders for types.',
      'Most code only needs plain <T>; learn out/in when you build APIs for others.'
    ]
  },

  // ==================== ADVANCED LEVEL ====================
  coroutines: {
    definition: 'Coroutines are lightweight threads for asynchronous work: they let you write sequential-looking code that does not block while waiting for slow operations.',
    whyUse: 'Android apps must stay smooth while downloading images, and servers must handle thousands of requests on few threads. Coroutines let one thread wait for a network call without freezing anything else. Google made them the recommended concurrency model for Kotlin, and they are far simpler than Java threads or callbacks.',
    whereUse: null,
    syntax: null,
    explanation: 'suspend marks a function that can pause and resume. launch starts a coroutine and continues immediately. async starts one that returns a result you await. delay() is a suspending sleep that does not block the thread. runBlocking bridges normal code and coroutines. Structured concurrency: a coroutine belongs to a scope and cancels with it.',
    examples: [
      {
        title: 'First Coroutine',
        code: `import kotlinx.coroutines.*

fun main() = runBlocking {
  println("Start")
  launch {
    delay(500)
    println("Work done in background")
  }
  println("Main continues immediately")
  delay(1000)
  println("End")
}`,
        output: 'Start\nMain continues immediately\nWork done in background\nEnd'
      },
      {
        title: 'async and await',
        code: `import kotlinx.coroutines.*

suspend fun fetchName(): String {
  delay(300)
  return "Anita"
}

suspend fun fetchMarks(): Int {
  delay(500)
  return 92
}

fun main() = runBlocking {
  val start = System.currentTimeMillis()
  val nameDeferred = async { fetchName() }
  val marksDeferred = async { fetchMarks() }
  println("\${nameDeferred.await()} scored \${marksDeferred.await()}")
  println("Took " + (System.currentTimeMillis() - start) + "ms (parallel!)")
}`,
        output: 'Anita scored 92\nTook ~500ms (parallel!)'
      },
      {
        title: 'sequential vs parallel',
        code: `import kotlinx.coroutines.*

fun main() = runBlocking {
  val sequential = measure { repeat(2) { delay(300) } }
  val parallel = measure {
    val a = async { delay(300) }
    val b = async { delay(300) }
    a.await(); b.await()
  }
  println("Sequential: " + sequential + "ms")
  println("Parallel:   " + parallel + "ms")
}

suspend fun measure(block: suspend () -> Unit): Long {
  val start = System.currentTimeMillis()
  block()
  return System.currentTimeMillis() - start
}`,
        output: 'Sequential: ~600ms\nParallel:   ~300ms'
      }
    ],
    keyPoints: [
      'suspend functions can pause without blocking a thread.',
      'launch = fire and forget; async + await = returns a value.',
      'delay() suspends; Thread.sleep() blocks - do not mix them.'
    ],
    commonMistakes: [
      'Calling suspend functions outside a coroutine or another suspend function.',
      'Using GlobalScope everywhere - it breaks structured concurrency and leaks coroutines.'
    ],
    proTips: [
      'Run coroutine examples on play.kotlinlang.org (supports kotlinx.coroutines).',
      'Think sequential, run parallel: fetch multiple API calls with async when independent.'
    ]
  },

  exceptions: {
    definition: 'Exceptions handle errors at runtime. Kotlin has unchecked exceptions - no throws declarations required - and all exceptions derive from Throwable.',
    whyUse: 'Programs face failures constantly: network down, file missing, bad input. Exceptions are how you recover instead of crashing. Kotlin\'s try-as-expression lets you return a fallback value directly from the error handler, which produces much cleaner recovery code than Java\'s pattern.',
    whereUse: null,
    syntax: null,
    explanation: 'try { risky() } catch (e: Exception) { fallback() } finally { always runs }. try can be an expression: val n = try { text.toInt() } catch (e: NumberFormatException) { 0 }. Create custom exceptions by extending Exception. throw raises an exception. Unlike Java, Kotlin methods do not declare throws - the type system does not force catch blocks.',
    examples: [
      {
        title: 'try, catch, finally',
        code: `fun main() {
  try {
    val text = "abc"
    val n = text.toInt()
    println("Number: " + n)
  } catch (e: NumberFormatException) {
    println("Not a number: " + e.message)
  } finally {
    println("This always runs")
  }
}`,
        output: 'Not a number: For input string: "abc"\nThis always runs'
      },
      {
        title: 'try as an Expression',
        code: `fun toNumber(text: String): Int {
  return try {
    text.toInt()
  } catch (e: NumberFormatException) {
    0
  }
}

fun main() {
  println(toNumber("42"))
  println(toNumber("oops"))
  println(toNumber("42") + toNumber("oops"))
}`,
        output: '42\n0\n42'
      },
      {
        title: 'Custom Exceptions',
        code: `class InsufficientBalance(val needed: Double) :
  Exception("Need Rs. $needed more")

fun withdraw(balance: Double, amount: Double): Double {
  if (amount > balance) throw InsufficientBalance(amount - balance)
  return balance - amount
}

fun main() {
  try {
    println("New balance: " + withdraw(1000.0, 400.0))
    println("New balance: " + withdraw(600.0, 1000.0))
  } catch (e: InsufficientBalance) {
    println("Blocked: " + e.message)
  }
}`,
        output: 'New balance: 600.0\nBlocked: Need Rs. 400.0 more'
      }
    ],
    keyPoints: [
      'try/catch/finally with try usable as an expression.',
      'All exceptions are unchecked in Kotlin - no throws clauses.',
      'throw is also an expression and custom exceptions are just classes.'
    ],
    commonMistakes: [
      'Catching Exception too broadly and hiding real bugs.',
      'Using exceptions for normal control flow (use if/when instead).'
    ],
    proTips: [
      'Catch specific exceptions: NumberFormatException, not Exception.',
      'The idiomatic parse: val n = try { s.toInt() } catch (e: NumberFormatException) { 0 }.'
    ]
  },

  serialization: {
    definition: 'Serialization converts objects to JSON (or other formats) and back, so your Kotlin data can travel over a network or be stored in a file.',
    whyUse: 'Every modern app talks JSON: your phone fetches Instagram posts as JSON, sends login data as JSON, and saves drafts as JSON. Kotlin data classes plus serialization are how apps on both ends of an API exchange structured data. It is the backbone of every REST API you will ever build.',
    whereUse: null,
    syntax: null,
    explanation: 'JSON is text made of objects {}, arrays [], strings "", numbers, true/false, and null. In production, kotlinx.serialization (with @Serializable) generates the conversion code for you. The fundamentals: knowing exactly how an object maps to JSON text, and how to read values back - which is what these lessons demonstrate with pure Kotlin before you add the library.',
    examples: [
      {
        title: 'Object to JSON (Manual)',
        code: `data class User(val name: String, val age: Int)

fun toJson(u: User): String {
  return "{\\"name\\": \\"" + u.name + "\\", \\"age\\": " + u.age + "}"
}

fun main() {
  println(toJson(User("Anita", 25)))
}`,
        output: '{"name": "Anita", "age": 25}'
      },
      {
        title: 'Read Fields from JSON Text',
        code: `fun main() {
  val json = "{\\"title\\": \\"Kotlin Course\\", \\"price\\": 499}"

  val title = json.substringAfter("title\\": \\"").substringBefore("\\"")
  val price = json.substringAfter("price\\": ").substringBefore("}")

  println("Title: " + title)
  println("Price: " + price.toDouble().toInt())
}`,
        output: 'Title: Kotlin Course\nPrice: 499'
      },
      {
        title: 'The Real Way: kotlinx.serialization',
        code: `// Add plugin: org.jetbrains.kotlin.plugin.serialization
import kotlinx.serialization.*

@Serializable
data class Product(val id: Int, val name: String, val price: Double)

fun main() {
  val json = Json.encodeToString(Product(1, "Keyboard", 1499.0))
  println(json)
  val back = Json.decodeFromString<Product>(json)
  println(back.name + " costs " + back.price)
}`,
        output: '{"id":1,"name":"Keyboard","price":1499.0}\nKeyboard costs 1499.0'
      }
    ],
    keyPoints: [
      'JSON is the universal data format of web and mobile APIs.',
      'data class + @Serializable + Json.encodeToString gives conversion in one line.',
      'decodeFromString turns JSON text back into a typed object.'
    ],
    commonMistakes: [
      'Building JSON with string + and forgetting escapes (\\") - use the library for anything real.',
      'Mismatching JSON field names and data class property names - they must match exactly.'
    ],
    proTips: [
      'Kotlinx.serialization also handles lists: List<Product> in one call.',
      'Save API responses to a file first while debugging, then decode them offline.'
    ]
  },

  delegation: {
    definition: 'Delegation means one object hands its work to another. Kotlin supports class delegation (by) and lazy initialization (by lazy) as built-in language features.',
    whyUse: 'Two everyday needs: implementing an interface by reusing an existing implementation (instead of copy-paste), and expensive objects (database connections, big configurations) that should be created only when first needed. Both appear in nearly every production Kotlin/Android codebase, often in a single line: private val db by lazy { ... }.',
    whereUse: null,
    syntax: null,
    explanation: 'Class delegation: class LoggingRepo(base: Repo) : Repo by base - the compiler generates methods that forward to base. by lazy { ... } creates the value on first access, then keeps it - thread-safe by default. by observable fires a callback when the value changes. These are Kotlin\'s built-in property delegates.',
    examples: [
      {
        title: 'Class Delegation (by)',
        code: `interface Printer {
  fun print(msg: String)
}

class ConsolePrinter : Printer {
  override fun print(msg: String) = println("[console] " + msg)
}

class VerbosePrinter(val base: Printer) : Printer by base {
  fun printTwice(msg: String) {
    base.print(msg)
    base.print(msg)
  }
}

fun main() {
  VerbosePrinter(ConsolePrinter()).printTwice("Hi")
}`,
        output: '[console] Hi\n[console] Hi'
      },
      {
        title: 'by lazy - Create Only When Needed',
        code: `class HeavyService {
  val data: String by lazy {
    println("(expensive init running)")
    "loaded " + "x".repeat(5)
  }
}

fun main() {
  val svc = HeavyService()
  println("Service created, data not yet loaded")
  println("First use: " + svc.data)
  println("Second use: " + svc.data)   // init does NOT run again
}`,
        output: 'Service created, data not yet loaded\n(expensive init running)\nFirst use: loaded xxxxx\nSecond use: loaded xxxxx'
      },
      {
        title: 'by observable',
        code: `import kotlin.properties.Delegates

fun main() {
  var score: Int by Delegates.observable(0) { _, old, new ->
    println("score changed: $old -> $new")
  }
  score = 92
  score = 95
  println("final: " + score)
}`,
        output: 'score changed: 0 -> 92\nscore changed: 92 -> 95\nfinal: 95'
      }
    ],
    keyPoints: [
      'Class delegation: implement an interface by forwarding to an existing object.',
      'by lazy runs the initializer once, on first access, thread-safely.',
      'by observable notifies you when a property value changes.'
    ],
    commonMistakes: [
      'Forgetting that by lazy needs the lambda block: by lazy { build() }.',
      'Overusing delegation when simple inheritance would be clearer.'
    ],
    proTips: [
      'by lazy is the standard way to create Android context-dependent singletons.',
      'Interface delegation keeps wrapper classes down to a few lines.'
    ]
  },

  android: {
    definition: 'Android development builds apps for phones and tablets. Kotlin is its primary language, with Views (XML) and Jetpack Compose (modern UI) as the two UI toolkits.',
    whyUse: 'There are billions of Android devices worldwide - from startups to banks, everyone ships Android apps. Google made Kotlin the preferred language in 2019 and built Jetpack Compose around it. A Kotlin developer who knows Android can ship their own apps to the Play Store and is hired quickly worldwide.',
    whereUse: null,
    syntax: null,
    explanation: 'An Android app is a set of components: Activity (one screen), Fragment (part of a screen), Intent (navigation message), and ViewModel (holds UI data across screen changes). Traditional UI: XML layout + findViewById/ViewBinding. Modern UI: Jetpack Compose - you describe the UI in Kotlin functions and state drives updates. Android Studio is the standard IDE.',
    examples: [
      {
        title: 'A Simple Activity',
        code: `// File: MainActivity.kt (in an Android Studio project)
import android.os.Bundle
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    val label = findViewById<TextView>(R.id.helloLabel)
    label.text = "Hello from Kotlin!"
  }
}`,
        output: 'App shows: Hello from Kotlin!'
      },
      {
        title: 'Jetpack Compose (Modern UI)',
        code: `// Compose replaces XML with Kotlin functions
@Composable
fun Greeting(name: String) {
  Text(text = "Hello, $name!")
}

@Composable
fun HomeScreen() {
  Column {
    Greeting("Anita")
    Button(onClick = { /* navigate */ }) {
      Text("Open Course")
    }
  }
}`,
        output: 'Screen renders "Hello, Anita!" and a button'
      },
      {
        title: 'ViewModel - Data That Survives Rotation',
        code: `class QuizViewModel : ViewModel() {
  private var _score = MutableLiveData(0)
  val score: LiveData<Int> = _score

  fun answerCorrect() {
    _score.value = (_score.value ?: 0) + 1
  }
}
// Activity observes score and updates the UI automatically`,
        output: 'UI updates automatically whenever score changes'
      }
    ],
    keyPoints: [
      'Activity = one screen; Intent = move between components.',
      'Jetpack Compose = modern declarative UI written entirely in Kotlin.',
      'ViewModel keeps data safe when the screen rotates.'
    ],
    commonMistakes: [
      'Updating UI from background threads - always switch to the main thread.',
      'Holding Activity references in ViewModels - use LiveData/StateFlow instead.'
    ],
    proTips: [
      'Learn Compose first for new apps - Google writes all new samples in it.',
      'Practice: build a to-do app with Compose + ViewModel, then publish it.'
    ]
  },

  interop: {
    definition: 'Java-Kotlin interoperability means Kotlin and Java code live in the same project freely: each can call the other without special work.',
    whyUse: 'The world does not rewrite overnight. Companies have millions of lines of Java - Android itself is written in Java. Kotlin was designed to interoperate smoothly, so teams migrate gradually: new code in Kotlin, old code untouched, everything working together. This is exactly why Kotlin succeeded where other JVM languages failed.',
    whereUse: null,
    syntax: null,
    explanation: 'Kotlin compiles to JVM bytecode, so Java code calls Kotlin classes naturally: new UserService().getUser(1). In the other direction, call Java from Kotlin with named arguments only when the Java method has @JvmOverloads. Java sees Kotlin\'s companion object members as static. Kotlin nullability annotations (from : String) appear as @Nullable in Java, giving Java teams null safety for free.',
    examples: [
      {
        title: 'Calling Java from Kotlin',
        code: `// Java class in the same project:
// public class JavaUtil {
//   public static String shout(String s) { return s.toUpperCase() + "!"; }
// }

fun main() {
  val loud = JavaUtil.shout("kotlin")
  println(loud)
  println("Java collections work too: " + java.util.ArrayList<String>().apply { add("a") })
}`,
        output: 'KOTLIN!\nJava collections work too: [a]'
      },
      {
        title: 'Calling Kotlin from Java',
        code: `// Kotlin:
// class GreetingService {
//   fun greet(name: String): String = "Hello, $name"
//   companion object { fun version() = "1.0" }
// }

// Java sees it as:
// GreetingService svc = new GreetingService();
// String msg = svc.greet("Anita");          // normal call
// String v = GreetingService.Companion.version();  // companion
fun main() {
  println("Kotlin compiles to plain JVM bytecode Java understands")
}`,
        output: 'Kotlin compiles to plain JVM bytecode Java understands'
      },
      {
        title: 'Null Safety Reaches Java Callers',
        code: `// Kotlin function seen from Java:
// fun log(message: String)       ->  void log(@NotNull String message)
// fun note(msg: String?)         ->  void note(@Nullable String msg)

fun log(message: String) = println("[app] " + message)
fun note(msg: String?) = println("[note] " + (msg ?: "empty"))

fun main() {
  log("started")
  note(null)
}`,
        output: '[app] started\n[note] empty'
      }
    ],
    keyPoints: [
      'Kotlin targets the JVM, so Java and Kotlin mix in one project and one build.',
      'Kotlin\'s nullability annotations make Java APIs safer too.',
      'companion members appear as static to Java (use @JvmStatic for cleaner access).'
    ],
    commonMistakes: [
      'Passing null from Java into a non-null Kotlin parameter - it crashes at runtime.',
      'Expecting Java to see Kotlin top-level functions as static without @JvmStatic.'
    ],
    proTips: [
      'Migrate projects module by module - no need for a big-bang rewrite.',
      'When a Kotlin library exposes an awkward Companion for Java, add @JvmStatic or @JvmName.'
    ]
  },

  project: {
    definition: 'The final project pulls everything together: plan, design, code, test, and refine a complete Kotlin application on your own.',
    whyUse: 'Tutorials create the illusion of skill; a project proves it. This is the artifact you show employers: a working app with clean classes, safe null handling, collections logic, and proper structure. Rebuilding a similar app for a different domain (library, shop, gym) later - without this guide - confirms you truly learned the material.',
    whereUse: null,
    syntax: null,
    explanation: 'Choose one project: (A) Student Report System - CLI app storing students, computing grades with sealed classes; (B) Kotlin REST API with Ktor or Spring - routes, JSON, and a database; (C) Android app - a to-do or quiz app with Compose. Steps: write the data model first (data classes), then core logic (functions, collections), then I/O or UI, then tests, then polish.',
    examples: [
      {
        title: 'Step 1: Data Model (Data + Sealed)',
        code: `data class Student(val roll: Int, val name: String, val marks: Int)

sealed class GradeResult {
  data class Graded(val roll: Int, val letter: String) : GradeResult()
  data class Invalid(val roll: Int) : GradeResult()
}

fun gradeOf(marks: Int) = when {
  marks >= 90 -> "A"
  marks >= 75 -> "B"
  marks >= 60 -> "C"
  else -> "D"
}`,
        output: 'Model ready - now add logic'
      },
      {
        title: 'Step 2: Core Logic (Collections + Functions)',
        code: `fun main() {
  val students = listOf(
    Student(1, "Anita", 92),
    Student(2, "Suresh", 85),
    Student(3, "Ravi", 58),
    Student(4, "Meena", 77)
  )

  val passed = students.filter { it.marks >= 60 }
  val top = students.maxByOrNull { it.marks }
  val avg = students.map { it.marks }.average()

  println("Passed: " + passed.size + "/" + students.size)
  println("Topper: " + top?.name + " (" + top?.marks + ")")
  println("Average: " + "%.1f".format(avg))

  for (s in students) {
    println("Roll " + s.roll + ": " + s.name + " -> " + gradeOf(s.marks))
  }
}`,
        output: 'Passed: 3/4\nTopper: Anita (92)\nAverage: 78.0\nRoll 1: Anita -> A\nRoll 2: Suresh -> B\nRoll 3: Ravi -> D\nRoll 4: Meena -> C'
      },
      {
        title: 'Step 3: Structure It Like a Pro',
        code: `// Project layout:
// src/
//   model/Student.kt        - data classes
//   service/GradingService.kt - logic + functions
//   ui/ReportPrinter.kt      - output (println)
//   Main.kt                  - fun main() wires it together
//
// Checklist before you call it done:
// [ ] val used everywhere possible
// [ ] All nullable values handled with ?. or ?:
// [ ] No function over 30 lines
// [ ] Tested with at least 5 different inputs`,
        output: 'Project structured and ready to submit'
      }
    ],
    keyPoints: [
      'Model data first (data classes), then logic, then UI.',
      'Apply the whole course: null safety, collections, sealed classes, scope functions.',
      'Finishing and polishing beats starting three half-projects.'
    ],
    commonMistakes: [
      'Building everything in one file - use packages from day one.',
      'Never testing with bad input (empty lists, nulls, negative marks).'
    ],
    proTips: [
      'Put it on GitHub with a README - that is your portfolio piece.',
      'Then rebuild the same idea in another domain without this guide - that proves mastery.'
    ]
  }
}

export default kotlin
