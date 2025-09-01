# Day 30: Mini Project – Styled Portfolio Homepage

## Introduction

Today, we'll create a professional portfolio homepage that showcases your skills and projects. A portfolio is essential for any web developer or designer to demonstrate their abilities to potential employers or clients. We'll focus on creating a responsive, visually appealing layout that highlights your work effectively.

## Project Overview

We'll create a portfolio homepage with these key sections:
- Header with navigation
- Hero section with introduction
- Skills/technologies section
- Projects showcase
- About section
- Contact information
- Footer with social links

## Requirements

### Design:
- Clean, professional appearance
- Consistent color scheme and typography
- Responsive layout that works on all devices
- Visual hierarchy that guides the visitor's eye
- Adequate whitespace for readability

### Technical:
- Semantic HTML5 structure
- CSS Grid and/or Flexbox for layout
- Responsive navigation
- Hover effects and transitions
- CSS variables for consistent theming
- No JavaScript required

## Class Work

Let's build the portfolio homepage step by step:

### 1. HTML Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Name - Portfolio</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* CSS will go here */
    </style>
</head>
<body>
    <!-- Skip link for accessibility -->
    <a href="#main" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="#">Your Name</a>
            </div>
            <nav class="nav">
                <input type="checkbox" id="nav-toggle" class="nav-toggle">
                <label for="nav-toggle" class="nav-toggle-label">
                    <span></span>
                </label>
                <ul class="nav-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    
    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Hi, I'm <span class="highlight">Your Name</span></h1>
                <h2>Web Developer & Designer</h2>
                <p>I create beautiful, functional websites that deliver exceptional user experiences.</p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-secondary">Contact Me</a>
                </div>
            </div>
            <div class="hero-image">
                <div class="image-placeholder">
                    <i class="fas fa-user"></i>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Skills Section -->
    <section id="skills" class="skills">
        <div class="container">
            <h2 class="section-title">Skills & Technologies</h2>
            <div class="skills-grid">
                <div class="skill-item">
                    <i class="fab fa-html5"></i>
                    <h3>HTML5</h3>
                    <p>Semantic markup, accessibility, and modern HTML features.</p>
                </div>
                <div class="skill-item">
                    <i class="fab fa-css3-alt"></i>
                    <h3>CSS3</h3>
                    <p>Responsive design, Flexbox, Grid, animations, and preprocessors.</p>
                </div>
                <div class="skill-item">
                    <i class="fab fa-js"></i>
                    <h3>JavaScript</h3>
                    <p>ES6+, DOM manipulation, and interactive web features.</p>
                </div>
                <div class="skill-item">
                    <i class="fas fa-mobile-alt"></i>
                    <h3>Responsive Design</h3>
                    <p>Creating websites that work perfectly on all device sizes.</p>
                </div>
                <div class="skill-item">
                    <i class="fas fa-paint-brush"></i>
                    <h3>UI/UX Design</h3>
                    <p>User-centered design principles and creating intuitive interfaces.</p>
                </div>
                <div class="skill-item">
                    <i class="fab fa-git"></i>
                    <h3>Version Control</h3>
                    <p>Git workflow for collaborative and organized development.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Projects Section -->
    <section id="projects" class="projects">
        <div class="container">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                <article class="project-card">
                    <div class="project-image">
                        <div class="image-placeholder">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>E-Commerce Website</h3>
                        <p>A fully responsive e-commerce platform with product filtering and cart functionality.</p>
                        <div class="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">View Project</a>
                            <a href="#" class="project-link">Source Code</a>
                        </div>
                    </div>
                </article>
                
                <article class="project-card">
                    <div class="project-image">
                        <div class="image-placeholder">
                            <i class="fas fa-blog"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Blog Platform</h3>
                        <p>A clean, modern blog layout with category filtering and search functionality.</p>
                        <div class="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">View Project</a>
                            <a href="#" class="project-link">Source Code</a>
                        </div>
                    </div>
                </article>
                
                <article class="project-card">
                    <div class="project-image">
                        <div class="image-placeholder">
                            <i class="fas fa-tasks"></i>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3>Task Management App</h3>
                        <p>A drag-and-drop task manager with local storage persistence.</p>
                        <div class="project-tech">
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">View Project</a>
                            <a href="#" class="project-link">Source Code</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
    
    <!-- About Section -->
    <section id="about" class="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            <div class="about-content">
                <div class="about-text">
                    <p>Hello! I'm a passionate web developer with a focus on creating user-friendly, accessible websites. I enjoy turning complex problems into simple, beautiful designs.</p>
                    <p>When I'm not coding, you can find me hiking, reading, or experimenting with new technologies. I believe in continuous learning and always strive to expand my skill set.</p>
                    <p>My goal is to build products that provide pixel-perfect, performant experiences while writing clean, maintainable code.</p>
                    <a href="#" class="btn btn-primary">Download Resume</a>
                </div>
                <div class="about-image">
                    <div class="image-placeholder">
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Contact Section -->
    <section id="contact" class="contact">
        <div class="container">
            <h2 class="section-title">Get In Touch</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <p>I'm currently available for freelance work. If you have a project that you want to get started or think you need my help with something, then get in touch.</p>
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>your.email@example.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+1 (123) 456-7890</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>Your Location</span>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-github"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-codepen"></i></a>
                    </div>
                </div>
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
                        <textarea id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Send Message</button>
                </form>
            </div>
        </div>
    </section>
    
    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <p>&copy; 2023 Your Name. All rights reserved.</p>
            <p>Designed and built with <i class="fas fa-heart"></i> by You</p>
        </div>
    </footer>
