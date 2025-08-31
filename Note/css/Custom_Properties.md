# **Day 20: Unleashing the Power of CSS Custom Properties (Variables)**

Welcome back, coders! Today we're diving into one of the most powerful and useful features in modern CSS: **Custom Properties**, also known as **CSS Variables**. For years, preprocessors like SASS gave us variables, but now they are native to CSS, making our stylesheets more dynamic, maintainable, and thematically consistent.

## **What Are CSS Variables?**

CSS Variables are entities defined by CSS authors that contain specific values to be reused throughout a document. They follow a simple syntax and are subject to the cascade, meaning they inherit values just like other CSS properties.

The two key steps are:

1.  **Declaring** the variable.
2.  **Using** the variable.

---

### **1. Declaring a Variable**

You declare a variable inside a ruleset. It must start with two dashes ('--'), followed by a name of your choice.

```css
selector {
  --main-color: #3498db;
  --accent-color: #e74c3c;
  --main-padding: 20px;
  --large-font: 2rem;
}
```

**Best Practice:** A common convention is to declare your global variables inside the ':root' pseudo-class. ':root' represents the '<html>' element but has a higher specificity, making your variables available across your entire webpage.

```css
:root {
  /* Declare your global variables here */
  --primary-color: #2ecc71;
  --text-dark: #333;
  --spacing: 1rem;
  --border-radius: 8px;
}
```

---

### **2. Using a Variable (The var() Function)**

To use a variable, you place it inside the 'var()' function as the value for any CSS property.

```css
selector {
  color: var(--primary-color);
  background-color: var(--bg-color, #f0f0f0); /* Fallback value */
  margin: var(--spacing);
  border-radius: var(--border-radius);
}
```

- **Fallback Value:** The second argument in the 'var()' function is a fallback value. If the variable ('--bg-color' in this case) is not defined or invalid, the browser will use the fallback value ('#f0f0f0').

---

### **Example 1: Theming with Ease**

