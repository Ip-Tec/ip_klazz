# Tuples

## What is a Tuple?

A tuple is a collection of items, similar to a list. The main difference is that tuples are **immutable**, meaning you cannot change them after they're created. Once a tuple is made, it stays the way it is.

Think of a tuple like a locked box—you can look inside and see what's there, but you can't add, remove, or change items inside.

## Creating Tuples

You create a tuple using parentheses `()`:

```python
fruits = ("apple", "banana", "orange")
print(fruits)
```

**Output:** `('apple', 'banana', 'orange')`

### Tuples with Different Data Types

```python
numbers = (1, 2, 3, 4, 5)
mixed = (1, "hello", 3.14, True)
empty = ()

print(numbers)   # (1, 2, 3, 4, 5)
print(mixed)     # (1, 'hello', 3.14, True)
print(empty)     # ()
```

### Creating a Single-Item Tuple

This is important! To create a tuple with one item, you need a trailing comma:

```python
# ❌ This is not a tuple, it's just a string in parentheses
single = ("apple")
print(type(single))  # <class 'str'>

# ✅ This is a tuple
single = ("apple",)
print(type(single))  # <class 'tuple'>
```

## Accessing Tuple Items

Just like lists, tuples use indexing and slicing:

```python
fruits = ("apple", "banana", "orange", "grape")

print(fruits[0])    # apple
print(fruits[2])    # orange
print(fruits[-1])   # grape
```

### Slicing Tuples

```python
fruits = ("apple", "banana", "orange", "grape", "mango")

print(fruits[1:3])    # ('banana', 'orange')
print(fruits[:2])     # ('apple', 'banana')
print(fruits[2:])     # ('orange', 'grape', 'mango')
```

## Why Are Tuples Immutable?

Tuples cannot be changed. If you try to modify a tuple, you'll get an error:

```python
fruits = ("apple", "banana", "orange")

fruits[1] = "grape"  # ❌ TypeError: 'tuple' object does not support item assignment
```

You also can't add or remove items:

```python
fruits = ("apple", "banana")

fruits.append("orange")  # ❌ AttributeError: 'tuple' object has no attribute 'append'
```

## When to Use Tuples

### Use Tuples When

