# Flask-SQLAlchemy Integration

Static websites are great, but most apps need a database to store users, posts, or products. Today we’ll introduce **Flask-SQLAlchemy**, the standard way to handle databases in Flask.

## 1. Installation

```bash
pip install Flask-SQLAlchemy
```

## 2. Configuration

In `app.py`, we need to tell Flask where our database file is located.

```python
from flask_sqlalchemy import SQLAlchemy

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
```

## 3. Creating a Model

A Model is a Python class that represents a table in our database.

```python
class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    content = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return f"Post('{self.title}')"
```

## Creating the DB

To create the database file, run this inside a Python shell:

```python
from app import db, app
with app.app_context():
    db.create_all()
```

---

## Homework:

1. Setup SQLAlchemy in your project.
2. Create a `User` model with `username` and `email`.
3. Generate the database file and verify it appears as `site.db`.

---

### [Next Topic: CRUD Operations in Flask](./CRUD_Operations.md)

