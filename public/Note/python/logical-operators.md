# Logical Operators

Logical operators are used to combine multiple conditions and create complex boolean expressions. They allow you to make sophisticated decisions in your programs by evaluating multiple criteria at once.

## Overview of Logical Operators

Python provides three logical operators:

| Operator | Description | Example | Result |
|----------|-------------|---------|--------|
| 'and' | Returns True if BOTH conditions are true | 'True and True' | 'True' |
| 'or' | Returns True if AT LEAST ONE condition is true | 'True or False` | 'True' |
| 'not' | Reverses the boolean value | 'not True' | 'False' |

**Important:** Logical operators work with boolean values and return boolean results.

---

## The AND Operator

Returns `True` only if **both** conditions are true.

### Truth Table for AND

```sh
A       B       A and B
True    True    True
True    False   False
False   True    False
False   False   False
```

**Remember:** Both must be True for the result to be True.

### Basic AND Usage

```python
# Basic AND operations
print(True and True)    # True
print(True and False)   # False
print(False and True)   # False
print(False and False)  # False

# With comparisons
x = 10
print(x > 5 and x < 15)   # True (10 is between 5 and 15)
print(x > 15 and x < 20)  # False (10 is not > 15)

# Multiple conditions
age = 25
has_license = True
print(age >= 18 and has_license)  # True (both conditions met)
```

### Practical AND Examples

```python
# Age and membership check
age = 20
is_member = True

if age >= 18 and is_member:
    print("Access granted")
else:
    print("Access denied")

# Range checking (alternative to chaining)
score = 85
if score >= 0 and score <= 100:
    print("Valid score")
else:
    print("Invalid score")

# Multiple requirements
username = "alice"
password = "secret123"
logged_in = False

if username == "alice" and password == "secret123" and not logged_in:
    logged_in = True
    print("Login successful!")

# Form validation
email = "user@example.com"
age = 25
terms_accepted = True

if "@" in email and age >= 18 and terms_accepted:
    print("Registration complete!")
else:
    print("Please complete all requirements")
```

### AND with Multiple Conditions

```python
# Three conditions
temperature = 22
humidity = 45
air_quality = "good"

if temperature >= 20 and temperature <= 25 and humidity < 60 and air_quality == "good":
    print("Perfect weather conditions!")

# Checking multiple properties
price = 50
in_stock = True
quality_rating = 4.5

if price < 100 and in_stock and quality_rating >= 4.0:
    print("Good deal! Add to cart.")
```

---

## The OR Operator

Returns `True` if **at least one** condition is true.

### Truth Table for OR

```sh
A       B       A or B
True    True    True
True    False   True
False   True    True
False   False   False
```

**Remember:** Only one needs to be True for the result to be True.

### Basic OR Usage

```python
# Basic OR operations
print(True or True)    # True
print(True or False)   # True
print(False or True)   # True
print(False or False)  # False

# With comparisons
x = 10
print(x < 5 or x > 15)   # False (neither condition is true)
print(x < 5 or x > 8)    # True (second condition is true)

# Multiple conditions
is_weekend = True
is_holiday = False
print(is_weekend or is_holiday)  # True (at least one is true)
```

### Practical OR Examples

```python
# Multiple payment methods
has_cash = False
has_card = True

if has_cash or has_card:
    print("Can make payment")
else:
    print("No payment method available")

# User role check
role = "admin"
if role == "admin" or role == "moderator":
    print("You have elevated privileges")

# Emergency contact
age = 10
has_guardian = True

if age >= 18 or has_guardian:
    print("Can participate")
else:
    print("Need parent/guardian permission")

# Discount eligibility
is_student = True
is_senior = False
is_military = False

if is_student or is_senior or is_military:
    print("You qualify for a discount!")
    discount = 15
else:
    discount = 0

# Day of week check
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
```

### OR for Default Values

```python
# Use OR to provide default values
name = ""
display_name = name or "Guest"
print(f"Welcome, {display_name}!")  # Welcome, Guest!

name = "Alice"
display_name = name or "Guest"
print(f"Welcome, {display_name}!")  # Welcome, Alice!

# Empty list or default
user_preferences = []
preferences = user_preferences or ["default", "settings"]
print(preferences)  # ['default', 'settings']
```

---

## The NOT Operator

