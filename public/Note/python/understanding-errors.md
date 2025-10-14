---
Title: Understanding Errors in Python
Description: Learn about the different types of errors in Python and how to read them.
---

## Understanding Errors in Python

Errors are a normal part of programming. They happen to everyone, from beginners to experts. The key is to understand what they mean so you can fix them. In Python, there are two main types of errors: **syntax errors** and **exceptions**.

### Syntax Errors

A **syntax error** happens when you write code that isn't valid Python. It's like writing a sentence with incorrect grammar. The program won't even run if it has a syntax error.

```python
# This will cause a SyntaxError
print("Hello, world!"
```

Here, we forgot the closing parenthesis. Python will tell you exactly where the error is:

```sh
  File "<stdin>", line 1
    print("Hello, world!"
          ^
SyntaxError: unexpected EOF while parsing
```

### Exceptions

An **exception** happens when your code is syntactically correct, but something goes wrong while it's running. For example, trying to divide by zero or accessing a file that doesn't exist.

Here are some common exceptions:

- `TypeError`: When you try to do an operation on a value of the wrong type.

    ```python
    'hello' + 5 # TypeError: can only concatenate str (not "int") to str
    ```

- `NameError`: When you try to use a variable that hasn't been defined yet.

    ```python
    print(my_variable) # NameError: name 'my_variable' is not defined
    ```

- `IndexError`: When you try to access an item in a list that's out of range.

    ```python
    my_list = [1, 2, 3]
    print(my_list[3]) # IndexError: list index out of range
    ```

- `KeyError`: When you try to access a key in a dictionary that doesn't exist.

    ```python
    my_dict = {'a': 1}
    print(my_dict['b']) # KeyError: 'b'
    ```

- `FileNotFoundError`: When you try to open a file that doesn't exist.

    ```python
    with open('non_existent_file.txt', 'r') as f:
        content = f.read()
    # FileNotFoundError: [Errno 2] No such file or directory: 'non_existent_file.txt'
    ```

### Reading a Traceback

When an exception occurs, Python prints a **traceback**. It might look scary, but it's actually very helpful. Read it from the bottom up:

1. The last line tells you the type of exception and a message explaining what went wrong.
2. The lines above it show you where the error happened in your code, starting from the most recent function call.

Learning to read tracebacks is a superpower. It turns a frustrating error into a clue that helps you fix your code.

---

> **Next lesson:** [Try and Except](try-except)

---
