# For Loops

For loops allow you to iterate over sequences (like lists, strings, ranges) and execute code for each item. They're perfect when you know how many times you want to repeat something or when working with collections.

## Basic For Loop

### Syntax

```python
for variable in sequence:
    # Code to execute for each item
    statement
```

### Simple Examples

```python
# Loop through a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Loop through a string
for letter in "Python":
    print(letter)

# Loop through a range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4
```

---

## The range() Function

`range()` generates a sequence of numbers.

### range(stop)

```python
# 0 to stop-1
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Common use: repeat n times
for i in range(3):
    print("Hello!")
```

### range(start, stop)

```python
# start to stop-1
for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# Count from 10 to 15
for num in range(10, 16):
    print(num)
```

### range(start, stop, step)

```python
# Count by 2s
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Count backwards
for i in range(10, 0, -1):
    print(i)  # 10, 9, 8, ..., 1

# Every 5th number
for i in range(0, 50, 5):
    print(i)  # 0, 5, 10, 15, ..., 45
```

---

## Looping Through Collections

### Lists

```python
# Loop through list
numbers = [10, 20, 30, 40, 50]
for num in numbers:
    print(num)

# With index using enumerate()
for index, num in enumerate(numbers):
    print(f"Index {index}: {num}")

# Calculate sum
total = 0
for num in numbers:
    total += num
print(f"Sum: {total}")
```

### Strings

```python
# Loop through characters
word = "Python"
for char in word:
    print(char)

# Count vowels
text = "Hello World"
vowel_count = 0
for char in text.lower():
    if char in "aeiou":
        vowel_count += 1
print(f"Vowels: {vowel_count}")
```

### Dictionaries

```python
# Loop through keys
student = {"name": "Alice", "age": 20, "grade": "A"}
for key in student:
    print(key)

# Loop through values
for value in student.values():
    print(value)

# Loop through key-value pairs
for key, value in student.items():
    print(f"{key}: {value}")
```

### Tuples

```python
# Loop through tuple
coordinates = (10, 20, 30)
for coord in coordinates:
    print(coord)

# Unpack tuples
points = [(1, 2), (3, 4), (5, 6)]
for x, y in points:
    print(f"x={x}, y={y}")
```

---

## Loop Control Statements

### break - Exit Loop Early

```python
# Find first even number
numbers = [1, 3, 5, 8, 9, 10]
for num in numbers:
    if num % 2 == 0:
        print(f"First even: {num}")
        break

# Search for item
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    if fruit == "banana":
        print("Found banana!")
        break
```

### continue - Skip Iteration

```python
# Skip odd numbers
for i in range(10):
    if i % 2 != 0:
        continue
    print(i)  # Only even numbers

# Skip negative numbers
numbers = [5, -3, 8, -1, 10]
for num in numbers:
    if num < 0:
        continue
    print(num)  # Only positive
```

### pass - Do Nothing

```python
# Placeholder for future code
for i in range(5):
    if i == 3:
        pass  # TODO: implement later
    else:
        print(i)

# Empty loop body
for item in items:
    pass  # Will implement later
```

---

## Nested For Loops

```python
# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} × {j} = {i*j}")

# Pattern printing
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()

# Nested list iteration
matrix = [[1, 2], [3, 4], [5, 6]]
for row in matrix:
    for num in row:
        print(num, end=" ")
    print()
```

---

## For-Else Construct

The `else` block executes when loop completes normally (not via `break`).

```python
# Search with for-else
numbers = [1, 3, 5, 7, 9]
target = 6

for num in numbers:
    if num == target:
        print(f"Found {target}")
        break
else:
    print(f"{target} not found")

# Check if all pass
scores = [85, 92, 78, 95]
for score in scores:
    if score < 60:
        print("At least one failed")
        break
else:
    print("All passed!")
```

---

## Common For Loop Patterns

### Counter Pattern

```python
# Count occurrences
numbers = [1, 2, 2, 3, 2, 4, 2]
count = 0
for num in numbers:
    if num == 2:
        count += 1
print(f"Found {count} twos")
```

### Accumulator Pattern

```python
# Sum
numbers = [1, 2, 3, 4, 5]
total = 0
for num in numbers:
    total += num
print(f"Sum: {total}")

# Product
product = 1
for num in numbers:
    product *= num
print(f"Product: {product}")
```

### Transformation Pattern

