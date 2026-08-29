const cpp = {
  intro: {
    definition: "C++ is a general-purpose language built as an extension of C. It supports both procedural and object-oriented programming and gives you high-level abstractions with low-level memory access.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "C++ adds classes, inheritance, polymorphism, templates, and the STL on top of C. It uses iostream for input/output and supports both stack and heap memory management.",
    examples: [
      {
        title: "Hello World",
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
        output: "Hello, World!"
      },
      {
        title: "Basic Output",
        code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    string name = "Alice";
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    return 0;
}`,
        output: "Name: Alice\nAge: 25"
      },
      {
        title: "Basic Input",
        code: `#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "Enter a number: ";
    cin >> num;
    cout << "You entered: " << num << endl;
    return 0;
}`,
        output: "Enter a number: 42\nYou entered: 42"
      },
      {
        title: "Simple Calculator",
        code: `#include <iostream>
using namespace std;

int main() {
    double a = 10.5, b = 3.2;
    cout << "Sum: " << a + b << endl;
    cout << "Difference: " << a - b << endl;
    cout << "Product: " << a * b << endl;
    cout << "Quotient: " << a / b << endl;
    return 0;
}`,
        output: "Sum: 13.7\nDifference: 7.3\nProduct: 33.6\nQuotient: 3.28125"
      }
    ],
    keyPoints: [
      "C++ extends C with OOP features like classes and inheritance",
      "Uses cout and cin for input/output",
      "Has a rich standard library (STL)"
    ],
    commonMistakes: [
      "Forgetting to include iostream",
      "Not using std namespace or std:: prefix"
    ],
    proTips: [
      "Use auto for type deduction when the type is obvious",
      "Use smart pointers for memory management"
    ]
  },

  setup: {
    definition: "You need a compiler like g++ or clang++, a text editor or IDE, and build tools. C++ source files use the .cpp extension.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Compile C++ programs with g++ or clang++. The compilation process includes preprocessing, compilation, assembly, and linking. Build systems like CMake manage larger projects.",
    examples: [
      {
        title: "G++ Compilation",
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Compiled with g++!" << endl;
    return 0;
}`,
        output: "Compiled with g++!"
      },
      {
        title: "C++11 Features",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    for (auto n : nums) {
        cout << n << " ";
    }
    cout << endl;
    return 0;
}`,
        output: "1 2 3 4 5"
      },
      {
        title: "Debug Build",
        code: `#include <iostream>
using namespace std;

int main() {
    int x = 10;
    cout << "Debug: x = " << x << endl;
    return 0;
}`,
        output: "Debug: x = 10"
      },
      {
        title: "CMakeLists.txt",
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "Using CMake build system" << endl;
    return 0;
}`,
        output: "Using CMake build system"
      }
    ],
    keyPoints: [
      "Compile with: g++ -o program program.cpp",
      "Use -std=c++17 or newer for modern features",
      "Use -g for debugging symbols"
    ],
    commonMistakes: [
      "Using .c extension for C++ files",
      "Missing the C++ standard flag"
    ],
    proTips: [
      "Use CMake for cross-platform builds",
      "Use clang-tidy for code quality checks"
    ]
  },

  variables: {
    definition: "C++ variables are typed storage locations. C++ supports all C types plus string, bool, and references. Type safety is enforced at compile time.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Declare variables with a type, or let auto deduce it. Use const for read-only values. References provide aliases to existing variables. Scope determines lifetime and visibility.",
    examples: [
      {
        title: "Basic Data Types",
        code: `#include <iostream>
using namespace std;

int main() {
    int age = 25;
    double price = 19.99;
    char grade = 'A';
    string name = "Alice";
    bool active = true;
    cout << name << ", " << age << ", " << grade << endl;
    cout << "Price: $" << price << ", Active: " << active << endl;
    return 0;
}`,
        output: "Alice, 25, A\nPrice: $19.99, Active: 1"
      },
      {
        title: "Auto Type Deduction",
        code: `#include <iostream>
#include <typeinfo>
using namespace std;

int main() {
    auto x = 10;
    auto y = 3.14;
    auto z = "Hello";
    cout << "x: " << typeid(x).name() << endl;
    cout << "y: " << typeid(y).name() << endl;
    cout << "z: " << typeid(z).name() << endl;
    return 0;
}`,
        output: "x: i\nd: d\nz: PKc"
      },
      {
        title: "Constants and References",
        code: `#include <iostream>
using namespace std;

int main() {
    const double PI = 3.14159;
    int original = 42;
    int &ref = original;
    cout << "Original: " << original << endl;
    cout << "Reference: " << ref << endl;
    ref = 100;
    cout << "After change: " << original << endl;
    return 0;
}`,
        output: "Original: 42\nReference: 42\nAfter change: 100"
      },
      {
        title: "Sizeof and Types",
        code: `#include <iostream>
using namespace std;

int main() {
    cout << "int: " << sizeof(int) << " bytes" << endl;
    cout << "double: " << sizeof(double) << " bytes" << endl;
    cout << "char: " << sizeof(char) << " byte" << endl;
    cout << "bool: " << sizeof(bool) << " byte" << endl;
    cout << "string: " << sizeof(string) << " bytes" << endl;
    return 0;
}`,
        output: "int: 4 bytes\ndouble: 8 bytes\nchar: 1 byte\nbool: 1 byte\nstring: 32 bytes"
      },
      {
        title: "Type Casting",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 7, b = 2;
    cout << "Integer: " << a / b << endl;
    cout << "Static cast: " << static_cast<double>(a) / b << endl;
    cout << "C-style: " << (double)a / b << endl;
    return 0;
}`,
        output: "Integer: 3\nStatic cast: 3.5\nC-style: 3.5"
      }
    ],
    keyPoints: [
      "auto deduces the type from the initializer",
      "const creates read-only variables",
      "References are aliases to existing variables"
    ],
    commonMistakes: [
      "Using uninitialized variables",
      "Narrowing conversions losing data"
    ],
    proTips: [
      "Use auto for complex type names",
      "Use references for efficient parameter passing"
    ]
  },

  strings: {
    definition: "C++ provides a string class in <string> that handles dynamic text with automatic memory management, operator overloading, and useful methods.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Concatenate with +, compare with ==, and access characters with []. Methods like length(), substr(), and find() make string manipulation easy. getline() reads full lines of input.",
    examples: [
      {
        title: "String Declaration",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Hello";
    string s2("World");
    string s3 = s1 + " " + s2;
    cout << s3 << endl;
    cout << "Length: " << s3.length() << endl;
    return 0;
}`,
        output: "Hello World\nLength: 11"
      },
      {
        title: "String Methods",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "Hello World";
    cout << "Upper: ";
    for (char c : str) cout << (char)toupper(c);
    cout << endl;
    cout << "Substr: " << str.substr(0, 5) << endl;
    cout << "Find 'World': " << str.find("World") << endl;
    return 0;
}`,
        output: "Upper: HELLO WORLD\nSubstr: Hello\nFind 'World': 6"
      },
      {
        title: "String Comparison",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string a = "apple";
    string b = "banana";
    if (a < b) {
        cout << a << " comes before " << b << endl;
    } else {
        cout << b << " comes before " << a << endl;
    }
    cout << "Equal: " << (a == b) << endl;
    return 0;
}`,
        output: "apple comes before banana\nEqual: 0"
      },
      {
        title: "String Input",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    cout << "Enter name: ";
    getline(cin, name);
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`,
        output: "Enter name: Alice\nHello, Alice!"
      },
      {
        title: "String Iteration",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string str = "C++ Programming";
    cout << "Forward: ";
    for (char c : str) cout << c;
    cout << endl;
    cout << "Reverse: ";
    for (auto it = str.rbegin(); it != str.rend(); ++it) {
        cout << *it;
    }
    cout << endl;
    return 0;
}`,
        output: "Forward: C++ Programming\nReverse: gnimmargorP ++C"
      }
    ],
    keyPoints: [
      "string class in <string> handles memory automatically",
      "Use + for concatenation, == for comparison",
      "getline() reads full lines of input"
    ],
    commonMistakes: [
      "Not including <string> header",
      "Confusing string and char*"
    ],
    proTips: [
      "Use string_view for read-only strings",
      "Use reserve() to pre-allocate memory for large strings"
    ]
  },

  operators: {
    definition: "C++ has all C operators plus additions for objects and streams. Operators define how data is manipulated and expressions are evaluated.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "C++ adds scope resolution (::), new/delete, and operator overloading on top of C operators. Precedence rules determine the order of evaluation.",
    examples: [
      {
        title: "Arithmetic Operators",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 15, b = 4;
    cout << "a + b = " << a + b << endl;
    cout << "a - b = " << a - b << endl;
    cout << "a * b = " << a * b << endl;
    cout << "a / b = " << a / b << endl;
    cout << "a % b = " << a % b << endl;
    return 0;
}`,
        output: "a + b = 19\na - b = 11\na * b = 60\na / b = 3\na % b = 3"
      },
      {
        title: "Logical Operators",
        code: `#include <iostream>
using namespace std;

int main() {
    bool a = true, b = false;
    cout << "a && b = " << (a && b) << endl;
    cout << "a || b = " << (a || b) << endl;
    cout << "!a = " << !a << endl;
    cout << "!b = " << !b << endl;
    return 0;
}`,
        output: "a && b = 0\na || b = 1\n!a = 0\n!b = 1"
      },
      {
        title: "Ternary Operator",
        code: `#include <iostream>
using namespace std;

int main() {
    int num = 15;
    string result = (num % 2 == 0) ? "Even" : "Odd";
    cout << num << " is " << result << endl;
    return 0;
}`,
        output: "15 is Odd"
      },
      {
        title: "Increment/Decrement",
        code: `#include <iostream>
using namespace std;

int main() {
    int a = 5;
    cout << "a++ = " << a++ << endl;
    cout << "Now a = " << a << endl;
    cout << "++a = " << ++a << endl;
    cout << "a-- = " << a-- << endl;
    cout << "Now a = " << a << endl;
    return 0;
}`,
        output: "a++ = 5\nNow a = 6\n++a = 7\na-- = 7\nNow a = 6"
      },
      {
        title: "Sizeof and Typeid",
        code: `#include <iostream>
#include <typeinfo>
using namespace std;

int main() {
    int x = 10;
    double y = 3.14;
    cout << "int size: " << sizeof(x) << endl;
    cout << "double size: " << sizeof(y) << endl;
    cout << "Type: " << typeid(x).name() << endl;
    return 0;
}`,
        output: "int size: 4\ndouble size: 8\nType: i"
      }
    ],
    keyPoints: [
      "All C operators work in C++",
      "C++ adds scope resolution (::) and new/delete",
      "Operator overloading lets you define +, <<, etc. for custom types"
    ],
    commonMistakes: [
      "Using = instead of ==",
      "Operator precedence errors"
    ],
    proTips: [
      "Use parentheses to clarify precedence",
      "Understand short-circuit evaluation in && and ||"
    ]
  },

  conditionals: {
    definition: "Conditional statements let your program choose different code paths based on whether conditions are true or false.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "if checks a condition, if-else provides two paths, else-if chains multiple conditions, and switch handles discrete values. C++17 adds if-with-initializer for scoped initialization.",
    examples: [
      {
        title: "If-Else Statement",
        code: `#include <iostream>
using namespace std;

int main() {
    int age = 20;
    if (age >= 18) {
        cout << "You are an adult" << endl;
    } else {
        cout << "You are a minor" << endl;
    }
    return 0;
}`,
        output: "You are an adult"
      },
      {
        title: "Else-If Ladder",
        code: `#include <iostream>
using namespace std;

int main() {
    int marks = 85;
    if (marks >= 90) {
        cout << "Grade: A" << endl;
    } else if (marks >= 80) {
        cout << "Grade: B" << endl;
    } else if (marks >= 70) {
        cout << "Grade: C" << endl;
    } else {
        cout << "Grade: F" << endl;
    }
    return 0;
}`,
        output: "Grade: B"
      },
      {
        title: "Switch Statement",
        code: `#include <iostream>
using namespace std;

int main() {
    int day = 3;
    switch (day) {
        case 1: cout << "Monday" << endl; break;
        case 2: cout << "Tuesday" << endl; break;
        case 3: cout << "Wednesday" << endl; break;
        case 4: cout << "Thursday" << endl; break;
        case 5: cout << "Friday" << endl; break;
        default: cout << "Weekend" << endl;
    }
    return 0;
}`,
        output: "Wednesday"
      },
      {
        title: "If with Initializer (C++17)",
        code: `#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> ages = {{"Alice", 25}, {"Bob", 30}};
    if (auto it = ages.find("Alice"); it != ages.end()) {
        cout << "Alice's age: " << it->second << endl;
    }
    return 0;
}`,
        output: "Alice's age: 25"
      },
      {
        title: "Nested Conditions",
        code: `#include <iostream>
using namespace std;

int main() {
    int num = 15;
    if (num > 0) {
        if (num % 2 == 0) {
            cout << "Positive even" << endl;
        } else {
            cout << "Positive odd" << endl;
        }
    } else {
        cout << "Non-positive" << endl;
    }
    return 0;
}`,
        output: "Positive odd"
      }
    ],
    keyPoints: [
      "if-else provides two code paths",
      "switch is efficient for discrete value matching",
      "C++17 adds if-with-initializer for scoped variables"
    ],
    commonMistakes: [
      "Missing break in switch cases",
      "Using = instead of =="
    ],
    proTips: [
      "Always include default in switch",
      "Use early returns to reduce nesting"
    ]
  },

  loops: {
    definition: "Loops let you run a block of code repeatedly. C++ provides for, while, and do-while, plus range-based for loops for easy container iteration.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use for when you know the count, while for condition-based termination, and do-while when the body must run at least once. Range-based for (C++11) iterates containers cleanly.",
    examples: [
      {
        title: "For Loop",
        code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;
    return 0;
}`,
        output: "1 2 3 4 5"
      },
      {
        title: "While Loop",
        code: `#include <iostream>
using namespace std;

int main() {
    int count = 0;
    while (count < 5) {
        cout << "Count: " << count << endl;
        count++;
    }
    return 0;
}`,
        output: "Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4"
      },
      {
        title: "Do-While Loop",
        code: `#include <iostream>
using namespace std;

int main() {
    int num;
    do {
        cout << "Enter positive number: ";
        cin >> num;
    } while (num <= 0);
    cout << "You entered: " << num << endl;
    return 0;
}`,
        output: "Enter positive number: -3\nEnter positive number: 5\nYou entered: 5"
      },
      {
        title: "Range-Based For (C++11)",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30, 40, 50};
    for (const auto &n : nums) {
        cout << n << " ";
    }
    cout << endl;
    return 0;
}`,
        output: "10 20 30 40 50"
      },
      {
        title: "Nested Loops",
        code: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            cout << i * j << " ";
        }
        cout << endl;
    }
    return 0;
}`,
        output: "1 2 3\n2 4 6\n3 6 9"
      }
    ],
    keyPoints: [
      "for is best when you know the iteration count",
      "range-based for iterates containers cleanly",
      "break exits the loop, continue skips to the next iteration"
    ],
    commonMistakes: [
      "Infinite loops from missing increment",
      "Off-by-one errors"
    ],
    proTips: [
      "Use range-based for for simple iteration",
      "Use auto for type deduction in loops"
    ]
  },

  references: {
    definition: "References are aliases for existing variables. They provide an alternative name, must be initialized at declaration, and cannot be null or rebound.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Declare a reference with &. They are dereferenced implicitly and are commonly used for function parameters (especially const references) and return values.",
    examples: [
      {
        title: "Basic Reference",
        code: `#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int &ref = num;
    cout << "num: " << num << endl;
    cout << "ref: " << ref << endl;
    ref = 20;
    cout << "After ref = 20: " << num << endl;
    return 0;
}`,
        output: "num: 10\nref: 10\nAfter ref = 20: 20"
      },
      {
        title: "Reference Parameters",
        code: `#include <iostream>
using namespace std;

void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    cout << "Before: x = " << x << ", y = " << y << endl;
    swap(x, y);
    cout << "After: x = " << x << ", y = " << y << endl;
    return 0;
}`,
        output: "Before: x = 5, y = 10\nAfter: x = 10, y = 5"
      },
      {
        title: "Const Reference",
        code: `#include <iostream>
#include <string>
using namespace std;

void print(const string &str) {
    cout << str << endl;
}

int main() {
    string name = "Alice";
    print(name);
    return 0;
}`,
        output: "Alice"
      },
      {
        title: "Reference vs Pointer",
        code: `#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int &ref = num;
    int *ptr = &num;
    cout << "Reference: " << ref << endl;
    cout << "Pointer: " << *ptr << endl;
    ref = 20;
    cout << "After ref = 20: " << num << endl;
    return 0;
}`,
        output: "Reference: 10\nPointer: 10\nAfter ref = 20: 20"
      },
      {
        title: "Return by Reference",
        code: `#include <iostream>
#include <vector>
using namespace std;

int& getFirst(vector<int> &v) {
    return v[0];
}

int main() {
    vector<int> nums = {100, 200, 300};
    cout << "First: " << getFirst(nums) << endl;
    getFirst(nums) = 500;
    cout << "Modified: " << nums[0] << endl;
    return 0;
}`,
        output: "First: 100\nModified: 500"
      }
    ],
    keyPoints: [
      "References must be initialized at declaration",
      "They cannot be null or rebound",
      "const references are ideal for function parameters"
    ],
    commonMistakes: [
      "Returning a reference to a local variable",
      "Uninitialized references"
    ],
    proTips: [
      "Use const references for read-only parameters",
      "Use references instead of pointers when possible"
    ]
  },

  oop: {
    definition: "Object-Oriented Programming organizes code into classes and objects. It provides encapsulation, inheritance, polymorphism, and abstraction for modular, reusable code.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Classes define object blueprints with attributes and methods. Objects are instances of classes. Access specifiers (public, private, protected) control visibility. Constructors initialize objects.",
    examples: [
      {
        title: "Basic Class",
        code: `#include <iostream>
using namespace std;

class Student {
public:
    string name;
    int age;
    void display() {
        cout << name << ", " << age << endl;
    }
};

int main() {
    Student s1;
    s1.name = "Alice";
    s1.age = 20;
    s1.display();
    return 0;
}`,
        output: "Alice, 20"
      },
      {
        title: "Class with Constructor",
        code: `#include <iostream>
using namespace std;

class Rectangle {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() { return width * height; }
    double perimeter() { return 2 * (width + height); }
};

int main() {
    Rectangle rect(5.0, 3.0);
    cout << "Area: " << rect.area() << endl;
    cout << "Perimeter: " << rect.perimeter() << endl;
    return 0;
}`,
        output: "Area: 15\nPerimeter: 16"
      },
      {
        title: "Getter and Setter",
        code: `#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;
public:
    BankAccount(double b) : balance(b) {}
    double getBalance() { return balance; }
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    void withdraw(double amount) {
        if (amount > 0 && amount <= balance) balance -= amount;
    }
};

int main() {
    BankAccount acc(1000);
    acc.deposit(500);
    acc.withdraw(200);
    cout << "Balance: " << acc.getBalance() << endl;
    return 0;
}`,
        output: "Balance: 1300"
      },
      {
        title: "Static Members",
        code: `#include <iostream>
using namespace std;

class Counter {
private:
    static int count;
public:
    Counter() { count++; }
    ~Counter() { count--; }
    static int getCount() { return count; }
};

int Counter::count = 0;

int main() {
    Counter c1, c2, c3;
    cout << "Objects: " << Counter::getCount() << endl;
    return 0;
}`,
        output: "Objects: 3"
      },
      {
        title: "Friend Function",
        code: `#include <iostream>
using namespace std;

class Box {
private:
    double width;
public:
    Box(double w) : width(w) {}
    friend void printWidth(Box b);
};

void printWidth(Box b) {
    cout << "Width: " << b.width << endl;
}

int main() {
    Box box(5.0);
    printWidth(box);
    return 0;
}`,
        output: "Width: 5"
      }
    ],
    keyPoints: [
      "Classes define object blueprints with attributes and methods",
      "Encapsulation hides implementation behind a clean interface",
      "Constructors initialize objects when they are created"
    ],
    commonMistakes: [
      "Forgetting virtual destructor in base class",
      "Not initializing all member variables"
    ],
    proTips: [
      "Use RAII for resource management",
      "Prefer composition over inheritance"
    ]
  },

  inheritance: {
    definition: "Inheritance lets you create new classes from existing ones. The derived class inherits members from the base class, enabling code reuse and IS-A relationships.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use : public/protected/private to inherit. Virtual functions enable runtime polymorphism. Constructors are called in order: base first, then derived.",
    examples: [
      {
        title: "Basic Inheritance",
        code: `#include <iostream>
using namespace std;

class Animal {
public:
    void eat() { cout << "Eating..." << endl; }
};

class Dog : public Animal {
public:
    void bark() { cout << "Barking..." << endl; }
};

int main() {
    Dog dog;
    dog.eat();
    dog.bark();
    return 0;
}`,
        output: "Eating...\nBarking..."
      },
      {
        title: "Constructor Inheritance",
        code: `#include <iostream>
using namespace std;

class Shape {
protected:
    int x, y;
public:
    Shape(int x, int y) : x(x), y(y) {}
    void display() { cout << "Position: (" << x << ", " << y << ")" << endl; }
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(int x, int y, double r) : Shape(x, y), radius(r) {}
    double area() { return 3.14159 * radius * radius; }
};

int main() {
    Circle c(0, 0, 5.0);
    c.display();
    cout << "Area: " << c.area() << endl;
    return 0;
}`,
        output: "Position: (0, 0)\nArea: 78.5398"
      },
      {
        title: "Multi-Level Inheritance",
        code: `#include <iostream>
using namespace std;

class Vehicle {
public:
    void start() { cout << "Starting vehicle..." << endl; }
};

class Car : public Vehicle {
public:
    void drive() { cout << "Driving car..." << endl; }
};

class ElectricCar : public Car {
public:
    void charge() { cout << "Charging..." << endl; }
};

int main() {
    ElectricCar tesla;
    tesla.start();
    tesla.drive();
    tesla.charge();
    return 0;
}`,
        output: "Starting vehicle...\nDriving car...\nCharging..."
      },
      {
        title: "Multiple Inheritance",
        code: `#include <iostream>
using namespace std;

class Engine {
public:
    void start() { cout << "Engine started" << endl; }
};

class Wheels {
public:
    void roll() { cout << "Wheels rolling" << endl; }
};

class Car : public Engine, public Wheels {
public:
    void drive() { cout << "Car driving" << endl; }
};

int main() {
    Car car;
    car.start();
    car.roll();
    car.drive();
    return 0;
}`,
        output: "Engine started\nWheels rolling\nCar driving"
      },
      {
        title: "Protected Members",
        code: `#include <iostream>
using namespace std;

class Base {
protected:
    int value;
public:
    Base(int v) : value(v) {}
};

class Derived : public Base {
public:
    Derived(int v) : Base(v) {}
    void show() { cout << "Value: " << value << endl; }
};

int main() {
    Derived d(42);
    d.show();
    return 0;
}`,
        output: "Value: 42"
      }
    ],
    keyPoints: [
      "Inheritance establishes IS-A relationships",
      "Protected members are accessible to derived classes",
      "Constructors call base class first"
    ],
    commonMistakes: [
      "Diamond problem with multiple inheritance",
      "Missing virtual destructor in base class"
    ],
    proTips: [
      "Prefer composition over inheritance",
      "Use final to prevent further inheritance"
    ]
  },

  polymorphism: {
    definition: "Polymorphism lets objects of different types be treated through a common interface. C++ supports compile-time (templates, overloading) and runtime (virtual functions) polymorphism.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Runtime polymorphism uses virtual functions and inheritance. Compile-time polymorphism uses templates and overloading. Pure virtual functions (= 0) create abstract classes.",
    examples: [
      {
        title: "Virtual Functions",
        code: `#include <iostream>
using namespace std;

class Shape {
public:
    virtual double area() = 0;
    virtual void display() { cout << "Shape" << endl; }
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double area() override { return 3.14159 * radius * radius; }
    void display() override { cout << "Circle" << endl; }
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}
    double area() override { return width * height; }
    void display() override { cout << "Rectangle" << endl; }
};

int main() {
    Shape *shapes[] = {new Circle(5.0), new Rectangle(4.0, 3.0)};
    for (auto s : shapes) {
        s->display();
        cout << "Area: " << s->area() << endl;
    }
    return 0;
}`,
        output: "Circle\nArea: 78.5398\nRectangle\nArea: 12"
      },
      {
        title: "Function Overloading",
        code: `#include <iostream>
using namespace std;

int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }
string add(string a, string b) { return a + b; }

int main() {
    cout << add(5, 3) << endl;
    cout << add(1.5, 2.5) << endl;
    cout << add("Hello", " World") << endl;
    return 0;
}`,
        output: "8\n4\nHello World"
      },
      {
        title: "Operator Overloading",
        code: `#include <iostream>
using namespace std;

class Vector {
public:
    double x, y;
    Vector(double x, double y) : x(x), y(y) {}
    Vector operator+(const Vector &v) {
        return Vector(x + v.x, y + v.y);
    }
    friend ostream &operator<<(ostream &os, const Vector &v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};

int main() {
    Vector a(1, 2), b(3, 4);
    Vector c = a + b;
    cout << a << " + " << b << " = " << c << endl;
    return 0;
}`,
        output: "(1, 2) + (3, 4) = (4, 6)"
      },
      {
        title: "Pure Virtual Functions",
        code: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void speak() = 0;
    virtual ~Animal() {}
};

class Dog : public Animal {
public:
    void speak() override { cout << "Woof!" << endl; }
};

class Cat : public Animal {
public:
    void speak() override { cout << "Meow!" << endl; }
};

int main() {
    Animal *pets[] = {new Dog(), new Cat()};
    for (auto p : pets) p->speak();
    return 0;
}`,
        output: "Woof!\nMeow!"
      },
      {
        title: "Template Polymorphism",
        code: `#include <iostream>
using namespace std;

template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maximum(5, 3) << endl;
    cout << maximum(1.5, 2.5) << endl;
    cout << maximum('a', 'z') << endl;
    return 0;
}`,
        output: "5\n2.5\nz"
      }
    ],
    keyPoints: [
      "Virtual functions enable runtime polymorphism",
      "Templates enable compile-time polymorphism",
      "Pure virtual functions create abstract classes"
    ],
    commonMistakes: [
      "Forgetting virtual destructor in polymorphic classes",
      "Not using override keyword"
    ],
    proTips: [
      "Use virtual destructor in polymorphic base classes",
      "Use override to prevent errors"
    ]
  },

  encapsulation: {
    definition: "Encapsulation bundles data and methods into a class and restricts access to internal details. It hides complexity behind a clean interface.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "public members are accessible everywhere, private members only inside the class, and protected members are available to derived classes too. Getters and setters provide controlled access.",
    examples: [
      {
        title: "Private Members",
        code: `#include <iostream>
using namespace std;

class Account {
private:
    double balance;
public:
    Account(double b) : balance(b) {}
    double getBalance() { return balance; }
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
};

int main() {
    Account acc(1000);
    acc.deposit(500);
    cout << "Balance: " << acc.getBalance() << endl;
    return 0;
}`,
        output: "Balance: 1500"
      },
      {
        title: "Getter and Setter",
        code: `#include <iostream>
using namespace std;

class Temperature {
private:
    double celsius;
public:
    void setCelsius(double c) {
        if (c >= -273.15) celsius = c;
    }
    double getCelsius() { return celsius; }
    double getFahrenheit() { return celsius * 9.0/5.0 + 32; }
};

int main() {
    Temperature temp;
    temp.setCelsius(100);
    cout << "Celsius: " << temp.getCelsius() << endl;
    cout << "Fahrenheit: " << temp.getFahrenheit() << endl;
    return 0;
}`,
        output: "Celsius: 100\nFahrenheit: 212"
      },
      {
        title: "Class Interface",
        code: `#include <iostream>
#include <vector>
using namespace std;

class Stack {
private:
    vector<int> data;
public:
    void push(int val) { data.push_back(val); }
    int pop() {
        int val = data.back();
        data.pop_back();
        return val;
    }
    bool empty() { return data.empty(); }
    int size() { return data.size(); }
};

int main() {
    Stack s;
    s.push(10);
    s.push(20);
    s.push(30);
    cout << "Size: " << s.size() << endl;
    cout << "Pop: " << s.pop() << endl;
    cout << "Size: " << s.size() << endl;
    return 0;
}`,
        output: "Size: 3\nPop: 30\nSize: 2"
      },
      {
        title: "Access Specifiers",
        code: `#include <iostream>
using namespace std;

class MyClass {
public:
    int pubVar;
    void pubMethod() { cout << "Public" << endl; }
protected:
    int protVar;
    void protMethod() { cout << "Protected" << endl; }
private:
    int privVar;
    void privMethod() { cout << "Private" << endl; }
};

class Derived : public MyClass {
public:
    void show() {
        pubMethod();
        protMethod();
    }
};

int main() {
    Derived d;
    d.pubMethod();
    d.show();
    return 0;
}`,
        output: "Public\nPublic\nProtected"
      },
      {
        title: "Data Validation",
        code: `#include <iostream>
using namespace std;

class Student {
private:
    string name;
    int age;
public:
    void setName(string n) {
        if (!n.empty()) name = n;
    }
    void setAge(int a) {
        if (a >= 0 && a <= 150) age = a;
    }
    string getName() { return name; }
    int getAge() { return age; }
};

int main() {
    Student s;
    s.setName("Alice");
    s.setAge(20);
    cout << s.getName() << ", " << s.getAge() << endl;
    s.setAge(-5);
    cout << "After invalid: " << s.getAge() << endl;
    return 0;
}`,
        output: "Alice, 20\nAfter invalid: 20"
      }
    ],
    keyPoints: [
      "Private hides internal implementation",
      "Public provides the interface",
      "Getters/setters control access to private data"
    ],
    commonMistakes: [
      "Making everything public defeats encapsulation",
      "Not validating in setters"
    ],
    proTips: [
      "Keep data members private",
      "Validate data in setters"
    ]
  },

  stl: {
    definition: "The Standard Template Library provides containers, algorithms, iterators, and function objects for generic programming. It is the backbone of efficient C++ data structures.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "STL containers like vector, map, and set store data. Algorithms like sort and find operate on them through iterators. Function objects and lambdas customize behavior.",
    examples: [
      {
        title: "Vector Container",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1, 9};
    nums.push_back(3);
    nums.insert(nums.begin() + 2, 10);
    for (int n : nums) cout << n << " ";
    cout << endl;
    cout << "Size: " << nums.size() << endl;
    return 0;
}`,
        output: "5 2 10 8 1 9 3\nSize: 7"
      },
      {
        title: "Map Container",
        code: `#include <iostream>
#include <map>
using namespace std;

int main() {
    map<string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;
    ages["Charlie"] = 35;
    for (auto &pair : ages) {
        cout << pair.first << ": " << pair.second << endl;
    }
    return 0;
}`,
        output: "Alice: 25\nBob: 30\nCharlie: 35"
      },
      {
        title: "Set Container",
        code: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> nums = {5, 2, 8, 1, 9, 2, 5};
    for (int n : nums) cout << n << " ";
    cout << endl;
    cout << "Size: " << nums.size() << endl;
    return 0;
}`,
        output: "1 2 5 8 9\nSize: 5"
      },
      {
        title: "STL Algorithms",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1, 9};
    sort(nums.begin(), nums.end());
    cout << "Sorted: ";
    for (int n : nums) cout << n << " ";
    cout << endl;
    auto it = find(nums.begin(), nums.end(), 8);
    if (it != nums.end()) cout << "Found 8 at index " << it - nums.begin() << endl;
    return 0;
}`,
        output: "Sorted: 1 2 5 8 9\nFound 8 at index 3"
      },
      {
        title: "Stack and Queue",
        code: `#include <iostream>
#include <stack>
#include <queue>
using namespace std;

int main() {
    stack<int> s;
    s.push(10); s.push(20); s.push(30);
    cout << "Stack top: " << s.top() << endl;
    s.pop();
    cout << "After pop: " << s.top() << endl;

    queue<int> q;
    q.push(100); q.push(200); q.push(300);
    cout << "Queue front: " << q.front() << endl;
    q.pop();
    cout << "After dequeue: " << q.front() << endl;
    return 0;
}`,
        output: "Stack top: 30\nAfter pop: 20\nQueue front: 100\nAfter dequeue: 200"
      }
    ],
    keyPoints: [
      "vector is the default container for most use cases",
      "map stores key-value pairs in sorted order",
      "Algorithms work through iterators"
    ],
    commonMistakes: [
      "Invalidating iterators after modification",
      "Using wrong container for the task"
    ],
    proTips: [
      "Use vector as your default container",
      "Use unordered_map for O(1) average lookup"
    ]
  },

  iterators: {
    definition: "Iterators traverse container elements and provide a uniform interface for accessing data regardless of the underlying container type.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "begin() returns an iterator to the first element, end() returns past the last. Use * to dereference and ++ to advance. Different containers support different iterator types.",
    examples: [
      {
        title: "Basic Iterator Usage",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30, 40, 50};
    for (vector<int>::iterator it = nums.begin(); it != nums.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}`,
        output: "10 20 30 40 50"
      },
      {
        title: "Auto Iterator",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    for (auto it = nums.begin(); it != nums.end(); ++it) {
        *it *= 2;
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}`,
        output: "2 4 6 8 10"
      },
      {
        title: "Reverse Iterator",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    for (auto it = nums.rbegin(); it != nums.rend(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}`,
        output: "5 4 3 2 1"
      },
      {
        title: "Const Iterator",
        code: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30};
    for (auto it = nums.cbegin(); it != nums.cend(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    return 0;
}`,
        output: "10 20 30"
      },
      {
        title: "Iterator with Algorithms",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1, 9};
    sort(nums.begin(), nums.end());
    auto it = find(nums.begin(), nums.end(), 8);
    if (it != nums.end()) {
        cout << "Found at index: " << distance(nums.begin(), it) << endl;
    }
    return 0;
}`,
        output: "Found at index: 3"
      }
    ],
    keyPoints: [
      "begin() returns the first element, end() past the last",
      "Use * to dereference an iterator",
      "Use auto to simplify iterator declarations"
    ],
    commonMistakes: [
      "Dereferencing end() iterator",
      "Using invalidated iterators"
    ],
    proTips: [
      "Use const_iterator for read-only access",
      "Use distance() for index calculation"
    ]
  },

  algorithms: {
    definition: "STL algorithms operate on iterator ranges and provide tested, efficient implementations for searching, sorting, transforming, and manipulating data.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Algorithms are in <algorithm> and work on iterator ranges. Common ones include sort, find, transform, for_each, count, and accumulate. Lambdas let you customize behavior inline.",
    examples: [
      {
        title: "Sort Algorithm",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1, 9, 3};
    sort(nums.begin(), nums.end());
    cout << "Sorted: ";
    for (int n : nums) cout << n << " ";
    cout << endl;
    return 0;
}`,
        output: "Sorted: 1 2 3 5 8 9"
      },
      {
        title: "Find Algorithm",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30, 40, 50};
    auto it = find(nums.begin(), nums.end(), 30);
    if (it != nums.end()) {
        cout << "Found: " << *it << " at index " << it - nums.begin() << endl;
    } else {
        cout << "Not found" << endl;
    }
    return 0;
}`,
        output: "Found: 30 at index 2"
      },
      {
        title: "Transform Algorithm",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    vector<int> squares(nums.size());
    transform(nums.begin(), nums.end(), squares.begin(), [](int x) { return x * x; });
    cout << "Squares: ";
    for (int n : squares) cout << n << " ";
    cout << endl;
    return 0;
}`,
        output: "Squares: 1 4 9 16 25"
      },
      {
        title: "For Each Algorithm",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30, 40, 50};
    for_each(nums.begin(), nums.end(), [](int n) { cout << n * 2 << " "; });
    cout << endl;
    return 0;
}`,
        output: "20 40 60 80 100"
      },
      {
        title: "Count and Accumulate",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 2, 4, 2, 5};
    cout << "Count of 2s: " << count(nums.begin(), nums.end(), 2) << endl;
    cout << "Sum: " << accumulate(nums.begin(), nums.end(), 0) << endl;
    return 0;
}`,
        output: "Count of 2s: 3\nSum: 19"
      }
    ],
    keyPoints: [
      "Algorithms work on iterator ranges",
      "sort() orders elements, find() searches",
      "transform() applies an operation to each element"
    ],
    commonMistakes: [
      "Using wrong iterator types for an algorithm",
      "Modifying container during iteration"
    ],
    proTips: [
      "Use lambda functions with algorithms for clean code",
      "Prefer algorithms over manual loops"
    ]
  },

  pointers: {
    definition: "C++ inherits C pointers and adds smart pointers for automatic memory management. Raw pointers give direct memory access; smart pointers prevent leaks.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Raw pointers use * and &. Smart pointers (unique_ptr, shared_ptr, weak_ptr) manage memory automatically. new/delete allocate and free heap memory.",
    examples: [
      {
        title: "Raw Pointer",
        code: `#include <iostream>
using namespace std;

int main() {
    int num = 10;
    int *ptr = &num;
    cout << "Value: " << *ptr << endl;
    cout << "Address: " << ptr << endl;
    *ptr = 20;
    cout << "After modify: " << num << endl;
    return 0;
}`,
        output: "Value: 10\nAddress: 0x7ffd5c8e1a3c\nAfter modify: 20"
      },
      {
        title: "Dynamic Memory",
        code: `#include <iostream>
using namespace std;

int main() {
    int *arr = new int[5];
    for (int i = 0; i < 5; i++) arr[i] = i * 10;
    for (int i = 0; i < 5; i++) cout << arr[i] << " ";
    cout << endl;
    delete[] arr;
    return 0;
}`,
        output: "0 10 20 30 40"
      },
      {
        title: "Unique Pointer",
        code: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    unique_ptr<int> ptr1 = make_unique<int>(42);
    unique_ptr<int> ptr2 = make_unique<int>(100);
    cout << "ptr1: " << *ptr1 << endl;
    cout << "ptr2: " << *ptr2 << endl;
    return 0;
}`,
        output: "ptr1: 42\nptr2: 100"
      },
      {
        title: "Shared Pointer",
        code: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    shared_ptr<int> sp1 = make_shared<int>(50);
    shared_ptr<int> sp2 = sp1;
    cout << "Count: " << sp1.use_count() << endl;
    cout << "Value: " << *sp1 << endl;
    sp1.reset();
    cout << "Count after reset: " << sp2.use_count() << endl;
    return 0;
}`,
        output: "Count: 2\nValue: 50\nCount after reset: 1"
      },
      {
        title: "Pointer to Object",
        code: `#include <iostream>
using namespace std;

class Dog {
public:
    void bark() { cout << "Woof!" << endl; }
};

int main() {
    Dog *dog = new Dog();
    dog->bark();
    delete dog;
    return 0;
}`,
        output: "Woof!"
      }
    ],
    keyPoints: [
      "Smart pointers automate memory management",
      "unique_ptr gives exclusive ownership",
      "shared_ptr uses reference counting for shared ownership"
    ],
    commonMistakes: [
      "Memory leaks with raw pointers",
      "Circular references with shared_ptr"
    ],
    proTips: [
      "Prefer smart pointers over raw pointers",
      "Use make_unique and make_shared"
    ]
  },

  templates: {
    definition: "Templates let you write generic functions and classes that work with any data type. The compiler generates specific code for each type used.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use <typename T> or <class T> for type parameters. The compiler instantiates templates for each type. Templates can have multiple parameters and specializations.",
    examples: [
      {
        title: "Function Template",
        code: `#include <iostream>
using namespace std;

template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maximum(5, 3) << endl;
    cout << maximum(1.5, 2.5) << endl;
    cout << maximum('a', 'z') << endl;
    return 0;
}`,
        output: "5\n2.5\nz"
      },
      {
        title: "Class Template",
        code: `#include <iostream>
using namespace std;

template <typename T>
class Box {
private:
    T value;
public:
    Box(T v) : value(v) {}
    T getValue() { return value; }
    void setValue(T v) { value = v; }
};

int main() {
    Box<int> intBox(42);
    Box<string> strBox("Hello");
    cout << intBox.getValue() << endl;
    cout << strBox.getValue() << endl;
    return 0;
}`,
        output: "42\nHello"
      },
      {
        title: "Template with Multiple Parameters",
        code: `#include <iostream>
using namespace std;

template <typename T, typename U>
class Pair {
private:
    T first;
    U second;
public:
    Pair(T f, U s) : first(f), second(s) {}
    T getFirst() { return first; }
    U getSecond() { return second; }
};

int main() {
    Pair<int, string> p(1, "One");
    cout << p.getFirst() << ": " << p.getSecond() << endl;
    return 0;
}`,
        output: "1: One"
      },
      {
        title: "Template Specialization",
        code: `#include <iostream>
#include <cstring>
using namespace std;

template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

template <>
const char* maximum<const char*>(const char* a, const char* b) {
    return (strcmp(a, b) > 0) ? a : b;
}

int main() {
    cout << maximum(5, 3) << endl;
    cout << maximum("apple", "banana") << endl;
    return 0;
}`,
        output: "5\nbanana"
      },
      {
        title: "Template Function Overload",
        code: `#include <iostream>
#include <vector>
using namespace std;

template <typename T>
void print(T value) {
    cout << value << endl;
}

template <typename T>
void print(vector<T> vec) {
    for (const auto &v : vec) cout << v << " ";
    cout << endl;
}

int main() {
    print(42);
    print(3.14);
    print(vector<int>{1, 2, 3, 4, 5});
    return 0;
}`,
        output: "42\n3.14\n1 2 3 4 5"
      }
    ],
    keyPoints: [
      "Templates generate code for each type used",
      "Function templates for generic functions",
      "Template specialization for specific types"
    ],
    commonMistakes: [
      "Template definitions in the wrong file",
      "Missing template instantiation"
    ],
    proTips: [
      "Include template definitions in headers",
      "Use concepts (C++20) for constraints"
    ]
  },

  exceptions: {
    definition: "C++ exceptions handle errors by separating error-handling code from normal flow using try, catch, and throw.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "throw raises an exception. try blocks wrap code that might throw. catch handles specific types. Stack unwinding cleans up resources automatically. RAII ensures proper cleanup.",
    examples: [
      {
        title: "Basic Exception",
        code: `#include <iostream>
using namespace std;

int divide(int a, int b) {
    if (b == 0) throw "Division by zero";
    return a / b;
}

int main() {
    try {
        cout << divide(10, 2) << endl;
        cout << divide(10, 0) << endl;
    } catch (const char *msg) {
        cout << "Error: " << msg << endl;
    }
    return 0;
}`,
        output: "5\nError: Division by zero"
      },
      {
        title: "Custom Exception Class",
        code: `#include <iostream>
#include <string>
using namespace std;

class InsufficientFunds : public exception {
private:
    string msg;
public:
    InsufficientFunds(double amt) : msg("Insufficient funds: " + to_string(amt)) {}
    const char* what() const noexcept override { return msg.c_str(); }
};

class Account {
private:
    double balance;
public:
    Account(double b) : balance(b) {}
    void withdraw(double amount) {
        if (amount > balance) throw InsufficientFunds(amount);
        balance -= amount;
    }
    double getBalance() { return balance; }
};

int main() {
    try {
        Account acc(100);
        acc.withdraw(50);
        cout << "Balance: " << acc.getBalance() << endl;
        acc.withdraw(100);
    } catch (const exception &e) {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}`,
        output: "Balance: 50\nError: Insufficient funds: 100.000000"
      },
      {
        title: "Multiple Catch Blocks",
        code: `#include <iostream>
using namespace std;

void checkValue(int val) {
    if (val < 0) throw -1;
    if (val == 0) throw 0.0;
    if (val > 100) throw "Too large";
}

int main() {
    int values[] = {-5, 0, 50, 150};
    for (int v : values) {
        try {
            checkValue(v);
            cout << v << " is valid" << endl;
        } catch (int e) {
            cout << v << ": negative" << endl;
        } catch (double e) {
            cout << v << ": zero" << endl;
        } catch (const char *msg) {
            cout << v << ": " << msg << endl;
        }
    }
    return 0;
}`,
        output: "-5: negative\n0: zero\n50 is valid\n150: Too large"
      },
      {
        title: "Exception Re-throw",
        code: `#include <iostream>
using namespace std;

void process() {
    try {
        throw runtime_error("Original error");
    } catch (exception &e) {
        cout << "Caught in process: " << e.what() << endl;
        throw;
    }
}

int main() {
    try {
        process();
    } catch (exception &e) {
        cout << "Caught in main: " << e.what() << endl;
    }
    return 0;
}`,
        output: "Caught in process: Original error\nCaught in main: Original error"
      },
      {
        title: "RAII with Exceptions",
        code: `#include <iostream>
using namespace std;

class Resource {
public:
    Resource() { cout << "Acquired" << endl; }
    ~Resource() { cout << "Released" << endl; }
};

void risky() {
    Resource r;
    throw runtime_error("Error occurred");
}

int main() {
    try {
        risky();
    } catch (exception &e) {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}`,
        output: "Acquired\nError: Error occurred\nReleased"
      }
    ],
    keyPoints: [
      "throw raises an exception, try/catch handles it",
      "Catch by const reference to avoid slicing",
      "RAII ensures resources are cleaned up on exception"
    ],
    commonMistakes: [
      "Catching by value instead of reference",
      "Throwing in destructors"
    ],
    proTips: [
      "Use standard exception classes when possible",
      "Don't use exceptions for control flow"
    ]
  },

  fileio: {
    definition: "C++ file I/O uses streams (ifstream, ofstream, fstream) from <fstream> for reading and writing files with the same << and >> syntax as cin/cout.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "ifstream reads files, ofstream writes files, fstream does both. Open files in the constructor or with open(). Use is_open() to verify. Always close when done.",
    examples: [
      {
        title: "Writing to File",
        code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream file("output.txt");
    if (file.is_open()) {
        file << "Hello File!" << endl;
        file << "Number: " << 42 << endl;
        file.close();
        cout << "File written" << endl;
    }
    return 0;
}`,
        output: "File written"
      },
      {
        title: "Reading from File",
        code: `#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ifstream file("input.txt");
    string line;
    if (file.is_open()) {
        while (getline(file, line)) {
            cout << line << endl;
        }
        file.close();
    }
    return 0;
}`,
        output: "Contents of input.txt"
      },
      {
        title: "Binary File Operations",
        code: `#include <iostream>
#include <fstream>
using namespace std;

struct Data {
    int id;
    double value;
};

int main() {
    Data data = {1, 3.14};
    ofstream outFile("data.bin", ios::binary);
    outFile.write(reinterpret_cast<char*>(&data), sizeof(Data));
    outFile.close();

    Data readData;
    ifstream inFile("data.bin", ios::binary);
    inFile.read(reinterpret_cast<char*>(&readData), sizeof(Data));
    inFile.close();
    cout << "ID: " << readData.id << ", Value: " << readData.value << endl;
    return 0;
}`,
        output: "ID: 1, Value: 3.14"
      },
      {
        title: "File Modes",
        code: `#include <iostream>
#include <fstream>
using namespace std;

int main() {
    ofstream file("test.txt", ios::app);
    file << "Appended line" << endl;
    file.close();

    ifstream readFile("test.txt");
    string content;
    getline(readFile, content);
    cout << "Content: " << content << endl;
    readFile.close();
    return 0;
}`,
        output: "Content: Appended line"
      },
      {
        title: "String Stream",
        code: `#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main() {
    stringstream ss;
    ss << "Name: Alice, Age: 25";
    string name, ageStr;
    getline(ss, name, ',');
    getline(ss, ageStr);
    cout << name << endl;
    cout << ageStr << endl;
    return 0;
}`,
        output: "Name: Alice\n Age: 25"
      }
    ],
    keyPoints: [
      "ifstream for input, ofstream for output, fstream for both",
      "Use is_open() to check if the file opened successfully",
      "Use stringstream for string parsing"
    ],
    commonMistakes: [
      "Not checking if file opened successfully",
      "Forgetting to close files"
    ],
    proTips: [
      "Always check is_open() after opening",
      "Use binary mode for non-text files"
    ]
  },

  lambdas: {
    definition: "Lambda expressions create anonymous functions inline. They are concise and commonly used with STL algorithms and callbacks.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Lambdas use [] for capture, () for parameters, and {} for the body. [=] captures by value, [&] by reference. Store them in auto or std::function.",
    examples: [
      {
        title: "Basic Lambda",
        code: `#include <iostream>
