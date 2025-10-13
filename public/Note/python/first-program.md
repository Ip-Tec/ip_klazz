# Your First Python Program

Now that Python is installed, it's time to write your first real program! In this lesson, you'll learn how to create and run Python files, understand basic syntax, and write your first few programs.

## Two Ways to Run Python Code

### 1. Interactive Mode (Python Interpreter)

This is what we used in the previous lesson—you type commands one at a time.

```bash
python
>>> print("Hello!")
Hello!
```

**Great for:** Testing quick ideas, learning, experimenting

### 2. Script Mode (Python Files)

You write code in a `.py` file and run the entire file at once.

**Great for:** Real programs, saving your work, running complex code

**In this lesson, we'll focus on Script Mode.**

---

## Creating Your First Python File

### Step 1: Create a Project Folder

It's good practice to organize your Python projects in folders.

**Windows:**

1. Open File Explorer
2. Navigate to your Documents folder
3. Create a new folder called `python-projects`
4. Inside it, create another folder called `lesson-01`

**macOS/Linux:**

1. Open Terminal
2. Type:

```bash
mkdir -p ~/python-projects/lesson-01
cd ~/python-projects/lesson-01
```

### Step 2: Open Your Code Editor

**If using VS Code:**

1. Open VS Code
2. Click "File" → "Open Folder"
3. Select your `lesson-01` folder

**If using IDLE:**

1. Open IDLE
2. Click "File" → "New File"

**If using any text editor:**

1. Open your text editor (Notepad++, Sublime Text, etc.)
2. Create a new file

### Step 3: Create Your First Python File

1. Create a new file called `hello.py`
2. Type the following code:

```python
print("Hello, World!")
```

3. Save the file (Ctrl + S or Cmd + S)

**Important:** Make sure the file extension is `.py` not `.txt`!

### Step 4: Run Your Program

**Using Terminal/Command Prompt:**

Navigate to your project folder:

```bash
cd ~/python-projects/lesson-01
```

Run the program:

```bash
python hello.py
```

Or on macOS/Linux:

```bash
python3 hello.py
```

**Using VS Code:**

1. Right-click in the editor
2. Select "Run Python File in Terminal"

**Using IDLE:**

1. Press F5 or click "Run" → "Run Module"

**You should see:**

```
Hello, World!
```

🎉 **Congratulations!** You just ran your first Python program!

---

## Understanding Your First Program

Let's break down what happened:

```python
print("Hello, World!")
```

- `print()` is a **function** that displays text on the screen
- `"Hello, World!"` is a **string** (text) inside quotation marks
- The parentheses `()` are required to call the function
- Python reads your code from top to bottom

---

## Writing Comments

Comments are notes in your code that Python ignores. They help you (and others) understand what your code does.

### Single-Line Comments

Use the `#` symbol:

```python
# This is a comment - Python ignores this line
print("Hello, World!")  # You can also add comments after code
```

### Multi-Line Comments

Python doesn't have official multi-line comments, but you can use triple quotes:

```python
"""
This is a multi-line comment.
It can span multiple lines.
Python ignores everything between the triple quotes.
"""
print("Hello, World!")
```

**Best Practice:** Use comments to explain *why* you're doing something, not *what* you're doing (the code should be clear enough).

---

## Getting User Input

Let's make your program interactive! The `input()` function lets users type information.

### Example: Greeting Program

Create a new file called `greeting.py`:

```python
# Ask the user for their name
name = input("What is your name? ")

# Greet the user
print("Hello, " + name + "!")
print("Welcome to Python programming!")
```

**Run it:**

```bash
python greeting.py
```

**You'll see:**

```
What is your name? 
```

Type your name and press Enter. The program will greet you!

### How It Works

1. `input("What is your name? ")` displays the question and waits for user input
2. The user's answer is stored in a **variable** called `name`
3. `print("Hello, " + name + "!")` displays the greeting with the user's name
4. The `+` symbol **concatenates** (joins) strings together

---

## Your First Real Program

Let's create something more interesting! Create a file called `favorite_things.py`:

```python
# Favorite Things Program
print("Let's learn about your favorite things!")
print("-" * 40)  # Prints 40 dashes

# Get user input
name = input("What's your name? ")
color = input("What's your favorite color? ")
food = input("What's your favorite food? ")
hobby = input("What's your favorite hobby? ")

# Display a summary
print("\n" + "=" * 40)
print(f"Nice to meet you, {name}!")
print("=" * 40)
print(f"Favorite Color: {color}")
print(f"Favorite Food: {food}")
print(f"Favorite Hobby: {hobby}")
print("=" * 40)
print("\nThanks for sharing!")
```

### New Concepts Introduced

**1. String Repetition:**

```python
"-" * 40  # Prints 40 dashes: ----------------------------------------
```

**2. Escape Sequences:**

```python
"\n"  # New line (moves to the next line)
```

**3. f-strings (Formatted Strings):**

```python
f"Nice to meet you, {name}!"  # Inserts the value of name
```

This is the modern way to include variables in strings!

---

## Python Syntax Rules

Python has strict rules about how you write code:

### 1. Indentation Matters

Unlike other languages, Python uses indentation (spaces) to group code:

```python
# Correct
if True:
    print("This is indented")
    print("This is also indented")

# Wrong - will cause an error
if True:
print("This is not indented")
```

**Use 4 spaces for each indentation level** (most editors do this automatically when you press Tab).

### 2. Case Sensitivity

Python distinguishes between uppercase and lowercase:

```python
name = "Alice"
Name = "Bob"
NAME = "Charlie"

# These are three different variables!
```

### 3. Quotation Marks

You can use single or double quotes for strings:

```python
print("Hello")  # Double quotes
print('Hello')  # Single quotes
```

Both work the same! Just be consistent.

### 4. Line Breaks

Python reads one line at a time. Each statement is usually on its own line:

```python
print("First line")
print("Second line")
print("Third line")
```

---

## Common Beginner Mistakes

### Mistake 1: Forgetting Quotation Marks

```python
# Wrong
print(Hello, World!)

# Correct
print("Hello, World!")
```

### Mistake 2: Mismatched Quotes

```python
# Wrong
print("Hello, World!')

# Correct
print("Hello, World!")
```

### Mistake 3: Forgetting Parentheses

```python
# Wrong (Python 3)
print "Hello"

# Correct
print("Hello")
```

### Mistake 4: Typos in Function Names

```python
# Wrong
prin("Hello")  # Missing 't'

# Correct
print("Hello")
```

**Tip:** Python error messages are helpful! Read them carefully—they tell you what went wrong and where.

---

## Saving and Organizing Your Code

### File Naming Conventions

**Good names:**

- `hello.py`
- `calculator.py`
- `user_input.py`
- `my_first_program.py`

**Bad names:**

