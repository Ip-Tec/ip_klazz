# Boolean Logic

Boolean logic is the foundation of decision-making in programming. Understanding how boolean values work and how to combine them is essential for writing effective conditional statements and creating intelligent programs.

## Boolean Values

Python has two boolean values: 'True' and 'False'.

```python
# Boolean literals
is_active = True
is_complete = False

# Print boolean values
print(True)   # True
print(False)  # False

# Type checking
print(type(True))   # <class 'bool'>
print(type(False))  # <class 'bool'>

# Booleans are case-sensitive
# true is not the same as True
# print(true)  # NameError
```

### Booleans in Conditions

```python
# Using boolean variables
is_logged_in = True
if is_logged_in:
    print("Welcome back!")

is_raining = False
if not is_raining:
    print("No umbrella needed")

# Boolean from comparison
age = 20
is_adult = age >= 18
print(is_adult)  # True

# Boolean from function
def is_even(number):
    return number % 2 == 0

print(is_even(4))   # True
print(is_even(7))   # False
```

---

## Boolean Operators

Python provides three boolean operators: 'and', 'or', and 'not'.

### The AND Operator

Returns 'True' only if **both** operands are 'True'.

```python
# Truth table for AND
print(True and True)    # True
print(True and False)   # False
print(False and True)   # False
print(False and False)  # False

# Practical examples
age = 25
has_license = True
print(age >= 18 and has_license)  # True

# Multiple conditions
is_weekday = True
is_daytime = True
is_open = True
can_visit = is_weekday and is_daytime and is_open
print(can_visit)  # True

# Short-circuit evaluation
x = 5
result = (x > 10) and (10 / 0 == 1)  # No error! Stops at first False
print(result)  # False
```

### The OR Operator

Returns 'True' if **at least one** operand is 'True'.

```python
# Truth table for OR
print(True or True)     # True
print(True or False)    # True
print(False or True)    # True
print(False or False)   # False

# Practical examples
is_weekend = True
is_holiday = False
can_relax = is_weekend or is_holiday
print(can_relax)  # True

# Multiple conditions
has_cash = False
has_card = True
has_mobile_pay = True
can_pay = has_cash or has_card or has_mobile_pay
print(can_pay)  # True

# Short-circuit evaluation
x = 15
result = (x > 10) or (10 / 0 == 1)  # No error! Stops at first True
print(result)  # True
```

### The NOT Operator

Reverses a boolean value.

```python
# Truth table for NOT
print(not True)   # False
print(not False)  # True

# Practical examples
is_closed = False
is_open = not is_closed
print(is_open)  # True

# Double negative
value = True
print(not not value)  # True

# With comparisons
age = 15
is_minor = not (age >= 18)
print(is_minor)  # True

# Negating other operators
items = [1, 2, 3]
is_empty = not items
print(is_empty)  # False
```

---

## Boolean Expressions

Combining comparisons and logical operators creates boolean expressions.

### Simple Boolean Expressions

```python
# Comparison results
x = 10
print(x > 5)    # True
print(x < 5)    # False
print(x == 10)  # True
print(x != 10)  # False

# Store in variables
is_positive = x > 0
is_even = x % 2 == 0
is_large = x > 100

print(is_positive)  # True
print(is_even)      # True
print(is_large)     # False
```

### Complex Boolean Expressions

```python
# Combining multiple conditions
age = 25
income = 50000
credit_score = 700

# Loan eligibility
eligible = (age >= 21 and age <= 65) and income >= 30000 and credit_score >= 650
print(eligible)  # True

# Access control
is_admin = False
is_moderator = True
is_verified = True

has_access = (is_admin or is_moderator) and is_verified
print(has_access)  # True

# Complex validation
password = "Secret123"
length_ok = len(password) >= 8
has_upper = any(c.isupper() for c in password)
has_lower = any(c.islower() for c in password)
has_digit = any(c.isdigit() for c in password)

is_strong = length_ok and has_upper and has_lower and has_digit
print(is_strong)  # True
```

