## **Day 1: Introducing CSS - The Artist's Toolkit**

### **1. What is CSS?**

If HTML is the skeleton of a web pageâ€”defining its structure with elements like headings, paragraphs, and imagesâ€”then **CSS (Cascading Style Sheets)** is the skin, clothes, and makeup. It brings that structure to life with color, layout, fonts, and style.

In technical terms, CSS is a language used to describe the **presentation** of a document written in HTML. It controls the visual design and, to a large extent, the responsiveness of a webpage across different devices.

**Core Concept:** The fundamental idea of CSS is **separation of concerns**. HTML handles the content and structure; CSS handles the aesthetics. This separation makes websites easier to maintain, update, and style consistently.

---

### **2. CSS Syntax: The Basic Rule Set**

A CSS rule-set is how you tell the browser how to style specific elements. It's composed of two main parts: a **selector** and a **declaration block**.

```css
selector {
  property: value;
  property: value;
}
```

- **Selector:** This points to the HTML element(s) you want to style. In the example above, it's targeting all '<p>' (paragraph) elements.
- **Declaration Block:** Everything inside the curly braces '{}' is a declaration block.
- **Property:** The specific style attribute you want to change (e.g., 'color', 'font-size', 'background').
- **Value:** The setting for the chosen property (e.g., 'red', '20px', '#ffffff').
- **Declaration:** Each 'property: value;' pair is called a declaration. Every declaration must end with a semicolon ';'.

**Example:**

```css
p {
  color: blue;
  font-size: 16px;
  text-align: center;
}
```

_This CSS rule will make all paragraph text blue, set the font size to 16 pixels, and center-align the text._

---

### **3. Selectors: Choosing Your Target**

Selectors are the key to powerful CSS. They allow you to be precise about which elements get styled.

#### **Basic Selectors**

1.  **Element Selector:** Selects all instances of a specific HTML tag.

    ```css
    h1 {
      font-family: Arial;
    }
    ```

2.  **Class Selector ( . ):** Selects all elements with a specific 'class' attribute. This is one of the most common and useful selectors. A class can be used on multiple elements.

    ```html
    <!-- HTML -->
    <p class="highlight">This is important.</p>
    <div class="highlight">This is also important.</div>
    ```

    ```css
    /* CSS */
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }
    ```

