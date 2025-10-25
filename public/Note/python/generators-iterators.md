# Generators and Iterators in Python

## Introduction

Generators and iterators are fundamental concepts in Python for handling large datasets or streams of data efficiently. They allow you to work with data sequentially without loading everything into memory at once.

## Iterators

An **iterator** is an object that represents a stream of data. It must implement the **iterator protocol**, which consists of two methods:

- ****iter**()**: Returns the iterator object itself.
- ****next**()**: Returns the next item from the stream. When there are no more items, it raises a **StopIteration** exception.

Python's **for** loop automatically uses the iterator protocol.

### Example: A **for** loop

When you write:

```python
my_list = [1, 2, 3]
for i in my_list:
    print(i)
```

Python does something like this behind the scenes:

```python
# 1. Get an iterator object from the list
iterator = iter(my_list)

# 2. Repeatedly call next() until StopIteration is raised
while True:
    try:
        item = next(iterator)
        print(item)
    except StopIteration:
        break
```

### Building a Custom Iterator

Let's build an iterator that generates a countdown.

```python
class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current < 1:
            raise StopIteration
        else:
            num = self.current
            self.current -= 1
            return num

# Using the custom iterator
for i in Countdown(5):
    print(i)
```

**Output:**

```sh
5
4
3
2
1
```

## Generators

While you can create custom iterators using classes, Python provides a much simpler way to create them using **generator functions**.

A generator function is a function that uses the **yield** keyword. When you call a generator function, it doesn't run the function body. Instead, it returns a **generator object**, which is a special kind of iterator.

### The **yield** Keyword

The **yield** keyword is similar to **return**, but with a key difference: it **pauses** the function's execution and saves its state. When **next()** is called on the generator object again, the function resumes execution from where it left off.

### Example: A Generator Countdown

Let's rewrite our **Countdown** iterator as a generator function.

```python
def countdown_generator(start):
    print("Generator starting...")
    current = start
    while current >= 1:
        yield current
        current -= 1
    print("Generator finished.")

# Using the generator
for i in countdown_generator(5):
    print(i)
```

This is much more concise and readable than the class-based iterator.

## Why Use Generators?

**Memory Efficiency:** This is the most significant advantage. Generators produce items one at a time and only when requested. This means they can handle massive datasets that wouldn't fit in memory.

Imagine reading a 10 GB log file:

```python
# Inefficient: loads the entire file into memory
def read_large_file_inefficient(path):
    with open(path) as f:
        return f.readlines()

# Efficient: reads one line at a time
def read_large_file_efficient(path):
    with open(path) as f:
        for line in f:
            yield line
```

## Generator Expressions

Similar to list comprehensions, you can create simple generators on the fly using **generator expressions**. They use parentheses **()** instead of square brackets **[]**.

```python
# List comprehension (creates a full list in memory)
my_list = [i * i for i in range(10)]

# Generator expression (creates a generator object)
my_gen = (i * i for i in range(10))

print(my_list) # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
print(my_gen)  # <generator object <genexpr> at 0x...>

# You can iterate over the generator
for num in my_gen:
    print(num, end=" ") # 0 1 4 9 ...
```

Generator expressions are perfect for when you need to iterate over a sequence just once, like when passing it to another function.

```python
# Find the sum of the first 1,000,000 squares without creating a list
total = sum(i * i for i in range(1000000))
```

## Key Takeaways

- **Iterators** are objects that provide a sequence of data via the ****next**** method.
- **Generators** are a simple way to create iterators using a function with the **yield** keyword.
- **yield** pauses a function and returns a value, saving the function's state for the next call.
- The primary benefit of generators is **memory efficiency**, as they produce values on demand.
- **Generator expressions** are a concise, comprehension-like syntax for creating simple generators.

## Practice Exercises

1. **Fibonacci Generator**: Create a generator function **fibonacci(limit)** that yields Fibonacci numbers up to a given **limit**.
2. **Random Number Generator**: Create a generator function **random_numbers(min_val, max_val, count)** that yields a specified **count** of random numbers within a given range.
3. **File Reader Generator**: Use a generator expression to read a file and yield only the lines that contain a specific word.

---

## Solutions

```python
import random

# Exercise 1: Fibonacci Generator
def fibonacci(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

print("Fibonacci sequence up to 50:")
for num in fibonacci(50):
    print(num, end=" ")
print("\n")

# Exercise 2: Random Number Generator
def random_numbers(min_val, max_val, count):
    for _ in range(count):
        yield random.randint(min_val, max_val)

print("5 random numbers between 1 and 100:")
for num in random_numbers(1, 100, 5):
    print(num, end=" ")
print("\n")

# Exercise 3: File Reader Generator
# First, create a dummy file to read
with open("sample.txt", "w") as f:
    f.write("This is the first line.\n")
    f.write("Here is another line with a keyword.\n")
    f.write("The keyword is python.\n")
    f.write("This is the last line.\n")

search_word = "keyword"

# Use a generator expression
lines_with_keyword = (line for line in open("sample.txt") if search_word in line)

print(f"Lines containing '{search_word}':")
for line in lines_with_keyword:
    print(line.strip())

```

---

> **Next lesson:** [Regular Expressions (Regex)](regex)

---