Reverses a boolean value. If it's `True`, makes it `False`, and vice versa.

### Truth Table for NOT

```sh
A       not A
True    False
False   True
```

### Basic NOT Usage

```python
# Basic NOT operations
print(not True)    # False
print(not False)   # True

# With comparisons
x = 10
print(not x > 15)   # True (because x > 15 is False)
print(not x < 15)   # False (because x < 15 is True)

# Negating variables
is_raining = False
print(not is_raining)  # True

# Double negative (returns to original)
value = True
print(not not value)  # True
```

### Practical NOT Examples

```python
# Opposite condition
is_logged_in = False

if not is_logged_in:
    print("Please log in")
else:
    print("Welcome back!")

# Checking if list is NOT empty
items = []
if not items:
    print("Cart is empty")
else:
    print(f"You have {len(items)} items")

# Validating input
user_input = ""
if not user_input:
    print("Input cannot be empty")

# Opposite of a condition
age = 15
if not (age >= 18):
    print("You are a minor")
else:
    print("You are an adult")

# Checking if something is NOT in a list
forbidden_users = ["banned_user1", "spam_bot"]
username = "alice"

if username not in forbidden_users:
    print("Access granted")
else:
    print("User is banned")
```

### NOT with Other Operators

```python
# NOT with AND
x = 10
if not (x < 5 and x > 15):
    print("x is not in the impossible range")

# NOT with OR
age = 25
if not (age < 18 or age > 65):
    print("Working age")

# Negating comparison results
score = 85
if not score < 60:
    print("Passing grade")
```

---

## Combining Logical Operators

You can combine `and`, `or`, and `not` to create complex conditions.

### Operator Precedence

Logical operators have a specific order of evaluation:

1. `not` (highest priority)
2. `and`
3. `or` (lowest priority)

```python
# Without parentheses
result = True or False and False
print(result)  # True
# Evaluated as: True or (False and False)
#               True or False = True

# With parentheses for clarity
result = (True or False) and False
print(result)  # False
# Evaluated as: True and False = False
```

### Complex Conditions

```python
# Login system
username = "alice"
password = "secret123"
is_verified = True
is_banned = False

if username == "alice" and password == "secret123" and is_verified and not is_banned:
    print("Login successful!")
else:
    print("Login failed")

# Ticket pricing
age = 25
is_student = True
is_senior = False
is_military = False

if (age < 12 or age >= 65) or (is_student or is_military):
    ticket_price = 10
else:
    ticket_price = 20

print(f"Ticket price: ${ticket_price}")

# Weather conditions
temperature = 25
is_raining = False
is_windy = False
has_umbrella = True

can_go_outside = (temperature > 15 and temperature < 30) and (not is_raining or has_umbrella) and not is_windy

if can_go_outside:
    print("Good day to go outside!")
else:
    print("Better stay inside")
```

### De Morgan's Laws

Logical equivalences for simplifying expressions:

```python
# De Morgan's Law 1: not (A and B) = (not A) or (not B)
a = True
b = False

result1 = not (a and b)
result2 = (not a) or (not b)
print(result1 == result2)  # True (equivalent)

# De Morgan's Law 2: not (A or B) = (not A) and (not B)
result1 = not (a or b)
result2 = (not a) and (not b)
print(result1 == result2)  # True (equivalent)

# Practical example
age = 15
has_permission = False

# These are equivalent:
cannot_enter1 = not (age >= 18 or has_permission)
cannot_enter2 = age < 18 and not has_permission
print(cannot_enter1 == cannot_enter2)  # True
```

---

## Short-Circuit Evaluation

Python evaluates logical expressions from left to right and stops as soon as the result is determined.

### AND Short-Circuiting

If the first condition is `False`, Python doesn't evaluate the rest (because the result will be `False` anyway).

```python
# Second condition never evaluated
x = 5
result = (x > 10) and (x / 0 == 1)  # No error! Stops at first False
print(result)  # False

# If first is True, second is evaluated
x = 15
# result = (x > 10) and (x / 0 == 1)  # Error! Second condition evaluated

# Practical use: Check existence before accessing
data = None
if data is not None and len(data) > 0:
    print("Data exists")
# Safe! If data is None, len(data) is never called
```

### OR Short-Circuiting

If the first condition is `True`, Python doesn't evaluate the rest (because the result will be `True` anyway).

