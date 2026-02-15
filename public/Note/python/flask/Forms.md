# Handling Forms & Request Data

Websites are more than just pages to look at; they are interactive! Today we’ll learn how to gather information from users using **Forms**.

## 1. Creating the Form

In your HTML template, add a standard form:

```html
<form action="/submit" method="POST">
  <input type="text" name="username" placeholder="Enter your name" />
  <button type="submit">Send</button>
</form>
```

## 2. Handling the Request in Flask

You need to import `request` and allow the `POST` method:

```python
from flask import request

@app.route('/submit', methods=['POST'])
def handle_form():
    name = request.form.get('username')
    return f"Welcome, {name}! Your form was received."
```

## `GET` vs `POST`

- **GET**: Used for requesting data (like viewing a page).
- **POST**: Used for sending data (like submitting a form).

---

## Homework:

1. Create a feedback form with a name and a message field.
2. Handle the submission and display a "Thank You" message that includes their name.
3. What happens if you try to visit the `/submit` URL directly in your browser? Why?

---

### [Next Topic: Flask-SQLAlchemy Integration](./Databases.md)

