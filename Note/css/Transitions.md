# Day 15: CSS Transitions - Timing Functions, Duration

## Introduction to CSS Transitions

CSS transitions allow you to smoothly animate changes to CSS properties over a specified duration. They provide a way to control the animation between two states of an element, making user interactions more engaging and visually appealing.

## Transition Properties

### 1. transition-property
Specifies which CSS properties should be transitioned.

```css
.element {
    transition-property: all; /* Transition all properties */
    transition-property: opacity, transform; /* Transition specific properties */
    transition-property: none; /* No properties transitioned */
}
```

### 2. transition-duration
Specifies how long the transition should take.

```css
.element {
    transition-duration: 0.3s; /* 300 milliseconds */
    transition-duration: 1s; /* 1 second */
    transition-duration: 500ms; /* 500 milliseconds */
    transition-duration: 0s; /* No transition */
}
```

### 3. transition-timing-function
Specifies the speed curve of the transition effect.

```css
.element {
    transition-timing-function: ease; /* Default: slow start, fast, slow end */
    transition-timing-function: linear; /* Same speed start to end */
    transition-timing-function: ease-in; /* Slow start */
    transition-timing-function: ease-out; /* Slow end */
    transition-timing-function: ease-in-out; /* Slow start and end */
    transition-timing-function: cubic-bezier(0.1, 0.7, 1.0, 0.1); /* Custom curve */
    transition-timing-function: steps(4, end); /* Steps animation */
}
```

### 4. transition-delay
Specifies a delay before the transition starts.

```css
.element {
    transition-delay: 0s; /* No delay */
    transition-delay: 0.5s; /* 500ms delay */
    transition-delay: 2s; /* 2 second delay */
}
```

### 5. transition (Shorthand)
The shorthand property for setting all transition properties.

```css
.element {
    /* property duration timing-function delay */
    transition: all 0.3s ease-in-out 0s;
    transition: opacity 0.5s linear, transform 0.5s ease-out;
}
```

## Common Timing Functions

CSS provides several built-in timing functions:

1. **ease** - Default, slow start, then fast, then slow end
2. **linear** - Constant speed throughout
3. **ease-in** - Slow start
4. **ease-out** - Slow end
5. **ease-in-out** - Slow start and end
6. **cubic-bezier(n,n,n,n)** - Custom timing function
7. **steps(n, start|end)** - Animation in discrete steps

## Classwork: Transition Properties Practice

