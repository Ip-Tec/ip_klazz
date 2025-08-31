# Day 8: Flexbox Basics – Containers, Items, Direction

## Introduction to Flexbox

Flexbox (Flexible Box Layout) is a powerful CSS layout module designed for one-dimensional layouts. It provides an efficient way to distribute space and align items within a container, even when their sizes are unknown or dynamic. Flexbox makes it much easier to create responsive and flexible layouts compared to traditional methods like floats and positioning.

## Flexbox Terminology

### 1. Flex Container
The parent element that holds flex items. You create a flex container by setting 'display: flex' or 'display: inline-flex'.

### 2. Flex Items
The direct children of a flex container. These items become flexible and can be arranged according to flexbox rules.

### 3. Main Axis
The primary axis along which flex items are laid out. It can be horizontal or vertical depending on the 'flex-direction'.

### 4. Cross Axis
The axis perpendicular to the main axis.

## Creating a Flex Container

To start using flexbox, you simply need to set the 'display' property of a container element to 'flex' or 'inline-flex':

```css
.container {
    display: flex; /* Creates a block-level flex container */
}

.inline-container {
    display: inline-flex; /* Creates an inline-level flex container */
}
```

## Flex Direction Property

The 'flex-direction' property defines the direction of the main axis and determines how flex items are placed in the container:

```css
.container {
    flex-direction: row; /* Default: left to right (ltr) */
    flex-direction: row-reverse; /* Right to left */
    flex-direction: column; /* Top to bottom */
    flex-direction: column-reverse; /* Bottom to top */
}
```

## Classwork: Flexbox Basics Practice

