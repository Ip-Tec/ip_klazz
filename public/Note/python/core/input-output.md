# User Input and Output

Communication between your program and users is essential. In this lesson, you'll learn how to get input from users and display output in various formats.

## Output with print()

The `print()` function displays information to the console.

### Basic Printing

```python
# Simple output
print("Hello, World!")

# Print multiple items
print("Hello", "World", "!")

# Print numbers
print(42)
print(3.14)

# Print variables
name = "Alice"
age = 25
print(name)
print(age)
```

### Printing Multiple Values

```python
# Print multiple values (separated by space by default)
name = "Alice"
age = 25
print("Name:", name, "Age:", age)
# Output: Name: Alice Age: 25

# Change separator
print("Name:", name, "Age:", age, sep=" | ")
# Output: Name: | Alice | Age: | 25

# No separator
print("Hello", "World", sep="")
# Output: HelloWorld

# Custom separator
print(1, 2, 3, 4, 5, sep="-")
# Output: 1-2-3-4-5
```

### Print End Parameter

By default, `print()` adds a newline at the end. You can change this:

```python
# Default behavior (newline)
print("Hello")
print("World")
# Output:
# Hello
# World

# Change end character
print("Hello", end=" ")
print("World")
# Output: Hello World

# No newline
print("Loading", end="...")
print("Done!")
# Output: Loading...Done!

# Custom end
print("Python", end=" >> ")
print("is", end=" >> ")
print("awesome!")
# Output: Python >> is >> awesome!
```

### Printing Special Characters

```python
# Empty line
print()

# Multiple lines
print("Line 1\nLine 2\nLine 3")

# Tab spacing
print("Name\tAge\tCity")
print("Alice\t25\tNew York")

# Escape sequences
print("She said, \"Hello!\"")
print("Path: C:\\Users\\Documents")
```

### Print Formatting

```python
# Using f-strings (recommended)
name = "Alice"
age = 25
print(f"My name is {name} and I am {age} years old")

# With expressions
print(f"Next year I'll be {age + 1}")

# Formatted numbers
price = 19.99
print(f"Price: ${price:.2f}")

# Multiple variables
city = "New York"
print(f"{name} is {age} years old and lives in {city}")
```

---

## Input with input()

The `input()` function gets text from the user. It **always returns a string**.

### Basic Input

```python
# Get user input
name = input("What is your name? ")
print(f"Hello, {name}!")

# The prompt is optional but recommended
age = input()  # Works but user doesn't know what to enter

# Better
age = input("Enter your age: ")
```

### Input Always Returns String

```python
# This is a string, not a number!
age = input("Enter your age: ")
print(type(age))  # <class 'str'>

# This will cause an error
# next_age = age + 1  # TypeError

# Convert to number first
age = int(input("Enter your age: "))
print(f"Next year you'll be {age + 1}")
```

### Multiple Inputs

```python
# One at a time
first_name = input("First name: ")
last_name = input("Last name: ")
age = int(input("Age: "))

print(f"Hello, {first_name} {last_name}. You are {age} years old.")

# Multiple inputs on one line
data = input("Enter name and age (separated by space): ")
name, age = data.split()
age = int(age)
print(f"Name: {name}, Age: {age}")
```

### Input Validation

```python
# Check if input is not empty
name = input("Enter your name: ")
if name:
    print(f"Hello, {name}!")
else:
    print("You didn't enter a name!")

# Check if input is a digit
age_str = input("Enter your age: ")
if age_str.isdigit():
    age = int(age_str)
    print(f"You are {age} years old")
else:
    print("That's not a valid age!")

# Loop until valid input
while True:
    age_str = input("Enter your age: ")
    if age_str.isdigit():
        age = int(age_str)
        break
    else:
        print("Please enter a valid number!")

print(f"You are {age} years old")
```

---

## Formatted Output

### Using f-strings

```python
name = "Alice"
age = 25
height = 5.6

# Basic f-string
print(f"Name: {name}")

# With expressions
print(f"Age next year: {age + 1}")

# Multiple variables
print(f"{name} is {age} years old and {height} feet tall")

# Method calls
print(f"Uppercase name: {name.upper()}")

# Formatting numbers
price = 19.99
print(f"Price: ${price:.2f}")  # 2 decimal places

# Padding and alignment
print(f"{name:>10}")  # Right align (10 characters)
print(f"{name:<10}")  # Left align
print(f"{name:^10}")  # Center

# With fill character
print(f"{name:*^10}")  # Center with * padding
```

