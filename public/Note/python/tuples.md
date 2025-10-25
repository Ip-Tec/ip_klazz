# Tuples

Tuples are ordered, immutable sequences in Python. They're similar to lists but cannot be modified after creation. Tuples are perfect for storing related data that shouldn't change.

## Creating Tuples

### Basic Tuple Creation

```python
# Empty tuple
empty = ()

# Tuple with items
numbers = (1, 2, 3, 4, 5)
fruits = ("apple", "banana", "cherry")
mixed = (1, "hello", 3.14, True)

# Single item tuple (comma is required!)
single = (5,)  # Correct
not_tuple = (5)  # This is just an integer!

# Without parentheses (tuple packing)
coordinates = 10, 20
print(type(coordinates))  # <class 'tuple'>

# Using tuple() constructor
my_tuple = tuple([1, 2, 3])
letters = tuple("Python")  # ('P', 'y', 't', 'h', 'o', 'n')
```

---

## Accessing Tuple Elements

### Indexing and Slicing

```python
fruits = ("apple", "banana", "cherry", "date")

# Positive indexing
print(fruits[0])   # "apple"
print(fruits[2])   # "cherry"

# Negative indexing
print(fruits[-1])  # "date" (last)
print(fruits[-2])  # "cherry"

# Slicing
print(fruits[1:3])   # ("banana", "cherry")
print(fruits[:2])    # ("apple", "banana")
print(fruits[2:])    # ("cherry", "date")
print(fruits[::2])   # ("apple", "cherry")
print(fruits[::-1])  # ("date", "cherry", "banana", "apple")
```

---

## Tuple Immutability

Tuples cannot be modified after creation.

```python
numbers = (1, 2, 3, 4, 5)

# These will cause errors
# numbers[0] = 99  # TypeError: tuple doesn't support item assignment
# numbers.append(6)  # AttributeError: no append method
# del numbers[0]  # TypeError: doesn't support item deletion

# But you can reassign the entire tuple
numbers = (10, 20, 30)  # This is fine

# Tuples with mutable objects
mixed = (1, 2, [3, 4])
mixed[2][0] = 99  # This works! (modifying the list inside)
print(mixed)  # (1, 2, [99, 4])
```

---

## Tuple Operations

### Concatenation

```python
tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)
combined = tuple1 + tuple2
print(combined)  # (1, 2, 3, 4, 5, 6)
```

### Repetition

```python
numbers = (1, 2, 3)
repeated = numbers * 3
print(repeated)  # (1, 2, 3, 1, 2, 3, 1, 2, 3)
```

### Membership Testing

```python
fruits = ("apple", "banana", "cherry")
print("apple" in fruits)      # True
print("grape" in fruits)      # False
print("grape" not in fruits)  # True
```

### Length

```python
numbers = (1, 2, 3, 4, 5)
print(len(numbers))  # 5
```

---

## Tuple Methods

Tuples have only two methods:

### count() - Count Occurrences

```python
numbers = (1, 2, 3, 2, 4, 2, 5)
count = numbers.count(2)
print(count)  # 3

# Count non-existent item
count = numbers.count(10)
print(count)  # 0
```

### index() - Find Position

```python
fruits = ("apple", "banana", "cherry", "banana")

# Find first occurrence
pos = fruits.index("banana")
print(pos)  # 1

# Find in range
pos = fruits.index("banana", 2)  # Start from index 2
print(pos)  # 3

# Error if not found
# fruits.index("grape")  # ValueError
```

---

## Tuple Unpacking

Assign tuple elements to multiple variables.

```python
# Basic unpacking
point = (10, 20)
x, y = point
print(f"x={x}, y={y}")  # x=10, y=20

# Swap variables
a, b = 5, 10
a, b = b, a
print(a, b)  # 10, 5

# Multiple values
person = ("Alice", 25, "Engineer")
name, age, job = person
print(f"{name} is {age} years old and works as {job}")

# Extended unpacking with *
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(first)   # 1
print(middle)  # [2, 3, 4] (becomes a list!)
print(last)    # 5

# Ignore values with _
data = (100, 200, 300)
_, value, _ = data
print(value)  # 200
```

