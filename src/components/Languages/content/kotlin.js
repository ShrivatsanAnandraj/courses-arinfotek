const kotlin = {
  intro: {
    definition: 'Kotlin is a modern, statically-typed programming language that runs on the JVM. Developed by JetBrains in 2011, it combines object-oriented and functional programming features with concise syntax and null safety.',
    whyUse: 'Kotlin is concise, safe, fully interoperable with Java, and officially supported for Android development. It reduces boilerplate code, eliminates null pointer exceptions, and provides powerful features like coroutines and extension functions.',
    whereUse: 'Android mobile apps, server-side applications (Spring Boot), multiplatform projects, web development (Kotlin/JS), native applications (Kotlin/Native), and data science.',
    syntax: null,
    explanation: 'Kotlin uses a clean, expressive syntax. Variables use val (immutable) and var (mutable). Functions use the fun keyword. Classes do not require the new keyword for instantiation. Semicolons are optional. Type inference reduces type annotations.',
    examples: [
      {
        title: 'Hello World',
        code: `fun main() {
  println("Hello, World!")
}`,
        output: 'Hello, World!'
      },
      {
        title: 'Variables and Types',
        code: `fun main() {
  val name = "Kotlin"
  var version = 2.0
  val pi = 3.14159
  val isFun = true
  println("$name version $version")
  println("Pi = $pi")
  println("Is fun: $isFun")
}`,
        output: 'Kotlin version 2.0\nPi = 3.14159\nIs fun: true'
      },
      {
        title: 'String Templates',
        code: `fun main() {
  val name = "Arinfotek"
  val students = 500
  println("Welcome to $name!")
  println("Students: $students")
  println("1 + 1 = \${1 + 1}")
  println("Name length: \${name.length}")
}`,
        output: 'Welcome to Arinfotek!\nStudents: 500\n1 + 1 = 2\nName length: 10'
      }
    ],
    keyPoints: [
      'Statically typed with smart type inference',
      'Null safety built into the type system',
      'Full Java interoperability',
      'Concise syntax — less boilerplate than Java',
      'Official language for Android development'
    ],
    commonMistakes: [
      'Confusing val (immutable) with var (mutable)',
      'Not handling nullable types properly',
      'Forgetting that Kotlin runs on the JVM',
      'Using Java-style boilerplate when Kotlin shortcuts exist',
      'Not leveraging data classes for simple data holders'
    ],
    proTips: [
      'Use val by default, only use var when mutation is needed',
      'Leverage string templates instead of concatenation',
      'Use data classes for automatic equals(), hashCode(), toString()',
      'Take advantage of Java interoperability in mixed projects',
      'Use IntelliJ IDEA or Android Studio for the best Kotlin experience'
    ]
  },

  setup: {
    definition: 'Setting up Kotlin involves installing the Kotlin compiler, configuring build tools (Gradle or Maven), and setting up an IDE for development.',
    whyUse: 'Proper setup ensures you can compile, run, and test Kotlin code efficiently. Kotlin can be used with Gradle, Maven, or directly through the compiler.',
    whereUse: 'Android development, server-side applications, multiplatform projects, scripting, and any environment where Kotlin code needs to be compiled and executed.',
    syntax: null,
    explanation: 'Kotlin can be compiled using kotlinc, integrated with Gradle or Maven, or used through IDEs. For Android, Android Studio includes full Kotlin support. Use the Kotlin Playground for quick experiments online.',
    examples: [
      {
        title: 'Run Kotlin Code',
        code: `fun main() {
  println("Kotlin is ready!")
  println("Kotlin version: \${KotlinVersion.CURRENT}")
}`,
        output: 'Kotlin is ready!\nKotlin version: 2.0.21'
      },
      {
        title: 'Hello Kotlin with Functions',
        code: `fun greet(name: String): String {
  return "Hello, $name!"
}
fun main() {
  println(greet("World"))
  println(greet("Kotlin"))
}`,
        output: 'Hello, World!\nHello, Kotlin!'
      },
      {
        title: 'Command Line Arguments',
        code: `fun main(args: Array<String>) {
  println("Arguments count: \${args.size}")
  args.forEach { println("  - \$it") }
}`,
        output: 'Arguments count: 3\n  - hello\n  - world\n  - kotlin'
      }
    ],
    keyPoints: [
      'Kotlin compiler: kotlinc (included in Kotlin SDK)',
      'Gradle is the recommended build tool for Kotlin projects',
      'Android Studio has built-in Kotlin support',
      'Kotlin Playground (play.kotlinlang.org) for quick testing',
      'Kotlin/JVM compiles to Java bytecode — runs on any JVM'
    ],
    commonMistakes: [
      'Not configuring Kotlin plugin in build tools',
      'Using wrong Kotlin version for project dependencies',
      'Not enabling Kotlin support in Android Studio',
      'Confusing Kotlin/JVM with Kotlin/JS or Kotlin/Native',
      'Forgetting to add kotlin-stdlib dependency'
    ],
    proTips: [
      'Use Kotlin DSL for Gradle build scripts',
      'Enable Kotlin compiler warnings for better code quality',
      'Use ktlint for consistent code formatting',
      'Configure IDE with Kotlin coding conventions',
      'Use Kotlin scripting (.kts) for build scripts'
    ]
  },

  variables: {
    definition: 'Kotlin variables are declared using val (read-only/immutable) and var (mutable). The compiler infers types when possible, reducing explicit type annotations.',
    whyUse: 'Proper variable declaration ensures type safety and immutability. Kotlin\'s type inference reduces boilerplate while maintaining static typing benefits.',
    whereUse: 'Storing data in any Kotlin program — from simple scripts to complex applications. Variables are fundamental building blocks for all program logic.',
    syntax: null,
    explanation: 'val creates an immutable reference (like final in Java). var creates a mutable reference. Type can be inferred or explicitly declared. Kotlin has basic types: Int, Double, String, Boolean, Char, etc.',
    examples: [
      {
        title: 'Val and Var',
        code: `fun main() {
  val immutable = "Cannot change"
  var mutable = "Can change"
  println("Val: $immutable")
  println("Var before: $mutable")
  mutable = "Changed!"
  println("Var after: $mutable")
}`,
        output: 'Val: Cannot change\nVar before: Can change\nVar after: Changed!'
      },
      {
        title: 'Type Inference and Explicit Types',
        code: `fun main() {
  val inferredInt = 42
  val explicitLong: Long = 42L
  val inferredString = "Hello"
  val explicitDouble: Double = 3.14
  val inferredBoolean = true
  println("$inferredInt, $explicitLong")
  println("$inferredString, $explicitDouble")
  println("Boolean: $inferredBoolean")
}`,
        output: '42, 42\nHello, 3.14\nBoolean: true'
      },
      {
        title: 'Multiple Declarations',
        code: `fun main() {
  val (name, age) = Pair("Alice", 25)
  println("Name: $name, Age: $age")
  val x = 10
  val y = 20
  println("Sum: \${x + y}")
  val list = listOf(1, 2, 3)
  val (first, second, third) = list
  println("First: $first, Second: $second, Third: $third")
}`,
        output: 'Name: Alice, Age: 25\nSum: 30\nFirst: 1, Second: 2, Third: 3'
      }
    ],
    keyPoints: [
      'val = immutable (read-only), var = mutable',
      'Type inference eliminates explicit type declarations',
      'All variables must be initialized before use',
      'No null safety issues with non-nullable types',
      'Use destructuring declarations for multiple assignments'
    ],
    commonMistakes: [
      'Using var when val would suffice',
      'Trying to reassign val variables',
      'Not understanding null safety with nullable types',
      'Forgetting type inference capabilities',
      'Using Java-style variable declarations unnecessarily'
    ],
    proTips: [
      'Always prefer val over var unless mutation is required',
      'Use explicit types when the inferred type is not clear',
      'Leverage destructuring for clean multi-value assignments',
      'Use lateinit for variables initialized after construction',
      'Use lazy delegates for expensive initialization'
    ]
  },

  strings: {
    definition: 'Kotlin strings are immutable sequences of characters. They support string templates, multi-line strings, and rich built-in methods for manipulation.',
    whyUse: 'Strings are essential for text processing. Kotlin\'s string templates and multi-line strings make text handling more readable and concise than Java.',
    whereUse: 'Text processing, data formatting, user output, file I/O, network communication, and building user interfaces.',
    syntax: null,
    explanation: 'Strings are declared with double quotes. String templates use $ for variables and ${} for expressions. Triple quotes create multi-line strings. Strings are immutable — operations return new strings.',
    examples: [
      {
        title: 'String Templates',
        code: `fun main() {
  val name = "Kotlin"
  val version = 2.0
  println("Language: $name")
  println("Version: $version")
  println("Name length: \${name.length}")
  println("10 * 5 = \${10 * 5}")
}`,
        output: 'Language: Kotlin\nVersion: 2.0\nName length: 6\n10 * 5 = 50'
      },
      {
        title: 'Multi-line Strings',
        code: `fun main() {
  val multiline = """
    |Hello
    |World
    |Kotlin
  """.trimMargin()
  println(multiline)
  val sql = """
    SELECT * FROM users
    WHERE age > 18
    ORDER BY name
  """.trimIndent()
  println(sql)
}`,
        output: 'Hello\nWorld\nKotlin\nSELECT * FROM users\nWHERE age > 18\nORDER BY name'
      },
      {
        title: 'String Methods',
        code: `fun main() {
  val text = "Hello, World!"
  println("Upper: \${text.uppercase()}")
  println("Lower: \${text.lowercase()}")
  println("Length: \${text.length}")
  println("Index: \${text.indexOf("World")}")
  println("Replace: \${text.replace("World", "Kotlin")}")
  println("Substring: \${text.substring(7)}")
  println("Contains: \${text.contains("World")}")
}`,
        output: 'Upper: HELLO, WORLD!\nLower: hello, world!\nLength: 13\nIndex: 7\nReplace: Hello, Kotlin!\nSubstring: World!\nContains: true'
      },
      {
        title: 'String Splitting and Joining',
        code: `fun main() {
  val csv = "Java,Python,Kotlin,JavaScript"
  val langs = csv.split(",")
  langs.forEach { println("Language: $it") }
  val joined = langs.joinToString(" | ")
  println("Joined: $joined")
  val padded = "Kotlin".padStart(10, '*')
  println("Padded: $padded")
}`,
        output: 'Language: Java\nLanguage: Python\nLanguage: Kotlin\nLanguage: JavaScript\nJoined: Java | Python | Kotlin | JavaScript\nPadded: *****Kotlin'
      }
    ],
    keyPoints: [
      'Strings are immutable — operations return new strings',
      '$variable and ${expression} for string templates',
      'Triple quotes for multi-line strings',
      'trimMargin() and trimIndent() for clean formatting',
      'Rich built-in methods for manipulation'
    ],
    commonMistakes: [
      'Confusing == (structural equality) with === (referential equality)',
      'Not using trimMargin() for multi-line string formatting',
      'Trying to modify strings directly (they are immutable)',
      'Forgetting that string templates work with any expression',
      'Using Java string methods that do not exist in Kotlin'
    ],
    proTips: [
      'Use string templates over concatenation for readability',
      'Use buildString{} for complex string construction',
      'Leverage extension functions for custom string operations',
      'Use isBlank() and isEmpty() appropriately',
      'Use raw strings for regular expressions'
    ]
  },

  operators: {
    definition: 'Kotlin provides standard arithmetic, comparison, logical, and assignment operators, plus some unique operators like range and null-safe operators.',
    whyUse: 'Operators enable data manipulation, comparisons, and logical operations. Kotlin\'s operators include convenient shortcuts and null-safe operations.',
    whereUse: 'Mathematical calculations, conditional checks, null-safe operations, range expressions, and data transformations.',
    syntax: null,
    explanation: 'Arithmetic: + - * / %. Comparison: == != < > <= >=. Logical: && || !. Range: .. (rangeTo). Null-safe: ?. ?: !!. Assignment: = += -= *= /=. Kotlin overloads some operators for custom classes.',
    examples: [
      {
        title: 'Arithmetic Operators',
        code: `fun main() {
  val a = 10
  val b = 3
  println("$a + $b = \${a + b}")
  println("$a - $b = \${a - b}")
  println("$a * $b = \${a * b}")
  println("$a / $b = \${a / b}")
  println("$a % $b = \${a % b}")
}`,
        output: '10 + 3 = 13\n10 - 3 = 7\n10 * 3 = 30\n10 / 3 = 3\n10 % 3 = 1'
      },
      {
        title: 'Range Operator',
        code: `fun main() {
  val range = 1..5
  print("Range: ")
  for (i in range) print("$i ")
  println()
  val stepRange = 1..10 step 2
  print("Step 2: ")
  for (i in stepRange) print("$i ")
  println()
  val downTo = 5 downTo 1
  print("DownTo: ")
  for (i in downTo) print("$i ")
  println()
  println("5 in range: \${5 in range}")
  println("6 in range: \${6 in range}")
}`,
        output: 'Range: 1 2 3 4 5 \nStep 2: 1 3 5 7 9 \nDownTo: 5 4 3 2 1 \n5 in range: true\n6 in range: false'
      },
      {
        title: 'Null-Safe Operators',
        code: `fun main() {
  val name: String? = "Kotlin"
  val nullName: String? = null
  println("Safe call: \${name?.uppercase()}")
  println("Null safe: \${nullName?.uppercase() ?: "NULL"}")
  val length = name?.length ?: -1
  println("Length: $length")
  val forceLength = nullName?.length ?: -1
  println("Force length: $forceLength")
}`,
        output: 'Safe call: KOTLIN\nNull safe: NULL\nLength: 6\nForce length: -1'
      },
      {
        title: 'Logical Operators',
        code: `fun main() {
  val a = true
  val b = false
  println("a && b: \${a && b}")
  println("a || b: \${a || b}")
  println("!a: \${!a}")
  println("!b: \${!b}")
  val score = 85
  val pass = score >= 70 && score <= 100
  println("Pass: $pass")
}`,
        output: 'a && b: false\na || b: true\n!a: false\n!b: true\nPass: true'
      }
    ],
    keyPoints: [
      'Arithmetic: + - * / % (modulus)',
      'Comparison: == != < > <= >= (structural equality)',
      'Logical: && || !',
      'Range: .. creates ranges, in checks membership',
      'Null-safe: ?. (safe call), ?: (elvis), !! (non-null assertion)'
    ],
    commonMistakes: [
      'Confusing = (assignment) with == (comparison)',
      'Using !! (non-null assertion) excessively — defeats null safety',
      'Integer division truncating decimal results',
      'Not understanding operator precedence',
      'Confusing structural equality (==) with referential equality (===)'
    ],
    proTips: [
      'Use elvis operator (?:) for default values',
      'Use safe call (?.) instead of null checks',
      'Use range expressions for cleaner loops',
      'Override operators for custom classes with operator functions',
      'Avoid !! unless absolutely certain of non-null'
    ]
  },

  conditionals: {
    definition: 'Kotlin provides if-else expressions, when expressions (replacing switch), and ternary-like functionality. Conditions must evaluate to Boolean.',
    whyUse: 'Conditionals enable dynamic program flow based on data and state. Kotlin\'s when expression is more powerful than Java\'s switch.',
    whereUse: 'Input validation, state management, data routing, business logic, and implementing algorithms with decision points.',
    syntax: null,
    explanation: 'if-else is an expression that returns values. when replaces switch and supports any type, ranges, and complex conditions. No ternary operator needed — use if as an expression.',
    examples: [
      {
        title: 'If-Else Expression',
        code: `fun main() {
  val score = 85
  val grade = if (score >= 90) "A"
    else if (score >= 80) "B"
    else if (score >= 70) "C"
    else "F"
  println("Score: $score, Grade: $grade")
  val max = if (10 > 20) 10 else 20
  println("Max: $max")
}`,
        output: 'Score: 85, Grade: B\nMax: 20'
      },
      {
        title: 'When Expression',
        code: `fun main() {
  val day = "Wednesday"
  val result = when (day) {
    "Monday" -> "Start of week"
    "Wednesday" -> "Midweek"
    "Friday" -> "Almost weekend"
    else -> "Regular day"
  }
  println("$day: $result")
}`,
        output: 'Wednesday: Midweek'
      },
      {
        title: 'When with Multiple Conditions',
        code: `fun main() {
  val score = 75
  val description = when {
    score >= 90 -> "Excellent"
    score >= 80 -> "Good"
    score >= 70 -> "Average"
    else -> "Needs improvement"
  }
  println("Score $score: $description")
  val num = 15
  val type = when (num) {
    in 1..10 -> "Small"
    in 11..20 -> "Medium"
    in 21..100 -> "Large"
    else -> "Unknown"
  }
  println("$num is $type")
}`,
        output: 'Score 75: Average\n15 is Medium'
      },
      {
        title: 'When with Type Checking',
        code: `fun main() {
  val items = listOf(1, "Hello", 3.14, true)
  for (item in items) {
    val desc = when (item) {
      is Int -> "Integer: $item"
      is String -> "String of length \${item.length}"
      is Double -> "Double: $item"
      is Boolean -> "Boolean: $item"
      else -> "Unknown"
    }
    println(desc)
  }
}`,
        output: 'Integer: 1\nString of length 5\nDouble: 3.14\nBoolean: true'
      }
    ],
    keyPoints: [
      'if-else is an expression that returns a value',
      'when replaces switch — more powerful and flexible',
      'when can match types, ranges, values, and custom conditions',
      'No ternary operator — use if expression instead',
      'else branch in when acts as default case'
    ],
    commonMistakes: [
      'Using when without exhaustive else (may need for sealed classes)',
      'Forgetting that when is an expression (can assign result)',
      'Using == instead of is for type checking',
      'Not handling all possible cases in when',
      'Using if-else chains when when would be cleaner'
    ],
    proTips: [
      'Use when as an expression for cleaner code',
      'Use is for smart casting after type checks',
      'Use in for range-based matching',
      'Group related cases with commas',
      'Use when for exhaustive matching on sealed classes'
    ]
  },

  loops: {
    definition: 'Kotlin provides for, while, do-while loops, and rich iteration utilities for collections, ranges, and sequences.',
    whyUse: 'Loops enable repetitive execution, collection processing, and implementing algorithms. Kotlin\'s iteration syntax is clean and expressive.',
    whereUse: 'Collection processing, algorithm implementation, data transformation, file processing, and any repetitive task.',
    syntax: null,
    explanation: 'for loop iterates over ranges, arrays, or collections. while and do-while work like Java. Use break, continue, and labels for loop control. forEach and other higher-order functions provide functional alternatives.',
    examples: [
      {
        title: 'For Loop with Range',
        code: `fun main() {
  print("Count: ")
  for (i in 1..5) print("$i ")
  println()
  print("Down: ")
  for (i in 5 downTo 1) print("$i ")
  println()
  print("Even: ")
  for (i in 2..10 step 2) print("$i ")
  println()
}`,
        output: 'Count: 1 2 3 4 5 \nDown: 5 4 3 2 1 \nEven: 2 4 6 8 10 '
      },
      {
        title: 'While and Do-While',
        code: `fun main() {
  var count = 5
  print("While: ")
  while (count > 0) {
    print("$count ")
    count--
  }
  println()
  count = 1
  print("Do-While: ")
  do {
    print("$count ")
    count++
  } while (count <= 5)
  println()
}`,
        output: 'While: 5 4 3 2 1 \nDo-While: 1 2 3 4 5 '
      },
      {
        title: 'Iterating Collections',
        code: `fun main() {
  val fruits = listOf("Apple", "Banana", "Cherry")
  for (fruit in fruits) {
    println("Fruit: $fruit")
  }
  for ((index, fruit) in fruits.withIndex()) {
    println("$index: $fruit")
  }
}`,
        output: 'Fruit: Apple\nFruit: Banana\nFruit: Cherry\n0: Apple\n1: Banana\n2: Cherry'
      },
      {
        title: 'Break and Continue with Labels',
        code: `fun main() {
  print("Skip 3: ")
  for (i in 1..10) {
    if (i == 3) continue
    if (i == 7) break
    print("$i ")
  }
  println()
  println("Nested with label:")
  outer@ for (i in 1..3) {
    for (j in 1..3) {
      if (j == 2) continue@outer
      print("($i,$j) ")
    }
  }
  println()
}`,
        output: 'Skip 3: 1 2 4 5 6 \nNested with label:\n(1,1) (2,1) (3,1) '
      }
    ],
    keyPoints: [
      'for loop iterates over ranges, arrays, collections',
      'Range: .., downTo, step for custom ranges',
      'while and do-while for condition-based loops',
      'forEach for functional-style iteration',
      'Labels enable break/continue in nested loops'
    ],
    commonMistakes: [
      'Infinite loops from missing update or wrong condition',
      'Off-by-one errors in range expressions',
      'Forgetting that ranges are inclusive (1..5 includes 5)',
      'Not using labels when breaking out of nested loops',
      'Using forEach when a regular loop would be clearer'
    ],
    proTips: [
      'Use range expressions (1..10) for clean iteration',
      'Use withIndex() when you need the index',
      'Use repeat(n) {} for simple repeated execution',
      'Prefer higher-order functions (map, filter) over loops',
      'Use sequence{} for lazy generation of values'
    ]
  },

  functions: {
    definition: 'Functions in Kotlin are declared using the fun keyword. They can have default parameters, named arguments, single-expression bodies, and extension functions.',
    whyUse: 'Functions encapsulate reusable logic. Kotlin\'s functions are more expressive than Java\'s methods with features like default parameters, named arguments, and single-expression syntax.',
    whereUse: 'Encapsulating business logic, creating utilities, implementing algorithms, and organizing code into reusable components.',
    syntax: null,
    explanation: 'Functions use fun keyword. Parameters have explicit types. Return type follows the parameter list. Single-expression functions use = instead of body. Default parameters reduce overloading. Unit is the return type for void functions.',
    examples: [
      {
        title: 'Basic Functions',
        code: `fun add(a: Int, b: Int): Int {
  return a + b
}
fun greet(name: String): Unit {
  println("Hello, $name!")
}
fun main() {
  println("Sum: \${add(5, 3)}")
  greet("Kotlin")
}`,
        output: 'Sum: 8\nHello, Kotlin!'
      },
      {
        title: 'Default and Named Parameters',
        code: `fun createUser(
  name: String,
  age: Int = 25,
  role: String = "user"
) {
  println("Created: $name, age: $age, role: $role")
}
fun main() {
  createUser("Alice")
  createUser("Bob", 30)
  createUser("Charlie", role = "admin")
  createUser("Diana", 28, "moderator")
}`,
        output: 'Created: Alice, age: 25, role: user\nCreated: Bob, age: 30, role: user\nCreated: Charlie, age: 25, role: admin\nCreated: Diana, age: 28, role: moderator'
      },
      {
        title: 'Single-Expression Functions',
        code: `fun double(x: Int) = x * 2
fun isEven(n: Int) = n % 2 == 0
fun max(a: Int, b: Int) = if (a > b) a else b
fun main() {
  println("Double 5: \${double(5)}")
  println("4 is even: \${isEven(4)}")
  println("7 is even: \${isEven(7)}")
  println("Max: \${max(10, 20)}")
}`,
        output: 'Double 5: 10\n4 is even: true\n7 is even: false\nMax: 20'
      },
      {
        title: 'Varargs and Spread Operator',
        code: `fun sum(vararg numbers: Int): Int {
  return numbers.sum()
}
fun main() {
  println("Sum: \${sum(1, 2, 3)}")
  println("Sum: \${sum(10, 20, 30, 40)}")
  val array = intArrayOf(5, 6, 7)
  println("Sum: \${sum(*array)}")
}`,
        output: 'Sum: 6\nSum: 100\nSum: 18'
      }
    ],
    keyPoints: [
      'fun keyword declares functions',
      'Default parameters reduce the need for overloading',
      'Named arguments improve readability',
      'Single-expression functions use = syntax',
      'vararg for variable number of arguments'
    ],
    commonMistakes: [
      'Forgetting to specify return type for non-Unit functions',
      'Not using named arguments with default parameters',
      'Confusing Unit (void) with Nothing (never returns)',
      'Not handling default parameters correctly',
      'Using return in single-expression functions unnecessarily'
    ],
    proTips: [
      'Use single-expression functions for simple operations',
      'Use default parameters instead of function overloading',
      'Use named arguments for clarity with many parameters',
      'Use inline functions for higher-order functions',
      'Use extension functions to add behavior to existing classes'
    ]
  },

  null: {
    definition: 'Kotlin\'s null safety system prevents NullPointerException at compile time. Types are non-nullable by default, and nullable types are explicitly marked with ?.',
    whyUse: 'Null safety eliminates the billion-dollar mistake of null pointer exceptions. It makes code safer and more reliable by handling null cases explicitly.',
    whereUse: 'API responses, user input handling, database queries, optional data, and any scenario where values might be absent.',
    syntax: null,
    explanation: 'By default, variables cannot hold null. Add ? to make a type nullable (String?). Use ?. (safe call), ?: (elvis operator), and !! (non-null assertion) to handle nullable values. let, run, also help with null-safe operations.',
    examples: [
      {
        title: 'Nullable Types',
        code: `fun main() {
  val nonNull: String = "Hello"
  val nullable: String? = null
  println("Non-null: $nonNull")
  println("Nullable: $nullable")
  println("Safe call: \${nullable?.uppercase()}")
  println("Elvis: \${nullable ?: "Default"}")
}`,
        output: 'Non-null: Hello\nNullable: null\nSafe call: null\nElvis: Default'
      },
      {
        title: 'Safe Call and Let',
        code: `fun main() {
  val name: String? = "Kotlin"
  name?.let {
    println("Name is: $it")
    println("Length: \${it.length}")
  }
  val nullName: String? = null
  nullName?.let {
    println("This won't print")
  } ?: println("Name is null")
}`,
        output: 'Name is: Kotlin\nLength: 6\nName is null'
      },
      {
        title: 'Non-Null Assertion',
        code: `fun main() {
  val name: String? = "Kotlin"
  val length = name!!.length
  println("Length: $length")
  val nullName: String? = null
  try {
    val forceLength = nullName!!.length
  } catch (e: KotlinNullPointerException) {
    println("NPE caught!")
  }
}`,
        output: 'Length: 6\nNPE caught!'
      },
      {
        title: 'Smart Casts with Null Checks',
        code: `fun printLength(s: String?) {
  if (s != null) {
    println("Length: \${s.length}")
  } else {
    println("String is null")
  }
}
fun main() {
  printLength("Hello")
  printLength(null)
}`,
        output: 'Length: 5\nString is null'
      }
    ],
    keyPoints: [
      'Types are non-nullable by default',
      'Add ? to make types nullable (String?)',
      '?. (safe call) returns null if object is null',
      '?: (elvis operator) provides default for null values',
      '!! (non-null assertion) throws NPE if null'
    ],
    commonMistakes: [
      'Using !! excessively — defeats null safety purpose',
      'Forgetting that safe call returns null for nullable types',
      'Not handling null in when expressions',
      'Using lateinit with nullable types unnecessarily',
      'Not using let for null-safe operations'
    ],
    proTips: [
      'Avoid !! — use safe call or elvis operator instead',
      'Use let {} for null-safe operations on nullable objects',
      'Use require/check for preconditions in functions',
      'Use early returns for null checks at function start',
      'Use platform types carefully when interoperating with Java'
    ]
  },

  lambdas: {
    definition: 'Lambda expressions are anonymous functions that can be passed as arguments. Kotlin\'s lambdas are concise and integrate seamlessly with higher-order functions.',
    whyUse: 'Lambdas enable functional programming, concise code, and powerful collection operations. They are essential for working with higher-order functions like map, filter, and sort.',
    whereUse: 'Collection operations, event handlers, callbacks, builder patterns, and any scenario where passing behavior as data is useful.',
    syntax: null,
    explanation: 'Lambda syntax: { parameters -> body }. Single parameter can use "it". Trailing lambda syntax moves lambda outside parentheses. Lambda types are specified as (ParameterType) -> ReturnType.',
    examples: [
      {
        title: 'Basic Lambda',
        code: `fun main() {
  val add = { a: Int, b: Int -> a + b }
  println("Add: \${add(5, 3)}")
  val greet = { name: String -> println("Hello, $name!") }
  greet("Kotlin")
  val numbers = listOf(1, 2, 3, 4, 5)
  val doubled = numbers.map { it * 2 }
  println("Doubled: $doubled")
}`,
        output: 'Add: 8\nHello, Kotlin!\nDoubled: [2, 4, 6, 8, 10]'
      },
      {
        title: 'Higher-Order Functions',
        code: `fun operate(a: Int, b: Int, operation: (Int, Int) -> Int): Int {
  return operation(a, b)
}
fun main() {
  val sum = operate(10, 5) { a, b -> a + b }
  val product = operate(10, 5) { a, b -> a * b }
  println("Sum: $sum")
  println("Product: $product")
}`,
        output: 'Sum: 15\nProduct: 50'
      },
      {
        title: 'Lambda with Collections',
        code: `fun main() {
  val names = listOf("Alice", "Bob", "Charlie", "David")
  val shortNames = names.filter { it.length <= 3 }
  println("Short: $shortNames")
  val upperNames = names.map { it.uppercase() }
  println("Upper: $upperNames")
  val sorted = names.sortedBy { it.length }
  println("Sorted: $sorted")
}`,
        output: 'Short: [Bob]\nUpper: [ALICE, BOB, CHARLIE, DAVID]\nSorted: [Bob, Alice, David, Charlie]'
      },
      {
        title: 'It Parameter and Trailing Lambda',
        code: `fun main() {
  val numbers = listOf(1, 2, 3, 4, 5)
  numbers.forEach { println(it) }
  val sum = numbers.reduce { acc, i -> acc + i }
  println("Sum: $sum")
  val result = buildString {
    append("Hello")
    append(", ")
    append("World")
  }
  println(result)
}`,
        output: '1\n2\n3\n4\n5\nSum: 15\nHello, World'
      }
    ],
    keyPoints: [
      'Lambda syntax: { parameters -> body }',
      'it is the implicit name for single parameters',
      'Trailing lambda moves outside parentheses',
      'Lambdas are first-class citizens — can be passed as arguments',
      'Function types: (ParamType) -> ReturnType'
    ],
    commonMistakes: [
      'Forgetting that it refers to the single implicit parameter',
      'Over-complicating lambdas that should be separate functions',
      'Not using trailing lambda syntax for readability',
      'Confusing lambda syntax with function reference syntax',
      'Creating non-inline lambdas that cause performance issues'
    ],
    proTips: [
      'Use :: function references for simple cases',
      'Use trailing lambda syntax for readability',
      'Inline lambdas for performance-critical code',
      'Use it only when the context is clear',
      'Extract complex lambdas into named functions'
    ]
  },

  collections: {
    definition: 'Kotlin provides List, Set, Map, and mutable versions of each. Collections can be immutable (read-only) or mutable, with rich functional operations.',
    whyUse: 'Collections are fundamental for data storage and manipulation. Kotlin\'s collections are more expressive than Java\'s with built-in functional operations.',
    whereUse: 'Storing lists of data, maintaining unique elements, key-value mappings, data transformation, and implementing algorithms.',
    syntax: null,
    explanation: 'Immutable: listOf(), setOf(), mapOf(). Mutable: mutableListOf(), mutableSetOf(), mutableMapOf(). Rich operations: filter, map, reduce, groupBy, sorted, etc. Collections support both imperative and functional styles.',
    examples: [
      {
        title: 'List Operations',
        code: `fun main() {
  val numbers = listOf(1, 2, 3, 4, 5)
  println("Numbers: $numbers")
  println("First: \${numbers.first()}")
  println("Last: \${numbers.last()}")
  println("Size: \${numbers.size}")
  println("Contains 3: \${3 in numbers}")
  println("Slice: \${numbers.slice(1..3)}")
}`,
        output: 'Numbers: [1, 2, 3, 4, 5]\nFirst: 1\nLast: 5\nSize: 5\nContains 3: true\nSlice: [2, 3, 4]'
      },
      {
        title: 'Map Operations',
        code: `fun main() {
  val scores = mapOf("Alice" to 95, "Bob" to 87, "Charlie" to 92)
  println("Scores: $scores")
  println("Alice: \${scores["Alice"]}")
  println("Contains Bob: \${scores.containsKey("Bob")}")
  val updated = scores + ("Diana" to 88)
  println("Updated: $updated")
  scores.forEach { (name, score) ->
    println("$name: $score")
  }
}`,
        output: 'Scores: {Alice=95, Bob=87, Charlie=92}\nAlice: 95\nContains Bob: true\nUpdated: {Alice=95, Bob=87, Charlie=92, Diana=88}\nAlice: 95\nBob: 87\nCharlie: 92'
      },
      {
        title: 'Functional Operations',
        code: `fun main() {
  val numbers = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  val evens = numbers.filter { it % 2 == 0 }
  println("Evens: $evens")
  val squares = numbers.map { it * it }
  println("Squares: $squares")
  val sum = numbers.reduce { acc, i -> acc + i }
  println("Sum: $sum")
  val grouped = numbers.groupBy { if (it % 2 == 0) "even" else "odd" }
  println("Grouped: $grouped")
}`,
        output: 'Evens: [2, 4, 6, 8, 10]\nSquares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\nSum: 55\nGrouped: {odd=[1, 3, 5, 7, 9], even=[2, 4, 6, 8, 10]}'
      },
      {
        title: 'Mutable Collections',
        code: `fun main() {
  val mutableList = mutableListOf(1, 2, 3)
  mutableList.add(4)
  mutableList.removeAt(0)
  println("Mutable: $mutableList")
  val mutableMap = mutableMapOf("a" to 1)
  mutableMap["b"] = 2
  mutableMap.remove("a")
  println("Map: $mutableMap")
}`,
        output: 'Mutable: [2, 3, 4]\nMap: {b=2}'
      }
    ],
    keyPoints: [
      'Immutable: listOf(), setOf(), mapOf()',
      'Mutable: mutableListOf(), mutableSetOf(), mutableMapOf()',
      'Rich functional operations: filter, map, reduce, etc.',
      'Collections support destructuring declarations',
      'to infix function for creating pairs in maps'
    ],
    commonMistakes: [
      'Confusing immutable and mutable collection types',
      'Modifying an immutable collection (compile error)',
      'Using listOf() when you need mutableListOf()',
      'Not handling null values in map lookups',
      'Creating large intermediate collections unnecessarily'
    ],
    proTips: [
      'Prefer immutable collections by default',
      'Use sequences for lazy evaluation of large collections',
      'Use buildList{} and buildMap{} for constructing collections',
      'Chain operations for clean data pipelines',
      'Use groupBy() and associate() for transformations'
    ]
  },

  classes: {
    definition: 'Classes in Kotlin are blueprints for objects. They support properties, methods, constructors, inheritance, and can be data classes, sealed classes, or object declarations.',
    whyUse: 'Classes enable object-oriented programming with a concise syntax. Kotlin classes are more feature-rich than Java classes with data classes, sealed classes, and companion objects.',
    whereUse: 'Modeling domain entities, creating service components, building UI components, designing APIs, and structuring object-oriented applications.',
    syntax: null,
    explanation: 'Classes are defined with class keyword. Primary constructor is part of the class header. Properties are declared in the constructor or class body. init block runs during construction. Secondary constructors use constructor keyword.',
    examples: [
      {
        title: 'Basic Class',
        code: `class Person(val name: String, var age: Int) {
  fun greet() {
    println("Hi, I am $name")
  }
}
fun main() {
  val person = Person("Alice", 25)
  person.greet()
  println("Name: \${person.name}")
  println("Age: \${person.age}")
  person.age = 30
  println("Updated age: \${person.age}")
}`,
        output: 'Hi, I am Alice\nName: Alice\nAge: 25\nUpdated age: 30'
      },
      {
        title: 'Primary and Secondary Constructors',
        code: `class User(val name: String, val email: String) {
  var role = "user"
  constructor(name: String) : this(name, "\${name.lowercase()}@example.com") {
    role = "guest"
  }
  override fun toString() = "User(name=$name, email=$email, role=$role)"
}
fun main() {
  val user1 = User("Alice", "alice@test.com")
  val user2 = User("Bob")
  println(user1)
  println(user2)
}`,
        output: 'User(name=Alice, email=alice@test.com, role=user)\nUser(name=Bob, email=bob@example.com, role=guest)'
      },
      {
        title: 'Companion Object',
        code: `class Logger private constructor(val tag: String) {
  companion object Factory {
    fun create(tag: String) = Logger(tag)
    fun default() = Logger("APP")
  }
  fun log(message: String) {
    println("[$tag] $message")
  }
}
fun main() {
  val logger = Logger.create("NETWORK")
  logger.log("Connected")
  val default = Logger.default()
  default.log("App started")
}`,
        output: '[NETWORK] Connected\n[APP] App started'
      }
    ],
    keyPoints: [
      'Primary constructor in class header',
      'val/var in constructor creates properties',
      'init block for initialization logic',
      'Secondary constructors with constructor keyword',
      'Companion objects for static-like members'
    ],
    commonMistakes: [
      'Confusing val (read-only property) with var (mutable)',
      'Not initializing all properties in primary constructor',
      'Forgetting that Kotlin classes are final by default',
      'Using Java-style getters/setters when properties exist',
      'Not using data classes for simple data holders'
    ],
    proTips: [
      'Use data classes for automatic equals(), hashCode(), toString()',
      'Use sealed classes for restricted class hierarchies',
      'Use object declarations for singletons',
      'Use companion objects for factory methods',
      'Use property delegation for lazy initialization'
    ]
  },

  data: {
    definition: 'Data classes automatically generate equals(), hashCode(), toString(), copy(), and componentN() functions. They are designed to hold data without boilerplate.',
    whyUse: 'Data classes eliminate the need to manually implement data class methods. They provide value-based equality, convenient copying, and destructuring support.',
    whereUse: 'DTOs, API response models, state objects, value objects, and any class primarily holding data.',
    syntax: null,
    explanation: 'Use data class keyword. Must have at least one parameter in primary constructor. All parameters must be val or var. Automatically generates useful methods based on primary constructor properties.',
    examples: [
      {
        title: 'Basic Data Class',
        code: `data class User(val name: String, val age: Int, val email: String)
fun main() {
  val user = User("Alice", 25, "alice@test.com")
  println(user)
  val user2 = User("Alice", 25, "alice@test.com")
  println("Equal: \${user == user2}")
  val user3 = user.copy(name = "Bob")
  println("Copy: $user3")
}`,
        output: 'User(name=Alice, age=25, email=alice@test.com)\nEqual: true\nCopy: User(name=Bob, age=25, email=alice@test.com)'
      },
      {
        title: 'Destructuring Declarations',
        code: `data class Point(val x: Int, val y: Int)
fun main() {
  val point = Point(10, 20)
  val (x, y) = point
  println("X: $x, Y: $y")
  val (px, py) = point
  println("Point: ($px, $py)")
  println("Component 1: \${point.component1()}")
  println("Component 2: \${point.component2()}")
}`,
        output: 'X: 10, Y: 20\nPoint: (10, 20)\nComponent 1: 10\nComponent 2: 20'
      },
      {
        title: 'Copy with Modifications',
        code: `data class Config(
  val host: String = "localhost",
  val port: Int = 8080,
  val debug: Boolean = false
)
fun main() {
  val default = Config()
  val production = default.copy(
    host = "prod.example.com",
    port = 443,
    debug = false
  )
  println("Default: $default")
  println("Production: $production")
}`,
        output: 'Default: Config(host=localhost, port=8080, debug=false)\nProduction: Config(host=prod.example.com, port=443, debug=false)'
      }
    ],
    keyPoints: [
      'data class keyword generates equals(), hashCode(), toString()',
      'copy() creates a shallow copy with optional modifications',
      'componentN() functions enable destructuring',
      'At least one parameter required in primary constructor',
      'All primary constructor parameters become properties'
    ],
    commonMistakes: [
      'Using data class for classes with complex behavior',
      'Forgetting that copy() is shallow (does not deep copy objects)',
      'Not understanding that equals() compares all properties',
      'Using data class for singletons (use object instead)',
      'Overriding generated methods unnecessarily'
    ],
    proTips: [
      'Use data classes for DTOs and API models',
      'Use copy() for immutable state updates',
      'Combine with sealed classes for type-safe data hierarchies',
      'Use destructuring in lambda parameters',
      'Keep data classes focused on data, not behavior'
    ]
  },

  sealed: {
    definition: 'Sealed classes restrict the class hierarchy. All subclasses must be defined in the same file. They enable exhaustive when expressions and type-safe pattern matching.',
    whyUse: 'Sealed classes represent restricted hierarchies where all possibilities are known at compile time. They enable compiler-checked when expressions and represent algebraic data types.',
    whereUse: 'State machines, API responses with known variants, result types, command patterns, and representing finite sets of related types.',
    syntax: null,
    explanation: 'Use sealed class or sealed interface. All direct subclasses must be in the same file. Can be abstract, open, or final. When expressions can be exhaustive without else when all cases are covered.',
    examples: [
      {
        title: 'Basic Sealed Class',
        code: `sealed class Result {
  data class Success(val data: String) : Result()
  data class Error(val message: String) : Result()
  object Loading : Result()
}
fun handleResult(result: Result) = when (result) {
  is Result.Success -> println("Data: \${result.data}")
  is Result.Error -> println("Error: \${result.message}")
  Result.Loading -> println("Loading...")
}
fun main() {
  handleResult(Result.Success("Hello"))
  handleResult(Result.Error("Failed"))
  handleResult(Result.Loading)
}`,
        output: 'Data: Hello\nError: Failed\nLoading...'
      },
      {
        title: 'Sealed Interface',
        code: `sealed interface Shape {
  data class Circle(val radius: Double) : Shape
  data class Rectangle(val width: Double, val height: Double) : Shape
  data class Triangle(val base: Double, val height: Double) : Shape
}
fun area(shape: Shape) = when (shape) {
  is Shape.Circle -> Math.PI * shape.radius * shape.radius
  is Shape.Rectangle -> shape.width * shape.height
  is Shape.Triangle -> 0.5 * shape.base * shape.height
}
fun main() {
  val shapes = listOf(
    Shape.Circle(5.0),
    Shape.Rectangle(4.0, 6.0),
    Shape.Triangle(3.0, 8.0)
  )
  shapes.forEach { println("Area: \${area(it)}") }
}`,
        output: 'Area: 78.53981633974483\nArea: 24.0\nArea: 12.0'
      }
    ],
    keyPoints: [
      'sealed class restricts subclass hierarchy',
      'All subclasses must be in the same file',
      'Enables exhaustive when expressions',
      'Can contain data classes, objects, and other classes',
      'Represents algebraic data types (sum types)'
    ],
    commonMistakes: [
      'Forgetting that all subclasses must be in same file',
      'Using sealed class when enum would suffice',
      'Not making subclasses data classes when they hold data',
      'Using else in when expressions unnecessarily',
      'Overcomplicating sealed class hierarchies'
    ],
    proTips: [
      'Use sealed classes for type-safe state representation',
      'Combine with data classes for automatic equals/hashCode',
      'Use when expressions for exhaustive pattern matching',
      'Consider sealed interface for multiple inheritance',
      'Use for representing API response variants'
    ]
  },

  inheritance: {
    definition: 'Kotlin supports single inheritance with classes. Use open keyword to allow inheritance, override for method overriding, and abstract for incomplete implementations.',
    whyUse: 'Inheritance enables code reuse, polymorphism, and creating logical hierarchies. Kotlin controls inheritance explicitly with the open keyword.',
    whereUse: 'Building component hierarchies, implementing design patterns, creating framework extensions, and modeling IS-A relationships.',
    syntax: null,
    explanation: 'Classes are final by default — use open to allow inheritance. Override requires the override keyword. super calls parent implementations. Use abstract for classes with unimplemented methods.',
    examples: [
      {
        title: 'Basic Inheritance',
        code: `open class Animal(val name: String) {
  open fun speak() = println("$name makes a sound")
}
class Dog(name: String) : Animal(name) {
  override fun speak() = println("$name barks")
}
class Cat(name: String) : Animal(name) {
  override fun speak() = println("$name meows")
}
fun main() {
  val dog = Dog("Buddy")
  val cat = Cat("Whiskers")
  dog.speak()
  cat.speak()
}`,
        output: 'Buddy barks\nWhiskers meows'
      },
      {
        title: 'Constructor Inheritance',
        code: `open class Vehicle(val make: String, val model: String) {
  open fun info() = "$make $model"
}
class Car(make: String, model: String, val doors: Int) : Vehicle(make, model) {
  override fun info() = "\${super.info()} with $doors doors"
}
fun main() {
  val car = Car("Toyota", "Camry", 4)
  println(car.info())
  println("Make: \${car.make}")
}`,
        output: 'Toyota Camry with 4 doors\nMake: Toyota'
      },
      {
        title: 'Abstract Classes',
        code: `abstract class Shape {
  abstract fun area(): Double
  fun display() = println("Area: \${area()}")
}
class Circle(val radius: Double) : Shape() {
  override fun area() = Math.PI * radius * radius
}
class Rectangle(val w: Double, val h: Double) : Shape() {
  override fun area() = w * h
}
fun main() {
  Circle(5.0).display()
  Rectangle(4.0, 6.0).display()
}`,
        output: 'Area: 78.53981633974483\nArea: 24.0'
      }
    ],
    keyPoints: [
      'Classes are final by default — use open for inheritance',
      'override keyword required for method overriding',
      'super calls parent class implementation',
      'abstract keyword for incomplete implementations',
      'Single inheritance only — use interfaces for multiple contracts'
    ],
    commonMistakes: [
      'Forgetting to mark classes as open for inheritance',
      'Not using override keyword when overriding methods',
      'Trying to inherit from multiple classes',
      'Not calling super constructor in subclass',
      'Using inheritance when composition would be better'
    ],
    proTips: [
      'Prefer composition over inheritance',
      'Use open carefully — not all classes should be inheritable',
      'Use final (default) to prevent inheritance when needed',
      'Use interfaces for multiple type inheritance',
      'Design hierarchies with the Liskov Substitution Principle'
    ]
  },

  extensions: {
    definition: 'Extension functions and properties add new functionality to existing classes without modifying their source code. They are resolved statically at compile time.',
    whyUse: 'Extensions enable adding behavior to classes you do not own, create DSL-like APIs, and improve code organization without inheritance or wrappers.',
    whereUse: 'Adding utility methods to library classes, creating DSL builders, improving readability of existing APIs, and organizing related functions.',
    syntax: null,
    explanation: 'Define extensions with fun ClassName.methodName(). They look like regular methods but are called on existing objects. Extensions are resolved statically — the actual type determines which extension is called.',
    examples: [
      {
        title: 'Basic Extension Function',
        code: `fun String.isPalindrome(): Boolean {
  return this == this.reversed()
}
fun main() {
  println("racecar".isPalindrome())
  println("hello".isPalindrome())
  println("Level".isPalindrome())
}`,
        output: 'true\nfalse\nfalse'
      },
      {
        title: 'Extension Properties',
        code: `val String.wordCount: Int
  get() = this.split(" ").size
fun main() {
  val text = "Hello World Kotlin"
  println("Words: \${text.wordCount}")
  println("Empty words: \${"".wordCount}")
}`,
        output: 'Words: 3\nEmpty words: 1'
      },
      {
        title: 'Extension on Nullable Types',
        code: `fun String?.orDefault(default: String = "N/A"): String {
  return this ?: default
}
fun main() {
  val name: String? = "Kotlin"
  val nullName: String? = null
  println("Name: \${name.orDefault()}")
  println("Null: \${nullName.orDefault()}")
  println("Null custom: \${nullName.orDefault("Unknown")}")
}`,
        output: 'Name: Kotlin\nNull: N/A\nNull custom: Unknown'
      },
      {
        title: 'Extension with Receiver',
        code: `fun StringBuilder.appendLine(text: String): StringBuilder {
  append(text).appendLine()
  return this
}
fun main() {
  val sb = StringBuilder()
  sb.appendLine("Hello")
  sb.appendLine("World")
  println(sb.toString())
}`,
        output: 'Hello\nWorld\n'
      }
    ],
    keyPoints: [
      'Extensions add methods to existing classes without inheritance',
      'Resolved statically — based on declared type, not runtime type',
      'Can add both functions and properties',
      'Can extend nullable types with String? syntax',
      'Great for creating DSL-like APIs'
    ],
    commonMistakes: [
      'Confusing extensions with polymorphism (static dispatch)',
      'Overusing extensions making code hard to navigate',
      'Defining extensions that conflict with existing methods',
      'Not understanding that extensions cannot access private members',
      'Creating extensions in the wrong package/scope'
    ],
    proTips: [
      'Keep extensions focused and related to the class',
      'Place extensions in the same file as the class when possible',
      'Use extensions to create DSL builders with receiver types',
      'Name extensions clearly to indicate their purpose',
      'Preach extensions over utility classes for related functions'
    ]
  },

  scope: {
    definition: 'Scope functions (let, run, with, also, apply) provide concise ways to execute blocks of code with a specific object as context. They simplify repeated property access and object configuration.',
    whyUse: 'Scope functions reduce verbosity by eliminating repeated object references. They enable clean object initialization, null-safe operations, and fluent APIs.',
    whereUse: 'Object configuration, null-safe operations, variable scoping, object transformation, and creating fluent API chains.',
    syntax: null,
    explanation: 'let: lambda with it, returns lambda result. run: this context, returns lambda result. with: this context, returns lambda result. also: lambda with it, returns object. apply: this context, returns object.',
    examples: [
      {
        title: 'Let Function',
        code: `fun main() {
  val name = "Kotlin"
  name.let {
    println("Length: \${it.length}")
    println("Upper: \${it.uppercase()}")
  }
  val nullName: String? = null
  val length = nullName?.let {
    println("Won't print")
    it.length
  } ?: -1
  println("Length: $length")
}`,
        output: 'Length: 6\nUpper: KOTLIN\nLength: -1'
      },
      {
        title: 'Apply Function',
        code: `data class Server(var host: String = "", var port: Int = 0)
fun main() {
  val server = Server().apply {
    host = "localhost"
    port = 8080
  }
  println("Server: \${server.host}:\${server.port}")
}`,
        output: 'Server: localhost:8080'
      },
      {
        title: 'Also Function',
        code: `fun main() {
  val numbers = mutableListOf(1, 2, 3)
  numbers.also {
    println("Before: $it")
  }.add(4)
  println("After: $numbers")
}`,
        output: 'Before: [1, 2, 3]\nAfter: [1, 2, 3, 4]'
      },
      {
        title: 'Run Function',
        code: `fun main() {
  val result = "Hello, World!".run {
    println("String: $this")
    length
  }
  println("Length: $result")
}`,
        output: 'String: Hello, World!\nLength: 13'
      }
    ],
    keyPoints: [
      'let: lambda with "it", returns lambda result',
      'run: "this" context, returns lambda result',
      'with: "this" context, returns lambda result',
      'also: lambda with "it", returns the object itself',
      'apply: "this" context, returns the object itself'
    ],
    commonMistakes: [
      'Confusing which scope function returns what',
      'Using let when apply would be more readable',
      'Over-nesting scope functions reducing readability',
      'Not understanding it vs this in different functions',
      'Using scope functions unnecessarily for simple operations'
    ],
    proTips: [
      'Use apply for object configuration/building',
      'Use let for null-safe transformations',
      'Use also for side effects during chaining',
      'Use run for computations on an object',
      'Chain scope functions carefully to maintain readability'
    ]
  },

  coroutines: {
    definition: 'Coroutines provide lightweight, efficient asynchronous programming. They enable writing asynchronous code in a sequential style using suspend functions.',
    whyUse: 'Coroutines simplify async programming compared to threads. They are lightweight, non-blocking, and provide structured concurrency for managing async tasks.',
    whereUse: 'Network calls, database operations, file I/O, UI updates, background processing, and any task that should not block the main thread.',
    syntax: null,
    explanation: 'Use suspend keyword for functions that can pause execution. launch creates a coroutine. async returns a Deferred result. withContext switches dispatcher. Use CoroutineScope for lifecycle management.',
    examples: [
      {
        title: 'Basic Coroutine',
        code: `import kotlinx.coroutines.*
fun main() = runBlocking {
  launch {
    delay(1000)
    println("Hello from coroutine!")
  }
  println("Hello from main!")
}`,
        output: 'Hello from main!\nHello from coroutine!'
      },
      {
        title: 'Suspend Functions',
        code: `import kotlinx.coroutines.*
suspend fun fetchData(): String {
  delay(100)
  return "Data loaded"
}
fun main() = runBlocking {
  val data = fetchData()
  println(data)
}`,
        output: 'Data loaded'
      },
      {
        title: 'Concurrent Coroutines',
        code: `import kotlinx.coroutines.*
suspend fun task(name: String, delayMs: Long): String {
  delay(delayMs)
  return "$name done"
}
fun main() = runBlocking {
  val job1 = async { task("Task1", 300) }
  val job2 = async { task("Task2", 100) }
  println(job1.await())
  println(job2.await())
}`,
        output: 'Task1 done\nTask2 done'
      },
      {
        title: 'Coroutine Scope',
        code: `import kotlinx.coroutines.*
fun main() = runBlocking {
  val scope = CoroutineScope(Dispatchers.Default)
  val job = scope.launch {
    repeat(3) { i ->
      println("Coroutine $i")
      delay(100)
    }
  }
  delay(250)
  job.cancel()
  println("Cancelled")
}`,
        output: 'Coroutine 0\nCoroutine 1\nCoroutine 2\nCancelled'
      }
    ],
    keyPoints: [
      'suspend keyword marks functions that can pause execution',
      'launch creates a fire-and-forget coroutine',
      'async creates a coroutine that returns a result',
      'runBlocking bridges blocking and coroutine worlds',
      'withContext switches between dispatchers'
    ],
    commonMistakes: [
      'Using runBlocking outside of test code',
      'Not handling cancellation properly in long-running coroutines',
      'Calling suspend functions from non-suspend contexts',
      'Forgetting that coroutines are not threads',
      'Not using structured concurrency for lifecycle management'
    ],
    proTips: [
      'Use Flow for asynchronous data streams',
      'Use withContext(Dispatchers.IO) for blocking operations',
      'Use SupervisorJob to prevent parent cancellation',
      'Use coroutineScope{} for structured concurrency',
      'Always handle exceptions in coroutines with try-catch or CoroutineExceptionHandler'
    ]
  },

  generics: {
    definition: 'Generics allow classes, functions, and interfaces to work with type parameters. They provide type safety and code reusability across different types.',
    whyUse: 'Generics enable writing type-safe, reusable code. They catch type errors at compile time and eliminate the need for explicit casting.',
    whereUse: 'Collections, utility classes, data structures, DAOs, service layers, and any code that works with multiple types while maintaining type safety.',
    syntax: null,
    explanation: 'Use <T> to declare type parameters. Use in/out for variance (covariance/contravariance). Type constraints use : (colon). Reified types preserve generic information at runtime with inline functions.',
    examples: [
      {
        title: 'Generic Class',
        code: `class Box<T>(val value: T) {
  fun get(): T = value
}
fun main() {
  val intBox = Box(10)
  val stringBox = Box("Hello")
  println("Int: \${intBox.get()}")
  println("String: \${stringBox.get()}")
}`,
        output: 'Int: 10\nString: Hello'
      },
      {
        title: 'Generic Function',
        code: `fun <T> first(list: List<T>): T = list.first()
fun main() {
  val nums = listOf(1, 2, 3)
  val words = listOf("A", "B", "C")
  println("First num: \${first(nums)}")
  println("First word: \${first(words)}")
}`,
        output: 'First num: 1\nFirst word: A'
      },
      {
        title: 'Type Constraints',
        code: `fun <T : Comparable<T>> sort(list: List<T>): List<T> {
  return list.sorted()
}
fun main() {
  val nums = listOf(3, 1, 4, 1, 5)
  val words = listOf("banana", "apple", "cherry")
  println("Sorted nums: \${sort(nums)}")
  println("Sorted words: \${sort(words)}")
}`,
        output: 'Sorted nums: [1, 1, 3, 4, 5]\nSorted words: [apple, banana, cherry]'
      },
      {
        title: 'Variance with in/out',
        code: `interface Source<out T> {
  fun get(): T
}
interface Sink<in T> {
  fun put(item: T)
}
fun main() {
  val strings: Source<String> = object : Source<String> {
    override fun get() = "Hello"
  }
  val anys: Source<Any> = strings
  println(anys.get())
}`,
        output: 'Hello'
      }
    ],
    keyPoints: [
      '<T> declares type parameters',
      'out T (covariant) — produces values of type T',
      'in T (contravariant) — consumes values of type T',
      'T : Constraint limits types to subtypes of constraint',
      'reified preserves type info at runtime with inline'
    ],
    commonMistakes: [
      'Confusing in (contravariance) with out (covariance)',
      'Using reified without inline keyword',
      'Trying to use generic types with primitive types directly',
      'Not understanding type erasure at runtime',
      'Overcomplicating with too many type parameters'
    ],
    proTips: [
      'Use reified for runtime type checking with inline functions',
      'Use star projection (*) for unknown types',
      'Keep generic types simple — avoid nested generics',
      'Use variance annotations to make APIs more flexible',
      'Consider using type aliases for complex generic types'
    ]
  },

  android: {
    definition: 'Kotlin is the official language for Android development. It integrates seamlessly with Android Studio and provides modern features for building robust mobile apps.',
    whyUse: 'Kotlin reduces Android boilerplate, provides null safety, supports coroutines for async operations, and has excellent Android framework integration.',
    whereUse: 'Building Android mobile applications, including UI development, data handling, network calls, and background processing.',
    syntax: null,
    explanation: 'Android Studio includes full Kotlin support. Use Kotlin for Activities, Fragments, ViewModels, and all Android components. Coroutines handle async operations. Android KTX provides Kotlin-specific extensions for Android APIs.',
    examples: [
      {
        title: 'Android Activity',
        code: `class MainActivity : AppCompatActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    val textView = findViewById<TextView>(R.id.textView)
    textView.text = "Hello from Kotlin!"
  }
}`,
        output: 'Activity displays "Hello from Kotlin!"'
      },
      {
        title: 'ViewModel with LiveData',
        code: `class CounterViewModel : ViewModel() {
  private val _count = MutableLiveData(0)
  val count: LiveData<Int> = _count
  fun increment() {
    _count.value = (_count.value ?: 0) + 1
  }
}`,
        output: 'ViewModel manages counter state'
      },
      {
        title: 'Coroutines in Android',
        code: `viewModelScope.launch {
  val data = withContext(Dispatchers.IO) {
    repository.fetchData()
  }
  _uiState.value = UiState.Success(data)
}`,
        output: 'Async data loading with coroutines'
      }
    ],
    keyPoints: [
      'Kotlin is the official Android development language',
      'Android Studio provides full Kotlin support',
      'Coroutines simplify async operations on Android',
      'Android KTX provides Kotlin-friendly Android extensions',
      'ViewModel + LiveData for reactive UI updates'
    ],
    commonMistakes: [
      'Using GlobalScope instead of structured concurrency',
      'Not using viewModelScope for ViewModel coroutines',
      'Forgetting to handle configuration changes',
      'Using findViewById instead of View Binding',
      'Not using sealed classes for UI state'
    ],
    proTips: [
      'Use Jetpack Compose for modern declarative UI',
      'Use View Binding instead of findViewById',
      'Use Room with Kotlin for database operations',
      'Use Navigation Component for app navigation',
      'Use WorkManager for background tasks'
    ]
  },

  when: {
    definition: 'The when expression is Kotlin\'s replacement for switch statements. It is more powerful, supporting any type, ranges, type checks, and complex conditions.',
    whyUse: 'when provides concise, readable conditional logic. It can match values, types, ranges, and custom conditions. It can be used as an expression to return values.',
    whereUse: 'Replacing switch statements, pattern matching, type checking, state machines, and implementing complex conditional logic.',
    syntax: null,
    explanation: 'when can be used as a statement or expression. It supports value matching, type checking (is), range matching (in), and arbitrary conditions. Exhaustive when on sealed classes eliminates else.',
    examples: [
      {
        title: 'Basic Value Matching',
        code: `fun main() {
  val day = "Friday"
  when (day) {
    "Monday" -> println("Start of week")
    "Friday" -> println("TGIF!")
    "Sunday" -> println("Rest day")
    else -> println("Regular day")
  }
}`,
        output: 'TGIF!'
      },
      {
        title: 'When as Expression',
        code: `fun main() {
  val num = 42
  val description = when {
    num < 0 -> "Negative"
    num == 0 -> "Zero"
    num % 2 == 0 -> "Even positive"
    else -> "Odd positive"
  }
  println("$num is $description")
}`,
        output: '42 is Even positive'
      },
      {
        title: 'When with Type Checks',
        code: `fun describe(x: Any): String = when (x) {
  is Int -> "Integer: $x"
  is String -> "String of length \${x.length}"
  is Double -> "Double: $x"
  is List<*> -> "List of size \${x.size}"
  else -> "Unknown type"
}
fun main() {
  println(describe(42))
  println(describe("Hello"))
  println(describe(3.14))
  println(describe(listOf(1, 2)))
}`,
        output: 'Integer: 42\nString of length 5\nDouble: 3.14\nList of size 2'
      },
      {
        title: 'When with Ranges and Collections',
        code: `fun main() {
  val score = 85
  val grade = when (score) {
    in 90..100 -> "A"
    in 80 until 90 -> "B"
    in 70 until 80 -> "C"
    in 60 until 70 -> "D"
    else -> "F"
  }
  println("Score $score: Grade $grade")
  val char = 'E'
  val type = when (char) {
    in 'A'..'Z' -> "Uppercase"
    in 'a'..'z' -> "Lowercase"
    in '0'..'9' -> "Digit"
    else -> "Special"
  }
  println("$char is $type")
}`,
        output: 'Score 85: Grade B\nE is Uppercase'
      },
      {
        title: 'When with Multiple Arguments',
        code: `fun main() {
  val x = 5
  val y = 10
  when (Pair(x, y)) {
    Pair(0, 0) -> println("Origin")
    Pair(5, 10) -> println("Found it!")
    else -> println("Somewhere else")
  }
  val color = "blue"
  when (color) {
    "red", "green", "blue" -> println("Primary color")
    "orange", "purple" -> println("Secondary color")
    else -> println("Other color")
  }
}`,
        output: 'Found it!\nPrimary color'
      }
    ],
    keyPoints: [
      'when replaces switch — more powerful and flexible',
      'Can be used as expression (returns value) or statement',
      'Supports value matching, type checks (is), ranges (in)',
      'else acts as default/catch-all branch',
      'Exhaustive when on sealed classes eliminates else'
    ],
    commonMistakes: [
      'Forgetting else branch when not exhaustive',
      'Using == instead of is for type checking',
      'Not using when as expression when it would simplify code',
      'Missing break-like behavior (when does not fall through)',
      'Over-complicating conditions that could use simple if-else'
    ],
    proTips: [
      'Use when as expression for cleaner code',
      'Group related values with commas',
      'Use is for smart casting after type checks',
      'Use in for range-based matching',
      'Use when with sealed classes for exhaustive matching'
    ]
  }
}

export default kotlin
