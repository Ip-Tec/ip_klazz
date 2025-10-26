# While Loops

While loops allow you to repeat code as long as a condition is true. They're essential for creating programs that need to perform repetitive tasks until a specific condition is met.

## Basic While Loop

### Syntax

```python
while condition:
    # Code to repeat
    statement1
    statement2
```

The loop continues while the condition is 'True' and stops when it becomes 'False'.

### Simple Examples

```python
# Count from 1 to 5
count = 1
while count <= 5:
    print(count)
    count += 1

# Countdown
countdown = 5
while countdown > 0:
    print(countdown)
    countdown -= 1
print("Blast off!")

# Sum numbers
total = 0
number = 1
while number <= 10:
    total += number
    number += 1
print(f"Sum: {total}")
```

---

## Loop Conditions

The condition is checked before each iteration.

```python
# Loop until user enters "quit"
command = ""
while command != "quit":
    command = input("Enter command (quit to exit): ")
    print(f"You entered: {command}")

# Loop until valid input
age = -1
while age < 0 or age > 120:
    age = int(input("Enter age (0-120): "))

# Loop while balance is positive
balance = 100
while balance > 0:
    withdrawal = int(input("Withdrawal amount: "))
    balance -= withdrawal
    print(f"Balance: ${balance}")
```

---

## Infinite Loops

A loop that never ends because the condition never becomes false.

### Accidental Infinite Loops

```python
# Wrong - infinite loop (forgot to update count)
# count = 1
# while count <= 5:
#     print(count)
#     # Missing: count += 1

# Wrong - condition always true
# while True:
#     print("This will run forever!")
```

### Intentional Infinite Loops

```python
# Intentional infinite loop with break
while True:
    user_input = input("Enter 'quit' to exit: ")
    if user_input == "quit":
        break
    print(f"You entered: {user_input}")

# Main game loop
while True:
    choice = input("1. Play 2. Quit: ")
    if choice == "2":
        break
    print("Playing game...")
```

---

## Loop Control Statements

### break - Exit Loop Early

```python
# Break out of loop
count = 1
while count <= 10:
    if count == 5:
        break  # Exit loop when count is 5
    print(count)
    count += 1

# Find first even number
number = 1
while True:
    if number % 2 == 0:
        print(f"First even: {number}")
        break
    number += 1

# Search in list
numbers = [1, 3, 5, 7, 9, 10, 11]
target = 10
index = 0
while index < len(numbers):
    if numbers[index] == target:
        print(f"Found {target} at index {index}")
        break
    index += 1
```

### continue - Skip to Next Iteration

```python
# Skip odd numbers
count = 0
while count < 10:
    count += 1
    if count % 2 != 0:
        continue  # Skip odd numbers
    print(count)

# Skip invalid input
while True:
    value = input("Enter positive number (0 to quit): ")
    number = int(value)
    if number == 0:
        break
    if number < 0:
        print("Invalid! Must be positive")
        continue  # Skip to next iteration
    print(f"You entered: {number}")
```

---

## Common While Loop Patterns

### Counter Pattern

```python
# Count up
counter = 1
while counter <= 5:
    print(f"Count: {counter}")
    counter += 1

# Count down
counter = 5
while counter > 0:
    print(f"Count: {counter}")
    counter -= 1
```

### Accumulator Pattern

```python
# Sum accumulator
total = 0
number = 1
while number <= 5:
    total += number
    number += 1
print(f"Sum: {total}")

# Product accumulator
product = 1
number = 1
while number <= 5:
    product *= number
    number += 1
print(f"Product: {product}")
```

### Sentinel Pattern

```python
# Loop until sentinel value
total = 0
while True:
    number = int(input("Enter number (-1 to stop): "))
    if number == -1:
        break
    total += number
print(f"Total: {total}")

# Process input until empty
while True:
    text = input("Enter text (empty to stop): ")
    if not text:
        break
    print(f"You entered: {text}")
```

### Validation Pattern

