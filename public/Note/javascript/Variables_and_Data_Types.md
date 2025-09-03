# **Day 2: Variables, Constants (var, let, const), and Data Types**

---

## **1. What are Variables?**

A **variable** is like a container that stores data.
Think of it as a **labeled box** where you keep some information (numbers, text, etc.) that can be used later in your program.

Example:

```js
let name = "Peter";
let age = 25;

console.log(name); // Peter
console.log(age); // 25
```

---

## **2. Declaring Variables in JavaScript**

There are **three** ways to declare variables in JavaScript:

### (A) var

- Old way of declaring variables (before 2015).
- **Function-scoped** → Available inside the function where it’s declared.
- Can be **redeclared** and **updated**.

Example:

```js
var city = "Lagos";
var city = "Abuja"; // Redeclaration allowed
console.log(city); // Abuja
```

---

### (B) let

- Introduced in **ES6 (2015)**.
- **Block-scoped** → Only works inside the block {} where it’s declared.
- Can be **updated** but not **redeclared** in the same scope.

Example:

```js
let fruit = "Apple";
fruit = "Mango"; // ✅ Allowed
// let fruit = "Orange"; ❌ Not allowed in the same block
console.log(fruit); // Mango
```

---

### (C) const

- Stands for **constant** → Value **cannot change** once assigned.
- Must be given a value immediately.
- **Block-scoped** like let.

Example:

```js
const country = "Nigeria";
// country = "Ghana"; ❌ Error: Assignment to constant variable
console.log(country); // Nigeria
```

---

## **3. Data Types in JavaScript**

JavaScript has different types of data.

### (A) **Primitive Data Types**

1. **String** → Text inside quotes

   ```js
   let name = "Peter";
   ```

2. **Number** → Numbers (integer, float, negative)

   ```js
   let age = 25;
   let price = 99.99;
   ```

3. **Boolean** → true or false

   ```js
   let isStudent = true;
   ```

4. **Undefined** → Variable declared but not assigned a value

   ```js
   let score;
   console.log(score); // undefined
   ```

5. **Null** → Intentionally empty value

   ```js
   let car = null;
   ```

6. **Symbol** → Unique identifier (rarely used in beginner stage).
7. **BigInt** → For very large numbers.

---

### (B) **Non-Primitive Data Types**

1. **Object** → Collection of key-value pairs.

   ```js
   let person = { name: "Peter", age: 25 };
   ```

2. **Array** → Ordered list of values.

   ```js
   let fruits = ["Apple", "Mango", "Orange"];
   ```

---

## **4. Example Program**

```js
let name = "John";
const country = "Nigeria";
let age = 30;
let isMarried = false;

console.log("Name:", name);
console.log("Country:", country);
console.log("Age:", age);
console.log("Married:", isMarried);
```

---

## **Classwork (Practice in Class)**

1. Declare a variable school using var and assign it your school’s name.
2. Declare a variable bestFood using let and update it to another food.
3. Declare a constant birthYear and assign it your year of birth. Try changing it (see the error).
4. Create an object student with properties: name, age, department. Print it in the console.

---

## **Assignment (Do at Home)**

1. Explain in your own words the difference between var, let, and const.
2. Create a program that stores the following data in variables and prints them:

   - Your **name** (string)
   - Your **age** (number)
   - If you are a **student** (boolean)
   - Your **favorite colors** (array of 3 colors)
   - Your **profile** (object with name, age, and hobby)

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Profile</title>
  </head>
  <body>
    <h1>Welcome to My Profile</h1>

    <script>
      let name = "John";
      let age = 30;
      let isStudent = true;
      let favoriteColors = ["Blue", "Green", "Red"];
      let profile = {
        name: "John",
        age: 30,
        hobby: "Reading",
      };

      console.log("Name:", name);
      console.log("Age:", age);
      console.log("Student:", isStudent);
      console.log("Favorite Colors:", favoriteColors);
      console.log("Profile:", profile);
    </script>
  </body>
</html>
```
