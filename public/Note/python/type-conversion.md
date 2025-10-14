# Type Conversion

Type conversion (also called type casting) is the process of converting a value from one data type to another. Understanding type conversion is essential for working with user input, performing calculations, and manipulating data in Python.

## What is Type Conversion?

Python has two types of type conversion:

### 1. Implicit Type Conversion (Automatic)

Python automatically converts one data type to another without programmer intervention.

```python
# Python converts integer to float automatically
num_int = 10
num_float = 5.5
result = num_int + num_float
print(result)        # 15.5
print(type(result))  # <class 'float'>

# Integer + Float = Float
x = 5
y = 2.0
print(x + y)         # 7.0 (float)
print(type(x + y))   # <class 'float'>
```

### 2. Explicit Type Conversion (Manual)

You manually convert one data type to another using built-in functions.

```python
# Manual conversion
num_str = "25"
num_int = int(num_str)
print(num_int)       # 25
print(type(num_int)) # <class 'int'>
```

---

## Converting to Integer (int)

The `int()` function converts other data types to integers.

### String to Integer

```python
# Valid conversions
age_str = "25"
age = int(age_str)
print(age)           # 25
print(type(age))     # <class 'int'>

# With negative numbers
temp_str = "-10"
temp = int(temp_str)
print(temp)          # -10

# String with spaces (spaces are ignored)
num_str = "  42  "
num = int(num_str.strip())
print(num)           # 42
```

### Float to Integer

```python
# Truncates decimal part (doesn't round!)
price = 19.99
price_int = int(price)
print(price_int)     # 19 (not 20!)

# Negative numbers
value = -15.7
value_int = int(value)
print(value_int)     # -15 (truncates toward zero)

# If you want rounding, use round() first
price = 19.99
price_rounded = int(round(price))
print(price_rounded) # 20
```

### Boolean to Integer

```python
# True = 1, False = 0
print(int(True))     # 1
print(int(False))    # 0

# Useful in calculations
correct_answers = True + True + False + True
print(correct_answers)  # 3
```

### Invalid Conversions

```python
# These will cause ValueError
try:
    int("hello")     # ValueError: invalid literal
except ValueError:
    print("Cannot convert 'hello' to integer")

try:
    int("12.5")      # ValueError: invalid literal
except ValueError:
    print("Cannot convert '12.5' directly - convert to float first")

# Solution: convert to float first, then to int
num = int(float("12.5"))
print(num)           # 12
```

---

## Converting to Float (float)

The `float()` function converts other data types to floating-point numbers.

### String to Float

```python
# Valid conversions
price_str = "19.99"
price = float(price_str)
print(price)         # 19.99
print(type(price))   # <class 'float'>

# Integer strings
num_str = "42"
num = float(num_str)
print(num)           # 42.0

# Scientific notation
sci_str = "1.5e3"
sci = float(sci_str)
print(sci)           # 1500.0

# Negative numbers
temp_str = "-98.6"
temp = float(temp_str)
print(temp)          # -98.6
```

### Integer to Float

```python
age = 25
age_float = float(age)
print(age_float)     # 25.0
print(type(age_float))  # <class 'float'>

# Useful for ensuring float division
result = float(10) / 3
print(result)        # 3.3333...
```

### Boolean to Float

```python
print(float(True))   # 1.0
print(float(False))  # 0.0
```

### Invalid Conversions

```python
# These will cause ValueError
try:
    float("hello")
except ValueError:
    print("Cannot convert 'hello' to float")

try:
    float("12,345.67")  # Comma causes error
except ValueError:
    print("Remove commas before converting")

# Solution: clean the string first
price_str = "12,345.67"
price_clean = price_str.replace(",", "")
price = float(price_clean)
print(price)         # 12345.67
```

---

## Converting to String (str)

The `str()` function converts other data types to strings.

### Number to String

```python
# Integer to string
age = 25
age_str = str(age)
print(age_str)       # "25"
print(type(age_str)) # <class 'str'>

# Float to string
price = 19.99
price_str = str(price)
print(price_str)     # "19.99"

# Now you can concatenate
message = "I am " + str(age) + " years old"
print(message)       # "I am 25 years old"

# Better way: use f-strings
message = f"I am {age} years old"
print(message)       # "I am 25 years old"
```

