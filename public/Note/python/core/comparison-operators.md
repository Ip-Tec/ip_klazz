# Comparison Operators

Comparison operators are used to compare values and return boolean results (`True` or `False`). They're essential for making decisions in your programs, controlling flow, and creating conditions.

## Overview of Comparison Operators

Python provides six comparison operators:

| Operator | Name | Example | Result |
|----------|------|---------|--------|
| `==` | Equal to | `5 == 5` | `True` |
| `!=` | Not equal to | `5 != 3` | `True` |
| `>` | Greater than | `5 > 3` | `True` |
| `<` | Less than | `3 < 5` | `True` |
| `>=` | Greater than or equal to | `5 >= 5` | `True` |
| `<=` | Less than or equal to | `3 <= 5` | `True` |

**Important:** All comparison operators return boolean values (`True` or `False`).

---

## Equal To (==)

Checks if two values are equal.

```python
# Basic equality
result = 5 == 5
print(result)  # True

result = 5 == 3
print(result)  # False

# Comparing variables
x = 10
y = 10
print(x == y)  # True

# String comparison
name1 = "Alice"
name2 = "Alice"
print(name1 == name2)  # True

name3 = "alice"
print(name1 == name3)  # False (case-sensitive!)

# Float comparison
price1 = 19.99
price2 = 19.99
print(price1 == price2)  # True
```

### Important: == vs =

```python
# = is assignment (stores value)
x = 5  # Assigns 5 to x

# == is comparison (checks equality)
result = (x == 5)  # Compares x with 5, returns True

# Common mistake
# if x = 5:  # SyntaxError! Can't use = in condition
#     print("Equal")

# Correct
if x == 5:  # Uses == for comparison
    print("Equal")
```

### Comparing Different Types

```python
# Integer and float
print(5 == 5.0)  # True (Python converts for comparison)

# String and number
print(5 == "5")  # False (different types)

# Converting before comparison
number = 5
text = "5"
print(number == int(text))  # True

# Boolean and integer
print(True == 1)   # True
print(False == 0)  # True
print(True == 2)   # False
```

---

## Not Equal To (!=)

Checks if two values are NOT equal.

```python
# Basic inequality
result = 5 != 3
print(result)  # True

result = 5 != 5
print(result)  # False

# Comparing variables
x = 10
y = 20
print(x != y)  # True

# String comparison
password = "secret123"
user_input = "secret124"
print(password != user_input)  # True (not equal)

# Checking if not empty
name = ""
print(name != "")  # False (it is empty)

name = "Alice"
print(name != "")  # True (not empty)
```

### Practical Uses

```python
# Input validation
age = int(input("Enter your age: "))
if age != 0:
    print(f"Age: {age}")
else:
    print("Invalid age!")

# Check if value changed
old_value = 100
new_value = 150
if old_value != new_value:
    print("Value has changed!")
    print(f"Change: {new_value - old_value}")

# Verify password
correct_password = "python123"
entered_password = input("Enter password: ")
if entered_password != correct_password:
    print("Incorrect password!")
else:
    print("Access granted!")
```

---

## Greater Than (>)

Checks if the left value is greater than the right value.

```python
# Basic comparison
print(10 > 5)   # True
print(5 > 10)   # False
print(5 > 5)    # False (not greater, they're equal)

# Comparing variables
score = 85
passing_score = 60
print(score > passing_score)  # True

# Negative numbers
print(0 > -5)   # True
print(-3 > -1)  # False

# Float comparison
price1 = 19.99
price2 = 15.50
print(price1 > price2)  # True
```

### String Comparison (Lexicographical)

Strings are compared based on their Unicode/ASCII values:

```python
# Alphabetical comparison
print("apple" > "banana")  # False (a comes before b)
print("zebra" > "apple")   # True (z comes after a)

# Case matters (uppercase comes before lowercase in ASCII)
print("Apple" > "apple")   # False
print("apple" > "Apple")   # True

# Length doesn't matter, only alphabetical order
print("z" > "aaa")  # True (z comes after a)

# Comparing first different character
print("abc" > "abd")  # False (c < d)
```

### Practical Uses

```python
# Age check
age = 18
if age > 18:
    print("You are older than 18")
elif age > 13:
    print("You are a teenager")
else:
    print("You are 13 or younger")

# Price comparison
budget = 100
price = 85
if price > budget:
    print("Too expensive!")
else:
    print("Within budget")

# Temperature warning
temperature = 35
if temperature > 30:
    print("It's hot outside!")
```

---

## Less Than (<)

Checks if the left value is less than the right value.

