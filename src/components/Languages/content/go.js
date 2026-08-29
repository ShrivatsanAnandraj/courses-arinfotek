const go = {
  intro: {
    definition: 'Go (Golang) is an open-source programming language created at Google. It is designed for simplicity, efficiency, and concurrent programming.',
    whyUse: 'Go offers fast compilation, built-in concurrency, garbage collection, and a simple syntax that scales to large codebases.',
    whereUse: 'Used for cloud services, DevOps tools, web servers, microservices, networking, and system programming.',
    syntax: null,
    explanation: 'Go uses a clean, minimal syntax with static typing. It compiles to machine code and includes goroutines for concurrency.',
    examples: [
      {
        title: 'Hello World',
        code: `package main
import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
        output: 'Hello, World!'
      },
      {
        title: 'Basic Variables',
        code: `package main
import "fmt"

func main() {
    name := "Go"
    version := 1.21
    fmt.Printf("Language: %s, Version: %.1f\\n", name, version)
}`,
        output: 'Language: Go, Version: 1.2'
      },
      {
        title: 'Multiple Return Values',
        code: `package main
import "fmt"

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 3)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Result: %.2f\\n", result)
}`,
        output: 'Result: 3.33'
      }
    ],
    keyPoints: [
      'Statically typed with type inference',
      'Compiled language with fast build times',
      'Built-in concurrency with goroutines',
      'Garbage collected for memory safety',
      'Simple, minimal syntax'
    ],
    commonMistakes: [
      'Not handling errors properly',
      'Using goroutines without synchronization',
      'Confusing short declaration (:=) with assignment (=)',
      'Not using the standard library effectively'
    ],
    proTips: [
      'Use gofmt to format code automatically',
      'Leverage the standard library before adding dependencies',
      'Use go vet for static analysis',
      'Keep functions small and focused'
    ]
  },

  setup: {
    definition: 'Setting up a Go development environment involves installing Go, configuring GOPATH, and setting up your editor.',
    whyUse: 'A proper setup enables efficient Go development with tooling, testing, and dependency management.',
    whereUse: 'Required for any Go development project.',
    syntax: 'go version',
    explanation: 'Install Go from golang.org, configure environment variables, and set up your editor with Go support.',
    examples: [
      {
        title: 'Install and Verify',
        code: `# Check Go installation
go version

# Create new module
go mod init example.com/myproject

# Run a Go program
go run main.go

# Build an executable
go build -o myapp`,
        output: 'go version go1.21.0 windows/amd64'
      },
      {
        title: 'Go Modules',
        code: `# Initialize module
go mod init github.com/user/project

# Add dependency
go get github.com/gin-gonic/gin

# Tidy dependencies
go mod tidy

# View module graph
go mod graph`,
        output: 'Module initialized'
      },
      {
        title: 'Project Structure',
        code: `package main

import (
    "fmt"
    "os"
)

func main() {
    fmt.Println("Project structure:")
    fmt.Println("cmd/ - main applications")
    fmt.Println("pkg/ - library packages")
    fmt.Println("internal/ - private packages")
    fmt.Println("go.mod - module definition")
}`,
        output: 'Project structure:\n    cmd/ - main applications\n    pkg/ - library packages\n    internal/ - private packages\n    go.mod - module definition'
      }
    ],
    keyPoints: [
      'Download from golang.org',
      'Use go mod for dependency management',
      'go run for running, go build for compiling',
      'go fmt for formatting code',
      'go test for running tests'
    ],
    commonMistakes: [
      'Not setting GOPATH correctly',
      'Not using Go modules',
      'Not organizing project properly',
      'Forgetting to run go mod tidy'
    ],
    proTips: [
      'Use Go modules for dependency management',
      'Set up editor with gopls language server',
      'Use go generate for code generation',
      'Keep dependencies minimal'
    ]
  },

  variables: {
    definition: 'Go variables are explicitly typed or inferred using :=. Go supports multiple variable declarations and has both short and long form declarations.',
    whyUse: 'Variables store data and state. Go\'s type system ensures memory safety and efficiency.',
    whereUse: 'Used throughout Go programs for storing data, references, and state.',
    syntax: 'var name type = value or name := value',
    explanation: 'Go uses var for explicit declaration and := for short declaration with type inference. Variables must be used or compilation fails.',
    examples: [
      {
        title: 'Variable Declaration',
        code: `package main
import "fmt"

func main() {
    var name string = "Go"
    var version float64 = 1.21
    var isAwesome bool = true
    
    // Short declaration
    lang := "Golang"
    
    fmt.Println(name, version, isAwesome, lang)
}`,
        output: 'Go 1.21 true Golang'
      },
      {
        title: 'Multiple Variables',
        code: `package main
import "fmt"

func main() {
    var (
        a int = 10
        b int = 20
        c int = 30
    )
    
    x, y := 100, 200
    fmt.Println(a, b, c, x, y)
}`,
        output: '10 20 30 100 200'
      },
      {
        title: 'Constants',
        code: `package main
import "fmt"

const Pi = 3.14159
const (
    StatusOK = 200
    StatusNotFound = 404
)

func main() {
    fmt.Printf("Pi: %.2f\\n", Pi)
    fmt.Printf("Status OK: %d\\n", StatusOK)
}`,
        output: 'Pi: 3.14\nStatus OK: 200'
      }
    ],
    keyPoints: [
      'var for explicit declaration',
      ':= for short declaration with inference',
      'Variables must be used or compilation fails',
      'Constants are declared with const',
      'Package-level variables can be undeclared'
    ],
    commonMistakes: [
      'Not using a variable (compilation error)',
      'Using := in wrong scope',
      'Confusing var with :=',
      'Forgetting that constants are immutable'
    ],
    proTips: [
      'Use := for local variables',
      'Use var for package-level variables',
      'Declare variables close to first use',
      'Use iota for enum-like constants'
    ]
  },

  strings: {
    definition: 'Go strings are immutable sequences of bytes. The strings package provides extensive string manipulation functions.',
    whyUse: 'Strings are essential for text processing, I/O, and data manipulation in Go.',
    whereUse: 'Used for text processing, network protocols, file operations, and data serialization.',
    syntax: 'str := "Hello"',
    explanation: 'Go strings are immutable UTF-8 encoded byte sequences. Use the strings package for operations.',
    examples: [
      {
        title: 'String Basics',
        code: `package main
import (
    "fmt"
    "strings"
)

func main() {
    str := "Hello, Go!"
    fmt.Println(strings.ToUpper(str))
    fmt.Println(strings.ToLower(str))
    fmt.Println(len(str))
}`,
        output: 'HELLO, GO!\nhello, go!\n10'
      },
      {
        title: 'String Operations',
        code: `package main
import (
    "fmt"
    "strings"
)

func main() {
    str := "Hello, World!"
    fmt.Println(strings.Contains(str, "World"))
    fmt.Println(strings.HasPrefix(str, "Hello"))
    fmt.Println(strings.HasSuffix(str, "!"))
    fmt.Println(strings.Index(str, "World"))
}`,
        output: 'true\ntrue\ntrue\n7'
      },
      {
        title: 'String Manipulation',
        code: `package main
import (
    "fmt"
    "strings"
)

func main() {
    str := "  Hello, World  "
    fmt.Println(strings.TrimSpace(str))
    fmt.Println(strings.Replace(str, "World", "Go", 1))
    
    parts := strings.Split("a,b,c", ",")
    fmt.Println(parts)
}`,
        output: 'Hello, World\n  Hello, Go  \n[a b c]'
      }
    ],
    keyPoints: [
      'Strings are immutable',
      'Use strings package for operations',
      'UTF-8 encoding by default',
      'Use []byte for mutability',
      'String concatenation creates new strings'
    ],
    commonMistakes: [
      'Trying to modify strings directly',
      'Not handling Unicode properly',
      'Using + for string concatenation in loops',
      'Forgetting strings are UTF-8'
    ],
    proTips: [
      'Use strings.Builder for concatenation',
      'Use []byte for mutable byte sequences',
      'Use fmt.Sprintf for formatted strings',
      'Use strconv for type conversions'
    ]
  },

  operators: {
    definition: 'Go provides standard arithmetic, comparison, logical, and bitwise operators. Go also has channel operators for concurrency.',
    whyUse: 'Operators enable performing calculations, comparisons, and logical operations on data.',
    whereUse: 'Used throughout Go for math, comparisons, logical operations, and channel communication.',
    syntax: 'operand operator operand',
    explanation: 'Go supports standard operators plus channel send (<-) and receive (<-) operators.',
    examples: [
      {
        title: 'Arithmetic Operators',
        code: `package main
import "fmt"

func main() {
    a, b := 10, 3
    fmt.Printf("Add: %d\\n", a+b)
    fmt.Printf("Subtract: %d\\n", a-b)
    fmt.Printf("Multiply: %d\\n", a*b)
    fmt.Printf("Divide: %d\\n", a/b)
    fmt.Printf("Modulus: %d\\n", a%b)
}`,
        output: 'Add: 13\nSubtract: 7\nMultiply: 30\nDivide: 3\nModulus: 1'
      },
      {
        title: 'Comparison Operators',
        code: `package main
import "fmt"

func main() {
    x, y := 5, 10
    fmt.Printf("x == y: %t\\n", x == y)
    fmt.Printf("x != y: %t\\n", x != y)
    fmt.Printf("x < y: %t\\n", x < y)
    fmt.Printf("x > y: %t\\n", x > y)
    fmt.Printf("x <= y: %t\\n", x <= y)
}`,
        output: 'x == y: false\nx != y: true\nx < y: true\nx > y: false\nx <= y: true'
      },
      {
        title: 'Logical Operators',
        code: `package main
import "fmt"

func main() {
    a, b := true, false
    fmt.Printf("AND: %t\\n", a && b)
    fmt.Printf("OR: %t\\n", a || b)
    fmt.Printf("NOT: %t\\n", !a)
}`,
        output: 'AND: false\nOR: true\nNOT: false'
      }
    ],
    keyPoints: [
      'Standard arithmetic operators',
      'Comparison operators return bool',
      'Logical operators use short-circuit evaluation',
      '<- for channel operations',
      'Bitwise operators for bit manipulation'
    ],
    commonMistakes: [
      'Integer division truncating results',
      'Using = instead of == in comparisons',
      'Not handling division by zero',
      'Confusing && with &'
    ],
    proTips: [
      'Use parentheses for clarity',
      'Understand operator precedence',
      'Use bitwise operators for flags',
      'Use channel operators carefully'
    ]
  },

  conditionals: {
    definition: 'Go supports if, else if, else, and switch statements for conditional execution. Go does not have a ternary operator.',
    whyUse: 'Conditionals enable decision-making in programs based on data or state.',
    whereUse: 'Used for input validation, error handling, and controlling program flow.',
    syntax: 'if condition { } else if condition { } else { }',
    explanation: 'Go conditionals do not use parentheses. Switch statements support multiple values and type switches.',
    examples: [
      {
        title: 'If-Else',
        code: `package main
import "fmt"

func main() {
    age := 20
    if age >= 18 {
        fmt.Println("Adult")
    } else if age >= 13 {
        fmt.Println("Teenager")
    } else {
        fmt.Println("Child")
    }
}`,
        output: 'Adult'
      },
      {
        title: 'Switch Statement',
        code: `package main
import "fmt"

func main() {
    day := "Monday"
    switch day {
    case "Monday", "Tuesday", "Wednesday", "Thursday", "Friday":
        fmt.Println("Weekday")
    case "Saturday", "Sunday":
        fmt.Println("Weekend")
    default:
        fmt.Println("Invalid day")
    }
}`,
        output: 'Weekday'
      },
      {
        title: 'Switch with No Condition',
        code: `package main
import "fmt"

func main() {
    hour := 14
    switch {
    case hour < 12:
        fmt.Println("Morning")
    case hour < 17:
        fmt.Println("Afternoon")
    default:
        fmt.Println("Evening")
    }
}`,
        output: 'Afternoon'
      }
    ],
    keyPoints: [
      'if does not require parentheses',
      'else if and else are optional',
      'switch supports multiple values per case',
      'fallthrough keyword for fallthrough',
      'switch with no condition is like if-else chain'
    ],
    commonMistakes: [
      'Forgetting break in switch cases',
      'Using parentheses in if conditions',
      'Not handling all cases in switch',
      'Using fallthrough when not needed'
    ],
    proTips: [
      'Use switch for multiple conditions',
      'Use switch without condition for if-else chains',
      'Consider using defer for cleanup',
      'Use early returns for guard clauses'
    ]
  },

  loops: {
    definition: 'Go has only one loop construct: the for loop. It can be used as a traditional for, while, or infinite loop.',
    whyUse: 'Loops enable iteration over collections, repeating tasks, and implementing algorithms.',
    whereUse: 'Used for processing arrays, reading input, and implementing algorithms.',
    syntax: 'for init; condition; post { } or for condition { }',
    explanation: 'Go\'s for loop is versatile. It can iterate over slices with range, run with just a condition, or be an infinite loop.',
    examples: [
      {
        title: 'Basic For Loop',
        code: `package main
import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Printf("Iteration: %d\\n", i)
    }
}`,
        output: 'Iteration: 0\nIteration: 1\nIteration: 2\nIteration: 3\nIteration: 4'
      },
      {
        title: 'While Loop',
        code: `package main