```python
# Validate input
password = ""
while len(password) < 8:
    password = input("Enter password (8+ chars): ")
    if len(password) < 8:
        print("Too short!")

# Validate range
age = -1
while not (0 <= age <= 120):
    age = int(input("Enter age (0-120): "))
    if age < 0 or age > 120:
        print("Invalid age!")
```

---

## Nested While Loops

```python
# Multiplication table
row = 1
while row <= 3:
    col = 1
    while col <= 3:
        print(f"{row} × {col} = {row * col}")
        col += 1
    row += 1

# Pattern printing
i = 1
while i <= 5:
    j = 1
    while j <= i:
        print("*", end="")
        j += 1
    print()  # New line
    i += 1
```

---

## While with else

The 'else' block executes when the loop completes normally (not via 'break').

```python
# Search with else
numbers = [1, 3, 5, 7, 9]
target = 6
index = 0
while index < len(numbers):
    if numbers[index] == target:
        print(f"Found {target}")
        break
    index += 1
else:
    print(f"{target} not found")

# Countdown with else
count = 5
while count > 0:
    print(count)
    count -= 1
else:
    print("Countdown complete!")
```

---

## Practical Examples

### Menu System

```python
while True:
    print("\n=== MENU ===")
    print("1. Option 1")
    print("2. Option 2")
    print("3. Exit")
    
    choice = input("Choose: ")
    
    if choice == "1":
        print("Option 1 selected")
    elif choice == "2":
        print("Option 2 selected")
    elif choice == "3":
        print("Goodbye!")
        break
    else:
        print("Invalid choice")
```

### Guessing Game

```python
import random

secret = random.randint(1, 10)
attempts = 0

while True:
    attempts += 1
    guess = int(input("Guess (1-10): "))
    
    if guess == secret:
        print(f"Correct! Took {attempts} attempts")
        break
    elif guess < secret:
        print("Too low!")
    else:
        print("Too high!")
```

### Password System

```python
MAX_ATTEMPTS = 3
attempts = 0
correct_password = "secret123"

while attempts < MAX_ATTEMPTS:
    password = input("Enter password: ")
    if password == correct_password:
        print("Access granted!")
        break
    attempts += 1
    remaining = MAX_ATTEMPTS - attempts
    print(f"Wrong! {remaining} attempts left")
else:
    print("Account locked!")
```

---

## Common Mistakes

### Mistake 1: Forgetting to Update Loop Variable

```python
# Wrong - infinite loop
# count = 1
# while count <= 5:
#     print(count)
#     # Forgot: count += 1

# Correct
count = 1
while count <= 5:
    print(count)
    count += 1
```

### Mistake 2: Off-by-One Errors

```python
# Wrong - runs 11 times (0-10)
count = 0
while count <= 10:
    print(count)
    count += 1

# Correct - runs 10 times (0-9)
count = 0
while count < 10:
    print(count)
    count += 1
```

### Mistake 3: Wrong Condition

```python
# Wrong - never runs
count = 10
while count < 5:
    print(count)

# Correct
count = 0
while count < 5:
    print(count)
    count += 1
```

---

## Classwork

### Exercise 1: Basic While Loop

Create 'while_basics.py':

```python
"""Practice basic while loops."""

# Count to 10
print("Count to 10:")
count = 1
while count <= 10:
    print(count, end=" ")
    count += 1
print()

# Sum first 10 numbers
total = 0
num = 1
while num <= 10:
    total += num
    num += 1
print(f"Sum of 1-10: {total}")

# Factorial
n = 5
factorial = 1
current = 1
while current <= n:
    factorial *= current
    current += 1
print(f"{n}! = {factorial}")
```

### Exercise 2: User Input Loop

Create 'input_loop.py':

```python
"""Loop with user input validation."""

# Get positive number
number = -1
while number <= 0:
    number = int(input("Enter positive number: "))
    if number <= 0:
        print("Must be positive!")

print(f"You entered: {number}")

# Calculate average
total = 0
count = 0
while True:
    value = input("Enter number (-1 to stop): ")
    num = float(value)
    if num == -1:
        break
    total += num
    count += 1

if count > 0:
    print(f"Average: {total / count:.2f}")
```

### Exercise 3: Number Guessing Game

