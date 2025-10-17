# Arithmetic Operators

Arithmetic operators are used to perform mathematical operations in Python. They're essential for calculations, data processing, and solving problems. Let's explore all arithmetic operators in detail!

## Basic Arithmetic Operators

Python provides seven main arithmetic operators:

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| + | Addition | 5 + 3 | 8 |
| - | Subtraction | 5 - 3 | 2 |
| * | Multiplication | 5 * 3 | 15 |
| / | Division | 5 / 2 | 2.5 |
| // | Floor Division | 5 // 2 | 2 |
| % | Modulus | 5 % 2 | 1 |
| ** | Exponentiation | 5 ** 2 | 25 |

---

## Addition (+)

Adds two numbers together.

```python
# Basic addition
result = 5 + 3
print(result)  # 8

# Adding variables
a = 10
b = 20
total = a + b
print(total)  # 30

# Multiple additions
sum_total = 1 + 2 + 3 + 4 + 5
print(sum_total)  # 15

# Adding negative numbers
result = -5 + 10
print(result)  # 5

# Float addition
price1 = 19.99
price2 = 29.99
total = price1 + price2
print(total)  # 49.98
```

### Addition with Different Types

```python
# Integer + Float = Float
result = 5 + 2.5
print(result)  # 7.5
print(type(result))  # <class 'float'>

# Adding to zero (identity)
x = 42
result = x + 0
print(result)  # 42

# String concatenation (not arithmetic, but uses +)
greeting = "Hello" + " " + "World"
print(greeting)  # "Hello World"
```

---

## Subtraction (-)

Subtracts one number from another.

```python
# Basic subtraction
result = 10 - 3
print(result)  # 7

# Subtracting variables
balance = 1000
withdrawal = 250
new_balance = balance - withdrawal
print(new_balance)  # 750

# Negative result
result = 5 - 10
print(result)  # -5

# Multiple subtractions
result = 100 - 20 - 10 - 5
print(result)  # 65

# Subtracting floats
result = 10.5 - 3.2
print(result)  # 7.3
```

### Subtraction Use Cases

```python
# Calculate age
current_year = 2024
birth_year = 1990
age = current_year - birth_year
print(f"Age: {age}")  # Age: 34

# Calculate difference
score1 = 85
score2 = 92
difference = score2 - score1
print(f"Difference: {difference}")  # Difference: 7

# Temperature change
morning_temp = 15.5
evening_temp = 22.3
temp_change = evening_temp - morning_temp
print(f"Temperature increased by {temp_change}°C")
```

---

## Multiplication (*)

Multiplies two numbers.

```python
# Basic multiplication
result = 5 * 3
print(result)  # 15

# Multiplying variables
price = 19.99
quantity = 5
total = price * quantity
print(f"Total: ${total}")  # Total: $49.95

# Negative multiplication
result = -5 * 3
print(result)  # -15

result = -5 * -3
print(result)  # 15

# Multiple multiplications
result = 2 * 3 * 4
print(result)  # 24

# Multiplying by zero
result = 42 * 0
print(result)  # 0
```

### Multiplication Use Cases

```python
# Calculate area
length = 10
width = 5
area = length * width
print(f"Area: {area} square units")

# Convert units
miles = 5
km_per_mile = 1.60934
kilometers = miles * km_per_mile
print(f"{miles} miles = {kilometers} km")

# Calculate total cost with tax
price = 100
tax_rate = 1.08  # 8% tax
total_with_tax = price * tax_rate
print(f"Total with tax: ${total_with_tax}")

# String repetition (not arithmetic, but uses *)
separator = "=" * 50
print(separator)  # ==================================================
```

---

## Division (/)

Divides one number by another. **Always returns a float**, even if the result is a whole number.

```python
# Basic division
result = 10 / 2
print(result)  # 5.0 (notice the .0)
print(type(result))  # <class 'float'>

# Division with remainder
result = 10 / 3
print(result)  # 3.3333333333333335

# Dividing integers returns float
result = 15 / 5
print(result)  # 3.0 (not 3!)

# Negative division
result = -10 / 2
print(result)  # -5.0

result = 10 / -2
print(result)  # -5.0

result = -10 / -2
print(result)  # 5.0
```

### Division by Zero

```python
# This will cause an error!
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")

# Always check before dividing
divisor = 0
if divisor != 0:
    result = 10 / divisor
else:
    print("Cannot divide by zero")
```

### Division Use Cases

