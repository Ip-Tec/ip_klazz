# If, Elif, and Else Statements

Conditional statements allow your program to make decisions and execute different code based on conditions. They're fundamental to creating interactive and intelligent programs.

## The if Statement

The if statement executes code only when a condition is True.

### Basic Syntax

```python
if condition:
    # Code to execute if condition is True
    statement1
    statement2
```

**Important:** 

- Condition must evaluate to a boolean (True or False)
- Colon (:) is required after the condition
- Indentation (4 spaces) is mandatory for the code block

### Simple if Examples

```python
# Basic if statement
age = 20
if age >= 18:
    print("You are an adult")

# With comparison operators
temperature = 35
if temperature > 30:
    print("It's hot outside!")

# With variables
is_raining = True
if is_raining:
    print("Take an umbrella")

# With expressions
score = 85
if score >= 60:
    print("You passed!")

# Multiple statements in block
balance = 100
withdrawal = 50
if withdrawal <= balance:
    balance -= withdrawal
    print(f"Withdrawal successful")
    print(f"New balance: ${balance}")
```

### if with Logical Operators

```python
# AND condition
age = 25
has_license = True
if age >= 18 and has_license:
    print("You can drive")

# OR condition
day = "Saturday"
if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")

# NOT condition
is_banned = False
if not is_banned:
    print("Access granted")

# Complex condition
score = 85
attendance = 95
if score >= 80 and attendance >= 90:
    print("Excellent performance!")
```

---

## The else Statement

The else statement executes code when the if condition is False.

### Basic Syntax

```python
if condition:
    # Code if condition is True
    statement1
else:
    # Code if condition is False
    statement2
```

### if-else Examples

```python
# Basic if-else
age = 15
if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# With calculations
temperature = 20
if temperature > 25:
    print("Turn on AC")
else:
    print("Temperature is comfortable")

# Authentication
password = "secret123"
user_input = input("Enter password: ")
if user_input == password:
    print("Access granted")
else:
    print("Access denied")

# Even or odd
number = 7
if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")

# Grade classification
score = 55
if score >= 60:
    print("Pass")
else:
    print("Fail")
```

---

## The elif Statement

elif (else if) allows checking multiple conditions in sequence.

### Basic Syntax

```python
if condition1:
    # Code if condition1 is True
    statement1
elif condition2:
    # Code if condition1 is False and condition2 is True
    statement2
elif condition3:
    # Code if previous conditions False and condition3 is True
    statement3
else:
    # Code if all conditions are False
    statement4
```

**Important:** 

- Python checks conditions in order from top to bottom
- First True condition executes, then exits
- else is optional

### if-elif-else Examples

```python
# Grade classification
score = 85
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")

# Age categories
age = 25
if age < 13:
    print("Child")
elif age < 20:
    print("Teenager")
elif age < 65:
    print("Adult")
else:
    print("Senior")

# Traffic light
light = "yellow"
if light == "red":
    print("Stop")
elif light == "yellow":
    print("Slow down")
elif light == "green":
    print("Go")
else:
    print("Invalid light color")

# Temperature ranges
temp = 22
if temp < 0:
    print("Freezing")
elif temp < 10:
    print("Cold")
elif temp < 20:
    print("Cool")
elif temp < 30:
    print("Warm")
else:
    print("Hot")
```

### Multiple elif Statements

```python
# Day of week
day = 3
if day == 1:
    print("Monday")
elif day == 2:
    print("Tuesday")
elif day == 3:
    print("Wednesday")
elif day == 4:
    print("Thursday")
elif day == 5:
    print("Friday")
elif day == 6:
    print("Saturday")
elif day == 7:
    print("Sunday")
else:
    print("Invalid day")

# Menu selection
choice = input("Enter choice (1-4): ")
if choice == "1":
    print("You selected Option 1")
elif choice == "2":
    print("You selected Option 2")
elif choice == "3":
    print("You selected Option 3")
elif choice == "4":
    print("You selected Option 4")
else:
    print("Invalid choice")
```

---

## Nested Conditionals

You can place if statements inside other if statements.

### Basic Nested if

```python
# Nested conditions
age = 20
has_ticket = True

if age >= 18:
    if has_ticket:
        print("Entry allowed")
    else:
        print("You need a ticket")
else:
    print("Too young to enter")

# Multiple levels
score = 85
attendance = 92

if score >= 60:
    print("Passed")
    if attendance >= 90:
        print("Perfect attendance!")
        if score >= 90:
            print("Honor roll!")
else:
    print("Failed")
```

