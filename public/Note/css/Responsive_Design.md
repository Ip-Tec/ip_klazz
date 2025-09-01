# Day 12: Responsive Design – Media Queries, Breakpoints

## Introduction to Responsive Web Design

Responsive Web Design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window sizes. The core idea is to create flexible layouts that adapt to different screen dimensions using CSS media queries.

## Understanding Media Queries

Media queries are CSS techniques that apply different styles based on device characteristics, most commonly the viewport width. They are the foundation of responsive design.

### Basic Media Query Syntax

```css
@media media-type and (media-feature) {
  /* CSS rules */
}
```

### Common Media Query Patterns

```css
/* Mobile-first approach (min-width) */
@media (min-width: 576px) {
  /* Styles for devices 576px and wider */
}

/* Desktop-first approach (max-width) */
@media (max-width: 768px) {
  /* Styles for devices 768px and narrower */
}

/* Range of screen sizes */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Styles for tablets */
}

/* Device orientation */
@media (orientation: landscape) {
  /* Styles for landscape orientation */
}
```

## Common Breakpoints

While there are no official standard breakpoints, these are commonly used based on popular device sizes:

```css
/* Small devices (phones, 576px and up) */
@media (min-width: 576px) { /* ... */ }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { /* ... */ }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { /* ... */ }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { /* ... */ }
```

## Mobile-First vs Desktop-First Approaches

### Mobile-First Approach
- Start with styles for mobile devices
- Use 'min-width' media queries to add styles for larger screens
- Generally considered best practice

```css
/* Base styles (mobile) */
.container {
  padding: 10px;
}

/* Tablet styles */
@media (min-width: 768px) {
  .container {
    padding: 20px;
  }
}

/* Desktop styles */
@media (min-width: 992px) {
  .container {
    padding: 30px;
  }
}
```

### Desktop-First Approach
- Start with styles for desktop
- Use 'max-width' media queries to adjust for smaller screens

```css
/* Base styles (desktop) */
.container {
  padding: 30px;
}

/* Tablet styles */
@media (max-width: 991px) {
  .container {
    padding: 20px;
  }
}

/* Mobile styles */
@media (max-width: 767px) {
  .container {
    padding: 10px;
  }
}
```

## Classwork: Media Query Practice

