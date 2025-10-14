# Numbers (Integers and Floats)

Numbers are fundamental to programming. In Python, we work with two main types of numbers: integers (whole numbers) and floats (decimal numbers). Let's explore everything you can do with numbers!

## Integer Numbers (int)

Integers are whole numbers without decimal points. They can be positive, negative, or zero.

### Creating Integers

```python
age = 25
year = 2024
temperature = -15
zero = 0
big_number = 1000000

# For readability, you can use underscores
population = 7_800_000_000  # Same as 7800000000
price = 1_999  # Same as 1999
```

### Integer Operations

```python
a = 20
b = 7

# Basic arithmetic
print(a + b)   # Addition: 27
print(a - b)   # Subtraction: 13
print(a * b)   # Multiplication: 140
print(a / b)   # Division: 2.857... (returns float!)
print(a // b)  # Floor division: 2 (rounds down)
print(a % b)   # Modulus (remainder): 6
print(a ** b)  # Exponentiation: 1280000000

# Negative numbers
print(-a)      # Negation: -20
```

### Understanding Division Operators

```python
# Regular division (/) always returns a float
print(10 / 2)    # 5.0 (not 5!)
print(10 / 3)    # 3.3333...

# Floor division (//) returns an integer
print(10 // 3)   # 3 (rounds down)
print(10 // 2)   # 5
print(-10 // 3)  # -4 (rounds down, not toward zero!)

# Modulus (%) gives the remainder
print(10 % 3)    # 1 (10 = 3*3 + 1)
print(20 % 7)    # 6 (20 = 7*2 + 6)
print(15 % 5)    # 0 (no remainder - evenly divisible)
```

### Practical Uses of Modulus

```python
# Check if a number is even or odd
number = 42
if number % 2 == 0:
    print("Even")
else:
    print("Odd")

# Check if divisible by another number
if number % 7 == 0:
    print("Divisible by 7")

# Get last digit of a number
last_digit = 12345 % 10  # 5

# Cycle through values (useful for rotations)
current_day = 8
day_of_week = current_day % 7  # 0-6 (Sunday to Saturday)
```

### Compound Assignment Operators

Shorthand for updating variables:

```python
count = 10

count += 5    # Same as: count = count + 5
print(count)  # 15

count -= 3    # Same as: count = count - 3
print(count)  # 12

count *= 2    # Same as: count = count * 2
print(count)  # 24

count //= 4   # Same as: count = count // 4
print(count)  # 6

count %= 4    # Same as: count = count % 4
print(count)  # 2

count **= 3   # Same as: count = count ** 3
print(count)  # 8
```

### Increment and Decrement

Python doesn't have `++` or `--` operators like some languages:

```python
# Wrong (doesn't work in Python)
# count++
# count--

# Correct way
count = 0
count += 1  # Increment
count -= 1  # Decrement
```

---

## Floating-Point Numbers (float)

Floats are numbers with decimal points.

### Creating Floats

```python
price = 19.99
temperature = 98.6
pi = 3.14159
small = 0.0001

# Scientific notation
speed_of_light = 3.0e8      # 300000000.0
planck_constant = 6.626e-34  # 0.0000000000000000000000000000000000626

# Integer division that produces float
result = 10 / 2  # 5.0 (still a float!)
```

### Float Operations

```python
a = 10.5
b = 2.5

print(a + b)   # Addition: 13.0
print(a - b)   # Subtraction: 8.0
print(a * b)   # Multiplication: 26.25
print(a / b)   # Division: 4.2
print(a // b)  # Floor division: 4.0
print(a % b)   # Modulus: 0.5
print(a ** b)  # Exponentiation: 330.29...
```

### Float Precision Issues

**Important:** Floats aren't always exact due to how computers store them:

```python
# Surprising results
print(0.1 + 0.2)  # 0.30000000000000004 (not exactly 0.3!)
print(0.1 + 0.1 + 0.1)  # 0.30000000000000004

# This can affect comparisons
result = 0.1 + 0.2
print(result == 0.3)  # False!

# Solution 1: Round for comparison
print(round(result, 2) == 0.3)  # True

# Solution 2: Use a tolerance
tolerance = 0.0001
print(abs(result - 0.3) < tolerance)  # True

# Solution 3: Use the decimal module (for financial calculations)
from decimal import Decimal
a = Decimal('0.1')
b = Decimal('0.2')
print(a + b)  # Decimal('0.3') - exact!
```

### Rounding Numbers

```python
number = 3.14159

# round() function
print(round(number))       # 3
print(round(number, 2))    # 3.14
print(round(number, 4))    # 3.1416

# Banker's rounding (round half to even)
print(round(2.5))  # 2
print(round(3.5))  # 4

# Always round up or down
import math
print(math.ceil(3.1))   # 4 (ceiling - round up)
print(math.floor(3.9))  # 3 (floor - round down)
```

---

## Converting Between Numbers

### Float to Integer

```python
price = 19.99
price_int = int(price)
print(price_int)  # 19 (truncates, doesn't round!)

# Negative numbers
negative = int(-19.99)
print(negative)  # -19 (truncates toward zero)
```

### Integer to Float

```python
age = 25
age_float = float(age)
print(age_float)  # 25.0
```

### String to Number

```python
# String to integer
age_str = "25"
age = int(age_str)
print(age + 5)  # 30

# String to float
price_str = "19.99"
price = float(price_str)
print(price * 2)  # 39.98

# Error handling
try:
    invalid = int("abc")
except ValueError:
    print("Cannot convert 'abc' to integer!")
```

### Number to String

```python
age = 25
age_str = str(age)
print("I am " + age_str + " years old")

# Or use f-strings (better!)
print(f"I am {age} years old")
```

---

## The Math Module

Python's `math` module provides advanced mathematical functions.

### Importing the Math Module

```python
import math

# Now you can use math functions
result = math.sqrt(16)
```

### Common Math Functions

```python
import math

# Square root
print(math.sqrt(16))      # 4.0
print(math.sqrt(2))       # 1.414...

# Power (alternative to **)
print(math.pow(2, 3))     # 8.0

# Absolute value
print(abs(-5))            # 5 (built-in, no import needed)
print(math.fabs(-5.5))    # 5.5

# Ceiling and floor
print(math.ceil(3.1))     # 4
print(math.floor(3.9))    # 3

# Rounding (truncate toward zero)
print(math.trunc(3.9))    # 3
print(math.trunc(-3.9))   # -3

# Constants
print(math.pi)            # 3.141592653589793
print(math.e)             # 2.718281828459045

# Trigonometry (angles in radians)
print(math.sin(math.pi / 2))  # 1.0
print(math.cos(0))            # 1.0
print(math.tan(math.pi / 4))  # 1.0

# Logarithms
print(math.log(10))       # Natural log (base e)
print(math.log10(100))    # Log base 10: 2.0
print(math.log(8, 2))     # Log base 2: 3.0

# Convert degrees to radians and vice versa
print(math.radians(180))  # 3.14159... (π)
print(math.degrees(math.pi))  # 180.0
```

### Useful Math Examples

```python
import math

# Calculate hypotenuse of a right triangle
a = 3
b = 4
c = math.sqrt(a**2 + b**2)
print(f"Hypotenuse: {c}")  # 5.0

# Distance between two points
x1, y1 = 0, 0
x2, y2 = 3, 4
distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
print(f"Distance: {distance}")  # 5.0

# Area of a circle
radius = 5
area = math.pi * radius ** 2
print(f"Area: {area:.2f}")  # 78.54

# Factorial
print(math.factorial(5))  # 120 (5 * 4 * 3 * 2 * 1)
```

---

## Random Numbers

Generate random numbers using the `random` module.

### Importing Random

```python
import random
```

### Random Integers

```python
import random

# Random integer between 1 and 10 (inclusive)
dice = random.randint(1, 6)
print(dice)

# Random integer between 0 and 99
number = random.randint(0, 99)
print(number)

# Random choice from a range
result = random.randrange(0, 100, 5)  # 0, 5, 10, 15, ..., 95
print(result)
```

