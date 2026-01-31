
# 📘 Day 27: Canvas API & Simple Animations

---

## **1. Introduction**

* The **Canvas API** allows your wizard code to **draw and animate magical scenes** directly in the browser 🖌️✨
* Think of it as a **wizard’s magical parchment** where you can paint spells, creatures, and effects.
* Animations = **bringing spells to life with motion** 🪄

> Magic analogy: Canvas = enchanted parchment, JavaScript = wizard’s wand, animation = spells moving magically.

---

## **2. Setting Up the Canvas**

```html
<canvas id="magicCanvas" width="500" height="400" style="border:1px solid #000;"></canvas>
```

```javascript
const canvas = document.getElementById("magicCanvas");
const ctx = canvas.getContext("2d"); // 2D magical drawing context
```

> Magic analogy: **ctx** = **wand controlling magical ink** ✨

---

## **3. Drawing Basic Shapes**

```javascript
// Draw a magical circle (spell orb)
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.arc(250, 200, 50, 0, Math.PI * 2); // x, y, radius, startAngle, endAngle
ctx.fill();

// Draw a magical rectangle (spell book)
ctx.fillStyle = "gold";
ctx.fillRect(50, 50, 100, 150); // x, y, width, height
```

> Magic analogy: Circle = **spell orb**, Rectangle = **wizard’s spellbook** 📚

---

## **4. Animating Shapes**

* Use **requestAnimationFrame** to create smooth motion
* Example: bouncing magical orb

```javascript
let x = 50;
let y = 50;
let dx = 2;
let dy = 3;
const radius = 20;

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // clear old frame

  // Draw orb
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "cyan";
  ctx.fill();

  // Move orb
  x += dx;
  y += dy;

  // Bounce off walls
  if(x + radius > canvas.width || x - radius < 0) dx = -dx;
  if(y + radius > canvas.height || y - radius < 0) dy = -dy;

  requestAnimationFrame(animate); // call next frame
}

animate();
```

> Magic analogy: Orb bouncing = **spell energy bouncing in wizard’s lab** ⚡

---

## **5. Mini-Project: Magical Spell Animation**

**Goal:** Create an interactive spell orb that moves and changes color on click

```javascript
canvas.addEventListener("click", () => {
  ctx.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16); // random color
});
```

Combine with the bouncing orb example:

* Orb moves continuously
* Click to **change its magical color**

> Magic analogy: Clicking = **wizard enhancing orb with magical energy** 🪄✨

---

## 🎯 Classwork

1. Draw a **magical rectangle and circle** on the canvas
2. Animate the circle bouncing around
3. Change **color on click**
4. Bonus: Add multiple moving orbs

---

## 📝 Assignment

1. Build a **Magical Spell Canvas App**:

   * Draw multiple spell orbs
   * Animate them bouncing around
   * Change color when clicked
2. Enhancement Mini-Project:

   * Add **gravity effect** (simulate falling spells)
   * Add **trail effect** (like magical sparkles)
   * Optional: Make a **mini wizard game** using Canvas animations

---

💡 **Fun Physics/Magic Angle:**

* requestAnimationFrame = **magical clock controlling animation flow** ⏳
* Bouncing = **spell energy reflecting off mystical walls** ⚡
* Changing color = **wizard infusing orb with elemental magic** 🔮
* Trails = **magical sparks following energy path** ✨

---

