---
Title: Writing to Files in Python
Description: Learn how to write and append content to files using Python.
---

## Writing to Files in Python

Just as you can read from files, you can also write to them. Python makes it simple to create new files or modify existing ones.

### Writing to a File with `write()`

To write to a file, you need to open it in write mode (`'w'`).

```python
# Open the file in write mode ('w')
with open('new_file.txt', 'w') as file:
    file.write('Hello, world!\n')
    file.write('This is a new file.')
```

**Caution:** Opening a file in `'w'` mode will completely overwrite its content if it already exists. If it doesn't exist, a new file will be created.

### Appending to a File

If you want to add content to the end of an existing file without deleting its current content, open it in append mode (`'a'`).

```python
# Open the file in append mode ('a')
with open('new_file.txt', 'a') as file:
    file.write('\nThis line is appended.')
```

### Writing Multiple Lines with `writelines()`

You can write a list of strings to a file using the `writelines()` method.

```python
lines = ['First line\n', 'Second line\n', 'Third line\n']

with open('multiple_lines.txt', 'w') as file:
    file.writelines(lines)
```

Note that `writelines()` does not add newline characters for you, so you need to include them in your strings.

### Combining Reading and Writing

Sometimes you might need to read and write to the same file. You can use modes like `'r+'` (read and write) or `'w+'` (write and read). However, managing the file cursor in these modes can be tricky, so it's often simpler to read the content first, process it, and then write it back.

```python
# Read the content
with open('example.txt', 'r') as file:
    content = file.read()

# Modify the content
modified_content = content.replace('old text', 'new text')

# Write the modified content back to the file
with open('example.txt', 'w') as file:
    file.write(modified_content)
```

---

> **Next lesson:** [File Modes and Methods](file-modes)

---
