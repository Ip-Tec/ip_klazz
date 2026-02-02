# Day 9: Flexbox Deep Dive – Alignment, Justify, Grow/Shrink

## Introduction to Advanced Flexbox Properties

Flexbox provides powerful alignment and distribution capabilities that make it incredibly useful for creating modern, responsive layouts. Today we'll explore the properties that control how flex items are aligned, distributed, and how they grow or shrink within their container.

## Flexbox Alignment Properties

### 1. Justify Content
The 'justify-content' property aligns flex items along the main axis (horizontal by default). It controls how extra space is distributed between items.

```css
.container {
    justify-content: flex-start;    /* Default: items packed at start */
    justify-content: flex-end;      /* Items packed at end */
    justify-content: center;        /* Items centered */
    justify-content: space-between; /* Items evenly distributed, first at start, last at end */
    justify-content: space-around;  /* Items evenly distributed with equal space around */
    justify-content: space-evenly;  /* Items evenly distributed with equal space between */
}
```

### 2. Align Items
The 'align-items' property aligns flex items along the cross axis (vertical by default). It controls how items are positioned relative to each other on the perpendicular axis.

```css
.container {
    align-items: stretch;     /* Default: stretch to fill container */
    align-items: flex-start;  /* Items aligned to start of cross axis */
    align-items: flex-end;    /* Items aligned to end of cross axis */
    align-items: center;      /* Items centered along cross axis */
    align-items: baseline;    /* Items aligned along their baselines */
}
```

### 3. Align Content
The 'align-content' property aligns flex lines when there's extra space in the cross axis. This only applies when 'flex-wrap: wrap' is set and there are multiple lines of content.

```css
.container {
    align-content: stretch;     /* Default: lines stretch to take up space */
    align-content: flex-start;  /* Lines packed to start of cross axis */
    align-content: flex-end;    /* Lines packed to end of cross axis */
    align-content: center;      /* Lines centered along cross axis */
    align-content: space-between; /* Lines evenly distributed */
    align-content: space-around;  /* Lines evenly distributed with equal space around */
}
```

### 4. Align Self
The 'align-self' property allows overriding the 'align-items' value for individual flex items.

```css
.item {
    align-self: auto;       /* Default: follows align-items of container */
    align-self: flex-start; /* Overrides container's align-items */
    align-self: flex-end;   /* Overrides container's align-items */
    align-self: center;     /* Overrides container's align-items */
    align-self: baseline;   /* Overrides container's align-items */
    align-self: stretch;    /* Overrides container's align-items */
}
```

## Flex Item Sizing Properties

### 1. Flex Grow
The 'flex-grow' property defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion.

```css
.item {
    flex-grow: 0;    /* Default: do not grow */
    flex-grow: 1;    /* Grow to fill available space */
    flex-grow: 2;    /* Grow twice as much as items with flex-grow: 1 */
}
```

### 2. Flex Shrink
The 'flex-shrink' property defines the ability for a flex item to shrink if necessary.

```css
.item {
    flex-shrink: 1;    /* Default: shrink if needed */
    flex-shrink: 0;    /* Do not shrink */
    flex-shrink: 2;    /* Shrink twice as much as items with flex-shrink: 1 */
}
```

### 3. Flex Basis
The 'flex-basis' property defines the default size of an element before the remaining space is distributed.

```css
.item {
    flex-basis: auto;    /* Default: size based on content */
    flex-basis: 0;       /* Size based on flex-grow/flex-shrink only */
    flex-basis: 100px;   /* Set a specific size */
    flex-basis: 20%;     /* Set a percentage-based size */
}
```

### 4. Flex Shorthand
The 'flex' property is a shorthand for 'flex-grow', 'flex-shrink', and 'flex-basis'.

```css
.item {
    flex: 0 1 auto;    /* Default value */
    flex: 1;           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
    flex: 2 1 200px;   /* flex-grow: 2, flex-shrink: 1, flex-basis: 200px */
}
```

## Classwork: Flexbox Alignment Practice

