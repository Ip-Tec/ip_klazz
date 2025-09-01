# Day 25: Accessibility in CSS – Focus Styles, Contrast

## Introduction

Accessibility is a crucial aspect of web development that ensures your websites can be used by everyone, including people with disabilities. Today we'll focus on how CSS can improve accessibility through proper focus styles, color contrast, and other techniques.

## Why Accessibility Matters

Web accessibility ensures that people with visual, auditory, motor, or cognitive disabilities can perceive, understand, navigate, and interact with websites. Implementing accessibility features isn't just about compliance—it's about creating inclusive experiences for all users.

## Key Accessibility Concepts in CSS

### 1. Focus Styles

Focus styles are visual indicators that show which element currently has keyboard focus. They're essential for users who navigate with keyboards, screen readers, or other assistive technologies.

#### Example: Basic Focus Styles
```css
/* Default browser focus style */
button:focus {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

/* Custom focus style */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 95, 204, 0.3);
  border-color: #005fcc;
}

/* Focus style for high contrast mode */
@media (prefers-contrast: high) {
  button:focus {
    outline: 3px solid #000000;
    outline-offset: 1px;
  }
}
```

### 2. Color Contrast

Adequate color contrast ensures that text is readable for users with visual impairments or color vision deficiencies.

#### Example: Contrast Checking
```css
/* Good contrast (WCAG AA compliant) */
.good-contrast {
  color: #000000; /* Black text */
  background-color: #ffffff; /* White background */
  /* Contrast ratio: 21:1 */
}

/* Poor contrast */
.poor-contrast {
  color: #888888; /* Light gray text */
  background-color: #f0f0f0; /* Light gray background */
  /* Contrast ratio: 2.2:1 (not compliant) */
}
```

### 3. Reduced Motion

Some users prefer reduced motion due to vestibular disorders or other conditions that can be triggered by animations.

#### Example: Respecting Motion Preferences
```css
/* Base animation */
.animated-element {
  transition: transform 0.5s ease;
}

.animated-element:hover {
  transform: scale(1.1);
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
  }
  
  .animated-element:hover {
    transform: none;
  }
}
```

### 4. Semantic HTML with CSS

Using semantic HTML elements improves accessibility, and CSS can enhance their presentation without sacrificing semantics.

#### Example: Visually Hidden Content
```css
/* Hide content visually but keep it available for screen readers */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip link for keyboard users */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}
```

## Class Work

Create a accessible navigation menu with proper focus styles and contrast.

### Requirements:
- Create a horizontal navigation with 5 items
- Implement custom focus styles that are clearly visible
- Ensure all text has sufficient contrast with the background
- Add a skip link that becomes visible on focus
- Make the navigation keyboard accessible
- Include a reduced motion variant

### Steps:
1. Set up the HTML structure with semantic nav element
2. Style the navigation items with good color contrast
3. Add custom focus styles that meet accessibility guidelines
4. Implement a skip link that appears when focused
5. Add a media query for reduced motion preferences
6. Test with keyboard navigation

## Assignment

Design and implement an accessible registration form with the following requirements:

### Requirements:
- Text inputs for name, email, and password with proper labels
- A select dropdown for country selection with accessible styling
- Radio buttons for gender selection with visible focus states
- A range input for age selection with proper contrast
- A styled checkbox for terms acceptance that's keyboard accessible
- A submit button with clear focus indication
- Error messages that are perceivable for all users

### Accessibility Features to Implement:
1. **Focus Styles**:
   - Custom focus indicators for all interactive elements
   - Consistent focus style across all elements
   - Visible focus rings with good contrast

2. **Color Contrast**:
   - All text must have a contrast ratio of at least 4.5:1
   - Form controls must have a border with good contrast
   - Error messages must be highly visible

3. **Reduced Motion**:
   - Respect prefers-reduced-motion setting
   - Remove or simplify animations when reduced motion is preferred

4. **Semantic HTML**:
   - Use proper label associations for all form elements
   - Include fieldset and legend for grouped elements
   - Implement ARIA attributes where appropriate

5. **Responsive Design**:
   - Ensure form is usable on all screen sizes
   - Maintain accessibility features across breakpoints

### Technical Constraints:
- Use only HTML and CSS (no JavaScript)
- Test with keyboard navigation
- Verify color contrast with online tools
- Ensure proper semantic structure

## Key Takeaways

1. Accessibility is not optional—it's essential for inclusive web experiences
2. Focus styles are crucial for keyboard users and should never be removed without providing alternatives
3. Color contrast affects readability for many users and should meet WCAG guidelines
4. Respecting user preferences like reduced motion creates a more comfortable experience
5. Semantic HTML combined with thoughtful CSS creates the most accessible experiences

## Testing Your Accessibility

1. **Keyboard Testing**: Navigate your site using only the Tab key
2. **Screen Reader Testing**: Use tools like NVDA or VoiceOver to test your site
3. **Color Contrast Checkers**: Use browser extensions or online tools to verify contrast ratios
4. **Lighthouse Audit**: Use Chrome's Lighthouse tool to check accessibility

By implementing these accessibility features, you'll create websites that are usable by everyone, regardless of their abilities or how they access the web.