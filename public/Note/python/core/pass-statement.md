# Pass Statement

The **pass** statement is a null operation - it does nothing when executed. It serves as a placeholder where Python syntax requires a statement but you don't want any code to execute.

## What is pass?

**pass** is a placeholder statement that does absolutely nothing.

```python
# pass does nothing
pass

# These are equivalent
if True:
    pass

if True:
    # Nothing happens
```

### Why pass Exists

Python requires code blocks to have at least one statement. **pass** allows you to create syntactically correct empty blocks.

```python
# This would cause an error (empty block)
# if condition:
#     # SyntaxError: expected an indented block

# This is valid
if condition:
    pass  # TODO: implement later
```

---

## Using pass in Conditionals

### Empty if Blocks

```python
# Placeholder for future logic
age = 20
if age >= 18:
    pass  # Will implement adult logic later
else:
    print("Minor")

# Multiple conditions
score = 85
if score >= 90:
    pass  # A grade logic
elif score >= 80:
    print("Grade B")
else:
    print("Grade C or below")
```

### Development Placeholder

```python
# Planning code structure
user_type = "admin"

if user_type == "admin":
    pass  # TODO: Admin privileges
elif user_type == "moderator":
    pass  # TODO: Moderator privileges
else:
    pass  # TODO: Regular user privileges

# You can run this without errors
```

---

## Using pass in Loops

### Empty Loop Bodies

```python
# Wait for condition (busy-wait)
while not ready:
    pass  # Do nothing until ready

# Placeholder loop
for i in range(10):
    pass  # Will add logic later

# Skip processing but keep structure
items = [1, 2, 3, 4, 5]
for item in items:
    if item == 3:
        pass  # Skip item 3 for now
    else:
        print(item)
```

---

## Using pass in Functions

### Function Stubs

```python
# Define function signature without implementation
def calculate_tax(amount):
    pass  # TODO: implement tax calculation

def validate_email(email):
    pass  # TODO: implement validation

def send_notification(user, message):
    pass  # TODO: implement notification system

# Functions exist but do nothing yet
calculate_tax(100)  # No error, but does nothing
```

### Abstract Methods (Preview)

```python
# Define interface without implementation
class Animal:
    def make_sound(self):
        pass  # Subclasses will implement
    
    def move(self):
        pass  # Subclasses will implement

class Dog(Animal):
    def make_sound(self):
        print("Woof!")
    
    def move(self):
        print("Running")
```

---

## Using pass in Classes

### Empty Classes

```python
# Placeholder class
class User:
    pass  # Will add attributes and methods later

# Can create instances
user = User()
user.name = "Alice"  # Can add attributes dynamically

# Minimal class definition
class EmptyClass:
    pass

class DataModel:
    pass  # Planning data structure
```

---

## Using pass in Exception Handling

### Silently Ignore Errors

```python
# Ignore specific exceptions
try:
    risky_operation()
except ValueError:
    pass  # Ignore ValueError, continue execution

# Ignore all errors (not recommended!)
try:
    dangerous_operation()
except:
    pass  # Silently fail (use carefully!)

# Better: at least log the error
try:
    operation()
except Exception as e:
    pass  # TODO: Add logging here
```

---

## pass vs Other Statements

### pass vs continue

```python
# pass does nothing
for i in range(5):
    if i == 2:
        pass  # Does nothing, continues normally
    print(i)
# Output: 0, 1, 2, 3, 4

# continue skips rest of iteration
for i in range(5):
    if i == 2:
        continue  # Skips print when i=2
    print(i)
# Output: 0, 1, 3, 4
```

### pass vs return

```python
# pass does nothing, function continues
def function_with_pass():
    pass
    print("This prints")
    return "Done"

result = function_with_pass()  # Prints and returns

# return exits function
def function_with_return():
    return
    print("This never prints")

function_with_return()  # Returns immediately
```

### pass vs break

