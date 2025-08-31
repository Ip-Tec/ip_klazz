# Day 22: Navigation Menus – Horizontal, Vertical, Dropdowns

## Introduction

Navigation menus are fundamental components of website design that help users move between different sections of a site. Today, we'll explore three common types of navigation menus: horizontal, vertical, and dropdowns. Understanding how to create these with pure CSS is essential for building accessible, user-friendly websites.

## Horizontal Navigation

Horizontal navigation menus display items in a single row, typically at the top of a webpage. They're ideal for sites with a limited number of main sections.

### Key Features:

- Items display inline or using flexbox
- Space-efficient for top navigation
- Works well with 5-7 main categories

### Example:

A typical horizontal menu might include: Home, About, Services, Portfolio, Contact

### Implementation:

```css
.nav-horizontal {
  background: #4a90e2;
  border-radius: 6px;
  overflow: hidden;
}

.nav-horizontal ul {
  display: flex;
  list-style: none;
}

.nav-horizontal li {
  flex: 1;
}

.nav-horizontal a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.nav-horizontal a:hover {
  background: #357abd;
}
```

## Vertical Navigation

Vertical navigation menus display items in a column, often used in sidebars or for secondary navigation. They're excellent for sites with many navigation options.

### Key Features:

- Items stack vertically
- Can accommodate more options than horizontal menus
- Often used for side navigation or mobile menus

### Example:

A vertical menu might include: Dashboard, Profile, Messages, Settings, Help, Logout

### Implementation:

```css
.nav-vertical {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  width: 250px;
  border: 1px solid #ddd;
}

.nav-vertical ul {
  list-style: none;
}

.nav-vertical li {
  border-bottom: 1px solid #eee;
}

.nav-vertical a {
  display: block;
  color: #333;
  text-decoration: none;
  padding: 15px 20px;
  transition: all 0.3s ease;
}

.nav-vertical a:hover {
  background: #f0f7ff;
  color: #4a90e2;
}
```

## Dropdown Navigation

Dropdown navigation menus reveal submenus when users hover over parent items. They're perfect for organizing many navigation options hierarchically.

### Key Features:

- Saves space by hiding submenus until needed
- Creates logical grouping of related items
- Requires careful implementation for accessibility

### Example:

A dropdown menu might have a "Services" item that reveals: Web Design, Development, SEO, Digital Marketing

### Implementation:

```css
.nav-dropdown {
  background: #4a90e2;
  border-radius: 6px;
  overflow: hidden;
}

.nav-dropdown > ul {
  display: flex;
  list-style: none;
  position: relative;
}

.nav-dropdown > ul > li {
  flex: 1;
}

.nav-dropdown a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 15px 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.nav-dropdown .dropdown {
  position: absolute;
  background: white;
  width: 200px;
  border-radius: 0 0 6px 6px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 100;
}

.nav-dropdown li:hover .dropdown {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
```

## Best Practices for Navigation Design

1. **Keep it simple** - Don't overwhelm users with too many options
2. **Be consistent** - Use the same navigation across your site
3. **Make it accessible** - Ensure proper contrast and keyboard navigation
4. **Highlight current page** - Help users understand where they are
5. **Make it responsive** - Ensure navigation works on all device sizes

## Class Work

Create a responsive navigation bar that transforms from a horizontal menu on desktop to a mobile-friendly menu on smaller screens.

### Requirements:

- Create a horizontal navigation with 5 menu items
- Add a hover effect to menu items
- Include a dropdown menu for one of the items
- Make it responsive using media queries
- Use only HTML and CSS (no JavaScript)

### Steps:

1. Set up the HTML structure with a nav element and list items
2. Style the navigation for desktop view using flexbox
3. Create a dropdown submenu for one navigation item
4. Add hover effects for better user feedback
5. Use media queries to adjust the layout for mobile screens

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Navigation Bar (No JS)</title>
    <style>
      /* Basic Reset */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: sans-serif;
        background-color: #f4f4f4;
      }

      /* Navigation Bar Styles */
      .navbar {
        background-color: #333;
        padding: 1rem;
      }

      .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        color: white;
        text-decoration: none;
        font-size: 1.5rem;
      }

      /* Hide the checkbox */
      #menu-toggle {
        display: none;
      }

      /* Hamburger Menu Icon (Label) */
      .menu-button-container {
        display: none; /* Hidden on desktop */
        cursor: pointer;
      }

      .menu-button,
      .menu-button::before,
      .menu-button::after {
        display: block;
        background-color: white;
        position: absolute;
        height: 4px;
        width: 30px;
        transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
        border-radius: 2px;
      }

      .menu-button::before {
        content: "";
        margin-top: -8px;
      }

      .menu-button::after {
        content: "";
        margin-top: 8px;
      }

      /* Main Navigation Menu */
      .nav-menu {
        list-style: none;
        display: flex;
        align-items: center;
      }

      .nav-item {
        position: relative;
      }

      .nav-item a {
        color: white;
        text-decoration: none;
        padding: 1rem;
        display: block;
        transition: background-color 0.3s;
      }

      .nav-item a:hover {
        background-color: #575757;
      }

      /* Dropdown Menu */
      .dropdown {
        display: none;
        position: absolute;
        background-color: #333;
        list-style: none;
        min-width: 160px;
        z-index: 1;
        border-top: 1px solid #575757;
      }

      .dropdown-item a {
        padding: 12px 16px;
      }

      /* Show dropdown on hover */
      .nav-item:hover .dropdown {
        display: block;
      }

      /* --- Responsive Design --- */
      @media (max-width: 768px) {
        .menu-button-container {
          display: flex;
          height: 100%;
          width: 30px;
          align-items: center;
          justify-content: center;
        }

        /* Animate hamburger icon to 'X' */
        #menu-toggle:checked + .menu-button-container .menu-button {
          background: rgba(255, 255, 255, 0);
        }
        #menu-toggle:checked + .menu-button-container .menu-button::before {
          margin-top: 0px;
          transform: rotate(45deg);
        }
        #menu-toggle:checked + .menu-button-container .menu-button::after {
          margin-top: 0px;
          transform: rotate(-45deg);
        }

        .nav-menu {
          display: none; /* Hide menu by default on mobile */
          flex-direction: column;
          position: absolute;
          top: 65px; /* Adjust based on navbar height */
          left: 0;
          width: 100%;
          background-color: #333;
        }

        /* Show menu when checkbox is checked */
        #menu-toggle:checked ~ .nav-menu {
          display: flex;
        }

        .nav-item {
          width: 100%;
          text-align: center;
        }

        .dropdown {
          position: static; /* Make dropdown part of the flow */
          display: none; /* Still hidden by default */
          width: 100%;
          background-color: #444; /* Slightly different color for context */
        }

        /* This is a limitation of no-JS: dropdowns are hard to toggle on click. */
        /* We will show it when the parent is hovered, which works on some touch devices. */
        /* A better UX would require JS or more complex checkbox hacks per item. */
        .nav-item:hover .dropdown {
          display: block;
        }
      }
    </style>
  </head>
  <body>
    <nav class="navbar">
      <div class="nav-container">
        <a href="#" class="logo">Logo</a>

        <!-- Checkbox and Hamburger Icon -->
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>

        <!-- Menu -->
        <ul class="nav-menu">
          <li class="nav-item"><a href="#">Home</a></li>
          <li class="nav-item"><a href="#">About</a></li>
          <li class="nav-item">
            <a href="#">Services</a>
            <ul class="dropdown">
              <li class="dropdown-item"><a href="#">Web Design</a></li>
              <li class="dropdown-item"><a href="#">SEO</a></li>
              <li class="dropdown-item"><a href="#">Marketing</a></li>
            </ul>
          </li>
          <li class="nav-item"><a href="#">Portfolio</a></li>
          <li class="nav-item"><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

    <header style="text-align: center; padding: 2rem;">
      <h1>Responsive Navigation Bar (No JavaScript)</h1>
      <p>Resize the browser window to see the mobile menu in action.</p>
      <p>The mobile menu is controlled by a hidden checkbox.</p>
    </header>
  </body>
