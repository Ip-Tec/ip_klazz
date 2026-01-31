# Day 26: Print Styles – @media all, screen, print, Hiding Elements

## Introduction

Print styles are an often-overlooked aspect of web development that control how web pages appear when printed. Today we'll learn how to create printer-friendly versions of web pages using CSS print media queries, ensuring that users get clean, readable documents when they print from your website.

## Why Print Styles Matter

When users print web pages, they typically want:

- Only the essential content (not navigation, ads, or other UI elements)
- Black text on white background to save ink
- Proper page breaks to avoid content cutoff
- No background images that might waste ink
- A layout optimized for paper rather than screens

## The @media print Rule

The '@media print' CSS rule allows you to specify styles that apply only when the page is being printed.

### Basic Syntax:

```css
@media print {
  /* Styles that apply only when printing */
  body {
    font-size: 12pt;
    line-height: 1.5;
    color: black;
    background: white;
  }
}
```

## Common Print Style Techniques

### 1. Hiding Unnecessary Elements

```css
@media print {
  nav,
  footer,
  .sidebar,
  .advertisement,
  .video-container {
    display: none !important;
  }
}
```

### 2. Modifying Colors for Printing

```css
@media print {
  * {
    color: black !important;
    background: transparent !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a {
    color: black !important;
    text-decoration: underline !important;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }
}
```

### 3. Controlling Page Breaks

```css
@media print {
  h1,
  h2,
  h3 {
    page-break-after: avoid;
  }

  img {
    page-break-inside: avoid;
  }

  .section {
    page-break-before: always;
  }
}
```

### 4. Adjusting Layout for Print

```css
@media print {
  .container {
    width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    float: none !important;
  }

  .content {
    width: 100%;
    margin: 0;
  }
}
```

## Example: Basic Print Stylesheet

```css
/* Default screen styles */
body {
  font-family: Arial, sans-serif;
  color: #333;
  background: #f5f5f5;
  margin: 20px;
}

.header {
  background: #4a90e2;
  color: white;
  padding: 20px;
}

.content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.sidebar {
  float: right;
  width: 30%;
  background: #eee;
  padding: 15px;
}

.footer {
  background: #333;
  color: white;
  padding: 10px;
  text-align: center;
}

/* Print styles */
@media print {
  body {
    font-size: 12pt;
    line-height: 1.5;
    color: black;
    background: white;
    margin: 0;
    padding: 0;
  }

  .header,
  .footer,
  .sidebar,
  .advertisement {
    display: none;
  }

  .content {
    width: 100%;
    margin: 0;
    padding: 0;
    background: white;
    box-shadow: none;
    border-radius: 0;
    float: none;
  }

  a {
    color: black !important;
    text-decoration: underline !important;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  h1,
  h2,
  h3 {
    page-break-after: avoid;
  }

  img {
    max-width: 100% !important;
    page-break-inside: avoid;
  }

  .page-break {
    page-break-before: always;
  }
}
```

## Class Work

Create print styles for a blog article page.

### Requirements:

1. Hide the navigation, sidebar, comments section, and footer
2. Change the text to black on white background
3. Ensure images don't break across pages
4. Add URL after links
5. Adjust font sizes for better readability on paper
6. Add a print-only header with the page title and URL

### HTML Structure to Work With:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Blog Post</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <nav>...</nav>
    <div class="article">
      <h1>Article Title</h1>
      <div class="meta">
        Published on <time datetime="2023-05-15">May 15, 2023</time>
      </div>
      <img src="article-image.jpg" alt="Article image" />
      <div class="content">...</div>
      <div class="comments">...</div>
    </div>
    <aside class="sidebar">...</aside>
    <footer>...</footer>
  </body>
</html>
```

## Assignment

Create a comprehensive print style sheet for a resume webpage.

### Requirements:

1. Hide all navigation and non-essential elements
2. Ensure the resume prints cleanly on letter/A4 paper
3. Add your name and contact information as a print header
4. Make sure page breaks occur at appropriate places
5. Add the URL of your website at the bottom of the printed document
6. Use a serif font for better readability in print
7. Ensure links show their URLs
8. Optimize margins for printing

### Resume HTML Structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>John Doe - Resume</title>
    <link rel="stylesheet" href="resume.css" />
  </head>
  <body>
    <header>
      <h1>John Doe</h1>
      <p>Web Developer</p>
      <nav>...</nav>
    </header>

    <main>
      <section class="contact">
        <h2>Contact Information</h2>
        <ul>
          <li>Email: john@example.com</li>
          <li>Phone: (123) 456-7890</li>
          <li>Website: www.johndoe.com</li>
          <li>LinkedIn: linkedin.com/in/johndoe</li>
        </ul>
      </section>

      <section class="experience">
        <h2>Work Experience</h2>
        <div class="job">...</div>
        <div class="job">...</div>
        <div class="job">...</div>
      </section>

      <section class="education">
        <h2>Education</h2>
        <div class="degree">...</div>
        <div class="degree">...</div>
      </section>

      <section class="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5, CSS3, JavaScript</li>
          <li>React, Node.js</li>
          <li>UI/UX Design</li>
        </ul>
      </section>
    </main>

    <footer>...</footer>
  </body>
</html>
```

## Key Takeaways