```python
# Calculate average
total_score = 450
num_tests = 5
average = total_score / num_tests
print(f"Average: {average}")  # Average: 90.0

# Split bill evenly
total_bill = 120.50
num_people = 4
per_person = total_bill / num_people
print(f"Each person pays: ${per_person:.2f}")

# Convert to percentage
correct = 85
total = 100
percentage = (correct / total) * 100
print(f"Score: {percentage}%")
```

---

## Floor Division (//)

Divides and rounds down to the nearest integer. Returns an integer if both operands are integers.

```python
# Basic floor division
result = 10 // 3
print(result)  # 3 (not 3.333...)

result = 15 // 4
print(result)  # 3 (not 3.75)

# Exact division still returns integer
result = 10 // 2
print(result)  # 5

# Float operands return float
result = 10.0 // 3
print(result)  # 3.0

result = 10 // 3.0
print(result)  # 3.0
```

### Floor Division Behavior

```python
# Positive numbers (rounds down)
print(7 // 2)   # 3
print(8 // 3)   # 2
print(10 // 4)  # 2

# Negative numbers (rounds DOWN, not toward zero!)
print(-7 // 2)   # -4 (not -3!)
print(-8 // 3)   # -3 (not -2!)
print(7 // -2)   # -4
print(-7 // -2)  # 3
```

### Floor Division Use Cases

```python
# Distribute items evenly
total_items = 47
boxes = 5
items_per_box = total_items // boxes
print(f"Each box gets: {items_per_box} items")  # 9 items
leftover = total_items % boxes
print(f"Leftover: {leftover} items")  # 2 items

# Convert minutes to hours
total_minutes = 125
hours = total_minutes // 60
minutes = total_minutes % 60
print(f"{total_minutes} minutes = {hours} hours and {minutes} minutes")
# 125 minutes = 2 hours and 5 minutes

# Page calculation
total_items = 100
items_per_page = 15
pages_needed = total_items // items_per_page
if total_items % items_per_page != 0:
    pages_needed += 1
print(f"Pages needed: {pages_needed}")  # 7 pages
```

---

## Modulus (%)

Returns the remainder of division. Very useful for checking divisibility and cycling.

```python
# Basic modulus
result = 10 % 3
print(result)  # 1 (10 = 3*3 + 1)

result = 15 % 4
print(result)  # 3 (15 = 4*3 + 3)

# No remainder
result = 15 % 5
print(result)  # 0 (evenly divisible)

# Negative numbers
result = -10 % 3
print(result)  # 2

result = 10 % -3
print(result)  # -2
```

### Modulus Use Cases

#### Check Even or Odd

```python
number = 42

if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")
```

#### Check Divisibility

```python
number = 15

if number % 3 == 0:
    print(f"{number} is divisible by 3")

if number % 5 == 0:
    print(f"{number} is divisible by 5")

# Check if prime (simplified)
def is_prime(n):
    """Check if number is prime (basic version)."""
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print(is_prime(17))  # True
print(is_prime(15))  # False
```

#### Cycling/Wrapping Values

```python
# Day of week (0-6)
day = 8  # Monday next week
day_of_week = day % 7
print(f"Day of week: {day_of_week}")  # 1 (Monday)

# Clock hours (12-hour format)
hour = 14  # 2 PM in 24-hour
hour_12 = hour % 12
if hour_12 == 0:
    hour_12 = 12
print(f"12-hour format: {hour_12}")  # 2

# Array index wrapping
items = ["A", "B", "C", "D"]
index = 10
wrapped_index = index % len(items)
print(items[wrapped_index])  # "C" (index 2)
```

#### Get Last Digit

```python
number = 12345
last_digit = number % 10
print(f"Last digit: {last_digit}")  # 5

# Get last two digits
last_two = number % 100
print(f"Last two digits: {last_two}")  # 45
```

---

## Exponentiation (**)

Raises a number to a power.

```python
# Basic exponentiation
result = 2 ** 3
print(result)  # 8 (2 × 2 × 2)

result = 5 ** 2
print(result)  # 25 (5 × 5)

# Square root (using fractional exponent)
result = 16 ** 0.5
print(result)  # 4.0

# Cube root
result = 27 ** (1/3)
print(result)  # 3.0

# Negative exponent (reciprocal)
result = 2 ** -3
print(result)  # 0.125 (1/8)

# Zero exponent
result = 5 ** 0
print(result)  # 1 (any number to power 0 is 1)
```

### Exponentiation Use Cases

