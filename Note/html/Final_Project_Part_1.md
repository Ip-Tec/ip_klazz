### **Chapter 27: Day 27**
**Objectives:** Begin building your final portfolio website, starting with the homepage and about section, using all the HTML and CSS skills you've learned throughout the course.

---

### **Lesson: Final Project Part 1**
**Explanation:**
Your final project will be a complete portfolio website that showcases your skills, projects, and experience. This is an opportunity to apply everything you've learned and create a professional online presence. We'll build it in parts, starting with the foundation.

**Project Requirements:**
1. Professional design and layout
2. Responsive design that works on all devices
3. Clean, semantic HTML structure
4. Modern CSS styling and techniques
5. Accessibility best practices
6. Optimized performance

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Portfolio | Home</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">Portfolio</a>
            <ul class="nav-menu">
                <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#projects" class="nav-link">Projects</a></li>
                <li class="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <!-- Main content will be added in subsequent lessons -->
    <main>
        <!-- Home section will go here -->
        <!-- About section will go here -->
    </main>

    <script src="script.js"></script>
</body>
</html>
```

**Practice Task:**
Set up the basic structure of your portfolio website:
1. Create the HTML file with proper document structure
2. Add a navigation bar with links to main sections
3. Create a CSS file and link it to your HTML
4. Set up a responsive navigation that works on mobile and desktop
5. Add a JavaScript file for interactive elements

---

### **Lesson: Portfolio Homepage**
**Explanation:**
The homepage is the first thing visitors see and should make a strong impression. It should clearly communicate who you are, what you do, and what value you offer. A good homepage includes a hero section with a clear call-to-action.

**Key Elements of a Portfolio Homepage:**
1. **Hero Section:** Eye-catching introduction with your name and title
2. **Call-to-Action:** Button or link to your work or contact section
3. **Visual Elements:** Professional photo or illustration
4. **Social Proof:** Brief testimonials or client logos (if available)
5. **Navigation:** Easy access to all sections of your portfolio

**Code Example:**
```html
<!-- Add this inside the <main> tag -->
<section id="home" class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <h1 class="hero-title">Hi, I'm <span class="text-primary">Jane Doe</span></h1>
            <h2 class="hero-subtitle">Frontend Developer & UI Designer</h2>
            <p class="hero-description">
                I create beautiful, responsive websites with clean code and exceptional user experiences. 
                Currently specializing in modern JavaScript frameworks and accessible web design.
            </p>
            <div class="hero-buttons">
                <a href="#projects" class="btn btn-primary">View My Work</a>
                <a href="#contact" class="btn btn-secondary">Get In Touch</a>
            </div>
        </div>
        <div class="hero-image">
            <img src="images/hero-image.jpg" alt="Jane Doe - Web Developer" class="profile-image">
        </div>
    </div>
    
    <!-- Social links -->
    <div class="social-links">
        <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="#" aria-label="Dribbble"><i class="fab fa-dribbble"></i></a>
    </div>
    
    <!-- Scroll indicator -->
    <div class="scroll-indicator">
        <span>Scroll down</span>
        <div class="scroll-arrow"></div>
    </div>
</section>
```

**CSS for Homepage:**
```css
/* Add these styles to your CSS file */

/* Hero section */
.hero {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 80px 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.hero-container {
    max-width: 1200px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.hero-content {
    animation: fadeInUp 1s ease-out;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 15px;
    color: #333;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 20px;
    color: #666;
}

.hero-description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 30px;
    color: #555;
}

.text-primary {
    color: #4361ee;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 40px;
}

.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
}

.btn-primary {
    background-color: #4361ee;
    color: white;
}

.btn-primary:hover {
    background-color: #3651d3;
    transform: translateY(-2px);
}

.btn-secondary {
    border: 2px solid #4361ee;
    color: #4361ee;
}

.btn-secondary:hover {
    background-color: #4361ee;
    color: white;
}

.hero-image {
    animation: fadeInRight 1s ease-out;
}

