# Try and Except

Errors are a fact of life in programming. Python's error handling mechanism allows you to gracefully manage exceptions and prevent your program from crashing. The **try...except** block is the cornerstone of this mechanism.

## What is Exception Handling?

When a Python script encounters a situation it can't cope with, it raises an exception. An exception is an object that represents an error. If the exception is not handled, the program terminates. Exception handling is the process of responding to the occurrence of exceptions.

## The Basic **try...except** Block

The simplest way to handle exceptions is with a **try...except** block.

### Syntax

```python
try:
    # Code that might raise an exception
    <code_block>
except:
    # Code to run if an exception occurs
    <handler_code>
```

### Simple Example: Division by Zero

```python
try:
    result = 10 / 0
    print(result)
except:
    print("An error occurred!")

# The program continues to run
print("This line will be executed.")
```

Without the **try...except** block, the **ZeroDivisionError** would have crashed the program.

---

## Handling Specific Exceptions

Catching all exceptions with a bare **except:** is generally a bad practice because it can hide bugs. It's much better to catch specific exceptions you expect to occur.

### Syntax for Specific Exceptions

```python
try:
    # Code that might raise an exception
    <code_block>
except SpecificException:
    # Handler for SpecificException
    <handler_code>
```

### Example: **ValueError**

This exception is raised when a function receives an argument of the correct type but an inappropriate value.

```python
try:
    number = int(input("Enter a number: "))
    print(f"You entered {number}")
except ValueError:
    print("That was not a valid number!")
```

### Example: **FileNotFoundError**

This exception is raised when a file or directory is requested but doesn't exist.

```python
try:
    with open("non_existent_file.txt") as f:
        content = f.read()
except FileNotFoundError:
    print("The file was not found.")
```

---

## The **as** Keyword

You can get a reference to the exception object using the **as** keyword. This is useful for logging or displaying the error message.

### Syntax

```python
try:
    # Code
except ExceptionType as e:
    # 'e' is the exception object
    print(e)
```

### Example

```python
try:
    result = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
```

---

## Handling Multiple Exceptions

You can handle multiple exceptions in a single **except** block by passing a tuple of exception types. This will be covered in more detail in the next lesson.

```python
try:
    value = int(input("Enter a number: "))
    result = 10 / value
    print(result)
except (ValueError, ZeroDivisionError) as e:
    print(f"An error occurred: {e}")
```

---

## Real-World Examples

### User Input Validation

```python
while True:
    try:
        age = int(input("Please enter your age: "))
        if age < 0:
            print("Age cannot be negative.")
        else:
            print(f"Your age is {age}.")
            break
    except ValueError:
        print("Invalid input. Please enter a number.")
```

### File Operations

```python
try:
    with open("data.txt", "r") as file:
        content = file.read()
    print("File read successfully.")
except FileNotFoundError:
    print("data.txt not found. Creating a new file.")
    with open("data.txt", "w") as file:
        file.write("This is a new file.")
except Exception as e:
    print(f"An unexpected error occurred: {e}")
```

---

## Common Mistakes

### 1. Using a Bare **except**

A bare **except:** block will catch all exceptions, including system-exiting ones like **SystemExit** or **KeyboardInterrupt**. This can make it hard to debug your code and can hide problems.

```python
# Bad practice
try:
    # some code
except:
    print("Something went wrong")
```

### 2. Not Being Specific Enough

Catching a general exception like **Exception** when a more specific one like **ValueError** would do can also hide bugs.

```python
# Better to be specific
try:
    num = int("abc")
except ValueError as e:
    print(f"Conversion error: {e}")
```

---

## Key Takeaways

- Use **try...except** blocks to handle exceptions and prevent crashes.
- Be specific about the exceptions you catch.
- Use **as** to get a reference to the exception object for more detailed error messages.
- Avoid bare **except:** blocks.

---

## Practice Exercises

1. **Safe Division**: Write a program that takes two numbers as input from the user and prints their division. Handle **ZeroDivisionError** and **ValueError**.
2. **File Reader**: Write a program that asks the user for a filename, reads the file, and prints its content. Handle **FileNotFoundError**.
3. **List Index**: Create a list of 5 elements. Ask the user for an index and print the element at that index. Handle **IndexError**.

---

## Solutions

```python
# Exercise 1: Safe Division
try:
    num1 = float(input("Enter the first number: "))
    num2 = float(input("Enter the second number: "))
    result = num1 / num2
    print(f"The result is: {result}")
except ValueError:
    print("Invalid input. Please enter numbers only.")
except ZeroDivisionError:
    print("Cannot divide by zero.")

# Exercise 2: File Reader
try:
    filename = input("Enter the filename: ")
    with open(filename, 'r') as f:
        print(f.read())
except FileNotFoundError:
    print(f"Sorry, the file {filename} does not exist.")

# Exercise 3: List Index
my_list = [10, 20, 30, 40, 50]
try:
    index = int(input("Enter an index: "))
    print(f"The element at index {index} is {my_list[index]}")
except IndexError:
    print("Error: Index out of range.")
except ValueError:
    print("Error: Please enter an integer index.")
```

---

## Quick Reference

### Basic **try...except**

```python
try:
    # Risky code
except ExceptionType:
    # Handle error
```

### **try...except** with alias

```python
try:
    # Risky code
except ExceptionType as e:
    print(e)
```

---

## Additional Resources

- [Python Docs: Errors and Exceptions](https://docs.python.org/3/tutorial/errors.html)

---

> **Next lesson:** [Multiple Exceptions](multiple-exceptions)
