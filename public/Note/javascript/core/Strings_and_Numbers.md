# **Day 4: Strings & Numbers (Methods, Math Object, Type Conversion)**

---

## **1. Strings in JavaScript**

A **string** is a sequence of characters enclosed in quotes ("", '', or backticks '\''\''\''\').

Example:

```js
let firstName = "Peter";
let message = "Hello, World!";
let template = `My name is ${firstName}`;
```

---

### **Common String Methods**

| Method             | Example                       | Result        |
| ------------------ | ----------------------------- | ------------- |
| .length            | "hello".length                | 5             |
| .toUpperCase()     | "hello".toUpperCase()         | "HELLO"       |
| .toLowerCase()     | "HELLO".toLowerCase()         | "hello"       |
| .charAt(n)         | "hello".charAt(1)             | "e"           |
| .indexOf("sub")    | "hello".indexOf("e")          | 1             |
| .includes("word")  | "JavaScript".includes("Java") | true          |
| .slice(start, end) | "JavaScript".slice(0,4)       | "Java"        |
| .replace("a","o")  | "Java".replace("a","o")       | "Jovo"        |
| .trim()            | " hello ".trim()              | "hello"       |
| .split(",")        | "a,b,c".split(",")            | ["a","b","c"] |

Example:

```js
let text = " JavaScript ";
console.log(text.trim()); // "JavaScript"
console.log(text.toUpperCase()); // "JAVASCRIPT"
console.log(text.slice(0, 4)); // "Java"
```

---

## **2. Numbers in JavaScript**

Numbers can be integers or decimals.

Example:

```js
let age = 25;
let price = 99.99;
```

### **Common Number Methods**

| Method             | Example                  | Result |
| ------------------ | ------------------------ | ------ |
| .toString()        | (123).toString()         | "123"  |
| .toFixed(2)        | (3.14159).toFixed(2)     | "3.14" |
| .toPrecision(3)    | (3.14159).toPrecision(3) | "3.14" |
| Number("123")      | Number("123")            | 123    |
| parseInt("12.9")   | parseInt("12.9")         | 12     |
| parseFloat("12.9") | parseFloat("12.9")       | 12.9   |

Example:

```js
let num = 45.678;
console.log(num.toFixed(2)); // "45.68"
console.log(parseInt("100px")); // 100
console.log(parseFloat("12.5kg")); // 12.5
```

---

## **3. Math Object**

JavaScript has a built-in Math object with useful functions.

| Function           | Example                  | Result     |
| ------------------ | ------------------------ | ---------- |
| Math.round(x)      | Math.round(4.6)          | 5          |
| Math.floor(x)      | Math.floor(4.9)          | 4          |
| Math.ceil(x)       | Math.ceil(4.1)           | 5          |
| Math.max(a,b,...)  | Math.max(3,7,9)          | 9          |
| Math.min(a,b,...)  | Math.min(3,7,9)          | 3          |
| Math.random()      | random between 0 and 1   | e.g. 0.57  |
| Math.pow(a,b)      | Math.pow(2,3)            | 8          |
| Math.sqrt(x)       | Math.sqrt(16)            | 4          |

Example:

```js
console.log(Math.round(7.8)); // 8
console.log(Math.floor(7.8)); // 7
console.log(Math.ceil(7.2)); // 8
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.random()); // random between 0 and 1
```

---

## **4. Type Conversion**

JavaScript allows converting between strings and numbers.

### **String → Number**

```js
let str = "123";
console.log(Number(str)); // 123
console.log(parseInt("45.7")); // 45
console.log(parseFloat("45.7")); // 45.7
```

### **Number → String**

```js
let num = 99;
console.log(String(num)); // "99"
console.log(num.toString()); // "99"
```

### **Boolean → Number / String**

```js
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(String(true)); // "true"
```

---

## **5. Example Program**

```js
let name = "Peter";
let age = 24;

// String methods
console.log(name.toUpperCase()); // "PETER"

// Number methods
let price = 199.567;
console.log(price.toFixed(2)); // "199.57"

// Math object
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Number (1-10):", randomNum);

// Type conversion
let strAge = "30";
console.log(Number(strAge) + 5); // 35
```

---

## **Classwork (Practice in Class)**

1. Store your full name in a variable and:

   - Print it in uppercase.
   - Print the first 4 letters using '.slice()'.

2. Convert '3.14159' to:

   - 2 decimal places using '.toFixed()'.
   - 3 significant figures using '.toPrecision()'.

3. Use the 'Math' object to:

   - Find the square root of 81.
   - Generate a random number between 1 and 100.

---

**Solution**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Practice</title>
  </head>
  <body>
    <script>
      // Assignment 1
      let str = " Hello World ";
      str = str.trim().toLowerCase();
      console.log(str.includes("world"));
    </script>

    <script>
      // Assignment 2
      let age = "25";
      age = Number(age);
      console.log(age + 5);
    </script>

    <script>
      // Assignment 3
      for (let i = 0; i < 5; i++) {
        console.log(Math.floor(Math.random() * 50) + 1);
      }
    </script>
  </body>
</html>
```

---

## **Assignment (Do at Home)**

1. Write a program that takes " Hello World " and:

   - Removes extra spaces.
   - Converts it to lowercase.
   - Checks if it includes "world".

2. Create a program that asks for a user’s age as a string (e.g., "25") and converts it to a number. Then add 5 and print the result.
3. Generate 5 random numbers between 1 and 50 and print them.

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
      let str = " Hello World ";
      str = str.trim().toLowerCase();
      console.log(str.includes("world"));
    </script>

    <script>
      // Assignment 2
      let age = "25";
      age = Number(age);
      console.log(age + 5);
    </script>

    <script>
      // Assignment 3
      for (let i = 0; i < 5; i++) {
        console.log(Math.floor(Math.random() * 50) + 1);
      }
    </script>
  </body>
</html>
```
