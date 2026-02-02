# Day 18: CSS Pseudo-classes – :hover, :focus, :nth-child, etc.

## Introduction to CSS Pseudo-classes

CSS pseudo-classes are keywords added to selectors that specify a special state of the selected elements. They allow you to style elements based on their state, position in the document, user interaction, and more, without needing to add extra classes or JavaScript.

## Common Pseudo-classes

### 1. User Action Pseudo-classes

#### :hover

Matches when the user interacts with an element using a pointing device (like a mouse) but doesn't necessarily activate it.

```css
.button:hover {
  background-color: #3498db;
  transform: translateY(-2px);
}
```

#### :active

Matches when an element is being activated by the user (e.g., when a button is being pressed).

```css
.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
```

#### :focus

Matches when an element has received focus (e.g., when a form input is selected).

```css
.input:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}
```

### 2. Link Pseudo-classes

#### :link

Matches links that have not yet been visited.

```css
a:link {
  color: #3498db;
  text-decoration: none;
}
```

#### :visited

Matches links that have been visited.

```css
a:visited {
  color: #9b59b6;
}
```

### 3. Form Pseudo-classes

#### :checked

Matches radio buttons, checkboxes, or options that are checked or toggled to an on state.

```css
input[type="checkbox"]:checked {
  background-color: #3498db;
}
```

#### :disabled

Matches elements that are disabled.

```css
input:disabled {
  background-color: #ecf0f1;
  cursor: not-allowed;
}
```

#### :required

Matches form elements that are required.

```css
input:required {
  border-left: 3px solid #e74c3c;
}
```

#### :valid and :invalid

Match form elements based on validation.

```css
input:valid {
  border-color: #2ecc71;
}

input:invalid {
  border-color: #e74c3c;
}
```

### 4. Structural Pseudo-classes

#### :first-child

Matches an element that is the first child of its parent.

```css
li:first-child {
  font-weight: bold;
}
```

#### :last-child

Matches an element that is the last child of its parent.

```css
li:last-child {
  border-bottom: none;
}
```

#### :nth-child()

Matches elements based on their position in a group of siblings.

```css
/* Even elements */
tr:nth-child(even) {
  background-color: #f9f9f9;
}

/* Odd elements */
tr:nth-child(odd) {
  background-color: #ffffff;
}

/* Specific pattern */
li:nth-child(3n + 1) {
  color: #3498db;
}
```

#### :nth-of-type()

Matches elements of a specific type based on their position.

```css
article:nth-of-type(2) {
  border-left: 3px solid #3498db;
  padding-left: 15px;
}
```

#### :not()

Matches elements that do not match a given selector.

```css
/* All inputs that are not checkboxes */
input:not([type="checkbox"]) {
  width: 100%;
  padding: 10px;
}
```

## Classwork: Pseudo-classes Practice