### Boolean to String

```python
is_active = True
status = str(is_active)
print(status)        # "True"
print(type(status))  # <class 'str'>

# In conditional context
if is_active:
    print("Active")  # This prints
```

### List/Tuple to String (Preview)

```python
# Convert list to string
numbers = [1, 2, 3, 4, 5]
numbers_str = str(numbers)
print(numbers_str)   # "[1, 2, 3, 4, 5]"

# Better way: join (for simple lists)
words = ["Hello", "World"]
sentence = " ".join(words)
print(sentence)      # "Hello World"
```

---

## Converting to Boolean (bool)

The `bool()` function converts other data types to boolean values.

### Truthy and Falsy Values

In Python, some values are considered "falsy" (convert to False), while others are "truthy" (convert to True).

#### Falsy Values (Convert to False)

```python
print(bool(0))           # False (zero)
print(bool(0.0))         # False (zero float)
print(bool(""))          # False (empty string)
print(bool([]))          # False (empty list)
print(bool({}))          # False (empty dictionary)
print(bool(None))        # False (None)
```

#### Truthy Values (Convert to True)

```python
print(bool(1))           # True
print(bool(-1))          # True (any non-zero number)
print(bool(0.1))         # True
print(bool("Hello"))     # True (non-empty string)
print(bool(" "))         # True (even space is truthy!)
print(bool([1, 2]))      # True (non-empty list)
```

### Practical Examples

```python
# Checking if string is empty
user_input = input("Enter your name: ")
if bool(user_input.strip()):
    print(f"Hello, {user_input}!")
else:
    print("You didn't enter a name")

# Shorter way (Python does this automatically)
if user_input.strip():
    print(f"Hello, {user_input}!")

# Converting string to boolean
answer = "yes"
is_yes = bool(answer)  # True (non-empty string)

# More specific boolean conversion
def string_to_bool(text):
    text = text.lower().strip()
    if text in ["true", "yes", "1", "y"]:
        return True
    elif text in ["false", "no", "0", "n"]:
        return False
    else:
        return None

print(string_to_bool("yes"))    # True
print(string_to_bool("no"))     # False
print(string_to_bool("maybe"))  # None
```

---

## Common Type Conversion Patterns

### User Input Conversion

User input is always a string, so you need to convert it:

```python
# Getting integer input
age_str = input("Enter your age: ")
age = int(age_str)
print(f"Next year you'll be {age + 1}")

# Shorter version
age = int(input("Enter your age: "))

# Getting float input
height = float(input("Enter your height in meters: "))
print(f"Height in cm: {height * 100}")

# Safe input with error handling
def get_int_input(prompt):
    while True:
        try:
            return int(input(prompt))
        except ValueError:
            print("Invalid input. Please enter a number.")

age = get_int_input("Enter your age: ")
```

### Mathematical Operations

```python
# Ensure float division
result = 10 / 3          # 3.333... (automatic)
result = float(10) / 3   # 3.333... (explicit)

# Integer division
result = 10 // 3         # 3 (integer result)

# Round to integer
price = 19.99
rounded = round(price)   # 20
as_int = int(rounded)    # 20
```

### String Concatenation with Numbers

```python
# Wrong way (causes error)
# print("I have " + 5 + " apples")  # TypeError

# Correct ways
count = 5
print("I have " + str(count) + " apples")
print(f"I have {count} apples")  # Best way
```

### Mixed Type Lists

```python
# Converting all items to same type
mixed = ["1", "2", "3", "4"]
numbers = [int(x) for x in mixed]
print(numbers)  # [1, 2, 3, 4]

# Or with map()
numbers = list(map(int, mixed))
print(numbers)  # [1, 2, 3, 4]
```

---

## Type Checking Before Conversion

### Using isinstance()

```python
value = "42"

if isinstance(value, str):
    print("It's a string")
    number = int(value)

if isinstance(value, (int, float)):
    print("It's a number")
```

