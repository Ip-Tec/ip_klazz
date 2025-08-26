### **Chapter 24: Day 24**
**Objectives:** Apply all HTML knowledge learned so far to build a complete resume webpage, practice project organization, and learn how to review and improve code.

---

### **Lesson: HTML Mini Project 1**
**Explanation:**
This mini-project will test your ability to create a complete webpage using proper HTML structure, semantics, and styling. You'll build a personal resume page that demonstrates your understanding of various HTML elements and techniques.

**Project Requirements:**
1. Use semantic HTML5 elements
2. Implement proper document structure
3. Include various content types (text, images, lists, etc.)
4. Ensure accessibility best practices
5. Create a responsive design
6. Use external CSS for styling

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Professional Resume</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Jane Doe</h1>
            <p>Web Developer & UX Designer</p>
        </div>
    </header>

    <nav>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <main>
        <section id="about">
            <div class="container">
                <h2>About Me</h2>
                <img src="profile.jpg" alt="Jane Doe - Web Developer" class="profile-img">
                <p>Passionate web developer with 5+ years of experience creating responsive and accessible websites. Specialized in HTML5, CSS3, and JavaScript.</p>
            </div>
        </section>

        <section id="experience">
            <div class="container">
                <h2>Work Experience</h2>
                <article>
                    <h3>Senior Web Developer</h3>
                    <p class="company">Tech Solutions Inc.</p>
                    <p class="date">January 2020 - Present</p>
                    <ul>
                        <li>Developed responsive websites for clients in various industries</li>
                        <li>Implemented accessibility features to meet WCAG 2.1 guidelines</li>
                        <li>Mentored junior developers and conducted code reviews</li>
                    </ul>
                </article>
                <!-- More experience articles -->
            </div>
        </section>

        <section id="education">
            <div class="container">
                <h2>Education</h2>
                <article>
                    <h3>Bachelor of Science in Computer Science</h3>
                    <p class="institution">University of Technology</p>
                    <p class="date">2015 - 2019</p>
                </article>
            </div>
        </section>

        <section id="skills">
            <div class="container">
                <h2>Skills</h2>
                <ul class="skills-list">
                    <li>HTML5 & CSS3</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>Accessibility</li>
                    <li>Version Control (Git)</li>
                </ul>
            </div>
        </section>

        <section id="projects">
            <div class="container">
                <h2>Projects</h2>
                <div class="project-grid">
                    <article class="project">
                        <h3>E-commerce Website</h3>
                        <p>Responsive e-commerce site with product filtering and cart functionality</p>
                        <a href="#" class="project-link">View Project</a>
                    </article>
                    <!-- More project articles -->
                </div>
            </div>
        </section>

        <section id="contact">
            <div class="container">
                <h2>Contact Me</h2>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2023 Jane Doe. All rights reserved.</p>
            <div class="social-links">
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
                <a href="#" aria-label="GitHub">GitHub</a>
                <a href="#" aria-label="Twitter">Twitter</a>
            </div>
        </div>
    </footer>
</body>
</html>
```

**Practice Task:**
Create the basic structure of your resume page with:
1. Proper HTML5 semantic structure
2. All required sections (about, experience, education, skills, projects, contact)
3. Navigation that links to each section
4. A contact form
5. External CSS file linked

---

### **Lesson: Build a Resume Page**
**Explanation:**
Now let's enhance the resume with styling and additional features. A good resume page should be visually appealing, easy to navigate, and highlight your most important qualifications.

**Key Features to Add:**
1. Responsive design for all screen sizes
2. Print styles for easy printing
3. Interactive elements (smooth scrolling, form validation)
4. Accessibility features
5. Professional styling

**Code Example (styles.css):**
```css
/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header styles */
header {
    background-color: #4361ee;
    color: white;
    padding: 40px 0;
    text-align: center;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

/* Navigation */
nav {
    background-color: #333;
    position: sticky;
    top: 0;
    z-index: 100;
}

nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
}

