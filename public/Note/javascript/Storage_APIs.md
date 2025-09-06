
# 📘 Day 25: Local Storage & Session Storage

---

## **1. Introduction**

- Browsers allow wizards (developers) to **store data locally** on a user’s computer.
- Two main types:

  1. **Local Storage** – persists even after closing the browser 🏠
  2. **Session Storage** – persists **only during the current session** ⏳

> Analogy: Local storage = wizard’s **spellbook on a shelf**, session storage = **magic notes on a table while practicing spells** 🪄

---

## **2. Local Storage**

- Stores **key-value pairs** as strings
- Accessible across **browser tabs**

### Basic Example

```javascript
// Save data
localStorage.setItem("spell", "Fireball");

// Retrieve data
const mySpell = localStorage.getItem("spell");
console.log("Stored spell:", mySpell);

// Remove data
localStorage.removeItem("spell");

// Clear all
localStorage.clear();
```

> Magic analogy: **localStorage = enchanted chest that keeps your spells safe forever** 🧙‍♂️✨

---

## **3. Session Storage**

- Stores data for **current browser tab session only**
- Cleared when tab is closed

### Example

```javascript
// Save session spell
sessionStorage.setItem("temporarySpell", "Icebolt");

// Retrieve session spell
console.log(sessionStorage.getItem("temporarySpell"));

// Clear session spell
sessionStorage.clear();
```

> Magic analogy: **sessionStorage = spell parchment that disappears when wizard leaves the tower** 📜

---

## **4. Storing Objects**

- Objects must be **stringified** before storage

```javascript
const spell = { name: "Lightning", power: 70 };

// Save
localStorage.setItem("spellObj", JSON.stringify(spell));

// Retrieve
const retrievedSpell = JSON.parse(localStorage.getItem("spellObj"));
console.log("Spell Object:", retrievedSpell);
```

> Magic analogy: **spell scrolls folded into magical string form to fit in enchanted chest** ✨

---

## **5. Mini-Project: Magical Spell Tracker**

**Goal:** Track spells a wizard has cast using Local and Session Storage

```javascript
// HTML
/*
<input type="text" id="spellInput" placeholder="Enter spell name">
<button id="addSpell">Cast Spell</button>
<ul id="spellList"></ul>
*/

const spellInput = document.getElementById("spellInput");
const addSpellBtn = document.getElementById("addSpell");
const spellList = document.getElementById("spellList");

// Load spells from localStorage
let spells = JSON.parse(localStorage.getItem("spells")) || [];
renderSpells();

addSpellBtn.addEventListener("click", () => {
  const spell = spellInput.value.trim();
  if (!spell) return;

  spells.push(spell);
  localStorage.setItem("spells", JSON.stringify(spells));
  renderSpells();
  spellInput.value = "";
});

function renderSpells() {
  spellList.innerHTML = "";
  spells.forEach((spell) => {
    const li = document.createElement("li");
    li.textContent = spell;
    spellList.appendChild(li);
  });
}
```

> Magic analogy: Each spell cast = **added to wizard’s enchanted spellbook** 🪄

---

## 🎯 Classwork

1. Store a **favorite spell** in localStorage and retrieve it
2. Store a **temporary spell** in sessionStorage and retrieve it
3. Save and retrieve a **spell object** with name and power
4. Bonus: Add a **list of spells** to localStorage and display dynamically

---

## 📝 Assignment

1. Build a **Magical Spell Tracker App**:

   - Add spells
   - Display spell list
   - Save to **localStorage** for persistence
   - Bonus: Use **sessionStorage** for temporary spells

2. Enhancement Mini-Project:

   - Add **delete functionality** for spells
   - Add **spell details (power, type)**
   - Optional: Add **UI animations** for casting and storing spells

---

💡 **Fun Physics/Magic Angle:**

- LocalStorage = **enchanted chest for spells** 🧙‍♂️
- SessionStorage = **temporary magic notes** 📜
- JSON.stringify = **folding spells into magical strings**
- JSON.parse = **unfolding spells to use them again** ✨

Compare this snippet with the one in [ES6 Syntax](./ES6_Syntax):

```javascript
const spells = ["Fireball", "Heal", "Teleport", "Invisibility"];
const [firstSpell, ...otherSpells] = spells;
console.log(`${name} casts ${firstSpell}! 🔥`);
function castRemainingSpells(wizardName, ...spells) {
  console.log(`${wizardName} casts: ${spells.join(", ")} ✨`);
}
castRemainingSpells(name, ...otherSpells);
```
> Destructuring = **unpacking magical scrolls**
> Rest operator = **gathering remaining magical energies** 🌟
> Spread operator = **distributing spells across multiple targets** ⚡

## **6. Bonus Mini-Project: Wizard Duel Simulator**
**Goal:** Simulate a duel between two wizards using Local Storage to track their spells and mana.

```javascript
// HTML
/*
<div id="wizard1">
  <h2>Wizard 1</h2>
  <button id="castSpell1">Cast Spell</button>
</div>
<div id="wizard2">
  <h2>Wizard 2</h2>
  <button id="castSpell2">Cast Spell</button>
</div>
*/

const wizard1 = {
  name: "Merlin",
  spells: ["Fireball", "Lightning"],
  mana: 100,
};

const wizard2 = {
  name: "Gandalf",
  spells: ["Icebolt", "Teleport"],
  mana: 100,
};

// Save wizards to localStorage
localStorage.setItem("wizard1", JSON.stringify(wizard1));
localStorage.setItem("wizard2", JSON.stringify(wizard2));

// Retrieve wizards from localStorage
const retrievedWizard1 = JSON.parse(localStorage.getItem("wizard1"));
const retrievedWizard2 = JSON.parse(localStorage.getItem("wizard2"));

console.log("Wizard 1:", retrievedWizard1);
console.log("Wizard 2:", retrievedWizard2);

document.getElementById("castSpell1").addEventListener("click", () => {
  if (retrievedWizard1.mana >= 20) {
    const spell = retrievedWizard1.spells[Math.floor(Math.random() * retrievedWizard1.spells.length)];
    retrievedWizard1.mana -= 20;
    console.log(`${retrievedWizard1.name} casts ${spell}! Mana left: ${retrievedWizard1.mana}`);
    localStorage.setItem("wizard1", JSON.stringify(retrievedWizard1));
  } else {
    console.log(`${retrievedWizard1.name} is out of mana!`);
  }
});

document.getElementById("castSpell2").addEventListener("click", () => {
  if (retrievedWizard2.mana >= 20) {
    const spell = retrievedWizard2.spells[Math.floor(Math.random() * retrievedWizard2.spells.length)];
    retrievedWizard2.mana -= 20;
    console.log(`${retrievedWizard2.name} casts ${spell}! Mana left: ${retrievedWizard2.mana}`);
    localStorage.setItem("wizard2", JSON.stringify(retrievedWizard2));
  } else {
    console.log(`${retrievedWizard2.name} is out of mana!`);
  }
});
```

---