Create 'guessing_game.py':

```python
"""Number guessing game."""
import random

secret = random.randint(1, 100)
attempts = 0
max_attempts = 10

print("Guess the number (1-100)!")

while attempts < max_attempts:
    attempts += 1
    remaining = max_attempts - attempts + 1
    
    guess = int(input(f"Attempt {attempts}/{max_attempts}: "))
    
    if guess == secret:
        print(f"Correct! Took {attempts} attempts")
        break
    elif guess < secret:
        print(f"Too low! {remaining} attempts left")
    else:
        print(f"Too high! {remaining} attempts left")
else:
    print(f"Game over! Number was {secret}")
```

### Exercise 4: ATM Simulator

Create 'atm_simulator.py':

```python
"""Simple ATM simulator."""

balance = 1000.00

while True:
    print("\n=== ATM ===")
    print(f"Balance: ${balance:.2f}")
    print("1. Deposit")
    print("2. Withdraw")
    print("3. Exit")
    
    choice = input("Choose: ")
    
    if choice == "1":
        amount = float(input("Deposit amount: $"))
        if amount > 0:
            balance += amount
            print(f"Deposited ${amount:.2f}")
    elif choice == "2":
        amount = float(input("Withdraw amount: $"))
        if amount > balance:
            print("Insufficient funds!")
        elif amount <= 0:
            print("Invalid amount!")
        else:
            balance -= amount
            print(f"Withdrew ${amount:.2f}")
    elif choice == "3":
        print("Thank you!")
        break
    else:
        print("Invalid choice!")
```

---

## Assignment

### Project: Interactive Programs Suite

Create 'interactive_programs.py' with a menu system containing 5 programs that use while loops.

### Requirements

#### 1. **Calculator Loop**

- Perform operations until user quits
- Support +, -, *, /
- Handle division by zero
- Keep running total

#### 2. **Password Manager**

- Set password with validation
- Login system with 3 attempts
- Change password option
- Lock after failed attempts

#### 3. **Shopping Cart**

- Add items with prices
- Remove items
- View cart and total
- Checkout option
- Clear cart option

#### 4. **Quiz Game**

- Multiple choice questions
- Track score
- Show results at end
- Option to retry

#### 5. **Number Statistics**

- Accept numbers from user
- Calculate min, max, average
- Count of numbers
- Stop on sentinel value

### Code Requirements

- Use while loops appropriately
- Include break and continue
- Input validation
- Error handling
- Menu systems
- Clear output formatting
- Comments and docstrings

### Grading Criteria

- ✅ Calculator loop (20 points)
- ✅ Password manager (20 points)
- ✅ Shopping cart (20 points)
- ✅ Quiz game (20 points)
- ✅ Number statistics (20 points)
- ✅ While loop usage (15 points)
- ✅ Break/continue usage (10 points)
- ✅ Input validation (10 points)
- ✅ Error handling (10 points)
- ✅ Code organization (10 points)
- ✅ Comments/documentation (5 points)

**Total: 160 points**

---

## Quick Reference

### While Loop

```python
while condition:
    # code
```

### With break

```python
while True:
    if condition:
        break
```

### With continue

```python
while condition:
    if skip_condition:
        continue
    # code
```

### Common Patterns

```python
# Counter
count = 0
while count < 10:
    count += 1

# Sentinel
while input != "quit":
    input = input()

# Validation
while not valid:
    check_validity()
```

---

## Summary

In this lesson, you learned:

- ✅ While loop syntax and usage
- ✅ Loop conditions and control
- ✅ break and continue statements
- ✅ Common loop patterns
- ✅ Nested while loops
- ✅ While-else construct
- ✅ Avoiding infinite loops
- ✅ Input validation with loops
- ✅ Practical applications

**You can now create programs that repeat actions intelligently!** While loops are essential for user interaction, validation, and iterative processing.

---

## Additional Resources

- **Python While Loops:** [https://docs.python.org/3/reference/compound_stmts.html#while](https://docs.python.org/3/reference/compound_stmts.html#while)
- **Loop Control:** [https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements)

**Next lesson:** [For Loops](for-loops)
