# Day 16: CSS Transforms – Scale, Rotate, Translate, Skew

## Introduction to CSS Transforms

CSS transforms allow you to modify the coordinate space of an element, enabling you to translate, rotate, scale, and skew elements. These transformations can create engaging visual effects and animations without altering the document flow.

## Transform Properties

### 1. Translate
The 'translate()' function moves an element from its current position.

```css
.element {
    transform: translate(50px, 100px); /* Move 50px right, 100px down */
    transform: translateX(50px);       /* Move only on X-axis */
    transform: translateY(100px);      /* Move only on Y-axis */
}
```

### 2. Scale
The 'scale()' function changes the size of an element.

```css
.element {
    transform: scale(2);        /* Double the size (both X and Y) */
    transform: scale(2, 1.5);   /* Scale X by 2, Y by 1.5 */
    transform: scaleX(2);       /* Scale only X-axis */
    transform: scaleY(1.5);     /* Scale only Y-axis */
}
```

### 3. Rotate
The 'rotate()' function rotates an element around a fixed point.

```css
.element {
    transform: rotate(45deg);   /* Rotate 45 degrees clockwise */
    transform: rotate(-90deg);  /* Rotate 90 degrees counter-clockwise */
}
```

### 4. Skew
The 'skew()' function slants an element along the X and/or Y axes.

```css
.element {
    transform: skew(30deg);     /* Skew 30deg on X, 0 on Y */
    transform: skew(30deg, 10deg); /* Skew 30deg on X, 10deg on Y */
    transform: skewX(30deg);    /* Skew only on X-axis */
    transform: skewY(10deg);    /* Skew only on Y-axis */
}
```

### 5. Transform Origin
The 'transform-origin' property changes the origin point for transformations.

```css
.element {
    transform-origin: center;    /* Default: center of element */
    transform-origin: top left;  /* Origin at top-left corner */
    transform-origin: 50px 100px; /* Custom origin coordinates */
}
```

### 6. Multiple Transforms
You can combine multiple transforms in a single declaration.

```css
.element {
    transform: translate(50px, 100px) rotate(45deg) scale(1.5);
}
```

## Classwork: Transform Properties Practice

Let's create an interactive example to practice transform properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transforms Practice</title>
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
            transition: transform 0.5s ease;
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
        
        .transform-origin-controls {
            display: flex;
            gap: 10px;
        }
        
        .transform-origin-controls input {
            flex: 1;
        }
    </style>
