# Day 23: Cards and Components – Reusable UI Blocks

## Introduction

Cards and components are fundamental building blocks in modern web design. They allow us to create reusable, modular UI elements that maintain consistency across a website or application. Today, we'll explore how to create effective card components and other reusable UI elements using HTML and CSS.

## What are Cards and Components?

Cards are container components that display content and actions about a single subject. They typically contain various elements like images, text, buttons, and icons in a cohesive block. Components are reusable UI elements that can be used across multiple pages while maintaining consistent styling and behavior.

### Benefits of Using Cards and Components:

- **Consistency**: Maintain uniform design across your application
- **Reusability**: Write once, use multiple times
- **Maintainability**: Update styles in one place to affect all instances
- **Responsiveness**: Easily adapt to different screen sizes
- **Modularity**: Build complex interfaces from simple building blocks

## Basic Card Structure

A typical card component includes:

- Container element
- Image or media area
- Content section (title, description, etc.)
- Action area (buttons, links)
- Optional footer with metadata

### Example: Basic Card HTML Structure

```html
<div class="card">
  <img src="image.jpg" alt="Card image" class="card-img" />
  <div class="card-content">
    <h3 class="card-title">Card Title</h3>
    <p class="card-text">This is a description of the card content.</p>
    <div class="card-actions">
      <button class="btn">Action</button>
      <a href="#" class="card-link">Learn More</a>
    </div>
  </div>
</div>
```

## Card Variations

### 1. Image Cards

Cards with prominent images that serve as the primary visual element.

### 2. Product Cards

Designed for e-commerce, typically featuring product images, prices, and add-to-cart buttons.

### 3. Profile Cards

Display user information, avatars, and social connections.

### 4. News/Article Cards

Feature blog posts or news articles with headlines, excerpts, and publication dates.

### 5. Dashboard Cards

Used in admin panels to display metrics, charts, and quick actions.

## Component Best Practices

1. **Consistent Styling**: Use CSS variables for consistent colors, spacing, and typography
2. **Modular Structure**: Design components to work independently
3. **Accessibility**: Ensure proper contrast, focus states, and semantic HTML
4. **Responsive Design**: Components should adapt to different screen sizes
5. **Performance**: Optimize images and minimize CSS for faster loading

## Example: Product Card Component

```css
:root {
  --primary-color: #4a90e2;
  --text-color: #333;
  --background-color: #fff;
  --border-radius: 8px;
  --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  --transition: all 0.3s ease;
}

.product-card {
  background: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  transition: var(--transition);
  max-width: 300px;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.product-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-content {
  padding: 20px;
}

.product-title {
  font-size: 18px;
  margin: 0 0 10px;
  color: var(--text-color);
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0 0 15px;
}

.product-actions {
  display: flex;
  gap: 10px;
}
```

## Class Work

Create a reusable card component that can display blog posts. The card should include:

### Requirements:

- Image area with consistent aspect ratio
- Title with proper heading semantics
- Excerpt text that truncates after 3 lines
- Publication date and author information
- Read more link
- Hover effects for interactivity
- Consistent spacing and typography

### Steps:

1. Create the HTML structure with semantic elements
2. Style the card with CSS using variables for consistency
3. Implement responsive design for different screen sizes
4. Add subtle animations or transitions for hover states
5. Ensure accessibility with proper contrast and focus states

### Evaluation Criteria:

- Code organization and readability
- Visual consistency and design
- Responsive behavior
- Accessibility features
- Proper use of semantic HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Reusable Blog Post Card Component</title>
    <style>
      /* --- CSS Variables for Consistency --- */
      :root {
        --card-bg: #ffffff;
        --card-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        --card-shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.2);
        --card-border-radius: 8px;
        --primary-text-color: #2c3e50;
        --secondary-text-color: #7f8c8d;
        --accent-color: #3498db;
        --font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        --transition-speed: 0.3s;
      }

      body {
        font-family: var(--font-family);
        background-color: #f4f7f9;
        color: var(--primary-text-color);
        padding: 2rem;
      }

      /* --- Card Container for Layout --- */
      .card-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      /* --- Reusable Card Component --- */
      .blog-card {
        background-color: var(--card-bg);
        border-radius: var(--card-border-radius);
        box-shadow: var(--card-shadow);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        transition:
          transform var(--transition-speed) ease,
          box-shadow var(--transition-speed) ease;
      }

      /* --- Hover & Focus States --- */
      .blog-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--card-shadow-hover);
      }

      .blog-card:focus-within {
        box-shadow: var(--card-shadow-hover);
        transform: translateY(-5px);
      }

      /* --- Card Image Area --- */
      .card-image-container {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
      }

      .card-image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-speed) ease;
      }

      .blog-card:hover .card-image-container img {
        transform: scale(1.05);
      }

      /* --- Card Content --- */
      .card-content {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        flex-grow: 1; /* Allows footer to stick to the bottom */
      }

      .card-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 0.5rem 0;
      }

      .card-title a {
        color: var(--primary-text-color);
        text-decoration: none;
      }

      .card-title a::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      .card-title a:hover {
        color: var(--accent-color);
      }

      .card-meta {
        font-size: 0.875rem;
        color: var(--secondary-text-color);
        margin-bottom: 1rem;
      }

      .card-meta time {
        margin-right: 0.5rem;
      }

      /* --- Excerpt Truncation --- */
      .card-excerpt {
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
        flex-grow: 1; /* Pushes footer down */

        /* Truncate after 3 lines */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* --- Card Footer / Read More Link --- */
      .card-footer {
        margin-top: auto; /* Pushes itself to the bottom */
      }

      .read-more-link {
        font-weight: 600;
        color: var(--accent-color);
        text-decoration: none;
        position: relative; /* For focus-within on the card */
        z-index: 1;
      }

      .read-more-link:focus-visible {
        outline: 2px solid var(--accent-color);
        outline-offset: 4px;
        border-radius: 2px;
      }

      .read-more-link:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <h1 style="text-align: center; margin-bottom: 2rem;">Our Blog</h1>

    <div class="card-container">
      <!-- Card 1 -->
      <article class="blog-card">
        <div class="card-image-container">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d1469c9b?q=80&w=2070&auto=format&fit=crop"
            alt="Abstract coding lines on a screen"
          />
        </div>
        <div class="card-content">
          <h2 class="card-title">
            <a href="#">An Introduction to Modern CSS</a>
          </h2>
          <div class="card-meta">
            <time datetime="2025-08-28">August 28, 2025</time>
            <span>by Jane Doe</span>
          </div>
          <p class="card-excerpt">
            This post explores the powerful new features in CSS that allow for
            more dynamic and responsive layouts without relying on JavaScript.
            We'll cover Grid, Flexbox, and custom properties in detail.
          </p>
          <div class="card-footer">
            <a href="#" class="read-more-link">Read More &rarr;</a>
          </div>
        </div>
      </article>

      <!-- Card 2 -->
      <article class="blog-card">
        <div class="card-image-container">
          <img
            src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop"
            alt="Laptop showing colorful code with a shallow depth of field"
          />
        </div>
        <div class="card-content">
          <h2 class="card-title">
            <a href="#">Accessibility in Web Design</a>
          </h2>
          <div class="card-meta">
            <time datetime="2025-08-25">August 25, 2025</time>
            <span>by John Smith</span>
          </div>
          <p class="card-excerpt">
            Learn why accessibility is not just a feature, but a necessity. This
            guide provides practical tips for making your websites usable for
            everyone, including semantic HTML, ARIA roles, and contrast ratios.
            It's a very long text to demonstrate the truncation.
          </p>
          <div class="card-footer">
            <a href="#" class="read-more-link">Read More &rarr;</a>
          </div>
        </div>
      </article>

      <!-- Card 3 -->
      <article class="blog-card">
        <div class="card-image-container">
          <img
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop"
            alt="Close-up of HTML code on a monitor"
          />
        </div>
        <div class="card-content">
          <h2 class="card-title">
            <a href="#">The Power of Semantic HTML</a>
          </h2>
          <div class="card-meta">
            <time datetime="2025-08-22">August 22, 2025</time>
            <span>by Alex Johnson</span>
          </div>
          <p class="card-excerpt">
            Moving beyond divs. Semantic HTML provides meaning to your web
            pages, improving SEO and accessibility. Let's dive into the most
            important tags and how to use them effectively.
          </p>
          <div class="card-footer">
            <a href="#" class="read-more-link">Read More &rarr;</a>
          </div>
        </div>
      </article>
    </div>
  </body>
</html>
```

## Assignment

Design and implement three different card components for a website:

### 1. Profile Card

Display user information including:

- Avatar image
- Name and job title
- Short bio (max 2 lines)
- Social media links (at least 3)
- Contact button

### 2. Product Card

For an e-commerce site including:

- Product image
- Product name
- Price with discount indicator (if applicable)
- Rating stars (0-5)
- Add to cart button
- Quick view option

### 3. Dashboard Metric Card

For an admin dashboard including:

- Metric title (e.g., "Total Users")
- Current value with trend indicator (up/down)
- Comparison to previous period
- Icon representing the metric
- View details link

### Requirements:

- All cards must use a consistent design system
- Implement focus states for all interactive elements
- Ensure proper spacing and alignment
- Make all cards responsive for different screen sizes
- Add appropriate transitions for interactive states
- Use CSS variables for colors, spacing, and other properties

### Technical Constraints:

- Use only HTML and CSS (no JavaScript)
- Implement a mobile-first approach
- Ensure accessibility with proper ARIA attributes where needed
- Use semantic HTML elements
- Organize CSS with comments and logical structure

## Building Navigation & Form Components

### **1. Navigation Menus**

Navigation bars are typically built using a `<nav>` element containing a `<ul>` list of links.

- Use `display: flex` to align items horizontally.
- Remove default list styles with `list-style: none`.
- Add hover effects to the links for better UX.

### **2. Styled Forms**

Forms should be clean and accessible.

- Use `display: block` on labels to stack them above inputs.
- Add `padding`, `border-radius`, and `border` to inputs.
- Style the `focus` state of inputs to provide visual feedback.

---

## Key Takeaways

1. Cards are versatile containers for content that help organize information
2. Components promote consistency and reusability in web design
3. CSS variables are essential for maintaining design systems
4. Responsive design ensures components work across devices
5. Accessibility should be considered from the beginning of the design process

```html

```

Well-designed cards and components create cohesive user experiences while reducing development time through reusability. By mastering these UI building blocks, you'll be able to create professional, consistent interfaces more efficiently.

## Additional Resources

- CSS Variables for consistent theming
- Flexbox and Grid for component layout
- CSS transitions and transforms for subtle animations
- Responsive images with srcset and sizes attributes
- Accessibility guidelines for interactive components