import "fmt"

func main() {
    count := 0
    for count < 5 {
        fmt.Printf("Count: %d\\n", count)
        count++
    }
}`,
        output: 'Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4'
      },
      {
        title: 'Range Loop',
        code: `package main
import "fmt"

func main() {
    fruits := []string{"apple", "banana", "cherry"}
    for i, fruit := range fruits {
        fmt.Printf("%d: %s\\n", i, fruit)
    }
}`,
        output: '0: apple\n1: banana\n2: cherry'
      }
    ],
    keyPoints: [
      'for is the only loop construct',
      'for init; condition; post { } for traditional',
      'for condition { } for while loop',
      'for { } for infinite loop',
      'for i, v := range collection for iteration'
    ],
    commonMistakes: [
      'Infinite loops from incorrect conditions',
      'Not using range for collection iteration',
      'Confusing = and == in conditions',
      'Not handling loop variable scope'
    ],
    proTips: [
      'Use range for iterating over collections',
      'Use break and continue for loop control',
      'Consider using goroutines for parallel iteration',
      'Keep loops simple and focused'
    ]
  },

  functions: {
    definition: 'Go functions are first-class citizens. They can return multiple values, be passed as arguments, and support closures.',
    whyUse: 'Functions enable code reuse, modularity, and separation of concerns.',
    whereUse: 'Used to encapsulate functionality, create reusable logic, and structure applications.',
    syntax: 'func name(params) (returnTypes) { }',
    explanation: 'Go functions support multiple return values, named return values, and variadic parameters.',
    examples: [
      {
        title: 'Basic Function',
        code: `package main
