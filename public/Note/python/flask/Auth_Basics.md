# User Login/Logout with Flask-Login

Handling user sessions (keeping someone logged in) is a lot of work if you do it manually. Fortunately, **Flask-Login** handles it for us.

## 1. Installation

```bash
pip install flask-login
```

## 2. Setup

You need to tell Flask-Login how to load a user from the database.

```python
from flask_login import LoginManager, UserMixin

login_manager = LoginManager(app)

class User(db.Model, UserMixin):
    ...

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))
```

## 3. Protecting Routes

You can ensure only logged-in users see certain pages using the `@login_required` decorator.

```python
from flask_login import login_required

@app.route('/protected')
@login_required
def secret_page():
    return "This is for logged-in eyes only!"
```

---

## Homework:

1. Setup Flask-Login in your project.
2. Implement the `user_loader` function.
3. Protect your "Create Post" route so that only logged-in users can access it.

---

### [Next Topic: Password Hashing (Bcrypt)](./Hashing.md)

