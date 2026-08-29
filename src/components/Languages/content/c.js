const c = {
  intro: {
    definition: "C is a general-purpose programming language created by Dennis Ritchie in 1972. It gives you low-level memory access through pointers while keeping a clean, structured syntax.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "C programs are built from functions, variables, and control structures. The main() function is your entry point. Memory management is manual using pointers, and preprocessor directives handle includes and macros.",
    examples: [
      {
        title: "Hello World",
        code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        output: "Hello, World!"
      },
      {
        title: "Basic Arithmetic",
        code: `#include <stdio.h>

int main() {
    int a = 10, b = 5;
    printf("Sum: %d\\n", a + b);
    printf("Difference: %d\\n", a - b);
    printf("Product: %d\\n", a * b);
    printf("Quotient: %d\\n", a / b);
    return 0;
}`,
        output: "Sum: 15\nDifference: 5\nProduct: 50\nQuotient: 2"
      },
      {
        title: "User Input",
        code: `#include <stdio.h>

int main() {
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("You are %d years old.\\n", age);
    return 0;
}`,
        output: "Enter your age: 25\nYou are 25 years old."
      },
      {
        title: "Conditional Statement",
        code: `#include <stdio.h>

int main() {
    int num = 15;
    if (num > 0) {
        printf("%d is positive\\n", num);
    } else if (num < 0) {
        printf("%d is negative\\n", num);
    } else {
        printf("Number is zero\\n");
    }
    return 0;
}`,
        output: "15 is positive"
      }
    ],
    keyPoints: [
      "C is a procedural language with manual memory management",
      "main() is the entry point of every C program",
      "Preprocessor directives start with #"
    ],
    commonMistakes: [
      "Forgetting to include stdio.h for printf/scanf",
      "Using = instead of == for comparison"
    ],
    proTips: [
      "Always initialize variables before use",
      "Compile with -Wall -Wextra for more warnings"
    ]
  },

  setup: {
    definition: "You need a compiler, a text editor, and build tools to write C programs. GCC is the most popular compiler and runs on all major platforms.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "C programs are written in .c files and compiled into executable binaries. The compilation process has four stages: preprocessing, compilation, assembly, and linking.",
    examples: [
      {
        title: "GCC Compilation",
        code: `#include <stdio.h>

int main() {
    printf("Compiled with GCC!\\n");
    return 0;
}`,
        output: "Compiled with GCC!"
      },
      {
        title: "Multiple Files - main.c",
        code: `#include <stdio.h>
#include "mathutils.h"

int main() {
    printf("Sum of 3 and 4: %d\\n", add(3, 4));
    return 0;
}`,
        output: "Sum of 3 and 4: 7"
      },
      {
        title: "With Compiler Flags",
        code: `#include <stdio.h>

int main() {
    int x = 10;
    printf("Debug mode: x = %d\\n", x);
    return 0;
}`,
        output: "Debug mode: x = 10"
      },
      {
        title: "Makefile Usage",
        code: `#include <stdio.h>

void greet() {
    printf("Using make to build!\\n");
}

int main() {
    greet();
    return 0;
}`,
        output: "Using make to build!"
      }
    ],
    keyPoints: [
      "Compile with: gcc -o program program.c",
      "Use -g flag for debugging symbols",
      "Use make utility for larger projects"
    ],
    commonMistakes: [
      "Forgetting to compile before running",
      "Not linking all required source files"
    ],
    proTips: [
      "Use 'gcc -Wall -Wextra -pedantic' for strict warnings",
      "Create a Makefile for project automation"
    ]
  },

  variables: {
    definition: "Variables are named storage locations that hold data. In C you must declare a variable's type before using it, which determines how much memory it uses.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "C provides several basic types: int for integers, float and double for decimals, and char for single characters. You can use modifiers like unsigned, short, long, and const to fine-tune them.",
    examples: [
      {
        title: "Basic Data Types",
        code: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';
    double salary = 50000.50;
    printf("Age: %d, Height: %.1f, Grade: %c, Salary: %.2f\\n", age, height, grade, salary);
    return 0;
}`,
        output: "Age: 25, Height: 5.9, Grade: A, Salary: 50000.50"
      },
      {
        title: "Variable Initialization",
        code: `#include <stdio.h>

int main() {
    int a = 10;
    int b = 20;
    int c;
    c = a + b;
    printf("a = %d, b = %d, c = %d\\n", a, b, c);
    return 0;
}`,
        output: "a = 10, b = 20, c = 30"
      },
      {
        title: "Constants",
        code: `#include <stdio.h>

int main() {
    const float PI = 3.14159;
    float radius = 5.0;
    float area = PI * radius * radius;
    printf("Area of circle: %.2f\\n", area);
    return 0;
}`,
        output: "Area of circle: 78.54"
      },
      {
        title: "Sizeof Operator",
        code: `#include <stdio.h>

int main() {
    printf("Size of int: %lu bytes\\n", sizeof(int));
    printf("Size of float: %lu bytes\\n", sizeof(float));
    printf("Size of double: %lu bytes\\n", sizeof(double));
    printf("Size of char: %lu byte\\n", sizeof(char));
    return 0;
}`,
        output: "Size of int: 4 bytes\nSize of float: 4 bytes\nSize of double: 8 bytes\nSize of char: 1 byte"
      },
      {
        title: "Type Casting",
        code: `#include <stdio.h>

int main() {
    int a = 7, b = 2;
    float result = (float)a / b;
    printf("Integer division: %d\\n", a / b);
    printf("Float division: %.2f\\n", result);
    return 0;
}`,
        output: "Integer division: 3\nFloat division: 3.50"
      }
    ],
    keyPoints: [
      "Declare the type before using a variable",
      "Use const for values that should not change",
      "sizeof returns the size in bytes"
    ],
    commonMistakes: [
      "Using uninitialized variables leads to garbage values",
      "Integer division silently truncates decimals"
    ],
    proTips: [
      "Use meaningful variable names for readability",
      "Initialize all variables at declaration"
    ]
  },

  operators: {
    definition: "Operators are symbols that perform operations on values. C has arithmetic, relational, logical, bitwise, and assignment operators.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Arithmetic operators handle math. Relational operators compare values. Logical operators combine boolean expressions. Bitwise operators work on individual bits. Operator precedence determines evaluation order.",
    examples: [
      {
        title: "Arithmetic Operators",
        code: `#include <stdio.h>

int main() {
    int a = 10, b = 3;
    printf("a + b = %d\\n", a + b);
    printf("a - b = %d\\n", a - b);
    printf("a * b = %d\\n", a * b);
    printf("a / b = %d\\n", a / b);
    printf("a %% b = %d\\n", a % b);
    return 0;
}`,
        output: "a + b = 13\na - b = 7\na * b = 30\na / b = 3\na % b = 1"
      },
      {
        title: "Relational Operators",
        code: `#include <stdio.h>

int main() {
    int x = 5, y = 10;
    printf("x == y: %d\\n", x == y);
    printf("x != y: %d\\n", x != y);
    printf("x > y: %d\\n", x > y);
    printf("x < y: %d\\n", x < y);
    printf("x >= 5: %d\\n", x >= 5);
    printf("x <= 3: %d\\n", x <= 3);
    return 0;
}`,
        output: "x == y: 0\nx != y: 1\nx > y: 0\nx < y: 1\nx >= 5: 1\nx <= 3: 0"
      },
      {
        title: "Logical Operators",
        code: `#include <stdio.h>

int main() {
    int a = 1, b = 0;
    printf("a && b = %d\\n", a && b);
    printf("a || b = %d\\n", a || b);
    printf("!a = %d\\n", !a);
    printf("!b = %d\\n", !b);
    return 0;
}`,
        output: "a && b = 0\na || b = 1\n!a = 0\n!b = 1"
      },
      {
        title: "Increment/Decrement",
        code: `#include <stdio.h>

int main() {
    int a = 5;
    printf("a++ = %d\\n", a++);
    printf("Now a = %d\\n", a);
    printf("++a = %d\\n", ++a);
    printf("a-- = %d\\n", a--);
    printf("Now a = %d\\n", a);
    return 0;
}`,
        output: "a++ = 5\nNow a = 6\n++a = 7\na-- = 7\nNow a = 6"
      },
      {
        title: "Ternary Operator",
        code: `#include <stdio.h>

int main() {
    int num = 15;
    char *result = (num % 2 == 0) ? "Even" : "Odd";
    printf("%d is %s\\n", num, result);
    return 0;
}`,
        output: "15 is Odd"
      }
    ],
    keyPoints: [
      "Arithmetic: +, -, *, /, %",
      "Relational: ==, !=, >, <, >=, <=",
      "Use parentheses to clarify precedence"
    ],
    commonMistakes: [
      "Using = (assignment) instead of == (comparison)",
      "Integer division losing precision"
    ],
    proTips: [
      "Use parentheses to avoid precedence confusion",
      "Remember short-circuit evaluation in && and ||"
    ]
  },

  conditionals: {
    definition: "Conditional statements let your program make decisions and run different code depending on whether a condition is true or false.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use if to check a single condition, if-else for two paths, else-if to chain multiple conditions, and switch for efficient multi-way branching on discrete values.",
    examples: [
      {
        title: "If-Else Statement",
        code: `#include <stdio.h>

int main() {
    int age = 20;
    if (age >= 18) {
        printf("You are an adult\\n");
    } else {
        printf("You are a minor\\n");
    }
    return 0;
}`,
        output: "You are an adult"
      },
      {
        title: "Else-If Ladder",
        code: `#include <stdio.h>

int main() {
    int marks = 85;
    if (marks >= 90) {
        printf("Grade: A\\n");
    } else if (marks >= 80) {
        printf("Grade: B\\n");
    } else if (marks >= 70) {
        printf("Grade: C\\n");
    } else {
        printf("Grade: F\\n");
    }
    return 0;
}`,
        output: "Grade: B"
      },
      {
        title: "Switch Statement",
        code: `#include <stdio.h>

int main() {
    int day = 3;
    switch (day) {
        case 1: printf("Monday\\n"); break;
        case 2: printf("Tuesday\\n"); break;
        case 3: printf("Wednesday\\n"); break;
        case 4: printf("Thursday\\n"); break;
        case 5: printf("Friday\\n"); break;
        default: printf("Weekend\\n");
    }
    return 0;
}`,
        output: "Wednesday"
      },
      {
        title: "Nested Conditions",
        code: `#include <stdio.h>

int main() {
    int num = 15;
    if (num > 0) {
        if (num % 2 == 0) {
            printf("Positive even\\n");
        } else {
            printf("Positive odd\\n");
        }
    } else {
        printf("Non-positive\\n");
    }
    return 0;
}`,
        output: "Positive odd"
      },
      {
        title: "Nested Switch",
        code: `#include <stdio.h>

int main() {
    char grade = 'B';
    int year = 2;
    switch (grade) {
        case 'A':
            printf("Excellent\\n");
            break;
        case 'B':
            switch (year) {
                case 1: printf("Good freshman\\n"); break;
                case 2: printf("Good sophomore\\n"); break;
                default: printf("Good student\\n");
            }
            break;
        default:
            printf("Keep working\\n");
    }
    return 0;
}`,
        output: "Good sophomore"
      }
    ],
    keyPoints: [
      "if checks a single condition, if-else provides two paths",
      "switch is efficient for discrete value matching",
      "Always use break in switch cases"
    ],
    commonMistakes: [
      "Missing break in switch causes fall-through",
      "Using = instead of == in conditions"
    ],
    proTips: [
      "Always include a default case in switch",
      "Use early returns to reduce nesting"
    ]
  },

  loops: {
    definition: "Loops let you execute a block of code repeatedly. C has three loop types: for (counter-based), while (condition-based), and do-while (runs at least once).",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Use for when you know the iteration count. Use while when the condition should be checked before each run. Use do-while when the body must execute at least once. break exits the loop; continue skips to the next iteration.",
    examples: [
      {
        title: "For Loop",
        code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`,
        output: "1 2 3 4 5"
      },
      {
        title: "While Loop",
        code: `#include <stdio.h>

int main() {
    int count = 0;
    while (count < 5) {
        printf("Count: %d\\n", count);
        count++;
    }
    return 0;
}`,
        output: "Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4"
      },
      {
        title: "Do-While Loop",
        code: `#include <stdio.h>

int main() {
    int num;
    do {
        printf("Enter a positive number: ");
        scanf("%d", &num);
    } while (num <= 0);
    printf("You entered: %d\\n", num);
    return 0;
}`,
        output: "Enter a positive number: -3\nEnter a positive number: 5\nYou entered: 5"
      },
      {
        title: "Nested Loops",
        code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%d ", i * j);
        }
        printf("\\n");
    }
    return 0;
}`,
        output: "1 2 3\n2 4 6\n3 6 9"
      },
      {
        title: "Break and Continue",
        code: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        if (i % 3 == 0) continue;
        if (i == 8) break;
        printf("%d ", i);
    }
    printf("\\n");
    return 0;
}`,
        output: "1 2 4 5 7"
      }
    ],
    keyPoints: [
      "for is best when you know the iteration count",
      "while checks the condition before each iteration",
      "do-while guarantees at least one execution"
    ],
    commonMistakes: [
      "Infinite loops from missing increment",
      "Off-by-one errors in loop bounds"
    ],
    proTips: [
      "Use for loops when iteration count is known",
      "Avoid modifying loop counters inside loops"
    ]
  },

  arrays: {
    definition: "Arrays store multiple elements of the same type in contiguous memory. Elements are accessed by index, starting at 0.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Declare an array with a fixed size and access elements using array[index]. When passed to functions, arrays decay to pointers. Use sizeof(arr)/sizeof(arr[0]) to calculate the number of elements.",
    examples: [
      {
        title: "Array Declaration and Access",
        code: `#include <stdio.h>

int main() {
    int nums[5] = {10, 20, 30, 40, 50};
    for (int i = 0; i < 5; i++) {
        printf("nums[%d] = %d\\n", i, nums[i]);
    }
    return 0;
}`,
        output: "nums[0] = 10\nnums[1] = 20\nnums[2] = 30\nnums[3] = 40\nnums[4] = 50"
      },
      {
        title: "Array Initialization",
        code: `#include <stdio.h>

int main() {
    int arr1[5] = {1, 2, 3};
    int arr2[] = {10, 20, 30, 40, 50};
    int arr3[5] = {0};
    printf("arr1[2] = %d\\n", arr1[2]);
    printf("arr2[3] = %d\\n", arr2[3]);
    printf("arr3[0] = %d\\n", arr3[0]);
    return 0;
}`,
        output: "arr1[2] = 3\narr2[3] = 40\narr3[0] = 0"
      },
      {
        title: "Sum of Array Elements",
        code: `#include <stdio.h>

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    int sum = 0;
    int size = sizeof(nums) / sizeof(nums[0]);
    for (int i = 0; i < size; i++) {
        sum += nums[i];
    }
    printf("Sum = %d\\n", sum);
    return 0;
}`,
        output: "Sum = 15"
      },
      {
        title: "2D Array Matrix",
        code: `#include <stdio.h>

int main() {
    int matrix[3][3] = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,
        output: "1 2 3\n4 5 6\n7 8 9"
      },
      {
        title: "Find Maximum Element",
        code: `#include <stdio.h>

int main() {
    int nums[] = {23, 55, 12, 89, 42};
    int max = nums[0];
    int size = sizeof(nums) / sizeof(nums[0]);
    for (int i = 1; i < size; i++) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    printf("Maximum: %d\\n", max);
    return 0;
}`,
        output: "Maximum: 89"
      }
    ],
    keyPoints: [
      "Array indices start at 0",
      "Use sizeof(arr)/sizeof(arr[0]) for element count",
      "Arrays decay to pointers when passed to functions"
    ],
    commonMistakes: [
      "Accessing beyond array bounds is undefined behavior",
      "Using == to compare arrays does not work"
    ],
    proTips: [
      "Initialize arrays at declaration",
      "Pass array size as a separate parameter to functions"
    ]
  },

  strings: {
    definition: "Strings in C are arrays of characters ending with a null terminator ('\\0'). They are not a built-in type but are handled through char arrays and functions from string.h.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Create strings as char arrays and use functions like strlen, strcpy, strcat, and strcmp from <string.h> for common operations. Always make sure your buffer is large enough for the null terminator.",
    examples: [
      {
        title: "String Declaration",
        code: `#include <stdio.h>

int main() {
    char str1[] = "Hello";
    char str2[6] = {'W', 'o', 'r', 'l', 'd', '\\0'};
    printf("%s %s\\n", str1, str2);
    return 0;
}`,
        output: "Hello World"
      },
      {
        title: "String Length",
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Programming";
    printf("Length: %lu\\n", strlen(str));
    printf("Size: %lu\\n", sizeof(str));
    return 0;
}`,
        output: "Length: 11\nSize: 12"
      },
      {
        title: "String Copy and Concatenate",
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char dest[20] = "Hello";
    char src[] = " World";
    strcat(dest, src);
    printf("Concatenated: %s\\n", dest);
    char copy[20];
    strcpy(copy, dest);
    printf("Copied: %s\\n", copy);
    return 0;
}`,
        output: "Concatenated: Hello World\nCopied: Hello World"
      },
      {
        title: "String Comparison",
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char str1[] = "apple";
    char str2[] = "banana";
    int result = strcmp(str1, str2);
    if (result < 0) {
        printf("%s comes before %s\\n", str1, str2);
    } else if (result > 0) {
        printf("%s comes before %s\\n", str2, str1);
    } else {
        printf("Strings are equal\\n");
    }
    return 0;
}`,
        output: "apple comes before banana"
      },
      {
        title: "String Reversal",
        code: `#include <stdio.h>
#include <string.h>

int main() {
    char str[] = "Hello";
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        char temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
    printf("Reversed: %s\\n", str);
    return 0;
}`,
        output: "Reversed: olleH"
      }
    ],
    keyPoints: [
      "Strings end with null character '\\0'",
      "Use string.h for string functions",
      "strcmp returns negative, zero, or positive"
    ],
    commonMistakes: [
      "Comparing strings with == instead of strcmp",
      "Buffer overflow from unbounded strcpy"
    ],
    proTips: [
      "Use strncpy and strncat to prevent buffer overflow",
      "Use sizeof for buffer size, strlen for string length"
    ]
  },

  pointers: {
    definition: "Pointers store the memory address of another variable. They give C its power for dynamic memory, data structures, and direct hardware access.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Declare a pointer with * and get a variable's address with &. Dereference a pointer with * to read or modify its value. NULL points to nothing, so always check before dereferencing.",
    examples: [
      {
        title: "Basic Pointer Usage",
        code: `#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;
    printf("Value: %d\\n", num);
    printf("Address: %p\\n", (void*)&num);
    printf("Pointer value: %d\\n", *ptr);
    printf("Pointer address: %p\\n", (void*)ptr);
    return 0;
}`,
        output: "Value: 10\nAddress: 0x7ffd5c8e1a3c\nPointer value: 10\nPointer address: 0x7ffd5c8e1a3c"
      },
      {
        title: "Pointer Arithmetic",
        code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d\\n", i, *(ptr + i));
    }
    return 0;
}`,
        output: "arr[0] = 10\narr[1] = 20\narr[2] = 30\narr[3] = 40\narr[4] = 50"
      },
      {
        title: "Pointer to Pointer",
        code: `#include <stdio.h>

int main() {
    int num = 100;
    int *ptr = &num;
    int **pptr = &ptr;
    printf("Value: %d\\n", num);
    printf("Via single pointer: %d\\n", *ptr);
    printf("Via double pointer: %d\\n", **pptr);
    return 0;
}`,
        output: "Value: 100\nVia single pointer: 100\nVia double pointer: 100"
      },
      {
        title: "Swap Using Pointers",
        code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 5, y = 10;
    printf("Before: x = %d, y = %d\\n", x, y);
    swap(&x, &y);
    printf("After: x = %d, y = %d\\n", x, y);
    return 0;
}`,
        output: "Before: x = 5, y = 10\nAfter: x = 10, y = 5"
      },
      {
        title: "NULL Pointer Check",
        code: `#include <stdio.h>

int main() {
    int *ptr = NULL;
    if (ptr != NULL) {
        printf("Value: %d\\n", *ptr);
    } else {
        printf("Pointer is NULL\\n");
    }
    int num = 42;
    ptr = &num;
    if (ptr != NULL) {
        printf("Value: %d\\n", *ptr);
    }
    return 0;
}`,
        output: "Pointer is NULL\nValue: 42"
      }
    ],
    keyPoints: [
      "* declares a pointer, & gets an address, * dereferences",
      "Always initialize pointers before use",
      "Pointer arithmetic moves by the size of the type"
    ],
    commonMistakes: [
      "Dereferencing a NULL or uninitialized pointer",
      "Memory leaks from forgetting free()"
    ],
    proTips: [
      "Check pointers for NULL before dereferencing",
      "Set pointers to NULL after free()"
    ]
  },

  pointer_arrays: {
    definition: "Arrays and pointers are closely related in C. An array name acts as a pointer to its first element, and pointer arithmetic can traverse arrays.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "arr[i] is equivalent to *(arr+i). When you pass an array to a function it decays to a pointer, so you must pass the size separately. Pointers can step through arrays using arithmetic.",
    examples: [
      {
        title: "Array Name as Pointer",
        code: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30};
    printf("arr = %p\\n", (void*)arr);
    printf("&arr[0] = %p\\n", (void*)&arr[0]);
    printf("arr[1] = %d\\n", *(arr + 1));
    return 0;
}`,
        output: "arr = 0x7ffd5c8e1a3c\n&arr[0] = 0x7ffd5c8e1a3c\narr[1] = 20"
      },
      {
        title: "Pointer Traversal",
        code: `#include <stdio.h>

int main() {
    int arr[] = {5, 10, 15, 20, 25};
    int *ptr = arr;
    while (ptr < arr + 5) {
        printf("%d ", *ptr);
        ptr++;
    }
    printf("\\n");
    return 0;
}`,
        output: "5 10 15 20 25"
      },
      {
        title: "Passing Array to Function",
        code: `#include <stdio.h>

void printArray(int *arr, int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int nums[] = {1, 2, 3, 4, 5};
    printArray(nums, 5);
    return 0;
}`,
        output: "1 2 3 4 5"
      },
      {
        title: "Pointer to Array",
        code: `#include <stdio.h>

int main() {
    int arr[3][4] = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}};
    int (*ptr)[4] = arr;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 4; j++) {
            printf("%d ", ptr[i][j]);
        }
        printf("\\n");
    }
    return 0;
}`,
        output: "1 2 3 4\n5 6 7 8\n9 10 11 12"
      },
      {
        title: "Array of Pointers",
        code: `#include <stdio.h>