---

## Tuples vs Lists

### Key Differences

| Feature | Tuple | List |
|---------|-------|------|
| Mutability | Immutable | Mutable |
| Syntax | **(1, 2, 3)** | **[1, 2, 3]** |
| Performance | Faster | Slower |
| Memory | Less | More |
| Methods | 2 methods | Many methods |
| Use case | Fixed data | Dynamic data |

### When to Use Tuples

```python
# Use tuples for:

# 1. Fixed collections
DAYS = ("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun")

# 2. Function returns
def get_coordinates():
    return (10, 20)  # Return multiple values

# 3. Dictionary keys (tuples are hashable)
locations = {
    (0, 0): "Origin",
    (10, 20): "Point A",
    (30, 40): "Point B"
}

# 4. Data that shouldn't change
RGB_RED = (255, 0, 0)
RGB_GREEN = (0, 255, 0)
```

---

## Iterating Through Tuples

```python
fruits = ("apple", "banana", "cherry")

# Basic iteration
for fruit in fruits:
    print(fruit)

# With index using enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# With index using range
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# While loop
i = 0
while i < len(fruits):
    print(fruits[i])
    i += 1
```

---

## Nested Tuples

```python
# Tuple of tuples
matrix = ((1, 2, 3), (4, 5, 6), (7, 8, 9))

# Access elements
print(matrix[0])     # (1, 2, 3)
print(matrix[0][0])  # 1
print(matrix[1][2])  # 6

# Iterate nested tuples
for row in matrix:
    for item in row:
        print(item, end=" ")
    print()

# Mixed nesting
data = (1, (2, 3), (4, (5, 6)))
```

---

## Converting Between Types

```python
# List to tuple
my_list = [1, 2, 3, 4, 5]
my_tuple = tuple(my_list)
print(my_tuple)  # (1, 2, 3, 4, 5)

# Tuple to list
my_tuple = (1, 2, 3, 4, 5)
my_list = list(my_tuple)
print(my_list)  # [1, 2, 3, 4, 5]

# String to tuple
text = "Python"
letters = tuple(text)
print(letters)  # ('P', 'y', 't', 'h', 'o', 'n')

# Tuple to string
my_tuple = ('H', 'e', 'l', 'l', 'o')
text = ''.join(my_tuple)
print(text)  # "Hello"
```

---

## Named Tuples

For more readable code, use named tuples from **collections**.

```python
from collections import namedtuple

# Define named tuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)

# Access by name
print(p.x)  # 10
print(p.y)  # 20

# Access by index (still works)
print(p[0])  # 10

# Unpack
x, y = p
print(x, y)  # 10 20

# More complex example
Student = namedtuple('Student', ['name', 'age', 'grade'])
student = Student("Alice", 20, 'A')
print(f"{student.name} is {student.age} years old, grade: {student.grade}")
```

---

## Practical Examples

### Function Returns

```python
def min_max(numbers):
    """Return min and max as tuple."""
    return min(numbers), max(numbers)

result = min_max([3, 1, 4, 1, 5, 9])
print(result)  # (1, 9)

minimum, maximum = min_max([3, 1, 4, 1, 5, 9])
print(f"Min: {minimum}, Max: {maximum}")
```

### Coordinates

```python
# Store coordinates
origin = (0, 0)
point_a = (10, 20)
point_b = (30, 40)

# Calculate distance
def distance(p1, p2):
    x1, y1 = p1
    x2, y2 = p2
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

dist = distance(origin, point_a)
print(f"Distance: {dist:.2f}")
```

### Database Records

```python
# Simulate database rows as tuples
records = [
    (1, "Alice", 25, "Engineer"),
    (2, "Bob", 30, "Designer"),
    (3, "Charlie", 28, "Manager")
]

for record in records:
    id, name, age, job = record
    print(f"ID: {id}, Name: {name}, Age: {age}, Job: {job}")
```

### Dictionary Keys

