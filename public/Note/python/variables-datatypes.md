# Variables and Data Types

Variables are containers that store data in your programs. Understanding variables and data types is fundamental to programming in Python. Let's explore how to create, use, and manipulate variables!

## What is a Variable?

A **variable** is a named location in memory that stores a value. Think of it as a labeled box where you can put different things.

### Creating Variables

In Python, you create a variable by assigning it a value using the `=` sign:

```python
name = "Alice"
age = 25
height = 5.6
is_student = True
```

**No declaration needed!** Unlike some languages (like Java or C++), you don't need to declare the type of a variable. Python figures it out automatically.

### Variable Assignment

```python
# The = sign assigns a value to a variable
message = "Hello, Python!"

# You can reassign variables
message = "Hello, World!"

# Variables can be used in expressions
x = 5
y = 10
total = x + y  # total is now 15
```

---

## Variable Naming Rules

Python has strict rules for naming variables:

### ✅ Valid Variable Names

```python
name = "John"
age = 30
user_name = "john_doe"
userName = "john_doe"  # camelCase (less common in Python)
_private = "secret"
name2 = "Jane"
```

### ❌ Invalid Variable Names

```python
2name = "John"      # Can't start with a number
user-name = "John"  # Can't use hyphens
user name = "John"  # Can't have spaces
class = "Math"      # Can't use reserved keywords
```

### Variable Naming Conventions (PEP 8)

Python has style guidelines for naming:

```python
# Use lowercase with underscores (snake_case)
first_name = "Alice"
user_age = 25
total_price = 99.99

# Constants use uppercase
PI = 3.14159
MAX_SIZE = 100
API_KEY = "abc123"

# Avoid single letters except for loops
x = 5  # OK for short examples
counter = 0  # Better for real code
```

**Best Practices:**

- Use descriptive names: `student_grade` not `sg`
- Be consistent with your naming style
- Avoid using built-in names like `list`, `str`, `int`

---

## Python Data Types

Python has several built-in data types. Let's explore the main ones:

### 1. Integers (int)

Whole numbers without decimal points:

```python
age = 25
year = 2024
temperature = -5
big_number = 1000000

# You can use underscores for readability
population = 1_000_000  # Same as 1000000
```

**Operations with integers:**

```python
a = 10
b = 3

print(a + b)   # Addition: 13
print(a - b)   # Subtraction: 7
print(a * b)   # Multiplication: 30
print(a / b)   # Division: 3.333...
print(a // b)  # Floor division: 3
print(a % b)   # Modulus (remainder): 1
print(a ** b)  # Exponentiation: 1000
```

### 2. Floating-Point Numbers (float)

Numbers with decimal points:

```python
price = 19.99
temperature = 98.6
pi = 3.14159
scientific = 2.5e-3  # Scientific notation: 0.0025
```

**Important:** Floats can have precision issues:

```python
result = 0.1 + 0.2
print(result)  # 0.30000000000000004 (not exactly 0.3!)
```

### 3. Strings (str)

Text data enclosed in quotes:

```python
name = "Alice"
message = 'Hello, World!'
multiline = """This is
a multiline
string"""

# Quotes inside strings
quote = "He said, 'Hello!'"
quote2 = 'She said, "Hi!"'
quote3 = "She said, \"Hi!\""  # Escaped quote
```

**String operations:**

```python
first_name = "John"
last_name = "Doe"

# Concatenation
full_name = first_name + " " + last_name
print(full_name)  # "John Doe"

# Repetition
laugh = "ha" * 3
print(laugh)  # "hahaha"

# Length
print(len(full_name))  # 8
```

### 4. Boolean (bool)

True or False values:

```python
is_active = True
is_logged_in = False
has_access = True

# Boolean from comparisons
is_adult = age >= 18
is_equal = (5 == 5)  # True
is_greater = (10 > 20)  # False
```

**Boolean operations:**

```python
a = True
b = False

print(a and b)  # False (both must be True)
print(a or b)   # True (at least one is True)
print(not a)    # False (opposite of True)
```

### 5. NoneType (None)

Represents the absence of a value:

```python
result = None  # Variable exists but has no value
empty = None

if result is None:
    print("No value assigned")
```

