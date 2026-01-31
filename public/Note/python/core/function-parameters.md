# Function Parameters and Arguments

## Parameters vs Arguments

These terms are often confused but they mean different things:

- **Parameters** — Variables in the function definition
- **Arguments** — The actual values you pass when calling the function

```python
def greet(name):  # "name" is a parameter
    print(f"Hello, {name}!")

greet("Alice")  # "Alice" is an argument
```

## Types of Parameters

### Positional Parameters

Parameters that must be provided in the correct order:

```python
def introduce(first_name, last_name):
    print(f"{first_name} {last_name}")

introduce("Alice", "Smith")  # Correct order
introduce("Smith", "Alice")  # Wrong order - different output
```

### Named Parameters (Keyword Arguments)

You can pass arguments using the parameter name:

```python
def introduce(first_name, last_name):
    print(f"{first_name} {last_name}")

introduce(first_name="Alice", last_name="Smith")
introduce(last_name="Smith", first_name="Alice")  # Order doesn't matter
introduce("Alice", last_name="Smith")             # Mix positional and named
```

**Important:** Positional arguments must come before named arguments:

```python
# ❌ Wrong
introduce(first_name="Alice", "Smith")

# ✅ Correct
introduce("Alice", last_name="Smith")
```

## Default Parameters

Give parameters default values so they're optional:

```python
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")                    # Uses default "Hello"
greet("Bob", "Hi")                # Overrides default
greet("Charlie", greeting="Hey")  # Named override
```

**Output:**

```
Hello, Alice!
Hi, Bob!
Hey, Charlie!
```

### Multiple Defaults

```python
def create_profile(name, age=18, city="Unknown"):
    print(f"{name}, {age} years old, from {city}")

create_profile("Alice")                                  # Uses all defaults
create_profile("Bob", 25)                                # Overrides age
create_profile("Charlie", 30, "New York")               # Overrides all
create_profile("Diana", city="Los Angeles")             # Named override
```

## Variable-Length Arguments

### `*args` — Variable Positional Arguments

Use `*args` to accept any number of arguments:

```python
def add(*args):
    total = 0
    for num in args:
        total += num
    return total

print(add(1, 2, 3))        # 6
print(add(1, 2, 3, 4, 5))  # 15
print(add())               # 0
```

### How `*args` Works

```python
def print_args(*args):
    print(type(args))  # <class 'tuple'>
    print(args)
    for arg in args:
        print(arg)

print_args("a", "b", "c")
```

**Output:**

```
<class 'tuple'>
('a', 'b', 'c')
a
b
c
```

`*args` becomes a tuple of all positional arguments.

### `**kwargs` — Variable Keyword Arguments

Use `**kwargs` to accept any number of named arguments:

```python
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, email="alice@example.com")
```

**Output:**

```
name: Alice
age: 25
email: alice@example.com
```

### How `**kwargs` Works

```python
def print_kwargs(**kwargs):
    print(type(kwargs))  # <class 'dict'>
    print(kwargs)

print_kwargs(name="Alice", age=25)
```

**Output:**

```
<class 'dict'>
{'name': 'Alice', 'age': 25}
```

`**kwargs` becomes a dictionary of all keyword arguments.

## Combining All Parameter Types

You can use regular parameters, `*args`, and `**kwargs` together:

```python
def full_example(a, b, *args, **kwargs):
    print(f"a: {a}")
    print(f"b: {b}")
    print(f"args: {args}")
    print(f"kwargs: {kwargs}")

full_example(1, 2, 3, 4, 5, name="Alice", age=25)
```

**Output:**

```
a: 1
b: 2
args: (3, 4, 5)
kwargs: {'name': 'Alice', 'age': 25}
```

**Order matters:** Regular parameters → `*args` → `**kwargs`

## Real-World Examples

### Example 1: Flexible Greeting Function

```python
def greet(name, *titles, greeting="Hello"):
    """Greet someone with optional titles."""
    title_str = " ".join(titles)
    if title_str:
        return f"{greeting}, {title_str} {name}!"
    return f"{greeting}, {name}!"

print(greet("Alice"))                           # Hello, Alice!
print(greet("Bob", "Dr."))                      # Hello, Dr. Bob!
print(greet("Charlie", "Mr.", "Dr."))           # Hello, Mr. Dr. Charlie!
print(greet("Diana", "Ms.", greeting="Hi"))     # Hi, Ms. Diana!
```

### Example 2: Create Dictionary

```python
def create_dict(name, **attributes):
    """Create a dictionary from name and any attributes."""
    return {
        "name": name,
        **attributes
    }

person = create_dict("Alice", age=25, city="NYC", job="Engineer")
print(person)
# {'name': 'Alice', 'age': 25, 'city': 'NYC', 'job': 'Engineer'}
```

### Example 3: Flexible List Sum

