# String Formatting in Python

## Introduction

String formatting is the process of creating strings by embedding variables or values inside them. Python provides several ways to format strings, each with its own advantages. Over the years, the methods have evolved, and modern Python (3.6+) has a clear winner for most use cases: **f-strings**.

Let's explore the different methods.

## 1. F-Strings (Formatted String Literals)

Introduced in Python 3.6, f-strings are the most modern, readable, and efficient way to format strings.

### Syntax

You prefix the string with the letter **f** or **F** and write expressions inside curly braces **{}**.

```python
name = "Alice"
age = 30

# Using an f-string
message = f"My name is {name} and I am {age} years old."
print(message)
# Output: My name is Alice and I am 30 years old.
```

### Features

- **Expressions:** You can put any valid Python expression inside the braces.

    ```python
    print(f"5 + 3 is {5 + 3}") # Output: 5 + 3 is 8
    print(f"The price is ${99.95 * 1.07:.2f}") # Includes formatting
    ```

- **Readability:** They are concise and easy to read because the expressions are right where they will appear in the string.

- **Speed:** They are the fastest of all formatting methods.

### Format Specifiers

You can add a colon **:** after the expression to specify how the value should be formatted.

```python
pi = 3.14159265

# Format to 2 decimal places
print(f"Pi rounded to 2 decimal places: {pi:.2f}")

# Format as a percentage
ratio = 0.85
print(f"Success rate: {ratio:.1%}")

# Pad a number with zeros
num = 42
print(f"Padded number: {num:04d}") # Output: 0042
```

## 2. The **str.format()** Method

Introduced in Python 2.6, **str.format()** was the standard for a long time before f-strings.

### Syntax

You use curly braces **{}** as placeholders in the string and then call the **.format()** method on the string with the values to insert.

```python
name = "Bob"
age = 25

# Using str.format()
message = "My name is {} and I am {} years old.".format(name, age)
print(message)
```

### Features

- **Positional Arguments:**

    ```python
    print("{0} and {1}".format("spam", "eggs"))
    print("{1} and {0}".format("spam", "eggs")) # Arguments can be reordered
    ```

- **Keyword Arguments:**

    ```python
    print("Hello, {name}! You are {age}.".format(name="Charlie", age=40))
    ```

- **Format Specifiers:** It uses the same format specifiers as f-strings.

    ```python
    print("The value is {pi:.2f}".format(pi=3.14159))
    ```

While still useful, **str.format()** is generally more verbose than f-strings.

## 3. The **%** Operator (Old Style)

This is the original string formatting method from the early days of Python, similar to **printf** in C.

### Syntax

You use **%** placeholders in the string and then provide a tuple of values after another **%** operator.

- **%s**: String
- **%d**: Integer
- **%f**: Floating-point number

```python
name = "David"
age = 50

message = "My name is %s and I am %d years old." % (name, age)
print(message)
```

### Why Avoid It?

- **Less Readable:** It's harder to match the placeholders with the values.
- **Error-Prone:** You can easily get type mismatches (e.g., using **%d** for a string).
- **Less Flexible:** It has fewer formatting options than the newer methods.

You will still see this style in older codebases, but you should **avoid using it in new code**.

## Which Method Should You Use?

- **Use f-strings (**f"..."**)** for almost everything. They are the modern standard—fast, readable, and concise.
- Use **str.format()** if you need to support Python versions older than 3.6 or in some specific cases where the template string is generated separately from the data.
- Only use the **%** operator when you are working with legacy code that already uses it.

## Key Takeaways

- Python has three main string formatting methods: f-strings, **str.format()**, and the **%** operator.
- **F-strings** are the preferred method in modern Python.
- They allow you to embed expressions directly inside string literals for maximum readability and performance.
- Format specifiers (e.g., **:.2f**, **:%**) can be used with both f-strings and **str.format()** to control the appearance of values.

## Practice Exercises

1. **Personal Greeting**: Using an f-string, create a variable **name** and **city** and print the message: **"Hello, [name]! How is the weather in [city]?"**
2. **Price Calculator**: Given a **price** and a **tax_rate**, use **str.format()** to print the total price formatted to two decimal places.
3. **Old-Style Refactor**: Take the following code and refactor it to use an f-string:
    **print("The item '%s' costs $%f." % ("Book", 19.99))**

---

## Solutions

```python
# Exercise 1: Personal Greeting
name = "Elena"
city = "Paris"

print(f"Hello, {name}! How is the weather in {city}?")

# Exercise 2: Price Calculator
price = 49.95
tax_rate = 0.07
total_price = price * (1 + tax_rate)

print("The total price is ${:.2f}.".format(total_price))

# Exercise 3: Old-Style Refactor
item = "Book"
cost = 19.99

# Original code:
# print("The item '%s' costs $%f." % (item, cost))

# Refactored to f-string:
print(f"The item '{item}' costs ${cost:.2f}.")

```

---

> **Next lesson:** [Working with APIs](apis)

---