---

## Operator Precedence

Boolean operators have a specific order of evaluation:

1. **not** (highest precedence)
2. **and**
3. **or** (lowest precedence)

```python
# Without parentheses
result = True or False and False
print(result)  # True
# Evaluated as: True or (False and False)
# = True or False = True

# With parentheses
result = (True or False) and False
print(result)  # False
# Evaluated as: True and False = False

# Complex example
a = True
b = False
c = True

result = not a or b and c
print(result)  # False
# Step 1: not a = False
# Step 2: b and c = False
# Step 3: False or False = False

# Always use parentheses for clarity!
result = (not a) or (b and c)
print(result)  # False (clearer)
```

### Parentheses for Clarity

```python
# Confusing without parentheses
if age >= 18 and has_license or has_permit and has_instructor:
    print("Can drive")

# Clear with parentheses
if (age >= 18 and has_license) or (has_permit and has_instructor):
    print("Can drive")

# Another example
eligible = income > 30000 and credit_score > 650 or has_cosigner
# vs
eligible = (income > 30000 and credit_score > 650) or has_cosigner
```

---

## Truthiness and Falsiness

In Python, non-boolean values can be evaluated in boolean contexts.

### Falsy Values

These values are considered 'False':

```python
# All falsy values
print(bool(False))      # False
print(bool(None))       # False
print(bool(0))          # False
print(bool(0.0))        # False
print(bool(""))         # False (empty string)
print(bool([]))         # False (empty list)
print(bool(()))         # False (empty tuple)
print(bool({}))         # False (empty dict)
print(bool(set()))      # False (empty set)
```

### Truthy Values

Everything else is considered 'True':

```python
# All truthy values
print(bool(True))       # True
print(bool(1))          # True
print(bool(-1))         # True
print(bool(0.1))        # True
print(bool("hello"))    # True (non-empty string)
print(bool(" "))        # True (even just space!)
print(bool([1]))        # True (non-empty list)
print(bool([0]))        # True (list with zero is still non-empty!)
print(bool({1: 2}))     # True (non-empty dict)
```

### Using Truthiness in Conditions

```python
# Check if string is not empty
name = "Alice"
if name:  # Instead of: if name != ""
    print(f"Hello, {name}")

# Check if list has items
items = [1, 2, 3]
if items:  # Instead of: if len(items) > 0
    print(f"You have {len(items)} items")

# Check if number is not zero
count = 5
if count:  # Instead of: if count != 0
    print(f"Count: {count}")

# Default value pattern
user_input = ""
value = user_input or "default"
print(value)  # "default"

# Check if None
result = None
if result:
    print("Has value")
else:
    print("No value")  # This prints
```

---

## De Morgan's Laws

Mathematical rules for simplifying boolean expressions.

### First Law

**not (A and B) = (not A) or (not B)**

```python
# Original expression
age = 15
has_permission = False
cannot_enter = not (age >= 18 and has_permission)
print(cannot_enter)  # True

# Equivalent using De Morgan's Law
cannot_enter = (age < 18) or (not has_permission)
print(cannot_enter)  # True

# Practical example
is_logged_in = False
is_verified = False

# These are equivalent:
needs_action1 = not (is_logged_in and is_verified)
needs_action2 = (not is_logged_in) or (not is_verified)
print(needs_action1 == needs_action2)  # True
```

### Second Law

**not (A or B) = (not A) and (not B)**

```python
# Original expression
is_weekend = False
is_holiday = False
is_workday = not (is_weekend or is_holiday)
print(is_workday)  # True

# Equivalent using De Morgan's Law
is_workday = (not is_weekend) and (not is_holiday)
print(is_workday)  # True

# Practical example
has_error = False
has_warning = False

# These are equivalent:
is_clean1 = not (has_error or has_warning)
is_clean2 = (not has_error) and (not has_warning)
print(is_clean1 == is_clean2)  # True
```