1. Print styles ensure your web content is printer-friendly and professional
2. Use '@media print' to target styles specifically for printing
3. Always hide non-essential elements like navigation, ads, and interactive components
4. Set text to black on white background to save ink and improve readability
5. Use page break properties to control how content flows across printed pages
6. Consider adding URLs after links so readers can reference them later
7. Test your print styles using browser print preview 功能

## Testing Print Styles

To test your print styles without actually printing:

1. Use Chrome's Print Preview (Ctrl/Cmd + P)
2. Use browser developer tools to emulate print media
3. In Chrome DevTools, go to Rendering tab and emulate CSS media type: print

Well-designed print styles provide a better user experience and make your website more professional and considerate of your users' needs.

# The @media screen and @media all Rules

In addition to `@media print`, CSS provides other media types to target different devices. The most common ones are `@media screen` and `@media all`.

### The `@media screen` Rule

The `@media screen` rule is used to apply styles specifically for screen devices, such as computer monitors, tablets, and smartphones. This allows you to create styles that are optimized for viewing on screens, separate from your print styles.

While you can write `@media screen and (max-width: 480px)`, most developers omit `screen and` because it's the default media type for web stylesheets. So, the following is more common and does the same thing:

```css
body {
  width: 100%;
  padding: 0rem;
  background: #3a3a3a;
}
/* @media screen and (max-width: 480px) in some device it will only work if the (screen and) is not added */
@media (max-width: 480px) {
  body {
    width: 100%;
    padding: 0.6rem;
    background: #af2b1c;
  }
}
```

what the code above does is for device that their max screen width is less then 480px it applie the body style else it use the defauld style which is outside the @media screen

max-width is not the only way to do it

| Media Feature | Description                                                                                                                                                                                                   |
|----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `max-width`   | Applies styles when the viewport width is **less than or equal to** the specified value.  Commonly used for targeting mobile devices or smaller screens.                                                     |
| `min-width`   | Applies styles when the viewport width is **greater than or equal to** the specified value. Often used for targeting tablets, laptops, and desktops.                                                         |
| `max-height`  | Applies styles when the viewport height is **less than or equal to** the specified value. This is useful for devices in portrait mode, or when the browser window is relatively short.                      |
| `min-height`  | Applies styles when the viewport height is **greater than or equal to** the specified value. Used when the content requires a certain amount of vertical space, such as when the device is in landscape mode. |

### Example Class: Responsive Image

Here's a practical example of using `@media screen` with `max-width` to make images responsive:

```css
.responsive-image {
  width: 100%; /* Make the image fill its container */
  height: auto; /* Maintain aspect ratio */
}

/* On smaller screens, make the image take up the full width */
@media screen and (max-width: 600px) {
  .responsive-image {
    width: 100%;
  }
}

/* On larger screens, limit the maximum width */
@media screen and (min-width: 601px) {
  .responsive-image {
    max-width: 800px;
  }
}
```

In this example:

*   `.responsive-image` is a class that makes the image responsive by default.
*   The first media query ensures that on screens smaller than 600px, the image fills 100% of its container.
*   The second media query ensures that on screens larger than 600px, the image doesn't exceed 800px in width.

```html
<img
  src="your-image.jpg"
  alt="A descriptive image"
  class="responsive-image"
/>
```

### Assignment: Responsive Navigation Bar

**Objective:**

Create a responsive navigation bar that adapts to different screen sizes using `@media screen` rules.

**Requirements:**

1.  **Basic Structure:**

    *   Create an HTML file with a `<nav>` element containing a list of links.
    *   Style the navigation bar for a typical desktop view (horizontal layout, centered links, etc.).
2.  **Mobile-First Approach:**

    *   Use a `@media screen and (max-width: 600px)` rule to define styles for mobile devices.
    *   On smaller screens, the navigation should transform into a hamburger menu (a toggleable button that reveals the menu). You can use a simple checkbox hack to achieve this with pure CSS.
    *   Ensure the hamburger menu is visually distinct and easy to tap.
3.  **Tablet View:**

    *   Use a `@media screen and (min-width: 601px) and (max-width: 992px)` rule to define styles for tablets.
    *   The navigation can be a simplified horizontal layout or a vertical sidebar.
4.  **Desktop View:**

    *   For larger screens (desktops), the navigation should display the full list of links in a horizontal layout.
5.  **Accessibility:**

    *   Ensure the navigation is keyboard accessible.
    *   Use semantic HTML elements to maintain proper structure.
6.  **Transitions:**

    *   Add smooth transitions for the hamburger menu reveal/hide animation.

**Example CSS for a Basic Hamburger Menu:**

```css
.menu-toggle {
  display: none; /* Hide the checkbox */
}

.hamburger {
  /* Styles for the hamburger icon */
}

/* Show menu when checkbox is checked */
@media screen and (max-width: 600px) {
  .nav-menu {
    display: none;
    flex-direction: column;
    /* Other styles for mobile menu */
  }

  .menu-toggle:checked ~ .nav-menu {
    display: flex; /* Show menu when checked */
  }
}
```

**HTML Structure for Hamburger Menu (Checkbox Hack):**

```html
<nav>
  <input type="checkbox" id="menu-toggle" class="menu-toggle">
  <label for="menu-toggle" class="hamburger">&#9776;</label>
  <ul class="nav-menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

By completing this assignment, you will gain practical experience in creating responsive designs that adapt to different screen sizes using `@media screen` and other media features.