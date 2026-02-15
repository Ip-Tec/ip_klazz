# Day 6: CRUD Operations in Flask

Now that we have a database, let's learn how to Create, Read, Update, and Delete data from it.

## 1. Create (Insert)

```python
post = Post(title='My First Post', content='Hello World!')
db.session.add(post)
db.session.commit()
```

## 2. Read (Query)

```python
# Get all posts
all_posts = Post.query.all()

# Get a specific post by ID
post = Post.query.get(1)
```

## 3. Update & Delete

- **Update**: Find the object, change a value, and run `db.session.commit()`.
- **Delete**: Use `db.session.delete(object)` and commit.

## Displaying in HTML

You can pass your queries directly to your templates:

```python
@app.route('/')
def home():
    posts = Post.query.all()
    return render_template('home.html', posts=posts)
```

---

## Homework:

1. Create a route that adds a new user to the database.
2. Build a homepage that displays a list of all users stored in your DB.
3. Add a "delete" button next to each user.

---

### [Next Topic: Database Migrations with Flask-Migrate](./Day7_Migrations.md)