---

## Boolean Functions

Functions that return boolean values are called predicates.

### Simple Predicates

```python
def is_even(number):
    """Check if number is even."""
    return number % 2 == 0

def is_positive(number):
    """Check if number is positive."""
    return number > 0

def is_adult(age):
    """Check if person is an adult."""
    return age >= 18

# Using predicates
print(is_even(4))      # True
print(is_positive(-5)) # False
print(is_adult(20))    # True
```

### Complex Predicates

```python
def is_valid_email(email):
    """Check if email format is valid."""
    return "@" in email and "." in email and len(email) >= 5

def is_strong_password(password):
    """Check if password is strong."""
    length_ok = len(password) >= 8
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    return length_ok and has_upper and has_lower and has_digit

def is_leap_year(year):
    """Check if year is a leap year."""
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Using complex predicates
print(is_valid_email("user@example.com"))  # True
print(is_strong_password("Pass123"))       # True
print(is_leap_year(2024))                  # True
```

### Combining Predicates

```python
def can_vote(age, is_citizen):
    """Check if person can vote."""
    return age >= 18 and is_citizen

def can_drive(age, has_license, has_insurance):
    """Check if person can legally drive."""
    return age >= 16 and has_license and has_insurance

def is_eligible_for_loan(age, income, credit_score):
    """Check loan eligibility."""
    age_ok = 21 <= age <= 70
    income_ok = income >= 30000
    credit_ok = credit_score >= 650
    return age_ok and income_ok and credit_ok

# Using combined predicates
print(can_vote(20, True))                    # True
print(can_drive(17, True, True))             # True
print(is_eligible_for_loan(30, 50000, 700)) # True
```

---

## Boolean Algebra

Boolean algebra operations for manipulating boolean expressions.

### Identity Laws

```python
# AND identity
print(True and x == x)   # x remains x
print(False and x == False)  # Always False

# OR identity
print(False or x == x)   # x remains x
print(True or x == True)   # Always True
```

### Complement Laws

```python
# AND complement
x = True
print(x and not x)  # False (always)

# OR complement
print(x or not x)   # True (always)
```

### Commutative Laws

```python
# AND is commutative
a = True
b = False
print((a and b) == (b and a))  # True

# OR is commutative
print((a or b) == (b or a))    # True
```

### Associative Laws

```python
# AND is associative
a, b, c = True, False, True
print((a and b) and c == a and (b and c))  # True

# OR is associative
print((a or b) or c == a or (b or c))      # True
```

### Distributive Laws

```python
# AND distributes over OR
a, b, c = True, False, True
result1 = a and (b or c)
result2 = (a and b) or (a and c)
print(result1 == result2)  # True

# OR distributes over AND
result1 = a or (b and c)
result2 = (a or b) and (a or c)
print(result1 == result2)  # True
```

---

## Practical Boolean Patterns

### Guard Clauses

```python
def process_user(user):
    """Process user data with guard clauses."""
    # Exit early if conditions not met
    if not user:
        return False
    
    if not user.get("email"):
        return False
    
    if not user.get("age") or user["age"] < 18:
        return False
    
    # Main logic here
    return True
```

### Flag Variables

```python
# Using flags to track state
is_valid = True
error_messages = []

# Validate input
if len(password) < 8:
    is_valid = False
    error_messages.append("Password too short")

if not any(c.isdigit() for c in password):
    is_valid = False
    error_messages.append("Need a digit")

if not any(c.isupper() for c in password):
    is_valid = False
    error_messages.append("Need uppercase")

# Check result
if is_valid:
    print("Valid password")
else:
    print("Invalid password:")
    for msg in error_messages:
        print(f"  - {msg}")
```

### Boolean Accumulators

