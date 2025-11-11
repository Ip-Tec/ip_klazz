# Day 3: Typography – Fonts, Sizes, Line Height, Font Weight

## Introduction to Typography in Web Design

Typography is one of the most critical aspects of web design. Good typography enhances readability, establishes visual hierarchy, creates mood, and strengthens brand identity. Today, we'll explore how CSS gives you control over the textual content on your web pages.

## CSS Typography Properties

### 1. Font Families

The 'font-family' property specifies the typeface for an element. You can specify a prioritized list of font families, with fallbacks in case the preferred font isn't available.

```css
body {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

- **Web-safe fonts**: Fonts that are commonly available across different systems (Arial, Georgia, Times New Roman, etc.)
- **Custom fonts**: You can use services like Google Fonts or self-hosted fonts with '@font-face'

### 2. Font Sizes

We've touched on units before, but let's see how they apply specifically to text:

```css
h1 {
    font-size: 2.5rem; /* Responsive and accessible */
}

p {
    font-size: 1rem; /* Base size, typically 16px by default */
}

.small-text {
    font-size: 0.875rem; /* 14px if base is 16px */
}
```

Best practice: Use relative units (rem, em) for font sizes to support accessibility and responsive design.

### 3. Font Weight

The 'font-weight' property controls the thickness of characters:

```css
.light-text {
    font-weight: 300; /* Numeric values: 100-900 */
}

.normal-text {
    font-weight: normal; /* Keyword equivalent of 400 */
}

.bold-text {
    font-weight: bold; /* Keyword equivalent of 700 */
}
```

### 4. Line Height

'line-height' controls the vertical space between lines of text. Using a unitless value is often best as it acts as a multiplier:

```css
p {
    line-height: 1.6; /* 1.6 times the font size */
}

.compact {
    line-height: 1.2;
}
```

### 5. Text Alignment

The 'text-align' property controls horizontal alignment:

```css
.left-align {
    text-align: left;
}

.center-align {
    text-align: center;
}

.right-align {
    text-align: right;
}

.justify-align {
    text-align: justify;
}
```

### 6. Text Decoration and Transformation

```css
.underline {
    text-decoration: underline;
}

.uppercase {
    text-transform: uppercase;
}

.capitalize {
    text-transform: capitalize;
}
```

### 7. Letter and Word Spacing

```css
.tight-spacing {
    letter-spacing: -0.5px;
}

.loose-spacing {
    letter-spacing: 2px;
}

.word-spacing {
    word-spacing: 0.5em;
}
```

## Using Google Fonts

Google Fonts provides a vast library of free web fonts. Here's how to use them:

1. Visit [fonts.google.com](https://fonts.google.com)
2. Select a font and choose the styles you need
3. Add the provided '<link>' to your HTML's '<head>'
4. Use the font in your CSS

```html
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
```

```css
body {
    font-family: 'Roboto', sans-serif;
}

h1 {
    font-weight: 700;
}
```

## Classwork: Typography Practice

Let's create a simple HTML file to practice typography:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Typography Practice</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* Base styles */
        body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1, h2, h3 {
            font-family: 'Merriweather', serif;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }
        
        h1 {
            font-size: 2.5rem;
            font-weight: 700;
            text-align: center;
            color: #2c3e50;
            letter-spacing: -0.5px;
        }
        
        h2 {
            font-size: 2rem;
            font-weight: 400;
            color: #34495e;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 0.3em;
        }
        
        h3 {
            font-size: 1.5rem;
            font-weight: 300;
            font-style: italic;
            color: #7f8c8d;
        }
        
        p {
            margin-bottom: 1em;
        }
        
        .intro {
            font-size: 1.2rem;
            font-weight: 300;
            text-align: center;
            color: #7f8c8d;
            margin-bottom: 2em;
        }
        
        .highlight {
            background-color: #fff8e1;
            padding: 0.1em 0.3em;
            border-radius: 3px;
        }
        
        .quote {
            font-family: 'Merriweather', serif;
            font-size: 1.3rem;
            font-style: italic;
            text-align: center;
            color: #7f8c8d;
            border-left: 4px solid #ecf0f1;
            padding-left: 20px;
            margin: 2em 0;
        }
        
        .caption {
            font-size: 0.9rem;
            font-style: italic;
            color: #95a5a6;
            text-align: center;
            margin-top: -0.5em;
            margin-bottom: 2em;
        }
        
        .uppercase {
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 0.9rem;
            font-weight: 700;
            color: #3498db;
        }
    </style>
</head>
<body>
    <h1>The Art of Typography</h1>
    <p class="intro">Typography is the visual component of the written word. It makes our content readable, beautiful, and impactful.</p>
    
    <h2>Typeface Classification</h2>
    <p>Typefaces can be classified into several categories based on their design characteristics. The main categories include <span class="highlight">serif</span>, <span class="highlight">sans-serif</span>, <span class="highlight">monospace</span>, and <span class="highlight">display</span> typefaces.</p>
    
    <h3>Serif Typefaces</h3>
    <p>Serif typefaces have small lines or strokes attached to the ends of letters. They are often considered more traditional and formal, and are frequently used in print media like books and newspapers.</p>
    
    <h3>Sans-Serif Typefaces</h3>
    <p>Sans-serif typefaces lack the small strokes at the ends of characters. They are generally considered more modern and clean, and are widely used in digital interfaces.</p>
    
    <blockquote class="quote">Good typography is invisible; bad typography is everywhere.</blockquote>
    
    <h2>Typography Principles</h2>
    <p class="uppercase">Key Principles to Remember</p>
    <p>When working with typography, several principles contribute to effective communication:</p>
    
    <h3>Hierarchy</h3>
    <p>Establishing clear visual hierarchy helps users understand the importance and relationship between different pieces of content.</p>
    
    <h3>Contrast</h3>
    <p>Contrast in size, weight, color, or style creates visual interest and helps distinguish between different elements.</p>
    
    <h3>Consistency</h3>
    <p>Maintaining consistent typographic styles throughout a design creates cohesion and professionalism.</p>
    
    <p class="caption">Fig. 1: Example of typographic principles in practice</p>
</body>
</html>
```

## Assignment: Create a Typography Style Guide

**Objective:** Create a comprehensive typography style guide for a website.

**Requirements:**

1. Create an HTML file with a well-structured style guide
2. Use at least two Google Fonts (one for headings, one for body text)
3. Demonstrate at least:
   - Three heading levels with different sizes and weights
   - Body text with appropriate line height
   - A blockquote style
   - A caption style
   - Special text treatments (highlighted, uppercase, etc.)
4. Use appropriate spacing and margins between elements
5. Create a color scheme that complements your typography choices

**Challenge (Optional):**

- Add a navigation system that allows jumping to different sections of the style guide
- Include a "type scale" visualization showing your size progression
- Create a dark/light mode toggle that changes your color scheme

This assignment will help you understand how to create a cohesive typographic system for a website, which is essential for professional web development.


---

**Next lesson:** [Box Model – Margin, Padding, Border, Content](./Box_Model)

---