Let's create an interactive example to practice flexbox basics:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Basics Practice</title>
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
        
        .flex-container {
            display: flex;
            border: 2px solid #3498db;
            border-radius: 5px;
            padding: 10px;
            margin: 15px 0;
            min-height: 200px;
        }
        
        .flex-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            margin: 5px;
            border-radius: 4px;
            text-align: center;
            flex: 1;
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
        
        select, button {
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
        
        .visual-guide {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            padding: 15px;
            background-color: #ecf0f1;
            border-radius: 5px;
        }
        
        .axis-demo {
            text-align: center;
        }
        
        .axis-demo div {
            width: 200px;
            height: 100px;
            border: 2px solid #3498db;
            margin: 10px 0;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
        
        .row-demo {
            flex-direction: row;
        }
        
        .column-demo {
            flex-direction: column;
        }
        
        .demo-label {
            font-weight: bold;
            color: #2c3e50;
        }
    </style>
</head>
<body>
    <h1>Flexbox Basics: Containers, Items, and Direction</h1>
    
    <div class="container">
        <h2>Understanding Flex Direction</h2>
        
        <div class="visual-guide">
            <div class="axis-demo">
                <span class="demo-label">flex-direction: row</span>
                <div class="row-demo">
                    <span>Item 1</span>
                    <span>Item 2</span>
                    <span>Item 3</span>
                </div>
                <p>Main Axis: Horizontal</p>
            </div>
            
            <div class="axis-demo">
                <span class="demo-label">flex-direction: column</span>
                <div class="column-demo">
                    <span>Item 1</span>
                    <span>Item 2</span>
                    <span>Item 3</span>
                </div>
                <p>Main Axis: Vertical</p>
            </div>
        </div>
        
        <div class="instructions">
            <p>The <code>flex-direction</code> property defines the direction of the main axis, which determines how flex items are placed in the container.</p>
            <p>Try different values using the controls below to see how they affect the layout.</p>
        </div>
        
        <div class="flex-container" id="demoContainer">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="flexDirection">Flex Direction:</label>
                <select id="flexDirection">
                    <option value="row">row</option>
                    <option value="row-reverse">row-reverse</option>
                    <option value="column">column</option>
                    <option value="column-reverse">column-reverse</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="displayType">Display Type:</label>
                <select id="displayType">
                    <option value="flex">flex</option>
                    <option value="inline-flex">inline-flex</option>
                </select>
            </div>
            
            <div class="control-group">
                <button id="resetButton">Reset to Default</button>
            </div>
        </div>
    </div>
    
    <div class="container">
        <h2>Flex Container Properties</h2>
        
        <div class="instructions">
            <p>To create a flex container, set the <code>display</code> property to <code>flex</code> or <code>inline-flex</code>:</p>
        </div>
        
        <div class="example">
            <h3>Block-level Flex Container (display: flex)</h3>
            <div class="flex-container">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
            
            <h3>Inline-level Flex Container (display: inline-flex)</h3>
            <div class="flex-container" style="display: inline-flex; width: auto;">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
            </div>
            <span> (This is inline content next to the inline-flex container)</span>
        </div>
    </div>
    
    <div class="container">
        <h2>Flex Direction Examples</h2>
        
        <div class="example">
            <h3>flex-direction: row (default)</h3>
            <div class="flex-container" style="flex-direction: row;">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
            
            <h3>flex-direction: row-reverse</h3>
            <div class="flex-container" style="flex-direction: row-reverse;">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
            
            <h3>flex-direction: column</h3>
            <div class="flex-container" style="flex-direction: column;">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
            
            <h3>flex-direction: column-reverse</h3>
            <div class="flex-container" style="flex-direction: column-reverse;">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
        </div>
    </div>

    <script>
        // Get interactive elements
        const demoContainer = document.getElementById('demoContainer');
        const flexDirection = document.getElementById('flexDirection');
        const displayType = document.getElementById('displayType');
        const resetButton = document.getElementById('resetButton');
        
        // Set up event listeners
        flexDirection.addEventListener('change', updateDemo);
        displayType.addEventListener('change', updateDemo);
        resetButton.addEventListener('click', resetDemo);
        
        // Update the demo based on selected values
        function updateDemo() {
            demoContainer.style.flexDirection = flexDirection.value;
            demoContainer.style.display = displayType.value;
        }
        
        // Reset to default values
        function resetDemo() {
            flexDirection.value = 'row';
            displayType.value = 'flex';
            demoContainer.style.flexDirection = 'row';
            demoContainer.style.display = 'flex';
        }
    </script>
</body>
</html>
```

## Assignment: Flexbox Navigation and Card Layout

**Objective:** Create a responsive webpage layout using flexbox properties covered today.

**Requirements:**
1. Create a webpage with:
   - A flexbox-based navigation menu
   - A main content area with a flexbox-based card layout
   - A footer with flexbox alignment

2. Implement the following flexbox properties:
   - 'display: flex' for containers
   - 'flex-direction' with at least two different values
   - Use both 'flex' and 'inline-flex' appropriately

3. Ensure the layout is responsive and looks good on different screen sizes

**Challenge (Optional):**
- Add a toggle to change the flex direction of the card layout
- Implement a mobile-friendly hamburger menu using flexbox
- Add hover effects to navigation items and cards

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Layout Assignment</title>
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
        
        /* Header and Navigation */
        header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
        }
        
        .nav-menu li {
            margin-left: 1.5rem;
        }
        
        .nav-menu a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .nav-menu a:hover {
            color: #3498db;
        }
        
        /* Main Content */
        .main-container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 2rem;
            color: #2c3e50;
        }
        
        /* Card Layout */
        .cards-container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: center;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            flex: 1 1 300px;
            max-width: 350px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }
        
        .card h3 {
            color: #3498db;
            margin-bottom: 1rem;
        }
        
        .card p {
            margin-bottom: 1rem;
        }
        
        .card-button {
            display: inline-block;
            background-color: #3498db;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            text-decoration: none;
            transition: background-color 0.3s;
        }
        
        .card-button:hover {
            background-color: #2980b9;
        }
        
        /* Footer */
        footer {
            background-color: #2c3e50;
            color: white;
            padding: 2rem 1rem;
            margin-top: 3rem;
        }
        
        .footer-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .footer-links a {
            color: white;
            text-decoration: none;
        }
        
        .footer-links a:hover {
            text-decoration: underline;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-container {
                flex-direction: column;
            }
            
            .nav-menu {
                margin-top: 1rem;
                flex-direction: column;
                align-items: center;
            }
            
            .nav-menu li {
                margin: 0.5rem 0;
            }
            
            .cards-container {
                flex-direction: column;
                align-items: center;
            }
            
            .card {
                flex: 1 1 100%;
                max-width: 100%;
            }
        }
        
        /* Controls for the assignment */
        .controls {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .control-button {
            background-color: #2c3e50;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .control-button:hover {
            background-color: #3498db;
        }
    </style>
</head>
<body>
    <header>
        <nav class="nav-container">
            <div class="logo">Flexbox Layout</div>
            <ul class="nav-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="main-container">
        <h2 class="section-title">Our Services</h2>
        
        <div class="controls">
            <button class="control-button" id="rowLayout">Row Layout</button>
            <button class="control-button" id="columnLayout">Column Layout</button>
        </div>
        
        <div class="cards-container" id="cardsContainer">
            <div class="card">
                <h3>Web Design</h3>
                <p>We create beautiful, responsive websites that look great on all devices. Our designs are user-friendly and optimized for performance.</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
            
            <div class="card">
                <h3>Development</h3>
                <p>Our developers build robust web applications using the latest technologies. We focus on clean code and scalable solutions.</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
            
            <div class="card">
                <h3>SEO Optimization</h3>
                <p>Improve your search engine rankings with our comprehensive SEO services. We help you get found by your target audience.</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
            
            <div class="card">
                <h3>Content Strategy</h3>
                <p>Create engaging content that resonates with your audience. We help you develop a content strategy that drives results.</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
            
            <div class="card">
                <h3>Social Media</h3>
                <p>Expand your online presence with our social media management services. We help you connect with your audience effectively.</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
            
            <div class="card">
                <h3>E-commerce</h3>
                <p>Set up and optimize your online store with our e-commerce solutions. We help you sell products and services online.</p>
                <a href="#" class="card-button">Learn More</a>
            </div>
        </div>
    </main>
    
    <footer>
        <div class="footer-container">
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Us</a>
            </div>
            <p>&copy; 2023 Flexbox Layout. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Get elements
        const cardsContainer = document.getElementById('cardsContainer');
        const rowLayoutBtn = document.getElementById('rowLayout');
        const columnLayoutBtn = document.getElementById('columnLayout');
        
        // Set up event listeners
        rowLayoutBtn.addEventListener('click', () => {
            cardsContainer.style.flexDirection = 'row';
        });
        
        columnLayoutBtn.addEventListener('click', () => {
            cardsContainer.style.flexDirection = 'column';
        });
    </script>
</body>
</html>
```

This assignment will help you practice creating a complete layout using flexbox. You'll work with flex containers, flex items, and different flex directions to create a responsive design. Pay attention to how the layout changes when you modify the flex direction and how the responsive design adapts to different screen sizes.