</body>
</html>
```

### 2. CSS Implementation
Now let's add the CSS to style our portfolio:

```css
/* CSS Variables for consistent theming */
:root {
    --primary-color: #4a90e2;
    --secondary-color: #2c3e50;
    --accent-color: #e74c3c;
    --light-color: #f5f5f5;
    --dark-color: #333;
    --gray-color: #95a5a6;
    --font-main: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    --font-size-base: 1rem;
    --spacing: 1rem;
    --border-radius: 4px;
    --transition: all 0.3s ease;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --max-width: 1200px;
}

/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: var(--font-main);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--dark-color);
    background-color: #fff;
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing);
}

section {
    padding: 5rem 0;
}

.section-title {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--secondary-color);
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary-color);
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--secondary-color);
    color: white;
    padding: 8px;
    z-index: 100;
    transition: var(--transition);
}

.skip-link:focus {
    top: 0;
}

/* Header styles */
.header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem var(--spacing);
}

.logo a {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    text-decoration: none;
}

.nav-toggle {
    display: none;
}

.nav-toggle-label {
    display: none;
    flex-direction: column;
    justify-content: center;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.nav-toggle-label span {
    width: 25px;
    height: 3px;
    background: var(--dark-color);
    position: relative;
    transition: var(--transition);
}

.nav-toggle-label span::before,
.nav-toggle-label span::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background: var(--dark-color);
    transition: var(--transition);
}

.nav-toggle-label span::before {
    transform: translateY(-8px);
}

.nav-toggle-label span::after {
    transform: translateY(8px);
}

.nav-menu {
    display: flex;
    list-style: none;
}

.nav-menu li {
    margin-left: 2rem;
}

.nav-menu a {
    text-decoration: none;
    color: var(--dark-color);
    font-weight: 500;
    transition: var(--transition);
    position: relative;
}

.nav-menu a:hover {
    color: var(--primary-color);
}

.nav-menu a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-menu a:hover::after {
    width: 100%;
}

/* Hero section */
.hero {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 80vh;
    display: flex;
    align-items: center;
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
}

.highlight {
    color: var(--primary-color);
}

.hero-content h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: var(--gray-color);
    font-weight: 400;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--dark-color);
}

.hero-buttons {
    display: flex;
    gap: 1rem;
}

.btn {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    border-radius: var(--border-radius);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    border: 2px solid transparent;
}

