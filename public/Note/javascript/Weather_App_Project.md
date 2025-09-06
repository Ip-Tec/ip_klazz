
# 📘 Day 20: Mini Project – Weather App (API + Async/Await)

---

## **1. Objective**

* Build a **dynamic weather app** that fetches weather data from a **public API**.
* Users can:

  1. **Enter a city name**
  2. **See weather info** like temperature, condition, and humidity
  3. **Handle loading and errors** gracefully

> Analogy: Your wizard is **summoning the weather** from a magical library in real time 🌦️✨

---

## **2. HTML Structure**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Magical Weather App</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; background-color: #e0f7fa; padding: 50px; }
    input, button { padding: 10px; margin: 10px; }
    #weather { margin-top: 20px; font-size: 1.2em; }
    .error { color: red; }
  </style>
</head>
<body>

<h1>🌤️ Magical Weather App</h1>
<input type="text" id="cityInput" placeholder="Enter city name">
<button id="getWeather">Get Weather</button>

<div id="weather"></div>

<script src="weather.js"></script>
</body>
</html>
```

---

## **3. JavaScript Implementation**

**weather.js**

```javascript
const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeather");
const weatherDiv = document.getElementById("weather");

const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your key

async function getWeather(city) {
  weatherDiv.textContent = "🔮 Summoning weather...";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) throw new Error("City not found!");

    const data = await response.json();
    
    const { name } = data;
    const { temp, humidity } = data.main;
    const { description } = data.weather[0];

    weatherDiv.innerHTML = `
      <p>🌆 City: ${name}</p>
      <p>🌡️ Temperature: ${temp}°C</p>
      <p>💧 Humidity: ${humidity}%</p>
      <p>🌦️ Condition: ${description}</p>
    `;
  } catch (error) {
    weatherDiv.innerHTML = `<p class="error">⚠️ ${error.message}</p>`;
  }
}

getWeatherBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) getWeather(city);
});

cityInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") {
    const city = cityInput.value.trim();
    if (city) getWeather(city);
  }
});
```

---

## **4. Features**

1. Fetch **real-time weather data** from OpenWeatherMap API
2. Display **city, temperature, humidity, and condition**
3. Handle **loading and error states**
4. Enter city name via **input box or Enter key**
5. Use **Async/Await** for clean asynchronous code

> Magic analogy: Fetch API = **calling the weather spirits** ⛅
> Await = **waiting for the spirits to report back**
> Error handling = **deflecting magical misfires** 🪄

---

## **5. Mini-Project Enhancements**

1. Add **background color change** based on weather (blue for rain, yellow for sun)
2. Display **weather icon** from API
3. Store **recent searches** in **localStorage**
4. Add **forecast for next 3 days** using OpenWeatherMap forecast API
5. Optional: Make a **wizard-themed UI** where the wizard “casts a weather spell”

---

## 🎯 Classwork

1. Fetch weather for a **single city** and display **temperature** only
2. Add **error handling** if the city is not found
3. Convert code to **Async/Await** if using **.then()** previously
4. Bonus: Add **Enter key support** for searching

---

## 📝 Assignment

1. Build a **full Magical Weather App**:

   * City input
   * Real-time weather info (city, temp, humidity, description)
   * Handle errors gracefully
   * Show loading message while fetching
2. Bonus Mini-Project:

   * Add **dynamic background colors/icons** based on weather
   * Save recent searches in **localStorage**
   * Show **3-day forecast**
   * Add **fun magical animations** when data is fetched

---

💡 **Fun Physics/Magic Angle:**

* Fetching weather = **summoning elemental spirits** 🌬️🔥💧
* Async/Await = **pausing time until the magical info returns** ⏳
* Error handling = **shield spell protecting from misfires** 🛡️
* Magical animations = **visual energy flowing from the wizard to the sky** ✨
