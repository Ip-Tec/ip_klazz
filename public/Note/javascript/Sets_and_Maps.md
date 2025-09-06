
# 📘 Day 12: Sets and Maps in JavaScript

---

## **1. What is a Set?**

* A **Set** is a collection of **unique values** — no duplicates allowed.
* Think of it as a **magic bag** 🪄: anything you put in is automatically **unique**.
* Useful for **removing duplicates** or storing **distinct items**.

```javascript
const magicBag = new Set();

magicBag.add("Wand");
magicBag.add("Potion");
magicBag.add("Wand"); // Duplicate, ignored

console.log(magicBag); // Set { 'Wand', 'Potion' }
console.log(magicBag.has("Potion")); // true
magicBag.delete("Potion");
console.log(magicBag); // Set { 'Wand' }
```

---

### 🔹 Key Points About Sets

1. No duplicates allowed.
2. Values can be of **any type**: numbers, strings, objects.
3. Sets are **iterable**: can use **for...of**.

```javascript
const powers = new Set(["Invisibility", "Teleportation", "Fireball"]);

for (let power of powers) {
  console.log(power);
}
```

---

## **2. What is a Map?**

* A **Map** is a collection of **key–value pairs**, but unlike objects:

  * Keys can be **any type** (not just strings).
  * Maintains **insertion order**.
* Think of it as a **magic dictionary** 📖: you can store anything as a key and find its magic spell easily.

```javascript
const spellBook = new Map();

spellBook.set("Fireball", 50); // key: spell, value: damage
spellBook.set("Icebolt", 30);
spellBook.set("Heal", 20);

console.log(spellBook.get("Fireball")); // 50
console.log(spellBook.has("Heal")); // true

spellBook.delete("Icebolt");
console.log(spellBook.size); // 2
```

---

### 🔹 Iterating Over a Map

```javascript
for (let [spell, damage] of spellBook) {
  console.log(`${spell} deals ${damage} damage`);
}

// Using forEach
spellBook.forEach((damage, spell) => {
  console.log(`${spell} → ${damage}`);
});
```

---

## **3. Converting Between Maps, Sets, and Arrays**

### Set → Array

```javascript
const items = new Set(["Sword", "Shield", "Potion"]);
const arr = [...items];
console.log(arr); // ["Sword", "Shield", "Potion"]
```

### Array → Set (remove duplicates)

```javascript
const duplicates = [1, 2, 2, 3, 3, 4];
const unique = new Set(duplicates);
console.log(unique); // Set {1,2,3,4}
```

### Map → Array of Entries

```javascript
const map = new Map([["a", 1], ["b", 2]]);
console.log([...map]); // [["a",1],["b",2]]
```

---

## **4. Real-Life API Example Using Map**

Imagine fetching **crypto prices** and storing them in a **Map** for quick lookup.

```javascript
async function cryptoMap() {
  const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd");
  const data = await res.json();

  const cryptoPrices = new Map();
  for (let coin in data) {
    cryptoPrices.set(coin, data[coin].usd);
  }

  console.log("BTC Price:", cryptoPrices.get("bitcoin"));
  console.log("ETH Price:", cryptoPrices.get("ethereum"));
}

cryptoMap();
```

> Magic moment: The **Map acts like a spellbook**: you can instantly find the price of any coin 🪄💰.

---

## **5. Mini-Project: Unique Spell Tracker**

**Goal:** Create a program that:

1. Stores **unique spells** in a Set.
2. Stores **spell power** in a Map.
3. Prints each spell with its power.

```javascript
const spells = new Set(["Fireball", "Heal", "Teleport"]);
const spellPower = new Map([["Fireball", 50], ["Heal", 20], ["Teleport", 30]]);

spells.forEach(spell => {
  console.log(`${spell} → Power: ${spellPower.get(spell)}`);
});
```

---

## 🎯 Classwork

1. Create a Set of 5 numbers, add 2 more, and try adding a duplicate. Print the final Set.
2. Create a Map of 3 countries with their capitals. Print all key–value pairs using **for...of**.
3. Convert an array **[1,1,2,2,3,3,4]** to a Set and print unique numbers.

---

## 📝 Assignment

1. Write a function that **removes duplicates from an array** using Set.
2. Build a Map that stores **students and their grades**. Iterate and print each student with their grade.
3. Fetch **crypto prices** from Coingecko API and store them in a Map. Print Bitcoin and Ethereum prices.
4. **Bonus Mini-Project:**
   Create a **“Magic Inventory”**:

   * Items stored in a Set (no duplicates)
   * Item prices stored in a Map
   * Print all items and their prices

---

💡 **Fun Tip:**

* Sets = **magical bag** (unique things magically appear only once)
* Maps = **magic dictionary or spellbook** (key can be anything, and you get your spell quickly)
* Physics angle: Think of Map as a **lookup table** in experiments 🧪, Sets as a **particle container** that ensures no duplicates!

---