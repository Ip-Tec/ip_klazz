---
title: "Accessibility in CSS"
description: "Learn how to use CSS to improve the accessibility of your web pages."
---

# Accessibility in CSS

Accessibility (A11y) is not just about HTML; CSS plays a huge role in how users perceive and interact with your content.

## Color Contrast

Ensure that your text has enough contrast against its background. 
A common standard is WCAG AA, which requires a contrast ratio of at least 4.5:1 for normal text.

## Focus Indicators

Never remove focus outlines without providing a clear alternative. Focus indicators are essential for keyboard users.

```css
/* Avoid this */
button:focus {
  outline: none;
}

/* Do this instead */
button:focus {
  outline: 2px solid orange;
  outline-offset: 4px;
}
```

## Responsive Typography

Avoid using fixed units like `px` for font sizes. Use `rem` so that text scales correctly with the user's browser settings.

## Hiding Content Correctly

If you need to hide content from the screen but keep it for screen readers, use a `.sr-only` class.

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```