### Practical Nested Examples

```python
# Login system
username = "alice"
password = "secret"
is_active = True

if username == "alice":
    if password == "secret":
        if is_active:
            print("Login successful")
        else:
            print("Account is inactive")
    else:
        print("Wrong password")
else:
    print("User not found")

# Grade with attendance
score = 75
attendance = 85

if score >= 60:
    if attendance >= 90:
        final_grade = "A"
    elif attendance >= 80:
        final_grade = "B"
    else:
        final_grade = "C"
    print(f"Final grade: {final_grade}")
else:
    print("Failed due to low score")

# Discount calculation
total = 100
is_member = True
is_first_purchase = False

if is_member:
    discount = 0.10  # 10% member discount
    if is_first_purchase:
        discount = 0.20  # 20% for first purchase
    print(f"Discount: {discount * 100}%")
else:
    if total > 200:
        discount = 0.05  # 5% for large orders
        print(f"Discount: {discount * 100}%")
    else:
        print("No discount")
```

### Avoiding Deep Nesting

Deep nesting can be hard to read. Use logical operators instead:

```python
# Hard to read (deeply nested)
if age >= 18:
    if has_license:
        if has_insurance:
            if not is_suspended:
                print("Can drive")

# Better (using and)
if age >= 18 and has_license and has_insurance and not is_suspended:
    print("Can drive")

# Or use early returns (in functions)
def can_drive(age, has_license, has_insurance, is_suspended):
    if age < 18:
        return False
    if not has_license:
        return False
    if not has_insurance:
        return False
    if is_suspended:
        return False
    return True
```

---

## Conditional Expressions (Ternary Operator)

A shorthand way to write simple if-else statements in one line.

### Syntax

```python
value_if_true if condition else value_if_false
```

### Basic Examples

```python
# Basic ternary
age = 20
status = "adult" if age >= 18 else "minor"
print(status)  # "adult"

# With numbers
a = 10
b = 20
max_value = a if a > b else b
print(max_value)  # 20

# Assign different values
score = 85
result = "Pass" if score >= 60 else "Fail"
print(result)  # "Pass"

# In print statement
temperature = 30
print("Hot" if temperature > 25 else "Cool")

# Even or odd
number = 7
print("Even" if number % 2 == 0 else "Odd")
```

### When to Use Ternary

```python
# Good use case (simple assignment)
discount = 0.10 if is_member else 0.05

# Bad use case (too complex)
# Avoid long or complex ternary expressions
result = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"

# Better as regular if-elif
if score >= 90:
    result = "A"
elif score >= 80:
    result = "B"
elif score >= 70:
    result = "C"
else:
    result = "F"
```

---

## Common Patterns

### Range Checking

```python
# Check if in range
age = 25
if 18 <= age <= 65:
    print("Working age")

# Check if outside range
if age < 18 or age > 65:
    print("Not working age")

# Multiple ranges
score = 85
if 90 <= score <= 100:
    grade = "A"
elif 80 <= score < 90:
    grade = "B"
elif 70 <= score < 80:
    grade = "C"
elif 60 <= score < 70:
    grade = "D"
else:
    grade = "F"
```

### Membership Testing

```python
# Check if in collection
day = "Saturday"
if day in ["Saturday", "Sunday"]:
    print("Weekend!")

# Check if not in collection
username = "alice"
banned_users = ["spammer", "troll"]
if username not in banned_users:
    print("Welcome!")

# String membership
email = "user@example.com"
if "@" in email and "." in email:
    print("Valid email format")
```

### Validation

```python
# Input validation
age = int(input("Enter age: "))
if 0 <= age <= 120:
    print("Valid age")
else:
    print("Invalid age")

# Multiple validation
password = input("Enter password: ")
if len(password) >= 8:
    if any(c.isdigit() for c in password):
        if any(c.isupper() for c in password):
            print("Strong password")
        else:
            print("Add uppercase letter")
    else:
        print("Add a digit")
else:
    print("Too short")
```

### Default Values

```python
# Set default if empty
name = input("Enter name: ")
if not name:
    name = "Guest"
print(f"Hello, {name}")

# Using or operator (cleaner)
name = input("Enter name: ") or "Guest"
print(f"Hello, {name}")
```

---

## Truthiness in Conditionals

Python treats certain values as False in conditional contexts.

### Falsy Values

