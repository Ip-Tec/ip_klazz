# If, Elif, and Else Statements

## Introduction

Conditional statements allow your code to make decisions and perform different actions based on different conditions. They are the foundation of programming logic. In Python, we use `if`, `elif` (else if), and `else` statements to control the flow of our programs.

---

## The `if` Statement

The `if` statement is used to execute code only if a condition is `True`.

### Syntax

```python
if condition:
    # Code to execute if condition is True
```

### Key Points

- The condition must be a **boolean expression** (something that evaluates to `True` or `False`)
- The colon (`:`) is required after the condition
- The code block must be **indented** (typically 4 spaces)
- Indentation is **mandatory** in Python

### Example

```python
age = 18

if age >= 18:
    print("You are an adult")
```

**Output:** `You are an adult`

### More Examples

```python
score = 85

if score > 80:
    print("Great job! You passed with flying colors!")
```

```python
name = "Alice"

if name == "Alice":
    print("Hello, Alice!")
```

---

## The `else` Statement

The `else` statement is used to execute code when the `if` condition is `False`.

### Syntax

```python
if condition:
    # Code to execute if condition is True
else:
    # Code to execute if condition is False
```

### Example

```python
age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")
```

**Output:** `You are a minor`

### More Examples

```python
number = 10

if number % 2 == 0:
    print("The number is even")
else:
    print("The number is odd")
```

```python
is_raining = False

if is_raining:
    print("Bring an umbrella")
else:
    print("Enjoy the sunshine!")
```

---

## The `elif` Statement

The `elif` statement (short for "else if") allows you to check multiple conditions. Use `elif` when you have more than two possible outcomes.

### Syntax

```python
if condition1:
    # Code if condition1 is True
elif condition2:
    # Code if condition1 is False and condition2 is True
elif condition3:
    # Code if condition1 and condition2 are False, and condition3 is True
else:
    # Code if all conditions are False
```

### Key Points

- You can have as many `elif` blocks as you need
- Only the first condition that evaluates to `True` will execute
- The `else` block is optional

### Example

```python
score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")
```

**Output:** `Grade: C`

### More Examples

```python
time = 14

if time < 12:
    print("Good morning!")
elif time < 18:
    print("Good afternoon!")
else:
    print("Good evening!")
```

**Output:** `Good afternoon!`

---

## Comparison Operators

Conditional statements rely on comparison operators to create conditions. Here are the most common ones:

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal to | `x == 5` |
| `!=` | Not equal to | `x != 5` |
| `>` | Greater than | `x > 5` |
| `<` | Less than | `x < 5` |
| `>=` | Greater than or equal to | `x >= 5` |
| `<=` | Less than or equal to | `x <= 5` |

### Examples

```python
x = 10

print(x == 10)  # True
print(x != 5)   # True
print(x > 8)    # True
print(x < 15)   # True
print(x >= 10)  # True
print(x <= 9)   # False
```

---

## Logical Operators

You can combine multiple conditions using logical operators: `and`, `or`, and `not`.

### The `and` Operator

All conditions must be `True` for the statement to be `True`.

```python
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive")
else:
    print("You cannot drive")
```

**Output:** `You can drive`

### The `or` Operator

At least one condition must be `True` for the statement to be `True`.

```python
day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
else:
    print("It's a weekday")
```

**Output:** `It's the weekend!`

### The `not` Operator

Reverses the boolean value—`True` becomes `False`, and vice versa.

```python
is_raining = False

if not is_raining:
    print("No rain today!")
else:
    print("It's raining")
```

**Output:** `No rain today!`

---

## Nested Conditionals

You can place conditional statements inside other conditional statements.

```python
age = 20
has_money = True

if age >= 18:
    if has_money:
        print("You can buy a ticket")
    else:
        print("You are old enough, but you need money")
else:
    print("You are too young")
```

**Output:** `You can buy a ticket`

---

## Practical Examples

### Example 1: Temperature Check

