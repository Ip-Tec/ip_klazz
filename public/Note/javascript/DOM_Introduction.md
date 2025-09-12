# 📘 Day 13: Introduction to the DOM & Selecting Elements

---

## **1. What is the DOM?**

- **DOM** = **Document Object Model**.
- Think of it as the **magic blueprint of your webpage** 🪄.
- It turns your HTML page into a **tree of objects** that JavaScript can interact with.

**Magic analogy:**

- HTML = the **skeleton**
- CSS = the **clothes and makeup**
- DOM + JavaScript = the **puppet strings** that make it **move and respond** 🕹️

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

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello Magic World!</h1>
    <script>
      const title = document.getElementById("title");
      console.log(title.textContent); // Hello Magic World!
    </script>
  </body>
</html>
```

### 2️⃣ **getElementsByClassName**

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello Magic World!</h1>
    <script>
      // HTML: <p class="spell">Fireball</p><p class="spell">Teleport</p>
      const spells = document.getElementsByClassName("spell");
      console.log(spells[0].textContent); // Fireball
    </script>
  </body>
</html>
```

### 3️⃣ **getElementsByTagName**

```html
<!DOCTYPE html>
<html>
  <body>
    <p id="title">Hello Magic World!</p>
    <script>
      const paragraphs = document.getElementsByTagName("p");
      console.log(paragraphs.length); // number of <p> tags
    </script>
  </body>
</html>
```

### 4️⃣ **querySelector** & **querySelectorAll**

- **querySelector** → first matching element
- **querySelectorAll** → all matching elements

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello Magic World!</h1>
    <p class="spell">Fireball</p>
    <script>
      const firstSpell = document.querySelector(".spell");
      console.log(firstSpell.textContent);

      const allSpells = document.querySelectorAll(".spell");
      allSpells.forEach((spell) => console.log(spell.textContent));
    </script>
  </body>
</html>
```

---

## **3. Selecting Elements – Real-Life Analogy**

- **getElementById** → **you know exactly the person you want**
- **getElementsByClassName** → **group of people with the same uniform**
- **querySelectorAll** → **you’re scanning a crowd and picking everyone with glasses** 😎

---

## **4. Changing Elements**

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 id="title">Hello Magic World!</h1>
    <script>
      const title = document.getElementById("title");
      title.textContent = "Welcome to the Magic DOM!";
      title.style.color = "purple";
      title.style.fontSize = "30px";
    </script>
  </body>
</html>
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
      spells.forEach((spell) => {
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

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Class Work</title>
  </head>
  <body>
    <h1 id="main-title">Welcome to the Magic DOM Class!</h1>
    <p class="info">This is the first paragraph.</p>
    <p class="info">This is the second paragraph.</p>
    <p>This is a generic paragraph.</p>
    <script>
      // 1. Select by id, class, and tag name
      const titleById = document.getElementById("main-title");
      console.log(titleById.textContent);

      const infoByClass = document.getElementsByClassName("info");
      console.log(infoByClass[0].textContent);

      const paragraphsByTag = document.getElementsByTagName("p");
      console.log(paragraphsByTag[2].textContent);

      // 2. Change text content and color of h1
      titleById.textContent = "Magic DOM Class is Awesome!";
      titleById.style.color = "blue";

      // 3. Select all <p> tags and change font size
      const allParagraphs = document.querySelectorAll("p");
      allParagraphs.forEach((p) => {
        p.style.fontSize = "20px";
      });
    </script>
  </body>
</html>
```

---

## 📝 Assignment

1. Create a page with **5 spell names**. When clicked, each spell should **change color** and **log a magical message**.
2. Use **querySelector** to select the first spell and **make it blink** every second (using **setInterval**).
3. Bonus Mini-Project:

   - Create a **“Magic Inventory”** with items in a list.
   - When an item is clicked, it **moves to a “used” list** below.
   - Add **console messages** like: **"You used the Potion! 🍵"**

---

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Magic Spell Page</title>
    <style>
      .blink {
        animation: blink-animation 1s steps(5, start) infinite;
      }
      @keyframes blink-animation {
        to {
          visibility: hidden;
        }
      }
    </style>
  </head>
  <body>
    <h1 id="spell-book">Magic Spell Book</h1>
    <p class="spell">Fireball</p>
    <p class="spell">Teleport</p>
    <p class="spell">Invisibility</p>
    <p class="spell">Shield</p>
    <p class="spell">Heal</p>

    <h2>Magic Inventory</h2>
    <ul id="inventory">
      <li class="item">Potion</li>
      <li class="item">Elixir</li>
      <li class="item">Scroll</li>
    </ul>

    <h2>Used Items</h2>
    <ul id="used-items"></ul>

    <script>
      // Spell click functionality
      const spells = document.querySelectorAll(".spell");
      spells.forEach((spell) => {
        spell.addEventListener("click", () => {
          spell.style.color = "red";
          console.log(`You cast: ${spell.textContent} 🔮`);
        });
      });

      // Make the first spell blink
      const firstSpell = document.querySelector(".spell");
      firstSpell.classList.add("blink");

      // Inventory item click functionality
      const items = document.querySelectorAll(".item");
      const usedItemsList = document.getElementById("used-items");
      items.forEach((item) => {
        item.addEventListener("click", () => {
          const usedItem = document.createElement("li");
          usedItem.textContent = item.textContent;
          usedItemsList.appendChild(usedItem);
          console.log(`You used the ${item.textContent}! 🍵`);
          item.remove();
        });
      });
    </script>
  </body>
</html>
```

---