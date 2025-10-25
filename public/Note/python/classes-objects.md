
# Classes and Objects

A **class** is a blueprint for creating objects. An **object** (also called an **instance**) is a specific entity created from a class. For example, if **Dog** is a class, then your specific pet dog is an object of that class.

## Defining a Class

You define a class using the **class** keyword. By convention, class names are written in **PascalCase**.

```python
class Dog:
    pass
```

This is a minimal class definition. The **pass** keyword is a placeholder indicating that the class is empty for now.

## Creating an Object (Instantiation)

To create an object from a class, you call the class as if it were a function. This process is called **instantiation**.

```python
# Create two Dog objects
dog1 = Dog()
dog2 = Dog()

print(dog1)
print(dog2)
```

This will print something like **<**main**.Dog object at 0x...>**, showing that **dog1** and **dog2** are two distinct objects of the **Dog** class.

## Attributes

Attributes are variables that belong to a class or an object.

### Class Attributes

A class attribute is shared by all instances of the class.

```python
class Dog:
    # Class attribute
    species = "Canis familiaris"

dog1 = Dog()
dog2 = Dog()

print(dog1.species) # Access through an instance
print(dog2.species)
print(Dog.species)  # Access through the class
```

### Instance Attributes

An instance attribute is specific to each object. You can add them to an object dynamically, though this is not the standard way (we'll see the proper way in the next lesson).

```python
class Dog:
    species = "Canis familiaris"

dog1 = Dog()
dog1.name = "Fido"  # Add an instance attribute
dog1.age = 4

dog2 = Dog()
dog2.name = "Buddy"
dog2.age = 2

print(f"{dog1.name} is {dog1.age} years old.")
print(f"{dog2.name} is {dog2.age} years old.")
```

## Methods

Methods are functions defined inside a class that operate on objects.

### The **self** Parameter

The first parameter of any instance method is always **self**. It's a reference to the current instance of the class, and it's used to access variables that belong to that instance. Python passes **self** automatically when you call the method on an object.

```python
class Dog:
    species = "Canis familiaris"

    # Instance method
    def bark(self):
        print("Woof!")

    def describe(self):
        # 'self.name' will cause an error if the attribute hasn't been set
        print(f"My name is {self.name}.")

dog1 = Dog()
dog1.name = "Fido"

dog1.bark()      # Python automatically passes dog1 as 'self'
dog1.describe()
```

---

## Key Takeaways

- A class is a blueprint, defined with the **class** keyword.
- An object is an instance of a class.
- Class attributes are shared by all objects of a class.
- Instance attributes are unique to each object.
- Methods are functions in a class, and instance methods always take **self** as their first parameter.

---

## Practice Exercises

1. **Create a **Car** class**: Define a **Car** class with a class attribute **wheels = 4**.
2. **Instantiate Objects**: Create two **Car** objects.
3. **Add Attributes**: Give each **Car** object instance attributes for **color** and **make** (e.g., "Toyota").
4. **Add a Method**: Add a method **honk(self)** to the **Car** class that prints "Beep beep!". Call this method on your car objects.

---

## Solutions

```python
# Exercise 1-4
class Car:
    # Class attribute
    wheels = 4

    # Method
    def honk(self):
        print("Beep beep!")

# Create objects
car1 = Car()
car2 = Car()

# Add instance attributes
car1.color = "Red"
car1.make = "Toyota"

car2.color = "Blue"
car2.make = "Ford"

# Access attributes and call method
print(f"Car 1 is a {car1.color} {car1.make} with {car1.wheels} wheels.")
car1.honk()

print(f"Car 2 is a {car2.color} {car2.make} with {Car.wheels} wheels.")
car2.honk()
```

---
> **Next lesson:** [Attributes and Methods](attributes-methods)
