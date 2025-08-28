### **Chapter 3: Day 3**

**Objectives:** Learn to embed images and other media, organize content using lists, and create structured data tables.

---

### **Lesson: Images and Multimedia**

**Explanation:**
Websites are more engaging with visual and interactive elements. HTML provides tags to embed images, audio, video, and even content from other websites.

- **Images:** The `<img>` tag is used to embed images. It's a self-closing tag with two essential attributes:

  - `src`: Specifies the path to the image file (can be relative or absolute).
  - `alt`: Provides alternative text for screen readers and if the image fails to load. _This is crucial for accessibility._
  - Optional attributes like `width` and `height` (in pixels) can control the display size.

- **Audio & Video:** The `<audio>` and `<video>` tags allow you to embed media files. Key attributes include:

  - `controls`: Adds play, pause, and volume controls.
  - `autoplay`: Starts playing automatically (use sparingly, as it's often annoying).
  - `loop`: Makes the media play again when it finishes.
  - **Note:** You must specify the file format inside using the `<source>` tag with the `src` attribute.

- **iframes:** The `<iframe>` (inline frame) tag embeds another HTML page within the current page. It's commonly used for embedding YouTube videos, Google Maps, or other external content. The `src` attribute points to the URL of the page to embed.

**Code Example:**

```html
<!-- Image -->
<img src="images/logo.png" alt="Company Logo" width="200" />

<!-- Audio -->
<audio controls>
  <source src="audio/song.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>

<!-- Video -->
<video controls width="400">
  <source src="video/clip.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

<!-- Iframe (e.g., embedding a YouTube video) -->
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

**Practice Task:**
Create a file called `media.html`.

1.  Add a relevant image from the web (find its URL) and provide good `alt` text.
2.  Find a free sound effect online (e.g., from freesound.org) and embed it with an `<audio>` tag that has controls.
3.  Embed a YouTube video of your choice using the "Share" -> "Embed" option on YouTube (it gives you the `<iframe>` code).

---

### **Lesson: Lists in HTML**

**Explanation:**
Lists are fundamental for organizing related items. HTML provides three types of lists:

1.  **Unordered Lists (`<ul>`):** Used for lists where the order of items doesn't matter. Each list item (`<li>`) is typically displayed with a bullet point (•).
2.  **Ordered Lists (`<ol>`):** Used for lists where the sequence is important (e.g., steps in a recipe, rankings). Each `<li>` is displayed with a number or letter.
3.  **Description Lists (`<dl>`):** Used for a list of terms and their descriptions. It uses:
    - `<dt>` (Description Term): The term being described.
    - `<dd>` (Description Details): The description of the term.

Lists can also be **nested** (a list inside a list item) to create complex outlines.

**Code Example:**

```html
<!-- Unordered List -->
<ul>
  <li>Apples</li>
  <li>Oranges</li>
  <li>Bananas</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>Preheat oven to 350°F (175°C).</li>
  <li>Mix ingredients in a bowl.</li>
  <li>Bake for 30 minutes.</li>
</ol>

<!-- Description List -->
<dl>
  <dt>HTML</dt>
  <dd>The standard markup language for web pages.</dd>
  <dt>CSS</dt>
  <dd>The language used to style web pages.</dd>
</dl>

<!-- Nested List -->
<ul>
  <li>
    Fruits
    <ul>
      <li>Apple</li>
      <li>Orange</li>
    </ul>
  </li>
  <li>
    Vegetables
    <ul>
      <li>Carrot</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

**Practice Task:**
Create a file called `lists.html`.

1.  Create an ordered list of the top 3 places you want to visit.
2.  Create an unordered list of your grocery items.
3.  Create a description list defining these terms: HTML, CSS, JavaScript.
4.  Create a nested list organizing your hobbies by category (e.g., "Indoor Hobbies" and "Outdoor Hobbies").

---

### **Lesson: Tables in HTML**

**Explanation:**
Tables are used to display tabular data—information that is logically organized into rows and columns. While they should not be used for overall page layout (use CSS for that), they are perfect for things like schedules, price lists, and statistics.

A basic table is built with these tags:

- `<table>`: The container for the entire table.
- `<tr>` (Table Row): Defines a row of cells.
- `<th>` (Table Header): Defines a header cell (bold and centered by default). Use the `scope` attribute (`scope="col"` or `scope="row"`) for accessibility.
- `<td>` (Table Data): Defines a standard data cell.

For more complex tables, you can use `<thead>`, `<tbody>`, and `<tfoot>` to group rows.

**Code Example:**

```html
<table border="1">
  <!-- The 'border' attribute is deprecated but useful for visual learning -->
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apples</td>
      <td>$1.00</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Oranges</td>
      <td>$0.80</td>
      <td>7</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="2">Total Items</td>
      <td>12</td>
    </tr>
  </tfoot>
</table>
```

**Practice Task:**
Create a file called `tables.html`.

1.  Create a simple weekly class schedule table.
2.  The headers should be: `Time`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`.
3.  Fill in at least three time slots with imaginary classes (e.g., "9:00 AM - 10:00 AM: Math").
4.  Use the `colspan` attribute to create a "Lunch Break" row that spans across all weekday columns.

---

### **Homework:**

Create a personal portfolio homepage (`portfolio.html`).

1.  The page must include at least one image (a placeholder or real photo).
2.  It must include an unordered list of your skills.
3.  It must include a table displaying your education history with columns for: `Year`, `Institution`, `Degree`.
4.  Embed a YouTube video of a project you've done or a topic you're interested in.
5.  Use all the tags you've learned so far (headings, paragraphs, links, images, lists, tables) to make the page informative.
