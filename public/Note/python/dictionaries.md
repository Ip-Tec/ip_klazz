
# Dictionaries

## What is a Dictionary?

A dictionary is a collection of key-value pairs. Instead of accessing items by position like lists, you access them by a unique key. Dictionaries are useful when you want to store related information together.

Think of a dictionary like a real dictionary—you look up a word (key) to get its definition (value).

## Key Characteristics

- **Unordered** — Items have no fixed position (Python 3.7+ maintains insertion order)
- **Mutable** — You can add, remove, and change items
- **Keyed** — Access items using keys instead of indices
- **Keys are unique** — No duplicate keys allowed
- **Keys must be immutable** — Use strings, numbers, or tuples as keys

## Creating Dictionaries

You create a dictionary using curly braces `{}` with key-value pairs:

```python
student = {"name": "John", "age": 20, "grade": "A"}
print(student)
```

**Output:** `{'name': 'John', 'age': 20, 'grade': 'A'}`

### Dictionaries with Different Data Types

```python
person = {
    "name": "Alice",
    "age": 25,
    "height": 5.8,
    "is_student": True,
    "hobbies": ["reading", "gaming"]
}

print(person)
```

### Creating an Empty Dictionary

```python
# Using curly braces
empty = {}
print(type(empty))  # <class 'dict'>

# Using dict() function
empty = dict()
print(type(empty))  # <class 'dict'>
```

## Accessing Dictionary Values

Use the key in square brackets to access the value:

```python
student = {"name": "John", "age": 20, "grade": "A"}

print(student["name"])    # John
print(student["age"])     # 20
print(student["grade"])   # A
```

### Using `get()` Method

The `get()` method is safer—it returns `None` if the key doesn't exist:

```python
student = {"name": "John", "age": 20}

print(student.get("name"))      # John
print(student.get("email"))     # None (no error)
print(student.get("email", "Not found"))  # Not found (default value)
```

## Adding and Modifying Items

### Add a New Item

```python
student = {"name": "John", "age": 20}

student["email"] = "john@example.com"
print(student)
# {'name': 'John', 'age': 20, 'email': 'john@example.com'}
```

### Modify Existing Item

```python
student = {"name": "John", "age": 20}

student["age"] = 21
print(student)  # {'name': 'John', 'age': 21}
```

### Update Multiple Items

```python
student = {"name": "John", "age": 20}

student.update({"age": 21, "grade": "A"})
print(student)  # {'name': 'John', 'age': 21, 'grade': 'A'}
```

## Removing Items

### `pop()` — Remove and Return Value

```python
student = {"name": "John", "age": 20, "grade": "A"}

age = student.pop("age")
print(age)       # 20
print(student)   # {'name': 'John', 'grade': 'A'}
```

### `del` — Delete Item

```python
student = {"name": "John", "age": 20, "grade": "A"}

del student["grade"]
print(student)  # {'name': 'John', 'age': 20}
```

### `clear()` — Remove All Items

```python
student = {"name": "John", "age": 20}

student.clear()
print(student)  # {}
```

## Dictionary Methods

### `keys()` — Get All Keys

```python
student = {"name": "John", "age": 20, "grade": "A"}

keys = student.keys()
print(keys)  # dict_keys(['name', 'age', 'grade'])

# Use in a loop
for key in student.keys():
    print(key)
```

**Output:**

```sh
name
age
grade
```

### `values()` — Get All Values

```python
student = {"name": "John", "age": 20, "grade": "A"}

values = student.values()
print(values)  # dict_values(['John', 20, 'A'])

# Use in a loop
for value in student.values():
    print(value)
```

**Output:**

```sh
John
20
A
```

### `items()` — Get All Key-Value Pairs

```python
student = {"name": "John", "age": 20, "grade": "A"}

items = student.items()
print(items)
# dict_items([('name', 'John'), ('age', 20), ('grade', 'A')])

# Use in a loop with unpacking
for key, value in student.items():
    print(f"{key}: {value}")
```