```python
# pass does nothing
for i in range(5):
    if i == 2:
        pass  # Loop continues
    print(i)
# Output: 0, 1, 2, 3, 4

# break exits loop
for i in range(5):
    if i == 2:
        break  # Loop exits
    print(i)
# Output: 0, 1
```

---

## When to Use pass

### 1. During Development

```python
# Sketch out program structure
def main():
    initialize()
    process_data()
    cleanup()

def initialize():
    pass  # TODO

def process_data():
    pass  # TODO

def cleanup():
    pass  # TODO

# Run without errors while developing
main()
```

### 2. Placeholder for Future Code

```python
# Mark sections for future implementation
if DEBUG_MODE:
    pass  # Add debug logging here
else:
    production_code()

# Feature flags
if FEATURE_ENABLED:
    pass  # Implement new feature
else:
    old_implementation()
```

### 3. Minimal Class/Function

```python
# Create minimal structure
class Config:
    pass

config = Config()
config.host = "localhost"
config.port = 8080

# Empty callback
def do_nothing():
    pass

# Use as default parameter
def process(data, callback=do_nothing):
    # Process data
    callback()  # Safe to call
```

### 4. Syntax Requirements

```python
# Empty except (not recommended, but valid)
try:
    operation()
except:
    pass

# Empty else
if condition:
    do_something()
else:
    pass  # Nothing to do in else

# Empty while
while False:
    pass  # Never executes
```

---

## When NOT to Use pass

### Don't Use for Logic

```python
# Bad - pass does nothing
for item in items:
    if item > 10:
        pass  # This doesn't skip the item!
    process(item)

# Good - use continue to skip
for item in items:
    if item > 10:
        continue  # Skip this item
    process(item)
```

### Don't Use to Suppress Important Errors

```python
# Bad - hides all errors
try:
    critical_operation()
except:
    pass  # Silently fails, hard to debug!

# Good - handle appropriately
try:
    critical_operation()
except Exception as e:
    print(f"Error: {e}")
    # or log the error
    # or re-raise if needed
```

---

## pass with Comments

Always add comments when using pass to explain intent.

```python
# Good - explains why pass is there
if user.is_premium:
    pass  # Premium features coming in v2.0
else:
    show_ads()

# Good - marks TODO
def calculate_discount(price):
    pass  # TODO: Implement discount logic

# Bad - no explanation
if condition:
    pass

# Better
if condition:
    pass  # Placeholder: add notification logic
```

---

## Common Patterns

### Stub Functions

```python
# Create function signatures first
def login(username, password):
    pass

def logout():
    pass

def get_user_data(user_id):
    pass

def update_profile(user_id, data):
    pass

# Implement later one by one
```

### Conditional Placeholders

```python
# Plan different paths
role = get_user_role()

if role == "admin":
    pass  # Full access
elif role == "moderator":
    pass  # Limited access
elif role == "user":
    pass  # Basic access
else:
    deny_access()
```

### Loop Placeholders

```python
# Structure loops before implementation
for file in files:
    if file.endswith('.txt'):
        pass  # Process text files
    elif file.endswith('.csv'):
        pass  # Process CSV files
    else:
        pass  # Skip other files
```

---

## Alternatives to pass

### Using Comments Only

```python
# Instead of pass
def function():
    pass  # TODO: implement

# Could use just comment (in some contexts)
def function():
    # TODO: implement
    return None  # Explicit return
```

### Using Ellipsis (...)

```python
# Alternative to pass
def function():
    ...  # Does same thing as pass

class EmptyClass:
    ...  # Also valid

# Commonly used in type hints
def abstract_method() -> int:
    ...  # Indicates not implemented
```

---

## Practical Examples

### Building a Menu System

