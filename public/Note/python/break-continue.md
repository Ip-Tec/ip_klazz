# Break and Continue

## What Are Break and Continue?

**break** and **continue** are special statements that control how loops behave. They let you exit loops early or skip parts of a loop—giving you more control over your code's flow.

You've already seen these briefly, but let's dive deeper into how they work and when to use them.

## The **break** Statement

**break** immediately exits a loop, no matter what. The loop stops running completely, and the code after the loop continues.

### How It Works

```python
count = 1

while count <= 10:
    if count == 5:
        break
    print(count)
    count += 1

print("Loop ended")
```

**Output:**

```sh
1
2
3
4
Loop ended
```

When **count** reaches 5, **break** kicks in and the entire loop stops. Notice that 5 through 10 never print.

### Another Example

```python
for i in range(1, 11):
    if i == 6:
        break
    print(i)

print("Done!")
```

**Output:**

```sh
1
2
3
4
5
Done!
```

## The **continue** Statement

**continue** skips the rest of the current loop iteration and jumps to the next one. Unlike **break**, the loop keeps running—it just skips that one cycle.

### How It Works

```python
count = 1

while count <= 5:
    count += 1
    if count == 3:
        continue
    print(count)

print("Loop ended")
```

**Output:**

```sh
2
4
5
Loop ended
```

Notice that 3 is skipped! When **count** is 3, **continue** makes the loop jump to the next iteration without printing.

### Another Example

```python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)

print("Done!")
```

**Output:**

```sh
1
2
4
5
Done!
```

## Break vs Continue

Here's the key difference:

- **break** — Exits the loop completely
- **continue** — Skips the current iteration and goes to the next one

```python
print("Using break:")
for i in range(1, 6):
    if i == 3:
        break
    print(i)

print("\nUsing continue:")
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

**Output:**

```sh
Using break:
1
2

Using continue:
1
2
4
5
```

## Real-World Examples

### Example 1: Finding a Number in a List

```python
numbers = [2, 5, 8, 3, 9, 1, 7]
target = 3

for num in numbers:
    if num == target:
        print(f"Found {target}!")
        break
    print(f"Checking {num}...")

print("Search complete")
```

**Output:**

```text
Checking 2...
Checking 5...
Checking 8...
Found 3!
Search complete
```

Once we find the target, we **break** to stop searching. No need to check the rest!

### Example 2: Skipping Invalid Data

```python
data = [5, -2, 10, -4, 8, -1, 6]

print("Valid numbers:")
for num in data:
    if num < 0:
        continue
    print(num)

print("Done")
```

**Output:**

```text
Valid numbers:
5
10
8
6
Done
```

We skip negative numbers with **continue** and only print positive ones.

### Example 3: Password Input with Retry Limit

```python
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    password = input("Enter password: ")
    attempts += 1
    
    if password == "secret123":
        print("Access granted!")
        break
    elif attempts < max_attempts:
        print(f"Wrong! Try again ({max_attempts - attempts} left)")
        continue
    else:
        print("Account locked!")
```

Here we use both **break** (when password is correct) and **continue** (to skip to the next attempt).

### Example 4: Filtering User Input

```python
print("Enter numbers (type 'done' to stop):")
sum_total = 0

while True:
    user_input = input("Number: ")
    
    if user_input == "done":
        break
    
    if user_input == "":
        print("Please enter a number!")
        continue
    
    try:
        num = int(user_input)
        sum_total += num
    except:
        print("Invalid number! Try again.")
        continue

print(f"Total: {sum_total}")
```

This example shows how **break** and **continue** work together in a real program.

## Break and Continue with Nested Loops

When you use **break** or **continue** in nested loops, they only affect the innermost loop.

### Example with **break**

```python
for i in range(1, 4):
    print(f"Outer loop: {i}")
    for j in range(1, 4):
        if j == 2:
            break
        print(f"  Inner loop: {j}")
    print()
```

**Output:**

```sh
Outer loop: 1
  Inner loop: 1

Outer loop: 2
  Inner loop: 1

Outer loop: 3
  Inner loop: 1

```

The **break** only exits the inner loop, not the outer loop.

### Example with **continue**

```python
for i in range(1, 4):
    print(f"Outer loop: {i}")
    for j in range(1, 4):
        if j == 2:
            continue
        print(f"  Inner loop: {j}")
    print()
