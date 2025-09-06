
# 📘 Day 16: Mini Project – Interactive To-Do List (Extended Version)

---

## **1. Objective**

* Build a **dynamic To-Do list** using JavaScript.
* Users should be able to:

  1. **Add tasks**
  2. **Mark tasks as done**
  3. **Remove tasks**
  4. **Filter tasks by search** (optional extension)
  5. **Persist tasks** using localStorage (optional advanced extension)

> Think of it as your **magical task diary** 🪄: every task is a spell you can cast, remove, or enhance!

---

## **2. HTML Structure**

Here’s a full starter template:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Magical To-Do List</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f0f8ff; padding: 20px; }
    h1 { color: #4B0082; }
    input { padding: 8px; width: 300px; margin-right: 10px; }
    button { padding: 8px; }
    ul { list-style: none; padding: 0; }
    li { padding: 8px; margin: 5px 0; background-color: #fff8dc; border: 1px solid #ccc; cursor: pointer; transition: 0.3s; }
    li:hover { background-color: #e6e6fa; }
  </style>
</head>
<body>

<h1>📝 Magical To-Do List</h1>
<input type="text" id="taskInput" placeholder="Enter a task">
<button id="addTask">Add Task</button>
<input type="text" id="searchTask" placeholder="Search tasks...">
<ul id="taskList"></ul>

<script src="todo.js"></script>
</body>
</html>
```

---

## **3. Step-by-Step JavaScript Implementation**

### 3.1 Selecting Elements

```javascript
const addBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchTask");
```

### 3.2 Adding a Task

```javascript
function addTask() {
  const taskText = taskInput.value.trim();
  if(taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark task as done
  li.addEventListener("click", () => {
    li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    li.style.color = li.style.textDecoration === "line-through" ? "gray" : "black";
    console.log(`${taskText} ✅ toggled`);
  });

  // Remove task on double click
  li.addEventListener("dblclick", () => {
    li.remove();
    console.log(`${taskText} ✨ vanished`);
  });

  taskList.appendChild(li);
  taskInput.value = "";

  saveTasks(); // Optional: save to localStorage
}
addBtn.addEventListener("click", addTask);

// Add task on Enter key press
taskInput.addEventListener("keypress", (e) => {
  if(e.key === "Enter") addTask();
});
```

---

### 3.3 Searching/Filtering Tasks

```javascript
searchInput.addEventListener("input", () => {
  const filter = searchInput.value.toLowerCase();
  const tasks = taskList.querySelectorAll("li");
  tasks.forEach(task => {
    task.style.display = task.textContent.toLowerCase().includes(filter) ? "" : "none";
  });
});
```

---

### 3.4 Persisting Tasks with localStorage (Optional)

```javascript
function saveTasks() {
  const tasks = [...taskList.children].map(li => li.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(taskText => {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Add click and double-click events
    li.addEventListener("click", () => {
      li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
      li.style.color = li.style.textDecoration === "line-through" ? "gray" : "black";
    });
    li.addEventListener("dblclick", () => {
      li.remove();
      saveTasks();
    });

    taskList.appendChild(li);
  });
}
loadTasks();
```

---

## **4. Features**

* Add tasks dynamically
* Mark tasks as done on **click**
* Remove tasks on **double click**
* **Search/filter tasks** in real-time
* Save tasks in **localStorage** (persistence)
* Keyboard-friendly: press **Enter** to add task

> Every interaction is like **casting a spell** ⚡
>
> * Click = **activate spell**
> * Double-click = **vanish spell**
> * Search = **magical scanning of the spellbook**

---

## **5. Mini-Project Enhancements**

1. **Priority Levels**: Use colors (Red = High, Yellow = Medium, Green = Low)
2. **Due Dates**: Add `<input type="date">` to tasks
3. **Animations**: Add fade-in/out when tasks are added/removed
4. **Keyboard Shortcuts**:

   * `Enter` → Add task
   * `Ctrl + D` → Clear all tasks

---

## 🎯 Classwork

1. Build a **basic To-Do list** that adds/removes tasks.
2. Implement **click to mark as done**.
3. Implement **search/filter tasks** dynamically.
4. Bonus: Save tasks in **localStorage** and load on page refresh.

---

## 📝 Assignment

1. **Full Magical To-Do App**:

   * Add tasks
   * Mark as done
   * Remove tasks
   * Filter/search tasks
   * Save tasks in localStorage
2. **Bonus Mini-Projects**:

   * Color-code tasks by priority
   * Add due date for tasks
   * Add **clear completed tasks** button
   * Add fun console logs for every magical action (e.g., `"You vanquished the task! ✨"`)

---

💡 **Fun Physics/Magic Angle:**

* Clicking = **applying energy to DOM particles**
* Double-click = **teleporting particles away**
* Searching/filtering = **scanning your magical energy field for matching spells**
* localStorage = **magic crystal that remembers your spells between sessions** 💎

---
## **Bonus: Using Sets and Maps for Task Management**

### 1. Using Sets

* **Sets** are great for storing unique tasks.
* You can easily add, remove, and check for existence.

```javascript
const tasks = new Set();

function addTask(task) {
  tasks.add(task);
  console.log(`Task added: ${task}`);
}

function removeTask(task) {
  tasks.delete(task);
  console.log(`Task removed: ${task}`);
}

function hasTask(task) {
  return tasks.has(task);
}
```

### 2. Using Maps

* **Maps** are useful for storing tasks with additional metadata (e.g., priority, due date).

```javascript
const tasks = new Map();

function addTask(task, priority) {
  tasks.set(task, { priority });
  console.log(`Task added: ${task} with priority ${priority}`);
}

function removeTask(task) {
  tasks.delete(task);
  console.log(`Task removed: ${task}`);
}

function getTask(task) {
  return tasks.get(task);
}
```

---
* Think of Sets as your **magical bag of unique spells** 👜: no duplicates allowed!
* Maps are like your **spellbook with detailed notes** 📚: each spell has its own properties and effects.
* Every addition or removal is like **manipulating particles in a magical field** 🌌!
* Using these structures can make your To-Do list more efficient and organized, just like a well-maintained spellbook!

---