---

## Checking Data Types

Use the `type()` function to check a variable's type:

```python
name = "Alice"
age = 25
height = 5.6
is_student = True
nothing = None

print(type(name))       # <class 'str'>
print(type(age))        # <class 'int'>
print(type(height))     # <class 'float'>
print(type(is_student)) # <class 'bool'>
print(type(nothing))    # <class 'NoneType'>
```

### isinstance() Function

Check if a variable is of a specific type:

```python
age = 25

print(isinstance(age, int))    # True
print(isinstance(age, str))    # False
print(isinstance(age, float))  # False
```

---

## Type Conversion (Type Casting)

Convert between data types:

### String to Number

```python
# String to integer
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # 30

# String to float
price_str = "19.99"
price_float = float(price_str)
print(price_float * 2)  # 39.98
```

### Number to String

```python
age = 25
age_str = str(age)
message = "I am " + age_str + " years old"
print(message)  # "I am 25 years old"

# Better way: f-strings
message = f"I am {age} years old"
print(message)  # "I am 25 years old"
```

### Other Conversions

```python
# Float to int (truncates decimal)
price = 19.99
price_int = int(price)
print(price_int)  # 19

# Int to float
age = 25
age_float = float(age)
print(age_float)  # 25.0

# String to boolean (advanced)
bool("Hello")  # True (non-empty string)
bool("")       # False (empty string)
bool(0)        # False
bool(1)        # True
```

### Handling Conversion Errors

```python
# This will cause an error
try:
    number = int("abc")  # Can't convert "abc" to integer
except ValueError:
    print("Invalid conversion!")
```

---

## Multiple Assignment

Python allows assigning multiple variables in one line:

### Same Value to Multiple Variables

```python
x = y = z = 0
print(x, y, z)  # 0 0 0
```

### Different Values to Multiple Variables

```python
name, age, city = "Alice", 25, "New York"
print(name)  # "Alice"
print(age)   # 25
print(city)  # "New York"
```

### Swapping Variables

```python
a = 5
b = 10

# Traditional way (needs temporary variable)
temp = a
a = b
b = temp

# Python way (elegant!)
a, b = b, a
print(a, b)  # 10 5
```

---

## Working with User Input

The `input()` function always returns a **string**:

```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
print(type(name))  # <class 'str'>
```

### Converting Input to Numbers

```python
# Get age as integer
age_str = input("Enter your age: ")
age = int(age_str)  # Convert to integer
print(f"Next year you'll be {age + 1}")

# Shorter version
age = int(input("Enter your age: "))

# Get price as float
price = float(input("Enter price: "))
print(f"With tax: ${price * 1.1:.2f}")
```

### Input Validation

```python
age_str = input("Enter your age: ")

if age_str.isdigit():
    age = int(age_str)
    print(f"You are {age} years old")
else:
    print("Please enter a valid number!")
```

---

## Constants in Python

Python doesn't have true constants, but we use uppercase names to indicate values that shouldn't change:

```python
# Constants (by convention)
PI = 3.14159
MAX_USERS = 100
API_URL = "https://api.example.com"
TAX_RATE = 0.08

# These are just regular variables, but naming
# convention tells developers not to change them
area = PI * radius ** 2
```

---

## Dynamic Typing

Python is **dynamically typed** - variables can change types:

```python
x = 5           # x is an integer
print(type(x))  # <class 'int'>

x = "Hello"     # Now x is a string
print(type(x))  # <class 'str'>

x = 3.14        # Now x is a float
print(type(x))  # <class 'float'>
```

**This is flexible but can cause bugs if you're not careful!**

---

## String Formatting

### Old Way (% operator)

```python
name = "Alice"
age = 25
print("My name is %s and I am %d years old" % (name, age))
```

### Better Way (.format())

```python
print("My name is {} and I am {} years old".format(name, age))
```

### Best Way (f-strings) - Python 3.6+

```python
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")

# With expressions
print(f"Next year I'll be {age + 1}")

# With formatting
price = 19.99
print(f"Price: ${price:.2f}")  # Price: $19.99
```

---

## Common Mistakes

