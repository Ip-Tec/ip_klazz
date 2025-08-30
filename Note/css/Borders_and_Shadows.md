# Day 14: Borders and Shadows – border-radius, box-shadow

## Introduction to Borders and Shadows

Borders and shadows are essential CSS properties that enhance the visual appeal of elements on a web page. They help create depth, focus, and style, making elements stand out.

## Borders

The 'border' property is a shorthand for setting the border width, style, and color.

### Border Properties

1. **border-width**: Sets the width of the border (e.g., 1px, 2px).
2. **border-style**: Sets the style of the border (e.g., solid, dashed, dotted).
3. **border-color**: Sets the color of the border.

Example:
```css
.element {
    border: 2px solid #3498db;
}
```

### Individual Border Sides

You can style each border side individually:

```css
.element {
    border-top: 2px solid #3498db;
    border-right: 1px dashed #e74c3c;
    border-bottom: 3px dotted #2ecc71;
    border-left: 1px double #f39c12;
}
```

## Border Radius

The 'border-radius' property is used to round the corners of an element. It can be specified for each corner individually or with shorthand.

### Using Border Radius

```css
.element {
    border-radius: 10px; /* All corners */
    border-radius: 10px 20px; /* top-left & bottom-right, top-right & bottom-left */
    border-radius: 10px 20px 30px 40px; /* top-left, top-right, bottom-right, bottom-left */
}
```

### Elliptical Corners

You can create elliptical corners by specifying two values for each corner:

```css
.element {
    border-radius: 50px / 25px; /* horizontal radius / vertical radius */
    border-radius: 10px 20px 30px 40px / 5px 10px 15px 20px;
}
```

## Box Shadow

The 'box-shadow' property adds shadow effects around an element's frame.

### Box Shadow Syntax

```css
.element {
    box-shadow: [horizontal offset] [vertical offset] [blur radius] [spread radius] [color] [inset];
}
```

- **horizontal offset**: Positive values shadow to the right, negative to the left.
- **vertical offset**: Positive values shadow to the bottom, negative to the top.
- **blur radius**: The larger the value, the blurrier the shadow.
- **spread radius**: Expands or contracts the shadow.
- **color**: The color of the shadow.
- **inset**: Changes the shadow from an outer shadow to an inner shadow.

### Examples

```css
.element {
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); /* Basic shadow */
    box-shadow: 0 0 20px 5px rgba(52, 152, 219, 0.5); /* With spread */
    box-shadow: inset 0 0 10px #000000; /* Inset shadow */
    box-shadow: 5px 5px 10px red, -5px -5px 10px blue; /* Multiple shadows */
}
```

## Classwork: Practice with Borders and Shadows