int main() {
    int a = 10, b = 20, c = 30;
    int *arr[3] = {&a, &b, &c};
    for (int i = 0; i < 3; i++) {
        printf("Value: %d\\n", *arr[i]);
    }
    return 0;
}`,
        output: "Value: 10\nValue: 20\nValue: 30"
      }
    ],
    keyPoints: [
      "arr[i] is the same as *(arr+i)",
      "Arrays decay to pointers when passed to functions",
      "Always pass array size along with the pointer"
    ],
    commonMistakes: [
      "Using sizeof on a pointer parameter gives wrong size",
      "Losing array bounds when passing to functions"
    ],
    proTips: [
      "Use const for read-only array parameters",
      "Use pointer notation for efficiency"
    ]
  },

  functions: {
    definition: "Functions are reusable blocks of code that perform a specific task. They help organize code, avoid repetition, and manage complexity.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "A function has a return type, name, parameters, and a body. Parameters are passed by value by default; use pointers to modify the original values. Static variables inside functions persist across calls.",
    examples: [
      {
        title: "Function Definition",
        code: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Sum: %d\\n", result);
    return 0;
}`,
        output: "Sum: 8"
      },
      {
        title: "Function with Pointer Parameters",
        code: `#include <stdio.h>

void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int main() {
    int x = 10, y = 20;
    swap(&x, &y);
    printf("x = %d, y = %d\\n", x, y);
    return 0;
}`,
        output: "x = 20, y = 10"
      },
      {
        title: "Recursive Factorial",
        code: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int main() {
    printf("5! = %d\\n", factorial(5));
    printf("10! = %d\\n", factorial(10));
    return 0;
}`,
        output: "5! = 120\n10! = 3628800"
      },
      {
        title: "Recursive Fibonacci",
        code: `#include <stdio.h>

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

int main() {
    for (int i = 0; i < 8; i++) {
        printf("%d ", fibonacci(i));
    }
    printf("\\n");
    return 0;
}`,
        output: "0 1 1 2 3 5 8 13"
      },
      {
        title: "Static Variables in Functions",
        code: `#include <stdio.h>

void increment() {
    static int count = 0;
    count++;
    printf("Count: %d\\n", count);
}

int main() {
    increment();
    increment();
    increment();
    return 0;
}`,
        output: "Count: 1\nCount: 2\nCount: 3"
      }
    ],
    keyPoints: [
      "Parameters are passed by value unless you use pointers",
      "Static variables persist between function calls",
      "Recursion needs a base case to stop"
    ],
    commonMistakes: [
      "Missing return statement in non-void functions",
      "Infinite recursion without a base case"
    ],
    proTips: [
      "Keep functions small and focused on one task",
      "Declare functions before calling them"
    ]
  },

  pointer_functions: {
    definition: "Function pointers store the address of a function, letting you call it indirectly. They are used for callbacks, dynamic dispatch, and flexible code architecture.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Declare a function pointer with (*name)(params) and assign it a function. You can pass function pointers as arguments, store them in arrays, and use typedef for cleaner syntax.",
    examples: [
      {
        title: "Basic Function Pointer",
        code: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }

int main() {
    int (*operation)(int, int);
    operation = add;
    printf("Add: %d\\n", operation(5, 3));
    operation = subtract;
    printf("Subtract: %d\\n", operation(5, 3));
    return 0;
}`,
        output: "Add: 8\nSubtract: 2"
      },
      {
        title: "Callback Function",
        code: `#include <stdio.h>

void print(int value, void (*callback)(int)) {
    callback(value);
}

void printDouble(int n) { printf("Double: %d\\n", n * 2); }
void printSquare(int n) { printf("Square: %d\\n", n * n); }

int main() {
    print(5, printDouble);
    print(5, printSquare);
    return 0;
}`,
        output: "Double: 10\nSquare: 25"
      },
      {
        title: "Array of Function Pointers",
        code: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }
int mul(int a, int b) { return a * b; }

int main() {
    int (*ops[3])(int, int) = {add, sub, mul};
    for (int i = 0; i < 3; i++) {
        printf("Result %d: %d\\n", i, ops[i](10, 5));
    }
    return 0;
}`,
        output: "Result 0: 15\nResult 1: 5\nResult 2: 50"
      },
      {
        title: "qsort with Function Pointer",
        code: `#include <stdio.h>
#include <stdlib.h>

int compare(const void *a, const void *b) {
    return (*(int*)a - *(int*)b);
}

int main() {
    int arr[] = {5, 2, 8, 1, 9};
    int n = sizeof(arr) / sizeof(arr[0]);
    qsort(arr, n, sizeof(int), compare);
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    return 0;
}`,
        output: "1 2 5 8 9"
      },
      {
        title: "Typedef Function Pointer",
        code: `#include <stdio.h>

typedef int (*MathOp)(int, int);

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

void calculate(MathOp op, int x, int y) {
    printf("Result: %d\\n", op(x, y));
}

int main() {
    calculate(add, 5, 3);
    calculate(multiply, 5, 3);
    return 0;
}`,
        output: "Result: 8\nResult: 15"
      }
    ],
    keyPoints: [
      "Declare as: return_type (*name)(params)",
      "Enable callback and strategy patterns",
      "typedef simplifies complex declarations"
    ],
    commonMistakes: [
      "Calling through a NULL function pointer",
      "Mismatched function signatures"
    ],
    proTips: [
      "Use typedef for readability",
      "Validate function pointers before calling"
    ]
  },

  structures: {
    definition: "Structures group related variables of different types under one name. They let you model real-world entities with multiple attributes.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Define a struct with the struct keyword, access members with dot (.), and use the arrow operator (->) with pointers. Structures can contain other structures and can be passed by value or reference.",
    examples: [
      {
        title: "Basic Structure",
        code: `#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float gpa;
};