```python
# Check if all conditions are met
all_passed = True
for score in [85, 92, 78, 95]:
    if score < 60:
        all_passed = False
        break

print("All passed" if all_passed else "Some failed")

# Check if any condition is met
any_passed = False
for score in [45, 52, 38, 55]:
    if score >= 60:
        any_passed = True
        break

print("At least one passed" if any_passed else "All failed")
```

---

## Common Boolean Patterns

### Validation Pattern

```python
def validate_registration(username, email, password, age):
    """Validate user registration."""
    errors = []
    
    # Username validation
    if not username or len(username) < 3:
        errors.append("Username must be at least 3 characters")
    
    # Email validation
    if not email or "@" not in email:
        errors.append("Invalid email format")
    
    # Password validation
    if not password or len(password) < 8:
        errors.append("Password must be at least 8 characters")
    
    # Age validation
    if not age or age < 13:
        errors.append("Must be at least 13 years old")
    
    # Return result
    is_valid = len(errors) == 0
    return is_valid, errors

# Usage
valid, errors = validate_registration("alice", "alice@example.com", "Pass123!", 25)
if valid:
    print("Registration successful")
else:
    print("Registration failed:")
    for error in errors:
        print(f"  - {error}")
```

### State Machine Pattern

```python
# Traffic light state machine
class TrafficLight:
    def __init__(self):
        self.is_red = True
        self.is_yellow = False
        self.is_green = False
    
    def can_go(self):
        return self.is_green
    
    def should_slow(self):
        return self.is_yellow
    
    def must_stop(self):
        return self.is_red
    
    def next_state(self):
        if self.is_red:
            self.is_red = False
            self.is_green = True
        elif self.is_green:
            self.is_green = False
            self.is_yellow = True
        elif self.is_yellow:
            self.is_yellow = False
            self.is_red = True

# Usage
light = TrafficLight()
print(f"Can go: {light.can_go()}")      # False
print(f"Must stop: {light.must_stop()}") # True
```

### Toggle Pattern

```python
# Toggle boolean values
is_visible = True
print(f"Visible: {is_visible}")

# Toggle
is_visible = not is_visible
print(f"Visible: {is_visible}")  # False

# Toggle back
is_visible = not is_visible
print(f"Visible: {is_visible}")  # True

# Toggle with function
def toggle(value):
    return not value

is_muted = False
is_muted = toggle(is_muted)
print(f"Muted: {is_muted}")  # True
```

---

## Classwork

Practice boolean logic!

### Exercise 1: Truth Tables

Create a file called 'truth_tables.py':

```python
"""
Generate truth tables for boolean operators.
"""

print("=" * 60)
print("BOOLEAN LOGIC TRUTH TABLES")
print("=" * 60)

# AND truth table
print("\nAND Operator:")
print("-" * 60)
print("A     | B     | A and B")
print("-" * 60)
for a in [True, False]:
    for b in [True, False]:
        result = a and b
        print(f"{str(a):5} | {str(b):5} | {result}")

# OR truth table
print("\nOR Operator:")
print("-" * 60)
print("A     | B     | A or B")
print("-" * 60)
for a in [True, False]:
    for b in [True, False]:
        result = a or b
        print(f"{str(a):5} | {str(b):5} | {result}")

# NOT truth table
print("\nNOT Operator:")
print("-" * 60)
print("A     | not A")
print("-" * 60)
for a in [True, False]:
    result = not a
    print(f"{str(a):5} | {result}")

print("=" * 60)
```

### Exercise 2: Boolean Predicates

Create a file called 'predicates.py':

