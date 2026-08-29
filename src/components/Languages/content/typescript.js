const typescript = {
  intro: {
    definition: 'TypeScript is a strongly typed programming language that builds on JavaScript, developed by Microsoft. It adds static type checking to JavaScript.',
    whyUse: 'TypeScript catches errors at compile time, provides better IDE support, and makes large codebases more maintainable.',
    whereUse: 'Used for large-scale web applications, enterprise software, Angular/React/Vue projects, and anywhere JavaScript is used.',
    syntax: null,
    explanation: 'TypeScript compiles to JavaScript. It adds type annotations, interfaces, generics, and other features while maintaining full JavaScript compatibility.',
    examples: [
      {
        title: 'Hello World',
        code: `const greeting: string = "Hello, TypeScript!";
console.log(greeting);`,
        output: 'Hello, TypeScript!'
      },
      {
        title: 'Type Annotations',
        code: `function add(a: number, b: number): number {
    return a + b;
}
console.log(add(5, 3));`,
        output: '8'
      },
      {
        title: 'Type Inference',
        code: `let message = "TypeScript infers this as string";
let count = 42;
let isValid = true;

console.log(typeof message, typeof count, typeof isValid);`,
        output: 'string number boolean'
      }
    ],
    keyPoints: [
      'TypeScript is a superset of JavaScript',
      'Adds static type checking',
      'Compiles to plain JavaScript',
      'Supports interfaces and generics',
      'Excellent IDE support with IntelliSense'
    ],
    commonMistakes: [
      'Using any type defeats the purpose',
      'Not enabling strict mode',
      'Overcomplicating type definitions',
      'Ignoring compiler errors'
    ],
    proTips: [
      'Enable strict mode in tsconfig.json',
      'Use type inference when obvious',
      'Prefer interfaces over type aliases for objects',
      'Use readonly for immutable data'
    ]
  },

  setup: {
    definition: 'Setting up TypeScript involves installing the compiler, configuring tsconfig.json, and setting up your development environment.',
    whyUse: 'Proper setup enables type checking, compilation, and IDE support for TypeScript development.',
    whereUse: 'Required for any TypeScript project.',
    syntax: 'npm install -g typescript',
    explanation: 'Install TypeScript globally or locally, create tsconfig.json for configuration, and use tsc to compile.',
    examples: [
      {
        title: 'Install TypeScript',
        code: `# Install globally
npm install -g typescript

# Check version
tsc --version

# Initialize project
tsc --init`,
        output: 'Version 5.x.x'
      },
      {
        title: 'Basic tsconfig.json',
        code: `{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "strict": true,
        "esModuleInterop": true,
        "outDir": "./dist"
    },
    "include": ["src/**/*"]
}`,
        output: 'Configuration file created'
      },
      {
        title: 'Compile and Run',
        code: `# Compile TypeScript
tsc

# Watch mode
tsc --watch

# Run compiled JavaScript
node dist/app.js`,
        output: 'Compilation successful'
      }
    ],
    keyPoints: [
      'Install with npm install -g typescript',
      'Use tsc --init to create tsconfig.json',
      'tsc compiles TypeScript to JavaScript',
      'Enable strict mode for better type safety',
      'Use watch mode for development'
    ],
    commonMistakes: [
      'Not configuring tsconfig.json properly',
      'Forgetting to enable strict mode',
      'Not understanding compilation output',
      'Mixing TypeScript and JavaScript files'
    ],
    proTips: [
      'Use TypeScript in package.json scripts',
      'Configure path aliases in tsconfig',
      'Use ts-node for direct TypeScript execution',
      'Set up ESLint with TypeScript plugin'
    ]
  },

  types: {
    definition: 'TypeScript provides several built-in types including string, number, boolean, array, tuple, enum, any, unknown, void, null, and undefined.',
    whyUse: 'Types enable compile-time error checking, better code documentation, and improved developer experience.',
    whereUse: 'Used throughout TypeScript for variable declarations, function parameters, and return types.',
    syntax: 'let variable: type = value;',
    explanation: 'TypeScript uses type annotations to specify types. Types can be inferred or explicitly declared.',
    examples: [
      {
        title: 'Primitive Types',
        code: `let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let undef: undefined = undefined;

console.log(name, age, isActive);`,
        output: 'Alice 30 true'
      },
      {
        title: 'Array Types',
        code: `let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

console.log(numbers.length);
console.log(names.join(", "));`,
        output: '5\nAlice, Bob, Charlie'
      },
      {
        title: 'Tuple and Enum',
        code: `// Tuple
let person: [string, number] = ["Alice", 30];
console.log(person);

// Enum
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
let dir: Direction = Direction.Up;
console.log(dir);`,
        output: '["Alice", 30]\nUP'
      }
    ],
    keyPoints: [
      'string, number, boolean are primitives',
      'Array<T> or T[] for arrays',
      'Tuple for fixed-length arrays',
      'Enum for named constants',
      'any disables type checking'
    ],
    commonMistakes: [
      'Using any when a specific type is possible',
      'Not understanding type inference',
      'Confusing type aliases with interfaces',
      'Forgetting null and undefined are types'
    ],
    proTips: [
      'Avoid any - use unknown instead',
      'Use union types for flexibility',
      'Leverage type inference',
      'Use const enums for performance'
    ]
  },

  arrays: {
    definition: 'TypeScript arrays are ordered collections of elements of the same type. They provide type-safe array operations.',
    whyUse: 'Type-safe arrays prevent runtime errors and enable better IDE support for array operations.',
    whereUse: 'Used for storing collections of data, implementing data structures, and processing lists.',
    syntax: 'let array: type[] = [values];',
    explanation: 'TypeScript arrays can be typed using type[], Array<type>, or inferred. Readonly arrays prevent modification.',
    examples: [
      {
        title: 'Typed Arrays',
        code: `let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];

console.log(numbers.map(n => n * 2));
console.log(names.filter(n => n.length > 3));`,
        output: '[2, 4, 6, 8, 10]\n["Alice", "Charlie"]'
      },
      {
        title: 'Array Methods',
        code: `let fruits: string[] = ["apple", "banana", "cherry"];

console.log(fruits.includes("banana"));
console.log(fruits.indexOf("cherry"));
console.log(fruits.join(" - "));`,
        output: 'true\n2\napple - banana - cherry'
      },
      {
        title: 'Readonly Arrays',
        code: `let readonlyNumbers: readonly number[] = [1, 2, 3, 4, 5];
// readonlyNumbers.push(6); // Error!

let mixed: (string | number)[] = [1, "two", 3, "four"];
console.log(mixed);`,
        output: '[1, "two", 3, "four"]'
      }
    ],
    keyPoints: [
      'Type[] or Array<Type> for typed arrays',
      'readonly for immutable arrays',
      'Generic methods for type preservation',
      'Spread operator for combining arrays',
      'Destructuring for array unpacking'
    ],
    commonMistakes: [
      'Not using readonly for immutable arrays',
      'Mixing types without union types',
      'Forgetting array methods return new arrays',
      'Using any[] instead of specific types'
    ],
    proTips: [
      'Use generic types for array methods',
      'Prefer map/filter/reduce over for loops',
      'Use tuple for fixed-length arrays',
      'Consider using ReadonlyArray<T>'
    ]
  },

  interfaces: {
    definition: 'Interfaces in TypeScript define the shape of objects. They specify what properties and methods an object should have.',
    whyUse: 'Interfaces provide clear contracts for objects, enabling better code organization and type checking.',
    whereUse: 'Used for defining object shapes, function parameters, and class contracts.',
    syntax: 'interface InterfaceName { property: type; method(): returnType; }',
    explanation: 'Interfaces define object structure. They can be extended, merged, and used for type checking.',
    examples: [
      {
        title: 'Basic Interface',
        code: `interface Person {
    name: string;
    age: number;
    email?: string;
}

function greet(person: Person): string {
    return \`Hello, \${person.name}!\`;
}

const alice: Person = { name: "Alice", age: 30 };
console.log(greet(alice));`,
        output: 'Hello, Alice!'
      },
      {
        title: 'Interface with Methods',
        code: `interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));`,
        output: '8\n6'
      },
      {
        title: 'Interface Inheritance',
        code: `interface Animal {
    name: string;
    speak(): string;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    name: "Rex",
    breed: "German Shepherd",
    speak: () => "Woof!"
};

console.log(myDog.speak());`,
        output: 'Woof!'
      }
    ],
    keyPoints: [
      'Define object shape with properties',
      'Optional properties with ?',
      'Methods are function types',
      'Interfaces can extend other interfaces',
      'Interfaces are compile-time only'
    ],
    commonMistakes: [
      'Confusing interfaces with type aliases',
      'Not using optional properties correctly',
      'Overcomplicating interface hierarchy',
      'Forgetting interfaces are erased at runtime'
    ],
    proTips: [
      'Use interfaces for object shapes',
      'Extend interfaces for composition',
      'Use declaration merging for libraries',
      'Prefer interfaces over classes for contracts'
    ]
  },

  typealiases: {
    definition: 'Type aliases in TypeScript create new names for existing types. They can represent primitive types, unions, tuples, and complex object types.',
    whyUse: 'Type aliases improve code readability and enable creating complex type combinations.',
    whereUse: 'Used for creating descriptive type names, union types, and complex type structures.',
    syntax: 'type TypeName = type;',
    explanation: 'Type aliases can represent any type, including primitives, unions, intersections, and mapped types.',
    examples: [
      {
        title: 'Basic Type Alias',
        code: `type ID = string | number;
type Point = [number, number];

let userId: ID = 123;
let position: Point = [10, 20];

console.log(userId, position);`,
        output: '123 [10, 20]'
      },
      {
        title: 'Union Types',
        code: `type Status = "active" | "inactive" | "pending";
type Result = { success: true; data: string } | { success: false; error: string };

let userStatus: Status = "active";
let operation: Result = { success: true, data: "Done" };

console.log(userStatus);`,
        output: 'active'
      },
      {
        title: 'Complex Type Alias',
        code: `type EventHandler<T> = (event: T) => void;
type AsyncOperation<T> = Promise<T>;

type User = {
    id: number;
    name: string;
    email: string;
};

const handleUser: EventHandler<User> = (user) => {
    console.log(\`User: \${user.name}\`);
};

handleUser({ id: 1, name: "Alice", email: "alice@example.com" });`,
        output: 'User: Alice'
      }
    ],
    keyPoints: [
      'Create aliases for any type',
      'Union types with |',
      'Intersection types with &',
      'Generic type aliases',
      'Aliases can be recursive'
    ],
    commonMistakes: [
      'Overusing type aliases for simple types',
      'Confusing type aliases with interfaces',
      'Creating circular type references',
      'Not understanding type alias limitations'
    ],
    proTips: [
      'Use type aliases for unions and primitives',
      'Use interfaces for object shapes',
      'Combine type aliases and interfaces',
      'Use descriptive names for type aliases'
    ]
  },

  operators: {
    definition: 'TypeScript provides all JavaScript operators plus additional type-related operators for type checking and manipulation.',
    whyUse: 'Operators enable performing operations on data and types, forming the basis of program logic.',
    whereUse: 'Used for math operations, comparisons, logical operations, and type checking.',
    syntax: 'operand operator operand',
    explanation: 'TypeScript includes standard JavaScript operators plus type operators like typeof, instanceof, keyof, and conditional types.',
    examples: [
      {
        title: 'Arithmetic Operators',
        code: `let a: number = 10;
let b: number = 3;

console.log(\`Add: \${a + b}\`);
console.log(\`Subtract: \${a - b}\`);
console.log(\`Multiply: \${a * b}\`);
console.log(\`Divide: \${a / b}\`);
console.log(\`Power: \${a ** b}\`);`,
        output: 'Add: 13\nSubtract: 7\nMultiply: 30\nDivide: 3.333...\nPower: 1000'
      },
      {
        title: 'Type Operators',
        code: `function isString(value: unknown): value is string {
    return typeof value === "string";
}

let data: string | number = "Hello";
if (isString(data)) {
    console.log(data.toUpperCase());
}

type Person = { name: string; age: number };
type Keys = keyof Person;`,
        output: 'HELLO'
      },
      {
        title: 'Nullish Coalescing',
        code: `let value1: string | null = null;
let value2: string | null = "Hello";

console.log(value1 ?? "Default");
console.log(value2 ?? "Default");

let obj = { name: "Alice", age: undefined };
console.log(obj.name ?? "Unknown");
console.log(obj.age ?? "Unknown");`,
        output: 'Default\nHello\nAlice\nUnknown'
      }
    ],
    keyPoints: [
      'typeof for type checking at runtime',
      'instanceof for class checking',
      'keyof for getting object keys',
      'Optional chaining ?. for null safety',
      'Nullish coalescing ?? for defaults'
    ],
    commonMistakes: [
      'Using == instead of ===',
      'Not using nullish coalescing',
      'Confusing typeof with type annotations',
      'Forgetting operator precedence'
    ],
    proTips: [
      'Use strict equality (===)',
      'Use optional chaining for null safety',
      'Use nullish coalescing for defaults',
      'Use type guards for type narrowing'
    ]
  },

  functions: {
    definition: 'TypeScript functions can have typed parameters, return types, and support overloading. They are the building blocks of TypeScript programs.',
    whyUse: 'Typed functions provide better documentation, catch errors at compile time, and enable better IDE support.',
    whereUse: 'Used for encapsulating logic, creating reusable code, and implementing business rules.',
    syntax: 'function name(param: type): returnType { }',
    explanation: 'TypeScript functions support type annotations, optional parameters, default values, and function overloading.',
    examples: [
      {
        title: 'Typed Functions',
        code: `function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return \`Hello, \${name}!\`;
}

console.log(add(5, 3));
console.log(greet("TypeScript"));`,
        output: '8\nHello, TypeScript!'
      },
      {
        title: 'Optional and Default Parameters',
        code: `function createUser(name: string, age?: number, active: boolean = true) {
    console.log(\`\${name}, \${age ?? "unknown"}, \${active}\`);
}

createUser("Alice", 30);
createUser("Bob");
createUser("Charlie", 25, false);`,
        output: 'Alice, 30, true\nBob, unknown, true\nCharlie, 25, false'
      },
      {
        title: 'Arrow Functions',
        code: `const multiply = (a: number, b: number): number => a * b;
const square = (n: number): number => n * n;

console.log(multiply(4, 5));
console.log(square(6));`,
        output: '20\n36'
      }
    ],
    keyPoints: [
      'Type parameters with : type',
      'Return type after closing paren',
      'Optional parameters with ?',
      'Default parameters with =',
      'Arrow functions for concise syntax'
    ],
    commonMistakes: [
      'Not specifying return type',
      'Using optional parameters incorrectly',
      'Confusing arrow functions with methods',
      'Forgetting to handle undefined'
    ],
    proTips: [
      'Use type inference when obvious',
      'Use union types for flexible parameters',
      'Prefer named functions for hoisting',
      'Use rest parameters for variable arguments'
    ]
  },

  lambdas: {
    definition: 'Lambda expressions (arrow functions) in TypeScript provide concise function syntax with automatic type inference.',
    whyUse: 'Lambdas provide shorter syntax for functions, especially for callbacks and higher-order functions.',
    whereUse: 'Used for callbacks, event handlers, array methods, and functional programming patterns.',
    syntax: '(param: type) => expression',
    explanation: 'Arrow functions inherit the surrounding context (no own this). They are shorter and can be anonymous.',
    examples: [
      {
        title: 'Basic Lambda',
        code: `const add = (a: number, b: number): number => a + b;
const square = (n: number): number => n * n;

console.log(add(5, 3));
console.log(square(4));`,
        output: '8\n16'
      },
      {
        title: 'Lambda with Arrays',
        code: `const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log(doubled, evens, sum);`,
        output: '[2, 4, 6, 8, 10] [2, 4] 15'
      },
      {
        title: 'Higher-Order Functions',
        code: `function createMultiplier(factor: number) {
    return (n: number): number => n * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5), triple(5));`,
        output: '10 15'
      }
    ],
    keyPoints: [
      '=> is the arrow function syntax',
      'No own this binding',
      'Automatic return for single expressions',
      'Type inference for parameters',
      'Perfect for callbacks and closures'
    ],
    commonMistakes: [
      'Using arrow functions as methods',
      'Not understanding this binding',
      'Forgetting type annotations when needed',
      'Overcomplicating lambda expressions'
    ],
    proTips: [
      'Use for callbacks and array methods',
      'Use for closures and higher-order functions',
      'Keep lambdas small and focused',
      'Use named functions for complex logic'
    ]
  },

  classes: {
    definition: 'TypeScript classes combine OOP concepts with static typing. They support access modifiers, abstract classes, and implementing interfaces.',
    whyUse: 'Classes provide structured OOP with type safety, enabling better code organization and reuse.',
    whereUse: 'Used to model real-world entities, create reusable components, and structure applications.',
    syntax: 'class ClassName { constructor() { } }',
    explanation: 'TypeScript classes extend JavaScript classes with access modifiers (public, private, protected), abstract classes, and interfaces.',
    examples: [
      {
        title: 'Basic Class',
        code: `class Person {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    greet(): string {
        return \`Hello, I'm \${this.name}\`;
    }
}

const person = new Person("Alice", 30);
console.log(person.greet());`,
        output: "Hello, I'm Alice"
      },
      {
        title: 'Access Modifiers',
        code: `class BankAccount {
    private balance: number = 0;
    readonly owner: string;
    
    constructor(owner: string) {
        this.owner = owner;
    }
    
    deposit(amount: number): void {
        this.balance += amount;
    }
    
    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("Alice");
account.deposit(1000);
console.log(account.owner, account.getBalance());`,
        output: 'Alice 1000'
      },
      {
        title: 'Abstract Classes',
        code: `abstract class Shape {
    abstract area(): number;
    
    describe(): string {
        return \`Area: \${this.area().toFixed(2)}\`;
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }
    
    area(): number {
        return Math.PI * this.radius ** 2;
    }
}

const circle = new Circle(5);
console.log(circle.describe());`,
        output: 'Area: 78.54'
      }
    ],
    keyPoints: [
      'public, private, protected access modifiers',
      'readonly for immutable properties',
      'abstract classes cannot be instantiated',
      'extends for inheritance',
      'implements for interface contracts'
    ],
    commonMistakes: [
      'Not initializing properties',
      'Using public when private is needed',
      'Confusing this with arrow functions',
      'Forgetting to call super()'
    ],
    proTips: [
      'Use parameter properties for shorter syntax',
      'Prefer interfaces over abstract classes',
      'Use readonly for immutable data',
      'Consider using readonly for constants'
    ]
  },

  inheritance: {
    definition: 'TypeScript inheritance allows creating classes based on existing classes. It supports single inheritance with multiple interface implementation.',
    whyUse: 'Inheritance promotes code reuse, establishes relationships, and enables polymorphism.',
    whereUse: 'Used to create specialized classes, build hierarchies, and share behavior.',
    syntax: 'class Derived extends Base { }',
    explanation: 'TypeScript supports single inheritance with extends. Multiple contracts can be implemented with interfaces.',
    examples: [
      {
        title: 'Basic Inheritance',
        code: `class Animal {
    constructor(public name: string) {}
    
    speak(): string {
        return \`\${this.name} makes a sound\`;
    }
}

class Dog extends Animal {
    bark(): string {
        return \`\${this.name} says Woof!\`;
    }
}

const dog = new Dog("Rex");
console.log(dog.speak());
console.log(dog.bark());`,
        output: 'Rex makes a sound\nRex says Woof!'
      },
      {
        title: 'Method Overriding',
        code: `class Shape {
    area(): number {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) {
        super();
    }
    
    area(): number {
        return this.width * this.height;
    }
}

const rect = new Rectangle(5, 3);
console.log(rect.area());`,
        output: '15'
      },
      {
        title: 'Interface Implementation',
        code: `interface Printable {
    print(): void;
}

interface Loggable {
    log(): void;
}

class Document implements Printable, Loggable {
    constructor(public title: string) {}
    
    print(): void {
        console.log(\`Printing: \${this.title}\`);
    }
    
    log(): void {
        console.log(\`Logging: \${this.title}\`);
    }
}

const doc = new Document("Report");
doc.print();
doc.log();`,
        output: 'Printing: Report\nLogging: Report'
      }
    ],
    keyPoints: [
      'Single inheritance with extends',
      'Multiple interface implementation',
      'super() calls parent constructor',
      'Override methods with override keyword',
      'Polymorphism through interfaces'
    ],
    commonMistakes: [
      'Creating deep inheritance hierarchies',
      'Not calling super() in constructor',
      'Confusing inheritance with composition',
      'Forgetting to implement interface methods'
    ],
    proTips: [
      'Prefer composition over inheritance',
      'Use abstract classes for partial implementations',
      'Use interfaces for multiple contracts',
      'Keep inheritance hierarchies shallow'
    ]
  },

  enums: {
    definition: 'TypeScript enums define a set of named constants. They can be numeric or string-based, and support reverse mappings.',
    whyUse: 'Enums improve code readability and provide type-safe constants.',
    whereUse: 'Used for status codes, configuration options, and fixed sets of values.',
    syntax: 'enum EnumName { Value1, Value2 }',
    explanation: 'TypeScript enums are real objects at runtime. They support numeric (auto-increment) and string values.',
    examples: [
      {
        title: 'Numeric Enum',
        code: `enum Direction {
    Up,
    Down,
    Left,
    Right
}

let dir: Direction = Direction.Up;
console.log(dir);
console.log(Direction[dir]);`,
        output: '0\nUp'
      },
      {
        title: 'String Enum',
        code: `enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

let userStatus: Status = Status.Active;
console.log(userStatus);`,
        output: 'ACTIVE'
      },
      {
        title: 'Const Enum',
        code: `const enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

let favorite: Color = Color.Red;
console.log(favorite);`,
        output: 'RED'
      }
    ],
    keyPoints: [
      'Numeric enums auto-increment',
      'String enums require explicit values',
      'const enums are inlined at compile time',
      'Reverse mapping for numeric enums',
      'Enums are real objects at runtime'
    ],
    commonMistakes: [
      'Not understanding numeric enum values',
      'Using enums when const enums are better',
      'Forgetting reverse mapping',
      'Not handling undefined enum values'
    ],
    proTips: [
      'Use const enums for performance',
      'Use string enums for serialization',
      'Consider using union types instead',
      'Use enum for fixed sets of options'
    ]
  },

  generics: {
    definition: 'Generics in TypeScript allow creating reusable components that work with multiple types while maintaining type safety.',
    whyUse: 'Generics provide type safety, code reuse, and flexibility for working with different data types.',
    whereUse: 'Used in data structures, algorithms, React components, and anywhere type-agnostic code is needed.',
    syntax: 'function generic<T>(param: T): T { }',
    explanation: 'Generics use type parameters (T, K, V) that are replaced with specific types at compile time.',
    examples: [
      {
        title: 'Generic Function',
        code: `function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(42));`,
        output: 'Hello\n42'
      },
      {
        title: 'Generic Interface',
        code: `interface Repository<T> {
    getById(id: number): T;
    getAll(): T[];
    save(item: T): void;
}

class UserRepository implements Repository<{ name: string; email: string }> {
    private users: { name: string; email: string }[] = [];
    
    getById(id: number) {
        return this.users[id];
    }
    
    getAll() {
        return this.users;
    }
    
    save(item: { name: string; email: string }) {
        this.users.push(item);
    }
}`,
        output: 'Repository implemented'
      },
      {
        title: 'Generic Constraints',
        code: `interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(arg: T): void {
    console.log(\`Length: \${arg.length}\`);
}

logLength("Hello");
logLength([1, 2, 3]);
logLength({ length: 10 });`,
        output: 'Length: 5\nLength: 3\nLength: 10'
      }
    ],
    keyPoints: [
      'Type parameters with <T>',
      'Can have multiple type parameters',
      'Constraints with extends',
      'Generic interfaces and classes',
      'Type inference for generics'
    ],
    commonMistakes: [
      'Overusing generic constraints',
      'Not understanding type inference',
      'Creating overly complex generics',
      'Forgetting to specify types when needed'
    ],
    proTips: [
      'Use meaningful type parameter names',
      'Prefer generics over any',
      'Use constraints to limit types',
      'Consider using conditional types'
    ]
  },

  utility: {
    definition: 'TypeScript provides built-in utility types for transforming and manipulating types, including Partial, Required, Readonly, Pick, Omit, and Record.',
    whyUse: 'Utility types simplify common type transformations without creating custom types.',
    whereUse: 'Used for transforming object types, creating variations of existing types, and type manipulation.',
    syntax: 'UtilityType<OriginalType>',
    explanation: 'Utility types are generic types that transform other types in useful ways.',
    examples: [
      {
        title: 'Partial and Required',
        code: `interface User {
    name: string;
    email: string;
    age: number;
}

type PartialUser = Partial<User>;
type RequiredUser = Required<PartialUser>;

const user1: PartialUser = { name: "Alice" };
console.log(user1);`,
        output: '{ name: "Alice" }'
      },
      {
        title: 'Pick and Omit',
        code: `interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type UserPreview = Pick<User, "id" | "name">;
type PublicUser = Omit<User, "password">;

const preview: UserPreview = { id: 1, name: "Alice" };
console.log(preview);`,
        output: '{ id: 1, name: "Alice" }'
      },
      {
        title: 'Record and Readonly',
        code: `type UserRole = "admin" | "user" | "guest";
type RolePermissions = Record<UserRole, string[]>;

const permissions: RolePermissions = {
    admin: ["read", "write", "delete"],
    user: ["read", "write"],
    guest: ["read"]
};

console.log(permissions);`,
        output: '{ admin: ["read", "write", "delete"], user: ["read", "write"], guest: ["read"] }'
      }
    ],
    keyPoints: [
      'Partial<T> makes all properties optional',
      'Required<T> makes all properties required',
      'Readonly<T> makes all properties readonly',
      'Pick<T, K> selects specific properties',
      'Omit<T, K> removes specific properties'
    ],
    commonMistakes: [
      'Not understanding what each utility does',
      'Overcomplicating type transformations',
      'Not using utility types when appropriate',
      'Forgetting utility types return new types'
    ],
    proTips: [
      'Use Partial for update functions',
      'Use Pick for response types',
      'Use Omit for sensitive data',
      'Combine utility types for complex transformations'
    ]
  },

  mapped: {
    definition: 'Mapped types in TypeScript create new types by transforming properties of existing types. They enable powerful type transformations.',
    whyUse: 'Mapped types automate type transformations, reducing code duplication and improving consistency.',
    whereUse: 'Used for creating variations of types, adding modifiers, and transforming object shapes.',
    syntax: '{ [K in keyof T]: NewType }',
    explanation: 'Mapped types iterate over keys of a type and transform each property.',
    examples: [
      {
        title: 'Basic Mapped Type',
        code: `interface User {
    name: string;
    email: string;
    age: number;
}

type OptionalUser = {
    [K in keyof User]?: User[K];
};

const user: OptionalUser = { name: "Alice" };
console.log(user);`,
        output: '{ name: "Alice" }'
      },
      {
        title: 'Add Readonly',
        code: `interface Config {
    host: string;
    port: number;
}

type ReadonlyConfig = {
    readonly [K in keyof Config]: Config[K];
};

const config: ReadonlyConfig = { host: "localhost", port: 3000 };
// config.port = 4000; // Error!`,
        output: 'Config is readonly'
      },
      {
        title: 'Transform Properties',
        code: `interface User {
    name: string;
    email: string;
}

type Getters = {
    [K in keyof User as \`get\${Capitalize<K>}\`]: () => User[K];
};

const getters: Getters = {
    getName: () => "Alice",
    getEmail: () => "alice@example.com"
};

console.log(getters.getName());`,
        output: 'Alice'
      }
    ],
    keyPoints: [
      'Iterate over keys with [K in keyof T]',
      'Add ? for optional properties',
      'Add readonly for readonly properties',
      'Transform property types',
      'Use as for key remapping'
    ],
    commonMistakes: [
      'Not understanding key remapping',
      'Overcomplicating transformations',
      'Forgetting to preserve property types',
      'Not using built-in utility types'
    ],
    proTips: [
      'Use utility types first before custom mapped types',
      'Use key remapping for property name changes',
      'Combine with conditional types',
      'Keep mapped types readable'
    ]
  },

  modules: {
    definition: 'TypeScript modules provide a way to organize code into separate files with import/export statements for modular development.',
    whyUse: 'Modules enable code organization, encapsulation, reusability, and dependency management.',
    whereUse: 'Used in all TypeScript projects for organizing code into logical units.',
    syntax: 'export const value; import { value } from "module";',
    explanation: 'TypeScript uses ES modules (import/export) for code organization. Each file is a module.',
    examples: [
      {
        title: 'Named Exports',
        code: `// math.ts
export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

// app.ts
import { add, subtract } from "./math";

console.log(add(5, 3));
console.log(subtract(10, 4));`,
        output: '8\n6'
      },
      {
        title: 'Default Export',
        code: `// User.ts
export default class User {
    constructor(public name: string) {}
}

// app.ts
import User from "./User";

const user = new User("Alice");
console.log(user.name);`,
        output: 'Alice'
      },
      {
        title: 'Namespace Imports',
        code: `// utils.ts
export function formatDate(date: Date): string {
    return date.toLocaleDateString();
}

export function formatTime(date: Date): string {
    return date.toLocaleTimeString();
}

// app.ts
import * as Utils from "./utils";

console.log(Utils.formatDate(new Date()));
console.log(Utils.formatTime(new Date()));`,
        output: '8/29/2026\n12:00:00 AM'
      }
    ],
    keyPoints: [
      'Named exports for multiple exports',
      'Default export for one export per file',
      'import for importing exports',
      'import * as for namespace imports',
      'Re-exporting with export from'
    ],
    commonMistakes: [
      'Confusing named and default exports',
      'Not using relative paths correctly',
      'Circular import dependencies',
      'Forgetting to export types'
    ],
    proTips: [
      'Use barrel files for re-exports',
      'Prefer named exports over default',
      'Use type-only imports for types',
      'Organize imports by category'
    ]
  },

  decorators: {
    definition: 'Decorators in TypeScript are special declarations that can be attached to classes, methods, properties, or parameters to modify their behavior.',
    whyUse: 'Decorators provide a clean way to add cross-cutting concerns like logging, validation, and caching.',
    whereUse: 'Used in Angular, NestJS, and other frameworks for metadata and behavior modification.',
    syntax: '@decorator',
    explanation: 'Decorators are functions that receive and can modify class declarations, methods, or properties.',
    examples: [
      {
        title: 'Class Decorator',
        code: `function Sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@Sealed
class Greeter {
    greeting: string;
    
    constructor(message: string) {
        this.greeting = message;
    }
}

const greeter = new Greeter("Hello");
console.log(greeter.greeting);`,
        output: 'Hello'
      },
      {
        title: 'Method Decorator',
        code: `function Log(target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.value;
    
    descriptor.value = function (...args: any[]) {
        console.log(\`Calling \${key} with \${args}\`);
        return original.apply(this, args);
    };
}

class Calculator {
    @Log
    add(a: number, b: number): number {
        return a + b;
    }
}

const calc = new Calculator();
console.log(calc.add(5, 3));`,
        output: 'Calling add with 5,3\n8'
      },
      {
        title: 'Property Decorator',
        code: `function ReadOnly(target: any, key: string) {
    Object.defineProperty(target, key, {
        writable: false
    });
}

class Config {
    @ReadOnly
    API_KEY = "secret-key";
}

const config = new Config();
// config.API_KEY = "new-key"; // Error!`,
        output: 'Property is readonly'
      }
    ],
    keyPoints: [
      'Decorators are functions',
      '@decorator syntax applies decorators',
      'Class, method, property, parameter decorators',
      'Can modify or wrap declarations',
      'Used extensively in Angular'
    ],
    commonMistakes: [
      'Not understanding decorator execution order',
      'Forgetting to enable experimentalDecorators',
      'Using decorators incorrectly',
      'Not returning modified descriptor'
    ],
    proTips: [
      'Enable experimentalDecorators in tsconfig',
      'Use decorators for cross-cutting concerns',
      'Keep decorators focused and simple',
      'Consider using higher-order functions instead'
    ]
  },

  advanced: {
    definition: 'Advanced TypeScript features include conditional types, mapped types, template literal types, and other powerful type manipulation tools.',
    whyUse: 'Advanced types enable creating highly type-safe and flexible code patterns.',
    whereUse: 'Used for complex type manipulations, library development, and type-safe frameworks.',
    syntax: 'T extends U ? X : Y',
    explanation: 'Advanced TypeScript features enable complex type transformations and conditional logic at the type level.',
    examples: [
      {
        title: 'Conditional Types',
        code: `type IsString<T> = T extends string ? "yes" : "no";

type A = IsString<string>;  // "yes"
type B = IsString<number>;  // "no"

const a: A = "yes";
console.log(a);`,
        output: 'yes'
      },
      {
        title: 'Template Literal Types',
        code: `type EventName = "click" | "focus" | "blur";
type HandlerName = \`on\${Capitalize<EventName>}\`;

const handler: HandlerName = "onClick";
console.log(handler);`,
        output: 'onClick'
      },
      {
        title: 'Infer Keyword',
        code: `type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function add(a: number, b: number): number {
    return a + b;
}

type AddReturn = ReturnType<typeof add>;  // number
const result: AddReturn = 10;
console.log(result);`,
        output: '10'
      }
    ],
    keyPoints: [
      'Conditional types: T extends U ? X : Y',
      'Infer keyword for type extraction',
      'Template literal types for string manipulation',
      'Mapped types with key remapping',
      'Recursive type definitions'
    ],
    commonMistakes: [
      'Overcomplicating type definitions',
      'Not understanding type distribution',
      'Using infer incorrectly',
      'Creating unreadable type aliases'
    ],
    proTips: [
      'Use conditional types for type transformations',
      'Use infer for extracting types',
      'Keep types readable',
      'Document complex type definitions'
    ]
  },

  react: {
    definition: 'TypeScript with React provides type safety for components, props, state, and hooks. It catches errors at compile time and improves developer experience.',
    whyUse: 'TypeScript in React catches bugs early, improves code documentation, and enhances IDE support.',
    whereUse: 'Used in React applications for type-safe component development.',
    syntax: 'interface Props { children: React.ReactNode; }',
    explanation: 'TypeScript types React components, props, state, hooks, and event handlers for better type safety.',
    examples: [
      {
        title: 'Typed Component',
        code: `import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;`,
        output: 'Button component defined'
      },
      {
        title: 'Typed State',
        code: `import React, { useState } from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    
    const addTodo = (text: string) => {
        const newTodo: Todo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };
    
    return <div>{todos.length} todos</div>;
};

export default TodoList;`,
        output: 'TodoList component defined'
      },
      {
        title: 'Typed Hooks',
        code: `import { useState, useEffect, useRef } from "react";

interface User {
    id: number;
    name: string;
}

const UserProfile: React.FC<{ userId: number }> = ({ userId }) => {
    const [user, setUser] = useState<User | null>(null);
    const mountedRef = useRef<boolean>(true);
    
    useEffect(() => {
        fetchUser(userId).then(setUser);
        return () => { mountedRef.current = false; };
    }, [userId]);
    
    return <div>{user?.name ?? "Loading..."}</div>;
};`,
        output: 'UserProfile component defined'
      }
    ],
    keyPoints: [
      'Type props with interfaces',
      'Type useState with generic',
      'Type event handlers',
      'Use React.FC for component type',
      'Type refs with useRef<T>'
    ],
    commonMistakes: [
      'Using any for props',
      'Not typing event handlers',
      'Forgetting to type useState',
      'Not handling null/undefined'
    ],
    proTips: [
      'Use interface for props',
      'Use type for unions/intersections',
      'Enable strictNullChecks',
      'Use React.ComponentProps for prop types'
    ]
  }
}

export default typescript