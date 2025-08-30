## **Day 2: Colors and Units – The Painter's Palette and Ruler**

### **Introduction**

On Day 1, you learned how to apply basic styles. Today, we'll dive deeper into two fundamental aspects of those styles: defining **colors** and understanding **units of measurement**. Choosing the right color format and unit is crucial for creating precise, maintainable, and accessible designs.

---

### **Part 1: Defining Colors in CSS**

CSS offers several ways to express a color, each with its own use cases and advantages.

#### **1. Color Keywords**

The simplest method is using predefined color names. CSS supports over 140 keywords like 'red', 'green', 'blue', 'lightblue', 'rebeccapurple', and 'transparent'.

```css
.simple {
  color: red;
  background-color: lightgray;
}
```

**Pros:** Easy to remember and write for basic colors.
**Cons:** Limited selection and lack of precision. You can't create light red or dark red variants with keywords alone.

#### **2. Hexadecimal (HEX) Colors**

This is one of the most common formats, especially in design tools. HEX codes are prefixed with a '#' and consist of six hexadecimal digits (0-9, A-F). The digits represent the intensity of Red, Green, and Blue (RRGGBB).

- **'#ff0000'** is full red (ff), no green (00), no blue (00).
- **'#00ff00'** is full green.
- **'#000000'** is black (all colors off).
- **'#ffffff'** is white (all colors at full intensity).

You can often use a shorthand 3-digit version for codes where each pair is identical: '#f00' for '#ff0000', '#0f0' for '#00ff00'.

```css
.hex-example {
  color: #ff5733; /* A reddish-orange */
  background-color: #09c; /* Shorthand for #0099cc - a nice blue */
}
```

#### **3. RGB and RGBA**

The 'rgb()' function allows you to define a color by specifying the intensity of its red, green, and blue components on a scale from 0 to 255. It's more readable than HEX.

The 'rgba()' function adds a fourth value: **alpha**, which controls transparency. The alpha value is a decimal from '0' (completely transparent) to '1' (completely opaque).

```css
.rgb-example {
  background-color: rgb(255, 87, 51); /* Same as #ff5733 */
  color: rgba(0, 0, 0, 0.7); /* 70% opaque black */
  border: 2px solid rgba(255, 87, 51, 0.5); /* 50% opaque reddish-orange border */
}
```

#### **4. HSL and HSLA**

The 'hsl()' function is often considered more intuitive for designers. It defines a color using:

- **Hue:** A degree on the color wheel from '0' to '360`. '0' is red, '120' is green, '240' is blue.
- **Saturation:** A percentage where '0%' is a shade of gray and '100%' is the full color.
- **Lightness:** A percentage where '0%' is black, '50%' is the normal color, and '100%' is white.

Like 'rgba()', 'hsla()' adds an alpha channel for transparency.

```css
.hsl-example {
  background-color: hsl(11, 100%, 60%); /* Same #ff5733 again! */
  color: hsla(240, 100%, 50%, 0.8); /* 80% opaque solid blue */
}
```

**Why use HSL?** It's incredibly easy to create color variations. For example, to get a darker shade of the same color, you just decrease the Lightness value.

**Which one should you use?**

- Use **HEX** for consistency, especially if your design tool exports them.
- Use **RGB/RGBA** when you need transparency.
- Use **HSL/HSLA** when you need to programmatically create color variations (e.g., light/dark themes) or if it fits your mental model better.

---

### **Part 2: Units of Measurement in CSS**

CSS has two main categories of units: **absolute** and **relative**.

#### **Absolute Units**

These are fixed sizes. They will appear as exactly that size, regardless of the device or parent element. They are best used for print stylesheets but can be less flexible for screen-based designs.

- 'px' (Pixels): The most common absolute unit. One pixel is one dot on a screen.
  ```css
  .pixel-unit {
    font-size: 16px;
    padding: 10px;
  }
  ```

#### **Relative Units**

These units are relative to another length, such as the parent element's font size or the viewport size. They are key to creating flexible and responsive layouts.

