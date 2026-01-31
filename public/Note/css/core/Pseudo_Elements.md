# **Day 19: Pseudo-elements – ::before, ::after, etc.**

## Introduction to CSS Pseudo-elements

Pseudo-elements are CSS selectors that allow you to style specific parts of an element's content without needing extra HTML elements. They're incredibly useful for adding decorative elements, icons, and complex styling effects while keeping your HTML clean and semantic.

## Common Pseudo-elements

### 1. ::before and ::after
These create pseudo-elements that are the first and last children of the selected element, respectively.

```css
.element::before {
    content: "→ "; /* Required property */
    color: #3498db;
}

.element::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    background-color: #e74c3c;
}
```

### 2. ::first-letter
Targets the first letter of the first line of a block-level element.

```css
p::first-letter {
    font-size: 2em;
    font-weight: bold;
    color: #3498db;
    float: left;
    margin-right: 5px;
}
```

### 3. ::first-line
Targets the first line of a block-level element.

```css
p::first-line {
    font-weight: bold;
    color: #2c3e50;
}
```

### 4. ::selection
Styles the portion of text that is selected by the user.

```css
::selection {
    background-color: #3498db;
    color: white;
}
```

### 5. ::placeholder
Styles the placeholder text in form inputs.

```css
input::placeholder {
    color: #95a5a6;
    font-style: italic;
}
```

## Classwork: Pseudo-elements Practice

