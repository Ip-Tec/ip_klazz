# Sets

## What is a Set?

A set is a collection of unique items with no order. Sets are useful when you want to store multiple values but don't care about the order, and you don't want duplicates.

Think of a set like a bag of marbles where all marbles are different colors—no duplicates allowed.

## Key Characteristics

- **Unordered** — Items have no position or index
- **Unique** — No duplicates allowed
- **Mutable** — You can add and remove items
- **Unindexed** — You can't access items by position

## Creating Sets

You create a set using curly braces `{}`:

```python
colors = {"red", "blue", "green"}
print(colors)
```

**Output:** `{'red', 'blue', 'green'}` (order may vary)

### Sets with Different Data Types

```python
numbers = {1, 2, 3, 4, 5}
mixed = {1, "hello", 3.14, True}

print(numbers)   # {1, 2, 3, 4, 5}
print(mixed)     # {1, 'hello', 3.14, True}
```

### Creating an Empty Set

```python
# ❌ This creates an empty dictionary, not a set
empty = {}
print(type(empty))  # <class 'dict'>

# ✅ This creates an empty set
empty = set()
print(type(empty))  # <class 'set'>
```

### Automatic Removal of Duplicates

```python
numbers = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4}

print(numbers)  # {1, 2, 3, 4}
```

Notice how duplicates are automatically removed!

## Adding Items

### `add()` — Add Single Item

```python
colors = {"red", "blue"}

colors.add("green")
print(colors)  # {'red', 'blue', 'green'}
```

If the item already exists, it won't be added again:

```python
colors = {"red", "blue"}

colors.add("red")
print(colors)  # {'red', 'blue'} - no change
```

### `update()` — Add Multiple Items

```python
colors = {"red", "blue"}

colors.update(["green", "yellow"])
print(colors)  # {'red', 'blue', 'green', 'yellow'}
```

## Removing Items

### `remove()` — Remove Specific Item

```python
colors = {"red", "blue", "green"}

colors.remove("blue")
print(colors)  # {'red', 'green'}
```

Error if item doesn't exist:

```python
colors = {"red", "blue"}

colors.remove("yellow")  # ❌ KeyError
```

### `discard()` — Remove Without Error

```python
colors = {"red", "blue"}

colors.discard("yellow")  # No error, even if not found
print(colors)  # {'red', 'blue'}
```

### `pop()` — Remove Random Item

```python
colors = {"red", "blue", "green"}

removed = colors.pop()
print(removed)  # Could be any color
print(colors)   # Two colors left
```

### `clear()` — Remove All Items

```python
colors = {"red", "blue", "green"}

colors.clear()
print(colors)  # set()
```

## Checking Membership

```python
colors = {"red", "blue", "green"}

if "red" in colors:
    print("Red is in the set")

if "yellow" not in colors:
    print("Yellow is not in the set")
```

## Looping Through Sets

```python
colors = {"red", "blue", "green"}

for color in colors:
    print(color)
```

**Output:**

```sh
red
blue
green
```

(Order may vary since sets are unordered)

## Set Operations

Sets support mathematical operations useful for comparing collections.

### Union — Combine Two Sets

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

union = set1 | set2
print(union)  # {1, 2, 3, 4, 5}

# Or using method
union = set1.union(set2)
print(union)  # {1, 2, 3, 4, 5}
```

### Intersection — Common Items

```python
set1 = {1, 2, 3}
set2 = {2, 3, 4}

intersection = set1 & set2
print(intersection)  # {2, 3}

# Or using method
intersection = set1.intersection(set2)
print(intersection)  # {2, 3}
```

### Difference — Items in First Set But Not Second

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

difference = set1 - set2
print(difference)  # {1, 2}

# Or using method
difference = set1.difference(set2)
print(difference)  # {1, 2}
```

### Symmetric Difference — Items in Either Set But Not Both

```python
set1 = {1, 2, 3}
set2 = {2, 3, 4}

sym_diff = set1 ^ set2
print(sym_diff)  # {1, 4}

# Or using method
sym_diff = set1.symmetric_difference(set2)
print(sym_diff)  # {1, 4}
```

## Converting to Set

Sets are great for removing duplicates from a list:

```python
numbers = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]

unique = set(numbers)
print(unique)  # {1, 2, 3, 4}
```

Convert back to list if needed:

```python
numbers = [1, 2, 2, 3, 3, 3]

unique_list = list(set(numbers))
print(unique_list)  # [1, 2, 3] (order may vary)
```

## Real-World Examples

### Example 1: Remove Duplicate Data

```python
emails = ["john@example.com", "jane@example.com", "john@example.com", "bob@example.com"]

unique_emails = set(emails)
print(unique_emails)  # {'john@example.com', 'jane@example.com', 'bob@example.com'}
```

### Example 2: Find Common Interests

```python
alice_interests = {"reading", "gaming", "hiking", "cooking"}
bob_interests = {"gaming", "cooking", "sports", "music"}

common = alice_interests & bob_interests
print(common)  # {'gaming', 'cooking'}
```

### Example 3: Find Students Not in Class Today