</head>
<body>
    <h1>CSS Transforms: Scale, Rotate, Translate, Skew</h1>
    
    <div class="container">
        <h2>Transform Properties</h2>
        
        <div class="instructions">
            <p>Use the controls below to apply different transform properties to the demo element.</p>
        </div>
        
        <div class="demo-container">
            <div class="demo-element" id="transformDemo">Transform Me</div>
        </div>
        
        <div class="controls">
            <div class="control-group">
                <label for="translateX">Translate X (px):</label>
                <input type="range" id="translateX" min="-100" max="100" value="0">
                <div class="range-value" id="translateXValue">0px</div>
            </div>
            
            <div class="control-group">
                <label for="translateY">Translate Y (px):</label>
                <input type="range" id="translateY" min="-100" max="100" value="0">
                <div class="range-value" id="translateYValue">0px</div>
            </div>
            
            <div class="control-group">
                <label for="scale">Scale:</label>
                <input type="range" id="scale" min="0" max="3" value="1" step="0.1">
                <div class="range-value" id="scaleValue">1</div>
            </div>
            
            <div class="control-group">
                <label for="rotate">Rotate (deg):</label>
                <input type="range" id="rotate" min="-180" max="180" value="0">
                <div class="range-value" id="rotateValue">0°</div>
            </div>
            
            <div class="control-group">
                <label for="skewX">Skew X (deg):</label>
                <input type="range" id="skewX" min="-45" max="45" value="0">
                <div class="range-value" id="skewXValue">0°</div>
            </div>
            
            <div class="control-group">
                <label for="skewY">Skew Y (deg):</label>
                <input type="range" id="skewY" min="-45" max="45" value="0">
                <div class="range-value" id="skewYValue">0°</div>
            </div>
            
            <div class="control-group">
                <label>Transform Origin:</label>
                <div class="transform-origin-controls">
                    <input type="number" id="originX" min="0" max="100" value="50" step="1">
                    <input type="number" id="originY" min="0" max="100" value="50" step="1">
                </div>
                <div class="range-value">X: <span id="originXValue">50</span>% Y: <span id="originYValue">50</span>%</div>
            </div>
            
            <div class="control-group">
                <button id="resetButton">Reset All</button>
            </div>
        </div>
        
        <div class="code-example">
            #transformDemo {<br>
            &nbsp;&nbsp;transform: <span id="transformCode">none</span>;<br>
            &nbsp;&nbsp;transform-origin: <span id="originCode">50% 50%</span>;<br>
            }
        </div>
    </div>

    <script>
        // Get all interactive elements
        const transformDemo = document.getElementById('transformDemo');
        const translateX = document.getElementById('translateX');
        const translateY = document.getElementById('translateY');
        const scale = document.getElementById('scale');
        const rotate = document.getElementById('rotate');
        const skewX = document.getElementById('skewX');
        const skewY = document.getElementById('skewY');
        const originX = document.getElementById('originX');
        const originY = document.getElementById('originY');
        const resetButton = document.getElementById('resetButton');
        
        const translateXValue = document.getElementById('translateXValue');
        const translateYValue = document.getElementById('translateYValue');
        const scaleValue = document.getElementById('scaleValue');
        const rotateValue = document.getElementById('rotateValue');
        const skewXValue = document.getElementById('skewXValue');
        const skewYValue = document.getElementById('skewYValue');
        const originXValue = document.getElementById('originXValue');
        const originYValue = document.getElementById('originYValue');
        
        const transformCode = document.getElementById('transformCode');
        const originCode = document.getElementById('originCode');
        
        // Update transform properties
        function updateTransform() {
            const tx = translateX.value;
            const ty = translateY.value;
            const s = scale.value;
            const r = rotate.value;
            const skx = skewX.value;
            const sky = skewY.value;
            const ox = originX.value;
            const oy = originY.value;
            
            // Build transform string
            let transformStr = '';
            
            if (tx != 0 || ty != 0) {
                transformStr += `translate(${tx}px, ${ty}px) `;
            }
            
            if (s != 1) {
                transformStr += `scale(${s}) `;
            }
            
            if (r != 0) {
                transformStr += `rotate(${r}deg) `;
            }
            
            if (skx != 0 || sky != 0) {
                transformStr += `skew(${skx}deg, ${sky}deg) `;
            }
            
            // Apply transforms
            transformDemo.style.transform = transformStr.trim() || 'none';
            transformDemo.style.transformOrigin = `${ox}% ${oy}%`;
            
            // Update value displays
            translateXValue.textContent = tx + 'px';
            translateYValue.textContent = ty + 'px';
            scaleValue.textContent = s;
            rotateValue.textContent = r + '°';
            skewXValue.textContent = skx + '°';
            skewYValue.textContent = sky + '°';
            originXValue.textContent = ox;
            originYValue.textContent = oy;
            
            // Update code example
            transformCode.textContent = transformStr.trim() || 'none';
            originCode.textContent = `${ox}% ${oy}%`;
        }
        
        // Reset all values
        function resetAll() {
            translateX.value = 0;
            translateY.value = 0;
            scale.value = 1;
            rotate.value = 0;
            skewX.value = 0;
            skewY.value = 0;
            originX.value = 50;
            originY.value = 50;
            updateTransform();
        }
        
        // Add event listeners
        translateX.addEventListener('input', updateTransform);
        translateY.addEventListener('input', updateTransform);
        scale.addEventListener('input', updateTransform);
        rotate.addEventListener('input', updateTransform);
        skewX.addEventListener('input', updateTransform);
        skewY.addEventListener('input', updateTransform);
        originX.addEventListener('input', updateTransform);
        originY.addEventListener('input', updateTransform);
        resetButton.addEventListener('click', resetAll);
        
        // Initialize
        updateTransform();
    </script>
