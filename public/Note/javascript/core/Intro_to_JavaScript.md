# **Day 1: Introduction to JavaScript, History, Setup, and First Script**

---

## **1. What is JavaScript?**

JavaScript is a **high-level, interpreted programming language** primarily used to make web pages interactive. It works alongside **HTML (structure)** and **CSS (style)** to create modern, dynamic websites.

- **HTML** → Defines the structure (like the skeleton of a body).
- **CSS** → Styles the page (like clothes/appearance).
- **JavaScript** → Adds interaction (like movements and actions).

Example:

- HTML can display a button.
- CSS can style the button’s color.
- JavaScript can make the button show an alert message when clicked.

---

## **2. A Brief History of JavaScript**

- **1995** → Brendan Eich created JavaScript in just **10 days** while working at Netscape.
- Originally named **Mocha**, later renamed **LiveScript**, and finally **JavaScript**.
- **ECMAScript (ES)** → Standardized version of JavaScript.

  - **ES5 (2009)** – Major improvements.
  - **ES6/ES2015 (2015)** – Added modern features like let, const, arrow functions, classes, etc.
  - Since then, new versions come yearly.

---

## **3. Setting Up JavaScript**

There are two common ways to run JavaScript:

### (A) In the Browser Console

- Open your browser (e.g., Chrome).
- Right-click → **Inspect** → Go to **Console** tab.
- Type:

  ```js
  console.log("Hello, JavaScript!");
  ```

- Press Enter → You will see the output in the console.

---

### (B) Inside an HTML File

You can add JavaScript inside an HTML document using the <script> tag.

Example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First JavaScript</title>
  </head>
  <body>
    <h1>Welcome to JavaScript</h1>
    <button onclick="greet()">Click Me</button>

    <script>
      function greet() {
        alert("Hello, JavaScript World!");
      }
    </script>
  </body>
</html>
```

- When you click the button → A pop-up alert will appear.

---

## **4. First JavaScript Program**

The simplest program is printing something on the screen or console.

```js
console.log("Hello, World!");
```

Or showing a pop-up message:

```js
alert("Welcome to JavaScript!");
```

---

## **5. Why Learn JavaScript?**

- Runs everywhere (browser, server, mobile, desktop apps).
- Powers most modern websites and frameworks (React, Angular, Vue).
- High demand in jobs.
- Easy to start but powerful for advanced projects.

---

## **Classwork (Practice in Class)**

1. Open your browser console and print your name using JavaScript.

   ```js
   console.log("My name is Peter");
   ```

2. Create an HTML file with a button. When the button is clicked, it should display your age in an alert.

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>My Age</title>
     </head>
     <body>
       <h1>Welcome to My Age Page</h1>
       <button onclick="showAge()">Click Me</button>

       <script>
         function showAge() {
           alert("I am 25 years old.");
         }
       </script>
     </body>
   </html>
   ```

---

## **Assignment (Do at Home)**

1. Write a short note (5–6 lines) on the history of JavaScript in your own words.
2. Create a webpage that displays a message "Welcome to my JavaScript journey" in both:

   - The browser console (console.log)
   - A pop-up alert (alert).

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My JavaScript Journey</title>
  </head>
  <body>
    <h1>Welcome to My JavaScript Journey</h1>

    <script>
      console.log("Welcome to my JavaScript journey");
      alert("Welcome to my JavaScript journey");
    </script>
  </body>
</html>
```