```python
all_students = {"Alice", "Bob", "Charlie", "Diana", "Eve"}
present = {"Alice", "Bob", "Eve"}

absent = all_students - present
print(absent)  # {'Charlie', 'Diana'}
```

### Example 4: Combine Two Lists Without Duplicates

```python
list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

combined = list(set(list1) | set(list2))
print(combined)  # [1, 2, 3, 4, 5, 6]
```

### Example 5: Check for Duplicate Usernames

```python
usernames = ["john123", "jane456", "john123", "bob789", "alice", "bob789"]

if len(usernames) != len(set(usernames)):
    print("Duplicate usernames found!")
    
duplicates = [name for name in set(usernames) if usernames.count(name) > 1]
print(duplicates)  # ['john123', 'bob789']
```

## Set Methods Summary

| Method | Description |
|--------|-------------|
| `add()` | Add single item |
| `update()` | Add multiple items |
| `remove()` | Remove item (error if not found) |
| `discard()` | Remove item (no error) |
| `pop()` | Remove random item |
| `clear()` | Remove all items |
| `union()` | Combine sets |
| `intersection()` | Common items |
| `difference()` | Items in first but not second |
| `symmetric_difference()` | Items in either but not both |

## Sets vs Lists vs Tuples

| Feature | Set | List | Tuple |
|---------|-----|------|-------|
| Ordered | No | Yes | Yes |
| Mutable | Yes | Yes | No |
| Duplicates | No | Yes | Yes |
| Indexed | No | Yes | Yes |
| Use Case | Unique items | Changeable data | Immutable data |

## Common Mistakes

**1. Confusing empty set and empty dictionary**

```python
# ❌ This is a dictionary
empty = {}
print(type(empty))  # <class 'dict'>

# ✅ This is a set
empty = set()
print(type(empty))  # <class 'set'>
```

**2. Trying to access by index**

```python
colors = {"red", "blue", "green"}

# ❌ Sets don't have indices
print(colors[0])  # TypeError

# ✅ Check membership instead
if "red" in colors:
    print("Red is in the set")
```

**3. Expecting order in sets**

```python
# ❌ Don't rely on order
colors = {"red", "blue", "green"}
first = colors.pop()  # You don't know which one you'll get

# ✅ Use a list if order matters
colors = ["red", "blue", "green"]
first = colors[0]  # Always gets "red"
```

**4. Confusing `remove()` and `discard()`**

```python
colors = {"red", "blue"}

# remove() errors if item not found
colors.remove("yellow")  # ❌ KeyError

# discard() doesn't error
colors.discard("yellow")  # ✅ No error
```

## Key Takeaways

- Sets are unordered collections of unique items
- Use `{}` to create a set, `set()` for empty sets
- Sets automatically remove duplicates
- Use `add()` to add items, `remove()` or `discard()` to remove
- Sets support mathematical operations: union, intersection, difference
- Sets are useful for finding unique values, common items, and comparisons
- Use sets when order doesn't matter and duplicates aren't needed
- Use lists when order matters or duplicates are okay

---

## Practice Exercises

1. Create two sets of numbers and find their union, intersection, and difference.
2. Write a program that removes duplicates from a list using sets.
3. Create a program that finds common interests between two people.
4. Build a program that checks if all items in one set are in another.
5. Create a program that finds unique characters in a string using sets.

---

## Solutions

```python

# # Exercise 1: Set Operations
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

print(f"Set A: {set_a}")
print(f"Set B: {set_b}")

print(f"Union (A | B): {set_a | set_b}")
print(f"Intersection (A & B): {set_a & set_b}")
print(f"Difference (A - B): {set_a - set_b}")
print(f"Symmetric Difference (A ^ B): {set_a ^ set_b}")

# Exercise 2: Remove Duplicates from a List
my_list_with_duplicates = [1, 2, 2, 3, 4, 4, 5, 1, 6, 7, 7]
unique_list = list(set(my_list_with_duplicates))

print(f"\nOriginal list: {my_list_with_duplicates}")
print(f"List with duplicates removed: {unique_list}")

# Exercise 3: Find Common Interests
person1_interests = {"reading", "hiking", "coding", "music"}
person2_interests = {"coding", "gaming", "hiking", "movies"}

common_interests = person1_interests.intersection(person2_interests)

print(f"\nPerson 1's interests: {person1_interests}")
print(f"Person 2's interests: {person2_interests}")
print(f"Common interests: {common_interests}")

# Exercise 4: Check if all items in one set are in another
set_small = {1, 2, 3}
set_large = {1, 2, 3, 4, 5}
set_other = {1, 6}

print(f"\nIs {set_small} a subset of {set_large}? {set_small.issubset(set_large)}")
print(f"Is {set_large} a superset of {set_small}? {set_large.issuperset(set_small)}")
print(f"Is {set_other} a subset of {set_large}? {set_other.issubset(set_large)}")

# Exercise 5: Unique Characters in a String
my_string = "hello world"
unique_chars = set(my_string)

print(f"\nOriginal string: '{my_string}'")
print(f"Unique characters: {unique_chars}")


```

---
> **Next lesson:** [Dictionaries](dictionaries)
