# Strings and String Methods

Strings are one of the most important data types in Python. They represent text and are used in almost every program. Let's explore everything you can do with strings!

## What is a String?

A **string** is a sequence of characters enclosed in quotes. Strings can contain letters, numbers, symbols, and spaces.

### Creating Strings

```python
# Single quotes
name = 'Alice'
message = 'Hello, World!'

# Double quotes
city = "New York"
greeting = "How are you?"

# Both work the same way - choose one and be consistent
# Use double quotes if your string contains single quotes
sentence = "It's a beautiful day"

# Use single quotes if your string contains double quotes
quote = 'She said, "Hello!"'

# Or use escape characters
quote2 = "She said, \"Hello!\""
```

### Multi-line Strings

Use triple quotes for strings that span multiple lines:

```python
# Triple single quotes
poem = '''
Roses are red,
Violets are blue,
Python is awesome,
And so are you!
'''

# Triple double quotes
description = """
This is a long description
that spans multiple lines.
It preserves line breaks.
"""

print(poem)
```

### Empty Strings

```python
empty = ""
also_empty = ''

# Check if a string is empty
if empty:
    print("Not empty")
else:
    print("Empty string")  # This will print
```

---

## String Indexing

Each character in a string has a position (index). Python uses **zero-based indexing**.

```python
word = "Python"

# Positive indexing (left to right)
print(word[0])   # 'P' (first character)
print(word[1])   # 'y'
print(word[2])   # 't'
print(word[5])   # 'n' (last character)

# Negative indexing (right to left)
print(word[-1])  # 'n' (last character)
print(word[-2])  # 'o'
print(word[-6])  # 'P' (first character)
```

**Visual representation:**

```
 P  y  t  h  o  n
 0  1  2  3  4  5    (positive indices)
-6 -5 -4 -3 -2 -1    (negative indices)
```

### Index Out of Range

```python
word = "Python"
# This will cause an error
# print(word[10])  # IndexError: string index out of range

# Get the length first
print(len(word))  # 6
print(word[len(word) - 1])  # 'n' (last character)
```

---

## String Slicing

Extract a portion of a string using slicing: `string[start:end:step]`

### Basic Slicing

```python
text = "Python Programming"

# [start:end] - from start up to (but not including) end
print(text[0:6])    # "Python"
print(text[7:18])   # "Programming"

# Omit start (begins at 0)
print(text[:6])     # "Python"

# Omit end (goes to the end)
print(text[7:])     # "Programming"

# Get everything
print(text[:])      # "Python Programming"
```

### Slicing with Steps

```python
text = "Python Programming"

# [start:end:step]
print(text[0:6:1])   # "Python" (every character)
print(text[0:6:2])   # "Pto" (every 2nd character)
print(text[::2])     # "Pto rgamn" (every 2nd character)

# Reverse a string
print(text[::-1])    # "gnimmargorP nohtyP"
```

### Negative Indices in Slicing

```python
text = "Python Programming"

# Get last 11 characters
print(text[-11:])    # "Programming"

# Get everything except last 11 characters
print(text[:-11])    # "Python "

# Reverse using negative step
print(text[::-1])    # "gnimmargorP nohtyP"
```

---

## String Operations

### Concatenation (Joining Strings)

```python
first_name = "John"
last_name = "Doe"

# Using + operator
full_name = first_name + " " + last_name
print(full_name)  # "John Doe"

# Using += operator
message = "Hello"
message += " World"
print(message)  # "Hello World"

# Concatenating multiple strings
greeting = "Hello" + " " + "there" + "!"
print(greeting)  # "Hello there!"
```

### Repetition

```python
# Using * operator
laugh = "ha" * 3
print(laugh)  # "hahaha"

separator = "=" * 50
print(separator)  # "=================================================="

# Fun with repetition
pattern = "+-" * 10
print(pattern)  # "+-+-+-+-+-+-+-+-+-+-"
```

### String Length

```python
message = "Hello, World!"
length = len(message)
print(length)  # 13 (includes space and punctuation)

# Empty string
empty = ""
print(len(empty))  # 0
```

