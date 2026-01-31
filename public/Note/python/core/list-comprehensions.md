# List Comprehensions

List comprehensions provide a concise way to create lists. They're more readable and often faster than traditional loops for creating lists. Master this Pythonic feature to write cleaner, more elegant code.

## Basic List Comprehension

### Syntax

```python
[expression for item in iterable]
```

### Simple Examples

```python
# Traditional loop
squares = []
for i in range(5):
    squares.append(i ** 2)
print(squares)  # [0, 1, 4, 9, 16]

# List comprehension (more Pythonic)
squares = [i ** 2 for i in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# Create list from range
numbers = [i for i in range(10)]
print(numbers)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# Double each number
doubled = [i * 2 for i in range(5)]
print(doubled)  # [0, 2, 4, 6, 8]
```

---

## List Comprehension with Conditions

### Filtering with if

```python
# Traditional loop
evens = []
for i in range(10):
    if i % 2 == 0:
        evens.append(i)

# List comprehension
evens = [i for i in range(10) if i % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Filter positive numbers
numbers = [-2, -1, 0, 1, 2, 3]
positive = [n for n in numbers if n > 0]
print(positive)  # [1, 2, 3]

# Filter strings by length
words = ["hi", "hello", "hey", "greetings"]
long_words = [w for w in words if len(w) > 3]
print(long_words)  # ["hello", "greetings"]
```

### if-else in List Comprehension

```python
# Conditional expression
numbers = [1, 2, 3, 4, 5]
result = ["even" if n % 2 == 0 else "odd" for n in numbers]
print(result)  # ["odd", "even", "odd", "even", "odd"]

# Transform based on condition
nums = [1, 2, 3, 4, 5]
result = [n * 2 if n % 2 == 0 else n for n in nums]
print(result)  # [1, 4, 3, 8, 5]

# Replace negative with zero
numbers = [-2, 5, -1, 8, -3]
result = [n if n >= 0 else 0 for n in numbers]
print(result)  # [0, 5, 0, 8, 0]
```

---

## Working with Strings

### Character Processing

```python
# Extract characters
word = "Python"
chars = [c for c in word]
print(chars)  # ['P', 'y', 't', 'h', 'o', 'n']

# Uppercase each character
upper_chars = [c.upper() for c in word]
print(upper_chars)  # ['P', 'Y', 'T', 'H', 'O', 'N']

# Filter vowels
vowels = [c for c in word if c.lower() in "aeiou"]
print(vowels)  # ['o']

# ASCII codes
codes = [ord(c) for c in "ABC"]
print(codes)  # [65, 66, 67]
```

### String Transformation

```python
# Uppercase all words
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(upper)  # ["HELLO", "WORLD", "PYTHON"]

# Get first letter
first_letters = [w[0] for w in words]
print(first_letters)  # ["h", "w", "p"]

# Get word lengths
lengths = [len(w) for w in words]
print(lengths)  # [5, 5, 6]

# Filter and transform
long_upper = [w.upper() for w in words if len(w) > 5]
print(long_upper)  # ["PYTHON"]
```

---

## Mathematical Operations

```python
# Squares
squares = [x ** 2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Cubes
cubes = [x ** 3 for x in range(1, 6)]
print(cubes)  # [1, 8, 27, 64, 125]

# Even squares
even_squares = [x ** 2 for x in range(10) if x % 2 == 0]
print(even_squares)  # [0, 4, 16, 36, 64]

# Celsius to Fahrenheit
celsius = [0, 10, 20, 30, 40]
fahrenheit = [(c * 9/5) + 32 for c in celsius]
print(fahrenheit)  # [32.0, 50.0, 68.0, 86.0, 104.0]

# Create multiplication table
table = [i * 5 for i in range(1, 11)]
print(table)  # [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
```

---

## Nested List Comprehensions

### 2D Lists (Matrices)