- You want to protect data from accidental changes
- You need to use a collection as a dictionary key (tuples can, lists can't)
- You're returning multiple values from a function
- Performance matters (tuples are slightly faster than lists)

### Use Lists When

- You need to modify the data
- You're building a collection that will grow or change

## Tuple Methods

Tuples have very few methods since they're immutable:

### `count()` — Count Occurrences

```python
numbers = (1, 2, 3, 2, 4, 2, 5)

count = numbers.count(2)
print(count)  # 3
```

### `index()` — Find Position

```python
fruits = ("apple", "banana", "orange")

position = fruits.index("banana")
print(position)  # 1
```

## Looping Through Tuples

```python
fruits = ("apple", "banana", "orange")

for fruit in fruits:
    print(fruit)
```

**Output:**

```sh
apple
banana
orange
```

### With Index

```python
fruits = ("apple", "banana", "orange")

for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
```

**Output:**

```sh
0: apple
1: banana
2: orange
```

## Checking if Item Exists

```python
fruits = ("apple", "banana", "orange")

if "banana" in fruits:
    print("Banana is in the tuple")

if "grape" not in fruits:
    print("Grape is not in the tuple")
```

## Unpacking Tuples

Unpacking lets you assign tuple items to variables in one line:

```python
fruits = ("apple", "banana", "orange")

first, second, third = fruits

print(first)   # apple
print(second)  # banana
print(third)   # orange
```

### Unpacking with Extra Values

```python
fruits = ("apple", "banana", "orange", "grape")

first, second, *rest = fruits

print(first)    # apple
print(second)   # banana
print(rest)     # ['orange', 'grape']
```

## Converting Between Lists and Tuples

### List to Tuple

```python
numbers = [1, 2, 3, 4, 5]

tuple_numbers = tuple(numbers)
print(tuple_numbers)  # (1, 2, 3, 4, 5)
print(type(tuple_numbers))  # <class 'tuple'>
```

### Tuple to List

```python
fruits = ("apple", "banana", "orange")

list_fruits = list(fruits)
print(list_fruits)  # ['apple', 'banana', 'orange']
print(type(list_fruits))  # <class 'list'>
```

## Real-World Examples

### Example 1: Returning Multiple Values from a Function

```python
def get_user_info():
    name = "John"
    age = 25
    email = "john@example.com"
    return (name, age, email)

user = get_user_info()
print(user)  # ('John', 25, 'john@example.com')

# Unpack it
name, age, email = get_user_info()
print(f"{name} is {age} years old")  # John is 25 years old
```

### Example 2: Using Tuple as Dictionary Key

```python
# ❌ Can't use list as key
locations = {[40.7128, 74.0060]: "New York"}  # TypeError!

# ✅ Can use tuple as key
locations = {(40.7128, 74.0060): "New York", (51.5074, 0.1278): "London"}

print(locations[(40.7128, 74.0060)])  # New York
```

### Example 3: Protecting Coordinates

```python
# Using tuple to protect coordinates from accidental changes
player_position = (100, 200)

# Someone tries to change it
player_position[0] = 150  # ❌ Error - protected!

# Correct way: create a new tuple
player_position = (150, 200)
```

### Example 4: Multiple Values from a Loop

```python
pairs = [(1, 2), (3, 4), (5, 6)]

for x, y in pairs:
    print(f"x: {x}, y: {y}")
```

**Output:**

```sh
x: 1, y: 2
x: 3, y: 4
x: 5, y: 6
```

### Example 5: RGB Color Values

```python
colors = (
    (255, 0, 0),      # Red
    (0, 255, 0),      # Green
    (0, 0, 255),      # Blue
)

for r, g, b in colors:
    print(f"RGB({r}, {g}, {b})")
```

**Output:**

```sh
RGB(255, 0, 0)
RGB(0, 255, 0)
RGB(0, 0, 255)
```

## Tuples vs Lists

| Feature | Tuple | List |
|---------|-------|------|
| Mutable | No | Yes |
| Syntax | `()` | `[]` |
| Speed | Faster | Slower |
| Can be dict key | Yes | No |
| Methods | Few | Many |
| Use case | Immutable data | Changeable data |

## Common Mistakes

**1. Forgetting the comma for single-item tuple**

```python
# ❌ This is a string, not a tuple
single = ("apple")
print(type(single))  # <class 'str'>

# ✅ This is a tuple
single = ("apple",)
print(type(single))  # <class 'tuple'>
```

**2. Trying to modify a tuple**

```python
# ❌ This will error
numbers = (1, 2, 3)
numbers[0] = 10  # TypeError

# ✅ Create a new tuple instead
numbers = (10, 2, 3)
```

**3. Unpacking wrong number of variables**

```python
# ❌ Too many variables
fruits = ("apple", "banana")
a, b, c = fruits  # ValueError: not enough values to unpack

# ✅ Correct number
a, b = fruits
```

**4. Confusing `()` for function call**

```python
# ❌ This creates an empty tuple, not a function call
result = ()

# ✅ This calls a function
result = function_name()
```

## Key Takeaways

- Tuples are immutable collections (can't be changed)
- Use parentheses `()` to create tuples
- Access items using indexing and slicing like lists
- Tuples have only `count()` and `index()` methods
- Use tuples to protect data from accidental changes
- Tuples can be dictionary keys, lists cannot
- Unpacking makes it easy to assign tuple items to variables
- Convert between tuples and lists with `tuple()` and `list()`

---

## Practice Exercises

1. Create a tuple of your 5 favorite colors and print the first and last.
2. Write a function that returns three values as a tuple, then unpack them.
3. Create a tuple of coordinates and use them as dictionary keys.
4. Write a program that takes a list and converts it to a tuple.
5. Create a nested tuple of RGB colors and loop through them to print each color's values.

---

## Solutions

```python

# Exercise 1: Favorite Colors Tuple
favorite_colors = ("blue", "green", "red", "purple", "yellow")
print(f"First favorite color: {favorite_colors[0]}")
print(f"Last favorite color: {favorite_colors[-1]}")

# Exercise 2: Function Returning a Tuple
def get_product_details():
    name = "Laptop"
    price = 1200.00
    in_stock = True
    return (name, price, in_stock)

product_name, product_price, product_stock = get_product_details()
print(f"\nProduct: {product_name}, Price: ${product_price}, In Stock: {product_stock}")

# Exercise 3: Tuple as Dictionary Key
city_coordinates = {
    (40.7128, -74.0060): "New York City",
    (34.0522, -118.2437): "Los Angeles",
    (51.5074, 0.1278): "London"
}

print(f"\nCity at (40.7128, -74.0060): {city_coordinates[(40.7128, -74.0060)]}")

# Exercise 4: List to Tuple Conversion
my_list = [10, 20, 30, 40, 50]
my_tuple = tuple(my_list)
print(f"\nOriginal list: {my_list}")
print(f"Converted tuple: {my_tuple}")
print(f"Type of converted tuple: {type(my_tuple)}")

# Exercise 5: Nested Tuple of RGB Colors
rgb_colors = (
    (255, 0, 0),    # Red
    (0, 255, 0),    # Green
    (0, 0, 255),    # Blue
    (255, 255, 0)   # Yellow
)

print("\nRGB Color Values:")
for color_tuple in rgb_colors:
    r, g, b = color_tuple
    print(f"RGB({r}, {g}, {b})")

```

---

> **Next lesson:** [Sets](sets)
