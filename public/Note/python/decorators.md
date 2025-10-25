# Decorators in Python

## What are Decorators?

Decorators are a powerful and Pythonic feature that allow you to add functionality to an existing function without permanently modifying its code. They are a form of **metaprogramming**.

A decorator is essentially a function that takes another function as an argument, adds some functionality, and then returns another function.

This is possible because in Python, functions are **first-class citizens**, which means they can be:

- Assigned to variables.
- Passed as arguments to other functions.
- Returned from other functions.

## A Simple Decorator

Let's build a simple decorator that logs when a function is executed.

### The Manual Way

First, let's see how we could do this manually.

```python
def log_function(func):
    def wrapper():
        print(f"Calling function: {func.__name__}")
        func()
        print(f"Finished function: {func.__name__}")
    return wrapper

def say_hello():
    print("Hello, world!")

# Now, let's "decorate" our function
decorated_hello = log_function(say_hello)
decorated_hello()
```

**Output:**

```sh
Calling function: say_hello
Hello, world!
Finished function: say_hello
```

Here, **log_function** is our decorator. It takes **say_hello**, defines a new function **wrapper** that adds the logging behavior, and returns **wrapper**.

### The Syntactic Sugar (**@**)

Python provides a much cleaner way to apply decorators using the **@** symbol.

```python
def log_function(func):
    def wrapper():
        print(f"Calling function: {func.__name__}")
        func()
        print(f"Finished function: {func.__name__}")
    return wrapper

@log_function
def say_hello():
    print("Hello, world!")

say_hello()
```

This code is equivalent to the previous example. The **@log_function** syntax is just a shortcut for **say_hello = log_function(say_hello)**.

## Decorating Functions with Arguments

What if our function takes arguments? We need to update our wrapper to accept them.

We can use ***args** and **kwargs** to create a generic wrapper that can handle any number of positional and keyword arguments.

```python
def log_function_with_args(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}, kwargs: {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@log_function_with_args
def add(a, b):
    return a + b

add(5, 3)
```

**Output:**

```sh
Calling add with args: (5, 3), kwargs: {}
add returned: 8
```

## Preserving Function Metadata

One issue with our current decorators is that they lose the original function's metadata (like its name and docstring).

```python
@log_function
def say_hello():
    """A simple function that says hello."""
    print("Hello!")

print(say_hello.__name__) # Output: wrapper
print(say_hello.__doc__)  # Output: None
```

To fix this, we can use **functools.wraps**.

```python
import functools

def log_function(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling function: {func.__name__}")
        result = func(*args, **kwargs)
        return result
    return wrapper

@log_function
def say_hello():
    """A simple function that says hello."""
    print("Hello!")

print(say_hello.__name__) # Output: say_hello
print(say_hello.__doc__)  # Output: A simple function that says hello.
```

**@functools.wraps** copies the metadata from the original function (**func**) to the wrapper function.

## Real-World Examples

### Example 1: Timing a Function

A decorator is perfect for measuring how long a function takes to run.

```python
import time
import functools

def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function {func.__name__} ran in {end_time - start_time:.4f}s")
        return result
    return wrapper

@timer
def slow_function(delay):
    time.sleep(delay)
    print("Function finished.")

slow_function(2)
```

**Output:**

```sh
Function finished.
Function slow_function ran in 2.0000s
```

### Example 2: Caching Results (Memoization)

A decorator can cache the results of a function, so if it's called with the same arguments again, it returns the cached result instead of re-computing it.

```python
import functools

def memoize(func):
    cache = {}
    @functools.wraps(func)
    def wrapper(*args):
        if args in cache:
            return cache[args]
        else:
            result = func(*args)
            cache[args] = result
            return result
    return wrapper

@memoize
@timer # Decorators can be stacked!
def slow_fibonacci(n):
    if n < 2:
        return n
    return slow_fibonacci(n-1) + slow_fibonacci(n-2)

print(slow_fibonacci(35))
```

Python's standard library actually provides a built-in decorator for this: **functools.lru_cache**.

## Key Takeaways

- Decorators add functionality to functions without changing their code.
- They use the **@** syntax for easy application.
- Use ***args and **kwargs** to create decorators that work with any function.
- Use **@functools.wraps** to preserve the original function's metadata.
- Decorators are used for logging, timing, caching, access control, and more.

## Practice Exercises

1. **Debug Decorator**: Create a decorator **debug** that prints the arguments and the return value of a function.
2. **Admin-Only Decorator**: Create a decorator **admin_only** that checks if a global variable **user_role** is **"admin"** before running the function. If not, it should print an error message.

---

## Solutions

```python
import functools

# Exercise 1: Debug Decorator
def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with arguments: {args}, {kwargs}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@debug
def multiply(a, b):
    return a * b

multiply(5, 3)

# Exercise 2: Admin-Only Decorator
user_role = "guest" # Global variable for demonstration

def admin_only(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        if user_role == "admin":
            return func(*args, **kwargs)
        else:
            print("Access denied: Admins only.")
    return wrapper

@admin_only
def delete_sensitive_data():
    print("Sensitive data deleted.")

# Try as a guest
delete_sensitive_data() # Output: Access denied: Admins only.

# Now, change the role and try again
user_role = "admin"
delete_sensitive_data() # Output: Sensitive data deleted.

```

---

> **Next lesson:** [Generators and Iterators](generators-iterators)

---
