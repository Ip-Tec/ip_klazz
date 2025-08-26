### **Chapter 2: Day 2**
**Objectives:** Learn to format text within HTML, understand the role of attributes, and master creating links for website navigation.

---

### **Lesson: Text Formatting**
**Explanation:**
While HTML defines structure, it also provides tags to give text specific meaning and formatting. These tags help emphasize important words, denote quotations, or organize information into lists, making content more readable and semantically clear for both users and search engines.

**Common Text Formatting Tags:**
*   **`<strong>`**: Represents strong importance. Browsers display this as **bold** text by default. Use this for critical information.
*   **`<em>`**: Represents emphasized text. Browsers display this as *italicized* text by default. Use this for stress or vocal emphasis on a word.
*   **`<u>`**: Represents underlined text. Use sparingly, as underlined text is often confused with links.
*   **`<br>`**: A self-closing tag that creates a line break within text (like pressing "Enter" in a word processor).
*   **`<hr>`**: A self-closing tag that creates a thematic break or horizontal rule, often used to separate content sections.

**Code Example:**
```html
<p>This is a paragraph with <strong>very important</strong> information and a word with <em>emphasis</em>.</p>
<p>This sentence needs a line break<br>right in the middle of it.</p>
<hr>
<p>This is a new section after a horizontal rule.</p>
```

**Practice Task:**
Create a new file called `formatting.html`.
1.  Write a paragraph about your favorite book.
2.  Use `<strong>` to highlight the book's title.
3.  Use `<em>` to emphasize the author's name.
4.  Use a `<br>` tag to split a long sentence into two lines.
5.  Add an `<hr>` tag, followed by a second paragraph with your thoughts on the book's ending.

---

### **Lesson: HTML Attributes**
**Explanation:**
Attributes provide additional information about an HTML element. They are always specified in the **opening tag** and usually come in **name/value pairs** like `name="value"`.

*   **What they do:** Attributes define characteristics of an element, such as its style (CSS), behavior, or source file.
*   **Syntax:** `attribute="value"` (the quotes are essential).
*   **Common Examples:**
    *   **`id`**: Specifies a unique identifier for an element. No two elements on the same page can have the same `id`.
    *   **`class`**: Specifies one or more class names for an element. Multiple elements can share the same class, which is crucial for applying CSS styles.
    *   **`style`**: Used for inline CSS styling (e.g., `style="color: red;"`).
    *   **`src`**: Specifies the source (path) for an image (`<img>`) or script.
    *   **`href`**: Specifies the URL for a link (`<a>`).
    *   **`alt`**: Provides alternative text for an image.

**Code Example:**
```html
<p id="main-intro">This is the introductory paragraph.</p>
<p class="highlighted-text">This text is part of a special group.</p>
<img src="sunset.jpg" alt="A beautiful red sunset over the ocean" style="width: 400px;">
<a href="https://www.newsite.com" id="external-link" class="link-style">Visit New Site</a>
```

**Practice Task:**
Modify your `biography.html` file from Day 1.
1.  Add a unique `id="main-heading"` to your `<h1>` tag.
2.  Add a `class="bio-text"` to all your `<p>` tags.
3.  Add a `style="border: 1px solid black;"` attribute to your `<img>` tag to give it a simple border.

---

### **Lesson: Links and Navigation**
**Explanation:**
Links, created with the `<a>` (anchor) tag, are what make the web a "web." They connect pages to each other. The most important attribute for a link is `href` (hypertext reference), which defines the link's destination.

**Types of Links:**
*   **Absolute URL:** Links to a page on another website. Includes the full web address (`https://...`).
*   **Relative URL:** Links to another page on your own website. Only includes the file path (`about.html` or `images/photo.jpg`).
*   **Internal Link (Anchor):** Links to a specific section on the same page. Uses the `id` of another element (e.g., `href="#section1"`).
*   **Email Link:** Opens the user's default mail program. Uses `href="mailto:email@example.com"`.
*   **The `target` Attribute:** `target="_blank"` opens the link in a new browser tab.

**Code Example:**
```html
<!-- Absolute URL -->
<a href="https://www.wikipedia.org" target="_blank">Wikipedia (opens in new tab)</a>

<!-- Relative URL -->
<a href="contact.html">Contact Me</a>

<!-- Internal Link / Anchor -->
<h2 id="chapter1">Chapter 1</h2>
...
<a href="#chapter1">Jump to Chapter 1</a>

<!-- Email Link -->
<a href="mailto:fake@example.com">Send Email</a>
```

**Practice Task:**
Create a simple website with three pages. Save them in the same folder.
1.  **`index.html`**: The home page. It should have:
    *   A welcome message.
    *   Links to `about.html` and `contact.html`.
    *   An absolute URL link to a favorite website (opens in a new tab).
2.  **`about.html`**: An "About" page. It should have:
    *   A title and a short bio.
    *   A link back to `index.html` (call it "Home").
3.  **`contact.html`**: A "Contact" page. It should have:
    *   A title.
    *   An email link to a fake email address.
    *   A link back to `index.html`.

---

### **Homework:**
Create a simple "Travel Blog" website.
1.  Create a homepage (`index.html`) with a main heading and a short introduction.
2.  Create two additional pages: `destinations.html` and `tips.html`.
3.  On the homepage, create a **navigation menu** using a list of links (`<ul>` and `<li>` tags) to link to all three pages.
4.  On the `destinations.html` page, write about two places you want to visit. Use headings, paragraphs, and strong/em tags to format your text. Include an image for each destination.
5.  On the `tips.html` page, create a numbered list (`<ol>`) of your top 5 travel tips.
6.  Ensure every page has a consistent navigation menu at the top so you can easily move between all pages.