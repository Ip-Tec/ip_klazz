
# 📘 Day 19: Promises & Async/Await

---

## **1. Introduction to Asynchronous JavaScript**

* JavaScript normally runs **synchronously**: one line at a time.
* Sometimes, tasks take **time** (e.g., fetching data from the internet).
* Asynchronous code allows us to **wait for tasks to finish** without freezing the page.

> Analogy: Your wizard can **cast a spell** and **wait for it to complete** while continuing other actions

---

## **2. Promises**

* A **Promise** is a magical **container for a future value**.
* Can be in three states:

  1. **Pending** – still waiting
  2. **Resolved/Fulfilled** – success
  3. **Rejected** – failure

### Creating a Promise

```javascript
const castSpell = new Promise((resolve, reject) => {
  const success = true; // simulate spell success
  setTimeout(() => {
    if(success) {
      resolve("✨ Fireball cast successfully!");
    } else {
      reject("💥 Spell failed!");
    }
  }, 2000); // wait 2 seconds
});

castSpell
  .then(result => console.log(result))  // success
  .catch(error => console.log(error));  // failure
```

> Magic analogy: **Casting a spell takes time** ⏳. Promise = **spell in progress**

---

## **3. Async/Await**

* **Async/Await** allows us to write asynchronous code **like synchronous code** — cleaner and easier to read.

```javascript
function castSpellPromise(spell) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3; // 70% chance
      success ? resolve(`${spell} cast successfully! 🔥`) : reject(`${spell} failed! 💥`);
    }, 2000);
  });
}

async function wizardBattle() {
  try {
    const result1 = await castSpellPromise("Fireball");
    console.log(result1);
    
    const result2 = await castSpellPromise("Lightning Strike");
    console.log(result2);
    
  } catch (error) {
    console.log(error);
  }
}

wizardBattle();
```

> Magic analogy: **await** = **pause time for spell completion**, while the wizard continues planning other spells 🪄

---

## **4. Real-Life API Example**

* Fetching data from an API is naturally asynchronous.

```javascript
async function getMagicData() {
  try {
    const response = await fetch("https://api.agify.io?name=Merlin"); // predicts age based on name
    const data = await response.json();
    console.log(`${data.name} is predicted to be ${data.age} years old 🧙‍♂️`);
  } catch (error) {
    console.log("Failed to fetch magic data!", error);
  }
}

getMagicData();
```

> Promise = **spell in the air**
> Await = **waiting for spell effect**
> Fetch API = **summoning magical knowledge from a distant library** 📚

---

## **5. Mini-Project: Spell Casting with Success/Failure**

**Goal:** Simulate casting multiple spells with **random success/failure** using Promises & Async/Await.

```javascript
function cast(spell) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      success ? resolve(`${spell} succeeded! ✨`) : reject(`${spell} fizzled! 💥`);
    }, 1000);
  });
}

async function castMultipleSpells() {
  const spells = ["Fireball", "Lightning", "Icebolt"];
  
  for(const spell of spells) {
    try {
      const result = await cast(spell);
      console.log(result);
    } catch(error) {
      console.log(error);
    }
  }
}

castMultipleSpells();
```

> Each spell = **asynchronous magic**
> Success/failure = **quantum uncertainty in magic particles** ⚡

---

## 🎯 Classwork

1. Create a **Promise** that resolves after 3 seconds with a success message.
2. Convert the Promise code to **Async/Await**.
3. Simulate a **wizard casting two spells**, logging success/failure.
4. Bonus: Fetch data from **any public API** using Async/Await.

---

## 📝 Assignment

1. Build a **Magical Spell Dashboard**:

   * Array of spells
   * Cast each spell using Promises with **random success/failure**
   * Display results in **console or on HTML page**
2. Extend with **Async/Await** to cast spells in order
3. Bonus Mini-Project:

   * Add **cool magical animations** in the browser when a spell succeeds/fails
   * Log success/failure messages using **template literals** for style
   * Optional: Fetch **wizard stats** from a public API and use them in the simulation

---

💡 **Fun Physics/Magic Angle:**

* Promise = **spell energy in motion** ⚡
* Resolve/Reject = **spell success or quantum misfire**
* Async/Await = **time freeze to wait for spell completion** ⏳
* Fetch API = **calling ancient magical archives across dimensions** 🪄

---