```python
"""
Create and test boolean predicate functions.
"""

def is_even(n):
    """Check if number is even."""
    return n % 2 == 0

def is_positive(n):
    """Check if number is positive."""
    return n > 0

def is_in_range(n, low, high):
    """Check if number is in range [low, high]."""
    return low <= n <= high

def is_valid_age(age):
    """Check if age is valid (0-120)."""
    return 0 <= age <= 120

def is_leap_year(year):
    """Check if year is a leap year."""
    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)

# Test predicates
print("=" * 60)
print("BOOLEAN PREDICATES TEST")
print("=" * 60)

# Test numbers
test_numbers = [4, 7, -3, 0, 15]
for num in test_numbers:
    print(f"\nNumber: {num}")
    print(f"  Is even: {is_even(num)}")
    print(f"  Is positive: {is_positive(num)}")
    print(f"  In range 0-10: {is_in_range(num, 0, 10)}")

# Test ages
test_ages = [25, -5, 150, 0]
for age in test_ages:
    print(f"\nAge: {age}")
    print(f"  Is valid: {is_valid_age(age)}")

# Test years
test_years = [2000, 2024, 1900, 2100]
for year in test_years:
    print(f"\nYear: {year}")
    print(f"  Is leap year: {is_leap_year(year)}")

print("=" * 60)
```

### Exercise 3: Access Control System

Create a file called 'access_control.py':

```python
"""
Access control system using boolean logic.
"""

def check_access(age, is_member, is_verified, has_ticket):
    """
    Check if user has access based on multiple conditions.
    """
    # Age requirement
    age_ok = age >= 18
    
    # Basic access (member OR has ticket)
    has_basic_access = is_member or has_ticket
    
    # Full access requires age, basic access, and verification
    has_full_access = age_ok and has_basic_access and is_verified
    
    return {
        "age_ok": age_ok,
        "has_basic_access": has_basic_access,
        "has_full_access": has_full_access
    }

# Test scenarios
print("=" * 60)
print("ACCESS CONTROL SYSTEM")
print("=" * 60)

scenarios = [
    {"age": 25, "is_member": True, "is_verified": True, "has_ticket": False},
    {"age": 16, "is_member": False, "is_verified": True, "has_ticket": True},
    {"age": 30, "is_member": False, "is_verified": False, "has_ticket": True},
    {"age": 20, "is_member": True, "is_verified": True, "has_ticket": True},
]

for i, scenario in enumerate(scenarios, 1):
    print(f"\nScenario {i}:")
    print(f"  Age: {scenario['age']}")
    print(f"  Member: {scenario['is_member']}")
    print(f"  Verified: {scenario['is_verified']}")
    print(f"  Has Ticket: {scenario['has_ticket']}")
    
    result = check_access(**scenario)
    print(f"\nResults:")
    print(f"  Age OK: {result['age_ok']}")
    print(f"  Basic Access: {result['has_basic_access']}")
    print(f"  Full Access: {result['has_full_access']}")
    print("-" * 60)
```

### Exercise 4: Password Validator

Create a file called 'password_validator.py':

```python
"""
Password validator using boolean logic.
"""

def validate_password(password):
    """
    Validate password strength based on multiple criteria.
    """
    # Individual checks
    length_ok = len(password) >= 8
    has_upper = any(c.isupper() for c in password)
    has_lower = any(c.islower() for c in password)
    has_digit = any(c.isdigit() for c in password)
    has_special = any(c in "!@#$%^&*()_+-=" for c in password)
    
    # Calculate strength score
    score = sum([length_ok, has_upper, has_lower, has_digit, has_special])
    
    # Determine overall strength
    is_strong = length_ok and has_upper and has_lower and has_digit
    is_very_strong = is_strong and has_special
    
    return {
        "length_ok": length_ok,
        "has_upper": has_upper,
        "has_lower": has_lower,
        "has_digit": has_digit,
        "has_special": has_special,
        "score": score,
        "is_strong": is_strong,
        "is_very_strong": is_very_strong
    }

# Test passwords
passwords = [
    "pass",
    "password",
    "Password",
    "Password1",
    "Password1!",
    "Pw1!",
]

print("=" * 60)
print("PASSWORD VALIDATOR")
print("=" * 60)

for pwd in passwords:
    print(f"\nPassword: {pwd}")
    result = validate_password(pwd)
    
    print(f"Checks:")
    print(f"  Length (8+): {result['length_ok']}")
    print(f"  Uppercase: {result['has_upper']}")
    print(f"  Lowercase: {result['has_lower']}")
    print(f"  Digit: {result['has_digit']}")
    print(f"  Special: {result['has_special']}")
    print(f"Score: {result['score']}/5")
    print(f"Strong: {result['is_strong']}")
    print(f"Very Strong: {result['is_very_strong']}")
    print("-" * 60)
```