```python
# Create 3x3 matrix
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)
# [[0, 0, 0],
#  [0, 1, 2],
#  [0, 2, 4]]

# Create identity matrix
identity = [[1 if i == j else 0 for j in range(3)] for i in range(3)]
print(identity)
# [[1, 0, 0],
#  [0, 1, 0],
#  [0, 0, 1]]

# Flatten nested list
nested = [[1, 2], [3, 4], [5, 6]]
flat = [num for row in nested for num in row]
print(flat)  # [1, 2, 3, 4, 5, 6]
```

### Nested Loops in Comprehension

```python
# Pairs of numbers
pairs = [(i, j) for i in range(3) for j in range(3)]
print(pairs)
# [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]

# Combinations
colors = ["red", "blue"]
sizes = ["S", "M", "L"]
products = [(color, size) for color in colors for size in sizes]
print(products)
# [("red", "S"), ("red", "M"), ("red", "L"), ("blue", "S"), ("blue", "M"), ("blue", "L")]

# With condition
pairs = [(i, j) for i in range(5) for j in range(5) if i < j]
print(pairs)
# [(0, 1), (0, 2), (0, 3), (0, 4), (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)]
```

---

## List Comprehension with Functions

```python
# Apply function to each element
def square(x):
    return x ** 2

numbers = [1, 2, 3, 4, 5]
squares = [square(n) for n in numbers]
print(squares)  # [1, 4, 9, 16, 25]

# String methods
words = ["hello", "world", "python"]
capitalized = [w.capitalize() for w in words]
print(capitalized)  # ["Hello", "World", "Python"]

# Multiple operations
nums = [1, 2, 3, 4, 5]
result = [n ** 2 + n for n in nums]
print(result)  # [2, 6, 12, 20, 30]

# Custom function with condition
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

primes = [n for n in range(20) if is_prime(n)]
print(primes)  # [2, 3, 5, 7, 11, 13, 17, 19]
```

---

## Practical Examples

### Data Processing

```python
# Extract data from dictionaries
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 78}
]

names = [s["name"] for s in students]
print(names)  # ["Alice", "Bob", "Charlie"]

passing = [s["name"] for s in students if s["grade"] >= 80]
print(passing)  # ["Alice", "Bob"]

# Grade adjustments
adjusted = [s["grade"] + 5 for s in students]
print(adjusted)  # [90, 97, 83]
```

### Text Processing

```python
# Split and process
text = "Hello World Python Programming"
words = text.split()
lengths = [len(w) for w in words]
print(lengths)  # [5, 5, 6, 11]

# Filter by criteria
long_words = [w for w in words if len(w) > 5]
print(long_words)  # ["Python", "Programming"]

# Remove punctuation
sentence = "Hello, World! How are you?"
clean = [c for c in sentence if c.isalnum() or c.isspace()]
print("".join(clean))  # "Hello World How are you"
```

### Number Processing

```python
# Filter and transform
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Even numbers doubled
result = [n * 2 for n in numbers if n % 2 == 0]
print(result)  # [4, 8, 12, 16, 20]

# Squares of odd numbers
result = [n ** 2 for n in numbers if n % 2 != 0]
print(result)  # [1, 9, 25, 49, 81]

# Multiples of 3
result = [n for n in numbers if n % 3 == 0]
print(result)  # [3, 6, 9]
```

---

## Set and Dictionary Comprehensions

### Set Comprehensions

```python
# Create set (removes duplicates)
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = {n for n in numbers}
print(unique)  # {1, 2, 3, 4}

# Set of squares
squares = {x ** 2 for x in range(5)}
print(squares)  # {0, 1, 4, 9, 16}

# Filter and create set
words = ["hello", "world", "hello", "python"]
long_words = {w for w in words if len(w) > 4}
print(long_words)  # {"hello", "world", "python"}
```

### Dictionary Comprehensions

