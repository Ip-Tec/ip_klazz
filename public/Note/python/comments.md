# Comments and Documentation

Comments are notes in your code that Python ignores when running your program. They help you and others understand what your code does. Good documentation makes your code maintainable and professional.

## Why Use Comments?

Comments serve several purposes:

1. **Explain complex code** - Make difficult logic understandable
2. **Document decisions** - Explain why you chose a specific approach
3. **Help collaborators** - Make it easy for others to understand your code
4. **Remind yourself** - Help future-you remember what past-you was thinking
5. **Temporarily disable code** - Test different approaches without deleting code

---

## Single-Line Comments

Use the `#` symbol to create single-line comments.

### Basic Single-Line Comments

```python
# This is a comment
print("Hello, World!")

# Calculate the area of a circle
radius = 5
area = 3.14 * radius ** 2

# Everything after # is ignored
x = 10  # This is also a comment
```

### Inline Comments

Comments can appear at the end of code lines:

```python
age = 25  # User's age in years
name = "Alice"  # Store user's name

# Keep inline comments short and relevant
total = price * quantity  # Calculate total cost
```

**Best Practice:** Use inline comments sparingly. If you need an inline comment, leave at least 2 spaces before the `#`:

```python
x = 5    # Good - 2+ spaces
y = 10   # Good - aligned
z = 15# Bad - no space before #
```

---

## Multi-Line Comments

Python doesn't have official multi-line comments, but there are two common approaches:

### Method 1: Multiple Single-Line Comments

```python
# This is a longer comment
# that spans multiple lines.
# Each line starts with #

print("Hello")
```

### Method 2: Multi-Line Strings (Docstrings)

```python
"""
This is a multi-line comment using triple quotes.
It can span as many lines as needed.
Python ignores strings that aren't assigned to variables.
"""

print("Hello")

'''
You can also use triple single quotes.
Both work the same way.
'''
```

**Note:** Multi-line strings are technically not comments—they're strings that Python ignores when not assigned to a variable. The proper use of triple-quoted strings is for **docstrings** (documentation strings).

---

## Docstrings (Documentation Strings)

Docstrings are special multi-line strings used to document modules, classes, functions, and methods. They're accessible at runtime and used by documentation tools.

### Function Docstrings

```python
def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius (float): The radius of the circle
        
    Returns:
        float: The area of the circle
    """
    return 3.14159 * radius ** 2

# Access the docstring
print(calculate_area.__doc__)
```

### One-Line Docstrings

For simple functions:

```python
def greet(name):
    """Return a greeting message for the given name."""
    return f"Hello, {name}!"

def add(a, b):
    """Add two numbers and return the result."""
    return a + b
```

### Multi-Line Docstrings

For more complex functions:

```python
def calculate_bmi(weight, height):
    """
    Calculate Body Mass Index (BMI).
    
    The BMI is calculated as weight in kilograms divided by
    the square of height in meters.
    
    Args:
        weight (float): Weight in kilograms
        height (float): Height in meters
        
    Returns:
        float: The calculated BMI value
        
    Example:
        >>> calculate_bmi(70, 1.75)
        22.857142857142858
    """
    return weight / (height ** 2)
```

### Module Docstrings

At the top of a Python file:

```python
"""
calculator.py

A simple calculator module for basic arithmetic operations.

This module provides functions for addition, subtraction,
multiplication, and division.

Author: Your Name
Date: 2024-10-14
"""

def add(a, b):
    """Add two numbers."""
    return a + b

def subtract(a, b):
    """Subtract b from a."""
    return a - b
```

---

## Comment Best Practices

### DO: Write Clear, Descriptive Comments

```python
# Good: Explains WHY
# Calculate tax at 8.5% rate for California
tax = price * 0.085

# Bad: States the obvious
# Multiply price by 0.085
tax = price * 0.085
```

### DO: Explain Complex Logic

```python
# Good: Explains the algorithm
# Use binary search to find the target value efficiently
# This reduces time complexity from O(n) to O(log n)
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    # ... rest of code

# Bad: No context for complex code
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    # ... rest of code
```

### DO: Document Assumptions and Limitations