### Mistake 1: Using Variables Before Assignment

```python
# Wrong - will cause NameError
print(name)
name = "Alice"

# Correct
name = "Alice"
print(name)
```

### Mistake 2: Forgetting Type Conversion

```python
# Wrong - concatenating string and number
age = 25
print("I am " + age)  # TypeError

# Correct
print("I am " + str(age))
# or
print(f"I am {age}")
```

### Mistake 3: Integer Division Surprise

```python
# Python 3: / always gives float
result = 10 / 4
print(result)  # 2.5

# Use // for integer division
result = 10 // 4
print(result)  # 2
```

### Mistake 4: Confusing = and ==

```python
# = is assignment
x = 5

# == is comparison
if x == 5:
    print("x is 5")
```

---

## Classwork

Time to practice working with variables and data types!

### Exercise 1: Variable Basics

Create a file called `variables_practice.py`:

```python
# Create variables for your information
first_name = "Your name here"
age = 0  # Your age
height = 0.0  # Your height in feet
is_student = True  # Are you a student?

# Print all information
print(f"Name: {first_name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Student: {is_student}")

# Print the types
print(f"\nData Types:")
print(f"Name type: {type(first_name)}")
print(f"Age type: {type(age)}")
print(f"Height type: {type(height)}")
print(f"Student type: {type(is_student)}")
```

### Exercise 2: Type Conversion Challenge

Create a file called `conversion.py`:

```python
# Get input from user
num_str = input("Enter a number: ")
float_str = input("Enter a decimal number: ")
bool_str = input("Enter True or False: ")

# Convert to appropriate types
num_int = int(num_str)
num_float = float(float_str)
num_bool = bool_str == "True"

# Perform operations
print(f"\nInteger doubled: {num_int * 2}")
print(f"Float halved: {num_float / 2}")
print(f"Boolean opposite: {not num_bool}")

# Show types
print(f"\nTypes after conversion:")
print(f"Integer: {type(num_int)}")
print(f"Float: {type(num_float)}")
print(f"Boolean: {type(num_bool)}")
```

### Exercise 3: Calculator Program

Create a file called `simple_calculator.py`:

```python
# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform all operations
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
floor_division = num1 // num2
modulus = num1 % num2
exponent = num1 ** num2

# Display results
print(f"\n{'='*40}")
print(f"CALCULATOR RESULTS")
print(f"{'='*40}")
print(f"{num1} + {num2} = {addition}")
print(f"{num1} - {num2} = {subtraction}")
print(f"{num1} × {num2} = {multiplication}")
print(f"{num1} ÷ {num2} = {division:.2f}")
print(f"{num1} // {num2} = {floor_division}")
print(f"{num1} % {num2} = {modulus}")
print(f"{num1} ^ {num2} = {exponent}")
print(f"{'='*40}")
```

### Exercise 4: Variable Swap

Create a file called `swap.py`:

```python
# Create two variables
x = 10
y = 20

print(f"Before swap: x = {x}, y = {y}")

# Swap the values using Python's elegant method
x, y = y, x

print(f"After swap: x = {x}, y = {y}")

# Now try with three variables
a = 1
b = 2
c = 3

print(f"\nBefore rotation: a = {a}, b = {b}, c = {c}")

# Rotate values: a → b → c → a
a, b, c = c, a, b

print(f"After rotation: a = {a}, b = {b}, c = {c}")
```

---

## Assignment

### Project: Personal Information System

Create a comprehensive program called `personal_info.py` that collects and processes personal information.

### Requirements

Your program should:

1. **Collect the following information from the user:**
   - Full name (string)
   - Age (integer)
   - Height in inches (float)
   - Weight in pounds (float)
   - Favorite color (string)
   - Is employed (boolean - ask "Are you employed? (yes/no)")
   - City (string)

2. **Process and calculate:**
   - Height in feet (divide inches by 12)
   - BMI (Body Mass Index): weight / (height_in_inches²) × 703
   - Years until retirement (assume retirement at 65)
   - Birth year (current year - age)

3. **Display a formatted report** that includes:
   - All original information
   - All calculated values
   - Data types of at least 3 variables
   - Use proper formatting (2 decimal places for floats)

