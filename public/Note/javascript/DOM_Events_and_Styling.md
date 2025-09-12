# 📘 Day 14: Changing Content and Styles & Event Handling

---

## **1. Changing Content**

- You can **update the text** of any element dynamically using JavaScript.

```html
<h1 id="title">Hello Magic World!</h1>
<script>
  const title = document.getElementById("title");
  title.textContent = "Welcome to the Magical DOM! 🪄";
  title.innerHTML = "Cast your <strong>first spell!</strong>";
</script>
```

**Difference:**

- **textContent** → plain text
- **innerHTML** → can include **HTML tags**

---

## **2. Changing Styles Dynamically**

- You can change **color, font size, background**, etc.

```html
<h1 id="title">Style Me!</h1>
<script>
  const title = document.getElementById("title");
  title.style.color = "purple";
  title.style.fontSize = "40px";
  title.style.backgroundColor = "lightyellow";
  title.style.border = "2px solid gold";
</script>
```

> Think of it as **casting a style spell** 🪄: the page **transforms instantly**.

---

## **3. Event Handling**

- Events are **actions performed by the user**: click, hover, keypress, etc.
- You can **respond to these events** with JavaScript.

### 1️⃣ **onclick**

```html
<button id="castSpell">Cast Fireball</button>
<script>
  const button = document.getElementById("castSpell");
  button.onclick = function () {
    alert("You cast Fireball! 🔥");
  };
</script>
```

### 2️⃣ **addEventListener**

```html
<button id="lightning">Cast Lightning</button>
<script>
  const button = document.getElementById("lightning");
  button.addEventListener("click", () => {
    console.log("You cast Lightning! ⚡");
  });
</script>
```

### 3️⃣ Other Common Events

- **mouseover** → when mouse hovers

```html
<button id="hoverButton">Hover over me!</button>
<script>
  const hoverButton = document.getElementById("hoverButton");
  hoverButton.addEventListener("mouseover", () => {
    hoverButton.style.fontSize = "24px";
  });
  hoverButton.addEventListener("mouseout", () => {
    hoverButton.style.fontSize = "16px";
  });
</script>
```

- **mouseout** → when mouse leaves
- **keydown** → when a key is pressed

Example of a keydown event

```html
<button id="button">Press me</button>
<script>
  const button = document.getElementById("button");
  button.addEventListener("keydown", (e) => {
    console.log(`You pressed: ${e.key} ✨`);
  });
</script>
```

---

## **4. Real-Life Analogy**

- DOM elements = **puppets**
- Events = **strings or buttons that move puppets**
- Styles = **magic paint or costumes**
- Every click or keypress = **magical energy you control** ⚡🪄

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

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Class Work</title>
  </head>
  <body>
    <h1 id="myTitle">Click Me!</h1>
    <button id="button1">Button 1</button>
    <button id="button2">Button 2</button>
    <p id="hoverText">Hover over me!</p>
    <script>
      // 1. Change text content and color on click
      const myTitle = document.getElementById("myTitle");
      myTitle.addEventListener("click", () => {
        myTitle.textContent = "You clicked me!";
        myTitle.style.color = "blue";
      });

      // 2. Change background color with buttons
      document.getElementById("button1").addEventListener("click", () => {
        document.body.style.backgroundColor = "lightblue";
      });
      document.getElementById("button2").addEventListener("click", () => {
        document.body.style.backgroundColor = "lightgreen";
      });

      // 3. Change font size on hover
      const hoverText = document.getElementById("hoverText");
      hoverText.addEventListener("mouseover", () => {
        hoverText.style.fontSize = "24px";
      });
      hoverText.addEventListener("mouseout", () => {
        hoverText.style.fontSize = "16px";
      });
    </script>
  </body>
</html>
```

---

## 📝 Assignment

1. Create a **magic potion page** with 3 potions.

   - Clicking each potion changes **text, background color, and logs a spell message**.

2. Add a **key press event** that logs **"Magic key pressed!"** when any key is pressed.
3. Bonus Mini-Project:

   - Build a **Magic Inventory**:

     - List items in a **<ul>**
     - Clicking an item **moves it to a “used items” list**
     - Console logs a magical message

---

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Spell List</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        background: lightgray;
        margin: 5px 0;
        padding: 10px;
        cursor: pointer;
      }
      li:hover {
        background: gray;
        color: white;
      }
    </style>
  </head>
  <body>
    <h1>My Spell List</h1>
    <input type="text" id="newSpell" placeholder="Enter a new spell" />
    <button id="addSpell">Add Spell</button>
    <ul id="spellList">
      <li>Fireball</li>
      <li>Teleport</li>
      <li>Invisibility</li>
    </ul>
  </body>
  <script>
    const addSpellButton = document.getElementById("addSpell");
    const newSpellInput = document.getElementById("newSpell");
    const spellList = document.getElementById("spellList");

    addSpellButton.addEventListener("click", () => {
      const newSpell = newSpellInput.value.trim();
      if (newSpell) {
        const li = document.createElement("li");
        li.textContent = newSpell;
        spellList.appendChild(li);
        newSpellInput.value = "";
      }
    });
    spellList.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        e.target.style.color = "purple";
        console.log(`You cast ${e.target.textContent}! ✨`);
      }
    });
    document.addEventListener("keydown", () => {
      console.log("Magic key pressed!");
    });
  </script>
</html>
```

---
