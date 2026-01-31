
# Nested Data Structures

## What Are Nested Data Structures?

Nested data structures are collections inside collections. You can put lists inside lists, dictionaries inside dictionaries, or mix them together. This lets you organize complex data in a hierarchical way.

Think of nested structures like folders inside folders on your computer—you can have multiple levels of organization.

## Nested Lists

A nested list is a list that contains other lists:

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix)
```

**Output:** `[[1, 2, 3], [4, 5, 6], [7, 8, 9]]`

### Accessing Nested List Items

Use multiple indices to access items at different levels:

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix[0])        # [1, 2, 3]
print(matrix[0][0])     # 1
print(matrix[1][2])     # 6
print(matrix[2][1])     # 8
```

### Looping Through Nested Lists

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for row in matrix:
    for num in row:
        print(num, end=" ")
    print()
```

**Output:**

```
1 2 3
4 5 6
7 8 9
```

### Modifying Nested Lists

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

matrix[0][1] = 20
print(matrix)  # [[1, 20, 3], [4, 5, 6]]

matrix[1].append(7)
print(matrix)  # [[1, 20, 3], [4, 5, 6, 7]]
```

## Nested Dictionaries

A nested dictionary is a dictionary that contains other dictionaries:

```python
students = {
    "student1": {"name": "Alice", "age": 20, "grade": "A"},
    "student2": {"name": "Bob", "age": 21, "grade": "B"},
    "student3": {"name": "Charlie", "age": 19, "grade": "A"}
}

print(students)
```

### Accessing Nested Dictionary Items

```python
students = {
    "student1": {"name": "Alice", "age": 20, "grade": "A"},
    "student2": {"name": "Bob", "age": 21, "grade": "B"}
}

print(students["student1"])              # {'name': 'Alice', 'age': 20, 'grade': 'A'}
print(students["student1"]["name"])      # Alice
print(students["student2"]["grade"])     # B
```

### Looping Through Nested Dictionaries

```python
students = {
    "student1": {"name": "Alice", "age": 20},
    "student2": {"name": "Bob", "age": 21}
}

for student_id, info in students.items():
    print(f"{student_id}: {info['name']}, {info['age']}")
```

**Output:**

```
student1: Alice, 20
student2: Bob, 21
```

### Modifying Nested Dictionaries

```python
students = {
    "student1": {"name": "Alice", "age": 20}
}

students["student1"]["age"] = 21
students["student1"]["email"] = "alice@example.com"

print(students)
# {'student1': {'name': 'Alice', 'age': 21, 'email': 'alice@example.com'}}
```

## Mixed Nested Structures

You can combine lists and dictionaries:

### List of Dictionaries

```python
users = [
    {"id": 1, "name": "Alice", "email": "alice@example.com"},
    {"id": 2, "name": "Bob", "email": "bob@example.com"},
    {"id": 3, "name": "Charlie", "email": "charlie@example.com"}
]

print(users[0])              # {'id': 1, 'name': 'Alice', 'email': 'alice@example.com'}
print(users[0]["name"])      # Alice
print(users[2]["email"])     # charlie@example.com
```

### Dictionary with List Values

```python
company = {
    "name": "Tech Corp",
    "employees": ["Alice", "Bob", "Charlie"],
    "departments": ["Engineering", "Sales", "HR"],
    "years_established": 2010
}

print(company["employees"])        # ['Alice', 'Bob', 'Charlie']
print(company["employees"][0])     # Alice
print(company["departments"][1])   # Sales
```

### Complex Mixed Structure

```python
company = {
    "name": "Tech Corp",
    "departments": [
        {
            "name": "Engineering",
            "employees": ["Alice", "Bob"],
            "budget": 100000
        },
        {
            "name": "Sales",
            "employees": ["Charlie", "Diana"],
            "budget": 50000
        }
    ]
}

print(company["departments"][0]["name"])        # Engineering
print(company["departments"][0]["employees"])   # ['Alice', 'Bob']
print(company["departments"][1]["budget"])      # 50000
```

## Flattening Nested Lists

Sometimes you need to convert a nested list into a flat list:

### Using Nested Loops

```python
nested = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
flat = []

for sublist in nested:
    for item in sublist:
        flat.append(item)

print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Using List Comprehension

```python
nested = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]
flat = [item for sublist in nested for item in sublist]

print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Real-World Examples

### Example 1: Class Grade Book

```python
school = {
    "class_A": {
        "students": [
            {"name": "Alice", "math": 85, "english": 90},
            {"name": "Bob", "math": 78, "english": 82}
        ]
    },
    "class_B": {
        "students": [
            {"name": "Charlie", "math": 92, "english": 88},
            {"name": "Diana", "math": 88, "english": 95}
        ]
    }
}

# Access student score
alice_math = school["class_A"]["students"][0]["math"]
print(f"Alice's math score: {alice_math}")  # 85

# Loop through all students
for class_name, class_info in school.items():
    for student in class_info["students"]:
        print(f"{student['name']}: Math {student['math']}, English {student['english']}")
```

### Example 2: E-commerce Product Catalog

