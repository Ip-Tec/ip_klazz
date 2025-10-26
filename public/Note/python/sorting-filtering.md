# List Sorting and Filtering in Python

## Introduction

Sorting and filtering are two of the most common operations you'll perform on lists of data. Python provides powerful, flexible, and efficient tools to accomplish these tasks, from simple sorting to complex filtering based on custom logic.

## Sorting Lists

There are two main ways to sort a list in Python:

1. The **list.sort()** method: Modifies the list **in-place**.
2. The **sorted()** built-in function: Returns a **new** sorted list, leaving the original unchanged.

### 1. The **list.sort()** Method

This method is called directly on a list and sorts its elements. Since it modifies the list in-place, it returns **None**.

```python
numbers = [4, 1, 7, 3, 9]
print(f"Original list: {numbers}")

numbers.sort() # Sorts the list in-place

print(f"Sorted list: {numbers}")
# Output: Sorted list: [1, 3, 4, 7, 9]
```

### 2. The **sorted()** Function

This is often the preferred way to sort, as it is more flexible (it can work on any iterable, not just lists) and it doesn't modify the original data.

```python
numbers = [4, 1, 7, 3, 9]

# Create a new sorted list
new_sorted_list = sorted(numbers)

print(f"Original list: {numbers}")
print(f"New sorted list: {new_sorted_list}")
# Output:
# Original list: [4, 1, 7, 3, 9]
# New sorted list: [1, 3, 4, 7, 9]
```

### Sorting in Reverse Order

Both **sort()** and **sorted()** accept a **reverse** argument. Set **reverse=True** to sort in descending order.

```python
numbers = [4, 1, 7, 3, 9]

# Using sort()
numbers.sort(reverse=True)
print(f"Sorted in reverse: {numbers}") # [9, 7, 4, 3, 1]

# Using sorted()
new_reverse_list = sorted([4, 1, 7, 3, 9], reverse=True)
print(f"New reversed list: {new_reverse_list}") # [9, 7, 4, 3, 1]
```

### Custom Sorting with the **key** Argument

What if you want to sort a list of complex objects? The **key** argument lets you provide a function that determines what to sort by.

This function is called on every element before comparison.

#### Example: Sorting by Length

```python
words = ["apple", "banana", "kiwi", "cherry"]

# Sort the words by their length
sorted_by_length = sorted(words, key=len)

print(sorted_by_length) # Output: ['kiwi', 'apple', 'cherry', 'banana']
```

#### Example: Sorting a List of Dictionaries

This is a very common use case. You can use a **lambda** function to provide a simple key.

```python
students = [
    {"name": "Alice", "grade": 88},
    {"name": "Bob", "grade": 95},
    {"name": "Charlie", "grade": 82}
]

# Sort students by their grade
sorted_by_grade = sorted(students, key=lambda student: student["grade"])

print(sorted_by_grade)
# Output: [{'name': 'Charlie', 'grade': 82}, {'name': 'Alice', 'grade': 88}, {'name': 'Bob', 'grade': 95}]
```

## Filtering Lists

Filtering means creating a new list containing only the elements that meet a certain condition.

### 1. List Comprehensions (The Pythonic Way)

List comprehensions are the most common and readable way to filter lists in Python.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Get only the even numbers
even_numbers = [num for num in numbers if num % 2 == 0]

print(even_numbers) # Output: [2, 4, 6, 8, 10]
```

This is concise and highly efficient.

### 2. The **filter()** Function

The built-in **filter()** function provides another way. It takes a function and an iterable, and returns an iterator with only the items for which the function returns **True**.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def is_even(num):
    return num % 2 == 0

# filter() returns an iterator, so we wrap it in list() to see the results
even_numbers_iterator = filter(is_even, numbers)
even_numbers_list = list(even_numbers_iterator)

print(even_numbers_list) # Output: [2, 4, 6, 8, 10]
```

You can also use a **lambda** function for a one-liner:

```python
even_numbers = list(filter(lambda num: num % 2 == 0, numbers))
```

While **filter()** is useful, many find list comprehensions more direct and readable for simple cases.

## Key Takeaways

- **Sorting**: Use **list.sort()** to modify a list in-place or the **sorted()** function to return a new sorted list.
- Use the **reverse=True** argument to sort in descending order.
- Use the **key** argument with a function (often a **lambda**) to define custom sorting logic.
- **Filtering**: Use **list comprehensions** as the primary, most Pythonic way to filter lists.
- The **filter()** function is an alternative that returns an iterator, which can be more memory-efficient for very large datasets.

## Practice Exercises

1. **Sort by Last Letter**: Given a list of words, sort them based on the last letter of each word.
2. **Filter by Grade**: Given the list of student dictionaries from the example, create a new list containing only the students who scored 90 or above.
3. **Sort and Filter**: Given a list of numbers, create a new list that contains only the odd numbers, sorted in descending order.

---

## Solutions

```python
# Exercise 1: Sort by Last Letter
words = ["apple", "banana", "kiwi", "cherry"]

sorted_by_last_letter = sorted(words, key=lambda word: word[-1])
print(f"Sorted by last letter: {sorted_by_last_letter}")

# Exercise 2: Filter by Grade
students = [
    {"name": "Alice", "grade": 88},
    {"name": "Bob", "grade": 95},
    {"name": "Charlie", "grade": 82},
    {"name": "Diana", "grade": 91}
]

high_achievers = [student for student in students if student["grade"] >= 90]
print(f"High achievers: {high_achievers}")

# Exercise 3: Sort and Filter
numbers = [5, 12, 3, 8, 1, 9, 4, 6, 7]

# Filter for odd numbers first, then sort
odd_numbers = [num for num in numbers if num % 2 != 0]
odd_numbers.sort(reverse=True)

print(f"Odd numbers sorted descending: {odd_numbers}")

# You can also do it in one line with sorted()
odd_sorted_desc = sorted([num for num in numbers if num % 2 != 0], reverse=True)
print(f"One-liner result: {odd_sorted_desc}")

```

---

> **Next lesson:** [Introduction to NumPy](numpy-intro)

---
