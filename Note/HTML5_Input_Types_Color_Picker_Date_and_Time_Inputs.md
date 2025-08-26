### **Chapter 18: Day 18**
**Objectives:** Master HTML5 input types, learn to implement color pickers, and understand how to use date and time inputs effectively in web forms.

---

### **Lesson: HTML5 Input Types**
**Explanation:**
HTML5 introduced several new input types that provide better user experience and validation. These input types help users enter data correctly and make forms more intuitive on both desktop and mobile devices.

**New Input Types:**
1. **email:** Validates email format
2. **url:** Validates URL format
3. **tel:** For telephone numbers (no validation, but mobile devices show phone keypad)
4. **number:** For numerical input with spin buttons
5. **range:** Slider control for selecting a number within a range
6. **search:** Styled differently for search inputs
7. **color:** Color picker interface
8. **date:** Date picker
9. **time:** Time picker
10. **datetime-local:** Date and time picker
11. **month:** Month and year picker
12. **week:** Week picker

**Benefits:**
- Built-in validation
- Better mobile user experience
- Appropriate keyboard layouts on mobile devices
- Reduced need for JavaScript validation

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML5 Input Types</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        input:invalid {
            border-color: red;
        }
        input:valid {
            border-color: green;
        }
    </style>
</head>
<body>
    <h1>HTML5 Input Types</h1>
    
    <form>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required>
        </div>
        
        <div class="form-group">
            <label for="url">Website:</label>
            <input type="url" id="url" name="url" placeholder="Enter your website URL">
        </div>
        
        <div class="form-group">
            <label for="tel">Phone Number:</label>
            <input type="tel" id="tel" name="tel" placeholder="Enter your phone number">
        </div>
        
        <div class="form-group">
            <label for="number">Age:</label>
            <input type="number" id="number" name="number" min="1" max="120" step="1" placeholder="Enter your age">
        </div>
        
        <div class="form-group">
            <label for="range">Satisfaction Level:</label>
            <input type="range" id="range" name="range" min="1" max="10" value="5">
            <output for="range" id="range-value">5</output>
        </div>
        
        <div class="form-group">
            <label for="search">Search:</label>
            <input type="search" id="search" name="search" placeholder="Search...">
        </div>
        
        <button type="submit">Submit</button>
    </form>

    <script>
        // Update range value display
        const rangeInput = document.getElementById('range');
        const rangeOutput = document.getElementById('range-value');
        
        rangeInput.addEventListener('input', function() {
            rangeOutput.value = this.value;
        });
    </script>
</body>
</html>
```

**Practice Task:**
Create a registration form that uses at least 5 different HTML5 input types:
1. Email input with validation
2. Number input with min/max constraints
3. Range input with dynamic value display
4. URL input
5. Telephone input
6. Ensure all inputs have proper labels and validation

---

### **Lesson: Color Picker**
**Explanation:**
The color input type provides a built-in color picker interface. Users can select colors visually rather than entering color values manually. The selected value is returned as a hexadecimal color code.

**Key Features:**
- Visual color selection interface
- Returns color in #RRGGBB format
- Can be customized with JavaScript
- Browser support varies (fallback may be needed)

**Attributes:**
- `value`: Sets the default color (e.g., "#ff0000")
- `list`: Associates with a `<datalist>` of predefined color options

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Color Picker</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            transition: background-color 0.3s;
        }
        .form-group {
            margin-bottom: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .color-preview {
            width: 100px;
            height: 100px;
            border: 1px solid #ddd;
            margin-top: 10px;
        }
        .color-scheme {
            display: flex;
            gap: 10px;
            margin-top: 20px;
        }
        .color-option {
            width: 50px;
            height: 50px;
            border: 1px solid #ddd;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Color Picker Examples</h1>
    
    <div class="form-group">
        <label for="bgColor">Background Color:</label>
        <input type="color" id="bgColor" name="bgColor" value="#ffffff">
        <div class="color-preview" id="bgPreview"></div>
    </div>
    
    <div class="form-group">
        <label for="textColor">Text Color:</label>
        <input type="color" id="textColor" name="textColor" value="#000000">
        <div class="color-preview" id="textPreview"></div>
    </div>
    
    <div class="form-group">
        <label for="themeColor">Theme Color:</label>
        <input type="color" id="themeColor" name="themeColor" value="#4361ee" list="themeColors">
        <datalist id="themeColors">
            <option value="#4361ee">Primary Blue</option>
            <option value="#f72585">Primary Pink</option>
            <option value="#4cc9f0">Primary Cyan</option>
            <option value="#7209b7">Primary Purple</option>
        </datalist>
    </div>
    
    <div class="form-group">
        <label>Quick Color Options:</label>
        <div class="color-scheme">
            <div class="color-option" style="background-color: #ff6b6b;" data-color="#ff6b6b"></div>
            <div class="color-option" style="background-color: #4ecdc4;" data-color="#4ecdc4"></div>
            <div class="color-option" style="background-color: #ffe66d;" data-color="#ffe66d"></div>
            <div class="color-option" style="background-color: #1a535c;" data-color="#1a535c"></div>
        </div>
    </div>
    
    <button id="applyColors">Apply Colors</button>

    <script>
        // Update preview boxes
        const bgColorInput = document.getElementById('bgColor');
        const textColorInput = document.getElementById('textColor');
        const bgPreview = document.getElementById('bgPreview');
        const textPreview = document.getElementById('textPreview');
        
        function updatePreviews() {
            bgPreview.style.backgroundColor = bgColorInput.value;
            textPreview.style.backgroundColor = textColorInput.value;
        }
        
        bgColorInput.addEventListener('input', updatePreviews);
        textColorInput.addEventListener('input', updatePreviews);
        
        // Apply colors to page
        document.getElementById('applyColors').addEventListener('click', function() {
            document.body.style.backgroundColor = bgColorInput.value;
            document.body.style.color = textColorInput.value;
        });
        
        // Quick color options
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', function() {
                bgColorInput.value = this.dataset.color;
                updatePreviews();
            });
        });
        
        // Initialize previews
        updatePreviews();
    </script>
</body>
</html>
```

