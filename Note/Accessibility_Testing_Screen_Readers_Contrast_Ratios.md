### **Chapter 23: Day 23**
**Objectives:** Learn to test web accessibility, understand screen reader compatibility, and ensure proper color contrast ratios for accessible web design.

---

### **Lesson: Accessibility Testing**
**Explanation:**
Accessibility testing ensures that websites and web applications are usable by people with disabilities. This includes testing for screen reader compatibility, keyboard navigation, color contrast, and other factors that affect accessibility.

**Key Areas of Accessibility Testing:**
1. **Screen Reader Compatibility:** Ensuring content is properly announced
2. **Keyboard Navigation:** All functionality available via keyboard
3. **Color Contrast:** Sufficient contrast between text and background
4. **Semantic HTML:** Proper use of HTML elements for meaning
5. **ARIA Attributes:** Appropriate use of ARIA roles and properties
6. **Form Accessibility:** Proper labels and error messages
7. **Multimedia Accessibility:** Captions and transcripts for audio/video

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessibility Testing Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .test-section {
            margin: 30px 0;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .good-example {
            border-left: 4px solid #4caf50;
            padding-left: 15px;
        }
        .bad-example {
            border-left: 4px solid #f44336;
            padding-left: 15px;
        }
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
    </style>
</head>
<body>
    <h1>Accessibility Testing Examples</h1>
    
    <div class="test-section">
        <h2>1. Semantic HTML</h2>
        
        <div class="good-example">
            <h3>Good Example</h3>
            <nav aria-label="Main navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        
        <div class="bad-example">
            <h3>Bad Example</h3>
            <div class="navigation">
                <span onclick="goToPage('home')">Home</span>
                <span onclick="goToPage('about')">About</span>
                <span onclick="goToPage('contact')">Contact</span>
            </div>
        </div>
    </div>
    
    <div class="test-section">
        <h2>2. Form Accessibility</h2>
        
        <div class="good-example">
            <h3>Good Example</h3>
            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required>
                <button type="submit">Submit</button>
            </form>
        </div>
        
        <div class="bad-example">
            <h3>Bad Example</h3>
            <form>
                <input type="text" placeholder="Enter username" required>
                <div onclick="submitForm()">Submit</div>
            </form>
        </div>
    </div>
    
    <div class="test-section">
        <h2>3. Image Accessibility</h2>
        
        <div class="good-example">
            <h3>Good Example</h3>
            <img src="https://via.placeholder.com/300x200" alt="A placeholder image showing a gray rectangle with dimensions 300 by 200 pixels">
        </div>
        
        <div class="bad-example">
            <h3>Bad Example</h3>
            <img src="https://via.placeholder.com/300x200">
        </div>
    </div>
    
    <div class="test-section">
        <h2>4. ARIA Landmarks</h2>
        
        <div class="good-example">
            <h3>Good Example</h3>
            <header role="banner">
                <h1>Website Header</h1>
            </header>
            <main role="main">
                <p>Main content goes here</p>
            </main>
            <footer role="contentinfo">
                <p>Footer content</p>
            </footer>
        </div>
        
        <div class="bad-example">
            <h3>Bad Example</h3>
            <div class="header">
                <h1>Website Header</h1>
            </div>
            <div class="content">
                <p>Main content goes here</p>
            </div>
            <div class="footer">
                <p>Footer content</p>
            </div>
        </div>
    </div>
</body>
</html>
```

**Practice Task:**
Create an accessibility testing checklist and test a webpage:
1. Test keyboard navigation through all interactive elements
2. Check for proper semantic HTML structure
3. Verify all images have appropriate alt text
4. Test form accessibility with screen readers
5. Check color contrast ratios of text elements
6. Identify and fix any ARIA implementation issues

---

### **Lesson: Screen Readers**
**Explanation:**
Screen readers are assistive technologies that read aloud content from a computer screen for people with visual impairments. Understanding how screen readers interpret web content is essential for creating accessible websites.

**How Screen Readers Work:**
1. **Content Interpretation:** Read HTML elements in the order they appear in the DOM
2. **Navigation:** Users can navigate by headings, links, landmarks, or tab through elements
3. **Announcements:** Screen readers announce element types, states, and content
4. **ARIA Support:** Use ARIA attributes to enhance screen reader experience

**Screen Reader Commands:**
- Tab: Move between interactive elements
- Arrow keys: Navigate through content
- H: Jump to next heading
- L: Jump to next list
- F: Jump to next form field

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Screen Reader Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .demo-section {
            margin: 30px 0;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
        .notification {
            position: relative;
            padding: 15px;
            background-color: #f5f5f5;
            border-radius: 4px;
            margin: 10px 0;
        }
        .live-region {
            border: 2px solid #4361ee;
            padding: 15px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <h1>Screen Reader Compatibility</h1>
    
    <div class="demo-section">
        <h2>1. Screen Reader Only Text</h2>
        <button onclick="showNotification()">Show Notification</button>
        <div class="notification" aria-live="polite" id="notification">
            <span class="sr-only">Notification: </span>
            <span id="notification-text"></span>
        </div>
    </div>
    
    <div class="demo-section">
        <h2>2. ARIA Live Regions</h2>
        <button onclick="updateLiveRegion()">Update Live Region</button>
        <div class="live-region" aria-live="polite" aria-atomic="true">
            <p>This content will be announced when updated.</p>
            <p id="live-content">Current time: <span id="time"></span></p>
        </div>
    </div>
    
    <div class="demo-section">
        <h2>3. Proper Heading Structure</h2>
        <h1>Main Heading (Level 1)</h1>
        <h2>Section Heading (Level 2)</h2>
        <h3>Subsection Heading (Level 3)</h3>
        <h2>Another Section Heading (Level 2)</h2>
    </div>
    
    <div class="demo-section">
        <h2>4. Accessible Forms</h2>
        <form>
            <fieldset>
                <legend>Personal Information</legend>
                
                <label for="name">Full Name:</label>
                <input type="text" id="name" name="name" required
                       aria-describedby="name-help">
                <p id="name-help" class="sr-only">Please enter your full name</p>
                
                <label for="email">Email Address:</label>
                <input type="email" id="email" name="email" required
                       aria-describedby="email-help">
                <p id="email-help" class="sr-only">Please enter a valid email address</p>
                
                <fieldset>
                    <legend>Preferred Contact Method</legend>
                    <input type="radio" id="contact-email" name="contact" value="email">
                    <label for="contact-email">Email</label>
                    
                    <input type="radio" id="contact-phone" name="contact" value="phone">
                    <label for="contact-phone">Phone</label>
                </fieldset>
            </fieldset>
            
            <button type="submit">Submit Form</button>
        </form>
    </div>

    <script>
        function showNotification() {
            const notification = document.getElementById('notification-text');
            notification.textContent = 'This is a notification that should be announced by screen readers.';
            
            // Make notification visible
            document.getElementById('notification').style.display = 'block';
        }
        
        function updateLiveRegion() {
            const timeElement = document.getElementById('time');
            timeElement.textContent = new Date().toLocaleTimeString();
        }
        
        // Initialize time
        document.getElementById('time').textContent = new Date().toLocaleTimeString();
    </script>
</body>
</html>
```

**Practice Task:**
Test a webpage with a screen reader (or browser extensions that simulate screen readers):
1. Navigate through the page using only keyboard commands
2. Check if all interactive elements are accessible via keyboard
3. Verify that heading structure is logical and properly announced
4. Test form fields for proper labels and instructions
5. Check if dynamic content updates are properly announced
6. Identify any elements that are not properly described

---

### **Lesson: Contrast Ratios**
**Explanation:**
Contrast ratio measures the difference in light between foreground (text) and background colors. Sufficient contrast is essential for users with visual impairments, including color blindness and low vision.

**WCAG Contrast Requirements:**
- **AA Level:** Minimum contrast ratio of 4.5:1 for normal text
- **AAA Level:** Minimum contrast ratio of 7:1 for normal text
- **Large Text:** Minimum ratio of 3:1 for text larger than 18pt or 14pt bold

**Tools for Checking Contrast:**
- Browser developer tools (Chrome, Firefox, Edge)
- Online contrast checkers (WebAIM, Contrast Ratio)
- Color picker tools with contrast calculation
- Browser extensions (axe, WAVE)

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contrast Ratio Demo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .contrast-sample {
            padding: 20px;
            margin: 15px 0;
            border-radius: 5px;
        }
        .good-contrast {
            background-color: #ffffff;
            color: #333333;
            border: 2px solid #4caf50;
        }
        .bad-contrast {
            background-color: #ffff00;
            color: #ffffff;
            border: 2px solid #f44336;
        }
        .results {
            margin: 20px 0;
            padding: 15px;
            background-color: #f5f5f5;
            border-radius: 5px;
        }
        .color-inputs {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin: 20px 0;
        }
        .color-input {
            display: flex;
            flex-direction: column;
        }
        input[type="color"] {
            width: 100%;
            height: 40px;
        }
    </style>
</head>
<body>
    <h1>Color Contrast Ratios</h1>
    
    <div class="contrast-sample good-contrast">
        <h2>Good Contrast Example</h2>
        <p>This text has sufficient contrast against the background (white on dark gray).</p>
        <p>Contrast ratio: 12.63:1 (meets AAA requirements)</p>
    </div>
    
    <div class="contrast-sample bad-contrast">
        <h2>Poor Contrast Example</h2>
        <p>This text has insufficient contrast against the background (white on yellow).</p>
        <p>Contrast ratio: 1.07:1 (does not meet any accessibility requirements)</p>
    </div>
    
    <div class="results">
        <h2>Contrast Ratio Calculator</h2>
        
        <div class="color-inputs">
            <div class="color-input">
                <label for="foreground">Text Color:</label>
                <input type="color" id="foreground" value="#333333">
            </div>
            
            <div class="color-input">
                <label for="background">Background Color:</label>
                <input type="color" id="background" value="#ffffff">
            </div>
        </div>
        
        <button onclick="calculateContrast()">Calculate Contrast Ratio</button>
        
        <div id="contrast-result">
            <p>Contrast ratio: <span id="ratio">--:--</span></p>
            <p>WCAG Rating: <span id="rating">--</span></p>
        </div>
    </div>
    
    <div>
        <h2>WCAG Contrast Requirements</h2>
        <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; border-collapse: collapse;">
            <tr>
                <th>Level</th>
                <th>Normal Text</th>
                <th>Large Text</th>
            </tr>
            <tr>
                <td>AA</td>
                <td>4.5:1</td>
                <td>3:1</td>
            </tr>
            <tr>
                <td>AAA</td>
                <td>7:1</td>
                <td>4.5:1</td>
            </tr>
        </table>
        <p style="margin-top: 10px;">
            <small>Large text is defined as 18pt+ or 14pt+ bold.</small>
        </p>
    </div>

    <script>
        function calculateContrast() {
            const foreground = document.getElementById('foreground').value;
            const background = document.getElementById('background').value;
            
            // Convert hex to RGB
            const fg = hexToRgb(foreground);
            const bg = hexToRgb(background);
            
            // Calculate contrast ratio
            const ratio = getContrastRatio(fg, bg);
            
            // Display results
            document.getElementById('ratio').textContent = ratio.toFixed(2) + ':1';
            
            // Determine WCAG rating
            let rating = 'Fail';
            if (ratio >= 7) {
                rating = 'AAA';
            } else if (ratio >= 4.5) {
                rating = 'AA';
            } else if (ratio >= 3) {
                rating = 'AA for large text only';
            }
            
            document.getElementById('rating').textContent = rating;
        }
        
        function hexToRgb(hex) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        }
        
        function getLuminance(rgb) {
            const rsrgb = rgb.r / 255;
            const gsrgb = rgb.g / 255;
            const bsrgb = rgb.b / 255;
            
            const r = rsrgb <= 0.03928 ? rsrgb / 12.92 : Math.pow((rsrgb + 0.055) / 1.055, 2.4);
            const g = gsrgb <= 0.03928 ? gsrgb / 12.92 : Math.pow((gsrgb + 0.055) / 1.055, 2.4);
            const b = bsrgb <= 0.03928 ? bsrgb / 12.92 : Math.pow((bsrgb + 0.055) / 1.055, 2.4);
            
            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        }
        
        function getContrastRatio(foreground, background) {
            const lum1 = getLuminance(foreground);
            const lum2 = getLuminance(background);
            
            const brightest = Math.max(lum1, lum2);
            const darkest = Math.min(lum1, lum2);
            
            return (brightest + 0.05) / (darkest + 0.05);
        }
        
        // Initialize with default values
        calculateContrast();
    </script>
</body>
</html>
```

**Practice Task:**
Analyze and improve color contrast on a webpage:
1. Use browser developer tools to check contrast ratios of text elements
2. Identify elements that don't meet WCAG contrast requirements
3. Adjust color combinations to improve contrast ratios
4. Test your changes with color blindness simulators
5. Create a color palette that maintains brand identity while ensuring accessibility

---

### **Homework:**
Conduct a comprehensive accessibility audit of a website and create an accessibility report:

1. **Testing:**
   - Test keyboard navigation through all interactive elements
   - Use a screen reader to navigate the site
   - Check color contrast ratios of all text elements
   - Test form accessibility and error messaging
   - Verify proper semantic HTML structure

2. **Documentation:**
   - Create a report detailing accessibility issues found
   - Prioritize issues by severity and impact
   - Provide specific recommendations for fixing each issue
   - Include screenshots and code examples where helpful

3. **Implementation:**
   - Fix at least five critical accessibility issues
   - Document the changes made and why they improve accessibility
   - Retest after making changes to verify improvements

4. **Reflection:**
   - Write a summary of what you learned about web accessibility
   - Discuss the challenges you encountered and how you overcame them
   - Explain why accessibility is important for web development

Submit your accessibility audit report along with the improved HTML file(s).