---
Title: Scope and Global Variables in Python
Description: Understand how variable scope works in Python and how to use global variables.
---

## Scope and Global Variables in Python

In Python, the **scope** of a variable refers to the region of the code where the variable is accessible. Understanding scope is crucial for writing clean, bug-free code.

### Local Scope

Variables defined inside a function are in the **local scope**. They can only be accessed from within that function.

```python
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # Output: 10
# print(x)  # This would cause a NameError because x is not defined in the global scope
```

### Global Scope

Variables defined outside of any function are in the **global scope**. They can be accessed from anywhere in the code, including inside functions.

```python
y = 20  # Global variable

def another_function():
    print(y)

another_function()  # Output: 20
print(y)  # Output: 20
```

### The `global` Keyword

If you want to modify a global variable from inside a function, you must use the `global` keyword.

```python
z = 30  # Global variable

def modify_global():
    global z
    z = 40
    print(z)

modify_global()  # Output: 40
print(z)  # Output: 40
```

Without the `global` keyword, assigning a value to `z` inside the function would create a new local variable named `z`, and the global `z` would remain unchanged.

```python
a = 50 # Global variable

def local_assignment():
    a = 60 # Creates a new local variable 'a'
    print(a)

local_assignment() # Output: 60
print(a) # Output: 50
```

### Nonlocal Scope

Python also has a **nonlocal scope**, which is useful in nested functions. The `nonlocal` keyword allows you to modify variables from the nearest enclosing scope that is not global.

```python
def outer_function():
    x = "local"

    def inner_function():
        nonlocal x
        x = "nonlocal"
        print("inner:", x)

    inner_function()
    print("outer:", x)

outer_function()
# Output:
# inner: nonlocal
# outer: nonlocal
```

### LEGB Rule

Python uses the **LEGB** rule to resolve variable names:

1. **L**ocal: The current function's scope.
2. **E**nclosing: The scope of any enclosing functions.
3. **G**lobal: The module's top-level scope.
4. **B**uilt-in: The scope of Python's built-in functions.

Python searches for a variable in this order. If it can't find the variable, it raises a `NameError`.

### Key Takeaways

- Variables have different scopes: local, global, and nonlocal.
- Use the `global` keyword to modify a global variable from within a function.
- Use the `nonlocal` keyword to modify a variable from an enclosing (but not global) scope.
- Be mindful of variable scope to avoid bugs and write predictable code.

---

## Practice Exercises

1. **Local vs. Global Variable Interaction:**
   Create a global variable `counter` initialized to 0.
   Write a function `increment_counter()` that increments `counter` by 1.
   Call the function multiple times and print the `counter` value after each call.

2. **Shadowing Global Variable:**
   Create a global variable `message = "Global message"`.
   Write a function `display_message()` that defines a local variable `message = "Local message"` and prints it.
   Call `display_message()` and then print the global `message` to observe the difference.

3. **Using `nonlocal`:**
   Define an `outer_function` that initializes a variable `count = 0`.
   Inside `outer_function`, define an `inner_function` that uses `nonlocal` to increment `count`.
   Call `inner_function` multiple times from `outer_function` and print `count` in both functions.

4. **Function with Parameter and Global:**
   Create a global list `data = []`.
   Write a function `add_to_data(item)` that appends `item` to the global `data` list.
   Call `add_to_data()` with different items and print the `data` list.

5. **Conditional Global Modification:**
   Create a global boolean variable `is_active = False`.
   Write a function `toggle_active(password)` that takes a password as an argument. If the password is "secret", it should use `global` to toggle the `is_active` variable.
   Test the function with correct and incorrect passwords and print `is_active` after each call.

---

> **Next lesson:** [Reading Files](reading-files)

---