This is the most classic use case. Change a few variable values, and your entire site's color scheme updates.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      :root {
        --bg-primary: #f4f4f4;
        --text-primary: #222;
        --highlight: #ff9a00;
      }

      body {
        background-color: var(--bg-primary);
        color: var(--text-primary);
        font-family: sans-serif;
        padding: 2rem;
      }

      .button {
        background-color: var(--highlight);
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>Welcome to my Site</h1>
    <p>This site uses CSS variables for theming.</p>
    <button class="button">A Nice Button</button>
  </body>
</html>
```

_Try this:_ In your browser's developer tools, find the ':root' selector in the CSS and change the value of '--highlight' to '#3498db'. Watch the button color change instantly!

---

### **Example 2: Scoped Variables (The Cascade in Action)**

Variables can be scoped to any selector. This means you can redefine a variable's value for a specific part of your page.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      :root {
        --box-color: blue;
        --box-size: 150px;
      }

      .box {
        width: var(--box-size);
        height: var(--box-size);
        background-color: var(--box-color);
        margin: 10px;
      }

      .special-container {
        /* This value ONLY applies to elements inside .special-container */
        --box-color: red;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
    <!-- This box is blue -->
    <div class="special-container">
      <div class="box"></div>
      <!-- This box is red! -->
    </div>
  </body>
</html>
```

This demonstrates the "Cascading" part of CSS. The '.special-container' redefines '--box-color' for itself and its children.

---

### **Example 3: Building a Responsive Spacing System**

Use variables with 'calc()' to create scalable, consistent spacing.

```css
:root {
  --base-spacing: 1rem; /* 16px */
  --scale: 1.5; /* Scale factor */

  --spacing-sm: calc(var(--base-spacing) / var(--scale)); /* ~11px */
  --spacing-md: var(--base-spacing); /* 16px */
  --spacing-lg: calc(var(--base-spacing) * var(--scale)); /* 24px */
  --spacing-xl: calc(var(--base-spacing) * var(--scale) * 2); /* 48px */
}

.card {
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
}

.hero {
  padding: var(--spacing-xl) var(--spacing-md);
}
```

Now, if you want to adjust the scale of your entire site's spacing, you only need to change the '--scale' variable!

---

### **Class Work: The Switchable Card**

Let's put this into practice. Create a simple card component where the styling is controlled entirely by CSS variables.

**Instructions:**

1.  Create a 'div' with a class of '.card'.
2.  Inside, add a 'h2' and a 'p'.
3.  In your CSS, define the following variables _inside the '.card' ruleset_:
    - '--card-bg: #f8f9fa;'
    - '--card-text: #212529;'
    - '--card-border: none;'
    - '--card-shadow: 0 4px 6px rgba(0,0,0,0.1);'
4.  Style the '.card' using these variables for 'background-color', 'color', 'border', and 'box-shadow'.
5.  Now, create a modifier class, '.card.dark'. Under this selector, redefine the variables to create a dark theme for the card (e.g., dark background, light text, different shadow).

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .card {
        /* 1. Define the variables for the default (light) theme */
        --card-bg: #f8f9fa;
        --card-text: #212529;
        --card-border: none;
        --card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

        /* 2. Style the card using the variables */
        background-color: var(--card-bg);
        color: var(--card-text);
        border: var(--card-border);
        border-radius: 8px;
        padding: 2rem;
        box-shadow: var(--card-shadow);
        margin: 1rem;
        max-width: 300px;
      }

      /* 3. Create a modifier class that redefines the variables */
      .card.dark {
        --card-bg: #212529;
        --card-text: #f8f9fa;
        --card-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
      }
    </style>
  </head>
  <body>
    <!-- Default Light Theme Card -->
    <div class="card">
      <h2>Light Card</h2>
      <p>This card uses the default light theme variables.</p>
    </div>

    <!-- Dark Theme Card -->
    <div class="card dark">
      <h2>Dark Card</h2>
      <p>This card uses the scoped dark theme variables!</p>
    </div>
  </body>
</html>
```

**Goal:** You should be able to add the '.dark' class to your card 'div' and see its theme change completely, without writing new CSS properties, only new variable values.

---

### **Assignment: Build a Consistent UI**

Your task is to build a small section of a website (a header and a content card) that uses a consistent, variable-driven theme.

**Requirements:**

1.  **Global Theme:** Define the following variables in the ':root':

    - A primary color ('--primary').
    - A secondary color ('--secondary').
    - A light background color ('--bg-light').
    - A dark text color ('--text-dark').
    - A base font size ('--base-font-size').
    - A standard border radius ('--border-radius').

2.  **Build the Components:**

    - A 'header' with a background color of '--primary' and white text.
    - A '.card' inside the main content with a background of '--bg-light', text color of '--text-dark', and a border radius of '--border-radius'.
    - A 'button' inside the card. Style it using your '--secondary' color.

3.  **Challenge 1 (Scoping):** Create a 'footer' element. Inside the 'footer' selector, redefine your '--primary' and '--secondary' colors to different values. Style the footer using these new values. The header's colors should remain unchanged.

4.  **Challenge 2 (calc()):** Use the 'calc()' function to create a larger heading font size based on your '--base-font-size' (e.g., 'font-size: calc(var(--base-font-size) \* 2.5);').

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* 1. GLOBAL THEME */
      :root {
        --primary: #3498db;
        --secondary: #e74c3c;
        --bg-light: #ecf0f1;
        --text-dark: #2c3e50;
        --base-font-size: 16px;
        --border-radius: 10px;
      }

      body {
        font-family: sans-serif;
        margin: 0;
      }

      /* 2. BUILD THE COMPONENTS */
      header {
        background-color: var(--primary);
        color: white;
        padding: 1rem 2rem;
      }

      main {
        padding: 2rem;
      }

      .card {
        background-color: var(--bg-light);
        color: var(--text-dark);
        border-radius: var(--border-radius);
        padding: 2rem;
        max-width: 600px;
      }

      .card button {
        background-color: var(--secondary);
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: calc(var(--border-radius) - 2px); /* Slightly smaller */
        cursor: pointer;
      }

      /* 3. CHALLENGE 1: SCOPED FOOTER VARIABLES */
      footer {
        --primary: #16a085; /* Redefine for footer only */
        --secondary: #f39c12; /* Redefine for footer only */

        background-color: var(--primary);
        color: white;
        padding: 1rem 2rem;
        text-align: center;
      }

      footer button {
        background-color: var(--secondary);
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 4px;
      }

      /* 4. CHALLENGE 2: calc() FOR TYPOGRAPHY */
      .card h2 {
        font-size: calc(var(--base-font-size) * 2.5); /* 16px * 2.5 = 40px */
        margin-top: 0;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>My Variable-Powered Site</h1>
    </header>

    <main>
      <div class="card">
        <h2>Consistent Design</h2>
        <p>
          This card and the header use the same global CSS variables for colors
          and spacing. Change the values in ':root' to see the whole site
          update.
        </p>
        <button>Click Me</button>
      </div>
    </main>

    <footer>
      <p>© 2023 My Site</p>
      <button>Footer Button</button>
      <p>
        The footer uses its own scoped variables for --primary and --secondary.
      </p>
    </footer>
  </body>
</html>
```

**Success Criteria:** You should be able to change the entire look and feel of your mini-website by only editing the values of the variables declared in ':root'. This demonstrates the incredible maintainability of CSS Variables.

Happy Coding!
