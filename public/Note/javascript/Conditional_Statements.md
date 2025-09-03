# **Day 5: Conditional Statements ('if', 'else', 'switch')**

---

## **1. What are Conditional Statements?**

Conditional statements allow your program to **make decisions** and execute different code depending on conditions.
They answer questions like:
👉 _“If it’s raining, take an umbrella; otherwise, go without.”_

In JavaScript, the main conditional statements are:

- 'if'
- 'if...else'
- 'if...else if...else'
- 'switch'

---

## **2. The 'if' Statement**

Executes a block of code **only if** the condition is true.

```js
let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
}
```

---

## **3. The 'if...else' Statement**

Provides an **alternative** when the condition is false.

```js
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are still a minor.");
}
```

---

## **4. The 'if...else if...else' Statement**

Used when there are **multiple conditions**.

```js
let score = 75;

if (score >= 80) {
  console.log("Excellent");
} else if (score >= 50) {
  console.log("Good, you passed.");
} else {
  console.log("You failed.");
}
```

---

## **5. The 'switch' Statement**

Used when you want to compare a value against **many possible cases**.

```js
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Sunday":
    console.log("Relax, it's Sunday!");
    break;
  default:
    console.log("Just another day.");
}
```

### ⚠️ Important:

- Each 'case' should end with 'break' to prevent “fall-through” (executing next cases).
- The 'default' block runs if none of the cases match.

---

## **6. Example Program**

```js
let number = 7;

// Using if...else
if (number % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}

// Using switch
let color = "green";

switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Get Ready!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Invalid color");
}
```

---

## **Classwork (Practice in Class)**

1. Write a program that checks if a number stored in a variable 'x' is positive, negative, or zero using 'if...else if...else'.
2. Create a program that checks if a student’s score:

   - '>= 70' → Print '"Distinction"'
   - '>= 50' → Print '"Pass"'
   - Otherwise → Print '"Fail"'.

3. Write a 'switch' program that takes a month number (1–12) and prints the month name.

**Solution**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Practice</title>
  </head>
  <body>
    <h2>
      Write a program that checks if a number stored in a variable 'x' is
      positive, negative, or zero using 'if...else if...else'.
    </h2>
    <script>
      // Write a program that checks if a number stored in a variable 'x' is positive, negative, or zero using 'if...else if...else'.
      let x = -5;
      if (x > 0) {
        console.log("Positive");
      } else if (x < 0) {
        console.log("Negative");
      } else {
        console.log("Zero");
      }
    </script>
    <h2>class work 2</h2>
    <script>
      // Create a program that checks if a student's score is >= 70, >= 50, or < 50.
      let score = 85;

      if (score >= 70) {
        console.log("Distinction");
      } else if (score >= 50) {
        console.log("Pass");
      } else {
        console.log("Fail");
      }
    </script>
    <h2>class work 3</h2>
    <script>
      // Write a switch program that takes a month number (1–12) and prints the month name.
      let month = 5;
      switch (month) {
        case 1:
          console.log("January");
          break;
        case 2:
          console.log("February");
          break;
        case 3:
          console.log("March");
          break;
        case 4:
          console.log("April");
          break;
        case 5:
          console.log("May");
          break;
        case 6:
          console.log("June");
          break;
        case 7:
          console.log("July");
          break;
        case 8:
          console.log("August");
          break;
        case 9:
          console.log("September");
          break;
        case 10:
          console.log("October");
          break;
        case 11:
          console.log("November");
          break;
        case 12:
          console.log("December");
          break;
        default:
          console.log("Invalid month");
      }
    </script>
  </body>
</html>
```

---

## **Assignment (Do at Home)**

1. Create a program that checks the current day of the week ('new Date().getDay()') and prints whether it’s a weekday or weekend using 'if...else'.
2. Use a 'switch' statement to build a simple calculator that performs addition, subtraction, multiplication, or division based on a variable 'operation'. Example:

   ```js
   let a = 10,
     b = 5;
   let operation = "multiply";
   // Output: 50
   ```

3. Write a program that checks a person’s age and prints:

   - "Child" if age < 13
   - "Teenager" if 13 ≤ age < 20
   - "Adult" if 20 ≤ age < 60
   - "Senior" if age ≥ 60

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Practice</title>
  </head>
  <body>
    <script>
      // Create a program that checks the current day of the week (new Date().getDay()) and prints whether it’s a weekday or weekend using if...else.

      const day = new Date().getDay();

      if (day === 0 || day === 6) {
        console.log("It's the weekend!");
      } else {
        console.log("It's a weekday.");
      }
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
