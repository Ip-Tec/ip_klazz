# Blueprints (Large App Structure)

As your website grows, having 50 routes in a single `app.py` file becomes a nightmare. Today, we’ll learn how to organize our code using **Blueprints**.

## 1. What is a Blueprint?

A Blueprint is a way to organize a group of related routes. For example, you can have one Blueprint for `users`, another for `posts`, and one for `errors`.

## 2. Implementation

Create a file `users/routes.py`:

```python
from flask import Blueprint

users = Blueprint('users', __name__)

@users.route('/profile')
def profile():
    return "User Profile Page"
```

## 3. Registering the Blueprint

In your main `app.py`:

```python
from users.routes import users
app.register_blueprint(users)
```

## Benefits

- **Clean Code**: Your routes are separated logically.
- **Teamwork**: Different people can work on different Blueprints without causing conflicts.

---

## Homework:

1. Create a `main` Blueprint and move your home route into it.
2. Register the Blueprint in your `app.py`.
3. Verify that your website still works exactly as before.

---

### [Next Topic: Working with APIs in Flask](./APIs.md)