```python
# Create dictionary
numbers = [1, 2, 3, 4, 5]
squares_dict = {n: n ** 2 for n in numbers}
print(squares_dict)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

# From two lists
keys = ["a", "b", "c"]
values = [1, 2, 3]
dictionary = {k: v for k, v in zip(keys, values)}
print(dictionary)  # {"a": 1, "b": 2, "c": 3}

# Filter dictionary
scores = {"Alice": 85, "Bob": 92, "Charlie": 78}
passing = {name: score for name, score in scores.items() if score >= 80}
print(passing)  # {"Alice": 85, "Bob": 92}
```

---

## Comprehension vs Traditional Loop

### When to Use Comprehensions

```python
# Good use: Simple transformation
squares = [x ** 2 for x in range(10)]

# Good use: Simple filter
evens = [n for n in range(10) if n % 2 == 0]

# Bad use: Complex logic
# Don't do this - hard to read!
# result = [x * 2 if x % 2 == 0 else x ** 2 if x % 3 == 0 else x for x in range(10)]

# Better: Use traditional loop for complex logic
result = []
for x in range(10):
    if x % 2 == 0:
        result.append(x * 2)
    elif x % 3 == 0:
        result.append(x ** 2)
    else:
        result.append(x)
```

---

## Performance Tips

```python
# List comprehensions are faster
import time

# Traditional loop
start = time.time()
result = []
for i in range(100000):
    result.append(i ** 2)
loop_time = time.time() - start

# List comprehension
start = time.time()
result = [i ** 2 for i in range(100000)]
comp_time = time.time() - start

print(f"Loop: {loop_time:.4f}s")
print(f"Comprehension: {comp_time:.4f}s")
# Comprehension is usually faster!
```

---

## Common Patterns

### Filter and Transform

```python
# Get uppercase names longer than 4 characters
names = ["alice", "bob", "charlie", "dave"]
result = [name.upper() for name in names if len(name) > 4]
print(result)  # ["ALICE", "CHARLIE"]
```

### Create Range-Based Lists

```python
# Multiples of 5
multiples = [i * 5 for i in range(1, 11)]
print(multiples)  # [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

# Powers of 2
powers = [2 ** i for i in range(10)]
print(powers)  # [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
```

### Extract from Nested Structures

```python
# Extract specific values
data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Get first element of each sublist
firsts = [row[0] for row in data]
print(firsts)  # [1, 4, 7]

# Get diagonal elements
diagonal = [data[i][i] for i in range(len(data))]
print(diagonal)  # [1, 5, 9]
```

---

## Classwork

### Exercise 1: Basic Comprehensions

Create `comprehension_basics.py`:

```python
"""Practice basic list comprehensions."""

# Squares of 1-10
squares = [i ** 2 for i in range(1, 11)]
print(f"Squares: {squares}")

# Even numbers 0-20
evens = [i for i in range(21) if i % 2 == 0]
print(f"Evens: {evens}")

# Uppercase words
words = ["hello", "world", "python"]
upper = [w.upper() for w in words]
print(f"Uppercase: {upper}")

# Lengths of words
lengths = [len(w) for w in words]
print(f"Lengths: {lengths}")

# Filter long words
long = [w for w in words if len(w) > 5]
print(f"Long words: {long}")
```

### Exercise 2: Temperature Converter

Create `temp_converter.py`:

```python
"""Convert temperatures using comprehensions."""

# Celsius temperatures
celsius = [0, 10, 20, 30, 40, 100]

# Convert to Fahrenheit
fahrenheit = [(c * 9/5) + 32 for c in celsius]

# Convert to Kelvin
kelvin = [c + 273.15 for c in celsius]

# Display results
print("Celsius | Fahrenheit | Kelvin")
print("-" * 35)
for c, f, k in zip(celsius, fahrenheit, kelvin):
    print(f"{c:7} | {f:10.1f} | {k:6.2f}")
```

### Exercise 3: Grade Processor

Create `grade_processor.py`:

```python
"""Process grades using comprehensions."""

# Student data
students = [
    {"name": "Alice", "score": 85},
    {"name": "Bob", "score": 92},
    {"name": "Charlie", "score": 78},
    {"name": "David", "score": 95},
    {"name": "Eve", "score": 67}
]

# Extract names
names = [s["name"] for s in students]
print(f"Students: {names}")

# Extract scores
scores = [s["score"] for s in students]
print(f"Scores: {scores}")

# Filter passing students (>= 80)
passing = [s["name"] for s in students if s["score"] >= 80]
print(f"Passing: {passing}")

# Assign letter grades
grades = ["A" if s["score"] >= 90 else "B" if s["score"] >= 80 
          else "C" if s["score"] >= 70 else "D" if s["score"] >= 60 
          else "F" for s in students]
print(f"Grades: {grades}")

# Average
average = sum(scores) / len(scores)
print(f"Average: {average:.2f}")
```

### Exercise 4: Matrix Operations

Create `matrix_operations.py`:

```python
"""Matrix operations using comprehensions."""

# Create 5x5 matrix
matrix = [[i * j for j in range(1, 6)] for i in range(1, 6)]

print("5x5 Multiplication Table:")
for row in matrix:
    print(" ".join(f"{n:3}" for n in row))

# Diagonal elements
diagonal = [matrix[i][i] for i in range(5)]
print(f"\nDiagonal: {diagonal}")

# Flatten matrix
flat = [num for row in matrix for num in row]
print(f"Flattened: {flat}")

# Sum of each row
row_sums = [sum(row) for row in matrix]
print(f"Row sums: {row_sums}")
```

---

## Assignment

### Project: Data Transformation Suite

Create `data_transformer.py` using list comprehensions extensively.

### Requirements

#### 1. **Number Transformer**

- Generate various number sequences
- Apply transformations
- Filter by conditions
- Use comprehensions only

#### 2. **Text Processor**

- Process lists of strings
- Filter, transform, extract
- Word analysis
- Character operations

#### 3. **Data Cleaner**

- Remove duplicates
- Filter invalid entries
- Normalize data
- Extract specific fields

#### 4. **Matrix Generator**

- Create various matrices
- Perform operations
- Extract elements
- Transform matrices

#### 5. **Student Analyzer**

- Process student records
- Calculate statistics
- Filter by criteria
- Generate reports

### Code Requirements

- Use list comprehensions extensively
- Include set comprehensions
- Include dictionary comprehensions
- Use nested comprehensions
- Compare with traditional loops
- Clear, readable comprehensions

### Grading Criteria

- ✅ Number transformer (20 points)
- ✅ Text processor (20 points)
- ✅ Data cleaner (20 points)
- ✅ Matrix generator (20 points)
- ✅ Student analyzer (20 points)
- ✅ List comprehension usage (20 points)
- ✅ Set/dict comprehensions (10 points)
- ✅ Nested comprehensions (10 points)

**Total: 140 points**

---

## Quick Reference

### Basic

```python
[expression for item in iterable]
```

### With Condition

```python
[expression for item in iterable if condition]
```

### With if-else

```python
[expr1 if condition else expr2 for item in iterable]
```

### Nested

```python
[expression for item1 in iter1 for item2 in iter2]
```

### Set Comprehension

```python
{expression for item in iterable}
```

### Dict Comprehension

```python
{key: value for item in iterable}
```

---

## Summary

In this lesson, you learned:

- ✅ Basic list comprehension syntax
- ✅ Comprehensions with conditions
- ✅ if-else in comprehensions
- ✅ String and number operations
- ✅ Nested comprehensions
- ✅ Set and dictionary comprehensions
- ✅ When to use comprehensions
- ✅ Performance benefits
- ✅ Common patterns
- ✅ Best practices

**List comprehensions are a powerful Python feature!** They make your code more concise and Pythonic.

---

## Additional Resources

- **List Comprehensions:** [https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)

**Next lesson:** [Tuples](tuples.md)
