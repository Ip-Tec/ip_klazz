# Day 11: CSS Grid Advanced – Areas, Auto-placement, Nesting

## Introduction to Advanced CSS Grid Concepts

Now that you understand the basics of CSS Grid, let's explore more advanced concepts that will help you create complex, responsive layouts with precision and efficiency. Today we'll focus on grid areas, auto-placement algorithms, and nesting grids within grids.

## Grid Template Areas

The 'grid-template-areas' property allows you to name sections of your grid and then place items in those named areas, creating a visual representation of your layout in your CSS code.

### Defining Grid Areas

```css
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

### Using Grid Areas

You can also span multiple cells with grid areas:

```css
.container {
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "sidebar footer footer";
}
```

## Auto-placement in CSS Grid

CSS Grid has powerful auto-placement capabilities that automatically position items in the grid.

### The grid-auto-flow Property

Controls how auto-placed items are inserted in the grid:

```css
.container {
  grid-auto-flow: row; /* Default: items placed by filling each row */
  grid-auto-flow: column; /* Items placed by filling each column */
  grid-auto-flow: dense; /* Attempts to fill holes in the grid */
}
```

### Implicit vs Explicit Grid

- **Explicit grid**: Defined by 'grid-template-rows' and 'grid-template-columns'
- **Implicit grid**: Created automatically when items are placed outside the explicit grid

```css
.container {
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 100px; /* Size for implicitly created rows */
  grid-auto-columns: 200px; /* Size for implicitly created columns */
}
```

## Nesting Grids

You can create grids within grids, which is powerful for complex layouts:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.nested-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
```

## Classwork: Advanced Grid Practice