.profile-image {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.social-links {
    display: flex;
    gap: 20px;
    margin-top: 40px;
}

.social-links a {
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: #4361ee;
}

.scroll-indicator {
    position: absolute;
    bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #666;
    font-size: 0.9rem;
}

.scroll-arrow {
    width: 2px;
    height: 30px;
    background-color: #4361ee;
    margin-top: 10px;
    animation: bounce 2s infinite;
}

/* Animations */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fadeInRight {
    from {
        opacity: 0;
        transform: translateX(30px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* Responsive design */
@media (max-width: 900px) {
    .hero-container {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-buttons {
        justify-content: center;
    }
}

@media (max-width: 600px) {
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .btn {
        width: 200px;
        text-align: center;
    }
}
```

**Practice Task:**
Create your portfolio homepage with:
1. A hero section with your name and professional title
2. A brief introduction describing what you do
3. Call-to-action buttons to view your work and get in touch
4. A professional photo or illustration
5. Social media links
6. Responsive design that works on all devices

---

### **Lesson: About Section**
**Explanation:**
The about section provides more detail about who you are, your skills, experience, and what makes you unique. It's an opportunity to connect with visitors on a personal level and showcase your expertise.

**Key Elements of an About Section:**
1. **Personal Introduction:** More detailed background information
2. **Skills & Expertise:** Technical and soft skills with visual indicators
3. **Experience Timeline:** Professional journey and milestones
4. **Education:** Academic background and certifications
5. **Personal Interests:** Hobbies or passions that show your personality

**Code Example:**
```html
<!-- Add this after the hero section -->
<section id="about" class="about">
    <div class="container">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Get to know me better</p>
        
        <div class="about-content">
            <div class="about-text">
                <h3>Who I Am</h3>
                <p>
                    I'm a passionate frontend developer with over 5 years of experience creating 
                    digital experiences that users love. I specialize in turning complex problems 
                    into simple, beautiful, and intuitive designs.
                </p>
                <p>
                    When I'm not coding, you can find me hiking in the mountains, reading UX books, 
                    or experimenting with new recipes in the kitchen. I believe in continuous learning 
                    and pushing the boundaries of what's possible on the web.
                </p>
                
                <h3>My Skills</h3>
                <div class="skills">
                    <div class="skill">
                        <span class="skill-name">HTML/CSS</span>
                        <div class="skill-bar">
                            <div class="skill-level" data-level="95%"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <span class="skill-name">JavaScript</span>
                        <div class="skill-bar">
                            <div class="skill-level" data-level="90%"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <span class="skill-name">React</span>
                        <div class="skill-bar">
                            <div class="skill-level" data-level="85%"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <span class="skill-name">UI/UX Design</span>
                        <div class="skill-bar">
                            <div class="skill-level" data-level="80%"></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="about-image">
                <img src="images/about-image.jpg" alt="Jane Doe working on laptop" class="about-img">
            </div>
        </div>
        
        <!-- Experience timeline -->
        <h3>My Journey</h3>
        <div class="timeline">
            <div class="timeline-item">
                <div class="timeline-date">2020 - Present</div>
                <div class="timeline-content">
                    <h4>Senior Frontend Developer</h4>
                    <p>Tech Solutions Inc.</p>
                    <p>Leading frontend development for client projects, mentoring junior developers, and implementing accessibility standards.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2018 - 2020</div>
                <div class="timeline-content">
                    <h4>Web Developer</h4>
                    <p>Creative Agency LLC</p>
                    <p>Developed responsive websites for various clients, implemented SEO best practices, and collaborated with designers.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-date">2016 - 2018</div>
                <div class="timeline-content">
                    <h4>Junior Developer</h4>
                    <p>Startup Company</p>
                    <p>Built and maintained company website, implemented new features, and provided technical support.</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

**CSS for About Section:**
```css
/* About section */
.about {
    padding: 100px 20px;
    background-color: white;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 15px;
    color: #333;
}

.section-subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 60px;
    font-size: 1.1rem;
}

.about-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    margin-bottom: 60px;
}

.about-text h3 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
}

.about-text p {
    margin-bottom: 20px;
    line-height: 1.6;
    color: #555;
}

.skills {
    margin-top: 30px;
}

.skill {
    margin-bottom: 20px;
}

.skill-name {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #333;
}

.skill-bar {
    height: 8px;
    background-color: #e9ecef;
    border-radius: 4px;
    overflow: hidden;
}

.skill-level {
    height: 100%;
    background-color: #4361ee;
    border-radius: 4px;
    width: 0;
    transition: width 1s ease;
}

.about-image {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.about-img {
    width: 100%;
    max-width: 300px;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

/* Timeline */
.timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: #4361ee;
}

.timeline-item {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin-bottom: 40px;
    width: 50%;
}

.timeline-item:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    left: 50%;
}

.timeline-date {
    position: absolute;
    top: 0;
    right: -80px;
    background-color: #4361ee;
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

.timeline-item:nth-child(even) .timeline-date {
    right: auto;
    left: -80px;
}

.timeline-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    width: 100%;
}

.timeline-content h4 {
    margin-bottom: 5px;
    color: #333;
}

.timeline-content p {
    margin-bottom: 5px;
    color: #666;
}

/* Responsive design */
@media (max-width: 900px) {
    .about-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .timeline::before {
        left: 30px;
    }
    
    .timeline-item {
        width: 100%;
        padding-left: 70px;
        padding-right: 0;
    }
    
    .timeline-item:nth-child(even) {
        left: 0;
        padding-left: 70px;
    }
    
    .timeline-date {
        left: 0;
        right: auto;
    }
    
    .timeline-item:nth-child(even) .timeline-date {
        left: 0;
    }
}

/* JavaScript for animated skill bars */
document.addEventListener('DOMContentLoaded', function() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = level;
    });
});
```

**Practice Task:**
Create your about section with:
1. A detailed personal introduction
2. A skills section with animated progress bars
3. A timeline of your experience and education
4. A professional photo
5. Responsive design that works on all devices

---

### **Homework:**
Complete the first part of your portfolio website:

1. **Implement Homepage:**
   - Create an engaging hero section with your information
   - Add call-to-action buttons
   - Include social media links
   - Ensure responsive design

2. **Build About Section:**
   - Write a compelling personal introduction
   - List your skills with visual indicators
   - Create a timeline of your experience
   - Add a professional photo

3. **Enhancements:**
   - Add smooth scrolling to section links
   - Implement navigation highlighting based on scroll position
   - Add animations for elements as they come into view
   - Ensure all text is original and represents you accurately

4. **Testing:**
   - Test on multiple devices and browsers
   - Check performance with browser developer tools
   - Verify accessibility with screen readers
   - Test all interactive elements

5. **Documentation:**
   - Create a README file explaining your project
   - Document your design decisions
   - Include a plan for the next sections

Submit your completed homepage and about section as HTML and CSS files. Include any images or assets needed for your portfolio.