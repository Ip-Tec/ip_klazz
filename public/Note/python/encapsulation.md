# Encapsulation in Python

## What is Encapsulation?

Encapsulation is one of the four fundamental concepts of Object-Oriented Programming (OOP). It refers to the bundling of data (attributes) and the methods that operate on that data into a single unit, called a **class**.

More importantly, encapsulation involves **restricting access** to an object's internal components. This is also known as **information hiding**.

Think of a car. You, the driver, interact with a simple interface: a steering wheel, pedals, and a gear stick. You don't need to know the complex details of the engine, transmission, or electronics to drive it. The car's internal complexity is encapsulated, or hidden from you.

## Why Use Encapsulation?

- **Data Protection:** It prevents accidental or unauthorized modification of an object's data. You control how data is accessed and changed.
- **Simplicity:** It hides complexity. Users of your class only need to know about the public methods, not the internal implementation.
- **Flexibility & Maintainability:** You can change the internal implementation of a class without breaking the code that uses it, as long as the public interface remains the same.

## Access Modifiers in Python

Python doesn't have strict **public**, **private**, or **protected** keywords like other languages (e.g., Java or C++). Instead, it uses naming conventions to indicate the intended visibility of attributes and methods.

### 1. Public Members

By default, all attributes and methods in a Python class are **public**. This means they can be accessed from anywhere, both inside and outside the class.

```python
class Car:
    def __init__(self, brand, model):
        self.brand = brand  # Public attribute
        self.model = model  # Public attribute

    def display_info(self):
        # Public method
        return f"{self.brand} {self.model}"

my_car = Car("Toyota", "Corolla")

# Accessing public members from outside the class
print(my_car.brand)         # Output: Toyota
print(my_car.display_info()) # Output: Toyota Corolla

# We can also modify public attributes directly (which can be risky)
my_car.brand = "Honda"
print(my_car.brand)         # Output: Honda
```

### 2. Protected Members (by Convention)

A single underscore **_** prefix indicates that an attribute or method is **protected**. This is a convention that tells other developers, "You shouldn't access this directly from outside the class, but you can if you really need to."

Python does not enforce this restriction. It's a hint for programmers.

```python
class BankAccount:
    def __init__(self, balance):
        self._balance = balance # Protected attribute

    def _calculate_interest(self):
        # Protected method
        return self._balance * 0.05

    def display_balance(self):
        print(f"Your balance is: {self._balance}")

acc = BankAccount(1000)

# You can still access protected members, but you shouldn't
print(acc._balance) # Output: 1000
acc._balance = -500 # This is bad practice!
acc.display_balance() # Output: Your balance is: -500
```

Protected members are typically used in inheritance, where child classes might need to access them.

### 3. Private Members (by Convention)

A double underscore **__** prefix indicates that an attribute or method is **private**. This triggers a mechanism in Python called **name mangling**.

When you use **__**, Python changes the name of the attribute internally to **_ClassName__attributeName**. This makes it much harder to access from outside the class.

```python
class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.__salary = salary # Private attribute

    def __calculate_bonus(self):
        # Private method
        return self.__salary * 0.10

    def get_annual_salary(self):
        bonus = self.__calculate_bonus()
        return self.__salary * 12 + bonus

emp = Employee("Alice", 60000)

# Try to access private members from outside
# print(emp.__salary) # AttributeError: 'Employee' object has no attribute '__salary'

# We can still access it if we know the mangled name (but DON'T do this!)
# print(emp._Employee__salary) # Output: 60000

# The correct way is to use public methods
print(f"{emp.name}'s annual salary is: ${emp.get_annual_salary()}")
# Output: Alice's annual salary is: $726000.0
```

## Getters and Setters

To provide safe access to private attributes, we use **getter** and **setter** methods.

- A **getter** method retrieves the value of an attribute.
- A **setter** method updates the value of an attribute, often with some validation logic.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.__age = age # Private age

    # Getter for age
    def get_age(self):
        return self.__age

    # Setter for age
    def set_age(self, new_age):
        if 0 < new_age < 120:
            self.__age = new_age
        else:
            print("Invalid age. Please provide a valid age.")

student = Student("Bob", 20)

# Use the getter to access the age
print(f"Bob's age is: {student.get_age()}") # Output: Bob's age is: 20

# Use the setter to change the age
student.set_age(25)
print(f"Bob's new age is: {student.get_age()}") # Output: Bob's new age is: 25

# Try to set an invalid age
student.set_age(200)
# Output: Invalid age. Please provide a valid age.
print(f"Bob's age is still: {student.get_age()}") # Output: Bob's age is still: 25
```

This approach gives you full control over your attributes.

## Pythonic Way: Using Properties

Writing **get_age()** and **set_age()** is common in other languages, but Python provides a more elegant way to do this using the **@property** decorator.

**@property** allows you to define a method that can be accessed like an attribute.

```python
class Student:
    def __init__(self, name, age):
        self.name = name
        self.__age = age

    @property
    def age(self):
        """This is the 'getter' for age."""
        return self.__age

    @age.setter
    def age(self, new_age):
        """This is the 'setter' for age."""
        if 0 < new_age < 120:
            self.__age = new_age
        else:
            print("Invalid age.")

student = Student("Charlie", 22)

# Access the age just like a public attribute
print(student.age) # Output: 22 (calls the getter)

# Change the age just like a public attribute
student.age = 23   # Calls the setter
print(student.age) # Output: 23

student.age = -5   # Calls the setter, which prints an error
# Output: Invalid age.
```

This is the preferred, "Pythonic" way to implement getters and setters. It provides a clean and simple interface while still encapsulating the internal logic.

## Key Takeaways

- **Encapsulation** bundles data and methods and restricts direct access to an object's internal state.
- Python uses naming conventions for access control:
  - **name** (public): Accessible from anywhere.
  - **_name** (protected): A hint not to access from outside the class.
  - **__name** (private): Triggers name mangling, making it hard to access from outside.
- **Getters** and **Setters** are methods used to safely access and modify private attributes.
- The **@property** decorator is the Pythonic way to create getters and setters, allowing you to use attribute-like syntax.

---

> **Next lesson:** [Magic Methods](magic-methods)

---