.btn-primary {
    background: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.btn-secondary {
    background: transparent;
    border-color: var(--primary-color);
    color: var(--primary-color);
}

.btn-secondary:hover {
    background: var(--primary-color);
    color: white;
}

.hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-placeholder {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: var(--light-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5rem;
    color: var(--primary-color);
    box-shadow: var(--shadow);
}

/* Skills section */
.skills {
    background: var(--light-color);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.skill-item {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.skill-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.skill-item i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.skill-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
}

/* Projects section */
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}

.project-card {
    background: white;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.project-image {
    height: 200px;
    background: var(--light-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.project-image .image-placeholder {
    width: 80px;
    height: 80px;
    font-size: 2rem;
}

.project-content {
    padding: 1.5rem;
}

.project-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--secondary-color);
}

.project-content p {
    margin-bottom: 1.5rem;
    color: var(--gray-color);
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.project-tech span {
    background: var(--light-color);
    color: var(--primary-color);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.project-links {
    display: flex;
    gap: 1rem;
}

.project-link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 600;
    transition: var(--transition);
    position: relative;
}

.project-link::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.project-link:hover::after {
    width: 100%;
}

/* About section */
.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: center;
}

.about-text p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

.about-image {
    display: flex;
    justify-content: center;
}

/* Contact section */
.contact {
    background: var(--light-color);
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.contact-info p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.8;
}

.contact-details {
    margin-bottom: 2rem;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.contact-item i {
    width: 30px;
    color: var(--primary-color);
    font-size: 1.2rem;
}

.social-links {
    display: flex;
    gap: 1rem;
}

.social-links a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: var(--primary-color);
    color: white;
    border-radius: 50%;
    text-decoration: none;
    transition: var(--transition);
}

.social-links a:hover {
    transform: translateY(-3px);
    background: var(--secondary-color);
}

.contact-form {
    background: white;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--secondary-color);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: var(--border-radius);
    font-family: inherit;
    font-size: 1rem;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
}

/* Footer */
.footer {
    background: var(--secondary-color);
    color: white;
    text-align: center;
    padding: 2rem 0;
}

.footer p {
    margin-bottom: 0.5rem;
}

.footer .fa-heart {
    color: var(--accent-color);
}

/* Responsive styles */
@media (max-width: 992px) {
    .hero .container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-content h1 {
        font-size: 2.8rem;
    }
    
    .about-content {
        grid-template-columns: 1fr;
    }
    
    .contact-content {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .nav-toggle-label {
        display: flex;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        background: white;
        width: 100%;
        height: calc(100vh - 70px);
        flex-direction: column;
        transition: var(--transition);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        z-index: 999;
    }
    
    .nav-menu li {
        margin: 1rem 0;
    }
    
    .nav-toggle:checked ~ .nav-menu {
        left: 0;
    }
    
    .nav-toggle:checked ~ .nav-toggle-label span {
        background: transparent;
    }
    
    .nav-toggle:checked ~ .nav-toggle-label span::before {
        transform: rotate(45deg);
    }
    
    .nav-toggle:checked ~ .nav-toggle-label span::after {
        transform: rotate(-45deg);
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .hero-content h1 {
        font-size: 2.2rem;
    }
    
    .hero-content h2 {
        font-size: 1.5rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 100%;
        text-align: center;
        margin-bottom: 1rem;
    }
    
    .image-placeholder {
        width: 200px;
        height: 200px;
    }
}

@media (max-width: 576px) {
    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }
    
    .section-title {
        font-size: 1.8rem;
    }
    
    .hero-content h1 {
        font-size: 1.8rem;
    }
}
```

## Assignment

Create a complete portfolio homepage with the following requirements:

### Requirements:
1. Implement a responsive design with at least three breakpoints
2. Create a navigation system that works on both desktop and mobile
3. Design an eye-catching hero section with a clear value proposition
4. Showcase your skills with icons and descriptions
5. Display at least three projects with images, descriptions, and technologies used
6. Include an about section with your background and interests
7. Add a contact form with validation styling (appearance only)
8. Implement a footer with social links and copyright information
9. Ensure all interactive elements have appropriate hover and focus states
10. Make the portfolio accessible with proper semantic HTML and ARIA attributes

### Advanced Features (Optional):
1. Add a dark/light mode toggle
2. Implement smooth scrolling for navigation links
3. Add animation to elements as they come into view
4. Create a skills progress bar or rating system
5. Add a blog section or link to your blog

## Key Takeaways

1. A portfolio is your digital business card - make it professional and memorable
2. Responsive design is essential as recruiters may view your portfolio on various devices
3. Showcase your best work prominently with clear descriptions
4. Make it easy for potential employers to contact you
5. Keep the design clean and focused on your work
6. Ensure fast loading times by optimizing images and code

By completing this project, you'll have a professional portfolio that you can customize with your own information and continue to develop as you create new projects. This portfolio will serve as a showcase of your skills to potential employers and clients.