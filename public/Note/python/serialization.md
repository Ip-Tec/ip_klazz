# Data Serialization in Python

## What is Serialization?

**Serialization** is the process of converting a data structure or object (like a Python dictionary or a custom object) into a format that can be stored (e.g., in a file) or transmitted (e.g., over a network) and then reconstructed later.

The reverse process—converting the stored format back into an object—is called **deserialization**.

Think of it like packaging a piece of furniture for shipping. You disassemble it (serialize), ship it, and the recipient reassembles it (deserialize).

In Python, the two most common serialization formats are **JSON** and **Pickle**.

## JSON (JavaScript Object Notation)

JSON is a lightweight, human-readable text format. It is the most widely used format for data exchange on the web. Python's built-in **json** module makes it easy to work with.

### Python to JSON (Serialization)

- **json.dumps()**: Serializes a Python object to a JSON formatted **string**.
- **json.dump()**: Serializes a Python object and writes it to a **file**.

```python
import json

# A Python dictionary
person = {
    "name": "Alice",
    "age": 30,
    "isStudent": False,
    "courses": ["Math", "Science"]
}

# Serialize to a string
json_string = json.dumps(person, indent=4)
print("JSON String:")
print(json_string)

# Serialize to a file
with open("person.json", "w") as f:
    json.dump(person, f, indent=4)

print("\nData saved to person.json")
```

The **indent=4** argument makes the JSON output human-readable (pretty-printing).

### JSON to Python (Deserialization)

- **json.loads()**: Deserializes a JSON formatted **string** into a Python object.
- **json.load()**: Reads from a **file** and deserializes its JSON content into a Python object.

```python
import json

# Deserialize from the string we created earlier
json_string = '{"name": "Alice", "age": 30, "isStudent": false, "courses": ["Math", "Science"]}'
data_from_string = json.loads(json_string)
print(f"Data from string: {data_from_string}")

# Deserialize from the file
with open("person.json", "r") as f:
    data_from_file = json.load(f)

print(f"Data from file: {data_from_file}")
print(f"Name: {data_from_file['name']}")
```

### JSON Data Types

JSON supports a limited set of data types. Here's how they map to Python:

| JSON          | Python        |
|---------------|---------------|
| object        | dict          |
| array         | list          |
| string        | str           |
| number (int)  | int           |
| number (real) | float         |
| true          | True          |
| false         | False         |
| null          | None          |

**Important:** JSON can only serialize basic types. It cannot handle complex Python objects like custom classes, tuples, or sets directly.

## Pickle

Pickle is a Python-specific binary serialization format. Because it's specific to Python, it can serialize almost any Python object, including custom classes, functions, and more.

### Python to Pickle (Serialization)

- **pickle.dumps()**: Serializes a Python object to a **bytes** object.
- **pickle.dump()**: Serializes a Python object and writes it to a **file** in binary mode.

```python
import pickle

class Player:
    def __init__(self, name, level):
        self.name = name
        self.level = level

    def display(self):
        print(f"Player: {self.name}, Level: {self.level}")

player_obj = Player("Gandalf", 20)

# Serialize to a file
with open("player.pkl", "wb") as f: # "wb" for write binary
    pickle.dump(player_obj, f)

print("Player object saved to player.pkl")
```

### Pickle to Python (Deserialization)

- **pickle.loads()**: Deserializes a **bytes** object into a Python object.
- **pickle.load()**: Reads from a binary **file** and deserializes its content.

```python
import pickle

# Make sure the Player class is defined in this script too!
class Player:
    def __init__(self, name, level):
        self.name = name
        self.level = level

    def display(self):
        print(f"Player: {self.name}, Level: {self.level}")

with open("player.pkl", "rb") as f: # "rb" for read binary
    loaded_player = pickle.load(f)

print("Player object loaded:")
loaded_player.display()
```

**Security Warning:** The **pickle** module is **not secure**. Never unpickle data from an untrusted or unauthenticated source, as it can execute arbitrary code.

## JSON vs. Pickle

| Feature             | JSON                                  | Pickle                                |
|---------------------|---------------------------------------|---------------------------------------|
| **Format**          | Human-readable text                   | Binary format                         |
| **Language Support**| Universal (JavaScript, Java, C++, etc.) | Python-specific                       |
| **Data Types**      | Limited (dict, list, str, int, etc.)  | Supports almost all Python objects    |
| **Security**        | Secure                                | **Not secure**                        |
| **Speed & Size**    | Slower and can be larger              | Faster and more compact               |

**When to use which?**

- Use **JSON** when you need to interoperate with other systems, when the data needs to be human-readable, or when security is a concern.
- Use **Pickle** for short-term storage or communication between Python programs, especially when you need to serialize complex custom objects.

## Key Takeaways

- **Serialization** is the process of converting an object to a storable/transmittable format.
- **JSON** is a human-readable, language-independent text format ideal for web APIs and configuration files.
- **Pickle** is a Python-specific binary format that can handle complex objects but is not secure.
- Use **json.dump(s)** and **json.load(s)** for JSON.
- Use **pickle.dump(s)** and **pickle.load(s)** for Pickle.

## Practice Exercises

1. **Save Configuration**: Create a dictionary with some configuration settings (e.g., **{"theme": "dark", "font_size": 14}**). Serialize it to a JSON file named **config.json**.
2. **Load Configuration**: Write a script that reads **config.json** and prints the theme setting.
3. **Save Game State**: Create a simple **GameState** object with attributes like **score** and **inventory** (a list). Use **pickle** to save an instance of this object to a file.
4. **Load Game State**: Write a script to load the pickled **GameState** object and print the player's score.

---

## Solutions

```python
import json
import pickle

# Exercises 1 & 2: JSON Configuration
config = {"theme": "dark", "font_size": 14, "show_sidebar": True}

# Save to JSON
with open("config.json", "w") as f:
    json.dump(config, f, indent=4)
print("Configuration saved to config.json")

# Load from JSON
with open("config.json", "r") as f:
    loaded_config = json.load(f)
print(f"Loaded theme: {loaded_config['theme']}")

print("---")

# Exercises 3 & 4: Pickle Game State
class GameState:
    def __init__(self, score, inventory):
        self.score = score
        self.inventory = inventory

# Create and save the game state
game = GameState(score=1500, inventory=["sword", "shield", "potion"])

with open("gamestate.pkl", "wb") as f:
    pickle.dump(game, f)
print("Game state saved.")

# Load the game state
with open("gamestate.pkl", "rb") as f:
    loaded_game = pickle.load(f)

print(f"Loaded score: {loaded_game.score}")
print(f"Loaded inventory: {loaded_game.inventory}")

```

---

> **Next lesson:** [List Sorting and Filtering](sorting-filtering)

---