Let's create an interactive example to practice media queries:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Design Practice</title>
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
            padding: 20px;
        }
        
        .container {
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
        
        /* Navigation */
        .nav {
            background-color: #2c3e50;
            margin-bottom: 20px;
        }
        
        .nav-list {
            display: flex;
            list-style: none;
            justify-content: center;
        }
        
        .nav-item {
            padding: 15px 20px;
        }
        
        .nav-item a {
            color: white;
            text-decoration: none;
        }
        
        /* Grid System */
        .grid {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -10px;
        }
        
        .col {
            padding: 10px;
            flex: 1 0 100%;
        }
        
        .card {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            height: 100%;
        }
        
        /* Media Queries */
        /* Small devices (576px and up) */
        @media (min-width: 576px) {
            .col {
                flex: 1 0 50%;
            }
            
            body {
                background-color: #e8f4fc;
            }
            
            .current-breakpoint::after {
                content: "Small (576px+)";
                background-color: #3498db;
            }
        }
        
        /* Medium devices (768px and up) */
        @media (min-width: 768px) {
            .col {
                flex: 1 0 33.333333%;
            }
            
            body {
                background-color: #e8f8f4;
            }
            
            .current-breakpoint::after {
                content: "Medium (768px+)";
                background-color: #2ecc71;
            }
        }
        
        /* Large devices (992px and up) */
        @media (min-width: 992px) {
            .col {
                flex: 1 0 25%;
            }
            
            body {
                background-color: #fef9e7;
            }
            
            .nav-list {
                justify-content: flex-end;
            }
            
            .current-breakpoint::after {
                content: "Large (992px+)";
                background-color: #f39c12;
            }
        }
        
        /* Extra large devices (1200px and up) */
        @media (min-width: 1200px) {
            .col {
                flex: 1 0 20%;
            }
            
            body {
                background-color: #fae5e5;
            }
            
            .current-breakpoint::after {
                content: "Extra Large (1200px+)";
                background-color: #e74c3c;
            }
        }
        
        /* Demo Info */
        .demo-info {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .current-breakpoint {
            padding: 10px;
            color: white;
            border-radius: 4px;
            margin-top: 10px;
            display: inline-block;
        }
        
        .viewport-size {
            margin-top: 20px;
            padding: 10px;
            background-color: #ecf0f1;
            border-radius: 4px;
        }
        
        .instructions {
            background-color: #fff8e1;
            padding: 15px;
            border-left: 4px solid #f39c12;
            margin: 15px 0;
            border-radius: 0 5px 5px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Responsive Design with Media Queries</h1>
        
        <div class="demo-info">
            <h2>Current Breakpoint: <span class="current-breakpoint"></span></h2>
            <div class="viewport-size">
                Viewport Width: <span id="viewportWidth"></span>px
            </div>
        </div>
        
        <div class="instructions">
            <p>Resize your browser window to see how the layout changes at different breakpoints.</p>
            <p>This example uses a <strong>mobile-first</strong> approach with <code>min-width</code> media queries.</p>
        </div>
        
        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">About</a></li>
                <li class="nav-item"><a href="#">Services</a></li>
                <li class="nav-item"><a href="#">Portfolio</a></li>
                <li class="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>
        
        <div class="grid">
            <div class="col">
                <div class="card">
                    <h3>Card 1</h3>
                    <p>This is a sample card. The layout changes based on screen size.</p>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <h3>Card 2</h3>
                    <p>This is a sample card. The layout changes based on screen size.</p>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <h3>Card 3</h3>
                    <p>This is a sample card. The layout changes based on screen size.</p>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <h3>Card 4</h3>
                    <p>This is a sample card. The layout changes based on screen size.</p>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <h3>Card 5</h3>
                    <p>This is a sample card. The layout changes based on screen size.</p>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Update viewport width display
        function updateViewportSize() {
            document.getElementById('viewportWidth').textContent = window.innerWidth;
        }
        
        // Initial update
        updateViewportSize();
        
        // Update on resize
        window.addEventListener('resize', updateViewportSize);
    </script>
</body>
</html>
```

## Assignment: Responsive Portfolio Website

**Objective:** Create a responsive portfolio website that adapts to different screen sizes using media queries.

**Requirements:**
1. Create a portfolio website with:
   - A responsive navigation menu
   - A hero section with your introduction
   - A projects section with a responsive grid
   - A skills section
   - A contact form
   - A footer

2. Implement at least three different breakpoints:
   - Mobile (default styles)
   - Tablet (768px and up)
   - Desktop (992px and up)

3. Use a mobile-first approach with 'min-width' media queries

4. Ensure the layout is responsive and looks good on all screen sizes

**Challenge (Optional):**
- Add a dark/light mode toggle
- Implement a responsive image gallery
- Add smooth transitions between states
- Make the navigation menu collapse into a hamburger menu on mobile

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Portfolio</title>
    <style>
        /* CSS Variables for consistent theming */
        :root {
            --primary-color: #3498db;
            --secondary-color: #2c3e50;
            --accent-color: #e74c3c;
            --text-color: #333;
            --light-bg: #f5f7fa;
            --dark-bg: #2c3e50;
            --light-text: #fff;
            --spacing: 1rem;
            --border-radius: 8px;
            --box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
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
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 var(--spacing);
        }
        
        /* Header & Navigation */
        header {
            background-color: var(--dark-bg);
            color: var(--light-text);
            padding: var(--spacing) 0;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: var(--box-shadow);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .nav-menu {
            display: flex;
            list-style: none;
        }
        
        .nav-item {
            margin-left: var(--spacing);
        }
        
        .nav-item a {
            color: var(--light-text);
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .nav-item a:hover {
            color: var(--primary-color);
        }
        
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            color: var(--light-text);
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        /* Hero Section */
        .hero {
            padding: 8rem 0 4rem;
            text-align: center;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: var(--light-text);
        }
        
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: var(--spacing);
        }
        
        .hero p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .btn {
            display: inline-block;
            background-color: var(--accent-color);
            color: var(--light-text);
            padding: 0.75rem 1.5rem;
            border-radius: var(--border-radius);
            text-decoration: none;
            margin-top: var(--spacing);
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #c0392b;
        }
        
        /* Sections */
        section {
            padding: 4rem 0;
        }
        
        section h2 {
            text-align: center;
            margin-bottom: 2rem;
            color: var(--secondary-color);
        }
        
        /* Projects Grid */
        .projects-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: var(--spacing);
        }
        
        .project-card {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
        }
        
        .project-img {
            width: 100%;
            height: 200px;
            background-color: #ddd;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .project-content {
            padding: var(--spacing);
        }
        
        /* Skills */
        .skills-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing);
        }
        
        .skill {
            background-color: white;
            padding: var(--spacing);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }
        
        .skill-bar {
            height: 10px;
            background-color: #eee;
            border-radius: 5px;
            margin-top: 0.5rem;
            overflow: hidden;
        }
        
        .skill-level {
            height: 100%;
            background-color: var(--primary-color);
            border-radius: 5px;
        }
        
        /* Contact Form */
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: var(--spacing);
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
        }
        
        .form-group {
            margin-bottom: var(--spacing);
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: var(--border-radius);
        }
        
        .form-group textarea {
            min-height: 150px;
        }
        
        /* Footer */
        footer {
            background-color: var(--dark-bg);
            color: var(--light-text);
            padding: var(--spacing) 0;
            text-align: center;
        }
        
        /* Media Queries */
        /* Tablet Styles (768px and up) */
        @media (min-width: 768px) {
            :root {
                --spacing: 1.5rem;
            }
            
            .projects-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .skills-container {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .hero h1 {
                font-size: 3rem;
            }
        }
        
        /* Desktop Styles (992px and up) */
        @media (min-width: 992px) {
            .projects-grid {
                grid-template-columns: repeat(3, 1fr);
            }
            
            .skills-container {
                grid-template-columns: repeat(4, 1fr);
            }
            
            .hero {
                padding: 10rem 0 6rem;
            }
            
            .hero h1 {
                font-size: 3.5rem;
            }
        }
        
        /* Mobile Navigation */
        @media (max-width: 767px) {
            .menu-toggle {
                display: block;
            }
            
            .nav-menu {
                position: fixed;
                top: 70px;
                left: -100%;
                background-color: var(--dark-bg);
                width: 100%;
                flex-direction: column;
                transition: left 0.3s;
                padding: var(--spacing) 0;
            }
            
            .nav-menu.active {
                left: 0;
            }
            
            .nav-item {
                margin: 0;
                text-align: center;
                padding: 0.75rem 0;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container nav-container">
            <div class="logo">Portfolio</div>
            <button class="menu-toggle" id="menuToggle">☰</button>
            <ul class="nav-menu" id="navMenu">
                <li class="nav-item"><a href="#home">Home</a></li>
                <li class="nav-item"><a href="#projects">Projects</a></li>
                <li class="nav-item"><a href="#skills">Skills</a></li>
                <li class="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </header>

    <section class="hero" id="home">
        <div class="container">
            <h1>John Doe</h1>
            <p>Frontend Developer & UI/UX Designer</p>
            <a href="#projects" class="btn">View My Work</a>
        </div>
    </section>

    <section id="projects">
        <div class="container">
            <h2>My Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-img">Project Image</div>
                    <div class="project-content">
                        <h3>Project 1</h3>
                        <p>Description of project 1. This was built with HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-img">Project Image</div>
                    <div class="project-content">
                        <h3>Project 2</h3>
                        <p>Description of project 2. This was built with React and Node.js.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-img">Project Image</div>
                    <div class="project-content">
                        <h3>Project 3</h3>
                        <p>Description of project 3. This was built with Vue and Firebase.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-img">Project Image</div>
                    <div class="project-content">
                        <h3>Project 4</h3>
                        <p>Description of project 4. This was built with Angular and MongoDB.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-img">Project Image</div>
                    <div class="project-content">
                        <h3>Project 5</h3>
                        <p>Description of project 5. This was built with Svelte and GraphQL.</p>
                    </div>
                </div>
                <div class="project-card">
                    <div class="project-img">Project Image</div>
                    <div class="project-content">
                        <h3>Project 6</h3>
                        <p>Description of project 6. This was built with Next.js and TypeScript.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="skills">
        <div class="container">
            <h2>My Skills</h2>
            <div class="skills-container">
                <div class="skill">
                    <h3>HTML/CSS</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 90%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>JavaScript</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 85%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>React</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 80%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>UI/UX Design</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 75%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>Node.js</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 70%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>Responsive Design</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 95%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>Git</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 80%;"></div>
                    </div>
                </div>
                <div class="skill">
                    <h3>Python</h3>
                    <div class="skill-bar">
                        <div class="skill-level" style="width: 65%;"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2>Contact Me</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" required></textarea>
                </div>
                <button type="submit" class="btn">Send Message</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="container">
            <p>&copy; 2023 John Doe. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-item a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    </script>
</body>
</html>
```

This assignment will help you practice creating a fully responsive website using media queries and breakpoints. You'll implement a mobile-first approach, create a responsive navigation system, and ensure your layout adapts to different screen sizes. Pay attention to how the content reflows and how the user experience changes across different devices.