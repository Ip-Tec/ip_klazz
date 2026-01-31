
# 📘 Day 22: Functional Programming Concepts

---

## **1. Introduction to Functional Programming (FP)**

* Functional programming is a **paradigm where we write code using functions**.
* Key ideas:

  1. **Pure Functions** – same input → same output, no side effects
  2. **Immutability** – don’t change original data
  3. **First-Class Functions** – functions are treated like variables
  4. **Higher-Order Functions** – functions that take or return other functions

> Analogy: FP = **wizardry spells written carefully so they don’t mess up the magical world** 🪄✨

---

## **2. Pure Functions**

* A **pure function** doesn’t modify anything outside its scope.

### Example:

```javascript
// Impure function
let mana = 100;
function castFireball() {
  mana -= 10;
  return mana;
}

// Pure function
function castFireballPure(mana) {
  return mana - 10;
}

console.log(castFireballPure(100)); // 90
console.log(castFireballPure(100)); // 90 (always same output)
```

> Magic analogy: **Pure function = spell that never backfires or changes unrelated magical energies** ⚡

---

## **3. Immutability**

* Avoid changing existing data. Create **new copies** instead.

```javascript
const spells = ["Fireball", "Icebolt"];
const newSpells = [...spells, "Lightning"];
console.log(spells);    // ["Fireball", "Icebolt"]
console.log(newSpells); // ["Fireball", "Icebolt", "Lightning"]
```

> Physics analogy: **Immutability = particles in a magic crystal remain stable even after energy is added** 🪄

---

## **4. First-Class & Higher-Order Functions**

* **First-Class Functions:** Functions can be **assigned to variables, passed as arguments, returned**.
* **Higher-Order Functions:** Functions that **take or return other functions**.

### Example: First-Class Function

```javascript
const cast = function(spell) {
  console.log(`${spell} cast! ✨`);
}

function wizardAction(action) {
  action("Fireball");
}

wizardAction(cast);
```

### Example: Higher-Order Function

```javascript
function createSpell(spell) {
  return function(target) {
    console.log(`${spell} hits ${target}! 💥`);
  }
}

const fireball = createSpell("Fireball");
fireball("Dragon");
```

> Magic analogy: **Higher-order functions = enchanted scrolls that produce spells on demand** 🧙‍♂️

---

## **5. Array Methods for Functional Programming**

* Use **map, filter, reduce, forEach** to avoid loops and side effects.

```javascript
const spells = [
  { name: "Fireball", damage: 50 },
  { name: "Icebolt", damage: 30 },
  { name: "Lightning", damage: 70 },
];

// map: get spell names
const spellNames = spells.map(s => s.name);
console.log(spellNames); // ["Fireball", "Icebolt", "Lightning"]

// filter: strong spells
const strongSpells = spells.filter(s => s.damage > 40);
console.log(strongSpells); // [{name: "Fireball", damage: 50}, {name: "Lightning", damage: 70}]

// reduce: total damage
const totalDamage = spells.reduce((sum, s) => sum + s.damage, 0);
console.log(totalDamage); // 150
```

> Magic analogy: **map/filter/reduce = spells analyzing magical energy, filtering, and combining it efficiently** ⚡

---

## **6. Mini-Project: Magical Spell Dashboard (FP Version)**

**Goal:** Use functional programming to manage spells and calculate stats.

```javascript
const spells = [
  { name: "Fireball", damage: 50 },
  { name: "Icebolt", damage: 30 },
  { name: "Lightning", damage: 70 },
];

// 1. List spell names
const spellNames = spells.map(s => s.name);
console.log("Spell List:", spellNames);

// 2. Strong spells only
const strongSpells = spells.filter(s => s.damage > 40);
console.log("Strong Spells:", strongSpells);

// 3. Total damage of all spells
const totalDamage = spells.reduce((sum, s) => sum + s.damage, 0);
console.log("Total Damage:", totalDamage);
```

> Everything done **immutably** and **functionally** 🪄

---

## 🎯 Classwork

1. Write a **pure function** to calculate spell damage.
2. Use **map** to create an array of spell names.
3. Use **filter** to get spells with damage > 50.
4. Use **reduce** to calculate total mana cost of spells.

---

## 📝 Assignment

1. Build a **Magical Spell Dashboard** using functional programming:

   * List spells
   * Filter strong spells
   * Calculate total damage/mana cost
   * Use **pure functions, map/filter/reduce, and immutability**
2. Bonus Mini-Project:

   * Add a function to **sort spells by damage**
   * Add a **higher-order function** to dynamically create new spells
   * Optional: Create a **wizard-themed UI** with spell stats

---

💡 **Fun Physics/Magic Angle:**

* FP = **clean, controlled magic that doesn’t break the universe** 🌌
* Pure functions = **predictable spell behavior**
* Immutability = **stable magical energy**
* map/filter/reduce = **magical analysis of energy flow**
* Higher-order functions = **magical scrolls producing spells dynamically** 🧙‍♂️