```python
# Second condition never evaluated
x = 15
result = (x > 10) or (x / 0 == 1)  # No error! Stops at first True
print(result)  # True

# If first is False, second is evaluated
x = 5
# result = (x > 10) or (x / 0 == 1)  # Error! Second condition evaluated

# Practical use: Default values
name = ""
display_name = name or "Guest"  # If name is empty, use "Guest"
print(display_name)  # Guest
```

### Practical Short-Circuit Examples

```python
# Safe division
divisor = 0
if divisor != 0 and 10 / divisor > 2:
    print("Result is greater than 2")
else:
    print("Cannot divide or result too small")

# Safe list access
my_list = []
if len(my_list) > 0 and my_list[0] == "target":
    print("Found target")

# User authentication with caching
def expensive_check():
    print("Performing expensive check...")
    return True

is_cached = True
if is_cached or expensive_check():
    print("Authenticated")
# Output: Authenticated (expensive_check never called)
```

---

## Common Patterns and Idioms

### Range Checking

```python
# Using AND for inclusive range
age = 25
if age >= 18 and age <= 65:
    print("Working age")

# Better: Use chained comparison
if 18 <= age <= 65:
    print("Working age")

# Using OR for exclusive ranges
if age < 18 or age > 65:
    print("Not working age")
```

### Multiple Options

```python
# Check if value matches any option
command = "quit"
if command == "quit" or command == "exit" or command == "q":
    print("Exiting...")

# Better: Use 'in' with tuple
if command in ("quit", "exit", "q"):
    print("Exiting...")
```

### Validation Chains

```python
# Password validation
password = "Secret123!"

is_long_enough = len(password) >= 8
has_uppercase = any(c.isupper() for c in password)
has_lowercase = any(c.islower() for c in password)
has_digit = any(c.isdigit() for c in password)

is_valid = is_long_enough and has_uppercase and has_lowercase and has_digit

if is_valid:
    print("Strong password")
else:
    print("Weak password")
    if not is_long_enough:
        print("- Must be at least 8 characters")
    if not has_uppercase:
        print("- Must have uppercase letter")
    if not has_lowercase:
        print("- Must have lowercase letter")
    if not has_digit:
        print("- Must have digit")
```

### Flag Checking

```python
# Multiple flags
is_admin = False
is_moderator = True
is_verified = True

can_delete_posts = (is_admin or is_moderator) and is_verified

if can_delete_posts:
    print("You can delete posts")

# Permission system
has_read_permission = True
has_write_permission = True
has_delete_permission = False

can_edit = has_read_permission and has_write_permission
can_remove = can_edit and has_delete_permission

print(f"Can edit: {can_edit}")
print(f"Can remove: {can_remove}")
```

---

## Truthiness and Falsiness

In Python, non-boolean values can be used in logical expressions.

### Falsy Values

These values are considered `False` in logical contexts:

```python
# All of these are "falsy"
print(bool(False))      # False
print(bool(None))       # False
print(bool(0))          # False
print(bool(0.0))        # False
print(bool(""))         # False (empty string)
print(bool([]))         # False (empty list)
print(bool({}))         # False (empty dict)
print(bool(()))         # False (empty tuple)
```

### Truthy Values

Everything else is considered `True`:

```python
# All of these are "truthy"
print(bool(True))       # True
print(bool(1))          # True
print(bool(-1))         # True
print(bool(3.14))       # True
print(bool("hello"))    # True (non-empty string)
print(bool([1, 2]))     # True (non-empty list)
print(bool(" "))        # True (even just a space!)
```

### Using Truthiness in Conditions

```python
# Check if list is not empty
items = [1, 2, 3]
if items:  # Instead of: if len(items) > 0
    print("List has items")

# Check if string is not empty
name = "Alice"
if name:  # Instead of: if name != ""
    print(f"Hello, {name}")

# Check if number is not zero
count = 5
if count:  # Instead of: if count != 0
    print(f"Count: {count}")

# Default value pattern
user_input = ""
value = user_input or "default"
print(value)  # "default"
```

---

## Common Mistakes

### Mistake 1: Using = Instead of ==

```python
# Wrong - assignment, not comparison
# if x = 5 and y = 10:  # SyntaxError
#     print("Equal")

# Correct
x = 5
y = 10
if x == 5 and y == 10:
    print("Equal")
```

