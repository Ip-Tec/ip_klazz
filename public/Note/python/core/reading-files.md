---
Title: Reading Files in Python
Description: Learn how to read content from files using Python.
---

## Reading Files in Python

Reading from files is a common task in programming. Python provides several ways to read file content.

### Using `open()` and `read()`

The most common way to read a file is to use the `open()` function to get a file object and then call the `read()` method on it.

```python
# Open the file in read mode ('r')
with open('example.txt', 'r') as file:
    content = file.read()
    print(content)
```

Using the `with` statement is highly recommended because it automatically closes the file for you, even if errors occur.

### Reading Line by Line

You can also read a file line by line, which is useful for large files.

#### Using a `for` loop

```python
with open('example.txt', 'r') as file:
    for line in file:
        print(line, end='') # The end='' prevents extra newlines
```

#### Using `readline()`

```python
with open('example.txt', 'r') as file:
    line = file.readline()
    while line:
        print(line, end='')
        line = file.readline()
```

### Reading All Lines into a List

You can read all lines of a file into a list using the `readlines()` method.

```python
with open('example.txt', 'r') as file:
    lines = file.readlines()
    print(lines)
```

This will give you a list where each element is a line from the file, including the newline character.

### File Modes

When opening a file, you can specify a mode:

- `'r'`: Read (default). Throws an error if the file doesn't exist.
- `'a'`: Append. Creates the file if it doesn't exist.
- `'w'`: Write. Creates the file if it doesn't exist, or truncates it if it does.
- `'x'`: Create. Throws an error if the file already exists.

For reading, you'll almost always use `'r'`.

---

> **Next lesson:** [Writing to Files](writing-files)

---
