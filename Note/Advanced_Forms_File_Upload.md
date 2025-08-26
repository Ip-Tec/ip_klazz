### **Chapter 10: Day 10**
**Objectives:** Master advanced form techniques, learn to handle file uploads, and create custom-styled form elements that enhance user experience.

---

### **Lesson: Advanced Forms**
**Explanation:**
Advanced forms go beyond basic input fields to provide better user experience, validation, and functionality. HTML5 introduced several new form features that make forms more powerful and user-friendly without requiring JavaScript.

**Advanced Form Features:**
1. **New Input Types:** `email`, `url`, `tel`, `number`, `date`, `time`, `color`, `range`
2. **Form Attributes:** `placeholder`, `required`, `pattern`, `autocomplete`, `autofocus`
3. **Form Validation:** Built-in validation with custom error messages
4. **Data Lists:** Provide suggested options for text inputs
5. **Progress and Meter:** Show progress bars and measurement indicators

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Advanced Forms</title>
    <style>
        form {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input, select, textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
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
    <form id="advanced-form">
        <h2>Advanced Form Example</h2>
        
        <!-- Text input with pattern validation -->
        <label for="username">Username (must be 4-12 characters):</label>
        <input type="text" id="username" name="username" pattern="[A-Za-z0-9]{4,12}" required>
        
        <!-- Email input with custom validation message -->
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required 
               oninvalid="this.setCustomValidity('Please enter a valid email address')"
               oninput="this.setCustomValidity('')">
        
        <!-- URL input -->
        <label for="website">Website:</label>
        <input type="url" id="website" name="website" placeholder="https://example.com">
        
        <!-- Date input -->
        <label for="birthdate">Birthdate:</label>
        <input type="date" id="birthdate" name="birthdate">
        
        <!-- Range input -->
        <label for="volume">Volume:</label>
        <input type="range" id="volume" name="volume" min="0" max="100" value="50">
        <output for="volume" id="volume-output">50</output>
        
        <!-- Color input -->
        <label for="color">Favorite Color:</label>
        <input type="color" id="color" name="color" value="#ff0000">
        
        <!-- Datalist for suggestions -->
        <label for="browser">Preferred Browser:</label>
        <input list="browsers" id="browser" name="browser">
        <datalist id="browsers">
            <option value="Chrome">
            <option value="Firefox">
            <option value="Safari">
            <option value="Edge">
            <option value="Opera">
        </datalist>
        
        <!-- Progress bar -->
        <label for="progress">Form Completion:</label>
        <progress id="progress" value="50" max="100">50%</progress>
        
        <button type="submit">Submit</button>
    </form>

    <script>
        // Update range output value
        const volume = document.getElementById('volume');
        const volumeOutput = document.getElementById('volume-output');
        
        volume.addEventListener('input', () => {
            volumeOutput.value = volume.value;
        });
        
        // Validate form and update progress
        const form = document.getElementById('advanced-form');
        const progress = document.getElementById('progress');
        
        form.addEventListener('input', () => {
            const inputs = form.querySelectorAll('input');
            let validCount = 0;
            
            inputs.forEach(input => {
                if (input.checkValidity()) {
                    validCount++;
                }
            });
            
            progress.value = (validCount / inputs.length) * 100;
        });
    </script>
</body>
</html>
```

**Practice Task:**
Create an advanced registration form with:
1. At least 5 different HTML5 input types
2. Custom validation messages for required fields
3. A datalist for suggesting countries
4. A range input with a dynamic output display
5. A progress bar that updates as users complete the form
6. Proper accessibility attributes for all form elements

---

### **Lesson: File Uploads**
**Explanation:**
File uploads allow users to send files from their local device to a web server. HTML provides the `<input type="file">` element for this purpose, which can be enhanced with various attributes to control what types of files can be uploaded.

**Key Features:**
- **Multiple Files:** Allow selection of multiple files with the `multiple` attribute
- **File Type Restrictions:** Limit file types with the `accept` attribute
- **Custom Styling:** Style the file input to match your design
- **Preview Capability:** Show previews of selected images before upload
- **Drag and Drop:** Implement drag-and-drop functionality for better UX

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>File Uploads</title>
    <style>
        .upload-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .drop-area {
            border: 2px dashed #ccc;
            border-radius: 5px;
            padding: 25px;
            text-align: center;
            margin-bottom: 20px;
            transition: all 0.3s;
        }
        .drop-area.highlight {
            border-color: purple;
            background-color: #f0f0f0;
        }
        .file-input {
            display: none;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background: #007bff;
            color: white;
            cursor: pointer;
            border-radius: 5px;
            margin: 10px;
        }
        .preview-container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 20px;
        }
        .preview-item {
            position: relative;
            margin: 10px;
            width: 100px;
            height: 100px;
        }
        .preview-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
        }
        .remove-btn {
            position: absolute;
            top: -5px;
            right: -5px;
            background: red;
            color: white;
            border: none;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="upload-container">
        <h2>File Upload Example</h2>
        
        <form id="upload-form" enctype="multipart/form-data">
            <!-- Hidden file input -->
            <input type="file" id="file-input" class="file-input" multiple accept="image/*">
            
            <!-- Drop area and custom button -->
            <div id="drop-area" class="drop-area">
                <p>Drag & drop files here or click to select</p>
                <label for="file-input" class="button">Choose Files</label>
            </div>
            
            <!-- File info -->
            <div id="file-info"></div>
            
            <!-- Preview container -->
            <div id="preview-container" class="preview-container"></div>
            
            <button type="submit" id="submit-btn" disabled>Upload Files</button>
        </form>
    </div>

    <script>
        const dropArea = document.getElementById('drop-area');
        const fileInput = document.getElementById('file-input');
        const fileInfo = document.getElementById('file-info');
        const previewContainer = document.getElementById('preview-container');
        const submitBtn = document.getElementById('submit-btn');
        let files = [];
        
        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, preventDefaults, false);
        });
        
        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }
        
        // Highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].forEach(eventName => {
            dropArea.addEventListener(eventName, highlight, false);
        });
        
        ['dragleave', 'drop'].forEach(eventName => {
            dropArea.addEventListener(eventName, unhighlight, false);
        });
        
        function highlight() {
            dropArea.classList.add('highlight');
        }
        
        function unhighlight() {
            dropArea.classList.remove('highlight');
        }
        
        // Handle dropped files
        dropArea.addEventListener('drop', handleDrop, false);
        
        function handleDrop(e) {
            const dt = e.dataTransfer;
            const newFiles = dt.files;
            handleFiles(newFiles);
        }
        
        // Handle files selected via button
        fileInput.addEventListener('change', function() {
            handleFiles(this.files);
        });
        
        // Process files
        function handleFiles(newFiles) {
            files = [...files, ...newFiles];
            updateFileInfo();
            previewFiles();
            submitBtn.disabled = files.length === 0;
        }
        
        // Update file information display
        function updateFileInfo() {
            if (files.length === 0) {
                fileInfo.innerHTML = '<p>No files selected</p>';
                return;
            }
            
            fileInfo.innerHTML = `
                <p>Selected ${files.length} file(s):</p>
                <ul>
                    ${files.map(file => `<li>${file.name} (${formatFileSize(file.size)})</li>`).join('')}
                </ul>
            `;
        }
        
        // Format file size to human-readable format
        function formatFileSize(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }
        
        // Preview image files
        function previewFiles() {
            previewContainer.innerHTML = '';
            
            files.forEach((file, index) => {
                if (!file.type.match('image.*')) return;
                
                const reader = new FileReader();
                
                reader.onload = function(e) {
                    const previewItem = document.createElement('div');
                    previewItem.className = 'preview-item';
                    
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    
                    const removeBtn = document.createElement('button');
                    removeBtn.className = 'remove-btn';
                    removeBtn.innerHTML = '×';
                    removeBtn.onclick = () => removeFile(index);
                    
                    previewItem.appendChild(img);
                    previewItem.appendChild(removeBtn);
                    previewContainer.appendChild(previewItem);
                };
                
                reader.readAsDataURL(file);
            });
        }
        
        // Remove file from selection
        function removeFile(index) {
            files.splice(index, 1);
            updateFileInfo();
            previewFiles();
            submitBtn.disabled = files.length === 0;
        }
        
        // Handle form submission
        document.getElementById('upload-form').addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would send the files to a server here
            alert(`Would upload ${files.length} file(s) to server`);
        });
    </script>
</body>
</html>
```

**Practice Task:**
Create an image uploader with:
1. A styled drop zone for drag-and-drop uploads
2. A custom button to trigger file selection
3. Support for multiple image files
4. Image previews with the ability to remove selected images
5. File type restriction to images only
6. Display of file information (name, size, type)
7. A submit button that's only enabled when files are selected

---

### **Lesson: Custom Form Styling**
**Explanation:**
Custom form styling allows you to create visually appealing forms that match your website's design while maintaining accessibility and usability. Modern CSS techniques like pseudo-elements, custom properties, and advanced selectors make it possible to style even the most stubborn form elements.

**Key Techniques:**
1. **Custom Checkboxes and Radio Buttons:** Using the `:checked` pseudo-class and adjacent sibling selectors
2. **Styled Select Dropdowns:** Using appearance: none and custom arrow styling
3. **Focus States:** Creating custom focus indicators for better accessibility
4. **Validation Styles:** Styling valid and invalid states with `:valid` and `:invalid`
5. **CSS Variables:** Using custom properties for consistent styling

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Custom Form Styling</title>
    <style>
        :root {
            --primary-color: #4361ee;
            --success-color: #4cc9f0;
            --error-color: #f72585;
            --text-color: #333;
            --bg-color: #f8f9fa;
            --border-color: #dee2e6;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.6;
            padding: 20px;
        }
        
        .form-container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        h2 {
            text-align: center;
            margin-bottom: 30px;
            color: var(--primary-color);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
        }
        
        /* Custom Text Input */
        .custom-input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid var(--border-color);
            border-radius: 6px;
            font-size: 16px;
            transition: all 0.3s;
        }
        
        .custom-input:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
        }
        
        .custom-input:invalid {
            border-color: var(--error-color);
        }
        
        .custom-input:valid {
            border-color: var(--success-color);
        }
        
        /* Custom Select */
        .select-wrapper {
            position: relative;
        }
        
        .select-wrapper::after {
            content: "▼";
            font-size: 12px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
        }
        
        .custom-select {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid var(--border-color);
            border-radius: 6px;
            font-size: 16px;
            background-color: white;
            appearance: none;
            transition: all 0.3s;
        }
        
        .custom-select:focus {
            border-color: var(--primary-color);
            outline: none;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);
        }
        
        /* Custom Checkbox */
        .checkbox-container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 16px;
            user-select: none;
        }
        
        .checkbox-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 5px;
            transition: all 0.3s;
        }
        
        .checkbox-container:hover input ~ .checkmark {
            background-color: #ccc;
        }
        
        .checkbox-container input:checked ~ .checkmark {
            background-color: var(--primary-color);
        }
        
        .checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        
        .checkbox-container input:checked ~ .checkmark:after {
            display: block;
        }
        
        .checkbox-container .checkmark:after {
            left: 9px;
            top: 5px;
            width: 7px;
            height: 12px;
            border: solid white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }
        
        /* Custom Radio Buttons */
        .radio-container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 16px;
            user-select: none;
        }
        
        .radio-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }
        
        .radio-checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
            border-radius: 50%;
            transition: all 0.3s;
        }
        
        .radio-container:hover input ~ .radio-checkmark {
            background-color: #ccc;
        }
        
        .radio-container input:checked ~ .radio-checkmark {
            background-color: var(--primary-color);
        }
        
        .radio-checkmark:after {
            content: "";
            position: absolute;
            display: none;
        }
        
        .radio-container input:checked ~ .radio-checkmark:after {
            display: block;
        }
        
        .radio-container .radio-checkmark:after {
            top: 9px;
            left: 9px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: white;
        }
        
        /* Custom Button */
        .custom-button {
            background-color: var(--primary-color);
            color: white;
            border: none;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
            width: 100%;
            font-weight: 600;
        }
        
        .custom-button:hover {
            background-color: #3651d3;
            transform: translateY(-2px);
        }
        
        .custom-button:active {
            transform: translateY(0);
        }
        
        .custom-button:focus {
            outline: none;
            box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.4);
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Custom Form Styling</h2>
        
        <form>
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" id="name" class="custom-input" placeholder="Enter your name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email Address</label>
                <input type="email" id="email" class="custom-input" placeholder="Enter your email" required>
            </div>
            
            <div class="form-group">
                <label for="department">Department</label>
                <div class="select-wrapper">
                    <select id="department" class="custom-select" required>
                        <option value="">Select a department</option>
                        <option value="sales">Sales</option>
                        <option value="support">Support</option>
                        <option value="engineering">Engineering</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
            </div>
            
            <div class="form-group">
                <label>Subscribe to Newsletter</label>
                <label class="checkbox-container">
                    Yes, subscribe me to the newsletter
                    <input type="checkbox" checked="checked">
                    <span class="checkmark"></span>
                </label>
            </div>
            
            <div class="form-group">
                <label>Preferred Contact Method</label>
                <label class="radio-container">
                    Email
                    <input type="radio" name="contact-method" value="email" checked>
                    <span class="radio-checkmark"></span>
                </label>
                <label class="radio-container">
                    Phone
                    <input type="radio" name="contact-method" value="phone">
                    <span class="radio-checkmark"></span>
                </label>
                <label class="radio-container">
                    SMS
                    <input type="radio" name="contact-method" value="sms">
                    <span class="radio-checkmark"></span>
                </label>
            </div>
            
            <button type="submit" class="custom-button">Submit Form</button>
        </form>
    </div>