```python
# Assume input is already sorted in ascending order
# Only works with positive integers
# Maximum input size is 10,000 elements
def fast_search(data, value):
    # ... code
```

### DON'T: State the Obvious

```python
# Bad: Comment repeats what code clearly shows
name = "Alice"  # Set name to Alice
age = 25  # Set age to 25

# Good: No comment needed - code is self-explanatory
name = "Alice"
age = 25
```

### DON'T: Leave Commented-Out Code

```python
# Bad: Old code left in comments
def calculate_total(price, quantity):
    # total = price + quantity  # Old wrong formula
    # total = price - quantity  # Another attempt
    total = price * quantity
    return total

# Good: Clean code only
def calculate_total(price, quantity):
    total = price * quantity
    return total
```

### DON'T: Write Misleading Comments

```python
# Bad: Comment doesn't match code
# Add two numbers
result = a * b  # Actually multiplying!

# Good: Comment matches code
# Multiply two numbers
result = a * b
```

---

## Types of Comments

### 1. Explanation Comments

Explain what the code does:

```python
# Convert temperature from Celsius to Fahrenheit
fahrenheit = celsius * 9/5 + 32
```

### 2. Clarification Comments

Clarify tricky or non-obvious code:

```python
# Use modulo to check if number is even
# (even numbers have remainder 0 when divided by 2)
is_even = number % 2 == 0
```

### 3. Warning Comments

Alert about potential issues:

```python
# WARNING: This function modifies the original list
# Make a copy first if you need to preserve it
def sort_list(my_list):
    my_list.sort()
    return my_list
```

### 4. TODO Comments

Mark incomplete or future work:

```python
# TODO: Add input validation
# TODO: Handle negative numbers
# FIXME: This breaks with large numbers
# HACK: Temporary workaround until API is fixed

def process_data(value):
    # TODO: Add error handling
    return value * 2
```

### 5. Section Dividers

Organize code into logical sections:

```python
# ============================================
# Configuration and Constants
# ============================================
API_KEY = "abc123"
MAX_RETRIES = 3

# ============================================
# Helper Functions
# ============================================
def helper1():
    pass

def helper2():
    pass

# ============================================
# Main Program Logic
# ============================================
def main():
    pass
```

---

## Commenting Style Guide (PEP 8)

Python has official style guidelines for comments in PEP 8:

### Rule 1: Limit Line Length

Comments should be 72 characters or less:

```python
# Good: Short, clear comment
# Calculate the final price

# Bad: This comment is way too long and exceeds the recommended character limit which makes it hard to read without scrolling
```

### Rule 2: Use Complete Sentences

Start with a capital letter and end with a period:

```python
# Good: This is a complete sentence.
total = sum(numbers)

# Less professional: calculate total
total = sum(numbers)
```

### Rule 3: Block Comments

Use block comments for multiple lines:

```python
# This is a block comment that explains
# a complex section of code. Each line
# starts with # and a single space.
```

### Rule 4: Space After #

Always use a space after the `#`:

```python
# Good - space after #
x = 5

#Bad - no space
y = 10
```

---

## Documentation Tools

### Using help()

Access docstrings in the Python interpreter:

```python
def greet(name):
    """Return a personalized greeting."""
    return f"Hello, {name}!"

# View documentation
help(greet)

# Access docstring directly
print(greet.__doc__)
```

### IDE Documentation

Most IDEs show docstrings when you hover over functions:

```python
def calculate_discount(price, discount_percent):
    """
    Calculate the discounted price.
    
    Args:
        price (float): Original price
        discount_percent (float): Discount percentage (0-100)
        
    Returns:
        float: Price after discount
    """
    discount = price * (discount_percent / 100)
    return price - discount

# When you type calculate_discount( in your IDE,
# you'll see the docstring as a tooltip
```

---

## Practical Examples

### Example 1: Well-Commented Calculator

