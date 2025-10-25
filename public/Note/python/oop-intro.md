# Introduction to Object-Oriented Programming (OOP)

## What is OOP?

Object-Oriented Programming (OOP) is a way of thinking about and organizing code. Instead of writing long scripts of instructions, you create "objects" that group together related data and behaviors.

Think about a real-world object, like a car. A car has:

- **Data (Attributes):** color, brand, model, speed.
- **Behaviors (Methods):** start engine, accelerate, brake.

In OOP, we model real-world things like this. We create a **Car** "blueprint" (called a **class**) and then create individual cars (called **objects**) from that blueprint.

## Why Use OOP?

OOP helps us write code that is:

- **Organized:** Groups related code together, making it easier to find and manage.
- **Reusable:** Write a class once and reuse it to create many objects.
- **Maintainable:** Changes to one part of the code are less likely to break other parts.
- **Scalable:** Makes it easier to build large, complex applications.

## Core Concepts of OOP

There are four main pillars of OOP:

1. **Encapsulation:** Bundling data and methods that work on that data within one unit (a class). This hides the internal complexity from the outside world.
2. **Abstraction:** Hiding the complex implementation details and showing only the necessary features of an object. The car's accelerator pedal is an abstraction—you just press it; you don't need to know how the engine works.
3. **Inheritance:** Allowing a new class to adopt the properties and methods of an existing class. A **SportsCar** class could inherit from a **Car** class and add new features like a **turbo_boost** method.
4. **Polymorphism:** Allowing objects of different classes to be treated as objects of a common superclass. It means "many forms," and it lets us write flexible code that can work with different but related objects in the same way.

## Procedural vs. OOP

Let's compare a simple procedural approach to an OOP approach.

### Procedural Approach

In procedural programming, data and functions are separate.

```python
# Data is separate from the functions
car1_data = {"color": "red", "speed": 0}
car2_data = {"color": "blue", "speed": 0}

def accelerate(car, amount):
    car["speed"] += amount

def brake(car, amount):
    car["speed"] -= amount

accelerate(car1_data, 10)
print(f"Car 1 speed: {car1_data['speed']}") # Output: 10
```

This works, but it can get messy. The data and functions aren't tightly connected.

### OOP Approach

In OOP, we bundle the data and functions into a **Car** object.

```python
# Blueprint for a car
class Car:
    def __init__(self, color):
        self.color = color
        self.speed = 0

    def accelerate(self, amount):
        self.speed += amount

    def brake(self, amount):
        self.speed -= amount

# Create objects (instances) from the class
car1 = Car("red")
car2 = Car("blue")

car1.accelerate(10)
print(f"Car 1 speed: {car1.speed}") # Output: 10
```

Notice how the data (**color**, **speed**) and the functions (**accelerate**, **brake**) are now part of the **Car** class. This is much cleaner and more intuitive.

## Key Terminology

- **Class:** A blueprint for creating objects. It defines the attributes and methods that all objects of that class will have.
- **Object (Instance):** A specific item created from a class. **car1** and **car2** are objects of the **Car** class.
- **Attribute:** A variable that belongs to an object (e.g., **car1.color**). It represents the state or data of the object.
- **Method:** A function that belongs to an object (e.g., **car1.accelerate**). It represents the behavior of the object.
- ****self**:** A special variable in Python that refers to the current instance of the class. It's how an object can access its own attributes and methods.

## Real-World Analogy: A Cookie Cutter

- **Class:** The cookie cutter. It defines the shape and design of the cookie.
- **Object:** The actual cookie. You can create many cookies (objects) from the same cutter (class).
- **Attributes:** The properties of the cookie, like its flavor or whether it has sprinkles.
- **Methods:** The things you can do with the cookie, like **eat()** or **decorate()**.

## What to Expect Next

In the upcoming lessons, we will dive deep into each of the core OOP concepts:

- **Classes and Objects:** Learn the syntax for creating and using them.
- **Attributes and Methods:** Understand how to define and access the data and behavior of objects.
- **Inheritance:** See how to create specialized classes from general ones.
- **Polymorphism:** Discover how to write flexible, interchangeable code.
- **Encapsulation:** Learn to protect your data and hide complexity.

## Key Takeaways

- OOP organizes code around "objects," which bundle data (attributes) and behavior (methods).
- It makes code more reusable, maintainable, and scalable.
- The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism.
- A **class** is a blueprint, and an **object** is an instance created from that blueprint.

---

> **Next lesson:** [Classes and Objects](classes-objects)

---