---

## Assignment

### Project: Boolean Logic System

Create a comprehensive program called 'boolean_logic_system.py' that demonstrates mastery of boolean logic through various applications.

### Requirements

Your program should include:

#### 1. **Eligibility Checker**

Check eligibility for various services:

- Voting (age, citizenship)
- Driving (age, license, insurance)
- Loan (age, income, credit)
- Senior discount (age, membership)
- Student discount (age, student ID, enrollment)
Use complex boolean expressions

#### 2. **Access Control System**

Multi-level access control:

- Guest access (anyone)
- User access (registered)
- Premium access (paid + verified)
- Admin access (admin role + 2FA)
- Super admin (multiple conditions)
Implement using boolean logic

#### 3. **Form Validator**

Validate registration form:

- Username (length, characters)
- Email (format, domain)
- Password (strength criteria)
- Age (range, verification)
- Terms accepted
Return boolean result and error list

#### 4. **Game Condition Checker**

Check game conditions:

- Can level up (XP, quests, boss defeated)
- Can enter area (level, key items, reputation)
- Can use item (level, class, requirements)
- Achievement unlocked (multiple criteria)
Use nested boolean logic

#### 5. **Insurance Premium Calculator**

Determine premium based on:

- Age range
- Driving record (accidents, violations)
- Vehicle type
- Coverage level
- Credit score
- Location risk
Use boolean flags and conditions

#### 6. **Smart Home Controller**

Control devices based on:

- Time of day
- Temperature
- Occupancy
- Light levels
- User preferences
- Energy saving mode
Implement automation logic

#### 7. **Course Enrollment System**

Check if student can enroll:

- Prerequisites completed
- GPA requirements
- Class capacity
- Time conflicts
- Department approval
- Financial clearance
Return detailed boolean report

#### 8. **Health Risk Assessor**

Assess health risks:

- Age factors
- BMI category
- Blood pressure
- Smoking status
- Exercise frequency
- Family history
Calculate boolean risk flags

### Code Requirements

- Use all boolean operators (and, or, not)
- Demonstrate De Morgan's Laws
- Create boolean functions (predicates)
- Use truthiness/falsiness appropriately
- Implement complex boolean expressions
- Use operator precedence correctly
- Include guard clauses
- Professional error handling
- Menu-driven interface
- Functions for organization
- Comments and docstrings
- Truth tables where appropriate

### Example Output

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║          BOOLEAN LOGIC SYSTEM                    ║
║                                                  ║
╚══════════════════════════════════════════════════╝

MAIN MENU:
1. Eligibility Checker
2. Access Control System
3. Form Validator
4. Game Condition Checker
5. Insurance Premium Calculator
6. Smart Home Controller
7. Course Enrollment System
8. Health Risk Assessor
9. Exit

Enter your choice (1-9): 7

════════════════════════════════════════════════════
        COURSE ENROLLMENT SYSTEM
════════════════════════════════════════════════════

Course: Advanced Python Programming
Student ID: 12345

CHECKING REQUIREMENTS:
────────────────────────────────────────────────────
✓ Prerequisites: Completed (Intro to Programming)
✓ GPA Requirement: 3.2 >= 3.0
✓ Class Capacity: 15/20 seats available
✓ Time Conflict: No conflicts detected
✓ Department Approval: Approved
✓ Financial Clearance: Account in good standing

