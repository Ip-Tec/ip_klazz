
# **Day 10: Objects (Properties, Methods, 'this', Constructors, Classes, Prototypes)**

---

## **1. What is an Object?**

An object is a collection of **key–value pairs**.

* Keys → **properties**
* Values → data (string, number, array, function, object, etc.)

```js
let person = {
  name: "Peter",
  age: 25,
  greet: function() {
    console.log("Hello, I am " + this.name);
  }
};

console.log(person.name); // Peter
person.greet(); // Hello, I am Peter
```

---

## **2. The `this` Keyword**

* `this` refers to the **object that owns the method**.
* Works differently in arrow functions (they don’t bind their own `this`).

```js
let user = {
  username: "john",
  showInfo: function() {
    console.log("Username: " + this.username);
  }
};

user.showInfo(); // Username: john
```

---

## **3. Object Constructors**

A **constructor function** is used to create multiple similar objects.
Convention: constructor names start with a **capital letter**.

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    console.log(`Hi, I’m ${this.name}, ${this.age} years old.`);
  };
}

let person1 = new Person("Amaka", 20);
let person2 = new Person("Peter", 25);

person1.introduce(); // Hi, I’m Amaka, 20 years old.
person2.introduce(); // Hi, I’m Peter, 25 years old.
```

---

## **4. Classes (ES6)**

Classes are a cleaner way to write constructor functions.

```js
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    console.log(`${this.name} is a ${this.type}`);
  }
}

let dog = new Animal("Bingo", "Dog");
let cat = new Animal("Kitty", "Cat");

dog.speak(); // Bingo is a Dog
cat.speak(); // Kitty is a Cat
```

### Inheritance with `extends`

```js
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  showBrand() {
    console.log(`This vehicle is a ${this.brand}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // call parent constructor
    this.model = model;
  }
  showInfo() {
    console.log(`${this.brand} ${this.model}`);
  }
}

let car = new Car("Toyota", "Corolla");
car.showInfo(); // Toyota Corolla
```

---

## **5. Prototypes**

In JavaScript, **all functions and objects have a prototype**.

* Prototype is used to **add shared methods** so they are not recreated for every object.

```js
function Student(name, grade) {
  this.name = name;
  this.grade = grade;
}

// Add a method using prototype
Student.prototype.sayHi = function() {
  console.log(`Hi, I’m ${this.name} in grade ${this.grade}`);
};

let s1 = new Student("Tunde", "SS2");
let s2 = new Student("Ada", "SS3");

s1.sayHi(); // Hi, I’m Tunde in grade SS2
s2.sayHi(); // Hi, I’m Ada in grade SS3
```

👉 This saves memory compared to defining `sayHi` inside the constructor.

---

## **6. Example Program**

```js
class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`${this.owner} deposited ${amount}. New Balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`${this.owner} withdrew ${amount}. New Balance: ${this.balance}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
}

let acc1 = new BankAccount("Peter", 1000);
acc1.deposit(500); // Peter deposited 500. New Balance: 1500
acc1.withdraw(200); // Peter withdrew 200. New Balance: 1300
```

---

## **7. Classwork**

1. Create a `Book` constructor with properties: `title`, `author`, and `year`. Add a method `getSummary()` that returns a string.
2. Rewrite the `Book` constructor using a **class**.
3. Create a `Teacher` constructor with properties: `name`, `subject`. Add a method using **prototype** that says:
   `"I am [name], I teach [subject]"`.

---

## **8. Assignment**

1. Write a `Car` class with properties `brand`, `model`, and a method `drive()` that prints: `"Driving [brand] [model]"`.
2. Create a `Person` constructor with properties `name`, `age`. Add a prototype method `isAdult()` that returns `true` if age ≥ 18, otherwise `false`.
3. Create a `Shape` base class with a method `area()`. Extend it to make a `Rectangle` class that calculates area (length × width).
4. Explain the difference between **constructors, classes, and prototypes** in your own words.

---
## **9. Higher-Order Array Methods (Bonus)**

### **`map()`, `filter()`, `reduce()`**
These methods can be used on arrays of objects too!

```js
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 }
];

// Get an array of user names
let names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// Get users older than 28
let olderUsers = users.filter(user => user.age > 28);
console.log(olderUsers); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// Get the total age of all users
let totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log(totalAge); // 90
```