```python
# These are all falsy
if False:
    print("Won't print")

if None:
    print("Won't print")

if 0:
    print("Won't print")

if "":
    print("Won't print")

if []:
    print("Won't print")

if {}:
    print("Won't print")
```

### Truthy Values

```python
# These are all truthy
if True:
    print("Will print")

if 1:
    print("Will print")

if "hello":
    print("Will print")

if [1, 2]:
    print("Will print")

if {"key": "value"}:
    print("Will print")
```

### Practical Truthiness

```python
# Check if list has items
items = [1, 2, 3]
if items:
    print(f"You have {len(items)} items")

# Check if string is not empty
name = "Alice"
if name:
    print(f"Hello, {name}")

# Check if number is not zero
count = 5
if count:
    print(f"Count: {count}")

# Default value pattern
user_input = ""
value = user_input if user_input else "default"
```

---

## Common Mistakes

### Mistake 1: Missing Colon

```python
# Wrong - missing colon
# if age >= 18
#     print("Adult")  # SyntaxError

# Correct
if age >= 18:
    print("Adult")
```

### Mistake 2: Wrong Indentation

```python
# Wrong - no indentation
# if age >= 18:
# print("Adult")  # IndentationError

# Wrong - inconsistent indentation
# if age >= 18:
#   print("Adult")  # 2 spaces
#     print("Can vote")  # 4 spaces (IndentationError)

# Correct - consistent 4 spaces
if age >= 18:
    print("Adult")
    print("Can vote")
```

### Mistake 3: Using = Instead of ==

```python
# Wrong - assignment instead of comparison
# if x = 5:  # SyntaxError
#     print("Five")

# Correct - comparison
if x == 5:
    print("Five")
```

### Mistake 4: Multiple Conditions Without Operators

```python
x = 5

# Wrong - doesn't work as expected
# if x == 3 or 4 or 5:  # Always True!
#     print("Match")

# Correct
if x == 3 or x == 4 or x == 5:
    print("Match")

# Better
if x in (3, 4, 5):
    print("Match")
```

### Mistake 5: Empty if Body

```python
# Wrong - empty if body
# if age >= 18:
# else:  # SyntaxError
#     print("Minor")

# Correct - use pass
if age >= 18:
    pass  # TODO: implement later
else:
    print("Minor")
```

---

## Classwork

Practice conditional statements!

### Exercise 1: Age Classifier

Create a file called 'age_classifier.py':

```python
"""
Classify age into categories using conditionals.
"""

# Get age from user
age = int(input("Enter your age: "))

# Classify age
print("\n" + "=" * 50)
print("AGE CLASSIFICATION")
print("=" * 50)

if age < 0:
    print("Invalid age")
elif age <= 2:
    print("Category: Infant")
elif age <= 12:
    print("Category: Child")
elif age <= 19:
    print("Category: Teenager")
elif age <= 64:
    print("Category: Adult")
else:
    print("Category: Senior")

# Additional checks
if age >= 18:
    print("✓ Can vote")
else:
    print("✗ Cannot vote yet")

if age >= 16:
    print("✓ Can drive")
else:
    print("✗ Cannot drive yet")

if age >= 21:
    print("✓ Can drink (in USA)")
else:
    print("✗ Cannot drink yet (in USA)")

print("=" * 50)
```

### Exercise 2: Grade Calculator

Create a file called 'grade_calculator.py':

```python
"""
Calculate letter grade from numerical score.
"""

# Get score
score = float(input("Enter your score (0-100): "))

# Validate input
if score < 0 or score > 100:
    print("Invalid score! Must be between 0 and 100.")
else:
    # Determine grade
    if score >= 90:
        grade = 'A'
        message = "Excellent!"
    elif score >= 80:
        grade = 'B'
        message = "Good job!"
    elif score >= 70:
        grade = 'C'
        message = "Satisfactory"
    elif score >= 60:
        grade = 'D'
        message = "Needs improvement"
    else:
        grade = 'F'
        message = "Failed"
    
    # Display results
    print("\n" + "=" * 50)
    print("GRADE REPORT")
    print("=" * 50)
    print(f"Score: {score}")
    print(f"Grade: {grade}")
    print(f"Status: {message}")
    
    # Pass/Fail status
    if score >= 60:
        print("Result: PASS ✓")
    else:
        print("Result: FAIL ✗")
    
    print("=" * 50)
```

### Exercise 3: Login System

Create a file called 'login_system.py':

