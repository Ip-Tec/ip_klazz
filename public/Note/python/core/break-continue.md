# Break and Continue

Break and continue statements give you fine control over loop execution. They allow you to exit loops early or skip specific iterations, making your loops more efficient and flexible.

## The break Statement

`break` immediately exits the loop, skipping any remaining iterations.

### Basic break Usage

```python
# Exit loop when condition met
for i in range(10):
    if i == 5:
        break  # Exit loop when i is 5
    print(i)
# Output: 0, 1, 2, 3, 4

# Search and stop
numbers = [10, 20, 30, 40, 50]
for num in numbers:
    if num == 30:
        print(f"Found {num}")
        break
```

### break in While Loops

```python
# Infinite loop with break
while True:
    command = input("Enter 'quit' to exit: ")
    if command == "quit":
        break
    print(f"You entered: {command}")

# Count until condition
count = 0
while count < 100:
    count += 1
    if count == 10:
        break
print(f"Stopped at: {count}")
```

---

## The continue Statement

`continue` skips the rest of the current iteration and moves to the next one.

### Basic continue Usage

```python
# Skip odd numbers
for i in range(10):
    if i % 2 != 0:
        continue  # Skip odd numbers
    print(i)
# Output: 0, 2, 4, 6, 8

# Skip specific values
numbers = [1, 2, 3, 4, 5, 6]
for num in numbers:
    if num == 3:
        continue  # Skip 3
    print(num)
# Output: 1, 2, 4, 5, 6
```

### continue in While Loops

```python
# Skip invalid input
count = 0
while count < 5:
    count += 1
    if count == 3:
        continue  # Skip when count is 3
    print(count)
# Output: 1, 2, 4, 5

# Process only valid data
while True:
    value = input("Enter positive number (0 to quit): ")
    num = int(value)
    if num == 0:
        break
    if num < 0:
        print("Invalid! Must be positive")
        continue  # Skip this iteration
    print(f"Processing: {num}")
```

---

## break vs continue

### Key Differences

| Statement | Action | Effect |
|-----------|--------|--------|
| `break` | Exit loop completely | Stops all iterations |
| `continue` | Skip current iteration | Continues with next iteration |

### Visual Comparison

```python
# break example
print("With break:")
for i in range(5):
    if i == 3:
        break
    print(i)
# Output: 0, 1, 2

# continue example
print("\nWith continue:")
for i in range(5):
    if i == 3:
        continue
    print(i)
# Output: 0, 1, 2, 4
```

---

## Practical Applications

### Search Operations

```python
# Find first occurrence
items = ["apple", "banana", "cherry", "banana"]
target = "banana"

for index, item in enumerate(items):
    if item == target:
        print(f"Found '{target}' at index {index}")
        break
else:
    print(f"'{target}' not found")

# Find all occurrences (no break)
indices = []
for index, item in enumerate(items):
    if item == target:
        indices.append(index)
print(f"Found at indices: {indices}")
```

### Input Validation

```python
# Get valid age
while True:
    age = int(input("Enter age (0-120): "))
    if 0 <= age <= 120:
        break  # Valid age, exit loop
    print("Invalid age! Try again.")

print(f"Age: {age}")

# Skip invalid entries
total = 0
count = 0
while True:
    value = input("Enter number (-1 to stop): ")
    num = float(value)
    if num == -1:
        break
    if num < 0:
        print("Skipping negative number")
        continue  # Skip this number
    total += num
    count += 1

if count > 0:
    print(f"Average: {total / count:.2f}")
```

### Menu Systems

```python
# Menu with break
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
        break  # Exit menu
    else:
        print("Invalid choice")
        continue  # Show menu again
```

### Filtering Data

```python
# Process only valid data
numbers = [10, -5, 20, 0, 30, -10, 40]

# Skip invalid values
for num in numbers:
    if num <= 0:
        continue  # Skip non-positive
    result = 100 / num
    print(f"100 / {num} = {result:.2f}")

# Stop at first invalid
total = 0
for num in numbers:
    if num <= 0:
        print(f"Stopped at invalid value: {num}")
        break
    total += num
print(f"Sum before invalid: {total}")
```

---

## Nested Loops with break/continue

### break in Nested Loops

```python
# break only exits innermost loop
for i in range(3):
    for j in range(3):
        if j == 2:
            break  # Exits only inner loop
        print(f"i={i}, j={j}")

# Exit all loops with flag
found = False
for i in range(5):
    for j in range(5):
        if i * j == 6:
            found = True
            break  # Exit inner loop
    if found:
        break  # Exit outer loop
print(f"Found at i={i}, j={j}")
```

