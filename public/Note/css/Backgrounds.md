# Day 13: Backgrounds – Images, Gradients, Positioning

## Introduction to CSS Backgrounds

CSS backgrounds are a fundamental aspect of web design that allow you to enhance the visual appeal of your web pages. Today we'll explore how to work with background images, create gradients, and control background positioning to create visually engaging layouts.

## Background Properties

### 1. Background Color
The 'background-color' property sets a solid color background for an element.

```css
.element {
    background-color: #3498db; /* Hex color */
    background-color: rgb(52, 152, 219); /* RGB color */
    background-color: rgba(52, 152, 219, 0.7); /* RGB with transparency */
}
```

### 2. Background Image
The 'background-image' property sets one or more background images for an element.

```css
.element {
    background-image: url('path/to/image.jpg');
    background-image: linear-gradient(to right, red, blue); /* Gradient as image */
}
```

### 3. Background Repeat
The 'background-repeat' property controls how background images are repeated.

```css
.element {
    background-repeat: repeat; /* Default: repeats both horizontally and vertically */
    background-repeat: repeat-x; /* Repeats horizontally only */
    background-repeat: repeat-y; /* Repeats vertically only */
    background-repeat: no-repeat; /* Does not repeat */
    background-repeat: space; /* Repeats without clipping, spacing out images */
    background-repeat: round; /* Repeats without clipping, scaling images */
}
```

### 4. Background Position
The 'background-position' property sets the initial position of a background image.

```css
.element {
    background-position: center; /* Centers the image */
    background-position: top left; /* Positions at top left */
    background-position: 50% 50%; /* Centers using percentages */
    background-position: 20px 40px; /* Positions using specific units */
}
```

### 5. Background Size
The 'background-size' property specifies the size of background images.

```css
.element {
    background-size: auto; /* Default: original image size */
    background-size: cover; /* Scales image to cover the entire element */
    background-size: contain; /* Scales image to fit within the element */
    background-size: 50% 80%; /* Specific width and height */
    background-size: 300px 200px; /* Specific dimensions */
}
```

### 6. Background Attachment
The 'background-attachment' property determines whether the background image scrolls with the content or is fixed.

```css
.element {
    background-attachment: scroll; /* Default: scrolls with element */
    background-attachment: fixed; /* Fixed relative to viewport */
    background-attachment: local; /* Scrolls with element's content */
}
```

### 7. Background Clip
The 'background-clip' property defines how far the background should extend within an element.

```css
.element {
    background-clip: border-box; /* Default: extends to border */
    background-clip: padding-box; /* Extends to padding */
    background-clip: content-box; /* Extends to content */
}
```

### 8. Background Origin
The 'background-origin' property specifies the positioning area of the background.

```css
.element {
    background-origin: padding-box; /* Default: relative to padding box */
    background-origin: border-box; /* Relative to border box */
    background-origin: content-box; /* Relative to content box */
}
```

## CSS Gradients

CSS gradients let you create smooth transitions between two or more colors without using images.

### 1. Linear Gradients
Creates a gradient along a straight line.

```css
.element {
    background-image: linear-gradient(to right, red, blue);
    background-image: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);
    background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1)); /* With transparency */
}
```

### 2. Radial Gradients
Creates a gradient that radiates from a central point.

```css
.element {
    background-image: radial-gradient(circle, red, yellow, green);
    background-image: radial-gradient(circle at top left, red, blue);
    background-image: radial-gradient(ellipse 50% 50% at center, red, rgba(255,0,0,0));
}
```

### 3. Conic Gradients
Creates a gradient with color transitions rotated around a center point.

```css
.element {
    background-image: conic-gradient(red, yellow, green, blue, red);
    background-image: conic-gradient(from 45deg, red, orange, yellow, green, blue, indigo, violet);
    background-image: conic-gradient(red 0deg 90deg, yellow 90deg 180deg, green 180deg 270deg, blue 270deg 360deg);
}
```

## Multiple Backgrounds

You can apply multiple background images to a single element by separating them with commas.

