# Magic Methods in Python

## What are Magic Methods?

Magic methods, also known as **dunder methods** (short for "double underscore"), are special methods in Python that are surrounded by double underscores (e.g., ****init****, ****str****).

They are not meant to be called directly by you. Instead, Python calls them automatically in response to certain actions or built-in functions. For example, when you use the **+** operator, Python calls the ****add**** method. When you use **len()**, Python calls ****len****.

By implementing these methods in your classes, you can give your objects custom, Pythonic behavior.

## Common Magic Methods

### 1. Initialization and Construction: ****init**** and ****new****

- ****init**(self, ...)**: The most common magic method. It's the **initializer** (often called the constructor). It's called right after an object of the class has been created. It's where you set up the initial state of the object.

- ****new**(cls, ...)**: The true **constructor**. It's called to *create* the instance. You rarely need to override this, but it can be useful for advanced cases, like subclassing immutable types (e.g., **str**, **int**).

```python
class Book:
    def __init__(self, title, author):
        print("__init__ called: Initializing the book object.")
        self.title = title
        self.author = author

book = Book("The Hobbit", "J.R.R. Tolkien")
# Output: __init__ called: Initializing the book object.
```

### 2. String Representation: ****str**** and ****repr****

- ****str**(self)**: Called by **str()** and **print()**. It should return a user-friendly, readable string representation of the object.

- ****repr**(self)**: Called by **repr()**. It should return an unambiguous, official string representation of the object, which can ideally be used to recreate the object. If ****str**** is not defined, ****repr**** is used as a fallback.

```python
class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        # User-friendly representation
        return f'"{self.title}" by {self.author}'

    def __repr__(self):
        # Unambiguous representation
        return f'Book(title="{self.title}", author="{self.author}")'

book = Book("1984", "George Orwell")

print(book)         # Calls __str__ -> "1984" by George Orwell
print(str(book))    # Calls __str__ -> "1984" by George Orwell
print(repr(book))   # Calls __repr__ -> Book(title="1984", author="George Orwell")

# In an interactive session, just typing the variable name calls __repr__
# >>> book
# Book(title="1984", author="George Orwell")
```

### 3. Collection and Container Methods: ****len****, ****getitem****, ****setitem****

These methods allow your objects to behave like collections (lists, dictionaries).

- ****len**(self)**: Called by **len()**. Should return the length of the container.
- ****getitem**(self, key)**: Called when accessing an item using square brackets, like **obj[key]**.
- ****setitem**(self, key, value)**: Called when setting an item using square brackets, like **obj[key] = value**.

```python
class Bookshelf:
    def __init__(self):
        self._books = []

    def add_book(self, book):
        self._books.append(book)

    def __len__(self):
        return len(self._books)

    def __getitem__(self, index):
        return self._books[index]

shelf = Bookshelf()
shelf.add_book(Book("Dune", "Frank Herbert"))
shelf.add_book(Book("Neuromancer", "William Gibson"))

# Now our bookshelf behaves like a list!
print(len(shelf))      # Calls __len__ -> Output: 2
print(shelf[0])        # Calls __getitem__ -> Output: "Dune" by Frank Herbert

# We can even loop over it
for book in shelf:
    print(book)
```

### 4. Arithmetic Operators: ****add****, ****sub****, ****mul****

These methods allow you to define how standard operators work with your objects.

- ****add**(self, other)**: Implements addition (**+**).
- ****sub**(self, other)**: Implements subtraction (**-**).
- ****mul**(self, other)**: Implements multiplication (*).

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        # Defines what happens when we do vector1 + vector2
        if isinstance(other, Vector):
            return Vector(self.x + other.x, self.y + other.y)
        return NotImplemented

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

v1 = Vector(2, 3)
v2 = Vector(5, 1)

v3 = v1 + v2 # Calls v1.__add__(v2)

print(v3) # Output: Vector(7, 4)
```

### 5. Comparison Operators: ****eq****, ****lt****, ****gt****

These methods define how comparison operators work.

- ****eq**(self, other)**: Implements equality (**==**).
- ****lt**(self, other)**: Implements less than (**<**).
- ****gt**(self, other)**: Implements greater than (**>**).

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def __eq__(self, other):
        # Two employees are equal if they have the same name and salary
        if isinstance(other, Employee):
            return self.name == other.name and self.salary == other.salary
        return False

    def __gt__(self, other):
        # One employee is "greater than" another if their salary is higher
        if isinstance(other, Employee):
            return self.salary > other.salary
        return NotImplemented

emp1 = Employee("Alice", 80000)
emp2 = Employee("Bob", 90000)
emp3 = Employee("Alice", 80000)

print(emp1 == emp2) # Calls emp1.__eq__(emp2) -> False
print(emp1 == emp3) # Calls emp1.__eq__(emp3) -> True
print(emp2 > emp1)  # Calls emp2.__gt__(emp1) -> True
```

## Key Takeaways

- **Magic methods** (or dunder methods) start and end with double underscores.
- They allow you to customize how your objects interact with Python's built-in functions and operators.
- You don't call them directly; Python calls them for you.
- ****init**** is for initializing object state.
- ****str**** and ****repr**** provide string representations for your objects.
- ****len****, ****getitem****, and ****setitem**** let your objects behave like containers.
- ****add****, ****sub****, ****eq****, ****gt****, etc., allow you to overload operators.
- Implementing magic methods is key to writing expressive, Pythonic classes.

---

> **Next lesson:** [Decorators](decorators)

---