```python
# Calculate area of square
side = 5
area = side ** 2
print(f"Area: {area} square units")  # 25

# Calculate volume of cube
side = 3
volume = side ** 3
print(f"Volume: {volume} cubic units")  # 27

# Compound interest
principal = 1000
rate = 0.05  # 5% annual interest
years = 10
amount = principal * (1 + rate) ** years
print(f"Amount after {years} years: ${amount:.2f}")

# Scientific calculations
speed_of_light = 3 * (10 ** 8)  # 3 × 10^8 m/s
print(f"Speed of light: {speed_of_light} m/s")

# Population growth
initial_population = 1000
growth_rate = 1.05  # 5% growth per year
years = 5
future_population = initial_population * (growth_rate ** years)
print(f"Population after {years} years: {future_population:.0f}")
```

---

## Operator Precedence

Python follows mathematical order of operations (PEMDAS):

1. **P**arentheses `()`
2. **E**xponents `**`
3. **M**ultiplication `*`, **D**ivision `/`, Floor Division `//`, **M**odulus `%` (left to right)
4. **A**ddition `+`, **S**ubtraction `-` (left to right)

```python
# Without parentheses
result = 2 + 3 * 4
print(result)  # 14 (not 20!)
# Order: 3 * 4 = 12, then 2 + 12 = 14

# With parentheses
result = (2 + 3) * 4
print(result)  # 20
# Order: (2 + 3) = 5, then 5 * 4 = 20

# Complex example
result = 2 + 3 * 4 ** 2 / 2 - 1
# Step 1: 4 ** 2 = 16
# Step 2: 3 * 16 = 48
# Step 3: 48 / 2 = 24.0
# Step 4: 2 + 24.0 = 26.0
# Step 5: 26.0 - 1 = 25.0
print(result)  # 25.0

# Always use parentheses for clarity!
result = 2 + ((3 * (4 ** 2)) / 2) - 1
print(result)  # 25.0 (same result, more readable)
```

### Precedence Examples

```python
# Multiplication before addition
print(5 + 2 * 3)      # 11 (not 21)

# Division before subtraction
print(10 - 8 / 4)     # 8.0 (not 0.5)

# Exponentiation before multiplication
print(2 * 3 ** 2)     # 18 (not 36)

# Left-to-right for same precedence
print(10 / 5 * 2)     # 4.0 (not 1.0)
print(10 - 5 + 2)     # 7 (not 3)

# Use parentheses to override
print((5 + 2) * 3)    # 21
print(10 - (8 / 4))   # 8.0
print((2 * 3) ** 2)   # 36
print(10 / (5 * 2))   # 1.0
```

---

## Combining Operators

### Chaining Operations

```python
# Multiple operations
total = 10 + 5 - 3 * 2
print(total)  # 9
# Order: 3 * 2 = 6, 10 + 5 = 15, 15 - 6 = 9

# Complex calculation
result = (100 + 50) * 2 / 3 ** 2
print(result)  # 33.333...
# Order: (100 + 50) = 150, 3 ** 2 = 9, 150 * 2 = 300, 300 / 9 = 33.333...
```

### Real-World Formula

```python
# Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a
a = 1
b = -5
c = 6

discriminant = b ** 2 - 4 * a * c
x1 = (-b + discriminant ** 0.5) / (2 * a)
x2 = (-b - discriminant ** 0.5) / (2 * a)

print(f"Solutions: x1 = {x1}, x2 = {x2}")  # Solutions: x1 = 3.0, x2 = 2.0

# Distance formula: d = √((x2 - x1)² + (y2 - y1)²)
x1, y1 = 0, 0
x2, y2 = 3, 4
distance = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
print(f"Distance: {distance}")  # Distance: 5.0

# BMI formula: BMI = weight(kg) / height(m)²
weight = 70  # kg
height = 1.75  # meters
bmi = weight / height ** 2
print(f"BMI: {bmi:.2f}")  # BMI: 22.86
```

---

## Unary Operators

Operators that work with a single operand.

### Unary Plus (+)

```python
# Doesn't change the value (rarely used)
x = 5
result = +x
print(result)  # 5
```

### Unary Minus (-)

```python
# Negates the value
x = 5
result = -x
print(result)  # -5

# Double negative
x = -5
result = -x
print(result)  # 5

# In expressions
result = -3 + 5
print(result)  # 2
```

---

## Common Pitfalls and Tips

### Pitfall 1: Integer Division in Python 2 vs 3

```python
# Python 3 (current)
print(5 / 2)   # 2.5 (float division)
print(5 // 2)  # 2 (floor division)

# Python 2 (old) - don't use this anymore!
# 5 / 2 would give 2, not 2.5!
```

### Pitfall 2: Float Precision

```python
# Floats aren't always exact
result = 0.1 + 0.2
print(result)  # 0.30000000000000004 (not exactly 0.3!)

# Solution: round for display
print(f"{result:.2f}")  # 0.30

# Or use decimal module for precision
from decimal import Decimal
result = Decimal('0.1') + Decimal('0.2')
print(result)  # 0.3 (exact!)
```