- `program.py` (too generic)
- `test.py` (overused, unclear)
- `My Program.py` (spaces cause issues)
- `123.py` (doesn't describe what it does)

**Rules:**

- Use lowercase letters
- Use underscores `_` instead of spaces
- Make names descriptive
- Use `.py` extension

### Project Organization

```
python-projects/
├── lesson-01/
│   ├── hello.py
│   ├── greeting.py
│   └── favorite_things.py
├── lesson-02/
│   └── ...
└── lesson-03/
    └── ...
```

---

## Running Python Programs: Summary

### Method 1: Terminal/Command Prompt

```bash
python program.py
```

### Method 2: VS Code

- Right-click → "Run Python File in Terminal"
- Or click the ▶️ play button (top-right)

### Method 3: IDLE

- Press F5
- Or "Run" → "Run Module"

### Method 4: Double-click (Windows)

- This works but the window closes immediately
- Better to use terminal for learning

---

## Classwork

Now it's time to practice! Complete these exercises:

### Exercise 1: Personal Introduction

Create a file called `introduction.py` that:

1. Asks for the user's name
2. Asks for their age
3. Asks for their city
4. Prints a nice summary like:

```bash
Hi, I'm [name]. I am [age] years old and I live in [city].
```

### Exercise 2: Simple Calculator

Create a file called `simple_calc.py` that:

1. Asks the user for two numbers
2. Adds them together
3. Prints the result

**Hint:** You'll need to convert the input to numbers:

```python
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
```

### Exercise 3: Story Generator

Create a file called `story.py` that:

1. Asks for a person's name
2. Asks for a place
3. Asks for an animal
4. Creates a funny short story using these words

**Example output:**

```bash
Once upon a time, John went to Paris and met a dancing elephant!
```

### Exercise 4: Receipt Printer

Create a file called `receipt.py` that:

1. Asks for an item name
2. Asks for the price
3. Asks for the quantity
4. Calculates the total (price × quantity)
5. Prints a formatted receipt

**Example output:**

```bash
========== RECEIPT ==========
Item: Apple
Price: $2.50
Quantity: 5
----------------------------
Total: $12.50
=============================
```

---

## Assignment

Create a program called `about_me.py` that tells people about you! Your program should:

### Requirements

1. **Display a title** with your name (use decorative lines)
2. **Ask the user for their name** so you can greet them
3. **Display at least 5 facts about you**, such as:
   - Your age or grade/class
   - Your favorite programming language (you can say "Python" if you're just starting!)
   - Your hobbies or interests
   - Your favorite subject
   - What you want to build with Python
4. **Use comments** to explain different sections of your code
5. **Use f-strings** for at least 2 of your print statements
6. **Make it visually appealing** with decorative lines, spacing, and formatting

### Example Output

```bash
*********************************************
          Welcome! I'm Alice
*********************************************

What's your name? Bob

Hello, Bob! Nice to meet you!

Here are some things about me:

📚 About Me
-------------------------------------------
Age: 16 years old
Favorite Language: Python (of course!)
Hobbies: Gaming, reading, and coding
Favorite Subject: Computer Science
My Goal: Build a social media app

-------------------------------------------

Thanks for getting to know me, Bob!
```

### Bonus Challenges (Optional):

1. Ask the user about themselves and find something you have in common
2. Use ASCII art to make your program more interesting
3. Calculate something (like how many days until your birthday)
4. Make your program colorful (research: Python `colorama` library)

### Submission:

- Save your file as `about_me.py`
- Make sure it runs without errors
- Test it multiple times with different inputs
- Add comments to explain your code

**Time to complete:** 30-45 minutes

---

## Tips for Success

### 1. Type, Don't Copy-Paste

You learn better by typing code yourself. Make mistakes—they're valuable!

### 2. Experiment

Change values, add lines, break things and fix them. Curiosity leads to learning!

### 3. Save Often

Press Ctrl+S (Cmd+S on Mac) frequently. Don't lose your work!

### 4. Read Error Messages

Errors are your friends! They tell you exactly what's wrong.

### 5. Start Simple

If you're stuck, start with the simplest version and build up from there.

### 6. Test Frequently

Run your program after every few lines to catch errors early.

---

## Summary

In this lesson, you learned:

- ✅ How to create and save Python files (`.py`)
- ✅ How to run Python programs in different ways
- ✅ How to use `print()` to display output
- ✅ How to use `input()` to get user input
- ✅ How to write comments with `#`
- ✅ Basic Python syntax rules (indentation, quotes, case sensitivity)
- ✅ How to use variables to store information
- ✅ String concatenation and f-strings
- ✅ Common beginner mistakes to avoid

**You're officially a Python programmer now!** 🎉

In the next lesson, we'll dive deeper into variables and data types to understand how Python stores different kinds of information.

---

## Additional Resources

- **Python Documentation:** [https://docs.python.org/3/tutorial/](https://docs.python.org/3/tutorial/)
- **Practice Platform:** [https://www.hackerrank.com/domains/python](https://www.hackerrank.com/domains/python)
- **Interactive Learning:** [https://www.learnpython.org/](https://www.learnpython.org/)

**Next lesson:** [Python IDEs and Text Editors](ides-editors.md)