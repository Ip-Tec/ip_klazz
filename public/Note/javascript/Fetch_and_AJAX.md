
# 📘 Day 26: Fetch API & AJAX Requests

---

## **1. Introduction**

- The **Fetch API** allows your wizard code to **summon data from external magical realms (servers)** 🌐
- AJAX (Asynchronous JavaScript and XML) is the older way of **casting asynchronous spells** to fetch or send data without reloading the page.
- Key idea: **asynchronous requests**, like sending your magic familiars to retrieve info.

> Magic analogy: Fetch API = **sending your magical owl to bring you weather, spell info, or potion ingredients** 🦉✨

---

## **2. Basic Fetch**

```javascript
fetch("https://api.agify.io?name=Peter")
  .then((response) => response.json())
  .then((data) => console.log("Wizardly Prediction:", data))
  .catch((error) => console.log("Owl misfired:", error));
```

**Output Example:**

```
Wizardly Prediction: { name: "Peter", age: 30, count: 12345 }
```

> Magic analogy: Your owl returns with a **prediction scroll** 🎴

---

## **3. Fetch with Async/Await**

```javascript
async function getPrediction(name) {
  try {
    const response = await fetch(`https://api.agify.io?name=${name}`);
    const data = await response.json();
    console.log("Wizardly Prediction:", data);
  } catch (error) {
    console.log("Owl misfired:", error);
  }
}

getPrediction("Peter");
```

> Magic analogy: **Async/Await = waiting for your magical familiar to come back with results** ⏳🦉

---

## **4. POST Requests**

- Sending data to the magical server (like casting a spell remotely)

```javascript
async function castSpell(spellName) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ spell: spellName, power: 50 }),
    });
    const data = await response.json();
    console.log("Spell Cast Result:", data);
  } catch (error) {
    console.log("Spell misfire:", error);
  }
}

castSpell("Fireball");
```

> Magic analogy: **POST = sending a magical request scroll to the Grand Wizard** 📜

---

## **5. Mini-Project: Wizard Spell Book with API**

**Goal:** Build a small app to fetch magical spells from an API and display them.

```javascript
// HTML
/*
<input type="text" id="spellInput" placeholder="Search spell">
<button id="searchSpell">Search Spell</button>
<ul id="spellList"></ul>
*/

const spellInput = document.getElementById("spellInput");
const searchSpellBtn = document.getElementById("searchSpell");
const spellList = document.getElementById("spellList");

searchSpellBtn.addEventListener("click", async () => {
  const spellName = spellInput.value.trim();
  if (!spellName) return;

  spellList.innerHTML = "🔮 Searching for spell...";

  try {
    const response = await fetch(
      `https://api.openbrewerydb.org/breweries?by_name=${spellName}`
    );
    const data = await response.json();

    if (data.length === 0) {
      spellList.innerHTML = "❌ No spell found!";
      return;
    }

    spellList.innerHTML = "";
    data.forEach((spell) => {
      const li = document.createElement("li");
      li.textContent = `${spell.name} (${spell.city})`;
      spellList.appendChild(li);
    });
  } catch (error) {
    spellList.innerHTML = "💥 Magical misfire occurred!";
    console.log(error);
  }
});
```

> Magic analogy: Each spell search = **sending a magical owl to the archives** 🦉✨

---

## 🎯 Classwork

1. Use **fetch** to retrieve a list of spells from an API.
2. Display the spells dynamically on the page.
3. Handle **errors** if API fails.
4. Bonus: Use **async/await** instead of **.then()**.

---

## 📝 Assignment

1. Build a **Wizard Spell Finder App**:

   - Input box to search spells
   - Fetch spells from **public API**
   - Display spells dynamically
   - Handle loading and errors gracefully

2. Bonus Mini-Project:

   - Add **POST request** to "cast" a new spell (simulate sending spell to server)
   - Add **spinner/loading animation** while fetching
   - Optional: Add **magical sound effects** when spells are displayed

---

💡 **Fun Physics/Magic Angle:**

- Fetch API = **sending magical owls** 🦉
- Async/Await = **pause while owl fetches information** ⏳
- POST = **sending scroll to distant wizard** 📜
- Error handling = **shielding against magical misfires** 🛡️

---

Compare this snippet with the one in [Weather_App_Project.md](./Weather_App_Project.md):

```javascript
function castSpell(name, mana) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mana < 10) reject(`${name} failed: Not enough mana! ❌`);
      else if (mana < 20) resolve(`${name} cast weakly. 🌟`);
      else resolve(`${name} cast successfully! ✨`);
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
      console.log("Mana recalculated. 🪄");
    }
  }
}
wizardBattle();
```

```javascript
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});
const getWeather = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
```
> Demonstrates: **fetching data from API, async/await, error handling** ⚡