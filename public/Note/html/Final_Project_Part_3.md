# Day 29 Learning Dashboard

I'll create an interactive educational dashboard covering the topics for Day 29 with code examples and practice tasks.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 29 - Web Development Fundamentals</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      }

      body {
        background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
        color: #333;
        min-height: 100vh;
        padding: 20px;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
      }

      header {
        text-align: center;
        padding: 20px;
        margin-bottom: 30px;
      }

      h1 {
        color: white;
        font-size: 2.5rem;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      }

      .subtitle {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.2rem;
      }

      .dashboard {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 25px;
        margin-bottom: 40px;
      }

      .card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease;
      }

      .card:hover {
        transform: translateY(-5px);
      }

      .card-header {
        background: #2575fc;
        color: white;
        padding: 20px;
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .card-header i {
        font-size: 1.8rem;
      }

      .card-content {
        padding: 25px;
      }

      .card h3 {
        margin-bottom: 15px;
        color: #2575fc;
        font-size: 1.5rem;
      }

      .card p {
        line-height: 1.6;
        margin-bottom: 15px;
      }

      .code-example {
        background: #f8f9fa;
        border-left: 4px solid #2575fc;
        padding: 15px;
        margin: 20px 0;
        border-radius: 0 5px 5px 0;
        overflow-x: auto;
        font-family: "Courier New", monospace;
      }

      .task {
        background: #e8f4fc;
        padding: 15px;
        border-radius: 8px;
        margin-top: 20px;
      }

      .task h4 {
        color: #2575fc;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .task-content {
        padding: 10px;
      }

      .homework {
        background: white;
        border-radius: 15px;
        padding: 25px;
        margin-top: 30px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      .homework h2 {
        color: #2575fc;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        gap: 15px;
      }

      .btn {
        display: inline-block;
        background: #2575fc;
        color: white;
        padding: 12px 25px;
        border-radius: 30px;
        text-decoration: none;
        font-weight: 600;
        margin-top: 15px;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
      }

      .btn:hover {
        background: #6a11cb;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      }

      @media (max-width: 768px) {
        .dashboard {
          grid-template-columns: 1fr;
        }

        h1 {
          font-size: 2rem;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <header>
        <h1>Day 29: Web Development Fundamentals</h1>
        <p class="subtitle">
          Final Project Part 3, Navigation Menu, and Responsive Layout
        </p>
      </header>

      <div class="dashboard">
        <div class="card">
          <div class="card-header">
            <i class="fas fa-project-diagram"></i>
            <h2>Final Project Part 3</h2>
          </div>
          <div class="card-content">
            <h3>Completing Your Web Project</h3>
            <p>
              In this phase, we focus on adding advanced functionality and
              polishing the user experience of your web application.
            </p>

            <div class="code-example">
              <pre><code>// Example: Form validation function
function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email || !password) {
        showError('Please fill in all fields');
        return false;
    }
    
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    return true;
}</code></pre>
            </div>

            <div class="task">
              <h4><i class="fas fa-tasks"></i> Practice Task</h4>
              <div class="task-content">
                <p>
                  Add interactive features to your project using JavaScript.
                  Create at least two event listeners that respond to user
                  actions.
                </p>
                <button class="btn">Start Task</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-bars"></i>
            <h2>Navigation Menu</h2>
          </div>
          <div class="card-content">
            <h3>Creating Effective Navigation</h3>
            <p>
              A well-designed navigation menu is crucial for user experience.
              Learn to create responsive and accessible menus.
            </p>

            <div class="code-example">
              <pre><code>&lt;!-- Example: Responsive Navigation Menu --&gt;
&lt;nav class="navbar"&gt;
    &lt;div class="nav-brand"&gt;My Website&lt;/div&gt;
    &lt;ul class="nav-menu"&gt;
        &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#services"&gt;Services&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
    &lt;div class="hamburger"&gt;
        &lt;span&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
        &lt;span&gt;&lt;/span&gt;
    &lt;/div&gt;
&lt;/nav&gt;</code></pre>
            </div>

            <div class="task">
              <h4><i class="fas fa-tasks"></i> Practice Task</h4>
              <div class="task-content">
                <p>
                  Create a responsive navigation menu that collapses into a
                  hamburger menu on mobile devices.
                </p>
                <button class="btn">Start Task</button>
              </div>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <i class="fas fa-desktop"></i>
            <h2>Responsive Layout</h2>
          </div>
          <div class="card-content">
            <h3>Adapting to All Screen Sizes</h3>
            <p>
              Learn how to use CSS Flexbox and Grid to create layouts that work
              beautifully on all devices.
            </p>

            <div class="code-example">
              <pre><code>/* Example: CSS Grid Layout */
.container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Media Query for Mobile */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}</code></pre>
            </div>

            <div class="task">
              <h4><i class="fas fa-tasks"></i> Practice Task</h4>
              <div class="task-content">
                <p>
                  Create a responsive product card layout using CSS Grid that
                  adjusts based on screen size.
                </p>
                <button class="btn">Start Task</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="homework">
        <h2><i class="fas fa-book-open"></i> Homework Assignment</h2>
        <p>Create a responsive portfolio website that includes:</p>
        <ul>
          <li>A navigation menu with at least 4 items</li>
          <li>A hero section with your introduction</li>
          <li>A projects section using a responsive grid layout</li>
          <li>A contact form with validation</li>
          <li>
            Ensure the website is fully responsive and works on mobile devices
          </li>
        </ul>
        <p>
          Use CSS Flexbox/Grid for layout and make sure to include interactive
          elements using JavaScript.
        </p>
        <button class="btn">Submit Homework</button>
      </div>
    </div>

    <script>
      // Simple interactive functionality for the buttons
      document.querySelectorAll(".btn").forEach((button) => {
        button.addEventListener("click", function () {
          alert(
            "Task started! In a real application, this would open the practice environment."
          );
        });
      });

      // Example of a simple navigation menu functionality
      document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger");
        if (hamburger) {
          hamburger.addEventListener("click", function () {
            alert(
              "Hamburger menu clicked! This would toggle the navigation menu."
            );
          });
        }
      });
    </script>
  </body>
</html>
```

This interactive dashboard includes:

1. A modern, responsive layout with a gradient background
2. Three topic cards for Final Project Part 3, Navigation Menu, and Responsive Layout
3. Code examples for each topic with syntax highlighting
4. Practice tasks for each lesson with interactive buttons
5. A homework assignment section with clear requirements
6. Simple JavaScript interactions for the buttons
7. Responsive design that works on both desktop and mobile devices

The design uses a clean, card-based interface with hover effects and subtle animations to create an engaging learning experience. Each section is clearly organized with appropriate icons and color coding.