```css
.element {
    background-image: 
        url('texture.png'),
        url('pattern.png'),
        linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
    background-position:
        center center,
        top left,
        center center;
    background-repeat:
        no-repeat,
        repeat,
        no-repeat;
}
```

## Classwork: Background Properties Practice

Let's create an interactive example to practice background properties:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Backgrounds Practice</title>
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
            max-width: 1200px;
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
        
        .demo-area {
            border: 2px dashed #ccc;
            padding: 15px;
            margin: 15px 0;
            min-height: 300px;
            position: relative;
        }
        
        .background-demo {
            width: 100%;
            height: 250px;
            border: 1px solid #bdc3c7;
            margin: 15px 0;
            transition: all 0.3s ease;
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
        
        .gradient-preview {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 15px 0;
        }
        
        .gradient-sample {
            width: 100px;
            height: 100px;
            border-radius: 5px;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <h1>CSS Background Properties</h1>
    
    <div class="container">
        <h2>Background Image and Positioning</h2>
        
        <div class="instructions">
            <p>Use the controls below to modify the background properties of the demo element.</p>
        </div>
        
        <div class="background-demo" id="bgDemo"></div>
        
        <div class="controls">
            <div class="control-group">
                <label for="bgImage">Background Image:</label>
                <select id="bgImage">
                    <option value="none">None</option>
                    <option value="url('https://via.placeholder.com/400x200')">Placeholder Image</option>
                    <option value="linear-gradient(to right, #3498db, #2c3e50)">Blue Gradient</option>
                    <option value="linear-gradient(45deg, #e74c3c, #f39c12, #2ecc71)">Colorful Gradient</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="bgRepeat">Background Repeat:</label>
                <select id="bgRepeat">
                    <option value="repeat">repeat</option>
                    <option value="repeat-x">repeat-x</option>
                    <option value="repeat-y">repeat-y</option>
                    <option value="no-repeat" selected>no-repeat</option>
                    <option value="space">space</option>
                    <option value="round">round</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="bgPosition">Background Position:</label>
                <select id="bgPosition">
                    <option value="center">center</option>
                    <option value="top left">top left</option>
                    <option value="top right">top right</option>
                    <option value="bottom left">bottom left</option>
                    <option value="bottom right">bottom right</option>
                    <option value="20px 40px">20px 40px</option>
                    <option value="80% 30%">80% 30%</option>
                </select>
            </div>
            
            <div class="control-group">
                <label for="bgSize">Background Size:</label>
                <select id="bgSize">
                    <option value="auto">auto</option>
                    <option value="cover">cover</option>
                    <option value="contain">contain</option>
                    <option value="100% 100%">100% 100%</option>
                    <option value="200px 150px">200px 150px</option>
                </select>
            </div>
            
            <div class="control-group">
                <button id="resetButton">Reset to Default</button>
            </div>
        </div>
        
        <div class="code-example">
            #bgDemo {<br>
            &nbsp;&nbsp;background-image: <span id="bgImageCode">none</span>;<br>
            &nbsp;&nbsp;background-repeat: <span id="bgRepeatCode">no-repeat</span>;<br>
            &nbsp;&nbsp;background-position: <span id="bgPositionCode">center</span>;<br>
            &nbsp;&nbsp;background-size: <span id="bgSizeCode">auto</span>;<br>
            }
        </div>
    </div>
    
    <div class="container">
        <h2>CSS Gradients</h2>
        
        <div class="instructions">
            <p>CSS gradients let you create smooth transitions between two or more colors without using images.</p>
        </div>
        
        <div class="gradient-preview">
            <div class="gradient-sample" style="background: linear-gradient(to right, #3498db, #2c3e50);"></div>
            <div class="gradient-sample" style="background: radial-gradient(circle, #e74c3c, #f39c12);"></div>
            <div class="gradient-sample" style="background: conic-gradient(from 45deg, red, orange, yellow, green, blue, indigo, violet);"></div>
            <div class="gradient-sample" style="background: linear-gradient(45deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5));"></div>
        </div>
        
        <div class="code-example">
            /* Linear Gradient */<br>
            background: linear-gradient(to right, #3498db, #2c3e50);<br><br>
            
            /* Radial Gradient */<br>
            background: radial-gradient(circle, #e74c3c, #f39c12);<br><br>
            
            /* Conic Gradient */<br>
            background: conic-gradient(from 45deg, red, orange, yellow, green, blue, indigo, violet);<br><br>
            
            /* Gradient with Transparency */<br>
            background: linear-gradient(45deg, rgba(255,0,0,0.5), rgba(0,0,255,0.5));
        </div>
    </div>
    
    <div class="container">
        <h2>Multiple Backgrounds</h2>
        
        <div class="instructions">
            <p>You can apply multiple background images to a single element by separating them with commas.</p>
        </div>
        
        <div class="background-demo" id="multiBgDemo" style="
            background-image: 
                url('https://via.placeholder.com/100x100/3498db/ffffff?text=1'),
                url('https://via.placeholder.com/100x100/e74c3c/ffffff?text=2'),
                linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
            background-position:
                top left,
                bottom right,
                center center;
            background-repeat:
                no-repeat,
                no-repeat,
                no-repeat;
        "></div>
        
        <div class="code-example">
            #multiBgDemo {<br>
            &nbsp;&nbsp;background-image: <br>
            &nbsp;&nbsp;&nbsp;&nbsp;url('image1.png'),<br>
            &nbsp;&nbsp;&nbsp;&nbsp;url('image2.png'),<br>
            &nbsp;&nbsp;&nbsp;&nbsp;linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.2));<br>
            &nbsp;&nbsp;background-position:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;top left,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;bottom right,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;center center;<br>
            &nbsp;&nbsp;background-repeat:<br>
            &nbsp;&nbsp;&nbsp;&nbsp;no-repeat,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;no-repeat,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;no-repeat;<br>
            }
        </div>
    </div>

    <script>
        // Get all interactive elements
        const bgDemo = document.getElementById('bgDemo');
        const bgImage = document.getElementById('bgImage');
        const bgRepeat = document.getElementById('bgRepeat');
        const bgPosition = document.getElementById('bgPosition');
        const bgSize = document.getElementById('bgSize');
        const resetButton = document.getElementById('resetButton');
        
        const bgImageCode = document.getElementById('bgImageCode');
        const bgRepeatCode = document.getElementById('bgRepeatCode');
        const bgPositionCode = document.getElementById('bgPositionCode');
        const bgSizeCode = document.getElementById('bgSizeCode');
        
        // Set up event listeners
        bgImage.addEventListener('change', updateBackground);
        bgRepeat.addEventListener('change', updateBackground);
        bgPosition.addEventListener('change', updateBackground);
        bgSize.addEventListener('change', updateBackground);
        resetButton.addEventListener('click', resetBackground);
        
        // Update background properties
        function updateBackground() {
            bgDemo.style.backgroundImage = bgImage.value;
            bgDemo.style.backgroundRepeat = bgRepeat.value;
            bgDemo.style.backgroundPosition = bgPosition.value;
            bgDemo.style.backgroundSize = bgSize.value;
            
            // Update code example
            bgImageCode.textContent = bgImage.value;
            bgRepeatCode.textContent = bgRepeat.value;
            bgPositionCode.textContent = bgPosition.value;
            bgSizeCode.textContent = bgSize.value;
        }
        
        // Reset to default values
        function resetBackground() {
            bgImage.value = 'none';
            bgRepeat.value = 'no-repeat';
            bgPosition.value = 'center';
            bgSize.value = 'auto';
            updateBackground();
        }
        
        // Initialize
        updateBackground();
    </script>
