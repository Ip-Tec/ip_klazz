# Day 7: Dependency Injection Concept

One of FastAPI’s most advanced and powerful features is **Dependency Injection**. It sounds complex, but it’s actually a way to "inject" logic into your routes automatically.

## What is a Dependency?

A dependency is a piece of code that your route needs to run. For example:

- A database session.
- A logged-in user.
- A security check.

## Using `Depends`

FastAPI provides the `Depends` class to handle this.

**Example: Getting the Database Session**

```python
from fastapi import Depends
from sqlmodel import Session

def get_session():
    with Session(engine) as session:
        yield session

@app.get("/items/")
def read_items(session: Session = Depends(get_session)):
    # The 'session' is automatically provided here!
    items = session.exec(select(Item)).all()
    return items
```

## Why use it?

- **Reusability**: You write the logic (like connecting to DB) once and use it everywhere.
- **Testing**: It makes it very easy to "mock" parts of your API during testing.

---

## Homework:

1. Create a `get_db` function that yields a session.
2. Refactor one of your previous routes to use `Depends`.
3. Try to explain in your own words why this is better than opening a session manually every time.

---

### [Next Topic: Configuration & Env Variables](./Day8_Config_Env.md)