nav li {
    margin: 0;
}

nav a {
    display: block;
    color: white;
    text-decoration: none;
    padding: 15px 20px;
    transition: background-color 0.3s;
}

nav a:hover {
    background-color: #555;
}

/* Section styles */
section {
    padding: 60px 0;
}

section:nth-child(even) {
    background-color: #f8f9fa;
}

h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #333;
    text-align: center;
}

/* Profile image */
.profile-img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: 0 auto 20px;
}

/* Experience and education */
article {
    margin-bottom: 30px;
}

.company, .institution {
    font-weight: bold;
    color: #4361ee;
}

.date {
    color: #666;
    font-style: italic;
    margin-bottom: 10px;
}

/* Skills list */
.skills-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
}

.skills-list li {
    background-color: #e9ecef;
    padding: 10px 15px;
    border-radius: 20px;
}

/* Projects grid */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.project {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.project-link {
    display: inline-block;
    margin-top: 10px;
    color: #4361ee;
    text-decoration: none;
}

/* Contact form */
form {
    max-width: 600px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
}

button {
    background-color: #4361ee;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background-color: #3651d3;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    padding: 30px 0;
    text-align: center;
}

.social-links {
    margin-top: 15px;
}

.social-links a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
}

/* Responsive design */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
    }
    
    header h1 {
        font-size: 2rem;
    }
    
    .profile-img {
        width: 150px;
        height: 150px;
    }
}

/* Print styles */
@media print {
    nav, footer, .project-link {
        display: none;
    }
    
    body {
        font-size: 12pt;
        line-height: 1.4;
    }
    
    section {
        padding: 20px 0;
    }
}
```

**Practice Task:**
Enhance your resume page with:
1. Responsive design that works on mobile and desktop
2. Professional color scheme and typography
3. Print styles for easy printing
4. Interactive navigation with smooth scrolling
5. Form validation for the contact form

---

### **Lesson: Upload & Review**
**Explanation:**
Learning to review and improve your code is as important as writing it initially. This process helps you identify areas for improvement, fix bugs, and enhance the overall quality of your work.

**Code Review Checklist:**
1. **HTML Structure:** Proper semantic elements, valid HTML
2. **CSS Organization:** Clean, well-organized styles
3. **Responsiveness:** Works on all screen sizes
4. **Accessibility:** Proper labels, alt text, keyboard navigation
5. **Performance:** Optimized images and code
6. **Browser Compatibility:** Works across different browsers

**Code Example (Enhanced with JavaScript):**
```html
<!-- Add this JavaScript before closing body tag -->
<script>
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            if (!isValidEmail(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Form is valid, you would normally send data to a server here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
</script>
```

**Practice Task:**
Review your resume page and:
1. Validate your HTML using the W3C validator
2. Test accessibility using browser developer tools
3. Check responsiveness on different screen sizes
4. Test in multiple browsers
5. Get feedback from peers and make improvements

---

### **Homework:**
Create a complete, polished resume website and prepare it for deployment:

1. **Final Implementation:**
   - Complete all sections with your actual information
   - Add real projects with descriptions and links
   - Include a professional photo or avatar
   - Add your actual contact information and social links

2. **Enhancements:**
   - Implement dark mode toggle
   - Add a downloadable PDF version of your resume
   - Include interactive elements like tabs or accordions
   - Add a skills chart or visualization

3. **Testing:**
   - Test on multiple devices and browsers
   - Check accessibility with screen readers
   - Verify all links work correctly
   - Test the contact form functionality

4. **Documentation:**
   - Create a README file explaining your project
   - Document your design decisions
   - Include instructions for how to customize the template

5. **Deployment Preparation:**
   - Optimize images for web
   - Minify CSS and JavaScript
   - Set up for deployment on a platform like GitHub Pages or Netlify

Submit your complete resume website as a zip file containing all HTML, CSS, JavaScript, and image files. Include a link to your live website if you've deployed it.