# Lists and List Methods

Lists are one of the most important data structures in Python. They store multiple items in a single variable, are ordered, changeable, and allow duplicate values.

## Creating Lists

### Basic List Creation

```python
# Empty list
empty_list = []

# List with items
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Using list() constructor
my_list = list()  # Empty list
letters = list("Python")  # ['P', 'y', 't', 'h', 'o', 'n']

# Nested lists
matrix = [[1, 2], [3, 4], [5, 6]]
```

---

## Accessing List Elements

### Indexing

```python
fruits = ["apple", "banana", "cherry", "date"]

# Positive indexing (0-based)
print(fruits[0])   # "apple"
print(fruits[1])   # "banana"
print(fruits[3])   # "date"

# Negative indexing (from end)
print(fruits[-1])  # "date" (last)
print(fruits[-2])  # "cherry" (second last)

# Index out of range
# print(fruits[10])  # IndexError
```

### Slicing

```python
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# [start:end] - end not included
print(numbers[2:5])    # [2, 3, 4]
print(numbers[:5])     # [0, 1, 2, 3, 4] (from start)
print(numbers[5:])     # [5, 6, 7, 8, 9] (to end)
print(numbers[:])      # Copy entire list

# [start:end:step]
print(numbers[::2])    # [0, 2, 4, 6, 8] (every 2nd)
print(numbers[1::2])   # [1, 3, 5, 7, 9] (odd numbers)
print(numbers[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] (reversed)
```

---

## Modifying Lists

### Changing Items

```python
fruits = ["apple", "banana", "cherry"]

# Change single item
fruits[1] = "blueberry"
print(fruits)  # ["apple", "blueberry", "cherry"]

# Change multiple items via slice
fruits[0:2] = ["apricot", "blackberry"]
print(fruits)  # ["apricot", "blackberry", "cherry"]
```

---

## List Methods

### Adding Elements

#### append() - Add to End

```python
fruits = ["apple", "banana"]
fruits.append("cherry")
print(fruits)  # ["apple", "banana", "cherry"]

# Append only adds one item
fruits.append(["date", "elderberry"])  # Adds as single item
print(fruits)  # ["apple", "banana", "cherry", ["date", "elderberry"]]
```

#### insert() - Add at Position

```python
fruits = ["apple", "cherry"]
fruits.insert(1, "banana")  # Insert at index 1
print(fruits)  # ["apple", "banana", "cherry"]

fruits.insert(0, "apricot")  # Insert at beginning
print(fruits)  # ["apricot", "apple", "banana", "cherry"]
```

#### extend() - Add Multiple Items

```python
fruits = ["apple", "banana"]
fruits.extend(["cherry", "date"])
print(fruits)  # ["apple", "banana", "cherry", "date"]

# Can extend with any iterable
fruits.extend("fg")  # Adds 'f' and 'g'
print(fruits)  # ["apple", "banana", "cherry", "date", "f", "g"]
```

### Removing Elements

#### remove() - Remove First Match

```python
fruits = ["apple", "banana", "cherry", "banana"]
fruits.remove("banana")  # Removes first "banana"
print(fruits)  # ["apple", "cherry", "banana"]

# Error if item not found
# fruits.remove("grape")  # ValueError
```

#### pop() - Remove by Index

```python
fruits = ["apple", "banana", "cherry"]

# Remove last item (default)
last = fruits.pop()
print(last)    # "cherry"
print(fruits)  # ["apple", "banana"]

# Remove by index
first = fruits.pop(0)
print(first)   # "apple"
print(fruits)  # ["banana"]
```

#### clear() - Remove All

```python
fruits = ["apple", "banana", "cherry"]
fruits.clear()
print(fruits)  # []
```

#### del - Delete Items or List

```python
fruits = ["apple", "banana", "cherry", "date"]

# Delete by index
del fruits[1]
print(fruits)  # ["apple", "cherry", "date"]

# Delete slice
del fruits[0:2]
print(fruits)  # ["date"]

# Delete entire list
del fruits
# print(fruits)  # NameError: fruits not defined
```

### Finding Elements

#### index() - Find Position

```python
fruits = ["apple", "banana", "cherry", "banana"]

# Find first occurrence
pos = fruits.index("banana")
print(pos)  # 1

# Find in range
pos = fruits.index("banana", 2)  # Start from index 2
print(pos)  # 3

# Error if not found
# fruits.index("grape")  # ValueError
```

#### count() - Count Occurrences

```python
numbers = [1, 2, 3, 2, 4, 2, 5]
count = numbers.count(2)
print(count)  # 3

# Count non-existent item
count = numbers.count(10)
print(count)  # 0
```

### Sorting

#### sort() - Sort in Place

```python
numbers = [3, 1, 4, 1, 5, 9, 2]
numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 9]

# Sort descending
numbers.sort(reverse=True)
print(numbers)  # [9, 5, 4, 3, 2, 1, 1]

# Sort strings
fruits = ["cherry", "apple", "banana"]
fruits.sort()
print(fruits)  # ["apple", "banana", "cherry"]

# Case-insensitive sort
words = ["Banana", "apple", "Cherry"]
words.sort(key=str.lower)
print(words)  # ["apple", "Banana", "Cherry"]
```

