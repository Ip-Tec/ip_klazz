# Day 27: CSS Resets and Normalize

## Introduction

CSS resets and Normalize.css are foundational techniques used to handle browser inconsistencies in default styling. Today we'll explore the differences between these approaches, learn how to implement them, and understand when to use each technique.

## Why We Need CSS Resets

Different browsers have different default styles for HTML elements. For example:

- Margins and padding vary across browsers
- Heading sizes differ slightly
- Form elements look different in each browser
- Line heights are inconsistent

These inconsistencies can make it difficult to create consistent designs across browsers.

## CSS Resets

A CSS reset is a set of styles that removes or neutralizes the default styling of HTML elements, creating a consistent baseline across browsers.

### Example of a Simple CSS Reset:

```css
/* Basic CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

### Advantages of CSS Resets:

- Complete control over styling from a clean slate
- Eliminates all browser inconsistencies
- Consistent starting point for all elements

### Disadvantages of CSS Resets:

- Overly aggressive - removes useful defaults
- Requires restyling every element from scratch
- Can be time-consuming for large projects

## Normalize.css

Normalize.css is a modern alternative to CSS resets. Instead of removing all default styles, it carefully normalizes them across browsers while preserving useful defaults.

### Key Features of Normalize.css:

- Preserves useful browser defaults rather than erasing them
- Normalizes styles for a wide range of elements
- Corrects bugs and common browser inconsistencies
- Improves usability with subtle improvements
- Detailed documentation

### Example of Normalize.css Styles:

```css
/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */
html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove the margin in all browsers.
 */
body {
  margin: 0;
}

/**
 * Render the 'main' element consistently in IE.
 */
main {
  display: block;
}

/**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
```

### Advantages of Normalize.css:

- Preserves useful defaults rather than stripping them
- Doesn't require restyling every element
- Fixes common browser bugs
- Provides better cross-browser consistency
- Well-documented and maintained

### Disadvantages of Normalize.css:

- Less control over the baseline styles
- May need additional overrides for specific designs

## How to Choose Between Reset and Normalize

```
| CSS Reset                              | Normalize.css                                                 |
| -------------------------------------- | ------------------------------------------------------------- |
| Best for highly customized designs     | Best for projects that want to build upon consistent defaults |
| Provides complete control from scratch | Provides sensible defaults that can be built upon             |
| Requires more CSS to style elements    | Requires less CSS as many elements are already styled         |
| More aggressive approach               | More gentle approach                                          |
```

## Class Work

Create and test both a CSS reset and Normalize.css approach:

### Requirements:

1. Create a simple HTML page with various elements (headings, paragraphs, lists, forms, etc.)
2. Implement a custom CSS reset
3. Style the page after applying the reset
4. Replace the reset with Normalize.css
5. Style the page again using Normalize.css as the base
6. Compare the differences in approach and results

### Steps:

1. Set up HTML with a variety of elements
2. Create a custom reset CSS file and link it
3. Style the page to look visually appealing
4. Replace the reset with Normalize.css
5. Adjust your styles to work with Normalize.css
6. Document the differences in required CSS

## Assignment

Create a comprehensive CSS reset or normalization strategy for a news website.

### Requirements:

1. Analyze which elements need to be reset/normalized for a content-heavy site
2. Decide whether to use a reset, Normalize.css, or a custom approach
3. Implement your chosen strategy
4. Create a sample article page demonstrating your approach
5. Ensure cross-browser consistency for:
   - Typography (headings, paragraphs, quotes)
   - Images and media
   - Lists and navigation
   - Form elements
   - Tables

### Sample HTML Structure:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>News Website</title>
    <link rel="stylesheet" href="reset-or-normalize.css" />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>News Website</h1>
      <nav>...</nav>
    </header>

    <main>
      <article>
        <h2>Article Title</h2>
        <p class="meta">By Author Name | Published Date</p>
        <img src="article-image.jpg" alt="Article image" />
        <p>Article content...</p>
        <blockquote>Important quote from the article</blockquote>
        <ul>
          <li>Related point 1</li>
          <li>Related point 2</li>
        </ul>
      </article>

      <aside>
        <h3>Related Articles</h3>
        <ul>
          <li><a href="#">Related article 1</a></li>
          <li><a href="#">Related article 2</a></li>
        </ul>
      </aside>
    </main>

    <footer>
      <form>
        <label for="email">Subscribe to our newsletter:</label>
        <input type="email" id="email" placeholder="Your email" />
        <button type="submit">Subscribe</button>
      </form>
      <p>© 2023 News Website</p>
    </footer>
  </body>
</html>
```

## Key Takeaways

1. CSS resets provide a blank slate by removing all default styles
2. Normalize.css provides consistent cross-browser defaults while preserving useful styles
3. The choice between reset and normalize depends on project requirements
4. Resets require more initial styling but offer complete control
5. Normalize.css requires less initial styling but may need overrides
6. Both approaches aim to solve browser inconsistency issues

## Modern Approaches

Today, many developers use a combination of techniques:

1. Start with Normalize.css for sensible defaults
2. Add custom resets for specific elements as needed
3. Use CSS custom properties for consistent theming
4. Implement utility classes for common patterns

Whether you choose a reset, Normalize.css, or a custom approach, the goal is to create a consistent foundation that makes your styling work predictable across different browsers.
