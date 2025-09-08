
# 📘 Day 17: Template Literals, Destructuring, Spread & Rest Operators

---

## **1. Template Literals**

- Template literals use **backticks (\`)** instead of quotes.
- They allow **multi-line strings** and **interpolation** (\`${}\`) — like **casting a string spell** 🪄 that can adapt dynamically.

### Example:

```javascript
const name = "Merlin";
const spell = "Fireball";
const damage = 50;

// Old way
console.log(name + " casts " + spell + " and deals " + damage + " damage.");

// Template literal way
console.log(`${name} casts ${spell} and deals ${damage} damage! 🔥`);
```

### Multi-line Example:

```javascript
const incantation = `
Oh mighty dragons,
Grant me the power of ${spell},
And strike with ${damage} damage!
`;
console.log(incantation);
```

> Magic analogy: Template literals = **magic scrolls that adjust text automatically** ✨

---

## **2. Destructuring**

- **Destructuring** allows you to extract **values from arrays or objects** into variables — like **pulling ingredients from a magical cauldron** 🪄.

### Array Destructuring

```javascript
const spells = ["Fireball", "Teleport", "Heal"];
const [first, second, third] = spells;

console.log(first); // Fireball
console.log(second); // Teleport
```

### Object Destructuring

```javascript
const wizard = { name: "Gandalf", age: 2019, power: "Light" };
const { name, power } = wizard;

console.log(`${name} uses ${power}!`);
```

### Destructuring in Function Parameters

```javascript
function castSpell({ name, power }) {
  console.log(`${name} casts ${power} ✨`);
}
castSpell(castSpell);
```

---

## **3. Spread Operator \`...\`**

- **Spread** expands an array or object into **individual elements** — like **magical duplication of ingredients** 🪄.

### Arrays

```javascript
const spells1 = ["Fireball", "Heal"];
const spells2 = ["Teleport", "Invisibility"];

const allSpells = [...spells1, ...spells2];
console.log(allSpells); // ["Fireball", "Heal", "Teleport", "Invisibility"]
```

### Objects

```javascript
const wizard1 = { name: "Merlin", power: "Fire" };
const wizard2 = { ...wizard1, age: 300 };
console.log(wizard2); // { name: "Merlin", power: "Fire", age: 300 }
```

---

## **4. Rest Operator \`...\`**

- **Rest** gathers remaining elements into **an array** — like **collecting leftover magical ingredients** 🧪.

### Arrays

```javascript
const spells = ["Fireball", "Heal", "Teleport", "Invisibility"];
const [firstSpell, secondSpell, ...otherSpells] = spells;

console.log(firstSpell); // Fireball
console.log(otherSpells); // ["Teleport", "Invisibility"]
```

### Function Parameters

```javascript
function castMultipleSpells(caster, ...spells) {
  console.log(`${caster} casts: ${spells.join(", ")}`);
}
castMultipleSpells("Merlin", "Fireball", "Teleport", "Heal");
```

> Magic analogy: **Spread = casting multiple spells at once**, **Rest = collecting leftover spells for later use** ⚡

---

## **5. Mini-Project: Magical Spell Manager**

**Goal:** Create a small program that manages spells using template literals, destructuring, spread, and rest.

```javascript
const wizard = { name: "Gandalf", level: 99 };
const spells = ["Fireball", "Heal", "Teleport", "Invisibility"];

// Use destructuring
const { name } = wizard;
const [firstSpell, ...otherSpells] = spells;

// Display first spell using template literal
console.log(`${name} casts ${firstSpell}! 🔥`);

// Cast multiple remaining spells using rest operator
function castRemainingSpells(wizardName, ...spells) {
  console.log(`${wizardName} casts: ${spells.join(", ")} ✨`);
}
castRemainingSpells(name, ...otherSpells);

// Combine arrays using spread
const newSpells = ["Lightning", "Icebolt"];
const allSpells = [...spells, ...newSpells];
console.log(`All available spells: ${allSpells.join(", ")}`);
```

---

## 🎯 Classwork

1. Create an array of 5 magical items and **destructure the first two**.
2. Create an object of a wizard and **destructure name and power**.
3. Combine two arrays of spells using the **spread operator**.
4. Write a function that accepts **any number of spells** using the **rest operator** and logs them.

---

## 📝 Assignment

1. Build a **spellbook app**:

   - Array of spells
   - Destructure the first spell as the **main spell**
   - Rest operator collects remaining spells
   - Use template literals to display the cast sequence

2. Combine two or more arrays of spells using the spread operator.
3. Bonus Mini-Project:

   - Create a **wizard battle simulator**
   - Wizards have arrays of spells and objects of stats
   - Use destructuring, spread, rest, and template literals to **log magical attacks dynamically**

---

💡 **Fun Physics/Magic Angle:**

- Destructuring = **extracting magical energy from a potion** 🧪
- Spread = **splitting one spell into multiple attacks simultaneously** ⚡
- Rest = **collecting leftover magical power** for future use
- Template literals = **magical scrolls that adapt the incantation text automatically** 📜

- Think of these features as **tools in your magical toolkit** that let you manipulate data like a wizard manipulates spells! 🪄
- Every operation changes the **“physics” of your code** instantly, making it more dynamic and powerful!
  ---## **6. Mini-Project: Interactive Spell List**

**Goal:** Create a dynamic spell list where you can **add or remove spells**.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Interactive Spell List</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f8ff;
        padding: 20px;
      }
      h1 {
        color: #4b0082;
      }
      input {
        padding: 8px;
        width: 300px;
        margin-right: 10px;
      }
      button {
        padding: 8px;
      }
      ul {
        list-style: none;
        padding: 0;
      }
      li {
        padding: 8px;
        margin: 5px 0;
        background-color: #fff8dc;
        border: 1px solid #ccc;
        cursor: pointer;
        transition: 0.3s;
      }
      li:hover {
        background-color: #e6e6fa;
      }
    </style>
  </head>
  <body>
    <h1>✨ Interactive Spell List</h1>
    <input type="text" id="spellInput" placeholder="Enter a spell" />
    <button id="addSpell">Add Spell</button>
    <ul id="spellList"></ul>

    <script>
      // spell.js
      const addBtn = document.getElementById("addSpell");
      const spellList = document.getElementById("spellList");
      const spellInput = document.getElementById("spellInput");

      function addSpell() {
        const spellText = spellInput.value.trim();
        if (spellText === "") return;

        const li = document.createElement("li");
        li.textContent = spellText;

        // Remove spell on click
        li.addEventListener("click", () => li.remove());

        spellList.appendChild(li);
        spellInput.value = "";
      }

      addBtn.addEventListener("click", addSpell);
      spellInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addSpell();
      });
    </script>
  </body>
</html>
```

---