#### reverse() - Reverse Order

```python
numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]

# Works on any list
fruits = ["apple", "banana", "cherry"]
fruits.reverse()
print(fruits)  # ["cherry", "banana", "apple"]
```

#### sorted() - Return Sorted Copy

```python
numbers = [3, 1, 4, 1, 5]
sorted_nums = sorted(numbers)  # Returns new list
print(sorted_nums)  # [1, 1, 3, 4, 5]
print(numbers)      # [3, 1, 4, 1, 5] (unchanged)
```

### Copying Lists

```python
original = [1, 2, 3]

# Method 1: copy()
copy1 = original.copy()

# Method 2: list()
copy2 = list(original)

# Method 3: slicing
copy3 = original[:]

# Wrong: assignment creates reference, not copy
reference = original
reference[0] = 99
print(original)  # [99, 2, 3] (also changed!)
```

---

## List Operations

### Concatenation

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

# Using +
combined = list1 + list2
print(combined)  # [1, 2, 3, 4, 5, 6]

# Using extend
list1.extend(list2)
print(list1)  # [1, 2, 3, 4, 5, 6]
```

### Repetition

```python
numbers = [1, 2, 3]
repeated = numbers * 3
print(repeated)  # [1, 2, 3, 1, 2, 3, 1, 2, 3]

# Initialize list with same value
zeros = [0] * 5
print(zeros)  # [0, 0, 0, 0, 0]
```

### Membership Testing

```python
fruits = ["apple", "banana", "cherry"]

print("apple" in fruits)      # True
print("grape" in fruits)      # False
print("grape" not in fruits)  # True
```

### Length

```python
fruits = ["apple", "banana", "cherry"]
print(len(fruits))  # 3

# Empty list
empty = []
print(len(empty))  # 0
```

---

## List Comprehensions

Create lists using concise syntax.

```python
# Traditional way
squares = []
for i in range(5):
    squares.append(i ** 2)

# List comprehension
squares = [i ** 2 for i in range(5)]
print(squares)  # [0, 1, 4, 9, 16]

# With condition
evens = [i for i in range(10) if i % 2 == 0]
print(evens)  # [0, 2, 4, 6, 8]

# Transform strings
words = ["hello", "world"]
upper = [word.upper() for word in words]
print(upper)  # ["HELLO", "WORLD"]

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)  # [[0, 0, 0], [0, 1, 2], [0, 2, 4]]
```

---

## Iterating Through Lists

```python
fruits = ["apple", "banana", "cherry"]

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

## Nested Lists

```python
# 2D list (matrix)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Access elements
print(matrix[0])     # [1, 2, 3] (first row)
print(matrix[0][0])  # 1 (first element of first row)
print(matrix[1][2])  # 6

# Iterate through nested list
for row in matrix:
    for item in row:
        print(item, end=" ")
    print()
```

---

## Common List Patterns

### Sum and Average

```python
numbers = [10, 20, 30, 40, 50]

total = sum(numbers)
average = total / len(numbers)
print(f"Sum: {total}, Average: {average}")
```

### Min and Max

```python
numbers = [34, 78, 12, 95, 23]
print(f"Min: {min(numbers)}")
print(f"Max: {max(numbers)}")
```

### Filter List

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
evens = [n for n in numbers if n % 2 == 0]
print(evens)  # [2, 4, 6, 8]
```

### Remove Duplicates

```python
numbers = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(numbers))
print(unique)  # [1, 2, 3, 4] (order may vary)

# Preserve order
unique = []
for num in numbers:
    if num not in unique:
        unique.append(num)
print(unique)  # [1, 2, 3, 4]
```

---

## Common Mistakes

### Modifying List While Iterating

```python
# Wrong
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # Can cause issues

# Correct - iterate over copy
for num in numbers[:]:
    if num % 2 == 0:
        numbers.remove(num)
```

### List Reference vs Copy

```python
# Wrong - creates reference
original = [1, 2, 3]
copy = original
copy[0] = 99
print(original)  # [99, 2, 3] (changed!)

# Correct - creates copy
original = [1, 2, 3]
copy = original.copy()
copy[0] = 99
print(original)  # [1, 2, 3] (unchanged)
```

---

## Classwork

### Exercise 1: List Basics

Create **list_basics.py**:

```python
"""Practice basic list operations."""

# Create and modify list
numbers = [1, 2, 3, 4, 5]
print(f"Original: {numbers}")

numbers.append(6)
print(f"After append: {numbers}")

numbers.insert(0, 0)
print(f"After insert: {numbers}")

numbers.remove(3)
print(f"After remove: {numbers}")

last = numbers.pop()
print(f"Popped: {last}, List: {numbers}")
```

### Exercise 2: Shopping List

Create **shopping_list.py**:

```python
"""Interactive shopping list."""

shopping_list = []

