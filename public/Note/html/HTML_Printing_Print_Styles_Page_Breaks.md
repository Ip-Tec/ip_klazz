### **Chapter 22: Day 22**
**Objectives:** Learn to create print-friendly web pages, understand print-specific CSS styling, and control page breaks for optimal printing results.

---

### **Lesson: HTML Printing**
**Explanation:**
HTML printing involves creating web pages that are optimized for physical printing. While web browsers are designed for screen display, printing requires special considerations for layout, content prioritization, and resource usage.

**Key Considerations for Print Design:**
1. **Content Prioritization:** Determine what content should be included or excluded when printing
2. **Layout Simplification:** Remove complex layouts, navigation, and interactive elements
3. **Ink Conservation:** Use black and white or grayscale when appropriate
4. **Paper Size Considerations:** Design for standard paper sizes (A4, Letter)
5. **Font Readability:** Use serif fonts for better print readability

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Print-Friendly Web Page</title>
    <style>
        /* Screen styles */
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
        }
        
        header {
            background-color: #4361ee;
            color: white;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        nav {
            background-color: #333;
            padding: 10px;
            margin-bottom: 20px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            margin-right: 15px;
        }
        
        .advertisement {
            background-color: #ffdd00;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        
        .comments-section {
            border: 1px solid #ddd;
            padding: 15px;
            margin: 20px 0;
        }
        
        footer {
            background-color: #333;
            color: white;
            padding: 20px;
            margin-top: 20px;
        }
        
        .print-button {
            background-color: #4361ee;
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <header>
        <h1>Website Title</h1>
    </header>
    
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>This is the main content of the article. It contains important information that users might want to print.</p>
            
            <div class="advertisement">
                This is an advertisement that shouldn't appear in print.
            </div>
            
            <p>More article content that should be included when printing.</p>
            
            <div class="comments-section">
                <h3>User Comments</h3>
                <p>These comments shouldn't appear in the printed version.</p>
            </div>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2023 Website Name. All rights reserved.</p>
    </footer>
    
    <button class="print-button" onclick="window.print()">Print This Page</button>
</body>
</html>
```

**Practice Task:**
Create a web page with content that would be appropriate for printing:
1. Include a header with the page title
2. Add navigation that should be hidden when printing
3. Create main content that should be printed
4. Add elements that shouldn't appear in print (ads, comments, etc.)
5. Include a print button that triggers the browser's print function

---

### **Lesson: Print Styles**
**Explanation:**
Print styles are CSS rules specifically applied when a document is printed. They allow you to optimize the presentation of content for paper, including hiding unnecessary elements, adjusting layouts, and conserving ink.

**Key Print CSS Techniques:**
1. **Media Queries:** Using `@media print` to target print styles
2. **Hiding Elements:** Using `display: none` to remove non-essential content
3. **Adjusting Layouts:** Changing from multi-column to single-column layouts
4. **Ink Conservation:** Removing backgrounds and using dark text on white background
5. **URL Display:** Showing link URLs after the link text

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Print Styles Example</title>
    <style>
        /* Screen styles */
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }
        
        header {
            background-color: #4361ee;
            color: white;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        nav {
            background-color: #333;
            padding: 10px;
            margin-bottom: 20px;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            margin-right: 15px;
        }
        
        .sidebar {
            float: right;
            width: 30%;
            background-color: #e9ecef;
            padding: 15px;
            margin-left: 20px;
        }
        
        .advertisement {
            background-color: #ffdd00;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        
        footer {
            background-color: #333;
            color: white;
            padding: 20px;
            margin-top: 20px;
            clear: both;
        }
        
        /* Print styles */
        @media print {
            /* Reset styles for printing */
            body {
                background: white;
                color: black;
                font-size: 12pt;
                line-height: 1.4;
                width: 100%;
                margin: 0;
                padding: 0;
            }
            
            /* Hide non-essential elements */
            nav, .sidebar, .advertisement, footer, .print-button {
                display: none;
            }
            
            /* Adjust layout */
            header {
                background: white;
                color: black;
                padding: 0;
                margin-bottom: 20px;
                border-bottom: 2px solid #000;
            }
            
            /* Show URLs after links */
            a::after {
                content: " (" attr(href) ")";
                font-size: 10pt;
                font-weight: normal;
            }
            
            /* Avoid breaking inside important elements */
            h1, h2, h3, h4, h5, h6 {
                page-break-after: avoid;
            }
            
            /* Ensure images don't break across pages */
            img {
                max-width: 100%;
                page-break-inside: avoid;
            }
            
            /* Add print-specific information */
            .print-date::before {
                content: "Printed on: " attr(data-date);
                display: block;
                text-align: right;
                font-style: italic;
                margin-bottom: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="print-date" data-date=""></div>
    
    <header>
        <h1>Website Title</h1>
    </header>
    
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
    </nav>
    
    <main>
        <article>
            <h2>Article Title</h2>
            <p>This is the main content of the article. It contains important information that users might want to print.</p>
            
            <div class="sidebar">
                <h3>Related Links</h3>
                <ul>
                    <li><a href="/related-article-1">Related Article 1</a></li>
                    <li><a href="/related-article-2">Related Article 2</a></li>
                </ul>
            </div>
            
            <p>More article content that should be included when printing. This content might span multiple paragraphs and include <a href="https://example.com">links to external resources</a> that should be visible in the printed version.</p>
            
            <div class="advertisement">
                This is an advertisement that shouldn't appear in print.
            </div>
            
            <p>Additional content that continues after the advertisement.</p>
            
            <h3>Section Heading</h3>
            <p>This section should stay together when printed and not break across pages.</p>
            <p>Another paragraph in the same section to demonstrate how content flows when printed.</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2023 Website Name. All rights reserved.</p>
    </footer>
    
    <button class="print-button" onclick="window.print()">Print This Page</button>

    <script>
        // Set the print date
        document.querySelector('.print-date').dataset.date = new Date().toLocaleDateString();
    </script>
</body>
</html>
```

**Practice Task:**
Create a web page with comprehensive print styles that:
1. Hides navigation, ads, and non-essential elements when printing
2. Changes the color scheme to be printer-friendly
3. Shows URLs after links for printed reference
4. Adds a printed date to the document
5. Ensures headings and images don't break across pages
6. Adjusts font sizes and spacing for better print readability

---

### **Lesson: Page Breaks**
**Explanation:**
Page break control is essential for creating professional-looking printed documents from web pages. CSS provides properties to control where pages break when printing, ensuring content doesn't get awkwardly split across pages.

**Page Break Properties:**
1. **page-break-before:** Controls breaks before an element
2. **page-break-after:** Controls breaks after an element
3. **page-break-inside:** Controls breaks inside an element
4. **orphans:** Minimum number of lines at the bottom of a page
5. **widows:** Minimum number of lines at the top of a page

**Common Values:**
- `auto`: Default breaking behavior
- `always`: Always force a break
- `avoid`: Avoid breaking if possible
- `left`: Force one or two breaks to make the next page a left page
- `right`: Force one or two breaks to make the next page a right page

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Page Break Control</title>
    <style>
        /* Screen styles */
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        
        h1, h2, h3 {
            color: #333;
        }
        
        .chapter {
            margin-bottom: 40px;
        }
        
        .figure {
            border: 1px solid #ddd;
            padding: 10px;
            margin: 20px 0;
            text-align: center;
        }
        
        .figure img {
            max-width: 100%;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        
        table, th, td {
            border: 1px solid #ddd;
        }
        
        th, td {
            padding: 10px;
            text-align: left;
        }
        
        /* Print styles */
        @media print {
            body {
                font-size: 12pt;
                line-height: 1.4;
            }
            
            /* Control page breaks */
            h1 {
                page-break-before: always;
            }
            
            h2 {
                page-break-after: avoid;
            }
            
            .chapter {
                page-break-inside: avoid;
            }
            
            .figure {
                page-break-inside: avoid;
            }
            
            table {
                page-break-inside: avoid;
            }
            
            /* Avoid breaking inside paragraphs */
            p {
                orphans: 3;
                widows: 3;
            }
            
            /* Force a break before specific elements */
            .page-break {
                page-break-before: always;
            }
            
            /* Footer for each printed page */
            @page {
                margin: 1in;
                @bottom-center {
                    content: "Page " counter(page) " of " counter(pages);
                    font-family: Arial;
                    font-size: 10pt;
                }
            }
        }
    </style>
</head>
<body>
    <h1>Document Title</h1>
    
    <div class="chapter">
        <h2>Chapter 1: Introduction</h2>
        <p>This is the first chapter of the document. It should start on a new page when printed.</p>
        
        <div class="figure">
            <img src="https://via.placeholder.com/600x400" alt="Placeholder image">
            <p>Figure 1.1: This figure should not break across pages.</p>
        </div>
        
        <p>Additional content that follows the figure. This paragraph should have at least three lines at the bottom of the page if it breaks across pages.</p>
    </div>
    
    <div class="page-break"></div>
    
    <div class="chapter">
        <h2>Chapter 2: Main Content</h2>
        <p>This chapter should start on a new page due to the page-break-before property on h1 elements.</p>
        
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Item 1</td>
                    <td>Description of item 1</td>
                    <td>$10.00</td>
                </tr>
                <tr>
                    <td>Item 2</td>
                    <td>Description of item 2</td>
                    <td>$20.00</td>
                </tr>
                <tr>
                    <td>Item 3</td>
                    <td>Description of item 3</td>
                    <td>$30.00</td>
                </tr>
            </tbody>
        </table>
        
        <p>This table should not break across pages due to the page-break-inside: avoid property.</p>
    </div>
    
    <div class="chapter">
        <h2>Chapter 3: Additional Information</h2>
        <p>This chapter demonstrates how content flows when printed with various page break controls.</p>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl aliquam nunc, eget aliquam nisl nunc eget nisl.</p>
        
        <div class="figure">
            <img src="https://via.placeholder.com/600x400" alt="Another placeholder image">
            <p>Figure 3.1: Another figure that should not break across pages.</p>
        </div>
        
        <p>Additional content following the second figure.</p>
    </div>
    
    <button onclick="window.print()">Print Document</button>
</body>
</html>
```

**Practice Task:**
Create a multi-page document with controlled page breaks that:
1. Starts each chapter on a new page
2. Prevents figures and tables from breaking across pages
3. Ensures headings stay with at least some of their content
4. Uses orphans and widows to control text breaking
5. Includes page numbers in the footer of each printed page
6. Tests different page break values (always, avoid, left, right)

---

### **Homework:**
Create a comprehensive print-optimized report that demonstrates all the concepts covered in this chapter:

1. **Document Structure:**
   - Create a multi-page report with chapters and sections
   - Include various content types (text, images, tables)
   - Add a table of contents

2. **Print Styles:**
   - Implement comprehensive print CSS using @media print
   - Hide non-essential elements (navigation, ads, etc.)
   - Optimize colors and fonts for printing
   - Show URLs after links

3. **Page Break Control:**
   - Ensure chapters start on new pages
   - Prevent images and tables from breaking across pages
   - Control text flow with orphans and widows
   - Add page numbers and other print-specific information

4. **User Interface:**
   - Include a print button that triggers the print dialog
   - Add a "print preview" note explaining the print optimization
   - Ensure the document works well in both screen and print views

5. **Testing:**
   - Test your document using browser print preview
   - Verify page breaks occur where intended
   - Check that all content is readable and properly formatted

Submit your completed print-optimized report as an HTML file with embedded CSS. Include a brief document explaining your design choices and how you addressed the various print considerations.