```

**Output:**

```
Outer loop: 1
  Inner loop: 1
  Inner loop: 3

Outer loop: 2
  Inner loop: 1
  Inner loop: 3

Outer loop: 3
  Inner loop: 1
  Inner loop: 3

```

The **continue** only skips the inner loop iteration, while the outer loop keeps running.

## When to Use Break and Continue

### Use **break** When

- You found what you're looking for
- An error condition occurred
- You want to exit early under specific circumstances

### Use **continue** When

- You want to skip invalid data
- A condition doesn't apply to this iteration
- You need to filter items without stopping the loop

## Common Mistakes

### **1. Forgetting that break only affects the innermost loop**

```python
# ❌ This doesn't work as expected
for i in range(3):
    for j in range(3):
        if j == 1:
            break  # Only breaks inner loop, not outer
    print(i)  # This still prints

# ✅ If you need to break both, you need more logic
```

### **2. Using break/continue outside a loop**

```python
# ❌ This will cause an error
if True:
    break  # SyntaxError: 'break' outside loop

# ✅ Only use inside loops
while True:
    break
```

### **3. Overusing break/continue makes code hard to read**

```python
# ❌ Hard to follow
for i in range(100):
    if condition1:
        continue
    if condition2:
        break
    if condition3:
        continue
    # ... more logic

# ✅ Better to use if/else for clarity
for i in range(100):
    if condition1:
        continue
    
    if condition2:
        break
    
    if condition3:
        continue
```

## Key Takeaways

- **break** exits a loop completely
- **continue** skips the current iteration and goes to the next one
- In nested loops, they only affect the innermost loop
- Use **break** when you're done and want to stop
- Use **continue** when you want to skip something but keep looping
- Don't overuse them—keep your code readable

---

## Practice Exercises

1. Write a program that searches for a name in a list and prints a message when found.
2. Create a loop that prints numbers 1-20 but skips multiples of 3.
3. Build a guessing game where the user gets 5 attempts. Use **break** when they guess correctly.
4. Write a program that filters out empty strings from user input until the user types "done".
5. Create a nested loop that prints a grid but skips certain positions based on a condition.

---

## Solution

```python

# Exercise 1: Search for a name
names = ["Alice", "Bob", "Charlie", "David", "Eve"]
search_name = input("Enter a name to search: ")

found = False
for name in names:
    if name == search_name:
        print(f"Found {search_name} in the list!")
        found = True
        break
if not found:
    print(f"{search_name} not found in the list.")

# Exercise 2: Skip multiples of 3
print("\nNumbers 1-20 (skipping multiples of 3):")
for i in range(1, 21):
    if i % 3 == 0:
        continue
    print(i)

# Exercise 3: Guessing Game
import random
secret_number = random.randint(1, 10)
attempts = 0
max_attempts = 5

print(f"\nGuess the number between 1 and 10. You have {max_attempts} attempts.")

while attempts < max_attempts:
    try:
        guess = int(input(f"Attempt {attempts + 1}: Enter your guess: "))
        attempts += 1
        if guess == secret_number:
            print(f"Congratulations! You guessed {secret_number} correctly in {attempts} attempts!")
            break
        elif guess < secret_number:
            print("Too low!")
        else:
            print("Too high!")
    except ValueError:
        print("Invalid input. Please enter a number.")
else: # This else block executes if the while loop finishes without a break
    print(f"Sorry, you ran out of attempts. The secret number was {secret_number}.")

# Exercise 4: Filter empty strings from user input
print("\nEnter text (empty strings will be skipped). Type 'done' to finish.")
filtered_inputs = []

while True:
    user_input = input("> ")
    if user_input.lower() == "done":
        break
    if user_input.strip() == "":
        print("Empty input skipped.")
        continue
    filtered_inputs.append(user_input)

print("\nYour non-empty inputs:")
if filtered_inputs:
    for item in filtered_inputs:
            print(f"- {item}")
    else:
        print("No non-empty inputs were entered.")
    
    # Exercise 5: Nested loop with skip condition
    print("\nGrid with skipped positions:")
    for row in range(1, 4):
        for col in range(1, 4):
            if row == 2 and col == 2: # Skip the center position
                print("  X  ", end="")
                continue
            print(f" ({row},{col}) ", end="")
        print() # New line after each row
```

---

> **Next lesson:** [Pass Statement](pass-statement)