### Mistake 2: Redundant Comparisons

```python
# Redundant (bad)
is_valid = True
if is_valid == True:
    print("Valid")

# Better
if is_valid:
    print("Valid")

# Redundant (bad)
if is_valid == False:
    print("Invalid")

# Better
if not is_valid:
    print("Invalid")
```

### Mistake 3: Incorrect Range Check

```python
# Wrong - this doesn't work as intended
x = 5
# if x == 3 or 4 or 5:  # Always True! (4 and 5 are truthy)
#     print("Match")

# Correct
if x == 3 or x == 4 or x == 5:
    print("Match")

# Better
if x in (3, 4, 5):
    print("Match")
```

### Mistake 4: Not Using Parentheses

```python
# Confusing without parentheses
result = True or False and False
print(result)  # True (may not be what you expect)

# Clear with parentheses
result = (True or False) and False
print(result)  # False

result = True or (False and False)
print(result)  # True
```

---

## Classwork

Practice logical operators!

### Exercise 1: Logical Operations Table

Create a file called `logical_table.py`:

```python
"""
Display truth tables for logical operators.
"""

print("=" * 60)
print("TRUTH TABLE: AND")
print("=" * 60)
print("A     | B     | A and B")
print("-" * 60)
print(f"True  | True  | {True and True}")
print(f"True  | False | {True and False}")
print(f"False | True  | {False and True}")
print(f"False | False | {False and False}")

print("\n" + "=" * 60)
print("TRUTH TABLE: OR")
print("=" * 60)
print("A     | B     | A or B")
print("-" * 60)
print(f"True  | True  | {True or True}")
print(f"True  | False | {True or False}")
print(f"False | True  | {False or True}")
print(f"False | False | {False or False}")

print("\n" + "=" * 60)
print("TRUTH TABLE: NOT")
print("=" * 60)
print("A     | not A")
print("-" * 60)
print(f"True  | {not True}")
print(f"False | {not False}")
print("=" * 60)
```

### Exercise 2: Age and Membership Validator

Create a file called `membership_validator.py`:

```python
"""
Validate access based on age and membership status.
"""

# Get user information
name = input("Enter your name: ")
age = int(input("Enter your age: "))
is_member = input("Are you a member? (yes/no): ").lower() == "yes"
has_id = input("Do you have valid ID? (yes/no): ").lower() == "yes"

print("\n" + "=" * 50)
print("ACCESS VALIDATION")
print("=" * 50)

# Check various conditions
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Member: {is_member}")
print(f"Has ID: {has_id}")
print()

# Adult member with ID
if age >= 18 and is_member and has_id:
    print("✓ Full access granted")

# Adult with ID but not member
elif age >= 18 and has_id and not is_member:
    print("⚠ Limited access - Consider membership")

# Minor with guardian (assume if they have ID)
elif age < 18 and has_id:
    print("⚠ Minor access - Guardian required")

# No ID
elif not has_id:
    print("✗ Access denied - ID required")

else:
    print("✗ Access denied")

print("=" * 50)
```

### Exercise 3: Password Strength Checker

Create a file called `password_checker.py`:

```python
"""
Check password strength using logical operators.
"""

# Get password
password = input("Enter a password to check: ")

# Check various conditions
is_long = len(password) >= 8
has_upper = any(c.isupper() for c in password)
has_lower = any(c.islower() for c in password)
has_digit = any(c.isdigit() for c in password)
has_special = any(c in "!@#$%^&*()_+-=[]{}|;:,.<>?" for c in password)

print("\n" + "=" * 50)
print("PASSWORD STRENGTH ANALYSIS")
print("=" * 50)

# Display requirements
print("Requirements:")
print(f"  {'✓' if is_long else '✗'} At least 8 characters")
print(f"  {'✓' if has_upper else '✗'} Uppercase letter")
print(f"  {'✓' if has_lower else '✗'} Lowercase letter")
print(f"  {'✓' if has_digit else '✗'} Digit")
print(f"  {'✓' if has_special else '✗'} Special character")
print()

# Determine strength
if is_long and has_upper and has_lower and has_digit and has_special:
    strength = "VERY STRONG"
elif is_long and has_upper and has_lower and has_digit:
    strength = "STRONG"
elif is_long and (has_upper or has_lower) and has_digit:
    strength = "MODERATE"
elif is_long:
    strength = "WEAK"
else:
    strength = "VERY WEAK"

print(f"Password Strength: {strength}")
print("=" * 50)
```

