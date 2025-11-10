
# Handling Multiple Exceptions

In many cases, a block of code can raise more than one type of exception. Python provides several ways to handle multiple exceptions, allowing you to write robust error-handling logic.

## Multiple `except` Blocks

The most straightforward way to handle different exceptions is to use multiple `except` blocks.

### Syntax

```python
try:
    # Code that might raise different exceptions
    <code_block>
except FirstException:
    # Handler for FirstException
    <handler_code>
except SecondException:
    # Handler for SecondException
    <handler_code>
```

### Example

```python
try:
    num_str = input("Enter a number: ")
    num = int(num_str)
    result = 100 / num
    print(f"Result is {result}")
except ValueError:
    print(f"'{num_str}' is not a valid number.")
except ZeroDivisionError:
    print("You cannot divide by zero.")
```

## Grouping Exceptions in a Tuple

If you want to execute the same code for multiple exceptions, you can group them in a tuple.

### Syntax

```python
try:
    # Code block
except (Exception1, Exception2, Exception3) as e:
    # Handler for all three exceptions
    print(f"An error occurred: {e}")
```

### Example

```python
try:
    # some code that could raise either error
except (IOError, OSError) as e:
    print(f"File or system error: {e}")
```

## Order of `except` Blocks

Python checks `except` blocks from top to bottom and executes the first one that matches the exception. Therefore, you should order your `except` blocks from the most specific exception to the most general.

```python
try:
    # some code
except ZeroDivisionError:
    print("Handled a specific division error.")
except Exception as e:
    print(f"Handled a general exception: {e}")
```

If you put `except Exception` first, it would catch `ZeroDivisionError` as well, and the more specific block would never be reached.

## The `Exception` Base Class

Nearly all built-in, non-system-exiting exceptions are derived from the `Exception` class. `except Exception as e:` will catch most application-level errors, but it's still better to be as specific as possible.

---

## Real-World Example

```python
def process_data(file_path):
    try:
        with open(file_path, 'r') as f:
            line = f.readline()
            value = int(line.strip())
            # ... more processing
    except FileNotFoundError:
        print(f"Error: {file_path} not found.")
    except ValueError:
        print(f"Error: Invalid data format in {file_path}.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

process_data("data.txt")
```

---

## Key Takeaways

- Use multiple `except` blocks to handle different exceptions differently.
- Group exceptions in a tuple to handle them with the same code block.
- Always order `except` blocks from most specific to most general.

---

## Practice Exercises

1. **Calculator**: Extend the safe division exercise to also handle `TypeError` if the inputs are not numbers.
2. **Data Processor**: Write a function that takes a list of strings, converts them to integers, and returns a new list. Handle `ValueError` for non-numeric strings and `TypeError` if the input is not a list.

---

## Solutions

```python
# Exercise 1: Calculator
try:
    num1 = input("Enter the first number: ")
    num2 = input("Enter the second number: ")
    result = float(num1) / float(num2)
    print(f"The result is: {result}")
except ValueError:
    print("Invalid input. Please enter numbers only.")
except ZeroDivisionError:
    print("Cannot divide by zero.")
except TypeError:
    print("Type error. Ensure inputs are numbers.")

# Exercise 2: Data Processor
def process_list(data):
    try:
        if not isinstance(data, list):
            raise TypeError("Input must be a list.")
        return [int(item) for item in data]
    except ValueError:
        print("Error: All items in the list must be convertible to integers.")
        return []
    except TypeError as e:
        print(f"Error: {e}")
        return []

print(process_list(["1", "2", "3"]))
print(process_list(["1", "abc", "3"]))
print(process_list("not a list"))
```

---
> **Next lesson:** [The `else` and `finally` Clauses](finally-else)