```python
# Basic comparison
print(3 < 5)    # True
print(5 < 3)    # False
print(5 < 5)    # False (not less, they're equal)

# Comparing variables
age = 15
minimum_age = 18
print(age < minimum_age)  # True

# Negative numbers
print(-5 < 0)   # True
print(-1 < -3)  # False

# Float comparison
price = 15.99
discount_price = 19.99
print(price < discount_price)  # True
```

### Practical Uses

```python
# Stock alert
stock_quantity = 5
minimum_stock = 10
if stock_quantity < minimum_stock:
    print("Low stock! Need to reorder.")

# Grade evaluation
score = 55
passing_grade = 60
if score < passing_grade:
    print("Failed")
    points_needed = passing_grade - score
    print(f"Need {points_needed} more points")

# Speed limit check
speed = 45
speed_limit = 50
if speed < speed_limit:
    print("Driving safely")
```

---

## Greater Than or Equal To (>=)

Checks if the left value is greater than OR equal to the right value.

```python
# Basic comparison
print(10 >= 5)   # True (10 is greater)
print(5 >= 5)    # True (5 equals 5)
print(3 >= 5)    # False (3 is less)

# Comparing variables
score = 60
passing_score = 60
print(score >= passing_score)  # True (equal counts!)

# Age verification
age = 18
minimum_age = 18
print(age >= minimum_age)  # True
```

### Practical Uses

```python
# Eligibility check
age = 18
if age >= 18:
    print("You are eligible to vote")
else:
    print("You are not old enough to vote")

# Grade passing
score = 60
if score >= 60:
    print("Passed!")
else:
    print("Failed")

# Minimum purchase
total = 25
minimum_for_free_shipping = 25
if total >= minimum_for_free_shipping:
    print("Free shipping!")
```

---

## Less Than or Equal To (<=)

Checks if the left value is less than OR equal to the right value.

```python
# Basic comparison
print(3 <= 5)    # True (3 is less)
print(5 <= 5)    # True (5 equals 5)
print(7 <= 5)    # False (7 is greater)

# Comparing variables
price = 50
budget = 50
print(price <= budget)  # True (equal counts!)

# Discount eligibility
items = 3
max_items = 5
print(items <= max_items)  # True
```

### Practical Uses

```python
# Capacity check
current_people = 50
maximum_capacity = 100
if current_people <= maximum_capacity:
    print("Room available")
else:
    print("Full capacity reached")

# Age limit
age = 12
max_age = 12
if age <= max_age:
    print("Child ticket")
else:
    print("Adult ticket")

# Time limit
time_taken = 30
time_limit = 60
if time_taken <= time_limit:
    print("Completed within time limit")
```

---

## Chaining Comparisons

Python allows chaining multiple comparisons in one expression:

```python
# Check if value is in range
x = 15
result = 10 < x < 20
print(result)  # True (15 is between 10 and 20)

# Equivalent to:
result = (10 < x) and (x < 20)
print(result)  # True

# Multiple chains
age = 25
result = 18 <= age <= 65
print(result)  # True (age is between 18 and 65, inclusive)

# Three comparisons
a, b, c = 1, 2, 3
result = a < b < c
print(result)  # True (1 < 2 < 3)

# More complex chains
result = 5 < 10 < 15 < 20
print(result)  # True
```

### Practical Range Checks

```python
# Temperature comfort zone
temperature = 22
if 18 <= temperature <= 25:
    print("Comfortable temperature")
else:
    print("Too hot or too cold")

# Grade classification
score = 85
if 90 <= score <= 100:
    print("Grade: A")
elif 80 <= score < 90:
    print("Grade: B")
elif 70 <= score < 80:
    print("Grade: C")
elif 60 <= score < 70:
    print("Grade: D")
else:
    print("Grade: F")

# Valid day of month
day = 15
month = 2  # February
if 1 <= day <= 28:
    print("Valid date for February")
```

---

## Comparing Different Data Types

### Numbers (int and float)

```python
# Integers and floats can be compared
print(5 == 5.0)     # True
print(10 > 9.5)     # True
print(3.14 < 4)     # True

# Be careful with float precision
result = 0.1 + 0.2
print(result == 0.3)  # False! (floating-point precision issue)

# Better way for floats
tolerance = 0.0001
print(abs(result - 0.3) < tolerance)  # True
```

### Strings

```python
# Case-sensitive comparison
print("hello" == "Hello")  # False

# Lexicographical (dictionary) order
print("apple" < "banana")  # True
print("apple" < "apricot")  # True (comparing letter by letter)

# Length doesn't determine order
print("z" > "aaa")  # True (z comes after a)

# Comparing with empty string
print("" == "")     # True
print("hello" > "")  # True
```