Let's create an interactive example to practice these advanced grid concepts:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced CSS Grid Practice</title>
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
        
        .area-header { background-color: #3498db; }
        .area-sidebar { background-color: #2ecc71; }
        .area-content { background-color: #e74c3c; }
        .area-footer { background-color: #f39c12; }
        .area-extra { background-color: #9b59b6; }
        
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
        
        .code-example {
            background-color: #2c3e50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            margin: 15px 0;
            overflow-x: auto;
        }
        
        .nested-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            padding: 10px;
            background-color: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
        }
        
        .nested-item {
            background-color: rgba(0, 0, 0, 0.3);
            padding: 10px;
            border-radius: 4px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Advanced CSS Grid: Areas, Auto-placement, Nesting</h1>
    
    <div class="container">
        <h2>Grid Template Areas</h2>
        
        <div class="instructions">
            <p>The <code>grid-template-areas</code> property allows you to name sections of your grid and place items in those named areas.</p>
        </div>
        
        <div class="grid-container" id="areasDemo" style="
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: 100px 200px 100px;
            grid-template-areas:
                'header header header'
                'sidebar content extra'
                'footer footer footer';
        ">
            <div class="grid-item area-header" style="grid-area: header;">Header</div>
            <div class="grid-item area-sidebar" style="grid-area: sidebar;">Sidebar</div>
            <div class="grid-item area-content" style="grid-area: content;">Content</div>
            <div class="grid-item area-extra" style="grid-area: extra;">Extra</div>
            <div class="grid-item area-footer" style="grid-area: footer;">Footer</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="areasLayout">Layout Pattern:</label>
                <select id="areasLayout">
                    <option value="standard">Standard Layout</option>
                    <option value="alternate">Alternate Layout</option>
                    <option value="complex">Complex Layout</option>
                </select>
            </div>
        </div>
        
        <div class="code-example">
            #areasDemo {<br>
            &nbsp;&nbsp;grid-template-areas:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;'header header header'<br>
            &nbsp;&nbsp;&nbsp;&nbsp;'sidebar content extra'<br>
            &nbsp;&nbsp;&nbsp;&nbsp;'footer footer footer';<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>Auto-placement and Grid Auto Flow</h2>
        
        <div class="instructions">
            <p>The <code>grid-auto-flow</code> property controls how auto-placed items are inserted in the grid.</p>
        </div>
        
        <div class="grid-container" id="autoFlowDemo" style="
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 100px);
            grid-auto-flow: row;
        ">
            <div class="grid-item">Item 1</div>
            <div class="grid-item">Item 2</div>
            <div class="grid-item">Item 3</div>
            <div class="grid-item">Item 4</div>
            <div class="grid-item">Item 5</div>
            <div class="grid-item">Item 6</div>
            <div class="grid-item">Item 7</div>
            <div class="grid-item">Item 8</div>
            <div class="grid-item">Item 9</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="autoFlow">Grid Auto Flow:</label>
                <select id="autoFlow">
                    <option value="row">row</option>
                    <option value="column">column</option>
                    <option value="dense">dense</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="itemCount">Number of Items:</label>
                <select id="itemCount">
                    <option value="5">5 Items</option>
                    <option value="9" selected>9 Items</option>
                    <option value="12">12 Items</option>
                </select>
            </div>
        </div>
        
        <div class="code-example">
            #autoFlowDemo {<br>
            &nbsp;&nbsp;grid-auto-flow: <span id="flowCode">row</span>;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>Nested Grids</h2>
        
        <div class="instructions">
            <p>You can create grids within grids for more complex layouts.</p>
        </div>
        
        <div class="grid-container" id="nestedDemo" style="
            grid-template-columns: 1fr 2fr;
            grid-template-rows: 100px 200px;
            grid-template-areas:
                'header header'
                'sidebar content';
        ">
            <div class="grid-item area-header" style="grid-area: header;">Header</div>
            <div class="grid-item area-sidebar" style="grid-area: sidebar;">Sidebar</div>
            <div class="grid-item area-content" style="grid-area: content; padding: 0;">
                <div class="nested-grid">
                    <div class="nested-item">Nested 1</div>
                    <div class="nested-item">Nested 2</div>
                    <div class="nested-item">Nested 3</div>
                    <div class="nested-item">Nested 4</div>
                </div>
            </div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="nestedLayout">Nested Layout:</label>
                <select id="nestedLayout">
                    <option value="2x2">2x2 Grid</option>
                    <option value="3x2">3x2 Grid</option>
                    <option value="1x4">1x4 Grid</option>
                </select>
            </div>
        </div>
        
        <div class="code-example">
            .nested-grid {<br>
            &nbsp;&nbsp;display: grid;<br>
            &nbsp;&nbsp;grid-template-columns: repeat(2, 1fr);<br>
            &nbsp;&nbsp;gap: 10px;<br>
            &nbsp;&nbsp;padding: 10px;<br>
            }
        </div>
    </div>

    <script>
        // Get all interactive elements
        const areasDemo = document.getElementById('areasDemo');
        const autoFlowDemo = document.getElementById('autoFlowDemo');
        const nestedDemo = document.getElementById('nestedDemo');
        
        const areasLayout = document.getElementById('areasLayout');
        const autoFlow = document.getElementById('autoFlow');
        const itemCount = document.getElementById('itemCount');
        const nestedLayout = document.getElementById('nestedLayout');
        
        const flowCode = document.getElementById('flowCode');
        
        // Set up event listeners
        areasLayout.addEventListener('change', () => {
            switch(areasLayout.value) {
                case 'standard':
                    areasDemo.style.gridTemplateAreas = "'header header header' 'sidebar content extra' 'footer footer footer'";
                    break;
                case 'alternate':
                    areasDemo.style.gridTemplateAreas = "'header header header' 'content content sidebar' 'footer footer footer'";
                    break;
                case 'complex':
                    areasDemo.style.gridTemplateAreas = "'header header header' 'sidebar content content' 'sidebar footer extra'";
                    break;
            }
        });
        
        autoFlow.addEventListener('change', () => {
            autoFlowDemo.style.gridAutoFlow = autoFlow.value;
            flowCode.textContent = autoFlow.value;
        });
        
        itemCount.addEventListener('change', () => {
            const count = parseInt(itemCount.value);
            let itemsHtml = '';
            
            for (let i = 1; i <= count; i++) {
                itemsHtml += `<div class="grid-item">Item ${i}</div>`;
            }
            
            autoFlowDemo.innerHTML = itemsHtml;
        });
        
        nestedLayout.addEventListener('change', () => {
            const nestedGrid = nestedDemo.querySelector('.nested-grid');
            
            switch(nestedLayout.value) {
                case '2x2':
                    nestedGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
                    nestedGrid.style.gridTemplateRows = 'repeat(2, 1fr)';
                    break;
                case '3x2':
                    nestedGrid.style.gridTemplateColumns = 'repeat(3, 1fr)';
                    nestedGrid.style.gridTemplateRows = 'repeat(2, 1fr)';
                    break;
                case '1x4':
                    nestedGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
                    nestedGrid.style.gridTemplateRows = '1fr';
                    break;
            }
        });
    </script>
</body>
</html>
```

## Assignment: Create a Responsive Dashboard with Advanced Grid

**Objective:** Create a responsive dashboard layout using advanced CSS Grid features including grid areas, auto-placement, and nested grids.

**Requirements:**
1. Create a dashboard with:
   - A header with logo and user menu
   - A sidebar navigation
   - A main content area with multiple sections
   - A footer with multiple columns

2. Implement the following grid features:
   - Use 'grid-template-areas' for the overall layout
   - Use 'grid-auto-flow' for content sections
   - Create at least one nested grid within the main content area
   - Make the layout responsive using media queries

3. Ensure the layout is visually appealing with appropriate styling

**Challenge (Optional):**
- Add a dark/light mode toggle
- Implement a grid-based chart or data visualization
- Add interactive elements that modify the grid layout

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced Grid Dashboard</title>
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
            display: grid;
            grid-template-rows: auto 1fr auto;
            min-height: 100vh;
        }
        
        /* Dashboard Grid Layout */
        .dashboard {
            display: grid;
            grid-template-columns: 250px 1fr;
            grid-template-rows: 70px 1fr 50px;
            grid-template-areas:
                "sidebar header"
                "sidebar main"
                "sidebar footer";
            min-height: 100vh;
        }
        
        /* Header */
        .header {
            grid-area: header;
            background-color: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .search-bar {
            flex: 1;
            max-width: 400px;
            margin: 0 2rem;
        }
        
        .search-bar input {
            width: 100%;
            padding: 0.5rem 1rem;
            border: 1px solid #ddd;
            border-radius: 20px;
        }
        
        .user-menu {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #3498db;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        /* Sidebar */
        .sidebar {
            grid-area: sidebar;
            background-color: #2c3e50;
            color: white;
            padding: 1.5rem 1rem;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 2rem;
            padding-left: 0.5rem;
        }
        
        .nav-menu {
            list-style: none;
        }
        
        .nav-menu li {
            margin-bottom: 0.5rem;
        }
        
        .nav-menu a {
            color: #ecf0f1;
            text-decoration: none;
            display: block;
            padding: 0.75rem 0.5rem;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        .nav-menu a:hover {
            background-color: #3498db;
        }
        
        /* Main Content */
        .main {
            grid-area: main;
            padding: 2rem;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            grid-auto-rows: minmax(200px, auto);
            gap: 1.5rem;
            grid-auto-flow: dense;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
        }
        
        .card-header {
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #ecf0f1;
        }
        
        .wide-card {
            grid-column: span 2;
        }
        
        .tall-card {
            grid-row: span 2;
        }
        
        /* Nested Grid for Stats */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .stat-item {
            background-color: #f8f9fa;
            padding: 1rem;
            border-radius: 6px;
            text-align: center;
        }
        
        .stat-number {
            font-size: 1.5rem;
            font-weight: bold;
            color: #3498db;
        }
        
        /* Chart Container */
        .chart-container {
            height: 200px;
            background: linear-gradient(180deg, #3498db 0%, #2980b9 100%);
            border-radius: 6px;
            margin-top: 1rem;
            display: flex;
            align-items: flex-end;
            justify-content: space-around;
            padding: 1rem;
        }
        
        .chart-bar {
            width: 30px;
            background-color: white;
            border-radius: 3px 3px 0 0;
        }
        
        /* Footer */
        .footer {
            grid-area: footer;
            background-color: #ecf0f1;
            padding: 1rem;
            text-align: center;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .footer-section {
            padding: 0.5rem;
        }
        
        /* Responsive Design */
        @media (max-width: 900px) {
            .dashboard {
                grid-template-columns: 1fr;
                grid-template-areas:
                    "header"
                    "main"
                    "footer";
            }
            
            .sidebar {
                display: none;
            }
            
            .main {
                grid-template-columns: 1fr;
            }
            
            .wide-card, .tall-card {
                grid-column: 1;
                grid-row: 1;
            }
        }
        
        @media (max-width: 600px) {
            .header {
                flex-direction: column;
                gap: 1rem;
                padding: 1rem 0.5rem;
            }
            
            .search-bar {
                margin: 0;
                max-width: 100%;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }
        }
        
        /* Interactive Elements */
        .btn {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #2980b9;
        }
        
        .notification {
            position: relative;
        }
        
        .notification::after {
            content: "3";
            position: absolute;
            top: -5px;
            right: -5px;
            background-color: #e74c3c;
            color: white;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
        }
    </style>
</head>
<body>
    <div class="dashboard">
        <header class="header">
            <div class="search-bar">
                <input type="text" placeholder="Search...">
            </div>
            <div class="user-menu">
                <button class="btn notification">Notifications</button>
                <div class="user-avatar">JD</div>
            </div>
        </header>
        
        <aside class="sidebar">
            <div class="logo">Dashboard</div>
            <ul class="nav-menu">
                <li><a href="#"><span>📊</span> Overview</a></li>
                <li><a href="#"><span>📈</span> Analytics</a></li>
                <li><a href="#"><span>📁</span> Projects</a></li>
                <li><a href="#"><span>📅</span> Calendar</a></li>
                <li><a href="#"><span>📋</span> Tasks</a></li>
                <li><a href="#"><span>⚙️</span> Settings</a></li>
            </ul>
        </aside>
        
        <main class="main">
            <div class="card wide-card">
                <div class="card-header">
                    <h2>Welcome Back, John!</h2>
                </div>
                <p>Here's what's happening with your projects today.</p>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-number">42</div>
                        <div>New Tasks</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">17</div>
                        <div>Completed</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">85%</div>
                        <div>Performance</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">24</div>
                        <div>Pending</div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3>Recent Activity</h3>
                </div>
                <ul>
                    <li>User registration: John Smith</li>
                    <li>Project update: Website redesign</li>
                    <li>Payment received: $1,200</li>
                    <li>New support ticket: #1245</li>
                </ul>
            </div>
            
            <div class="card tall-card">
                <div class="card-header">
                    <h3>Performance Metrics</h3>
                </div>
                <div class="chart-container">
                    <div class="chart-bar" style="height: 70%;"></div>
                    <div class="chart-bar" style="height: 40%;"></div>
                    <div class="chart-bar" style="height: 60%;"></div>
                    <div class="chart-bar" style="height: 80%;"></div>
                    <div class="chart-bar" style="height: 30%;"></div>
                    <div class="chart-bar" style="height: 90%;"></div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <h3>Team Members</h3>
                </div>
                <ul>
                    <li>John Doe - Project Manager</li>
                    <li>Jane Smith - Developer</li>
                    <li>Robert Johnson - Designer</li>
                    <li>Sarah Williams - QA Engineer</li>
                </ul>
            </div>
            
            <div class="card wide-card">
                <div class="card-header">
                    <h3>Project Progress</h3>
                </div>
                <div>
                    <h4>Website Redesign</h4>
                    <progress value="75" max="100">75%</progress>
                </div>
                <div>
                    <h4>Mobile App</h4>
                    <progress value="45" max="100">45%</progress>
                </div>
                <div>
                    <h4>API Integration</h4>
                    <progress value="90" max="100">90%</progress>
                </div>
            </div>
        </main>
        
        <footer class="footer">
            <div class="footer-section">
                <p>&copy; 2023 Advanced Grid Dashboard</p>
            </div>
            <div class="footer-section">
                <p>Privacy Policy | Terms of Service</p>
            </div>
            <div class="footer-section">
                <p>Contact: support@dashboard.com</p>
            </div>
        </footer>
    </div>
</body>
</html>
```

This assignment will help you practice using advanced CSS Grid features to create a complex, responsive dashboard layout. You'll work with grid areas, auto-placement, and nested grids to create a professional-looking interface. Pay attention to how the layout adapts to different screen sizes and how grid properties help create a structured, organized design.