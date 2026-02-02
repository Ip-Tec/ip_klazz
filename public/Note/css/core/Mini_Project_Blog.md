# Day 29: Mini Project – Responsive Blog Layout

## Introduction

Today, we'll apply everything we've learned to create a fully responsive blog layout. This project will combine responsive design principles, CSS Grid and Flexbox, typography, and component styling to create a professional-looking blog that works on all device sizes.

## Project Overview

We'll create a blog layout with the following components:

- Header with logo and navigation
- Main content area with blog posts
- Sidebar with about section and categories
- Newsletter signup form
- Footer with social links and copyright

## Requirements

### Design:

- Clean, readable typography
- Consistent color scheme
- Responsive layout that works on mobile, tablet, and desktop
- Visual hierarchy that guides the reader through content

### Technical:

- Semantic HTML5 structure
- CSS Grid and/or Flexbox for layout
- Responsive navigation menu
- Responsive images
- CSS variables for consistent theming
- No JavaScript required

## Class Work

Let's build the responsive blog layout step by step:

### 1. HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Blog Layout</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
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
          <h1>Blog Title</h1>
        </div>
        <nav class="nav">
          <button class="nav-toggle" aria-label="Toggle navigation">
            <span class="hamburger"></span>
          </button>
          <ul class="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Articles</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main content -->
    <main id="main" class="main">
      <div class="container">
        <!-- Featured post -->
        <article class="featured-post">
          <img
            src="https://source.unsplash.com/random/1200x600?technology"
            alt="Featured post image"
          />
          <div class="post-content">
            <span class="category">Technology</span>
            <h2>Featured Blog Post Title</h2>
            <p class="post-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" class="read-more">Read More</a>
          </div>
        </article>

        <!-- Blog posts grid -->
        <div class="blog-grid">
          <article class="post-card">
            <img
              src="https://source.unsplash.com/random/600x400?design"
              alt="Post image"
            />
            <div class="post-content">
              <span class="category">Design</span>
              <h3>Blog Post Title</h3>
              <p class="post-excerpt">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <a href="#" class="read-more">Read More</a>
            </div>
          </article>

          <!-- More post cards... -->
        </div>

        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="about">
            <h3>About the Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div class="categories">
            <h3>Categories</h3>
            <ul>
              <li><a href="#">Technology</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">Business</a></li>
            </ul>
          </div>

          <div class="newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get the latest posts delivered to your inbox.</p>
            <form>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </aside>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="social-links">
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <p>&copy; 2023 Blog Title. All rights reserved.</p>
      </div>
    </footer>
  </body>
</html>
```

### 2. CSS Implementation

Now let's add the CSS to style our blog:

```css
/* CSS Variables for consistent theming */
:root {
  --primary-color: #4a90e2;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --light-color: #f5f5f5;
  --dark-color: #333;
  --gray-color: #95a5a6;
  --font-main: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  --font-size-base: 1rem;
  --spacing: 1rem;
  --border-radius: 4px;
  --transition: all 0.3s ease;
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
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing);
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

.logo h1 {
  color: var(--primary-color);
  font-size: 1.5rem;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
}

.hamburger {
  width: 25px;
  height: 3px;
  background: var(--dark-color);
  position: relative;
  transition: var(--transition);
}

.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 3px;
  background: var(--dark-color);
  transition: var(--transition);
}

.hamburger::before {
  transform: translateY(-8px);
}

.hamburger::after {
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
}

.nav-menu a:hover {
  color: var(--primary-color);
}

/* Main content */
.main {
  padding: 2rem 0;
}

/* Featured post */
.featured-post {
  margin-bottom: 3rem;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.featured-post img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.post-content {
  padding: 1.5rem;
}

.category {
  display: inline-block;
  background: var(--primary-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  margin-bottom: 1rem;
}

.featured-post h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--secondary-color);
}

.post-excerpt {
  margin-bottom: 1rem;
  color: var(--gray-color);
}

.read-more {
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
}

.read-more:hover {
  color: var(--secondary-color);
}

/* Blog grid */
.blog-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.post-card {
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: var(--transition);
}

.post-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.post-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.post-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
}

/* Sidebar */
.sidebar > div {
  background: var(--light-color);
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
}

.sidebar h3 {
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.categories ul {
  list-style: none;
}

.categories li {
  margin-bottom: 0.5rem;
}

.categories a {
  color: var(--dark-color);
  text-decoration: none;
  transition: var(--transition);
}

.categories a:hover {
  color: var(--primary-color);
}

.newsletter form {
  display: flex;
  flex-direction: column;
}

.newsletter input {
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
}

.newsletter button {
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition);
}

.newsletter button:hover {
  background: var(--secondary-color);
}

/* Footer */
.footer {
  background: var(--secondary-color);
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.social-links {
  margin-bottom: 1rem;
}

.social-links a {
  color: white;
  font-size: 1.5rem;
  margin: 0 0.5rem;
  transition: var(--transition);
}

.social-links a:hover {
  color: var(--primary-color);
}

/* Responsive styles */
@media (max-width: 768px) {
  .nav-toggle {
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
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-menu li {
    margin: 1rem 0;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .blog-grid {
    order: 2;
  }

  .sidebar {
    order: 1;
    margin-bottom: 2rem;
  }
}

@media (min-width: 769px) {
  .main .container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .featured-post {
    grid-column: 1 / -1;
  }

  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 3. JavaScript for Mobile Navigation

Although we're focusing on CSS, we need a tiny bit of JavaScript to make the mobile navigation work:

```html
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Animate hamburger icon
      this.classList.toggle("active");
    });
  });
</script>
```

## Assignment

Create a complete responsive blog layout with the following requirements:

### Requirements:

1. Implement a mobile-first responsive design
2. Create a responsive navigation that transforms into a hamburger menu on mobile
3. Design a featured post section that highlights the latest article
4. Create a grid layout for blog posts that adjusts based on screen size
5. Add a sidebar with about section, categories, and newsletter signup
6. Style a footer with social links and copyright information
7. Ensure all interactive elements have appropriate hover and focus states
8. Make the blog accessible with proper semantic HTML and ARIA attributes

### Advanced Features (Optional):

1. Add a dark/light mode toggle
2. Implement a search function (appearance only, no functionality)
3. Create a comments section for posts
4. Add a breadcrumb navigation
5. Implement a "related posts" section

## Key Takeaways

1. Responsive design requires planning for multiple screen sizes
2. CSS Grid and Flexbox are powerful tools for creating layouts
3. Mobile-first approach ensures better performance on all devices
4. Semantic HTML improves accessibility and SEO
5. Consistent theming with CSS variables makes maintenance easier

By completing this project, you'll have a solid understanding of how to create responsive layouts that work across all device sizes while maintaining good design principles and accessibility standards.