```python
"""
Simple login system with conditionals.
"""

# Correct credentials
CORRECT_USERNAME = "admin"
CORRECT_PASSWORD = "python123"

# Get user input
print("=" * 50)
print("LOGIN SYSTEM")
print("=" * 50)
username = input("Username: ")
password = input("Password: ")

# Check credentials
if username == CORRECT_USERNAME:
    if password == CORRECT_PASSWORD:
        print("\n✓ Login successful!")
        print("Welcome to the system.")
    else:
        print("\n✗ Login failed!")
        print("Incorrect password.")
else:
    print("\n✗ Login failed!")
    print("Username not found.")
```

### Exercise 4: BMI Calculator

Create a file called 'bmi_calculator.py':

```python
"""
Calculate BMI and provide health category.
"""

# Get input
print("BMI CALCULATOR")
print("=" * 50)
weight = float(input("Enter weight (kg): "))
height = float(input("Enter height (m): "))

# Calculate BMI
bmi = weight / (height ** 2)

# Determine category
if bmi < 18.5:
    category = "Underweight"
    advice = "Consider gaining weight"
elif bmi < 25:
    category = "Normal weight"
    advice = "Maintain your current weight"
elif bmi < 30:
    category = "Overweight"
    advice = "Consider losing weight"
else:
    category = "Obese"
    advice = "Consult a healthcare provider"

# Display results
print("\n" + "=" * 50)
print("BMI RESULTS")
print("=" * 50)
print(f"Weight: {weight} kg")
print(f"Height: {height} m")
print(f"BMI: {bmi:.2f}")
print(f"Category: {category}")
print(f"Advice: {advice}")
print("=" * 50)
```

---

## Assignment

### Project: Decision Making System

Create a comprehensive program called 'decision_system.py' that demonstrates mastery of conditional statements through various real-world scenarios.

### Requirements:

Your program should include:

#### 1. **Student Grading System**
- Input: Multiple test scores
- Calculate average
- Determine letter grade (A-F)
- Check for honor roll (>= 3.5 GPA)
- Provide personalized feedback
- Show improvement suggestions

#### 2. **Loan Approval System**
Check multiple criteria:
- Age (21-70)
- Annual income (>= $30,000)
- Credit score (300-850)
- Employment status
- Existing debt
- Determine approval status
- Calculate loan amount and interest rate
- Provide rejection reasons if denied

#### 3. **Ticket Pricing System**
Calculate ticket price based on:
- Age (child, adult, senior pricing)
- Day of week (weekend vs weekday)
- Time of day (matinee vs evening)
- Group size (group discounts)
- Membership status
- Show breakdown of price calculation

#### 4. **Weather Advisory System**
Provide recommendations based on:
- Temperature
- Precipitation (rain, snow, none)
- Wind speed
- Air quality index
- UV index
- Generate activity recommendations
- Safety warnings if needed

#### 5. **Restaurant Recommendation System**
Suggest restaurant based on:
- Budget (cheap, moderate, expensive)
- Cuisine preference
- Dietary restrictions
- Distance willing to travel
- Party size
- Time of day
- Provide 3 recommendations with reasons

#### 6. **Password Strength Validator**
Check password requirements:
- Length (minimum 8 characters)
- Uppercase letters
- Lowercase letters
- Digits
- Special characters
- Common passwords check
- Calculate strength score (0-100)
- Provide specific improvement suggestions

#### 7. **Shipping Cost Calculator**
Calculate shipping based on:
- Package weight
- Destination (domestic/international)
- Shipping speed (standard/express/overnight)
- Package dimensions
- Insurance option
- Show breakdown and delivery estimate

#### 8. **Tax Bracket Calculator**
Calculate taxes based on:
- Annual income
- Filing status (single, married, head of household)
- Number of dependents
- State (different tax rates)
- Calculate federal and state tax
- Show effective tax rate
- Provide tax-saving suggestions

### Code Requirements:

- Use if, elif, and else appropriately
- Include nested conditionals where appropriate
- Use logical operators (and, or, not)
- Implement range checking
- Use ternary operators for simple cases
- Include input validation
- Professional error handling
- Menu-driven interface
- Functions for organization
- Comments and docstrings
- Formatted output

### Example Output:

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║          DECISION MAKING SYSTEM                  ║
║                                                  ║
╚══════════════════════════════════════════════════╝