Let's create an interactive example to practice these properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Borders and Shadows Practice</title>
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
        
        .demo-element {
            width: 200px;
            height: 200px;
            background-color: #3498db;
            margin: 20px auto;
            transition: all 0.3s ease;
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
        
        input[type="range"] {
            width: 100%;
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
        
        .range-value {
            text-align: center;
            font-size: 14px;
            color: #7f8c8d;
        }
    </style>
</head>
<body>
    <h1>Borders and Shadows</h1>
    
    <div class="container">
        <h2>Border Properties</h2>
        
        <div class="instructions">
            <p>Use the controls below to modify the border properties of the demo element.</p>
        </div>
        
        <div class="demo-element" id="borderDemo"></div>
        
        <div class="controls">
            <div class="control-group">
                <label for="borderWidth">Border Width (px):</label>
                <input type="range" id="borderWidth" min="0" max="20" value="0">
                <div class="range-value" id="borderWidthValue">0px</div>
            </div>
            
            <div class="control-group">
                <label for="borderStyle">Border Style:</label>
                <select id="borderStyle">
                    <option value="none">none</option>
                    <option value="solid">solid</option>
                    <option value="dashed">dashed</option>
                    <option value="dotted">dotted</option>
                    <option value="double">double</option>
                    <option value="groove">groove</option>
                    <option value="ridge">ridge</option>
                    <option value="inset">inset</option>
                    <option value="outset">outset</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="borderColor">Border Color:</label>
                <input type="color" id="borderColor" value="#3498db">
            </div>
            
            <div class="control-group">
                <label for="borderRadius">Border Radius (px):</label>
                <input type="range" id="borderRadius" min="0" max="100" value="0">
                <div class="range-value" id="borderRadiusValue">0px</div>
            </div>
        </div>
        
        <div class="code-example">
            #borderDemo {<br>
            &nbsp;&nbsp;border: <span id="borderWidthCode">0</span>px <span id="borderStyleCode">none</span> <span id="borderColorCode">#3498db</span>;<br>
            &nbsp;&nbsp;border-radius: <span id="borderRadiusCode">0</span>px;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>Box Shadow Properties</h2>
        
        <div class="instructions">
            <p>Use the controls below to modify the box shadow properties of the demo element.</p>
        </div>
        
        <div class="demo-element" id="shadowDemo"></div>
        
        <div class="controls">
            <div class="control-group">
                <label for="shadowH">Horizontal Offset (px):</label>
                <input type="range" id="shadowH" min="-50" max="50" value="0">
                <div class="range-value" id="shadowHValue">0px</div>
            </div>
            
            <div class="control-group">
                <label for="shadowV">Vertical Offset (px):</label>
                <input type="range" id="shadowV" min="-50" max="50" value="0">
                <div class="range-value" id="shadowVValue">0px</div>
            </div>
            
            <div class="control-group">
                <label for="shadowBlur">Blur Radius (px):</label>
                <input type="range" id="shadowBlur" min="0" max="50" value="0">
                <div class="range-value" id="shadowBlurValue">0px</div>
            </div>
            
            <div class="control-group">
                <label for="shadowSpread">Spread Radius (px):</label>
                <input type="range" id="shadowSpread" min="0" max="50" value="0">
                <div class="range-value" id="shadowSpreadValue">0px</div>
            </div>
            
            <div class="control-group">
                <label for="shadowColor">Shadow Color:</label>
                <input type="color" id="shadowColor" value="#000000">
            </div>
            
            <div class="control-group">
                <label for="shadowInset">Inset Shadow:</label>
                <select id="shadowInset">
                    <option value="">No</option>
                    <option value="inset">Yes</option>
                </select>
            </div>
        </div>
        
        <div class="code-example">
            #shadowDemo {<br>
            &nbsp;&nbsp;box-shadow: <span id="shadowHCode">0</span>px <span id="shadowVCode">0</span>px <span id="shadowBlurCode">0</span>px <span id="shadowSpreadCode">0</span>px <span id="shadowColorCode">#000000</span> <span id="shadowInsetCode"></span>;<br>
            }
        </div>
    </div>

    <script>
        // Border controls
        const borderDemo = document.getElementById('borderDemo');
        const borderWidth = document.getElementById('borderWidth');
        const borderStyle = document.getElementById('borderStyle');
        const borderColor = document.getElementById('borderColor');
        const borderRadius = document.getElementById('borderRadius');
        
        const borderWidthValue = document.getElementById('borderWidthValue');
        const borderRadiusValue = document.getElementById('borderRadiusValue');
        
        const borderWidthCode = document.getElementById('borderWidthCode');
        const borderStyleCode = document.getElementById('borderStyleCode');
        const borderColorCode = document.getElementById('borderColorCode');
        const borderRadiusCode = document.getElementById('borderRadiusCode');
        
        // Shadow controls
        const shadowDemo = document.getElementById('shadowDemo');
        const shadowH = document.getElementById('shadowH');
        const shadowV = document.getElementById('shadowV');
        const shadowBlur = document.getElementById('shadowBlur');
        const shadowSpread = document.getElementById('shadowSpread');
        const shadowColor = document.getElementById('shadowColor');
        const shadowInset = document.getElementById('shadowInset');
        
        const shadowHValue = document.getElementById('shadowHValue');
        const shadowVValue = document.getElementById('shadowVValue');
        const shadowBlurValue = document.getElementById('shadowBlurValue');
        const shadowSpreadValue = document.getElementById('shadowSpreadValue');
        
        const shadowHCode = document.getElementById('shadowHCode');
        const shadowVCode = document.getElementById('shadowVCode');
        const shadowBlurCode = document.getElementById('shadowBlurCode');
        const shadowSpreadCode = document.getElementById('shadowSpreadCode');
        const shadowColorCode = document.getElementById('shadowColorCode');
        const shadowInsetCode = document.getElementById('shadowInsetCode');
        
        // Update border properties
        function updateBorder() {
            borderDemo.style.borderWidth = borderWidth.value + 'px';
            borderDemo.style.borderStyle = borderStyle.value;
            borderDemo.style.borderColor = borderColor.value;
            borderDemo.style.borderRadius = borderRadius.value + 'px';
            
            borderWidthValue.textContent = borderWidth.value + 'px';
            borderRadiusValue.textContent = borderRadius.value + 'px';
            
            borderWidthCode.textContent = borderWidth.value;
            borderStyleCode.textContent = borderStyle.value;
            borderColorCode.textContent = borderColor.value;
            borderRadiusCode.textContent = borderRadius.value;
        }
        
        // Update shadow properties
        function updateShadow() {
            const insetValue = shadowInset.value;
            shadowDemo.style.boxShadow = `${shadowH.value}px ${shadowV.value}px ${shadowBlur.value}px ${shadowSpread.value}px ${shadowColor.value} ${insetValue}`;
            
            shadowHValue.textContent = shadowH.value + 'px';
            shadowVValue.textContent = shadowV.value + 'px';
            shadowBlurValue.textContent = shadowBlur.value + 'px';
            shadowSpreadValue.textContent = shadowSpread.value + 'px';
            
            shadowHCode.textContent = shadowH.value;
            shadowVCode.textContent = shadowV.value;
            shadowBlurCode.textContent = shadowBlur.value;
            shadowSpreadCode.textContent = shadowSpread.value;
            shadowColorCode.textContent = shadowColor.value;
            shadowInsetCode.textContent = insetValue;
        }
        
        // Add event listeners
        borderWidth.addEventListener('input', updateBorder);
        borderStyle.addEventListener('change', updateBorder);
        borderColor.addEventListener('input', updateBorder);
        borderRadius.addEventListener('input', updateBorder);
        
        shadowH.addEventListener('input', updateShadow);
        shadowV.addEventListener('input', updateShadow);
        shadowBlur.addEventListener('input', updateShadow);
        shadowSpread.addEventListener('input', updateShadow);
        shadowColor.addEventListener('input', updateShadow);
        shadowInset.addEventListener('change', updateShadow);
        
        // Initialize
        updateBorder();
        updateShadow();
    </script>
</body>
</html>
```

## Assignment: Create a Component Library with Borders and Shadows

**Objective:** Create a set of UI components that demonstrate various uses of borders and shadows.

**Requirements:**
1. Create at least 5 different UI components (buttons, cards, input fields, etc.)
2. Each component should demonstrate different border and shadow properties
3. Include at least:
   - A button with hover effects using box-shadow
   - A card with a subtle shadow and rounded corners
   - An input field with focus states using border changes
   - A badge with a circular border-radius
   - A modal with a large shadow and rounded corners

4. Ensure the components are visually consistent and appealing

**Challenge (Optional):**
- Add a dark/light mode toggle that changes the shadow colors and intensities
- Create a toggle switch that changes the border-radius of all components
- Implement a color picker to change the theme color of the components

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Component Library</title>
    <style>
        :root {
            --primary-color: #3498db;
            --secondary-color: #2c3e50;
            --accent-color: #e74c3c;
            --text-color: #333;
            --light-bg: #f5f7fa;
            --dark-bg: #2c3e50;
            --light-text: #fff;
            --border-radius: 8px;
            --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
        }
        
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-color);
            background-color: var(--light-bg);
            padding: 30px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: var(--secondary-color);
            margin-bottom: 30px;
        }
        
        .component-section {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid var(--light-bg);
        }
        
        .component-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }
        
        /* Button Component */
        .btn {
            display: inline-block;
            background-color: var(--primary-color);
            color: var(--light-text);
            padding: 10px 20px;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            text-align: center;
            text-decoration: none;
            transition: var(--transition);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .btn:hover {
            background-color: #2980b9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            transform: translateY(-2px);
        }
        
        .btn.btn-accent {
            background-color: var(--accent-color);
        }
        
        .btn.btn-accent:hover {
            background-color: #c0392b;
        }
        
        /* Card Component */
        .card {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
            transition: var(--transition);
        }
        
        .card:hover {
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
            transform: translateY(-5px);
        }
        
        .card-img {
            width: 100%;
            height: 150px;
            background-color: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .card-content {
            padding: 20px;
        }
        
        .card h3 {
            margin-bottom: 10px;
            color: var(--secondary-color);
        }
        
        /* Input Component */
        .input-group {
            margin-bottom: 15px;
        }
        
        .input-label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .input-field {
            width: 100%;
            padding: 10px;
            border: 2px solid #ddd;
            border-radius: var(--border-radius);
            font-size: 16px;
            transition: var(--transition);
        }
        
        .input-field:focus {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
            outline: none;
        }
        
        /* Badge Component */
        .badge {
            display: inline-block;
            background-color: var(--accent-color);
            color: var(--light-text);
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
        }
        
        .badge.badge-primary {
            background-color: var(--primary-color);
        }
        
        .badge.badge-secondary {
            background-color: var(--secondary-color);
        }
        
        /* Modal Component */
        .modal {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            padding: 20px;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .modal-header {
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
        }
        
        .modal-body {
            margin-bottom: 20px;
        }
        
        .modal-footer {
            display: flex;
            justify-content: flex-end;
            gap: 10px;
        }
        
        /* Controls */
        .controls {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .control-group {
            margin-bottom: 15px;
        }
        
        .control-label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        .control-input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Component Library</h1>
        
        <div class="controls">
            <h2>Customize Components</h2>
            <div class="control-group">
                <label for="radiusControl" class="control-label">Border Radius:</label>
                <input type="range" id="radiusControl" min="0" max="20" value="8" class="control-input">
            </div>
            <div class="control-group">
                <label for="shadowControl" class="control-label">Shadow Intensity:</label>
                <input type="range" id="shadowControl" min="0" max="10" value="4" class="control-input">
            </div>
        </div>
        
        <div class="component-section">
            <h2>Buttons</h2>
            <div class="component-grid">
                <button class="btn">Primary Button</button>
                <button class="btn btn-accent">Accent Button</button>
                <button class="btn" style="border-radius: 20px;">Pill Button</button>
            </div>
        </div>
        
        <div class="component-section">
            <h2>Cards</h2>
            <div class="component-grid">
                <div class="card">
                    <div class="card-img">Image</div>
                    <div class="card-content">
                        <h3>Card Title</h3>
                        <p>This is a sample card with some content. It has a shadow and rounded corners.</p>
                    </div>
                </div>
                <div class="card">
                    <div class="card-img">Image</div>
                    <div class="card-content">
                        <h3>Another Card</h3>
                        <p>This card demonstrates the use of borders and shadows in UI design.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="component-section">
            <h2>Input Fields</h2>
            <div class="component-grid">
                <div class="input-group">
                    <label class="input-label">Name</label>
                    <input type="text" class="input-field" placeholder="Enter your name">
                </div>
                <div class="input-group">
                    <label class="input-label">Email</label>
                    <input type="email" class="input-field" placeholder="Enter your email">
                </div>
            </div>
        </div>
        
        <div class="component-section">
            <h2>Badges</h2>
            <div class="component-grid">
                <span class="badge">Default Badge</span>
                <span class="badge badge-primary">Primary Badge</span>
                <span class="badge badge-secondary">Secondary Badge</span>
            </div>
        </div>
        
        <div class="component-section">
            <h2>Modal</h2>
            <div class="modal">
                <div class="modal-header">
                    <h3>Modal Title</h3>
                </div>
                <div class="modal-body">
                    <p>This is a sample modal component with a shadow and rounded corners.</p>
                </div>
                <div class="modal-footer">
                    <button class="btn">Cancel</button>
                    <button class="btn btn-accent">Confirm</button>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Get control elements
        const radiusControl = document.getElementById('radiusControl');
        const shadowControl = document.getElementById('shadowControl');
        
        // Add event listeners
        radiusControl.addEventListener('input', updateStyles);
        shadowControl.addEventListener('input', updateStyles);
        
        // Update CSS variables
        function updateStyles() {
            document.documentElement.style.setProperty('--border-radius', radiusControl.value + 'px');
            document.documentElement.style.setProperty('--box-shadow', `0 ${shadowControl.value}px ${shadowControl.value * 1.5}px rgba(0, 0, 0, 0.1)`);
        }
    </script>
</body>
</html>
```

This assignment will help you practice using borders and shadows to create a cohesive set of UI components. You'll work with border-radius to create rounded elements and box-shadow to add depth and dimension. Pay attention to how these properties affect the overall look and feel of your components, and how they can be used to create visual hierarchy and focus.