### Pitfall 3: Division by Zero

```python
# Always check before dividing
divisor = 0
if divisor != 0:
    result = 10 / divisor
else:
    print("Cannot divide by zero")
    result = None
```

### Pitfall 4: Operator Precedence

```python
# Wrong assumption
result = 5 + 3 * 2
print(result)  # 11 (not 16!)

# Use parentheses for clarity
result = (5 + 3) * 2
print(result)  # 16
```

---

## Classwork

Practice arithmetic operators!

### Exercise 1: Basic Operations

Create a file called `basic_arithmetic.py`:

```python
"""
Practice basic arithmetic operations.
"""

# Define two numbers
a = 15
b = 4

# Perform all operations
print("=" * 50)
print("ARITHMETIC OPERATIONS")
print("=" * 50)
print(f"a = {a}, b = {b}\n")

print(f"Addition:        {a} + {b} = {a + b}")
print(f"Subtraction:     {a} - {b} = {a - b}")
print(f"Multiplication:  {a} × {b} = {a * b}")
print(f"Division:        {a} / {b} = {a / b:.2f}")
print(f"Floor Division:  {a} // {b} = {a // b}")
print(f"Modulus:         {a} % {b} = {a % b}")
print(f"Exponentiation:  {a} ** {b} = {a ** b}")
print("=" * 50)
```

### Exercise 2: Calculator

Create a file called `simple_calc.py`:

```python
"""
Interactive calculator using arithmetic operators.
"""

# Get input from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform calculations
print("\nResults:")
print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} × {num2} = {num1 * num2}")

# Check for division by zero
if num2 != 0:
    print(f"{num1} / {num2} = {num1 / num2:.2f}")
    print(f"{num1} // {num2} = {num1 // num2}")
    print(f"{num1} % {num2} = {num1 % num2}")
else:
    print("Cannot divide by zero!")

print(f"{num1} ** {num2} = {num1 ** num2}")
```

### Exercise 3: Even or Odd

Create a file called `even_odd.py`:

```python
"""
Check if numbers are even or odd using modulus operator.
"""

# Get number from user
number = int(input("Enter a number: "))

# Check using modulus
if number % 2 == 0:
    print(f"{number} is EVEN")
else:
    print(f"{number} is ODD")

# Show calculation
remainder = number % 2
print(f"\n{number} ÷ 2 = {number // 2} remainder {remainder}")
```

### Exercise 4: Time Converter

Create a file called `time_converter.py`:

```python
"""
Convert seconds to hours, minutes, and seconds.
"""

# Get total seconds
total_seconds = int(input("Enter number of seconds: "))

# Calculate hours, minutes, seconds using // and %
hours = total_seconds // 3600
remaining = total_seconds % 3600
minutes = remaining // 60
seconds = remaining % 60

# Display result
print(f"\n{total_seconds} seconds equals:")
print(f"{hours} hours, {minutes} minutes, and {seconds} seconds")

# Alternative format
print(f"Time: {hours:02d}:{minutes:02d}:{seconds:02d}")
```

---

## Assignment

### Project: Multi-Function Calculator

Create a comprehensive calculator program called `multi_calculator.py` that demonstrates mastery of arithmetic operators.

### Requirements

Your program should include:

#### 1. **Basic Calculator**

- Get two numbers from user
- Display all seven arithmetic operations
- Handle division by zero
- Format output professionally

#### 2. **Scientific Calculator**

- Square root (x ** 0.5)
- Cube root (x ** (1/3))
- Powers (any base and exponent)
- Absolute value
- Percentage calculations

#### 3. **Geometry Calculator**

Calculate:

- Circle (area and circumference from radius)
- Rectangle (area and perimeter from length/width)
- Triangle (area from base/height)
- Cube (volume and surface area from side)
- Sphere (volume and surface area from radius)

#### 4. **Finance Calculator**

- Simple interest
- Compound interest
- Loan payment calculation
- Tip calculator
- Split bill calculator

#### 5. **Unit Converters**

- Temperature (Celsius ↔ Fahrenheit ↔ Kelvin)
- Distance (miles ↔ kilometers)
- Weight (pounds ↔ kilograms)
- Time (seconds ↔ minutes ↔ hours)

#### 6. **Number Properties**

- Check even/odd
- Check if prime
- Calculate factorial
- Find GCD (Greatest Common Divisor)
- List divisors

#### 7. **Real-World Problems**