import "fmt"

func add(a, b int) int {
    return a + b
}

func main() {
    result := add(5, 3)
    fmt.Printf("Sum: %d\\n", result)
}`,
        output: 'Sum: 8'
      },
      {
        title: 'Multiple Return Values',
        code: `package main
import "fmt"

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 3)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Result: %.2f\\n", result)
}`,
        output: 'Result: 3.33'
      },
      {
        title: 'Variadic Function',
        code: `package main
import "fmt"

func sum(nums ...int) int {
    total := 0
    for _, num := range nums {
        total += num
    }
    return total
}

func main() {
    fmt.Printf("Sum: %d\\n", sum(1, 2, 3, 4, 5))
    fmt.Printf("Sum: %d\\n", sum(10, 20))
}`,
        output: 'Sum: 15\nSum: 30'
      }
    ],
    keyPoints: [
      'Functions can return multiple values',
      'Named return values',
      'Variadic parameters with ...',
      'Functions are first-class citizens',
      'Closures can capture variables'
    ],
    commonMistakes: [
      'Not handling error return values',
      'Confusing value and pointer receivers',
      'Not using named return values when helpful',
      'Forgetting that functions are pass-by-value'
    ],
    proTips: [
      'Use error handling pattern consistently',
      'Keep functions small and focused',
      'Use defer for cleanup',
      'Consider using closures for callbacks'
    ]
  },

  pointers: {
    definition: 'Go has pointers that allow referencing memory addresses. Unlike C, Go does not have pointer arithmetic.',
    whyUse: 'Pointers enable efficient data sharing, in-place modifications, and avoiding copies of large data.',
    whereUse: 'Used for modifying values in place, avoiding copies, and implementing data structures.',
    syntax: 'ptr := &value or *ptr',
    explanation: 'Go supports pointers but no pointer arithmetic. Use & for address, * for dereferencing.',
    examples: [
      {
        title: 'Basic Pointers',
        code: `package main
import "fmt"

func increment(ptr *int) {
    *ptr++
}

func main() {
    x := 10
    fmt.Printf("Before: %d\\n", x)
    increment(&x)
    fmt.Printf("After: %d\\n", x)
}`,
        output: 'Before: 10\nAfter: 11'
      },
      {
        title: 'Pointer to Struct',
        code: `package main
import "fmt"

type Person struct {
    Name string
    Age  int
}

func birthday(p *Person) {
    p.Age++
}

func main() {
    alice := Person{Name: "Alice", Age: 30}
    fmt.Printf("Before: %s is %d\\n", alice.Name, alice.Age)
    birthday(&alice)
    fmt.Printf("After: %s is %d\\n", alice.Name, alice.Age)
}`,
        output: 'Before: Alice is 30\nAfter: Alice is 31'
      },
      {
        title: 'Pointer to Pointer',
        code: `package main
import "fmt"