### Random Floats

```python
import random

# Random float between 0.0 and 1.0
random_value = random.random()
print(random_value)  # e.g., 0.7234...

# Random float between two numbers
min_value = 10.5
max_value = 20.5
random_float = random.uniform(min_value, max_value)
print(random_float)  # e.g., 15.3...
```

### Practical Random Examples

```python
import random

# Coin flip
coin = random.choice(['Heads', 'Tails'])
print(coin)

# Roll two dice
dice1 = random.randint(1, 6)
dice2 = random.randint(1, 6)
total = dice1 + dice2
print(f"Rolled {dice1} and {dice2}. Total: {total}")

# Generate a random PIN
pin = random.randint(1000, 9999)
print(f"PIN: {pin}")

# Shuffle a list (we'll learn lists later)
numbers = [1, 2, 3, 4, 5]
random.shuffle(numbers)
print(numbers)
```

---

## Number Formatting

### Formatting with f-strings

```python
price = 19.99
tax_rate = 0.08

# Basic formatting
print(f"Price: ${price}")

# Decimal places
print(f"Price: ${price:.2f}")  # 2 decimal places

# More examples
pi = 3.14159265359
print(f"Pi: {pi:.2f}")     # 3.14
print(f"Pi: {pi:.5f}")     # 3.14159

# Padding and alignment
number = 42
print(f"{number:5d}")      # "   42" (5 characters wide)
print(f"{number:05d}")     # "00042" (pad with zeros)

# Thousands separator
big_number = 1000000
print(f"{big_number:,}")   # "1,000,000"
```

### Percentage Formatting

```python
score = 0.8567

# As percentage
print(f"Score: {score:.2%}")  # "Score: 85.67%"

# Custom percentage
print(f"Score: {score * 100:.1f}%")  # "Score: 85.7%"
```

### Scientific Notation

```python
big = 1234567890
small = 0.000000123

print(f"{big:.2e}")    # "1.23e+09"
print(f"{small:.2e}")  # "1.23e-07"
```

---

## Order of Operations (PEMDAS)

Python follows standard mathematical order:

1. **P**arentheses
2. **E**xponents
3. **M**ultiplication and **D**ivision (left to right)
4. **A**ddition and **S**ubtraction (left to right)

```python
# Without parentheses
result = 2 + 3 * 4
print(result)  # 14 (not 20!)

# With parentheses
result = (2 + 3) * 4
print(result)  # 20

# Complex example
result = 2 + 3 * 4 ** 2 / 2 - 1
# Step 1: 4 ** 2 = 16
# Step 2: 3 * 16 = 48
# Step 3: 48 / 2 = 24.0
# Step 4: 2 + 24.0 = 26.0
# Step 5: 26.0 - 1 = 25.0
print(result)  # 25.0
```

---

## Working with User Input (Numbers)

```python
# Get integer input
age = int(input("Enter your age: "))
print(f"Next year you'll be {age + 1}")

# Get float input
height = float(input("Enter your height in meters: "))
print(f"Height in cm: {height * 100}")

# Error handling
try:
    number = int(input("Enter a number: "))
    print(f"You entered: {number}")
except ValueError:
    print("That's not a valid number!")
```

---

## Classwork

Practice your number skills with these exercises!

### Exercise 1: Basic Calculator

Create a file called `calculator.py`:

```python
# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform all operations
print(f"\nResults:")
print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} × {num2} = {num1 * num2}")
print(f"{num1} ÷ {num2} = {num1 / num2:.2f}")
print(f"{num1} // {num2} = {num1 // num2}")
print(f"{num1} % {num2} = {num1 % num2}")
print(f"{num1} ^ {num2} = {num1 ** num2:.2f}")
```

### Exercise 2: Circle Calculator

Create a file called `circle.py`:

```python
import math

# Get radius from user
radius = float(input("Enter the radius of the circle: "))

# Calculate properties
diameter = radius * 2
circumference = 2 * math.pi * radius
area = math.pi * radius ** 2

# Display results
print(f"\nCircle Properties:")
print(f"Radius: {radius}")
print(f"Diameter: {diameter}")
print(f"Circumference: {circumference:.2f}")
print(f"Area: {area:.2f}")
```

### Exercise 3: Temperature Converter

Create a file called `temperature.py`:

```python
# Get temperature in Celsius
celsius = float(input("Enter temperature in Celsius: "))

# Convert to Fahrenheit
fahrenheit = (celsius * 9/5) + 32

# Convert to Kelvin
kelvin = celsius + 273.15

# Display results
print(f"\n{celsius}°C is equal to:")
print(f"Fahrenheit: {fahrenheit:.2f}°F")
print(f"Kelvin: {kelvin:.2f}K")
```

### Exercise 4: Even or Odd Checker

Create a file called `even_odd.py`:

```python
# Get number from user
number = int(input("Enter a number: "))

# Check if even or odd using modulus
if number % 2 == 0:
    print(f"{number} is EVEN")
else:
    print(f"{number} is ODD")

# Bonus: Show the remainder when divided by 3
remainder = number % 3
print(f"\nWhen divided by 3, remainder is: {remainder}")
```

---

## Assignment

### Project: Advanced Calculator with Math Functions

Create a comprehensive calculator program called `advanced_calculator.py` that demonstrates mastery of numeric operations.

### Requirements

Your calculator should have the following features:

#### 1. **Basic Operations Section**