```python
catalog = {
    "electronics": [
        {"name": "Laptop", "price": 999, "stock": 5},
        {"name": "Phone", "price": 699, "stock": 10}
    ],
    "books": [
        {"name": "Python Guide", "price": 29.99, "stock": 20},
        {"name": "Web Development", "price": 34.99, "stock": 15}
    ]
}

# Access product
laptop_price = catalog["electronics"][0]["price"]
print(f"Laptop: ${laptop_price}")

# Calculate total inventory value
for category, products in catalog.items():
    total_value = sum(p["price"] * p["stock"] for p in products)
    print(f"{category.capitalize()}: ${total_value}")
```

### Example 3: API Response Data

```python
api_response = {
    "status": "success",
    "data": {
        "user": {
            "id": 123,
            "name": "John Doe",
            "email": "john@example.com"
        },
        "posts": [
            {"id": 1, "title": "First Post", "likes": 5},
            {"id": 2, "title": "Second Post", "likes": 10}
        ]
    }
}

# Access nested data
user_name = api_response["data"]["user"]["name"]
post_title = api_response["data"]["posts"][0]["title"]
post_likes = api_response["data"]["posts"][1]["likes"]

print(f"User: {user_name}")
print(f"Latest post: {post_title} ({post_likes} likes)")
```

### Example 4: Game State

```python
game = {
    "player": {
        "name": "Hero",
        "health": 100,
        "inventory": [
            {"name": "sword", "damage": 15},
            {"name": "shield", "defense": 10}
        ]
    },
    "map": [
        [0, 0, 1, 0],
        [0, 1, 1, 0],
        [1, 0, 0, 1],
        [0, 0, 1, 0]
    ]
}

# Access game data
player_name = game["player"]["name"]
player_health = game["player"]["health"]
sword_damage = game["player"]["inventory"][0]["damage"]

print(f"{player_name} - Health: {player_health}")
print(f"Sword damage: {sword_damage}")
```

### Example 5: Social Media Friends

```python
users = [
    {
        "id": 1,
        "name": "Alice",
        "friends": [2, 3],
        "posts": [
            {"id": 101, "text": "Hello World", "likes": 5},
            {"id": 102, "text": "Python is fun", "likes": 10}
        ]
    },
    {
        "id": 2,
        "name": "Bob",
        "friends": [1, 3],
        "posts": [
            {"id": 201, "text": "Learning Python", "likes": 3}
        ]
    }
]

# Access nested data
alice = users[0]
print(f"User: {alice['name']}")
print(f"Friends: {alice['friends']}")
print(f"Latest post: {alice['posts'][-1]['text']}")
```

## Accessing Nested Data Safely

Use `.get()` to avoid errors when accessing nested dictionaries:

```python
user = {"name": "Alice", "profile": {"age": 20}}

# ❌ Risky - KeyError if keys don't exist
email = user["profile"]["email"]

# ✅ Safe - returns None if key doesn't exist
email = user.get("profile", {}).get("email")
```

## Modifying Deeply Nested Data

```python
data = {
    "level1": {
        "level2": {
            "level3": {
                "value": 100
            }
        }
    }
}

# Access and modify
data["level1"]["level2"]["level3"]["value"] = 200
print(data["level1"]["level2"]["level3"]["value"])  # 200
```

## Common Mistakes

**1. Forgetting to use enough brackets**

```python
# ❌ Wrong
matrix = [[1, 2], [3, 4]]
print(matrix[0])      # [1, 2] - this is the whole row
print(matrix[0, 0])   # TypeError - not how Python works

# ✅ Correct
print(matrix[0][0])   # 1
```

**2. Confusing dictionary and list access**

```python
# ❌ Wrong
user = {"name": "Alice"}
print(user[0])  # KeyError - keys are strings, not integers

# ✅ Correct
print(user["name"])  # Alice
```

**3. Not checking if key exists before accessing**

```python
data = {"a": 1}

# ❌ Risky
print(data["b"])  # KeyError

# ✅ Safe
if "b" in data:
    print(data["b"])
```

**4. Creating uneven nested structures**

```python
# ❌ Inconsistent structure
users = [
    {"name": "Alice", "age": 20},
    {"name": "Bob"}  # Missing "age" key
]

# ✅ Consistent structure
users = [
    {"name": "Alice", "age": 20},
    {"name": "Bob", "age": 21}
]
```

## Key Takeaways

- Nested structures are collections inside collections
- Use multiple indices/keys to access deeply nested items
- Lists of dictionaries are common for storing structured data
- You can mix lists and dictionaries for complex data organization
- Use `get()` to safely access dictionary values
- Loop through nested structures using nested loops
- Flatten nested lists with list comprehension: `[item for sublist in nested for item in sublist]`
- Be consistent with your data structure design

---

## Practice Exercises

1. Create a nested list (3x3 matrix) and print specific elements.
2. Create a nested dictionary representing a person with multiple addresses.
3. Write a program that loops through a list of dictionaries and prints specific values.
4. Create a structure with products, categories, and prices, then calculate totals.
5. Flatten a deeply nested list using list comprehension.

---

> **Next lesson:** [Defining Functions](functions-basics)

---