func main() {
    x := 42
    ptr := &x
    ptrPtr := &ptr
    
    fmt.Printf("x: %d\\n", x)
    fmt.Printf("*ptr: %d\\n", *ptr)
    fmt.Printf("**ptrPtr: %d\\n", **ptrPtr)
}`,
        output: 'x: 42\n*ptr: 42\n**ptrPtr: 42'
      }
    ],
    keyPoints: [
      '& gets address of value',
      '* dereferences pointer',
      'No pointer arithmetic',
      'nil is the zero value for pointers',
      'New() allocates and returns pointer'
    ],
    commonMistakes: [
      'Dereferencing nil pointer',
      'Not initializing pointer before use',
      'Confusing pointer with value',
      'Forgetting to handle nil pointers'
    ],
    proTips: [
      'Use pointers for large structs',
      'Use pointer receivers for methods that modify state',
      'Check for nil before dereferencing',
      'Use new() for allocating'
    ]
  },

  structs: {
    definition: 'Go structs are composite types that group named fields. They are the building blocks for creating complex data types.',
    whyUse: 'Structs enable creating custom types with related fields, implementing OOP concepts, and organizing data.',
    whereUse: 'Used to model real-world entities, create data structures, and implement methods.',
    syntax: 'type StructName struct { Field Type }',
    explanation: 'Structs are value types. They can have methods, be passed by value or pointer, and support embedding.',
    examples: [
      {
        title: 'Basic Struct',
        code: `package main
import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    alice := Person{Name: "Alice", Age: 30}
    fmt.Printf("Name: %s, Age: %d\\n", alice.Name, alice.Age)
}`,
        output: 'Name: Alice, Age: 30'
      },
      {
        title: 'Struct Methods',
        code: `package main
import "fmt"

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64 {
    return r.Width * r.Height
}

func (r *Rectangle) Scale(factor float64) {
    r.Width *= factor
    r.Height *= factor
}

func main() {
    rect := Rectangle{Width: 5, Height: 3}
    fmt.Printf("Area: %.2f\\n", rect.Area())
    rect.Scale(2)
    fmt.Printf("Scaled Area: %.2f\\n", rect.Area())
}`,
        output: 'Area: 15.00\nScaled Area: 60.00'
      },
      {
        title: 'Struct Embedding',
        code: `package main
import "fmt"

type Address struct {
    City, Country string
}

type Person struct {
    Name    string
    Address Address
}

func main() {
    alice := Person{
        Name:    "Alice",
        Address: Address{City: "New York", Country: "USA"},
    }
    fmt.Printf("%s lives in %s\\n", alice.Name, alice.Address.City)
}`,
        output: 'Alice lives in New York'
      }
    ],
    keyPoints: [
      'Structs are value types',
      'Methods can be defined on structs',
      'Pointer receivers for modification',
      'Struct embedding for composition',
      'Zero value is meaningful'
    ],
    commonMistakes: [
      'Confusing value and pointer receivers',
      'Not using pointer for modification',
      'Overcomplicating struct hierarchy',
      'Forgetting zero value initialization'
    ],
    proTips: [
      'Use composition over inheritance',
      'Use pointer receivers for methods that modify state',
      'Keep structs small and focused',
      'Use struct tags for metadata'
    ]
  },

  slices: {
    definition: 'Go slices are dynamic, flexible views of underlying arrays. They are reference types and can grow and shrink as needed.',
    whyUse: 'Slices provide efficient, flexible collections without the fixed size limitations of arrays.',
    whereUse: 'Used for dynamic collections, buffers, and any scenario requiring variable-length sequences.',
    syntax: 'slice := []type{values}',
    explanation: 'Slices have length and capacity. They reference underlying arrays and can be resliced.',
    examples: [
      {
        title: 'Basic Slice',
        code: `package main
import "fmt"

func main() {
    fruits := []string{"apple", "banana", "cherry"}
    fmt.Println(fruits)
    fmt.Printf("Length: %d, Capacity: %d\\n", len(fruits), cap(fruits))
}`,
        output: '[apple banana cherry]\nLength: 3, Capacity: 3'
      },
      {
        title: 'Slice Operations',
        code: `package main
import "fmt"

func main() {
    nums := []int{1, 2, 3, 4, 5}
    
    nums = append(nums, 6, 7)
    fmt.Println("After append:", nums)
    
    nums = append(nums[:3], nums[4:]...)
    fmt.Println("After remove:", nums)
}`,
        output: 'After append: [1 2 3 4 5 6 7]\nAfter remove: [1 2 3 5 6 7]'
      },
      {
        title: 'Slice of Slices',
        code: `package main
import "fmt"

func main() {
    matrix := [][]int{
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9},
    }
    
    for _, row := range matrix {
        fmt.Println(row)
    }
}`,
        output: '[1 2 3]\n[4 5 6]\n[7 8 9]'
      }
    ],
    keyPoints: [
      'Slices are reference types',
      'append() adds elements',
      'len() and cap() for length/capacity',
      'make() creates slices with capacity',
      'copy() copies slices'
    ],
    commonMistakes: [
      'Modifying slice affects underlying array',
      'Not handling append return value',
      'Forgetting slice capacity',
      'Race conditions on slices'
    ],
    proTips: [
      'Use make() for pre-allocated capacity',
      'Use append() for dynamic growth',
      'Be aware of slice aliasing',
      'Consider using sync.Pool for buffers'
    ]
  },

  maps: {
    definition: 'Go maps are hash tables that store key-value pairs. They are reference types and provide fast lookups.',
    whyUse: 'Maps provide efficient key-based storage and retrieval, essential for data modeling and lookups.',
    whereUse: 'Used for configuration, data modeling, caching, and mapping relationships.',
    syntax: 'map := make(map[KeyType]ValueType)',
    explanation: 'Maps are unordered collections. They are reference types and must be initialized before use.',
    examples: [
      {
        title: 'Basic Map',
        code: `package main
import "fmt"