int main() {
    struct Student s1 = {"Alice", 20, 3.8};
    printf("Name: %s\\n", s1.name);
    printf("Age: %d\\n", s1.age);
    printf("GPA: %.1f\\n", s1.gpa);
    return 0;
}`,
        output: "Name: Alice\nAge: 20\nGPA: 3.8"
      },
      {
        title: "Structure with Pointers",
        code: `#include <stdio.h>

struct Point {
    int x;
    int y;
};

int main() {
    struct Point p1 = {10, 20};
    struct Point *ptr = &p1;
    printf("x: %d, y: %d\\n", ptr->x, ptr->y);
    ptr->x = 30;
    printf("Updated x: %d\\n", p1.x);
    return 0;
}`,
        output: "x: 10, y: 20\nUpdated x: 30"
      },
      {
        title: "Array of Structures",
        code: `#include <stdio.h>

struct Employee {
    char name[50];
    int id;
    float salary;
};

int main() {
    struct Employee emps[3] = {
        {"John", 101, 50000},
        {"Jane", 102, 60000},
        {"Bob", 103, 55000}
    };
    for (int i = 0; i < 3; i++) {
        printf("%s: $%.0f\\n", emps[i].name, emps[i].salary);
    }
    return 0;
}`,
        output: "John: $50000\nJane: $60000\nBob: $55000"
      },
      {
        title: "Nested Structures",
        code: `#include <stdio.h>

