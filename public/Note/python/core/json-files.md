---
Title: Working with JSON Files in Python
Description: Learn how to handle JSON data and files in Python.
---

## Working with JSON Files in Python

JSON (JavaScript Object Notation) is a popular format for storing and exchanging data. It's lightweight, easy for humans to read, and easy for machines to parse. In Python, JSON data looks very similar to a dictionary.

Python has a built-in `json` module that makes it simple to work with JSON.

### From Python Dictionary to JSON

You can convert a Python dictionary to a JSON string using `json.dumps()`.

```python
import json

# A Python dictionary
person = {
    "name": "Alice",
    "age": 16,
    "is_student": True,
    "courses": ["Math", "Science"]
}

# Convert to a JSON string
json_string = json.dumps(person, indent=4)

print(json_string)
```

The `indent=4` part makes the JSON string look pretty and readable.

### From JSON to Python Dictionary

To convert a JSON string back to a Python dictionary, use `json.loads()`.

```python
import json

json_string = '{"name": "Bob", "age": 17, "city": "Los Angeles"}'

# Convert to a Python dictionary
person_dict = json.loads(json_string)

print(person_dict['name'])  # Output: Bob
print(person_dict['age'])   # Output: 17
```

### Reading JSON from a File

Let's say you have a file called `data.json` with this content:

```json
{
    "username": "charlie_g",
    "score": 95,
    "achievements": [
        "Level 10",
        "Speed Runner"
    ]
}
```

You can read this file and convert it to a Python dictionary using `json.load()`.

```python
import json

with open('data.json', 'r') as file:
    data = json.load(file)
    print(data['username'])  # Output: charlie_g
```

### Writing JSON to a File

To write a Python dictionary to a JSON file, use `json.dump()`.

```python
import json

# A Python dictionary
new_data = {
    "player": "David",
    "level": 5,
    "items": ["sword", "shield"]
}

with open('player_data.json', 'w') as file:
    json.dump(new_data, file, indent=4)
```

This will create a file called `player_data.json` with the formatted JSON content.

JSON is a powerful way to work with data, especially when you're getting information from websites and APIs.

---

> **Next lesson:** [File Paths and Directories](file-paths)

---
