# Boolean Logic

## What is Boolean?

Boolean is a data type that can only have two values: **True** or **False**. It's named after George Boole, a mathematician who created a system of logic based on these two values.

In Python, **True** and **False** are special keywords:

```python
is_student = True
is_raining = False

print(is_student)   # True
print(is_raining)   # False
```

**Note:** **True** and **False** must start with a capital letter in Python. **true** and **false** won't work.

## Creating Boolean Values

You create booleans by comparing things:

```python
age = 20
print(age > 18)      # True
print(age == 20)     # True
print(age < 18)      # False
```

## Boolean Operators

Boolean operators let you combine and manipulate boolean values. There are three main ones: **and**, **or**, and **not**.

### The **and** Operator

**and** returns **True** only if **both** conditions are **True**. If either is **False**, the result is **False**.

```python
age = 25
has_license = True

result = age >= 18 and has_license
print(result)  # True
```

Let's break it down:

- **age >= 18** is **True**
- **has_license** is **True**
- **True and True** = **True**

Another example:

```python
age = 15
has_license = True

result = age >= 18 and has_license
print(result)  # False
```

Here:

- **age >= 18** is **False**
- **has_license** is **True**
- **False and True** = **False**

### The **or** Operator

**or** returns **True** if **at least one** condition is **True**. It only returns **False** if both are **False**.

```python
day = "Saturday"

result = day == "Saturday" or day == "Sunday"
print(result)  # True
```

Let's break it down:

- **day == "Saturday"** is **True**
- **day == "Sunday"** is **False**
- **True or False** = **True**

Another example:

```python
is_weekend = False
is_holiday = True

result = is_weekend or is_holiday
print(result)  # True
```

Even though **is_weekend** is **False**, **is_holiday** is **True**, so the result is **True**.

### The **not** Operator

**not** reverses a boolean value. **True** becomes **False**, and **False** becomes **True**.

```python
is_raining = True

print(not is_raining)  # False
```

Here:

- **is_raining** is **True**
- **not True** = **False**

Another example:

```python
is_logged_in = False

print(not is_logged_in)  # True
```

## Truth Tables

Here are all the possible combinations:

### **and** Truth Table

| A | B | A and B |
|---|---|---------|
| True | True | True |
| True | False | False |
| False | True | False |
| False | False | False |

### **or** Truth Table

| A | B | A or B |
|---|---|--------|
| True | True | True |
| True | False | True |
| False | True | True |
| False | False | False |

### **not** Truth Table

| A | not A |
|---|-------|
| True | False |
| False | True |

## Combining Multiple Conditions

You can chain operators together:

```python
age = 25
has_license = True
has_insurance = True

if age >= 18 and has_license and has_insurance:
    print("You can drive safely")
```

**Output:** **You can drive safely**

Python reads from left to right. All three conditions must be **True**.

Here's an example with **or**:

```python
score = 45

if score >= 90 or score == 0:
    print("Special case")
else:
    print("Normal case")
```

**Output:** **Normal case**

## Combining **and**, **or**, and **not**

```python
age = 20
is_student = True
has_money = False

if age >= 18 and (is_student or has_money):
    print("You can apply")
else:
    print("You cannot apply")
```

**Output:** **You can apply**

This checks: Is the person 18 or older? AND (are they a student OR do they have money?)

Notice the parentheses — they group conditions together, similar to math. Parentheses help make your code clearer.

## Order of Operations

Python evaluates boolean expressions in this order:

1. Parentheses **()**
2. **not**
3. **and**
4. **or**

Example:

```python
a = True
b = False
c = True

result = a or b and c
# First: b and c = False and True = False
# Then: a or False = True or False = True
print(result)  # True
```

If you want to be clear (and you should be!), use parentheses:

```python
a = True
b = False
c = True

result = a or (b and c)
print(result)  # True
```

## Real-World Examples

### Example 1: Password Validator

```python
password = "Secure123"

has_uppercase = "S" in password.upper() and password != password.lower()
has_numbers = any(char.isdigit() for char in password)
is_long_enough = len(password) >= 8

if has_uppercase and has_numbers and is_long_enough:
    print("Password is strong")
else:
    print("Password is weak")
```

**Output:** **Password is strong**

### Example 2: Access Control

```python
is_admin = True
is_employee = False
has_access_key = True

if (is_admin or is_employee) and has_access_key:
    print("Access granted")
else:
    print("Access denied")
```

**Output:** **Access granted**

### Example 3: Game Logic

```python
player_health = 50
is_invincible = False
has_shield = True

if player_health > 0 and (not is_invincible or has_shield):
    print("Player is alive and protected")
```

**Output:** **Player is alive and protected**

## Common Mistakes

**1. Forgetting parentheses when needed**

```python
# Confusing - hard to read
if a > 5 and b < 10 or c == 15:
    pass

# Clear - use parentheses
if (a > 5 and b < 10) or (c == 15):
    pass
```

**2. Using wrong capitalization**

```python
# ❌ Wrong
if age > 18 and true:
    pass

# ✅ Correct
if age > 18 and True:
    pass
```

**3. Confusing **and** with **or****

```python
# ❌ Wrong - both must be true
if username != "" or password != "":  # This is always true even if both are empty!
    print("Login")

# ✅ Correct - both must be true
if username != "" and password != "":
    print("Login")
```

## Key Takeaways

- Boolean values are **True** or **False**
- **and** returns **True** only if both conditions are **True**
- **or** returns **True** if at least one condition is **True**
- **not** reverses a boolean value
- Use parentheses to make complex conditions clear
- Remember the order of operations: parentheses, **not**, **and**, **or**

---

## Practice Exercises

1. Write a program that checks if a person can watch a movie (must be 13+ or have parent permission).
2. Create a login system that checks if the username and password are correct.
3. Build a simple game validator that checks if a player can attack (has health, has stamina, and is not stunned).
4. Write a program that checks if a number is within a range (between 1 and 100).
5. Create a form validator that checks multiple conditions (name not empty, email has @, age is 18+).

---

## Solutions

```python
# Exercise 1: Movie Eligibility
age = 12
has_parent_permission = True

if age >= 13 or has_parent_permission:
    print("You can watch the movie.")
else:
    print("You cannot watch the movie.")

# Exercise 2: Login System
correct_username = "user123"
correct_password = "password123"

entered_username = input("Enter username: ")
entered_password = input("Enter password: ")

if entered_username == correct_username and entered_password == correct_password:
    print("Login successful!")
else:
    print("Invalid username or password.")

# Exercise 3: Game Attack Validator
player_health = 75
player_stamina = 30
is_stunned = False

if player_health > 0 and player_stamina >= 20 and not is_stunned:
    print("Player can attack!")
else:
    print("Player cannot attack.")

# Exercise 4: Number Range Check
number = 55

if number >= 1 and number <= 100:
    print(f"{number} is within the range of 1 to 100.")
else:
    print(f"{number} is outside the range of 1 to 100.")

# Exercise 5: Form Validator
name = "Alice"
email = "alice@example.com"
age = 20

name_valid = len(name) > 0
email_valid = "@" in email and "." in email
age_valid = age >= 18

if name_valid and email_valid and age_valid:
    print("Form submitted successfully!")
else:
    print("Please correct the form errors:")
    if not name_valid:
        print("- Name cannot be empty.")
    if not email_valid:
        print("- Invalid email format.")
    if not age_valid:
        print("- Age must be 18 or older.")

```

---

> ...
>
> **Next lesson:** [While Loops](while-loops)
>
> ---