- BMI calculator
- Age calculator (from birth year)
- Gas mileage calculator
- Grade average calculator
- Discount calculator

### Code Requirements

- Use ALL seven arithmetic operators
- Demonstrate operator precedence
- Include error handling (division by zero, negative roots, etc.)
- Use functions to organize code
- Include comments and docstrings
- Professional formatted output
- Input validation
- Menu system for different calculators

### Example Output

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║           MULTI-FUNCTION CALCULATOR              ║
║                                                  ║
╚══════════════════════════════════════════════════╝

MAIN MENU:
1. Basic Calculator
2. Scientific Calculator
3. Geometry Calculator
4. Finance Calculator
5. Unit Converters
6. Number Properties
7. Real-World Problems
8. Exit

Enter your choice (1-8): 3

════════════════════════════════════════════════════
           GEOMETRY CALCULATOR
════════════════════════════════════════════════════

1. Circle
2. Rectangle
3. Triangle
4. Cube
5. Sphere
6. Back to Main Menu

Enter choice (1-6): 1

────────────────────────────────────────────────────
CIRCLE CALCULATOR
────────────────────────────────────────────────────

Enter radius: 5

Calculations:
────────────────────────────────────────────────────
Radius:           5.00 units
Diameter:         10.00 units
Circumference:    31.42 units
Area:             78.54 square units

Formula Used:
  Circumference = 2 × π × r
  Area = π × r²

Press Enter to continue...
```

### Bonus Challenges (Optional)

1. **Expression Evaluator**: Let users enter expressions like "5 + 3 * 2"
2. **History**: Keep track of calculations in the session
3. **Save Results**: Write results to a file
4. **Graphing**: Show visual representation (ASCII art bar chart)
5. **Statistics**: Mean, median, mode from list of numbers
6. **Matrix Operations**: Add/multiply 2×2 matrices
7. **Roman Numeral**: Convert decimal to Roman numerals
8. **Binary Calculator**: Operations in binary

### Submission Guidelines

- File name: `multi_calculator.py`
- Must include all 7 calculator sections
- Professional menu system
- Complete error handling
- Well-organized with functions
- Comments and docstrings
- Test all features thoroughly
- Estimated time: 120-150 minutes

### Grading Criteria

- ✅ Basic calculator (5 points)
- ✅ Scientific calculator (8 points)
- ✅ Geometry calculator (10 points)
- ✅ Finance calculator (10 points)
- ✅ Unit converters (8 points)
- ✅ Number properties (8 points)
- ✅ Real-world problems (8 points)
- ✅ Error handling (8 points)
- ✅ Code organization and functions (8 points)
- ✅ Menu system (5 points)
- ✅ Output formatting (5 points)
- ✅ Comments and documentation (5 points)
- ✅ Input validation (5 points)
- ✅ Bonus challenges (up to 8 extra points)

**Total: 93 points (+ up to 8 bonus points)**

---

## Quick Reference

### Arithmetic Operators

```python
+    # Addition
-    # Subtraction
*    # Multiplication
/    # Division (returns float)
//   # Floor division (rounds down)
%    # Modulus (remainder)
**   # Exponentiation (power)
```

### Common Patterns

```python
# Even/odd check
number % 2 == 0  # Even if True

# Divisibility check
number % divisor == 0

# Last digit
number % 10

# Swap values
a, b = b, a

# Average
average = sum / count

# Percentage
percentage = (part / total) * 100
```

---

## Summary

In this lesson, you learned:

- ✅ All seven arithmetic operators (+, -, *, /, //, %, **)
- ✅ How each operator works with examples
- ✅ Difference between `/` and `//`
- ✅ Practical uses of modulus operator
- ✅ Exponentiation for powers and roots
- ✅ Operator precedence (PEMDAS)
- ✅ Combining operators in expressions
- ✅ Unary operators (+ and -)
- ✅ Common pitfalls and how to avoid them
- ✅ Real-world applications of arithmetic operators

**You now have a solid understanding of arithmetic operations in Python!** These operators are the foundation for mathematical calculations, data processing, and problem-solving.

In the next lesson, we'll learn about comparison operators for comparing values.

---

## Additional Resources

- **Python Operators:** [https://docs.python.org/3/library/operator.html](https://docs.python.org/3/library/operator.html)
- **Operator Precedence:** [https://docs.python.org/3/reference/expressions.html#operator-precedence](https://docs.python.org/3/reference/expressions.html#operator-precedence)
- **Real Python - Operators:** [https://realpython.com/python-operators-expressions/](https://realpython.com/python-operators-expressions/)

**Next lesson:** [Comparison Operators](comparison-operators)
