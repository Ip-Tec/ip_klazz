---
Title: File Modes and Methods in Python
Description: A comprehensive guide to file modes and methods in Python.
---

## File Modes and Methods in Python

When working with files in Python, the **open()** function is your starting point. It takes two main arguments: the file path and the **mode**. The mode determines how the file will be opened and what operations you can perform on it.

### Common File Modes

Here's a breakdown of the most common file modes:

| Mode | Description                                                                 |
| :--- | :-------------------------------------------------------------------------- |
| **r**  | **Read (default):** Opens a file for reading. Raises an error if the file does not exist. |
| **w**  | **Write:** Opens a file for writing. Creates a new file if it does not exist, or **truncates** (empties) the file if it exists. |
| **a**  | **Append:** Opens a file for appending. Creates a new file if it does not exist. The file pointer is at the end of the file. |
| **x**  | **Create:** Creates a new file. Raises an error if the file already exists.      |
| **b**  | **Binary:** Opens a file in binary mode (e.g., for images or executables).   |
| **t**  | **Text (default):** Opens a file in text mode.                             |
| **+**  | **Update:** Opens a file for both reading and writing.                      |

### Combining Modes

You can combine these modes. For example:

- **r+**: Read and write. The file must exist.
- **w+**: Write and read. Truncates the file if it exists, or creates it otherwise.
- **a+**: Append and read. Creates the file if it doesn't exist.
- **rb**: Read in binary mode.
- **wb**: Write in binary mode.

### Important File Methods

Once you have a file object, you can use several methods to interact with it:

| Method          | Description                                                                 |
| :-------------- | :-------------------------------------------------------------------------- |
| **read(size)**    | Reads **size** bytes from the file. If **size** is omitted, it reads the entire file. |
| **readline()**    | Reads a single line from the file.                                          |
| **readlines()**   | Reads all lines from the file and returns them as a list of strings.        |
| **write(string)** | Writes the given **string** to the file.                                      |
| **writelines(list)** | Writes a **list** of strings to the file.                                     |
| **close()**       | Closes the file. (Automatically handled by **with open(...)**)                |
| **seek(offset)**  | Changes the file pointer's position to **offset** bytes from the beginning.    |
| **tell()**        | Returns the current position of the file pointer.                           |

### Example: Using **seek()** and **tell()**

```python
with open('example.txt', 'r+') as file:
    print('Current position:', file.tell())  # Output: 0
    content = file.read()
    print('Content:', content)
    print('Current position after read:', file.tell())

    file.seek(0)  # Go back to the beginning
    print('Current position after seek:', file.tell()) # Output: 0
```

Understanding file modes and methods is essential for effective file handling in Python.

---

> **Next lesson:** [Working with CSV Files](csv-files)

---