### Exercise 4: Eligibility Calculator

Create a file called `eligibility_calculator.py`:

```python
"""
Calculate eligibility for various services using logical operators.
"""

# Get user information
age = int(input("Enter your age: "))
income = float(input("Enter annual income: $"))
is_student = input("Are you a student? (yes/no): ").lower() == "yes"
is_employed = input("Are you employed? (yes/no): ").lower() == "yes"
credit_score = int(input("Enter credit score (300-850): "))

print("\n" + "=" * 60)
print("ELIGIBILITY CALCULATOR")
print("=" * 60)

# Voting
can_vote = age >= 18
print(f"Voting: {'✓ Eligible' if can_vote else '✗ Not eligible'}")

# Loan
can_get_loan = (age >= 21 and income >= 30000 and credit_score >= 650) or (is_employed and income >= 50000)
print(f"Loan: {'✓ Eligible' if can_get_loan else '✗ Not eligible'}")

# Student discount
gets_student_discount = is_student and (13 <= age <= 25)
print(f"Student discount: {'✓ Eligible' if gets_student_discount else '✗ Not eligible'}")

# Senior benefits
gets_senior_benefits = age >= 65
print(f"Senior benefits: {'✓ Eligible' if gets_senior_benefits else '✗ Not eligible'}")

# Credit card
can_get_credit_card = age >= 18 and (is_employed or is_student) and credit_score >= 600
print(f"Credit card: {'✓ Eligible' if can_get_credit_card else '✗ Not eligible'}")

print("=" * 60)
```

---

## Assignment

### Project: Advanced Logic System

Create a comprehensive program called `logic_system.py` that demonstrates mastery of logical operators through real-world scenarios.

### Requirements

Your program should include:

#### 1. **User Authentication System**

- Username and password validation
- Account status checks (active, banned, verified)
- Login attempt tracking
- Two-factor authentication simulation
- Session management

#### 2. **Discount Calculator**

Apply discounts based on multiple conditions:

- Senior discount (age >= 65)
- Student discount (13 <= age <= 25 and student ID)
- Military discount (military ID)
- Member discount (membership status)
- Bulk purchase discount (items >= 10)
- First-time buyer discount
- Calculate total with all applicable discounts

#### 3. **Loan Approval System**

Check eligibility based on:

- Age (21-70)
- Income (>= $30,000)
- Credit score (>= 650)
- Employment status
- Existing debt
- Co-signer availability
- Calculate approved amount and interest rate

#### 4. **Weather Activity Planner**

Recommend activities based on:

- Temperature range
- Is it raining?
- Is it windy?
- Air quality
- Time of day
- User preferences (indoor/outdoor)

#### 5. **Academic Standing Calculator**

Determine student status:

- GPA requirements
- Credit hours completed
- Attendance percentage
- Academic probation check
- Dean's list eligibility
- Graduation readiness

#### 6. **Access Control System**

Multiple access levels:

- Public areas (anyone)
- Member areas (members only)
- Premium areas (premium members + verified)
- Admin areas (admins only or moderators + approval)
- Restricted areas (admin + two-factor auth)

#### 7. **Job Application Filter**

Filter candidates based on:

- Education level
- Years of experience
- Skills match (required vs optional skills)
- Location preference
- Salary expectation
- Availability
- Calculate match percentage

#### 8. **Health Risk Assessment**

Assess health risks based on:

- Age
- BMI
- Blood pressure
- Smoking status
- Exercise frequency
- Family history
- Provide risk level and recommendations

### Code Requirements

- Use ALL three logical operators (and, or, not)
- Demonstrate short-circuit evaluation
- Use truthiness/falsiness appropriately
- Combine operators in complex conditions
- Include proper operator precedence
- Use parentheses for clarity
- Professional error handling
- Menu-driven interface
- Functions for organization
- Comments and docstrings

### Example Output