```python
"""
Simple Calculator Module

Provides basic arithmetic operations with proper error handling.
"""

def add(a, b):
    """Add two numbers."""
    return a + b

def subtract(a, b):
    """Subtract b from a."""
    return a - b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

def divide(a, b):
    """
    Divide a by b.
    
    Args:
        a (float): Dividend
        b (float): Divisor
        
    Returns:
        float: Result of division
        
    Raises:
        ValueError: If b is zero
    """
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

# Example usage
if __name__ == "__main__":
    # Test addition
    result = add(5, 3)
    print(f"5 + 3 = {result}")  # Expected: 8
```

### Example 2: Data Processing Script

```python
"""
Student Grade Processor

This script processes student grades and calculates statistics.
"""

# ============================================
# Constants
# ============================================
PASSING_GRADE = 60
MAX_GRADE = 100

# ============================================
# Main Processing Functions
# ============================================

def calculate_average(grades):
    """
    Calculate the average of a list of grades.
    
    Args:
        grades (list): List of numeric grades
        
    Returns:
        float: Average grade rounded to 2 decimal places
    """
    if not grades:  # Handle empty list
        return 0.0
    
    total = sum(grades)
    average = total / len(grades)
    return round(average, 2)

def is_passing(grade):
    """Check if a grade is passing."""
    return grade >= PASSING_GRADE

# ============================================
# Example Usage
# ============================================

# Sample student grades
student_grades = [85, 92, 78, 95, 88]

# Calculate and display results
average = calculate_average(student_grades)
print(f"Average grade: {average}")

# Check if student passed
passed = is_passing(average)
print(f"Status: {'Passed' if passed else 'Failed'}")
```

---

## Common Mistakes to Avoid

### Mistake 1: Over-Commenting

```python
# Bad: Too many obvious comments
x = 5  # Assign 5 to x
y = 10  # Assign 10 to y
z = x + y  # Add x and y and assign to z
print(z)  # Print z

# Good: Let code speak for itself
x = 5
y = 10
z = x + y
print(z)
```

### Mistake 2: Outdated Comments

```python
# Bad: Comment doesn't match code
# Calculate the sum of two numbers
result = a * b  # Actually multiplying!

# Good: Keep comments in sync
# Calculate the product of two numbers
result = a * b
```

### Mistake 3: Redundant Comments

```python
# Bad: Comment repeats variable name
user_name = "Alice"  # User name

# Good: Add value with context
user_name = "Alice"  # Default username for testing
```

### Mistake 4: No Comments for Complex Code

```python
# Bad: No explanation for complex algorithm
def mystery(n):
    if n <= 1:
        return n
    return mystery(n-1) + mystery(n-2)

# Good: Explain what it does
def fibonacci(n):
    """
    Calculate the nth Fibonacci number using recursion.
    
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13...
    Each number is the sum of the previous two numbers.
    """
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
```

---

## Classwork

Practice writing good comments and documentation!

### Exercise 1: Add Comments

Create a file called `commented_code.py`. Add appropriate comments:

```python
"""
Add a module docstring here explaining what this file does.
"""

# Add comments to explain this section
PI = 3.14159
GRAVITY = 9.81

# Add a function docstring
def calculate_circle_area(radius):
    area = PI * radius ** 2
    return area

# Add a function docstring
def calculate_rectangle_area(length, width):
    area = length * width
    return area

# Add comments for the main section
if __name__ == "__main__":
    circle_area = calculate_circle_area(5)
    print(f"Circle area: {circle_area}")
    
    rect_area = calculate_rectangle_area(10, 5)
    print(f"Rectangle area: {rect_area}")
```

### Exercise 2: Document a Function

Create a file called `documented_functions.py`:

```python
# Write complete docstrings for these functions

def celsius_to_fahrenheit(celsius):
    """
    Write docstring here with:
    - What the function does
    - Parameters
    - Return value
    - Example
    """
    return (celsius * 9/5) + 32

def calculate_grade(score, total):
    """
    Write docstring here.
    """
    percentage = (score / total) * 100
    
    if percentage >= 90:
        return 'A'
    elif percentage >= 80:
        return 'B'
    elif percentage >= 70:
        return 'C'
    elif percentage >= 60:
        return 'D'
    else:
        return 'F'

def is_valid_email(email):
    """
    Write docstring here.
    """
    has_at = '@' in email
    has_dot = '.' in email
    return has_at and has_dot
```