func main() {
    person := map[string]string{
        "name": "Alice",
        "city": "New York",
    }
    
    fmt.Println(person)
    fmt.Println("Name:", person["name"])
}`,
        output: 'map[city:New York name:Alice]\nName: Alice'
      },
      {
        title: 'Map Operations',
        code: `package main
import "fmt"

func main() {
    ages := make(map[string]int)
    ages["Alice"] = 30
    ages["Bob"] = 25
    
    fmt.Println(ages)
    delete(ages, "Bob")
    fmt.Println("After delete:", ages)
    
    age, exists := ages["Alice"]
    fmt.Printf("Alice: %d, exists: %t\\n", age, exists)
}`,
        output: 'map[Alice:30 Bob:25]\nAfter delete: map[Alice:30]\nAlice: 30, exists: true'
      },
      {
        title: 'Map Iteration',
        code: `package main
import "fmt"

func main() {
    scores := map[string]int{
        "math": 95,
        "science": 88,
        "english": 92,
    }
    
    for subject, score := range scores {
        fmt.Printf("%s: %d\\n", subject, score)
    }
}`,
        output: 'math: 95\nscience: 88\nenglish: 92'
      }
    ],
    keyPoints: [
      'Maps are reference types',
      'make() initializes maps',
      'delete() removes entries',
      'comma-ok idiom for checking existence',
      'Maps are unordered'
    ],
    commonMistakes: [
      'Using uninitialized map',
      'Not checking map existence',
      'Assuming map order',
      'Concurrent map access'
    ],
    proTips: [
      'Use make() for initialization',
      'Use comma-ok for existence check',
      'Use sync.Map for concurrent access',
      'Consider using struct keys'
    ]
  },

  arrays: {
    definition: 'Go arrays are fixed-size, value-type collections of elements. They are rarely used directly; slices are preferred.',
    whyUse: 'Arrays provide fixed-size, efficient storage. Slices built on arrays provide flexibility.',
    whereUse: 'Used as building blocks for slices, fixed-size buffers, and performance-critical code.',
    syntax: 'var arr [size]type',
    explanation: 'Arrays are value types with fixed size. They are copied when assigned or passed to functions.',
    examples: [
      {
        title: 'Basic Array',
        code: `package main
import "fmt"

func main() {
    var numbers [5]int
    numbers[0] = 10
    numbers[1] = 20
    
    fmt.Println(numbers)
    fmt.Printf("Length: %d\\n", len(numbers))
}`,
        output: '[10 20 0 0 0]\nLength: 5'
      },
      {
        title: 'Array Initialization',
        code: `package main
import "fmt"

func main() {
    arr := [3]string{"apple", "banana", "cherry"}
    
    // Compiler counts elements
    arr2 := [...]int{1, 2, 3, 4, 5}
    
    fmt.Println(arr)
    fmt.Println(arr2)
}`,
        output: '[apple banana cherry]\n[1 2 3 4 5]'
      },
      {
        title: 'Multi-dimensional Array',
        code: `package main
import "fmt"

func main() {
    matrix := [2][3]int{
        {1, 2, 3},
        {4, 5, 6},
    }
    
    fmt.Println(matrix)
    fmt.Printf("Element [0][1]: %d\\n", matrix[0][1])
}`,
        output: '[[1 2 3] [4 5 6]]\nElement [0][1]: 2'
      }
    ],
    keyPoints: [
      'Fixed size at compile time',
      'Value type (copied on assignment)',
      'Zero value is meaningful',
      'Use slices for dynamic collections',
      'Use [...] for compiler-counted arrays'
    ],
    commonMistakes: [
      'Using arrays instead of slices',
      'Not handling zero values',
      'Confusing arrays with slices',
      'Forgetting arrays are value types'
    ],
    proTips: [
      'Use slices for most use cases',
      'Use arrays for fixed-size buffers',
      'Consider performance implications',
      'Use slice expressions on arrays'
    ]
  },

  interfaces: {
    definition: 'Go interfaces define sets of methods that a type must implement. They are satisfied implicitly without explicit declaration.',
    whyUse: 'Interfaces enable polymorphism, loose coupling, and testing by defining behavior contracts.',
    whereUse: 'Used for creating flexible APIs, dependency injection, and testing.',
    syntax: 'type InterfaceName interface { Method(params) returnType }',
    explanation: 'Go interfaces are satisfied implicitly. Any type with the required methods implements the interface.',
    examples: [
      {
        title: 'Basic Interface',
        code: `package main
import "fmt"

type Stringer interface {
    String() string
}

type Person struct {
    Name string
}

func (p Person) String() string {
    return fmt.Sprintf("Person: %s", p.Name)
}

func main() {
    var s Stringer = Person{Name: "Alice"}
    fmt.Println(s)
}`,
        output: 'Person: Alice'
      },
      {
        title: 'Multiple Interfaces',
        code: `package main
import "fmt"

type Reader interface {
    Read() string
}

type Writer interface {
    Write(data string)
}

type ReadWriter interface {
    Reader
    Writer
}

type File struct {
    data string
}

func (f *File) Read() string {
    return f.data
}

func (f *File) Write(data string) {
    f.data = data
}

func main() {
    var rw ReadWriter = &File{}
    rw.Write("Hello")
    fmt.Println(rw.Read())
}`,
        output: 'Hello'
      },
      {
        title: 'Empty Interface',
        code: `package main
import "fmt"

func printAny(value interface{}) {
    fmt.Printf("Type: %T, Value: %v\\n", value, value)
}

func main() {
    printAny("hello")
    printAny(42)
    printAny(true)
}`,
        output: 'Type: string, Value: hello\nType: int, Value: 42\nType: bool, Value: true'
      }
    ],
    keyPoints: [
      'Interfaces are satisfied implicitly',
      'Empty interface accepts any type',
      'Interfaces are reference types',
      'Use interfaces for flexibility',
      'Keep interfaces small'
    ],
    commonMistakes: [
      'Making interfaces too large',
      'Not using interfaces for testing',
      'Confusing interfaces with abstract classes',
      'Forgetting nil interface handling'
    ],
    proTips: [
      'Keep interfaces small (1-3 methods)',
      'Define interfaces where they are used',
      'Use interfaces for dependency injection',
      'Accept interfaces, return structs'
    ]
  },

  errors: {
    definition: 'Go uses error values for error handling. The error interface is built into the language.',
    whyUse: 'Explicit error handling makes code more robust and predictable.',
    whereUse: 'Used everywhere for handling failures, invalid input, and exceptional conditions.',
    syntax: 'if err != nil { return err }',
    explanation: 'Go functions return error as last value. Callers must check for errors explicitly.',
    examples: [
      {
        title: 'Basic Error Handling',
        code: `package main
