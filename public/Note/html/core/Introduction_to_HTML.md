
### **Chapter 1: Day 1**
**Objectives:** Understand what HTML is, learn the essential structure of an HTML document, and use basic tags to create a simple web page.

---

### **Lesson: Introduction to HTML**
**Explanation:**
HTML, which stands for **HyperText Markup Language**, is the standard language used to create web pages. Think of it as the skeleton or framework of a website. It's not a programming language; it's a *markup* language, which means it uses "tags" to define and describe the content on a page (like headings, paragraphs, links, and images).

*   **HyperText:** This means text that contains links to other texts. It's what makes the web "web-like," allowing you to navigate from one page to another.
*   **Markup:** This refers to the special symbols or tags that tell the web browser how to display the content. For example, a tag can tell the browser to display text as a bold heading or a paragraph.

Every website you visit is built using HTML. Your web browser (like Chrome, Firefox, or Edge) reads the HTML code and renders it into the visual page you see.

**Code Example:**
```html
<h1>This is a Main Heading</h1>
<p>This is a paragraph. It can contain lots of text.</p>
<a href="https://www.example.com">This is a link to Example.com</a>
```

**Practice Task:**
Open a simple text editor like Notepad (Windows) or TextEdit (Mac, set to plain text). Type out the code example above. Save the file as `my_first_page.html`. Then, double-click the file to open it in your web browser. Congratulations, you've just created your first web page!

---

### **Lesson: HTML Document Structure**
**Explanation:**
All proper HTML documents follow a specific structure. This helps browsers understand the type of document and how to interpret it. The key components are:

1.  `<!DOCTYPE html>`: This declaration defines the document to be HTML5 (the latest version). It must be the very first thing in your document.
2.  `<html>`: This tag wraps all the content on the entire page. It's often called the root element.
3.  `<head>`: This container holds **meta-information** about the document. This includes the page title, links to CSS files, character set declarations, and more. Nothing inside the `<head>` is directly visible on the webpage (except the `<title>`).
4.  `<title>`: This sets the title of the web page, which appears in the browser's title bar or tab.
5.  `<body>`: This contains **all the visible content** of the web page that users see, like text, images, videos, and links.

**Code Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is my first webpage. I'm learning HTML!</p>
</body>
</html>
```

**Practice Task:**
Take the file you created earlier (`my_first_page.html`) and now structure it properly using the `<!DOCTYPE>`, `<html>`, `<head>`, `<title>`, and `<body>` tags. Change the title in the `<head>` to "My Practice Page" and add a new paragraph to the `<body>`.

---

### **Lesson: Basic Tags**
**Explanation:**
HTML tags are the building blocks of a page. They are keywords surrounded by angle brackets (`< >`). Most tags come in pairs: an opening tag (`<tag>`) and a closing tag (`</tag>`), with the content in between.

Here are some of the most essential tags you'll use:

*   Headings: `<h1>` to `<h6>`
    *   `<h1>` is the largest and most important (usually used for the main title).
    *   `<h6>` is the smallest. Use them to structure your content logically.
*   Paragraph: `<p>` defines a block of text.
*   Link: `<a>` (anchor tag) defines a hyperlink. The `href` attribute specifies the link's destination.
    *   Example: `<a href="https://www.google.com">Visit Google</a>`
*   Image: `<img>` is used to embed an image. It is a **self-closing tag** (it doesn't need a closing tag). The `src` attribute specifies the image path, and the `alt` attribute provides alternative text for accessibility.
    *   Example: `<img src="cat.jpg" alt="A picture of a cute cat">`
*   Line Break: `<br>` is another self-closing tag that creates a line break (like pressing "Enter" in a word processor).

**Code Example:**
```html
<h1>The Best Animal</h1>
<h2>Reasons I Love Cats</h2>
<p>Cats are independent, curious, and soft.</p>
<p>They have beautiful eyes and make a soothing purring sound.<br>They are also great hunters.</p>
<img src="kitten.jpg" alt="A fluffy orange kitten">
<p>Read more on <a href="https://en.wikipedia.org/wiki/Cat">Wikipedia</a>.</p>
```

**Practice Task:**
Create a new HTML file called `favorite_thing.html`. Using the basic tags you just learned, create a page about your favorite animal, hobby, or food. Your page must include:
*   One main `<h1>` heading.
*   One `<h2>` or `<h3>` sub-heading.
*   At least two paragraphs (`<p>`).
*   One line break (`<br>`).
*   One image (you can use a link to an image online).
*   One link to an external website.

---

### **Homework:**
Create a complete HTML page about yourself. The file should be named `about_me.html`.

**Requirements:**
1.  It must use the correct HTML5 document structure.
2.  The `<title>` must be "About Me".
3.  The `<body>` must include:
    *   A main heading (`<h1>`) with your name.
    *   A subheading (`<h2>`) titled "My Hobbies".
    *   A paragraph under the subheading describing at least two hobbies.
    *   A second subheading (`<h2>`) titled "My Favorite Website".
    *   A paragraph with a link to that website.
    *   A third subheading (`<h2>`) titled "A Photo I Like".
    *   An image of anything you like (a place, a meme, an animal, etc.).