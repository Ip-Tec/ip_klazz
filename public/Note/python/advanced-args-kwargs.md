# Understanding *args and **kwargs in Python

## Introduction

You will often see ***args** and ****kwargs** as parameters in Python function definitions. They are used to allow a function to accept a variable number of arguments.

- ***args** (Non-Keyword Arguments): Collects extra **positional** arguments into a **tuple**.
- ****kwargs** (Keyword Arguments): Collects extra **keyword** arguments into a **dictionary**.

The names **args** and **kwargs** are a strong convention, but the important parts are the ***** and ****** prefixes.

## Using ***args**

***args** allows you to pass any number of positional arguments to your function. Python will gather them into a tuple.

```python
def my_sum(*args):
    print(f"Arguments received: {args}")
    total = 0
    for num in args:
        total += num
    return total

print(my_sum(1, 2, 3))       # Output: 10
print(my_sum(5, 10, 15, 20)) # Output: 50
print(my_sum())              # Output: 0
```

In the **my_sum** function, **args** becomes a tuple containing all the numbers passed to it.

## Using ****kwargs**

****kwargs** allows you to handle named arguments that you have not defined in advance. Python will gather them into a dictionary.

```python
def display_info(**kwargs):
    print(f"Keyword arguments received: {kwargs}")
    for key, value in kwargs.items():
        print(f"{key}: {value}")

display_info(name="Alice", age=30, city="New York")
# Output:
# name: Alice
# age: 30
# city: New York

display_info(track="Software Engineering", status="Active")
# Output:
# track: Software Engineering
# status: Active
```

In the **display_info** function, **kwargs** becomes a dictionary containing all the keyword arguments passed.

## Order of Arguments

When defining a function, the arguments must be in this specific order:

1. Standard arguments
2. ***args**
3. ****kwargs**

```python
def my_function(a, b, *args, **kwargs):
    print(f"a = {a}")
    print(f"b = {b}")
    print(f"args = {args}")
    print(f"kwargs = {kwargs}")

my_function(1, 2, 3, 4, 5, name="Alice", city="Wonderland")
```

**Output:**

```sh
a = 1
b = 2
args = (3, 4, 5)
kwargs = {'name': 'Alice', 'city': 'Wonderland'}
```

## Unpacking with `*` and `**`

The `*` and `**` operators can also be used when **calling** a function. This is known as unpacking.

### Unpacking a List or Tuple with `*`

You can use `*` to unpack a list or tuple into separate positional arguments.

```python
def add(a, b, c):
    return a + b + c

my_list = [1, 2, 3]

# This is equivalent to add(1, 2, 3)
result = add(*my_list)
print(result) # Output: 6
```

This is useful when you have a list of arguments that you want to pass to a function that expects individual arguments.

### Unpacking a Dictionary with `**`

You can use `**` to unpack a dictionary into separate keyword arguments.

```python
def display_user(username, status):
    print(f"User: {username}, Status: {status}")

user_data = {"username": "admin", "status": "active"}

# This is equivalent to display_user(username="admin", status="active")
display_user(**user_data)
```

## Real-World Use Case: Decorators

As seen in the lesson on decorators, `*args` and `**kwargs` are essential for creating decorators that can wrap any function, regardless of its arguments.

```python
import functools

def my_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("Something is happening before the function is called.")
        result = func(*args, **kwargs)
        print("Something is happening after the function is called.")
        return result
    return wrapper

@my_decorator
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice", greeting="Hi")
```

Without `*args` and `**kwargs`, the wrapper would have to be written specifically for the **greet** function's signature, making the decorator far less reusable.

## Key Takeaways

- `*args` collects a variable number of **positional** arguments into a **tuple**.
- `**kwargs` collects a variable number of **keyword** arguments into a **dictionary**.
- The argument order is: standard arguments, then `*args`, then `**kwargs`.
- The `*` operator can be used to **unpack** a list or tuple when calling a function.
- The `**` operator can be used to **unpack** a dictionary when calling a function.
- These features are crucial for writing flexible and reusable functions and decorators.

## Practice Exercises

1. **Flexible Product Function**: Write a function **multiply** that takes any number of arguments and returns their product.
2. **Configuration Printer**: Write a function **print_config** that accepts any number of keyword arguments and prints them out in the format **key -> value**.
3. **Function Applier**: Write a function **apply_func** that takes a function and a list of arguments, and then calls the function with those arguments unpacked.

---

## Solutions

```python
# Exercise 1: Flexible Product Function
def multiply(*args):
    if not args:
        return 0 # Or 1, depending on desired behavior for no input
    product = 1
    for num in args:
        product *= num
    return product

print(f"Product of 2, 3, 4 is: {multiply(2, 3, 4)}")
print(f"Product of 10, 2 is: {multiply(10, 2)}")

# Exercise 2: Configuration Printer
def print_config(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} -> {value}")

print_config(host="localhost", port=8080, debug=True)

# Exercise 3: Function Applier
def apply_func(func, arg_list):
    return func(*arg_list)

def add(a, b):
    return a + b

result = apply_func(add, [5, 10])
print(f"Result of applying add to [5, 10]: {result}")

```

---

> **Next lesson:** [String Formatting](string-formatting)

---