struct Date {
    int day, month, year;
};

struct Event {
    char name[50];
    struct Date date;
};

int main() {
    struct Event e = {"Conference", {15, 6, 2025}};
    printf("%s on %d/%d/%d\\n", e.name, e.date.day, e.date.month, e.date.year);
    return 0;
}`,
        output: "Conference on 15/6/2025"
      },
      {
        title: "Structure as Function Parameter",
        code: `#include <stdio.h>

struct Rectangle {
    float width, height;
};

float area(struct Rectangle r) {
    return r.width * r.height;
}

void scale(struct Rectangle *r, float factor) {
    r->width *= factor;
    r->height *= factor;
}

int main() {
    struct Rectangle rect = {5.0, 3.0};
    printf("Area: %.1f\\n", area(rect));
    scale(&rect, 2.0);
    printf("Scaled: %.1f x %.1f\\n", rect.width, rect.height);
    return 0;
}`,
        output: "Area: 15.0\nScaled: 10.0 x 6.0"
      }
    ],
    keyPoints: [
      "Use . to access members, -> to access via pointer",
      "Structures can be passed by value or reference",
      "Structures can be nested"
    ],
    commonMistakes: [
      "Comparing structures with == does not work",
      "Forgetting semicolon after struct definition"
    ],
    proTips: [
      "Use typedef for cleaner type names",
      "Pass structures by pointer for efficiency"
    ]
  },

  unions: {
    definition: "Unions store different data types in the same memory location. Only one member can be accessed at a time, making them memory-efficient for mutually exclusive data.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Unions look like structs but use the union keyword. All members share the same memory, so the size equals the largest member. Use an enum tag to track which member is active.",
    examples: [
      {
        title: "Basic Union",
        code: `#include <stdio.h>

union Data {
    int i;
    float f;
    char str[20];
};