</body>
</html>
```

## Assignment: Create a Hero Section with Advanced Backgrounds

**Objective:** Create an engaging hero section for a website using advanced CSS background techniques.

**Requirements:**
1. Create a hero section with:
   - A background image or gradient
   - Overlay text content
   - A call-to-action button
   - Multiple background layers (image + gradient overlay)

2. Implement the following background properties:
   - Use 'background-size: cover' for proper image scaling
   - Use 'background-position' to control image positioning
   - Create a gradient overlay for better text readability
   - Ensure the hero section is responsive

3. Make the design visually appealing with appropriate styling

**Challenge (Optional):**
- Add a parallax scrolling effect
- Create an animated gradient background
- Implement a background video instead of an image
- Add a pattern overlay on top of the background

**Example Implementation:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hero Section with Advanced Backgrounds</title>
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
        }
        
        /* Hero Section */
        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            color: white;
            text-align: center;
        }
        
        /* Background with image and gradient overlay */
        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
                url('https://images.unsplash.com/photo-1506744038136-46273834b3fb');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            z-index: -1;
        }
        
        /* Alternative: Gradient only background */
        .gradient-bg {
            background: linear-gradient(135deg, #3498db, #2c3e50, #e74c3c);
            background-size: 400% 400%;
            animation: gradientShift 15s ease infinite;
        }
        
        @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        
        /* Hero content */
        .hero-content {
            max-width: 800px;
            padding: 2rem;
            z-index: 1;
        }
        
        .hero-title {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .hero-subtitle {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .btn {
            display: inline-block;
            background-color: #e74c3c;
            color: white;
            padding: 1rem 2rem;
            border-radius: 4px;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: bold;
            transition: all 0.3s ease;
            text-shadow: none;
        }
        
        .btn:hover {
            background-color: #c0392b;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }
        
        /* Pattern overlay option */
        .pattern-overlay::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 20%);
            z-index: 0;
        }
        
        /* Content section */
        .content {
            padding: 4rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .content h2 {
            margin-bottom: 1.5rem;
            color: #2c3e50;
        }
        
        .content p {
            margin-bottom: 1rem;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2.5rem;
            }
            
            .hero-subtitle {
                font-size: 1.2rem;
            }
        }
        
        @media (max-width: 480px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .hero-subtitle {
                font-size: 1rem;
            }
            
            .btn {
                padding: 0.8rem 1.5rem;
                font-size: 1rem;
            }
        }
        
        /* Background options selector */
        .bg-options {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background-color: white;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            z-index: 100;
        }
        
        .bg-options select {
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            width: 100%;
        }
    </style>
</head>
<body>
    <section class="hero" id="heroSection">
        <div class="hero-content">
            <h1 class="hero-title">Welcome to Our Website</h1>
            <p class="hero-subtitle">Discover amazing experiences and create unforgettable memories</p>
            <a href="#" class="btn">Get Started</a>
        </div>
    </section>
    
    <section class="content">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
    </section>
    
    <div class="bg-options">
        <label for="bgSelector">Background Style:</label>
        <select id="bgSelector">
            <option value="image">Image with Gradient Overlay</option>
            <option value="gradient">Animated Gradient</option>
            <option value="pattern">Image with Pattern Overlay</option>
        </select>
    </div>

    <script>
        // Get elements
        const heroSection = document.getElementById('heroSection');
        const bgSelector = document.getElementById('bgSelector');
        
        // Set up event listener
        bgSelector.addEventListener('change', updateBackground);
        
        // Update background based on selection
        function updateBackground() {
            // Remove all existing classes
            heroSection.className = 'hero';
            
            // Add appropriate classes based on selection
            switch(bgSelector.value) {
                case 'image':
                    // Default style - image with gradient overlay
                    break;
                case 'gradient':
                    heroSection.classList.add('gradient-bg');
                    break;
                case 'pattern':
                    heroSection.classList.add('pattern-overlay');
                    break;
            }
        }
    </script>
</body>
</html>
```

This assignment will help you practice using advanced CSS background techniques to create an engaging hero section. You'll work with background images, gradients, overlays, and positioning to create a visually appealing design. Pay attention to how different background properties affect the overall look and feel of the section, and how you can use these techniques to improve readability and visual hierarchy.