### Boolean Values

```python
# Booleans can be compared
print(True == True)   # True
print(True == False)  # False

# Booleans are treated as 1 and 0
print(True == 1)      # True
print(False == 0)     # True
print(True > False)   # True (1 > 0)
```

### Comparing None

```python
# Use 'is' for None comparison (best practice)
value = None
print(value is None)  # True (preferred)
print(value == None)  # True (works but not preferred)

# None comparisons
print(None == None)   # True
print(None == 0)      # False
print(None == False)  # False
print(None == "")     # False
```

---

## Common Patterns and Idioms

### Range Checking

```python
# Check if value is in range
value = 15
if 10 <= value <= 20:
    print("In range")

# Check if value is outside range
if value < 10 or value > 20:
    print("Out of range")
```

### Finding Maximum/Minimum

```python
# Find larger value
a = 10
b = 20
maximum = a if a > b else b
print(maximum)  # 20

# Find smaller value
minimum = a if a < b else b
print(minimum)  # 10

# Using built-in functions (better)
print(max(a, b))  # 20
print(min(a, b))  # 10
```

### Sorting Conditions

```python
# Sort three numbers
a, b, c = 5, 2, 8

if a <= b <= c:
    print("Already sorted")
elif a <= c <= b:
    print("Need to swap b and c")
# ... and so on
```

### Validation

```python
# Password strength check
password = "secret123"
length_ok = len(password) >= 8
has_digit = any(char.isdigit() for char in password)
has_letter = any(char.isalpha() for char in password)

if length_ok and has_digit and has_letter:
    print("Strong password")
else:
    print("Weak password")
```

---

## Comparison Operators with Collections (Preview)

### Lists

```python
# Compare lists element by element
list1 = [1, 2, 3]
list2 = [1, 2, 3]
print(list1 == list2)  # True

list3 = [1, 2, 4]
print(list1 == list3)  # False

# Lexicographical comparison
print([1, 2] < [1, 3])  # True
print([1, 2] < [1, 2, 3])  # True (shorter is less)
```

### Membership Testing (in operator)

```python
# Check if value is in a collection
numbers = [1, 2, 3, 4, 5]
print(3 in numbers)      # True
print(6 in numbers)      # False
print(6 not in numbers)  # True

# String membership
text = "Hello, World!"
print("Hello" in text)   # True
print("hello" in text)   # False (case-sensitive)
```

---

## Common Mistakes and Pitfalls

### Mistake 1: Using = Instead of ==

```python
# Wrong - This is assignment, not comparison
# if x = 5:  # SyntaxError
#     print("Equal")

# Correct - Use == for comparison
x = 10
if x == 5:
    print("Equal")
```

### Mistake 2: Comparing Floats Directly

```python
# Problematic due to floating-point precision
result = 0.1 + 0.2
if result == 0.3:  # May be False!
    print("Equal")

# Better approach
tolerance = 0.0001
if abs(result - 0.3) < tolerance:
    print("Equal")
```

### Mistake 3: String Case Sensitivity

```python
# Wrong assumption
name = "Alice"
if name == "alice":  # False!
    print("Match")

# Correct - Convert to same case
if name.lower() == "alice":
    print("Match")
```

### Mistake 4: Confusing 'is' and '=='

```python
# '==' checks value equality
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)  # True (same values)
print(a is b)  # False (different objects)

# 'is' checks object identity
c = a
print(a is c)  # True (same object)

# Use '==' for value comparison
# Use 'is' only for None, True, False
```

---

## Classwork

Practice comparison operators!

### Exercise 1: Comparison Explorer

Create a file called `comparison_explorer.py`:

```python
"""
Explore all comparison operators.
"""

# Get two numbers from user
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Display all comparisons
print("\n" + "=" * 50)
print("COMPARISON RESULTS")
print("=" * 50)
print(f"num1 = {num1}")
print(f"num2 = {num2}")
print()

print(f"{num1} == {num2} : {num1 == num2}")
print(f"{num1} != {num2} : {num1 != num2}")
print(f"{num1} > {num2}  : {num1 > num2}")
print(f"{num1} < {num2}  : {num1 < num2}")
print(f"{num1} >= {num2} : {num1 >= num2}")
print(f"{num1} <= {num2} : {num1 <= num2}")
print("=" * 50)
```

### Exercise 2: Age Classifier

Create a file called `age_classifier.py`:

```python
"""
Classify age into categories using comparison operators.
"""

# Get age from user
age = int(input("Enter your age: "))

# Classify using comparisons
print(f"\nAge Analysis for {age}:")

if age < 0:
    print("Invalid age!")
elif age <= 2:
    print("Category: Infant")
elif age <= 12:
    print("Category: Child")
elif age <= 17:
    print("Category: Teenager")
elif age <= 64:
    print("Category: Adult")
else:
    print("Category: Senior")

# Additional checks
if age >= 18:
    print("Can vote: Yes")
else:
    years_until_vote = 18 - age
    print(f"Can vote: No (in {years_until_vote} years)")

if age >= 16:
    print("Can drive: Yes")
else:
    years_until_drive = 16 - age
    print(f"Can drive: No (in {years_until_drive} years)")
```

### Exercise 3: Number Comparator

Create a file called `number_comparator.py`:

```python
"""
Compare three numbers and find relationships.
"""

# Get three numbers
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))
c = float(input("Enter third number: "))

# Find largest
if a >= b and a >= c:
    largest = a
elif b >= a and b >= c:
    largest = b
else:
    largest = c

# Find smallest
if a <= b and a <= c:
    smallest = a
elif b <= a and b <= c:
    smallest = b
else:
    smallest = c

# Display results
print(f"\nNumbers: {a}, {b}, {c}")
print(f"Largest: {largest}")
print(f"Smallest: {smallest}")

# Check if all equal
if a == b == c:
    print("All numbers are equal")
elif a == b or b == c or a == c:
    print("Two numbers are equal")
else:
    print("All numbers are different")

# Check if sorted
if a <= b <= c:
    print("Numbers are in ascending order")
elif a >= b >= c:
    print("Numbers are in descending order")
else:
    print("Numbers are not sorted")
```

### Exercise 4: Grade Calculator

Create a file called `grade_calculator.py`:

```python
"""
Calculate grade based on score using comparison operators.
"""

# Get score from user
score = float(input("Enter your score (0-100): "))

# Validate input
if score < 0 or score > 100:
    print("Invalid score! Must be between 0 and 100.")
else:
    # Determine grade using comparisons
    if score >= 90:
        grade = 'A'
        message = "Excellent!"
    elif score >= 80:
        grade = 'B'
        message = "Good job!"
    elif score >= 70:
        grade = 'C'
        message = "Fair"
    elif score >= 60:
        grade = 'D'
        message = "Needs improvement"
    else:
        grade = 'F'
        message = "Failed"
    
    # Display results
    print(f"\nScore: {score}")
    print(f"Grade: {grade}")
    print(f"Status: {message}")
    
    # Check if passing
    if score >= 60:
        print("Result: PASS")
        points_above = score - 60
        print(f"Points above passing: {points_above:.1f}")
    else:
        print("Result: FAIL")
        points_needed = 60 - score
        print(f"Points needed to pass: {points_needed:.1f}")
```

---

## Assignment

### Project: Comprehensive Comparison System

Create a program called `comparison_system.py` that demonstrates mastery of comparison operators through various real-world scenarios.

### Requirements

Your program should include:

#### 1. **Number Comparison Tool**

- Compare two, three, or more numbers
- Find maximum and minimum
- Check if numbers are equal, ascending, or descending
- Calculate differences and relationships

#### 2. **Range Validator**

Create validators for:

- Age ranges (child, teen, adult, senior)
- Temperature ranges (freezing, cold, moderate, warm, hot)
- Grade ranges (A, B, C, D, F)
- Price ranges (budget, moderate, expensive, luxury)

#### 3. **Eligibility Checker**

Check eligibility for:

- Voting (age >= 18)
- Driving (age >= 16)
- Senior discount (age >= 65)
- Student discount (age 13-25)
- Retirement (age >= 65)

#### 4. **Password Strength Analyzer**

Check password requirements:

- Length >= 8 characters
- Contains uppercase letter
- Contains lowercase letter
- Contains digit
- Contains special character
- Calculate and display strength score

#### 5. **Shopping Cart Calculator**

- Calculate subtotal
- Apply discounts based on:
  - Total amount (>= $100 gets 10% off)
  - Number of items (>= 5 gets $5 off)
  - Membership status
- Calculate tax and final total
- Check if eligible for free shipping (total >= $50)

#### 6. **Grade Management System**

- Input multiple test scores
- Calculate average
- Determine letter grade
- Check if passing (>= 60%)
- Calculate GPA
- Show class ranking simulation

#### 7. **Date/Time Validator**

Validate:

- Day of month (1-31)
- Month (1-12)
- Year (reasonable range)
- Hour (0-23)
- Minute (0-59)
- Leap year calculation

#### 8. **Number Properties Checker**

Check if number:

- Is even or odd
- Is positive, negative, or zero
- Is in a specific range
- Is divisible by another number
- Is prime (basic check)