---

## String Methods

Strings have many built-in methods. **Important:** String methods return a **new** string; they don't modify the original.

### Case Conversion

```python
text = "Hello, World!"

# Convert to uppercase
print(text.upper())      # "HELLO, WORLD!"

# Convert to lowercase
print(text.lower())      # "hello, world!"

# Title case (capitalize each word)
print(text.title())      # "Hello, World!"

# Capitalize first letter only
print(text.capitalize()) # "Hello, world!"

# Swap case
print(text.swapcase())   # "hELLO, wORLD!"

# Original string is unchanged
print(text)              # "Hello, World!"
```

### Removing Whitespace

```python
text = "   Hello, World!   "

# Remove leading and trailing whitespace
print(text.strip())      # "Hello, World!"

# Remove leading whitespace only
print(text.lstrip())     # "Hello, World!   "

# Remove trailing whitespace only
print(text.rstrip())     # "   Hello, World!"

# Remove specific characters
text2 = "...Hello..."
print(text2.strip('.'))  # "Hello"
```

### Finding and Replacing

```python
sentence = "Python is fun. Python is powerful."

# Find substring (returns index of first occurrence)
print(sentence.find("Python"))     # 0
print(sentence.find("fun"))        # 10
print(sentence.find("Java"))       # -1 (not found)

# Find from a starting position
print(sentence.find("Python", 1))  # 15 (second occurrence)

# Replace substring
new_sentence = sentence.replace("Python", "JavaScript")
print(new_sentence)  # "JavaScript is fun. JavaScript is powerful."

# Replace with limit
new_sentence = sentence.replace("Python", "Ruby", 1)
print(new_sentence)  # "Ruby is fun. Python is powerful."

# Count occurrences
print(sentence.count("Python"))    # 2
print(sentence.count("is"))        # 2
```

### Checking String Content

```python
text = "Hello123"

# Check if all characters are alphabetic
print("abc".isalpha())       # True
print("abc123".isalpha())    # False

# Check if all characters are digits
print("123".isdigit())       # True
print("12.3".isdigit())      # False

# Check if all characters are alphanumeric
print("abc123".isalnum())    # True
print("abc 123".isalnum())   # False (space)

# Check if all characters are lowercase
print("hello".islower())     # True
print("Hello".islower())     # False

# Check if all characters are uppercase
print("HELLO".isupper())     # True
print("Hello".isupper())     # False

# Check if string is title case
print("Hello World".istitle())   # True
print("Hello world".istitle())   # False

# Check if string contains only whitespace
print("   ".isspace())       # True
print("  a ".isspace())      # False
```

### Starting and Ending

```python
filename = "document.pdf"

# Check if string starts with substring
print(filename.startswith("doc"))      # True
print(filename.startswith("image"))    # False

# Check if string ends with substring
print(filename.endswith(".pdf"))       # True
print(filename.endswith(".txt"))       # False

# Check multiple possibilities
print(filename.endswith((".pdf", ".doc", ".txt")))  # True
```

### Splitting and Joining

```python
# Split string into list (we'll learn lists in detail later)
sentence = "Python is awesome"
words = sentence.split()
print(words)  # ['Python', 'is', 'awesome']

# Split by specific delimiter
csv_data = "John,Doe,30,Engineer"
parts = csv_data.split(",")
print(parts)  # ['John', 'Doe', '30', 'Engineer']

# Limit splits
text = "a:b:c:d:e"
parts = text.split(":", 2)
print(parts)  # ['a', 'b', 'c:d:e']

# Join list into string
words = ["Python", "is", "awesome"]
sentence = " ".join(words)
print(sentence)  # "Python is awesome"

# Join with different separator
csv = ",".join(["John", "Doe", "30"])
print(csv)  # "John,Doe,30"
```

### Alignment and Padding

