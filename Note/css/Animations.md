# Day 17: CSS Animations – @keyframes, Animation Properties

## Introduction to CSS Animations

CSS animations allow you to create complex, multi-step animations using keyframes. Unlike transitions that go from a start state to an end state, animations can have multiple intermediate steps and offer more control over the animation sequence.

## The @keyframes Rule

The '@keyframes' rule is the foundation of CSS animations. It defines the animation's behavior at various points during the animation sequence.

### Basic @keyframes Syntax

```css
@keyframes animation-name {
  0% {
    /* Starting state */
    opacity: 0;
  }
  50% {
    /* Middle state */
    opacity: 0.5;
  }
  100% {
    /* Ending state */
    opacity: 1;
  }
}
```

### Alternate Syntax Using from/to

```css
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

## Animation Properties

CSS provides several properties to control animations:

### 1. animation-name
Specifies the name of the @keyframes rule to use.

```css
.element {
  animation-name: fade-in;
}
```

### 2. animation-duration
Specifies how long the animation should take to complete.

```css
.element {
  animation-duration: 2s; /* 2 seconds */
  animation-duration: 500ms; /* 500 milliseconds */
}
```

### 3. animation-timing-function
Specifies the speed curve of the animation.

```css
.element {
  animation-timing-function: ease; /* Default */
  animation-timing-function: linear;
  animation-timing-function: ease-in;
  animation-timing-function: ease-out;
  animation-timing-function: ease-in-out;
  animation-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1);
  animation-timing-function: steps(4, end);
}
```

### 4. animation-delay
Specifies a delay before the animation starts.

```css
.element {
  animation-delay: 1s; /* 1 second delay */
}
```

### 5. animation-iteration-count
Specifies how many times the animation should play.

```css
.element {
  animation-iteration-count: 1; /* Play once (default) */
  animation-iteration-count: 3; /* Play 3 times */
  animation-iteration-count: infinite; /* Play forever */
}
```

### 6. animation-direction
Specifies whether the animation should play in reverse on alternate cycles.

```css
.element {
  animation-direction: normal; /* Default: forwards each cycle */
  animation-direction: reverse; /* Backwards each cycle */
  animation-direction: alternate; /* Forwards then backwards */
  animation-direction: alternate-reverse; /* Backwards then forwards */
}
```

### 7. animation-fill-mode
Specifies what values are applied before/after the animation.

```css
.element {
  animation-fill-mode: none; /* Default: no styles applied before/after */
  animation-fill-mode: forwards; /* Retains styles from the last keyframe */
  animation-fill-mode: backwards; /* Retains styles from the first keyframe */
  animation-fill-mode: both; /* Applies both forwards and backwards */
}
```

### 8. animation-play-state
Specifies whether the animation is running or paused.

```css
.element {
  animation-play-state: running; /* Default: animation plays */
  animation-play-state: paused; /* Animation is paused */
}
```

### 9. animation (Shorthand)
The shorthand property for setting all animation properties.

```css
.element {
  /* name duration timing-function delay iteration-count direction fill-mode play-state */
  animation: fade-in 2s ease-in-out 1s infinite alternate both running;
}
```

## Classwork: Animation Properties Practice

Let's create an interactive example to practice animation properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Practice</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f7fa;
            padding: 30px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 2px solid #3498db;
        }
        
        .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        h2 {
            color: #3498db;
            margin-bottom: 15px;
        }
        
        .demo-element {
            width: 100px;
            height: 100px;
            background-color: #3498db;
            margin: 20px auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
        }
        
        .demo-container {
            border: 2px dashed #ccc;
            padding: 20px;
            margin: 15px 0;
        }
        
        .controls {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 20px;
        }
        
        .control-group {
            background-color: #ecf0f1;
            padding: 15px;
            border-radius: 5px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        select, input, button {
            width: 100%;
            padding: 8px;
            border: 1px solid #bdc3c7;
            border-radius: 4px;
            font-size: 16px;
        }
        
        input[type="range"] {
            width: 100%;
        }
        
        button {
            background-color: #3498db;
            color: white;
            border: none;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #2980b9;
        }
        
        .instructions {
            background-color: #fff8e1;
            padding: 15px;
            border-left: 4px solid #f39c12;
            margin: 15px 0;
            border-radius: 0 5px 5px 0;
        }
        
        .code-example {
            background-color: #2c3e50;
            color: white;
            padding: 15px;
            border-radius: 5px;
            font-family: monospace;
            margin: 15px 0;
            overflow-x: auto;
        }
        
        .range-value {
            text-align: center;
            font-size: 14px;
            color: #7f8c8d;
        }
        
        /* Keyframes for the demo */
        @keyframes example-animation {
            0% {
                transform: translateX(0) scale(1);
                background-color: #3498db;
                border-radius: 0;
            }
            33% {
                transform: translateX(100px) scale(1.2);
                background-color: #2ecc71;
                border-radius: 25%;
            }
            66% {
                transform: translateX(-100px) scale(0.8);
                background-color: #e74c3c;
                border-radius: 50%;
            }
            100% {
                transform: translateX(0) scale(1);
                background-color: #3498db;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <h1>CSS Animations: @keyframes and Animation Properties</h1>
    
    <div class="container">
        <h2>Animation Properties</h2>
        
        <div class="instructions">
            <p>Use the controls below to modify the animation properties of the demo element.</p>
        </div>
        
        <div class="demo-container">
            <div class="demo-element" id="animationDemo">Animate Me</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="animationDuration">Duration (ms):</label>
                <input type="range" id="animationDuration" min="500" max="5000" value="2000" step="100">
                <div class="range-value" id="durationValue">2000ms</div>
            </div>
            
            <div class="control-group">
                <label for="animationTiming">Timing Function:</label>
                <select id="animationTiming">
                    <option value="ease">ease</option>
                    <option value="linear">linear</option>
                    <option value="ease-in">ease-in</option>
                    <option value="ease-out">ease-out</option>
                    <option value="ease-in-out">ease-in-out</option>
                    <option value="cubic-bezier(0.68, -0.55, 0.27, 1.55)">cubic-bezier (bounce)</option>
                    <option value="steps(5, end)">steps(5, end)</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="animationDelay">Delay (ms):</label>
                <input type="range" id="animationDelay" min="0" max="3000" value="0" step="100">
                <div class="range-value" id="delayValue">0ms</div>
            </div>
            
            <div class="control-group">
                <label for="animationIteration">Iteration Count:</label>
                <select id="animationIteration">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="infinite">infinite</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="animationDirection">Direction:</label>
                <select id="animationDirection">
                    <option value="normal">normal</option>
                    <option value="reverse">reverse</option>
                    <option value="alternate">alternate</option>
                    <option value="alternate-reverse">alternate-reverse</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="animationFill">Fill Mode:</label>
                <select id="animationFill">
                    <option value="none">none</option>
                    <option value="forwards">forwards</option>
                    <option value="backwards">backwards</option>
                    <option value="both">both</option>
                </select>
            </div>
            
            <div class="control-group">
                <button id="startButton">Start Animation</button>
            </div>
            
            <div class="control-group">
                <button id="pauseButton">Pause/Resume</button>
            </div>
        </div>
        
        <div class="code-example">
            #animationDemo {<br>
            &nbsp;&nbsp;animation-name: example-animation;<br>
            &nbsp;&nbsp;animation-duration: <span id="durationCode">2000</span>ms;<br>
            &nbsp;&nbsp;animation-timing-function: <span id="timingCode">ease</span>;<br>
            &nbsp;&nbsp;animation-delay: <span id="delayCode">0</span>ms;<br>
            &nbsp;&nbsp;animation-iteration-count: <span id="iterationCode">1</span>;<br>
            &nbsp;&nbsp;animation-direction: <span id="directionCode">normal</span>;<br>
            &nbsp;&nbsp;animation-fill-mode: <span id="fillCode">none</span>;<br>
            }
        </div>
    </div>

    <script>
        // Get all interactive elements
        const animationDemo = document.getElementById('animationDemo');
        const animationDuration = document.getElementById('animationDuration');
        const animationTiming = document.getElementById('animationTiming');
        const animationDelay = document.getElementById('animationDelay');
        const animationIteration = document.getElementById('animationIteration');
        const animationDirection = document.getElementById('animationDirection');
        const animationFill = document.getElementById('animationFill');
        const startButton = document.getElementById('startButton');
        const pauseButton = document.getElementById('pauseButton');
        
        const durationValue = document.getElementById('durationValue');
        const delayValue = document.getElementById('delayValue');
        
        const durationCode = document.getElementById('durationCode');
        const timingCode = document.getElementById('timingCode');
        const delayCode = document.getElementById('delayCode');
        const iterationCode = document.getElementById('iterationCode');
        const directionCode = document.getElementById('directionCode');
        const fillCode = document.getElementById('fillCode');
        
        let isPaused = false;
        
        // Apply animation properties
        function applyAnimation() {
            animationDemo.style.animationName = 'example-animation';
            animationDemo.style.animationDuration = animationDuration.value + 'ms';
            animationDemo.style.animationTimingFunction = animationTiming.value;
            animationDemo.style.animationDelay = animationDelay.value + 'ms';
            animationDemo.style.animationIterationCount = animationIteration.value;
            animationDemo.style.animationDirection = animationDirection.value;
            animationDemo.style.animationFillMode = animationFill.value;
            animationDemo.style.animationPlayState = 'running';
            
            // Update code example
            durationCode.textContent = animationDuration.value;
            timingCode.textContent = animationTiming.value;
            delayCode.textContent = animationDelay.value;
            iterationCode.textContent = animationIteration.value;
            directionCode.textContent = animationDirection.value;
            fillCode.textContent = animationFill.value;
            
            // Update value displays
            durationValue.textContent = animationDuration.value + 'ms';
            delayValue.textContent = animationDelay.value + 'ms';
        }
        
        // Start animation
        startButton.addEventListener('click', () => {
            // Remove any existing animation
            animationDemo.style.animation = 'none';
            
            // Force reflow
            void animationDemo.offsetWidth;
            
            // Apply new animation
            applyAnimation();
            isPaused = false;
            pauseButton.textContent = 'Pause';
        });
        
        // Pause/resume animation
        pauseButton.addEventListener('click', () => {
            isPaused = !isPaused;
            if (isPaused) {
                animationDemo.style.animationPlayState = 'paused';
                pauseButton.textContent = 'Resume';
            } else {
                animationDemo.style.animationPlayState = 'running';
                pauseButton.textContent = 'Pause';
            }
        });
        
        // Add event listeners for live updates
        animationDuration.addEventListener('input', () => {
            durationValue.textContent = animationDuration.value + 'ms';
            durationCode.textContent = animationDuration.value;
        });
        
        animationDelay.addEventListener('input', () => {
            delayValue.textContent = animationDelay.value + 'ms';
            delayCode.textContent = animationDelay.value;
        });
        
        animationTiming.addEventListener('change', () => {
            timingCode.textContent = animationTiming.value;
        });
        
        animationIteration.addEventListener('change', () => {
            iterationCode.textContent = animationIteration.value;
        });
        
        animationDirection.addEventListener('change', () => {
            directionCode.textContent = animationDirection.value;
        });
        
        animationFill.addEventListener('change', () => {
            fillCode.textContent = animationFill.value;
        });
    </script>
</body>
</html>
```