### Code Requirements

- Use ALL six comparison operators
- Demonstrate chaining comparisons
- Include range validation
- Use nested comparisons where appropriate
- Professional error handling
- Clear output with explanations
- Menu-driven interface
- Functions for organization
- Comments and docstrings

### Example Output

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║        COMPREHENSIVE COMPARISON SYSTEM           ║
║                                                  ║
╚══════════════════════════════════════════════════╝

MAIN MENU:
1. Number Comparison Tool
2. Range Validator
3. Eligibility Checker
4. Password Strength Analyzer
5. Shopping Cart Calculator
6. Grade Management System
7. Date/Time Validator
8. Number Properties Checker
9. Exit

Enter your choice (1-9): 3

════════════════════════════════════════════════════
           ELIGIBILITY CHECKER
════════════════════════════════════════════════════

Enter your age: 25

────────────────────────────────────────────────────
ELIGIBILITY RESULTS
────────────────────────────────────────────────────

Age: 25 years

✓ Voting Eligible: YES (18+)
✓ Driving Eligible: YES (16+)
✓ Student Discount: YES (13-25)
✗ Senior Discount: NO (need to be 65+)
  Years until senior discount: 40
✗ Retirement Eligible: NO (need to be 65+)
  Years until retirement: 40

────────────────────────────────────────────────────
```

### Bonus Challenges (Optional)

1. **BMI Calculator with Categories**: Calculate and categorize BMI
2. **Loan Approval System**: Check eligibility based on multiple criteria
3. **Temperature Converter with Warnings**: Convert and warn about extreme temps
4. **GPA Calculator**: Convert grades to GPA and determine honors
5. **Shipping Cost Calculator**: Calculate based on weight, distance, speed
6. **Tax Bracket Calculator**: Determine tax based on income ranges
7. **Salary Comparison**: Compare salaries with cost of living adjustments
8. **Sports Score Analyzer**: Determine win/loss/tie and margins

### Submission Guidelines

- File name: `comparison_system.py`
- Must include all 8 modules
- Professional menu system
- Complete input validation
- Use all comparison operators
- Well-organized with functions
- Comments and docstrings
- Test all features thoroughly
- Estimated time: 120-150 minutes

### Grading Criteria

- ✅ Number comparison tool (8 points)
- ✅ Range validator (10 points)
- ✅ Eligibility checker (10 points)
- ✅ Password strength analyzer (12 points)
- ✅ Shopping cart calculator (12 points)
- ✅ Grade management system (12 points)
- ✅ Date/time validator (10 points)
- ✅ Number properties checker (8 points)
- ✅ Use of all 6 comparison operators (8 points)
- ✅ Comparison chaining (5 points)
- ✅ Error handling (8 points)
- ✅ Code organization (5 points)
- ✅ Output formatting (5 points)
- ✅ Comments and documentation (5 points)
- ✅ Bonus challenges (up to 8 extra points)

**Total: 118 points (+ up to 8 bonus points)**

---

## Quick Reference

### Comparison Operators

```python
==   # Equal to
!=   # Not equal to
>    # Greater than
<    # Less than
>=   # Greater than or equal to
<=   # Less than or equal to
```

### Common Patterns

```python
# Range check
10 <= x <= 20

# Not in range
x < 10 or x > 20

# Equality check (case-insensitive)
str1.lower() == str2.lower()

# None check
value is None

# Membership
item in collection
```

---

## Summary

In this lesson, you learned:

- ✅ All six comparison operators (==, !=, >, <, >=, <=)
- ✅ How comparison operators return boolean values
- ✅ Difference between = (assignment) and == (comparison)
- ✅ Chaining comparisons for range checks
- ✅ Comparing different data types (numbers, strings, booleans)
- ✅ Lexicographical string comparison
- ✅ Common patterns and idioms
- ✅ Practical applications in decision-making
- ✅ Common mistakes and how to avoid them

**You can now make intelligent decisions in your programs!** Comparison operators are essential for conditional logic, validation, and controlling program flow.

In the next lesson, we'll learn about logical operators (and, or, not) to combine comparisons.

---

## Additional Resources

- **Python Comparisons:** [https://docs.python.org/3/reference/expressions.html#comparisons](https://docs.python.org/3/reference/expressions.html#comparisons)
- **Truth Value Testing:** [https://docs.python.org/3/library/stdtypes.html#truth-value-testing](https://docs.python.org/3/library/stdtypes.html#truth-value-testing)
- **Real Python - Operators:** [https://realpython.com/python-operators-expressions/](https://realpython.com/python-operators-expressions/)

**Next lesson:** [Logical Operators](logical-operators.md)
