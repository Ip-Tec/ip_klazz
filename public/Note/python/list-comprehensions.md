
# List Comprehensions

## What is a List Comprehension?

A list comprehension is a short and elegant way to create a new list by processing items from an existing list. Instead of writing multiple lines of code with a loop, you can do it in one line.

Think of it as a powerful shortcut for creating lists.

## The Long Way vs The Short Way

### Without List Comprehension

```python
numbers = [1, 2, 3, 4, 5]
doubled = []

for num in numbers:
    doubled.append(num * 2)

print(doubled)  # [2, 4, 6, 8, 10]
```

### With List Comprehension

```python
numbers = [1, 2, 3, 4, 5]
doubled = [num * 2 for num in numbers]

print(doubled)  # [2, 4, 6, 8, 10]
```

Much shorter! Same result.

## Basic Syntax

```python
new_list = [expression for item in iterable]
```

Breaking it down:

- **expression** — What you do to each item (e.g., `num * 2`)
- **for item in iterable** — Loop through items (e.g., `for num in numbers`)

## Simple Examples

### Example 1: Square Numbers

```python
numbers = [1, 2, 3, 4, 5]
squared = [num ** 2 for num in numbers]

print(squared)  # [1, 4, 9, 16, 25]
```

### Example 2: Convert to Uppercase

```python
words = ["apple", "banana", "orange"]
uppercase = [word.upper() for word in words]

print(uppercase)  # ['APPLE', 'BANANA', 'ORANGE']
```

### Example 3: Create a Range of Numbers

```python
numbers = [num for num in range(1, 6)]

print(numbers)  # [1, 2, 3, 4, 5]
```

### Example 4: Extract Characters from Strings

```python
text = "hello"
chars = [char for char in text]

print(chars)  # ['h', 'e', 'l', 'l', 'o']
```

## List Comprehension with Conditions

You can add an `if` statement to filter items:

```python
new_list = [expression for item in iterable if condition]
```

### Example 1: Get Only Even Numbers

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [num for num in numbers if num % 2 == 0]

print(evens)  # [2, 4, 6, 8, 10]
```

### Example 2: Get Only Words Longer Than 5 Characters

```python
words = ["apple", "banana", "cat", "dragon", "dog"]
long_words = [word for word in words if len(word) > 5]

print(long_words)  # ['banana', 'dragon']
```

### Example 3: Get Numbers Greater Than 5

```python
numbers = [3, 7, 2, 8, 1, 9, 4]
above_five = [num for num in numbers if num > 5]

print(above_five)  # [7, 8, 9]
```

## List Comprehension with if-else

You can add `else` to handle items that don't meet the condition:

```python
new_list = [expression_if_true if condition else expression_if_false for item in iterable]
```

### Example 1: Mark Even and Odd

```python
numbers = [1, 2, 3, 4, 5]
result = ["even" if num % 2 == 0 else "odd" for num in numbers]

print(result)  # ['odd', 'even', 'odd', 'even', 'odd']
```

### Example 2: Double or Keep the Same

```python
numbers = [1, 2, 3, 4, 5]
result = [num * 2 if num > 3 else num for num in numbers]

print(result)  # [1, 2, 3, 8, 10]
```

Notice: Numbers greater than 3 are doubled, others stay the same.

## Nested List Comprehensions

You can nest list comprehensions to work with multiple levels:

### Example 1: Flatten a Matrix

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat = [num for row in matrix for num in row]

print(flat)  # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Example 2: Create a Multiplication Table

```python
table = [x * y for x in range(1, 4) for y in range(1, 4)]

print(table)  # [1, 2, 3, 2, 4, 6, 3, 6, 9]
```

### Example 3: Nested List Comprehension with Condition

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
evens = [num for row in matrix for num in row if num % 2 == 0]

print(evens)  # [2, 4, 6, 8]
```

## Real-World Examples

### Example 1: Process User Data

```python
users = ["john123", "JANE456", "bob789", "ALICE"]
formatted = [user.lower() for user in users]

print(formatted)  # ['john123', 'jane456', 'bob789', 'alice']
```

### Example 2: Filter Scores Above 80

```python
scores = [75, 85, 90, 70, 88, 92, 78]
passing = [score for score in scores if score >= 80]

print(passing)  # [85, 90, 88, 92]
```

