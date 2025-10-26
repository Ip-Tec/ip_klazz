# Polymorphism in Python

## What is Polymorphism?

Polymorphism, a core concept in Object-Oriented Programming, means "many forms." It allows objects of different classes to be treated as if they are objects of the same superclass. In simpler terms, it enables a single interface (like a method name) to be used for different types of objects.

Think of the **+** operator in Python. It behaves differently depending on the data types:

- For numbers, it performs addition: **5 + 2** results in **7**.
- For strings, it performs concatenation: **"hello" + "world"** results in **"helloworld"**.

This is a form of polymorphism. The same operator does different things based on the context.

## Polymorphism in Methods

Polymorphism is most commonly seen in methods. We can have different classes with the same method name, and Python will automatically call the correct one based on the object.

### Example: Different Animals, Same Sound Method

Let's create a few animal classes, each with a **make_sound** method.

```python
class Dog:
    def make_sound(self):
        return "Woof!"

class Cat:
    def make_sound(self):
        return "Meow!"

class Duck:
    def make_sound(self):
        return "Quack!"

# Create objects of each class
dog = Dog()
cat = Cat()
duck = Duck()

# A function that can work with any animal
def animal_sound(animal):
    print(f"The animal says: {animal.make_sound()}")

# Call the function with different objects
animal_sound(dog)   # Output: The animal says: Woof!
animal_sound(cat)   # Output: The animal says: Meow!
animal_sound(duck)  # Output: The animal says: Quack!
```

Notice that the **animal_sound** function doesn't care what type of animal it receives. As long as the object has a **make_sound** method, the function works. This is called **Duck Typing**. In Python, if it walks like a duck and quacks like a duck, it must be a duck.

## Polymorphism with Inheritance

Polymorphism is especially powerful when combined with inheritance. We can define a common interface in a parent class and have child classes provide their own specific implementations.

### Method Overriding

When a child class provides its own version of a method that is already defined in its parent class, it's called **method overriding**.

```python
class Shape:
    def __init__(self, name):
        self.name = name

    def area(self):
        # A generic shape doesn't have a specific area formula
        return "Area not defined for a generic shape."

class Circle(Shape):
    def __init__(self, name, radius):
        super().__init__(name)
        self.radius = radius

    def area(self):
        # Overriding the parent's area method
        return 3.14 * self.radius ** 2

class Square(Shape):
    def __init__(self, name, side_length):
        super().__init__(name)
        self.side_length = side_length

    def area(self):
        # Overriding the parent's area method
        return self.side_length ** 2

# Create objects
shape = Shape("Generic Shape")
circle = Circle("My Circle", 5)
square = Square("My Square", 4)

# A list of different shapes
shapes = [shape, circle, square]

# Loop through the shapes and calculate their area
for s in shapes:
    print(f"The area of {s.name} is: {s.area()}")
```

**Output:**

```sh
The area of Generic Shape is: Area not defined for a generic shape.
The area of My Circle is: 78.5
The area of My Square is: 16
```

Here, we can loop through a list of different **Shape** objects and call the **area()** method on each one. Python automatically calls the correct version of the **area()** method—the one from the **Circle** class for the circle object, and the one from the **Square** class for the square object.

## Abstract Base Classes (ABCs)

Sometimes, you want to force child classes to implement certain methods. You can do this using **Abstract Base Classes** from Python's **abc** module.

An abstract method is a method that is declared in a parent class but has no implementation. Child classes are required to provide an implementation.

```python
from abc import ABC, abstractmethod

class Vehicle(ABC): # Inherit from ABC
    def __init__(self, brand):
        self.brand = brand

    @abstractmethod
    def start_engine(self):
        # This method must be implemented by child classes
        pass

class Car(Vehicle):
    def start_engine(self):
        return "Car engine started."

class Motorcycle(Vehicle):
    def start_engine(self):
        return "Motorcycle engine started."

# Try to create an object of the abstract class - this will fail!
# vehicle = Vehicle("Generic") # TypeError: Can't instantiate abstract class

# Create objects of the concrete child classes
car = Car("Toyota")
motorcycle = Motorcycle("Harley")

print(car.start_engine())         # Output: Car engine started.
print(motorcycle.start_engine())  # Output: Motorcycle engine started.
```

By using **@abstractmethod**, we ensure that any class inheriting from **Vehicle** *must* have a **start_engine** method. This makes our code more robust and predictable.

## Key Takeaways

- **Polymorphism** means "many forms" and allows different objects to respond to the same method call in their own unique ways.
- **Duck Typing** is Python's approach to polymorphism: if an object has the required method, it can be used, regardless of its class.
- **Method Overriding** is when a child class provides a specific implementation for a method that is already defined in its parent class.
- **Abstract Base Classes (ABCs)** allow you to define a common interface and force child classes to implement specific methods, making your code more structured and reliable.

## Practice Exercises

1. Create a base class **Employee** with a method **calculate_salary()**. Create two child classes, **FullTimeEmployee** and **PartTimeEmployee**, that override this method to calculate salary differently (e.g., based on a fixed monthly salary vs. an hourly rate).
2. Write a function that takes a list of **Employee** objects and prints the salary for each one, demonstrating polymorphism.
3. Create an abstract class **PaymentMethod** with an abstract method **pay(amount)**. Implement two concrete classes, **CreditCard** and **PayPal**, that inherit from **PaymentMethod** and provide their own implementation for the **pay** method.

---

> **Next lesson:** [Encapsulation](encapsulation)

---