## Assignment: Create an Animated Banner

**Objective:** Create an engaging animated banner using CSS animations and @keyframes.

**Requirements:**
1. Create a banner with:
   - A background that changes colors or has moving elements
   - Text that animates in with different effects
   - Multiple elements with coordinated animations
   - A call-to-action button with hover effects

2. Implement at least:
   - 3 different @keyframes animations
   - Different timing functions for different elements
   - Sequential animations with delays
   - Infinite animations for background elements

3. Ensure the banner is visually appealing and responsive

**Challenge (Optional):**
- Add interactive controls to pause/play animations
- Create a theme switcher that changes the animation colors
- Implement a progress indicator for the animations
- Add sound effects that sync with the animations

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Banner</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f7fa;
        }
        
        .banner {
            position: relative;
            width: 100%;
            height: 400px;
            overflow: hidden;
            background: linear-gradient(135deg, #3498db, #2c3e50);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        /* Animated background elements */
        .banner::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
            animation: pulse 8s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% {
                opacity: 0.5;
                transform: scale(1);
            }
            50% {
                opacity: 0.8;
                transform: scale(1.05);
            }
        }
        
        .floating-shapes {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
        
        .shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.3;
            animation: float 15s linear infinite;
        }
        
        .shape:nth-child(1) {
            width: 80px;
            height: 80px;
            background-color: #e74c3c;
            top: 20%;
            left: 10%;
            animation-delay: 0s;
            animation-duration: 20s;
        }
        
        .shape:nth-child(2) {
            width: 60px;
            height: 60px;
            background-color: #2ecc71;
            top: 60%;
            left: 80%;
            animation-delay: -5s;
            animation-duration: 25s;
        }
        
        .shape:nth-child(3) {
            width: 100px;
            height: 100px;
            background-color: #f39c12;
            top: 70%;
            left: 20%;
            animation-delay: -10s;
            animation-duration: 30s;
        }
        
        @keyframes float {
            0% {
                transform: translate(0, 0) rotate(0deg);
            }
            25% {
                transform: translate(100px, 50px) rotate(90deg);
            }
            50% {
                transform: translate(200px, 0) rotate(180deg);
            }
            75% {
                transform: translate(100px, -50px) rotate(270deg);
            }
            100% {
                transform: translate(0, 0) rotate(360deg);
            }
        }
        
        .banner-content {
            position: relative;
            z-index: 1;
            text-align: center;
            color: white;
            max-width: 800px;
            padding: 0 20px;
        }
        
        .banner-title {
            font-size: 3rem;
            margin-bottom: 1rem;
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInUp 1s ease forwards;
        }
        
        .banner-subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInUp 1s ease 0.5s forwards;
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .cta-button {
            display: inline-block;
            background-color: #e74c3c;
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-size: 1.2rem;
            font-weight: bold;
            opacity: 0;
            transform: scale(0.8);
            animation: fadeInScale 1s ease 1s forwards;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: all 0.5s ease;
        }
        
        .cta-button:hover::before {
            left: 100%;
        }
        
        .cta-button:hover {
            background-color: #c0392b;
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        @keyframes fadeInScale {
            to {
                opacity: 1;
                transform: scale(1);
            }
        }
        
        .features {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 40px;
            opacity: 0;
            animation: fadeIn 1s ease 1.5s forwards;
        }
        
        .feature {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            width: 150px;
            backdrop-filter: blur(5px);
            transform: translateY(20px);
            opacity: 0;
            animation: fadeInUp 1s ease forwards;
        }
        
        .feature:nth-child(1) {
            animation-delay: 2s;
        }
        
        .feature:nth-child(2) {
            animation-delay: 2.2s;
        }
        
        .feature:nth-child(3) {
            animation-delay: 2.4s;
        }
        
        .feature-icon {
            font-size: 2rem;
            margin-bottom: 10px;
        }
        
        /* Controls */
        .controls {
            position: absolute;
            bottom: 20px;
            right: 20px;
            z-index: 2;
            display: flex;
            gap: 10px;
        }
        
        .control-btn {
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            backdrop-filter: blur(5px);
            transition: background-color 0.3s ease;
        }
        
        .control-btn:hover {
            background-color: rgba(255, 255, 255, 0.3);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .banner-title {
                font-size: 2rem;
            }
            
            .banner-subtitle {
                font-size: 1.2rem;
            }
            
            .features {
                flex-direction: column;
                align-items: center;
                gap: 15px;
            }
            
            .feature {
                width: 80%;
                max-width: 300px;
            }
        }
    </style>
</head>
<body>
    <div class="banner">
        <div class="floating-shapes">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        
        <div class="banner-content">
            <h1 class="banner-title">Welcome to Our Platform</h1>
            <p class="banner-subtitle">Discover amazing features that will transform your workflow</p>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">⚡</div>
                    <h3>Fast</h3>
                </div>
                <div class="feature">
                    <div class="feature-icon">🔒</div>
                    <h3>Secure</h3>
                </div>
                <div class="feature">
                    <div class="feature-icon">🚀</div>
                    <h3>Powerful</h3>
                </div>
            </div>
            
            <a href="#" class="cta-button">Get Started Now</a>
        </div>
        
        <div class="controls">
            <button class="control-btn" id="pauseBtn">Pause</button>
            <button class="control-btn" id="restartBtn">Restart</button>
        </div>
    </div>

    <script>
        const pauseBtn = document.getElementById('pauseBtn');
        const restartBtn = document.getElementById('restartBtn');
        const banner = document.querySelector('.banner');
        let isPaused = false;
        
        // Pause all animations
        function pauseAnimations() {
            const elements = banner.querySelectorAll('*');
            elements.forEach(el => {
                if (el.style.animationPlayState !== 'paused') {
                    el.style.animationPlayState = 'paused';
                }
            });
            
            // Also pause pseudo-elements by adding a class
            banner.classList.add('paused');
            isPaused = true;
            pauseBtn.textContent = 'Play';
        }
        
        // Play all animations
        function playAnimations() {
            const elements = banner.querySelectorAll('*');
            elements.forEach(el => {
                el.style.animationPlayState = 'running';
            });
            
            banner.classList.remove('paused');
            isPaused = false;
            pauseBtn.textContent = 'Pause';
        }
        
        // Restart all animations
        function restartAnimations() {
            // Remove and re-add animations to restart them
            const elements = banner.querySelectorAll('*');
            elements.forEach(el => {
                const animation = el.style.animation;
                el.style.animation = 'none';
                
                // Force reflow
                void el.offsetWidth;
                
                el.style.animation = animation;
                el.style.animationPlayState = 'running';
            });
            
            banner.classList.remove('paused');
            isPaused = false;
            pauseBtn.textContent = 'Pause';
        }
        
        // Event listeners
        pauseBtn.addEventListener('click', () => {
            if (isPaused) {
                playAnimations();
            } else {
                pauseAnimations();
            }
        });
        
        restartBtn.addEventListener('click', restartAnimations);
    </script>
</body>
</html>
```

This assignment will help you practice using CSS animations and @keyframes to create an engaging animated banner. You'll work with multiple animation properties, timing functions, and delays to create a coordinated animation sequence. Pay attention to how different animations can work together to create a cohesive visual experience and how to control animations with JavaScript.