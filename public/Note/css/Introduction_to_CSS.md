## **Day 1: Introducing CSS - The Artist's Toolkit**

### **1. What is CSS?**

If HTML is the skeleton of a web page—defining its structure with elements like headings, paragraphs, and images—then **CSS (Cascading Style Sheets)** is the skin, clothes, and makeup. It brings that structure to life with color, layout, fonts, and style.

In technical terms, CSS is a language used to describe the **presentation** of a document written in HTML. It controls the visual design and, to a large extent, the responsiveness of a webpage across different devices.

**Core Concept:** The fundamental idea of CSS is **separation of concerns**. HTML handles the content and structure; CSS handles the aesthetics. This separation makes websites easier to maintain, update, and style consistently.

---

### **2. CSS Syntax: The Basic Rule Set**

A CSS rule-set is how you tell the browser how to style specific elements. It's composed of two main parts: a **selector** and a **declaration block**.

```css
selector {
  property: value;
  property: value;
}
```

- **Selector:** This points to the HTML element(s) you want to style. In the example above, it's targeting all '<p>' (paragraph) elements.
- **Declaration Block:** Everything inside the curly braces '{}' is a declaration block.
- **Property:** The specific style attribute you want to change (e.g., 'color', 'font-size', 'background').
- **Value:** The setting for the chosen property (e.g., 'red', '20px', '#ffffff').
- **Declaration:** Each 'property: value;' pair is called a declaration. Every declaration must end with a semicolon ';'.

**Example:**

```css
p {
  color: blue;
  font-size: 16px;
  text-align: center;
}
```

_This CSS rule will make all paragraph text blue, set the font size to 16 pixels, and center-align the text._

---

### **3. Selectors: Choosing Your Target**

Selectors are the key to powerful CSS. They allow you to be precise about which elements get styled.

#### **Basic Selectors**

1.  **Element Selector:** Selects all instances of a specific HTML tag.

    ```css
    h1 {
      font-family: Arial;
    }
    ```

2.  **Class Selector ( . ):** Selects all elements with a specific 'class' attribute. This is one of the most common and useful selectors. A class can be used on multiple elements.

    ```html
    <!-- HTML -->
    <p class="highlight">This is important.</p>
    <div class="highlight">This is also important.</div>
    ```

    ```css
    /* CSS */
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    ```

3.  **ID Selector ( # ):** Selects a _single_ element with a specific 'id' attribute. IDs must be unique on a page.
    ```html
    <!-- HTML -->
    <header id="main-header">Welcome to my Site</header>
    ```
    ```css
    /* CSS */
    #main-header {
      color: green;
      padding: 20px;
    }
    ```
    **Pro Tip:** Prefer classes over IDs for styling. IDs have higher specificity and can be harder to override, making them better for JavaScript hooks than for CSS.

#### **Combining Selectors**

You can combine selectors to be more specific.

- **Selector Chaining:** To select an element that has multiple classes.

  ```css
  /* Selects elements with BOTH 'btn' and 'primary' classes */
  .btn.primary {
    background-color: blue;
    color: white;
  }
  ```

- **Descendant Selector:** To select an element that is a descendant of another element (separated by a space).
  ```css
  /* Selects any <li> that is inside a <nav> */
  nav li {
    display: inline-block;
  }
  ```

---

### **4. Linking Your CSS to HTML**

There are three ways to add CSS to your HTML, but one is considered best practice.

#### **Method 1: Inline Styles (Avoid for general use)**

Styles are applied directly to an element using the 'style' attribute. This breaks the "separation of concerns" principle and is hard to maintain.

```html
<h1 style="color: red; margin-top: 10px;">A Very Specific Heading</h1>
```

#### **Method 2: Internal Stylesheet**

CSS rules are placed inside a '<style>' tag in the '<head>' of the HTML document. Useful for small, single-page projects or specific page styles, but not ideal for multi-page websites.

```html
<head>
  <style>
    body {
      font-family: sans-serif;
    }
    .container {
      width: 80%;
      margin: 0 auto;
    }
  </style>
</head>
```

#### **Method 3: (BEST PRACTICE)**

This is the most powerful and recommended method. You write all your CSS in a separate file (e.g., 'styles.css`) and link it to your HTML file(s). This allows one CSS file to style your entire website.

**How to do it:**

1.  Create a new file next to your '.html' file named, for example, 'styles.css`.
2.  In the '<head>' section of your HTML file, use the '<link>' tag to connect the two files.

```html
<!-- In your index.html file -->
<head>
  <meta charset="UTF-8" />
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  ...
</body>
```

```css
/* In your styles.css file */
body {
  background-color: lightgray;
  line-height: 1.6;
}

h1 {
  color: darkblue;
}
```

---

### **Classwork: Practice Exercises**

**Objective:** Create an 'index.html' file and a 'styles.css' file. Link them together and complete the tasks below.

**HTML Starter Code ('index.html'):**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS Practice</title>
    <!-- Link your stylesheet here -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Welcome to My Styling Page</h1>
    </header>
    <main>
      <p id="intro">This is the introduction paragraph.</p>
      <p class="cool">This paragraph thinks it's cool.</p>
      <p>This paragraph is just normal.</p>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li class="cool">Third item (is cool)</li>
      </ul>
      <button class="btn">Submit</button>
      <button class="btn warning">Delete</button>
    </main>
  </body>
</html>
```

**Tasks (to complete in 'styles.css'):**

1.  Style the 'body' to have a font family of 'Arial, sans-serif' and a background color of '#f0f0f0'.
2.  Style the 'h1' to be centered and have a color of 'darkviolet'.
3.  Style the paragraph with 'id="intro"' to be bold ('font-weight: bold').
4.  Style all elements with 'class="cool"' to have a light blue background color ('lightblue').
5.  Style the second button (which has two classes: 'btn' and 'warning') to have a red background. _(Hint: Use the chained selector '.btn.warning')_.

---

### **Assignment: Build a Personal Profile Card**

**Goal:** Apply your knowledge of selectors and external stylesheets to create a visually appealing component.

**Instructions:**

1.  Create a new project folder.
2.  Inside, create two files: 'profile.html' and 'profile.css'.
3.  In 'profile.html', write the HTML structure for a profile card. It must include:
    - A 'div' with a class of 'card'.
    - An image ('<img>') of yourself or a placeholder. Give it a class.
    - Your name in an '<h2>' tag.
    - A short bio in a '<p>' tag.
    - A list of your interests in a '<ul>'.
    - A link to your LinkedIn or favorite website.
4.  In 'profile.css', link the stylesheet and style the card. **Requirements:**
    - Use at least one **ID selector**.
    - Use at least two **class selectors**.
    - Use the **descendant selector** to style items within the '.card' div.
    - Style the following properties: 'width', 'background-color', 'padding', 'margin', 'border-radius', 'text-align', 'font-family', and 'box-shadow'.

**Challenge (Optional):**

- Style the link to change color when the user hovers over it (using the ':hover' pseudo-class).
- Find a color palette you like online (e.g., on [coolors.co](https://coolors.co/)) and use those colors in your design.

This assignment will test your understanding of linking files, using different selectors appropriately, and applying fundamental CSS properties to create a tangible design. Good luck
