const go = {
  intro: {
    definition: 'Go (Golang) is an open-source programming language created at Google. It is designed for simplicity, efficiency, and concurrent programming.',
    whyUse: null,
    whereUse: null,
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
      'Simple, minimal syntax'
    ],
    commonMistakes: [
      'Not handling errors properly',
      'Confusing short declaration (:=) with assignment (=)'
    ],
    proTips: [
      'Use gofmt to format code automatically',
      'Keep functions small and focused'
    ]
  },

  setup: {
    definition: 'Setting up a Go development environment involves installing Go, configuring GOPATH, and setting up your editor.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'go run for running, go build for compiling'
    ],
    commonMistakes: [
      'Not setting GOPATH correctly',
      'Not using Go modules'
    ],
    proTips: [
      'Use Go modules for dependency management',
      'Set up editor with gopls language server'
    ]
  },

  variables: {
    definition: 'Go variables are explicitly typed or inferred using :=. Go supports multiple variable declarations and has both short and long form declarations.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Variables must be used or compilation fails'
    ],
    commonMistakes: [
      'Not using a variable (compilation error)',
      'Using := in wrong scope'
    ],
    proTips: [
      'Use := for local variables',
      'Use iota for enum-like constants'
    ]
  },

  strings: {
    definition: 'Go strings are immutable sequences of bytes. The strings package provides extensive string manipulation functions.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'UTF-8 encoding by default'
    ],
    commonMistakes: [
      'Trying to modify strings directly',
      'Not handling Unicode properly'
    ],
    proTips: [
      'Use strings.Builder for concatenation',
      'Use fmt.Sprintf for formatted strings'
    ]
  },

  operators: {
    definition: 'Go provides standard arithmetic, comparison, logical, and bitwise operators. Go also has channel operators for concurrency.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      '<- for channel operations'
    ],
    commonMistakes: [
      'Integer division truncating results',
      'Using = instead of == in comparisons'
    ],
    proTips: [
      'Use parentheses for clarity',
      'Use bitwise operators for flags'
    ]
  },

  conditionals: {
    definition: 'Go supports if, else if, else, and switch statements for conditional execution. Go does not have a ternary operator.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'switch supports multiple values per case',
      'switch with no condition is like if-else chain'
    ],
    commonMistakes: [
      'Using parentheses in if conditions',
      'Not handling all cases in switch'
    ],
    proTips: [
      'Use switch for multiple conditions',
      'Use early returns for guard clauses'
    ]
  },

  loops: {
    definition: 'Go has only one loop construct: the for loop. It can be used as a traditional for, while, or infinite loop.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'for i, v := range collection for iteration'
    ],
    commonMistakes: [
      'Infinite loops from incorrect conditions',
      'Not using range for collection iteration'
    ],
    proTips: [
      'Use range for iterating over collections',
      'Use break and continue for loop control'
    ]
  },

  functions: {
    definition: 'Go functions are first-class citizens. They can return multiple values, be passed as arguments, and support closures.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Variadic parameters with ...'
    ],
    commonMistakes: [
      'Not handling error return values',
      'Forgetting that functions are pass-by-value'
    ],
    proTips: [
      'Use error handling pattern consistently',
      'Use defer for cleanup'
    ]
  },

  pointers: {
    definition: 'Go has pointers that allow referencing memory addresses. Unlike C, Go does not have pointer arithmetic.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'No pointer arithmetic'
    ],
    commonMistakes: [
      'Dereferencing nil pointer',
      'Not initializing pointer before use'
    ],
    proTips: [
      'Use pointers for large structs',
      'Check for nil before dereferencing'
    ]
  },

  structs: {
    definition: 'Go structs are composite types that group named fields. They are the building blocks for creating complex data types.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Struct embedding for composition'
    ],
    commonMistakes: [
      'Confusing value and pointer receivers',
      'Not using pointer for modification'
    ],
    proTips: [
      'Use composition over inheritance',
      'Use pointer receivers for methods that modify state'
    ]
  },

  slices: {
    definition: 'Go slices are dynamic, flexible views of underlying arrays. They are reference types and can grow and shrink as needed.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'len() and cap() for length/capacity'
    ],
    commonMistakes: [
      'Modifying slice affects underlying array',
      'Not handling append return value'
    ],
    proTips: [
      'Use make() for pre-allocated capacity',
      'Be aware of slice aliasing'
    ]
  },

  maps: {
    definition: 'Go maps are hash tables that store key-value pairs. They are reference types and provide fast lookups.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'comma-ok idiom for checking existence'
    ],
    commonMistakes: [
      'Using uninitialized map',
      'Not checking map existence'
    ],
    proTips: [
      'Use make() for initialization',
      'Use comma-ok for existence check'
    ]
  },

  arrays: {
    definition: 'Go arrays are fixed-size, value-type collections of elements. They are rarely used directly; slices are preferred.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Use slices for dynamic collections'
    ],
    commonMistakes: [
      'Using arrays instead of slices',
      'Forgetting arrays are value types'
    ],
    proTips: [
      'Use slices for most use cases',
      'Use arrays for fixed-size buffers'
    ]
  },

  interfaces: {
    definition: 'Go interfaces define sets of methods that a type must implement. They are satisfied implicitly without explicit declaration.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Keep interfaces small'
    ],
    commonMistakes: [
      'Making interfaces too large',
      'Not using interfaces for testing'
    ],
    proTips: [
      'Keep interfaces small (1-3 methods)',
      'Accept interfaces, return structs'
    ]
  },

  errors: {
    definition: 'Go uses error values for error handling. The error interface is built into the language.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Use fmt.Errorf with %w for wrapping'
    ],
    commonMistakes: [
      'Ignoring errors',
      'Using panic for errors'
    ],
    proTips: [
      'Handle errors immediately',
      'Wrap errors with context'
    ]
  },

  goroutines: {
    definition: 'Goroutines are lightweight threads managed by the Go runtime. They enable concurrent execution with minimal overhead.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Use channels for communication'
    ],
    commonMistakes: [
      'Race conditions on shared data',
      'Not waiting for goroutines'
    ],
    proTips: [
      'Use channels for communication',
      'Use context for cancellation'
    ]
  },

  channels: {
    definition: 'Channels are typed conduits for communicating between goroutines. They enable safe data sharing without explicit locks.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'close() to signal no more data'
    ],
    commonMistakes: [
      'Deadlock from unbuffered sends',
      'Sending on closed channel'
    ],
    proTips: [
      'Use unbuffered for synchronization',
      'Use select for multiple channels'
    ]
  },

  select: {
    definition: 'The select statement chooses which channel operation to execute when multiple are ready. It enables multiplexing channel communications.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'time.After for timeouts'
    ],
    commonMistakes: [
      'Forgetting default case',
      'Not handling timeout'
    ],
    proTips: [
      'Use select for timeouts',
      'Use default for non-blocking'
    ]
  },

  http: {
    definition: 'Go has a powerful net/http package for building HTTP servers and clients. It provides both low-level and high-level APIs.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'http.Client for HTTP requests'
    ],
    commonMistakes: [
      'Not closing response bodies',
      'Not setting timeouts'
    ],
    proTips: [
      'Use http.Server for production',
      'Set proper timeouts'
    ]
  },

  packages: {
    definition: 'Go packages organize code into reusable modules. Each directory is a package, and packages can be imported by other packages.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Exported names start with uppercase'
    ],
    commonMistakes: [
      'Not matching package name with directory',
      'Importing circular dependencies'
    ],
    proTips: [
      'Keep packages focused',
      'Use meaningful package names'
    ]
  },

  defer: {
    definition: 'Go\'s defer statement schedules a function call to be executed after the surrounding function returns. Deferred calls are executed in LIFO order.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'Used for cleanup operations'
    ],
    commonMistakes: [
      'Assuming defer runs immediately',
      'Using defer in loops'
    ],
    proTips: [
      'Use defer for resource cleanup',
      'Keep defer simple'
    ]
  },

  context: {
    definition: 'Go context carries cancellation signals, deadlines, and request-scoped values across API boundaries and goroutines.',
    whyUse: null,
    whereUse: null,
    syntax: null,
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
      'WithTimeout for automatic timeout',
      'Pass context as first parameter'
    ],
    commonMistakes: [
      'Storing context in struct',
      'Not calling cancel'
    ],
    proTips: [
      'Always pass context as first parameter',
      'Always call cancel when done'
    ]
  }
}

export default go