```python
temperature = 25

if temperature < 0:
    print("It's freezing!")
elif temperature < 15:
    print("It's cold")
elif temperature < 25:
    print("It's cool")
elif temperature < 35:
    print("It's warm")
else:
    print("It's hot!")
```

**Output:** `It's warm`

### Example 2: Login System

```python
username = "john123"
password = "secret123"
entered_username = "john123"
entered_password = "secret123"

if entered_username == username and entered_password == password:
    print("Login successful!")
elif entered_username == username:
    print("Wrong password")
else:
    print("Username not found")
```

**Output:** `Login successful!`

### Example 3: Simple Calculator

```python
num1 = 10
num2 = 5
operation = "add"

if operation == "add":
    print(num1 + num2)
elif operation == "subtract":
    print(num1 - num2)
elif operation == "multiply":
    print(num1 * num2)
elif operation == "divide":
    if num2 != 0:
        print(num1 / num2)
    else:
        print("Cannot divide by zero")
else:
    print("Unknown operation")
```

**Output:** `15`

---

## Common Mistakes

### 1. Forgetting the Colon

```python
# ❌ Wrong
if age >= 18
    print("Adult")

# ✅ Correct
if age >= 18:
    print("Adult")
```

### 2. Incorrect Indentation

```python
# ❌ Wrong
if age >= 18:
print("Adult")  # Not indented

# ✅ Correct
if age >= 18:
    print("Adult")  # Properly indented
```

### 3. Using Assignment Instead of Comparison

```python
# ❌ Wrong
if age = 18:  # This assigns, not compares
    print("Adult")

# ✅ Correct
if age == 18:  # This compares
    print("Adult")
```

### 4. Not Using `elif` or `else` Unnecessarily

```python
# ❌ Less efficient
if score >= 90:
    grade = "A"
if score < 90:
    grade = "B"

# ✅ Better
if score >= 90:
    grade = "A"
else:
    grade = "B"
```

---

## Summary

- **`if`** executes code if a condition is `True`
- **`else`** executes code if the `if` condition is `False`
- **`elif`** checks multiple conditions in sequence
- Use **comparison operators** (`==`, `!=`, `>`, `<`, `>=`, `<=`) to create conditions
- Use **logical operators** (`and`, `or`, `not`) to combine conditions
- Always remember the **colon** (`:`) and proper **indentation**
- Only the first `True` condition executes; the rest are skipped

---

## Practice Exercises

1. Write a program that checks if a number is positive, negative, or zero.
2. Create a program that determines if a year is a leap year.
3. Build a simple grading system that takes a percentage and outputs a letter grade.
4. Write a program that checks if a password is strong (has uppercase, lowercase, and numbers).
5. Create a program that simulates a simple quiz with conditional feedback.

---

## Solutions

```python
# Exercise 1: Positive, Negative, or Zero
number = 10

if number > 0:
    print("Positive")
elif number < 0:
    print("Negative")
else:
    print("Zero")

# Exercise 2: Leap Year Check
year = 2024

if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print("Leap Year")
else:
    print("Not a Leap Year")

# Exercise 3: Grading System
percentage = [85,  92, 78, 65, 45]

for score in percentage:
    if score >= 90:
        print(f"{score}: A")
    elif score >= 80:
        print(f"{score}: B")
    elif score >= 70:
        print(f"{score}: C")
    elif score >= 60:
        print(f"{score}: D")
    else:
        print(f"{score}: F")

# Exercise 4: Password Strength
password = "Password123"

has_upper = any(char.isupper() for char in password)
has_lower = any(char.islower() for char in password)
has_digit = any(char.isdigit() for char in password)

if has_upper and has_lower and has_digit and len(password) >= 8:
    print("Strong Password")
else:
    print("Weak Password")

# Exercise 5: Simple Quiz
question = "What is the capital of France?"
answer = "Paris"
user_answer = input(question + " ")

if user_answer.lower() == answer.lower():
    print("Correct!")
else:
    print(f"Incorrect. The answer is {answer}.")

```

**Next lesson:** [Comments and Documentation](boolean-logic)