int main() {
    union Data data;
    data.i = 10;
    printf("i: %d\\n", data.i);
    data.f = 3.14;
    printf("f: %.2f\\n", data.f);
    printf("Size: %lu bytes\\n", sizeof(union Data));
    return 0;
}`,
        output: "i: 10\nf: 3.14\nSize: 20 bytes"
      },
      {
        title: "Union vs Structure",
        code: `#include <stdio.h>

struct StructData {
    int i;
    float f;
    char c;
};

union UnionData {
    int i;
    float f;
    char c;
};

int main() {
    printf("Struct size: %lu bytes\\n", sizeof(struct StructData));
    printf("Union size: %lu bytes\\n", sizeof(union UnionData));
    return 0;
}`,
        output: "Struct size: 12 bytes\nUnion size: 4 bytes"
      },
      {
        title: "Tagged Union",
        code: `#include <stdio.h>

enum Type { INT, FLOAT, STRING };

union Value {
    int i;
    float f;
    char str[20];
};

struct Tagged {
    enum Type type;
    union Value val;
};

int main() {
    struct Tagged t1 = {INT, {.i = 42}};
    struct Tagged t2 = {FLOAT, {.f = 3.14}};
    if (t1.type == INT) printf("Integer: %d\\n", t1.val.i);
    if (t2.type == FLOAT) printf("Float: %.2f\\n", t2.val.f);
    return 0;
}`,
        output: "Integer: 42\nFloat: 3.14"
      },
      {
        title: "Union with Pointer",
        code: `#include <stdio.h>

union Variant {
    int *intptr;
    float *floatptr;
};

int main() {
    int num = 100;
    float pi = 3.14;
    union Variant v;
    v.intptr = &num;
    printf("Int value: %d\\n", *v.intptr);
    v.floatptr = &pi;
    printf("Float value: %.2f\\n", *v.floatptr);
    return 0;
}`,
        output: "Int value: 100\nFloat value: 3.14"
      }
    ],
    keyPoints: [
      "All members share the same memory",
      "Size equals the largest member",
      "Use an enum tag to track which member is active"
    ],
    commonMistakes: [
      "Accessing the wrong member is undefined behavior",
      "Assuming union size is the sum of members"
    ],
    proTips: [
      "Use tagged unions for type safety",
      "Use unions for memory-constrained systems"
    ]
  },

  dynamic: {
    definition: "Dynamic memory allocation lets your program request memory at runtime. C provides malloc, calloc, realloc, and free from <stdlib.h> for this purpose.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "malloc allocates raw memory, calloc allocates zero-initialized memory, realloc resizes an existing block, and free releases it. Always check if allocation succeeded and always free when done.",
    examples: [
      {
        title: "Malloc Basic",
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)malloc(5 * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    for (int i = 0; i < 5; i++) {
        arr[i] = (i + 1) * 10;
    }
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    free(arr);
    return 0;
}`,
        output: "10 20 30 40 50"
      },
      {
        title: "Calloc",
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)calloc(5, sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed\\n");
        return 1;
    }
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    free(arr);
    return 0;
}`,
        output: "0 0 0 0 0"
      },
      {
        title: "Realloc",
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int *arr = (int*)malloc(3 * sizeof(int));
    for (int i = 0; i < 3; i++) arr[i] = i + 1;
    arr = (int*)realloc(arr, 5 * sizeof(int));
    for (int i = 3; i < 5; i++) arr[i] = i + 1;
    for (int i = 0; i < 5; i++) printf("%d ", arr[i]);
    printf("\\n");
    free(arr);
    return 0;
}`,
        output: "1 2 3 4 5"
      },
      {
        title: "Dynamic 2D Array",
        code: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int rows = 3, cols = 3;
    int **matrix = (int**)malloc(rows * sizeof(int*));
    for (int i = 0; i < rows; i++) {
        matrix[i] = (int*)malloc(cols * sizeof(int));
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = i * cols + j + 1;
        }
    }
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\\n");
        free(matrix[i]);
    }
    free(matrix);
    return 0;
}`,
        output: "1 2 3\n4 5 6\n7 8 9"
      },
      {
        title: "Dynamic String",
        code: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    char *str = (char*)malloc(50 * sizeof(char));
    if (str == NULL) return 1;
    strcpy(str, "Hello Dynamic World");
    printf("String: %s\\n", str);
    printf("Length: %lu\\n", strlen(str));
    free(str);
    return 0;
}`,
        output: "String: Hello Dynamic World\nLength: 19"
      }
    ],
    keyPoints: [
      "malloc allocates uninitialized memory, calloc zeroes it",
      "realloc resizes an existing allocation",
      "Always free memory and check for NULL"
    ],
    commonMistakes: [
      "Memory leaks from missing free()",
      "Using memory after free() is undefined"
    ],
    proTips: [
      "Always check malloc/calloc return value",
      "Set pointer to NULL after free()"
    ]
  },

  preprocessor: {
    definition: "The C preprocessor runs before compilation and processes directives that start with #. It handles macros, file inclusion, and conditional compilation.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "#define creates macros that are expanded before compiling. #include pulls in header files. #ifdef and #ifndef enable conditional compilation. Macros are text substitutions, not real functions.",
    examples: [
      {
        title: "Macro Definition",
        code: `#include <stdio.h>
#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main() {
    float r = 5.0;
    printf("Area: %.2f\\n", PI * SQUARE(r));
    printf("Square of 4: %d\\n", SQUARE(4));
    return 0;
}`,
        output: "Area: 78.54\nSquare of 16: 16"
      },
      {
        title: "Conditional Compilation",
        code: `#include <stdio.h>
#define DEBUG

int main() {
    int x = 10;
    #ifdef DEBUG
    printf("Debug: x = %d\\n", x);
    #endif
    printf("Value: %d\\n", x);
    return 0;
}`,
        output: "Debug: x = 10\nValue: 10"
      },
      {
        title: "Include Guard",
        code: `#ifndef MYHEADER_H
#define MYHEADER_H

int add(int a, int b) {
    return a + b;
}

#endif`,
        output: "Header file content (preprocessed)"
      },
      {
        title: "String and Token Operators",
        code: `#include <stdio.h>
#define PRINT_VAR(x) printf(#x " = %d\\n", x)
#define CONCAT(a, b) a##b

int main() {
    int hello = 100;
    PRINT_VAR(hello);
    int xy = 200;
    printf("%d\\n", CONCAT(x, y));
    return 0;
}`,
        output: "hello = 100\n200"
      },
      {
        title: "Predefined Macros",
        code: `#include <stdio.h>

int main() {
    printf("File: %s\\n", __FILE__);
    printf("Date: %s\\n", __DATE__);
    printf("Time: %s\\n", __TIME__);
    printf("Line: %d\\n", __LINE__);
    return 0;
}`,
        output: "File: main.c\nDate: Aug 29 2026\nTime: 12:00:00\nLine: 3"
      }
    ],
    keyPoints: [
      "All directives start with #",
      "#define creates macros, #include adds headers",
      "Macros are expanded before compilation"
    ],
    commonMistakes: [
      "Missing parentheses in function-like macros",
      "Side effects in macro arguments"
    ],
    proTips: [
      "Always use parentheses in macro parameters",
      "Use inline functions over complex macros"
    ]
  },

  fileio: {
    definition: "File I/O lets your program read from and write to files. The stdio.h library provides fopen, fclose, fprintf, fscanf, and related functions.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Open a file with fopen() and close it with fclose(). Use fprintf/fscanf for formatted I/O, fgets/fputs for line-based I/O, and fread/fwrite for binary data. Always check that fopen succeeded.",
    examples: [
      {
        title: "Writing to File",
        code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        printf("Error opening file\\n");
        return 1;
    }
    fprintf(fp, "Hello File!\\n");
    fprintf(fp, "Number: %d\\n", 42);
    fclose(fp);
    printf("File written successfully\\n");
    return 0;
}`,
        output: "File written successfully"
      },
      {
        title: "Reading from File",
        code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("input.txt", "r");
    if (fp == NULL) {
        printf("Error opening file\\n");
        return 1;
    }
    char buffer[100];
    while (fgets(buffer, 100, fp) != NULL) {
        printf("%s", buffer);
    }
    fclose(fp);
    return 0;
}`,
        output: "Contents of input.txt"
      },
      {
        title: "Character I/O",
        code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("chars.txt", "w");
    char text[] = "Hello World";
    for (int i = 0; text[i] != '\\0'; i++) {
        fputc(text[i], fp);
    }
    fclose(fp);
    fp = fopen("chars.txt", "r");
    int ch;
    while ((ch = fgetc(fp)) != EOF) {
        printf("%c", ch);
    }
    printf("\\n");
    fclose(fp);
    return 0;
}`,
        output: "Hello World"
      },
      {
        title: "Binary File Operations",
        code: `#include <stdio.h>