while True:
    print("\n=== Shopping List ===")
    print("1. Add item")
    print("2. Remove item")
    print("3. View list")
    print("4. Clear list")
    print("5. Exit")
    
    choice = input("Choose: ")
    
    if choice == "1":
        item = input("Item to add: ")
        shopping_list.append(item)
        print(f"Added {item}")
    elif choice == "2":
        item = input("Item to remove: ")
        if item in shopping_list:
            shopping_list.remove(item)
            print(f"Removed {item}")
        else:
            print("Item not found")
    elif choice == "3":
        print("\nYour list:")
        for i, item in enumerate(shopping_list, 1):
            print(f"{i}. {item}")
    elif choice == "4":
        shopping_list.clear()
        print("List cleared")
    elif choice == "5":
        break
```

### Exercise 3: List Analysis

Create **list_analysis.py**:

```python
"""Analyze a list of numbers."""

numbers = [23, 45, 12, 67, 34, 89, 23, 56, 12]

print(f"List: {numbers}")
print(f"Length: {len(numbers)}")
print(f"Sum: {sum(numbers)}")
print(f"Average: {sum(numbers) / len(numbers):.2f}")
print(f"Min: {min(numbers)}")
print(f"Max: {max(numbers)}")
print(f"Sorted: {sorted(numbers)}")

# Count duplicates
print("\nDuplicate count:")
for num in set(numbers):
    count = numbers.count(num)
    if count > 1:
        print(f"{num} appears {count} times")
```

### Exercise 4: Grade Manager

Create **grade_manager.py**:

```python
"""Manage student grades."""

grades = []

# Input grades
print("Enter grades (type 'done' to finish):")
while True:
    inp = input("Grade: ")
    if inp.lower() == "done":
        break
    grades.append(float(inp))

# Analysis
if grades:
    print(f"\n=== Grade Report ===")
    print(f"Grades: {grades}")
    print(f"Count: {len(grades)}")
    print(f"Average: {sum(grades) / len(grades):.2f}")
    print(f"Highest: {max(grades)}")
    print(f"Lowest: {min(grades)}")
    
    # Count letter grades
    a_count = len([g for g in grades if g >= 90])
    b_count = len([g for g in grades if 80 <= g < 90])
    c_count = len([g for g in grades if 70 <= g < 80])
    
    print(f"\nA's: {a_count}")
    print(f"B's: {b_count}")
    print(f"C's: {c_count}")
```

---

## Assignment

### Project: List Management System

Create **list_manager.py** with comprehensive list operations.

### Requirements

#### 1. **Todo List Manager**

- Add, remove, complete tasks
- Mark tasks as done
- Show pending/completed
- Priority sorting

#### 2. **Number Analyzer**

- Input list of numbers
- Statistics (sum, avg, min, max, median)
- Find duplicates
- Sort ascending/descending

#### 3. **Student Database**

- Store student records (name, grade)
- Add/remove students
- Sort by name or grade
- Search functionality
- Calculate class average

#### 4. **Inventory System**

- Track items and quantities
- Add/remove/update items
- Low stock alerts
- Search and sort

#### 5. **Data Cleaner**

- Remove duplicates
- Filter by criteria
- Sort data
- Transform data

### Code Requirements

- Use at least 10 different list methods
- Include list comprehensions
- Handle nested lists
- Input validation
- Error handling
- Clear output formatting

### Grading Criteria

- ✅ Todo list manager (20 points)
- ✅ Number analyzer (20 points)
- ✅ Student database (20 points)
- ✅ Inventory system (20 points)
- ✅ Data cleaner (20 points)
- ✅ List method usage (20 points)
- ✅ List comprehensions (10 points)
- ✅ Code organization (10 points)

**Total: 140 points**

---

## Quick Reference

### Common Methods

```python
.append(item)      # Add to end
.insert(i, item)   # Add at index
.extend(list)      # Add multiple
.remove(item)      # Remove first match
.pop(i)            # Remove and return
.clear()           # Remove all
.index(item)       # Find position
.count(item)       # Count occurrences
.sort()            # Sort in place
.reverse()         # Reverse in place
.copy()            # Shallow copy
```

### Operations

```python
len(list)          # Length
sum(list)          # Sum
min(list)          # Minimum
max(list)          # Maximum
sorted(list)       # Return sorted copy
```

---

## Summary

In this lesson, you learned:

- ✅ Creating and accessing lists
- ✅ List indexing and slicing
- ✅ Adding elements (append, insert, extend)
- ✅ Removing elements (remove, pop, clear)
- ✅ Finding elements (index, count)
- ✅ Sorting and reversing lists
- ✅ List operations and methods
- ✅ List comprehensions
- ✅ Nested lists
- ✅ Common patterns and mistakes

**Lists are fundamental to Python programming!** Master them to efficiently manage collections of data.

---

## Additional Resources

- **Python Lists:** [https://docs.python.org/3/tutorial/datastructures.html#more-on-lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

**Next lesson:** [List Comprehensions](list-comprehensions.md)
