
# 📘 Day 11: JSON (Working with API Data) – Enhanced Version

---

## 🔹 What is JSON?

Imagine JSON as a **magic envelope** 📬:

* You write some information (like your name, age, or favorite spell 🪄).
* You can **send it to another computer**.
* The other computer reads it and knows **exactly what each piece of information is**.

It’s **lightweight**, **organized**, and **easy for humans and machines**.

```json
{
  "wizard": "Merlin",
  "age": 500,
  "spells": ["Invisibility", "Teleportation", "Fireball"],
  "familiar": { "name": "Owlbert", "type": "owl" }
}
```

> Fun fact: JSON is basically a “JavaScript object with a disguise” 🧙‍♂️.

---

## 🔹 JSON in JavaScript

### Object → JSON (Stringify)

```javascript
const wizard = { name: "Merlin", age: 500 };
const magicEnvelope = JSON.stringify(wizard);
console.log(magicEnvelope); 
// {"name":"Merlin","age":500}
```

### JSON → Object (Parse)

```javascript
const receivedEnvelope = '{"name":"Merlin","age":500}';
const obj = JSON.parse(receivedEnvelope);
console.log(obj.name); // Merlin
```

> Think of **stringify** as **putting your magic scroll into an envelope**, and **parse** as **opening it**.

---

## 🔹 Fetching API Data

### Example 1: Fake Users API

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => data.forEach(user => console.log(user.name)));
```

### Example 2: Real-Life APIs

**Weather API 🌦️**

```javascript
async function getWeather() {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=6.34&longitude=5.62&current_weather=true"
  );
  const data = await response.json();
  console.log("Current Temperature in Ekpoma:", data.current_weather.temperature + "°C");
}
getWeather();
```

**Crypto Prices API 💰**

```javascript
async function getBTCPrice() {
  const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await response.json();
  console.log("Bitcoin Price (USD):", data.bpi.USD.rate);
}
getBTCPrice();
```

**Joke API 😂**

```javascript
async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  console.log(`${data.setup} - ${data.punchline}`);
}
getJoke();
```

> Think of APIs like **magical vending machines** 🪄: You press a button (request), and a data spell (JSON) pops out!

---

## 🔹 Mini-Project: Weather & Joke Dashboard 🌤️😂

**Goal:** Create a small program that:

1. Fetches **current weather** for your city.
2. Fetches a **random joke**.
3. Displays both in the console (or later in a webpage).

```javascript
async function magicDashboard() {
  // Weather
  const weatherRes = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=6.34&longitude=5.62&current_weather=true"
  );
  const weather = await weatherRes.json();
  
  // Joke
  const jokeRes = await fetch("https://official-joke-api.appspot.com/random_joke");
  const joke = await jokeRes.json();
  
  console.log(`🌤️ Weather in Ekpoma: ${weather.current_weather.temperature}°C`);
  console.log(`😂 Joke of the day: ${joke.setup} - ${joke.punchline}`);
}
magicDashboard();
```

> This mini-project shows **how APIs can combine “magic” (data from anywhere) and physics** (weather info = real-world physics!) in your program.

---

## 🎯 Classwork

1. Convert this object to JSON:

```javascript
const student = { name: "Jane", course: "Computer Science", level: 300 };
```

2. Parse this JSON string and print the title:

```json
{"id": 1, "title": "Learn JavaScript", "completed": false}
```

3. Fetch data from `https://jsonplaceholder.typicode.com/posts` and print **first 5 post titles**.

---

## 📝 Assignment

1. Fetch users from `https://jsonplaceholder.typicode.com/users` and display their **names and emails**.
2. Create a JSON object for a **book** (title, author, year, genre, available) → stringify → parse.
3. Build a function `getTodo()` that fetches from `https://jsonplaceholder.typicode.com/todos/1` and prints title and completed status.
4. **Bonus:** Build a small dashboard that fetches **weather + crypto price + a random joke** and prints them.

---
## ✅ Summary
- JSON is a **lightweight data format** that’s easy to read and write.
- Use `JSON.stringify()` to convert objects to JSON strings.
- Use `JSON.parse()` to convert JSON strings back to objects.
- Fetch API allows you to get data from servers using URLs.
- APIs are like **magical vending machines** that provide data from anywhere in the world!
---