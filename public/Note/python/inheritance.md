
# Inheritance

Inheritance is one of the cornerstones of OOP. It allows us to define a class that inherits all the methods and properties from another class.

- **Parent class** (or **superclass**, **base class**): the class being inherited from.
- **Child class** (or **subclass**, **derived class**): the class that inherits from another class.

Inheritance promotes code reusability.

## Basic Inheritance

To create a child class, you pass the parent class as an argument to the child class definition.

```python
# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        raise NotImplementedError("Subclass must implement abstract method")

# Child class
class Dog(Animal):
    def speak(self):
        return "Woof!"

# Another child class
class Cat(Animal):
    def speak(self):
        return "Meow!"

my_dog = Dog("Fido")
my_cat = Cat("Whiskers")

print(my_dog.name)
print(my_dog.speak())

print(my_cat.name)
print(my_cat.speak())
```

The **Dog** and **Cat** classes inherit the ****init**** method from **Animal**, so we can pass a **name** when creating them. They then provide their own implementation of the **speak** method.

## Overriding Methods

As seen above, child classes can **override** or redefine methods from the parent class. The **Dog** and **Cat** classes both override the **speak** method.

## The **super()** Function

The **super()** function is used to give a child class access to the methods and properties of its parent class. It is most often used inside the ****init**** method of the child class to call the parent's ****init**** method, ensuring that the parent's initialization logic is executed.

```python
class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Dog(Animal):
    def __init__(self, name, age, breed):
        # Call the parent's __init__ method
        super().__init__(name, age)
        # Add a new attribute
        self.breed = breed

    def describe(self):
        return f"{self.name} is a {self.age}-year-old {self.breed}."

my_dog = Dog("Fido", 4, "Golden Retriever")
print(my_dog.describe())
```

## Types of Inheritance

- **Single Inheritance**: A child class inherits from only one parent class. (All examples above).
- **Multiple Inheritance**: A child class inherits from multiple parent classes.

    ```python
    class A:
        pass
    class B:
        pass
    class C(A, B):
        pass
    ```

- **Multilevel Inheritance**: A child class becomes a parent for another child class.

    ```python
    class A:
        pass
    class B(A):
        pass
    class C(B):
        pass
    ```

---

## Key Takeaways

- Inheritance allows a child class to inherit attributes and methods from a parent class.
- It's a powerful tool for code reuse.
- Child classes can **override** parent methods to provide their own implementation.
- Use **super().**init**()** in the child's constructor to call the parent's constructor.

---

## Practice Exercises

1. **Vehicle Parent Class**: Create a **Vehicle** class with an ****init**** method that accepts **make** and **model**.
2. **drive Method**: Add a **drive** method to **Vehicle** that prints "Driving the vehicle".
3. **Car Child Class**: Create a **Car** class that inherits from **Vehicle**.
4. **Override drive**: Override the **drive** method in the **Car** class to print "Driving the car".
5. **Use super()**: In the **Car**'s ****init****, add a **year** attribute and use **super()** to call the parent's ****init****.

---

## Solutions

```python
# Exercise 1-5
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def drive(self):
        print("Driving the vehicle.")

class Car(Vehicle):
    def __init__(self, make, model, year):
        super().__init__(make, model)
        self.year = year

    def drive(self):
        print(f"Driving the {self.year} {self.make} {self.model}.")

my_car = Car("Toyota", "Corolla", 2022)
my_car.drive()
```

---
> **Next lesson:** [Polymorphism](polymorphism)
