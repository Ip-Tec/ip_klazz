# Day 12: Responsive Design – Media Queries & Breakpoints

## What is Responsive Web Design?

Responsive Web Design (RWD) ensures your website looks great and functions well on any device—phones, tablets, laptops, or desktops. Instead of building separate websites for different devices, you create one flexible layout that adapts to different screen sizes.

**Key Principle:** Your website should provide an optimal viewing experience regardless of the device being used.

---

## Media Queries: The Foundation

Media queries allow you to apply different CSS styles based on device characteristics, primarily screen width.

### Basic Syntax

```css
@media (condition) {
  /* CSS rules that apply when condition is true */
}
```

### Common Examples

```css
/* Apply styles on screens 768px or wider */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

/* Apply styles on screens 767px or narrower */
@media (max-width: 767px) {
  .nav {
    flex-direction: column;
  }
}

/* Range: between 768px and 1024px */
@media (min-width: 768px) and (max-width: 1024px) {
  .sidebar {
    width: 30%;
  }
}

/* Orientation-based */
@media (orientation: landscape) {
  .hero {
    height: 50vh;
  }
}
```

---

## Standard Breakpoints

While there's no "official" standard, these breakpoints align with common device sizes:

```css
/* Extra Small devices (phones, less than 576px) */
/* No media query needed - this is your base/mobile style */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { }
```

**Pro Tip:** Choose breakpoints based on your content, not specific devices. Your content should determine where it needs to adapt.

---

## Mobile-First vs Desktop-First

### Mobile-First Approach ✅ (Recommended)

Start with mobile styles, then add complexity for larger screens using `min-width`.

**Benefits:**

- Forces you to prioritize content
- Better performance on mobile devices
- Easier to maintain
- Aligns with "progressive enhancement"

```css
/* Base styles (mobile) */
.grid {
  display: block;
}

/* Tablet and up */
@media (min-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and up */
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Desktop-First Approach

Start with desktop styles, then scale down using `max-width`.

```css
/* Base styles (desktop) */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Tablet and smaller */
@media (max-width: 991px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 767px) {
  .grid {
    display: block;
  }
}
```

---

## Essential Meta Tag

**Don't forget this!** Add to your HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Without this tag, mobile browsers will render your page at desktop width and scale it down.

---

## Practical Example: Responsive Card Grid

```css
/* Mobile-first approach */
.card-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;
  /* 1 column on mobile */
  grid-template-columns: 1fr;
}

.card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Tablets: 2 columns */
@media (min-width: 768px) {
  .card-grid {
    padding: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop: 3 columns */
@media (min-width: 992px) {
  .card-grid {
    padding: 3rem;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Large screens: 4 columns */
@media (min-width: 1200px) {
  .card-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

## Common Responsive Patterns

### 1. **Responsive Navigation**

```css
/* Mobile: Hamburger menu */
.nav-toggle {
  display: block;
}

.nav-menu {
  display: none; /* Hidden by default on mobile */
}

.nav-menu.active {
  display: flex;
  flex-direction: column;
}

/* Desktop: Horizontal menu */
@media (min-width: 768px) {
  .nav-toggle {
    display: none;
  }
  
  .nav-menu {
    display: flex !important;
    flex-direction: row;
  }
}
```

### 2. **Responsive Typography**

```css
body {
  font-size: 16px;
}

h1 {
  font-size: 2rem; /* 32px on mobile */
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem; /* 40px on tablet */
  }
}

@media (min-width: 992px) {
  body {
    font-size: 18px;
  }
  
  h1 {
    font-size: 3rem; /* 54px on desktop */
  }
}
```

### 3. **Hide/Show Elements**

```css
/* Hide on mobile */
.desktop-only {
  display: none;
}

@media (min-width: 768px) {
  .desktop-only {
    display: block;
  }
  
  .mobile-only {
    display: none;
  }
}
```

---

## Testing Your Responsive Design

1. **Browser DevTools:** Use responsive design mode (F12 → Toggle device toolbar)
2. **Resize your browser window** to see breakpoints in action
3. **Test on real devices** when possible
4. **Check both portrait and landscape** orientations

---

## Assignment: Build a Responsive Portfolio

### Requirements

Create a single-page portfolio website with these sections:

1. **Header/Navigation**
   - Logo on the left
   - Navigation links on the right
   - Hamburger menu on mobile

2. **Hero Section**
   - Your name and title
   - Brief introduction
   - Call-to-action button

3. **Projects Section**
   - Grid of project cards
   - 1 column (mobile) → 2 columns (tablet) → 3 columns (desktop)

4. **Skills Section**
   - Display your skills with progress bars
   - 2 columns (mobile) → 3 columns (tablet) → 4 columns (desktop)

5. **Contact Form**
   - Name, email, message fields
   - Centered, max-width of 600px

6. **Footer**
   - Copyright information

### Technical Requirements

- Use **mobile-first approach** with `min-width` media queries
- Implement at least **3 breakpoints** (576px, 768px, 992px)
- Include the viewport meta tag
- Ensure readable text sizes on all devices
- Test on different screen sizes

### Optional Challenges

- Add smooth scroll behavior
- Implement a sticky header
- Create a dark mode toggle
- Add animations on scroll
- Make the hamburger menu animated

---

## Quick Reference: Media Query Syntax

```css
/* Width-based */
@media (min-width: 768px) { }
@media (max-width: 767px) { }
@media (min-width: 768px) and (max-width: 1024px) { }

/* Orientation */
@media (orientation: portrait) { }
@media (orientation: landscape) { }

/* High-resolution displays */
@media (min-resolution: 2dppx) { }

/* Combine multiple conditions */
@media (min-width: 768px) and (orientation: landscape) { }
```

---

## Best Practices

✅ **Do:**

- Use relative units (rem, em, %, vh/vw) for flexibility
- Test on multiple devices and browsers
- Use mobile-first approach
- Keep breakpoints consistent across your project
- Focus on content, not devices

❌ **Don't:**

- Use too many breakpoints (3-4 is usually enough)
- Forget the viewport meta tag
- Use fixed widths everywhere
- Target specific devices (they change constantly)
- Assume desktop-first is simpler (it's not!)

---

## Resources for Further Learning

- **MDN Web Docs:** [Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- **CSS Tricks:** [A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- **Responsive Design Checker:** Use browser DevTools or websites like responsivedesignchecker.com

---

**Remember:** The goal of responsive design is not just to make things fit—it's to provide the best possible experience for users on any device. Think about how people actually use different devices and optimize for those behaviors!