Let's create an interactive example to practice pseudo-classes:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CSS Pseudo-classes Practice</title>
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

      .demo-section {
        border: 2px dashed #ccc;
        padding: 20px;
        margin: 15px 0;
      }

      /* Button demo */
      .button {
        display: inline-block;
        background-color: #3498db;
        color: white;
        padding: 10px 20px;
        border-radius: 4px;
        text-decoration: none;
        margin: 5px;
        transition: all 0.3s ease;
      }

      .button:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
      }

      .button:active {
        transform: translateY(0);
      }

      /* Form demo */
      .form-group {
        margin-bottom: 15px;
      }

      .form-label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
      }

      .form-input {
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      .form-input:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
        outline: none;
      }

      .form-input:disabled {
        background-color: #ecf0f1;
        cursor: not-allowed;
      }

      .form-input:required {
        border-left: 3px solid #e74c3c;
      }

      .form-input:valid {
        border-color: #2ecc71;
      }

      /* List demo */
      .demo-list {
        list-style: none;
      }

      .demo-list li {
        padding: 10px;
        border-bottom: 1px solid #eee;
      }

      .demo-list li:first-child {
        font-weight: bold;
        background-color: #f8f9fa;
      }

      .demo-list li:last-child {
        border-bottom: none;
      }

      .demo-list li:nth-child(even) {
        background-color: #f5f7fa;
      }

      /* Table demo */
      .demo-table {
        width: 100%;
        border-collapse: collapse;
      }

      .demo-table th,
      .demo-table td {
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid #ddd;
      }

      .demo-table tr:nth-child(odd) {
        background-color: #f9f9f9;
      }

      .demo-table tr:hover {
        background-color: #e8f4fc;
      }

      /* Checkbox demo */
      .checkbox-group {
        margin: 15px 0;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        cursor: pointer;
      }

      .checkbox-custom {
        width: 20px;
        height: 20px;
        border: 2px solid #ddd;
        border-radius: 4px;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }

      input[type="checkbox"] {
        display: none;
      }

      input[type="checkbox"]:checked + .checkbox-custom {
        background-color: #3498db;
        border-color: #3498db;
      }

      input[type="checkbox"]:checked + .checkbox-custom::after {
        content: "✓";
        color: white;
      }

      /* Link demo */
      .demo-link:link {
        color: #3498db;
        text-decoration: none;
      }

      .demo-link:visited {
        color: #9b59b6;
      }

      .demo-link:hover {
        text-decoration: underline;
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
    <h1>CSS Pseudo-classes</h1>

    <div class="container">
      <h2>User Action Pseudo-classes</h2>

      <div class="instructions">
        <p>
          These pseudo-classes respond to user interactions like hovering,
          clicking, and focusing.
        </p>
      </div>

      <div class="demo-section">
        <a href="#" class="button">Hover and Click Me</a>

        <div class="form-group">
          <label class="form-label">Focus on this input:</label>
          <input
            type="text"
            class="form-input"
            placeholder="Click here to focus"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Disabled input:</label>
          <input
            type="text"
            class="form-input"
            placeholder="Disabled input"
            disabled
          />
        </div>
      </div>

      <div class="code-example">
        .button:hover {<br />
        &nbsp;&nbsp;background-color: #2980b9;<br />
        &nbsp;&nbsp;transform: translateY(-2px);<br />
        }<br /><br />

        .button:active {<br />
        &nbsp;&nbsp;transform: translateY(0);<br />
        }<br /><br />

        .form-input:focus {<br />
        &nbsp;&nbsp;border-color: #3498db;<br />
        &nbsp;&nbsp;box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);<br />
        }<br /><br />

        .form-input:disabled {<br />
        &nbsp;&nbsp;background-color: #ecf0f1;<br />
        &nbsp;&nbsp;cursor: not-allowed;<br />
        }
      </div>
    </div>

    <div class="container">
      <h2>Link Pseudo-classes</h2>

      <div class="instructions">
        <p>
          These pseudo-classes style links based on whether they have been
          visited.
        </p>
      </div>

      <div class="demo-section">
        <a href="#unvisited" class="demo-link">Unvisited Link</a> |
        <a href="#" class="demo-link">Visited Link (click then refresh)</a>
      </div>

      <div class="code-example">
        a:link {<br />
        &nbsp;&nbsp;color: #3498db;<br />
        &nbsp;&nbsp;text-decoration: none;<br />
        }<br /><br />

        a:visited {<br />
        &nbsp;&nbsp;color: #9b59b6;<br />
        }<br /><br />

        a:hover {<br />
        &nbsp;&nbsp;text-decoration: underline;<br />
        }
      </div>
    </div>

    <div class="container">
      <h2>Form Pseudo-classes</h2>

      <div class="instructions">
        <p>These pseudo-classes style form elements based on their state.</p>
      </div>

      <div class="demo-section">
        <div class="form-group">
          <label class="form-label">Required field:</label>
          <input
            type="text"
            class="form-input"
            placeholder="This field is required"
            required
          />
        </div>

        <div class="form-group">
          <label class="form-label">Valid email:</label>
          <input
            type="email"
            class="form-input"
            placeholder="test@example.com"
            value="test@example.com"
          />
        </div>

        <div class="form-group">
          <label class="form-label">Invalid email:</label>
          <input
            type="email"
            class="form-input"
            placeholder="not-an-email"
            value="not-an-email"
          />
        </div>

        <div class="checkbox-group">
          <label class="checkbox-label">
            <input type="checkbox" />
            <span class="checkbox-custom"></span>
            Check this checkbox
          </label>
        </div>
      </div>

      <div class="code-example">
        input:required {<br />
        &nbsp;&nbsp;border-left: 3px solid #e74c3c;<br />
        }<br /><br />

        input:valid {<br />
        &nbsp;&nbsp;border-color: #2ecc71;<br />
        }<br /><br />

        input:invalid {<br />
        &nbsp;&nbsp;border-color: #e74c3c;<br />
        }<br /><br />

        input[type="checkbox"]:checked + .checkbox-custom {<br />
        &nbsp;&nbsp;background-color: #3498db;<br />
        &nbsp;&nbsp;border-color: #3498db;<br />
        }
      </div>
    </div>

    <div class="container">
      <h2>Structural Pseudo-classes</h2>

      <div class="instructions">
        <p>
          These pseudo-classes select elements based on their position in the
          document tree.
        </p>
      </div>

      <div class="demo-section">
        <h3>List Example</h3>
        <ul class="demo-list">
          <li>First item (first-child)</li>
          <li>Second item</li>
          <li>Third item (odd)</li>
          <li>Fourth item (even)</li>
          <li>Fifth item (last-child)</li>
        </ul>

        <h3>Table Example</h3>
        <table class="demo-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>28</td>
              <td>USA</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>32</td>
              <td>Canada</td>
            </tr>
            <tr>
              <td>Bob Johnson</td>
              <td>45</td>
              <td>UK</td>
            </tr>
            <tr>
              <td>Sarah Williams</td>
              <td>29</td>
              <td>Australia</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="code-example">
        li:first-child {<br />
        &nbsp;&nbsp;font-weight: bold;<br />
        &nbsp;&nbsp;background-color: #f8f9fa;<br />
        }<br /><br />

        li:last-child {<br />
        &nbsp;&nbsp;border-bottom: none;<br />
        }<br /><br />

        li:nth-child(even) {<br />
        &nbsp;&nbsp;background-color: #f5f7fa;<br />
        }<br /><br />

        tr:nth-child(odd) {<br />
        &nbsp;&nbsp;background-color: #f9f9f9;<br />
        }<br /><br />

        tr:hover {<br />
        &nbsp;&nbsp;background-color: #e8f4fc;<br />
        }
      </div>
    </div>
  </body>
