# Lists and List Methods

## What is a List?

A list is a collection of items stored in a single variable. Lists can contain any type of data—numbers, strings, booleans, or even other lists. Lists are **ordered** and **changeable**, meaning you can modify them after creating them.

Think of a list like a shopping list: you can add items, remove items, and change items.

## Creating Lists

You create a list using square brackets `[]`:

```python
fruits = ["apple", "banana", "orange"]
print(fruits)
```

**Output:** `['apple', 'banana', 'orange']`

### Lists with Different Data Types

```python
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

print(numbers)   # [1, 2, 3, 4, 5]
print(mixed)     # [1, 'hello', 3.14, True]
print(empty)     # []
```

## Accessing List Items

Each item in a list has an index starting from 0. Use the index in square brackets to access an item.

```python
fruits = ["apple", "banana", "orange", "grape"]

print(fruits[0])    # apple
print(fruits[1])    # banana
print(fruits[3])    # grape
```

### Negative Indexing

Negative indices count from the end of the list. `-1` is the last item, `-2` is second to last, and so on.

```python
fruits = ["apple", "banana", "orange", "grape"]

print(fruits[-1])   # grape
print(fruits[-2])   # orange
print(fruits[-4])   # apple
```

### Slicing Lists

You can get a portion of a list using slicing:

```python
fruits = ["apple", "banana", "orange", "grape", "mango"]

print(fruits[1:3])    # ['banana', 'orange']
print(fruits[0:4])    # ['apple', 'banana', 'orange', 'grape']
print(fruits[:3])     # ['apple', 'banana', 'orange']
print(fruits[2:])     # ['orange', 'grape', 'mango']
```

Notice: slicing includes the start index but excludes the end index.

## Modifying Lists

### Changing Items

```python
fruits = ["apple", "banana", "orange"]

fruits[1] = "blueberry"
print(fruits)  # ['apple', 'blueberry', 'orange']
```

### Changing Multiple Items

```python
numbers = [1, 2, 3, 4, 5]

numbers[1:3] = [20, 30]
print(numbers)  # [1, 20, 30, 4, 5]
```

## Common List Methods

Methods are actions you can perform on lists. Use the dot notation: `list.method()`

### `append()` — Add Item to End

```python
fruits = ["apple", "banana"]

fruits.append("orange")
print(fruits)  # ['apple', 'banana', 'orange']
```

### `insert()` — Add Item at Specific Position

```python
fruits = ["apple", "banana", "orange"]

fruits.insert(1, "grape")
print(fruits)  # ['apple', 'grape', 'banana', 'orange']
```

### `remove()` — Remove Specific Item

```python
fruits = ["apple", "banana", "orange", "banana"]

fruits.remove("banana")
print(fruits)  # ['apple', 'orange', 'banana']
```

Note: `remove()` only removes the first occurrence.

### `pop()` — Remove and Return Item

```python
fruits = ["apple", "banana", "orange"]

removed = fruits.pop(1)
print(removed)  # banana
print(fruits)   # ['apple', 'orange']
```

You can also use `pop()` without an index to remove the last item:

```python
fruits = ["apple", "banana", "orange"]

last = fruits.pop()
print(last)     # orange
print(fruits)   # ['apple', 'banana']
```

### `clear()` — Remove All Items

```python
fruits = ["apple", "banana", "orange"]

fruits.clear()
print(fruits)  # []
```

### `index()` — Find Position of Item

```python
fruits = ["apple", "banana", "orange"]

position = fruits.index("banana")
print(position)  # 1
```

### `count()` — Count How Many Times Item Appears

```python
numbers = [1, 2, 3, 2, 4, 2, 5]

count = numbers.count(2)
print(count)  # 3
```

### `sort()` — Sort List in Place

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]

numbers.sort()
print(numbers)  # [1, 1, 2, 3, 4, 5, 6, 9]
```

You can also sort in reverse:

```python
numbers = [3, 1, 4, 1, 5]

numbers.sort(reverse=True)
print(numbers)  # [5, 4, 3, 1, 1]
```

### `reverse()` — Reverse List Order

```python
numbers = [1, 2, 3, 4, 5]

numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]
```

### `copy()` — Create a Copy of List

```python
original = [1, 2, 3]

copy = original.copy()
copy.append(4)

print(original)  # [1, 2, 3]
print(copy)      # [1, 2, 3, 4]
```

### `extend()` — Add Multiple Items

```python
fruits = ["apple", "banana"]

fruits.extend(["orange", "grape"])
print(fruits)  # ['apple', 'banana', 'orange', 'grape']
```

## Looping Through Lists

### Using a For Loop

```python
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)
```

**Output:**

```sh
apple
banana
orange
```

### Using Index

```python
fruits = ["apple", "banana", "orange"]

for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")
```

**Output:**

```sh
0: apple
1: banana
2: orange
```

## Checking if Item Exists

```python
fruits = ["apple", "banana", "orange"]

