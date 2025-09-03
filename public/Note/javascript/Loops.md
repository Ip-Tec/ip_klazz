# **Day 6: Loops in JavaScript ('for', 'while', 'do…while', 'for…of', 'for…in')**

---

## **1. What are Loops?**

Loops allow you to **repeat a block of code multiple times** without writing it again and again.
👉 Example: If you want to print numbers 1 to 100, instead of writing 100 'console.log' statements, you use a loop.

---

## **2. 'for' Loop**

Used when you know **how many times** you want to repeat something.

**Syntax:**

```js
for (initialization; condition; update) {
  // code block
}
```

**Example:**

```js
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}
// Output: 1 2 3 4 5
```

---

## **3. 'while' Loop**

Used when you **don’t know how many times** the loop should run, but you know the **condition**.

**Syntax:**

```js
while (condition) {
  // code block
}
```

**Example:**

```js
let i = 1;
while (i <= 5) {
  console.log("Count:", i);
  i++;
}
```

---

## **4. 'do…while' Loop**

Similar to 'while', but it runs **at least once** before checking the condition.

**Syntax:**

```js
do {
  // code block
} while (condition);
```

**Example:**

```js
let i = 1;
do {
  console.log("Value:", i);
  i++;
} while (i <= 5);
```

---

## **5. 'for…of' Loop**

Used to loop through **arrays, strings, or iterable objects**.

**Example with array:**

```js
let fruits = ["Apple", "Mango", "Orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output: Apple Mango Orange
```

**Example with string:**

```js
let word = "Hi";
for (let char of word) {
  console.log(char);
}
// Output: H i
```

---

## **6. 'for…in' Loop**

Used to loop through **object properties**.

**Example:**

```js
let student = { name: "Peter", age: 25, dept: "Physics" };

for (let key in student) {
  console.log(key + ":", student[key]);
}
// Output:
// name: Peter
// age: 25
// dept: Physics
```

---

## **7. Example Program**

```js
// Print even numbers between 1 and 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Loop through an array with for…of
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
  console.log(color);
}

// Loop through an object with for…in
let car = { brand: "Toyota", year: 2020 };
for (let key in car) {
  console.log(key, "=", car[key]);
}
```

---

## **Classwork (Practice in Class)**

1. Use a 'for' loop to print numbers from 1 to 20.
2. Use a 'while' loop to print numbers from 10 down to 1.
3. Use a 'do…while' loop to print '"Hello"' 5 times.
4. Create an array of 5 cities and print each one using 'for…of'.
5. Create an object 'person' with properties: 'name', 'age', 'country'. Print each property using 'for…in'.

## **Solution**

```html

<!DOCTYPE html>
<html>
    <head>
    <title>JavaScript Practice</title>
        <head>
        <body>
            <h2>Use a 'for' loop to print numbers from 1 to 20.</h2>
            <script>
                // Use a 'for' loop to print numbers from 1 to 20.
            for (let i = 1; i <= 20; i++) {
                    console.log(i);
                }

                // Use a 'while' loop to print numbers from 10 down to 1.
                let j = 10;
                while (j >= 1) {
                    console.log(j);
                    j--;
                }

                // Use a 'do…while' loop to print "Hello" 5 times.
                let k = 0;
                do {
                    console.log("Hello");
                    k++;
                } while (k < 5);

                // Create an array of 5 cities and print each one using 'for…of'.
                let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];
                for (let city of cities) {
                    console.log(city);
                }

                // Create an object 'person' with properties: 'name', 'age', 'country'. Print each property using 'for…in'.
                let person = {
                    name: "Alice",
                    age: 30,
                    country: "USA"
                };
                for (let prop in person) {
                    console.log(prop + ": " + person[prop]);
                }

            </script>
        </body>
        </html>

```

## **Assignment (Do at Home)**

1. Write a program using a 'for' loop that prints the multiplication table of '5'.
2. Use a 'while' loop to find the sum of numbers from 1 to 50.
3. Use a 'for…of' loop to print all characters in your name.
4. Create an object 'book' with properties 'title', 'author', and 'year'. Use a 'for…in' loop to print each property.
5. Write a 'do…while' program that keeps generating random numbers between 1 and 10 until it generates a '7'.

## **Solition**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Assignment Solutions</title>
  </head>
  <body>
    <h2>JavaScript Assignment Solutions</h2>
    <script>
      // 1. Write a program using a 'for' loop that prints the multiplication table of '5'.
      document.write("<h3>Multiplication Table of 5:</h3>");
      for (let i = 1; i <= 10; i++) {
        document.write('5 x ${i} = ${5 * i}<br>');
      }

      // 2. Use a 'while' loop to find the sum of numbers from 1 to 50.
      let sum = 0;
      let num = 1;
      while (num <= 50) {
        sum += num;
        num++;
      }
      document.write("<h3>Sum of numbers from 1 to 50:</h3>");
      document.write(`<p>${sum}</p>`);

      // 3. Use a 'for…of' loop to print all characters in your name.
      let myName = "Ipman"; // Replace with your name
      document.write("<h3>Characters in my name:</h3>");
      for (let char of myName) {
        document.write(`${char}<br>`);
      }

      // 4. Create an object 'book' with properties: 'title', 'author', and 'year'. Use a 'for…in' loop to print each property.
      let book = {
        title: "The Great Adventure",
        author: "John Doe",
        year: 2023,
      };
      document.write("<h3>Book Properties:</h3>");
      for (let key in book) {
        document.write(`${key}: ${book[key]}<br>`);
      }

      // 5. Write a 'do…while' program that keeps generating random numbers between 1 and 10 until it generates a '7'.
      let randomNumber;
      let attempts = 0;
      document.write("<h3>Generating random numbers until 7 is found:</h3>");
      do {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        attempts++;
        document.write(`Attempt ${attempts}: Generated ${randomNumber}<br>`);
      } while (randomNumber !== 7);
      document.write(`<p>It took ${attempts} attempts to generate a 7.</p>`);
    </script>
  </body>
</html>
```
