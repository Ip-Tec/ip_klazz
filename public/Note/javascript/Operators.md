# **Day 3: Operators in JavaScript (Arithmetic, Comparison, Logical, Assignment)**

---

## **1. What are Operators?**

Operators are **symbols** that perform operations on values or variables.
Example:

```js
let x = 5;
let y = 2;
console.log(x + y); // 7
```

Here + is an **operator**.

---

## **2. Arithmetic Operators**

Used to perform **mathematical calculations**.

| Operator                | Example        | Result |
| ----------------------- | -------------- | ------ |
| + (Addition)            | 5 + 2          | 7      |
| - (Subtraction)         | 5 - 2          | 3      |
| * (Multiplication)      | 5 * 2          | 10     |
| / (Division)            | 5 / 2          | 2.5    |
| % (Modulus / Remainder) | 5 % 2          | 1      | 
| ** (Exponentiation)     | 5 ** 2         | 25     |
| ++ (Increment)          | let a = 5; a++ | 6      |
| -- (Decrement)          | let b = 5; b-- | 4      |

Example:

```js
let a = 10,
  b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
```

---

## **3. Comparison Operators**

Used to **compare values**. They return true or false.

| Operator | Meaning                            | Example     | Result   |
| -------- | ---------------------------------- | ----------- | -------- |
| ==       | Equal to (checks value only)       | 5 == "5"    | true     |
| ===      | Strict equal (checks value & type) | 5 === "5"   | false    |
| !=       | Not equal                          | 5 != 3      | true     | 
| !==      | Strict not equal                   | 5 !== "5"   | true     |
| >        | Greater than                       | 5 > 3       | true     |
| <        | Less than                          | 5 < 3       | false    |
| >=       | Greater or equal                   | 5 >= 5      | true     |
| <=       | Less or equal                      | 3 <= 5      | true     |

Example:

```js
console.log(10 > 5); // true
console.log(10 == "10"); // true
console.log(10 === "10"); // false
```

---

## **4. Logical Operators**

Used to combine conditions.

| Operator | Meaning                         | Example             | Result  |           |        |
| -------- | ------------------------------- | ------------------- | ------- | --------- | ------ |
| &&       | AND → true if **both** are true | (5 > 2 && 10 > 3)   | true    |           |        |
| \|\|     | OR → true if **one** is true    | \(5 > 10            |         | 10 > 3)\  | true   |
| !        | NOT → reverses condition        | !(5 > 2)            | false   |           |        |

Example:

```js
let age = 20;
console.log(age > 18 && age < 30); // true
console.log(age > 25 || age < 18); // false
console.log(!(age > 18)); // false
```

---

## **5. Assignment Operators**

Used to assign values to variables.

| Operator | Example              | Meaning      |
| -------- | -------------------- | ------------ |
| =        | x = 5                | Assign value |
| +=       | x += 3 → x = x + 3   |              |
| -=       | x -= 3 → x = x - 3   |              |
| *=       | x *= 3 → x = x * 3   |              |
| /=       | x /= 3 → x = x / 3   |              |
| %=       | x %= 3 → x = x % 3   |              |

Example:

```js
let x = 10;
x += 5; // x = 15
x *= 2; // x = 30
console.log(x);
```

---

## **6. Example Program**

```js
let a = 8,
  b = 4;

// Arithmetic
console.log("Addition:", a + b);

// Comparison
console.log("Is a greater than b?", a > b);

// Logical
console.log("Both conditions true?", a > 5 && b < 10);

// Assignment
let c = 10;
c += 5;
console.log("New value of c:", c);
```

---

## **Classwork (Practice in Class)**

1. Write a program that calculates:

   - Sum, difference, product, and remainder of 15 and 4.

2. Check if 10 is strictly equal to "10".
3. Check if 20 is greater than 15 **and** less than 30.
4. Create a variable points = 50. Use assignment operators to:

   - Add 10
   - Multiply by 2
   - Subtract 5
     Print the final result.

**Solution**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Classwork</title>
  </head>
  <body>
    <h3>Assignment 1</h3>
    <script>
      //   write a program that calculates sum, difference, product, and remainder of 15 and 4.
      let a = 15;
      let b = 4;
      console.log("Sum:", a + b);
      console.log("Difference:", a - b);
      console.log("Product:", a * b);
      console.log("Remainder:", a % b);
    </script>
    <h3>Assignment 2</h3>
    <script>
      //   Check if 10 is strictly equal to 10
      let age = 10;
      if (age === 10) {
        console.log("Age is strictly equal to 10");
      }
      //   short way
      console.log("Short Way Answer", age === 10);
    </script>
    <h3>Assignment 3</h3>
    <script>
      //   Check if 20 is greater then 15 and less then 30
      let age = 20;
      if (age > 15 && age < 30) {
        console.log("Age is between 15 and 30");
      }
      //   short way
      console.log("Short Way Answer", age > 15 && age < 30);
    </script>
    <h3>Assignment 4</h3>
    <script>
      let points = 50;
      points += 10;
      points *= 2;
      points -= 5;
      console.log("Final points:", points);
    </script>
  </body>
</html>
```

---

## **Assignment (Do at Home)**

1. Create a small program where:

   - You declare marks = 75
   - Check if the student passed (marks ≥ 50) → print "Passed"
   - Check if marks ≥ 80 → print "Excellent".

2. Create a program that checks if a number is even or odd using the modulus operator %.
3. Write a program that takes two numbers (x = 12, y = 7) and prints:

   - Their sum
   - Whether x is greater than y
   - Whether both numbers are greater than 10

**Solution**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Assignments</title>
  </head>
  <body>
    <h1>JavaScript Assignments</h1>

    <script>
      // Assignment 1
      let marks = 75;
      if (marks >= 50) {
        console.log("Passed");
      }
      if (marks >= 80) {
        console.log("Excellent");
      }

      // Assignment 2
      let number = 10;
      if (number % 2 === 0) {
        console.log("Even");
      } else {
        console.log("Odd");
      }

      // Assignment 3
      let x = 12;
      let y = 7;
      console.log("Sum:", x + y);
      console.log("Is x greater than y?", x > y);
      console.log("Are both numbers greater than 10?", x > 10 && y > 10);
    </script>
  </body>
</html>
```
