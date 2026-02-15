# Day 3: Static Files (CSS, JS, Images)

A website looks boring without styling! Today we’ll learn how to add CSS and images to our Flask app using the **static** folder.

## 1. The `static` Folder

Just like the `templates` folder, Flask expects all your CSS, JavaScript, and Images to be inside a folder named `static`.

## 2. Writing CSS

Create `static/style.css`:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  text-align: center;
}
h1 {
  color: #2c3e50;
}
```

## 3. Linking in HTML

You should NOT link your CSS with a normal path. Use `url_for`:

```html
<link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}" />
```

## 4. Adding Images

Place an image in the `static` folder and link it similarly:

```html
<img src="{{ url_for('static', filename='logo.png') }}" alt="Our Logo" />
```

---

## Homework:

1. Create a `static` folder and add a CSS file.
2. Link the CSS to your `index.html` and change the background color.
3. Find a free image online, put it in `static`, and display it on your homepage.

---

### [Next Topic: Handling Forms & Request Data](./Day4_Forms.md)