MAIN MENU:
1. Student Grading System
2. Loan Approval System
3. Ticket Pricing System
4. Weather Advisory System
5. Restaurant Recommendation
6. Password Strength Validator
7. Shipping Cost Calculator
8. Tax Bracket Calculator
9. Exit

Enter your choice (1-9): 2

════════════════════════════════════════════════════
           LOAN APPROVAL SYSTEM
════════════════════════════════════════════════════

APPLICANT INFORMATION:
────────────────────────────────────────────────────
Enter your age: 35
Annual income: $75000
Credit score (300-850): 720
Are you employed? (yes/no): yes
Existing debt: $15000

────────────────────────────────────────────────────
ELIGIBILITY CHECK:
────────────────────────────────────────────────────
✓ Age requirement (21-70): PASS
✓ Income requirement ($30,000+): PASS
✓ Credit score (650+): PASS
✓ Employment status: PASS
✓ Debt-to-income ratio: PASS (20%)

════════════════════════════════════════════════════
LOAN APPROVED!
════════════════════════════════════════════════════

Approved Amount: $200,000
Interest Rate: 4.5%
Monthly Payment: $1,013.37
Loan Term: 30 years

Congratulations! Your loan has been approved.
Next steps:
1. Review loan agreement
2. Schedule property inspection
3. Complete final documentation
════════════════════════════════════════════════════
```

### Bonus Challenges (Optional):

1. **College Admission System**: GPA, SAT, extracurriculars, essays
2. **Insurance Premium Calculator**: Multiple risk factors
3. **Job Salary Estimator**: Experience, education, location
4. **Credit Card Approval**: Income, credit history, debt
5. **Scholarship Eligibility**: Academic, financial need, activities
6. **Apartment Rental Approval**: Income, credit, references
7. **Gym Membership Pricing**: Age, commitment, features
8. **Flight Booking System**: Class, timing, flexibility

### Submission Guidelines:

- File name: 'decision_system.py'
- Must include all 8 systems
- Professional menu interface
- Complete input validation
- Clear decision logic
- Well-organized with functions
- Comments and docstrings
- Test all paths and edge cases
- Estimated time: 150-180 minutes

### Grading Criteria:

- ✅ Student grading system (12 points)
- ✅ Loan approval system (15 points)
- ✅ Ticket pricing system (14 points)
- ✅ Weather advisory system (14 points)
- ✅ Restaurant recommendation (14 points)
- ✅ Password strength validator (15 points)
- ✅ Shipping cost calculator (14 points)
- ✅ Tax bracket calculator (15 points)
- ✅ Proper use of if/elif/else (10 points)
- ✅ Nested conditionals (8 points)
- ✅ Logical operators (8 points)
- ✅ Input validation (10 points)
- ✅ Error handling (8 points)
- ✅ Code organization (5 points)
- ✅ Output formatting (5 points)
- ✅ Comments and documentation (5 points)
- ✅ Bonus challenges (up to 8 extra points)

**Total: 172 points (+ up to 8 bonus points)**

---

## Quick Reference

### if Statement
```python
if condition:
    # code block
```

### if-else Statement
```python
if condition:
    # if true
else:
    # if false
```

### if-elif-else Statement
```python
if condition1:
    # if condition1
elif condition2:
    # if condition2
else:
    # if all false
```

### Ternary Operator
```python
value = true_val if condition else false_val
```

---

## Summary

In this lesson, you learned:

- ✅ Using if statements for decision making
- ✅ Adding else for alternative execution
- ✅ Using elif for multiple conditions
- ✅ Nesting conditional statements
- ✅ Conditional expressions (ternary operator)
- ✅ Common patterns (range checking, validation, membership)
- ✅ Truthiness and falsiness in conditions
- ✅ Common mistakes and how to avoid them
- ✅ Best practices for readable conditionals

**You can now make your programs intelligent and responsive!** Conditional statements are the foundation of program logic and decision-making.

In the next lesson, we'll explore boolean logic in more depth.

---

## Additional Resources

- **Python if Statements:** [https://docs.python.org/3/tutorial/controlflow.html#if-statements](https://docs.python.org/3/tutorial/controlflow.html#if-statements)
- **Conditional Expressions:** [https://docs.python.org/3/reference/expressions.html#conditional-expressions](https://docs.python.org/3/reference/expressions.html#conditional-expressions)
- **Real Python - Conditionals:** [https://realpython.com/python-conditional-statements/](https://realpython.com/python-conditional-statements/)

**Next lesson:** [Boolean Logic](boolean-logic)