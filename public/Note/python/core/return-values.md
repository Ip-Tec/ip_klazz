# Return Values

## What is a Return Value?

A return value is the result that a function sends back to the code that called it. When a function completes its task, it can return a value using the `return` keyword.

Without a return value, a function returns `None` by default.

## Basic Return

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
```

### Functions Without Return

```python
def greet(name):
    print(f"Hello, {name}")
    # No return statement

result = greet("Alice")
print(result)  # None
```

## Returning Different Data Types

Functions can return any data type:

### Returning Numbers

```python
def square(x):
    return x ** 2

print(square(5))  # 25
```

### Returning Strings

```python
def get_greeting(name):
    return f"Hello, {name}!"

message = get_greeting("Bob")
print(message)  # Hello, Bob!
```

### Returning Booleans

```python
def is_adult(age):
    return age >= 18

print(is_adult(25))  # True
print(is_adult(16))  # False
```

### Returning Lists

```python
def get_numbers():
    return [1, 2, 3, 4, 5]

numbers = get_numbers()
print(numbers)  # [1, 2, 3, 4, 5]
```

### Returning Dictionaries

```python
def get_user():
    return {"name": "Alice", "age": 25, "email": "alice@example.com"}

user = get_user()
print(user["name"])  # Alice
```

## Returning Multiple Values

Return multiple values as a tuple:

```python
def get_coordinates():
    return 10, 20

x, y = get_coordinates()
print(f"x: {x}, y: {y}")  # x: 10, y: 20
```

### Unpacking Return Values

```python
def get_user_info():
    name = "Alice"
    age = 25
    email = "alice@example.com"
    return name, age, email

name, age, email = get_user_info()
print(f"{name}, {age}, {email}")  # Alice, 25, alice@example.com
```

### Returning as Explicit Tuple

```python
def get_range():
    return (1, 100)

min_val, max_val = get_range()
print(f"Range: {min_val} to {max_val}")  # Range: 1 to 100
```

### Partial Unpacking with `*`

```python
def get_scores():
    return 85, 90, 78, 92, 88

first, *rest = get_scores()
print(f"First: {first}")  # First: 85
print(f"Rest: {rest}")    # Rest: [90, 78, 92, 88]
```

## Early Returns

Exit a function early using `return`:

```python
def validate_age(age):
    if age < 0:
        return "Age cannot be negative"
    if age < 18:
        return "Must be 18 or older"
    return "Valid age"

print(validate_age(-5))   # Age cannot be negative
print(validate_age(16))   # Must be 18 or older
print(validate_age(25))   # Valid age
```

### Using Early Returns for Efficiency

```python
def find_even(numbers):
    """Return first even number found."""
    for num in numbers:
        if num % 2 == 0:
            return num
    return None

print(find_even([1, 3, 5, 6, 7]))  # 6
print(find_even([1, 3, 5]))        # None
```

## Conditional Returns

Return different values based on conditions:

```python
def get_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    else:
        return "F"

print(get_grade(85))  # B
print(get_grade(92))  # A
```

## Return vs Print

Important distinction:

```python
# ❌ Using print - just displays, doesn't return value
def add_print(a, b):
    print(a + b)

result = add_print(5, 3)
print(result)  # None - nothing was returned!

# ✅ Using return - sends value back
def add_return(a, b):
    return a + b

result = add_return(5, 3)
print(result)  # 8
```

Return values let you use the result in other operations:

```python
def calculate_total(price, quantity):
    return price * quantity

total = calculate_total(10, 5)
tax = total * 0.1
final = total + tax

print(f"Total: ${total}, Tax: ${tax}, Final: ${final}")
# Total: $50, Tax: $5.0, Final: $55.0
```

## Returning None Explicitly

You can explicitly return `None`:

```python
def process_data(data):
    if not data:
        return None
    
    # Process data
    return len(data)

print(process_data([]))        # None
print(process_data([1, 2, 3])) # 3
```

## Chaining Function Calls

Return values let you chain operations:

```python
def double(x):
    return x * 2

def add_ten(x):
    return x + 10

def square(x):
    return x ** 2

result = square(add_ten(double(5)))
print(result)  # square(add_ten(double(5))) = square(add_ten(10)) = square(20) = 400
```

## Real-World Examples

### Example 1: Temperature Conversion

```python
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    return (fahrenheit - 32) * 5/9

temp_f = celsius_to_fahrenheit(0)
print(f"0°C = {temp_f}°F")  # 0°C = 32.0°F

temp_c = fahrenheit_to_celsius(98.6)
print(f"98.6°F = {temp_c}°C")  # 98.6°F = 37.0°C
```

### Example 2: Data Validation

```python
def validate_email(email):
    """Return True if valid email format, False otherwise."""
    return "@" in email and "." in email

def validate_password(password):
    """Return True if password is strong, False otherwise."""
    return len(password) >= 8 and any(c.isupper() for c in password)