struct Data {
    int id;
    float value;
};

int main() {
    struct Data data = {1, 3.14};
    FILE *fp = fopen("data.bin", "wb");
    fwrite(&data, sizeof(struct Data), 1, fp);
    fclose(fp);
    struct Data read_data;
    fp = fopen("data.bin", "rb");
    fread(&read_data, sizeof(struct Data), 1, fp);
    printf("ID: %d, Value: %.2f\\n", read_data.id, read_data.value);
    fclose(fp);
    return 0;
}`,
        output: "ID: 1, Value: 3.14"
      },
      {
        title: "File Position",
        code: `#include <stdio.h>

int main() {
    FILE *fp = fopen("pos.txt", "w+");
    fprintf(fp, "Hello World");
    rewind(fp);
    char buffer[20];
    fgets(buffer, 20, fp);
    printf("Read: %s\\n", buffer);
    fclose(fp);
    return 0;
}`,
        output: "Read: Hello World"
      }
    ],
    keyPoints: [
      "fopen opens a file, fclose closes it",
      "Always check fopen return value for NULL",
      "Use fgets instead of gets for safety"
    ],
    commonMistakes: [
      "Not checking fopen return value",
      "Forgetting to close files"
    ],
    proTips: [
      "Always check if fopen succeeds before writing",
      "Use binary mode for non-text files"
    ]
  },

  bitwise: {
    definition: "Bitwise operators work on individual bits of integer values. They are useful for hardware control, flags, masks, and performance optimization.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "& is AND, | is OR, ^ is XOR, ~ is NOT, << shifts left, >> shifts right. Use these to set, clear, toggle, or test specific bits in a value.",
    examples: [
      {
        title: "Basic Bitwise Operations",
        code: `#include <stdio.h>

int main() {
    int a = 12, b = 10;
    printf("a & b = %d\\n", a & b);
    printf("a | b = %d\\n", a | b);
    printf("a ^ b = %d\\n", a ^ b);
    printf("~a = %d\\n", ~a);
    printf("a << 1 = %d\\n", a << 1);
    printf("a >> 1 = %d\\n", a >> 1);
    return 0;
}`,
        output: "a & b = 8\na | b = 14\na ^ b = 6\n~a = -13\na << 1 = 24\na >> 1 = 6"
      },
      {
        title: "Bit Masking",
        code: `#include <stdio.h>

int main() {
    int flags = 0;
    flags |= (1 << 0);
    flags |= (1 << 2);
    flags |= (1 << 4);
    printf("Flags: %d\\n", flags);
    printf("Bit 0 set: %d\\n", (flags >> 0) & 1);
    printf("Bit 1 set: %d\\n", (flags >> 1) & 1);
    printf("Bit 2 set: %d\\n", (flags >> 2) & 1);
    return 0;
}`,
        output: "Flags: 21\nBit 0 set: 1\nBit 1 set: 0\nBit 2 set: 1"
      },
      {
        title: "Check Even/Odd",
        code: `#include <stdio.h>

int main() {
    for (int i = 0; i < 6; i++) {
        if (i & 1) {
            printf("%d is odd\\n", i);
        } else {
            printf("%d is even\\n", i);
        }
    }
    return 0;
}`,
        output: "0 is even\n1 is odd\n2 is even\n3 is odd\n4 is even\n5 is odd"
      },
      {
        title: "Swap Without Temp",
        code: `#include <stdio.h>

int main() {
    int a = 5, b = 10;
    printf("Before: a = %d, b = %d\\n", a, b);
    a ^= b;
    b ^= a;
    a ^= b;
    printf("After: a = %d, b = %d\\n", a, b);
    return 0;
}`,
        output: "Before: a = 5, b = 10\nAfter: a = 10, b = 5"
      },
      {
        title: "Power of Two Check",
        code: `#include <stdio.h>

int isPowerOfTwo(int n) {
    return (n > 0) && ((n & (n - 1)) == 0);
}