```python
text = "Python"

# Center text (total width)
print(text.center(20))       # "       Python       "
print(text.center(20, "*"))  # "*******Python*******"

# Left align
print(text.ljust(20))        # "Python              "
print(text.ljust(20, "-"))   # "Python--------------"

# Right align
print(text.rjust(20))        # "              Python"
print(text.rjust(20, "0"))   # "00000000000000Python"

# Zero padding for numbers
number = "42"
print(number.zfill(5))       # "00042"
```

---

## Escape Characters

Special characters that start with a backslash `\`:

```python
# Newline
print("Hello\nWorld")
# Output:
# Hello
# World

# Tab
print("Name:\tJohn")          # Name:    John

# Backslash
print("C:\\Users\\Documents")  # C:\Users\Documents

# Quote inside string
print("She said, \"Hi!\"")    # She said, "Hi!"
print('It\'s a nice day')     # It's a nice day

# Carriage return
print("Hello\rWorld")         # World (overwrites "Hello")

# Backspace
print("Hello\b!")             # Hell!
```

### Raw Strings

Prefix with `r` to treat backslashes as literal characters:

```python
# Regular string (interprets \n as newline)
path = "C:\new\test"
print(path)  # Causes issues with \n and \t

# Raw string (treats \ as literal)
path = r"C:\new\test"
print(path)  # C:\new\test

# Useful for regex patterns and file paths
regex_pattern = r"\d+\.\d+"
windows_path = r"C:\Users\Documents"
```

---

## String Formatting

### Old Style (% operator)

```python
name = "Alice"
age = 25
print("My name is %s and I am %d years old" % (name, age))
```

### Format Method

```python
name = "Alice"
age = 25
print("My name is {} and I am {} years old".format(name, age))

# With indices
print("I am {1} and my name is {0}".format(name, age))

# With names
print("My name is {n} and I am {a} years old".format(n=name, a=age))
```

### f-Strings (Best Way - Python 3.6+)

```python
name = "Alice"
age = 25
city = "New York"

# Basic f-string
print(f"My name is {name} and I am {age} years old")

# With expressions
print(f"Next year I'll be {age + 1}")

# With method calls
print(f"My name in uppercase: {name.upper()}")

# Formatting numbers
price = 19.99
print(f"Price: ${price:.2f}")  # Price: $19.99

# Padding and alignment
print(f"{name:>10}")  # Right align in 10 spaces
print(f"{name:<10}")  # Left align in 10 spaces
print(f"{name:^10}")  # Center in 10 spaces
```

### Advanced f-String Formatting

```python
# Numbers
number = 42
print(f"{number:05d}")    # 00042 (pad with zeros)
print(f"{number:b}")      # 101010 (binary)
print(f"{number:x}")      # 2a (hexadecimal)

# Floats
pi = 3.14159265
print(f"{pi:.2f}")        # 3.14 (2 decimal places)
print(f"{pi:.5f}")        # 3.14159 (5 decimal places)

# Percentages
score = 0.85
print(f"{score:.1%}")     # 85.0%

# Thousands separator
big_number = 1000000
print(f"{big_number:,}")  # 1,000,000

# Scientific notation
print(f"{big_number:.2e}")  # 1.00e+06

# Date formatting (with datetime)
from datetime import datetime
now = datetime.now()
print(f"Today is {now:%Y-%m-%d}")  # Today is 2024-10-14
```

---

## String Comparison

```python
# Equality
print("hello" == "hello")      # True
print("hello" == "Hello")      # False (case sensitive)

# Inequality
print("hello" != "world")      # True

# Lexicographic comparison (dictionary order)
print("apple" < "banana")      # True
print("zebra" > "apple")       # True

# Case-insensitive comparison
str1 = "Hello"
str2 = "hello"
print(str1.lower() == str2.lower())  # True
```

---

## Immutability of Strings

**Important:** Strings are immutable - you cannot change them in place!

```python
text = "Hello"

# This will cause an error
# text[0] = "h"  # TypeError: 'str' object does not support item assignment

# Instead, create a new string
text = "h" + text[1:]
print(text)  # "hello"

# Or use replace
text = "Hello"
text = text.replace("H", "h")
print(text)  # "hello"
```

---

## Checking Membership

```python
sentence = "Python is awesome"

