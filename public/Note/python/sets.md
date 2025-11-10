# Sets

Sets are unordered collections of unique elements. They're perfect for removing duplicates, membership testing, and mathematical set operations like union and intersection.

## Creating Sets

### Basic Set Creation

```python
# Empty set (must use set(), not {})
empty_set = set()

# Set with items
numbers = {1, 2, 3, 4, 5}
fruits = {"apple", "banana", "cherry"}

# Mixed types
mixed = {1, "hello", 3.14, True}

# Using set() constructor
my_set = set([1, 2, 3, 4])
letters = set("Python")  # {'P', 'y', 't', 'h', 'o', 'n'}

# Sets automatically remove duplicates
numbers = {1, 2, 2, 3, 3, 3}
print(numbers)  # {1, 2, 3}
```

### Important Note

```python
# Wrong - creates empty dictionary
empty = {}
print(type(empty))  # <class 'dict'>

# Correct - creates empty set
empty = set()
print(type(empty))  # <class 'set'>
```

---

## Set Characteristics

### Unordered

```python
# Sets don't maintain order
numbers = {5, 3, 1, 4, 2}
print(numbers)  # Order may vary: {1, 2, 3, 4, 5} or different

# Can't access by index
# print(numbers[0])  # TypeError: 'set' object is not subscriptable
```

### Unique Elements

```python
# Duplicates automatically removed
numbers = {1, 2, 2, 3, 3, 3, 4}
print(numbers)  # {1, 2, 3, 4}

# Remove duplicates from list
my_list = [1, 2, 2, 3, 3, 3, 4]
unique = set(my_list)
print(unique)  # {1, 2, 3, 4}
```

### Mutable (but elements must be immutable)

```python
# Can add/remove from set
numbers = {1, 2, 3}
numbers.add(4)  # Works

# Elements must be immutable
# bad_set = {[1, 2], [3, 4]}  # TypeError: unhashable type: 'list'

# Use tuples instead of lists
good_set = {(1, 2), (3, 4)}  # Works!
```

---

## Adding Elements

### add() - Add Single Element

```python
fruits = {"apple", "banana"}
fruits.add("cherry")
print(fruits)  # {"apple", "banana", "cherry"}

# Adding existing element does nothing
fruits.add("apple")
print(fruits)  # {"apple", "banana", "cherry"} (no duplicate)
```

### update() - Add Multiple Elements

```python
fruits = {"apple", "banana"}
fruits.update(["cherry", "date"])
print(fruits)  # {"apple", "banana", "cherry", "date"}

# Can update with any iterable
fruits.update({"elderberry"})
fruits.update("fg")  # Adds 'f' and 'g' as separate elements
print(fruits)
```

---

## Removing Elements

### remove() - Remove Element (raises error if not found)

```python
fruits = {"apple", "banana", "cherry"}
fruits.remove("banana")
print(fruits)  # {"apple", "cherry"}

# Error if element doesn't exist
# fruits.remove("grape")  # KeyError
```

### discard() - Remove Element (no error if not found)

```python
fruits = {"apple", "banana", "cherry"}
fruits.discard("banana")
print(fruits)  # {"apple", "cherry"}

# No error if element doesn't exist
fruits.discard("grape")  # No error, just does nothing
```

### pop() - Remove and Return Random Element

```python
fruits = {"apple", "banana", "cherry"}
removed = fruits.pop()  # Removes random element
print(f"Removed: {removed}")
print(fruits)

# Error if set is empty
# empty = set()
# empty.pop()  # KeyError
```

### clear() - Remove All Elements

```python
fruits = {"apple", "banana", "cherry"}
fruits.clear()
print(fruits)  # set()
```

---

## Set Operations

### Union (|) - All Elements from Both Sets

```python
set1 = {1, 2, 3}
set2 = {3, 4, 5}

# Using | operator
union = set1 | set2
print(union)  # {1, 2, 3, 4, 5}

# Using union() method
union = set1.union(set2)
print(union)  # {1, 2, 3, 4, 5}

# Multiple sets
set3 = {5, 6, 7}
union = set1 | set2 | set3
print(union)  # {1, 2, 3, 4, 5, 6, 7}
```