int main() {
    int nums[] = {1, 2, 3, 4, 5, 8, 16};
    for (int i = 0; i < 7; i++) {
        printf("%d is power of 2: %s\\n", nums[i], isPowerOfTwo(nums[i]) ? "Yes" : "No");
    }
    return 0;
}`,
        output: "1 is power of 2: Yes\n2 is power of 2: Yes\n3 is power of 2: No\n4 is power of 2: Yes\n5 is power of 2: No\n8 is power of 2: Yes\n16 is power of 2: Yes"
      }
    ],
    keyPoints: [
      "& AND, | OR, ^ XOR, ~ NOT, << >> shift",
      "Use bit flags for permission and status systems"
    ],
    commonMistakes: [
      "Confusing & with && and | with ||",
      "Shifting by more than the bit width"
    ],
    proTips: [
      "Use bit shifts for fast multiplication/division by 2",
      "Use masks to extract specific bits"
    ]
  },

  header: {
    definition: "Header files contain function declarations, macros, constants, and type definitions. They let multiple source files share a common interface.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "Headers use the .h extension and should contain declarations, not definitions. Include guards prevent a header from being included twice. They can include other headers and define macros.",
    examples: [
      {
        title: "Basic Header File - mathutils.h",
        code: `#ifndef MATHUTILS_H
#define MATHUTILS_H

int add(int a, int b);
int subtract(int a, int b);
float circle_area(float radius);

#endif`,
        output: "Header file content"
      },
      {
        title: "Header Implementation - mathutils.c",
        code: `#include "mathutils.h"

int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

float circle_area(float radius) {
    return 3.14159 * radius * radius;
}`,
        output: "Implementation file content"
      },
      {
        title: "Using Header - main.c",
        code: `#include <stdio.h>
#include "mathutils.h"

int main() {
    printf("Sum: %d\\n", add(5, 3));
    printf("Diff: %d\\n", subtract(10, 4));
    printf("Area: %.2f\\n", circle_area(5.0));
    return 0;
}`,
        output: "Sum: 8\nDiff: 6\nArea: 78.54"
      },
      {
        title: "Header with Macros",
        code: `#ifndef UTILS_H
#define UTILS_H

#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define MIN(a, b) ((a) < (b) ? (a) : (b))
#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof(arr[0]))

#endif`,
        output: "Header with utility macros"
      },
      {
        title: "Header with Types",
        code: `#ifndef POINT_H
#define POINT_H

typedef struct {
    float x;
    float y;
} Point;

Point point_create(float x, float y);
float point_distance(Point a, Point b);

#endif`,
        output: "Header with type definitions"
      }
    ],
    keyPoints: [
      "Headers contain declarations, not definitions",
      "Use include guards to prevent double inclusion",
      "Headers should be self-contained"
    ],
    commonMistakes: [
      "Defining variables in headers causes linker errors",
      "Missing include guards"
    ],
    proTips: [
      "Use #pragma once for simpler header guards",
      "Keep headers minimal and focused"
    ]
  },

  cli: {
    definition: "CLI programs receive input through command-line arguments. main() gets argc (argument count) and argv (argument vector) for parsing user input.",
    whyUse: null,
    whereUse: null,
    syntax: null,
    explanation: "argv[0] is the program name, and the rest are arguments passed by the user. Use string functions like atoi and atof to convert arguments, and getenv to read environment variables.",
    examples: [
      {
        title: "Basic Arguments",
        code: `#include <stdio.h>

int main(int argc, char *argv[]) {
    printf("Program name: %s\\n", argv[0]);
    printf("Number of arguments: %d\\n", argc);
    for (int i = 1; i < argc; i++) {
        printf("Argument %d: %s\\n", i, argv[i]);
    }
    return 0;
}`,
        output: "./program arg1 arg2\nProgram name: ./program\nNumber of arguments: 3\nArgument 1: arg1\nArgument 2: arg2"
      },
      {
        title: "Simple Calculator",
        code: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc != 4) {
        printf("Usage: %s num1 operator num2\\n", argv[0]);
        return 1;
    }
    float a = atof(argv[1]);
    char op = argv[2][0];
    float b = atof(argv[3]);
    switch (op) {
        case '+': printf("%.2f\\n", a + b); break;
        case '-': printf("%.2f\\n", a - b); break;
        case '*': printf("%.2f\\n", a * b); break;
        case '/': printf("%.2f\\n", a / b); break;
        default: printf("Unknown operator\\n");
    }
    return 0;
}`,
        output: "./calc 10 + 5\n15.00"
      },
      {
        title: "Option Parsing",
        code: `#include <stdio.h>
#include <string.h>

int main(int argc, char *argv[]) {
    int verbose = 0;
    char *filename = NULL;
    for (int i = 1; i < argc; i++) {
        if (strcmp(argv[i], "-v") == 0) {
            verbose = 1;
        } else if (strcmp(argv[i], "-f") == 0 && i + 1 < argc) {
            filename = argv[++i];
        }
    }
    if (verbose) printf("Verbose mode on\\n");
    if (filename) printf("File: %s\\n", filename);
    return 0;
}`,
        output: "./program -v -f test.txt\nVerbose mode on\nFile: test.txt"
      },
      {
        title: "Input Validation",
        code: `#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>

int is_number(char *str) {
    int i = 0;
    if (str[0] == '-') i = 1;
    for (; str[i] != '\\0'; i++) {
        if (!isdigit(str[i])) return 0;
    }
    return 1;
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        printf("Usage: %s number\\n", argv[0]);
        return 1;
    }
    if (!is_number(argv[1])) {
        printf("Error: not a valid number\\n");
        return 1;
    }
    printf("Number: %d\\n", atoi(argv[1]));
    return 0;
}`,
        output: "./program 42\nNumber: 42"
      },
      {
        title: "Environment Variables",
        code: `#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    char *home = getenv("HOME");
    char *path = getenv("PATH");
    printf("HOME: %s\\n", home ? home : "Not set");
    printf("PATH length: %lu\\n", path ? strlen(path) : 0);
    return 0;
}`,
        output: "HOME: /home/user\nPATH length: 1234"
      }
    ],
    keyPoints: [
      "argc counts arguments including the program name",
      "argv[0] is the program name",
      "Use getenv for environment variables"
    ],
    commonMistakes: [
      "Accessing argv beyond argc",
      "Not validating argument count"
    ],
    proTips: [
      "Always validate argument count and types",
      "Provide helpful usage messages"
    ]
  }
}

export default c
