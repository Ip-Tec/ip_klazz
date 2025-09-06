
# 📘 Day 29: Major Project – Calculator or Notes App with Local Storage

---

## **1. Introduction**

* Today’s project combines **everything you’ve learned**: variables, DOM, events, functions, arrays, loops, localStorage, and error handling.
* Goal: Create a **Calculator** or **Notes App** where data persists in **localStorage**.
* Think of it as a **wizard’s magical tool for quick spell calculations or spell notes** 🧙‍♂️✨

> Magic analogy: Calculator = **wand that computes spell energy**, Notes App = **wizard’s grimoire that never forgets** 📜

---

## **2. Option A: Calculator App**

### HTML Setup

```html
<div id="calculator">
  <input type="text" id="display" disabled>
  <div id="buttons">
    <button>7</button><button>8</button><button>9</button><button>/</button>
    <button>4</button><button>5</button><button>6</button><button>*</button>
    <button>1</button><button>2</button><button>3</button><button>-</button>
    <button>0</button><button>.</button><button>=</button><button>+</button>
    <button id="clear">C</button>
  </div>
</div>
```

### JavaScript Logic

```javascript
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");
const clearBtn = document.getElementById("clear");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    if(button.textContent === "=") {
      try {
        display.value = eval(display.value); // compute spell energy ⚡
        localStorage.setItem("lastCalculation", display.value);
      } catch {
        alert("💥 Spell misfire! Invalid calculation.");
      }
    } else if(button.textContent !== "C") {
      display.value += button.textContent;
    }
  });
});

clearBtn.addEventListener("click", () => display.value = "");
window.addEventListener("load", () => {
  const last = localStorage.getItem("lastCalculation");
  if(last) display.value = last;
});
```

> Magic analogy: **eval()** = **wand casting math spells**, localStorage = **magical memory crystal** ✨

---

## **3. Option B: Notes App**

### HTML Setup

```html
<div id="notesApp">
  <input type="text" id="noteInput" placeholder="Write a spell note...">
  <button id="addNote">Add Note</button>
  <ul id="notesList"></ul>
</div>
```

### JavaScript Logic

```javascript
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNote");
const notesList = document.getElementById("notesList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

addNoteBtn.addEventListener("click", () => {
  const note = noteInput.value.trim();
  if(!note) return;
  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes();
  noteInput.value = "";
});

function renderNotes() {
  notesList.innerHTML = "";
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;
    const delBtn = document.createElement("button");
    delBtn.textContent = "🗑️";
    delBtn.addEventListener("click", () => {
      notes.splice(index, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      renderNotes();
    });
    li.appendChild(delBtn);
    notesList.appendChild(li);
  });
}
```

> Magic analogy: Notes App = **wizard’s grimoire**, delete button = **magical eraser to vanish old spells** 🪄

---

## **4. Mini-Project Features**

* Calculator: perform arithmetic, store **last calculation** in localStorage
* Notes App: add, delete, and persist notes
* Interactive, easy-to-use UI

---

## 🎯 Classwork

1. Add a **clear history button** for calculator
2. Highlight **important notes** in Notes App
3. Try **error handling** for invalid calculations

---

## 📝 Assignment

1. Build a **Complete Calculator App**:

   * Buttons, display, last calculation persistence
   * Optional: add **advanced operations** like square root, percentage
2. Build a **Complete Notes App**:

   * Add, delete, edit notes
   * Save notes in **localStorage**
   * Optional: **categorize notes by spell type**

---

💡 **Fun Physics/Magic Angle:**

* Calculator = **spell energy computations**, prevent backfires with error handling ⚡
* Notes App = **magical memory crystals**, persistence = **never forget spells** ✨
* Deleting notes = **erasing magical traces safely** 🪄