### Intersection (&) - Common Elements

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Using & operator
intersection = set1 & set2
print(intersection)  # {3, 4}

# Using intersection() method
intersection = set1.intersection(set2)
print(intersection)  # {3, 4}
```

### Difference (-) - Elements in First but Not Second

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Using - operator
difference = set1 - set2
print(difference)  # {1, 2}

# Using difference() method
difference = set1.difference(set2)
print(difference)  # {1, 2}

# Order matters!
difference = set2 - set1
print(difference)  # {5, 6}
```

### Symmetric Difference (^) - Elements in Either, Not Both

```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# Using ^ operator
sym_diff = set1 ^ set2
print(sym_diff)  # {1, 2, 5, 6}

# Using symmetric_difference() method
sym_diff = set1.symmetric_difference(set2)
print(sym_diff)  # {1, 2, 5, 6}
```

---

## Set Comparisons

### Subset and Superset

```python
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}

# Subset (<=)
print(set1 <= set2)  # True (set1 is subset of set2)
print(set1.issubset(set2))  # True

# Proper subset (<)
print(set1 < set2)  # True (subset and not equal)

# Superset (>=)
print(set2 >= set1)  # True (set2 is superset of set1)
print(set2.issuperset(set1))  # True

# Proper superset (>)
print(set2 > set1)  # True (superset and not equal)
```

### Disjoint Sets

```python
set1 = {1, 2, 3}
set2 = {4, 5, 6}
set3 = {3, 4, 5}

# Disjoint (no common elements)
print(set1.isdisjoint(set2))  # True
print(set1.isdisjoint(set3))  # False (3 is common)
```

---

## Set Methods Summary

```python
fruits = {"apple", "banana", "cherry"}

# Adding
fruits.add("date")              # Add single element
fruits.update(["elderberry"])   # Add multiple

# Removing
fruits.remove("apple")          # Remove (error if not found)
fruits.discard("grape")         # Remove (no error if not found)
item = fruits.pop()             # Remove random element
fruits.clear()                  # Remove all

# Operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
set1.union(set2)                # {1, 2, 3, 4, 5}
set1.intersection(set2)         # {3}
set1.difference(set2)           # {1, 2}
set1.symmetric_difference(set2) # {1, 2, 4, 5}

# Comparisons
set1.issubset(set2)             # Check if subset
set1.issuperset(set2)           # Check if superset
set1.isdisjoint(set2)           # Check if no common elements

# Other
len(set1)                       # Length
3 in set1                       # Membership
set1.copy()                     # Shallow copy
```

---

## Iterating Through Sets

```python
fruits = {"apple", "banana", "cherry"}

# Basic iteration (order not guaranteed)
for fruit in fruits:
    print(fruit)

# Cannot use index-based iteration
# for i in range(len(fruits)):
#     print(fruits[i])  # TypeError

# Convert to list for indexed access
fruits_list = list(fruits)
for i in range(len(fruits_list)):
    print(f"{i}: {fruits_list[i]}")
```

---

## Set Comprehensions

```python
# Basic set comprehension
squares = {x ** 2 for x in range(5)}
print(squares)  # {0, 1, 4, 9, 16}

# With condition
evens = {x for x in range(10) if x % 2 == 0}
print(evens)  # {0, 2, 4, 6, 8}

# From string
vowels = {char for char in "hello" if char in "aeiou"}
print(vowels)  # {'e', 'o'}

# Remove duplicates and transform
numbers = [1, 2, 2, 3, 3, 3]
unique_squares = {x ** 2 for x in numbers}
print(unique_squares)  # {1, 4, 9}
```

---

## Practical Applications

### Remove Duplicates

```python
# From list
numbers = [1, 2, 2, 3, 3, 3, 4, 4]
unique = list(set(numbers))
print(unique)  # [1, 2, 3, 4] (order may vary)

# Preserve order (Python 3.7+)
def remove_duplicates(items):
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

numbers = [1, 2, 2, 3, 3, 3, 4, 4]
print(remove_duplicates(numbers))  # [1, 2, 3, 4]
```

### Membership Testing

