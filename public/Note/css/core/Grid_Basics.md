# Day 10: CSS Grid Basics – Rows, Columns, Templates

## Introduction to CSS Grid

CSS Grid is a powerful two-dimensional layout system that allows you to create complex web layouts with rows and columns. Unlike Flexbox which is one-dimensional, Grid lets you control both dimensions simultaneously, making it ideal for overall page layouts and complex component designs.

## Creating a Grid Container

To create a grid container, simply set the 'display' property to 'grid' or 'inline-grid':

```css
.container {
    display: grid;
}
```

## Defining Rows and Columns

### 1. grid-template-columns
Defines the columns of your grid. You can specify sizes using various units (px, %, fr, auto, etc.)

```css
.container {
    grid-template-columns: 200px 200px 200px; /* Three fixed columns */
    grid-template-columns: 1fr 2fr 1fr; /* Three columns with ratio */
    grid-template-columns: repeat(3, 1fr); /* Three equal columns */
    grid-template-columns: 100px auto 200px; /* Mixed sizes */
}
```

### 2. grid-template-rows
Defines the rows of your grid:

```css
.container {
    grid-template-rows: 100px 200px 100px; /* Three fixed rows */
    grid-template-rows: 1fr 2fr; /* Two rows with ratio */
    grid-template-rows: repeat(4, 100px); /* Four equal rows */
}
```

### 3. The fr Unit
The 'fr' unit represents a fraction of the available space in the grid container. It's similar to flex-grow in Flexbox.

## Grid Template Areas

The 'grid-template-areas' property provides a visual way to define your grid layout using named areas:

```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar content content"
        "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

## Gap Properties

Control the spacing between grid items:

```css
.container {
    grid-column-gap: 10px; /* Space between columns */
    grid-row-gap: 15px;    /* Space between rows */
    gap: 15px 10px;        /* Shorthand: row column */
}
```

## Classwork: Grid Basics Practice

Let's create an interactive example to practice CSS Grid basics:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Grid Basics Practice</title>
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
        
        .grid-container {
            display: grid;
            border: 2px solid #3498db;
            border-radius: 5px;
            padding: 10px;
            margin: 15px 0;
            min-height: 300px;
        }
        
        .grid-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            border-radius: 4px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .control-group {
            background-color: #ecf0f1;
            padding: 15px;
            border-radius: 5px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        select, input, button {
            width: 100%;
            padding: 8px;
            border: 1px solid #bdc3c7;
            border-radius: 4px;
            font-size: 16px;
        }
        
        button {
            background-color: #3498db;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
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
        
        .area-demo {
            display: grid;
            grid-template-areas:
                "header header header"
                "sidebar content content"
                "footer footer footer";
            gap: 10px;
            margin: 20px 0;
        }
        
        .area-header { grid-area: header; background-color: #3498db; }
        .area-sidebar { grid-area: sidebar; background-color: #2ecc71; }
        .area-content { grid-area: content; background-color: #e74c3c; }
        .area-footer { grid-area: footer; background-color: #f39c12; }
    </style>
</head>
<body>
    <h1>CSS Grid Basics: Rows, Columns, Templates</h1>
    
    <div class="container">
        <h2>Grid Template Columns</h2>
        
        <div class="instructions">
            <p>The <code>grid-template-columns</code> property defines the columns of your grid.</p>
        </div>
        
        <div class="grid-container" id="columnsDemo">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="templateColumns">Grid Template Columns:</label>
                <select id="templateColumns">
                    <option value="repeat(3, 1fr)">3 equal columns (1fr each)</option>
                    <option value="1fr 2fr 1fr">3 columns (1:2:1 ratio)</option>
                    <option value="100px auto 200px">Fixed, auto, fixed</option>
                    <option value="repeat(2, 1fr)">2 equal columns</option>
                    <option value="repeat(4, 1fr)">4 equal columns</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="columnGap">Column Gap:</label>
                <select id="columnGap">
                    <option value="0">0px</option>
                    <option value="10px" selected>10px</option>
                    <option value="20px">20px</option>
                    <option value="30px">30px</option>
                </select>
            </div>
        </div>
        
        <div class="code-example">
            #columnsDemo {<br>
            &nbsp;&nbsp;display: grid;<br>
            &nbsp;&nbsp;grid-template-columns: <span id="columnsCode">repeat(3, 1fr)</span>;<br>
            &nbsp;&nbsp;gap: 0px <span id="gapCode">10px</span>;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>Grid Template Rows</h2>
        
        <div class="instructions">
            <p>The <code>grid-template-rows</code> property defines the rows of your grid.</p>
        </div>
        
        <div class="grid-container" id="rowsDemo">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="templateRows">Grid Template Rows:</label>
                <select id="templateRows">
                    <option value="none">None (auto)</option>
                    <option value="100px 100px">Two 100px rows</option>
                    <option value="50px 100px 150px">Three different rows</option>
                    <option value="repeat(2, 1fr)">Two equal rows</option>
                    <option value="repeat(3, 80px)">Three 80px rows</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="rowGap">Row Gap:</label>
                <select id="rowGap">
                    <option value="0">0px</option>
                    <option value="10px" selected>10px</option>
                    <option value="20px">20px</option>
                    <option value="30px">30px</option>
                </select>
            </div>
        </div>
        
        <div class="code-example">
            #rowsDemo {<br>
            &nbsp;&nbsp;display: grid;<br>
            &nbsp;&nbsp;grid-template-columns: repeat(3, 1fr);<br>
            &nbsp;&nbsp;grid-template-rows: <span id="rowsCode">none</span>;<br>
            &nbsp;&nbsp;gap: <span id="rowGapCode">10px</span> 0px;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>Grid Template Areas</h2>
        
        <div class="instructions">
            <p>The <code>grid-template-areas</code> property provides a visual way to define your grid layout using named areas.</p>
        </div>
        
        <div class="area-demo">
            <div class="grid-item area-header">Header</div>
            <div class="grid-item area-sidebar">Sidebar</div>
            <div class="grid-item area-content">Content</div>
            <div class="grid-item area-footer">Footer</div>
        </div>
        
        <div class="code-example">
            .area-demo {<br>
            &nbsp;&nbsp;display: grid;<br>
            &nbsp;&nbsp;grid-template-areas:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"header header header"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"sidebar content content"<br>
            &nbsp;&nbsp;&nbsp;&nbsp;"footer footer footer";<br>
            }<br><br>
            .area-header { grid-area: header; }<br>
            .area-sidebar { grid-area: sidebar; }<br>
            .area-content { grid-area: content; }<br>
            .area-footer { grid-area: footer; }<br>
        </div>
    </div>
    
    <div class="container">
        <h2>The fr Unit</h2>
        
        <div class="instructions">
            <p>The <code>fr</code> unit represents a fraction of the available space in the grid container.</p>
        </div>
        
        <div class="grid-container" id="frDemo" style="grid-template-columns: 1fr 2fr 1fr;">
            <div class="grid-item">1fr</div>
            <div class="grid-item">2fr</div>
            <div class="grid-item">1fr</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="frRatio">FR Ratio:</label>
                <select id="frRatio">
                    <option value="1fr 1fr 1fr">1:1:1</option>
                    <option value="1fr 2fr 1fr" selected>1:2:1</option>
                    <option value="2fr 1fr 1fr">2:1:1</option>
                    <option value="1fr 3fr 2fr">1:3:2</option>
                </select>
            </div>
        </div>
        
        <div class="code-example">
            #frDemo {<br>
            &nbsp;&nbsp;grid-template-columns: <span id="frCode">1fr 2fr 1fr</span>;<br>
            }
        </div>
    </div>

    <script>
        // Get all interactive elements
        const columnsDemo = document.getElementById('columnsDemo');
        const rowsDemo = document.getElementById('rowsDemo');
        const frDemo = document.getElementById('frDemo');
        
        const templateColumns = document.getElementById('templateColumns');
        const columnGap = document.getElementById('columnGap');
        const templateRows = document.getElementById('templateRows');
        const rowGap = document.getElementById('rowGap');
        const frRatio = document.getElementById('frRatio');
        
        const columnsCode = document.getElementById('columnsCode');
        const gapCode = document.getElementById('gapCode');
        const rowsCode = document.getElementById('rowsCode');
        const rowGapCode = document.getElementById('rowGapCode');
        const frCode = document.getElementById('frCode');
        
        // Set up event listeners
        templateColumns.addEventListener('change', () => {
            columnsDemo.style.gridTemplateColumns = templateColumns.value;
            columnsCode.textContent = templateColumns.value;
        });
        
        columnGap.addEventListener('change', () => {
            columnsDemo.style.columnGap = columnGap.value;
            gapCode.textContent = columnGap.value;
        });
        
        templateRows.addEventListener('change', () => {
            rowsDemo.style.gridTemplateRows = templateRows.value;
            rowsCode.textContent = templateRows.value;
        });
        
        rowGap.addEventListener('change', () => {
            rowsDemo.style.rowGap = rowGap.value;
            rowGapCode.textContent = rowGap.value;
        });
        
        frRatio.addEventListener('change', () => {
            frDemo.style.gridTemplateColumns = frRatio.value;
            frCode.textContent = frRatio.value;
        });
    </script>
</body>
</html>
```