### continue in Nested Loops

```python
# continue affects only current loop
for i in range(3):
    for j in range(3):
        if j == 1:
            continue  # Skip to next j
        print(f"i={i}, j={j}")

# Skip outer iteration
for i in range(5):
    if i == 2:
        continue  # Skip when i=2
    for j in range(3):
        print(f"i={i}, j={j}")
```

---

## Using break with else

The `else` clause runs only if loop completes without `break`.

```python
# Search with else
numbers = [1, 3, 5, 7, 9]
target = 6

for num in numbers:
    if num == target:
        print(f"Found {target}")
        break
else:
    print(f"{target} not found")

# Validate all items
scores = [85, 92, 78, 95]
for score in scores:
    if score < 60:
        print("At least one failed")
        break
else:
    print("All passed!")

# Prime number check
n = 17
for i in range(2, n):
    if n % i == 0:
        print(f"{n} is not prime")
        break
else:
    print(f"{n} is prime")
```

---

## Common Patterns

### Early Exit Pattern

```python
# Stop when condition met
for i in range(1000):
    if i * i > 100:
        print(f"First number where square > 100: {i}")
        break

# Stop on error
items = [10, 20, 0, 30]
for item in items:
    if item == 0:
        print("Error: zero found")
        break
    result = 100 / item
    print(result)
```

### Skip Invalid Pattern

```python
# Skip invalid entries
words = ["hello", "", "world", "", "python"]
for word in words:
    if not word:
        continue  # Skip empty strings
    print(word.upper())

# Skip based on condition
numbers = range(1, 21)
for num in numbers:
    if num % 3 == 0:
        continue  # Skip multiples of 3
    print(num)
```

### Find First Match Pattern

```python
# Find first match
users = [
    {"name": "Alice", "age": 25},
    {"name": "Bob", "age": 30},
    {"name": "Charlie", "age": 35}
]

target_name = "Bob"
for user in users:
    if user["name"] == target_name:
        print(f"Found: {user}")
        break
```

### Collect Valid Items Pattern

```python
# Collect only valid items
numbers = [1, -2, 3, -4, 5, -6]
positive = []

for num in numbers:
    if num < 0:
        continue  # Skip negative
    positive.append(num)

print(positive)  # [1, 3, 5]
```

---

## Performance Optimization

### Avoid Unnecessary Iterations

```python
# Without break (checks all)
numbers = list(range(1000000))
for num in numbers:
    if num == 10:
        found = True

# With break (stops early)
for num in numbers:
    if num == 10:
        found = True
        break  # Much faster!

# Skip expensive operations
for item in large_list:
    if not item_is_valid(item):
        continue  # Skip expensive processing
    expensive_operation(item)
```

---

## Common Mistakes

### Mistake 1: break in Wrong Loop

```python
# Wrong - break only affects inner loop
for i in range(5):
    for j in range(5):
        if i + j == 5:
            break  # Only exits inner loop
    # Outer loop continues

# Correct - use flag for outer loop
found = False
for i in range(5):
    for j in range(5):
        if i + j == 5:
            found = True
            break
    if found:
        break
```

### Mistake 2: Using break Outside Loop

```python
# Wrong - SyntaxError
# if condition:
#     break  # Can't use break outside loop

# Correct - use return in function
def find_item(items, target):
    for item in items:
        if item == target:
            return item
    return None
```

### Mistake 3: Forgetting else Logic

```python
# Without else (requires extra variable)
found = False
for num in numbers:
    if num == target:
        found = True
        break
if not found:
    print("Not found")

# With else (cleaner)
for num in numbers:
    if num == target:
        break
else:
    print("Not found")
```

---

## Classwork

### Exercise 1: Search Operations

Create `search_operations.py`:

```python
"""Practice break with search operations."""

# Find first negative
numbers = [10, 20, -5, 30, 40]
for index, num in enumerate(numbers):
    if num < 0:
        print(f"First negative: {num} at index {index}")
        break
else:
    print("No negatives found")

# Find all negatives (no break)
negatives = []
for num in numbers:
    if num < 0:
        negatives.append(num)
print(f"All negatives: {negatives}")

# Linear search
def find_index(items, target):
    for index, item in enumerate(items):
        if item == target:
            return index
    return -1

items = [10, 20, 30, 40, 50]
print(f"Index of 30: {find_index(items, 30)}")
print(f"Index of 99: {find_index(items, 99)}")
```

### Exercise 2: Input Filtering

Create `input_filtering.py`:

```python
"""Practice continue with filtering."""

# Sum positive numbers only
numbers = [10, -5, 20, -3, 30, 0, 40]
total = 0

for num in numbers:
    if num <= 0:
        continue  # Skip non-positive
    total += num

print(f"Sum of positive: {total}")

# Process valid strings
words = ["hello", "", "world", "  ", "python", ""]
valid_words = []

for word in words:
    if not word.strip():
        continue  # Skip empty/whitespace
    valid_words.append(word.upper())

print(f"Valid words: {valid_words}")
```

### Exercise 3: Password Validator

Create `password_validator.py`:

```python
"""Password validator with break/continue."""

MAX_ATTEMPTS = 3
CORRECT_PASSWORD = "secret123"

attempts = 0
while attempts < MAX_ATTEMPTS:
    password = input("Enter password: ")
    attempts += 1
    
    # Check for empty password
    if not password:
        print("Password cannot be empty")
        continue  # Try again
    
    # Check password
    if password == CORRECT_PASSWORD:
        print("Access granted!")
        break
    
    remaining = MAX_ATTEMPTS - attempts
    if remaining > 0:
        print(f"Wrong! {remaining} attempts left")
else:
    print("Account locked!")
```

### Exercise 4: Number Game

Create `number_game.py`:

```python
"""Number guessing game with break/continue."""
import random

secret = random.randint(1, 50)
attempts = 0

print("Guess the number (1-50)!")
print("Type 'hint' for a clue or 'quit' to exit")

while True:
    guess_str = input("Your guess: ")
    
    # Handle commands
    if guess_str.lower() == "quit":
        print(f"Game over! Number was {secret}")
        break
    
    if guess_str.lower() == "hint":
        if secret % 2 == 0:
            print("Hint: The number is even")
        else:
            print("Hint: The number is odd")
        continue  # Don't count as attempt
    
    # Process guess
    try:
        guess = int(guess_str)
    except ValueError:
        print("Invalid input!")
        continue
    
    attempts += 1
    
    if guess == secret:
        print(f"Correct! Took {attempts} attempts")
        break
    elif guess < secret:
        print("Too low!")
    else:
        print("Too high!")
```

---

## Assignment

### Project: Loop Control System

Create `loop_control_system.py` with programs demonstrating break and continue.

### Requirements

#### 1. **Prime Number Finder**

- Find all primes up to N
- Use break for optimization
- Show count and list

#### 2. **Data Cleaner**

- Process list of data
- Skip invalid entries (continue)
- Stop at sentinel value (break)
- Report cleaned data

#### 3. **Login System**

- Max 3 attempts
- Skip empty passwords (continue)
- Lock after failures (break)
- Track attempt history

#### 4. **Shopping Cart**

- Add items until "done"
- Skip invalid items (continue)
- Break on checkout
- Calculate total

#### 5. **Search Engine**

- Search through data
- Skip non-matches (continue)
- Stop at first match (break)
- Show search time

### Code Requirements

- Use break appropriately
- Use continue appropriately
- Use for-else or while-else
- Handle nested loops
- Input validation
- Comments explaining control flow

### Grading Criteria

- ✅ Prime number finder (20 points)
- ✅ Data cleaner (20 points)
- ✅ Login system (20 points)
- ✅ Shopping cart (20 points)
- ✅ Search engine (20 points)
- ✅ break usage (15 points)
- ✅ continue usage (15 points)
- ✅ Loop-else usage (10 points)
- ✅ Code organization (10 points)
- ✅ Comments/documentation (10 points)

**Total: 160 points**

---

## Quick Reference

### break Statement

```python
for item in items:
    if condition:
        break  # Exit loop

while condition:
    if exit_condition:
        break  # Exit loop
```

### continue Statement

```python
for item in items:
    if skip_condition:
        continue  # Skip iteration
    # process item

while condition:
    if skip_condition:
        continue  # Skip iteration
    # process
```

### With else

```python
for item in items:
    if found:
        break
else:
    # Runs if no break
    print("Not found")
```

---

## Summary

In this lesson, you learned:

- ✅ break statement to exit loops
- ✅ continue statement to skip iterations
- ✅ Differences between break and continue
- ✅ Using break/continue in while loops
- ✅ Using break/continue in for loops
- ✅ Nested loops with break/continue
- ✅ Loop-else with break
- ✅ Common patterns and best practices
- ✅ Performance optimization
- ✅ Common mistakes to avoid

**You now have complete control over loop execution!** Break and continue statements make your loops more efficient and flexible.

---

## Additional Resources

- **Loop Control:** [https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements)
- **For-Else:** [https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops](https://docs.python.org/3/tutorial/controlflow.html#break-and-continue-statements-and-else-clauses-on-loops)

**Next lesson:** [Pass Statement](pass-statement)
