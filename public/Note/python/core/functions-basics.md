
# Defining Functions

## What is a Function?

A function is a reusable block of code that performs a specific task. Instead of writing the same code over and over, you define it once and use it as many times as you need.

Think of a function like a recipe—you write it down once, then you can follow it multiple times whenever you need that dish.

## Why Use Functions?

- **Reusability** — Write code once, use it many times
- **Organization** — Break complex programs into smaller pieces
- **Readability** — Make code easier to understand
- **Maintainability** — Easier to fix bugs in one place
- **Testing** — Test individual pieces of code separately

## Creating a Simple Function

Use the `def` keyword to create a function:

```python
def greet():
    print("Hello, World!")

greet()  # Call the function
```

**Output:** `Hello, World!`

### Function Structure

```python
def function_name():
    # Code inside the function
    pass
```

Key points:

- Use `def` keyword
- Function name followed by parentheses `()`
- Colon `:` at the end
- Indented code block inside the function
- Call the function by using its name with parentheses

## Functions with Parameters

Parameters let you pass information to a function:

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
greet("Bob")
```

**Output:**

```
Hello, Alice!
Hello, Bob!
```

### Multiple Parameters

```python
def add(a, b):
    print(a + b)

add(5, 3)    # 8
add(10, 20)  # 30
```

### Named Parameters

When calling a function, you can use parameter names:

```python
def introduce(name, age):
    print(f"{name} is {age} years old")

introduce("Alice", 25)           # Positional
introduce(name="Bob", age=30)    # Named
introduce(age=20, name="Charlie") # Order doesn't matter with named
```

## Return Values

Functions can return values using the `return` keyword:

```python
def add(a, b):
    return a + b

result = add(5, 3)
print(result)  # 8
```

### Multiple Return Values

You can return multiple values as a tuple:

```python
def get_user_info():
    name = "Alice"
    age = 25
    return name, age

name, age = get_user_info()
print(f"{name} is {age}")  # Alice is 25
```

### Early Return

You can return from a function at any point:

```python
def check_age(age):
    if age < 0:
        return "Invalid age"
    if age < 18:
        return "Too young"
    return "You are an adult"

print(check_age(25))  # You are an adult
print(check_age(10))  # Too young
```

## Docstrings

A docstring explains what a function does. Use triple quotes:

```python
def add(a, b):
    """Add two numbers and return the result."""
    return a + b

print(add.__doc__)  # Add two numbers and return the result.
```

### Longer Docstrings

```python
def calculate_area(length, width):
    """
    Calculate the area of a rectangle.
    
    Parameters:
        length: The length of the rectangle
        width: The width of the rectangle
    
    Returns:
        The area of the rectangle
    """
    return length * width
```

## Function Examples

### Example 1: Simple Calculator

```python
def multiply(a, b):
    """Multiply two numbers."""
    return a * b

result = multiply(4, 5)
print(result)  # 20
```

### Example 2: Check if Number is Even

```python
def is_even(num):
    """Check if a number is even."""
    return num % 2 == 0

print(is_even(4))   # True
print(is_even(7))   # False
```

### Example 3: Count Vowels in String

```python
def count_vowels(text):
    """Count the number of vowels in a string."""
    vowels = "aeiouAEIOU"
    count = 0
    
    for char in text:
        if char in vowels:
            count += 1
    
    return count

print(count_vowels("Hello"))  # 2
```

### Example 4: Find Maximum Number

```python
def find_max(numbers):
    """Find the maximum number in a list."""
    if len(numbers) == 0:
        return None
    
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    
    return max_num

print(find_max([3, 1, 4, 1, 5]))  # 5
```

### Example 5: Generate Greeting

```python
def create_greeting(name, time_of_day="day"):
    """Create a personalized greeting."""
    greetings = {
        "morning": "Good morning",
        "afternoon": "Good afternoon",
        "evening": "Good evening"
    }
    
    greeting = greetings.get(time_of_day, "Hello")
    return f"{greeting}, {name}!"

print(create_greeting("Alice"))                    # Hello, Alice!
print(create_greeting("Bob", "morning"))           # Good morning, Bob!
print(create_greeting("Charlie", time_of_day="evening"))  # Good evening, Charlie!
```

## Scope and Variables

Variables created inside a function are local to that function:

```python
def my_function():
    x = 5
    print(x)

my_function()  # 5
print(x)       # ❌ NameError - x doesn't exist outside the function
```

### Global Variables

Variables created outside functions are global:

```python
x = 10

def my_function():
    print(x)  # Can read global variables

my_function()  # 10
```

### Modifying Global Variables

Use the `global` keyword if you need to modify a global variable:

```python
x = 10

def increment():
    global x
    x = x + 1

increment()
print(x)  # 11
```

## Best Practices

### 1. Give Functions Clear Names

```python
# ❌ Not clear
def f(x):
    return x * 2

# ✅ Clear
def double_number(x):
    return x * 2
```

### 2. Keep Functions Small

```python
# ❌ Too complex
def process_user_data(user):
    # ... 50 lines of code

# ✅ Break into smaller functions
def validate_user(user):
    pass

def save_user(user):
    pass
```

### 3. One Task Per Function

```python
# ❌ Multiple tasks
def process(data):
    cleaned = data.strip()
    result = cleaned.upper()
    print(result)

# ✅ Single task
def clean_text(data):
    return data.strip().upper()
```

### 4. Always Document

```python
# ❌ No documentation
def calc(a, b):
    return a * b + a / b

# ✅ Well documented
def calculate_efficiency(input_value, output_value):
    """
    Calculate efficiency ratio.
    
    Returns: (output * input + output / input)
    """
    return output_value * input_value + output_value / input_value
```

## Common Mistakes

**1. Forgetting parentheses when calling**

```python
# ❌ Wrong - doesn't call the function
def greet():
    print("Hello")

greet  # Just references the function

# ✅ Correct - calls the function
greet()  # Hello
```

**2. Inconsistent indentation**

```python
# ❌ Wrong - inconsistent indentation
def my_function():
print("Line 1")
    print("Line 2")

# ✅ Correct - consistent indentation
def my_function():
    print("Line 1")
    print("Line 2")
```

**3. Returning without a value**

```python
# ❌ Returns None instead of the value
def add(a, b):
    result = a + b
    # Forgot to return!

# ✅ Correct
def add(a, b):
    result = a + b
    return result
```

**4. Using global without thinking**

```python
# ❌ Confusing code flow
count = 0

def increment():
    global count
    count += 1

# ✅ Better - pass and return values
def increment(count):
    return count + 1
```

## Key Takeaways

- Functions are reusable blocks of code
- Use `def` keyword to define functions
- Parameters pass information to functions
- `return` sends values back from functions
- Docstrings document what functions do
- Variables inside functions are local (unless declared `global`)
- Keep functions small and focused on one task
- Use clear, descriptive names
- Always test your functions

---

## Practice Exercises

1. Create a function that takes a name and returns a greeting.
2. Write a function that calculates the area of a circle given its radius.
3. Create a function that checks if a string is a palindrome.
4. Write a function that returns the sum of all numbers in a list.
5. Create a function that converts temperature from Celsius to Fahrenheit.

---

> **Next lesson:** [Function Parameters and Arguments](function-parameters)
---
