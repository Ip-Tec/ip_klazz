# Lambda Functions

## What is a Lambda Function?

A lambda function is a small, anonymous function without a name. It's a quick way to create a simple function in one line using the `lambda` keyword.

Think of lambda as a shortcut for writing simple functions when you don't want to use `def`.

## Basic Syntax

```python
lambda arguments: expression
```

Breaking it down:

- **lambda** — Keyword to create the function
- **arguments** — Input parameters (optional)
- **:** — Separator
- **expression** — Single expression that gets returned

## Simple Examples

### Example 1: Lambda with One Argument

```python
square = lambda x: x ** 2

print(square(5))  # 25
print(square(10)) # 100
```

### Example 2: Lambda with Multiple Arguments

```python
add = lambda x, y: x + y

print(add(5, 3))   # 8
print(add(10, 20)) # 30
```

### Example 3: Lambda with No Arguments

```python
greet = lambda: "Hello, World!"

print(greet())  # Hello, World!
```

### Example 4: Lambda with Conditional

```python
is_even = lambda x: "even" if x % 2 == 0 else "odd"

print(is_even(4))  # even
print(is_even(7))  # odd
```

## Lambda vs Regular Functions

Compare lambda and `def`:

```python
# Using def
def add_def(a, b):
    return a + b

# Using lambda
add_lambda = lambda a, b: a + b

print(add_def(5, 3))    # 8
print(add_lambda(5, 3)) # 8
```

They do the same thing, but lambda is shorter for simple operations.

## When to Use Lambda

Lambda is most useful with functions that expect other functions as arguments, like `map()`, `filter()`, and `sorted()`.

## Lambda with `map()`

`map()` applies a function to every item in a list:

```python
numbers = [1, 2, 3, 4, 5]

# Using def
def double(x):
    return x * 2

doubled = list(map(double, numbers))
print(doubled)  # [2, 4, 6, 8, 10]
```

Using lambda is more concise:

```python
numbers = [1, 2, 3, 4, 5]

doubled = list(map(lambda x: x * 2, numbers))
print(doubled)  # [2, 4, 6, 8, 10]
```

### More `map()` Examples

```python
# Convert strings to integers
strings = ["1", "2", "3", "4"]
integers = list(map(lambda x: int(x), strings))
print(integers)  # [1, 2, 3, 4]

# Extract first letter of each word
words = ["apple", "banana", "cherry"]
first_letters = list(map(lambda x: x[0], words))
print(first_letters)  # ['a', 'b', 'c']

# Convert temperatures
celsius = [0, 10, 20, 30]
fahrenheit = list(map(lambda c: (c * 9/5) + 32, celsius))
print(fahrenheit)  # [32.0, 50.0, 68.0, 86.0]
```

## Lambda with `filter()`

`filter()` keeps only items where a function returns `True`:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Using def
def is_even(x):
    return x % 2 == 0

evens = list(filter(is_even, numbers))
print(evens)  # [2, 4, 6, 8, 10]
```

Using lambda:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]
```

### More `filter()` Examples

```python
# Keep only positive numbers
numbers = [-5, -2, 0, 3, 7, -1]
positive = list(filter(lambda x: x > 0, numbers))
print(positive)  # [3, 7]

# Keep only words longer than 4 characters
words = ["cat", "elephant", "dog", "butterfly"]
long_words = list(filter(lambda x: len(x) > 4, words))
print(long_words)  # ['elephant', 'butterfly']

# Keep only scores above 80
scores = [75, 85, 90, 70, 88]
passing = list(filter(lambda x: x >= 80, scores))
print(passing)  # [85, 90, 88]
```

## Lambda with `sorted()`

`sorted()` sorts items using a function as the key:

```python
students = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 92},
    {"name": "Charlie", "score": 78}
]

# Sort by score using lambda
sorted_students = sorted(students, key=lambda x: x["score"])

for student in sorted_students:
    print(f"{student['name']}: {student['score']}")
```

**Output:**

```
Charlie: 78
Alice: 85
Bob: 92
```

### More `sorted()` Examples

```python
# Sort strings by length
words = ["apple", "cat", "elephant", "dog"]
by_length = sorted(words, key=lambda x: len(x))
print(by_length)  # ['cat', 'dog', 'apple', 'elephant']

# Sort tuples by second element
pairs = [(1, 5), (2, 1), (3, 3)]
sorted_pairs = sorted(pairs, key=lambda x: x[1])
print(sorted_pairs)  # [(2, 1), (3, 3), (1, 5)]

# Sort in reverse
numbers = [3, 1, 4, 1, 5, 9]
descending = sorted(numbers, key=lambda x: x, reverse=True)
print(descending)  # [9, 5, 4, 3, 1, 1]
```

## Lambda with `reduce()`

`reduce()` combines all items in a list into a single value:

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]

# Multiply all numbers
product = reduce(lambda x, y: x * y, numbers)
print(product)  # 120 (1*2*3*4*5)
```

### More `reduce()` Examples

```python
from functools import reduce

# Sum all numbers
numbers = [1, 2, 3, 4, 5]
total = reduce(lambda x, y: x + y, numbers)
print(total)  # 15

# Find maximum
numbers = [3, 7, 2, 9, 1]
maximum = reduce(lambda x, y: x if x > y else y, numbers)
print(maximum)  # 9

