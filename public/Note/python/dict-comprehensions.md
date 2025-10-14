# Dictionary Comprehensions

## What is a Dictionary Comprehension?

A dictionary comprehension is a concise way to create a new dictionary by processing items from an existing dictionary, list, or other iterable. It's similar to list comprehensions, but for dictionaries.

Instead of writing multiple lines of code with loops, you can create a dictionary in one line.

## The Long Way vs The Short Way

### Without Dictionary Comprehension

```python
numbers = [1, 2, 3, 4, 5]
squared = {}

for num in numbers:
    squared[num] = num ** 2

print(squared)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

### With Dictionary Comprehension

```python
numbers = [1, 2, 3, 4, 5]
squared = {num: num ** 2 for num in numbers}

print(squared)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

Much shorter! Same result.

## Basic Syntax

```python
new_dict = {key_expression: value_expression for item in iterable}
```

Breaking it down:

- **key_expression** — What becomes the key
- **value_expression** — What becomes the value
- **for item in iterable** — Loop through items

## Simple Examples

### Example 1: Square Numbers as Key and Value

```python
numbers = [1, 2, 3, 4, 5]
squared = {num: num ** 2 for num in numbers}

print(squared)  # {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}
```

### Example 2: Create Dictionary from List of Words

```python
words = ["apple", "banana", "orange"]
word_lengths = {word: len(word) for word in words}

print(word_lengths)  # {'apple': 5, 'banana': 6, 'orange': 6}
```

### Example 3: Convert List of Tuples to Dictionary

```python
pairs = [("a", 1), ("b", 2), ("c", 3)]
result = {key: value for key, value in pairs}

print(result)  # {'a': 1, 'b': 2, 'c': 3}
```

### Example 4: Invert Dictionary (Swap Keys and Values)

```python
original = {"a": 1, "b": 2, "c": 3}
inverted = {value: key for key, value in original.items()}

print(inverted)  # {1: 'a', 2: 'b', 3: 'c'}
```

### Example 5: Create Dictionary from Range

```python
times_table = {num: num * 7 for num in range(1, 6)}

print(times_table)  # {1: 7, 2: 14, 3: 21, 4: 28, 5: 35}
```

## Dictionary Comprehension with Conditions

You can add an `if` statement to filter items:

```python
new_dict = {key: value for item in iterable if condition}
```

### Example 1: Keep Only Even Numbers

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = {num: num ** 2 for num in numbers if num % 2 == 0}

print(evens)  # {2: 4, 4: 16, 6: 36, 8: 64, 10: 100}
```

### Example 2: Keep Only Long Words

```python
words = ["apple", "cat", "banana", "dog", "orange"]
long_words = {word: len(word) for word in words if len(word) > 4}

print(long_words)  # {'apple': 5, 'banana': 6, 'orange': 6}
```

### Example 3: Filter Dictionary Items

```python
scores = {"Alice": 85, "Bob": 92, "Charlie": 78, "Diana": 88}
passing = {name: score for name, score in scores.items() if score >= 80}

print(passing)  # {'Alice': 85, 'Bob': 92, 'Diana': 88}
```

## Dictionary Comprehension with if-else

You can add `else` to handle items that don't meet the condition:

```python
new_dict = {key: value_if_true if condition else value_if_false for item in iterable}
```

### Example 1: Mark Scores as Pass or Fail

```python
scores = {"Alice": 85, "Bob": 92, "Charlie": 78, "Diana": 65}
status = {name: "Pass" if score >= 80 else "Fail" for name, score in scores.items()}

print(status)
# {'Alice': 'Pass', 'Bob': 'Pass', 'Charlie': 'Fail', 'Diana': 'Fail'}
```

### Example 2: Categorize Numbers

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
categories = {num: "even" if num % 2 == 0 else "odd" for num in numbers}

print(categories)
# {1: 'odd', 2: 'even', 3: 'odd', 4: 'even', 5: 'odd', 6: 'even', 7: 'odd', 8: 'even', 9: 'odd', 10: 'even'}
```

### Example 3: Price Adjustment

```python
prices = {"apple": 0.5, "banana": 0.3, "orange": 0.6, "grape": 0.8}
adjusted = {item: price * 0.9 if price > 0.5 else price for item, price in prices.items()}

print(adjusted)
# {'apple': 0.45, 'banana': 0.3, 'orange': 0.54, 'grape': 0.72}
```

## Nested Dictionary Comprehensions

You can nest dictionary comprehensions for complex operations:

### Example 1: Create Multiplication Table

```python
table = {x: {y: x * y for y in range(1, 4)} for x in range(1, 4)}

print(table)
# {1: {1: 1, 2: 2, 3: 3}, 2: {1: 2, 2: 4, 3: 6}, 3: {1: 3, 2: 6, 3: 9}}
```

### Example 2: Group Numbers by Category

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
grouped = {
    "even": [n for n in numbers if n % 2 == 0],
    "odd": [n for n in numbers if n % 2 != 0]
}

print(grouped)
# {'even': [2, 4, 6, 8, 10], 'odd': [1, 3, 5, 7, 9]}
```

## Real-World Examples

### Example 1: Count Character Frequency

```python
text = "hello"
frequency = {char: text.count(char) for char in text}

