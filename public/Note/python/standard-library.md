# The Python Standard Library

## Introduction

Python comes with a vast collection of built-in modules known as the **Standard Library**. This library provides tools for a wide variety of tasks, from mathematical calculations to working with the operating system. Think of it as a pre-packaged toolkit that you can use in any Python project without needing to install anything extra.

Learning to use the Standard Library is essential because it saves you time, helps you write more robust code, and allows you to perform complex tasks with just a few lines of code.

---

## Why Use the Standard Library?

- **It's Included**: If you have Python, you have the Standard Library. No installation needed.
- **It's Reliable**: The modules are well-tested, documented, and maintained by the Python core developers.
- **It's Efficient**: Many modules are written in C for high performance.
- **It's Consistent**: The modules follow standard Python conventions, making them easy to learn.

---

## Exploring Key Modules

The Standard Library is huge, but a few key modules are used very frequently.

### The **math** Module

Provides access to mathematical functions.

```python
import math

# Constants
print(f"Pi: {math.pi}")

# Functions
print(f"Square root of 25: {math.sqrt(25)}")
print(f"5 to the power of 3: {math.pow(5, 3)}")
print(f"Ceiling of 5.3: {math.ceil(5.3)}") # Rounds up
print(f"Floor of 5.8: {math.floor(5.8)}")   # Rounds down
```

### The **random** Module

Used for generating pseudo-random numbers.

```python
import random

# Random float between 0.0 and 1.0
print(f"Random float: {random.random()}")

# Random integer in a range (inclusive)
print(f"Random integer (1-10): {random.randint(1, 10)}")

# Random choice from a list
fruits = ["apple", "banana", "cherry"]
print(f"Random fruit: {random.choice(fruits)}")

# Shuffle a list
random.shuffle(fruits)
print(f"Shuffled fruits: {fruits}")
```

### The **datetime** Module

Provides classes for working with dates and times.

```python
import datetime

# Get current date and time
now = datetime.datetime.now()
print(f"Current time: {now}")

# Format the date as a string
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
print(f"Formatted time: {formatted}")

# Time calculations
yesterday = now - datetime.timedelta(days=1)
print(f"Yesterday was: {yesterday}")
```

### The **os** Module

Provides a way to interact with the operating system.

```python
import os

# Get current working directory
print(f"Current directory: {os.getcwd()}")

# List files in a directory
print(f"Files in current directory: {os.listdir()}")

# Check if a path exists
path_exists = os.path.exists("my_folder")
print(f"Does 'my_folder' exist? {path_exists}")
```

### The **json** Module

For working with JSON (JavaScript Object Notation) data, a common format for data exchange.

```python
import json

# Python dictionary
person = {"name": "Alice", "age": 30}

# Convert Python dict to JSON string
json_string = json.dumps(person)
print(f"JSON string: {json_string}")

# Convert JSON string back to Python dict
data = json.loads(json_string)
print(f"Python dictionary: {data}")
print(f"Name: {data['name']}")
```

---

## How to Discover More Modules

1. **The Official Documentation**: The Python Standard Library documentation is the best place to explore all available modules.
2. **The **help()** function**: Use the built-in **help()** function in a Python shell.

    ```python
    import math
    help(math)
    ```

3. **The **dir()** function**: Get a quick list of what a module contains.

    ```python
    import random
    print(dir(random))
    ```

---

## Key Takeaways

- The Standard Library is a core part of Python.
- It provides modules for many common tasks like math, random numbers, and file system interaction.
- Always check if a standard module can solve your problem before looking for a third-party package.
- Use the official documentation to discover new modules.

---

## Practice Exercises

1. Use the **math** module to calculate the factorial of 5.
2. Use the **random** module to pick a random winner from a list of names: **["Leo", "Don", "Raph", "Mikey"]**.
3. Use the **datetime** module to print the current day of the week.
4. Use the **os** module to create a new directory named **test_dir**.

---

## Solutions

```python
# Exercise 1: Factorial
import math
print(f"Factorial of 5 is: {math.factorial(5)}")

# Exercise 2: Random Winner
import random
winners = ["Leo", "Don", "Raph", "Mikey"]
print(f"The random winner is: {random.choice(winners)}")

# Exercise 3: Day of the week
import datetime
now = datetime.datetime.now()
# %A gives the full weekday name
print(f"Today is: {now.strftime('%A')}")

# Exercise 4: Create directory
import os
dir_name = "test_dir"
if not os.path.exists(dir_name):
    os.mkdir(dir_name)
    print(f"Directory '{dir_name}' created.")
else:
    print(f"Directory '{dir_name}' already exists.")

```

---

> **Next lesson:** [pip and Installing Packages](pip-packages)