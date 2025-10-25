
# Attributes and Methods

Attributes and methods are the core components of a class. Attributes represent the data or state of an object, while methods represent its behavior.

## Attributes in Detail

### Class Attributes

Class attributes are defined directly within the class and are shared by all instances.

```python
class Pizza:
    # Class attribute
    has_cheese = True

p1 = Pizza()
p2 = Pizza()

print(f"p1 has cheese: {p1.has_cheese}")
print(f"p2 has cheese: {p2.has_cheese}")

# Change the class attribute
Pizza.has_cheese = False
print("--- Pizza.has_cheese set to False ---")

print(f"p1 has cheese: {p1.has_cheese}") # The change affects all instances
print(f"p2 has cheese: {p2.has_cheese}")
```

### Instance Attributes

Instance attributes are unique to each instance. While they can be set dynamically, the proper way to define them is within the ****init**** method, which we will cover in the next lesson.

```python
class Pizza:
    has_cheese = True

p1 = Pizza()
p1.toppings = ["mushrooms", "onions"] # Instance attribute

p2 = Pizza()
p2.toppings = ["pepperoni"]

print(f"Pizza 1 toppings: {p1.toppings}")
print(f"Pizza 2 toppings: {p2.toppings}")
```

## Methods in Detail

Python classes have three types of methods: instance methods, class methods, and static methods.

### Instance Methods

These are the most common type of method. They take the instance (**self**) as their first argument. They can access and modify both instance and class attributes.

```python
class Pizza:
    def __init__(self, toppings):
        self.toppings = toppings # Instance attribute

    # Instance method
    def describe(self):
        print(f"A pizza with { ', '.join(self.toppings)}.")

p = Pizza(["pepperoni", "olives"])
p.describe()
```

### Class Methods

A class method is bound to the class, not the instance. It takes the class (**cls**) as its first argument. It can only access and modify class attributes, not instance attributes. They are defined using the **@classmethod** decorator.

A common use case is for factory methods, which create instances of the class using alternative ways.

```python
class Pizza:
    def __init__(self, toppings):
        self.toppings = toppings

    @classmethod
    def hawaiian(cls):
        # A factory method that creates a Hawaiian pizza
        return cls(["ham", "pineapple"])

    @classmethod
    def meat_lovers(cls):
        return cls(["sausage", "pepperoni", "bacon"])

p1 = Pizza.hawaiian()
p2 = Pizza.meat_lovers()
```

### Static Methods

A static method is a utility function that is logically related to the class but does not depend on any class or instance state. It does not take **self** or **cls** as an argument. It is defined using the **@staticmethod** decorator.

```python
class Pizza:
    @staticmethod
    def is_vegetarian(toppings):
        vegetarian_toppings = {"mushrooms", "onions", "peppers", "olives", "pineapple"}
        return all(topping in vegetarian_toppings for topping in toppings)

is_veg = Pizza.is_vegetarian(["mushrooms", "peppers"])
print(f"Is it vegetarian? {is_veg}")

is_veg = Pizza.is_vegetarian(["pepperoni"])
print(f"Is it vegetarian? {is_veg}")
```

---

## Quick Reference

| Method Type       | First Argument | Decorator       | Access State                  |
| ----------------- | -------------- | --------------- | ----------------------------- |
| **Instance Method** | **self**         | (none)          | Class and Instance attributes |
| **Class Method**    | **cls**          | **@classmethod**  | Class attributes only         |
| **Static Method**   | (none)         | **@staticmethod**| No access to state            |

---

## Practice Exercises

1. **Book Class**: Create a **Book** class.
2. **Instance Method**: Add an instance method **get_info(self)** that returns a string with the book's title and author (you'll need to set these as instance attributes).
3. **Class Method**: Add a class attribute **is_literary = True**.
4. **Static Method**: Add a static method **is_word_long(word)** that returns **True** if a word has more than 7 letters.

---

## Solutions

```python
class Book:
    is_literary = True # Class attribute

    def __init__(self, title, author):
        self.title = title   # Instance attribute
        self.author = author # Instance attribute

    # Instance method
    def get_info(self):
        return f'"{self.title}" by {self.author}'

    @staticmethod
    def is_word_long(word):
        return len(word) > 7

# Create an instance
my_book = Book("The Great Gatsby", "F. Scott Fitzgerald")

# Call instance method
print(my_book.get_info())

# Access class attribute
print(f"Is it literary? {my_book.is_literary}")

# Call static method
print(f"Is 'onomatopoeia' a long word? {Book.is_word_long('onomatopoeia')}")
```

---
> **Next lesson:** [The ****init**** Method](init-method)