### Exercise 3: Fix Bad Comments

Create a file called `fix_comments.py`. Improve these comments:

```python
# Bad comments - fix them!

# x
x = 5

# this adds 10 to x
x = x + 10

# print x
print(x)

# function
def calc(a, b):
    # return
    return a + b

# loop
for i in range(10):
    # print i
    print(i)
```

### Exercise 4: Comment Styles

Create a file called `comment_styles.py` demonstrating different comment types:

```python
"""
Module docstring goes here.
"""

# TODO: Add your own examples of:
# 1. Explanation comments
# 2. Warning comments
# 3. TODO comments
# 4. Section dividers
# 5. Inline comments

# Write code with appropriate comments for each type
```

---

## Assignment

### Project: Well-Documented Calculator Program

Create a professional calculator program called `professional_calculator.py` with excellent documentation and comments.

### Requirements

Your program should:

#### 1. **Module Documentation**

- Complete module docstring at the top
- Include purpose, author, date, version
- List main functions

#### 2. **Implement Functions**

Create these functions with complete docstrings:

- `add(a, b)` - Addition
- `subtract(a, b)` - Subtraction
- `multiply(a, b)` - Multiplication
- `divide(a, b)` - Division with error handling
- `power(base, exponent)` - Exponentiation
- `modulus(a, b)` - Remainder
- `calculate_average(numbers)` - Average of a list

#### 3. **Advanced Functions**

With detailed docstrings:

- `calculate_statistics(numbers)` - Return min, max, average, sum
- `is_prime(number)` - Check if number is prime
- `factorial(n)` - Calculate factorial

#### 4. **Documentation Requirements**

Each function must have:

- One-line summary
- Detailed description (if complex)
- Args section with types
- Returns section with type
- Example usage in docstring
- Raises section (if applicable)

#### 5. **Code Organization**

- Section dividers for different parts
- Constants clearly documented
- Inline comments for complex logic only
- TODO comments for future improvements

#### 6. **Comments Should Include**

- Explanation of algorithms
- Warning comments where appropriate
- Clarification for non-obvious code
- No obvious or redundant comments

#### 7. **Interactive Menu**

- Well-commented menu system
- User input handling with comments
- Clear section divisions

### Example Structure

```python
"""
Professional Calculator Program

A comprehensive calculator with basic and advanced mathematical
operations. Includes proper error handling and extensive documentation.

Author: Your Name
Date: 2024-10-14
Version: 1.0

Main Functions:
    - Basic arithmetic (add, subtract, multiply, divide)
    - Advanced operations (power, modulus, factorial)
    - Statistical functions (average, min, max)
    - Number theory (prime checking)

Usage:
    Run the program and select operations from the menu.
    
Example:
    $ python professional_calculator.py
    [Menu appears with options]
"""

# ============================================
# Constants and Configuration
# ============================================

# Mathematical constants
PI = 3.14159265359
E = 2.71828182846

# Program configuration
VERSION = "1.0"
AUTHOR = "Your Name"

# ============================================
# Basic Arithmetic Operations
# ============================================

def add(a, b):
    """
    Add two numbers.
    
    Performs simple addition of two numeric values and returns
    the result.
    
    Args:
        a (float): First number
        b (float): Second number
        
    Returns:
        float: Sum of a and b
        
    Example:
        >>> add(5, 3)
        8
        >>> add(-2, 7)
        5
    """
    return a + b

# ... continue with more functions

# ============================================
# Advanced Mathematical Operations
# ============================================

def factorial(n):
    """
    Calculate the factorial of a number.
    
    The factorial of n (written n!) is the product of all
    positive integers less than or equal to n.
    Formula: n! = n × (n-1) × (n-2) × ... × 2 × 1
    Special case: 0! = 1
    
    Args:
        n (int): Non-negative integer
        
    Returns:
        int: Factorial of n
        
    Raises:
        ValueError: If n is negative
        TypeError: If n is not an integer
        
    Example:
        >>> factorial(5)
        120
        >>> factorial(0)
        1
    """
    # Input validation
    if not isinstance(n, int):
        raise TypeError("Input must be an integer")
    if n < 0:
        raise ValueError("Factorial not defined for negative numbers")
    
    # Base case: 0! = 1
    if n == 0:
        return 1
    
    # Calculate factorial iteratively
    result = 1
    for i in range(1, n + 1):
        result *= i
    
    return result

# ============================================
# Utility Functions
# ============================================

# ============================================
# Main Program
# ============================================

def main():
    """
    Main program loop.
    
    Displays menu and processes user choices until exit.
    """
    # Display welcome message
    # Show menu
    # Process user input
    # Call appropriate functions
    pass

if __name__ == "__main__":
    main()
```

