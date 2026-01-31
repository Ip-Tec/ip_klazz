
# 🧠 Day 7: Making Websites Easy for Everyone to Use

## 🎯 What You’ll Learn Today
By the end of this lesson, you’ll know how to:
- Make websites that work for people with disabilities
- Use the right HTML tags to help screen readers and other tools
- Add special labels (called ARIA) to explain what stuff does
- Make sure people can use your site with just a keyboard
- Check your site to make sure it’s easy to use for everyone

---

## 📚 1. What Is Accessibility?

### 🔍 What It Means
Accessibility means building websites that *everyone* can use — even people who:
- Can’t see well
- Can’t hear
- Can’t use a mouse
- Have trouble understanding things

### 💡 Why It’s Important
- It’s the law in many places
- It’s the right thing to do
- It makes your site easier for *everyone*
- It helps your site show up better on Google

### 🧩 Easy Way to Remember: POUR
| Word           | What It Means |
|----------------|----------------|
| **Perceivable** | People can *see or hear* your content |
| **Operable**    | People can *use* your site with keyboard or mouse |
| **Understandable** | Your site is *easy to use and makes sense* |
| **Robust**      | Your site works on *all devices and screen readers* |

---

## 🧱 2. HTML Basics for Accessibility

### ✅ Use the Right Tags
These tags help screen readers understand your page:
```html
<header>, <nav>, <main>, <footer>
```
Use:
```html
<button>
```
Instead of:
```html
<div onclick="...">
```

### ✅ Add Alt Text to Images
This helps blind users know what the image shows:
```html
<img src="dog.jpg" alt="Golden retriever playing with a ball">
```

### ✅ Use Proper Headings
This helps organize your page:
```html
<h1>Product Page</h1>
<h2>Features</h2>
<h3>Battery Life</h3>
```

### ✅ Make Text Easy to Read
Use strong color contrast. You can check it with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/).

---

## 🎭 3. What Is ARIA?

### 🔧 ARIA = Extra Info for Screen Readers
ARIA helps when HTML alone isn’t enough. It tells screen readers what stuff *is* and what it’s *doing*.

### 🔹 ARIA Roles (What something *is*)
```html
role="navigation"   <!-- for menus -->
role="main"         <!-- for main content -->
role="alert"        <!-- for urgent messages -->
role="tab"          <!-- for tabs -->
role="tabpanel"     <!-- for tab content -->
role="progressbar"  <!-- for loading bars -->
```

### 🔸 ARIA States (What’s happening *right now*)
```html
aria-expanded="true"   <!-- dropdown is open -->
aria-checked="false"   <!-- checkbox is not checked -->
aria-selected="true"   <!-- tab is selected -->
aria-disabled="true"   <!-- element is disabled -->
```

### 🔸 ARIA Properties (Extra info)
```html
aria-label="Close menu"         <!-- custom label -->
aria-labelledby="title"         <!-- links to another label -->
aria-describedby="desc"         <!-- links to a description -->
aria-controls="dropdown"        <!-- links to controlled element -->
aria-live="polite"              <!-- announces updates -->
```

### 🧪 Example: Tabs
```html
<div role="tablist">
  <button role="tab" aria-selected="true" aria-controls="panel1" id="tab1">Tab 1</button>
  <button role="tab" aria-selected="false" aria-controls="panel2" id="tab2">Tab 2</button>
</div>

<div role="tabpanel" id="panel1" aria-labelledby="tab1">Content for Tab 1</div>
<div role="tabpanel" id="panel2" aria-labelledby="tab2" hidden>Content for Tab 2</div>
```

---

## ⌨️ 4. Keyboard Navigation

### 🔑 Why It Matters
Some people *only* use keyboards. Your site should work without a mouse.

### Common Keys
| Key         | What It Does |
|-------------|----------------|
| Tab         | Move to next item |
| Shift + Tab | Move to previous item |
| Enter       | Click a button or link |
| Spacebar    | Toggle checkboxes or buttons |
| Arrow Keys  | Move between tabs or menu items |
| Escape      | Close popups or dropdowns |

### 🧪 Example: Skip Link
```html
<a href="#main" class="skip-link">Skip to main content</a>
```

### 🧪 Example: Custom Button
```html
<div role="button" tabindex="0" aria-pressed="false">Click me</div>
```

---

## 🛠️ 5. Practice Time!

### 🧪 Task 1: Make a Product Card
Create a file called `accessibility.html` with:
- An image with alt text
- Product title using `<h2>`
- Description in a `<p>`
- Price in a `<span>`
- “Add to Cart” button using `<button>`
- Use proper HTML tags
- Make sure colors are readable
- Make sure it works with keyboard

### 🧪 Task 2: Make a Tab Interface
- Use `role="tablist"`, `role="tab"`, `role="tabpanel"`
- Add `aria-selected`, `aria-controls`, `aria-labelledby`
- Make it work with arrow keys
- Try it with a screen reader if you can

---

## 📝 6. Homework: Accessibility Check

### ✅ Checklist
- All images have alt text  
- Headings make sense  
- Buttons and links can be focused  
- You can see where focus is  
- You can use the site with just a keyboard  
- Colors are readable  
- Forms have labels  
- You used proper HTML tags  
- You used ARIA where needed  

### 🛠️ Fix Problems
- Update your HTML
- Add ARIA roles
- Make keyboard navigation better

### 🗒️ Write a Report (inside an HTML comment)
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
## 🔍 7. Tools to Help You
### 🛠️ Accessibility Checkers
- [WAVE](https://wave.webaim.org/)
- [axe](https://www.deque.com/axe/)
- [WebAIM](https://webaim.org/)
- [Lighthouse (in Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)
- [NVDA (screen reader)](https://www.nvaccess.org/)