1.  **'em':** Relative to the **font-size** of the _parent_ element.

    - If a parent element has' font-size: 20px', then' 1em = 20px' for its children.
    - If used for' font-size' itself, it's relative to the _inherited_ font size.
    - It compounds in nested lists.

2.  **'rem' (Root em):** Relative to the **font-size** of the _root_ element ('<html>'). This provides a consistent reference point and avoids the compounding issue of' em'.

    - The default root' font-size' in most browsers is' 16px', so' 1rem = 16px'.

    ```css
    html {
      font-size: 18px; /* 1rem is now 18px everywhere */
    }
    .rem-unit {
      font-size: 2rem; /* 2 * 18px = 36px */
      margin: 1rem; /* 1 * 18px = 18px */
    }
    ```

3.  **'%' (Percentage):** Relative to the _same property_ of the parent element.
    - ' width: 50%;' means half the width of the parent.
    - ' font-size: 120%;' means 120% of the parent's font size.
    ```css
    .percentage-unit {
      width: 80%; /* 80% of the parent's width */
      height: 50%; /* 50% of the parent's height */
    }
    ```

**Best Practice:** Use' rem' for most' font-size',' margin', and' padding' properties for consistent scaling. Use' em' for properties that should scale relative to the local font size (e.g.,' margin' on a button relative to its text). Use' %' for widths and layouts.

---

### **Classwork: Experimenting with Colors and Units**

**Objective:** Create a new 'practice.html' and 'practice.css' file. Link them and experiment with the following code.

**HTML Code:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Colors & Units Practice</title>
    <link rel="stylesheet" href="practice.css" />
  </head>
  <body>
    <div class="container">
      <h1>Color & Unit Playground</h1>
      <p class="text-box">
        This is a sample paragraph. Change my color using different formats!
      </p>
      <button class="btn btn-large">A Large Button</button>
      <button class="btn">A Normal Button</button>
      <div class="nested-box">
        <p>This text is inside a nested box. Let's see how 'em' works here.</p>
      </div>
    </div>
  </body>
</html>
```

**Tasks ('practice.css'):**

1.  Set the 'font-size' of the 'html' element to '20px'.
2.  Style the '.text-box':
    - Give its 'background-color' a value using **HSL**. Choose a color you like.
    - Give its 'color' a value using **RGBA** to make the text color semi-transparent.
    - Set its 'padding' to '1rem'.
3.  Style the '.btn' class:
    - Set its 'border' to 'none'.
    - Set its 'padding' to '0.75em 1.5em'. (Notice how this scales with the button's own font size).
    - Set its 'background-color' using a **HEX** code.
    - Set its 'font-size' to '1rem'.
4.  Style the '.btn-large' class to have a 'font-size' of '1.5rem'.
5.  Style the '.nested-box':
    - Set its 'font-size' to '1.5em'. (Observe how this compounds because it's nested inside '.container', which might already have a font size).

---

### **Assignment: Themed Pricing Card**

**Goal:** Build a component that practices the application of color systems and relative units.

**Instructions:**

1.  Create a new folder with 'pricing.html' and 'pricing.css' files.
2.  In the HTML, create a structure for a single pricing plan card. Include:
    - A 'div' as the card container.
    - A plan name (e.g., '<h2>Basic</h2>').
    - A monthly price (e.g., '<p class="price">$19</p><span>/mo</span>').
    - A list of features ('<ul>' with 3-4 '<li>' items).
    - A "Sign Up" button ('<a class="button">Sign Up</a>').
3.  In your CSS, **you must use all of the following:**
    - **At least one** 'rgb()' or 'rgba()' color.
    - **At least one** 'hsl()' or 'hsla()' color.
    - **At least one** HEX color.
    - Use 'rem' units for 'font-size', 'margin', and 'padding'.
    - Use 'em' units for the button's 'padding'.
    - Use a '%' for the card's 'width' relative to its parent.

**Challenge (Optional):**

- Add a ':hover' effect to the button. Use 'hsla()' to change the background color to a darker shade of its original color by only changing the Lightness value in the HSL model.
- Add a subtle shadow to the card using the 'box-shadow' property (e.g., 'box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);'). This uses 'rem' for the blur and 'rgba' for a transparent black.