Let's create an interactive example to practice transition properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transitions Practice</title>
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
        
        .trigger-btn {
            display: block;
            margin: 20px auto;
            padding: 10px 20px;
            background-color: #2c3e50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        
        .timing-function-visual {
            height: 100px;
            background-color: #ecf0f1;
            position: relative;
            margin: 15px 0;
            border-radius: 4px;
            overflow: hidden;
        }
        
        .timing-path {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .timing-dot {
            width: 15px;
            height: 15px;
            background-color: #e74c3c;
            border-radius: 50%;
            position: absolute;
            bottom: 0;
            left: 0;
            transition: all 1s linear;
        }
        
        .active .timing-dot {
            left: calc(100% - 15px);
        }
    </style>
</head>
<body>
    <h1>CSS Transitions: Timing Functions and Duration</h1>
    
    <div class="container">
        <h2>Transition Properties</h2>
        
        <div class="instructions">
            <p>Use the controls below to modify the transition properties of the demo element.</p>
        </div>
        
        <div class="demo-container">
            <div class="demo-element" id="transitionDemo">Hover Me</div>
        </div>
        
        <button class="trigger-btn" id="triggerBtn">Trigger Transition</button>
        
        <div class="controls">
            <div class="control-group">
                <label for="transitionProperty">Transition Property:</label>
                <select id="transitionProperty">
                    <option value="all">all</option>
                    <option value="transform">transform</option>
                    <option value="background-color">background-color</option>
                    <option value="opacity">opacity</option>
                    <option value="border-radius">border-radius</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="transitionDuration">Duration (ms):</label>
                <input type="range" id="transitionDuration" min="100" max="3000" value="500" step="100">
                <div class="range-value" id="durationValue">500ms</div>
            </div>
            
            <div class="control-group">
                <label for="transitionTiming">Timing Function:</label>
                <select id="transitionTiming">
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
                <label for="transitionDelay">Delay (ms):</label>
                <input type="range" id="transitionDelay" min="0" max="2000" value="0" step="100">
                <div class="range-value" id="delayValue">0ms</div>
            </div>
        </div>
        
        <div class="code-example">
            #transitionDemo {<br>
            &nbsp;&nbsp;transition-property: <span id="propertyCode">all</span>;<br>
            &nbsp;&nbsp;transition-duration: <span id="durationCode">500</span>ms;<br>
            &nbsp;&nbsp;transition-timing-function: <span id="timingCode">ease</span>;<br>
            &nbsp;&nbsp;transition-delay: <span id="delayCode">0</span>ms;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>Timing Function Visualizer</h2>
        
        <div class="instructions">
            <p>See how different timing functions affect the animation progression over time.</p>
        </div>
        
        <div class="timing-function-visual" id="timingVisual">
            <div class="timing-path"></div>
            <div class="timing-dot" id="timingDot"></div>
        </div>
        
        <button class="trigger-btn" id="visualTrigger">Play Animation</button>
        
        <div class="controls">
            <div class="control-group">
                <label for="visualTiming">Timing Function:</label>
                <select id="visualTiming">
                    <option value="linear">linear</option>
                    <option value="ease" selected>ease</option>
                    <option value="ease-in">ease-in</option>
                    <option value="ease-out">ease-out</option>
                    <option value="ease-in-out">ease-in-out</option>
                    <option value="cubic-bezier(0.68, -0.55, 0.27, 1.55)">cubic-bezier (bounce)</option>
                    <option value="steps(5, end)">steps(5, end)</option>
                </select>
            </div>
        </div>
    </div>

    <script>
        // Transition controls
        const transitionDemo = document.getElementById('transitionDemo');
        const triggerBtn = document.getElementById('triggerBtn');
        const transitionProperty = document.getElementById('transitionProperty');
        const transitionDuration = document.getElementById('transitionDuration');
        const transitionTiming = document.getElementById('transitionTiming');
        const transitionDelay = document.getElementById('transitionDelay');
        
        const durationValue = document.getElementById('durationValue');
        const delayValue = document.getElementById('delayValue');
        
        const propertyCode = document.getElementById('propertyCode');
        const durationCode = document.getElementById('durationCode');
        const timingCode = document.getElementById('timingCode');
        const delayCode = document.getElementById('delayCode');
        
        // Timing visualizer
        const timingVisual = document.getElementById('timingVisual');
        const timingDot = document.getElementById('timingDot');
        const visualTrigger = document.getElementById('visualTrigger');
        const visualTiming = document.getElementById('visualTiming');
        
        // Update transition properties
        function updateTransition() {
            const duration = transitionDuration.value;
            const delay = transitionDelay.value;
            
            transitionDemo.style.transitionProperty = transitionProperty.value;
            transitionDemo.style.transitionDuration = duration + 'ms';
            transitionDemo.style.transitionTimingFunction = transitionTiming.value;
            transitionDemo.style.transitionDelay = delay + 'ms';
            
            durationValue.textContent = duration + 'ms';
            delayValue.textContent = delay + 'ms';
            
            propertyCode.textContent = transitionProperty.value;
            durationCode.textContent = duration;
            timingCode.textContent = transitionTiming.value;
            delayCode.textContent = delay;
        }
        
        // Toggle transition state
        let isTransitionActive = false;
        triggerBtn.addEventListener('click', () => {
            isTransitionActive = !isTransitionActive;
            
            if (isTransitionActive) {
                transitionDemo.style.transform = 'translateX(200px) rotate(45deg)';
                transitionDemo.style.backgroundColor = '#e74c3c';
                transitionDemo.style.opacity = '0.7';
                transitionDemo.style.borderRadius = '50%';
                triggerBtn.textContent = 'Reset Transition';
            } else {
                transitionDemo.style.transform = '';
                transitionDemo.style.backgroundColor = '#3498db';
                transitionDemo.style.opacity = '1';
                transitionDemo.style.borderRadius = '0';
                triggerBtn.textContent = 'Trigger Transition';
            }
        });
        
        // Update timing visualizer
        visualTrigger.addEventListener('click', () => {
            timingDot.style.transitionTimingFunction = visualTiming.value;
            timingVisual.classList.remove('active');
            
            // Force reflow
            void timingVisual.offsetWidth;
            
            timingVisual.classList.add('active');
        });
        
        // Reset visualizer when animation completes
        timingDot.addEventListener('transitionend', () => {
            setTimeout(() => {
                timingVisual.classList.remove('active');
            }, 500);
        });
        
        // Add event listeners
        transitionProperty.addEventListener('change', updateTransition);
        transitionDuration.addEventListener('input', updateTransition);
        transitionTiming.addEventListener('change', updateTransition);
        transitionDelay.addEventListener('input', updateTransition);
        
        // Initialize
        updateTransition();
    </script>
</body>
</html>
```

## Assignment: Create an Interactive Photo Gallery with Transitions

**Objective:** Create an interactive photo gallery that uses CSS transitions for smooth animations.

**Requirements:**
1. Create a photo gallery with:
   - A grid of thumbnail images
   - A lightbox/modal view for selected images
   - Navigation buttons for next/previous images
   - Smooth transitions between states

2. Implement the following transition properties:
   - Use different timing functions for different interactions
   - Include transitions for opacity, transform, and other properties
   - Ensure transitions have appropriate durations and delays

3. Make the gallery responsive and visually appealing

**Challenge (Optional):**
- Add a zoom effect on image hover
- Implement a slide transition between images
- Add a loading animation with transitions
- Create a transition for filtering images by category

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Photo Gallery</title>
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
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            text-align: center;
            color: #2c3e50;
            margin-bottom: 30px;
        }
        
        /* Gallery Grid */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        
        .gallery-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
            transition: transform 0.5s ease;
        }
        
        .gallery-item:hover .gallery-img {
            transform: scale(1.05);
        }
        
        .gallery-caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            transform: translateY(100%);
            transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .gallery-caption {
            transform: translateY(0);
        }
        
        /* Lightbox Modal */
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
            z-index: 1000;
        }
        
        .lightbox.active {
            opacity: 1;
            visibility: visible;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
            transition: transform 0.3s ease;
        }
        
        .lightbox-img {
            max-width: 100%;
            max-height: 80vh;
            display: block;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }
        
        .lightbox-caption {
            color: white;
            text-align: center;
            margin-top: 15px;
            font-size: 1.2rem;
        }
        
        /* Lightbox Controls */
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            color: white;
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .lightbox-close:hover {
            color: #3498db;
        }
        
        .lightbox-controls {
            position: absolute;
            top: 50%;
            width: 100%;
            display: flex;
            justify-content: space-between;
            transform: translateY(-50%);
            padding: 0 20px;
        }
        
        .lightbox-btn {
            color: white;
            background-color: rgba(0, 0, 0, 0.5);
            border: none;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.3s ease;
        }
        
        .lightbox-btn:hover {
            background-color: rgba(0, 0, 0, 0.8);
            transform: scale(1.1);
        }
        
        /* Filter Controls */
        .filter-controls {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        .filter-btn {
            padding: 8px 16px;
            background-color: #ecf0f1;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
        }
        
        .filter-btn:hover {
            background-color: #dde4e6;
            transform: translateY(-2px);
        }
        
        .filter-btn.active {
            background-color: #3498db;
            color: white;
        }
        
        /* Animation for lightbox content */
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        
        .lightbox-content {
            animation: fadeIn 0.3s ease forwards;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .gallery-grid {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
            
            .lightbox-btn {
                width: 40px;
                height: 40px;
                font-size: 1.2rem;
            }
        }
        
        @media (max-width: 480px) {
            .gallery-grid {
                grid-template-columns: 1fr;
            }
            
            .filter-controls {
                flex-wrap: wrap;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Interactive Photo Gallery</h1>
        
        <div class="filter-controls">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="nature">Nature</button>
            <button class="filter-btn" data-filter="urban">Urban</button>
            <button class="filter-btn" data-filter="abstract">Abstract</button>
        </div>
        
        <div class="gallery-grid">
            <div class="gallery-item" data-category="nature">
                <img src="https://via.placeholder.com/400x300/3498db/ffffff?text=Nature+1" alt="Nature 1" class="gallery-img">
                <div class="gallery-caption">Nature Scene 1</div>
            </div>
            
            <div class="gallery-item" data-category="urban">
                <img src="https://via.placeholder.com/400x300/e74c3c/ffffff?text=Urban+1" alt="Urban 1" class="gallery-img">
                <div class="gallery-caption">Urban Scene 1</div>
            </div>
            
            <div class="gallery-item" data-category="abstract">
                <img src="https://via.placeholder.com/400x300/2ecc71/ffffff?text=Abstract+1" alt="Abstract 1" class="gallery-img">
                <div class="gallery-caption">Abstract Art 1</div>
            </div>
            
            <div class="gallery-item" data-category="nature">
                <img src="https://via.placeholder.com/400x300/3498db/ffffff?text=Nature+2" alt="Nature 2" class="gallery-img">
                <div class="gallery-caption">Nature Scene 2</div>
            </div>
            
            <div class="gallery-item" data-category="urban">
                <img src="https://via.placeholder.com/400x300/e74c3c/ffffff?text=Urban+2" alt="Urban 2" class="gallery-img">
                <div class="gallery-caption">Urban Scene 2</div>
            </div>
            
            <div class="gallery-item" data-category="abstract">
                <img src="https://via.placeholder.com/400x300/2ecc71/ffffff?text=Abstract+2" alt="Abstract 2" class="gallery-img">
                <div class="gallery-caption">Abstract Art 2</div>
            </div>
            
            <div class="gallery-item" data-category="nature">
                <img src="https://via.placeholder.com/400x300/3498db/ffffff?text=Nature+3" alt="Nature 3" class="gallery-img">
                <div class="gallery-caption">Nature Scene 3</div>
            </div>
            
            <div class="gallery-item" data-category="urban">
                <img src="https://via.placeholder.com/400x300/e74c3c/ffffff?text=Urban+3" alt="Urban 3" class="gallery-img">
                <div class="gallery-caption">Urban Scene 3</div>
            </div>
        </div>
    </div>
    
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <button class="lightbox-close" id="lightboxClose">&times;</button>
        
        <div class="lightbox-content">
            <img src="" alt="" class="lightbox-img" id="lightboxImg">
            <p class="lightbox-caption" id="lightboxCaption"></p>
        </div>
        
        <div class="lightbox-controls">
            <button class="lightbox-btn" id="prevBtn">&lt;</button>
            <button class="lightbox-btn" id="nextBtn">&gt;</button>
        </div>
    </div>

    <script>
        // Gallery functionality
        const galleryItems = document.querySelectorAll('.gallery-item');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const lightboxCaption = document.getElementById('lightboxCaption');
        const lightboxClose = document.getElementById('lightboxClose');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const filterBtns = document.querySelectorAll('.filter-btn');
        
        let currentIndex = 0;
        let filteredItems = Array.from(galleryItems);
        
        // Open lightbox
        function openLightbox(index) {
            currentIndex = index;
            updateLightbox();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
        
        // Update lightbox content
        function updateLightbox() {
            const item = filteredItems[currentIndex];
            const img = item.querySelector('.gallery-img');
            const caption = item.querySelector('.gallery-caption');
            
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = caption.textContent;
        }
        
        // Close lightbox
        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
        }
        
        // Navigate to next image
        function nextImage() {
            currentIndex = (currentIndex + 1) % filteredItems.length;
            updateLightbox();
        }
        
        // Navigate to previous image
        function prevImage() {
            currentIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
            updateLightbox();
        }
        
        // Filter gallery items
        function filterGallery(category) {
            filteredItems = Array.from(galleryItems);
            
            if (category !== 'all') {
                filteredItems = filteredItems.filter(item => item.dataset.category === category);
            }
            
            // Hide all items first
            galleryItems.forEach(item => {
                item.style.display = 'none';
            });
            
            // Show filtered items
            filteredItems.forEach(item => {
                item.style.display = 'block';
            });
            
            // Update active filter button
            filterBtns.forEach(btn => {
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });
        }
        
        // Event listeners
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                openLightbox(index);
            });
        });
        
        lightboxClose.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);
        
        // Close lightbox when clicking outside the content
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active')) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        });
        
        // Filter functionality
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterGallery(btn.dataset.filter);
            });
        });
    </script>
</body>
</html>
```

This assignment will help you practice using CSS transitions to create smooth animations in an interactive photo gallery. You'll work with timing functions, durations, and delays to create engaging user interactions. Pay attention to how different transition properties affect the user experience and how they can be used to guide the user's attention through the interface.