- Get two numbers from the user
- Display all basic operations (±, ×, ÷, //, %, **)
- Format output with 2 decimal places for floats

#### 2. **Advanced Math Section**

Using the `math` module, calculate:

- Square root of both numbers
- Absolute value of the difference
- The larger number raised to the power of the smaller
- Factorial of the first number (if it's a positive integer ≤ 10)

#### 3. **Geometry Section**

Ask for a radius and calculate:

- Area of a circle
- Circumference of a circle
- Volume of a sphere (4/3 × π × r³)
- Surface area of a sphere (4 × π × r²)

#### 4. **Random Number Section**

- Generate a random integer between 1 and 100
- Generate a random float between 0 and 1
- Simulate rolling two dice and show the total

#### 5. **Practical Calculations**

Create a mini-program that:

- Asks for a purchase price
- Asks for tax rate (as percentage, e.g., 8.5)
- Calculates tax amount
- Calculates total price
- Shows how much change from $100

### Code Requirements

- Use descriptive variable names
- Include comments for each section
- Use proper formatting (f-strings with appropriate decimal places)
- Import and use both `math` and `random` modules
- Handle at least one potential error (try-except)
- Include constants (like PI if not using math.pi)
- Display output in a visually organized way with separators

### Example Output

```text
═══════════════════════════════════════════════
     ADVANCED CALCULATOR WITH MATH FUNCTIONS
═══════════════════════════════════════════════

SECTION 1: BASIC OPERATIONS
─────────────────────────────────────────────
Enter first number: 12
Enter second number: 5

Results:
12.00 + 5.00 = 17.00
12.00 - 5.00 = 7.00
12.00 × 5.00 = 60.00
12.00 ÷ 5.00 = 2.40
12.00 // 5.00 = 2.00
12.00 % 5.00 = 2.00
12.00 ^ 5.00 = 248832.00

═══════════════════════════════════════════════
SECTION 2: ADVANCED MATH FUNCTIONS
─────────────────────────────────────────────
Square root of 12.00: 3.46
Square root of 5.00: 2.24
Absolute difference: 7.00
12.00 ^ 5.00 = 248832.00
Factorial of 12: Too large to calculate!

═══════════════════════════════════════════════
SECTION 3: GEOMETRY CALCULATIONS
─────────────────────────────────────────────
Enter radius: 7

Circle Properties:
Area: 153.94 square units
Circumference: 43.98 units

Sphere Properties:
Volume: 1436.76 cubic units
Surface Area: 615.75 square units

═══════════════════════════════════════════════
SECTION 4: RANDOM NUMBER GENERATION
─────────────────────────────────────────────
Random integer (1-100): 42
Random float (0-1): 0.7384
Dice Roll: 🎲 3 + 🎲 5 = 8

═══════════════════════════════════════════════
SECTION 5: SHOPPING CALCULATOR
─────────────────────────────────────────────
Enter purchase price: $45.99
Enter tax rate (%): 8.5

Purchase Price: $45.99
Tax (8.50%): $3.91
─────────────────────────────────────────────
Total: $49.90

Payment: $100.00
Change: $50.10

═══════════════════════════════════════════════
Thank you for using the Advanced Calculator!
═══════════════════════════════════════════════
```

### Bonus Challenges (Optional)

1. **BMI Calculator**: Add a section that calculates Body Mass Index
2. **Loan Calculator**: Calculate monthly payment given principal, rate, and term
3. **Distance Calculator**: Calculate distance between two points (x₁, y₁) and (x₂, y₂)
4. **Prime Number Check**: Determine if a number is prime
5. **Unit Converter**: Convert between different units (miles/km, pounds/kg, etc.)
6. **ASCII Art**: Include decorative ASCII art in your output

### Submission Guidelines

- File name: `advanced_calculator.py`
- Include detailed comments
- Test all sections thoroughly
- Handle edge cases (division by zero, negative radii, etc.)
- Format all output professionally
- Estimated time: 60-90 minutes

### Grading Criteria

- ✅ Basic operations section (4 points)
- ✅ Advanced math section (4 points)
- ✅ Geometry section (4 points)
- ✅ Random number section (3 points)
- ✅ Shopping calculator section (3 points)
- ✅ Proper formatting and organization (2 points)
- ✅ Comments and code quality (2 points)
- ✅ Error handling (2 points)
- ✅ Bonus challenges (up to 6 extra points)

**Total: 24 points (+ up to 6 bonus points)**

---

## Quick Reference

### Basic Operations

```python
+    # Addition
-    # Subtraction
*    # Multiplication
/    # Division (returns float)
//   # Floor division (returns int)
%    # Modulus (remainder)
**   # Exponentiation
```

### Important Functions

```python
abs(x)           # Absolute value
round(x, n)      # Round to n decimal places
int(x)           # Convert to integer
float(x)         # Convert to float
```

### Math Module

```python
import math
math.sqrt(x)     # Square root
math.ceil(x)     # Round up
math.floor(x)    # Round down
math.pi          # π constant
math.e           # e constant
```

### Random Module

```python
import random
random.randint(a, b)    # Random integer
random.random()         # Random float 0.0-1.0
random.uniform(a, b)    # Random float between a and b
```

---

## Summary

In this lesson, you learned:

- ✅ Integer operations and arithmetic
- ✅ Floating-point numbers and precision issues
- ✅ Division operators (/ vs //)
- ✅ Modulus operator and its practical uses
- ✅ Compound assignment operators
- ✅ Converting between number types
- ✅ Using the `math` module for advanced calculations
- ✅ Generating random numbers with `random` module
- ✅ Formatting numbers for display
- ✅ Order of operations (PEMDAS)
- ✅ Handling numeric user input

**You now have a solid foundation for working with numbers in Python!** These skills are essential for building calculators, games, data analysis tools, and much more.

In the next lesson, we'll dive deep into working with strings and text manipulation.

---

## Additional Resources

- **Python Math Module:** [https://docs.python.org/3/library/math.html](https://docs.python.org/3/library/math.html)
- **Python Random Module:** [https://docs.python.org/3/library/random.html](https://docs.python.org/3/library/random.html)
- **Float Precision:** [https://docs.python.org/3/tutorial/floatingpoint.html](https://docs.python.org/3/tutorial/floatingpoint.html)
- **Real Python - Numbers:** [https://realpython.com/python-numbers/](https://realpython.com/python-numbers/)

**Next lesson:** [Strings and String Methods](strings)
