
# Raising Exceptions

Sometimes, you need to signal that an error has occurred in your own code. You can do this by raising an exception, which can be a built-in exception or a custom one you define.

## The `raise` Statement

The `raise` statement is used to trigger an exception manually.

### Syntax

```python
raise ExceptionType("An informative error message")
```

### Example: Validating Input

```python
def set_age(age):
    if age < 0:
        raise ValueError("Age cannot be negative.")
    print(f"Age set to {age}")

try:
    set_age(-5)
except ValueError as e:
    print(f"Error: {e}")
```

## Creating Custom Exceptions

For more specific error conditions related to your application, you can create custom exception classes. Custom exceptions should typically inherit from Python's `Exception` class.

### Syntax

```python
class MyCustomError(Exception):
    pass
```

### Example

```python
class InsufficientFundsError(Exception):
    "Raised when a bank account has insufficient funds."
    pass

balance = 100
def withdraw(amount):
    if amount > balance:
        raise InsufficientFundsError("Cannot withdraw more than the current balance.")
    return balance - amount

try:
    withdraw(200)
except InsufficientFundsError as e:
    print(f"Transaction failed: {e}")
```

## Re-raising Exceptions

Inside an `except` block, you can use `raise` by itself to re-raise the same exception. This is useful when you want to log an error but not handle it at the current level.

### Example

```python
try:
    # some risky operation
except SomeError as e:
    log_error(e) # Log the error
    raise        # Re-raise the exception for a higher-level handler
```

## Exception Chaining

Python 3 allows you to chain exceptions, which is useful for wrapping an exception in another one without losing the original traceback.

### Syntax

```python
raise NewException from original_exception
```

### Example

```python
def process_data():
    try:
        # ...
    except KeyError as e:
        raise DataProcessingError("Failed to process data.") from e

try:
    process_data()
except DataProcessingError as e:
    print(f"Caught a processing error: {e}")
    print(f"Original cause: {e.__cause__}")
```

---

## Key Takeaways

- Use `raise` to manually trigger exceptions.
- Create custom exception classes for application-specific errors.
- Re-raise exceptions with `raise` to pass them up the call stack.
- Use exception chaining (`raise ... from ...`) to wrap exceptions.

---

## Practice Exercises

1. **Password Validator**: Write a function that raises a `ValueError` if a password is less than 8 characters long.
2. **Custom Error**: Create a custom exception `InvalidEmailError` and a function that raises it if an email address does not contain an "@" symbol.

---

## Solutions

```python
# Exercise 1: Password Validator
def validate_password(password):
    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")
    print("Password is valid.")

try:
    validate_password("short")
except ValueError as e:
    print(f"Error: {e}")

# Exercise 2: Custom Error
class InvalidEmailError(Exception):
    pass

def validate_email(email):
    if "@" not in email:
        raise InvalidEmailError("Invalid email address.")
    print("Email is valid.")

try:
    validate_email("test.example.com")
except InvalidEmailError as e:
    print(f"Error: {e}")
```

---
> **Next lesson:** [Debugging Techniques](debugging)
