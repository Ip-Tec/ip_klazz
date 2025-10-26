# Regular Expressions (Regex) in Python

## What are Regular Expressions?

A **Regular Expression**, or **Regex**, is a special sequence of characters that defines a search pattern. It's like a mini-language for pattern matching in strings. Regex is incredibly powerful for tasks like:

- Validating user input (e.g., emails, phone numbers).
- Finding and replacing text.
- Scraping data from web pages or log files.

Python's built-in **re** module provides all the tools you need to work with regular expressions.

## The **re** Module

To get started, you need to import the **re** module.

```python
import re
```

### Core Functions

- **re.search(pattern, string)**: Scans through a string, looking for the **first** location where the pattern produces a match. Returns a **match object** if found, otherwise **None**.
- **re.match(pattern, string)**: Similar to **search**, but it only checks for a match at the **beginning** of the string.
- **re.findall(pattern, string)**: Finds **all** non-overlapping matches of the pattern in the string and returns them as a list of strings.
- **re.sub(pattern, repl, string)**: Replaces all occurrences of the pattern in the string with **repl** (a replacement string).

## Basic Regex Patterns

Regex patterns are built from a combination of literal characters and special metacharacters.

### Metacharacters

- **.** (Dot): Matches any single character except a newline.
- **^** (Caret): Matches the start of the string.
- **$** (Dollar): Matches the end of the string.
- ***** (Asterisk): Matches the preceding character 0 or more times.
- **+** (Plus): Matches the preceding character 1 or more times.
- **?** (Question Mark): Matches the preceding character 0 or 1 time.
- **\**: Escapes a special character (e.g., **\.** matches a literal dot).

### Character Sets **[]**

- **[abc]**: Matches any single character **a**, **b**, or **c**.
- **[a-z]**: Matches any lowercase letter.
- **[A-Z]**: Matches any uppercase letter.
- **[0-9]**: Matches any digit.
- **[^abc]**: Matches any character *except* **a**, **b**, or **c**.

### Special Sequences

- **\d**: Matches any digit (equivalent to **[0-9]**).
- **\D**: Matches any non-digit.
- **\w**: Matches any alphanumeric character (letters, numbers, and underscore).
- **\W**: Matches any non-alphanumeric character.
- **\s**: Matches any whitespace character (space, tab, newline).
- **\S**: Matches any non-whitespace character.

## Using **re.search()**

**re.search()** returns a match object, which contains information about the match.

```python
import re

text = "The quick brown fox jumps over the lazy dog."

# Search for the word "fox"
match = re.search(r"fox", text)

if match:
    print("Match found!")
    print(f"Span: {match.span()}")     # (start, end) indices of the match
    print(f"Start: {match.start()}")
    print(f"End: {match.end()}")
    print(f"Group: {match.group(0)}") # The matched string
```

**Note on **r"..."** (Raw Strings):** It's a best practice to use raw strings for regex patterns in Python. It prevents backslashes from being interpreted as escape sequences.

## Using **re.findall()**

**re.findall()** is useful for extracting all occurrences of a pattern.

```python
text = "My numbers are 123, 456, and 789."

# Find all sequences of digits
numbers = re.findall(r"\d+", text)
print(numbers) # Output: ['123', '456', '789']
```

## Using Groups **()**

Parentheses **()** create a **capturing group**. This allows you to extract specific parts of a match.

### Example: Parsing Email Addresses

```python
text = "Contact us at support@example.com or sales@example.org."

# Pattern with two groups: one for the username, one for the domain
pattern = r"(\w+)@(\w+\.\w+)"

matches = re.findall(pattern, text)
print(matches) # Output: [('support', 'example.com'), ('sales', 'example.org')]

# Using search with groups
match = re.search(pattern, text)
if match:
    print(f"Full match: {match.group(0)}")
    print(f"Username: {match.group(1)}")
    print(f"Domain: {match.group(2)}")
```

## Real-World Example: Validating a Phone Number

Let's create a regex to validate a simple US phone number format (e.g., **123-456-7890**).

```python
def is_valid_phone(number):
    # Pattern: 3 digits, a hyphen, 3 digits, a hyphen, 4 digits
    pattern = r"^\d{3}-\d{3}-\d{4}$"
    if re.match(pattern, number):
        return True
    return False

print(is_valid_phone("123-456-7890")) # True
print(is_valid_phone("123-456-789"))  # False
print(is_valid_phone("abc-def-ghij")) # False
```

- **^** and **$** ensure the entire string must match the pattern.
- **\d{3}** is a **quantifier** that matches exactly 3 digits.

## Key Takeaways

- Regex is a powerful tool for string pattern matching.
- The **re** module is Python's interface for regex.
- Use **re.search()** to find the first match, **re.findall()** to find all matches, and **re.sub()** to replace text.
- Metacharacters like **.**, *, **+**, **^**, **$** give your patterns flexibility.
- Character sets **[]** and special sequences **\d**, **\w**, **\s** simplify common patterns.
- Use parentheses **()** to create capturing groups for extracting data.
- Always use raw strings **r"..."** for regex patterns.

## Practice Exercises

1. **Find all hashtags**: Write a regex to find all hashtags (e.g., **#python**, **#regex**) in a string.
2. **Validate an email**: Write a function that uses regex to check if a string is a valid email address (a simple version is fine, e.g., **<username@domain.com>**).
3. **Remove extra whitespace**: Use **re.sub()** to replace multiple whitespace characters in a string with a single space.

---

## Solutions

```python
import re

# Exercise 1: Find all hashtags
text1 = "I love learning #python and #regex! #coding is fun."
hashtags = re.findall(r"#\w+", text1)
print(f"Hashtags found: {hashtags}")

# Exercise 2: Validate an email
def is_valid_email(email):
    # Simple pattern: word chars + @ + word chars + . + word chars
    pattern = r"^[\w\.-]+@[\w\.-]+\.\w+$"
    return re.match(pattern, email) is not None

print(f"Is 'test@example.com' valid? {is_valid_email('test@example.com')}")
print(f"Is 'invalid-email' valid? {is_valid_email('invalid-email')}")

# Exercise 3: Remove extra whitespace
text3 = "This    string   has    too much   whitespace."
cleaned_text = re.sub(r"\s+", " ", text3)
print(f"Cleaned text: '{cleaned_text}'")

```

---

> **Next lesson:** [Working with Dates and Times](datetime)

---