import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Printf("Result: %.2f\\n", result)
}`,
        output: 'Error: division by zero'
      },
      {
        title: 'Custom Error Types',
        code: `package main
import "fmt"

type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation error on field '%s': %s", e.Field, e.Message)
}

func validateAge(age int) error {
    if age < 0 {
        return &ValidationError{Field: "age", Message: "must be positive"}
    }
    return nil
}

func main() {
    err := validateAge(-5)
    if err != nil {
        fmt.Println(err)
    }
}`,
        output: "validation error on field 'age': must be positive"
      },
      {
        title: 'Error Wrapping',
        code: `package main
import (
    "fmt"
    "os"
)

func readFile(path string) error {
    file, err := os.Open(path)
    if err != nil {
        return fmt.Errorf("reading file: %w", err)
    }
    defer file.Close()
    return nil
}

func main() {
    err := readFile("nonexistent.txt")
    if err != nil {
        fmt.Println(err)
    }
}`,
        output: 'reading file: open nonexistent.txt: The system cannot find the file specified.'
      }
    ],
    keyPoints: [
      'error is an interface',
      'Return error as last value',
      'Check err != nil',
      'Use fmt.Errorf with %w for wrapping',
      'Use errors.Is and errors.As for checking'
    ],
    commonMistakes: [
      'Ignoring errors',
      'Using panic for errors',
      'Not wrapping errors',
      'Using string comparison for errors'
    ],
    proTips: [
      'Handle errors immediately',
      'Wrap errors with context',
      'Use custom error types',
      'Use sentinel errors for known conditions'
    ]
  },

  goroutines: {
    definition: 'Goroutines are lightweight threads managed by the Go runtime. They enable concurrent execution with minimal overhead.',
    whyUse: 'Goroutines provide efficient concurrency for I/O-bound and CPU-bound tasks.',
    whereUse: 'Used for concurrent web servers, parallel processing, and asynchronous operations.',
    syntax: 'go function()',
    explanation: 'Goroutines are cheaper than OS threads. They communicate via channels.',
    examples: [
      {
        title: 'Basic Goroutine',
        code: `package main
import (
    "fmt"
    "time"
)

func sayHello(name string) {
    fmt.Printf("Hello, %s!\\n", name)
}

func main() {
    go sayHello("Alice")
    go sayHello("Bob")
    time.Sleep(time.Second)
}`,
        output: 'Hello, Alice!\nHello, Bob!'
      },
      {
        title: 'Goroutine with WaitGroup',
        code: `package main
import (
    "fmt"
    "sync"
)

func worker(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    fmt.Printf("Worker %d starting\\n", id)
    fmt.Printf("Worker %d done\\n", id)
}

func main() {
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go worker(i, &wg)
    }
    wg.Wait()
    fmt.Println("All workers done")
}`,
        output: 'Worker 1 starting\nWorker 1 done\nWorker 2 starting\nWorker 2 done\nWorker 3 starting\nWorker 3 done\nAll workers done'
      },
      {
        title: 'Goroutine with Channel',
        code: `package main
import "fmt"

func producer(ch chan<- int) {
    for i := 0; i < 5; i++ {
        ch <- i
    }
    close(ch)
}

func consumer(ch <-chan int) {
    for val := range ch {
        fmt.Printf("Received: %d\\n", val)
    }
}

func main() {
    ch := make(chan int)
    go producer(ch)
    consumer(ch)
}`,
        output: 'Received: 0\nReceived: 1\nReceived: 2\nReceived: 3\nReceived: 4'
      }
    ],
    keyPoints: [
      'go keyword starts goroutine',
      'Goroutines are lightweight',
      'Use channels for communication',
      'Use WaitGroup for synchronization',
      'Main goroutine must wait for others'
    ],
    commonMistakes: [
      'Race conditions on shared data',
      'Not waiting for goroutines',
      'Goroutine leaks',
      'Overusing goroutines'
    ],
    proTips: [
      'Use channels for communication',
      'Use WaitGroup for synchronization',
      'Limit goroutine count with semaphores',
      'Use context for cancellation'
    ]
  },

  channels: {
    definition: 'Channels are typed conduits for communicating between goroutines. They enable safe data sharing without explicit locks.',
    whyUse: 'Channels provide safe, synchronized communication between concurrent goroutines.',
    whereUse: 'Used for inter-goroutine communication, work distribution, and event-driven programming.',
    syntax: 'ch := make(chan type)',
    explanation: 'Channels can be buffered or unbuffered. They support send (<-) and receive operations.',
    examples: [
      {
        title: 'Unbuffered Channel',
        code: `package main
import "fmt"

func main() {
    ch := make(chan string)
    
    go func() {
        ch <- "Hello"
    }()
    
    msg := <-ch
    fmt.Println(msg)
}`,
        output: 'Hello'
      },
      {
        title: 'Buffered Channel',
        code: `package main
import "fmt"

func main() {
    ch := make(chan int, 3)
    
    ch <- 1
    ch <- 2
    ch <- 3
    
    fmt.Println(<-ch)
    fmt.Println(<-ch)
    fmt.Println(<-ch)
}`,
        output: '1\n2\n3'
      },
      {
        title: 'Channel Direction',
        code: `package main
import "fmt"

func producer(ch chan<- int) {
    for i := 0; i < 5; i++ {
        ch <- i
    }
    close(ch)
}

