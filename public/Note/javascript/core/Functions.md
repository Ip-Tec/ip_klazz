# 📘 Day 7: Functions (Definition, Parameters, Return Values)

## 🔹 What is a Function?

A **function** in JavaScript is a block of code designed to perform a particular task.
Instead of writing the same code multiple times, we can put it inside a function and call it whenever needed.

👉 Functions help make code **reusable, modular, and easier to read**.

---

## 🔹 Defining a Function

There are different ways to define a function:

### 1. Function Declaration

```javascript
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

// calling the function
greet();
```

### 2. Function with Parameters

Parameters act like variables for input values.

```javascript
function greetUser(name) {
  console.log("Hello " + name + "!");
}

greetUser("Peter");
greetUser("Amaka");
```

### 3. Function with Return Value

Functions can return values instead of just printing them.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(5, 7);
console.log("Result: " + result); // 12
```

---

## 🔹 Parameters vs. Arguments

- **Parameters** → placeholders defined in the function '(a, b)'.
- **Arguments** → actual values passed when calling '(5, 7)'.

---

## 🔹 Function Expression

Functions can also be stored in variables.

```javascript
const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(4, 5)); // 20
```

---

## 🔹 Arrow Functions (ES6)

A shorter way to write functions.

```javascript
const subtract = (a, b) => a - b;

console.log(subtract(10, 3)); // 7
```

---

## 🔹 Example: Function that checks even/odd

```javascript
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkEvenOdd(4)); // Even
console.log(checkEvenOdd(7)); // Odd
```

---

## 🎯 Classwork

1. Write a function 'square(num)' that returns the square of a number.
2. Create a function 'greetPerson(name, age)' that prints '"Hello [name], you are [age] years old."'.
3. Write a function 'sumNumbers(a, b, c)' that returns the sum of three numbers.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Classwork Solutions</title>
  </head>
  <body>
    <script>
      // Classwork 1: square function
      function square(num) {
        return num * num;
      }

      console.log("Classwork 1:");
      console.log("Square of 5: " + square(5)); // Expected: 25
      console.log("Square of 10: " + square(10)); // Expected: 100

      // Classwork 2: greetPerson function
      function greetPerson(name, age) {
        console.log("Hello " + name + ", you are " + age + " years old.");
      }

      console.log("\nClasswork 2:");
      greetPerson("Alice", 30); // Expected: Hello Alice, you are 30 years old.
      greetPerson("Bob", 24); // Expected: Hello Bob, you are 24 years old.

      // Classwork 3: sumNumbers function
      function sumNumbers(a, b, c) {
        return a + b + c;
      }

      console.log("\nClasswork 3:");
      console.log("Sum of 1, 2, 3: " + sumNumbers(1, 2, 3)); // Expected: 6
      console.log("Sum of 10, 20, 30: " + sumNumbers(10, 20, 30)); // Expected: 60
    </script>
  </body>
</html>
```

---

## 📝 Assignment

1. Write a function 'isAdult(age)' that returns '"Adult"' if age ≥ 18, otherwise '"Minor"'.
2. Create a function 'findMax(a, b, c)' that returns the largest of three numbers.
3. Write a function 'toCelsius(fahrenheit)' that converts Fahrenheit to Celsius using the formula:

   $$
   C = \frac{(F - 32) \times 5}{9}
   $$

**Solution**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Assignment Solutions</title>
  </head>
  <body>
    <script>
      // Assignment 1: isAdult function
      function isAdult(age) {
        if (age >= 18) {
          return "Adult";
        } else {
          return "Minor";
        }
      }

      console.log("Assignment 1:");
      console.log("Age 20: " + isAdult(20)); // Expected: Adult
      console.log("Age 16: " + isAdult(16)); // Expected: Minor

      // Assignment 2: findMax function
      function findMax(a, b, c) {
        let max = a;
        if (b > max) {
          max = b;
        }
        if (c > max) {
          max = c;
        }
        return max;
      }

      console.log("\nAssignment 2:");
      console.log("Max of 10, 5, 8: " + findMax(10, 5, 8)); // Expected: 10
      console.log("Max of 3, 12, 7: " + findMax(3, 12, 7)); // Expected: 12
      console.log("Max of 1, 2, 3: " + findMax(1, 2, 3)); // Expected: 3

      // Assignment 3: toCelsius function
      function toCelsius(fahrenheit) {
        return ((fahrenheit - 32) * 5) / 9;
      }

      console.log("\nAssignment 3:");
      console.log("70°F to Celsius: " + toCelsius(70).toFixed(2) + "°C"); // Expected: 21.11°C
      console.log("32°F to Celsius: " + toCelsius(32).toFixed(2) + "°C"); // Expected: 0.00°C
      console.log("212°F to Celsius: " + toCelsius(212).toFixed(2) + "°C"); // Expected: 100.00°C
    </script>
  </body>
</html>
```