**Practice Task:**
Create a theme customizer with color pickers that allows users to:
1. Change the background color of the page
2. Change the text color of the page
3. Select from predefined color schemes
4. See a preview of their selections before applying
5. Save their color preferences (using localStorage)

---

### **Lesson: Date and Time Inputs**
**Explanation:**
HTML5 provides several input types for handling dates and times, offering built-in calendars and time pickers for better user experience.

**Date and Time Input Types:**
1. **date:** For selecting a date (year, month, day)
2. **time:** For selecting a time (hours, minutes)
3. **datetime-local:** For selecting both date and time
4. **month:** For selecting a month and year
5. **week:** For selecting a week number and year

**Key Attributes:**
- `min`: Earliest allowed date/time
- `max`: Latest allowed date/time
- `step`: Increment step for time inputs
- `value`: Default value

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Date and Time Inputs</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .output {
            margin-top: 20px;
            padding: 15px;
            background-color: #f9f9f9;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>Date and Time Inputs</h1>
    
    <form id="datetimeForm">
        <div class="form-group">
            <label for="date">Date:</label>
            <input type="date" id="date" name="date" min="2020-01-01" max="2030-12-31">
        </div>
        
        <div class="form-group">
            <label for="time">Time:</label>
            <input type="time" id="time" name="time" min="09:00" max="18:00" step="900">
        </div>
        
        <div class="form-group">
            <label for="datetime">Date and Time:</label>
            <input type="datetime-local" id="datetime" name="datetime">
        </div>
        
        <div class="form-group">
            <label for="month">Month:</label>
            <input type="month" id="month" name="month">
        </div>
        
        <div class="form-group">
            <label for="week">Week:</label>
            <input type="week" id="week" name="week">
        </div>
        
        <button type="button" id="showValues">Show Values</button>
    </form>
    
    <div class="output" id="output">
        <h2>Selected Values:</h2>
        <p>Date: <span id="dateValue"></span></p>
        <p>Time: <span id="timeValue"></span></p>
        <p>Date and Time: <span id="datetimeValue"></span></p>
        <p>Month: <span id="monthValue"></span></p>
        <p>Week: <span id="weekValue"></span></p>
    </div>

    <script>
        document.getElementById('showValues').addEventListener('click', function() {
            const dateInput = document.getElementById('date');
            const timeInput = document.getElementById('time');
            const datetimeInput = document.getElementById('datetime');
            const monthInput = document.getElementById('month');
            const weekInput = document.getElementById('week');
            
            document.getElementById('dateValue').textContent = dateInput.value || 'Not selected';
            document.getElementById('timeValue').textContent = timeInput.value || 'Not selected';
            document.getElementById('datetimeValue').textContent = datetimeInput.value || 'Not selected';
            document.getElementById('monthValue').textContent = monthInput.value || 'Not selected';
            document.getElementById('weekValue').textContent = weekInput.value || 'Not selected';
        });
    </script>
</body>
</html>
```

**Practice Task:**
Create an event registration form with:
1. A date input for the event date with appropriate min/max values
2. A time input for the event start time with 15-minute intervals
3. A datetime-local input for the event end date and time
4. A month input for selecting a recurring event month
5. Validation to ensure the end date/time is after the start date/time
6. A summary that displays the selected dates and times in a user-friendly format

---

### **Homework:**
Create a comprehensive "Event Planner" application that incorporates all the input types covered in this chapter:

1. **Event Creation Form:**
   - Event name (text input)
   - Event description (textarea)
   - Event date (date input)
   - Start and end times (time inputs)
   - Event category (select with options)
   - Event color theme (color picker)
   - Maximum attendees (number input)

2. **Advanced Features:**
   - Validation to ensure end time is after start time
   - Color-coded events based on the selected color
   - Save event data to localStorage
   - Display saved events in a list

3. **User Interface:**
   - Clean, responsive design
   - Appropriate labels and instructions for all inputs
   - Visual feedback for validation
   - Preview of the event with selected color theme

4. **Documentation:**
   - Comments explaining your implementation choices
   - A brief user guide explaining how to use the application

Submit your completed event planner as a single HTML file with embedded CSS and JavaScript.