### Bonus Challenges (Optional)

1. **Generate HTML Documentation**: Use a tool to generate HTML docs
2. **Type Hints**: Add type hints to all functions
3. **Unit Tests**: Write test functions with docstrings
4. **README**: Create a README.md file documenting your program
5. **Sphinx Documentation**: Format docstrings for Sphinx
6. **Code Examples**: Include more detailed examples in docstrings
7. **Version History**: Add changelog in module docstring

### Submission Guidelines

- File name: `professional_calculator.py`
- Must include all required functions
- Every function must have complete docstring
- Use section dividers appropriately
- Include module docstring at top
- Comments should add value, not state obvious
- No commented-out code
- Follow PEP 8 style guidelines
- Estimated time: 90-120 minutes

### Grading Criteria

- ✅ Module docstring (5 points)
- ✅ Function docstrings - basic operations (8 points)
- ✅ Function docstrings - advanced operations (8 points)
- ✅ Docstring quality (Args, Returns, Examples) (10 points)
- ✅ Appropriate comments (not obvious) (8 points)
- ✅ Section dividers and organization (5 points)
- ✅ No redundant/obvious comments (4 points)
- ✅ Code clarity and readability (5 points)
- ✅ Error handling with documentation (5 points)
- ✅ Professional presentation (5 points)
- ✅ Bonus challenges (up to 7 extra points)

**Total: 63 points (+ up to 7 bonus points)**

---

## Quick Reference

### Comment Syntax

```python
# Single-line comment
x = 5  # Inline comment

"""
Multi-line string/docstring
Can span multiple lines
"""
```

### Docstring Template

```python
def function_name(param1, param2):
    """
    Brief description.
    
    Detailed description (optional).
    
    Args:
        param1 (type): Description
        param2 (type): Description
        
    Returns:
        type: Description
        
    Raises:
        ExceptionType: When it occurs
        
    Example:
        >>> function_name(1, 2)
        3
    """
    pass
```

### Comment Types

```python
# Explanation: What the code does
# TODO: Future work needed
# FIXME: Known bug to fix
# HACK: Temporary workaround
# WARNING: Important caution
```

---

## Summary

In this lesson, you learned:

- ✅ How to write single-line comments with `#`
- ✅ How to write multi-line comments and docstrings
- ✅ Best practices for commenting code
- ✅ What makes a good vs. bad comment
- ✅ How to write professional docstrings
- ✅ Different types of comments (explanation, warning, TODO)
- ✅ PEP 8 style guidelines for comments
- ✅ How to document functions, modules, and classes
- ✅ Common commenting mistakes to avoid
- ✅ How to use documentation tools

**You now know how to write professional, well-documented code!** Good documentation is a sign of a professional programmer and makes your code maintainable and collaborative.

In the next lesson, we'll move into operators, starting with arithmetic operators.

---

## Additional Resources

- **PEP 8 Comments:** [https://pep8.org/#comments](https://pep8.org/#comments)
- **PEP 257 Docstrings:** [https://peps.python.org/pep-0257/](https://peps.python.org/pep-0257/)
- **Google Python Style Guide:** [https://google.github.io/styleguide/pyguide.html](https://google.github.io/styleguide/pyguide.html)
- **Real Python - Documenting Python Code:** [https://realpython.com/documenting-python-code/](https://realpython.com/documenting-python-code/)

**Next lesson:** [Arithmetic Operators](arithmetic-operators)
