### **Chapter 26: Day 26**
**Objectives:** Create a simple blog page using HTML and CSS, implement proper content structure, and learn how to organize and present written content effectively on the web.

---

### **Lesson: HTML Mini Project 3**
**Explanation:**
This third mini-project focuses on creating a blog page, which is a common type of website that requires good content organization, readability, and user engagement features. A blog typically includes articles, a navigation system, and often a sidebar with additional information.

**Project Requirements:**
1. Clean, readable layout with proper typography
2. Semantic HTML structure for blog content
3. Responsive design that works on all devices
4. Navigation system between articles
5. Comment section or contact form
6. Social sharing options

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Blog</title>
    <style>
        /* Base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Header styles */
        header {
            background-color: white;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            padding: 20px 0;
            margin-bottom: 30px;
        }
        
        .site-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: #4361ee;
            text-decoration: none;
        }
        
        /* Navigation */
        nav ul {
            display: flex;
            list-style: none;
            gap: 20px;
        }
        
        nav a {
            color: #333;
            text-decoration: none;
            font-weight: 500;
        }
        
        nav a:hover {
            color: #4361ee;
        }
        
        /* Main content layout */
        .main-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }
        
        /* Article styles */
        article {
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        
        .article-header {
            margin-bottom: 20px;
        }
        
        .article-meta {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 10px;
        }
        
        .article-title {
            font-size: 2rem;
            margin-bottom: 15px;
            color: #333;
        }
        
        .article-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        
        .article-content {
            font-size: 1.1rem;
            line-height: 1.8;
        }
        
        .article-content p {
            margin-bottom: 20px;
        }
        
        .article-content h2 {
            font-size: 1.5rem;
            margin: 30px 0 15px;
            color: #333;
        }
        
        /* Sidebar styles */
        .sidebar {
            background-color: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget {
            margin-bottom: 30px;
        }
        
        .sidebar-title {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: #333;
            border-bottom: 2px solid #4361ee;
            padding-bottom: 10px;
        }
        
        /* Footer styles */
        footer {
            background-color: #333;
            color: white;
            padding: 40px 0;
            margin-top: 50px;
        }
        
        .footer-content {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
        }
        
        .footer-section h3 {
            margin-bottom: 15px;
            color: #4361ee;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
        }
        
        .social-links a {
            color: white;
            text-decoration: none;
        }
        
        /* Responsive design */
        @media (max-width: 900px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .footer-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }
        
        @media (max-width: 600px) {
            .site-header {
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
            
            nav ul {
                flex-direction: column;
                gap: 10px;
            }
            
            .article-title {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <div class="site-header">
                <a href="#" class="logo">My Blog</a>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="main-content">
            <div class="articles">
                <article>
                    <div class="article-header">
                        <div class="article-meta">
                            <span>June 15, 2023</span> • 
                            <span>Web Development</span> • 
                            <span>5 min read</span>
                        </div>
                        <h1 class="article-title">Getting Started with HTML and CSS</h1>
                    </div>
                    
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713" alt="HTML and CSS code on a screen" class="article-image">
                    
                    <div class="article-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
                        
                        <h2>Understanding the Basics</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
                        
                        <h2>Next Steps</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
                    </div>
                </article>
                
                <!-- More articles would go here -->
            </div>
            
            <aside class="sidebar">
                <div class="sidebar-widget">
                    <h3 class="sidebar-title">About Me</h3>
                    <p>Hello! I'm a web developer passionate about creating beautiful and functional websites. I love sharing my knowledge through this blog.</p>
                </div>
                
                <div class="sidebar-widget">
                    <h3 class="sidebar-title">Categories</h3>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Design</a></li>
                        <li><a href="#">Accessibility</a></li>
                        <li><a href="#">Performance</a></li>
                    </ul>
                </div>
                
                <div class="sidebar-widget">
                    <h3 class="sidebar-title">Recent Posts</h3>
                    <ul>
                        <li><a href="#">Getting Started with HTML and CSS</a></li>
                        <li><a href="#">Responsive Design Principles</a></li>
                        <li><a href="#">Introduction to JavaScript</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    </div>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>About This Blog</h3>
                    <p>A blog about web development, design, and everything in between.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Articles</a></li>
                        <li><a href="#">Categories</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Connect</h3>
                    <div class="social-links">
                        <a href="#">Twitter</a>
                        <a href="#">GitHub</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
```

**Practice Task:**
Create the basic structure of your blog page with:
1. A header with logo and navigation
2. A main content area with at least one blog post
3. A sidebar with about section, categories, and recent posts
4. A footer with site information and links
5. Responsive design that works on mobile and desktop

---

### **Lesson: Simple Blog Page**
**Explanation:**
Now let's enhance the blog with additional features that make it more functional and user-friendly. A good blog should not only present content well but also facilitate engagement and navigation.

**Key Enhancements:**
1. Article pagination or "read more" functionality
2. Comment section for user engagement
3. Social sharing buttons
4. Search functionality
5. Related articles section

**Code Example (Enhanced Blog):**
```html
<!-- Add these enhancements to the previous code -->

<style>
    /* Additional styles for enhanced features */
    
    /* Read more link */
    .read-more {
        display: inline-block;
        margin-top: 20px;
        color: #4361ee;
        text-decoration: none;
        font-weight: 500;
    }
    
    .read-more:hover {
        text-decoration: underline;
    }
    
    /* Comment section */
    .comments {
        margin-top: 40px;
        padding-top: 30px;
        border-top: 1px solid #eee;
    }
    
    .comment {
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
        margin-bottom: 20px;
    }
    
    .comment-header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
    }
    
    .comment-author {
        font-weight: bold;
    }
    
    .comment-date {
        color: #666;
        font-size: 0.9rem;
    }
    
    /* Comment form */
    .comment-form {
        margin-top: 30px;
    }
    
    .form-group {
        margin-bottom: 20px;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 5px;
        font-weight: bold;
    }
    
    .form-group input,
    .form-group textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px;
    }
    
    .form-group textarea {
        min-height: 100px;
    }
    
    /* Social sharing */
    .social-sharing {
        margin: 30px 0;
        display: flex;
        gap: 10px;
    }
    
    .share-btn {
        padding: 8px 15px;
        background-color: #f8f9fa;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .share-btn:hover {
        background-color: #e9ecef;
    }
    
    /* Related articles */
    .related-articles {
        margin-top: 50px;
    }
    
    .related-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
    }
    
    .related-article {
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        transition: transform 0.3s;
    }
    
    .related-article:hover {
        transform: translateY(-5px);
    }
    
    .related-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
    }
    
    .related-content {
        padding: 15px;
    }
    
    .related-title {
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
    
    /* Search widget */
    .search-form {
        display: flex;
        margin-bottom: 20px;
    }
    
    .search-input {
        flex: 1;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 4px 0 0 4px;
    }
    
    .search-button {
        padding: 10px 15px;
        background-color: #4361ee;
        color: white;
        border: none;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
    }
</style>

<!-- Add these elements to your blog post -->
<div class="social-sharing">
    <button class="share-btn">Twitter</button>
    <button class="share-btn">Facebook</button>
    <button class="share-btn">LinkedIn</button>
</div>

<a href="#" class="read-more">Read more articles like this</a>

<div class="comments">
    <h3>Comments (3)</h3>
    
    <div class="comment">
        <div class="comment-header">
            <span class="comment-author">John Doe</span>
            <span class="comment-date">June 16, 2023</span>
        </div>
        <p>Great article! I found the section on HTML semantics particularly helpful.</p>
    </div>
    
    <div class="comment">
        <div class="comment-header">
            <span class="comment-author">Jane Smith</span>
            <span class="comment-date">June 15, 2023</span>
        </div>
        <p>Thanks for sharing this. As a beginner, this was exactly what I needed.</p>
    </div>
    
    <div class="comment-form">
        <h4>Leave a Comment</h4>
        <form>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="comment">Comment</label>
                <textarea id="comment" name="comment" required></textarea>
            </div>
            
            <button type="submit" class="search-button">Post Comment</button>
        </form>
    </div>
</div>

<div class="related-articles">
    <h3>Related Articles</h3>
    <div class="related-grid">
        <div class="related-article">
            <img src="https://images.unsplash.com/photo-1581276879432-15e50529f34b" alt="Responsive design" class="related-image">
            <div class="related-content">
                <h4 class="related-title">Responsive Design Principles</h4>
                <a href="#" class="read-more">Read more</a>
            </div>
        </div>
        
        <div class="related-article">
            <img src="https://images.unsplash.com/photo-1627398242454-45a1465c2479" alt="JavaScript code" class="related-image">
            <div class="related-content">
                <h4 class="related-title">Introduction to JavaScript</h4>
                <a href="#" class="read-more">Read more</a>
            </div>
        </div>
        
        <div class="related-article">
            <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3" alt="CSS styling" class="related-image">
            <div class="related-content">
                <h4 class="related-title">CSS Best Practices</h4>
                <a href="#" class="read-more">Read more</a>
            </div>
        </div>
    </div>
</div>

<!-- Add search to sidebar -->
<div class="sidebar-widget">
    <h3 class="sidebar-title">Search</h3>
    <form class="search-form">
        <input type="text" placeholder="Search articles..." class="search-input">
        <button type="submit" class="search-button">Go</button>
    </form>
</div>
```

**Practice Task:**
Enhance your blog page with:
1. A comment section with form
2. Social sharing buttons
3. Related articles section
4. Search functionality in the sidebar
5. Improved navigation between articles

---

### **Lesson: Upload & Review**
**Explanation:**
Reviewing your blog page is essential for ensuring it provides a good user experience, is accessible to all users, and performs well across different devices and browsers.

**Review Checklist:**
1. **Content Readability:** Clear typography, proper spacing, good contrast
2. **Navigation:** Easy to find and navigate between articles
3. **Performance:** Fast loading times, optimized images
4. **Accessibility:** Proper semantic structure, keyboard navigation, screen reader compatibility
5. **Responsiveness:** Works well on all screen sizes

**Code Example (Accessibility Improvements):**
```html
<!-- Add these accessibility improvements -->

<script>
    // Add skip navigation link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add ARIA labels to social sharing buttons
    document.querySelectorAll('.share-btn').forEach((btn, index) => {
        const platforms = ['Twitter', 'Facebook', 'LinkedIn'];
        btn.setAttribute('aria-label', `Share on ${platforms[index]}`);
    });

    // Add focus styles for keyboard navigation
    document.addEventListener('DOMContentLoaded', () => {
        const focusableElements = document.querySelectorAll(
            'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(el => {
            el.addEventListener('focus', () => {
                el.style.outline = '2px solid #4361ee';
                el.style.outlineOffset = '2px';
            });
            
            el.addEventListener('blur', () => {
                el.style.outline = 'none';
            });
        });
    });
</script>

<style>
    /* Accessibility improvements */
    .skip-link {
        position: absolute;
        top: -40px;
        left: 0;
        background: #4361ee;
        color: white;
        padding: 8px;
        z-index: 1000;
    }
    
    .skip-link:focus {
        top: 0;
    }
    
    /* Improve focus visibility */
    a:focus, button:focus, input:focus, textarea:focus {
        outline: 2px solid #4361ee;
        outline-offset: 2px;
    }
    
    /* Increase contrast for better readability */
    .article-content {
        color: #222;
    }
    
    /* Ensure sufficient line height */
    .article-content p {
        line-height: 1.8;
    }
    
    /* Add print styles */
    @media print {
        header, .sidebar, .social-sharing, .comments, .related-articles, footer {
            display: none;
        }
        
        body {
            font-size: 12pt;
            line-height: 1.5;
            color: #000;
            background: white;
        }
        
        .article-content {
            width: 100%;
        }
        
        a::after {
            content: " (" attr(href) ")";
            font-size: 10pt;
        }
    }
</style>
```

**Practice Task:**
Review and optimize your blog page:
1. Test accessibility with screen readers and keyboard navigation
2. Check performance using browser developer tools
3. Test on different devices and browsers
4. Ensure proper print styles for article printing
5. Implement any missing features from the review checklist

---

### **Homework:**
Create a complete, polished blog website and prepare it for deployment:

1. **Final Implementation:**
   - Create at least 3 complete blog posts with actual content
   - Implement all blog features (comments, search, related articles, etc.)
   - Ensure proper accessibility and performance optimizations
   - Add an about page and contact form

2. **Enhancements:**
   - Add a categories/tags system
   - Implement a simple content management system (could be static)
   - Add RSS feed functionality
   - Create a newsletter subscription form

3. **Testing:**
   - Test on multiple devices and browsers
   - Check performance with various connection speeds
   - Verify accessibility with screen readers
   - Test all interactive elements

4. **Documentation:**
   - Create a README file explaining your project
   - Document your design decisions and features
   - Include instructions for how to add new blog posts

5. **Deployment Preparation:**
   - Optimize all images for web
   - Minify CSS and JavaScript
   - Set up for deployment on a platform like GitHub Pages or Netlify

Submit your complete blog website as a zip file containing all HTML, CSS, JavaScript, and image files. Include a link to your live website if you've deployed it.