# Check if substring exists
print("Python" in sentence)      # True
print("Java" in sentence)        # False

# Check if substring doesn't exist
print("Ruby" not in sentence)    # True

# Case-sensitive
print("python" in sentence)      # False
print("python" in sentence.lower())  # True
```

---

## Common String Patterns

### Reversing a String

```python
text = "Python"

# Method 1: Slicing
reversed_text = text[::-1]
print(reversed_text)  # "nohtyP"

# Method 2: reversed() function with join
reversed_text = "".join(reversed(text))
print(reversed_text)  # "nohtyP"
```

### Palindrome Check

```python
def is_palindrome(text):
    # Remove spaces and convert to lowercase
    cleaned = text.replace(" ", "").lower()
    return cleaned == cleaned[::-1]

print(is_palindrome("racecar"))        # True
print(is_palindrome("A man a plan a canal Panama"))  # True (ignoring case and spaces)
print(is_palindrome("hello"))          # False
```

### Counting Characters

```python
text = "Hello, World!"

# Count specific character
print(text.count("l"))      # 3
print(text.count("o"))      # 2

# Count substring
print(text.count("ll"))     # 1
```

### Removing Duplicates (Advanced)

```python
text = "hello"
unique = "".join(dict.fromkeys(text))
print(unique)  # "helo"
```

---

## Classwork

Practice your string manipulation skills!

### Exercise 1: String Basics

Create a file called `string_basics.py`:

```python
# Create variables
first_name = "John"
last_name = "Doe"
age = 25

# Concatenate strings
full_name = first_name + " " + last_name
print(f"Full name: {full_name}")

# String length
print(f"Full name length: {len(full_name)}")

# Uppercase and lowercase
print(f"Uppercase: {full_name.upper()}")
print(f"Lowercase: {full_name.lower()}")

# String repetition
print("=" * 50)

# f-string with expression
print(f"{first_name} will be {age + 1} next year")
```

### Exercise 2: String Methods Explorer

Create a file called `string_methods.py`:

```python
# Get input from user
text = input("Enter a sentence: ")

# Display various transformations
print("\nString Transformations:")
print(f"Original: {text}")
print(f"Uppercase: {text.upper()}")
print(f"Lowercase: {text.lower()}")
print(f"Title Case: {text.title()}")
print(f"Capitalized: {text.capitalize()}")
print(f"Swapped Case: {text.swapcase()}")
print(f"Reversed: {text[::-1]}")

# Display information
print(f"\nString Information:")
print(f"Length: {len(text)}")
print(f"Word count: {len(text.split())}")
print(f"Starts with 'The': {text.startswith('The')}")
print(f"Ends with '.': {text.endswith('.')}")
```

### Exercise 3: Email Validator

Create a file called `email_validator.py`:

```python
# Get email from user
email = input("Enter your email: ")

# Basic validation checks
has_at = "@" in email
has_dot = "." in email
not_starts_with_at = not email.startswith("@")
not_ends_with_at = not email.endswith("@")
no_spaces = " " not in email

# Display results
print(f"\nEmail Validation Results for: {email}")
print(f"Contains @: {has_at}")
print(f"Contains .: {has_dot}")
print(f"Doesn't start with @: {not_starts_with_at}")
print(f"Doesn't end with @: {not_ends_with_at}")
print(f"No spaces: {no_spaces}")

# Overall validity
is_valid = has_at and has_dot and not_starts_with_at and not_ends_with_at and no_spaces
print(f"\nOverall valid: {is_valid}")
```

### Exercise 4: Name Formatter

Create a file called `name_formatter.py`:

```python
# Get name from user (any format)
name = input("Enter your full name: ")

# Clean and format
name = name.strip()  # Remove extra spaces
name = name.title()  # Proper capitalization

# Extract parts
parts = name.split()
first_name = parts[0]
last_name = parts[-1]