func consumer(ch <-chan int) {
    for val := range ch {
        fmt.Printf("Received: %d\\n", val)
    }
}

func main() {
    ch := make(chan int)
    go producer(ch)
    consumer(ch)
}`,
        output: 'Received: 0\nReceived: 1\nReceived: 2\nReceived: 3\nReceived: 4'
      }
    ],
    keyPoints: [
      'Unbuffered channels synchronize',
      'Buffered channels have capacity',
      'Send (<-) and receive (<-) operations',
      'close() to signal no more data',
      'range iterates over channel'
    ],
    commonMistakes: [
      'Deadlock from unbuffered sends',
      'Not closing channels',
      'Sending on closed channel',
      'Buffer overflow'
    ],
    proTips: [
      'Use unbuffered for synchronization',
      'Use buffered for decoupling',
      'Close channels when done sending',
      'Use select for multiple channels'
    ]
  },

  select: {
    definition: 'The select statement chooses which channel operation to execute when multiple are ready. It enables multiplexing channel communications.',
    whyUse: 'Select enables handling multiple channel operations simultaneously, implementing timeouts, and non-blocking operations.',
    whereUse: 'Used for timeout handling, non-blocking operations, and multiplexing channel communications.',
    syntax: 'select { case <-ch1: case ch2 <- val: }',
    explanation: 'Select blocks until one case is ready, then executes that case. Multiple ready cases are chosen randomly.',
    examples: [
      {
        title: 'Basic Select',
        code: `package main
import (
    "fmt"
    "time"
)

func main() {
    ch1 := make(chan string)
    ch2 := make(chan string)
    
    go func() {
        time.Sleep(100 * time.Millisecond)
        ch1 <- "one"
    }()
    
    go func() {
        time.Sleep(200 * time.Millisecond)
        ch2 <- "two"
    }()
    
    select {
    case msg := <-ch1:
        fmt.Println("Received from ch1:", msg)
    case msg := <-ch2:
        fmt.Println("Received from ch2:", msg)
    }
}`,
        output: 'Received from ch1: one'
      },
      {
        title: 'Timeout',
        code: `package main
import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan string)
    
    go func() {
        time.Sleep(2 * time.Second)
        ch <- "done"
    }()
    
    select {
    case msg := <-ch:
        fmt.Println("Received:", msg)
    case <-time.After(1 * time.Second):
        fmt.Println("Timeout!")
    }
}`,
        output: 'Timeout!'
      },
      {
        title: 'Non-blocking',
        code: `package main
import "fmt"

func main() {
    ch := make(chan int, 1)
    
    select {
    case ch <- 1:
        fmt.Println("Sent")
    default:
        fmt.Println("Channel full")
    }
    
    select {
    case val := <-ch:
        fmt.Println("Received:", val)
    default:
        fmt.Println("Channel empty")
    }
}`,
        output: 'Sent\nReceived: 1'
      }
    ],
    keyPoints: [
      'Choose ready channel operation',
      'default case for non-blocking',
      'time.After for timeouts',
      'Multiple ready cases chosen randomly',
      'Can be used in for loops'
    ],
    commonMistakes: [
      'Forgetting default case',
      'Not handling timeout',
      'Overcomplicating select',
      'Race conditions in select'
    ],
    proTips: [
      'Use select for timeouts',
      'Use default for non-blocking',
      'Use time.After for deadline',
      'Keep select cases simple'
    ]
  },

  http: {
    definition: 'Go has a powerful net/http package for building HTTP servers and clients. It provides both low-level and high-level APIs.',
    whyUse: 'The standard library provides production-ready HTTP support without external dependencies.',
    whereUse: 'Used for building web servers, APIs, microservices, and HTTP clients.',
    syntax: 'http.HandleFunc("/", handler)',
    explanation: 'Go\'s HTTP package supports handlers, middleware, TLS, and client-server architecture.',
    examples: [
      {
        title: 'Basic HTTP Server',
        code: `package main
import (
    "fmt"
    "net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, %s!", r.URL.Path[1:])
}

func main() {
    http.HandleFunc("/", handler)
    fmt.Println("Server starting on :8080")
    http.ListenAndServe(":8080", nil)
}`,
        output: 'Server starting on :8080'
      },
      {
        title: 'HTTP Methods',
        code: `package main
import (
    "encoding/json"
    "fmt"
    "net/http"
)