using namespace std;

int main() {
    auto greet = []() { cout << "Hello!" << endl; };
    greet();
    auto add = [](int a, int b) { return a + b; };
    cout << "Sum: " << add(5, 3) << endl;
    return 0;
}`,
        output: "Hello!\nSum: 8"
      },
      {
        title: "Lambda with Capture",
        code: `#include <iostream>
using namespace std;

int main() {
    int x = 10, y = 20;
    auto add = [x, y]() { return x + y; };
    cout << "Sum: " << add() << endl;
    auto increment = [&x]() { x++; };
    increment();
    cout << "x after increment: " << x << endl;
    return 0;
}`,
        output: "Sum: 30\nx after increment: 11"
      },
      {
        title: "Lambda with STL",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {5, 2, 8, 1, 9};
    sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });
    for (int n : nums) cout << n << " ";
    cout << endl;
    return 0;
}`,
        output: "9 8 5 2 1"
      },
      {
        title: "Lambda with for_each",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    int sum = 0;
    for_each(nums.begin(), nums.end(), [&sum](int n) { sum += n; });
    cout << "Sum: " << sum << endl;
    return 0;
}`,
        output: "Sum: 15"
      },
      {
        title: "Lambda with Transform",
        code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    vector<int> doubled(nums.size());
    transform(nums.begin(), nums.end(), doubled.begin(), [](int n) { return n * 2; });
    for (int n : doubled) cout << n << " ";
    cout << endl;
    return 0;
}`,
        output: "2 4 6 8 10"
      }
    ],
    keyPoints: [
      "[] capture, () parameters, {} body",
      "[=] captures by value, [&] by reference",
      "Essential for STL algorithm predicates"
    ],
    commonMistakes: [
      "Capturing by reference when value is needed",
      "Forgetting the capture list"
    ],
    proTips: [
      "Keep lambdas small and focused",
      "Use auto for lambda type deduction"
    ]
  },

  namespaces: {
    definition: "Namespaces organize code into logical groups and prevent name conflicts in large projects or when combining multiple libraries.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use the namespace keyword to define a namespace and :: for qualified names. using namespace imports all names. C++17 supports nested namespaces with A::B syntax.",
    examples: [
      {
        title: "Basic Namespace",
        code: `#include <iostream>
using namespace std;

namespace Math {
    int add(int a, int b) { return a + b; }
    int subtract(int a, int b) { return a - b; }
}

namespace String {
    string toUpper(string s) {
        for (char &c : s) c = toupper(c);
        return s;
    }
}

int main() {
    cout << Math::add(5, 3) << endl;
    cout << String::toUpper("hello") << endl;
    return 0;
}`,
        output: "8\nHELLO"
      },
      {
        title: "Using Directive",
        code: `#include <iostream>
namespace MyLib {
    void greet() { cout << "Hello from MyLib!" << endl; }
}
using namespace MyLib;

int main() {
    greet();
    return 0;
}`,
        output: "Hello from MyLib!"
      },
      {
        title: "Nested Namespace (C++17)",
        code: `#include <iostream>
namespace Company::Project::Module {
    void run() { cout << "Running module" << endl; }
}

int main() {
    Company::Project::Module::run();
    return 0;
}`,
        output: "Running module"
      },
      {
        title: "Namespace Alias",
        code: `#include <iostream>
namespace VeryLongNamespaceName {
    void func() { cout << "Function called" << endl; }
}
namespace Short = VeryLongNamespaceName;

int main() {
    Short::func();
    return 0;
}`,
        output: "Function called"
      },
      {
        title: "Anonymous Namespace",
        code: `#include <iostream>
namespace {
    int secret = 42;
    void helper() { cout << "Secret: " << secret << endl; }
}

int main() {
    helper();
    return 0;
}`,
        output: "Secret: 42"
      }
    ],
    keyPoints: [
      "Namespaces group related declarations",
      "Use :: for qualified names",
      "Avoid using namespace in headers"
    ],
    commonMistakes: [
      "Using namespace in headers pollutes global scope",
      "Name hiding in nested namespaces"
    ],
    proTips: [
      "Use namespace aliases for long names",
      "Use unnamed namespaces for internal linkage"
    ]
  },

  move: {
    definition: "Move semantics transfer resources from one object to another without copying. Rvalue references and move constructors make this efficient.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use && for rvalue references. std::move converts an lvalue to an rvalue. Move constructors transfer ownership of resources. Perfect forwarding preserves value categories in templates.",
    examples: [
      {
        title: "Basic Move",
        code: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s1 = "Hello";
    string s2 = move(s1);
    cout << "s1: " << s1 << endl;
    cout << "s2: " << s2 << endl;
    return 0;
}`,
        output: "s1: \ns2: Hello"
      },
      {
        title: "Move Constructor",
        code: `#include <iostream>
using namespace std;

class Buffer {
private:
    int *data;
    int size;
public:
    Buffer(int s) : size(s), data(new int[s]) {
        cout << "Constructed" << endl;
    }
    Buffer(Buffer &&other) : data(other.data), size(other.size) {
        other.data = nullptr;
        other.size = 0;
        cout << "Moved" << endl;
    }
    ~Buffer() { delete[] data; }
};

int main() {
    Buffer b1(100);
    Buffer b2 = move(b1);
    return 0;
}`,
        output: "Constructed\nMoved"
      },
      {
        title: "Move with Vector",
        code: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> v1;
    v1.push_back("Hello");
    v1.push_back("World");
    vector<string> v2 = move(v1);
    cout << "v1 size: " << v1.size() << endl;
    cout << "v2 size: " << v2.size() << endl;
    return 0;
}`,
        output: "v1 size: 0\nv2 size: 2"
      },
      {
        title: "Perfect Forwarding",
        code: `#include <iostream>
#include <string>
using namespace std;

void process(string &s) { cout << "Lvalue: " << s << endl; }
void process(string &&s) { cout << "Rvalue: " << s << endl; }

template <typename T>
void forwarder(T &&arg) {
    process(forward<T>(arg));
}

int main() {
    string s = "Hello";
    forwarder(s);
    forwarder(string("World"));
    return 0;
}`,
        output: "Lvalue: Hello\nRvalue: World"
      },
      {
        title: "Move Assignment",
        code: `#include <iostream>
using namespace std;

class Resource {
private:
    int *data;
public:
    Resource(int val) : data(new int(val)) {}
    Resource &operator=(Resource &&other) {
        if (this != &other) {
            delete data;
            data = other.data;
            other.data = nullptr;
        }
        return *this;
    }
    ~Resource() { delete data; }
    int getValue() { return data ? *data : 0; }
};

int main() {
    Resource r1(10);
    Resource r2(20);
    r2 = move(r1);
    cout << "r2: " << r2.getValue() << endl;
    return 0;
}`,
        output: "r2: 10"
      }
    ],
    keyPoints: [
      "std::move converts lvalue to rvalue for efficient transfer",
      "Move constructor transfers ownership without copying",
      "Use noexcept for move operations"
    ],
    commonMistakes: [
      "Using an object after it has been moved",
      "Not checking for self-assignment in move assignment"
    ],
    proTips: [
      "Use std::move for efficient transfers",
      "Implement both copy and move when needed"
    ]
  }
}

export default cpp
