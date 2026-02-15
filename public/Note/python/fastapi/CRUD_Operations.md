# CRUD Operations

Yesterday we created our tables. Today, we’ll learn how to actually interact with the data using **CRUD** (Create, Read, Update, Delete).

## 1. Create (Insert Data)

We use a **Session** to add data to the database.

```python
from sqlmodel import Session

def create_hero():
    hero_1 = Hero(name="Deadpond", secret_name="Dive Wilson")

    with Session(engine) as session:
        session.add(hero_1)
        session.commit()
```

## 2. Read (Query Data)

Getting data back using SQLModel is very similar to using a search.

```python
@app.get("/heroes/")
def read_heroes():
    with Session(engine) as session:
        heroes = session.exec(select(Hero)).all()
        return heroes
```

## 3. Update & Delete

- **Update**: Find the record, change its attributes, and commit.
- **Delete**: Find the record, use `session.delete(record)`, and commit.

---

## Homework:

1. Create a route to add a new `Student` to your database.
2. Create a route to list all `Students`.
3. Practice deleting a record by its `id`.

---

### [Next Topic: Dependency Injection Concept](./Dependency_Injection.md)

