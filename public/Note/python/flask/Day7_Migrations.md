# Day 7: Database Migrations

What happens if you want to add a new column (like `profile_pic`) to your `User` model after you’ve already started the database? Using `db.create_all()` won't work! We need **Migrations**.

## 1. What are Migrations?

Migrations are like "Git" for your database. They track changes to your models and apply them to the database without deleting your existing data.

## 2. Installation

```bash
pip install Flask-Migrate
```

## 3. Setup

```python
from flask_migrate import Migrate
migrate = Migrate(app, db)
```

## Commands

Open your terminal and run:

1. `flask db init`: Setup the migration folder (run once).
2. `flask db migrate -m "Added profile_pic"`: Generate a migration file.
3. `flask db upgrade`: Apply the changes to the database.

---

## Homework:

1. Setup Flask-Migrate in your project.
2. Add a new column `date_joined` to your User model.
3. Successfully run the migration and upgrade commands.

---

### [Next Topic: Relationship Mapping (One-to-Many)](./Day8_Relationships.md)
