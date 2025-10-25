
# Creating Your Own Modules

Any Python file (**.py**) can be a module. This allows you to break down large programs into smaller, more manageable, and reusable files.

## Creating a Simple Module

Let's create a module for simple math operations.

1. **Create the module file:**
    Save this code as **my_math.py**:

    ```python
    # my_math.py
    PI = 3.14159

    def add(a, b):
        return a + b

    def subtract(a, b):
        return a - b
    ```

2. **Create the main script:**
    In the same directory, save this code as **main.py**:

    ```python
    # main.py
    import my_math

    result1 = my_math.add(10, 5)
    result2 = my_math.subtract(10, 5)

    print(f"PI is {my_math.PI}")
    print(f"10 + 5 = {result1}")
    print(f"10 - 5 = {result2}")
    ```

When you run **main.py**, it will import **my_math.py** and use its contents.

## The **if **name** == "**main**"** Block

This is a common and important construct in Python modules. It allows a module to have code that runs only when it is executed as a script, but not when it is imported.

- ****name**** is a special variable that Python sets.
- If you run the file directly, ****name**** is set to **"**main**"**.
- If you import the file, ****name**** is set to the module's filename.

### Example

Let's modify **my_math.py**:

```python
# my_math.py
PI = 3.14159

def add(a, b):
    return a + b

# This block runs only when my_math.py is executed directly
if __name__ == "__main__":
    print("Running my_math.py as a script.")
    print(add(2, 3)) # Example usage or tests
```

- If you run **python my_math.py**, it will print "Running my_math.py as a script." and "5".
- If you run **main.py** (which imports **my_math**), this block will not execute.

## Packages: Modules in a Directory

A package is a collection of modules organized in a directory hierarchy. To create a package, you need a directory containing an ****init**.py** file.

### Example Structure

```
my_project/
├── main.py
└── my_package/
    ├── __init__.py
    ├── module1.py
    └── module2.py
```

- ****init**.py**: This file can be empty. It tells Python that the directory should be treated as a package. You can also use it to run initialization code for the package.

### Importing from a Package

```python
# main.py
from my_package.module1 import function1
from my_package import module2

function1()
module2.function2()
```

---

## Key Takeaways

- Any **.py** file is a module.
- Use **if **name** == "**main**"** to write code that runs only when the file is executed directly.
- Organize related modules into a directory with an ****init**.py** file to create a package.

---

## Practice Exercises

1. **Greeter Module**: Create a module **greetings.py** with functions **say_hello(name)** and **say_goodbye(name)**. Create a **main.py** to import and use these functions.
2. **Module with Main Block**: Add an **if **name** == "**main**"** block to **greetings.py** that demonstrates how the functions work.

---

## Solutions

```python
# Exercise 1 & 2: greetings.py
# greetings.py
def say_hello(name):
    return f"Hello, {name}!"

def say_goodbye(name):
    return f"Goodbye, {name}!"

# This block runs only when greetings.py is executed directly
if __name__ == "__main__":
    print("Demonstrating the greetings module.")
    print(say_hello("Alice"))
    print(say_goodbye("Bob"))

# main.py
import greetings

print(greetings.say_hello("World"))
```

---
> **Next lesson:** [The Python Standard Library](standard-library)
