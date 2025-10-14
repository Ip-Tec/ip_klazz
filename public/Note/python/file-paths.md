---
Title: File Paths and Directories in Python
Description: Learn how to work with file paths and directories in Python.
---

## File Paths and Directories in Python

When you're working with files, you need to know how to tell Python where to find them. This is where file paths and directories come in.

### Absolute vs. Relative Paths

- **Absolute Path:** A full path to a file or directory, starting from the root of your file system (e.g., `C:\Users\YourUser\Documents\file.txt` on Windows, or `/home/YourUser/Documents/file.txt` on Linux/macOS).
- **Relative Path:** A path that's relative to your current working directory. If your current directory is `Documents`, the relative path to the same file would just be `file.txt`.

### The `os` Module

Python's `os` module is your best friend for working with the operating system, including file paths and directories.

```python
import os

# Get the current working directory
current_dir = os.getcwd()
print(f"Current directory: {current_dir}")

# List files and directories
items = os.listdir('.') # '.' means the current directory
print(f"Items in current directory: {items}")
```

### The `pathlib` Module (The Modern Way)

The `pathlib` module is a newer, more object-oriented way to handle file paths. It's generally recommended over `os.path`.

```python
from pathlib import Path

# Create a Path object
p = Path('my_folder/my_file.txt')

# Get the parent directory
print(f"Parent directory: {p.parent}")

# Get the file name
print(f"File name: {p.name}")

# Get the file extension
print(f"File extension: {p.suffix}")
```

### Checking if a Path Exists

You can check if a file or directory exists before you try to use it.

```python
from pathlib import Path

p = Path('my_folder')

if p.exists():
    print(f"'{p}' exists.")
else:
    print(f"'{p}' does not exist.")

if p.is_file():
    print(f"'{p}' is a file.")

if p.is_dir():
    print(f"'{p}' is a directory.")
```

### Creating Directories

You can create new directories using `os.mkdir()` or `pathlib.Path.mkdir()`.

```python
from pathlib import Path

new_dir = Path('new_directory')

# Create the directory
new_dir.mkdir(exist_ok=True) # exist_ok=True prevents an error if the directory already exists
```

Mastering file paths and directories is a key skill for any Python programmer. It allows you to write code that can find, create, and organize files and folders on your computer.

---

> **Next lesson:** [Understanding Errors](understanding-errors)

---
