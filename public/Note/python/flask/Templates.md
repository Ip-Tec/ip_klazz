# Templates with Jinja2

Instead of writing HTML directly in our Python code (like we did yesterday), we should use **Templates**. Flask uses a powerful engine called **Jinja2** to render HTML files.

## 1. The `templates` Folder

Flask looks for HTML files inside a folder named `templates`. Create it now!

## 2. Your First Template

Create `templates/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Flask App</title>
  </head>
  <body>
    <h1>Hello, {{ name }}!</h1>
    <p>Welcome to our Day 2 lesson.</p>
  </body>
</html>
```

## 3. Rendering via Python

In `app.py`, use `render_template`:

```python
from flask import render_template

@app.route('/greet/<name>')
def greet(name):
    return render_template('index.html', name=name)
```

## Why use Jinja2?

- **Placeholders**: `{{ variable }}` lets you inject Python data into HTML.
- **Control Flow**: You can use `{% if %}` and `{% for %}` directly in your HTML!

---

## Homework:

1. Create a `templates` folder and an `index.html` file.
2. Build a route that passes a list of "hobbies" to your template.
3. Use a Jinja2 `{% for %}` loop in your template to display those hobbies as a list.

---

### [Next Topic: Static Files (CSS, JS, Images)](./Static_Files.md)

