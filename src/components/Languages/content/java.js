const java = {
  intro: {
    definition: "Java is a high-level, object-oriented programming language that runs on the JVM. It follows the principle of Write Once, Run Anywhere.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Java programs are organized into classes. The main method is the entry point of every application. Code uses curly braces to define blocks and semicolons to end statements.",
    examples: [
      {
        title: "Your First Java Program",
        code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
        output: "Hello, World!"
      },
      {
        title: "Variables and Data Types",
        code: `public class Main {
  public static void main(String[] args) {
    String name = "Java";
    int version = 21;
    double pi = 3.14159;
    boolean isFun = true;
    System.out.println(name + " version " + version);
    System.out.println("Pi = " + pi);
    System.out.println("Is fun: " + isFun);
  }
}`,
        output: "Java version 21\nPi = 3.14159\nIs fun: true"
      },
      {
        title: "Basic Arithmetic",
        code: `public class Main {
  public static void main(String[] args) {
    int a = 15;
    int b = 4;
    System.out.println("Add: " + (a + b));
    System.out.println("Sub: " + (a - b));
    System.out.println("Mul: " + (a * b));
    System.out.println("Div: " + (a / b));
    System.out.println("Mod: " + (a % b));
  }
}`,
        output: "Add: 19\nSub: 11\nMul: 60\nDiv: 3\nMod: 3"
      }
    ],
    keyPoints: [
      "Everything revolves around classes and objects.",
      "Every variable must have a declared type.",
      "Compiled to bytecode, then run by the JVM."
    ],
    commonMistakes: [
      "Confusing = (assignment) with == (comparison).",
      "Integer division truncates decimal results."
    ],
    proTips: [
      "Use the final keyword for constants.",
      "Use StringBuilder for concatenation in loops."
    ]
  },

  setup: {
    definition: "Setting up Java involves installing the Java Development Kit (JDK) and configuring your environment for development.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Download and install the JDK from Oracle or use OpenJDK. Set the JAVA_HOME environment variable and add the bin directory to your PATH. Use javac to compile and java to execute.",
    examples: [
      {
        title: "Compile and Run",
        code: `// Save as Main.java
public class Main {
  public static void main(String[] args) {
    System.out.println("Java is ready!");
  }
}`,
        output: "Java is ready!"
      },
      {
        title: "Check Java Version",
        code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Java Version: " + System.getProperty("java.version"));
    System.out.println("Java Home: " + System.getProperty("java.home"));
  }
}`,
        output: "Java Version: 21.0.x\nJava Home: /usr/lib/jvm/java-21"
      },
      {
        title: "Using Command Line Arguments",
        code: `public class Main {
  public static void main(String[] args) {
    System.out.println("Arguments passed: " + args.length);
    for (String arg : args) {
      System.out.println("  - " + arg);
    }
  }
}`,
        output: "Arguments passed: 3\n  - hello\n  - world\n  - java"
      }
    ],
    keyPoints: [
      "The JDK contains the compiler and runtime needed for Java development.",
      "Use javac filename.java to compile, java ClassName to run."
    ],
    commonMistakes: [
      "Forgetting to add the JDK bin directory to PATH.",
      "Running java on a .java file instead of compiling first."
    ],
    proTips: [
      "Use jshell for quick Java experiments without creating files.",
      "Use sdkman or jenv to manage multiple Java versions."
    ]
  },

  variables: {
    definition: "Variables are named storage locations that hold data. In Java, every variable has a specific type that determines what it can store.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Java has primitive types (int, double, boolean, char) and reference types (String, arrays). Variables must be declared with a type before use. Local variables require initialization before first use.",
    examples: [
      {
        title: "Primitive Data Types",
        code: `public class Main {
  public static void main(String[] args) {
    byte b = 127;
    short s = 32000;
    int i = 2000000000;
    long l = 9000000000L;
    float f = 3.14f;
    double d = 3.141592653589793;
    char c = 'A';
    boolean flag = true;
    System.out.println("byte: " + b);
    System.out.println("int: " + i);
    System.out.println("double: " + d);
    System.out.println("char: " + c);
    System.out.println("boolean: " + flag);
  }
}`,
        output: "byte: 127\nint: 2000000000\ndouble: 3.141592653589793\nchar: A\nboolean: true"
      },
      {
        title: "Type Casting",
        code: `public class Main {
  public static void main(String[] args) {
    double pi = 3.14;
    int truncated = (int) pi;
    int largeNum = 130;
    byte smallNum = (byte) largeNum;
    System.out.println("Double to int: " + truncated);
    System.out.println("int 130 to byte: " + smallNum);
  }
}`,
        output: "Double to int: 3\nint 130 to byte: -126"
      },
      {
        title: "Constants with final",
        code: `public class Main {
  public static void main(String[] args) {
    final double TAX_RATE = 0.08;
    final String COUNTRY = "Indonesia";
    double price = 100000.0;
    double tax = price * TAX_RATE;
    System.out.println(COUNTRY);
    System.out.println("Tax: " + tax);
  }
}`,
        output: "Indonesia\nTax: 8000.0"
      },
      {
        title: "Variable Scope",
        code: `public class Main {
  static int classVar = 10;
  public static void main(String[] args) {
    int localVar = 20;
    if (true) {
      int blockVar = 30;
      System.out.println("Class: " + classVar);
      System.out.println("Local: " + localVar);
      System.out.println("Block: " + blockVar);
    }
    System.out.println("Class: " + classVar);
    System.out.println("Local: " + localVar);
  }
}`,
        output: "Class: 10\nLocal: 20\nBlock: 30\nClass: 10\nLocal: 20"
      }
    ],
    keyPoints: [
      "int for whole numbers, double for decimals, boolean for true/false.",
      "Local variables must be initialized before use."
    ],
    commonMistakes: [
      "Integer overflow when exceeding type range.",
      "Forgetting L suffix for long literals."
    ],
    proTips: [
      "Use var for local variable type inference (Java 10+).",
      "Use BigDecimal for precise financial calculations."
    ]
  },

  strings: {
    definition: "Strings in Java are objects that represent sequences of characters. They are immutable — once created, their content cannot change.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Strings are created using double quotes. Since they are immutable, concatenation creates new String objects. Use StringBuilder for frequent modifications. String literals are stored in a string pool for efficiency.",
    examples: [
      {
        title: "Creating and Comparing Strings",
        code: `public class Main {
  public static void main(String[] args) {
    String s1 = "Hello";
    String s2 = "Hello";
    String s3 = new String("Hello");
    System.out.println("s1 == s2: " + (s1 == s2));
    System.out.println("s1 == s3: " + (s1 == s3));
    System.out.println("s1.equals(s3): " + s1.equals(s3));
    System.out.println("Length: " + s1.length());
  }
}`,
        output: "s1 == s2: true\ns1 == s3: false\ns1.equals(s3): true\nLength: 5"
      },
      {
        title: "String Methods",
        code: `public class Main {
  public static void main(String[] args) {
    String text = "Hello, World!";
    System.out.println("Upper: " + text.toUpperCase());
    System.out.println("Lower: " + text.toLowerCase());
    System.out.println("Index: " + text.indexOf("World"));
    System.out.println("Replace: " + text.replace("World", "Java"));
    System.out.println("Contains: " + text.contains("World"));
  }
}`,
        output: "Upper: HELLO, WORLD!\nLower: hello, world!\nIndex: 7\nReplace: Hello, Java!\nContains: true"
      },
      {
        title: "StringBuilder for Mutable Strings",
        code: `public class Main {
  public static void main(String[] args) {
    StringBuilder sb = new StringBuilder("Hello");
    sb.append(" World");
    sb.insert(5, ",");
    sb.replace(7, 12, "Java");
    System.out.println(sb.toString());
    System.out.println("Reverse: " + new StringBuilder("racecar").reverse());
  }
}`,
        output: "Hello, Java\nReverse: racecar"
      },
      {
        title: "String Formatting",
        code: `public class Main {
  public static void main(String[] args) {
    String name = "Arinfotek";
    int students = 500;
    double rating = 4.8;
    System.out.printf("Welcome to %s!%n", name);
    System.out.printf("Students: %d%n", students);
    System.out.printf("Rating: %.1f/5.0%n", rating);
  }
}`,
        output: "Welcome to Arinfotek!\nStudents: 500\nRating: 4.8/5.0"
      },
      {
        title: "String Splitting and Joining",
        code: `public class Main {
  public static void main(String[] args) {
    String csv = "Java,Python,JavaScript,Kotlin";
    String[] langs = csv.split(",");
    for (String lang : langs) {
      System.out.println("Language: " + lang);
    }
    String joined = String.join(" | ", langs);
    System.out.println("Joined: " + joined);
  }
}`,
        output: "Language: Java\nLanguage: Python\nLanguage: JavaScript\nLanguage: Kotlin\nJoined: Java | Python | JavaScript | Kotlin"
      }
    ],
    keyPoints: [
      "Every String operation returns a new String object.",
      "Use == for reference comparison, .equals() for value comparison."
    ],
    commonMistakes: [
      "Comparing strings with == instead of .equals().",
      "Concatenating in loops without StringBuilder causes performance issues."
    ],
    proTips: [
      "Use String.join() instead of manual concatenation with separators.",
      "Use text blocks (\"\"\" syntax) for multi-line strings (Java 13+)."
    ]
  },

  operators: {
    definition: "Operators are symbols that perform operations on variables and values. Java provides arithmetic, relational, logical, and more.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Arithmetic operators (+, -, *, /, %) do math. Relational operators (==, !=, <, >) compare values. Logical operators (&&, ||, !) combine boolean expressions.",
    examples: [
      {
        title: "Arithmetic Operators",
        code: `public class Main {
  public static void main(String[] args) {
    int a = 10, b = 3;
    System.out.println(a + " + " + b + " = " + (a + b));
    System.out.println(a + " - " + b + " = " + (a - b));
    System.out.println(a + " * " + b + " = " + (a * b));
    System.out.println(a + " / " + b + " = " + (a / b));
    System.out.println(a + " % " + b + " = " + (a % b));
  }
}`,
        output: "10 + 3 = 13\n10 - 3 = 7\n10 * 3 = 30\n10 / 3 = 3\n10 % 3 = 1"
      },
      {
        title: "Relational and Logical Operators",
        code: `public class Main {
  public static void main(String[] args) {
    int x = 15;
    System.out.println("x > 10: " + (x > 10));
    System.out.println("x == 15: " + (x == 15));
    boolean a = true, b = false;
    System.out.println("a && b: " + (a && b));
    System.out.println("a || b: " + (a || b));
    System.out.println("!b: " + (!b));
  }
}`,
        output: "x > 10: true\nx == 15: true\na && b: false\na || b: true\n!b: true"
      },
      {
        title: "Bitwise Operators",
        code: `public class Main {
  public static void main(String[] args) {
    int a = 12, b = 10;
    System.out.println("a & b: " + (a & b));
    System.out.println("a | b: " + (a | b));
    System.out.println("a ^ b: " + (a ^ b));
    System.out.println("a << 2: " + (a << 2));
    System.out.println("a >> 1: " + (a >> 1));
  }
}`,
        output: "a & b: 8\na | b: 14\na ^ b: 6\na << 2: 48\na >> 1: 6"
      },
      {
        title: "Ternary and Assignment Operators",
        code: `public class Main {
  public static void main(String[] args) {
    int age = 20;
    String status = (age >= 18) ? "Adult" : "Minor";
    System.out.println("Status: " + status);
    int x = 10;
    x += 5;
    x *= 2;
    System.out.println("x: " + x);
  }
}`,
        output: "Status: Adult\nx: 30"
      }
    ],
    keyPoints: [
      "Arithmetic: + - * / % (modulus).",
      "Logical: && || ! (short-circuit evaluation)."
    ],
    commonMistakes: [
      "Confusing = (assignment) with == (comparison).",
      "Integer division truncating decimal results."
    ],
    proTips: [
      "Use parentheses to clarify complex expressions.",
      "Use compound assignment operators (+=, -=) for cleaner code."
    ]
  },

  conditionals: {
    definition: "Conditional statements let your program make decisions by executing different code based on conditions.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Java provides if-else, if-else if-else chains, and switch statements. Conditions must evaluate to boolean. Braces are optional for single statements but recommended.",
    examples: [
      {
        title: "If-Else Statement",
        code: `public class Main {
  public static void main(String[] args) {
    int score = 85;
    if (score >= 90) {
      System.out.println("Grade: A");
    } else if (score >= 80) {
      System.out.println("Grade: B");
    } else if (score >= 70) {
      System.out.println("Grade: C");
    } else {
      System.out.println("Grade: F");
    }
  }
}`,
        output: "Grade: B"
      },
      {
        title: "Switch Statement",
        code: `public class Main {
  public static void main(String[] args) {
    String day = "Wednesday";
    switch (day) {
      case "Monday":
        System.out.println("Start of week");
        break;
      case "Wednesday":
        System.out.println("Midweek");
        break;
      case "Friday":
        System.out.println("Almost weekend");
        break;
      default:
        System.out.println("Regular day");
    }
  }
}`,
        output: "Midweek"
      },
      {
        title: "Switch Expression (Java 14+)",
        code: `public class Main {
  public static void main(String[] args) {
    int numLetters = switch ("Hello") {
      case "Hello" -> 5;
      case "World" -> 5;
      case "Java" -> 4;
      default -> 0;
    };
    System.out.println("Letters: " + numLetters);
  }
}`,
        output: "Letters: 5"
      },
      {
        title: "Ternary Operator",
        code: `public class Main {
  public static void main(String[] args) {
    int temperature = 35;
    String weather = (temperature > 30) ? "Hot" : "Mild";
    System.out.println("Weather: " + weather);
  }
}`,
        output: "Weather: Hot"
      }
    ],
    keyPoints: [
      "if-else handles binary and multi-way decisions.",
      "switch is great for discrete value matching."
    ],
    commonMistakes: [
      "Missing break statements in switch causing fall-through.",
      "Deeply nesting conditions making code unreadable."
    ],
    proTips: [
      "Use switch expressions for cleaner, safer code (Java 14+).",
      "Extract complex conditions into descriptive boolean variables."
    ]
  },

  loops: {
    definition: "Loops allow repetitive execution of code blocks. Java provides for, while, do-while, and enhanced for loops.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "The for loop is best when iteration count is known. The while loop checks a condition before each iteration. The enhanced for loop iterates cleanly over arrays and collections.",
    examples: [
      {
        title: "Basic For Loop",
        code: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      System.out.println("Count: " + i);
    }
  }
}`,
        output: "Count: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5"
      },
      {
        title: "While Loop",
        code: `public class Main {
  public static void main(String[] args) {
    int count = 5;
    while (count > 0) {
      System.out.println("Countdown: " + count);
      count--;
    }
    System.out.println("Done!");
  }
}`,
        output: "Countdown: 5\nCountdown: 4\nCountdown: 3\nCountdown: 2\nCountdown: 1\nDone!"
      },
      {
        title: "Enhanced For Loop",
        code: `public class Main {
  public static void main(String[] args) {
    String[] fruits = {"Apple", "Banana", "Cherry"};
    for (String fruit : fruits) {
      System.out.println("Fruit: " + fruit);
    }
  }
}`,
        output: "Fruit: Apple\nFruit: Banana\nFruit: Cherry"
      },
      {
        title: "Break and Continue",
        code: `public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 10; i++) {
      if (i == 3) continue;
      if (i == 7) break;
      System.out.print(i + " ");
    }
  }
}`,
        output: "1 2 4 5 6"
      }
    ],
    keyPoints: [
      "for loop: best when iteration count is known.",
      "break exits the loop, continue skips to the next iteration."
    ],
    commonMistakes: [
      "Infinite loops from missing update or wrong condition.",
      "Off-by-one errors in loop boundaries."
    ],
    proTips: [
      "Use labeled break/continue for nested loops.",
      "Consider Stream API as a modern alternative to loops."
    ]
  },

  arrays: {
    definition: "Arrays are data structures that store fixed-size collections of elements of the same type. They provide indexed access to elements.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Arrays are declared with type[] and initialized with new type[size] or array literals. Arrays are zero-indexed. Use the Arrays utility class for common operations like sort and search.",
    examples: [
      {
        title: "Array Declaration and Initialization",
        code: `public class Main {
  public static void main(String[] args) {
    int[] numbers = new int[5];
    numbers[0] = 10;
    numbers[1] = 20;
    String[] names = {"Alice", "Bob", "Charlie"};
    System.out.println("First number: " + numbers[0]);
    System.out.println("First name: " + names[0]);
    System.out.println("Names length: " + names.length);
  }
}`,
        output: "First number: 10\nFirst name: Alice\nNames length: 3"
      },
      {
        title: "Iterating Arrays",
        code: `public class Main {
  public static void main(String[] args) {
    int[] nums = {1, 2, 3, 4, 5};
    System.out.println("For loop:");
    for (int i = 0; i < nums.length; i++) {
      System.out.print(nums[i] + " ");
    }
    System.out.println("\nFor-each:");
    for (int n : nums) {
      System.out.print(n + " ");
    }
  }
}`,
        output: "For loop:\n1 2 3 4 5\nFor-each:\n1 2 3 4 5"
      },
      {
        title: "Array Utility Methods",
        code: `import java.util.Arrays;
public class Main {
  public static void main(String[] args) {
    int[] arr = {5, 2, 8, 1, 9};
    System.out.println("Original: " + Arrays.toString(arr));
    Arrays.sort(arr);
    System.out.println("Sorted: " + Arrays.toString(arr));
    int idx = Arrays.binarySearch(arr, 8);
    System.out.println("Index of 8: " + idx);
  }
}`,
        output: "Original: [5, 2, 8, 1, 9]\nSorted: [1, 2, 5, 8, 9]\nIndex of 8: 3"
      },
      {
        title: "Multi-dimensional Arrays",
        code: `public class Main {
  public static void main(String[] args) {
    int[][] matrix = {
      {1, 2, 3},
      {4, 5, 6},
      {7, 8, 9}
    };
    for (int[] row : matrix) {
      for (int val : row) {
        System.out.print(val + " ");
      }
      System.out.println();
    }
  }
}`,
        output: "1 2 3\n4 5 6\n7 8 9"
      }
    ],
    keyPoints: [
      "Arrays are fixed-size — you cannot add or remove elements.",
      "Zero-indexed: first element is at index 0."
    ],
    commonMistakes: [
      "ArrayIndexOutOfBoundsException from invalid index access.",
      "Trying to resize a fixed-size array."
    ],
    proTips: [
      "Use ArrayList for dynamic-size collections.",
      "Use Arrays.copyOf() to resize arrays efficiently."
    ]
  },

  methods: {
    definition: "Methods are reusable blocks of code that perform specific tasks. They can accept parameters and return values.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Methods are defined with a return type, name, parameters, and body. Use void for no return value. Static methods belong to the class. Use return to send back values.",
    examples: [
      {
        title: "Basic Method",
        code: `public class Main {
  static int add(int a, int b) {
    return a + b;
  }
  public static void main(String[] args) {
    int result = add(10, 20);
    System.out.println("Sum: " + result);
    System.out.println("Sum: " + add(5, 3));
  }
}`,
        output: "Sum: 30\nSum: 8"
      },
      {
        title: "Method Overloading",
        code: `public class Main {
  static int add(int a, int b) {
    return a + b;
  }
  static double add(double a, double b) {
    return a + b;
  }
  static String add(String a, String b) {
    return a + b;
  }
  public static void main(String[] args) {
    System.out.println(add(5, 3));
    System.out.println(add(2.5, 3.5));
    System.out.println(add("Hello ", "World"));
  }
}`,
        output: "8\n6.0\nHello World"
      },
      {
        title: "Varargs Method",
        code: `public class Main {
  static int sum(int... numbers) {
    int total = 0;
    for (int n : numbers) {
      total += n;
    }
    return total;
  }
  public static void main(String[] args) {
    System.out.println("Sum: " + sum(1, 2, 3));
    System.out.println("Sum: " + sum(10, 20, 30, 40));
  }
}`,
        output: "Sum: 6\nSum: 100"
      },
      {
        title: "Recursive Method",
        code: `public class Main {
  static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }
  public static void main(String[] args) {
    System.out.println("5! = " + factorial(5));
  }
}`,
        output: "5! = 120"
      }
    ],
    keyPoints: [
      "Methods must declare a return type (void if none).",
      "Overloading means same name, different parameter lists."
    ],
    commonMistakes: [
      "Stack overflow from infinite recursion.",
      "Not returning a value when required."
    ],
    proTips: [
      "Keep methods short and focused on one task.",
      "Use descriptive names that explain what the method does."
    ]
  },

  classes: {
    definition: "Classes are blueprints for creating objects. They define properties (fields) and behaviors (methods).",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "A class is defined with the class keyword. Constructors initialize new objects. Access modifiers (public, private) control visibility. Use this to refer to the current instance.",
    examples: [
      {
        title: "Basic Class Definition",
        code: `public class Main {
  public static void main(String[] args) {
    Person p = new Person("Alice", 25);
    p.greet();
    System.out.println("Name: " + p.getName());
  }
}
class Person {
  private String name;
  private int age;
  Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
  void greet() {
    System.out.println("Hi, I am " + name);
  }
  String getName() {
    return name;
  }
}`,
        output: "Hi, I am Alice\nName: Alice"
      },
      {
        title: "Getters and Setters",
        code: `public class Main {
  public static void main(String[] args) {
    BankAccount acc = new BankAccount("John", 1000);
    acc.setBalance(2000);
    System.out.println("Balance: " + acc.getBalance());
    acc.deposit(500);
    System.out.println("After deposit: " + acc.getBalance());
  }
}
class BankAccount {
  private String owner;
  private double balance;
  BankAccount(String owner, double balance) {
    this.owner = owner;
    this.balance = balance;
  }
  double getBalance() { return balance; }
  void setBalance(double balance) {
    if (balance >= 0) this.balance = balance;
  }
  void deposit(double amount) { balance += amount; }
}`,
        output: "Balance: 2000.0\nAfter deposit: 2500.0"
      },
      {
        title: "toString Method",
        code: `public class Main {
  public static void main(String[] args) {
    Student s = new Student("Budi", 3.8);
    System.out.println(s);
  }
}
class Student {
  private String name;
  private double gpa;
  Student(String name, double gpa) {
    this.name = name;
    this.gpa = gpa;
  }
  @Override
  public String toString() {
    return "Student{name='" + name + "', gpa=" + gpa + "}";
  }
}`,
        output: "Student{name='Budi', gpa=3.8}"
      }
    ],
    keyPoints: [
      "Classes are blueprints; objects are instances of classes.",
      "Use private fields with public getters/setters for encapsulation."
    ],
    commonMistakes: [
      "Accessing private members directly from outside the class.",
      "Not overriding equals() and hashCode() when needed."
    ],
    proTips: [
      "Use records (Java 14+) for simple data classes.",
      "Make fields private and provide controlled access."
    ]
  },

  inheritance: {
    definition: "Inheritance allows a class to inherit fields and methods from another class. It promotes code reuse and builds hierarchical relationships.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use the extends keyword to inherit. A class can only extend one class. The subclass inherits all non-private members. Use super to call the parent constructor. Override to modify inherited behavior.",
    examples: [
      {
        title: "Basic Inheritance",
        code: `public class Main {
  public static void main(String[] args) {
    Dog dog = new Dog("Buddy", "Golden Retriever");
    dog.eat();
    dog.bark();
  }
}
class Animal {
  String name;
  Animal(String name) { this.name = name; }
  void eat() { System.out.println(name + " is eating"); }
}
class Dog extends Animal {
  String breed;
  Dog(String name, String breed) {
    super(name);
    this.breed = breed;
  }
  void bark() { System.out.println(name + " says Woof!"); }
}`,
        output: "Buddy is eating\nBuddy says Woof!"
      },
      {
        title: "Method Overriding",
        code: `public class Main {
  public static void main(String[] args) {
    Animal a = new Animal("Generic");
    Dog d = new Dog("Rex", "German Shepherd");
    a.makeSound();
    d.makeSound();
  }
}
class Animal {
  void makeSound() { System.out.println("Some sound"); }
}
class Dog extends Animal {
  @Override
  void makeSound() { System.out.println("Woof!"); }
}`,
        output: "Some sound\nWoof!"
      },
      {
        title: "Multi-level Inheritance",
        code: `public class Main {
  public static void main(String[] args) {
    Puppy p = new Puppy("Max");
    p.eat();
    p.bark();
    p.play();
  }
}
class Animal {
  String name;
  Animal(String name) { this.name = name; }
  void eat() { System.out.println(name + " eats"); }
}
class Dog extends Animal {
  Dog(String name) { super(name); }
  void bark() { System.out.println(name + " barks"); }
}
class Puppy extends Dog {
  Puppy(String name) { super(name); }
  void play() { System.out.println(name + " plays"); }
}`,
        output: "Max eats\nMax barks\nMax plays"
      }
    ],
    keyPoints: [
      "Java supports single inheritance only (one parent class).",
      "Use @Override annotation to catch signature mismatches."
    ],
    commonMistakes: [
      "Trying to override private or final methods.",
      "Forgetting to call super() in subclass constructor."
    ],
    proTips: [
      "Prefer composition over inheritance when possible.",
      "Use abstract classes for partial implementations."
    ]
  },

  interfaces: {
    definition: "Interfaces define a contract of methods that implementing classes must provide. They enable abstraction and loose coupling.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Interfaces contain method signatures. Classes implement interfaces using the implements keyword. A class can implement multiple interfaces. Fields are implicitly public static final.",
    examples: [
      {
        title: "Basic Interface",
        code: `public class Main {
  public static void main(String[] args) {
    Circle c = new Circle(5);
    Rectangle r = new Rectangle(4, 6);
    System.out.println("Circle area: " + c.getArea());
    System.out.println("Rectangle area: " + r.getArea());
  }
}
interface Shape {
  double getArea();
}
class Circle implements Shape {
  double radius;
  Circle(double radius) { this.radius = radius; }
  public double getArea() { return Math.PI * radius * radius; }
}
class Rectangle implements Shape {
  double width, height;
  Rectangle(double w, double h) { width = w; height = h; }
  public double getArea() { return width * height; }
}`,
        output: "Circle area: 78.53981633974483\nRectangle area: 24.0"
      },
      {
        title: "Multiple Interface Implementation",
        code: `public class Main {
  public static void main(String[] args) {
    SmartPhone phone = new SmartPhone("Android");
    phone.call();
    phone.browse();
  }
}
interface Callable { void call(); }
interface Browseable { void browse(); }
class SmartPhone implements Callable, Browseable {
  String os;
  SmartPhone(String os) { this.os = os; }
  public void call() { System.out.println("Calling on " + os); }
  public void browse() { System.out.println("Browsing on " + os); }
}`,
        output: "Calling on Android\nBrowsing on Android"
      },
      {
        title: "Default and Static Methods",
        code: `public class Main {
  public static void main(String[] args) {
    Greet greet = new EnglishGreet();
    greet.sayHello();
    greet.sayGoodbye();
    Greet.greetStatic();
  }
}
interface Greet {
  void sayHello();
  default void sayGoodbye() {
    System.out.println("Goodbye!");
  }
  static void greetStatic() {
    System.out.println("Static method in interface");
  }
}
class EnglishGreet implements Greet {
  public void sayHello() { System.out.println("Hello!"); }
}`,
        output: "Hello!\nGoodbye!\nStatic method in interface"
      }
    ],
    keyPoints: [
      "A class can implement multiple interfaces.",
      "Default methods provide optional implementation (Java 8+)."
    ],
    commonMistakes: [
      "Not implementing all abstract methods.",
      "Diamond problem with default methods from two interfaces."
    ],
    proTips: [
      "Use interfaces for defining pure contracts.",
      "Design small, focused interfaces (Interface Segregation)."
    ]
  },

  abstract: {
    definition: "Abstract classes cannot be instantiated. They may contain abstract methods (no implementation) and concrete methods (with implementation).",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use the abstract keyword. Abstract methods have no body — subclasses must implement them. Concrete methods have full implementation. Abstract classes can have constructors and fields.",
    examples: [
      {
        title: "Basic Abstract Class",
        code: `public class Main {
  public static void main(String[] args) {
    Circle c = new Circle(5);
    Rectangle r = new Rectangle(4, 6);
    c.display();
    r.display();
  }
}
abstract class Shape {
  abstract double getArea();
  void display() { System.out.println("Area: " + getArea()); }
}
class Circle extends Shape {
  double radius;
  Circle(double r) { radius = r; }
  double getArea() { return Math.PI * radius * radius; }
}
class Rectangle extends Shape {
  double w, h;
  Rectangle(double w, double h) { this.w = w; this.h = h; }
  double getArea() { return w * h; }
}`,
        output: "Area: 78.53981633974483\nArea: 24.0"
      },
      {
        title: "Template Method Pattern",
        code: `public class Main {
  public static void main(String[] args) {
    new Coffee().prepare();
    new Tea().prepare();
  }
}
abstract class Beverage {
  abstract void brew();
  abstract void addCondiments();
  final void prepare() {
    boilWater(); brew(); pourInCup(); addCondiments();
  }
  void boilWater() { System.out.println("Boiling water"); }
  void pourInCup() { System.out.println("Pouring in cup"); }
}
class Coffee extends Beverage {
  void brew() { System.out.println("Dripping coffee"); }
  void addCondiments() { System.out.println("Adding sugar"); }
}
class Tea extends Beverage {
  void brew() { System.out.println("Steeping tea bag"); }
  void addCondiments() { System.out.println("Adding lemon"); }
}`,
        output: "Boiling water\nDripping coffee\nPouring in cup\nAdding sugar\nBoiling water\nSteeping tea bag\nPouring in cup\nAdding lemon"
      }
    ],
    keyPoints: [
      "You cannot instantiate abstract classes directly.",
      "Abstract methods must be implemented by concrete subclasses."
    ],
    commonMistakes: [
      "Trying to create instances of abstract classes.",
      "Not implementing all abstract methods in subclasses."
    ],
    proTips: [
      "Use abstract classes when you need shared state or implementation.",
      "Keep abstract classes focused on one responsibility."
    ]
  },

  polymorphism: {
    definition: "Polymorphism allows objects of different types to be treated through a common interface. A single method call behaves differently based on the actual object type.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Compile-time polymorphism uses method overloading. Runtime polymorphism uses method overriding. The JVM determines which method to call at runtime based on the actual object type.",
    examples: [
      {
        title: "Runtime Polymorphism",
        code: `public class Main {
  public static void main(String[] args) {
    Animal a;
    a = new Dog();
    a.speak();
    a = new Cat();
    a.speak();
    a = new Bird();
    a.speak();
  }
}
class Animal {
  void speak() { System.out.println("Animal speaks"); }
}
class Dog extends Animal {
  void speak() { System.out.println("Dog barks"); }
}
class Cat extends Animal {
  void speak() { System.out.println("Cat meows"); }
}
class Bird extends Animal {
  void speak() { System.out.println("Bird chirps"); }
}`,
        output: "Dog barks\nCat meows\nBird chirps"
      },
      {
        title: "Compile-time Polymorphism (Overloading)",
        code: `public class Main {
  static int add(int a, int b) { return a + b; }
  static double add(double a, double b) { return a + b; }
  static String add(String a, String b) { return a + b; }
  static int add(int a, int b, int c) { return a + b + c; }
  public static void main(String[] args) {
    System.out.println(add(5, 3));
    System.out.println(add(2.5, 3.5));
    System.out.println(add("Hi ", "there"));
    System.out.println(add(1, 2, 3));
  }
}`,
        output: "8\n6.0\nHi there\n6"
      },
      {
        title: "Polymorphism with Collections",
        code: `import java.util.ArrayList;
import java.util.List;
public class Main {
  public static void main(String[] args) {
    List<Shape> shapes = new ArrayList<>();
    shapes.add(new Circle(5));
    shapes.add(new Rectangle(4, 6));
    for (Shape s : shapes) {
      System.out.println("Area: " + s.getArea());
    }
  }
}
interface Shape { double getArea(); }
class Circle implements Shape {
  double r;
  Circle(double r) { this.r = r; }
  public double getArea() { return Math.PI * r * r; }
}
class Rectangle implements Shape {
  double w, h;
  Rectangle(double w, double h) { this.w = w; this.h = h; }
  public double getArea() { return w * h; }
}`,
        output: "Area: 78.53981633974483\nArea: 24.0"
      }
    ],
    keyPoints: [
      "Runtime polymorphism uses method overriding.",
      "Reference type determines available methods, object type determines behavior."
    ],
    commonMistakes: [
      "Casting to wrong type causing ClassCastException.",
      "Confusing overloading with overriding."
    ],
    proTips: [
      "Program to interfaces for maximum flexibility.",
      "Use instanceof before casting for safe type checking."
    ]
  },

  encapsulation: {
    definition: "Encapsulation hides internal state and requires access through controlled methods. It protects data integrity and provides a clean public interface.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Declare fields as private. Provide public getter/setter methods with validation. The class controls how its data is accessed and modified. This is a core principle of OOP.",
    examples: [
      {
        title: "Private Fields with Getters/Setters",
        code: `public class Main {
  public static void main(String[] args) {
    Person p = new Person("Alice", 25);
    System.out.println(p.getName());
    p.setAge(30);
    System.out.println(p.getAge());
    p.setAge(-5);
    System.out.println("Age after invalid set: " + p.getAge());
  }
}
class Person {
  private String name;
  private int age;
  Person(String name, int age) { this.name = name; this.age = age; }
  String getName() { return name; }
  int getAge() { return age; }
  void setAge(int age) {
    if (age > 0 && age < 150) this.age = age;
  }
}`,
        output: "Alice\n30\nAge after invalid set: 30"
      },
      {
        title: "Immutable Class",
        code: `public class Main {
  public static void main(String[] args) {
    Money m = new Money(100, "IDR");
    System.out.println(m.getAmount() + " " + m.getCurrency());
  }
}
final class Money {
  private final double amount;
  private final String currency;
  Money(double amount, String currency) {
    this.amount = amount;
    this.currency = currency;
  }
  double getAmount() { return amount; }
  String getCurrency() { return currency; }
}`,
        output: "100.0 IDR"
      }
    ],
    keyPoints: [
      "Declare fields as private for controlled access.",
      "Immutable objects have no setters and final fields."
    ],
    commonMistakes: [
      "Making all fields public instead of private.",
      "Not validating input in setters."
    ],
    proTips: [
      "Use records for simple immutable data classes.",
      "Return defensive copies of internal collections."
    ]
  },

  generics: {
    definition: "Generics allow classes, interfaces, and methods to operate on type parameters. They provide compile-time type safety and eliminate explicit casting.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use <T> to declare type parameters. Classes can be generic (Box<T>), methods can be generic (<T> T method()), and wildcards handle type flexibility. Type erasure removes generics at runtime.",
    examples: [
      {
        title: "Generic Class",
        code: `public class Main {
  public static void main(String[] args) {
    Box<Integer> intBox = new Box<>(10);
    Box<String> strBox = new Box<>("Hello");
    System.out.println("Integer: " + intBox.get());
    System.out.println("String: " + strBox.get());
  }
}
class Box<T> {
  private T value;
  Box(T value) { this.value = value; }
  T get() { return value; }
  void set(T value) { this.value = value; }
}`,
        output: "Integer: 10\nString: Hello"
      },
      {
        title: "Generic Method",
        code: `public class Main {
  static <T> void printArray(T[] arr) {
    for (T item : arr) {
      System.out.print(item + " ");
    }
    System.out.println();
  }
  public static void main(String[] args) {
    Integer[] nums = {1, 2, 3};
    String[] words = {"A", "B", "C"};
    printArray(nums);
    printArray(words);
  }
}`,
        output: "1 2 3 \nA B C "
      },
      {
        title: "Bounded Type Parameters",
        code: `public class Main {
  static <T extends Number> double sum(T[] arr) {
    double total = 0;
    for (T num : arr) {
      total += num.doubleValue();
    }
    return total;
  }
  public static void main(String[] args) {
    Integer[] ints = {1, 2, 3};
    Double[] doubles = {1.5, 2.5, 3.5};
    System.out.println("Int sum: " + sum(ints));
    System.out.println("Double sum: " + sum(doubles));
  }
}`,
        output: "Int sum: 6.0\nDouble sum: 7.5"
      },
      {
        title: "Wildcard Types",
        code: `import java.util.List;
import java.util.ArrayList;
public class Main {
  static void printNumbers(List<? extends Number> list) {
    for (Number n : list) {
      System.out.print(n + " ");
    }
    System.out.println();
  }
  public static void main(String[] args) {
    List<Integer> ints = List.of(1, 2, 3);
    List<Double> doubles = List.of(1.1, 2.2, 3.3);
    printNumbers(ints);
    printNumbers(doubles);
  }
}`,
        output: "1 2 3 \n1.1 2.2 3.3 "
      }
    ],
    keyPoints: [
      "Type parameters (T, E, K, V) ensure type safety.",
      "Type erasure removes generics at runtime."
    ],
    commonMistakes: [
      "Trying to create generic arrays (not allowed in Java).",
      "Using raw types instead of parameterized types."
    ],
    proTips: [
      "Use meaningful type parameter names (T for type, E for element).",
      "Leverage PECS: Producer Extends, Consumer Super."
    ]
  },

  collections: {
    definition: "The Java Collections Framework provides interfaces and implementations for storing and manipulating groups of objects. It includes List, Set, Queue, and Map.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "List (ArrayList) for ordered sequences. Set (HashSet) for unique elements. Map (HashMap) for key-value pairs. Use interfaces for flexibility and generics for type safety.",
    examples: [
      {
        title: "ArrayList",
        code: `import java.util.ArrayList;
import java.util.List;
public class Main {
  public static void main(String[] args) {
    List<String> names = new ArrayList<>();
    names.add("Alice");
    names.add("Bob");
    names.add("Charlie");
    System.out.println("Names: " + names);
    System.out.println("Size: " + names.size());
    names.remove("Bob");
    System.out.println("After remove: " + names);
  }
}`,
        output: "Names: [Alice, Bob, Charlie]\nSize: 3\nAfter remove: [Alice, Charlie]"
      },
      {
        title: "HashMap",
        code: `import java.util.HashMap;
import java.util.Map;
public class Main {
  public static void main(String[] args) {
    Map<String, Integer> scores = new HashMap<>();
    scores.put("Alice", 95);
    scores.put("Bob", 87);
    scores.put("Charlie", 92);
    System.out.println("Scores: " + scores);
    System.out.println("Alice: " + scores.get("Alice"));
    scores.putIfAbsent("Diana", 88);
    System.out.println("After add: " + scores);
  }
}`,
        output: "Scores: {Alice=95, Bob=87, Charlie=92}\nAlice: 95\nAfter add: {Alice=95, Bob=87, Charlie=92, Diana=88}"
      },
      {
        title: "HashSet",
        code: `import java.util.HashSet;
import java.util.Set;
public class Main {
  public static void main(String[] args) {
    Set<String> colors = new HashSet<>();
    colors.add("Red");
    colors.add("Green");
    colors.add("Blue");
    colors.add("Red");
    System.out.println("Colors: " + colors);
    System.out.println("Size: " + colors.size());
  }
}`,
        output: "Colors: [Red, Green, Blue]\nSize: 3"
      },
      {
        title: "Iterating Collections",
        code: `import java.util.List;
import java.util.Map;
public class Main {
  public static void main(String[] args) {
    List<String> langs = List.of("Java", "Python", "Kotlin");
    for (String lang : langs) {
      System.out.println("Language: " + lang);
    }
    Map<String, Integer> ages = Map.of("Alice", 25, "Bob", 30);
    ages.forEach((name, age) ->
      System.out.println(name + " is " + age));
  }
}`,
        output: "Language: Java\nLanguage: Python\nLanguage: Kotlin\nAlice is 25\nBob is 30"
      }
    ],
    keyPoints: [
      "List: ordered, duplicates allowed. Set: no duplicates. Map: key-value pairs.",
      "Use interfaces (List, Set, Map) for flexibility."
    ],
    commonMistakes: [
      "ConcurrentModificationException from modifying during iteration.",
      "Not overriding equals() and hashCode() for custom objects in sets."
    ],
    proTips: [
      "Use List.of() or Map.of() for immutable collections (Java 9+).",
      "Use streams for complex collection operations."
    ]
  },

  exceptions: {
    definition: "Exceptions are events that disrupt normal program flow. Java uses try-catch-finally blocks to handle errors gracefully.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use try to wrap risky code, catch to handle exceptions, and finally for cleanup. Checked exceptions must be declared or caught. Unchecked exceptions (RuntimeException) are optional.",
    examples: [
      {
        title: "Try-Catch-Finally",
        code: `public class Main {
  public static void main(String[] args) {
    try {
      int result = 10 / 0;
      System.out.println("Result: " + result);
    } catch (ArithmeticException e) {
      System.out.println("Error: " + e.getMessage());
    } finally {
      System.out.println("Cleanup code runs always");
    }
  }
}`,
        output: "Error: / by zero\nCleanup code runs always"
      },
      {
        title: "Multiple Catch Blocks",
        code: `public class Main {
  public static void main(String[] args) {
    try {
      int[] arr = {1, 2, 3};
      System.out.println(arr[5]);
    } catch (ArrayIndexOutOfBoundsException e) {
      System.out.println("Array error: " + e.getMessage());
    } catch (NullPointerException e) {
      System.out.println("Null error: " + e.getMessage());
    }
  }
}`,
        output: "Array error: Index 5 out of bounds for length 3"
      },
      {
        title: "Throwing Exceptions",
        code: `public class Main {
  static void validateAge(int age) throws Exception {
    if (age < 0) throw new Exception("Age cannot be negative");
    if (age < 18) throw new Exception("Must be 18+");
    System.out.println("Valid age: " + age);
  }
  public static void main(String[] args) {
    try {
      validateAge(25);
      validateAge(-5);
    } catch (Exception e) {
      System.out.println("Error: " + e.getMessage());
    }
  }
}`,
        output: "Valid age: 25\nError: Age cannot be negative"
      },
      {
        title: "Custom Exceptions",
        code: `public class Main {
  public static void main(String[] args) {
    try {
      throw new InsufficientFundsException(100, 150);
    } catch (InsufficientFundsException e) {
      System.out.println(e.getMessage());
    }
  }
}
class InsufficientFundsException extends Exception {
  double balance, amount;
  InsufficientFundsException(double balance, double amount) {
    this.balance = balance;
    this.amount = amount;
  }
  public String toString() {
    return "Need " + amount + " but only have " + balance;
  }
}`,
        output: "Need 150.0 but only have 100.0"
      }
    ],
    keyPoints: [
      "Try-catch-finally for exception handling.",
      "Use finally for cleanup code that must execute."
    ],
    commonMistakes: [
      "Catching overly broad Exception type.",
      "Swallowing exceptions (empty catch blocks)."
    ],
    proTips: [
      "Use try-with-resources for AutoCloseable resources.",
      "Create specific exception types for your domain."
    ]
  },

  enums: {
    definition: "Enums are special classes that represent a fixed set of constants. They provide type safety and can have fields, methods, and implement interfaces.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Define enums with the enum keyword. Each constant is an instance. Enums can have fields and private constructors. They support switch statements and have built-in methods like values().",
    examples: [
      {
        title: "Basic Enum",
        code: `public class Main {
  enum Day {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
  }
  public static void main(String[] args) {
    Day today = Day.WEDNESDAY;
    System.out.println("Today: " + today);
    for (Day d : Day.values()) {
      System.out.println(d);
    }
  }
}`,
        output: "Today: WEDNESDAY\nMONDAY\nTUESDAY\nWEDNESDAY\nTHURSDAY\nFRIDAY\nSATURDAY\nSUNDAY"
      },
      {
        title: "Enum with Fields and Methods",
        code: `public class Main {
  enum Planet {
    MERCURY(3.303e+23, 2.4397e6),
    VENUS(4.869e+24, 6.0518e6),
    EARTH(5.976e+24, 6.37814e6);
    private final double mass;
    private final double radius;
    Planet(double mass, double radius) {
      this.mass = mass;
      this.radius = radius;
    }
    double surfaceGravity() {
      final double G = 6.67300E-11;
      return G * mass / (radius * radius);
    }
  }
  public static void main(String[] args) {
    for (Planet p : Planet.values()) {
      System.out.printf("%s gravity: %.2f%n", p, p.surfaceGravity());
    }
  }
}`,
        output: "MERCURY gravity: 3.70\nVENUS gravity: 8.87\nEARTH gravity: 9.80"
      },
      {
        title: "Enum with Switch",
        code: `public class Main {
  enum Season { SPRING, SUMMER, AUTUMN, WINTER }
  static String getSeasonActivity(Season s) {
    return switch (s) {
      case SPRING -> "Plant flowers";
      case SUMMER -> "Go swimming";
      case AUTUMN -> "Pick apples";
      case WINTER -> "Build snowman";
    };
  }
  public static void main(String[] args) {
    for (Season s : Season.values()) {
      System.out.println(s + ": " + getSeasonActivity(s));
    }
  }
}`,
        output: "SPRING: Plant flowers\nSUMMER: Go swimming\nAUTUMN: Pick apples\nWINTER: Build snowman"
      }
    ],
    keyPoints: [
      "Each enum constant is an instance of the enum type.",
      "values() returns all constants, ordinal() returns position."
    ],
    commonMistakes: [
      "Using ordinal() for persistence (can change if reordered).",
      "Not handling all cases in switch statements."
    ],
    proTips: [
      "Use EnumSet and EnumMap for efficient enum-based collections.",
      "Implement interfaces with enums for polymorphic behavior."
    ]
  },

  lambdas: {
    definition: "Lambda expressions are anonymous functions that provide a concise way to implement functional interfaces.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Lambda syntax: parameters -> expression or parameters -> { statements }. Must target a functional interface (single abstract method). Use :: for method references.",
    examples: [
      {
        title: "Basic Lambda",
        code: `import java.util.Arrays;
import java.util.List;
public class Main {
  public static void main(String[] args) {
    List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
    names.sort((a, b) -> a.compareTo(b));
    System.out.println("Sorted: " + names);
    names.forEach(name -> System.out.println("Name: " + name));
  }
}`,
        output: "Sorted: [Alice, Bob, Charlie]\nName: Alice\nName: Bob\nName: Charlie"
      },
      {
        title: "Lambda with Functional Interfaces",
        code: `public class Main {
  interface Calculator {
    int calculate(int a, int b);
  }
  static int operate(int a, int b, Calculator calc) {
    return calc.calculate(a, b);
  }
  public static void main(String[] args) {
    Calculator add = (a, b) -> a + b;
    Calculator mul = (a, b) -> a * b;
    System.out.println("Add: " + operate(5, 3, add));
    System.out.println("Mul: " + operate(5, 3, mul));
  }
}`,
        output: "Add: 8\nMul: 15"
      },
      {
        title: "Method References",
        code: `import java.util.Arrays;
import java.util.List;
public class Main {
  static void print(String s) { System.out.println(s); }
  static int length(String s) { return s.length(); }
  public static void main(String[] args) {
    List<String> words = Arrays.asList("Hello", "World");
    words.forEach(System.out::println);
    words.forEach(Main::print);
    words.stream()
      .map(Main::length)
      .forEach(System.out::println);
  }
}`,
        output: "Hello\nWorld\nHello\nWorld\n5\n5"
      }
    ],
    keyPoints: [
      "Lambda: parameters -> expression or { statements }.",
      "Method references (ClassName::methodName) are shorthand for lambdas."
    ],
    commonMistakes: [
      "Trying to use lambdas with non-functional interfaces.",
      "Over-complicating simple lambdas with unnecessary braces."
    ],
    proTips: [
      "Use :: method references for cleaner lambda expressions.",
      "Use @FunctionalInterface annotation for custom functional interfaces."
    ]
  },

  streams: {
    definition: "Streams provide a functional approach to process collections of data. They support filter, map, reduce, and collect in a declarative style.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Create streams from collections with stream(). Intermediate operations (filter, map) return new streams. Terminal operations (collect, forEach) produce results. Streams are lazy — they only run when a terminal op is invoked.",
    examples: [
      {
        title: "Filter and Map",
        code: `import java.util.List;
import java.util.stream.Collectors;
public class Main {
  public static void main(String[] args) {
    List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    List<Integer> evens = numbers.stream()
      .filter(n -> n % 2 == 0)
      .collect(Collectors.toList());
    System.out.println("Evens: " + evens);
    List<Integer> squares = numbers.stream()
      .map(n -> n * n)
      .collect(Collectors.toList());
    System.out.println("Squares: " + squares);
  }
}`,
        output: "Evens: [2, 4, 6, 8, 10]\nSquares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]"
      },
      {
        title: "Reduce and Aggregate",
        code: `import java.util.List;
public class Main {
  public static void main(String[] args) {
    List<Integer> nums = List.of(1, 2, 3, 4, 5);
    int sum = nums.stream().reduce(0, Integer::sum);
    System.out.println("Sum: " + sum);
    int max = nums.stream().reduce(Integer::max).orElse(0);
    System.out.println("Max: " + max);
    long count = nums.stream().filter(n -> n > 3).count();
    System.out.println("Count > 3: " + count);
  }
}`,
        output: "Sum: 15\nMax: 5\nCount > 3: 2"
      },
      {
        title: "Collectors",
        code: `import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
public class Main {
  public static void main(String[] args) {
    List<String> names = List.of("Alice", "Bob", "Charlie", "David");
    String joined = names.stream().collect(Collectors.joining(", "));
    System.out.println("Joined: " + joined);
    Map<Boolean, List<String>> partitioned = names.stream()
      .collect(Collectors.partitioningBy(n -> n.length() > 4));
    System.out.println("Short: " + partitioned.get(false));
    System.out.println("Long: " + partitioned.get(true));
  }
}`,
        output: "Joined: Alice, Bob, Charlie, David\nShort: [Bob]\nLong: [Alice, Charlie, David]"
      }
    ],
    keyPoints: [
      "Streams don't modify the source collection.",
      "Terminal operations trigger the pipeline execution."
    ],
    commonMistakes: [
      "Trying to reuse a stream after a terminal operation.",
      "Modifying the source collection during stream processing."
    ],
    proTips: [
      "Use method references where possible for cleaner code.",
      "Use flatMap() for flattening nested collections."
    ]
  },

  annotations: {
    definition: "Annotations are metadata tags that provide information about code. They can be used by the compiler, runtime, or tools.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Built-in annotations include @Override, @Deprecated, and @SuppressWarnings. Custom annotations are defined with @interface. Annotations can have elements and retention policies.",
    examples: [
      {
        title: "Common Built-in Annotations",
        code: `public class Main {
  @Override
  public String toString() {
    return "Main instance";
  }
  @Deprecated
  static void oldMethod() {
    System.out.println("This is deprecated");
  }
  @SuppressWarnings("unchecked")
  static void uncheckedCode() {
    java.util.List list = new java.util.ArrayList();
    list.add("item");
    String item = (String) list.get(0);
    System.out.println(item);
  }
  public static void main(String[] args) {
    System.out.println(new Main());
    oldMethod();
    uncheckedCode();
  }
}`,
        output: "Main instance\nThis is deprecated\nitem"
      },
      {
        title: "Custom Annotation",
        code: `import java.lang.annotation.*;
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface LogExecutionTime {}
public class Main {
  @LogExecutionTime
  static void fastMethod() {
    System.out.println("Method executed");
  }
  public static void main(String[] args) {
    try {
      Main.class.getMethod("fastMethod").getAnnotation(LogExecutionTime.class);
      System.out.println("Annotation found!");
      fastMethod();
    } catch (Exception e) {
      e.printStackTrace();
    }
  }
}`,
        output: "Annotation found!\nMethod executed"
      }
    ],
    keyPoints: [
      "@Override ensures a method correctly overrides the parent.",
      "Custom annotations use the @interface keyword."
    ],
    commonMistakes: [
      "Not understanding retention policies (SOURCE, CLASS, RUNTIME).",
      "Over-annotating code making it hard to read."
    ],
    proTips: [
      "Use @Override always when overriding methods.",
      "Create custom annotations for cross-cutting concerns."
    ]
  }
}

export default java