Let's create an interactive example to practice pseudo-elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Pseudo-elements Practice</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f7fa;
            padding: 30px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 2px solid #3498db;
        }
        
        .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        h2 {
            color: #3498db;
            margin-bottom: 15px;
        }
        
        .demo-section {
            border: 2px dashed #ccc;
            padding: 20px;
            margin: 15px 0;
        }
        
        /* Before and After Examples */
        .quote {
            position: relative;
            padding: 20px;
            font-style: italic;
            background-color: #f8f9fa;
            border-radius: 5px;
        }
        
        .quote::before {
            content: """;
            font-size: 3em;
            color: #3498db;
            position: absolute;
            top: -10px;
            left: 10px;
        }
        
        .quote::after {
            content: """;
            font-size: 3em;
            color: #3498db;
            position: absolute;
            bottom: -30px;
            right: 10px;
        }
        
        .tooltip {
            display: inline-block;
            position: relative;
            border-bottom: 1px dotted #3498db;
            cursor: help;
        }
        
        .tooltip::after {
            content: attr(data-tooltip);
            position: absolute;
            bottom: 125%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
        }
        
        .tooltip:hover::after {
            opacity: 1;
            visibility: visible;
        }
        
        /* First Letter and First Line Examples */
        .first-letter-demo::first-letter {
            font-size: 3em;
            font-weight: bold;
            color: #3498db;
            float: left;
            line-height: 1;
            margin-right: 5px;
        }
        
        .first-line-demo::first-line {
            font-weight: bold;
            color: #2c3e50;
        }
        
        /* Selection Example */
        .selection-demo::selection {
            background-color: #3498db;
            color: white;
        }
        
        /* Placeholder Example */
        .placeholder-input {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: 4px;
            margin-top: 10px;
        }
        
        .placeholder-input::placeholder {
            color: #95a5a6;
            font-style: italic;
        }
        
        /* Custom List Markers */
        .custom-list {
            list-style: none;
            padding-left: 0;
        }
        
        .custom-list li {
            padding: 5px 0;
            position: relative;
            padding-left: 30px;
        }
        
        .custom-list li::before {
            content: "→";
            color: #3498db;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        /* Instructions */
        .instructions {
            background-color: #fff8e1;
            padding: 15px;
            border-left: 4px solid #f39c12;
            margin: 15px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .code-example {
            background-color: #2c3e50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            margin: 15px 0;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>CSS Pseudo-elements</h1>
    
    <div class="container">
        <h2>::before and ::after</h2>
        
        <div class="instructions">
            <p>These pseudo-elements allow you to insert content before and after an element's content.</p>
        </div>
        
        <div class="demo-section">
            <p class="quote">This is a blockquote with decorative quotation marks added using ::before and ::after pseudo-elements.</p>
            
            <p>Hover over this <span class="tooltip" data-tooltip="This is a tooltip!">tooltip element</span> to see a tooltip created with ::after.</p>
        </div>
        
        <div class="code-example">
            .quote::before {<br>
            &nbsp;&nbsp;content: """;<br>
            &nbsp;&nbsp;font-size: 3em;<br>
            &nbsp;&nbsp;color: #3498db;<br>
            &nbsp;&nbsp;position: absolute;<br>
            &nbsp;&nbsp;top: -10px;<br>
            &nbsp;&nbsp;left: 10px;<br>
            }<br><br>
            
            .tooltip::after {<br>
            &nbsp;&nbsp;content: attr(data-tooltip);<br>
            &nbsp;&nbsp;position: absolute;<br>
            &nbsp;&nbsp;bottom: 125%;<br>
            &nbsp;&nbsp;left: 50%;<br>
            &nbsp;&nbsp;transform: translateX(-50%);<br>
            &nbsp;&nbsp;background-color: #333;<br>
            &nbsp;&nbsp;color: white;<br>
            &nbsp;&nbsp;padding: 5px 10px;<br>
            &nbsp;&nbsp;border-radius: 4px;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>::first-letter and ::first-line</h2>
        
        <div class="instructions">
            <p>These pseudo-elements allow you to style the first letter and first line of a block-level element.</p>
        </div>
        
        <div class="demo-section">
            <p class="first-letter-demo">This paragraph has a styled first letter. Notice how the first letter is larger and has a different color than the rest of the text. This is achieved using the ::first-letter pseudo-element.</p>
            
            <p class="first-line-demo">This paragraph has a styled first line. The first line is bold and has a different color. If you resize your browser window, you'll notice that the styling applies to whatever text appears on the first line. This is achieved using the ::first-line pseudo-element.</p>
        </div>
        
        <div class="code-example">
            .first-letter-demo::first-letter {<br>
            &nbsp;&nbsp;font-size: 3em;<br>
            &nbsp;&nbsp;font-weight: bold;<br>
            &nbsp;&nbsp;color: #3498db;<br>
            &nbsp;&nbsp;float: left;<br>
            &nbsp;&nbsp;line-height: 1;<br>
            &nbsp;&nbsp;margin-right: 5px;<br>
            }<br><br>
            
            .first-line-demo::first-line {<br>
            &nbsp;&nbsp;font-weight: bold;<br>
            &nbsp;&nbsp;color: #2c3e50;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>::selection and ::placeholder</h2>
        
        <div class="instructions">
            <p>The ::selection pseudo-element styles text that users highlight, and ::placeholder styles placeholder text in form inputs.</p>
        </div>
        
        <div class="demo-section">
            <p class="selection-demo">Select some text in this paragraph to see the custom selection styling. The background and text color will change when you highlight text.</p>
            
            <input type="text" class="placeholder-input" placeholder="This is a custom styled placeholder">
        </div>
        
        <div class="code-example">
            .selection-demo::selection {<br>
            &nbsp;&nbsp;background-color: #3498db;<br>
            &nbsp;&nbsp;color: white;<br>
            }<br><br>
            
            .placeholder-input::placeholder {<br>
            &nbsp;&nbsp;color: #95a5a6;<br>
            &nbsp;&nbsp;font-style: italic;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>Practical Examples</h2>
        
        <div class="instructions">
            <p>Pseudo-elements are often used for decorative elements without adding extra HTML.</p>
        </div>
        
        <div class="demo-section">
            <ul class="custom-list">
                <li>List item with custom marker</li>
                <li>Another list item</li>
                <li>One more list item</li>
            </ul>
        </div>
        
        <div class="code-example">
            .custom-list li::before {<br>
            &nbsp;&nbsp;content: "→";<br>
            &nbsp;&nbsp;color: #3498db;<br>
            &nbsp;&nbsp;font-weight: bold;<br>
            &nbsp;&nbsp;position: absolute;<br>
            &nbsp;&nbsp;left: 0;<br>
            }
        </div>
    </div>
</body>
</html>
```

## Assignment: Create a Stylish Profile Card with Pseudo-elements

**Objective:** Create an attractive profile card using CSS pseudo-elements for decorative elements and effects.

**Requirements:**
1. Create a profile card with:
   - A profile image
   - Name and title
   - Social media links
   - A short bio

2. Use pseudo-elements for:
   - Decorative elements (at least 3 different uses)
   - Custom bullet points in lists
   - Hover effects on interactive elements
   - Special styling for text elements

3. Ensure the card is visually appealing and responsive

**Challenge (Optional):**
- Add a dark/light mode toggle that changes the pseudo-element styles
- Create a flip animation on hover using 3D transforms
- Add a print stylesheet that adjusts the pseudo-elements for printing
- Implement a color theme switcher

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Card with Pseudo-elements</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f7fa;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            padding: 20px;
        }
        
        /* Profile Card */
        .profile-card {
            background-color: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 400px;
            overflow: hidden;
            position: relative;
        }
        
        /* Card header with decorative pseudo-elements */
        .card-header {
            background: linear-gradient(135deg, #3498db, #2c3e50);
            padding: 40px 20px 60px;
            text-align: center;
            position: relative;
        }
        
        .card-header::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0,0 L100,0 L100,100 Z" fill="rgba(255,255,255,0.1)"/></svg>');
            background-size: 100% 100%;
        }
        
        .card-header::after {
            content: "";
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            width: 40px;
            height: 40px;
            background-color: white;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        /* Profile image */
        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 5px solid white;
            object-fit: cover;
            position: relative;
            z-index: 1;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
        
        /* Card body */
        .card-body {
            padding: 30px;
            text-align: center;
            position: relative;
        }
        
        .card-body::before {
            content: "";
            position: absolute;
            top: -10px;
            left: 0;
            width: 100%;
            height: 20px;
            background-color: white;
            border-radius: 15px 15px 0 0;
        }
        
        .profile-name {
            font-size: 1.8rem;
            color: #2c3e50;
            margin-bottom: 5px;
            position: relative;
        }
        
        .profile-name::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 50px;
            height: 3px;
            background-color: #3498db;
            border-radius: 3px;
        }
        
        .profile-title {
            color: #7f8c8d;
            margin-bottom: 20px;
            font-size: 1rem;
        }
        
        .profile-bio {
            color: #34495e;
            margin-bottom: 25px;
            line-height: 1.6;
            position: relative;
        }
        
        .profile-bio::before {
            content: """;
            font-size: 3rem;
            color: #ecf0f1;
            position: absolute;
            top: -20px;
            left: -10px;
            z-index: -1;
        }
        
        /* Skills list */
        .skills-title {
            text-align: left;
            color: #2c3e50;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }
        
        .skills-list {
            list-style: none;
            text-align: left;
            margin-bottom: 25px;
        }
        
        .skills-list li {
            padding: 5px 0;
            position: relative;
            padding-left: 25px;
        }
        
        .skills-list li::before {
            content: "▸";
            color: #3498db;
            font-weight: bold;
            position: absolute;
            left: 0;
        }
        
        /* Social links */
        .social-links {
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        
        .social-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #f5f7fa;
            color: #7f8c8d;
            text-decoration: none;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .social-link::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #3498db, #2c3e50);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 0;
        }
        
        .social-link:hover::before {
            opacity: 1;
        }
        
        .social-link:hover {
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
        }
        
        .social-link i {
            position: relative;
            z-index: 1;
        }
        
        /* Contact button */
        .contact-btn {
            display: inline-block;
            background: linear-gradient(135deg, #3498db, #2c3e50);
            color: white;
            padding: 12px 25px;
            border-radius: 50px;
            text-decoration: none;
            margin-top: 20px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .contact-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s ease;
        }
        
        .contact-btn:hover::before {
            left: 100%;
        }
        
        .contact-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
        }
        
        /* Responsive Design */
        @media (max-width: 480px) {
            .profile-card {
                max-width: 100%;
            }
            
            .card-header {
                padding: 30px 15px 50px;
            }
            
            .profile-img {
                width: 100px;
                height: 100px;
            }
            
            .card-body {
                padding: 25px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="profile-card">
        <div class="card-header">
            <img src="https://via.placeholder.com/120" alt="Profile Image" class="profile-img">
        </div>
        
        <div class="card-body">
            <h2 class="profile-name">Alex Johnson</h2>
            <p class="profile-title">Frontend Developer & UI Designer</p>
            
            <p class="profile-bio">Passionate about creating beautiful, user-friendly interfaces with clean code. Always learning and exploring new technologies.</p>
            
            <h3 class="skills-title">Skills:</h3>
            <ul class="skills-list">
                <li>HTML5 & CSS3</li>
                <li>JavaScript & React</li>
                <li>UI/UX Design</li>
                <li>Responsive Web Design</li>
                <li>CSS Preprocessors</li>
            </ul>
            
            <div class="social-links">
                <a href="#" class="social-link">
                    <i>📱</i>
                </a>
                <a href="#" class="social-link">
                    <i>💼</i>
                </a>
                <a href="#" class="social-link">
                    <i>🐦</i>
                </a>
                <a href="#" class="social-link">
                    <i>📷</i>
                </a>
            </div>
            
            <a href="#" class="contact-btn">Contact Me</a>
        </div>
    </div>
</body>
</html>
```

This assignment will help you practice using CSS pseudo-elements to create decorative elements and enhance the visual appeal of a profile card. You'll work with ::before and ::after to add decorative elements, create custom list markers, and implement hover effects. Pay attention to how pseudo-elements can add visual interest without cluttering your HTML with extra elements.