### Checking if String is Numeric

```python
text = "123"

# Check if string contains only digits
if text.isdigit():
    number = int(text)
    print(f"Converted: {number}")

# Check if string is numeric (handles decimals)
text2 = "123.45"
try:
    number = float(text2)
    print(f"Converted: {number}")
except ValueError:
    print("Not a valid number")

# Better helper function
def is_number(text):
    try:
        float(text)
        return True
    except ValueError:
        return False

print(is_number("123"))      # True
print(is_number("123.45"))   # True
print(is_number("hello"))    # False
```

---

## Advanced Conversions

### Binary, Octal, and Hexadecimal

```python
# Integer to binary string
num = 42
binary = bin(num)
print(binary)        # "0b101010"
print(binary[2:])    # "101010" (remove '0b' prefix)

# Integer to octal string
octal = oct(num)
print(octal)         # "0o52"

# Integer to hexadecimal string
hexa = hex(num)
print(hexa)          # "0x2a"

# String to integer (with base)
binary_str = "101010"
num = int(binary_str, 2)
print(num)           # 42

hexa_str = "2a"
num = int(hexa_str, 16)
print(num)           # 42
```

### ASCII and Character Codes

```python
# Character to ASCII code
char = 'A'
code = ord(char)
print(code)          # 65

# ASCII code to character
num = 65
char = chr(num)
print(char)          # 'A'

# String to list of ASCII codes
text = "Hello"
codes = [ord(c) for c in text]
print(codes)         # [72, 101, 108, 108, 111]
```

### List and Tuple Conversion

```python
# List to tuple
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)      # (1, 2, 3)

# Tuple to list
my_tuple = (4, 5, 6)
my_list = list(my_tuple)
print(my_list)       # [4, 5, 6]

# String to list of characters
text = "Hello"
chars = list(text)
print(chars)         # ['H', 'e', 'l', 'l', 'o']
```

---

## Common Conversion Errors and Solutions

### Error 1: Invalid Literal

```python
# Problem
try:
    num = int("12.5")  # ValueError
except ValueError as e:
    print(f"Error: {e}")

# Solution
num = int(float("12.5"))
print(num)  # 12
```

### Error 2: Type Error in Operations

```python
# Problem
try:
    result = "5" + 5  # TypeError
except TypeError as e:
    print(f"Error: {e}")

# Solution 1: Convert to same type
result = int("5") + 5
print(result)  # 10

# Solution 2: Convert to string
result = "5" + str(5)
print(result)  # "55"
```

### Error 3: Division by Zero

```python
# Problem
try:
    result = 10 / int("0")  # ZeroDivisionError
except ZeroDivisionError:
    print("Cannot divide by zero")

# Solution: check before converting
divisor = input("Enter divisor: ")
if divisor != "0" and divisor.strip():
    result = 10 / int(divisor)
    print(result)
else:
    print("Invalid divisor")
```

---

## Classwork

Practice type conversion with these exercises!

### Exercise 1: Basic Conversions

Create a file called `basic_conversions.py`:

```python
# String to numbers
num_str = "42"
float_str = "3.14"
bool_str = "True"

# Convert
num = int(num_str)
pi = float(float_str)
flag = bool(bool_str)  # Note: this will always be True!

# Display
print(f"Integer: {num}, Type: {type(num)}")
print(f"Float: {pi}, Type: {type(pi)}")
print(f"Boolean: {flag}, Type: {type(flag)}")

# Numbers to strings
age = 25
price = 19.99

age_str = str(age)
price_str = str(price)

print(f"Age as string: '{age_str}', Type: {type(age_str)}")
print(f"Price as string: '{price_str}', Type: {type(price_str)}")

# Test concatenation
message = "I am " + age_str + " years old"
print(message)
```

### Exercise 2: User Input Converter

Create a file called `input_converter.py`:

