
# 📘 Day 24: JavaScript Memory & Performance Best Practices

---

## **1. Introduction**

- JavaScript automatically **manages memory** using **garbage collection**.
- Memory leaks and poor practices can **slow down your wizard’s spells** ⚡.
- Best practices help keep your code **fast, clean, and magical** 🪄

> Analogy: Your wizard’s brain (memory) is limited. If spells pile up, you slow down!

---

## **2. Memory Management**

- **Memory Allocation:** storing variables, objects, functions
- **Garbage Collection:** automatically removes memory not in use

### Example

```javascript
let spell = { name: "Fireball", power: 50 };
// After spell is no longer needed
spell = null; // free memory for GC
```

> Magic analogy: Clearing old spell scrolls = freeing memory for new spells 📜✨

---

## **3. Common Memory Pitfalls**

1. **Global Variables** – stay in memory forever

```javascript
wizardPower = 100; // avoid this!
```

2. **Closures keeping references** – useful but can leak memory

```javascript
function castSpell() {
  const spell = "Fireball";
  return function () {
    console.log(spell);
  }; // spell stays in memory
}
```

3. **Unremoved Event Listeners** – keep DOM nodes alive

```javascript
button.addEventListener("click", doSpell); // remove with removeEventListener
```

> Magic analogy: Ghost spells lingering = memory leaks 👻

---

## **4. Performance Best Practices**

1. **Use `let`/`const` instead of `var`** – block scope avoids leaks
2. **Avoid excessive DOM manipulation** – batch updates
3. **Debounce and throttle events** – avoid too many spell triggers
4. **Use efficient loops** – prefer `for…of`, `.map`, `.filter` over nested loops
5. **Lazy loading** – load spells (scripts) only when needed

### Example: Debouncing Spell Cast

```javascript
function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

const castFireball = () => console.log("🔥 Fireball!");
const debouncedCast = debounce(castFireball, 500);

window.addEventListener("resize", debouncedCast); // only fires after 500ms pause
```

> Magic analogy: **Debounce = wizard only casts spell once after focus, not spamming the universe** ✨

---

## **5. Mini-Project: Efficient Spell Casting Simulator**

**Goal:** Manage spells efficiently and avoid memory leaks.

```javascript
const spells = [];

function createSpell(name, power) {
  const spell = { name, power };
  spells.push(spell);
  return spell;
}

function removeSpell(spell) {
  const index = spells.indexOf(spell);
  if (index !== -1) spells.splice(index, 1); // free memory
}

const fireball = createSpell("Fireball", 50);
const icebolt = createSpell("Icebolt", 30);

console.log("Spells:", spells);

removeSpell(fireball); // memory cleanup
console.log("After removal:", spells);
```

> This demonstrates **memory management with spell creation and removal** 🪄

---

## 🎯 Classwork

1. Create a **function that generates spells** and stores them in an array
2. Remove spells that are **no longer needed**
3. Practice using `let` and `const` instead of `var`
4. Bonus: Implement a **debounced spell-casting function**

---

## 📝 Assignment

1. Build a **Spell Manager App**:

   - Create, list, and remove spells
   - Ensure removed spells **free memory**
   - Debounce spell casting

2. Bonus Mini-Project:

   - Track **mana and energy** for each spell
   - Use **lazy loading** for spell modules
   - Display **performance tips in a wizard dashboard**

---

💡 **Fun Physics/Magic Angle:**

- Memory leaks = **ghost spells haunting your wizard tower** 👻
- Garbage collection = **magical cleanup by energy spirits** ✨
- Debouncing = **wizard focuses energy before casting repeatedly** ⚡
- Lazy loading = **summon only necessary spells to conserve magical power** 🪄

## **3. Higher-Order Functions (HOFs)**

**Goal:** Create a small program that uses higher-order functions to manage spells.

```javascript
class Wizard {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.mana = 100;
  }

  castSpell(spell) {
    console.log(`${this.name} casts ${spell} with power ${this.power}! 🔥`);
    this.mana -= 10;
  }

  showMana() {
    console.log(`${this.name} has ${this.mana} mana left.`);
  }
}

const merlin = new Wizard("Merlin", "Fire");
merlin.castSpell("Fireball");
merlin.showMana();
merlin.castSpell("Lightning Strike");
merlin.showMana();
```

> This demonstrates **object-oriented programming** using **classes and methods** 🧙‍♂️

---

## 🎯 Classwork

1. Create a **Wizard class** with properties for name, power, and mana.
2. Add a method to **cast spells** and reduce mana.
3. Implement a method to **show remaining mana**.
4. Bonus: Add a method to **regenerate mana** over time.

---

## 📝 Assignment

1. Build a **Wizard Battle Simulator**:

   - Create multiple wizard objects
   - Each wizard can cast spells and manage mana
   - Use classes and methods to encapsulate behavior

2. Use **inheritance** to create **Apprentice and Master classes** with special abilities.
3. Bonus Mini-Project:

   - Create a **turn-based battle system** where wizards take turns casting spells
   - Use **getters and setters** to manage health and mana
   - Optional: Create a **visual interface** to display wizard stats and actions

---

💡 **Fun Physics/Magic Angle:**

- Classes = **blueprints for creating magical beings**
- Objects = **actual wizards in the magical world**
- Methods = **spells that wizards can cast**
- Modules = \*\*scrolls or spellbooks shared among wizards
- Inheritance = **apprentices learning from masters** 🪄

---

## **6. Summary**

**Goal:** Create a small program that demonstrates async error handling with try/catch/finally.

```javascript
function castSpell(name, mana) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mana < 10) reject("❌ Not enough mana!");
      else if (Math.random() > 0.5) resolve(`${name} cast successfully! ✨`);
      else reject(`${name} fizzled! 💥`);
    }, 1000);
  });
}

async function wizardBattle() {
  const spells = [
    { name: "Fireball", mana: 15 },
    { name: "Icebolt", mana: 5 },
    { name: "Lightning", mana: 20 },
  ];

  for (const spell of spells) {
    try {
      const result = await castSpell(spell.name, spell.mana);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Spell casting attempt finished.");
    }
  }
}

wizardBattle();
```

> Demonstrates: **async error handling, try/catch/finally, random success/failure** ⚡

---
