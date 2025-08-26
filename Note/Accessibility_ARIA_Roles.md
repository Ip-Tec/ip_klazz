### **Chapter 7: Day 7**
**Objectives:** Understand the importance of web accessibility, learn to use ARIA roles and attributes, and implement proper keyboard navigation to create inclusive websites for all users.

---

### **Lesson: Accessibility in HTML**
**Explanation:**
Web accessibility (often abbreviated as a11y) means making your websites usable by as many people as possible, including those with disabilities. This includes people with visual, auditory, motor, or cognitive impairments. Accessible websites are not only a legal requirement in many cases but also provide better user experience for everyone.

**Key Principles of Accessibility:**
1. **Perceivable:** Information and user interface components must be presentable in ways users can perceive
2. **Operable:** User interface components must be operable by all users
3. **Understandable:** Information and operation of the user interface must be understandable
4. **Robust:** Content must be robust enough to work with current and future technologies

**Basic HTML Accessibility Practices:**
- Use semantic HTML elements (as covered in Day 5)
- Provide text alternatives for non-text content (alt text for images)
- Ensure sufficient color contrast between text and background
- Create content that can be presented in different ways
- Make all functionality available from a keyboard

**Code Example:**
```html
<!-- Good accessibility practices -->
<!-- Semantic structure -->
<header>
  <h1>Website Title</h1>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <!-- Image with proper alt text -->
  <img src="graph.jpg" alt="Bar chart showing sales growth from 2018 to 2023" width="600" height="400">
  
  <!-- Form with proper labels -->
  <form>
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">
    
    <!-- High contrast text -->
    <button style="background-color: #0056b3; color: white;">Submit</button>
  </form>
</main>

<!-- Poor accessibility practices -->
<!-- Non-semantic structure -->
<div onclick="goToPage()">Click here</div>

<!-- Image without alt text -->
<img src="graph.jpg">

<!-- Low contrast text -->
<button style="background-color: #eeeeee; color: #f0f0f0;">Submit</button>
```

**Practice Task:**
1. Create a new HTML file called `accessibility.html`
2. Build a simple product card that includes:
   - An image with descriptive alt text
   - A product title using an appropriate heading level
   - A product description
   - A price display
   - An "Add to Cart" button
3. Ensure all elements use proper semantic HTML
4. Check that the color contrast between text and background meets accessibility standards (you can use online tools like WebAIM's Contrast Checker)

---

### **Lesson: ARIA Roles**
**Explanation:**
ARIA (Accessible Rich Internet Applications) is a set of attributes that define ways to make web content more accessible to people with disabilities. ARIA helps bridge gaps in accessibility when HTML semantics alone aren't sufficient.

**When to Use ARIA:**
- When creating custom interactive widgets
- When enhancing native HTML elements with additional semantics
- When the content changes dynamically without a page refresh

**Key ARIA Concepts:**
1. **Roles:** Define what an element is or does (e.g., `role="navigation"`, `role="alert"`)
2. **Properties:** Provide additional information about elements (e.g., `aria-label`, `aria-hidden`)
3. **States:** Describe current conditions of elements (e.g., `aria-expanded`, `aria-checked`)

**Common ARIA Roles:**
- `role="navigation"`: For navigation regions
- `role="main"`: For the main content of the document
- `role="complementary"`: For content that complements the main content
- `role="banner"`: For site-oriented content at the beginning of a page
- `role="alert"`: For important, usually time-sensitive information

**Code Example:**
```html
<!-- Using ARIA to enhance accessibility -->
<!-- Custom button with ARIA -->
<div class="custom-button" role="button" tabindex="0" aria-pressed="false">
  Click me
</div>

<!-- Navigation with ARIA -->
<nav role="navigation" aria-label="Main menu">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

<!-- Alert message with ARIA -->
<div role="alert" aria-live="assertive">
  Your changes have been saved successfully.
</div>

<!-- Progress bar with ARIA -->
<div role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  Loading: 75%
</div>

<!-- Tab panel with ARIA -->
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2">Tab 2</button>
</div>
<div role="tabpanel" id="panel1">Content for tab 1</div>
<div role="tabpanel" id="panel2">Content for tab 2</div>
```

**Practice Task:**
1. Create a custom tab interface without using native HTML elements
2. Use appropriate ARIA roles (`tablist`, `tab`, `tabpanel`)
3. Add ARIA attributes to indicate the selected tab (`aria-selected`)
4. Add keyboard navigation using JavaScript (left/right arrows to switch tabs)
5. Test with a screen reader to ensure it's accessible

---

### **Lesson: Keyboard Navigation**
**Explanation:**
Many users navigate the web using only a keyboard, including people with motor disabilities who cannot use a mouse. Ensuring your website is fully keyboard accessible is a critical aspect of web accessibility.

**Keyboard Accessibility Principles:**
1. **Focus Indicators:** All interactive elements should have a visible focus state
2. **Logical Tab Order:** The tab order should follow the visual flow of the page
3. **Skip Links:** Provide a way to skip repetitive navigation
4. **Keyboard Traps:** Avoid situations where keyboard users get stuck
5. **Custom Interactions:** Ensure custom widgets are keyboard accessible

**Common Keyboard Navigation Patterns:**
- Tab key moves focus to the next focusable element
- Shift+Tab moves focus to the previous focusable element
- Enter/Return activates buttons and links
- Spacebar toggles checkboxes and activates buttons
- Arrow keys navigate within components like menus, sliders, and radio groups

**Code Example:**
```html
<!-- Good keyboard navigation practices -->
<!-- Skip link for keyboard users -->
<a href="#main" class="skip-link">Skip to main content</a>

<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main id="main">
  <!-- Custom button with keyboard support -->
  <div class="custom-button" tabindex="0" role="button">
    Click me (Press Enter or Space)
  </div>
  
  <!-- Form with proper focus styles -->
  <form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    
    <button type="submit">Subscribe</button>
  </form>
</main>

<style>
  /* Visible focus styles */
  a:focus, button:focus, input:focus, [tabindex]:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
  }
  
  /* Skip link hidden until focused */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #0056b3;
    color: white;
    padding: 8px;
    z-index: 100;
  }
  
  .skip-link:focus {
    top: 0;
  }
</style>

<script>
  // Adding keyboard support to custom button
  document.querySelector('.custom-button').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.click();
    }
  });
</script>
```

**Practice Task:**
1. Create a navigation menu with dropdown submenus
2. Ensure the menu is fully operable with keyboard only:
   - Tab should move through top-level items
   - Enter/Space should open dropdowns
   - Arrow keys should navigate within dropdowns
   - Escape should close dropdowns
3. Add visible focus indicators for all interactive elements
4. Add a "Skip to main content" link that appears when focused
5. Test your implementation using only the keyboard

---

### **Homework:**
**Accessibility Audit and Fixes:**

1. Choose one of the multi-page websites you created in previous chapters
2. Conduct an accessibility audit using the following checklist:
   - [ ] All images have appropriate alt text
   - [ ] The page has a logical heading structure
   - [ ] All interactive elements are focusable and have visible focus states
   - [ ] The page can be navigated using only the keyboard
   - [ ] Color contrast meets WCAG AA standards
   - [ ] Forms have properly associated labels
   - [ ] Semantic HTML is used appropriately
   - [ ] ARIA is used where needed to enhance accessibility

3. Fix any accessibility issues you find
4. Write a brief report (in a comment at the top of your HTML file) explaining:
   - What accessibility issues you identified
   - How you fixed them
   - What you learned about web accessibility

5. Test your improved website with a screen reader (most operating systems have built-in options) to ensure it's accessible to users with visual impairments