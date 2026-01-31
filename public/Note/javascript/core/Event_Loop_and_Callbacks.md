
# 📘 Day 21: Event Loop, Callbacks, and Higher-Order Functions

---

## **1. Introduction to the Event Loop**

* JavaScript is **single-threaded**, meaning it can do **one thing at a time**.
* The **event loop** allows JavaScript to **handle asynchronous tasks** without blocking other code.
* Think of it like **a wizard’s mind juggling multiple spells** at the same time 🧙‍♂️✨.

### Example

```javascript
console.log("Start casting spells");

setTimeout(() => {
  console.log("🔥 Fireball cast!");
}, 2000);

console.log("Prepare the wand");
```

**Output:**

```
Start casting spells
Prepare the wand
🔥 Fireball cast!  (after 2 seconds)
```

> Magic analogy: **setTimeout** = **delayed spell casting**, event loop = **wizard juggling spells in time** 🪄

---

## **2. Callbacks**

* A **callback** is a function passed to another function to run **later**.
* Callbacks are used for asynchronous operations like **waiting for spells to complete**.

### Example

```javascript
function castSpell(spell, callback) {
  console.log(`🔮 Casting ${spell}...`);
  setTimeout(() => {
    console.log(`${spell} has been cast!`);
    callback();
  }, 2000);
}

castSpell("Fireball", () => {
  console.log("✨ Spell finished, ready for next!");
});
```

> Magic analogy: **Callback = apprentice waiting for master wizard to finish spell before acting** ⚡

---

## **3. Higher-Order Functions**

* **Higher-Order Functions (HOF)** can **take functions as arguments** or **return functions**.
* Very powerful for **managing spells** dynamically.

### Example: Functions as Arguments

```javascript
function cast(spell, onSuccess) {
  console.log(`Casting ${spell}...`);
  setTimeout(() => {
    console.log(`${spell} succeeded! ✨`);
    onSuccess();
  }, 1000);
}

function celebrate() {
  console.log("🎉 Wizard dances in victory!");
}

cast("Lightning", celebrate);
```

### Example: Functions that Return Functions

```javascript
function createSpell(spell) {
  return function(target) {
    console.log(`${spell} hits ${target}! 💥`);
  }
}

const fireball = createSpell("Fireball");
fireball("Dragon"); // Fireball hits Dragon! 💥
```

> Magic analogy: HOF = **wizard scroll that summons another spell scroll dynamically** 🪄

---

## **4. Mini-Project: Spell Scheduler**

**Goal:** Create a small program that schedules multiple spells with callbacks and higher-order functions.

```javascript
function scheduleSpell(spell, time, callback) {
  console.log(`⏳ Scheduling ${spell}...`);
  setTimeout(() => {
    console.log(`✨ ${spell} cast successfully!`);
    callback?.();
  }, time);
}

// Higher-Order function to chain spells
function chainSpells(spells) {
  if(spells.length === 0) return;
  
  const [firstSpell, ...rest] = spells;
  scheduleSpell(firstSpell.name, firstSpell.time, () => chainSpells(rest));
}

const spellList = [
  { name: "Fireball", time: 1000 },
  { name: "Icebolt", time: 1500 },
  { name: "Lightning Strike", time: 1200 }
];

chainSpells(spellList);
```

> This demonstrates **asynchronous spell scheduling** using **callbacks and HOFs** 🌟

---

## 🎯 Classwork

1. Create a **callback** function that runs after a spell is cast.
2. Create a **higher-order function** that takes a spell name and returns a function to attack a target.
3. Schedule 2-3 spells using **setTimeout** and callbacks.

---

## 📝 Assignment

1. Build a **Magical Spell Scheduler**:

   * Schedule multiple spells to cast at different times
   * Use callbacks to perform an action after each spell
   * Use a **higher-order function** to generate new spells dynamically
2. Bonus Mini-Project:

   * Add **success/failure simulation** for each spell
   * Log magical effects using **template literals**
   * Optional: Create a **visual timeline** on an HTML page showing when spells are cast

---

💡 **Fun Physics/Magic Angle:**

* Event Loop = **wizard’s mind juggling multiple spells without chaos** 🧠
* Callback = **apprentice acting after the master finishes spell**
* HOF = **magical scroll that generates other spells**
* setTimeout = **delayed spell casting, like quantum timing** ⏳