**Output:**

```sh
name: John
age: 20
grade: A
```

### `copy()` — Create a Copy

```python
original = {"name": "John", "age": 20}

copy = original.copy()
copy["age"] = 21

print(original)  # {'name': 'John', 'age': 20}
print(copy)      # {'name': 'John', 'age': 21}
```

## Looping Through Dictionaries

### Loop Through Keys

```python
student = {"name": "John", "age": 20, "grade": "A"}

for key in student:
    print(key)
```

**Output:**

```sh
name
age
grade
```

### Loop Through Values

```python
student = {"name": "John", "age": 20, "grade": "A"}

for value in student.values():
    print(value)
```

### Loop Through Key-Value Pairs

```python
student = {"name": "John", "age": 20, "grade": "A"}

for key, value in student.items():
    print(f"{key}: {value}")
```

## Checking if Key Exists

```python
student = {"name": "John", "age": 20}

if "name" in student:
    print("Name exists")

if "email" not in student:
    print("Email doesn't exist")
```

## Nested Dictionaries

You can store dictionaries inside dictionaries:

```python
students = {
    "student1": {"name": "John", "age": 20},
    "student2": {"name": "Alice", "age": 21},
    "student3": {"name": "Bob", "age": 19}
}

print(students["student1"]["name"])  # John
print(students["student2"]["age"])   # 21
```

## Real-World Examples

### Example 1: User Profile

```python
user = {
    "username": "john123",
    "email": "john@example.com",
    "age": 25,
    "is_active": True,
    "posts": 42
}

print(f"User: {user['username']}")
print(f"Posts: {user['posts']}")
```

### Example 2: Product Inventory

```python
inventory = {
    "apple": 50,
    "banana": 30,
    "orange": 45,
    "grape": 20
}

# Check stock
if inventory["apple"] > 0:
    print(f"Apples in stock: {inventory['apple']}")

# Update quantity
inventory["apple"] -= 5
print(f"After sale: {inventory['apple']}")
```

### Example 3: Grade Book

```python
grades = {
    "math": 85,
    "science": 90,
    "english": 78,
    "history": 88
}

total = sum(grades.values())
average = total / len(grades)

print(f"Total: {total}")
print(f"Average: {average}")
```

### Example 4: Student Records

```python
students = [
    {"name": "John", "age": 20, "gpa": 3.8},
    {"name": "Alice", "age": 21, "gpa": 3.9},
    {"name": "Bob", "age": 19, "gpa": 3.5}
]

for student in students:
    print(f"{student['name']}: GPA {student['gpa']}")
```

### Example 5: Configuration Settings

```python
config = {
    "host": "localhost",
    "port": 8000,
    "debug": True,
    "database": {
        "name": "myapp",
        "user": "admin",
        "password": "secret"
    }
}

print(f"Server: {config['host']}:{config['port']}")
print(f"Database: {config['database']['name']}")
```

## Common Mistakes

**1. Forgetting quotes around string keys**

```python
# ❌ Wrong - looks for variable named name
student = {name: "John"}

# ✅ Correct - uses string key
student = {"name": "John"}
```

**2. Trying to access non-existent key with bracket notation**

```python
student = {"name": "John"}

# ❌ Error
print(student["age"])  # KeyError

# ✅ Use get() instead
print(student.get("age"))  # None
```

**3. Using mutable objects as keys**

```python
# ❌ Error - lists can't be keys
data = {["name", "age"]: "John"}  # TypeError

# ✅ Use immutable objects
data = {("name", "age"): "John"}  # Tuple works
```

**4. Modifying dictionary during iteration**

```python
# ❌ Problematic
data = {"a": 1, "b": 2, "c": 3}
for key in data:
    del data[key]  # Can cause issues

# ✅ Create a copy of keys
data = {"a": 1, "b": 2, "c": 3}
for key in list(data.keys()):
    del data[key]  # Safe
```

