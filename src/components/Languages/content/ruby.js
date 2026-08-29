const ruby = {
  intro: {
    definition: 'Ruby is a dynamic, interpreted, object-oriented programming language designed for simplicity and productivity. It was created by Yukihiro Matsumoto (Matz) in 1995.',
    whyUse: 'Ruby emphasizes developer happiness with clean, readable syntax. It follows the principle of least surprise and provides elegant solutions for common problems.',
    whereUse: 'Web development (Ruby on Rails), scripting, automation, data processing, DevOps tools, and prototyping.',
    syntax: null,
    explanation: 'Ruby uses English-like keywords, dynamic typing, and everything is an object. It supports multiple programming paradigms including OOP, functional, and reflective.',
    examples: [
      {
        title: 'Hello World',
        code: `puts "Hello, World!"`,
        output: 'Hello, World!'
      },
      {
        title: 'Basic Object Usage',
        code: `name = "Ruby"
puts name.upcase
puts name.length
puts name.reverse`,
        output: 'RUBY\n4\nybuR'
      },
      {
        title: 'Everything is an Object',
        code: `puts 42.class
puts "hello".class
puts [1, 2, 3].class
puts true.class`,
        output: 'Integer\nString\nArray\nTrueClass'
      }
    ],
    keyPoints: [
      'Ruby is dynamically typed with strong typing',
      'Everything is an object, including primitives',
      'Uses blocks, procs, and lambdas for functional programming',
      'Convention over configuration (especially in Rails)',
      'Garbage collection handles memory management'
    ],
    commonMistakes: [
      'Confusing = (assignment) with == (comparison)',
      'Not understanding method visibility',
      'Forgetting that methods return the last expression',
      'Using when you might need gsub'
    ],
    proTips: [
      'Use Ruby\'s built-in methods before writing loops',
      'Embrace blocks and iterators',
      'Use symbols for fixed strings',
      'Leverage Ruby\'s expressive syntax'
    ]
  },

  setup: {
    definition: 'Setting up a Ruby development environment involves installing Ruby, a version manager, and essential gems for development.',
    whyUse: 'A proper setup enables efficient Ruby development with version management, dependency handling, and development tools.',
    whereUse: 'Essential for Ruby on Rails development, scripting, and any Ruby project.',
    syntax: null,
    explanation: 'Use rbenv or RVM for version management, Bundler for dependency management, and a text editor like VS Code or RubyMine.',
    examples: [
      {
        title: 'Check Ruby Version',
        code: `ruby --version
irb --version`,
        output: 'ruby 3.2.2 (2023-03-30 revision...) [x64-mingw-ucrt]'
      },
      {
        title: 'Install Gems',
        code: `# Install a gem
gem install rails

# Check installed gems
gem list

# Create Gemfile for project
echo 'source "https://rubygems.org"' > Gemfile
echo 'gem "rails", "~> 7.0"' >> Gemfile`,
        output: 'Rails installation output'
      },
      {
        title: 'Run Ruby Scripts',
        code: `# Run a Ruby file
ruby script.rb

# Start IRB (Interactive Ruby)
irb

# Execute single line
ruby -e 'puts "Hello from command line"'`,
        output: 'Hello from command line'
      }
    ],
    keyPoints: [
      'Use rbenv or RVM for Ruby version management',
      'Use Bundler for dependency management',
      'Install gems with gem install',
      'Use Gemfile to specify dependencies',
      'Run bundle install to install dependencies'
    ],
    commonMistakes: [
      'Using system Ruby instead of version manager',
      'Not using Bundler for dependency management',
      'Installing gems globally instead of per-project',
      'Forgetting to specify Ruby version'
    ],
    proTips: [
      'Use .ruby-version file for project Ruby version',
      'Add Gemfile.lock to version control',
      'Use bundle exec for project commands',
      'Consider using Docker for consistent environments'
    ]
  },

  variables: {
    definition: 'Ruby variables are dynamically typed and don\'t require explicit type declaration. Ruby has several variable naming conventions that indicate scope.',
    whyUse: 'Variables store and reference data, enabling programs to work with information. Ruby\'s variable conventions make scope clear.',
    whereUse: 'Used throughout Ruby programs for storing data, references, and state.',
    syntax: 'variable_name = value',
    explanation: 'Ruby variables start with specific characters: @ for instance, @@ for class, $ for global, and lowercase for local variables.',
    examples: [
      {
        title: 'Variable Types',
        code: `$global_var = "I'm global"
@instance_var = "I'm an instance"
@@class_var = "I'm a class variable"
local_var = "I'm local"

puts $global_var
puts @instance_var
puts @@class_var
puts local_var`,
        output: "I'm global\nI'm an instance\nI'm a class variable\nI'm local"
      },
      {
        title: 'Multiple Assignment',
        code: `a, b, c = 1, 2, 3
puts "a=#{a}, b=#{b}, c=#{c}"

x, y = 10, 20
puts "Sum: #{x + y}"`,
        output: 'a=1, b=2, c=3\nSum: 30'
      },
      {
        title: 'Variable Scope',
        code: `class Example
  @@count = 0
  
  def initialize
    @instance = "Instance data"
    @@count += 1
  end
  
  def show
    puts @instance
    puts "Class var: #{@@count}"
  end
end

e1 = Example.new
e2 = Example.new
e1.show`,
        output: 'Instance data\nClass var: 2'
      }
    ],
    keyPoints: [
      '$ prefix for global variables',
      '@ prefix for instance variables',
      '@@ prefix for class variables',
      'No prefix for local variables',
      'Constants start with uppercase letters'
    ],
    commonMistakes: [
      'Overusing global variables',
      'Confusing instance and class variables',
      'Not understanding variable scope',
      'Using capital letters for non-constants'
    ],
    proTips: [
      'Avoid global variables when possible',
      'Use attr_reader/attr_writer for accessors',
      'Prefer local variables over instance when possible',
      'Use constants for fixed values'
    ]
  },

  strings: {
    definition: 'Ruby strings are sequences of characters. They can be mutable or immutable, and Ruby provides extensive string manipulation capabilities.',
    whyUse: 'Strings are essential for text processing, I/O operations, and data manipulation in Ruby.',
    whereUse: 'Used for user messages, file paths, data storage, and text processing.',
    syntax: 'string = "value" or \'value\'',
    explanation: 'Ruby offers single-quoted (no interpolation) and double-quoted (interpolation) strings. Strings are mutable in Ruby.',
    examples: [
      {
        title: 'String Basics',
        code: `name = "Ruby"
puts "Hello, #{name}!"
puts 'No interpolation here'
puts "Length: #{name.length}"
puts "Uppercase: #{name.upcase}"`,
        output: 'Hello, Ruby!\nNo interpolation here\nLength: 4\nUppercase: RUBY'
      },
      {
        title: 'String Manipulation',
        code: `str = "  Hello World  "
puts str.strip
puts str.strip.downcase
puts "Hello World".gsub("World", "Ruby")
puts "hello".capitalize`,
        output: 'Hello World\nhello world\nHello Ruby\nHello'
      },
      {
        title: 'String Methods',
        code: `str = "ruby programming"
puts str.include?("ruby")
puts str.start_with?("ruby")
puts str.end_with?("ing")
puts str.split(" ").join("-")`,
        output: 'true\ntrue\ntrue\nruby-programming'
      }
    ],
    keyPoints: [
      'Double quotes support interpolation',
      'Single quotes are literal (no interpolation)',
      'Strings are mutable in Ruby',
      'Use gsub for global substitution',
      'Heredocs for multi-line strings'
    ],
    commonMistakes: [
      'Confusing single and double quotes',
      'Not escaping special characters',
      'Using mutable strings incorrectly',
      'Forgetting strip for whitespace'
    ],
    proTips: [
      'Use %Q{} for strings with quotes',
      'Use heredocs for multi-line text',
      'Use freeze for immutable strings',
      'Prefer interpolation over concatenation'
    ]
  },

  operators: {
    definition: 'Ruby provides a rich set of operators for comparisons, arithmetic, logical operations, and object manipulation.',
    whyUse: 'Operators enable performing calculations, comparisons, and logical operations on data.',
    whereUse: 'Used throughout Ruby for math, comparisons, assignments, and control flow.',
    syntax: 'operand operator operand',
    explanation: 'Ruby supports standard arithmetic, comparison, and logical operators, plus unique ones like <=> (spaceship) and === (case equality).',
    examples: [
      {
        title: 'Arithmetic Operators',
        code: `a = 10
b = 3
puts "Add: #{a + b}"
puts "Subtract: #{a - b}"
puts "Multiply: #{a * b}"
puts "Divide: #{a / b}"
puts "Modulus: #{a % b}"
puts "Power: #{a ** b}"`,
        output: 'Add: 13\nSubtract: 7\nMultiply: 30\nDivide: 3\nModulus: 1\nPower: 1000'
      },
      {
        title: 'Comparison Operators',
        code: `x = 5
y = 10
puts "x == y: #{x == y}"
puts "x != y: #{x != y}"
puts "x < y: #{x < y}"
puts "x > y: #{x > y}"
puts "x <=> y: #{x <=> y}"`,
        output: 'x == y: false\nx != y: true\nx < y: true\nx > y: false\nx <=> y: -1'
      },
      {
        title: 'Logical and Range Operators',
        code: `a = true
b = false
puts "AND: #{a && b}"
puts "OR: #{a || b}"
puts "NOT: #{!a}"

range = (1..5)
puts range.to_a
puts range.include?(3)`,
        output: 'AND: false\nOR: true\nNOT: false\n[1, 2, 3, 4, 5]\ntrue'
      }
    ],
    keyPoints: [
      '<=> returns -1, 0, or 1',
      '=== is case equality (used in case statements)',
      'Range operator creates ranges',
      'Ternary operator: condition ? true : false',
      'Pattern matching with === for case statements'
    ],
    commonMistakes: [
      'Integer division truncating results',
      'Using = instead of == in comparisons',
      'Confusing && with and',
      'Not understanding operator precedence'
    ],
    proTips: [
      'Use spaceship operator for custom sorting',
      'Use ranges for iteration and membership',
      'Prefer && and || over and and or',
      'Use pattern matching for complex comparisons'
    ]
  },

  conditionals: {
    definition: 'Ruby provides if, unless, case, and ternary operators for conditional execution. Everything in Ruby evaluates to true or false.',
    whyUse: 'Conditionals enable decision-making in programs, allowing different actions based on data or state.',
    whereUse: 'Used for input validation, feature toggles, error handling, and controlling program flow.',
    syntax: 'if condition then statement end',
    explanation: 'Ruby treats nil and false as false, everything else as true. Conditionals can use then/end or do/end blocks.',
    examples: [
      {
        title: 'If-Else',
        code: `age = 20
if age >= 18
  puts "Adult"
elsif age >= 13
  puts "Teenager"
else
  puts "Child"
end`,
        output: 'Adult'
      },
      {
        title: 'Unless',
        code: `logged_in = false
unless logged_in
  puts "Please log in"
end

# Equivalent to
puts "Please log in" if !logged_in`,
        output: 'Please log in\nPlease log in'
      },
      {
        title: 'Case Statement',
        code: `day = "Monday"
case day
when "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
  puts "Weekday"
when "Saturday", "Sunday"
  puts "Weekend"
else
  puts "Invalid day"
end`,
        output: 'Weekday'
      }
    ],
    keyPoints: [
      'if/unless/elsif/else/end',
      'case/when/end',
      'Ternary: condition ? true : false',
      'Ruby uses truthy/falsy values',
      'Modifier form: statement if condition'
    ],
    commonMistakes: [
      'Confusing = and == in conditions',
      'Using when with incorrect syntax',
      'Not handling all cases in case statement',
      'Overusing nested if statements'
    ],
    proTips: [
      'Use case when checking multiple conditions',
      'Use unless for negated conditions',
      'Consider using early returns',
      'Use case with pattern matching in Ruby 3+'
    ]
  },

  loops: {
    definition: 'Ruby provides while, for, each, and other loop constructs for iteration. Blocks and iterators are fundamental to Ruby iteration.',
    whyUse: 'Loops enable processing collections, repeating tasks, and implementing algorithms that require iteration.',
    whereUse: 'Used for processing arrays, reading input, implementing game logic, and data processing.',
    syntax: 'loop do statement end',
    explanation: 'Ruby favors iterators over traditional loops. Each, map, select are preferred for collection processing.',
    examples: [
      {
        title: 'Basic Loops',
        code: `# While loop
i = 0
while i < 5
  puts i
  i += 1
end`,
        output: '0\n1\n2\n3\n4'
      },
      {
        title: 'For Loop',
        code: `for i in 1..5
  puts i
end

# With step
for i in (0..10).step(2)
  puts i
end`,
        output: '1\n2\n3\n4\n5\n0\n2\n4\n6\n8\n10'
      },
      {
        title: 'Iterator Methods',
        code: `numbers = [1, 2, 3, 4, 5]

numbers.each { |n| puts n }

numbers.each_with_index do |n, i|
  puts "#{i}: #{n}"
end`,
        output: '1\n2\n3\n4\n5\n0: 1\n1: 2\n2: 3\n3: 4\n4: 5'
      }
    ],
    keyPoints: [
      'each is the primary iterator',
      'map returns new array with transformed elements',
      'select returns elements matching condition',
      'times and upto for numeric iteration',
      'do/end for multi-line, {} for single-line'
    ],
    commonMistakes: [
      'Using each when map is appropriate',
      'Modifying array during iteration',
      'Not using block variables correctly',
      'Forgetting break for early exit'
    ],
    proTips: [
      'Prefer iterators over while/for loops',
      'Use lazy enumerators for large collections',
      'Chain enumerator methods for readability',
      'Use reduce for accumulating values'
    ]
  },

  methods: {
    definition: 'Ruby methods are reusable blocks of code that perform specific tasks. They can accept parameters, return values, and are defined with def/end.',
    whyUse: 'Methods promote code reuse, modularity, and clean code organization.',
    whereUse: 'Used to encapsulate functionality, create reusable logic, and structure applications.',
    syntax: 'def method_name(params) body end',
    explanation: 'Methods in Ruby return the last expression. They can have default parameters, optional parameters, and splat operators.',
    examples: [
      {
        title: 'Basic Method',
        code: `def greet(name)
  "Hello, #{name}!"
end

puts greet("Ruby")`,
        output: 'Hello, Ruby!'
      },
      {
        title: 'Default Parameters',
        code: `def power(base, exponent = 2)
  base ** exponent
end

puts power(3)
puts power(3, 3)`,
        output: '9\n27'
      },
      {
        title: 'Return Values',
        code: `def calculate(a, b)
  sum = a + b
  difference = a - b
  [sum, difference]
end

s, d = calculate(10, 3)
puts "Sum: #{s}, Diff: #{d}"`,
        output: 'Sum: 13, Diff: 7'
      }
    ],
    keyPoints: [
      'Methods return the last expression',
      'Use def/end to define methods',
      'Default parameters with =',
      'Use splat (*) for variable arguments',
      'Methods can be private, protected, or public'
    ],
    commonMistakes: [
      'Not using explicit return when needed',
      'Confusing method calls with variables',
      'Forgetting method scope',
      'Not using meaningful method names'
    ],
    proTips: [
      'Use attr_reader/attr_writer for getters/setters',
      'Keep methods small and focused',
      'Use module functions for utility methods',
      'Use method(:name) to get method reference'
    ]
  },

  blocks: {
    definition: 'Blocks in Ruby are chunks of code that can be passed to methods. They are enclosed in do/end or curly braces and can accept parameters.',
    whyUse: 'Blocks enable passing behavior to methods, facilitating iterators, callbacks, and resource management.',
    whereUse: 'Used with iterator methods, callbacks, resource management (File.open), and configuration.',
    syntax: 'method_name { |param| block }',
    explanation: 'Blocks are anonymous code segments. yield passes control to the block. Procs and lambdas are block-like objects.',
    examples: [
      {
        title: 'Basic Block',
        code: `def say_hello
  puts "Before block"
  yield
  puts "After block"
end

say_hello { puts "Inside block" }`,
        output: 'Before block\nInside block\nAfter block'
      },
      {
        title: 'Block with Parameters',
        code: `def repeat(times)
  times.times do |i|
    yield(i)
  end
end

repeat(3) { |n| puts "Iteration #{n}" }`,
        output: 'Iteration 0\nIteration 1\nIteration 2'
      },
      {
        title: 'Each with Block',
        code: `colors = ["red", "green", "blue"]

colors.each_with_index do |color, index|
  puts "#{index}: #{color}"
end`,
        output: '0: red\n1: green\n2: blue'
      }
    ],
    keyPoints: [
      'Blocks are closures - they capture surrounding scope',
      'yield passes control to the block',
      'block_given? checks if block was passed',
      'do/end for multi-line, {} for single-line',
      'Blocks can return values with next'
    ],
    commonMistakes: [
      'Confusing blocks with procs or lambdas',
      'Not understanding variable scope in blocks',
      'Using wrong block delimiter',
      'Forgetting to handle block parameters'
    ],
    proTips: [
      'Use blocks for iterator callbacks',
      'Use yield for simple delegation',
      'Use block_given? for optional blocks',
      'Consider using procs for complex block passing'
    ]
  },

  lambdas: {
    definition: 'Lambdas in Ruby are anonymous functions that can be stored in variables and passed around. They are strict about arity and return.',
    whyUse: 'Lambdas provide functional programming capabilities, enabling higher-order functions and closures.',
    whereUse: 'Used for callbacks, functional programming patterns, and when behavior needs to be passed as data.',
    syntax: 'lambda { |params| body } or -> (params) { body }',
    explanation: 'Lambdas are instances of Proc class but with strict arity checking. They return from themselves, not the enclosing method.',
    examples: [
      {
        title: 'Basic Lambda',
        code: `greet = lambda { |name| puts "Hello, #{name}!" }
greet.call("Ruby")

add = -> (a, b) { a + b }
puts add.call(5, 3)`,
        output: 'Hello, Ruby!\n8'
      },
      {
        title: 'Lambda vs Proc',
        code: `lam = lambda { return "From lambda" }
prc = Proc.new { return "From proc" }

def test
  lam = lambda { return "From lambda" }
  prc = Proc.new { return "From proc" }
  
  lam.call
  prc.call
  "From method"
end

puts test`,
        output: 'From proc'
      },
      {
        title: 'Lambda with Map',
        code: `numbers = [1, 2, 3, 4, 5]
square = -> (n) { n ** 2 }

squared = numbers.map(&square)
puts squared.inspect`,
        output: '[1, 4, 9, 16, 25]'
      }
    ],
    keyPoints: [
      'Lambdas check argument count strictly',
      'Use .call to invoke lambdas',
      'Lambdas return from themselves',
      'Use & to convert lambda to block',
      'Lambdas are closures like blocks'
    ],
    commonMistakes: [
      'Confusing lambda with Proc',
      'Not using .call to invoke',
      'Using wrong syntax for parameters',
      'Forgetting arity checking'
    ],
    proTips: [
      'Use lambdas for strict function behavior',
      'Use Proc for flexible argument handling',
      'Store lambdas in variables for reuse',
      'Use & to pass lambdas as blocks'
    ]
  },

  arrays: {
    definition: 'Ruby arrays are ordered, integer-indexed collections of objects. They can hold objects of different types and are dynamically resizable.',
    whyUse: 'Arrays provide ordered storage and powerful iteration methods for managing collections of data.',
    whereUse: 'Used for storing lists, processing collections, implementing stacks/queues, and data manipulation.',
    syntax: 'array = [item1, item2, item3]',
    explanation: 'Ruby arrays are zero-indexed, resizable, and can contain any object type. They provide rich enumeration methods.',
    examples: [
      {
        title: 'Array Basics',
        code: `fruits = ["apple", "banana", "cherry"]
puts fruits[0]
puts fruits[-1]
puts fruits.length
puts fruits.include?("banana")`,
        output: 'apple\ncherry\n3\ntrue'
      },
      {
        title: 'Array Methods',
        code: `numbers = [3, 1, 4, 1, 5, 9, 2, 6]

puts numbers.sort.inspect
puts numbers.reverse.inspect
puts numbers.uniq.inspect
puts numbers.push(10).inspect`,
        output: '[1, 1, 2, 3, 4, 5, 6, 9]\n[6, 2, 9, 5, 1, 4, 1, 3]\n[3, 1, 4, 5, 9, 2, 6]\n[3, 1, 4, 1, 5, 9, 2, 6, 10]'
      },
      {
        title: 'Array Iteration',
        code: `nums = [1, 2, 3, 4, 5]

# Map
doubled = nums.map { |n| n * 2 }
puts doubled.inspect

# Select
evens = nums.select { |n| n.even? }
puts evens.inspect

# Reduce
sum = nums.reduce(0) { |total, n| total + n }
puts sum`,
        output: '[2, 4, 6, 8, 10]\n[2, 4]\n15'
      }
    ],
    keyPoints: [
      'Arrays are zero-indexed',
      'Negative indices count from end',
      'Use push/pop for stack operations',
      'Use shift/unshift for queue operations',
      'Rich enumeration methods (map, select, reduce)'
    ],
    commonMistakes: [
      'Out of bounds access returning nil',
      'Not checking for empty arrays',
      'Modifying array during iteration',
      'Using wrong iterator method'
    ],
    proTips: [
      'Use %w{} for array of strings',
      'Use parallel arrays carefully',
      'Use zip for combining arrays',
      'Consider using Set for uniqueness'
    ]
  },

  hashes: {
    definition: 'Ruby hashes are collections of key-value pairs. They are similar to dictionaries in other languages and provide fast lookup by key.',
    whyUse: 'Hashes provide efficient key-based storage and retrieval, essential for mapping relationships and structured data.',
    whereUse: 'Used for configuration, data modeling, JSON processing, and mapping relationships.',
    syntax: 'hash = { key => value }',
    explanation: 'Hashes can use any object as key. Ruby 1.9+ supports symbol keys with new syntax. Hashes maintain insertion order.',
    examples: [
      {
        title: 'Hash Basics',
        code: `person = { "name" => "Alice", "age" => 30 }
puts person["name"]
puts person["age"]
puts person.length`,
        output: 'Alice\n30\n2'
      },
      {
        title: 'Symbol Keys',
        code: `person = { name: "Bob", age: 25 }
puts person[:name]
puts person[:age]

person[:email] = "bob@example.com"
puts person.inspect`,
        output: 'Bob\n25\n{:name=>"Bob", :age=>25, :email=>"bob@example.com"}'
      },
      {
        title: 'Hash Methods',
        code: `scores = { math: 95, science: 88, english: 92 }

puts scores.keys.inspect
puts scores.values.inspect
puts scores.select { |k, v| v > 90 }.inspect`,
        output: '[:math, :science, :english]\n[95, 88, 92]\n{:math=>95, :english=>92}'
      }
    ],
    keyPoints: [
      'Keys can be any object',
      'Symbol keys use shorthand: { key: value }',
      'Use fetch for missing key handling',
      'each iterates over key-value pairs',
      'merge combines hashes'
    ],
    commonMistakes: [
      'Confusing key syntax',
      'Not handling missing keys',
      'Using wrong key type',
      'Modifying hash during iteration'
    ],
    proTips: [
      'Use symbol keys for performance',
      'Use fetch with default for safety',
      'Use Hash.new for default values',
      'Consider using OpenStruct for dot notation'
    ]
  },

  ranges: {
    definition: 'Ranges in Ruby represent a sequence of values. They can be inclusive (..) or exclusive (...), and work with integers, strings, and custom objects.',
    whyUse: 'Ranges provide a concise way to represent sequences, iterate, and check membership.',
    whereUse: 'Used for iteration, case statements, regular expressions, and sequence generation.',
    syntax: 'range = start..end or start...end',
    explanation: 'Two-dot range is inclusive, three-dot is exclusive. Ranges can be used in case statements and iteration.',
    examples: [
      {
        title: 'Basic Ranges',
        code: `inclusive = (1..5)
exclusive = (1...5)

puts inclusive.to_a.inspect
puts exclusive.to_a.inspect`,
        output: '[1, 2, 3, 4, 5]\n[1, 2, 3, 4]'
      },
      {
        title: 'String Ranges',
        code: `letters = "a".."e"
puts letters.to_a.inspect

letters.each { |l| print "#{l} " }`,
        output: '["a", "b", "c", "d", "e"]\na b c d e '
      },
      {
        title: 'Range in Case',
        code: `score = 85

case score
when 90..100
  puts "A"
when 80..89
  puts "B"
when 70..79
  puts "C"
else
  puts "F"
end`,
        output: 'B'
      }
    ],
    keyPoints: [
      '.. is inclusive, ... is exclusive',
      'Ranges can iterate with each',
      'Use include? or === for membership',
      'String ranges work alphabetically',
      'Ranges can be used in case statements'
    ],
    commonMistakes: [
      'Confusing .. with ...',
      'Using wrong range direction',
      'Not understanding range inclusion',
      'Using ranges with non-compatible types'
    ],
    proTips: [
      'Use ranges for case statement matching',
      'Use step for non-sequential iteration',
      'Consider using Enumerator for lazy ranges',
      'Use cover? for performance on large ranges'
    ]
  },

  classes: {
    definition: 'Ruby classes are blueprints for creating objects. They encapsulate data (instance variables) and behavior (methods) following OOP principles.',
    whyUse: 'Classes enable object-oriented programming, providing encapsulation, inheritance, and polymorphism.',
    whereUse: 'Used to model real-world entities, create reusable components, and structure applications.',
    syntax: 'class ClassName; def initialize; end; end',
    explanation: 'Ruby classes use initialize for constructors, instance variables for state, and methods for behavior. Everything is an object, including classes.',
    examples: [
      {
        title: 'Basic Class',
        code: `class Person
  attr_accessor :name, :age
  
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  def greet
    puts "Hello, I'm #{@name}"
  end
end

person = Person.new("Alice", 30)
person.greet`,
        output: "Hello, I'm Alice"
      },
      {
        title: 'Class Methods',
        code: `class Calculator
  def self.square(n)
    n * n
  end
  
  def self.cube(n)
    n ** 3
  end
end

puts Calculator.square(5)
puts Calculator.cube(3)`,
        output: '25\n27'
      },
      {
        title: 'Accessor Methods',
        code: `class BankAccount
  attr_reader :balance
  attr_writer :owner
  
  def initialize(owner, balance)
    @owner = owner
    @balance = balance
  end
  
  def deposit(amount)
    @balance += amount
  end
end

account = BankAccount.new("Bob", 1000)
account.deposit(500)
puts account.balance`,
        output: '1500'
      }
    ],
    keyPoints: [
      'initialize is the constructor',
      'attr_accessor creates getters and setters',
      'Instance variables start with @',
      'Class methods use self.method_name',
      'Classes are objects too'
    ],
    commonMistakes: [
      'Confusing instance and class variables',
      'Not using attr_accessor properly',
      'Forgetting to initialize instance variables',
      'Using class when module is appropriate'
    ],
    proTips: [
      'Use attr_reader for read-only attributes',
      'Use attr_writer for write-only attributes',
      'Consider using Struct for simple data classes',
      'Use freeze for immutable objects'
    ]
  },

  inheritance: {
    definition: 'Ruby inheritance allows creating new classes based on existing classes. A subclass inherits methods and data from its superclass.',
    whyUse: 'Inheritance promotes code reuse, establishes relationships, and enables polymorphism.',
    whereUse: 'Used to create specialized versions of classes, build hierarchies, and share behavior.',
    syntax: 'class Derived < Base; end',
    explanation: 'Ruby supports single inheritance. Modules provide mixins for multiple inheritance-like behavior.',
    examples: [
      {
        title: 'Basic Inheritance',
        code: `class Animal
  attr_accessor :name
  
  def initialize(name)
    @name = name
  end
  
  def speak
    puts "#{@name} makes a sound"
  end
end

class Dog < Animal
  def bark
    puts "#{@name} says Woof!"
  end
end

dog = Dog.new("Rex")
dog.speak
dog.bark`,
        output: 'Rex makes a sound\nRex says Woof!'
      },
      {
        title: 'Method Overriding',
        code: `class Shape
  def area
    0
  end
end

class Circle < Shape
  def initialize(radius)
    @radius = radius
  end
  
  def area
    Math::PI * @radius ** 2
  end
end

circle = Circle.new(5)
puts circle.area.round(2)`,
        output: '78.54'
      },
      {
        title: 'Super Keyword',
        code: `class Parent
  def greet
    puts "Hello from Parent"
  end
end

class Child < Parent
  def greet
    super
    puts "Hello from Child"
  end
end

child = Child.new
child.greet`,
        output: 'Hello from Parent\nHello from Child'
      }
    ],
    keyPoints: [
      'Single inheritance only',
      'Use super to call parent methods',
      'Method lookup follows MRO',
      'is_a? checks inheritance relationship',
      'Modules provide multiple inheritance'
    ],
    commonMistakes: [
      'Creating deep inheritance hierarchies',
      'Not calling super when needed',
      'Confusing inheritance with composition',
      'Forgetting method lookup order'
    ],
    proTips: [
      'Prefer composition over inheritance',
      'Use modules for shared behavior',
      'Keep inheritance hierarchies shallow',
      'Use respond_to? for duck typing'
    ]
  },

  modules: {
    definition: 'Modules in Ruby are collections of methods and constants. They cannot be instantiated and are used for namespacing and mixins.',
    whyUse: 'Modules provide namespacing, mixins for code reuse, and a way to share behavior without inheritance.',
    whereUse: 'Used for grouping related methods, creating namespaces, and providing mixins.',
    syntax: 'module ModuleName; def method_name; end; end',
    explanation: 'Modules can be included as mixins, used for namespacing, or as containers for constants and class methods.',
    examples: [
      {
        title: 'Basic Module',
        code: `module MathHelper
  def self.square(n)
    n * n
  end
  
  def self.cube(n)
    n ** 3
  end
end

puts MathHelper.square(4)
puts MathHelper.cube(3)`,
        output: '16\n27'
      },
      {
        title: 'Mixin',
        code: `module Printable
  def print_info
    puts "Name: #{@name}"
  end
end

class Person
  include Printable
  
  def initialize(name)
    @name = name
  end
end

person = Person.new("Alice")
person.print_info`,
        output: 'Name: Alice'
      },
      {
        title: 'Namespacing',
        code: `module Backend
  class Server
    def start
      puts "Server started"
    end
  end
end

server = Backend::Server.new
server.start`,
        output: 'Server started'
      }
    ],
    keyPoints: [
      'Modules cannot be instantiated',
      'include for instance methods',
      'extend for class methods',
      'extend self for module methods',
      'Modules can include other modules'
    ],
    commonMistakes: [
      'Confusing modules with classes',
      'Not using namespacing properly',
      'Overcomplicating module inclusion',
      'Forgetting module lookup order'
    ],
    proTips: [
      'Use modules for code organization',
      'Use mixins for shared behavior',
      'Use modules for namespacing',
      'Consider using Concerns in Rails'
    ]
  },

  io: {
    definition: 'Ruby provides extensive I/O capabilities for reading and writing files, processing input/output, and working with streams.',
    whyUse: 'File I/O is essential for data persistence, configuration, logging, and data processing.',
    whereUse: 'Used for reading/writing files, processing CSV/JSON, logging, and command-line applications.',
    syntax: 'File.open("file", "r") { |f| f.read }',
    explanation: 'Ruby provides File, IO, and other classes for I/O operations. Blocks ensure proper resource cleanup.',
    examples: [
      {
        title: 'File Reading',
        code: `# Read entire file
content = File.read("example.txt")
puts content

# Read line by line
File.foreach("example.txt") do |line|
  puts line
end`,
        output: 'File contents...'
      },
      {
        title: 'File Writing',
        code: `# Write to file
File.write("output.txt", "Hello, World!")

# Append to file
File.open("output.txt", "a") do |f|
  f.puts "Another line"
end`,
        output: 'File created'
      },
      {
        title: 'File Operations',
        code: `# Check if file exists
puts File.exist?("output.txt")

# Get file size
puts File.size("output.txt")

# Get file extension
puts File.extname("document.pdf")

# List files in directory
puts Dir.glob("*.txt").inspect`,
        output: 'true\n18\n.pdf\n["output.txt"]'
      }
    ],
    keyPoints: [
      'Use blocks for automatic file closing',
      'File.read for simple reading',
      'File.write for simple writing',
      'File.open for complex operations',
      'Use Dir.glob for file pattern matching'
    ],
    commonMistakes: [
      'Not closing file handles',
      'Using wrong file mode',
      'Not handling file permissions',
      'Forgetting to handle exceptions'
    ],
    proTips: [
      'Always use blocks for file operations',
      'Use FileUtils for file system operations',
      'Consider using Pathname for path manipulation',
      'Use IO.pipe for inter-process communication'
    ]
  },

  exceptions: {
    definition: 'Ruby exceptions handle runtime errors and exceptional conditions. They provide a way to transfer control and recover from errors.',
    whyUse: 'Exception handling enables graceful error recovery, logging, and maintaining application stability.',
    whereUse: 'Used everywhere for error handling, input validation, and resource cleanup.',
    syntax: 'begin; rescue ExceptionType => e; ensure; end',
    explanation: 'Ruby uses begin/rescue/ensure for exception handling. raise raises exceptions, rescue catches them.',
    examples: [
      {
        title: 'Basic Exception Handling',
        code: `begin
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
ensure
  puts "Cleanup completed"
end`,
        output: 'Error: divided by 0\nCleanup completed'
      },
      {
        title: 'Custom Exceptions',
        code: `class InsufficientFunds < StandardError
  attr_reader :amount
  
  def initialize(amount)
    @amount = amount
    super("Insufficient funds: $#{amount}")
  end
end

begin
  raise InsufficientFunds.new(100)
rescue InsufficientFunds => e
  puts e.message
end`,
        output: 'Insufficient funds: $100'
      },
      {
        title: 'Retry and Rescue',
        code: `attempts = 0

begin
  attempts += 1
  puts "Attempt #{attempts}"
  raise "Network error" if attempts < 3
rescue => e
  puts "Caught: #{e.message}"
  retry if attempts < 3
end`,
        output: 'Attempt 1\nCaught: Network error\nAttempt 2\nCaught: Network error\nAttempt 3'
      }
    ],
    keyPoints: [
      'rescue catches exceptions',
      'ensure always runs',
      'raise raises exceptions',
      'StandardError is base for most exceptions',
      'retry retries the block'
    ],
    commonMistakes: [
      'Catching too broadly',
      'Not logging exceptions',
      'Swallowing exceptions silently',
      'Forgetting ensure for cleanup'
    ],
    proTips: [
      'Be specific with exception types',
      'Log exceptions with full context',
      'Use ensure for resource cleanup',
      'Consider using Result pattern'
    ]
  },

  regex: {
    definition: 'Ruby has built-in regular expression support using the Regexp class. Regex is used for pattern matching and text manipulation.',
    whyUse: 'Regex provides powerful pattern matching for validation, extraction, and text transformation.',
    whereUse: 'Used for input validation, data extraction, search and replace, and text processing.',
    syntax: '/pattern/ or Regexp.new("pattern")',
    explanation: 'Ruby regex uses /pattern/ syntax. Methods like match, gsub, and scan work with patterns.',
    examples: [
      {
        title: 'Basic Pattern Matching',
        code: `pattern = /hello/i
puts pattern.match?("Hello World")
puts "Hello World".match?(pattern)`,
        output: 'true\ntrue'
      },
      {
        title: 'Capture Groups',
        code: `text = "Date: 2024-01-15"
match = text.match(/(\d{4})-(\d{2})-(\d{2})/)

puts match[1]
puts match[2]
puts match[3]`,
        output: '2024\n01\n15'
      },
      {
        title: 'String Operations with Regex',
        code: `text = "Hello World 123"

puts text.gsub(/\d+/, "NUM")
puts text.scan(/\w+/).inspect
puts text.split(/\s+/).inspect`,
        output: 'Hello World NUM\n["Hello", "World", "123"]\n["Hello", "World", "123"]'
      }
    ],
    keyPoints: [
      '/pattern/ creates regular expression',
      'match? checks for match',
      'gsub replaces matches',
      'scan returns all matches',
      'Captures using parentheses ()'
    ],
    commonMistakes: [
      'Not escaping special characters',
      'Using wrong regex flags',
      'Not handling nil matches',
      'Overcomplicating patterns'
    ],
    proTips: [
      'Use Regexp.union for multiple patterns',
      'Use named captures for clarity',
      'Test patterns with rubular.org',
      'Use regex for complex string validation'
    ]
  },

  rails: {
    definition: 'Ruby on Rails is a full-stack web framework that follows MVC architecture. It provides conventions for rapid web application development.',
    whyUse: 'Rails provides everything needed for web development: database ORM, routing, views, testing, and deployment tools.',
    whereUse: 'Used for building web applications, APIs, e-commerce sites, social platforms, and SaaS applications.',
    syntax: 'rails new app_name',
    explanation: 'Rails follows convention over configuration, providing sensible defaults and structure for web applications.',
    examples: [
      {
        title: 'Create Rails App',
        code: `# Create new app
rails new myapp

# Generate scaffold
rails generate scaffold Post title:string body:text

# Run migrations
rails db:migrate`,
        output: 'Rails app created'
      },
      {
        title: 'Rails Controller',
        code: `class PostsController < ApplicationController
  def index
    @posts = Post.all
  end
  
  def show
    @post = Post.find(params[:id])
  end
  
  def create
    @post = Post.new(post_params)
    if @post.save
      redirect_to @post
    else
      render :new
    end
  end
  
  private
  
  def post_params
    params.require(:post).permit(:title, :body)
  end
end`,
        output: 'Controller defined'
      },
      {
        title: 'Rails Model',
        code: `class Post < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true, length: { minimum: 10 }
  
  belongs_to :user
  has_many :comments
  
  scope :recent, -> { order(created_at: :desc) }
end`,
        output: 'Model defined'
      }
    ],
    keyPoints: [
      'MVC architecture pattern',
      'Convention over configuration',
      'ActiveRecord for database ORM',
      'RESTful routing by convention',
      'Built-in testing framework'
    ],
    commonMistakes: [
      'Not following Rails conventions',
      'Putting business logic in controllers',
      'Not using model validations',
      'N+1 query problems'
    ],
    proTips: [
      'Use service objects for complex logic',
      'Implement concerns for shared behavior',
      'Use background jobs for heavy processing',
      'Cache frequently accessed data'
    ]
  }
}

export default ruby