```sh
╔══════════════════════════════════════════════════╗
║                                                  ║
║           ADVANCED LOGIC SYSTEM                  ║
║                                                  ║
╚══════════════════════════════════════════════════╝

MAIN MENU:
1. User Authentication System
2. Discount Calculator
3. Loan Approval System
4. Weather Activity Planner
5. Academic Standing Calculator
6. Access Control System
7. Job Application Filter
8. Health Risk Assessment
9. Exit

Enter your choice (1-9): 2

════════════════════════════════════════════════════
           DISCOUNT CALCULATOR
════════════════════════════════════════════════════

Enter purchase amount: $100
Enter your age: 67
Are you a student? (yes/no): no
Do you have military ID? (yes/no): no
Are you a member? (yes/no): yes
Number of items: 5
First-time buyer? (yes/no): no

────────────────────────────────────────────────────
DISCOUNT ANALYSIS
────────────────────────────────────────────────────

Original Amount: $100.00

Eligible Discounts:
  ✓ Senior Discount (15%): -$15.00
  ✓ Member Discount (10%): -$10.00
  ✗ Student Discount: Not eligible
  ✗ Military Discount: No military ID
  ✗ Bulk Discount: Need 10+ items (have 5)
  ✗ First-time Buyer: Not first purchase

────────────────────────────────────────────────────
Total Discount: $25.00 (25%)
Final Amount: $75.00
You saved: $25.00
────────────────────────────────────────────────────
```

### Bonus Challenges (Optional)

1. **Travel Restriction Checker**: Multiple visa/health/age requirements
2. **Insurance Premium Calculator**: Risk assessment with multiple factors
3. **Voting Eligibility**: Age, citizenship, registration, felony status
4. **Dating App Matcher**: Complex preference matching
5. **Restaurant Seating System**: Party size, time, reservations, VIP
6. **Parking Permit System**: Multiple eligibility criteria
7. **Scholarship Evaluator**: GPA, income, activities, essay score
8. **Movie Rating System**: Age restrictions with parent override

### Submission Guidelines

- File name: `logic_system.py`
- Must include all 8 systems
- Professional menu interface
- Complete input validation
- Use all logical operators extensively
- Well-organized with functions
- Comments and docstrings
- Test all edge cases
- Estimated time: 150-180 minutes

### Grading Criteria

- ✅ User authentication system (12 points)
- ✅ Discount calculator (14 points)
- ✅ Loan approval system (14 points)
- ✅ Weather activity planner (12 points)
- ✅ Academic standing calculator (12 points)
- ✅ Access control system (12 points)
- ✅ Job application filter (14 points)
- ✅ Health risk assessment (12 points)
- ✅ Use of all logical operators (10 points)
- ✅ Complex condition combinations (8 points)
- ✅ Short-circuit evaluation examples (5 points)
- ✅ Error handling (8 points)
- ✅ Code organization (5 points)
- ✅ Output formatting (5 points)
- ✅ Comments and documentation (5 points)
- ✅ Bonus challenges (up to 8 extra points)

**Total: 148 points (+ up to 8 bonus points)**

---

## Quick Reference

### Logical Operators

```python
and   # Both must be True
or    # At least one must be True
not   # Reverses boolean value
```

### Truth Tables

```python
True and True    → True
True and False   → False
False and False  → False

True or False    → True
False or False   → False

not True         → False
not False        → True
```

### Common Patterns

```python
# Range check
if low <= value <= high:

# Multiple options
if x in (a, b, c):

# Not empty
if items:

# Default value
value = input_val or "default"
```

---

## Summary

In this lesson, you learned:

- ✅ All three logical operators (and, or, not)
- ✅ Truth tables for logical operations
- ✅ Combining multiple conditions
- ✅ Operator precedence (not, and, or)
- ✅ Short-circuit evaluation
- ✅ Truthiness and falsiness of values
- ✅ De Morgan's Laws for simplification
- ✅ Common patterns and idioms
- ✅ Practical applications in decision-making
- ✅ Common mistakes and how to avoid them

**You can now create sophisticated conditional logic!** Logical operators are essential for complex decision-making, validation, and controlling program flow based on multiple criteria.

In the next lesson, we'll learn about assignment operators for efficient value updates.

---

## Additional Resources

- **Python Boolean Operations:** [https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)
- **Truth Value Testing:** [https://docs.python.org/3/library](https://docs.python.org/3/library)

**Next lesson:** [Assignment Operators](assignment-operators)