```python
def main_menu():
    while True:
        print("\n1. Start Game")
        print("2. Settings")
        print("3. Exit")
        
        choice = input("Choose: ")
        
        if choice == "1":
            pass  # TODO: Implement game
        elif choice == "2":
            pass  # TODO: Implement settings
        elif choice == "3":
            break
        else:
            print("Invalid choice")
```

### API Development

```python
# Define API endpoints before implementation
def get_users():
    pass  # TODO: Fetch from database

def create_user(data):
    pass  # TODO: Add validation and save

def update_user(user_id, data):
    pass  # TODO: Update database

def delete_user(user_id):
    pass  # TODO: Soft delete
```

---

## Classwork

### Exercise 1: Function Stubs

Create **function_stubs.py**:

```python
"""Create function stubs with pass."""

# Define calculator functions
def add(a, b):
    pass  # TODO: return a + b

def subtract(a, b):
    pass  # TODO: return a - b

def multiply(a, b):
    pass  # TODO: return a * b

def divide(a, b):
    pass  # TODO: return a / b with zero check

# Test (returns None for now)
print(add(5, 3))
print(subtract(10, 4))
```

### Exercise 2: Class Structure

Create **class_structure.py**:

```python
"""Plan class structure with pass."""

class Student:
    pass  # TODO: Add attributes and methods

class Course:
    pass  # TODO: Add course details

class Grade:
    pass  # TODO: Add grading system

# Can still use them
student = Student()
student.name = "Alice"
student.age = 20
print(f"{student.name}, {student.age}")
```

### Exercise 3: Conditional Planning

Create **conditional_planning.py**:

```python
"""Plan conditional logic with pass."""

score = int(input("Enter score: "))

if score >= 90:
    pass  # TODO: Calculate A grade
elif score >= 80:
    pass  # TODO: Calculate B grade
elif score >= 70:
    pass  # TODO: Calculate C grade
elif score >= 60:
    pass  # TODO: Calculate D grade
else:
    pass  # TODO: Calculate F grade

print("Grade calculation complete")
```

---

## Assignment

### Project: Program Architecture

Create **program_architecture.py** - a program skeleton using pass statements.

### Requirements

Design a complete program structure with:

#### 1. **User Management System**

- Define functions for: login, logout, register, update_profile
- Use pass for all implementations
- Add TODO comments

#### 2. **Data Processing Module**

- Functions for: load_data, validate_data, process_data, save_data
- Use pass with descriptive comments

#### 3. **Error Handling Framework**

- Try-except blocks with pass
- Document what errors should be caught

#### 4. **Class Hierarchy**

- Base class and 2-3 subclasses
- All methods use pass
- Add docstrings

#### 5. **Menu System**

- Complete menu structure
- All options use pass
- Show program flow

### Code Requirements

- Use pass appropriately
- Add meaningful TODO comments
- Include docstrings
- Show clear program structure
- Demonstrate understanding of pass vs other statements

### Grading Criteria

- ✅ User management structure (20 points)
- ✅ Data processing structure (20 points)
- ✅ Error handling framework (20 points)
- ✅ Class hierarchy (20 points)
- ✅ Menu system (20 points)
- ✅ Appropriate pass usage (15 points)
- ✅ TODO comments (10 points)
- ✅ Docstrings (10 points)
- ✅ Code organization (5 points)

**Total: 140 points**

---

## Quick Reference

### pass Statement

```python
pass  # Does nothing
```

### Common Uses

```python
# Empty function
def func():
    pass

# Empty class
class Empty:
    pass

# Placeholder
if condition:
    pass  # TODO

# Exception ignore
try:
    code()
except:
    pass
```

### Alternatives

```python
...  # Ellipsis (same as pass)
```

---

## Summary

In this lesson, you learned:

- ✅ What pass statement does (nothing!)
- ✅ Why pass exists in Python
- ✅ Using pass in conditionals
- ✅ Using pass in loops
- ✅ Using pass in functions
- ✅ Using pass in classes
- ✅ pass vs continue/break/return
- ✅ When 