```python
# Get various inputs
name = input("Enter your name: ")
age = int(input("Enter your age: "))
height = float(input("Enter your height in meters: "))
is_student = input("Are you a student? (yes/no): ").lower() == "yes"

# Display with types
print("\n" + "="*50)
print("YOUR INFORMATION")
print("="*50)
print(f"Name: {name} (Type: {type(name).__name__})")
print(f"Age: {age} (Type: {type(age).__name__})")
print(f"Height: {height}m (Type: {type(height).__name__})")
print(f"Student: {is_student} (Type: {type(is_student).__name__})")

# Calculations using conversions
print("\n" + "="*50)
print("CALCULATIONS")
print("="*50)
print(f"Age next year: {age + 1}")
print(f"Height in cm: {height * 100}")
print(f"Birth year (approx): {2024 - age}")
```

### Exercise 3: Safe Number Input

Create a file called `safe_input.py`:

```python
def get_number(prompt, num_type="int"):
    """Safely get number input from user."""
    while True:
        try:
            value = input(prompt)
            if num_type == "int":
                return int(value)
            elif num_type == "float":
                return float(value)
        except ValueError:
            print(f"Invalid input. Please enter a valid {num_type}.")

# Test the function
age = get_number("Enter your age: ", "int")
height = get_number("Enter your height in meters: ", "float")

print(f"\nAge: {age}")
print(f"Height: {height}m")
print(f"Height in cm: {height * 100:.2f}cm")
```

### Exercise 4: Type Conversion Calculator

Create a file called `conversion_calc.py`:

```python
print("TYPE CONVERSION CALCULATOR")
print("="*40)

# Get two string inputs
num1_str = input("Enter first number: ")
num2_str = input("Enter second number: ")

# Show original types
print(f"\nOriginal types:")
print(f"num1: {type(num1_str).__name__}")
print(f"num2: {type(num2_str).__name__}")

# Convert to different types and show results
print(f"\nAs integers:")
num1_int = int(num1_str)
num2_int = int(num2_str)
print(f"Sum: {num1_int + num2_int}")
print(f"Product: {num1_int * num2_int}")

print(f"\nAs floats:")
num1_float = float(num1_str)
num2_float = float(num2_str)
print(f"Division: {num1_float / num2_float:.2f}")

print(f"\nAs strings (concatenation):")
print(f"Result: {num1_str + num2_str}")

print(f"\nAs booleans:")
print(f"num1 as bool: {bool(int(num1_str))}")
print(f"num2 as bool: {bool(int(num2_str))}")
```

---

## Assignment

### Project: Data Type Converter Tool

Create a comprehensive type conversion tool called `type_converter.py` that converts between different data types and demonstrates understanding of type conversion.

### Requirements

Your program should include:

#### 1. **Main Menu**

Display a menu with conversion options:

- String to Number
- Number to String
- Number Base Converter (decimal, binary, hex)
- Temperature Converter
- Boolean Converter
- ASCII Converter
- Exit

#### 2. **String to Number Converter**

- Ask user for a string
- Try to convert to int, float
- Show which conversions are possible
- Handle errors gracefully
- Display results with type information

#### 3. **Number to String Converter**

- Get a number (int or float)
- Convert to string
- Show formatted versions:
  - With commas (1,000,000)
  - Scientific notation
  - With specific decimal places
  - As percentage

#### 4. **Number Base Converter**

- Get a decimal number
- Convert to:
  - Binary
  - Octal
  - Hexadecimal
- Also allow conversion FROM these bases back to decimal

#### 5. **Temperature Converter**

- Convert between Celsius, Fahrenheit, and Kelvin
- Show all three values
- Handle both integer and float inputs

#### 6. **Boolean Converter**

- Show what values convert to True/False
- Test user input
- Demonstrate truthy/falsy values

#### 7. **ASCII Converter**

- Character to ASCII code
- ASCII code to character
- String to list of ASCII codes

### Code Requirements

- Use functions for each converter
- Include comprehensive error handling
- Show type information for all conversions
- Use f-strings for formatting
- Display results in organized, readable format
- Include input validation
- Add comments explaining conversions

### Example Output

