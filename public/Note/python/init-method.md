
# The ****init**** Method

The **init** method is a special method in Python classes. It is a **constructor**, which means it is automatically called when you create a new instance (object) of a class. Its primary job is to initialize the instance's attributes.

The name is short for "initialize" and is flanked by double underscores, which indicates it's a special method, often called a "dunder" method (for **d**ouble **under**score).

## Syntax

```python
class MyClass:
    def __init__(self, param1, param2):
        # Initialize instance attributes here
        self.attribute1 = param1
        self.attribute2 = param2
```

- The first parameter is always **self**, representing the instance being created.
- You can accept other parameters to set the initial state of the object.

## How It Works

When you call a class to create an object, like **my_obj = MyClass("hello", "world")**, Python does two things:

1. Creates a new, empty object.
2. Calls the ****init**** method on that new object, passing the arguments from the call (**"hello"**, **"world"**) to **param1** and **param2**.

## Example: A **Car** Class

Let's create a **Car** class that is initialized with a color and make.

```python
class Car:
    def __init__(self, color, make):
        # These are instance attributes
        self.color = color
        self.make = make
        self.speed = 0 # Default attribute

    def accelerate(self, amount):
        self.speed += amount

    def describe(self):
        print(f"This is a {self.color} {self.make} going {self.speed} mph.")

# Create instances by passing arguments to the class
car1 = Car("Red", "Toyota")
car2 = Car("Blue", "Ford")

car1.accelerate(30)

car1.describe()
car2.describe()
```

This is the standard and correct way to create objects with their own unique state right from the beginning, avoiding the need to set attributes manually after creation.

## Default Parameters

You can use default arguments in ****init**** just like in any other function.

```python
class Car:
    def __init__(self, make, color="Black"):
        self.make = make
        self.color = color

# 'color' is optional and defaults to "Black"
default_car = Car("Honda")
print(default_car.color) # Black

custom_car = Car("Tesla", "White")
print(custom_car.color) # White
```

---

## Key Takeaways

- ****init**** is the constructor method for a class.
- It is automatically called when a new object is created.
- Its purpose is to initialize the instance attributes of the object.
- **self** refers to the instance being created.

---

## Practice Exercises

1. **Person Class**: Create a **Person** class with an ****init**** method that takes **name** and **age** as arguments and sets them as instance attributes.
2. **introduce Method**: Add an instance method **introduce(self)** to the **Person** class that prints a message like "Hi, my name is [name] and I am [age] years old."
3. **Create Instances**: Create two **Person** objects with different names and ages and call their **introduce** methods.

---

## Solutions

```python
# Exercise 1-3
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print(f"Hi, my name is {self.name} and I am {self.age} years old.")

# Create instances
p1 = Person("Alice", 30)
p2 = Person("Bob", 25)

# Call methods
p1.introduce()
p2.introduce()
```

---
> **Next lesson:** [Inheritance](inheritance)