type Response struct {
    Message string \`json:"message"\`
    Method  string \`json:"method"\`
}

func handler(w http.ResponseWriter, r *http.Request) {
    resp := Response{
        Message: "Hello!",
        Method:  r.Method,
    }
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(resp)
}

func main() {
    http.HandleFunc("/", handler)
    http.ListenAndServe(":8080", nil)
}`,
        output: 'HTTP server with JSON response'
      },
      {
        title: 'HTTP Client',
        code: `package main
import (
    "fmt"
    "io"
    "net/http"
)

func main() {
    resp, err := http.Get("https://api.example.com/data")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer resp.Body.Close()
    
    body, err := io.ReadAll(resp.Body)
    if err != nil {
        fmt.Println("Error reading body:", err)
        return
    }
    fmt.Println(string(body))
}`,
        output: 'Response body'
      }
    ],
    keyPoints: [
      'http.HandleFunc registers handlers',
      'http.ListenAndServe starts server',
      'http.Client for HTTP requests',
      'Supports middleware and routing',
      'Built-in JSON encoding/decoding'
    ],
    commonMistakes: [
      'Not closing response bodies',
      'Not setting timeouts',
      'Not handling errors properly',
      'Forgetting Content-Type header'
    ],
    proTips: [
      'Use http.Server for production',
      'Set proper timeouts',
      'Use middleware for cross-cutting concerns',
      'Consider using gorilla/mux for routing'
    ]
  },

  packages: {
    definition: 'Go packages organize code into reusable modules. Each directory is a package, and packages can be imported by other packages.',
    whyUse: 'Packages enable code organization, encapsulation, and reuse.',
    whereUse: 'Used for organizing code, creating libraries, and structuring applications.',
    syntax: 'package main',
    explanation: 'Go packages are directories with Go files. The package name must match the directory name.',
    examples: [
      {
        title: 'Package Declaration',
        code: `// main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello from main package")
}`,
        output: 'Hello from main package'
      },
      {
        title: 'Multiple Files in Package',
        code: `// utils.go
package utils

func Add(a, b int) int {
    return a + b
}

func Multiply(a, b int) int {
    return a * b
}`,
        output: 'Package created'
      },
      {
        title: 'Importing Packages',
        code: `package main

import (
    "fmt"
    "strings"
)

func main() {
    fmt.Println(strings.ToUpper("hello"))
    fmt.Println(strings.Contains("hello world", "world"))
}`,
        output: 'HELLO\ntrue'
      }
    ],
    keyPoints: [
      'Package declaration at top of file',
      'Directory name is package name',
      'Import packages with import',
      'Exported names start with uppercase',
      'Unexported names start with lowercase'
    ],
    commonMistakes: [
      'Not matching package name with directory',
      'Importing circular dependencies',
      'Not exporting needed functions',
      'Forgetting package declaration'
    ],
    proTips: [
      'Keep packages focused',
      'Use internal packages for private code',
      'Use meaningful package names',
      'Avoid circular dependencies'
    ]
  },

  defer: {
    definition: 'Go\'s defer statement schedules a function call to be executed after the surrounding function returns. Deferred calls are executed in LIFO order.',
    whyUse: 'Defer ensures cleanup code runs regardless of how a function exits, making resource management safer.',
    whereUse: 'Used for closing files, releasing locks, and cleanup operations.',
    syntax: 'defer function()',
    explanation: 'Defer executes when the surrounding function returns. Multiple defers run in reverse order (LIFO).',
    examples: [
      {
        title: 'Basic Defer',
        code: `package main
import "fmt"

func main() {
    fmt.Println("Start")
    defer fmt.Println("Deferred 1")
    defer fmt.Println("Deferred 2")
    fmt.Println("End")
}`,
        output: 'Start\nEnd\nDeferred 2\nDeferred 1'
      },
      {
        title: 'Defer with Function',
        code: `package main
import "fmt"

func trace(name string) {
    fmt.Printf("Entering %s\\n", name)
    defer fmt.Printf("Exiting %s\\n", name)
}

func main() {
    trace("main")
    fmt.Println("Inside main")
}`,
        output: 'Entering main\nInside main\nExiting main'
      },
      {
        title: 'Defer with File',
        code: `package main
import (
    "fmt"
    "os"
)

func main() {
    file, err := os.Create("test.txt")
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    defer file.Close()
    
    file.WriteString("Hello, World!")
    fmt.Println("File written")
}`,
        output: 'File written'
      }
    ],
    keyPoints: [
      'Deferred functions execute after return',
      'LIFO order for multiple defers',
      'Arguments evaluated immediately',
      'Used for cleanup operations',
      'Common with Close(), Unlock(), etc.'
    ],
    commonMistakes: [
      'Assuming defer runs immediately',
      'Not understanding argument evaluation',
      'Using defer in loops',
      'Forgetting multiple defers run in LIFO'
    ],
    proTips: [
      'Use defer for resource cleanup',
      'Keep defer simple',
      'Be aware of defer timing',
      'Use defer for unlocking mutexes'
    ]
  },

  context: {
    definition: 'Go context carries cancellation signals, deadlines, and request-scoped values across API boundaries and goroutines.',
    whyUse: 'Context enables graceful cancellation, timeout handling, and passing request-scoped data.',
    whereUse: 'Used in HTTP handlers, database queries, and any operation that should be cancellable.',
    syntax: 'ctx, cancel := context.WithCancel(parent)',
    explanation: 'Context propagates cancellation and deadlines. It\'s passed as first parameter to functions.',
    examples: [
      {
        title: 'Basic Context',
        code: `package main
import (
    "context"
    "fmt"
    "time"
)

func longOperation(ctx context.Context) {
    select {
    case <-time.After(2 * time.Second):
        fmt.Println("Operation completed")
    case <-ctx.Done():
        fmt.Println("Operation cancelled:", ctx.Err())
    }
}

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), time.Second)
    defer cancel()
    
    longOperation(ctx)
}`,
        output: 'Operation cancelled: context deadline exceeded'
      },
      {
        title: 'Context with Values',
        code: `package main
import "context"

type contextKey string

func main() {
    ctx := context.WithValue(context.Background(), contextKey("userID"), "12345")
    userID := ctx.Value(contextKey("userID"))
    println(userID.(string))
}`,
        output: '12345'
      },
      {
        title: 'Context Cancellation',
        code: `package main
import (
    "context"
    "fmt"
    "time"
)

func worker(ctx context.Context, id int) {
    for {
        select {
        case <-ctx.Done():
            fmt.Printf("Worker %d stopped: %v\\n", id, ctx.Err())
            return
        default:
            fmt.Printf("Worker %d working...\\n", id)
            time.Sleep(500 * time.Millisecond)
        }
    }
}

func main() {
    ctx, cancel := context.WithCancel(context.Background())
    
    go worker(ctx, 1)
    go worker(ctx, 2)
    
    time.Sleep(time.Second)
    cancel()
    
    time.Sleep(time.Second)
}`,
        output: 'Worker 1 working...\nWorker 2 working...\nWorker 1 working...\nWorker 2 working...\nWorker 1 stopped: context canceled\nWorker 2 stopped: context canceled'
      }
    ],
    keyPoints: [
      'Context carries cancellation signals',
      'WithCancel for manual cancellation',
      'WithTimeout for automatic timeout',
      'WithValue for request-scoped data',
      'Pass context as first parameter'
    ],
    commonMistakes: [
      'Storing context in struct',
      'Not calling cancel',
      'Passing nil context',
      'Using context for unrelated data'
    ],
    proTips: [
      'Always pass context as first parameter',
      'Always call cancel when done',
      'Use context for cancellation',
      'Avoid storing context in structs'
    ]
  }
}

export default go