</html>
```

## Assignment

Design and implement a complete website navigation system with the following requirements:

### Requirements:

- A horizontal main navigation with dropdowns
- A vertical sidebar navigation for a user dashboard
- A footer navigation with multiple columns
- All navigations should be responsive
- Use consistent styling and color scheme throughout
- Implement focus states for accessibility
- Add appropriate transitions for interactive states

### Specifications:

1. **Main Navigation**:

   - Should include at least 5 items
   - At least two items should have dropdown menus
   - Should be fixed to the top of the viewport

2. **Sidebar Navigation**:

   - Should include at least 6 items
   - Should have a distinct style from the main navigation
   - Should include icons for each item

3. **Footer Navigation**:

   - Should be organized in multiple columns
   - Should include social media links
   - Should include contact information

4. **Responsive Design**:
   - Navigation should adapt to mobile screens
   - Horizontal navigation should transform for mobile
   - Ensure touch-friendly sizing on mobile devices

### Note:

Implement this using only HTML and CSS (no JavaScript). Focus on creating accessible navigation that works with keyboard navigation and screen readers.

## Key Takeaways

1. Navigation is a critical component of user experience
2. Different navigation types serve different purposes
3. Pure CSS can create sophisticated navigation systems
4. Responsive design is essential for modern websites
5. Accessibility should be considered from the beginning

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Complete Website Navigation System</title>
    <style>
      /* --- 0. Global Styles & Variables --- */
      :root {
        --primary-bg: #2c3e50;
        --secondary-bg: #34495e;
        --accent-color: #3498db;
        --text-color: #ecf0f1;
        --hover-bg: #46627f;
        --sidebar-bg: #1f2b38;
        --footer-bg: #1a2530;
        --focus-outline: 2px solid var(--accent-color);
        --header-height: 60px;
        --sidebar-width-desk: 240px;
        --sidebar-width-tablet: 80px;
      }

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
          Helvetica, Arial, sans-serif;
        background-color: #f4f7f9;
        color: #333;
        padding-top: var(--header-height);
      }

      a {
        color: var(--accent-color);
        text-decoration: none;
        transition: color 0.2s ease-in-out;
      }

      a:hover {
        color: var(--text-color);
      }

      a:focus-visible {
        outline: var(--focus-outline);
        outline-offset: 2px;
        border-radius: 2px;
      }

      ul {
        list-style: none;
      }

      /* --- 1. Main Header Navigation --- */
      .main-header {
        background-color: var(--primary-bg);
        height: var(--header-height);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }

      .logo {
        font-size: 1.5rem;
        font-weight: bold;
        color: var(--text-color);
      }

      .main-nav-menu {
        display: flex;
      }

      .main-nav-item {
        position: relative;
      }

      .main-nav-item > a {
        color: var(--text-color);
        display: block;
        padding: 0 1rem;
        line-height: var(--header-height);
        transition: background-color 0.2s ease;
      }

      .main-nav-item > a:hover,
      .main-nav-item > a:focus {
        background-color: var(--hover-bg);
      }

      /* Dropdowns */
      .dropdown {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        background-color: var(--secondary-bg);
        min-width: 200px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 0 0 4px 4px;
      }

      .main-nav-item:hover .dropdown,
      .main-nav-item:focus-within .dropdown {
        display: block;
      }

      .dropdown a {
        color: var(--text-color);
        padding: 0.8rem 1rem;
        display: block;
      }

      .dropdown a:hover,
      .dropdown a:focus {
        background-color: var(--accent-color);
      }

      /* Mobile Menu Toggle */
      #menu-toggle-checkbox {
        display: none;
      }
      .menu-toggle-label {
        display: none; /* Hidden on desktop */
        cursor: pointer;
        padding: 0.5rem;
      }
      .hamburger {
        width: 25px;
        height: 3px;
        background: var(--text-color);
        position: relative;
        transition: background 0.2s ease-in-out;
      }
      .hamburger::before,
      .hamburger::after {
        content: "";
        position: absolute;
        width: 25px;
        height: 3px;
        background: var(--text-color);
        transition: transform 0.2s ease-in-out;
      }
      .hamburger::before {
        top: -8px;
      }
      .hamburger::after {
        top: 8px;
      }

      /* --- 2. Sidebar Navigation --- */
      .sidebar {
        background-color: var(--sidebar-bg);
        width: var(--sidebar-width-desk);
        position: fixed;
        top: var(--header-height);
        left: 0;
        height: calc(100vh - var(--header-height));
        padding-top: 1rem;
        z-index: 90;
        transition: transform 0.3s ease-in-out;
      }

      .sidebar-nav-menu {
        width: 100%;
      }

      .sidebar-nav-item a {
        display: flex;
        align-items: center;
        padding: 1rem;
        color: var(--text-color);
        transition: background-color 0.2s ease;
      }

      .sidebar-nav-item a:hover,
      .sidebar-nav-item a:focus {
        background-color: var(--hover-bg);
      }

      .sidebar-nav-item svg {
        width: 24px;
        height: 24px;
        margin-right: 1rem;
        fill: currentColor;
      }

      /* --- 3. Main Content --- */
      .main-content {
        padding: 2rem;
        margin-left: var(--sidebar-width-desk);
        transition: margin-left 0.3s ease-in-out;
      }

      /* --- 4. Footer --- */
      .main-footer {
        background-color: var(--footer-bg);
        color: var(--text-color);
        padding: 3rem 2rem;
        margin-left: var(--sidebar-width-desk);
        transition: margin-left 0.3s ease-in-out;
      }

      .footer-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      .footer-column h4 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: var(--accent-color);
      }

      .footer-column ul li {
        margin-bottom: 0.5rem;
      }

      .footer-column a {
        color: var(--text-color);
      }
      .footer-column a:hover {
        text-decoration: underline;
      }

      .social-links a {
        margin-right: 1rem;
        display: inline-block;
      }
      .social-links svg {
        width: 24px;
        height: 24px;
        fill: var(--text-color);
        transition: fill 0.2s ease;
      }
      .social-links a:hover svg {
        fill: var(--accent-color);
      }

      /* --- 5. Responsive Design --- */

      /* Tablet */
      @media (max-width: 1024px) {
        .sidebar {
          width: var(--sidebar-width-tablet);
        }
        .sidebar .sidebar-nav-item span {
          display: none;
        }
        .sidebar-nav-item a {
          justify-content: center;
        }
        .sidebar-nav-item svg {
          margin-right: 0;
        }

        .main-content,
        .main-footer {
          margin-left: var(--sidebar-width-tablet);
        }
      }

      /* Mobile */
      @media (max-width: 768px) {
        .menu-toggle-label {
          display: block;
        }
        .main-nav-menu {
          display: none;
          position: absolute;
          top: var(--header-height);
          left: 0;
          width: 100%;
          background-color: var(--secondary-bg);
          flex-direction: column;
        }
        .main-nav-item > a {
          line-height: 3.5rem;
        }
        .dropdown {
          position: static;
          display: none;
          background-color: #4a6380;
          box-shadow: none;
          border-radius: 0;
        }
        .dropdown a {
          padding-left: 2rem;
        }

        #menu-toggle-checkbox:checked ~ .main-nav-menu {
          display: flex;
        }
        #menu-toggle-checkbox:checked + .menu-toggle-label .hamburger {
          background: transparent;
        }
        #menu-toggle-checkbox:checked + .menu-toggle-label .hamburger::before {
          transform: rotate(45deg);
          top: 0;
        }
        #menu-toggle-checkbox:checked + .menu-toggle-label .hamburger::after {
          transform: rotate(-45deg);
          top: 0;
        }

        .sidebar {
          transform: translateX(-100%);
        }

        /* Sidebar toggle appears */
        .sidebar-toggle-label {
          display: block;
          position: fixed;
          top: calc(var(--header-height) + 1rem);
          left: 1rem;
          z-index: 110;
          cursor: pointer;
          background: var(--primary-bg);
          padding: 0.5rem;
          border-radius: 4px;
        }
        #sidebar-toggle-checkbox {
          display: none;
        }
        #sidebar-toggle-checkbox:checked ~ .sidebar {
          transform: translateX(0);
          width: var(
            --sidebar-width-desk
          ); /* Expand sidebar on mobile when open */
        }
        #sidebar-toggle-checkbox:checked ~ .sidebar .sidebar-nav-item span {
          display: inline;
        }
        #sidebar-toggle-checkbox:checked ~ .sidebar .sidebar-nav-item a {
          justify-content: flex-start;
        }
        #sidebar-toggle-checkbox:checked ~ .sidebar .sidebar-nav-item svg {
          margin-right: 1rem;
        }

        .main-content,
        .main-footer {
          margin-left: 0;
        }

        .footer-container {
          grid-template-columns: 1fr;
          text-align: center;
        }
        .footer-column ul {
          padding-left: 0;
        }
      }
    </style>
  </head>
  <body>
    <!-- Main Header Navigation -->
    <header class="main-header">
      <a href="#home" class="logo">MySite</a>
      <input type="checkbox" id="menu-toggle-checkbox" />
      <label for="menu-toggle-checkbox" class="menu-toggle-label">
        <div class="hamburger"></div>
      </label>
      <nav class="main-nav">
        <ul class="main-nav-menu">
          <li class="main-nav-item"><a href="#home">Home</a></li>
          <li class="main-nav-item">
            <a href="#products">Products</a>
            <ul class="dropdown">
              <li><a href="#p1">Product 1</a></li>
              <li><a href="#p2">Product 2</a></li>
              <li><a href="#p3">Product 3</a></li>
            </ul>
          </li>
          <li class="main-nav-item">
            <a href="#services">Services</a>
            <ul class="dropdown">
              <li><a href="#s1">Consulting</a></li>
              <li><a href="#s2">Development</a></li>
            </ul>
          </li>
          <li class="main-nav-item"><a href="#about">About Us</a></li>
          <li class="main-nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Sidebar Toggle (Mobile Only) -->
    <input type="checkbox" id="sidebar-toggle-checkbox" />
    <label
      for="sidebar-toggle-checkbox"
      class="sidebar-toggle-label menu-toggle-label"
    >
      <div class="hamburger"></div>
    </label>

    <!-- Sidebar Navigation -->
    <aside class="sidebar">
      <nav class="sidebar-nav">
        <ul class="sidebar-nav-menu">
          <li class="sidebar-nav-item">
            <a href="#dashboard">
              <svg viewBox="0 0 24 24">
                <path
                  d="M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z"
                ></path>
              </svg>
              <span>Dashboard</span>
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a href="#profile">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
                ></path>
              </svg>
              <span>Profile</span>
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a href="#messages">
              <svg viewBox="0 0 24 24">
                <path
                  d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                ></path>
              </svg>
              <span>Messages</span>
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a href="#analytics">
              <svg viewBox="0 0 24 24">
                <path
                  d="M9,17H7V10H9M13,17H11V7H13M17,17H15V13H17M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"
                ></path>
              </svg>
              <span>Analytics</span>
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a href="#settings">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12.5L4.5,11.5L4.57,11.03L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.06C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.06L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11.03L19.5,11.5L19.5,12.5L19.43,12.97L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.94C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10Z"
                ></path>
              </svg>
              <span>Settings</span>
            </a>
          </li>
          <li class="sidebar-nav-item">
            <a href="#logout">
              <svg viewBox="0 0 24 24">
                <path
                  d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"
                ></path>
              </svg>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="main-content">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. This is the main content area.</p>
      <div
        style="height: 200vh; background: #eee; margin-top: 2rem; padding: 1rem;"
      >
        <p>Scroll down to see the fixed header and sidebar in action.</p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="main-footer">
      <div class="footer-container">
        <div class="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Products</h4>
          <ul>
            <li><a href="#p1">Product 1</a></li>
            <li><a href="#p2">Product 2</a></li>
            <li><a href="#p3">Product 3</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Contact</h4>
          <p>123 Web St.<br />Anytown, USA 12345</p>
          <p>Email: <a href="mailto:info@mysite.com">info@mysite.com</a></p>
        </div>
        <div class="footer-column">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 24 24">
                <path
                  d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path
                  d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.43 13,11.1V10.13H10V18.5H13V13.57C13,12.8 13.69,12.11 14.5,12.11C15.31,12.11 16,12.8 16,13.57V18.5H18.5M6.5,8.31C7.33,8.31 8,7.64 8,6.81C8,5.97 7.33,5.31 6.5,5.31C5.67,5.31 5,5.97 5,6.81C5,7.64 5.67,8.31 6.5,8.31M8,18.5V10.13H5V18.5H8Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </body>
</html>
```

Well-designed navigation helps users find what they need quickly and efficiently, leading to better engagement and satisfaction with your website.
