# Day 5: Display and Visibility – block, inline, none

## Understanding CSS Display and Visibility Properties

The CSS 'display' and 'visibility' properties are fundamental to controlling how elements are rendered on a web page. They determine both the layout behavior of elements and whether they're visible to users.

## The Display Property

The 'display' property is one of the most important CSS properties for controlling layout. It specifies how an element is displayed and how it interacts with other elements.

### Common Display Values

#### 1. Block-level Elements ('display: block')

- Elements form a "block" that takes up the full available width
- Always start on a new line
- Examples: '<div>', '<p>', '<h1>'-'<h6>', '<section>'

```css
.block-element {
  display: block;
  width: 80%;
  height: 100px;
  background-color: #3498db;
  margin: 10px auto;
}
```

#### 2. Inline Elements ('display: inline')

- Elements only take up as much width as necessary
- Do not start on a new line
- Cannot have their width and height set
- Examples: '<span>', '<a>', '<strong>', '<em>'

```css
.inline-element {
  display: inline;
  background-color: #e74c3c;
  color: white;
  padding: 2px 5px;
}
```

#### 3. Inline-block Elements ('display: inline-block')

- Similar to inline elements but can have width and height set
- Does not start on a new line
- Useful for creating horizontal menus or buttons

```css
.inline-block-element {
  display: inline-block;
  width: 100px;
  height: 40px;
  background-color: #2ecc71;
  margin: 5px;
  text-align: center;
  line-height: 40px;
}
```

#### 4. None ('display: none')

- Completely removes the element from the document flow
- Element takes up no space and is not visible
- Useful for hiding elements without deleting them from the HTML

```css
.hidden-element {
  display: none;
}
```

## The Visibility Property

The 'visibility' property controls whether an element is visible without affecting the document layout.

### Common Visibility Values

#### 1. Visible ('visibility: visible')

- Element is visible (default value)

#### 2. Hidden ('visibility: hidden')

- Element is invisible but still takes up space in the layout
- Unlike 'display: none', the element's space is preserved

```css
.invisible-element {
  visibility: hidden;
}
```

#### 3. Collapse ('visibility: collapse')

- For table rows, columns, row groups, and column groups
- Removes the element as if 'display: none' were set, but affects table layout
- For other elements, same as 'hidden'

## Display vs. Visibility: Key Differences

| Property     | Value     | Takes Up Space | Interactive |
| ------------ | --------- | -------------- | ----------- |
| 'display'    | 'none'    | No             | No          |
| 'visibility' | 'hidden'  | Yes            | No          |
| 'visibility' | 'visible' | Yes            | Yes         |

## Classwork: Display and Visibility Practice