```python
# Fast membership testing
valid_users = {"alice", "bob", "charlie"}

# Check if user is valid (very fast for large sets)
user = "alice"
if user in valid_users:
    print(f"{user} is valid")

# Faster than list for large collections
# List: O(n), Set: O(1)
```

### Find Common Elements

```python
# Common interests
alice_interests = {"reading", "hiking", "coding"}
bob_interests = {"hiking", "gaming", "coding"}

common = alice_interests & bob_interests
print(f"Common interests: {common}")
```

### Find Unique Elements

```python
# Students in class A but not class B
class_a = {"Alice", "Bob", "Charlie", "David"}
class_b = {"Bob", "David", "Eve", "Frank"}

only_a = class_a - class_b
print(f"Only in Class A: {only_a}")
```

### Venn Diagram Operations

```python
set_a = {1, 2, 3, 4, 5}
set_b = {4, 5, 6, 7, 8}

print(f"A: {set_a}")
print(f"B: {set_b}")
print(f"A ∪ B (union): {set_a | set_b}")
print(f"A ∩ B (intersection): {set_a & set_b}")
print(f"A - B (difference): {set_a - set_b}")
print(f"A △ B (symmetric difference): {set_a ^ set_b}")
```

---

## Frozen Sets

Immutable version of sets.

```python
# Create frozen set
frozen = frozenset([1, 2, 3, 4])

# Can't modify
# frozen.add(5)  # AttributeError

# Can be used as dictionary keys
cache = {
    frozenset([1, 2]): "result1",
    frozenset([3, 4]): "result2"
}

# Set operations work
frozen1 = frozenset([1, 2, 3])
frozen2 = frozenset([3, 4, 5])
print(frozen1 | frozen2)  # frozenset({1, 2, 3, 4, 5})
```

---

## Common Patterns

### Count Unique Elements

```python
text = "hello world"
unique_chars = set(text)
print(f"Unique characters: {len(unique_chars)}")
```

### Find Missing Numbers

```python
all_numbers = set(range(1, 11))
present = {1, 3, 5, 7, 9}
missing = all_numbers - present
print(f"Missing: {sorted(missing)}")  # [2, 4, 6, 8, 10]
```

### Check for Duplicates

```python
def has_duplicates(items):
    return len(items) != len(set(items))

numbers = [1, 2, 3, 4, 5]
print(has_duplicates(numbers))  # False

numbers = [1, 2, 2, 3]
print(has_duplicates(numbers))  # True
```

---

## Performance Considerations

```python
# Sets are much faster for membership testing
import time

# Large list vs set
data_list = list(range(100000))
data_set = set(range(100000))

# Test membership in list
start = time.time()
99999 in data_list
list_time = time.time() - start

# Test membership in set
start = time.time()
99999 in data_set
set_time = time.time() - start

print(f"List: {list_time:.6f}s")
print(f"Set: {set_time:.6f}s")
# Set is much faster!
```

---

## Classwork

### Exercise 1: Set Basics

Create `set_basics.py`:

```python
"""Practice basic set operations."""

# Create sets
numbers = {1, 2, 3, 4, 5}
more_numbers = {4, 5, 6, 7, 8}

# Operations
print(f"Union: {numbers | more_numbers}")
print(f"Intersection: {numbers & more_numbers}")
print(f"Difference: {numbers - more_numbers}")
print(f"Symmetric Diff: {numbers ^ more_numbers}")

# Add and remove
numbers.add(6)
print(f"After add: {numbers}")
numbers.discard(1)
print(f"After discard: {numbers}")
```

### Exercise 2: Duplicate Remover

Create `duplicate_remover.py`:

```python
"""Remove duplicates from lists."""

def remove_duplicates(items):
    """Remove duplicates preserving order."""
    seen = set()
    result = []
    for item in items:
        if item not in seen:
            seen.add(item)
            result.append(item)
    return result

# Test
numbers = [1, 2, 2, 3, 3, 3, 4, 1, 5]
print(f"Original: {numbers}")
print(f"Unique: {remove_duplicates(numbers)}")

words = ["hello", "world", "hello", "python"]
print(f"Original: {words}")
print(f"Unique: {remove_duplicates(words)}")
```

### Exercise 3: Set Analysis

Create `set_analysis.py`:

```python
"""Analyze sets with Venn diagrams."""

# Student courses
alice = {"Math", "Physics", "Chemistry"}
bob = {"Physics", "Biology", "Chemistry"}
charlie = {"Math", "Biology", "Art"}

print("Course Analysis:")
print(f"Alice: {alice}")
print(f"Bob: {bob}")
print(f"Charlie: {charlie}")

# Common courses
common_all = alice & bob & charlie
print(f"\nAll three take: {common_all}")

common_alice_bob = alice & bob
print(f"Alice and Bob: {common_alice_bob}")

# Unique courses
only_alice = alice - bob - charlie
print(f"\nOnly Alice: {only_alice}")

# All courses offered
all_courses = alice | bob | charlie
print(f"All courses: {all_courses}")
```

### Exercise 4: Word Analyzer

Create `word_analyzer.py`:

```python
"""Analyze text using sets."""

text1 = "the quick brown fox jumps over the lazy dog"
text2 = "the lazy cat sleeps under the warm sun"

# Get unique words
words1 = set(text1.split())
words2 = set(text2.split())

print(f"Text 1 words: {words1}")
print(f"Text 2 words: {words2}")

# Analysis
common = words1 & words2
print(f"\nCommon words: {common}")

only_text1 = words1 - words2
print(f"Only in text 1: {only_text1}")

only_text2 = words2 - words1
print(f"Only in text 2: {only_text2}")

all_words = words1 | words2
print(f"\nTotal unique words: {len(all_words)}")
```

---

## Assignment

### Project: Set Operations Suite

Create `set_operations.py` with comprehensive set functionality.

### Requirements:

#### 1. **Duplicate Analyzer**
- Find duplicates in collections
- Remove duplicates
- Count occurrences
- Report statistics

#### 2. **Membership Tester**
- Fast membership checks
- Validate lists
- Performance comparison
- Bulk testing

#### 3. **Set Calculator**
- Perform all set operations
- Visualize results
- Multiple set operations
- Interactive mode

#### 4. **Data Cleaner**
- Remove duplicates from data
- Find unique records
- Merge datasets
- Validate uniqueness

#### 5. **Relationship Finder**
- Find common elements
- Find unique elements
- Analyze overlaps
- Generate reports

### Code Requirements:

- Use all set operations
- Include set comprehensions
- Demonstrate performance benefits
- Handle frozensets
- Compare with lists/tuples

### Grading Criteria:

- ✅ Duplicate analyzer (20 points)
- ✅ Membership tester (20 points)
- ✅ Set calculator (20 points)
- ✅ Data cleaner (20 points)
- ✅ Relationship finder (20 points)
- ✅ Set operations usage (15 points)
- ✅ Set comprehensions (10 points)
- ✅ Code organization (15 points)

**Total: 140 points**

---

## Quick Reference

### Creating
```python
{1, 2, 3}       # Set literal
set()           # Empty set
set([1,2,3])    # From list
```

### Operations
```python
s1 | s2         # Union
s1 & s2         # Intersection
s1 - s2         # Difference
s1 ^ s2         # Symmetric difference
```

### Methods
```python
.add(x)         # Add element
.remove(x)      # Remove (error if not found)
.discard(x)     # Remove (no error)
.pop()          # Remove random
.clear()        # Remove all
```

### Comparisons
```python
s1 <= s2        # Subset
s1 < s2         # Proper subset
s1 >= s2        # Superset
s1 > s2         # Proper superset
```

---

## Summary

In this lesson, you learned:

- ✅ Creating and modifying sets
- ✅ Set characteristics (unordered, unique, mutable)
- ✅ Adding and removing elements
- ✅ Set operations (union, intersection, difference)
- ✅ Set comparisons (subset, superset, disjoint)
- ✅ Set comprehensions
- ✅ Practical applications
- ✅ Frozen sets
- ✅ Performance benefits
- ✅ Common patterns

**Sets are powerful for unique collections and fast membership testing!**

---

## Additional Resources

- **Python Sets:** [https://docs.python.org/3/tutorial/datastructures.html#sets](https://docs.python.org/3/tutorial/datastructures.html#sets)

**Next lesson:** [Dictionaries](dictionaries.md)