# Concatenate strings
words = ["Hello", " ", "Python", "!"]
sentence = reduce(lambda x, y: x + y, words)
print(sentence)  # Hello Python!
```

## Real-World Examples

### Example 1: Filter and Transform Data

```python
users = [
    {"name": "Alice", "age": 25, "active": True},
    {"name": "Bob", "age": 17, "active": True},
    {"name": "Charlie", "age": 30, "active": False},
    {"name": "Diana", "age": 22, "active": True}
]

# Get names of active users who are 18+
active_adults = list(filter(
    lambda u: u["active"] and u["age"] >= 18,
    users
))

names = list(map(lambda u: u["name"], active_adults))
print(names)  # ['Alice', 'Diana']
```

### Example 2: Sort Complex Data

```python
products = [
    {"name": "Laptop", "price": 999, "rating": 4.5},
    {"name": "Mouse", "price": 25, "rating": 4.8},
    {"name": "Keyboard", "price": 75, "rating": 4.2},
    {"name": "Monitor", "price": 299, "rating": 4.7}
]

# Sort by rating (highest first)
by_rating = sorted(products, key=lambda p: p["rating"], reverse=True)

print("Top rated products:")
for product in by_rating:
    print(f"{product['name']}: {product['rating']}")
```

### Example 3: Data Transformation Pipeline

```python
# Start with raw data
data = ["apple", "BANANA", "cherry", "DURIAN"]

# Transform: lowercase, map to uppercase first letter
result = list(map(
    lambda x: x[0].upper() + x[1:],
    map(lambda x: x.lower(), data)
))

print(result)  # ['Apple', 'Banana', 'Cherry', 'Durian']
```

### Example 4: Combine with List Comprehension

```python
# Filter even numbers and square them
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Using lambda with map and filter
result = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers)))

# Using list comprehension (often clearer)
result = [x ** 2 for x in numbers if x % 2 == 0]

print(result)  # [4, 16, 36, 64, 100]
```

### Example 5: Process Financial Data

```python
transactions = [
    {"type": "deposit", "amount": 100},
    {"type": "withdrawal", "amount": -50},
    {"type": "deposit", "amount": 200},
    {"type": "withdrawal", "amount": -30},
    {"type": "deposit", "amount": 150}
]

# Get all deposits
deposits = list(filter(lambda t: t["type"] == "deposit", transactions))
total_deposits = sum(map(lambda t: t["amount"], deposits))

print(f"Total deposits: ${total_deposits}")  # Total deposits: $450
```

## Lambda Limitations

Lambda functions are simple and can only contain a single expression:

```python
# ❌ Multiple statements - not allowed
multiply_and_print = lambda x: print(x); return x * 2

# ❌ Complex logic - not allowed
process = lambda x:
    if x > 0:
        return x ** 2
    else:
        return 0

# ✅ Use def for complex logic
def process(x):
    if x > 0:
        return x ** 2
    else:
        return 0
```

## Lambda vs List Comprehension

Sometimes lambda with `map()`/`filter()` and list comprehension do the same thing:

```python
numbers = [1, 2, 3, 4, 5]

# Lambda with map
doubled_lambda = list(map(lambda x: x * 2, numbers))

# List comprehension
doubled_comprehension = [x * 2 for x in numbers]

print(doubled_lambda)         # [2, 4, 6, 8, 10]
print(doubled_comprehension)  # [2, 4, 6, 8, 10]
```

**List comprehension is usually more readable** when filtering and transforming:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Lambda - harder to read
result = list(map(lambda x: x ** 2, filter(lambda x: x % 2 == 0, numbers)))

# List comprehension - clearer
result = [x ** 2 for x in numbers if x % 2 == 0]
```

## Common Mistakes

**1. Trying multiple statements**

```python
# ❌ Error - can't have multiple statements
process = lambda x: x = x * 2; print(x)

# ✅ Use def instead
def process(x):
    x = x * 2
    print(x)
    return x
```

**2. Overcomplicating lambda**

```python
# ❌ Too complex
convert = lambda x: int(x) if x.isdigit() else float(x) if '.' in x else x

# ✅ Use def for clarity
def convert(x):
    if x.isdigit():
        return int(x)
    elif '.' in x:
        return float(x)
    return x
```

**3. Forgetting lambda returns a value**

```python
# ❌ Wrong - doesn't store the function
map(lambda x: x * 2, [1, 2, 3])

# ✅ Correct - store or use the result
result = list(map(lambda x: x * 2, [1, 2, 3]))
```

**4. Using lambda when def is clearer**

```python
# ❌ Confusing
is_adult = lambda age: age >= 18

# ✅ Clearer with def
def is_adult(age):
    return age >= 18
```

## Key Takeaways

- Lambda creates anonymous functions in one line
- Syntax: `lambda arguments: expression`
- Lambda is useful with `map()`, `filter()`, `sorted()`, and `reduce()`
- Lambda can only contain a single expression
- Lambda returns the result of that expression automatically
- Use lambda for simple operations; use `def` for complex logic
- List comprehension is often clearer than lambda with `map()`/`filter()`
- Lambda is read-only—you can't assign to variables inside it

---

## Practice Exercises

1. Create a lambda function that checks if a number is positive.
2. Use `map()` with lambda to convert a list of temperatures from Celsius to Fahrenheit.
3. Use `filter()` with lambda to keep only numbers greater than 50 from a list.
4. Sort a list of dictionaries by a specific key using lambda.
5. Use `reduce()` with lambda to find the product of all numbers in a list.

---

> **Next lesson:** [Scope and Global Variables](scope)

---