```python
# Square all numbers
numbers = [1, 2, 3, 4, 5]
squares = []
for num in numbers:
    squares.append(num ** 2)
print(squares)

# Uppercase all strings
words = ["hello", "world"]
upper_words = []
for word in words:
    upper_words.append(word.upper())
print(upper_words)
```

### Filter Pattern

```python
# Get even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens = []
for num in numbers:
    if num % 2 == 0:
        evens.append(num)
print(evens)

# Get passing grades
scores = [55, 85, 92, 45, 78]
passing = []
for score in scores:
    if score >= 60:
        passing.append(score)
print(passing)
```

---

## enumerate() Function

Get both index and value when looping.

```python
# Basic enumerate
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# Start index at 1
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}. {fruit}")

# Find index of item
for index, fruit in enumerate(fruits):
    if fruit == "banana":
        print(f"Banana at index {index}")
```

---

## zip() Function

Iterate over multiple sequences in parallel.

```python
# Zip two lists
names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]

for name, age in zip(names, ages):
    print(f"{name} is {age} years old")

# Zip three lists
cities = ["New York", "London", "Tokyo"]
for name, age, city in zip(names, ages, cities):
    print(f"{name}, {age}, lives in {city}")

# Create dictionary from two lists
keys = ["name", "age", "city"]
values = ["Alice", 25, "New York"]
person = dict(zip(keys, values))
print(person)
```

---

## List Comprehensions (Preview)

A concise way to create lists using for loops.

```python
# Traditional loop
squares = []
for i in range(5):
    squares.append(i ** 2)

# List comprehension (more Pythonic)
squares = [i ** 2 for i in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
evens = [i for i in range(10) if i % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Transform strings
words = ["hello", "world"]
upper = [word.upper() for word in words]
print(upper)  # ['HELLO', 'WORLD']
```

---

## Practical Examples

### Sum and Average

```python
numbers = [10, 20, 30, 40, 50]

# Calculate sum
total = 0
for num in numbers:
    total += num

# Calculate average
average = total / len(numbers)
print(f"Sum: {total}, Average: {average}")
```

### Find Maximum

```python
numbers = [34, 78, 12, 95, 23]

max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num

print(f"Maximum: {max_num}")
```

### Grade Statistics

```python
grades = [85, 92, 78, 90, 88]

# Calculate statistics
total = 0
count_a = 0
count_pass = 0

for grade in grades:
    total += grade
    if grade >= 90:
        count_a += 1
    if grade >= 60:
        count_pass += 1

average = total / len(grades)
print(f"Average: {average:.2f}")
print(f"A grades: {count_a}")
print(f"Passing: {count_pass}")
```

### Reverse a String

```python
text = "Python"
reversed_text = ""

for char in text:
    reversed_text = char + reversed_text

print(reversed_text)  # "nohtyP"
```

---

## Common Mistakes

### Mistake 1: Modifying List While Iterating

```python
# Wrong - can cause issues
numbers = [1, 2, 3, 4, 5]
# for num in numbers:
#     if num % 2 == 0:
#         numbers.remove(num)  # Don't modify while iterating!

# Correct - iterate over copy
for num in numbers[:]:
    if num % 2 == 0:
        numbers.remove(num)
```

### Mistake 2: Using Wrong Variable

```python
# Wrong - using wrong variable
for i in range(5):
    print(j)  # NameError: j not defined

# Correct
for i in range(5):
    print(i)
```

### Mistake 3: Range Off-by-One

```python
# Wrong - misses last element
numbers = [10, 20, 30, 40, 50]
for i in range(len(numbers) - 1):  # Misses last!
    print(numbers[i])

# Correct
for i in range(len(numbers)):
    print(numbers[i])

# Better - iterate directly
for num in numbers:
    print(num)
```

---

## Classwork

### Exercise 1: Basic For Loops

Create `for_basics.py`:

```python
"""Practice basic for loops."""

# Print 1 to 10
for i in range(1, 11):
    print(i, end=" ")
print()

# Sum 1 to 100
total = 0
for i in range(1, 101):
    total += i
print(f"Sum 1-100: {total}")

# Multiplication table for 5
for i in range(1, 11):
    print(f"5 × {i} = {5 * i}")
```

### Exercise 2: List Processing

Create `list_processing.py`:

```python
"""Process lists with for loops."""

numbers = [23, 45, 12, 67, 34, 89, 15]

# Find min and max
minimum = numbers[0]
maximum = numbers[0]
for num in numbers:
    if num < minimum:
        minimum = num
    if num > maximum:
        maximum = num

print(f"Min: {minimum}, Max: {maximum}")

# Count evens and odds
evens = 0
odds = 0
for num in numbers:
    if num % 2 == 0:
        evens += 1
    else:
        odds += 1

print(f"Evens: {evens}, Odds: {odds}")
```

### Exercise 3: String Analysis

Create `string_analysis.py`:

```python
"""Analyze strings with for loops."""

text = "Hello, World!"

# Count characters
letters = 0
digits = 0
spaces = 0
other = 0

for char in text:
    if char.isalpha():
        letters += 1
    elif char.isdigit():
        digits += 1
    elif char.isspace():
        spaces += 1
    else:
        other += 1

print(f"Letters: {letters}")
print(f"Digits: {digits}")
print(f"Spaces: {spaces}")
print(f"Other: {other}")
```

### Exercise 4: Pattern Generator

Create `pattern_generator.py`:

```python
"""Generate patterns with for loops."""

# Right triangle
print("Right Triangle:")
for i in range(1, 6):
    for j in range(i):
        print("*", end="")
    print()

# Pyramid
print("\nPyramid:")
for i in range(1, 6):
    spaces = " " * (5 - i)
    stars = "*" * (2 * i - 1)
    print(spaces + stars)

# Number pyramid
print("\nNumber Pyramid:")
for i in range(1, 6):
    for j in range(1, i + 1):
        print(j, end="")
    print()
```

---

## Assignment

### Project: Data Analysis Suite

Create `data_analysis.py` with a menu system containing programs that use for loops.

### Requirements

#### 1. **Grade Analyzer**

- Input multiple student grades
- Calculate average, min, max
- Count A, B, C, D, F grades
- Show percentage passing

#### 2. **Number Statistics**

- Process list of numbers
- Find sum, average, median
- Count positive, negative, zero
- Find range (max - min)

#### 3. **Word Counter**

- Analyze text input
- Count total words
- Find longest/shortest word
- Count specific word occurrences

#### 4. **Shopping List Manager**

- Add items with prices
- Calculate total cost
- Find most expensive item
- Show itemized list

#### 5. **Multiplication Table Generator**

- Generate any size table
- Format output nicely
- Highlight specific numbers
- Allow custom ranges

### Code Requirements

- Use for loops appropriately
- Use range(), enumerate(), zip()
- Include break/continue where needed
- Process collections (lists, strings)
- Clear output formatting
- Comments and docstrings

### Grading Criteria

- ✅ Grade analyzer (20 points)
- ✅ Number statistics (20 points)
- ✅ Word counter (20 points)
- ✅ Shopping list manager (20 points)
- ✅ Multiplication table (20 points)
- ✅ For loop usage (15 points)
- ✅ range/enumerate/zip (10 points)
- ✅ Collection processing (10 points)
- ✅ Code organization (10 points)
- ✅ Comments/documentation (5 points)

**Total: 150 points**

---

## Quick Reference

### Basic For Loop

```python
for item in sequence:
    # code
```

### range() Function

```python
range(stop)           # 0 to stop-1
range(start, stop)    # start to stop-1
range(start, stop, step)  # with step
```

### With enumerate()

```python
for index, item in enumerate(list):
    print(index, item)
```

### With zip()

```python
for a, b in zip(list1, list2):
    print(a, b)
```

### Loop Control

```python
break     # Exit loop
continue  # Skip to next iteration
pass      # Do nothing
```

---

## Summary

In this lesson, you learned:

- ✅ For loop syntax and usage
- ✅ range() function variations
- ✅ Looping through collections
- ✅ Break, continue, and pass
- ✅ Nested for loops
- ✅ For-else construct
- ✅ enumerate() and zip() functions
- ✅ Common loop patterns
- ✅ List comprehensions (preview)
- ✅ Practical applications

**You can now efficiently process sequences and collections!** For loops are essential for data processing, list manipulation, and iterative tasks.

---

## Additional Resources

- **Python For Loops:** [https://docs.python.org/3/tutorial/controlflow.html#for-statements](https://docs.python.org/3/tutorial/controlflow.html#for-statements)
- **range() Function:** [https://docs.python.org/3/library/stdtypes.html#range](https://docs.python.org/3/library/stdtypes.html#range)

**Next lesson:** [Break and Continue](break-continue)