```python
def sum_all(*numbers, multiplier=1):
    """Sum all numbers and optionally multiply the result."""
    total = sum(numbers)
    return total * multiplier

print(sum_all(1, 2, 3, 4))              # 10
print(sum_all(1, 2, 3, 4, multiplier=2)) # 20
```

### Example 4: Print with Formatting

```python
def print_formatted(*args, separator=", ", end="\n"):
    """Print values with custom separator and ending."""
    output = separator.join(str(arg) for arg in args)
    print(output, end=end)

print_formatted("a", "b", "c")
print_formatted("x", "y", "z", separator=" | ")
print_formatted("1", "2", separator="-", end="***\n")
```

### Example 5: API Request Builder

```python
def build_request(url, *path_segments, **query_params):
    """Build an API request URL."""
    full_path = url + "/" + "/".join(path_segments)
    
    if query_params:
        params = "&".join(f"{k}={v}" for k, v in query_params.items())
        full_path += f"?{params}"
    
    return full_path

print(build_request("https://api.example.com", "users", "123"))
# https://api.example.com/users/123

print(build_request("https://api.example.com", "users", page=1, limit=10))
# https://api.example.com/users?page=1&limit=10
```

## Unpacking Arguments

You can unpack lists and dictionaries into arguments:

### Unpacking with `*`

```python
def add(a, b, c):
    return a + b + c

numbers = [1, 2, 3]
result = add(*numbers)  # Unpacks list
print(result)  # 6
```

### Unpacking with `**`

```python
def introduce(name, age, city):
    print(f"{name} is {age} and lives in {city}")

info = {"name": "Alice", "age": 25, "city": "NYC"}
introduce(**info)  # Unpacks dictionary
```

## Parameter Best Practices

### 1. Order Parameters Logically

```python
# ❌ Confusing order
def create_user(email, age, username):
    pass

# ✅ Logical order
def create_user(username, email, age):
    pass
```

### 2. Use Defaults for Optional Values

```python
# ❌ Unclear what's optional
def save_file(filename, directory, overwrite):
    pass

# ✅ Defaults show what's optional
def save_file(filename, directory=".", overwrite=False):
    pass
```

### 3. Use Meaningful Names

```python
# ❌ Unclear
def process(a, b, *c, **d):
    pass

# ✅ Clear
def calculate_total(base_price, tax_rate, *discounts, **options):
    pass
```

### 4. Document Your Parameters

```python
def calculate_compound_interest(principal, rate, time, *additional_amounts, **options):
    """
    Calculate compound interest.
    
    Parameters:
        principal (float): Initial investment amount
        rate (float): Annual interest rate (as percentage)
        time (int): Time period in years
        *additional_amounts: Extra deposits made
        **options: Extra settings (compounding='annual', etc.)
    
    Returns:
        float: Final amount
    """
    pass
```

## Common Mistakes

**1. Forgetting parentheses with default values**

```python
# ❌ Wrong - tries to use None as default
def greet(name, greeting=print("Hello")):
    pass

# ✅ Correct
def greet(name, greeting="Hello"):
    pass
```

**2. Mutable default arguments**

```python
# ❌ Problem - list is created once and reused
def add_item(item, items=[]):
    items.append(item)
    return items

result1 = add_item("a")
result2 = add_item("b")
print(result1)  # ['a', 'b'] - unexpected!

# ✅ Correct - create new list each time
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items
```

**3. Wrong order of arguments**

```python
# ❌ Wrong - default arguments before regular
def greet(greeting="Hello", name):
    pass

# ✅ Correct - regular before defaults
def greet(name, greeting="Hello"):
    pass
```

**4. Confusing `*args` with unpacking**

```python
# ❌ Confusing
def process(items):
    print(*items)  # Unpacks for printing

numbers = [1, 2, 3]
process(numbers)  # Wrong - passes list, not unpacked

# ✅ Correct
process(*numbers)  # Unpacks before passing
```

## Key Takeaways

- **Parameters** are in the function definition; **arguments** are when you call it
- Use default parameters to make arguments optional
- `*args` lets you pass any number of positional arguments (becomes tuple)
- `**kwargs` lets you pass any number of keyword arguments (becomes dictionary)
- Order: regular parameters → `*args` → **kwargs
- Use `*` and `**` to unpack lists and dictionaries into arguments
- Give parameters meaningful names and document them
- Avoid mutable default arguments like lists or dictionaries

---

## Practice Exercises

1. Create a function that takes a name and any number of hobbies, printing them all.
2. Write a function that accepts keyword arguments and creates a dictionary from them.
3. Create a function that combines regular, default, and `*args` parameters.
4. Write a function that unpacks a list of numbers and passes them to another function.
5. Create a flexible function that builds a sentence from various parameters.

---
> ...
>
> **Next lesson:** [Return Values](return-values)
>

---