## Assignment: Create a Magazine Layout with CSS Grid

**Objective:** Create a magazine-style layout using CSS Grid to demonstrate your understanding of grid properties.

**Requirements:**
1. Create a layout with:
   - A header with logo and navigation
   - A main content area with articles
   - A sidebar with additional content
   - A footer with multiple sections

2. Implement the following grid properties:
   - Use 'grid-template-columns' and 'grid-template-rows'
   - Use 'grid-template-areas' for the overall layout
   - Use the 'fr' unit for flexible sizing
   - Use 'gap' properties for spacing

3. Ensure the layout is responsive and looks good on different screen sizes

**Challenge (Optional):**
- Add a nested grid within one of the content areas
- Create a photo gallery using grid within an article
- Implement a dark/light mode toggle

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Magazine Layout with CSS Grid</title>
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
            background-color: #f9f9f9;
        }
        
        /* Grid Container */
        .magazine {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas:
                "header header header"
                "sidebar-left main sidebar-right"
                "footer footer footer";
            gap: 20px;
            min-height: 100vh;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Grid Areas */
        .header {
            grid-area: header;
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            border-radius: 8px;
        }
        
        .sidebar-left {
            grid-area: sidebar-left;
            background-color: #ecf0f1;
            padding: 1.5rem;
            border-radius: 8px;
        }
        
        .main {
            grid-area: main;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto;
            gap: 15px;
        }
        
        .sidebar-right {
            grid-area: sidebar-right;
            background-color: #ecf0f1;
            padding: 1.5rem;
            border-radius: 8px;
        }
        
        .footer {
            grid-area: footer;
            background-color: #2c3e50;
            color: white;
            padding: 1.5rem;
            border-radius: 8px;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
        }
        
        /* Header Styles */
        .header-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
            gap: 1.5rem;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .nav-menu a:hover {
            color: #3498db;
        }
        
        /* Article Styles */
        .article {
            background-color: white;
            border-radius: 8px;
            padding: 1.5rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .featured-article {
            grid-column: 1 / -1;
            background-color: #3498db;
            color: white;
        }
        
        .article h3 {
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        
        .featured-article h3 {
            color: white;
        }
        
        .article p {
            margin-bottom: 1rem;
        }
        
        .article-meta {
            font-size: 0.9rem;
            color: #7f8c8d;
        }
        
        .featured-article .article-meta {
            color: #ecf0f1;
        }
        
        /* Sidebar Styles */
        .sidebar-section {
            margin-bottom: 2rem;
        }
        
        .sidebar-section h3 {
            margin-bottom: 1rem;
            color: #2c3e50;
            border-bottom: 2px solid #3498db;
            padding-bottom: 0.5rem;
        }
        
        .sidebar-list {
            list-style: none;
        }
        
        .sidebar-list li {
            margin-bottom: 0.5rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #bdc3c7;
        }
        
        .sidebar-list a {
            color: #2c3e50;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .sidebar-list a:hover {
            color: #3498db;
        }
        
        /* Footer Styles */
        .footer-section h4 {
            margin-bottom: 1rem;
            color: #3498db;
        }
        
        .footer-links {
            list-style: none;
        }
        
        .footer-links li {
            margin-bottom: 0.5rem;
        }
        
        .footer-links a {
            color: #ecf0f1;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-links a:hover {
            color: #3498db;
        }
        
        /* Responsive Design */
        @media (max-width: 900px) {
            .magazine {
                grid-template-columns: 1fr;
                grid-template-areas:
                    "header"
                    "sidebar-left"
                    "main"
                    "sidebar-right"
                    "footer";
            }
            
            .main {
                grid-template-columns: 1fr;
            }
            
            .footer {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .header-content {
                flex-direction: column;
                gap: 1rem;
            }
            
            .nav-menu {
                flex-wrap: wrap;
                justify-content: center;
            }
        }
        
        /* Nested Grid Example */
        .gallery {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 100px);
            gap: 10px;
            margin-top: 1rem;
        }
        
        .gallery-item {
            background-color: #34495e;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        /* Interactive Elements */
        .read-more {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            text-decoration: none;
            margin-top: 1rem;
            transition: background-color 0.3s;
        }
        
        .read-more:hover {
            background-color: #2980b9;
        }
        
        .featured-article .read-more {
            background-color: white;
            color: #3498db;
        }
        
        .featured-article .read-more:hover {
            background-color: #ecf0f1;
        }
    </style>
</head>
<body>
    <div class="magazine">
        <header class="header">
            <div class="header-content">
                <div class="logo">Grid Magazine</div>
                <ul class="nav-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Opinion</a></li>
                    <li><a href="#">Arts</a></li>
                    <li><a href="#">Sports</a></li>
                </ul>
            </div>
        </header>
        
        <aside class="sidebar-left">
            <div class="sidebar-section">
                <h3>Top Stories</h3>
                <ul class="sidebar-list">
                    <li><a href="#">Global Summit Addresses Climate Change</a></li>
                    <li><a href="#">Tech Giant Unveils New AI Assistant</a></li>
                    <li><a href="#">Local Community Raises Funds for New Park</a></li>
                    <li><a href="#">Breakthrough in Renewable Energy Research</a></li>
                    <li><a href="#">Sports Team Wins Championship After 20 Years</a></li>
                </ul>
            </div>
            
            <div class="sidebar-section">
                <h3>Newsletter</h3>
                <p>Stay updated with our latest news and articles.</p>
                <form>
                    <input type="email" placeholder="Your email" style="width: 100%; padding: 0.5rem; margin: 0.5rem 0; border: 1px solid #bdc3c7; border-radius: 4px;">
                    <button type="submit" style="width: 100%; padding: 0.5rem; background-color: #3498db; color: white; border: none; border-radius: 4px; cursor: pointer;">Subscribe</button>
                </form>
            </div>
        </aside>
        
        <main class="main">
            <article class="article featured-article">
                <h3>Featured Story: The Future of Web Design</h3>
                <p>CSS Grid has revolutionized how we create layouts for the web. With its powerful two-dimensional capabilities, designers and developers can now create complex layouts that were previously difficult or impossible with older techniques.</p>
                <p>In this article, we explore how CSS Grid works, its key features, and how it compares to other layout methods like Flexbox.</p>
                <div class="article-meta">By Jane Smith | October 15, 2023</div>
                <a href="#" class="read-more">Read Full Article</a>
            </article>
            
            <article class="article">
                <h3>Understanding the FR Unit</h3>
                <p>The fr unit is a powerful addition to CSS that represents a fraction of the available space in the grid container.</p>
                <div class="article-meta">By John Doe | October 14, 2023</div>
                <a href="#" class="read-more">Read More</a>
            </article>
            
            <article class="article">
                <h3>Grid Template Areas Explained</h3>
                <p>Grid Template Areas provide a visual way to define your grid layout using named areas, making your code more readable and maintainable.</p>
                <div class="article-meta">By Sarah Johnson | October 13, 2023</div>
                <a href="#" class="read-more">Read More</a>
            </article>
            
            <article class="article">
                <h3>Creating Responsive Layouts</h3>
                <p>Learn how to create responsive layouts that adapt to different screen sizes using CSS Grid and media queries.</p>
                <div class="gallery">
                    <div class="gallery-item">Img 1</div>
                    <div class="gallery-item">Img 2</div>
                    <div class="gallery-item">Img 3</div>
                    <div class="gallery-item">Img 4</div>
                    <div class="gallery-item">Img 5</div>
                    <div class="gallery-item">Img 6</div>
                </div>
                <div class="article-meta">By Mike Wilson | October 12, 2023</div>
                <a href="#" class="read-more">Read More</a>
            </article>
        </main>
        
        <aside class="sidebar-right">
            <div class="sidebar-section">
                <h3>Trending Topics</h3>
                <ul class="sidebar-list">
                    <li><a href="#">CSS Grid Layouts</a></li>
                    <li><a href="#">Responsive Design</a></li>
                    <li><a href="#">Web Performance</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Progressive Web Apps</a></li>
                </ul>
            </div>
            
            <div class="sidebar-section">
                <h3>Upcoming Events</h3>
                <ul class="sidebar-list">
                    <li><strong>Oct 20:</strong> Web Design Conference</li>
                    <li><strong>Oct 25:</strong> CSS Grid Workshop</li>
                    <li><strong>Nov 5:</strong> Frontend Developers Meetup</li>
                    <li><strong>Nov 15:</strong> Responsive Design Seminar</li>
                </ul>
            </div>
        </aside>
        
        <footer class="footer">
            <div class="footer-section">
                <h4>About Us</h4>
                <ul class="footer-links">
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Editorial Team</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Follow Us</h4>
                <ul class="footer-links">
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
            
            <div class="footer-section">
                <h4>Legal</h4>
                <ul class="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                    <li><a href="#">GDPR Compliance</a></li>
                </ul>
            </div>
        </footer>
    </div>
</body>
</html>
```

This assignment will help you practice creating a complex layout using CSS Grid. You'll work with grid templates, areas, and the fr unit to create a responsive magazine layout. Pay attention to how the layout changes on different screen sizes and how grid properties help create a structured, organized design.