
# 🧠 Chapter 8: Day 8 — Website Superpowers for Beginners

## 🎯 What You’ll Learn Today
We’re unlocking some cool features that make websites feel like apps. You’ll learn:
- What Web APIs are (they’re like built-in tools for websites)
- How to get a user’s location with the **Geolocation API**
- How to save stuff in the browser with the **Web Storage API**

---

## 🔍 What Are Web APIs?
Imagine your website could:
- Ask “Where are you?” like Google Maps
- Save your notes or game score even after you close the tab
- Access your camera, microphone, or files

That’s what **Web APIs** do — they’re like superpowers built into the browser.

---

## 📍 Geolocation API — Find Out Where You Are

### 🧠 What It Does
This API lets your site ask the user for their location (like GPS). It’s great for maps, weather apps, or anything that needs to know where someone is.

### ✅ Example Code
```html
<button onclick="getLocation()">Get My Location</button>
<p id="output"></p>

<script>
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("output").innerText = "Geolocation not supported.";
    }
  }

  function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    document.getElementById("output").innerText = `Latitude: ${lat}, Longitude: ${lon}`;
  }
</script>
```

### 🔥 Bonus Challenge
Embed a map using Google Maps:
```html
<iframe
  width="300"
  height="200"
  src="https://maps.google.com/maps?q=6.5244,3.3792&z=15&output=embed">
</iframe>
```
Replace the coordinates with your actual location!

---

## 💾 Web Storage API — Save Stuff in the Browser

### 🧠 What It Does
This API lets your site remember things — like notes, scores, or settings — even after the user closes the tab.

### ✅ Example Code: Notes App
```html
<input type="text" id="noteInput" placeholder="Write a note">
<button onclick="saveNote()">Save</button>
<button onclick="clearNotes()">Clear All</button>
<p id="savedNote"></p>

<script>
  function saveNote() {
    const note = document.getElementById("noteInput").value;
    localStorage.setItem("myNote", note);
    showNote();
  }

  function showNote() {
    const saved = localStorage.getItem("myNote");
    document.getElementById("savedNote").innerText = saved ? `Saved Note: ${saved}` : "No notes saved.";
  }

  function clearNotes() {
    localStorage.clear();
    showNote();
  }

  showNote(); // Show saved note on page load
</script>
```

---

## 💻 Classwork: Location Tracker
**Mission:** Use the Geolocation API to show your current latitude and longitude.

✅ Already done above in the “Get My Location” example.

---

## 🏠 Homework: Sticky Notes App
**Mission:** Build a simple notes app using the Web Storage API.

✅ Already done above in the “Notes App” example.

### 🌟 Extra Credit
- Add a “Clear All” button ✅
- Make sure the note stays even after refreshing ✅
- Try saving multiple notes using an array or list (I can help with that too!)

---

## 🧪 Quick Recap
| Feature | What It Does | Why It’s Cool |
|--------|---------------|----------------|
| Geolocation API | Gets user’s location | Great for maps, weather, local stuff |
| Web Storage API | Saves data in browser | Keeps notes, scores, settings |

---
