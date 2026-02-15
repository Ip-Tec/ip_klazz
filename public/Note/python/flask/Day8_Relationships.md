# Day 8: Relationship Mapping

Most data is related. For example, a **User** can have many **Posts**. This is called a **One-to-Many** relationship.

## 1. Foreign Keys

We use a Foreign Key to "link" a Post to its Author.

```python
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    posts = db.relationship('Post', backref='author', lazy=True)

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
```

## 2. Using the Relationship

Because of the `backref='author'`, you can easily access the user who wrote a post:

```python
first_post = Post.query.first()
print(first_post.author.username)
```

## Summary

- **Primary Key**: Unique ID for a record.
- **Foreign Key**: Refers to a Primary Key in another table.
- **Relationship**: Connects the two models in Python.

---

## Homework:

1. Update your User and Post models to include a relationship.
2. Create a User and then add several Posts "by" that User in the Python shell.
3. Build a route `/user/<username>` that lists all posts by that specific user.

---

### [Next Topic: User Login/Logout with Flask-Login](./Day9_Auth_Basics.md)