# Display formatted versions
print(f"\nFormatted Names:")
print(f"Full name: {name}")
print(f"First name: {first_name}")
print(f"Last name: {last_name}")
print(f"Initials: {first_name[0]}.{last_name[0]}.")
print(f"Username suggestion: {first_name.lower()}{last_name[0].lower()}")
print(f"Formal: {last_name}, {first_name}")
```

---

## Assignment

### Project: Text Analysis Tool

Create a comprehensive text analysis program called `text_analyzer.py` that analyzes a piece of text and provides detailed statistics and transformations.

### Requirements

Your program should:

#### 1. **Get Input**

- Ask the user to enter a paragraph or sentence
- Store it in a variable

#### 2. **Basic Statistics**

Display:

- Total character count (including spaces)
- Character count (excluding spaces)
- Word count
- Sentence count (count periods, question marks, exclamation points)
- Average word length

#### 3. **Character Analysis**

Count and display:

- Number of uppercase letters
- Number of lowercase letters
- Number of digits
- Number of special characters (anything not alphanumeric)
- Most common character (you'll need to be creative here!)

#### 4. **Word Analysis**

- Find the longest word
- Find the shortest word
- Count occurrences of a specific word (ask user which word)
- Display all unique words (in alphabetical order)

#### 5. **Text Transformations**

Display the text in various formats:

- All uppercase
- All lowercase
- Title case
- Reverse order
- Every other character (t.h.i.s. .f.o.r.m.a.t)
- Censored version (replace vowels with *)

#### 6. **Search and Replace**

- Ask user for a word to search
- Display how many times it appears
- Ask for a replacement word
- Show the text with replacements

#### 7. **Formatting Display**

- Display text centered in a 60-character box
- Display text as a pyramid (first word, first two words, etc.)

### Code Requirements

- Use at least 10 different string methods
- Use string slicing at least 3 times
- Use f-strings for all output formatting
- Include comments explaining each section
- Display results in a well-organized, visually appealing format
- Handle edge cases (empty strings, single word, etc.)

### Example Output

```
═══════════════════════════════════════════════════════════
                    TEXT ANALYZER TOOL
═══════════════════════════════════════════════════════════

Enter your text:
The quick brown fox jumps over the lazy dog. Python is amazing!

═══════════════════════════════════════════════════════════
                   BASIC STATISTICS
═══════════════════════════════════════════════════════════
Total characters (with spaces): 62
Total characters (no spaces): 52
Total words: 11
Total sentences: 2
Average word length: 4.73 characters

═══════════════════════════════════════════════════════════
                  CHARACTER ANALYSIS
═══════════════════════════════════════════════════════════
Uppercase letters: 2
Lowercase letters: 50
Digits: 0
Special characters: 3
Most common character: 'o' (appears 4 times)

═══════════════════════════════════════════════════════════
                    WORD ANALYSIS
═══════════════════════════════════════════════════════════
Longest word: "amazing" (7 characters)
Shortest word: "is" (2 characters)

Enter a word to search for: the
The word "the" appears 2 times (case-insensitive)

Unique words (11 total):
amazing, brown, dog, fox, is, jumps, lazy, over, python, quick, the

═══════════════════════════════════════════════════════════
                  TEXT TRANSFORMATIONS
═══════════════════════════════════════════════════════════
Uppercase:
THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. PYTHON IS AMAZING!

Lowercase:
the quick brown fox jumps over the lazy dog. python is amazing!

Title Case:
The Quick Brown Fox Jumps Over The Lazy Dog. Python Is Amazing!

Reversed:
!gnizama si nohtyP .god yzal eht revo spmuj xof nworb kciuq ehT

Every Other Character:
Tequc rw o up vrthl zgdg yhniaann!

Censored (vowels replaced):
Th* q**ck br*wn f*x j*mps *v*r th* l*zy d*g. Pyth*n *s *m*z*ng!

═══════════════════════════════════════════════════════════
                   SEARCH AND REPLACE
═══════════════════════════════════════════════════════════
Enter word to replace: lazy
Enter replacement word: sleepy

Modified text:
The quick brown fox jumps over the sleepy dog. Python is amazing!

