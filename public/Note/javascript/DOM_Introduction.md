
# 📘 Day 13: Introduction to the DOM & Selecting Elements

---

## **1. What is the DOM?**

* **DOM** = **Document Object Model**.
* Think of it as the **magic blueprint of your webpage** 🪄.
* It turns your HTML page into a **tree of objects** that JavaScript can interact with.

**Magic analogy:**

* HTML = the **skeleton**
* CSS = the **clothes and makeup**
* DOM + JavaScript = the **puppet strings** that make it **move and respond** 🕹️

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello Magic World!</h1>
  </body>
</html>
```

---

## **2. Selecting Elements**

### 1️⃣ **getElementById**

```javascript
const title = document.getElementById("title");
console.log(title.textContent); // Hello Magic World!
```

### 2️⃣ **getElementsByClassName**

```javascript
// HTML: <p class="spell">Fireball</p><p class="spell">Teleport</p>
const spells = document.getElementsByClassName("spell");
console.log(spells[0].textContent); // Fireball
```

### 3️⃣ **getElementsByTagName**

```javascript
const paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length); // number of <p> tags
```

### 4️⃣ **querySelector** & **querySelectorAll**

* **querySelector** → first matching element
* **querySelectorAll** → all matching elements

```javascript
const firstSpell = document.querySelector(".spell");
console.log(firstSpell.textContent);

const allSpells = document.querySelectorAll(".spell");
allSpells.forEach(spell => console.log(spell.textContent));
```

---

## **3. Selecting Elements – Real-Life Analogy**

* **getElementById** → **you know exactly the person you want**
* **getElementsByClassName** → **group of people with the same uniform**
* **querySelectorAll** → **you’re scanning a crowd and picking everyone with glasses** 😎

---

## **4. Changing Elements**

```javascript
const title = document.getElementById("title");
title.textContent = "Welcome to the Magic DOM!";
title.style.color = "purple";
title.style.fontSize = "30px";
```

---

## **5. Mini-Project: Magic Spell Highlighter**

**Goal:** Create a webpage that highlights “magic spells” when clicked.

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Magic Spell Book</h1>
  <p class="spell">Fireball</p>
  <p class="spell">Teleport</p>
  <p class="spell">Invisibility</p>

  <script>
    const spells = document.querySelectorAll(".spell");
    spells.forEach(spell => {
      spell.addEventListener("click", () => {
        spell.style.backgroundColor = "yellow";
        spell.style.fontWeight = "bold";
        console.log(`You cast: ${spell.textContent} 🔮`);
      });
    });
  </script>
</body>
</html>
```

> Fun: Every click is like **casting a spell** 🪄, and the console is your **magical spellbook**.

---

## 🎯 Classwork

1. Select an element by **id**, **class**, and **tag name**, then log its content.
2. Change the text content and color of an <h1> on your page.
3. Select all <p> tags and make their font size **20px**.

---

## 📝 Assignment

1. Create a page with **5 spell names**. When clicked, each spell should **change color** and **log a magical message**.
2. Use **querySelector** to select the first spell and **make it blink** every second (using **setInterval**).
3. Bonus Mini-Project:

   * Create a **“Magic Inventory”** with items in a list.
   * When an item is clicked, it **moves to a “used” list** below.
   * Add **console messages** like: **"You used the Potion! 🍵"**

---
