# While Loops

## What is a Loop?

A loop lets your code repeat a block of code multiple times without writing it over and over. Imagine you need to print "Hello" 100 times—would you write `print("Hello")` 100 times? No way! That's what loops are for.

There are two main types of loops in Python: `while` loops and `for` loops. Let's start with `while`.

## The `while` Loop

A `while` loop keeps running as long as a condition is `True`. The moment the condition becomes `False`, the loop stops.

### Basic Syntax

```python
while condition:
    # Code inside the loop
```

### Example 1: Simple Counter

```python
count = 1

while count <= 5:
    print(count)
    count = count + 1
```

**Output:**

```sh
1
2
3
4
5
```

Let's trace through what happens:

1. `count` is 1, and 1 <= 5 is `True`, so we print 1
2. `count` becomes 2, and 2 <= 5 is `True`, so we print 2
3. This continues until `count` is 6
4. 6 <= 5 is `False`, so the loop stops

### Example 2: User Input Loop

```python
name = ""

while name == "":
    name = input("What's your name? ")

print(f"Hello, {name}!")
```

This keeps asking for a name until the user enters something.

### Example 3: Countdown

```python
count = 5

while count > 0:
    print(count)
    count = count - 1

print("Blastoff!")
```

**Output:**

```sh
5
4
3
2
1
Blastoff!
```

## The `break` Statement

`break` lets you exit a loop immediately, even if the condition is still `True`.

```python
count = 1

while count <= 10:
    if count == 5:
        break
    print(count)
    count = count + 1

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

When `count` reaches 5, the `break` statement runs and the loop stops completely.

## The `continue` Statement

`continue` skips the rest of the current loop iteration and goes to the next one. It doesn't exit the loop like `break`—it just skips that one cycle.

```python
count = 1

while count <= 5:
    count = count + 1
    if count == 3:
        continue
    print(count)
```

**Output:**

```sh
2
4
5
```

Notice that 3 is skipped. When `count` is 3, `continue` makes the loop jump to the next iteration.

## Incrementing and Decrementing

You'll often see shorthand ways to change a variable:

```python
count = count + 1  # Long way
count += 1         # Short way

count = count - 1  # Long way
count -= 1         # Short way

count = count * 2  # Long way
count *= 2         # Short way
```

All of these do the same thing. The short versions are just more convenient:

```python
count = 0

while count < 5:
    count += 1
    print(count)
```

**Output:**

```sh
1
2
3
4
5
```

## Real-World Examples

### Example 1: Simple ATM Program

```python
balance = 1000
attempts = 0

while attempts < 3:
    guess = int(input("Enter your PIN: "))
    
    if guess == 1234:
        print(f"Access granted. Your balance: ${balance}")
        break
    else:
        attempts += 1
        print(f"Wrong PIN. Attempts left: {3 - attempts}")

if attempts == 3:
    print("Account locked!")
```

### Example 2: Game Loop

```python
score = 0
playing = True

while playing:
    print(f"Current score: {score}")
    action = input("(a)ttack or (q)uit? ")
    
    if action == "a":
        score += 10
    elif action == "q":
        playing = False
    else:
        print("Invalid action")

print(f"Game over! Final score: {score}")
```

### Example 3: Input Validation

```python
age = -1

while age < 0 or age > 150:
    age = int(input("Enter your age (0-150): "))
    
    if age < 0 or age > 150:
        print("Invalid age. Try again.")

print(f"You are {age} years old")
```

## Infinite Loops

Be careful! If your condition never becomes `False`, your loop will run forever. This is called an infinite loop.

```python
# ❌ Infinite loop - DON'T run this!
while True:
    print("This runs forever!")
```

This will never stop. The condition `True` is always true.

You can create an intentional infinite loop and use `break` to exit:

```python
# ✅ This is okay
while True:
    answer = input("Do you want to continue? (yes/no): ")
    
    if answer == "no":
        break
    
    print("Continuing...")
```

## Common Mistakes

**1. Forgetting to update the condition variable**

```python
# ❌ Infinite loop - count never changes
count = 1
while count < 5:
    print(count)
    # Forgot to increment count!

# ✅ Correct
count = 1
while count < 5:
    print(count)
    count += 1
```

**2. Using `=` instead of `==` in the condition**

```python
# ❌ Wrong - this assigns, not compares
while count = 5:
    print(count)

# ✅ Correct
while count == 5:
    print(count)
```

**3. Indentation errors**

```python
# ❌ Wrong - code not indented
while count < 5:
print(count)
count += 1

# ✅ Correct
while count < 5:
    print(count)
    count += 1
```

## Key Takeaways

- `while` loops repeat code as long as a condition is `True`
- Always make sure the condition will eventually become `False`
- Use `break` to exit a loop early
- Use `continue` to skip to the next iteration
- Use `+=` and `-=` to increment/decrement variables
- Watch out for infinite loops!

## Practice Exercises

1. Write a program that asks the user to guess a number between 1 and 10. Keep asking until they guess correctly.
2. Create a multiplication table generator (ask the user for a number and print its multiplication table).
3. Build a simple password validator that keeps asking until the password is strong enough.
4. Write a program that calculates the factorial of a number using a while loop.
5. Create a program that asks for user input and stops when the user types "exit".

---

> **Next lesson:** [For Loops](for-loops)

---