Let's create an interactive example to practice these concepts:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Display and Visibility Practice</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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

      .example {
        border: 2px solid #e0e0e0;
        padding: 15px;
        margin: 15px 0;
        border-radius: 5px;
      }

      .block-example {
        display: block;
        background-color: #3498db;
        color: white;
        padding: 10px;
        margin: 10px 0;
      }

      .inline-example {
        display: inline;
        background-color: #e74c3c;
        color: white;
        padding: 5px;
      }

      .inline-block-example {
        display: inline-block;
        background-color: #2ecc71;
        color: white;
        padding: 10px;
        width: 120px;
        height: 50px;
        margin: 5px;
        text-align: center;
        line-height: 30px;
      }

      .none-example {
        display: none;
        background-color: #f39c12;
        color: white;
        padding: 10px;
      }

      .hidden-example {
        visibility: hidden;
        background-color: #9b59b6;
        color: white;
        padding: 10px;
        margin: 10px 0;
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

      select,
      button {
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

      .demo-box {
        background-color: #34495e;
        color: white;
        padding: 20px;
        margin: 15px 0;
        border-radius: 5px;
        min-height: 50px;
      }

      .visible {
        border: 2px solid #2ecc71;
      }

      .explanation {
        background-color: #fff8e1;
        padding: 15px;
        border-left: 4px solid #f39c12;
        margin: 15px 0;
        border-radius: 0 5px 5px 0;
      }

      .interactive-demo {
        margin-top: 30px;
      }

      .box {
        width: 100px;
        height: 60px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 5px;
        color: white;
        font-weight: bold;
        border-radius: 4px;
      }

      .box1 {
        background-color: #3498db;
      }
      .box2 {
        background-color: #e74c3c;
      }
      .box3 {
        background-color: #2ecc71;
      }
      .box4 {
        background-color: #f39c12;
      }
    </style>
  </head>
  <body>
    <h1>CSS Display and Visibility Properties</h1>

    <div class="container">
      <h2>Display Property Examples</h2>

      <div class="example">
        <h3>Block Elements</h3>
        <div class="block-example">Block Element 1</div>
        <div class="block-example">Block Element 2</div>
        <div class="explanation">
          Block elements take the full width available and force a new line
          before and after.
        </div>
      </div>

      <div class="example">
        <h3>Inline Elements</h3>
        <p>
          This is a paragraph with
          <span class="inline-example">inline elements</span> inside it. Notice
          how they <span class="inline-example">flow with the text</span> and
          don't break the line.
        </p>
        <div class="explanation">
          Inline elements only take up as much width as needed and don't force
          new lines.
        </div>
      </div>

      <div class="example">
        <h3>Inline-Block Elements</h3>
        <div>
          <div class="inline-block-example">Inline-Block 1</div>
          <div class="inline-block-example">Inline-Block 2</div>
          <div class="inline-block-example">Inline-Block 3</div>
        </div>
        <div class="explanation">
          Inline-block elements flow like inline elements but can have width and
          height set.
        </div>
      </div>

      <div class="example">
        <h3>Display: None</h3>
        <div class="none-example">This element has display: none</div>
        <p>Notice there's no space reserved for the element above.</p>
        <div class="explanation">
          Elements with display: none are completely removed from the document
          flow.
        </div>
      </div>

      <div class="example">
        <h3>Visibility: Hidden</h3>
        <div class="hidden-example">This element has visibility: hidden</div>
        <p>
          Notice the space is still reserved for the element above, even though
          it's not visible.
        </p>
        <div class="explanation">
          Elements with visibility: hidden are invisible but still affect
          layout.
        </div>
      </div>
    </div>

    <div class="container interactive-demo">
      <h2>Interactive Demo</h2>

      <div class="demo-box" id="demoElement">Demo Element</div>

      <div class="controls">
        <div class="control-group">
          <label for="displayProperty">Display Property:</label>
          <select id="displayProperty">
            <option value="block">block</option>
            <option value="inline">inline</option>
            <option value="inline-block">inline-block</option>
            <option value="none">none</option>
          </select>
        </div>

        <div class="control-group">
          <label for="visibilityProperty">Visibility Property:</label>
          <select id="visibilityProperty">
            <option value="visible">visible</option>
            <option value="hidden">hidden</option>
            <option value="collapse">collapse</option>
          </select>
        </div>

        <div class="control-group">
          <button id="resetButton">Reset to Default</button>
        </div>
      </div>

      <div class="explanation">
        <p>
          Try different combinations of display and visibility properties to see
          how they affect the demo element.
        </p>
        <p>
          <strong>Note:</strong> If display is set to "none", the visibility
          property will have no visible effect.
        </p>
      </div>
    </div>

    <div class="container">
      <h2>Layout Comparison</h2>

      <h3>Normal Layout:</h3>
      <div>
        <div class="box box1">Box 1</div>
        <div class="box box2">Box 2</div>
        <div class="box box3">Box 3</div>
        <div class="box box4">Box 4</div>
      </div>

      <h3>With Hidden Element (visibility: hidden):</h3>
      <div>
        <div class="box box1">Box 1</div>
        <div class="box box2" style="visibility: hidden;">Box 2</div>
        <div class="box box3">Box 3</div>
        <div class="box box4">Box 4</div>
      </div>

      <h3>With Removed Element (display: none):</h3>
      <div>
        <div class="box box1">Box 1</div>
        <div class="box box2" style="display: none;">Box 2</div>
        <div class="box box3">Box 3</div>
        <div class="box box4">Box 4</div>
      </div>

      <div class="explanation">
        Notice how with visibility: hidden, the space for Box 2 is preserved,
        but with display: none, the element is completely removed from the
        layout.
      </div>
    </div>

    <script>
      // Get interactive elements
      const demoElement = document.getElementById("demoElement");
      const displayProperty = document.getElementById("displayProperty");
      const visibilityProperty = document.getElementById("visibilityProperty");
      const resetButton = document.getElementById("resetButton");

      // Set up event listeners
      displayProperty.addEventListener("change", updateDemoElement);
      visibilityProperty.addEventListener("change", updateDemoElement);
      resetButton.addEventListener("click", resetDemoElement);

      // Update the demo element based on selected values
      function updateDemoElement() {
        demoElement.style.display = displayProperty.value;
        demoElement.style.visibility = visibilityProperty.value;
      }

      // Reset to default values
      function resetDemoElement() {
        displayProperty.value = "block";
        visibilityProperty.value = "visible";
        demoElement.style.display = "block";
        demoElement.style.visibility = "visible";
      }
    </script>
  </body>
</html>
```

## Assignment: Navigation Menu with Display Properties

**Objective:** Create a responsive navigation menu that demonstrates your understanding of display properties.

**Requirements:**

1. Create a horizontal navigation menu with 5 links using 'display: inline-block'
2. Create a vertical navigation menu with the same links using 'display: block'
3. Add a toggle button that switches between horizontal and vertical layouts
4. Implement a dropdown menu using display/visibility properties
5. Ensure proper spacing and styling for both layouts

**Challenge (Optional):**

- Make the navigation responsive so it switches to a mobile-friendly "hamburger" menu on smaller screens
- Add smooth transitions when changing display properties
- Implement a "highlight current page" feature

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navigation Menu Assignment</title>
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      body {
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        line-height: 1.6;
        color: #333;
        background-color: #f9f9f9;
        padding: 20px;
      }

      .container {
        max-width: 800px;
        margin: 0 auto;
        background-color: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }

      h1 {
        text-align: center;
        color: #2c3e50;
        margin-bottom: 30px;
      }

      .nav-menu {
        margin: 20px 0;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        overflow: hidden;
      }

      .nav-horizontal {
        display: block;
      }

      .nav-horizontal .nav-item {
        display: inline-block;
        width: auto;
      }

      .nav-vertical {
        display: block;
      }

      .nav-vertical .nav-item {
        display: block;
        width: 100%;
      }

      .nav-item {
        padding: 12px 20px;
        background-color: #3498db;
        color: white;
        text-decoration: none;
        transition: background-color 0.3s;
        border-right: 1px solid #2980b9;
      }

      .nav-item:last-child {
        border-right: none;
      }

      .nav-item:hover {
        background-color: #2980b9;
      }

      .controls {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin: 20px 0;
      }

      button {
        padding: 10px 20px;
        background-color: #2c3e50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s;
      }

      button:hover {
        background-color: #1a252f;
      }

      .dropdown {
        position: relative;
        display: inline-block;
      }

      .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
      }

      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }

      .dropdown-content a:hover {
        background-color: #f1f1f1;
      }

      .dropdown:hover .dropdown-content {
        display: block;
      }

      .instructions {
        background-color: #fff8e1;
        padding: 15px;
        border-left: 4px solid #f39c12;
        margin: 20px 0;
        border-radius: 0 5px 5px 0;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Navigation Menu with Display Properties</h1>

      <div class="instructions">
        <p><strong>Assignment Requirements:</strong></p>
        <ol>
          <li>
            Create a horizontal navigation menu using display: inline-block
          </li>
          <li>Create a vertical navigation menu using display: block</li>
          <li>Add a toggle button to switch between layouts</li>
          <li>Implement a dropdown menu using display properties</li>
        </ol>
      </div>

      <div class="controls">
        <button id="horizontalBtn">Horizontal Layout</button>
        <button id="verticalBtn">Vertical Layout</button>
      </div>

      <div class="nav-menu" id="navMenu">
        <a href="#" class="nav-item">Home</a>
        <a href="#" class="nav-item">About</a>
        <div class="dropdown">
          <a href="#" class="nav-item">Services</a>
          <div class="dropdown-content">
            <a href="#">Web Design</a>
            <a href="#">Development</a>
            <a href="#">Consulting</a>
          </div>
        </div>
        <a href="#" class="nav-item">Portfolio</a>
        <a href="#" class="nav-item">Contact</a>
      </div>

      <div class="instructions">
        <p>
          <strong>How it works:</strong> The JavaScript will toggle CSS classes
          that change the display properties of the navigation items.
        </p>
      </div>
    </div>

    <script>
      // Get elements
      const navMenu = document.getElementById("navMenu");
      const horizontalBtn = document.getElementById("horizontalBtn");
      const verticalBtn = document.getElementById("verticalBtn");

      // Set up event listeners
      horizontalBtn.addEventListener("click", () => {
        navMenu.classList.add("nav-horizontal");
        navMenu.classList.remove("nav-vertical");
      });

      verticalBtn.addEventListener("click", () => {
        navMenu.classList.add("nav-vertical");
        navMenu.classList.remove("nav-horizontal");
      });

      // Initialize with horizontal layout
      navMenu.classList.add("nav-horizontal");
    </script>
  </body>
</html>
```

This assignment will help you practice using different display properties to create flexible layouts and understand how they affect the rendering of elements on a web page.
