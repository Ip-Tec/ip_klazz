
# 📘 Day 14: Changing Content and Styles & Event Handling

---

## **1. Changing Content**

* You can **update the text** of any element dynamically using JavaScript.

```html
<h1 id="title">Hello Magic World!</h1>
```

```javascript
const title = document.getElementById("title");
title.textContent = "Welcome to the Magical DOM! 🪄";
title.innerHTML = "Cast your <strong>first spell!</strong>";
```

**Difference:**

* **textContent** → plain text
* **innerHTML** → can include **HTML tags**

---

## **2. Changing Styles Dynamically**

* You can change **color, font size, background**, etc.

```javascript
title.style.color = "purple";
title.style.fontSize = "40px";
title.style.backgroundColor = "lightyellow";
title.style.border = "2px solid gold";
```

> Think of it as **casting a style spell** 🪄: the page **transforms instantly**.

---

## **3. Event Handling**

* Events are **actions performed by the user**: click, hover, keypress, etc.
* You can **respond to these events** with JavaScript.

### 1️⃣ **onclick**

```javascript
const button = document.getElementById("castSpell");
button.onclick = function() {
  alert("You cast Fireball! 🔥");
};
```

### 2️⃣ **addEventListener**

```javascript
button.addEventListener("click", () => {
  console.log("You cast Lightning! ⚡");
});
```

### 3️⃣ Other Common Events

* **mouseover** → when mouse hovers
* **mouseout** → when mouse leaves
* **keydown** → when a key is pressed

```javascript
document.addEventListener("keydown", (e) => {
  console.log(`You pressed: ${e.key} ✨`);
});
```

---

## **4. Real-Life Analogy**

* DOM elements = **puppets**
* Events = **strings or buttons that move puppets**
* Styles = **magic paint or costumes**
* Every click or keypress = **magical energy you control** ⚡🪄

---

## **5. Mini-Project: Spell Casting Game**

**Goal:** Create an interactive magic spell page.

```html
<h1 id="title">Magic Spell Book</h1>
<button id="fireball">Fireball</button>
<button id="heal">Heal</button>
<p id="log"></p>

<script>
const log = document.getElementById("log");

document.getElementById("fireball").addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
  log.textContent = "🔥 Fireball cast!";
});

document.getElementById("heal").addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
  log.textContent = "💚 Heal spell cast!";
});
</script>
```

> Every click changes the **“magic energy”** of the page — a bit like **changing the physics of your environment instantly** 🌟.

---

## 🎯 Classwork

1. Select an element and **change its text content** and **color** when clicked.
2. Add two buttons that **change background color** of the page differently.
3. Use **mouseover** and **mouseout** events to **change an element’s font size** when hovered.

---

## 📝 Assignment

1. Create a **magic potion page** with 3 potions.

   * Clicking each potion changes **text, background color, and logs a spell message**.
2. Add a **key press event** that logs **"Magic key pressed!"** when any key is pressed.
3. Bonus Mini-Project:

   * Build a **Magic Inventory**:

     * List items in a **<ul>**
     * Clicking an item **moves it to a “used items” list**
     * Console logs a magical message