3.  **ID Selector ( # ):** Selects a _single_ element with a specific 'id' attribute. IDs must be unique on a page.
    ```html
    <!-- HTML -->
    <header id="main-header">Welcome to my Site</header>
    ```
    ```css
    /* CSS */
    #main-header {
      color: green;
      padding: 20px;
    }
    ```
    **Pro Tip:** Prefer classes over IDs for styling. IDs have higher specificity and can be harder to override, making them better for JavaScript hooks than for CSS.

#### **Combining Selectors**

You can combine selectors to be more specific.

- **Selector Chaining:** To select an element that has multiple classes.

  ```css
  /* Selects elements with BOTH 'btn' and 'primary' classes */
  .btn.primary {
    background-color: blue;
    color: white;
  }
  ```

- **Descendant Selector:** To select an element that is a descendant of another element (separated by a space).
  ```css
  /* Selects any <li> that is inside a <nav> */
  nav li {
    display: inline-block;
  }
  ```

---

### **4. Linking Your CSS to HTML**

There are three ways to add CSS to your HTML, but one is considered best practice.

#### **Method 1: Inline Styles (Avoid for general use)**

Styles are applied directly to an element using the 'style' attribute. This breaks the "separation of concerns" principle and is hard to maintain.

```html
<h1 style="color: red; margin-top: 10px;">A Very Specific Heading</h1>
```

#### **Method 2: Internal Stylesheet**

CSS rules are placed inside a '<style>' tag in the '<head>' of the HTML document. Useful for small, single-page projects or specific page styles, but not ideal for multi-page websites.

```html
<head>
  <style>
    body {
      font-family: sans-serif;
    }
    .container {
      width: 80%;
      margin: 0 auto;
    }
  </style>
</head>
```

#### **Method 3: (BEST PRACTICE)**

This is the most powerful and recommended method. You write all your CSS in a separate file (e.g., 'styles.css`) and link it to your HTML file(s). This allows one CSS file to style your entire website.

**How to do it:**

1.  Create a new file next to your '.html' file named, for example, 'styles.css`.
2.  In the '<head>' section of your HTML file, use the '<link>' tag to connect the two files.

```html
<!-- In your index.html file -->
<head>
  <meta charset="UTF-8" />
  <title>My Website</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  ...
</body>
```

```css
/* In your styles.css file */
body {
  background-color: lightgray;
  line-height: 1.6;
}

h1 {
  color: darkblue;
}
```

---

### **Classwork: Practice Exercises**

**Objective:** Create an 'index.html' file and a 'styles.css' file. Link them together and complete the tasks below.

**HTML Starter Code ('index.html'):**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>CSS Practice</title>
    <!-- Link your stylesheet here -->
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <h1>Welcome to My Styling Page</h1>
    </header>
    <main>
      <p id="intro">This is the introduction paragraph.</p>
      <p class="cool">This paragraph thinks it's cool.</p>
      <p>This paragraph is just normal.</p>
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li class="cool">Third item (is cool)</li>
      </ul>
      <button class="btn">Submit</button>
      <button class="btn warning">Delete</button>
    </main>
  </body>
</html>
```

**Tasks (to complete in 'styles.css'):**

1.  Style the 'body' to have a font family of 'Arial, sans-serif' and a background color of '#f0f0f0'.
2.  Style the 'h1' to be centered and have a color of 'darkviolet'.
3.  Style the paragraph with 'id="intro"' to be bold ('font-weight: bold').
4.  Style all elements with 'class="cool"' to have a light blue background color ('lightblue').
5.  Style the second button (which has two classes: 'btn' and 'warning') to have a red background. _(Hint: Use the chained selector '.btn.warning')_.

---

### **Assignment: Build a Personal Profile Card**

**Goal:** Apply your knowledge of selectors and external stylesheets to create a visually appealing component.

**Instructions:**

1.  Create a new project folder.
2.  Inside, create two files: 'profile.html' and 'profile.css'.
3.  In 'profile.html', write the HTML structure for a profile card. It must include:
    - A 'div' with a class of 'card'.
    - An image ('<img>') of yourself or a placeholder. Give it a class.
    - Your name in an '<h2>' tag.
    - A short bio in a '<p>' tag.
    - A list of your interests in a '<ul>'.
    - A link to your LinkedIn or favorite website.
4.  In 'profile.css', link the stylesheet and style the card. **Requirements:**
    - Use at least one **ID selector**.
    - Use at least two **class selectors**.
    - Use the **descendant selector** to style items within the '.card' div.
    - Style the following properties: 'width', 'background-color', 'padding', 'margin', 'border-radius', 'text-align', 'font-family', and 'box-shadow'.

**Challenge (Optional):**

- Style the link to change color when the user hovers over it (using the ':hover' pseudo-class).
- Find a color palette you like online (e.g., on [coolors.co](https://coolors.co/)) and use those colors in your design.

This assignment will test your understanding of linking files, using different selectors appropriately, and applying fundamental CSS properties to create a tangible design. Good luck

---

> **Next lesson:** [Colors and Units â€“ HEX, RGB, HSL, px, em, rem](Colors_and_Units)

---# #   * * D a y   2 :   C o l o r s   a n d   U n i t s   â ¬    T h e   P a i n t e r ' s   P a l e t t e   a n d   R u l e r * *  
  
 # # #   * * I n t r o d u c t i o n * *  
  
 O n   D a y   1 ,   y o u   l e a r n e d   h o w   t o   a p p l y   b a s i c   s t y l e s .   T o d a y ,   w e ' l l   d i v e   d e e p e r   i n t o   t w o   f u n d a m e n t a l   a s p e c t s   o f   t h o s e   s t y l e s :   d e f i n i n g   * * c o l o r s * *   a n d   u n d e r s t a n d i n g   * * u n i t s   o f   m e a s u r e m e n t * * .   C h o o s i n g   t h e   r i g h t   c o l o r   f o r m a t   a n d   u n i t   i s   c r u c i a l   f o r   c r e a t i n g   p r e c i s e ,   m a i n t a i n a b l e ,   a n d   a c c e s s i b l e   d e s i g n s .  
  
 - - -  
  
 # # #   * * P a r t   1 :   D e f i n i n g   C o l o r s   i n   C S S * *  
  
 C S S   o f f e r s   s e v e r a l   w a y s   t o   e x p r e s s   a   c o l o r ,   e a c h   w i t h   i t s   o w n   u s e   c a s e s   a n d   a d v a n t a g e s .  
  
 # # # #   * * 1 .   C o l o r   K e y w o r d s * *  
  
 T h e   s i m p l e s t   m e t h o d   i s   u s i n g   p r e d e f i n e d   c o l o r   n a m e s .   C S S   s u p p o r t s   o v e r   1 4 0   k e y w o r d s   l i k e   ' r e d ' ,   ' g r e e n ' ,   ' b l u e ' ,   ' l i g h t b l u e ' ,   ' r e b e c c a p u r p l e ' ,   a n d   ' t r a n s p a r e n t ' .  
  
 ` ` ` c s s  
 . s i m p l e   {  
     c o l o r :   r e d ;  
     b a c k g r o u n d - c o l o r :   l i g h t g r a y ;  
 }  
 ` ` `  
  
 * * P r o s : * *   E a s y   t o   r e m e m b e r   a n d   w r i t e   f o r   b a s i c   c o l o r s .  
 * * C o n s : * *   L i m i t e d   s e l e c t i o n   a n d   l a c k   o f   p r e c i s i o n .   Y o u   c a n ' t   c r e a t e   l i g h t   r e d   o r   d a r k   r e d   v a r i a n t s   w i t h   k e y w o r d s   a l o n e .  
  
 # # # #   * * 2 .   H e x a d e c i m a l   ( H E X )   C o l o r s * *  
  
 T h i s   i s   o n e   o f   t h e   m o s t   c o m m o n   f o r m a t s ,   e s p e c i a l l y   i n   d e s i g n   t o o l s .   H E X   c o d e s   a r e   p r e f i x e d   w i t h   a   ' # '   a n d   c o n s i s t   o f   s i x   h e x a d e c i m a l   d i g i t s   ( 0 - 9 ,   A - F ) .   T h e   d i g i t s   r e p r e s e n t   t h e   i n t e n s i t y   o f   R e d ,   G r e e n ,   a n d   B l u e   ( R R G G B B ) .  
  
 -   * * ' # f f 0 0 0 0 ' * *   i s   f u l l   r e d   ( f f ) ,   n o   g r e e n   ( 0 0 ) ,   n o   b l u e   ( 0 0 ) .  
 -   * * ' # 0 0 f f 0 0 ' * *   i s   f u l l   g r e e n .  
 -   * * ' # 0 0 0 0 0 0 ' * *   i s   b l a c k   ( a l l   c o l o r s   o f f ) .  
 -   * * ' # f f f f f f ' * *   i s   w h i t e   ( a l l   c o l o r s   a t   f u l l   i n t e n s i t y ) .  
  
 Y o u   c a n   o f t e n   u s e   a   s h o r t h a n d   3 - d i g i t   v e r s i o n   f o r   c o d e s   w h e r e   e a c h   p a i r   i s   i d e n t i c a l :   ' # f 0 0 '   f o r   ' # f f 0 0 0 0 ' ,   ' # 0 f 0 '   f o r   ' # 0 0 f f 0 0 ' .  
  
 ` ` ` c s s  
 . h e x - e x a m p l e   {  
     c o l o r :   # f f 5 7 3 3 ;   / *   A   r e d d i s h - o r a n g e   * /  
     b a c k g r o u n d - c o l o r :   # 0 9 c ;   / *   S h o r t h a n d   f o r   # 0 0 9 9 c c   -   a   n i c e   b l u e   * /  
 }  
 ` ` `  
  
 # # # #   * * 3 .   R G B   a n d   R G B A * *  
  
 T h e   ' r g b ( ) '   f u n c t i o n   a l l o w s   y o u   t o   d e f i n e   a   c o l o r   b y   s p e c i f y i n g   t h e   i n t e n s i t y   o f   i t s   r e d ,   g r e e n ,   a n d   b l u e   c o m p o n e n t s   o n   a   s c a l e   f r o m   0   t o   2 5 5 .   I t ' s   m o r e   r e a d a b l e   t h a n   H E X .  
  
 T h e   ' r g b a ( ) '   f u n c t i o n   a d d s   a   f o u r t h   v a l u e :   * * a l p h a * * ,   w h i c h   c o n t r o l s   t r a n s p a r e n c y .   T h e   a l p h a   v a l u e   i s   a   d e c i m a l   f r o m   ' 0 '   ( c o m p l e t e l y   t r a n s p a r e n t )   t o   ' 1 '   ( c o m p l e t e l y   o p a q u e ) .  
  
 ` ` ` c s s  
 . r g b - e x a m p l e   {  
     b a c k g r o u n d - c o l o r :   r g b ( 2 5 5 ,   8 7 ,   5 1 ) ;   / *   S a m e   a s   # f f 5 7 3 3   * /  
     c o l o r :   r g b a ( 0 ,   0 ,   0 ,   0 . 7 ) ;   / *   7 0 %   o p a q u e   b l a c k   * /  
     b o r d e r :   2 p x   s o l i d   r g b a ( 2 5 5 ,   8 7 ,   5 1 ,   0 . 5 ) ;   / *   5 0 %   o p a q u e   r e d d i s h - o r a n g e   b o r d e r   * /  
 }  
 ` ` `  
  
 # # # #   * * 4 .   H S L   a n d   H S L A * *  
  
 T h e   ' h s l ( ) '   f u n c t i o n   i s   o f t e n   c o n s i d e r e d   m o r e   i n t u i t i v e   f o r   d e s i g n e r s .   I t   d e f i n e s   a   c o l o r   u s i n g :  
  
 -   * * H u e : * *   A   d e g r e e   o n   t h e   c o l o r   w h e e l   f r o m   ' 0 '   t o   ' 3 6 0 ` .   ' 0 '   i s   r e d ,   ' 1 2 0 '   i s   g r e e n ,   ' 2 4 0 '   i s   b l u e .  
 -   * * S a t u r a t i o n : * *   A   p e r c e n t a g e   w h e r e   ' 0 % '   i s   a   s h a d e   o f   g r a y   a n d   ' 1 0 0 % '   i s   t h e   f u l l   c o l o r .  
 -   * * L i g h t n e s s : * *   A   p e r c e n t a g e   w h e r e   ' 0 % '   i s   b l a c k ,   ' 5 0 % '   i s   t h e   n o r m a l   c o l o r ,   a n d   ' 1 0 0 % '   i s   w h i t e .  
  
 L i k e   ' r g b a ( ) ' ,   ' h s l a ( ) '   a d d s   a n   a l p h a   c h a n n e l   f o r   t r a n s p a r e n c y .  
  
 ` ` ` c s s  
 . h s l - e x a m p l e   {  
     b a c k g r o u n d - c o l o r :   h s l ( 1 1 ,   1 0 0 % ,   6 0 % ) ;   / *   S a m e   # f f 5 7 3 3   a g a i n !   * /  
     c o l o r :   h s l a ( 2 4 0 ,   1 0 0 % ,   5 0 % ,   0 . 8 ) ;   / *   8 0 %   o p a q u e   s o l i d   b l u e   * /  
 }  
 ` ` `  
  
 * * W h y   u s e   H S L ? * *   I t ' s   i n c r e d i b l y   e a s y   t o   c r e a t e   c o l o r   v a r i a t i o n s .   F o r   e x a m p l e ,   t o   g e t   a   d a r k e r   s h a d e   o f   t h e   s a m e   c o l o r ,   y o u   j u s t   d e c r e a s e   t h e   L i g h t n e s s   v a l u e .  
  
 * * W h i c h   o n e   s h o u l d   y o u   u s e ? * *  
  
 -   U s e   * * H E X * *   f o r   c o n s i s t e n c y ,   e s p e c i a l l y   i f   y o u r   d e s i g n   t o o l   e x p o r t s   t h e m .  
 -   U s e   * * R G B / R G B A * *   w h e n   y o u   n e e d   t r a n s p a r e n c y .  
 -   U s e   * * H S L / H S L A * *   w h e n   y o u   n e e d   t o   p r o g r a m m a t i c a l l y   c r e a t e   c o l o r   v a r i a t i o n s   ( e . g . ,   l i g h t / d a r k   t h e m e s )   o r   i f   i t   f i t s   y o u r   m e n t a l   m o d e l   b e t t e r .  
  
 - - -  
  
 # # #   * * P a r t   2 :   U n i t s   o f   M e a s u r e m e n t   i n   C S S * *  
  
 C S S   h a s   t w o   m a i n   c a t e g o r i e s   o f   u n i t s :   * * a b s o l u t e * *   a n d   * * r e l a t i v e * * .  
  
 # # # #   * * A b s o l u t e   U n i t s * *  
  
 T h e s e   a r e   f i x e d   s i z e s .   T h e y   w i l l   a p p e a r   a s   e x a c t l y   t h a t   s i z e ,   r e g a r d l e s s   o f   t h e   d e v i c e   o r   p a r e n t   e l e m e n t .   T h e y   a r e   b e s t   u s e d   f o r   p r i n t   s t y l e s h e e t s   b u t   c a n   b e   l e s s   f l e x i b l e   f o r   s c r e e n - b a s e d   d e s i g n s .  
  
 -   ' p x '   ( P i x e l s ) :   T h e   m o s t   c o m m o n   a b s o l u t e   u n i t .   O n e   p i x e l   i s   o n e   d o t   o n   a   s c r e e n .  
  
     ` ` ` c s s  
     . p i x e l - u n i t   {  
         f o n t - s i z e :   1 6 p x ;  
         p a d d i n g :   1 0 p x ;  
     }  
     ` ` `  
  
 # # # #   * * R e l a t i v e   U n i t s * *  
  
 T h e s e   u n i t s   a r e   r e l a t i v e   t o   a n o t h e r   l e n g t h ,   s u c h   a s   t h e   p a r e n t   e l e m e n t ' s   f o n t   s i z e   o r   t h e   v i e w p o r t   s i z e .   T h e y   a r e   k e y   t o   c r e a t i n g   f l e x i b l e   a n d   r e s p o n s i v e   l a y o u t s .  
  
 1 .   * * ' e m ' : * *   R e l a t i v e   t o   t h e   * * f o n t - s i z e * *   o f   t h e   _ p a r e n t _   e l e m e n t .  
  
         -   I f   a   p a r e n t   e l e m e n t   h a s '   f o n t - s i z e :   2 0 p x ' ,   t h e n '   1 e m   =   2 0 p x '   f o r   i t s   c h i l d r e n .  
         -   I f   u s e d   f o r '   f o n t - s i z e '   i t s e l f ,   i t ' s   r e l a t i v e   t o   t h e   _ i n h e r i t e d _   f o n t   s i z e .  
         -   I t   c o m p o u n d s   i n   n e s t e d   l i s t s .  
  
 2 .   * * ' r e m '   ( R o o t   e m ) : * *   R e l a t i v e   t o   t h e   * * f o n t - s i z e * *   o f   t h e   _ r o o t _   e l e m e n t   ( ' < h t m l > ' ) .   T h i s   p r o v i d e s   a   c o n s i s t e n t   r e f e r e n c e   p o i n t   a n d   a v o i d s   t h e   c o m p o u n d i n g   i s s u e   o f '   e m ' .  
  
         -   T h e   d e f a u l t   r o o t '   f o n t - s i z e '   i n   m o s t   b r o w s e r s   i s '   1 6 p x ' ,   s o '   1 r e m   =   1 6 p x ' .  
  
         ` ` ` c s s  
         h t m l   {  
             f o n t - s i z e :   1 8 p x ;   / *   1 r e m   i s   n o w   1 8 p x   e v e r y w h e r e   * /  
         }  
         . r e m - u n i t   {  
             f o n t - s i z e :   2 r e m ;   / *   2   *   1 8 p x   =   3 6 p x   * /  
             m a r g i n :   1 r e m ;   / *   1   *   1 8 p x   =   1 8 p x   * /  
         }  
         ` ` `  
  
 3 .   * * ' % '   ( P e r c e n t a g e ) : * *   R e l a t i v e   t o   t h e   _ s a m e   p r o p e r t y _   o f   t h e   p a r e n t   e l e m e n t .  
         -   '   w i d t h :   5 0 % ; '   m e a n s   h a l f   t h e   w i d t h   o f   t h e   p a r e n t .  
         -   '   f o n t - s i z e :   1 2 0 % ; '   m e a n s   1 2 0 %   o f   t h e   p a r e n t ' s   f o n t   s i z e .  
  
         ` ` ` c s s  
         . p e r c e n t a g e - u n i t   {  
             w i d t h :   8 0 % ;   / *   8 0 %   o f   t h e   p a r e n t ' s   w i d t h   * /  
             h e i g h t :   5 0 % ;   / *   5 0 %   o f   t h e   p a r e n t ' s   h e i g h t   * /  
         }  
         ` ` `  
  
 * * B e s t   P r a c t i c e : * *   U s e '   r e m '   f o r   m o s t '   f o n t - s i z e ' , '   m a r g i n ' ,   a n d '   p a d d i n g '   p r o p e r t i e s   f o r   c o n s i s t e n t   s c a l i n g .   U s e '   e m '   f o r   p r o p e r t i e s   t h a t   s h o u l d   s c a l e   r e l a t i v e   t o   t h e   l o c a l   f o n t   s i z e   ( e . g . , '   m a r g i n '   o n   a   b u t t o n   r e l a t i v e   t o   i t s   t e x t ) .   U s e '   % '   f o r   w i d t h s   a n d   l a y o u t s .  
  
 - - -  
  
 # # #   * * C l a s s w o r k :   E x p e r i m e n t i n g   w i t h   C o l o r s   a n d   U n i t s * *  
  
 * * O b j e c t i v e : * *   C r e a t e   a   n e w   ' p r a c t i c e . h t m l '   a n d   ' p r a c t i c e . c s s '   f i l e .   L i n k   t h e m   a n d   e x p e r i m e n t   w i t h   t h e   f o l l o w i n g   c o d e .  
  
 * * H T M L   C o d e : * *  
  
 ` ` ` h t m l  
 < ! D O C T Y P E   h t m l >  
 < h t m l   l a n g = " e n " >  
     < h e a d >  
         < m e t a   c h a r s e t = " U T F - 8 "   / >  
         < t i t l e > C o l o r s   &   U n i t s   P r a c t i c e < / t i t l e >  
         < l i n k   r e l = " s t y l e s h e e t "   h r e f = " p r a c t i c e . c s s "   / >  
     < / h e a d >  
     < b o d y >  
         < d i v   c l a s s = " c o n t a i n e r " >  
             < h 1 > C o l o r   &   U n i t   P l a y g r o u n d < / h 1 >  
             < p   c l a s s = " t e x t - b o x " >  
                 T h i s   i s   a   s a m p l e   p a r a g r a p h .   C h a n g e   m y   c o l o r   u s i n g   d i f f e r e n t   f o r m a t s !  
             < / p >  
             < b u t t o n   c l a s s = " b t n   b t n - l a r g e " > A   L a r g e   B u t t o n < / b u t t o n >  
             < b u t t o n   c l a s s = " b t n " > A   N o r m a l   B u t t o n < / b u t t o n >  
             < d i v   c l a s s = " n e s t e d - b o x " >  
                 < p > T h i s   t e x t   i s   i n s i d e   a   n e s t e d   b o x .   L e t ' s   s e e   h o w   ' e m '   w o r k s   h e r e . < / p >  
             < / d i v >  
         < / d i v >  
     < / b o d y >  
 < / h t m l >  
 ` ` `  
  
 * * T a s k s   ( ' p r a c t i c e . c s s ' ) : * *  
  
 1 .   S e t   t h e   ' f o n t - s i z e '   o f   t h e   ' h t m l '   e l e m e n t   t o   ' 2 0 p x ' .  
 2 .   S t y l e   t h e   ' . t e x t - b o x ' :  
         -   G i v e   i t s   ' b a c k g r o u n d - c o l o r '   a   v a l u e   u s i n g   * * H S L * * .   C h o o s e   a   c o l o r   y o u   l i k e .  
         -   G i v e   i t s   ' c o l o r '   a   v a l u e   u s i n g   * * R G B A * *   t o   m a k e   t h e   t e x t   c o l o r   s e m i - t r a n s p a r e n t .  
         -   S e t   i t s   ' p a d d i n g '   t o   ' 1 r e m ' .  
 3 .   S t y l e   t h e   ' . b t n '   c l a s s :  
         -   S e t   i t s   ' b o r d e r '   t o   ' n o n e ' .  
         -   S e t   i t s   ' p a d d i n g '   t o   ' 0 . 7 5 e m   1 . 5 e m ' .   ( N o t i c e   h o w   t h i s   s c a l e s   w i t h   t h e   b u t t o n ' s   o w n   f o n t   s i z e ) .  
         -   S e t   i t s   ' b a c k g r o u n d - c o l o r '   u s i n g   a   * * H E X * *   c o d e .  
         -   S e t   i t s   ' f o n t - s i z e '   t o   ' 1 r e m ' .  
 4 .   S t y l e   t h e   ' . b t n - l a r g e '   c l a s s   t o   h a v e   a   ' f o n t - s i z e '   o f   ' 1 . 5 r e m ' .  
 5 .   S t y l e   t h e   ' . n e s t e d - b o x ' :  
         -   S e t   i t s   ' f o n t - s i z e '   t o   ' 1 . 5 e m ' .   ( O b s e r v e   h o w   t h i s   c o m p o u n d s   b e c a u s e   i t ' s   n e s t e d   i n s i d e   ' . c o n t a i n e r ' ,   w h i c h   m i g h t   a l r e a d y   h a v e   a   f o n t   s i z e ) .  
  
 - - -  
  
 # # #   * * A s s i g n m e n t :   T h e m e d   P r i c i n g   C a r d * *  
  
 * * G o a l : * *   B u i l d   a   c o m p o n e n t   t h a t   p r a c t i c e s   t h e   a p p l i c a t i o n   o f   c o l o r   s y s t e m s   a n d   r e l a t i v e   u n i t s .  
  
 * * I n s t r u c t i o n s : * *  
  
 1 .   C r e a t e   a   n e w   f o l d e r   w i t h   ' p r i c i n g . h t m l '   a n d   ' p r i c i n g . c s s '   f i l e s .  
 2 .   I n   t h e   H T M L ,   c r e a t e   a   s t r u c t u r e   f o r   a   s i n g l e   p r i c i n g   p l a n   c a r d .   I n c l u d e :  
         -   A   ' d i v '   a s   t h e   c a r d   c o n t a i n e r .  
         -   A   p l a n   n a m e   ( e . g . ,   ' < h 2 > B a s i c < / h 2 > ' ) .  
         -   A   m o n t h l y   p r i c e   ( e . g . ,   ' < p   c l a s s = " p r i c e " > $ 1 9 < / p > < s p a n > / m o < / s p a n > ' ) .  
         -   A   l i s t   o f   f e a t u r e s   ( ' < u l > '   w i t h   3 - 4   ' < l i > '   i t e m s ) .  
         -   A   " S i g n   U p "   b u t t o n   ( ' < a   c l a s s = " b u t t o n " > S i g n   U p < / a > ' ) .  
 3 .   I n   y o u r   C S S ,   * * y o u   m u s t   u s e   a l l   o f   t h e   f o l l o w i n g : * *  
         -   * * A t   l e a s t   o n e * *   ' r g b ( ) '   o r   ' r g b a ( ) '   c o l o r .  
         -   * * A t   l e a s t   o n e * *   ' h s l ( ) '   o r   ' h s l a ( ) '   c o l o r .  
         -   * * A t   l e a s t   o n e * *   H E X   c o l o r .  
         -   U s e   ' r e m '   u n i t s   f o r   ' f o n t - s i z e ' ,   ' m a r g i n ' ,   a n d   ' p a d d i n g ' .  
         -   U s e   ' e m '   u n i t s   f o r   t h e   b u t t o n ' s   ' p a d d i n g ' .  
         -   U s e   a   ' % '   f o r   t h e   c a r d ' s   ' w i d t h '   r e l a t i v e   t o   i t s   p a r e n t .  
  
 * * C h a l l e n g e   ( O p t i o n a l ) : * *  
  
 -   A d d   a   ' : h o v e r '   e f f e c t   t o   t h e   b u t t o n .   U s e   ' h s l a ( ) '   t o   c h a n g e   t h e   b a c k g r o u n d   c o l o r   t o   a   d a r k e r   s h a d e   o f   i t s   o r i g i n a l   c o l o r   b y   o n l y   c h a n g i n g   t h e   L i g h t n e s s   v a l u e   i n   t h e   H S L   m o d e l .  
 -   A d d   a   s u b t l e   s h a d o w   t o   t h e   c a r d   u s i n g   t h e   ' b o x - s h a d o w '   p r o p e r t y   ( e . g . ,   ' b o x - s h a d o w :   0   0 . 5 r e m   1 r e m   r g b a ( 0 ,   0 ,   0 ,   0 . 1 ) ; ' ) .   T h i s   u s e s   ' r e m '   f o r   t h e   b l u r   a n d   ' r g b a '   f o r   a   t r a n s p a r e n t   b l a c k .  
  
 - - -  
  
 * * N e x t   l e s s o n : * *   [ T y p o g r a p h y   â ¬    F o n t s ,   S i z e s ,   L i n e   H e i g h t ,   F o n t   W e i g h t ] ( T y p o g r a p h y )  
  
 - - -  
 