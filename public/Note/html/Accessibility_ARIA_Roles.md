
# 🧠 Masterclass: Accessibility, ARIA Roles & Keyboard Navigation

## 🎯 Learning Objectives
By the end of this lesson, students will:
- Understand the importance of web accessibility
- Learn how to use semantic HTML for accessible design
- Apply ARIA roles, states, and properties to enhance accessibility
- Implement keyboard-friendly navigation
- Conduct accessibility audits and improve real-world projects

---

## 📚 Section 1: What Is Web Accessibility?

### 🔍 Definition
Web accessibility (a11y) means designing websites that everyone can use — including people with disabilities (visual, auditory, motor, cognitive).

### 💡 Why It Matters
- Legal compliance (e.g., WCAG, ADA)
- Ethical and inclusive design
- Better UX for all users
- SEO and performance benefits

### 🧩 POUR Principles
| Principle      | Meaning                                                                 |
|----------------|-------------------------------------------------------------------------|
| **Perceivable**| Content must be visible/audible to all users                            |
| **Operable**   | Users must be able to interact with all elements                        |
| **Understandable**| Interface must be predictable and easy to use                      |
| **Robust**     | Must work across devices and assistive technologies                    |

---

## 🧱 Section 2: HTML Accessibility Basics

### ✅ Semantic HTML
Use meaningful tags:
- `<header>`, `<nav>`, `<main>`, `<footer>`
- `<button>` instead of `<div onclick="...">`

### ✅ Alt Text for Images
```html
<img src="dog.jpg" alt="Golden retriever playing with a ball">
```

### ✅ Headings Structure
```html
<h1>Product Page</h1>
<h2>Features</h2>
<h3>Battery Life</h3>
```

### ✅ Color Contrast
Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) to ensure readability.

---

## 🎭 Section 3: ARIA Roles, States & Properties

### 🔧 What Is ARIA?
ARIA (Accessible Rich Internet Applications) is a set of attributes that improve accessibility when HTML alone isn’t enough.

### 🔹 ARIA Roles
Define what an element *is*:
- `role="navigation"` — menus
- `role="main"` — main content
- `role="alert"` — urgent messages
- `role="tab"` / `role="tabpanel"` — tab interfaces
- `role="progressbar"` — loading indicators

### 🔸 ARIA States
Describe current conditions:
- `aria-expanded="true"` — dropdown is open
- `aria-checked="false"` — checkbox is unchecked
- `aria-selected="true"` — tab is selected
- `aria-disabled="true"` — element is disabled

### 🔸 ARIA Properties
Provide extra info:
- `aria-label="Close menu"` — custom label
- `aria-labelledby="title"` — reference another label
- `aria-describedby="desc"` — reference description
- `aria-controls="dropdown"` — links to controlled element
- `aria-live="polite"` — announces updates

### 🧪 ARIA Example: Tab Interface
```html
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">Tab 2</button>
</div>

<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>
```

---

## ⌨️ Section 4: Keyboard Navigation

### 🔑 Why It Matters
Many users rely on keyboards — especially those with motor impairments. Your site must be fully usable without a mouse.

### 🔄 Common Keys
| Key         | Action                                  |
|-------------|------------------------------------------|
| `Tab`       | Move to next focusable element           |
| `Shift + Tab`| Move to previous focusable element      |
| `Enter`     | Activate buttons/links                   |
| `Spacebar`  | Toggle checkboxes or activate buttons    |
| `Arrow keys`| Navigate menus, sliders, tabs            |
| `Escape`    | Close dropdowns or modals                |

### 🧪 Example: Skip Link
```html
<a href="#main" class="skip-link">Skip to main content</a>
```

### 🧪 Example: Custom Button
```html
<div role="button" tabindex="0" aria-pressed="false">Click me</div>
```

---

## 🛠️ Section 5: Practice Assignment

### 🧪 Task 1: Build a Product Card
Create a file called `accessibility.html` with:
- An image with descriptive alt text
- Product title using `<h2>`
- Description in a `<p>`
- Price in a `<span>`
- “Add to Cart” button using `<button>`
- Semantic HTML
- Good color contrast
- Keyboard accessibility

### 🧪 Task 2: Custom Tab Interface
- Use `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Add `aria-selected`, `aria-controls`, `aria-labelledby`
- Implement keyboard navigation (Arrow keys)
- Test with a screen reader

---

## 📝 Section 6: Homework — Accessibility Audit

### 🔍 Audit Checklist
- ✅ All images have alt text
- ✅ Logical heading structure
- ✅ All interactive elements are focusable
- ✅ Visible focus states
- ✅ Keyboard-only navigation works
- ✅ Color contrast meets WCAG AA
- ✅ Forms have labels
- ✅ Semantic HTML used
- ✅ ARIA used where needed

### 🛠️ Fix Issues
- Update HTML
- Add ARIA roles
- Improve keyboard navigation

### 🗒️ Report (in HTML comment)
```html
<!--
Accessibility Audit Report:
- Fixed missing alt text on homepage images
- Replaced <div> buttons with <button>
- Added skip link and focus styles
- Learned how ARIA roles help screen readers
-->
```

---

## 🧑‍🏫 Teaching Tips
- Use screen reader demos (VoiceOver, NVDA)
- Encourage students to navigate with keyboard only
- Pair students for peer audits
- Use real-world examples (e.g., e-commerce sites)

