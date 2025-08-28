### **Chapter 19: Day 19**
**Objectives:** Learn to implement drag and drop functionality, understand the contenteditable attribute for in-browser editing, and master data attributes for storing custom information in HTML elements.

---

### **Lesson: Drag and Drop API**
**Explanation:**
The HTML5 Drag and Drop API allows users to drag elements and drop them onto other elements. This native browser functionality enables intuitive user interfaces for sorting, organizing, and manipulating content without requiring complex JavaScript libraries.

**Key Concepts:**
1. **Draggable Attribute:** Makes an element draggable
2. **Drag Events:** Multiple events fired during drag operations
3. **DataTransfer Object:** Stores data being dragged
4. **Drop Zones:** Elements that can receive dragged items

**Drag Events:**
- `dragstart`: Fired when dragging starts
- `drag`: Fired continuously while dragging
- `dragend`: Fired when dragging ends
- `dragenter`: Fired when dragged item enters a drop target
- `dragover`: Fired continuously while over a drop target
- `dragleave`: Fired when dragged item leaves a drop target
- `drop`: Fired when item is dropped on a target

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Drag and Drop API</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .container {
            display: flex;
            gap: 20px;
            margin: 20px 0;
        }
        .drag-container, .drop-container {
            border: 2px dashed #ccc;
            border-radius: 5px;
            padding: 20px;
            min-height: 200px;
            width: 50%;
        }
        .drop-container {
            background-color: #f9f9f9;
        }
        .drop-container.drag-over {
            background-color: #e3f2fd;
            border-color: #2196f3;
        }
        .item {
            background-color: #4361ee;
            color: white;
            padding: 10px;
            margin: 5px 0;
            border-radius: 3px;
            cursor: move;
        }
        .item.dragging {
            opacity: 0.5;
        }
        .success-message {
            color: #4caf50;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>Drag and Drop API</h1>
    
    <div class="container">
        <div class="drag-container">
            <h2>Drag Items</h2>
            <div class="item" draggable="true" data-id="1">Item 1</div>
            <div class="item" draggable="true" data-id="2">Item 2</div>
            <div class="item" draggable="true" data-id="3">Item 3</div>
            <div class="item" draggable="true" data-id="4">Item 4</div>
        </div>
        
        <div class="drop-container" id="dropZone">
            <h2>Drop Zone</h2>
            <p>Drag items here</p>
        </div>
    </div>
    
    <div id="message" class="success-message"></div>

    <script>
        // Get elements
        const items = document.querySelectorAll('.item');
        const dropZone = document.getElementById('dropZone');
        const message = document.getElementById('message');
        
        // Store original positions for reset functionality
        const originalContainer = document.querySelector('.drag-container');
        
        // Add event listeners to draggable items
        items.forEach(item => {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragend', handleDragEnd);
        });
        
        // Add event listeners to drop zone
        dropZone.addEventListener('dragenter', handleDragEnter);
        dropZone.addEventListener('dragover', handleDragOver);
        dropZone.addEventListener('dragleave', handleDragLeave);
        dropZone.addEventListener('drop', handleDrop);
        
        // Drag event handlers
        function handleDragStart(e) {
            this.classList.add('dragging');
            e.dataTransfer.setData('text/plain', this.dataset.id);
            e.dataTransfer.effectAllowed = 'move';
        }
        
        function handleDragEnd() {
            this.classList.remove('dragging');
        }
        
        // Drop zone event handlers
        function handleDragEnter(e) {
            e.preventDefault();
            dropZone.classList.add('drag-over');
        }
        
        function handleDragOver(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
        
        function handleDragLeave() {
            dropZone.classList.remove('drag-over');
        }
        
        function handleDrop(e) {
            e.preventDefault();
            dropZone.classList.remove('drag-over');
            
            // Get the dragged item's ID
            const id = e.dataTransfer.getData('text/plain');
            const draggedItem = document.querySelector(`.item[data-id="${id}"]`);
            
            // Move item to drop zone
            dropZone.appendChild(draggedItem);
            
            // Show success message
            message.textContent = `Item ${id} dropped successfully!`;
            
            // Reset message after 2 seconds
            setTimeout(() => {
                message.textContent = '';
            }, 2000);
        }
        
        // Reset functionality (optional)
        function resetContainers() {
            // Move all items back to original container
            const itemsInDropZone = dropZone.querySelectorAll('.item');
            itemsInDropZone.forEach(item => {
                originalContainer.appendChild(item);
            });
        }
        
        // Add reset button
        const resetButton = document.createElement('button');
        resetButton.textContent = 'Reset';
        resetButton.addEventListener('click', resetContainers);
        document.body.appendChild(resetButton);
    </script>
</body>
</html>
```

**Practice Task:**
Create a task management board with drag and drop functionality:
1. Create columns for "To Do", "In Progress", and "Done"
2. Make task cards draggable between columns
3. Add visual feedback during drag operations
4. Store task status in data attributes
5. Add a button to reset all tasks to the "To Do" column

---

### **Lesson: ContentEditable**
**Explanation:**
The `contenteditable` attribute allows users to edit the content of an HTML element directly in the browser. This feature enables rich text editing, inline editing, and custom text editors without complex JavaScript libraries.

**Key Features:**
- Simple implementation with just an attribute
- Browser handles most editing operations
- Can be combined with JavaScript for advanced functionality
- Supports rich text formatting in most browsers

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>ContentEditable</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .editable {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin: 10px 0;
            min-height: 100px;
        }
        .editable:focus {
            outline: none;
            border-color: #4361ee;
            box-shadow: 0 0 5px rgba(67, 97, 238, 0.3);
        }
        .toolbar {
            display: flex;
            gap: 5px;
            margin: 10px 0;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 5px;
        }
        button {
            padding: 5px 10px;
            border: 1px solid #ddd;
            background-color: white;
            border-radius: 3px;
            cursor: pointer;
        }
        button:hover {
            background-color: #f0f0f0;
        }
        .save-status {
            color: #4caf50;
            font-weight: bold;
            margin-top: 10px;
        }
    </style>
</head>
<body>
    <h1>ContentEditable Examples</h1>
    
    <div>
        <h2>Basic Editable Div</h2>
        <div class="editable" contenteditable="true">
            Click here to edit this content. You can type anything you want!
        </div>
    </div>
    
    <div>
        <h2>Rich Text Editor</h2>
        <div class="toolbar">
            <button onclick="formatText('bold')"><b>B</b></button>
            <button onclick="formatText('italic')"><i>I</i></button>
            <button onclick="formatText('underline')"><u>U</u></button>
            <button onclick="formatText('insertUnorderedList')">• List</button>
            <button onclick="formatText('justifyLeft')">Left</button>
            <button onclick="formatText('justifyCenter')">Center</button>
            <button onclick="formatText('justifyRight')">Right</button>
        </div>
        <div class="editable" contenteditable="true" id="richTextEditor">
            This is a rich text editor. Use the toolbar above to format your text.
            <br><br>
            You can make text <b>bold</b>, <i>italic</i>, or <u>underlined</u>.
            <br><br>
            You can also create lists:
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </div>
    
    <div>
        <h2>Inline Editable Elements</h2>
        <p>Click on any of the following to edit:</p>
        <h3 contenteditable="true">Editable Heading</h3>
        <p contenteditable="true">This is an editable paragraph. You can change this text by clicking on it.</p>
        <ul>
            <li contenteditable="true">Editable list item 1</li>
            <li contenteditable="true">Editable list item 2</li>
            <li contenteditable="true">Editable list item 3</li>
        </ul>
    </div>
    
    <button onclick="saveContent()">Save Content</button>
    <div id="saveStatus" class="save-status"></div>

    <script>
        // Format text in the rich text editor
        function formatText(command) {
            document.execCommand(command, false, null);
            document.getElementById('richTextEditor').focus();
        }
        
        // Save content to localStorage
        function saveContent() {
            const editableElements = document.querySelectorAll('[contenteditable="true"]');
            const content = {};
            
            editableElements.forEach((element, index) => {
                content[`editable-${index}`] = element.innerHTML;
            });
            
            localStorage.setItem('editableContent', JSON.stringify(content));
            
            // Show save status
            const status = document.getElementById('saveStatus');
            status.textContent = 'Content saved successfully!';
            
            setTimeout(() => {
                status.textContent = '';
            }, 2000);
        }
        
        // Load content from localStorage
        function loadContent() {
            const savedContent = localStorage.getItem('editableContent');
            if (savedContent) {
                const content = JSON.parse(savedContent);
                const editableElements = document.querySelectorAll('[contenteditable="true"]');
                
                editableElements.forEach((element, index) => {
                    if (content[`editable-${index}`]) {
                        element.innerHTML = content[`editable-${index}`];
                    }
                });
            }
        }
        
        // Load content when page loads
        window.addEventListener('DOMContentLoaded', loadContent);
    </script>
</body>
</html>
```

**Practice Task:**
Create a simple note-taking application using contenteditable:
1. Create multiple editable sections for different types of notes
2. Add a toolbar with basic formatting options
3. Implement save and load functionality using localStorage
4. Add the ability to create new notes
5. Include a preview mode that shows the notes without editing

---

### **Lesson: Data Attributes**
**Explanation:**
Data attributes (data-*) allow you to store custom data private to the page or application. These attributes provide a way to embed extra information in HTML elements without using non-standard attributes or extra properties.

**Key Features:**
- Custom attribute names starting with "data-"
- Accessible via JavaScript through the dataset property
- Can store strings, numbers, or JSON data
- Useful for connecting HTML elements with JavaScript functionality

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Data Attributes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        .product {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 15px;
            margin: 10px 0;
            cursor: pointer;
        }
        .product:hover {
            background-color: #f9f9f9;
        }
        .product.highlight {
            border-color: #4361ee;
            background-color: #e3f2fd;
        }
        .modal {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
        }
        .overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }
        .close {
            float: right;
            cursor: pointer;
            font-weight: bold;
        }
        .filters {
            margin: 20px 0;
            padding: 10px;
            background-color: #f5f5f5;
            border-radius: 5px;
        }
        .filter-btn {
            margin: 0 5px;
            padding: 5px 10px;
            border: 1px solid #ddd;
            background-color: white;
            border-radius: 3px;
            cursor: pointer;
        }
        .filter-btn.active {
            background-color: #4361ee;
            color: white;
        }
    </style>
</head>
<body>
    <h1>Data Attributes Examples</h1>
    
    <div class="filters">
        <h3>Filter by Category:</h3>
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="electronics">Electronics</button>
        <button class="filter-btn" data-filter="clothing">Clothing</button>
        <button class="filter-btn" data-filter="books">Books</button>
    </div>
    
    <div id="products">
        <div class="product" data-id="1" data-category="electronics" data-price="599.99" data-rating="4.5">
            <h3>Smartphone</h3>
            <p>Latest model with advanced features</p>
            <p>Price: $599.99</p>
        </div>
        
        <div class="product" data-id="2" data-category="clothing" data-price="49.99" data-rating="4.2">
            <h3>T-Shirt</h3>
            <p>100% cotton, comfortable fit</p>
            <p>Price: $49.99</p>
        </div>
        
        <div class="product" data-id="3" data-category="books" data-price="19.99" data-rating="4.8">
            <h3>Programming Book</h3>
            <p>Learn HTML, CSS, and JavaScript</p>
            <p>Price: $19.99</p>
        </div>
        
        <div class="product" data-id="4" data-category="electronics" data-price="299.99" data-rating="4.0">
            <h3>Headphones</h3>
            <p>Wireless headphones with noise cancellation</p>
            <p>Price: $299.99</p>
        </div>
        
        <div class="product" data-id="5" data-category="clothing" data-price="89.99" data-rating="4.3">
            <h3>Jeans</h3>
            <p>Denim jeans with modern fit</p>
            <p>Price: $89.99</p>
        </div>
    </div>
    
    <div class="overlay" id="overlay"></div>
    <div class="modal" id="modal">
        <span class="close" id="closeModal">&times;</span>
        <h2 id="modalTitle"></h2>
        <p id="modalCategory"></p>
        <p id="modalPrice"></p>
        <p id="modalRating"></p>
    </div>

    <script>
        // Get elements
        const products = document.querySelectorAll('.product');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const overlay = document.getElementById('overlay');
        const modal = document.getElementById('modal');
        const closeModal = document.getElementById('closeModal');
        
        // Add click event to products
        products.forEach(product => {
            product.addEventListener('click', function() {
                // Get data from attributes
                const id = this.dataset.id;
                const category = this.dataset.category;
                const price = this.dataset.price;
                const rating = this.dataset.rating;
                const title = this.querySelector('h3').textContent;
                
                // Show modal with product details
                document.getElementById('modalTitle').textContent = title;
                document.getElementById('modalCategory').textContent = `Category: ${category}`;
                document.getElementById('modalPrice').textContent = `Price: $${price}`;
                document.getElementById('modalRating').textContent = `Rating: ${rating}/5`;
                
                // Show modal and overlay
                modal.style.display = 'block';
                overlay.style.display = 'block';
            });
        });
        
        // Close modal
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        });
        
        // Filter functionality
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Get filter value
                const filter = this.dataset.filter;
                
                // Filter products
                products.forEach(product => {
                    if (filter === 'all' || product.dataset.category === filter) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
        
        // Additional example: Highlight expensive products
        function highlightExpensiveProducts() {
            products.forEach(product => {
                const price = parseFloat(product.dataset.price);
                if (price > 100) {
                    product.classList.add('highlight');
                }
            });
        }
        
        // Run on page load
        window.addEventListener('DOMContentLoaded', highlightExpensiveProducts);
    </script>
</body>
</html>
```

**Practice Task:**
Create a product catalog that uses data attributes for:
1. Filtering products by category, price range, and rating
2. Displaying detailed product information in a modal
3. Highlighting products based on specific criteria (e.g., on sale, high rating)
4. Sorting products by different attributes (price, rating, etc.)
5. Storing additional product information in data attributes

---

### **Homework:**
Create a comprehensive "Task Manager" application that incorporates all the concepts covered in this chapter:

1. **Drag and Drop Functionality:**
   - Allow tasks to be dragged between different status columns
   - Provide visual feedback during drag operations
   - Update task status based on where it's dropped

2. **ContentEditable Tasks:**
   - Allow users to edit task titles and descriptions directly
   - Add a rich text editor for task details
   - Implement auto-save functionality

3. **Data Attributes:**
   - Store task metadata (priority, due date, assignee) in data attributes
   - Implement filtering and sorting based on data attributes
   - Use data attributes to connect tasks with their related functionality

4. **Additional Features:**
   - Add new tasks with a form
   - Delete tasks with a confirmation dialog
   - Persist tasks using localStorage
   - Responsive design that works on mobile and desktop

5. **Documentation:**
   - Include comments explaining your implementation
   - Write a user guide explaining how to use the application
   - Document how you used each of the three technologies (drag and drop, contenteditable, data attributes)

Submit your completed task manager as a single HTML file with embedded CSS and JavaScript.