### Example 3: Extract File Extensions

```python
files = ["document.pdf", "image.jpg", "video.mp4", "music.mp3"]
extensions = [file.split(".")[-1] for file in files]

print(extensions)  # ['pdf', 'jpg', 'mp4', 'mp3']
```

### Example 4: Convert Strings to Integers

```python
string_numbers = ["1", "2", "3", "4", "5"]
integers = [int(num) for num in string_numbers]

print(integers)  # [1, 2, 3, 4, 5]
```

### Example 5: Create Dictionary Keys

```python
words = ["apple", "banana", "orange"]
word_lengths = {word: len(word) for word in words}

print(word_lengths)  # {'apple': 5, 'banana': 6, 'orange': 6}
```

## List Comprehension vs For Loop

When should you use list comprehensions?

### Use List Comprehension When

- You're creating a new list from an existing one
- The operation is simple and readable
- You want concise, elegant code

### Use For Loop When

- You need multiple statements inside the loop
- The logic is complex and hard to fit in one line
- You're doing something other than creating a list

### Example of Too Complex for List Comprehension

```python
# ❌ Hard to read
result = [print(f"Processing {num}") or num * 2 for num in range(5)]

# ✅ Better with a loop
for num in range(5):
    print(f"Processing {num}")
    result = num * 2
```

## Common Mistakes

**1. Forgetting the `for` clause**

```python
# ❌ Wrong
doubled = [num * 2 in numbers]

# ✅ Correct
doubled = [num * 2 for num in numbers]
```

**2. Putting the condition in the wrong place**

```python
# ❌ Hard to read
even_doubled = [num * 2 for num in numbers if num % 2 == 0]  # Still confusing sometimes

# ✅ Clear
even_doubled = [num * 2 for num in numbers if num % 2 == 0]  # Better with comments
```

**3. Making it too complex to read**

```python
# ❌ Too complex
result = [x.split("_")[0].upper() if len(x) > 3 else x.lower() for x in data for x in x.split(",")]

# ✅ Better
result = []
for item in data:
    if len(item) > 3:
        result.append(item.split("_")[0].upper())
    else:
        result.append(item.lower())
```

**4. Not realizing it returns a new list**

```python
# Remember: list comprehension creates a NEW list
original = [1, 2, 3]
doubled = [num * 2 for num in original]

print(original)  # [1, 2, 3] - unchanged
print(doubled)   # [2, 4, 6]
```

## Key Takeaways

- List comprehensions create new lists in a single line
- Syntax: `[expression for item in iterable]`
- Add conditions with `if`: `[expression for item in iterable if condition]`
- Add if-else with: `[expr_if_true if condition else expr_if_false for item in iterable]`
- You can nest list comprehensions for complex operations
- Use them when they're readable—don't sacrifice clarity for brevity
- List comprehensions are faster than for loops for simple operations

---

## Practice Exercises

1. Create a list of numbers 1-10 and use list comprehension to square each number.
2. Filter a list of words to keep only those with more than 4 letters.
3. Convert a list of strings to integers using list comprehension.
4. Create a list of even numbers from 1-20 using list comprehension.
5. Create a list that marks each number as "even" or "odd".

---

## Solutions

```python
# Exercise 1: Square each number
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squared_numbers = [num ** 2 for num in numbers]
print(f"Squared numbers: {squared_numbers}")

# Exercise 2: Filter words longer than 4 letters
words = ["apple", "banana", "cat", "dog", "elephant", "frog"]
long_words = [word for word in words if len(word) > 4]
print(f"Words longer than 4 letters: {long_words}")

# Exercise 3: Convert strings to integers
string_numbers = ["10", "25", "30", "42", "5"]
integer_numbers = [int(s) for s in string_numbers]
print(f"Converted to integers: {integer_numbers}")

# Exercise 4: Create a list of even numbers from 1-20
even_numbers = [num for num in range(1, 21) if num % 2 == 0]
print(f"Even numbers from 1-20: {even_numbers}")

# Exercise 5: Mark each number as "even" or "odd"
numbers_to_check = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_odd_list = ["even" if num % 2 == 0 else "odd" for num in numbers_to_check]
print(f"Even/Odd list: {even_odd_list}")

```

---

> **Next lesson:** [Tuples](tuples)

---