</html>
```

## Assignment: Create an Interactive Dashboard with Pseudo-classes

**Objective:** Create an interactive dashboard that utilizes various CSS pseudo-classes for enhanced user experience.

**Requirements:**

1. Create a dashboard with:

   - A navigation menu with hover effects
   - A data table with alternating row colors and hover states
   - Interactive form elements with proper focus and validation states
   - Notification indicators with different states
   - A task list with completed items styled differently

2. Implement the following pseudo-classes:

   - :hover, :active, and :focus for interactive elements
   - :nth-child for alternating styles in lists and tables
   - :checked for toggled states
   - :valid and :invalid for form validation
   - :disabled for inactive elements

3. Ensure the dashboard is visually appealing and responsive

**Challenge (Optional):**

- Add a dark/light mode toggle using the :checked pseudo-class
- Implement a tabbed interface using :target pseudo-class
- Create a custom select dropdown with proper focus states
- Add keyboard navigation support with :focus-visible

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Interactive Dashboard</title>
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
        display: grid;
        grid-template-columns: 250px 1fr;
        grid-template-rows: 60px 1fr;
        grid-template-areas:
          "sidebar header"
          "sidebar main";
        min-height: 100vh;
      }

      /* Header */
      header {
        grid-area: header;
        background-color: white;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .search-bar {
        flex: 1;
        max-width: 400px;
        margin: 0 20px;
      }

      .search-input {
        width: 100%;
        padding: 8px 15px;
        border: 2px solid #ddd;
        border-radius: 20px;
        transition: all 0.3s ease;
      }

      .search-input:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
        outline: none;
      }

      .user-menu {
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .notification {
        position: relative;
        cursor: pointer;
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
        font-size: 12px;
      }

      .notification:hover::after {
        transform: scale(1.1);
      }

      /* Sidebar */
      .sidebar {
        grid-area: sidebar;
        background-color: #2c3e50;
        color: white;
        padding: 20px 0;
      }

      .logo {
        padding: 0 20px 20px;
        font-size: 1.5rem;
        font-weight: bold;
        border-bottom: 1px solid #34495e;
        margin-bottom: 20px;
      }

      .nav-menu {
        list-style: none;
      }

      .nav-item {
        margin-bottom: 5px;
      }

      .nav-link {
        display: block;
        color: #ecf0f1;
        text-decoration: none;
        padding: 12px 20px;
        transition: all 0.3s ease;
        border-left: 3px solid transparent;
      }

      .nav-link:hover {
        background-color: #34495e;
        border-left-color: #3498db;
      }

      .nav-link:active {
        background-color: #2c3e50;
      }

      .nav-link.active {
        background-color: #34495e;
        border-left-color: #3498db;
      }

      /* Main Content */
      main {
        grid-area: main;
        padding: 20px;
        overflow-y: auto;
      }

      .dashboard-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-bottom: 30px;
      }

      .card {
        background-color: white;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        padding: 20px;
      }

      .card-header {
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ecf0f1;
      }

      /* Stats */
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }

      .stat-item {
        text-align: center;
        padding: 15px;
        border-radius: 6px;
        background-color: #f8f9fa;
        transition: all 0.3s ease;
      }

      .stat-item:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
      }

      .stat-number {
        font-size: 1.8rem;
        font-weight: bold;
        color: #3498db;
      }

      /* Table */
      .data-table {
        width: 100%;
        border-collapse: collapse;
      }

      .data-table th,
      .data-table td {
        padding: 12px;
        text-align: left;
        border-bottom: 1px solid #ecf0f1;
      }

      .data-table th {
        background-color: #f8f9fa;
        font-weight: 600;
      }

      .data-table tr:nth-child(even) {
        background-color: #fafbfc;
      }

      .data-table tr:hover {
        background-color: #e8f4fc;
      }

      .status {
        display: inline-block;
        padding: 5px 10px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
      }

      .status-active {
        background-color: #e8f6f3;
        color: #2ecc71;
      }

      .status-pending {
        background-color: #fef9e7;
        color: #f39c12;
      }

      /* Task List */
      .task-list {
        list-style: none;
      }

      .task-item {
        padding: 12px;
        border-bottom: 1px solid #ecf0f1;
        display: flex;
        align-items: center;
      }

      .task-item:last-child {
        border-bottom: none;
      }

      .task-checkbox {
        margin-right: 12px;
      }

      .task-text {
        flex: 1;
      }

      .task-item:has(.task-checkbox:checked) .task-text {
        text-decoration: line-through;
        color: #95a5a6;
      }

      /* Form Elements */
      .form-group {
        margin-bottom: 15px;
      }

      .form-label {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
      }

      .form-control {
        width: 100%;
        padding: 10px;
        border: 2px solid #ddd;
        border-radius: 4px;
        transition: all 0.3s ease;
      }

      .form-control:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
        outline: none;
      }

      .form-control:invalid {
        border-color: #e74c3c;
      }

      .form-control:valid {
        border-color: #2ecc71;
      }

      .btn {
        display: inline-block;
        background-color: #3498db;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .btn:hover {
        background-color: #2980b9;
        transform: translateY(-2px);
      }

      .btn:active {
        transform: translateY(0);
      }

      .btn:disabled {
        background-color: #bdc3c7;
        cursor: not-allowed;
        transform: none;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        body {
          grid-template-columns: 1fr;
          grid-template-areas:
            "header"
            "main";
        }

        .sidebar {
          display: none;
        }

        .dashboard-grid {
          grid-template-columns: 1fr;
        }
      }
    </style>
  </head>
  <body>
    <aside class="sidebar">
      <div class="logo">Dashboard</div>
      <ul class="nav-menu">
        <li class="nav-item">
          <a href="#" class="nav-link active">Overview</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Analytics</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Customers</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Orders</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Products</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Settings</a>
        </li>
      </ul>
    </aside>

    <header>
      <div class="search-bar">
        <input type="text" class="search-input" placeholder="Search..." />
      </div>
      <div class="user-menu">
        <div class="notification">🔔</div>
        <div class="user-avatar">
          <img
            src="https://via.placeholder.com/40"
            alt="User"
            style="width: 40px; height: 40px; border-radius: 50%;"
          />
        </div>
      </div>
    </header>

    <main>
      <h1>Dashboard Overview</h1>

      <div class="dashboard-grid">
        <div class="card">
          <h2 class="card-header">Statistics</h2>
          <div class="stats-grid">
            <div class="stat-item">
              <div class="stat-number">542</div>
              <div class="stat-label">Total Users</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">1,248</div>
              <div class="stat-label">Total Orders</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">$24,890</div>
              <div class="stat-label">Total Revenue</div>
            </div>
            <div class="stat-item">
              <div class="stat-number">96%</div>
              <div class="stat-label">Satisfaction</div>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 class="card-header">Recent Activity</h2>
          <ul class="task-list">
            <li class="task-item">
              <input type="checkbox" class="task-checkbox" />
              <span class="task-text">Review quarterly reports</span>
            </li>
            <li class="task-item">
              <input type="checkbox" class="task-checkbox" checked />
              <span class="task-text">Update product catalog</span>
            </li>
            <li class="task-item">
              <input type="checkbox" class="task-checkbox" />
              <span class="task-text">Contact new clients</span>
            </li>
            <li class="task-item">
              <input type="checkbox" class="task-checkbox" />
              <span class="task-text">Prepare presentation</span>
            </li>
            <li class="task-item">
              <input type="checkbox" class="task-checkbox" checked />
              <span class="task-text">Schedule team meeting</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h2 class="card-header">Recent Orders</h2>
        <table class="data-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#ORD-7582</td>
              <td>John Smith</td>
              <td>Oct 15, 2023</td>
              <td>$245.99</td>
              <td><span class="status status-active">Completed</span></td>
            </tr>
            <tr>
              <td>#ORD-7581</td>
              <td>Sarah Johnson</td>
              <td>Oct 14, 2023</td>
              <td>$145.50</td>
              <td><span class="status status-active">Completed</span></td>
            </tr>
            <tr>
              <td>#ORD-7580</td>
              <td>Michael Brown</td>
              <td>Oct 14, 2023</td>
              <td>$89.99</td>
              <td><span class="status status-pending">Pending</span></td>
            </tr>
            <tr>
              <td>#ORD-7579</td>
              <td>Emily Davis</td>
              <td>Oct 13, 2023</td>
              <td>$312.00</td>
              <td><span class="status status-active">Completed</span></td>
            </tr>
            <tr>
              <td>#ORD-7578</td>
              <td>Robert Wilson</td>
              <td>Oct 12, 2023</td>
              <td>$56.75</td>
              <td><span class="status status-pending">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="card">
        <h2 class="card-header">Add New Product</h2>
        <form>
          <div class="form-group">
            <label class="form-label">Product Name</label>
            <input type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label class="form-label">Description</label>
            <textarea class="form-control" rows="3" required></textarea>
          </div>
          <div class="form-group">
            <label class="form-label">Price</label>
            <input
              type="number"
              class="form-control"
              min="0"
              step="0.01"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label">Category</label>
            <select class="form-control" required>
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home & Garden</option>
              <option value="sports">Sports & Outdoors</option>
            </select>
          </div>
          <button type="submit" class="btn">Add Product</button>
          <button
            type="reset"
            class="btn"
            style="background-color: #95a5a6; margin-left: 10px;"
          >
            Cancel
          </button>
        </form>
      </div>
    </main>
  </body>
</html>
```

This assignment will help you practice using CSS pseudo-classes to create an interactive dashboard with enhanced user experience. You'll work with various pseudo-classes to style elements based on user interaction, element states, and structural positions. Pay attention to how pseudo-classes can improve usability and provide visual feedback to users.
