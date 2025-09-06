
# 📘 Day 23: Error Handling (**try…catch**, Async Errors)

---

## **1. Introduction to Error Handling**

- Sometimes spells fail, or APIs don’t respond — **errors happen**! ⚡
- JavaScript provides **try…catch** to **handle errors gracefully**.
- Helps your code **avoid crashing** — like a **wizard deflecting magical backfires** 🧙‍♂️✨

---

## **2. Basic try…catch**

```javascript
try {
  console.log("Casting Fireball...");
  throw new Error("💥 Spell misfire!"); // simulate an error
} catch (error) {
  console.log("Error caught:", error.message);
} finally {
  console.log("🪄 Spell attempt finished, mana recalculated.");
}
```

**Output:**

```
Casting Fireball...
Error caught: 💥 Spell misfire!
🪄 Spell attempt finished, mana recalculated.
```

> Magic analogy: **try = attempt spell**, **catch = block misfires**, **finally = always recharge mana**

---

## **3. Throwing Custom Errors**

- You can create **your own magical errors**.

```javascript
function castSpell(mana) {
  if (mana < 10) {
    throw new Error("Not enough mana to cast spell!");
  }
  console.log("✨ Spell cast successfully!");
}

try {
  castSpell(5);
} catch (error) {
  console.log("Error:", error.message);
}
```

> Analogy: Spellbook checks your **magical reserves** before casting.

---

## **4. Async Errors with Promises & Async/Await**

- Promises can **fail**, so we must handle errors.

### Example: Promise with Error

```javascript
const castSpell = new Promise((resolve, reject) => {
  const success = false;
  setTimeout(() => {
    success ? resolve("🔥 Fireball success!") : reject("💥 Fireball failed!");
  }, 1000);
});

castSpell
  .then((result) => console.log(result))
  .catch((error) => console.log("Promise Error:", error));
```

### Example: Async/Await with **try…catch**

```javascript
async function castMagic() {
  try {
    const result = await castSpell;
    console.log(result);
  } catch (error) {
    console.log("Async Error Caught:", error);
  } finally {
    console.log("🔮 Spell attempt finished.");
  }
}

castMagic();
```

> Magic analogy: Async spells = **waiting for magical energy to arrive, try…catch = deflect energy misfires**

---

## **5. Mini-Project: Magical Spell Simulator with Error Handling**

**Goal:** Simulate spell casting with **success/failure**, handle errors, and recover gracefully.

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
      console.log("Error:", error);
    } finally {
      console.log("Mana recalculated. 🪄");
    }
  }
}

wizardBattle();
```

> Demonstrates: **async error handling, try/catch/finally, random success/failure** ⚡

---

## 🎯 Classwork

1. Create a function that **throws an error if mana < 10**.
2. Wrap it in **try…catch** to handle the error.
3. Use **finally** to log **“Spell attempt finished”**.
4. Bonus: Simulate **a Promise-based spell** and handle errors with **.catch()**.

---

## 📝 Assignment

1. Build a **Magical Spell Game with Error Handling**:

   - Array of spells with random success/failure
   - Handle errors for **low mana** and **failed spells**
   - Log results using **try…catch…finally**

2. Bonus Mini-Project:

   - Use **Async/Await** for multiple spell casts
   - Add **recovery mechanic**: if a spell fails, reduce mana slightly but allow retry
   - Optional: Display **magical animations** for success and errors

---

💡 **Fun Physics/Magic Angle:**

- Errors = **magical backfires or misfires** 💥
- **try** = **attempt spell carefully**
- **catch** = **magical shield to absorb misfires** 🛡️
- **finally** = **always recharge mana and reset magical state** 🔮
- Async/Await errors = **quantum uncertainty in spell timing** ⏳
- Promises = **magical contracts that may succeed or fail** 📜
- Error handling = **wizard’s reflexes to adapt to magical chaos** 🧙‍♂️
- Magical animations = **visual effects of spells succeeding or failing** ✨
- Physics analogy: Error handling = **safety mechanisms in experiments to prevent catastrophic failures** 🧪
- Magic analogy: Error handling = **wizard’s quick thinking to adapt to unexpected magical outcomes** 🧙‍♂️
- Async/Await = **time freeze to wait for spell completion** ⏳
- Fetch API = **calling ancient magical archives across dimensions** 🪄
---