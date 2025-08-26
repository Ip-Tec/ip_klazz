### **Chapter 6: Day 6**
**Objectives:** Learn to embed various media types, understand the basics of the HTML5 Canvas element for drawing graphics, and explore SVG for creating scalable vector graphics.

---

### **Lesson: Embedding Media**
**Explanation:**
Modern websites often include rich media content beyond simple images. HTML provides standardized ways to embed audio, video, and external content from other websites.

*   **Audio (`<audio>`):** Embeds sound content. Supports multiple source files for cross-browser compatibility.
*   **Video (`<video>`):** Embeds video content. Also supports multiple sources and provides controls for playback.
*   **Embedding External Content (`<iframe>`):** Allows you to embed content from other websites while keeping it in a secure sandboxed environment. Commonly used for maps, videos, and social media posts.
*   **Embedding PDFs:** You can use `<iframe>` or the `<embed>` tag to display PDF documents directly in the browser.

**Key Attributes:**
*   `controls`: Shows the default play/pause/volume controls
*   `autoplay`: Starts playback automatically (use sparingly)
*   `loop`: Makes the media play repeatedly
*   `muted`: Starts with audio muted
*   `poster`: For `<video>`, specifies an image to show before playback
*   `src`: The source file URL
*   `width`/`height`: Dimensions for the media player

**Code Example:**
```html
<!-- Audio example -->
<audio controls>
  <source src="audio/soundtrack.mp3" type="audio/mpeg">
  <source src="audio/soundtrack.ogg" type="audio/ogg">
  Your browser does not support the audio element.
</audio>

<!-- Video example -->
<video controls width="600" poster="images/video-preview.jpg">
  <source src="video/demo.mp4" type="video/mp4">
  <source src="video/demo.webm" type="video/webm">
  Your browser does not support the video tag.
</video>

<!-- Embedded YouTube video -->
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>

<!-- Embedded PDF -->
<iframe src="documents/guide.pdf" width="100%" height="500px">
  This browser does not support PDFs. Please download the PDF to view it: 
  <a href="documents/guide.pdf">Download PDF</a>
</iframe>
```

**Practice Task:**
Create a media gallery page (`media-gallery.html`) that includes:
1. An audio player with controls
2. A video player with controls and a custom poster image
3. An embedded YouTube video
4. An embedded PDF document (or a placeholder if you don't have one)
5. Ensure all media elements are properly sized and have fallback content for unsupported browsers

---

### **Lesson: Canvas Basics**
**Explanation:**
The HTML5 `<canvas>` element provides a JavaScript API for drawing graphics, animations, and images programmatically. It's essentially a blank slate that you can draw on using JavaScript.

*   **Raster-based:** Canvas creates bitmap images (composed of pixels)
*   **Programmatic drawing:** All drawing is done through JavaScript commands
*   **Uses:** Data visualization, game development, image processing, animations
*   **Performance:** Excellent for complex animations and real-time graphics

**Basic Workflow:**
1. Add a `<canvas>` element to your HTML
2. Get a reference to the canvas in JavaScript
3. Get a 2D drawing context from the canvas
4. Use the context's methods to draw shapes, text, and images

**Code Example:**
```html
<canvas id="myCanvas" width="400" height="200" style="border:1px solid #000000;">
  Your browser does not support the canvas element.
</canvas>

<script>
  // Get the canvas element
  const canvas = document.getElementById('myCanvas');
  // Get the 2D drawing context
  const ctx = canvas.getContext('2d');
  
  // Draw a red rectangle
  ctx.fillStyle = '#FF0000';
  ctx.fillRect(20, 20, 150, 100);
  
  // Draw a blue outlined rectangle
  ctx.strokeStyle = '#0000FF';
  ctx.lineWidth = 5;
  ctx.strokeRect(200, 20, 150, 100);
  
  // Draw a green circle
  ctx.beginPath();
  ctx.arc(100, 150, 40, 0, 2 * Math.PI);
  ctx.fillStyle = '#00FF00';
  ctx.fill();
  
  // Draw text
  ctx.font = '20px Arial';
  ctx.fillStyle = '#000000';
  ctx.fillText('Hello Canvas!', 200, 150);
</script>
```

**Practice Task:**
Create a simple drawing with the Canvas API:
1. Create a canvas with a size of 500x300 pixels
2. Draw a blue background covering the entire canvas
3. Draw a yellow sun (circle) in the top right corner
4. Draw a green rectangle at the bottom to represent grass
5. Draw a brown rectangle for a tree trunk and a green circle for the tree leaves
6. Add your name as text somewhere on the canvas

---

### **Lesson: SVG Basics**
**Explanation:**
SVG (Scalable Vector Graphics) is an XML-based markup language for describing two-dimensional vector graphics. Unlike canvas (which is raster-based), SVG creates resolution-independent graphics that look sharp at any size.

*   **Vector-based:** SVG uses mathematical descriptions of shapes
*   **DOM-based:** SVG elements become part of the DOM and can be manipulated with CSS and JavaScript
*   **Accessibility:** SVG content can be made accessible to screen readers
*   **Uses:** Icons, logos, charts, maps, and illustrations

**Key SVG Elements:**
*   `<svg>`: The container element
*   `<rect>`: Creates rectangles
*   `<circle>`: Creates circles
*   `<ellipse>`: Creates ellipses
*   `<line>`: Creates lines
*   `<polygon>`: Creates polygons
*   `<path>`: Creates complex shapes using path commands
*   `<text>`: Creates text

**Code Example:**
```html
<svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
  <!-- Red rectangle -->
  <rect x="20" y="20" width="150" height="100" fill="red" />
  
  <!-- Blue outlined rectangle -->
  <rect x="200" y="20" width="150" height="100" fill="none" stroke="blue" stroke-width="5" />
  
  <!-- Green circle -->
  <circle cx="100" cy="150" r="40" fill="green" />
  
  <!-- Text -->
  <text x="200" y="150" font-family="Arial" font-size="20" fill="black">Hello SVG!</text>
  
  <!-- Smiley face -->
  <circle cx="300" cy="150" r="30" fill="yellow" stroke="black" stroke-width="2" />
  <circle cx="290" cy="140" r="5" fill="black" />
  <circle cx="310" cy="140" r="5" fill="black" />
  <path d="M285 160 Q300 170 315 160" stroke="black" stroke-width="2" fill="none" />
</svg>
```

**Practice Task:**
Create an SVG graphic that includes:
1. A house with a rectangular base and a triangular roof
2. A door and at least one window
3. A sun in the sky
4. Some text with your name
5. Use at least 5 different SVG elements (rect, circle, polygon, path, text, etc.)
6. Apply different fill colors and strokes to elements

---

### **Homework:**
Create an interactive "Comparison Page" that demonstrates the differences between Canvas and SVG:

1. Create a page with two columns: one for Canvas and one for SVG
2. In the Canvas column:
   - Create a canvas element
   - Use JavaScript to draw a simple scene with at least 5 elements
   - Add a button that changes something in the canvas when clicked (e.g., changes colors)
3. In the SVG column:
   - Create an SVG graphic with the same scene (as similar as possible)
   - Use CSS to style the SVG elements
   - Add a button that changes something in the SVG when clicked (e.g., moves an element)
4. Below both columns, write a paragraph explaining the differences between Canvas and SVG, including:
   - When you would use each technology
   - The pros and cons of each approach
   - How they handle interactivity and animation

Save this as `canvas-vs-svg.html` and ensure all JavaScript and CSS is properly included.