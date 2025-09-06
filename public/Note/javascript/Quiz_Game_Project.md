
# 📘 Day 28: Mini Project – Quiz Game

---

## **1. Introduction**

- Today, we **combine everything learned** so far: variables, arrays, loops, functions, DOM, events, and localStorage.
- Goal: Create a **wizard-themed quiz game** where players answer questions to cast spells correctly.
- Think of it as a **magical duel of knowledge** 🧙‍♂️✨

> Magic analogy: Correct answers = **casting powerful spells**, wrong answers = **spell backfire** 💥

---

## **2. HTML Setup**

```html
<div id="quizContainer">
  <h2 id="question">Question will appear here</h2>
  <ul id="choices"></ul>
  <button id="nextBtn">Next</button>
  <p id="score"></p>
</div>
```

---

## **3. JavaScript Logic**

### Step 1: Create Questions

```javascript
const quiz = [
  {
    question: "What is the correct way to declare a variable in JavaScript?",
    choices: ["var myVar;", "let myVar;", "const myVar;", "All of the above"],
    answer: 3,
  },
  {
    question: "Which method converts an object to a JSON string?",
    choices: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.object()",
      "JSON.convert()",
    ],
    answer: 1,
  },
  {
    question: "Which operator is used for strict equality?",
    choices: ["==", "=", "===", "!="],
    answer: 2,
  },
];
```

### Step 2: Display Questions

```javascript
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function displayQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  choicesEl.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const li = document.createElement("li");
    li.textContent = choice;
    li.addEventListener("click", () => selectAnswer(index));
    choicesEl.appendChild(li);
  });
}

function selectAnswer(index) {
  const q = quiz[currentQuestion];
  if (index === q.answer) {
    score++;
    alert("✅ Spell cast successfully!");
  } else {
    alert("💥 Spell backfired!");
  }
  nextBtn.style.display = "inline";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  nextBtn.style.display = "none";
  if (currentQuestion < quiz.length) {
    displayQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    choicesEl.innerHTML = "";
    scoreEl.textContent = `Your Score: ${score}/${quiz.length}`;
    localStorage.setItem("lastScore", score);
  }
});

// Initialize
displayQuestion();
nextBtn.style.display = "none";
```

> Magic analogy: Selecting the correct choice = **casting the right spell**, alert = **spell effect** ✨

---

## **4. Mini-Project Features**

- Multiple-choice questions
- Score tracking
- LocalStorage saves **last score**
- Wizard theme with **spell feedback**

---

## 🎯 Classwork

1. Add **3 new wizard-themed questions**
2. Highlight correct/incorrect answers with **colors**
3. Save and display the **highest score** in localStorage

---

## 📝 Assignment

1. Build a **Complete Quiz Game App**:

   - Add timer for each question
   - Add **progress bar** for current question
   - Add **sound effects** for correct/incorrect answers
   - Save scores in **localStorage** and display leaderboard

2. Bonus Mini-Project:

   - Make it **interactive with Canvas animations** for spell casting
   - Optional: Add **difficulty levels** for questions

---

💡 **Fun Physics/Magic Angle:**

- Selecting the correct answer = **spell hits target accurately** 🎯
- Wrong answer = **backfire, like energy rebounding** 💥
- Timer = **spell duration limit** ⏳
- Canvas integration = **magical visual effects for spell casting** ✨

---