### Old Style Formatting

```python
# % operator (old style, but still used)
name = "Alice"
age = 25
print("My name is %s and I am %d years old" % (name, age))

# .format() method
print("My name is {} and I am {} years old".format(name, age))

# With indices
print("I am {1} and my name is {0}".format(name, age))

# With names
print("My name is {n} and I am {a} years old".format(n=name, a=age))
```

---

## Number Formatting

### Decimal Places

```python
pi = 3.14159265359

# 2 decimal places
print(f"{pi:.2f}")      # 3.14

# 5 decimal places
print(f"{pi:.5f}")      # 3.14159

# No decimal places (rounds)
print(f"{pi:.0f}")      # 3
```

### Thousands Separator

```python
big_number = 1000000

# Add comma separator
print(f"{big_number:,}")           # 1,000,000

# With decimal places
price = 1234567.89
print(f"${price:,.2f}")            # $1,234,567.89
```

### Percentages

```python
score = 0.8567

# As percentage
print(f"Score: {score:.2%}")       # Score: 85.67%

# Custom format
print(f"Score: {score * 100:.1f}%")  # Score: 85.7%
```

### Number Padding

```python
number = 42

# Pad with zeros
print(f"{number:05d}")    # 00042

# Pad with spaces
print(f"{number:5d}")     # "   42"

# Right align with zeros
day = 7
month = 3
year = 2024
print(f"{year}-{month:02d}-{day:02d}")  # 2024-03-07
```

---

## Creating Interactive Programs

### Simple Q&A Program

```python
print("=" * 50)
print("PERSONAL INFORMATION FORM")
print("=" * 50)

# Collect information
name = input("\nFull Name: ")
age = int(input("Age: "))
city = input("City: ")
hobby = input("Favorite Hobby: ")

# Display summary
print("\n" + "=" * 50)
print("SUMMARY")
print("=" * 50)
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")
print(f"Hobby: {hobby}")
print("=" * 50)
```

### Calculator with User Input

```python
print("SIMPLE CALCULATOR")
print("-" * 40)

# Get numbers
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))

# Perform operations
print(f"\nResults:")
print(f"{num1} + {num2} = {num1 + num2}")
print(f"{num1} - {num2} = {num1 - num2}")
print(f"{num1} × {num2} = {num1 * num2}")
print(f"{num1} ÷ {num2} = {num1 / num2:.2f}")
```

### Menu-Driven Program

```python
print("MENU")
print("1. Say Hello")
print("2. Calculate Square")
print("3. Exit")

choice = input("\nEnter choice (1-3): ")

if choice == "1":
    name = input("Enter your name: ")
    print(f"Hello, {name}!")
elif choice == "2":
    num = int(input("Enter a number: "))
    print(f"Square of {num} is {num ** 2}")
elif choice == "3":
    print("Goodbye!")
else:
    print("Invalid choice!")
```

---

## Advanced Output Techniques

### Printing Tables

```python
# Print a formatted table
print(f"{'Name':<15} {'Age':>5} {'City':<15}")
print("-" * 40)
print(f"{'Alice':<15} {25:>5} {'New York':<15}")
print(f"{'Bob':<15} {30:>5} {'Los Angeles':<15}")
print(f"{'Charlie':<15} {28:>5} {'Chicago':<15}")

# Output:
# Name            Age   City           
# ----------------------------------------
# Alice            25   New York       
# Bob              30   Los Angeles    
# Charlie          28   Chicago        
```

### Progress Indicators

```python
import time

# Simple loading animation
print("Loading", end="")
for i in range(5):
    print(".", end="", flush=True)
    time.sleep(0.5)
print(" Done!")

# Progress bar
def print_progress_bar(iteration, total, length=50):
    percent = (iteration / total)
    filled = int(length * percent)
    bar = '█' * filled + '-' * (length - filled)
    print(f'\rProgress: |{bar}| {percent:.1%}', end='')
    if iteration == total:
        print()

# Example usage
for i in range(101):
    print_progress_bar(i, 100)
    time.sleep(0.05)
```

### Box Drawing

```python
def print_box(text, width=50):
    """Print text in a box."""
    print("┌" + "─" * width + "┐")
    # Center text
    padding = (width - len(text)) // 2
    print("│" + " " * padding + text + " " * (width - padding - len(text)) + "│")
    print("└" + "─" * width + "┘")

print_box("Welcome to Python!", 30)

# Output:
# ┌──────────────────────────────┐
# │    Welcome to Python!        │
# └──────────────────────────────┘
```

