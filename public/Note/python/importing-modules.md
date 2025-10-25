
# Importing Modules

Modules are Python files containing statements and definitions. They allow you to logically organize your code, making it more manageable and reusable. The Python Standard Library is a vast collection of modules, and you can create your own.

## The **import** Statement

The simplest way to use a module is with the **import** statement.

### Syntax

```python
import module_name
```

This makes the module's contents available, but you must prefix them with the module's name.

### Example: The **math** module

```python
import math

print(math.pi)
print(math.sqrt(16))
```

## The **from ... import** Statement

This statement allows you to import specific names from a module directly into the current namespace.

### Syntax

```python
from module_name import name1, name2
```

### Example

```python
from math import pi, sqrt

print(pi)       # No 'math.' prefix needed
print(sqrt(16))
```

## Importing with an Alias (**as**)

You can provide an alias or a shorter name for an imported module or function. This is useful for avoiding name conflicts or for shortening long names.

### Syntax

```python
import module_name as alias
from module_name import name as alias_name
```

### Example

```python
import math as m
from math import factorial as fact

print(m.pi)
print(fact(5))
```

It is a strong convention to import popular data science libraries like **numpy** and **pandas** with specific aliases:

```python
import numpy as np
import pandas as pd
```

## Importing All Names **(*)**

You can import all names from a module using **(*)**.

```python
from math import *
```

However, **this is strongly discouraged**. It pollutes the global namespace, makes it unclear where functions are coming from, and can lead to name clashes.

## How Python Finds Modules

Python searches for modules in this order:

1. The current directory.
2. Directories in the **PYTHONPATH** environment variable.
3. The standard library directories.

You can see the full search path in **sys.path**.

---

## Real-World Examples

### **os** module: Interacting with the OS

```python
import os

# Get the current working directory
cwd = os.getcwd()
print(f"Current Directory: {cwd}")

# List files and directories
print(os.listdir(cwd))
```

### **datetime** module: Working with dates

```python
from datetime import datetime

now = datetime.now()
print(f"Current time: {now.strftime('%Y-%m-%d %H:%M:%S')}")
```

### **random** module: Generating random numbers

```python
import random

# Random integer between 1 and 10
random_int = random.randint(1, 10)
print(f"Random number: {random_int}")

# Random choice from a list
choices = ['apple', 'banana', 'cherry']
print(f"Random choice: {random.choice(choices)}")
```

---

## Key Takeaways

- Use **import module** to import a whole module.
- Use **from module import name** to import specific parts.
- Use **as** to create aliases for modules and names.
- Avoid using **from module import ***.

---

## Practice Exercises

1. **Area Calculator**: Import the **math** module and write a function that calculates the area of a circle (**π * r^2**).
2. **Random Name Picker**: Create a list of names. Use the **random** module to pick and print a random name from the list.

---

## Solutions

```python
# Exercise 1: Area Calculator
import math

def circle_area(radius):
  return math.pi * (radius ** 2)

print(f"Area of a circle with radius 5: {circle_area(5)}")


# Exercise 2: Random Name Picker
import random

names = ["Alice", "Bob", "Charlie", "Diana"]
random_name = random.choice(names)
print(f"The chosen one is: {random_name}")
```

---
> **Next lesson:** [Creating Your Own Modules](creating-modules)