</body>
</html>
```

## Assignment: Create a Transform Gallery

**Objective:** Create an interactive gallery that showcases different CSS transform properties.

**Requirements:**
1. Create a gallery with at least 6 different transform examples
2. Each example should demonstrate a different transform property or combination
3. Include interactive controls for each example
4. Add hover effects to enhance the visual experience
5. Ensure the gallery is responsive and visually appealing

**Challenge (Optional):**
- Add a 3D transform section using perspective, rotateX, rotateY, etc.
- Create a transform animation playground where users can combine transforms
- Implement a "copy code" feature for each transform example
- Add a dark/light mode toggle

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Transform Gallery</title>
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
        
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }
        
        .gallery-item {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .gallery-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        
        .demo-box {
            width: 150px;
            height: 150px;
            background-color: #3498db;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            transition: transform 0.5s ease;
        }
        
        .controls {
            margin-top: 15px;
        }
        
        .control-group {
            margin-bottom: 10px;
        }
        
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        
        input[type="range"] {
            width: 100%;
        }
        
        .range-value {
            text-align: center;
            font-size: 14px;
            color: #7f8c8d;
        }
        
        .code-block {
            background-color: #2c3e50;
            color: white;
            padding: 10px;
            border-radius: 4px;
            font-family: monospace;
            margin-top: 15px;
            font-size: 14px;
            text-align: left;
        }
        
        .section-title {
            grid-column: 1 / -1;
            text-align: center;
            color: #3498db;
            margin: 30px 0 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #ecf0f1;
        }
        
        /* 3D Transform Section */
        .perspective-container {
            perspective: 1000px;
            margin: 20px auto;
            width: 150px;
            height: 150px;
        }
        
        .demo-3d {
            width: 100%;
            height: 100%;
            background-color: #9b59b6;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            transform-style: preserve-3d;
            transition: transform 0.5s ease;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .gallery {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>CSS Transform Gallery</h1>
        
        <div class="gallery">
            <div class="section-title">2D Transforms</div>
            
            <!-- Translate Example -->
            <div class="gallery-item">
                <h3>Translate</h3>
                <div class="demo-box" id="demoTranslate">Translate</div>
                <div class="controls">
                    <div class="control-group">
                        <label for="translateXDemo">X: <span id="translateXDemoValue">0</span>px</label>
                        <input type="range" id="translateXDemo" min="-50" max="50" value="0">
                    </div>
                    <div class="control-group">
                        <label for="translateYDemo">Y: <span id="translateYDemoValue">0</span>px</label>
                        <input type="range" id="translateYDemo" min="-50" max="50" value="0">
                    </div>
                </div>
                <div class="code-block">
                    transform: translate(<span id="translateXCode">0</span>px, <span id="translateYCode">0</span>px);
                </div>
            </div>
            
            <!-- Scale Example -->
            <div class="gallery-item">
                <h3>Scale</h3>
                <div class="demo-box" id="demoScale">Scale</div>
                <div class="controls">
                    <div class="control-group">
                        <label for="scaleDemo">Scale: <span id="scaleDemoValue">1</span></label>
                        <input type="range" id="scaleDemo" min="0.1" max="2" value="1" step="0.1">
                    </div>
                </div>
                <div class="code-block">
                    transform: scale(<span id="scaleCode">1</span>);
                </div>
            </div>
            
            <!-- Rotate Example -->
            <div class="gallery-item">
                <h3>Rotate</h3>
                <div class="demo-box" id="demoRotate">Rotate</div>
                <div class="controls">
                    <div class="control-group">
                        <label for="rotateDemo">Rotation: <span id="rotateDemoValue">0</span>°</label>
                        <input type="range" id="rotateDemo" min="-180" max="180" value="0">
                    </div>
                </div>
                <div class="code-block">
                    transform: rotate(<span id="rotateCode">0</span>deg);
                </div>
            </div>
            
            <!-- Skew Example -->
            <div class="gallery-item">
                <h3>Skew</h3>
                <div class="demo-box" id="demoSkew">Skew</div>
                <div class="controls">
                    <div class="control-group">
                        <label for="skewXDemo">Skew X: <span id="skewXDemoValue">0</span>°</label>
                        <input type="range" id="skewXDemo" min="-45" max="45" value="0">
                    </div>
                    <div class="control-group">
                        <label for="skewYDemo">Skew Y: <span id="skewYDemoValue">0</span>°</label>
                        <input type="range" id="skewYDemo" min="-45" max="45" value="0">
                    </div>
                </div>
                <div class="code-block">
                    transform: skew(<span id="skewXCode">0</span>deg, <span id="skewYCode">0</span>deg);
                </div>
            </div>
            
            <!-- Combined Transforms -->
            <div class="gallery-item">
                <h3>Combined Transforms</h3>
                <div class="demo-box" id="demoCombined">Combined</div>
                <div class="controls">
                    <div class="control-group">
                        <label for="combinedRotate">Rotate: <span id="combinedRotateValue">0</span>°</label>
                        <input type="range" id="combinedRotate" min="-180" max="180" value="0">
                    </div>
                    <div class="control-group">
                        <label for="combinedScale">Scale: <span id="combinedScaleValue">1</span></label>
                        <input type="range" id="combinedScale" min="0.5" max="1.5" value="1" step="0.1">
                    </div>
                </div>
                <div class="code-block">
                    transform: rotate(<span id="combinedRotateCode">0</span>deg) scale(<span id="combinedScaleCode">1</span>);
                </div>
            </div>
            
            <!-- Transform Origin -->
            <div class="gallery-item">
                <h3>Transform Origin</h3>
                <div class="demo-box" id="demoOrigin">Origin</div>
                <div class="controls">
                    <div class="control-group">
                        <label for="originXDemo">Origin X: <span id="originXDemoValue">50</span>%</label>
                        <input type="range" id="originXDemo" min="0" max="100" value="50">
                    </div>
                    <div class="control-group">
                        <label for="originYDemo">Origin Y: <span id="originYDemoValue">50</span>%</label>
                        <input type="range" id="originYDemo" min="0" max="100" value="50">
                    </div>
                    <div class="control-group">
                        <label for="originRotate">Rotate: <span id="originRotateValue">45</span>°</label>
                        <input type="range" id="originRotate" min="0" max="180" value="45">
                    </div>
                </div>
                <div class="code-block">
                    transform: rotate(<span id="originRotateCode">45</span>deg);<br>
                    transform-origin: <span id="originXCode">50</span>% <span id="originYCode">50</span>%;
                </div>
            </div>
            
            <div class="section-title">3D Transforms</div>
            
            <!-- 3D Rotate -->
            <div class="gallery-item">
                <h3>3D Rotation</h3>
                <div class="perspective-container">
                    <div class="demo-3d" id="demo3d">3D</div>
                </div>
                <div class="controls">
                    <div class="control-group">
                        <label for="rotate3dX">Rotate X: <span id="rotate3dXValue">0</span>°</label>
                        <input type="range" id="rotate3dX" min="-180" max="180" value="0">
                    </div>
                    <div class="control-group">
                        <label for="rotate3dY">Rotate Y: <span id="rotate3dYValue">0</span>°</label>
                        <input type="range" id="rotate3dY" min="-180" max="180" value="0">
                    </div>
                    <div class="control-group">
                        <label for="rotate3dZ">Rotate Z: <span id="rotate3dZValue">0</span>°</label>
                        <input type="range" id="rotate3dZ" min="-180" max="180" value="0">
                    </div>
                </div>
                <div class="code-block">
                    transform: rotateX(<span id="rotate3dXCode">0</span>deg) <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rotateY(<span id="rotate3dYCode">0</span>deg) <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rotateZ(<span id="rotate3dZCode">0</span>deg);
                </div>
            </div>
        </div>
    </div>

    <script>
        // Translate Demo
        const demoTranslate = document.getElementById('demoTranslate');
        const translateXDemo = document.getElementById('translateXDemo');
        const translateYDemo = document.getElementById('translateYDemo');
        const translateXDemoValue = document.getElementById('translateXDemoValue');
        const translateYDemoValue = document.getElementById('translateYDemoValue');
        const translateXCode = document.getElementById('translateXCode');
        const translateYCode = document.getElementById('translateYCode');
        
        function updateTranslate() {
            const x = translateXDemo.value;
            const y = translateYDemo.value;
            demoTranslate.style.transform = `translate(${x}px, ${y}px)`;
            translateXDemoValue.textContent = x;
            translateYDemoValue.textContent = y;
            translateXCode.textContent = x;
            translateYCode.textContent = y;
        }
        
        translateXDemo.addEventListener('input', updateTranslate);
        translateYDemo.addEventListener('input', updateTranslate);
        
        // Scale Demo
        const demoScale = document.getElementById('demoScale');
        const scaleDemo = document.getElementById('scaleDemo');
        const scaleDemoValue = document.getElementById('scaleDemoValue');
        const scaleCode = document.getElementById('scaleCode');
        
        scaleDemo.addEventListener('input', () => {
            demoScale.style.transform = `scale(${scaleDemo.value})`;
            scaleDemoValue.textContent = scaleDemo.value;
            scaleCode.textContent = scaleDemo.value;
        });
        
        // Rotate Demo
        const demoRotate = document.getElementById('demoRotate');
        const rotateDemo = document.getElementById('rotateDemo');
        const rotateDemoValue = document.getElementById('rotateDemoValue');
        const rotateCode = document.getElementById('rotateCode');
        
        rotateDemo.addEventListener('input', () => {
            demoRotate.style.transform = `rotate(${rotateDemo.value}deg)`;
            rotateDemoValue.textContent = rotateDemo.value;
            rotateCode.textContent = rotateDemo.value;
        });
        
        // Skew Demo
        const demoSkew = document.getElementById('demoSkew');
        const skewXDemo = document.getElementById('skewXDemo');
        const skewYDemo = document.getElementById('skewYDemo');
        const skewXDemoValue = document.getElementById('skewXDemoValue');
        const skewYDemoValue = document.getElementById('skewYDemoValue');
        const skewXCode = document.getElementById('skewXCode');
        const skewYCode = document.getElementById('skewYCode');
        
        function updateSkew() {
            demoSkew.style.transform = `skew(${skewXDemo.value}deg, ${skewYDemo.value}deg)`;
            skewXDemoValue.textContent = skewXDemo.value;
            skewYDemoValue.textContent = skewYDemo.value;
            skewXCode.textContent = skewXDemo.value;
            skewYCode.textContent = skewYDemo.value;
        }
        
        skewXDemo.addEventListener('input', updateSkew);
        skewYDemo.addEventListener('input', updateSkew);
        
        // Combined Demo
        const demoCombined = document.getElementById('demoCombined');
        const combinedRotate = document.getElementById('combinedRotate');
        const combinedScale = document.getElementById('combinedScale');
        const combinedRotateValue = document.getElementById('combinedRotateValue');
        const combinedScaleValue = document.getElementById('combinedScaleValue');
        const combinedRotateCode = document.getElementById('combinedRotateCode');
        const combinedScaleCode = document.getElementById('combinedScaleCode');
        
        function updateCombined() {
            demoCombined.style.transform = `rotate(${combinedRotate.value}deg) scale(${combinedScale.value})`;
            combinedRotateValue.textContent = combinedRotate.value;
            combinedScaleValue.textContent = combinedScale.value;
            combinedRotateCode.textContent = combinedRotate.value;
            combinedScaleCode.textContent = combinedScale.value;
        }
        
        combinedRotate.addEventListener('input', updateCombined);
        combinedScale.addEventListener('input', updateCombined);
        
        // Transform Origin Demo
        const demoOrigin = document.getElementById('demoOrigin');
        const originXDemo = document.getElementById('originXDemo');
        const originYDemo = document.getElementById('originYDemo');
        const originRotate = document.getElementById('originRotate');
        const originXDemoValue = document.getElementById('originXDemoValue');
        const originYDemoValue = document.getElementById('originYDemoValue');
        const originRotateValue = document.getElementById('originRotateValue');
        const originXCode = document.getElementById('originXCode');
        const originYCode = document.getElementById('originYCode');
        const originRotateCode = document.getElementById('originRotateCode');
        
        function updateOrigin() {
            demoOrigin.style.transform = `rotate(${originRotate.value}deg)`;
            demoOrigin.style.transformOrigin = `${originXDemo.value}% ${originYDemo.value}%`;
            originXDemoValue.textContent = originXDemo.value;
            originYDemoValue.textContent = originYDemo.value;
            originRotateValue.textContent = originRotate.value;
            originXCode.textContent = originXDemo.value;
            originYCode.textContent = originYDemo.value;
            originRotateCode.textContent = originRotate.value;
        }
        
        originXDemo.addEventListener('input', updateOrigin);
        originYDemo.addEventListener('input', updateOrigin);
        originRotate.addEventListener('input', updateOrigin);
        
        // 3D Demo
        const demo3d = document.getElementById('demo3d');
        const rotate3dX = document.getElementById('rotate3dX');
        const rotate3dY = document.getElementById('rotate3dY');
        const rotate3dZ = document.getElementById('rotate3dZ');
        const rotate3dXValue = document.getElementById('rotate3dXValue');
        const rotate3dYValue = document.getElementById('rotate3dYValue');
        const rotate3dZValue = document.getElementById('rotate3dZValue');
        const rotate3dXCode = document.getElementById('rotate3dXCode');
        const rotate3dYCode = document.getElementById('rotate3dYCode');
        const rotate3dZCode = document.getElementById('rotate3dZCode');
        
        function update3d() {
            demo3d.style.transform = `rotateX(${rotate3dX.value}deg) rotateY(${rotate3dY.value}deg) rotateZ(${rotate3dZ.value}deg)`;
            rotate3dXValue.textContent = rotate3dX.value;
            rotate3dYValue.textContent = rotate3dY.value;
            rotate3dZValue.textContent = rotate3dZ.value;
            rotate3dXCode.textContent = rotate3dX.value;
            rotate3dYCode.textContent = rotate3dY.value;
            rotate3dZCode.textContent = rotate3dZ.value;
        }
        
        rotate3dX.addEventListener('input', update3d);
        rotate3dY.addEventListener('input', update3d);
        rotate3dZ.addEventListener('input', update3d);
        
        // Initialize all demos
        updateTranslate();
        updateSkew();
        updateCombined();
        updateOrigin();
        update3d();
    </script>
</body>
</html>
```

This assignment will help you practice using CSS transforms to create engaging visual effects. You'll work with translate, scale, rotate, skew, and transform-origin properties, as well as explore 3D transformations. Pay attention to how different transform properties can be combined to create complex effects and how transform-origin affects the transformation behavior.