---

## Working with Multiple Lines

### Multi-line Input

```python
print("Enter your message (type 'END' to finish):")
lines = []
while True:
    line = input()
    if line == "END":
        break
    lines.append(line)

message = "\n".join(lines)
print("\nYour message:")
print(message)
```

### Multi-line Output

```python
# Using triple quotes
message = """
╔════════════════════════════╗
║     WELCOME MESSAGE        ║
║                            ║
║  Thank you for using       ║
║  our program!              ║
╚════════════════════════════╝
"""
print(message)

# Using multiple prints
print("╔════════════════════════════╗")
print("║     WELCOME MESSAGE        ║")
print("║                            ║")
print("║  Thank you for using       ║")
print("║  our program!              ║")
print("╚════════════════════════════╝")
```

---

## File-like Output (Preview)

### Printing to String

```python
# Using string concatenation
output = ""
output += "Name: Alice\n"
output += "Age: 25\n"
output += "City: New York\n"
print(output)

# Better: using a list and join
lines = []
lines.append("Name: Alice")
lines.append("Age: 25")
lines.append("City: New York")
output = "\n".join(lines)
print(output)
```

---

## Common Input/Output Patterns

### Yes/No Confirmation

```python
answer = input("Do you want to continue? (yes/no): ").lower()
if answer in ["yes", "y"]:
    print("Continuing...")
else:
    print("Exiting...")
```

### Numeric Range Input

```python
while True:
    age = int(input("Enter age (0-120): "))
    if 0 <= age <= 120:
        break
    else:
        print("Invalid age! Must be between 0 and 120.")

print(f"Age: {age}")
```

### Password Input (Hidden)

```python
import getpass

# Hidden input (doesn't show what user types)
password = getpass.getpass("Enter password: ")
print("Password received (hidden)")

# Note: getpass doesn't work in all environments
# For basic programs, use regular input:
password = input("Enter password: ")
```

### Multiple Choice Input

```python
print("Choose your favorite color:")
print("1. Red")
print("2. Blue")
print("3. Green")

choice = input("Enter choice (1-3): ")

colors = {"1": "Red", "2": "Blue", "3": "Green"}
color = colors.get(choice, "Invalid")
print(f"You chose: {color}")
```

---

## Classwork

Practice input and output!

### Exercise 1: Personal Greeter

Create a file called `greeter.py`:

```python
# Get user information
print("=" * 50)
print("PERSONAL GREETER")
print("=" * 50)

name = input("\nWhat's your name? ")
age = int(input("How old are you? "))
hobby = input("What's your favorite hobby? ")

# Create personalized greeting
print("\n" + "=" * 50)
print(f"Hello, {name}!")
print(f"At {age} years old, you have great taste in {hobby}!")
print(f"In 10 years, you'll be {age + 10}.")
print("=" * 50)
```

### Exercise 2: Formatted Receipt

Create a file called `receipt.py`:

```python
# Get purchase information
print("POINT OF SALE SYSTEM")
print("-" * 40)

item1 = input("Item 1 name: ")
price1 = float(input("Item 1 price: $"))

item2 = input("Item 2 name: ")
price2 = float(input("Item 2 price: $"))

item3 = input("Item 3 name: ")
price3 = float(input("Item 3 price: $"))

tax_rate = 0.08  # 8% tax

# Calculate totals
subtotal = price1 + price2 + price3
tax = subtotal * tax_rate
total = subtotal + tax

# Print formatted receipt
print("\n" + "=" * 40)
print("          RECEIPT")
print("=" * 40)
print(f"{item1:<20} ${price1:>8.2f}")
print(f"{item2:<20} ${price2:>8.2f}")
print(f"{item3:<20} ${price3:>8.2f}")
print("-" * 40)
print(f"{'Subtotal:':<20} ${subtotal:>8.2f}")
print(f"{'Tax (8%):':<20} ${tax:>8.2f}")
print("=" * 40)
print(f"{'TOTAL:':<20} ${total:>8.2f}")
print("=" * 40)
print("\nThank you for your purchase!")
```

### Exercise 3: Number Formatter

Create a file called `number_formatter.py`:

```python
# Get number from user
number = float(input("Enter a number: "))

# Display in various formats
print("\n" + "=" * 40)
print("NUMBER FORMATTING DEMO")
print("=" * 40)
print(f"Original: {number}")
print(f"2 decimals: {number:.2f}")
print(f"0 decimals: {number:.0f}")
print(f"Scientific: {number:.2e}")
print(f"Percentage: {number:.1%}")
print(f"With commas: {number:,.2f}")
print(f"Padded (10): {number:10.2f}")
print(f"Zero-padded: {number:010.2f}")
print("=" * 40)
```

### Exercise 4: Mad Libs Generator

Create a file called `mad_libs.py`:

```python
print("=" * 50)
print("MAD LIBS GENERATOR")
print("=" * 50)
print("\nEnter the following words:")

# Get words from user
noun1 = input("Noun: ")
verb1 = input("Verb (past tense): ")
adjective1 = input("Adjective: ")
noun2 = input("Another noun: ")
verb2 = input("Verb (present tense): ")
adjective2 = input("Another adjective: ")

# Create story
story = f"""
{'='*50}
YOUR STORY
{'='*50}

Once upon a time, there was a {adjective1} {noun1}.
It {verb1} every single day without fail.
One day, it met a {adjective2} {noun2}.
Together, they learned to {verb2} and lived happily ever after!

{'='*50}
"""

print(story)
```

---

## Assignment

### Project: Interactive Survey System

Create a comprehensive survey program called `survey_system.py` that collects user information, processes it, and displays formatted results.

### Requirements

Your program should:

#### 1. **Welcome Screen**

- Display an attractive welcome message
- Explain what the survey is about
- Show instructions

#### 2. **Personal Information Section**

Collect:

- Full name
- Age
- Email address
- Phone number
- City and Country

#### 3. **Preferences Section**

Collect:

- Favorite color
- Favorite programming language
- Years of programming experience (can be 0)
- Preferred learning style (video/reading/hands-on)

#### 4. **Rating Section**

Ask user to rate (1-5):

- How much they enjoy programming
- Their confidence level in Python
- Their interest in web development

#### 5. **Open-Ended Questions**

- Why did you start learning Python?
- What do you want to build with Python?

#### 6. **Data Validation**

- Age must be between 10 and 100
- Email must contain @ and .
- Ratings must be 1-5
- Phone number must be digits only

#### 7. **Summary Report**

Display a professionally formatted report with:

- All collected information
- Calculated statistics (average rating, etc.)
- Personalized message based on responses
- Visual formatting (boxes, lines, spacing)

#### 8. **Save Option**

Ask if they want to save their responses
If yes, display a "saved successfully" message

### Code Requirements

- Use descriptive variable names
- Include input validation for all numeric inputs
- Use f-strings for all formatted output
- Create at least 3 custom functions
- Use proper spacing and visual separators
- Include comments explaining major sections
- Handle potential errors gracefully

### Example Output

```
╔══════════════════════════════════════════════════╗
║                                                  ║
║         WELCOME TO THE SURVEY SYSTEM!            ║
║                                                  ║
║  This survey will help us understand your        ║
║  programming background and preferences.         ║
║                                                  ║
║  Time to complete: 5-10 minutes                  ║
║                                                  ║
╚══════════════════════════════════════════════════╝

Press Enter to begin...

════════════════════════════════════════════════════
           SECTION 1: PERSONAL INFORMATION
════════════════════════════════════════════════════

Full Name: John Smith
Age: 28
Email: john.smith@email.com
Phone: 1234567890
City: New York
Country: USA

════════════════════════════════════════════════════
           SECTION 2: PREFERENCES
════════════════════════════════════════════════════

Favorite Color: Blue
Favorite Programming Language: Python
Years of Experience: 2
Learning Style: hands-on

════════════════════════════════════════════════════
           SECTION 3: RATINGS (1-5)
════════════════════════════════════════════════════

How much do you enjoy programming? 5
Python confidence level? 4
Interest in web development? 5

════════════════════════════════════════════════════
           SECTION 4: OPEN QUESTIONS
════════════════════════════════════════════════════

Why did you start learning Python?
> I wanted to automate tasks at work

What do you want to build with Python?
> Web applications and data analysis tools

════════════════════════════════════════════════════
                 SURVEY COMPLETE!
════════════════════════════════════════════════════

Generating your personalized report...

╔══════════════════════════════════════════════════╗
║                                                  ║
║              SURVEY SUMMARY REPORT               ║
║                                                  ║
╚══════════════════════════════════════════════════╝

PARTICIPANT INFORMATION
────────────────────────────────────────────────────
Name:            John Smith
Age:             28 years old
Location:        New York, USA
Contact:         john.smith@email.com

PROGRAMMING PROFILE
────────────────────────────────────────────────────
Experience:      2 years
Favorite Lang:   Python
Learning Style:  Hands-on
Favorite Color:  Blue

RATINGS & INTERESTS
────────────────────────────────────────────────────
Programming Enjoyment:     ★★★★★ (5/5)
Python Confidence:         ★★★★☆ (4/5)
Web Dev Interest:          ★★★★★ (5/5)
                           ──────────
Average Rating:            4.7/5

GOALS & MOTIVATION
────────────────────────────────────────────────────
Why Python?
  "I wanted to automate tasks at work"

Future Projects:
  "Web applications and data analysis tools"

════════════════════════════════════════════════════

PERSONALIZED MESSAGE:
────────────────────────────────────────────────────
Hi John! With 2 years of experience and a passion
for Python, you're on a great path! Your interest
in web development and automation shows you have
clear goals. Keep building those projects!

════════════════════════════════════════════════════

Would you like to save this report? (yes/no): yes

✓ Report saved successfully!

Thank you for completing the survey! 🎉

════════════════════════════════════════════════════
```

