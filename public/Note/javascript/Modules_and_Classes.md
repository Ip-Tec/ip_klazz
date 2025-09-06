Perfect! Let’s make **Day 18: Modules (Import & Export), Classes and OOP Basics** **detailed, practical, and engaging**, including **examples, mini-projects, classwork, assignments, and magical/physics analogies**.

---

# 📘 Day 18: Modules, Classes & OOP Basics

---

## **1. Modules in JavaScript**

* Modules allow us to **split code into reusable files** — like **magical scrolls that can be shared across wizards** 🪄.
* Use `export` to **send functions, objects, or variables** from a file.
* Use `import` to **bring them into another file**.

### Example:

**mathSpells.js**

```javascript
export function fireball(damage) {
  console.log(`🔥 Fireball hits for ${damage} damage!`);
}

export const mana = 100;
```

**main.js**

```javascript
import { fireball, mana } from './mathSpells.js';

console.log(`Wizard has ${mana} mana.`);
fireball(50); // 🔥 Fireball hits for 50 damage!
```

> Magic analogy: **Export = sending spells in a scroll**, **Import = reading scrolls in your spellbook** ✨

---

## **2. Classes in JavaScript**

* Classes allow us to **define blueprints for objects** — like **wizard templates** 🧙.
* Contains **properties** (attributes) and **methods** (actions).

### Basic Class Example:

```javascript
class Wizard {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.mana = 100;
  }

  castSpell(spell) {
    console.log(`${this.name} casts ${spell} using ${this.power} power! ✨`);
    this.mana -= 10;
  }

  showMana() {
    console.log(`${this.name} has ${this.mana} mana left.`);
  }
}

const merlin = new Wizard("Merlin", "Fire");
merlin.castSpell("Fireball");
merlin.showMana();
```

> Magic analogy: **Class = a wizard blueprint**, **Objects = actual wizards** 🧙‍♂️

---

## **3. Inheritance**

* **Inheritance** allows one class to **reuse code from another**.
* Like **apprentices learning from master wizards** 🪄.

```javascript
class Apprentice extends Wizard {
  constructor(name, power, level) {
    super(name, power); // call parent constructor
    this.level = level;
  }

  apprenticeSpell() {
    console.log(`${this.name} casts a weak spell, level ${this.level} 🔮`);
  }
}

const harry = new Apprentice("Harry", "Lightning", 1);
harry.castSpell("Thunderbolt"); // inherited from Wizard
harry.apprenticeSpell();
```

---

## **4. Getters and Setters**

* **Getters** retrieve properties.
* **Setters** set or update properties with validation — like **magical protections on spellbooks** 🪄.

```javascript
class Wizard {
  constructor(name, mana) {
    this.name = name;
    this._mana = mana; // use underscore for private convention
  }

  get mana() {
    return this._mana;
  }

  set mana(value) {
    if(value < 0) {
      console.log("Mana cannot be negative!");
    } else {
      this._mana = value;
    }
  }
}

const merlin = new Wizard("Merlin", 100);
merlin.mana = -50; // Mana cannot be negative!
console.log(merlin.mana); // 100
```

---

## **5. Mini-Project: Wizard Battle Simulator**

**Goal:** Use **modules, classes, inheritance, and OOP principles** to simulate wizard battles.

**wizard.js (Module)**

```javascript
export class Wizard {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.mana = 100;
  }

  castSpell(spell, target) {
    console.log(`${this.name} casts ${spell} on ${target.name}! 🔥`);
    target.mana -= 10;
  }
}
```

**main.js**

```javascript
import { Wizard } from './wizard.js';

const merlin = new Wizard("Merlin", "Fire");
const gandalf = new Wizard("Gandalf", "Lightning");

merlin.castSpell("Fireball", gandalf);
console.log(`${gandalf.name} has ${gandalf.mana} mana left.`);
```

**Enhancements:**

* Add **Apprentice class** extending Wizard
* Add **getters/setters** for mana and health
* Add **multiple spells array** and pick random spell each turn
* Optional: Create a **full turn-based wizard duel** using modules

---

## 🎯 Classwork

1. Create a **Wizard class** with name, power, and mana.
2. Add **castSpell method** that decreases mana.
3. Create an **Apprentice class** extending Wizard and add a special spell.
4. Test creating multiple wizard objects and calling their methods.

---

## 📝 Assignment

1. Build a **Wizard Battle Simulator** using modules:

   * Export Wizard class
   * Import it into main.js
   * Create 2-3 wizard objects
   * Simulate casting spells and decreasing mana
2. Use **inheritance** to create **Apprentice and Master classes**
3. Use **getters and setters** to validate mana and health
4. Bonus Mini-Project:

   * Turn it into a **turn-based battle game**
   * Add **random spells** and **console logs for magic effects**
   * Optional UI: display mana and actions on HTML page

---

💡 **Fun Physics/Magic Angle:**

* Classes = **magical blueprints**
* Objects = **actual wizards in the magical world**
* Methods = **spells that wizards can cast**
* Modules = **scrolls or spellbooks shared among wizards**
* Inheritance = **apprentices learning from masters** 🪄

---
**Bonus**: Using Sets and Maps with Classes

```javascript
function cryptoMap() {
  const cryptoPrices = new Map();
  cryptoPrices.set("bitcoin", 30000);
  cryptoPrices.set("ethereum", 2000);
  cryptoPrices.set("dogecoin", 0.25);

  // Get price of a specific cryptocurrency
  console.log(`Price of Bitcoin: $${cryptoPrices.get("bitcoin")}`);

  // Iterate over all cryptocurrencies
  for (const [name, price] of cryptoPrices) {
    console.log(`Cryptocurrency: ${name}, Price: $${price}`);
  }
}
async function fetchCryptoPrices() {
  const response = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
  );
  const data = await response.json();
  console.log(data);
}
cryptoMap();
fetchCryptoPrices();
```

---