email = "john@example.com"
password = "SecurePass123"

if validate_email(email):
    print("Email is valid")

if validate_password(password):
    print("Password is strong")
```

### Example 3: Search in List

```python
def find_index(items, target):
    """Return index of target, or -1 if not found."""
    for i, item in enumerate(items):
        if item == target:
            return i
    return -1

numbers = [10, 20, 30, 40, 50]
print(find_index(numbers, 30))  # 2
print(find_index(numbers, 99))  # -1
```

### Example 4: Calculate Statistics

```python
def get_statistics(numbers):
    """Return min, max, average, and sum."""
    if not numbers:
        return None, None, None, None
    
    min_val = min(numbers)
    max_val = max(numbers)
    avg = sum(numbers) / len(numbers)
    total = sum(numbers)
    
    return min_val, max_val, avg, total

numbers = [10, 20, 30, 40, 50]
minimum, maximum, average, total = get_statistics(numbers)

print(f"Min: {minimum}, Max: {maximum}")     # Min: 10, Max: 50
print(f"Average: {average}, Total: {total}") # Average: 30.0, Total: 150
```

### Example 5: Build Query String

```python
def build_query_string(base_url, **params):
    """Build a complete URL with query parameters."""
    if not params:
        return base_url
    
    param_list = [f"{k}={v}" for k, v in params.items()]
    query = "&".join(param_list)
    
    return f"{base_url}?{query}"

url = build_query_string("https://api.example.com/search", 
                         q="python", page=1, limit=10)
print(url)
# https://api.example.com/search?q=python&page=1&limit=10
```

## Return Value Patterns

### Pattern 1: Return Status and Result

```python
def process_file(filename):
    """Return success status and result/error message."""
    try:
        with open(filename, 'r') as f:
            content = f.read()
        return True, content
    except FileNotFoundError:
        return False, f"File {filename} not found"

success, result = process_file("data.txt")
if success:
    print(f"Content: {result}")
else:
    print(f"Error: {result}")
```

### Pattern 2: Return Dictionary for Multiple Values

```python
def calculate_salary(base_salary, bonus_rate=0.1):
    """Return salary breakdown as dictionary."""
    bonus = base_salary * bonus_rate
    total = base_salary + bonus
    tax = total * 0.2
    net = total - tax
    
    return {
        "base": base_salary,
        "bonus": bonus,
        "total": total,
        "tax": tax,
        "net": net
    }

salary = calculate_salary(5000, 0.15)
print(f"Net salary: ${salary['net']}")  # Net salary: $4960.0
```

### Pattern 3: Return List of Results

```python
def filter_active_users(users):
    """Return list of active users."""
    return [user for user in users if user.get("active", False)]

users = [
    {"name": "Alice", "active": True},
    {"name": "Bob", "active": False},
    {"name": "Charlie", "active": True}
]

active = filter_active_users(users)
print(active)  # [{'name': 'Alice', 'active': True}, {'name': 'Charlie', 'active': True}]
```

## Common Mistakes

**1. Forgetting to use the return value**

```python
# ❌ Calculate but don't use
def double(x):
    return x * 2

double(5)  # Calculation is lost!

# ✅ Store or use the return value
result = double(5)
print(result)  # 10
```

**2. Returning instead of printing when you need output**

```python
# ❌ Function returns but doesn't print
def calculate(a, b):
    return a + b

calculate(5, 3)  # Result is not shown

# ✅ Use the return value
result = calculate(5, 3)
print(result)  # 8
```

**3. Wrong unpacking count**

```python
# ❌ Unpacking wrong number of values
def get_coords():
    return 10, 20

x, y, z = get_coords()  # ValueError: not enough values to unpack

# ✅ Correct count
x, y = get_coords()
```

**4. Not handling None returns**

```python
# ❌ Assume return is always valid
def find_item(items, target):
    for item in items:
        if item == target:
            return item

result = find_item([1, 2, 3], 5)
print(result.upper())  # AttributeError - result is None!

# ✅ Check for None
result = find_item([1, 2, 3], 5)
if result is not None:
    print(result.upper())
else:
    print("Item not found")
```

## Key Takeaways

- `return` sends a value back from a function
- Functions return `None` by default if no return statement
- Return multiple values as a tuple and unpack them
- Use early returns to exit functions conditionally
- Return values enable function chaining and composition
- Distinguish between printing output and returning values
- Return values should be used by the calling code
- Check for `None` returns when appropriate

---

## Practice Exercises

1. Create a function that returns both the quotient and remainder of division.
2. Write a function that returns multiple values (min, max, average) from a list.
3. Create a function that returns `True` or `False` based on validation logic.
4. Write a function that returns `None` for error cases and actual results otherwise.
5. Create a function that returns a dictionary with multiple calculated values.

---

> **Next lesson:** [Lambda Functions](lambda-functions)

---