### Bonus Challenges (Optional)

1. **Progress Indicator**: Show survey progress (Section 1/4 completed)
2. **Color Coding**: Use ANSI colors for better visual appeal
3. **Data Export**: Actually write results to a text file
4. **Input History**: Allow user to go back and change answers
5. **Star Rating**: Display ratings as visual stars (★★★★☆)
6. **ASCII Art**: Add decorative ASCII art
7. **Multiple Surveys**: Allow user to take survey multiple times
8. **Statistics**: Calculate and display interesting statistics

### Submission Guidelines

- File name: `survey_system.py`
- Must collect all required information
- Include comprehensive input validation
- Professional formatting with visual elements
- Functions for repeatable tasks
- Comments explaining code sections
- Test thoroughly with various inputs
- Estimated time: 90-120 minutes

### Grading Criteria

- ✅ Welcome screen (3 points)
- ✅ Personal information collection (5 points)
- ✅ Preferences collection (4 points)
- ✅ Ratings collection (4 points)
- ✅ Open-ended questions (3 points)
- ✅ Input validation (8 points)
- ✅ Summary report formatting (8 points)
- ✅ Code organization and functions (5 points)
- ✅ Comments and documentation (3 points)
- ✅ Professional output presentation (5 points)
- ✅ Save option (2 points)
- ✅ Bonus challenges (up to 8 extra points)

**Total: 50 points (+ up to 8 bonus points)**

---

## Quick Reference

### Output

```python
print(value)                    # Basic print
print(val1, val2, sep=" ")      # Multiple values
print(value, end="\n")          # Change end character
print(f"{var}")                 # f-string
print(f"{num:.2f}")             # Format number
```

### Input

```python
text = input("Prompt: ")        # Get string
num = int(input("Number: "))    # Get integer
num = float(input("Float: "))   # Get float
```

### Formatting

```python
f"{var}"                        # Basic
f"{var:10}"                     # Width
f"{var:<10}"                    # Left align
f"{var:>10}"                    # Right align
f"{var:^10}"                    # Center
f"{num:.2f}"                    # 2 decimals
f"{num:,}"                      # Thousands separator
f"{num:.2%}"                    # Percentage
```

---

## Summary

In this lesson, you learned:

- ✅ Using `print()` for output with various options
- ✅ Using `input()` to get user data
- ✅ Formatting output with f-strings
- ✅ Number formatting (decimals, commas, percentages)
- ✅ Creating interactive programs
- ✅ Input validation techniques
- ✅ Advanced output techniques (tables, boxes, progress)
- ✅ Common input/output patterns
- ✅ Creating professional-looking interfaces

**You can now create interactive programs that communicate effectively with users!** This is fundamental to making useful applications.

In the next lesson, we'll learn about comments and documentation.

---

## Additional Resources

- **Python Input/Output:** [https://docs.python.org/3/tutorial/inputoutput.html](https://docs.python.org/3/tutorial/inputoutput.html)
- **Format Specification:** [https://docs.python.org/3/library/string.html#format-specification-mini-language](https://docs.python.org/3/library/string.html#format-specification-mini-language)
- **Real Python - Input/Output:** [https://realpython.com/python-input-output/](https://realpython.com/python-input-output/)

**Next lesson:** [Comments and Documentation](comments)