Let's create an interactive example to practice flexbox alignment properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Alignment Practice</title>
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
            max-width: 1200px;
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
            flex-wrap: wrap;
        }
        
        .flex-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            margin: 5px;
            border-radius: 4px;
            text-align: center;
            min-width: 80px;
        }
        
        .tall-item {
            height: 120px;
            line-height: 80px;
        }
        
        .wide-item {
            width: 150px;
        }
        
        .baseline-item {
            padding-top: 40px;
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
        
        .property-demo {
            margin: 20px 0;
        }
        
        .demo-row {
            display: flex;
            margin-bottom: 10px;
            align-items: center;
        }
        
        .demo-label {
            width: 150px;
            font-weight: bold;
        }
        
        .demo-value {
            flex: 1;
            background-color: #ecf0f1;
            padding: 8px;
            border-radius: 4px;
        }
        
        .grow-shrink-demo {
            display: flex;
            border: 2px solid #3498db;
            border-radius: 5px;
            margin: 15px 0;
            padding: 10px;
        }
        
        .grow-item {
            background-color: #3498db;
            color: white;
            padding: 15px;
            margin: 5px;
            border-radius: 4px;
            text-align: center;
        }
    </style>
</head>
<body>
    <h1>Flexbox Alignment and Sizing Properties</h1>
    
    <div class="container">
        <h2>Justify Content</h2>
        
        <div class="instructions">
            <p>The <code>justify-content</code> property aligns flex items along the main axis.</p>
        </div>
        
        <div class="flex-container" id="justifyDemo">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="justifyContent">Justify Content:</label>
                <select id="justifyContent">
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="space-between">space-between</option>
                    <option value="space-around">space-around</option>
                    <option value="space-evenly">space-evenly</option>
                </select>
            </div>
        </div>
    </div>
    
    <div class="container">
        <h2>Align Items</h2>
        
        <div class="instructions">
            <p>The <code>align-items</code> property aligns flex items along the cross axis.</p>
        </div>
        
        <div class="flex-container" id="alignItemsDemo" style="min-height: 250px;">
            <div class="flex-item">Item 1</div>
            <div class="flex-item tall-item">Tall Item</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item baseline-item">Baseline</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="alignItems">Align Items:</label>
                <select id="alignItems">
                    <option value="stretch">stretch</option>
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="baseline">baseline</option>
                </select>
            </div>
        </div>
    </div>
    
    <div class="container">
        <h2>Align Content</h2>
        
        <div class="instructions">
            <p>The <code>align-content</code> property aligns flex lines when there's extra space in the cross axis.</p>
        </div>
        
        <div class="flex-container" id="alignContentDemo" style="min-height: 300px; flex-wrap: wrap;">
            <div class="flex-item wide-item">Item 1</div>
            <div class="flex-item wide-item">Item 2</div>
            <div class="flex-item wide-item">Item 3</div>
            <div class="flex-item wide-item">Item 4</div>
            <div class="flex-item wide-item">Item 5</div>
            <div class="flex-item wide-item">Item 6</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="alignContent">Align Content:</label>
                <select id="alignContent">
                    <option value="stretch">stretch</option>
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="space-between">space-between</option>
                    <option value="space-around">space-around</option>
                </select>
            </div>
        </div>
    </div>
    
    <div class="container">
        <h2>Align Self</h2>
        
        <div class="instructions">
            <p>The <code>align-self</code> property allows overriding the align-items value for individual flex items.</p>
        </div>
        
        <div class="flex-container" id="alignSelfDemo" style="min-height: 200px; align-items: center;">
            <div class="flex-item">Normal</div>
            <div class="flex-item" id="selfItem">Align Self</div>
            <div class="flex-item">Normal</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="alignSelf">Align Self:</label>
                <select id="alignSelf">
                    <option value="auto">auto</option>
                    <option value="flex-start">flex-start</option>
                    <option value="flex-end">flex-end</option>
                    <option value="center">center</option>
                    <option value="baseline">baseline</option>
                    <option value="stretch">stretch</option>
                </select>
            </div>
        </div>
    </div>
    
    <div class="container">
        <h2>Flex Grow, Shrink, and Basis</h2>
        
        <div class="instructions">
            <p>These properties control how flex items grow, shrink, and what their initial size should be.</p>
        </div>
        
        <div class="grow-shrink-demo" id="growShrinkDemo">
            <div class="grow-item" style="flex: 1 1 0;">flex: 1 1 0</div>
            <div class="grow-item" style="flex: 2 1 0;">flex: 2 1 0</div>
            <div class="grow-item" style="flex: 1 1 0;">flex: 1 1 0</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="flexGrow">Flex Grow (Item 2):</label>
                <select id="flexGrow">
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="flexShrink">Flex Shrink (All Items):</label>
                <select id="flexShrink">
                    <option value="0">0 (no shrink)</option>
                    <option value="1" selected>1 (default)</option>
                    <option value="2">2 (shrink 2x)</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="flexBasis">Flex Basis (All Items):</label>
                <select id="flexBasis">
                    <option value="0">0</option>
                    <option value="100px">100px</option>
                    <option value="auto" selected>auto</option>
                </select>
            </div>
        </div>
        
        <div class="property-demo">
            <h3>Property Values:</h3>
            <div class="demo-row">
                <div class="demo-label">flex-grow:</div>
                <div class="demo-value">Controls how much the item will grow relative to other items</div>
            </div>
            <div class="demo-row">
                <div class="demo-label">flex-shrink:</div>
                <div class="demo-value">Controls how much the item will shrink relative to other items</div>
            </div>
            <div class="demo-row">
                <div class="demo-label">flex-basis:</div>
                <div class="demo-value">Defines the default size of an element before remaining space is distributed</div>
            </div>
        </div>
    </div>

    <script>
        // Get all interactive elements
        const justifyDemo = document.getElementById('justifyDemo');
        const alignItemsDemo = document.getElementById('alignItemsDemo');
        const alignContentDemo = document.getElementById('alignContentDemo');
        const alignSelfDemo = document.getElementById('alignSelfDemo');
        const selfItem = document.getElementById('selfItem');
        const growShrinkDemo = document.getElementById('growShrinkDemo');
        
        const justifyContent = document.getElementById('justifyContent');
        const alignItems = document.getElementById('alignItems');
        const alignContent = document.getElementById('alignContent');
        const alignSelf = document.getElementById('alignSelf');
        const flexGrow = document.getElementById('flexGrow');
        const flexShrink = document.getElementById('flexShrink');
        const flexBasis = document.getElementById('flexBasis');
        
        // Set up event listeners
        justifyContent.addEventListener('change', () => {
            justifyDemo.style.justifyContent = justifyContent.value;
        });
        
        alignItems.addEventListener('change', () => {
            alignItemsDemo.style.alignItems = alignItems.value;
        });
        
        alignContent.addEventListener('change', () => {
            alignContentDemo.style.alignContent = alignContent.value;
        });
        
        alignSelf.addEventListener('change', () => {
            selfItem.style.alignSelf = alignSelf.value;
        });
        
        flexGrow.addEventListener('change', updateGrowShrink);
        flexShrink.addEventListener('change', updateGrowShrink);
        flexBasis.addEventListener('change', updateGrowShrink);
        
        // Update grow/shrink demo
        function updateGrowShrink() {
            const items = growShrinkDemo.querySelectorAll('.grow-item');
            
            // Update item 2 with new flex-grow value
            items[1].style.flex = `${flexGrow.value} ${flexShrink.value} ${flexBasis.value}`;
            
            // Update all items with new flex-shrink and flex-basis
            items.forEach((item, index) => {
                if (index !== 1) { // Skip item 2 for flex-grow
                    item.style.flex = `1 ${flexShrink.value} ${flexBasis.value}`;
                }
            });
        }
    </script>
</body>
</html>
```

## Assignment: Responsive Dashboard Layout with Flexbox

**Objective:** Create a responsive dashboard layout using advanced flexbox properties.

**Requirements:**
1. Create a dashboard with:
   - A header with logo and user menu
   - A sidebar navigation
   - A main content area with cards
   - A footer

2. Implement the following flexbox properties:
   - Use 'justify-content' and 'align-items' for alignment
   - Use 'flex-grow', 'flex-shrink', and 'flex-basis' for responsive sizing
   - Use 'flex-wrap' for responsive card layout
   - Use 'align-self' for individual item alignment

3. Ensure the layout is fully responsive and looks good on different screen sizes

**Challenge (Optional):**
- Add a dark/light mode toggle that changes the color scheme
- Implement a collapsible sidebar
- Add hover effects and transitions for interactive elements

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Dashboard</title>
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
            flex-direction: column;
            min-height: 100vh;
        }
        
        /* Header */
        header {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        
        .header-container {
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
            font-weight: bold;
        }
        
        /* Main Content Layout */
        .main-container {
            display: flex;
            flex: 1;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
        }
        
        /* Sidebar */
        .sidebar {
            width: 250px;
            background-color: #34495e;
            color: white;
            padding: 1.5rem;
            display: flex;
            flex-direction: column;
        }
        
        .sidebar-nav {
            list-style: none;
            margin-top: 2rem;
        }
        
        .sidebar-nav li {
            margin-bottom: 1rem;
        }
        
        .sidebar-nav a {
            color: #ecf0f1;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 4px;
            transition: background-color 0.3s;
        }
        
        .sidebar-nav a:hover {
            background-color: #3498db;
        }
        
        /* Main Content */
        .content {
            flex: 1;
            padding: 2rem;
            display: flex;
            flex-direction: column;
        }
        
        .dashboard-header {
            margin-bottom: 2rem;
        }
        
        /* Cards Layout */
        .cards-container {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            justify-content: space-between;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            flex: 1 1 300px;
            display: flex;
            flex-direction: column;
        }
        
        .card-header {
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #ecf0f1;
        }
        
        .card-content {
            flex: 1;
        }
        
        .card-footer {
            margin-top: 1rem;
            padding-top: 0.5rem;
            border-top: 1px solid #ecf0f1;
            display: flex;
            justify-content: space-between;
        }
        
        /* Stats Cards */
        .stat-card {
            background: linear-gradient(135deg, #3498db, #2980b9);
            color: white;
            text-align: center;
        }
        
        .stat-number {
            font-size: 2rem;
            font-weight: bold;
            margin: 1rem 0;
        }
        
        /* Footer */
        footer {
            background-color: #2c3e50;
            color: white;
            padding: 1rem;
            text-align: center;
            margin-top: auto;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .main-container {
                flex-direction: column;
            }
            
            .sidebar {
                width: 100%;
                order: 2;
            }
            
            .content {
                order: 1;
            }
            
            .header-container {
                flex-direction: column;
                gap: 1rem;
            }
            
            .cards-container {
                justify-content: center;
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
    <header>
        <div class="header-container">
            <div class="logo">Dashboard</div>
            <div class="user-menu">
                <button class="btn">Notifications <span class="notification"></span></button>
                <div class="user-avatar">JD</div>
            </div>
        </div>
    </header>
    
    <div class="main-container">
        <aside class="sidebar">
            <h2>Navigation</h2>
            <ul class="sidebar-nav">
                <li><a href="#"><span>🏠</span> Dashboard</a></li>
                <li><a href="#"><span>📊</span> Analytics</a></li>
                <li><a href="#"><span>📁</span> Projects</a></li>
                <li><a href="#"><span>📅</span> Calendar</a></li>
                <li><a href="#"><span>📋</span> Tasks</a></li>
                <li><a href="#"><span>⚙️</span> Settings</a></li>
            </ul>
        </aside>
        
        <main class="content">
            <div class="dashboard-header">
                <h1>Dashboard Overview</h1>
                <p>Welcome back, John! Here's what's happening with your projects today.</p>
            </div>
            
            <div class="cards-container">
                <div class="card stat-card">
                    <div class="card-header">
                        <h3>Total Users</h3>
                    </div>
                    <div class="card-content">
                        <div class="stat-number">2,543</div>
                        <p>+12% from last week</p>
                    </div>
                </div>
                
                <div class="card stat-card">
                    <div class="card-header">
                        <h3>Revenue</h3>
                    </div>
                    <div class="card-content">
                        <div class="stat-number">$12,856</div>
                        <p>+8% from last week</p>
                    </div>
                </div>
                
                <div class="card stat-card">
                    <div class="card-header">
                        <h3>Conversion Rate</h3>
                    </div>
                    <div class="card-content">
                        <div class="stat-number">4.7%</div>
                        <p>+2.3% from last week</p>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3>Recent Activity</h3>
                    </div>
                    <div class="card-content">
                        <ul>
                            <li>User registration: John Smith</li>
                            <li>Project update: Website redesign</li>
                            <li>Payment received: $1,200</li>
                            <li>New support ticket: #1245</li>
                        </ul>
                    </div>
                    <div class="card-footer">
                        <a href="#">View all activity</a>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3>Project Progress</h3>
                    </div>
                    <div class="card-content">
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
                    <div class="card-footer">
                        <a href="#">View all projects</a>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-header">
                        <h3>Team Members</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #3498db; display: flex; align-items: center; justify-content: center; margin-right: 1rem; color: white; font-weight: bold;">JD</div>
                            <div>
                                <div>John Doe</div>
                                <div style="font-size: 0.9rem; color: #7f8c8d;">Project Manager</div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #e74c3c; display: flex; align-items: center; justify-content: center; margin-right: 1rem; color: white; font-weight: bold;">JS</div>
                            <div>
                                <div>Jane Smith</div>
                                <div style="font-size: 0.9rem; color: #7f8c8d;">Developer</div>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
                            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #2ecc71; display: flex; align-items: center; justify-content: center; margin-right: 1rem; color: white; font-weight: bold;">RJ</div>
                            <div>
                                <div>Robert Johnson</div>
                                <div style="font-size: 0.9rem; color: #7f8c8d;">Designer</div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <a href="#">View all team members</a>
                    </div>
                </div>
            </div>
        </main>
    </div>
    
    <footer>
        <p>&copy; 2023 Flexbox Dashboard. All rights reserved.</p>
    </footer>
</body>
</html>
```

This assignment will help you practice using advanced flexbox properties to create a responsive dashboard layout. Pay attention to how flex properties help create a flexible layout that adapts to different screen sizes, and how alignment properties help position elements precisely within their containers.