if "banana" in fruits:
    print("Banana is in the list")

if "grape" not in fruits:
    print("Grape is not in the list")
```

**Output:**

```sh
Banana is in the list
Grape is not in the list
```

## Getting List Length

```python
fruits = ["apple", "banana", "orange"]

print(len(fruits))  # 3
```

## Real-World Examples

### Example 1: To-Do List Manager

```python
tasks = []

while True:
    action = input("(a)dd, (v)iew, (r)emove, (q)uit: ")
    
    if action == "a":
        task = input("Enter task: ")
        tasks.append(task)
    
    elif action == "v":
        for i, task in enumerate(tasks):
            print(f"{i+1}. {task}")
    
    elif action == "r":
        num = int(input("Remove task number: ")) - 1
        tasks.pop(num)
    
    elif action == "q":
        break
```

### Example 2: Calculate Average Score

```python
scores = [85, 90, 78, 92, 88]

average = sum(scores) / len(scores)
print(f"Average score: {average}")  # Average score: 86.6
```

### Example 3: Remove Duplicates

```python
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

unique = list(set(numbers))
print(unique)  # [1, 2, 3, 4]
```

## Common Mistakes

**1. Forgetting that indexing starts at 0**

```python
# ❌ Wrong
fruits = ["apple", "banana", "orange"]
print(fruits[1])  # This is banana, not apple!

# ✅ Correct
print(fruits[0])  # apple
```

**2. Trying to access an index that doesn't exist**

```python
# ❌ Error
fruits = ["apple", "banana"]
print(fruits[5])  # IndexError!

# ✅ Check length first
if len(fruits) > 5:
    print(fruits[5])
```

**3. Confusing `remove()` and `pop()`**

```python
# remove() takes the item value
fruits.remove("apple")

# pop() takes the index
fruits.pop(0)
```

**4. Not realizing `sort()` modifies the original list**

```python
# ❌ If you need the original
numbers = [3, 1, 2]
numbers.sort()  # Original is now [1, 2, 3]

# ✅ Use sorted() if you want to keep original
numbers = [3, 1, 2]
sorted_numbers = sorted(numbers)  # Original stays [3, 1, 2]
```

## Key Takeaways

- Lists are ordered collections of items
- Access items using index (starting from 0)
- Use negative indices to count from the end
- Lists are changeable—you can modify them
- Methods like `append()`, `remove()`, `pop()` modify the list
- Use `for` loops to iterate through lists
- Check list length with `len()`
- Use `in` to check if item exists

---

## Practice Exercises

1. Create a list of 5 favorite movies and print each one.
2. Write a program that asks the user to add items to a shopping list and prints it.
3. Create a list of numbers and find the highest and lowest values.
4. Build a program that removes duplicate items from a list.
5. Write a program that reverses a list without using the `reverse()` method.

---

## Solutions

```python
# Exercise 1: Favorite Movies
favorite_movies = ["Inception", "The Matrix", "Interstellar", "Pulp Fiction", "Spirited Away"]
print("My favorite movies:")
for movie in favorite_movies:
    print(f"- {movie}")

# Exercise 2: Shopping List
shopping_list = []
while True:
    item = input("Add an item to your shopping list (or 'done' to finish): ")
    if item.lower() == 'done':
        break
    shopping_list.append(item)

print("\nYour Shopping List:")
if shopping_list:
    for item in shopping_list:
        print(f"- {item}")
else:
    print("Your list is empty.")

# Exercise 3: Highest and Lowest Values
numbers = [45, 23, 89, 12, 77, 5, 99, 34]
if numbers:
    highest = numbers[0]
    lowest = numbers[0]
    for num in numbers:
        if num > highest:
            highest = num
        if num < lowest:
            lowest = num
    print(f"\nNumbers: {numbers}")
    print(f"Highest value: {highest}")
    print(f"Lowest value: {lowest}")
else:
    print("\nList is empty, cannot find highest/lowest.")

# Exercise 4: Remove Duplicates
items_with_duplicates = ["apple", "banana", "apple", "orange", "grape", "banana", "apple"]
unique_items = []
for item in items_with_duplicates:
    if item not in unique_items:
        unique_items.append(item)
print(f"\nOriginal list with duplicates: {items_with_duplicates}")
print(f"List after removing duplicates: {unique_items}")

# Exercise 5: Reverse a List (without reverse() method)
original_list = [10, 20, 30, 40, 50]
reversed_list = []
for i in range(len(original_list) - 1, -1, -1):
    reversed_list.append(original_list[i])
print(ff"\nOriginal list: {original_list}")
print(f"Reversed list: {reversed_list}")
# Alternative for Exercise 5: Reverse a List (without reverse() method)
# Using slicing (creates a new list)
original_list_slice = [10, 20, 30, 40, 50]
reversed_list_slice = original_list_slice[::-1]
print(f"Reversed list (using slicing): {reversed_list_slice}")

```

---

> **Next lesson:** [List Comprehensions](list-comprehensions)

---