```python
# Use tuples as dictionary keys
chess_board = {
    (0, 0): "Rook",
    (0, 1): "Knight",
    (0, 2): "Bishop",
    (7, 7): "Rook"
}

print(chess_board[(0, 0)])  # "Rook"

# Can't use lists as keys (they're mutable)
# chess_board[[0, 0]] = "Piece"  # TypeError
```

---

## Common Patterns

### Multiple Return Values

```python
def divide_with_remainder(a, b):
    """Return quotient and remainder."""
    return a // b, a % b

quotient, remainder = divide_with_remainder(17, 5)
print(f"17 ÷ 5 = {quotient} R {remainder}")
```

### Parallel Iteration

```python
names = ("Alice", "Bob", "Charlie")
ages = (25, 30, 28)
cities = ("New York", "London", "Paris")

for name, age, city in zip(names, ages, cities):
    print(f"{name}, {age}, lives in {city}")
```

### Constant Values

```python
# Define constants as tuples
HTTP_SUCCESS = (200, "OK")
HTTP_NOT_FOUND = (404, "Not Found")
HTTP_ERROR = (500, "Internal Server Error")

code, message = HTTP_SUCCESS
print(f"Status {code}: {message}")
```

---

## Performance Comparison

```python
import sys

# Tuples use less memory
my_list = [1, 2, 3, 4, 5]
my_tuple = (1, 2, 3, 4, 5)

print(f"List size: {sys.getsizeof(my_list)} bytes")
print(f"Tuple size: {sys.getsizeof(my_tuple)} bytes")

# Tuples are slightly faster for iteration
import time

# Test with large data
data_list = list(range(1000000))
data_tuple = tuple(range(1000000))

# Time list iteration
start = time.time()
for item in data_list:
    pass
list_time = time.time() - start

# Time tuple iteration
start = time.time()
for item in data_tuple:
    pass
tuple_time = time.time() - start

print(f"List: {list_time:.4f}s")
print(f"Tuple: {tuple_time:.4f}s")
```

---

## Common Mistakes

### Single Item Tuple

```python
# Wrong - creates integer
single = (5)
print(type(single))  # <class 'int'>

# Correct - need comma
single = (5,)
print(type(single))  # <class 'tuple'>
```

### Trying to Modify

```python
# Wrong - tuples are immutable
coordinates = (10, 20)
# coordinates[0] = 30  # TypeError

# Correct - create new tuple
coordinates = (30, 20)
```

### Using List Methods

```python
# Wrong - tuples don't have these methods
my_tuple = (1, 2, 3)
# my_tuple.append(4)  # AttributeError
# my_tuple.sort()     # AttributeError

# Convert to list if needed
my_list = list(my_tuple)
my_list.append(4)
my_tuple = tuple(my_list)
```

---

## Classwork

### Exercise 1: Tuple Basics

Create **tuple_basics.py**:

```python
"""Practice basic tuple operations."""

# Create tuples
numbers = (1, 2, 3, 4, 5)
fruits = ("apple", "banana", "cherry")

# Access elements
print(f"First: {numbers[0]}")
print(f"Last: {numbers[-1]}")
print(f"Slice: {numbers[1:4]}")

# Operations
combined = numbers + fruits
print(f"Combined: {combined}")

repeated = (1, 2) * 3
print(f"Repeated: {repeated}")

# Methods
print(f"Count: {numbers.count(3)}")
print(f"Index: {fruits.index('banana')}")
```

### Exercise 2: Tuple Unpacking

Create **tuple_unpacking.py**:

```python
"""Practice tuple unpacking."""

# Basic unpacking
point = (10, 20)
x, y = point
print(f"Point: x={x}, y={y}")

# Swap variables
a, b = 5, 10
print(f"Before: a={a}, b={b}")
a, b = b, a
print(f"After: a={a}, b={b}")

# Extended unpacking
numbers = (1, 2, 3, 4, 5)
first, *middle, last = numbers
print(f"First: {first}")
print(f"Middle: {middle}")
print(f"Last: {last}")

# Function returns
def get_stats(nums):
    return min(nums), max(nums), sum(nums)

minimum, maximum, total = get_stats([1, 2, 3, 4, 5])
print(f"Min: {minimum}, Max: {maximum}, Sum: {total}")
```

