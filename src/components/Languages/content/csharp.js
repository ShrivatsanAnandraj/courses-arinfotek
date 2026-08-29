const csharp = {
  intro: {
    definition: 'C# is a modern, object-oriented, and type-safe programming language developed by Microsoft. It runs on the .NET platform and is used for building Windows applications, web apps, games (Unity), and enterprise software.',
    whyUse: 'C# combines the power of C++ with the simplicity of Visual Basic. It offers strong typing, garbage collection, LINQ, async/await patterns, and extensive framework support through .NET.',
    whereUse: 'Desktop apps (WPF, WinForms), web development (ASP.NET), game development (Unity), mobile apps (Xamarin/MAUI), cloud services (Azure), and enterprise systems.',
    syntax: null,
    explanation: 'C# uses C-style syntax with curly braces for code blocks, semicolons to end statements, and follows object-oriented principles with classes, inheritance, and interfaces.',
    examples: [
      {
        title: 'Hello World',
        code: `using System;
class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
        output: 'Hello, World!'
      },
      {
        title: 'Basic Class Definition',
        code: `using System;
class Program {
    static void Main() {
        Person person = new Person();
        person.Name = "Alice";
        Console.WriteLine($"Hello, {person.Name}!");
    }
}
class Person {
    public string Name;
}`,
        output: 'Hello, Alice!'
      },
      {
        title: 'String Interpolation',
        code: `using System;
class Program {
    static void Main() {
        string name = "Bob";
        int age = 25;
        Console.WriteLine($"Name: {name}, Age: {age}");
    }
}`,
        output: 'Name: Bob, Age: 25'
      }
    ],
    keyPoints: [
      'C# is statically typed with type inference support',
      'Uses .NET runtime for memory management and garbage collection',
      'Supports LINQ for querying collections',
      'Has built-in async/await for asynchronous programming',
      'Cross-platform through .NET Core/.NET 5+'
    ],
    commonMistakes: [
      'Confusing = (assignment) with == (comparison)',
      'Not handling null references properly',
      'Forgetting to initialize variables before use',
      'Overusing var when type is not obvious'
    ],
    proTips: [
      'Use string interpolation ($"...") instead of concatenation',
      'Prefer var when the type is obvious from the right side',
      'Use null-conditional operators (?.) for null safety',
      'Enable nullable reference types in modern C#'
    ]
  },

  setup: {
    definition: 'Setting up a C# development environment requires installing .NET SDK and choosing a code editor or IDE for development.',
    whyUse: 'A proper setup enables you to compile, run, and debug C# applications efficiently with IntelliSense support and project management.',
    whereUse: 'Visual Studio (full IDE), Visual Studio Code (lightweight), or JetBrains Rider for cross-platform development.',
    syntax: null,
    explanation: 'Install .NET SDK from Microsoft, then use either Visual Studio for full IDE experience or VS Code with C# extension for lightweight development.',
    examples: [
      {
        title: 'Install .NET SDK',
        code: `# Check installed version
dotnet --version

# Create new console project
dotnet new console -n MyApp

# Run the project
cd MyApp
dotnet run`,
        output: 'Hello, World!'
      },
      {
        title: 'Create Project with dotnet CLI',
        code: `# Create different project types
dotnet new console -n ConsoleApp
dotnet new webapi -n WebApiApp
dotnet new classlib -n ClassLibrary
dotnet new xunit -n TestProject

# List all templates
dotnet new list`,
        output: 'Template information displayed'
      },
      {
        title: 'Project File Structure',
        code: `using System;
class Program {
    static void Main(string[] args) {
        // Program entry point
        Console.WriteLine("Project is set up!");
        
        // Command line arguments
        if (args.Length > 0) {
            Console.WriteLine($"Arguments: {string.Join(", ", args)}");
        }
    }
}`,
        output: 'Project is set up!'
      }
    ],
    keyPoints: [
      'Install .NET SDK from dotnet.microsoft.com',
      'Use "dotnet new" to create projects from templates',
      'Use "dotnet run" to compile and execute',
      'VS Code requires C# extension for IntelliSense',
      'Visual Studio provides full debugging support'
    ],
    commonMistakes: [
      'Not installing the correct .NET version',
      'Forgetting to restore NuGet packages',
      'Using wrong project template for requirements',
      'Not setting up proper build configurations'
    ],
    proTips: [
      'Use global.json to pin .NET SDK version',
      'Create solution files for multi-project solutions',
      'Use NuGet package manager for dependencies',
      'Set up launch.json in VS Code for debugging'
    ]
  },

  variables: {
    definition: 'Variables in C# are named storage locations that hold data values. C# is statically typed, meaning variable types must be declared or inferred at compile time.',
    whyUse: 'Variables allow programs to store, retrieve, and manipulate data. Type safety prevents runtime errors and improves code reliability.',
    whereUse: 'Every C# program uses variables for storing values, references, and state throughout application execution.',
    syntax: 'type variableName = value;',
    explanation: 'C# supports value types (int, double, bool), reference types (string, object), and allows type inference with the var keyword.',
    examples: [
      {
        title: 'Variable Declaration',
        code: `using System;
class Program {
    static void Main() {
        int age = 30;
        double salary = 75000.50;
        string name = "Charlie";
        bool isActive = true;
        
        Console.WriteLine($"Age: {age}");
        Console.WriteLine($"Salary: {salary}");
        Console.WriteLine($"Name: {name}");
        Console.WriteLine($"Active: {isActive}");
    }
}`,
        output: 'Age: 30\nSalary: 75000.5\nName: Charlie\nActive: True'
      },
      {
        title: 'Type Inference with var',
        code: `using System;
class Program {
    static void Main() {
        var number = 42;        // int
        var text = "Hello";     // string
        var pi = 3.14159;       // double
        var flag = true;        // bool
        
        Console.WriteLine($"{number} {text} {pi} {flag}");
    }
}`,
        output: '42 Hello 3.14159 True'
      },
      {
        title: 'Constants and Read-only',
        code: `using System;
class Program {
    const double Pi = 3.14159;
    static readonly string AppName = "MyApp";
    
    static void Main() {
        Console.WriteLine($"Pi: {Pi}");
        Console.WriteLine($"App: {AppName}");
    }
}`,
        output: 'Pi: 3.14159\nApp: MyApp'
      }
    ],
    keyPoints: [
      'Use var for type inference when type is obvious',
      'const for compile-time constants, readonly for runtime constants',
      'Initialize variables before use',
      'Follow naming conventions (camelCase for locals, PascalCase for members)',
      'Use appropriate data types for memory efficiency'
    ],
    commonMistakes: [
      'Using var for unclear types',
      'Not initializing variables',
      'Mixing up const and readonly',
      'Overflowing numeric types with large values'
    ],
    proTips: [
      'Use meaningful variable names',
      'Prefer int over long for small numbers',
      'Use decimal for financial calculations',
      'Declare variables close to first use'
    ]
  },

  strings: {
    definition: 'Strings in C# are immutable sequences of Unicode characters. The string class provides extensive methods for text manipulation.',
    whyUse: 'Strings are essential for text processing, user input/output, data serialization, and communication between systems.',
    whereUse: 'Used everywhere for displaying messages, processing user input, file operations, network communication, and data storage.',
    syntax: 'string variableName = "value";',
    explanation: 'C# strings are immutable, meaning once created, they cannot be modified. String operations create new string instances. Use StringBuilder for frequent modifications.',
    examples: [
      {
        title: 'String Operations',
        code: `using System;
class Program {
    static void Main() {
        string str = "Hello, World!";
        
        Console.WriteLine($"Length: {str.Length}");
        Console.WriteLine($"Upper: {str.ToUpper()}");
        Console.WriteLine($"Lower: {str.ToLower()}");
        Console.WriteLine($"Contains 'World': {str.Contains("World")}");
        Console.WriteLine($"Substring: {str.Substring(0, 5)}");
    }
}`,
        output: 'Length: 13\nUpper: HELLO, WORLD!\nLower: hello, world!\nContains \'World\': True\nSubstring: Hello'
      },
      {
        title: 'String Formatting',
        code: `using System;
class Program {
    static void Main() {
        string name = "Alice";
        int age = 28;
        
        // String interpolation
        string s1 = $"Name: {name}, Age: {age}";
        
        // Composite formatting
        string s2 = string.Format("Name: {0}, Age: {1}", name, age);
        
        Console.WriteLine(s1);
        Console.WriteLine(s2);
    }
}`,
        output: 'Name: Alice, Age: 28\nName: Alice, Age: 28'
      },
      {
        title: 'String Builder',
        code: `using System;
using System.Text;
class Program {
    static void Main() {
        StringBuilder sb = new StringBuilder();
        sb.Append("Hello");
        sb.Append(" ");
        sb.Append("World");
        sb.AppendLine("!");
        
        string result = sb.ToString();
        Console.WriteLine(result);
    }
}`,
        output: 'Hello World!'
      }
    ],
    keyPoints: [
      'Strings are immutable - operations create new strings',
      'Use StringBuilder for frequent string modifications',
      'String interpolation ($"...") is preferred for formatting',
      'Use Contains(), StartsWith(), EndsWith() for searching',
      'String.Join() combines array elements efficiently'
    ],
    commonMistakes: [
      'Modifying strings in loops (use StringBuilder)',
      'Not handling null strings',
      'Using == instead of string.Equals() for comparison',
      'Forgetting strings are case-sensitive by default'
    ],
    proTips: [
      'Use string interpolation over concatenation',
      'Use StringPool or string.Intern() for repeated strings',
      'Prefer StringBuilder for loops with many concatenations',
      'Use StringComparison parameters for culture-aware comparisons'
    ]
  },

  operators: {
    definition: 'Operators in C# are symbols that perform operations on variables and values. C# supports arithmetic, comparison, logical, assignment, and other operator types.',
    whyUse: 'Operators enable performing calculations, comparisons, and logical operations on data, forming the basis of program logic.',
    whereUse: 'Used throughout C# programs for math operations, conditional checks, bit manipulation, and type operations.',
    syntax: 'operand operator operand',
    explanation: 'C# provides comprehensive operator support including arithmetic (+, -, *, /), comparison (==, !=, <, >), logical (&&, ||, !), and bitwise operators.',
    examples: [
      {
        title: 'Arithmetic Operators',
        code: `using System;
class Program {
    static void Main() {
        int a = 10, b = 3;
        
        Console.WriteLine($"Add: {a + b}");
        Console.WriteLine($"Subtract: {a - b}");
        Console.WriteLine($"Multiply: {a * b}");
        Console.WriteLine($"Divide: {a / b}");
        Console.WriteLine($"Modulus: {a % b}");
    }
}`,
        output: 'Add: 13\nSubtract: 7\nMultiply: 30\nDivide: 3\nModulus: 1'
      },
      {
        title: 'Comparison and Logical Operators',
        code: `using System;
class Program {
    static void Main() {
        int x = 5, y = 10;
        
        Console.WriteLine($"x == y: {x == y}");
        Console.WriteLine($"x != y: {x != y}");
        Console.WriteLine($"x < y: {x < y}");
        Console.WriteLine($"x > y: {x > y}");
        Console.WriteLine($"(x < 10) && (y > 5): {(x < 10) && (y > 5)}");
        Console.WriteLine($"(x > 10) || (y > 5): {(x > 10) || (y > 5)}");
    }
}`,
        output: 'x == y: False\nx != y: True\nx < y: True\nx > y: False\n(x < 10) && (y > 5): True\n(x > 10) || (y > 5): True'
      },
      {
        title: 'Null-Conditional and Null Coalescing',
        code: `using System;
class Program {
    static void Main() {
        string name = null;
        string displayName = name ?? "Guest";
        Console.WriteLine($"Name: {displayName}");
        
        string text = "Hello";
        int? length = text?.Length;
        Console.WriteLine($"Length: {length}");
    }
}`,
        output: 'Name: Guest\nLength: 5'
      }
    ],
    keyPoints: [
      'Arithmetic operators follow standard math precedence',
      '&& and || use short-circuit evaluation',
      '?? is null coalescing, ?. is null-conditional',
      'is operator checks type compatibility',
      'as operator performs safe type conversion'
    ],
    commonMistakes: [
      'Integer division truncating decimal results',
      'Not using parentheses for complex expressions',
      'Confusing = (assignment) with == (comparison)',
      'Ignoring operator precedence'
    ],
    proTips: [
      'Use checked/unchecked for overflow control',
      'Use pattern matching with is operator',
      'Use switch expressions for complex logic',
      'Be aware of implicit type conversions'
    ]
  },

  conditionals: {
    definition: 'Conditional statements in C# allow programs to execute different code paths based on conditions. They include if, else if, else, switch, and ternary operator.',
    whyUse: 'Conditionals enable decision-making in programs, allowing different actions based on data values, user input, or program state.',
    whereUse: 'Used for input validation, feature toggles, error handling, and controlling program flow throughout applications.',
    syntax: 'if (condition) { statement } else if (condition) { statement } else { statement }',
    explanation: 'C# evaluates conditions as boolean values. switch statements work with discrete values. The ternary operator provides concise conditional expressions.',
    examples: [
      {
        title: 'If-Else Statement',
        code: `using System;
class Program {
    static void Main() {
        int score = 85;
        
        if (score >= 90) {
            Console.WriteLine("Grade: A");
        } else if (score >= 80) {
            Console.WriteLine("Grade: B");
        } else if (score >= 70) {
            Console.WriteLine("Grade: C");
        } else {
            Console.WriteLine("Grade: F");
        }
    }
}`,
        output: 'Grade: B'
      },
      {
        title: 'Switch Statement',
        code: `using System;
class Program {
    static void Main() {
        string day = "Monday";
        
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
                Console.WriteLine("Weekday");
                break;
            case "Saturday":
            case "Sunday":
                Console.WriteLine("Weekend");
                break;
            default:
                Console.WriteLine("Invalid day");
                break;
        }
    }
}`,
        output: 'Weekday'
      },
      {
        title: 'Ternary Operator',
        code: `using System;
class Program {
    static void Main() {
        int age = 20;
        string status = age >= 18 ? "Adult" : "Minor";
        Console.WriteLine($"Status: {status}");
        
        int a = 5, b = 10;
        int max = a > b ? a : b;
        Console.WriteLine($"Max: {max}");
    }
}`,
        output: 'Status: Adult\nMax: 10'
      }
    ],
    keyPoints: [
      'if conditions must evaluate to bool',
      'switch requires break or return in each case',
      'switch expressions provide concise syntax in C# 8+',
      'Ternary operator is great for simple conditionals',
      'Pattern matching works with switch statements'
    ],
    commonMistakes: [
      'Missing break statements in switch cases',
      'Using assignment (=) instead of comparison (==)',
      'Not handling all possible cases',
      'Overusing nested if statements'
    ],
    proTips: [
      'Use switch expressions for cleaner code',
      'Consider using dictionary for many conditions',
      'Guard clauses reduce nesting',
      'Use pattern matching for type checks'
    ]
  },

  loops: {
    definition: 'Loops in C# allow repeated execution of code blocks. C# supports for, while, do-while, foreach, and LINQ for iteration.',
    whyUse: 'Loops enable processing collections, repeating tasks, and implementing algorithms that require iteration.',
    whereUse: 'Used for processing arrays/collections, reading files line by line, implementing game loops, and data processing.',
    syntax: 'for (init; condition; update) { statement }',
    explanation: 'C# provides multiple loop types for different scenarios: for for known iterations, foreach for collections, while for condition-based, do-while for at least one execution.',
    examples: [
      {
        title: 'For Loop',
        code: `using System;
class Program {
    static void Main() {
        for (int i = 1; i <= 5; i++) {
            Console.WriteLine($"Iteration: {i}");
        }
    }
}`,
        output: 'Iteration: 1\nIteration: 2\nIteration: 3\nIteration: 4\nIteration: 5'
      },
      {
        title: 'Foreach Loop',
        code: `using System;
class Program {
    static void Main() {
        string[] fruits = { "Apple", "Banana", "Cherry" };
        
        foreach (string fruit in fruits) {
            Console.WriteLine($"Fruit: {fruit}");
        }
    }
}`,
        output: 'Fruit: Apple\nFruit: Banana\nFruit: Cherry'
      },
      {
        title: 'While and Do-While',
        code: `using System;
class Program {
    static void Main() {
        int count = 0;
        while (count < 3) {
            Console.WriteLine($"While: {count}");
            count++;
        }
        
        int num = 5;
        do {
            Console.WriteLine($"Do-While: {num}");
            num--;
        } while (num > 0);
    }
}`,
        output: 'While: 0\nWhile: 1\nWhile: 2\nDo-While: 5\nDo-While: 4\nDo-While: 3\nDo-While: 2\nDo-While: 1'
      }
    ],
    keyPoints: [
      'for loop: init; condition; update structure',
      'foreach: best for collections without modification',
      'while: checks condition before each iteration',
      'do-while: executes at least once',
      'break exits loop, continue skips to next iteration'
    ],
    commonMistakes: [
      'Infinite loops from incorrect conditions',
      'Modifying collection during foreach',
      'Off-by-one errors in loop bounds',
      'Using wrong loop type for the task'
    ],
    proTips: [
      'Use LINQ for complex collection operations',
      'Prefer foreach for simple collection iteration',
      'Use for loop when index is needed',
      'Consider parallel loops for performance'
    ]
  },

  arrays: {
    definition: 'Arrays in C# are fixed-size collections of elements of the same type. They provide fast indexed access but cannot be resized after creation.',
    whyUse: 'Arrays offer efficient storage and retrieval of elements with O(1) access time. They are the foundation for other collection types.',
    whereUse: 'Used when fixed-size, high-performance collections are needed, and as building blocks for lists, matrices, and buffers.',
    syntax: 'type[] arrayName = new type[size];',
    explanation: 'C# arrays are zero-indexed, fixed-size, and can be single-dimensional, multi-dimensional, or jagged.',
    examples: [
      {
        title: 'Array Declaration and Initialization',
        code: `using System;
class Program {
    static void Main() {
        int[] numbers = new int[5];
        string[] names = { "Alice", "Bob", "Charlie" };
        double[] scores = new double[] { 95.5, 87.3, 92.1 };
        
        Console.WriteLine($"Numbers length: {numbers.Length}");
        Console.WriteLine($"First name: {names[0]}");
        Console.WriteLine($"Last score: {scores[2]}");
    }
}`,
        output: 'Numbers length: 5\nFirst name: Alice\nLast score: 92.1'
      },
      {
        title: 'Array Methods',
        code: `using System;
class Program {
    static void Main() {
        int[] nums = { 5, 2, 8, 1, 9 };
        
        Array.Sort(nums);
        Console.WriteLine($"Sorted: {string.Join(", ", nums)}");
        
        Console.WriteLine($"Index of 8: {Array.IndexOf(nums, 8)}");
        
        Array.Reverse(nums);
        Console.WriteLine($"Reversed: {string.Join(", ", nums)}");
    }
}`,
        output: 'Sorted: 1, 2, 5, 8, 9\nIndex of 8: 3\nReversed: 9, 8, 5, 2, 1'
      },
      {
        title: 'Multi-dimensional Arrays',
        code: `using System;
class Program {
    static void Main() {
        int[,] matrix = {
            { 1, 2, 3 },
            { 4, 5, 6 }
        };
        
        Console.WriteLine($"Element [0,1]: {matrix[0,1]}");
        Console.WriteLine($"Element [1,2]: {matrix[1,2]}");
        Console.WriteLine($"Rows: {matrix.GetLength(0)}");
        Console.WriteLine($"Cols: {matrix.GetLength(1)}");
    }
}`,
        output: 'Element [0,1]: 2\nElement [1,2]: 6\nRows: 2\nCols: 3'
      }
    ],
    keyPoints: [
      'Arrays are fixed-size after creation',
      'Zero-based indexing',
      'Use Array class methods for operations',
      'Multi-dimensional arrays use commas',
      'Jagged arrays are arrays of arrays'
    ],
    commonMistakes: [
      'IndexOutOfRangeException from invalid index',
      'Not checking array bounds before access',
      'Confusing arrays with lists (different capabilities)',
      'Forgetting arrays are reference types'
    ],
    proTips: [
      'Use List<T> when size needs to change',
      'Use Span<T> for performance-critical scenarios',
      'Prefer array initialization syntax for clarity',
      'Use Array.Empty<T>() for empty arrays'
    ]
  },

  methods: {
    definition: 'Methods in C# are blocks of code that perform specific tasks. They can accept parameters, return values, and are the building blocks of object-oriented programming.',
    whyUse: 'Methods promote code reuse, modularity, and separation of concerns. They make code more organized and maintainable.',
    whereUse: 'Used to encapsulate functionality, create reusable logic, implement business rules, and structure applications.',
    syntax: 'accessModifier returnType MethodName(parameters) { statement }',
    explanation: 'Methods have access modifiers, return types, names, parameters, and bodies. They can be static, instance, async, or generic.',
    examples: [
      {
        title: 'Basic Method',
        code: `using System;
class Program {
    static int Add(int a, int b) {
        return a + b;
    }
    
    static void Main() {
        int result = Add(5, 3);
        Console.WriteLine($"Sum: {result}");
    }
}`,
        output: 'Sum: 8'
      },
      {
        title: 'Method Overloading',
        code: `using System;
class Calculator {
    public static int Add(int a, int b) => a + b;
    public static double Add(double a, double b) => a + b;
    public static string Add(string a, string b) => a + b;
}

class Program {
    static void Main() {
        Console.WriteLine(Calculator.Add(5, 3));
        Console.WriteLine(Calculator.Add(2.5, 3.7));
        Console.WriteLine(Calculator.Add("Hello", " World"));
    }
}`,
        output: '8\n6.2\nHello World'
      },
      {
        title: 'Out and Ref Parameters',
        code: `using System;
class Program {
    static void Divide(int a, int b, out int quotient, out int remainder) {
        quotient = a / b;
        remainder = a % b;
    }
    
    static void DoubleValue(ref int number) {
        number *= 2;
    }
    
    static void Main() {
        Divide(10, 3, out int q, out int r);
        Console.WriteLine($"Quotient: {q}, Remainder: {r}");
        
        int num = 5;
        DoubleValue(ref num);
        Console.WriteLine($"Doubled: {num}");
    }
}`,
        output: 'Quotient: 3, Remainder: 1\nDoubled: 10'
      }
    ],
    keyPoints: [
      'Methods must have return type (void for none)',
      'Parameters can have default values',
      'out parameters must be assigned in method',
      'ref parameters must be initialized before passing',
      'static methods belong to class, not instance'
    ],
    commonMistakes: [
      'Not returning a value from non-void methods',
      'Confusing ref with out parameters',
      'Overusing static methods',
      'Creating too many parameters'
    ],
    proTips: [
      'Keep methods small and focused',
      'Use meaningful method names',
      'Consider using tuples for multiple returns',
      'Use expression-bodied members for simple methods'
    ]
  },

  classes: {
    definition: 'Classes in C# are blueprint templates for creating objects. They encapsulate data (fields) and behavior (methods) into a single unit.',
    whyUse: 'Classes enable object-oriented programming, providing encapsulation, inheritance, and polymorphism for building complex applications.',
    whereUse: 'Used to model real-world entities, create reusable components, and structure applications with clear responsibilities.',
    syntax: 'class ClassName { fields; methods; }',
    explanation: 'Classes define the structure and behavior of objects. They can have constructors, fields, properties, methods, and nested types.',
    examples: [
      {
        title: 'Basic Class',
        code: `using System;
class Car {
    public string Make;
    public string Model;
    public int Year;
    
    public void DisplayInfo() {
        Console.WriteLine($"{Year} {Make} {Model}");
    }
}

class Program {
    static void Main() {
        Car car = new Car();
        car.Make = "Toyota";
        car.Model = "Camry";
        car.Year = 2023;
        car.DisplayInfo();
    }
}`,
        output: '2023 Toyota Camry'
      },
      {
        title: 'Constructors',
        code: `using System;
class Person {
    public string Name;
    public int Age;
    
    public Person() {
        Name = "Unknown";
        Age = 0;
    }
    
    public Person(string name, int age) {
        Name = name;
        Age = age;
    }
}

class Program {
    static void Main() {
        Person p1 = new Person();
        Person p2 = new Person("Alice", 30);
        
        Console.WriteLine($"{p1.Name}, {p1.Age}");
        Console.WriteLine($"{p2.Name}, {p2.Age}");
    }
}`,
        output: 'Unknown, 0\nAlice, 30'
      },
      {
        title: 'Static Members',
        code: `using System;
class Counter {
    public static int Count = 0;
    
    public Counter() {
        Count++;
    }
    
    public static void Reset() {
        Count = 0;
    }
}

class Program {
    static void Main() {
        new Counter();
        new Counter();
        new Counter();
        
        Console.WriteLine($"Count: {Counter.Count}");
        Counter.Reset();
        Console.WriteLine($"After reset: {Counter.Count}");
    }
}`,
        output: 'Count: 3\nAfter reset: 0'
      }
    ],
    keyPoints: [
      'Classes are reference types',
      'Constructors initialize objects',
      'Static members belong to the class, not instances',
      'Access modifiers control visibility',
      'Classes can implement interfaces'
    ],
    commonMistakes: [
      'Not initializing required fields',
      'Confusing value and reference types',
      'Overcomplicating class hierarchies',
      'Violating single responsibility principle'
    ],
    proTips: [
      'Use properties instead of public fields',
      'Prefer composition over inheritance',
      'Implement IDisposable for cleanup',
      'Use records for immutable data types'
    ]
  },

  properties: {
    definition: 'Properties in C# provide a flexible mechanism to read, write, or compute the values of private fields. They act as public interfaces for class data.',
    whyUse: 'Properties provide data encapsulation with validation, computed values, and notification support while maintaining a clean API.',
    whereUse: 'Used to expose class data safely, implement validation logic, compute derived values, and support data binding.',
    syntax: 'public type PropertyName { get; set; }',
    explanation: 'Properties can have get and/or set accessors. Auto-implemented properties, read-only properties, and properties with validation are common patterns.',
    examples: [
      {
        title: 'Basic Properties',
        code: `using System;
class Person {
    public string Name { get; set; }
    public int Age { get; set; }
    
    public string Greeting => $"Hello, I'm {Name} and I'm {Age} years old.";
}

class Program {
    static void Main() {
        Person person = new Person();
        person.Name = "Alice";
        person.Age = 30;
        
        Console.WriteLine(person.Greeting);
    }
}`,
        output: "Hello, I'm Alice and I'm 30 years old."
      },
      {
        title: 'Properties with Validation',
        code: `using System;
class Temperature {
    private double _celsius;
    
    public double Celsius {
        get => _celsius;
        set {
            if (value < -273.15)
                throw new ArgumentException("Below absolute zero");
            _celsius = value;
        }
    }
    
    public double Fahrenheit => (_celsius * 9/5) + 32;
}

class Program {
    static void Main() {
        Temperature temp = new Temperature();
        temp.Celsius = 100;
        Console.WriteLine($"Fahrenheit: {temp.Fahrenheit}");
    }
}`,
        output: 'Fahrenheit: 212'
      },
      {
        title: 'Init-Only Properties',
        code: `using System;
class Person {
    public string Name { get; init; }
    public DateTime CreatedAt { get; init; } = DateTime.Now;
}

class Program {
    static void Main() {
        Person person = new Person { Name = "Bob" };
        Console.WriteLine($"{person.Name} created at {person.CreatedAt}");
    }
}`,
        output: 'Bob created at 8/29/2026 12:00:00 AM'
      }
    ],
    keyPoints: [
      'Auto-properties: public int X { get; set; }',
      'Read-only: public int X { get; }',
      'Init-only: public int X { get; init; }',
      'Expression-bodied: public int X => 42;',
      'Properties can have different access levels'
    ],
    commonMistakes: [
      'Not validating property values',
      'Creating properties with too much logic',
      'Confusing properties with fields',
      'Forgetting to implement INotifyPropertyChanged'
    ],
    proTips: [
      'Use init-only for immutable objects',
      'Consider using records for data classes',
      'Use property patterns in switch expressions',
      'Keep property logic simple'
    ]
  },

  inheritance: {
    definition: 'Inheritance in C# allows creating new classes based on existing classes. A derived class inherits fields, properties, and methods from a base class.',
    whyUse: 'Inheritance promotes code reuse, establishes relationships between types, and enables polymorphism for flexible code design.',
    whereUse: 'Used to create specialized versions of existing classes, build class hierarchies, and implement interface contracts.',
    syntax: 'class DerivedClass : BaseClass { }',
    explanation: 'C# supports single inheritance with multiple interface implementation. Use virtual/override for polymorphism, abstract for incomplete base classes.',
    examples: [
      {
        title: 'Basic Inheritance',
        code: `using System;
class Animal {
    public string Name { get; set; }
    
    public void Eat() {
        Console.WriteLine($"{Name} is eating");
    }
}

class Dog : Animal {
    public void Bark() {
        Console.WriteLine($"{Name} is barking");
    }
}

class Program {
    static void Main() {
        Dog dog = new Dog { Name = "Rex" };
        dog.Eat();
        dog.Bark();
    }
}`,
        output: 'Rex is eating\nRex is barking'
      },
      {
        title: 'Virtual and Override',
        code: `using System;
class Shape {
    public virtual double CalculateArea() {
        return 0;
    }
}

class Circle : Shape {
    public double Radius { get; set; }
    
    public override double CalculateArea() {
        return Math.PI * Radius * Radius;
    }
}

class Program {
    static void Main() {
        Circle circle = new Circle { Radius = 5 };
        Console.WriteLine($"Area: {circle.CalculateArea():F2}");
    }
}`,
        output: 'Area: 78.54'
      },
      {
        title: 'Abstract Classes',
        code: `using System;
abstract class Vehicle {
    public string Brand { get; set; }
    
    public abstract void Start();
    
    public void Stop() {
        Console.WriteLine($"{Brand} stopped");
    }
}

class Car : Vehicle {
    public override void Start() {
        Console.WriteLine($"{Brand} car started");
    }
}

class Program {
    static void Main() {
        Car car = new Car { Brand = "Toyota" };
        car.Start();
        car.Stop();
    }
}`,
        output: 'Toyota car started\nToyota stopped'
      }
    ],
    keyPoints: [
      'C# supports single inheritance only',
      'Use interfaces for multiple contract implementation',
      'virtual allows overriding, override changes behavior',
      'abstract cannot be instantiated',
      'base关键字访问父类成员'
    ],
    commonMistakes: [
      'Creating deep inheritance hierarchies',
      'Not calling base constructor',
      'Hiding base members with new keyword',
      'Tight coupling between base and derived classes'
    ],
    proTips: [
      'Prefer composition over inheritance',
      'Use abstract classes for partial implementations',
      'Consider using interfaces for polymorphism',
      'Keep inheritance hierarchies shallow'
    ]
  },

  interfaces: {
    definition: 'Interfaces in C# define contracts that classes or structs can implement. They specify methods, properties, events, or indexers that implementing types must provide.',
    whyUse: 'Interfaces enable polymorphism, loose coupling, and testing. They define capabilities without implementation details.',
    whereUse: 'Used for defining service contracts, enabling dependency injection, creating plug-in architectures, and unit testing.',
    syntax: 'interface IInterfaceName { void Method(); }',
    explanation: 'Interfaces contain only definitions, not implementations. A class can implement multiple interfaces, providing a form of multiple inheritance.',
    examples: [
      {
        title: 'Basic Interface',
        code: `using System;
interface ILogger {
    void Log(string message);
}

class ConsoleLogger : ILogger {
    public void Log(string message) {
        Console.WriteLine($"LOG: {message}");
    }
}

class Program {
    static void Main() {
        ILogger logger = new ConsoleLogger();
        logger.Log("Application started");
    }
}`,
        output: 'LOG: Application started'
      },
      {
        title: 'Multiple Interface Implementation',
        code: `using System;
interface IReadable {
    void Read();
}

interface IWritable {
    void Write(string data);
}

class FileHandler : IReadable, IWritable {
    public void Read() {
        Console.WriteLine("Reading file");
    }
    
    public void Write(string data) {
        Console.WriteLine($"Writing: {data}");
    }
}

class Program {
    static void Main() {
        FileHandler handler = new FileHandler();
        handler.Read();
        handler.Write("Hello World");
    }
}`,
        output: 'Reading file\nWriting: Hello World'
      },
      {
        title: 'Interface with Default Implementation',
        code: `using System;
interface IRepository {
    void Save();
    
    void LogOperation() {
        Console.WriteLine("Operation logged");
    }
}

class UserRepository : IRepository {
    public void Save() {
        Console.WriteLine("Saving user");
    }
}

class Program {
    static void Main() {
        UserRepository repo = new UserRepository();
        repo.Save();
        repo.LogOperation();
    }
}`,
        output: 'Saving user\nOperation logged'
      }
    ],
    keyPoints: [
      'Interfaces define contracts, not implementations',
      'A class can implement multiple interfaces',
      'Interfaces can have default implementations (C# 8+)',
      'Interface names start with capital I',
      'Interfaces promote loose coupling'
    ],
    commonMistakes: [
      'Adding implementation to interfaces',
      'Not implementing all interface members',
      'Using interfaces when classes would be better',
      'Creating too many interfaces'
    ],
    proTips: [
      'Keep interfaces small and focused',
      'Use interface segregation principle',
      'Prefer interface-based design',
      'Use default interface methods for backwards compatibility'
    ]
  },

  generics: {
    definition: 'Generics in C# allow creating classes, methods, and interfaces with type parameters. They enable writing reusable code that works with any type.',
    whyUse: 'Generics provide type safety, performance benefits, and code reuse. They eliminate boxing/unboxing and enable compile-time type checking.',
    whereUse: 'Used in collections, data structures, algorithms, and anywhere type-agnostic code is needed.',
    syntax: 'class GenericClass<T> { }',
    explanation: 'Generics use type parameters (T, K, V) that are replaced with specific types at compile time. They support constraints for limiting acceptable types.',
    examples: [
      {
        title: 'Generic Class',
        code: `using System;
class Box<T> {
    public T Content { get; set; }
    
    public Box(T content) {
        Content = content;
    }
}

class Program {
    static void Main() {
        Box<int> intBox = new Box<int>(42);
        Box<string> strBox = new Box<string>("Hello");
        
        Console.WriteLine($"Int: {intBox.Content}");
        Console.WriteLine($"String: {strBox.Content}");
    }
}`,
        output: 'Int: 42\nString: Hello'
      },
      {
        title: 'Generic Method',
        code: `using System;
class Utilities {
    public static void Swap<T>(ref T a, ref T b) {
        T temp = a;
        a = b;
        b = temp;
    }
}

class Program {
    static void Main() {
        int x = 5, y = 10;
        Utilities.Swap(ref x, ref y);
        Console.WriteLine($"x: {x}, y: {y}");
    }
}`,
        output: 'x: 10, y: 5'
      },
      {
        title: 'Generic Constraints',
        code: `using System;
class Repository<T> where T : class, new() {
    public T Create() {
        return new T();
    }
    
    public void Save(T item) {
        Console.WriteLine($"Saving item of type {typeof(T).Name}");
    }
}

class Program {
    static void Main() {
        Repository<string> repo = new Repository<string>();
        string item = repo.Create();
        repo.Save(item);
    }
}`,
        output: 'Saving item of type String'
      }
    ],
    keyPoints: [
      'Type parameters enable type-safe reusable code',
      'Constraints: where T : class, struct, new(), etc.',
      'Generics avoid boxing for value types',
      'Can have multiple type parameters',
      'Generic interfaces and methods are powerful'
    ],
    commonMistakes: [
      'Overusing generic constraints',
      'Not considering performance implications',
      'Creating overly complex generic types',
      'Forgetting type inference'
    ],
    proTips: [
      'Use meaningful type parameter names (T, TKey, TValue)',
      'Prefer generics over object for type safety',
      'Use generic math for numeric operations',
      'Consider using Source Generators for advanced scenarios'
    ]
  },

  linq: {
    definition: 'LINQ (Language Integrated Query) provides a unified syntax for querying and manipulating data from various sources including collections, databases, and XML.',
    whyUse: 'LINQ simplifies data operations with expressive query syntax, reduces boilerplate code, and provides consistent APIs across data sources.',
    whereUse: 'Used for filtering, sorting, transforming collections, querying databases with Entity Framework, and processing XML/JSON.',
    syntax: 'var result = from item in collection where condition select item;',
    explanation: 'LINQ offers query syntax (SQL-like) and method syntax (lambda-based). Both compile to the same intermediate representation.',
    examples: [
      {
        title: 'Basic LINQ Queries',
        code: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
        
        var evenNumbers = numbers.Where(n => n % 2 == 0);
        Console.WriteLine($"Even: {string.Join(", ", evenNumbers)}");
        
        var sum = numbers.Sum();
        Console.WriteLine($"Sum: {sum}");
    }
}`,
        output: 'Even: 2, 4, 6, 8, 10\nSum: 55'
      },
      {
        title: 'Query Syntax',
        code: `using System;
using System.Linq;
using System.Collections.Generic;

class Student {
    public string Name { get; set; }
    public int Score { get; set; }
}

class Program {
    static void Main() {
        List<Student> students = new List<Student> {
            new Student { Name = "Alice", Score = 95 },
            new Student { Name = "Bob", Score = 85 },
            new Student { Name = "Charlie", Score = 92 }
        };
        
        var topStudents = from s in students
                         where s.Score > 90
                         orderby s.Score descending
                         select s;
        
        foreach (var student in topStudents) {
            Console.WriteLine($"{student.Name}: {student.Score}");
        }
    }
}`,
        output: 'Alice: 95\nCharlie: 92'
      },
      {
        title: 'LINQ Transformations',
        code: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<string> names = new List<string> { "alice", "bob", "charlie" };
        
        var upperNames = names.Select(n => n.ToUpper());
        Console.WriteLine($"Upper: {string.Join(", ", upperNames)}");
        
        var grouped = names.GroupBy(n => n.Length);
        foreach (var group in grouped) {
            Console.WriteLine($"Length {group.Key}: {string.Join(", ", group)}");
        }
    }
}`,
        output: 'Upper: ALICE, BOB, CHARLIE\nLength 3: bob\nLength 5: alice\nLength 7: charlie'
      }
    ],
    keyPoints: [
      'Where() filters elements',
      'Select() transforms elements',
      'OrderBy()/OrderByDescending() sorts',
      'GroupBy() groups elements',
      'LINQ is deferred execution until enumeration'
    ],
    commonMistakes: [
      'Not understanding deferred execution',
      'Querying large datasets without filtering first',
      'Not using appropriate LINQ method',
      'Forgetting to call ToList() when needed'
    ],
    proTips: [
      'Use method syntax for simple queries',
      'Use query syntax for complex joins',
      'Chain operations for readability',
      'Use AsParallel() for parallel processing'
    ]
  },

  async: {
    definition: 'Asynchronous programming in C# uses async/await keywords to handle operations that may take time, like I/O or network requests, without blocking the main thread.',
    whyUse: 'Async improves application responsiveness, resource utilization, and user experience by keeping the UI responsive during long operations.',
    whereUse: 'Used for file I/O, database queries, HTTP requests, and any operation that may block.',
    syntax: 'async Task MethodAsync() { await SomeAsyncOperation(); }',
    explanation: 'Methods marked async can use await to pause execution until an async operation completes. The await keyword resumes execution after the operation finishes.',
    examples: [
      {
        title: 'Basic Async/Await',
        code: `using System;
using System.Threading.Tasks;

class Program {
    static async Task Main() {
        Console.WriteLine("Start");
        await Task.Delay(1000);
        Console.WriteLine("After 1 second");
    }
}`,
        output: 'Start\n(After 1 second)\nAfter 1 second'
      },
      {
        title: 'Async with Return Value',
        code: `using System;
using System.Threading.Tasks;

class Program {
    static async Task<int> CalculateAsync() {
        await Task.Delay(100);
        return 42;
    }
    
    static async Task Main() {
        int result = await CalculateAsync();
        Console.WriteLine($"Result: {result}");
    }
}`,
        output: 'Result: 42'
      },
      {
        title: 'Parallel Async Operations',
        code: `using System;
using System.Threading.Tasks;

class Program {
    static async Task ProcessAsync(string name, int delay) {
        await Task.Delay(delay);
        Console.WriteLine($"{name} completed");
    }
    
    static async Task Main() {
        Task task1 = ProcessAsync("Task 1", 200);
        Task task2 = ProcessAsync("Task 2", 100);
        Task task3 = ProcessAsync("Task 3", 150);
        
        await Task.WhenAll(task1, task2, task3);
        Console.WriteLine("All tasks completed");
    }
}`,
        output: 'Task 2 completed\nTask 3 completed\nTask 1 completed\nAll tasks completed'
      }
    ],
    keyPoints: [
      'async methods return Task or Task<T>',
      'await pauses execution without blocking',
      'Use Task.WhenAll() for parallel operations',
      'Async methods should be awaited to avoid warnings',
      'Use ConfigureAwait(false) in library code'
    ],
    commonMistakes: [
      'Using .Result or .Wait() causing deadlocks',
      'Not awaiting async methods',
      'Using async void (except for event handlers)',
      'Forgetting ConfigureAwait(false)'
    ],
    proTips: [
      'Avoid async void methods',
      'Use ValueTask for hot paths',
      'Implement IAsyncDisposable for cleanup',
      'Use cancellation tokens for cancellation'
    ]
  },

  events: {
    definition: 'Events in C# are a mechanism for a class to notify other classes when something of interest happens. They follow the publish-subscribe pattern.',
    whyUse: 'Events enable loose coupling between components, allowing objects to communicate without direct references.',
    whereUse: 'Used in UI programming, callbacks, observer pattern, and decoupled architecture designs.',
    syntax: 'public event EventHandler MyEvent;',
    explanation: 'Events use delegates to define event handler signatures. Publishers raise events, subscribers handle them.',
    examples: [
      {
        title: 'Basic Event',
        code: `using System;

class Button {
    public event EventHandler Clicked;
    
    public void Click() {
        Clicked?.Invoke(this, EventArgs.Empty);
    }
}

class Program {
    static void Main() {
        Button button = new Button();
        button.Clicked += (sender, e) => Console.WriteLine("Button clicked!");
        button.Click();
    }
}`,
        output: 'Button clicked!'
      },
      {
        title: 'Custom Event Args',
        code: `using System;

class TemperatureChangedEventArgs : EventArgs {
    public double Temperature { get; set; }
}

class Thermostat {
    public event EventHandler<TemperatureChangedEventArgs> TemperatureChanged;
    
    public void SetTemperature(double temp) {
        TemperatureChanged?.Invoke(this, new TemperatureChangedEventArgs { Temperature = temp });
    }
}

class Program {
    static void Main() {
        Thermostat thermostat = new Thermostat();
        thermostat.TemperatureChanged += (sender, e) => 
            Console.WriteLine($"Temperature: {e.Temperature}°C");
        thermostat.SetTemperature(25.5);
    }
}`,
        output: 'Temperature: 25.5°C'
      }
    ],
    keyPoints: [
      'Events use delegates for type-safe callbacks',
      'Use EventArgs and EventHandler<T> patterns',
      'Events can only be raised from declaring class',
      'Use ?.Invoke() for null-safe invocation',
      'Events support multiple subscribers'
    ],
    commonMistakes: [
      'Not checking for null before invoking',
      'Forgetting to unsubscribe from events',
      'Creating memory leaks with event subscriptions',
      'Using events when delegates would be simpler'
    ],
    proTips: [
      'Use weak events to prevent memory leaks',
      'Consider using IObservable<T> for complex scenarios',
      'Unsubscribe when no longer needed',
      'Use event handlers for UI event patterns'
    ]
  },

  exceptions: {
    definition: 'Exceptions in C# are runtime errors that occur during program execution. C# provides try-catch-finally blocks to handle exceptions gracefully.',
    whyUse: 'Exception handling allows programs to recover from errors, log issues, and provide meaningful feedback to users.',
    whereUse: 'Used everywhere for error handling, input validation, resource cleanup, and maintaining application stability.',
    syntax: 'try { } catch (ExceptionType ex) { } finally { }',
    explanation: 'The try block contains code that might throw exceptions. Catch blocks handle specific exception types. Finally ensures cleanup code runs.',
    examples: [
      {
        title: 'Basic Try-Catch',
        code: `using System;

class Program {
    static void Main() {
        try {
            int[] numbers = { 1, 2, 3 };
            Console.WriteLine(numbers[5]);
        }
        catch (IndexOutOfRangeException ex) {
            Console.WriteLine($"Error: {ex.Message}");
        }
        finally {
            Console.WriteLine("Cleanup completed");
        }
    }
}`,
        output: 'Error: Index was outside the bounds of the array.\nCleanup completed'
      },
      {
        title: 'Custom Exceptions',
        code: `using System;

class InsufficientFundsException : Exception {
    public decimal Amount { get; }
    
    public InsufficientFundsException(decimal amount) 
        : base($"Insufficient funds: {amount:C}") {
        Amount = amount;
    }
}

class BankAccount {
    public decimal Balance { get; private set; }
    
    public void Withdraw(decimal amount) {
        if (amount > Balance)
            throw new InsufficientFundsException(amount);
        Balance -= amount;
    }
}

class Program {
    static void Main() {
        try {
            BankAccount account = new BankAccount();
            account.Withdraw(100);
        }
        catch (InsufficientFundsException ex) {
            Console.WriteLine(ex.Message);
        }
    }
}`,
        output: 'Insufficient funds: $100.00'
      },
      {
        title: 'When Filter',
        code: `using System;
using System.Net;

class Program {
    static void Main() {
        try {
            throw new WebException("Connection failed");
        }
        catch (WebException ex) when (ex.Status == WebExceptionStatus.ConnectFailure) {
            Console.WriteLine("Connection error occurred");
        }
        catch (WebException ex) {
            Console.WriteLine($"Web error: {ex.Message}");
        }
    }
}`,
        output: 'Connection error occurred'
      }
    ],
    keyPoints: [
      'Try-catch blocks handle runtime exceptions',
      'Finally runs regardless of exceptions thrown',
      'Custom exceptions provide meaningful error info',
      'When filters add conditions to catch blocks',
      'Exception logging is important for debugging'
    ],
    commonMistakes: [
      'Catching generic Exception without specificity',
      'Swallowing exceptions silently',
      'Using exceptions for flow control',
      'Not cleaning up resources in finally'
    ],
    proTips: [
      'Be specific with exception types',
      'Use exception filters for better performance',
      'Log exceptions with full context',
      'Consider using Result pattern instead of exceptions'
    ]
  },

  lambda: {
    definition: 'Lambda expressions in C# are anonymous functions that can contain expressions or statements. They are used to create delegates or expression trees.',
    whyUse: 'Lambdas provide concise syntax for inline function definitions, making code more readable for short operations.',
    whereUse: 'Used with LINQ queries, event handlers, callbacks, and anywhere a delegate is expected.',
    syntax: '(parameters) => expression or (parameters) => { statements }',
    explanation: 'Lambdas are shorthand for anonymous methods. They capture variables from their enclosing scope (closures).',
    examples: [
      {
        title: 'Basic Lambda',
        code: `using System;

class Program {
    static void Main() {
        Func<int, int, int> add = (a, b) => a + b;
        Console.WriteLine($"Sum: {add(5, 3)}");
        
        Func<string, string> toUpper = s => s.ToUpper();
        Console.WriteLine(toUpper("hello"));
    }
}`,
        output: 'Sum: 8\nHELLO'
      },
      {
        title: 'Lambda with LINQ',
        code: `using System;
using System.Linq;
using System.Collections.Generic;

class Program {
    static void Main() {
        List<int> numbers = new List<int> { 1, 2, 3, 4, 5 };
        
        var squares = numbers.Select(n => n * n);
        Console.WriteLine($"Squares: {string.Join(", ", squares)}");
        
        var evenSquares = numbers.Where(n => n % 2 == 0).Select(n => n * n);
        Console.WriteLine($"Even squares: {string.Join(", ", evenSquares)}");
    }
}`,
        output: 'Squares: 1, 4, 9, 16, 25\nEven squares: 4, 16'
      },
      {
        title: 'Lambda with Action',
        code: `using System;

class Program {
    static void Main() {
        Action<string, int> printInfo = (name, age) => 
            Console.WriteLine($"{name} is {age} years old");
        
        printInfo("Alice", 30);
        
        Action greet = () => Console.WriteLine("Hello!");
        greet();
    }
}`,
        output: 'Alice is 30 years old\nHello!'
      }
    ],
    keyPoints: [
      '=> is the lambda operator',
      'Single expression lambdas are concise',
      'Multi-statement lambdas use curly braces',
      'Lambdas capture enclosing scope variables',
      'Use Func for return values, Action for void'
    ],
    commonMistakes: [
      'Confusing lambda with expression body',
      'Capturing loop variables incorrectly',
      'Overcomplicating lambda expressions',
      'Forgetting type inference'
    ],
    proTips: [
      'Keep lambdas small and focused',
      'Use local variables for clarity',
      'Consider named methods for complex logic',
      'Use expression trees for IQueryable'
    ]
  },

  enums: {
    definition: 'Enums in C# are value types that define a set of named constants. They improve code readability by replacing magic numbers with meaningful names.',
    whyUse: 'Enums make code more readable, maintainable, and type-safe by providing named constants for related values.',
    whereUse: 'Used for state machines, configuration options, status codes, and anywhere a fixed set of values is needed.',
    syntax: 'enum Status { Active, Inactive, Pending }',
    explanation: 'Enums are backed by integer types (default int). Each member has an associated numeric value, and enums can have methods.',
    examples: [
      {
        title: 'Basic Enum',
        code: `using System;

enum Day {
    Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
}

class Program {
    static void Main() {
        Day today = Day.Friday;
        Console.WriteLine($"Today is {today}");
        Console.WriteLine($"Value: {(int)today}");
    }
}`,
        output: 'Today is Friday\nValue: 4'
      },
      {
        title: 'Enum with Flags',
        code: `using System;

[Flags]
enum Permissions {
    None = 0,
    Read = 1,
    Write = 2,
    Execute = 4,
    All = Read | Write | Execute
}

class Program {
    static void Main() {
        Permissions userPerms = Permissions.Read | Permissions.Write;
        Console.WriteLine($"Permissions: {userPerms}");
        Console.WriteLine($"Has Read: {userPerms.HasFlag(Permissions.Read)}");
    }
}`,
        output: 'Permissions: Read, Write\nHas Read: True'
      },
      {
        title: 'Enum Methods',
        code: `using System;

enum Color {
    Red, Green, Blue
}

class Program {
    static void Main() {
        string[] names = Enum.GetNames(typeof(Color));
        Console.WriteLine($"Colors: {string.Join(", ", names)}");
        
        Color parsed = (Color)Enum.Parse(typeof(Color), "Blue");
        Console.WriteLine($"Parsed: {parsed}");
    }
}`,
        output: 'Colors: Red, Green, Blue\nParsed: Blue'
      }
    ],
    keyPoints: [
      'Enums are strongly typed constants',
      'Default underlying type is int',
      '[Flags] attribute for bitwise operations',
      'Enum.Parse() converts strings to enums',
      'Enum.GetValues() gets all enum values'
    ],
    commonMistakes: [
      'Not handling invalid enum values',
      'Forgetting default value is 0',
      'Not using [Flags] for bitwise combinations',
      'Hardcoding enum values instead of names'
    ],
    proTips: [
      'Use enums for fixed sets of options',
      'Consider using enum for switch statements',
      'Use [Description] attribute for display names',
      'Use generic Enum.Parse<T>() for type safety'
    ]
  },

  nullable: {
    definition: 'Nullable types in C# allow value types to represent null. The nullable reference types feature (C# 8+) helps prevent null reference exceptions.',
    whyUse: 'Nullable types make nullability explicit in the type system, improving code safety and reducing null-related bugs.',
    whereUse: 'Used for optional database fields, API responses, and anywhere a value might be absent.',
    syntax: 'int? nullableInt = null;',
    explanation: 'Nullable value types use ? suffix. Nullable reference types use annotations to indicate nullability in the type system.',
    examples: [
      {
        title: 'Nullable Value Types',
        code: `using System;

class Program {
    static void Main() {
        int? age = null;
        double? salary = 50000;
        
        Console.WriteLine($"Age: {age ?? 0}");
        Console.WriteLine($"Salary: {salary}");
        
        if (age.HasValue) {
            Console.WriteLine($"Age value: {age.Value}");
        } else {
            Console.WriteLine("Age is not set");
        }
    }
}`,
        output: 'Age: 0\nSalary: 50000\nAge is not set'
      },
      {
        title: 'Null-Conditional Operator',
        code: `using System;

class Person {
    public string Name { get; set; }
    public Person Address { get; set; }
}

class Program {
    static void Main() {
        Person person = new Person();
        string city = person.Address?.City ?? "Unknown";
        Console.WriteLine($"City: {city}");
    }
}

class Address {
    public string City { get; set; }
}`,
        output: 'City: Unknown'
      },
      {
        title: 'Nullable Reference Types',
        code: `using System;
#nullable enable

class Program {
    static string? FindName(int id) {
        if (id == 1) return "Alice";
        return null;
    }
    
    static void Main() {
        string? name = FindName(1);
        Console.WriteLine($"Name: {name ?? "Not found"}");
    }
}`,
        output: 'Name: Alice'
      }
    ],
    keyPoints: [
      'int? is shorthand for Nullable<int>',
      'Use ?. for null-conditional access',
      'Use ?? for null coalescing',
      'Use ?.Invoke() for null-conditional invocation',
      'Nullable reference types are compile-time only'
    ],
    commonMistakes: [
      'Not checking HasValue before accessing Value',
      'Ignoring nullable warnings',
      'Forgetting ?? for default values',
      'Not using nullable annotations'
    ],
    proTips: [
      'Enable nullable reference types project-wide',
      'Use ! operator to suppress warnings when sure',
      'Consider using ValidateNotNull attributes',
      'Use pattern matching with null checks'
    ]
  },

  unity: {
    definition: 'Unity is a game engine that uses C# for scripting. It provides tools for 2D/3D game development, VR/AR, and interactive applications.',
    whyUse: 'Unity with C# enables rapid game development with a visual editor, cross-platform deployment, and extensive asset store.',
    whereUse: 'Used for creating video games, simulations, architectural visualizations, and interactive experiences.',
    syntax: 'public class MonoBehaviour : MonoBehaviour { }',
    explanation: 'Unity scripts inherit from MonoBehaviour. They use lifecycle methods like Start(), Update(), and OnDestroy() for game logic.',
    examples: [
      {
        title: 'Basic MonoBehaviour',
        code: `using UnityEngine;

public class PlayerController : MonoBehaviour {
    public float speed = 5.0f;
    
    void Start() {
        Debug.Log("Player spawned!");
    }
    
    void Update() {
        float move = Input.GetAxis("Horizontal") * speed * Time.deltaTime;
        transform.Translate(Vector3.right * move);
    }
}`,
        output: 'Player spawned!'
      },
      {
        title: 'Collision Detection',
        code: `using UnityEngine;

public class Projectile : MonoBehaviour {
    public float damage = 10f;
    
    void OnCollisionEnter(Collision collision) {
        if (collision.gameObject.tag == "Enemy") {
            collision.gameObject.GetComponent<Enemy>().TakeDamage(damage);
            Destroy(gameObject);
        }
    }
}`,
        output: 'Enemy hit and destroyed'
      },
      {
        title: 'Singleton Pattern',
        code: `using UnityEngine;

public class GameManager : MonoBehaviour {
    public static GameManager Instance { get; private set; }
    
    public int score = 0;
    
    void Awake() {
        if (Instance == null) {
            Instance = this;
            DontDestroyOnLoad(gameObject);
        } else {
            Destroy(gameObject);
        }
    }
    
    public void AddScore(int points) {
        score += points;
        Debug.Log($"Score: {score}");
    }
}`,
        output: 'Score: 100'
      }
    ],
    keyPoints: [
      'Scripts inherit from MonoBehaviour',
      'Start() is called once at initialization',
      'Update() is called every frame',
      'Use GetComponent<T>() to access components',
      'Use coroutines for time-based operations'
    ],
    commonMistakes: [
      'Putting game logic in Update() when Start() suffices',
      'Not caching component references',
      'Using SendMessage() instead of direct references',
      'Not handling object pooling for frequent instantiation'
    ],
    proTips: [
      'Cache GetComponent calls in Start()',
      'Use ScriptableObjects for data',
      'Implement object pooling for bullets/particles',
      'Use Unity Analytics for player behavior insights'
    ]
  }
}

export default csharp