════════════════════════════════════════════════════
ENROLLMENT APPROVED ✓
════════════════════════════════════════════════════

You have been enrolled in:
  Course: Advanced Python Programming
  Section: CS401-01
  Time: MWF 10:00-11:30 AM
  Instructor: Prof. Smith
  Credits: 3

Next steps:
1. Access course materials online
2. Purchase required textbook
3. Attend first class on Monday
════════════════════════════════════════════════════
```

### Bonus Challenges (Optional)

1. **Logic Circuit Simulator**: Simulate AND/OR/NOT gates
2. **Boolean Expression Parser**: Evaluate boolean expressions from strings
3. **Truth Table Generator**: Generate tables for any expression
4. **Quiz System**: Boolean logic quiz with scoring
5. **Recommendation Engine**: Complex preference matching
6. **Rule Engine**: Define and evaluate custom rules
7. **State Machine**: Implement complex state transitions
8. **Voting System**: Complex eligibility with multiple criteria

### Submission Guidelines

- File name: 'boolean_logic_system.py'
- Must include all 8 systems
- Use boolean logic extensively
- Demonstrate all operators
- Clear boolean expressions
- Well-organized with functions
- Comments and docstrings
- Test all scenarios
- Estimated time: 150-180 minutes

### Grading Criteria

- ✅ Eligibility checker (15 points)
- ✅ Access control system (15 points)
- ✅ Form validator (15 points)
- ✅ Game condition checker (15 points)
- ✅ Insurance premium calculator (15 points)
- ✅ Smart home controller (15 points)
- ✅ Course enrollment system (15 points)
- ✅ Health risk assessor (15 points)
- ✅ Boolean operator usage (12 points)
- ✅ Predicate functions (10 points)
- ✅ Complex expressions (10 points)
- ✅ De Morgan's Laws application (8 points)
- ✅ Error handling (8 points)
- ✅ Code organization (5 points)
- ✅ Output formatting (5 points)
- ✅ Comments and documentation (5 points)
- ✅ Bonus challenges (up to 8 extra points)

**Total: 188 points (+ up to 8 bonus points)**

---

## Quick Reference

### Boolean Values

```python
True    # Boolean true
False   # Boolean false
```

### Boolean Operators

```python
and     # Both must be True
or      # At least one must be True
not     # Reverses boolean value
```

### Operator Precedence

```python
# 1. not (highest)
# 2. and
# 3. or (lowest)
```

### Falsy Values

```python
False, None, 0, 0.0, "", [], (), {}, set()
```

### Boolean Functions

```python
def is_valid(x):
    return condition  # Returns True or False
```

### De Morgan's Laws

```python
not (A and B) == (not A) or (not B)
not (A or B) == (not A) and (not B)
```

---

## Summary

In this lesson, you learned:

- ✅ Boolean values (True and False)
- ✅ Boolean operators (and, or, not)
- ✅ Creating boolean expressions
- ✅ Operator precedence rules
- ✅ Truthiness and falsiness of values
- ✅ De Morgan's Laws for simplification
- ✅ Boolean functions (predicates)
- ✅ Boolean algebra operations
- ✅ Common boolean patterns
- ✅ Practical applications of boolean logic

**You now have a deep understanding of boolean logic!** This knowledge is fundamental for creating complex conditions, validation logic, and intelligent decision-making in your programs.

In the next lesson, we'll learn about while loops for repeating actions.

---

## Additional Resources

- **Python Boolean Operations:** [https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)
- **Truth Value Testing:** [https://docs.python.org/3/library/stdtypes.html#truth-value-testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
- **Boolean Algebra:** [https://en.wikipedia.org/wiki/Boolean_algebra](https://en.wikipedia.org/wiki/Boolean_algebra)
- **Real Python - Boolean Logic:** [https://realpython.com/python-boolean/](https://realpython.com/python-boolean/)

**Next lesson:** [While Loops](while-loops)