### Exercise 3: Coordinate System

Create **coordinate_system.py**:

```python
"""Work with coordinates as tuples."""

# Define points
origin = (0, 0)
point_a = (3, 4)
point_b = (6, 8)

def distance(p1, p2):
    """Calculate distance between two points."""
    x1, y1 = p1
    x2, y2 = p2
    return ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5

def midpoint(p1, p2):
    """Calculate midpoint between two points."""
    x1, y1 = p1
    x2, y2 = p2
    return ((x1 + x2) / 2, (y1 + y2) / 2)

# Calculate
dist = distance(origin, point_a)
mid = midpoint(point_a, point_b)

print(f"Distance from origin to A: {dist:.2f}")
print(f"Midpoint between A and B: {mid}")
```

### Exercise 4: Student Records

Create `student_records.py`:

```python
"""Manage student records using tuples."""

# Student records (immutable)
students = [
    ("Alice", 85, "Computer Science"),
    ("Bob", 92, "Mathematics"),
    ("Charlie", 78, "Physics"),
    ("David", 95, "Engineering")
]

# Display all students
print("Student Records:")
print("-" * 50)
for student in students:
    name, grade, major = student
    print(f"{name:10} | Grade: {grade} | {major}")

# Find top student
top_student = max(students, key=lambda s: s[1])
print(f"\nTop student: {top_student[0]} with {top_student[1]}")

# Filter by major
cs_students = [s for s in students if s[2] == "Computer Science"]
print(f"\nCS students: {[s[0] for s in cs_students]}")
```

---

## Assignment

### Project: Tuple Data Manager

Create `tuple_manager.py` demonstrating tuple usage.

### Requirements:

#### 1. **Coordinate Calculator**
- Store points as tuples
- Calculate distances
- Find midpoints
- Determine quadrants

#### 2. **Record System**
- Store records as tuples
- Search records
- Sort by field
- Display formatted

#### 3. **RGB Color Manager**
- Store colors as tuples
- Convert formats
- Mix colors
- Display palettes

#### 4. **Date/Time Handler**
- Store dates as tuples
- Calculate differences
- Format display
- Validate dates

#### 5. **Statistics Calculator**
- Return multiple stats as tuple
- Use tuple unpacking
- Named tuples for clarity
- Compare datasets

### Code Requirements:

- Use tuples appropriately
- Demonstrate immutability benefit
- Use tuple unpacking
- Include named tuples
- Compare with lists where relevant

### Grading Criteria:

- ✅ Coordinate calculator (20 points)
- ✅ Record system (20 points)
- ✅ RGB color manager (20 points)
- ✅ Date/time handler (20 points)
- ✅ Statistics calculator (20 points)
- ✅ Tuple usage (15 points)
- ✅ Named tuples (10 points)
- ✅ Code organization (15 points)

**Total: 140 points**

---

## Quick Reference

### Creating Tuples
```python
()              # Empty
(1, 2, 3)       # Basic
(5,)            # Single item (comma!)
tuple([1,2,3])  # From list
```

### Operations
```python
len(t)          # Length
t[0]            # Index
t[1:3]          # Slice
t1 + t2         # Concatenate
t * 3           # Repeat
x in t          # Membership
```

### Methods
```python
t.count(x)      # Count occurrences
t.index(x)      # Find position
```

### Unpacking
```python
a, b = (1, 2)           # Basic
first, *rest = tuple    # Extended
_, x, _ = (1, 2, 3)     # Ignore values
```

---

## Summary

In this lesson, you learned:

- ✅ Creating and accessing tuples
- ✅ Tuple immutability
- ✅ Tuple operations and methods
- ✅ Tuple unpacking
- ✅ Tuples vs lists
- ✅ Nested tuples
- ✅ Named tuples
- ✅ Practical applications
- ✅ Performance benefits
- ✅ Common patterns and mistakes

**Tuples are essential for immutable data!** Use them when data shouldn't change.

---

## Additional Resources

- **Python Tuples:** [https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences](https://docs.python.org/3/tutorial/datastructures.html#tuples-and-sequences)

**Next lesson:** [Sets](sets)