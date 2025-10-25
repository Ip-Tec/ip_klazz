
# The `else` and `finally` Clauses

Beyond `try` and `except`, Python provides two powerful clauses, `else` and `finally`, for more fine-grained control over exception handling and resource management.

## The `else` Block

The `else` block is executed only if the `try` block completes without raising an exception.

### Syntax

```python
try:
    # Code that might raise an exception
except ExceptionType:
    # Handler for the exception
else:
    # Code to run if no exception was raised
```

### Why Use `else`?

It allows you to separate the code that might raise an exception from the code that should only run upon success. This makes the `try` block smaller and more focused.

### Example

```python
try:
    num = int(input("Enter a number: "))
except ValueError:
    print("Invalid input.")
else:
    print(f"You entered {num}. No errors!")
```

## The `finally` Block

The `finally` block is always executed, regardless of whether an exception occurred or not. It's the perfect place for cleanup code.

### Syntax

```python
try:
    # Code block
except ExceptionType:
    # Handler
finally:
    # This code always runs
```

### Example

```python
f = None
try:
    f = open("my_file.txt", "w")
    f.write("Hello")
except IOError:
    print("Error writing to file.")
finally:
    if f:
        f.close()
    print("File stream closed.")
```

## Combining All Clauses

You can use all four clauses together for comprehensive error handling.

### Execution Flow

1. The `try` block is executed.
2. If an exception occurs, the matching `except` block is executed.
3. If no exception occurs, the `else` block is executed.
4. The `finally` block is always executed last.

### Example

```python
try:
    value = int(input("Enter a number: "))
    result = 100 / value
except ValueError:
    print("That's not a number.")
except ZeroDivisionError:
    print("Can't divide by zero.")
else:
    print(f"Result is {result}.")
finally:
    print("Execution complete.")
```

---

## Real-World Example: Database Connection

```python
connection = None
try:
    connection = db.connect("my_database")
    # Perform database operations
except db.Error as e:
    print(f"Database error: {e}")
else:
    print("Operations successful.")
    connection.commit()
finally:
    if connection:
        connection.close()
        print("Database connection closed.")
```

---

## Key Takeaways

- `else` runs when the `try` block is successful.
- `finally` runs no matter what, making it ideal for cleanup.
- Using these clauses leads to cleaner and more robust code.

---

## Practice Exercises

1. **File Writer**: Write a program that opens a file for writing, asks the user for input, and writes it to the file. Use `try-except-else-finally`.
2. **Safe Dictionary Access**: Write a function that retrieves a value from a dictionary. Use `else` to print the value and `finally` to log that an access attempt was made.

---

## Solutions

```python
# Exercise 1: File Writer
try:
    f = open("output.txt", "w")
    text = input("Enter text to write: ")
    f.write(text)
except IOError as e:
    print(f"Error writing to file: {e}")
else:
    print("File written successfully.")
finally:
    if 'f' in locals() and not f.closed:
        f.close()
    print("File operation finished.")

# Exercise 2: Safe Dictionary Access
def get_value(d, key):
    try:
        value = d[key]
    except KeyError:
        print(f"Key \'{key}\' not found.")
    else:
        print(f"Value for \'{key}\' is {value}.")
    finally:
        print(f"Attempted to access key \'{key}\'.")

my_dict = {"name": "Alice", "age": 30}
get_value(my_dict, "name")
get_value(my_dict, "city")
```

---
> **Next lesson:** [Raising Exceptions](raising-exceptions)