## Key Takeaways

- Dictionaries store key-value pairs
- Use curly braces `{}` to create dictionaries
- Access values using keys: `dict[key]`
- Keys must be unique and immutable
- Use `get()` to safely access values
- Dictionaries are mutable—you can add, remove, and change items
- Use `keys()`, `values()`, `items()` to access parts of the dictionary
- Loop through dictionaries using `items()` for both key and value
- Dictionaries are perfect for organizing related data together

---

## Practice Exercises

1. Create a dictionary of your personal information (name, age, email, etc.).
2. Write a program that counts the frequency of words in a sentence using a dictionary.
3. Create a simple phone book where you store names and phone numbers.
4. Build a program that manages a to-do list with tasks and their status (done/not done).
5. Create a nested dictionary for a store inventory with categories and products.

---

## Solutions

```python

# Exercise 1: Personal Information Dictionary
my_info = {
    "name": "Alice Smith",
    "age": 30,
    "email": "alice.smith@example.com",
    "city": "New York",
    "occupation": "Software Engineer",
    "hobbies": ["reading", "hiking", "coding"]
}
print("My Personal Information:")
for key, value in my_info.items():
    print(f"{key.replace('_', ' ').title()}: {value}")

# Exercise 2: Word Frequency Counter
sentence = "this is a test this is only a test"
words = sentence.lower().split()
word_counts = {}

for word in words:
    word_counts[word] = word_counts.get(word, 0) + 1

print(f"\nWord frequency in '{sentence}':")
print(word_counts)

# Exercise 3: Simple Phone Book
phone_book = {
    "Alice": "123-456-7890",
    "Bob": "987-654-3210",
    "Charlie": "555-123-4567"
}

print("\nPhone Book:")
for name, number in phone_book.items():
    print(f"{name}: {number}")

# Add a new contact
phone_book["David"] = "111-222-3333"
print(f"Added David: {phone_book['David']}")

# Look up a contact
print(f"Bob's number: {phone_book.get('Bob', 'Not found')}")
print(f"Eve's number: {phone_book.get('Eve', 'Not found')}")

# Exercise 4: To-Do List Manager
todo_list = {
    "Buy groceries": "not done",
    "Finish Python exercises": "done",
    "Call mom": "not done",
    "Plan weekend trip": "done"
}

print("\nTo-Do List:")
for task, status in todo_list.items():
    print(f"- {task}: {status}")

# Mark a task as done
if"Call mom" in todo_list:
    todo_list["Call mom"] = "done"
print("\nUpdated To-Do List:")
for task, status in todo_list.items():
    print(f"- {task}: {status}")

# Exercise 5: Nested Dictionary for Store Inventory
store_inventory = {
    "Electronics": {
        "Laptop": {"price": 1200, "stock": 10},
        "Mouse": {"price": 25, "stock": 50},
        "Keyboard": {"price": 75, "stock": 30}
    },
    "Books": {
        "Python Crash Course": {"price": 30, "stock": 15},
        "Clean Code": {"price": 40, "stock": 8}
    },
    "Groceries": {
        "Milk": {"price": 3, "stock": 100},
        "Bread": {"price": 4, "stock": 50}
    }
}

print("\nStore Inventory:")
for category, products in store_inventory.items():
    print(f"--- {category} ---")
    for product_name, details in products.items():
        print(f"  {product_name}: Price=${details['price']}, Stock={details['stock']}")

# Accessing a specific item's stock
print(f"\nStock of Laptop: {store_inventory['Electronics']['Laptop']['stock']}")
# Example: Update stock for an item
if "Milk" in store_inventory["Groceries"]:
    store_inventory["Groceries"]["Milk"]["stock"] -= 5
print(f"Updated stock of Milk: {store_inventory['Groceries']['Milk']['stock']}")

```

---

> **Next lesson:** [Dictionary Comprehensions](dict-comprehensions)

---