</body>
</html>
```

**Practice Task:**
Create a styled contact form with:
1. Custom-styled text inputs with focus states
2. A custom select dropdown with a custom arrow
3. Custom checkboxes and radio buttons
4. A styled submit button with hover and focus effects
5. Validation styles for valid and invalid inputs
6. Consistent spacing and typography
7. A cohesive color scheme using CSS variables

---

### **Homework:**
Create a comprehensive "Job Application" form that incorporates all the techniques learned in this chapter:

1. **Form Structure:**
   - Personal information section (name, email, phone)
   - Position applying for (dropdown with job options)
   - Resume upload with drag-and-drop functionality
   - Cover letter textarea
   - Equal opportunity employment questions (radio buttons)
   - Terms and conditions agreement (checkbox)

2. **Advanced Features:**
   - Custom validation for all fields
   - File upload for resume with preview (if PDF) or icon (if other format)
   - Progress indicator showing form completion
   - Conditional fields that appear based on previous selections

3. **Custom Styling:**
   - Consistent, professional design using CSS variables
   - Custom-styled form controls (inputs, selects, checkboxes, radio buttons)
   - Responsive design that works on mobile and desktop
   - Accessibility features (proper labels, focus indicators, ARIA attributes)

4. **Implementation:**
   - Use semantic HTML5 elements
   - Organize your code with comments
   - Ensure the form is fully functional (though it won't actually submit to a server)

Submit your completed form as a single HTML file with embedded CSS and JavaScript.