```
═══════════════════════════════════════════════
        DATA TYPE CONVERTER TOOL
═══════════════════════════════════════════════

MAIN MENU:
1. String to Number
2. Number to String
3. Number Base Converter
4. Temperature Converter
5. Boolean Converter
6. ASCII Converter
7. Exit

Enter your choice (1-7): 1

═══════════════════════════════════════════════
       STRING TO NUMBER CONVERTER
═══════════════════════════════════════════════

Enter a string: 42.5

Conversion Results:
-------------------
Original: "42.5"
Original type: <class 'str'>

✓ To float: 42.5
  Type: <class 'float'>

✗ To int: Failed
  Error: Cannot convert directly (decimal point)
  Solution: Convert to float first: int(float("42.5")) = 42

Press Enter to continue...

MAIN MENU:
1. String to Number
2. Number to String
3. Number Base Converter
4. Temperature Converter
5. Boolean Converter
6. ASCII Converter
7. Exit

Enter your choice (1-7): 3

═══════════════════════════════════════════════
        NUMBER BASE CONVERTER
═══════════════════════════════════════════════

Enter a decimal number: 42

Conversion Results:
-------------------
Decimal:      42
Binary:       0b101010 (101010)
Octal:        0o52 (52)
Hexadecimal:  0x2a (2a)

Press Enter to continue...
```

### Bonus Challenges (Optional)

1. **Roman Numeral Converter**: Convert numbers to/from Roman numerals
2. **Unit Converter**: Length, weight, volume conversions
3. **Currency Formatter**: Format numbers as different currencies
4. **Scientific Notation**: Convert to/from scientific notation
5. **Fraction Converter**: Convert decimals to fractions
6. **Time Converter**: Convert between different time units
7. **Save History**: Keep track of all conversions in a session

### Submission Guidelines

- File name: `type_converter.py`
- Must include all 6 converters
- Comprehensive error handling
- Clean, organized code with functions
- Professional output formatting
- Estimated time: 90-120 minutes

### Grading Criteria

- ✅ String to Number converter (5 points)
- ✅ Number to String converter (5 points)
- ✅ Number Base converter (5 points)
- ✅ Temperature converter (4 points)
- ✅ Boolean converter (4 points)
- ✅ ASCII converter (4 points)
- ✅ Menu system and navigation (3 points)
- ✅ Error handling (4 points)
- ✅ Code organization and comments (3 points)
- ✅ Output formatting (3 points)
- ✅ Bonus challenges (up to 7 extra points)

**Total: 40 points (+ up to 7 bonus points)**

---

## Quick Reference

### Conversion Functions

```python
int(x)      # Convert to integer
float(x)    # Convert to float
str(x)      # Convert to string
bool(x)     # Convert to boolean
list(x)     # Convert to list
tuple(x)    # Convert to tuple
```

### Special Conversions

```python
ord(char)        # Character to ASCII
chr(code)        # ASCII to character
bin(num)         # Integer to binary string
oct(num)         # Integer to octal string
hex(num)         # Integer to hex string
int(s, base)     # String to int with base
```

### Falsy Values

```python
0, 0.0, "", [], {}, None, False
```

---

## Summary

In this lesson, you learned:

- ✅ Implicit vs explicit type conversion
- ✅ Converting to integers with `int()`
- ✅ Converting to floats with `float()`
- ✅ Converting to strings with `str()`
- ✅ Converting to booleans with `bool()`
- ✅ Truthy and falsy values
- ✅ Common conversion patterns
- ✅ Type checking before conversion
- ✅ Advanced conversions (binary, hex, ASCII)
- ✅ Error handling for conversions
- ✅ Safe user input handling

**You now understand how to work with different data types and convert between them!** This is essential for handling user input, performing calculations, and working with data from different sources.

In the next lesson, we'll learn about getting user input and displaying output effectively.

---

## Additional Resources

- **Python Type Conversion:** [https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)
- **Built-in Functions:** [https://docs.python.org/3/library/functions.html](https://docs.python.org/3/library/functions.html)
- **Real Python - Type Checking:** [https://realpython.com/python-type-checking/](https://realpython.com/python-type-checking/)

**Next lesson:** [User Input and Output](input-output)
