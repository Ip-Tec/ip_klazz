### **Chapter 9: Day 9**
**Objectives:** Learn how to set up a web development project, organize files and folders efficiently, and use VS Code effectively for HTML development.

---

### **Lesson: Project Setup**
**Explanation:**
Proper project setup is crucial for organized, maintainable, and scalable web development. A well-structured project makes it easier to find files, collaborate with others, and deploy your application. The initial setup includes creating the main project folder, setting up version control, and establishing a logical file structure.

**Key Components of Project Setup:**
1. **Project Naming:** Use lowercase letters, hyphens instead of spaces, and descriptive names
2. **Version Control:** Initialize Git to track changes and enable collaboration
3. **File Structure:** Create a logical hierarchy of folders and files
4. **README File:** Document your project's purpose, setup instructions, and usage
5. **Editor Configuration:** Set up consistent coding styles across the team

**Basic Project Setup Steps:**
1. Create a main project folder
2. Initialize Git repository
3. Create basic file structure (HTML, CSS, JavaScript, images folders)
4. Set up a basic HTML file
5. Create a README.md file

**Code Example:**
```html
<!-- Basic HTML template for project setup -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Name</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Project</h1>
        <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section>
            <h2>Main Content Area</h2>
            <p>This is where your main content will go.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023 My Project</p>
    </footer>
    
    <script src="js/script.js"></script>
</body>
</html>
```

**Practice Task:**
1. Create a new folder for a project called "my-portfolio"
2. Initialize a Git repository in this folder
3. Create the following files and folders:
   - index.html
   - about.html
   - contact.html
   - css/ folder with styles.css file
   - js/ folder with script.js file
   - images/ folder
   - README.md file
4. Add the basic HTML template to index.html
5. Make your first Git commit with the message "Initial project setup"

---

### **Lesson: Folder Organization**
**Explanation:**
A well-organized folder structure is essential for maintaining clarity as your project grows. Different types of projects may require different structures, but some principles apply universally. Good organization makes it easier to find files, manage assets, and scale your application.

**Common Folder Structure Patterns:**
1. **By File Type:** Group files by their type (HTML, CSS, JS, images)
2. **By Feature:** Group files by the feature they implement (header, footer, product)
3. **By Page:** Group files by the page they belong to (home, about, contact)

**Recommended Folder Structure for a Medium-Sized Project:**
```
my-project/
├── index.html
├── README.md
├── .gitignore
├── css/
│   ├── main.css
│   ├── components/
│   │   ├── header.css
│   │   ├── footer.css
│   │   └── buttons.css
│   └── pages/
│       ├── home.css
│       ├── about.css
│       └── contact.css
├── js/
│   ├── main.js
│   ├── components/
│   │   ├── navigation.js
│   │   └── forms.js
│   └── pages/
│       ├── home.js
│       └── about.js
├── images/
│   ├── icons/
│   ├── photos/
│   └── logos/
├── fonts/
└── assets/
    ├── pdfs/
    └── docs/
```

**Code Example:**
```html
<!-- Example of linking to organized CSS and JS files -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Well-Organized Project</title>
    <!-- Main CSS -->
    <link rel="stylesheet" href="css/main.css">
    <!-- Component CSS -->
    <link rel="stylesheet" href="css/components/header.css">
    <link rel="stylesheet" href="css/components/footer.css">
    <!-- Page-specific CSS -->
    <link rel="stylesheet" href="css/pages/home.css">
</head>
<body>
    <header>
        <!-- Header content -->
    </header>
    
    <main>
        <!-- Main content -->
    </main>
    
    <footer>
        <!-- Footer content -->
    </footer>
    
    <!-- Main JS -->
    <script src="js/main.js"></script>
    <!-- Component JS -->
    <script src="js/components/navigation.js"></script>
    <!-- Page-specific JS -->
    <script src="js/pages/home.js"></script>
</body>
</html>
```

**Practice Task:**
1. Reorganize your "my-portfolio" project with the following structure:
   ```
   my-portfolio/
   ├── index.html
   ├── about.html
   ├── contact.html
   ├── css/
   │   ├── main.css
   │   ├── components/
   │   │   ├── header.css
   │   │   ├── navigation.css
   │   │   └── footer.css
   │   └── pages/
   │       ├── home.css
   │       ├── about.css
   │       └── contact.css
   ├── js/
   │   ├── main.js
   │   └── components/
   │       ├── navigation.js
   │       └── form-validation.js
   ├── images/
   │   ├── photos/
   │   ├── icons/
   │   └── logos/
   └── README.md
   ```
2. Update your HTML files to reference the organized CSS and JS files
3. Create a `.gitignore` file to exclude unnecessary files from version control
4. Make a Git commit with the message "Reorganized folder structure"

---

### **Lesson: Using VS Code for HTML**
**Explanation:**
Visual Studio Code (VS Code) is a powerful, free code editor with excellent support for web development. Knowing how to use its features effectively can significantly boost your productivity.

**Essential VS Code Features for HTML Development:**
1. **Emmet Abbreviations:** Quickly generate HTML structure with shorthand
2. **IntelliSense:** Smart code completion, suggestions, and documentation
3. **Extensions:** Enhance functionality with plugins
4. **Integrated Terminal:** Run commands without leaving the editor
5. **Version Control Integration:** Git commands built into the editor
6. **Multi-cursor Editing:** Edit multiple lines simultaneously
7. **Code Formatting:** Automatically format code for consistency

**Useful VS Code Extensions for HTML Development:**
- HTML CSS Support: CSS Intellisense for HTML
- Live Server: Launch a development local server with live reload
- Prettier: Code formatter
- Auto Rename Tag: Automatically rename paired HTML tags
- HTMLHint: HTML linting tool
- Bracket Pair Colorizer: Color matching brackets

**Code Example:**
```html
<!-- Using Emmet abbreviations in VS Code -->
<!-- Type "!" and press Tab to generate HTML5 boilerplate -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Type "ul>li*5" and press Tab to generate -->
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    
    <!-- Type "div.container>div.row>div.col-md-4*3" and press Tab -->
    <div class="container">
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
            <div class="col-md-4"></div>
        </div>
    </div>
</body>
</html>
```

**Practice Task:**
1. Install VS Code if you haven't already
2. Install the following extensions:
   - Live Server
   - Prettier
   - Auto Rename Tag
   - HTMLHint
3. Practice using Emmet abbreviations to generate:
   - A navigation with 5 links
   - A table with 3 rows and 4 columns
   - A form with inputs for name, email, and message
4. Use Live Server to launch your portfolio project
5. Use Prettier to format your HTML files
6. Use the multi-cursor feature to edit multiple lines at once

---

### **Homework:**
**Create a Complete Project Setup:**

1. Choose a project idea (e.g., restaurant website, blog, event page)
2. Set up a complete project structure with organized folders
3. Create at least 3 HTML pages with proper semantic structure
4. Implement a consistent navigation across all pages
5. Add a README.md file with:
   - Project description
   - Setup instructions
   - Technologies used
6. Initialize Git and make regular commits with descriptive messages
7. Use VS Code features effectively:
   - Emmet abbreviations
   - Live Server for previewing
   - Prettier for code formatting
   - At least 3 other extensions

8. Test your project in a web browser to ensure all links work correctly
9. Create a GitHub repository and push your code to it

Submit the GitHub repository link as your homework assignment.