═══════════════════════════════════════════════════════════
                    FORMATTED DISPLAY
═══════════════════════════════════════════════════════════
Centered in box:
    The quick brown fox jumps over the lazy dog.    

Word Pyramid:
The
The quick
The quick brown
The quick brown fox
The quick brown fox jumps
The quick brown fox jumps over
The quick brown fox jumps over the
The quick brown fox jumps over the lazy
The quick brown fox jumps over the lazy dog.
The quick brown fox jumps over the lazy dog. Python
The quick brown fox jumps over the lazy dog. Python is

═══════════════════════════════════════════════════════════
              Thank you for using Text Analyzer!
═══════════════════════════════════════════════════════════
```

### Bonus Challenges (Optional)

1. **Palindrome Detector**: Check if the text (ignoring spaces and punctuation) is a palindrome
2. **Word Frequency**: Show top 5 most common words with their counts
3. **Readability Score**: Calculate a simple readability score (avg word length + avg sentence length)
4. **Pig Latin Translator**: Convert text to Pig Latin
5. **ROT13 Cipher**: Encode/decode text using ROT13
6. **ASCII Art**: Create a decorative border using ASCII characters
7. **Save to File**: Save the analysis results to a text file

### Submission Guidelines

- File name: `text_analyzer.py`
- Include detailed comments
- Test with various inputs (short, long, special characters)
- Handle edge cases gracefully
- Use professional formatting
- Estimated time: 90-120 minutes

### Grading Criteria

- ✅ Basic statistics (5 points)
- ✅ Character analysis (5 points)
- ✅ Word analysis (5 points)
- ✅ Text transformations (5 points)
- ✅ Search and replace (3 points)
- ✅ Formatted display (3 points)
- ✅ Code quality and comments (4 points)
- ✅ Professional output formatting (3 points)
- ✅ Edge case handling (2 points)
- ✅ Bonus challenges (up to 7 extra points)

**Total: 35 points (+ up to 7 bonus points)**

---

## Quick Reference

### String Creation

```python
single = 'text'
double = "text"
multi = """multiple
lines"""
```

### Common Methods

```python
.upper()          # UPPERCASE
.lower()          # lowercase
.title()          # Title Case
.strip()          # Remove whitespace
.replace(old, new)  # Replace substring
.split()          # Split into list
.join(list)       # Join list into string
.find(sub)        # Find substring index
.count(sub)       # Count occurrences
.startswith(sub)  # Check start
.endswith(sub)    # Check end
```

### Formatting

```python
f"{variable}"           # f-string
f"{num:.2f}"           # 2 decimal places
f"{text:>10}"          # Right align
f"{text:<10}"          # Left align
f"{text:^10}"          # Center
```

### String Operations

```python
len(s)            # Length
s[i]              # Index
s[start:end]      # Slice
s + t             # Concatenate
s * n             # Repeat
x in s            # Membership
```

---

## Summary

In this lesson, you learned:

- ✅ Creating and working with strings
- ✅ String indexing and slicing
- ✅ String concatenation and repetition
- ✅ Essential string methods (case, strip, replace, split, join)
- ✅ Checking string content (isalpha, isdigit, etc.)
- ✅ String formatting (%, .format(), f-strings)
- ✅ Escape characters and raw strings
- ✅ String comparison and membership testing
- ✅ String immutability
- ✅ Common string patterns and operations

**You now have comprehensive skills for text manipulation!** Strings are used everywhere in programming - from user interfaces to data processing to web development.

In the next lesson, we'll learn about type conversion and how to convert between different data types.

---

## Additional Resources

- **Python String Documentation:** [https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)
- **String Methods Reference:** [https://www.w3schools.com/python/python_ref_string.asp](https://www.w3schools.com/python/python_ref_string.asp)
- **Real Python - Strings:** [https://realpython.com/python-strings/](https://realpython.com/python-strings/)
- **f-String Guide:** [https://realpython.com/python-f-strings/](https://realpython.com/python-f-strings/)

**Next lesson:** [Type Conversion](type-conversion)