4. **Code requirements:**
   - Use descriptive variable names
   - Include comments explaining each section
   - Use f-strings for all output
   - Use appropriate type conversions
   - Include constants (like RETIREMENT_AGE = 65)

### Example Output

```bash
PERSONAL INFORMATION COLLECTION SYSTEM
========================================

Enter your full name: John Smith
Enter your age: 30
Enter your height in inches: 70
Enter your weight in pounds: 180
Enter your favorite color: Blue
Are you employed? (yes/no): yes
Enter your city: New York

========================================
PERSONAL INFORMATION REPORT
========================================

Basic Information:
------------------
Name: John Smith
Age: 30 years old
Height: 70.0 inches (5.83 feet)
Weight: 180.0 lbs
Favorite Color: Blue
Employment Status: Employed
City: New York

Calculated Information:
-----------------------
BMI: 25.82
Birth Year: 1995
Years Until Retirement: 35 years

Data Type Information:
----------------------
Name is of type: <class 'str'>
Age is of type: <class 'int'>
Height is of type: <class 'float'>

========================================
Thank you for using our system!
========================================
```

### Bonus Challenges (Optional)

1. **Input Validation:** Check if age is a valid number before converting
2. **Multiple Units:** Convert height to centimeters (1 inch = 2.54 cm)
3. **Health Assessment:** Based on BMI, print if they're underweight, normal, overweight, or obese
4. **Color ASCII Art:** Print a simple colored box or symbol (research ANSI escape codes)
5. **Save to File:** Research how to write the report to a text file

### Submission Guidelines

- File name: `personal_info.py`
- Include comments explaining your code
- Test with different inputs
- Make sure all calculations are correct
- Format output neatly with proper spacing
- Estimated time: 45-60 minutes

### Grading Criteria

- ✅ Collects all required information (7 points)
- ✅ Performs all calculations correctly (4 points)
- ✅ Uses proper type conversions (3 points)
- ✅ Output is well-formatted and readable (3 points)
- ✅ Code has descriptive variable names (2 points)
- ✅ Includes helpful comments (1 point)
- ✅ Bonus challenges (up to 5 extra points)

**Total: 20 points (+ up to 5 bonus points)**

---

## Quick Reference

### Variable Creation

```python
variable_name = value
```

### Data Types

```python
integer = 42              # int
decimal = 3.14           # float
text = "Hello"           # str
flag = True              # bool
nothing = None           # NoneType
```

### Type Checking

```python
type(variable)           # Get type
isinstance(var, type)    # Check if specific type
```

### Type Conversion

```python
int()                    # Convert to integer
float()                  # Convert to float
str()                    # Convert to string
bool()                   # Convert to boolean
```

### String Formatting

```python
f"Text {variable}"       # f-string (best)
"Text {}".format(var)    # format method
"Text %s" % var          # % operator (old)
```

---

## Summary

In this lesson, you learned:

- ✅ What variables are and how to create them
- ✅ Variable naming rules and conventions
- ✅ Python's basic data types (int, float, str, bool, None)
- ✅ How to check data types with `type()` and `isinstance()`
- ✅ Type conversion between different data types
- ✅ Multiple assignment and variable swapping
- ✅ Working with user input and type conversion
- ✅ String formatting with f-strings
- ✅ Common mistakes and how to avoid them

**You now understand the building blocks of Python programs!** Variables and data types are fundamental to everything you'll build.

In the next lesson, we'll dive deeper into working with numbers and performing mathematical operations.

---

## Additional Resources

- **Python Data Types Documentation:** [https://docs.python.org/3/library/stdtypes.html](https://docs.python.org/3/library/stdtypes.html)
- **PEP 8 Naming Conventions:** [https://pep8.org/#naming-conventions](https://pep8.org/#naming-conventions)
- **Real Python - Variables:** [https://realpython.com/python-variables/](https://realpython.com/python-variables/)
- **W3Schools Python Data Types:** [https://www.w3schools.com/python/python_datatypes.asp](https://www.w3schools.com/python/python_datatypes.asp)

**Next lesson:** [Numbers (Integers and Floats)](numbers.md)