print(frequency)  # {'h': 1, 'e': 1, 'l': 2, 'o': 1}
```

### Example 2: Convert Temperature

```python
celsius = [0, 10, 20, 30, 40]
fahrenheit = {c: (c * 9/5) + 32 for c in celsius}

print(fahrenheit)
# {0: 32.0, 10: 50.0, 20: 68.0, 30: 86.0, 40: 104.0}
```

### Example 3: Create Student Grade Dictionary

```python
students = ["Alice", "Bob", "Charlie", "Diana"]
grades = {name: 0 for name in students}

print(grades)  # {'Alice': 0, 'Bob': 0, 'Charlie': 0, 'Diana': 0}
```

### Example 4: Filter and Transform

```python
data = {"a": 1, "b": 2, "c": 3, "d": 4, "e": 5}
filtered = {k: v * 10 for k, v in data.items() if v > 2}

print(filtered)  # {'c': 30, 'd': 40, 'e': 50}
```

### Example 5: Create Lookup Table

```python
colors = ["red", "green", "blue", "yellow"]
color_codes = {color: i for i, color in enumerate(colors)}

print(color_codes)  # {'red': 0, 'green': 1, 'blue': 2, 'yellow': 3}
```

## Dictionary Comprehension vs For Loop

When should you use dictionary comprehensions?

### Use Dictionary Comprehension When

- You're creating a new dictionary from an iterable
- The operation is simple and readable
- You want concise, elegant code

### Use For Loop When

- You need multiple statements inside the loop
- The logic is complex and hard to fit in one line
- You're doing something other than creating a dictionary

### Example of Too Complex for Dictionary Comprehension

```python
# ❌ Hard to read
result = {num: print(f"Processing {num}") or num * 2 for num in range(5)}

# ✅ Better with a loop
result = {}
for num in range(5):
    print(f"Processing {num}")
    result[num] = num * 2
```

## Common Mistakes

**1. Forgetting the colon between key and value**

```python
# ❌ Wrong
squared = {num, num ** 2 for num in range(5)}

# ✅ Correct
squared = {num: num ** 2 for num in range(5)}
```

**2. Wrong order in unpacking**

```python
# ❌ Wrong
pairs = [("a", 1), ("b", 2)]
result = {value: key for key, value in pairs}  # Oops!

# ✅ Correct
result = {key: value for key, value in pairs}
```

**3. Making it too complex**

```python
# ❌ Too complex
result = {
    k: v * 2 if v % 2 == 0 else v * 3
    for k, v in data.items()
    if k not in exclude and v > 0
}

# ✅ Better - break it into steps or use a loop
result = {}
for k, v in data.items():
    if k in exclude or v <= 0:
        continue
    result[k] = v * 2 if v % 2 == 0 else v * 3
```

**4. Not realizing it creates a new dictionary**

```python
original = {"a": 1, "b": 2}
modified = {k: v * 2 for k, v in original.items()}

print(original)   # {'a': 1, 'b': 2} - unchanged
print(modified)   # {'a': 2, 'b': 4}
```

## Key Takeaways

- Dictionary comprehensions create new dictionaries in a single line
- Syntax: `{key: value for item in iterable}`
- Add conditions with `if`: `{key: value for item in iterable if condition}`
- Add if-else with: `{key: value_if_true if condition else value_if_false for item in iterable}`
- You can nest dictionary comprehensions for complex operations
- Use them when readable—don't sacrifice clarity for brevity
- Dictionary comprehensions are faster than for loops for simple operations

---

## Practice Exercises

1. Create a dictionary where keys are numbers 1-5 and values are their squares.
2. Convert a list of words to a dictionary with words as keys and their lengths as values.
3. Filter a dictionary to keep only items with values greater than 50.
4. Create a dictionary that marks each number from 1-10 as "even" or "odd".
5. Create a nested dictionary representing a multiplication table (3x3).

---

## Solutions

```python

# Exercise 1: Keys as numbers 1-5, values as their squares

squared_dict = {num: num**2 for num in range(1, 6)}
print(f"Squared dictionary: {squared_dict}")

# Exercise 2: Words as keys, lengths as values

words_list = ["apple", "banana", "cherry", "date", "elderberry"]
word_length_dict = {word: len(word) for word in words_list}
print(f"Word lengths dictionary: {word_length_dict}")

# Exercise 3: Filter dictionary for values > 50

data_dict = {"a": 10, "b": 60, "c": 30, "d": 80, "e": 50}
filtered_dict = {key: value for key, value in data_dict.items() if value > 50}
print(f"Filtered dictionary (values > 50): {filtered_dict}")

# Exercise 4: Mark numbers 1-10 as "even" or "odd"

even_odd_dict = {num: "even" if num % 2 == 0 else "odd" for num in range(1, 11)}
print(f"Even/Odd dictionary: {even_odd_dict}")

# Exercise 5: Nested dictionary for a 3x3 multiplication table

multiplication_table = {
    row: {col: row * col for col in range(1, 4)}
    for row in range(1, 4)
}
print(f"3x3 Multiplication Table: {multiplication_table}")

# Exercise 6: Create a dictionary from two lists (keys and values)

keys = ["name", "age", "city"]
values = ["Alice", 30, "New York"]
person_dict = {keys[i]: values[i] for i in range(len(keys))}
print(f"Dictionary from two lists: {person_dict}")

```

---

> **Next lesson:** [Nested Data Structures](nested-structures)

---
