# Day 5: Intro to SQLModel & Databases

To build real applications, you need to store data permanently in a database. Today, we’ll introduce **SQLModel**, which combines the power of Pydantic and SQLAlchemy.

## Why SQLModel?

- **Pydantic**: Handles data validation for your API.
- **SQLAlchemy**: Handles the complexity of talking to a database.
- **SQLModel**: Combines them into one simple class!

## Setting up the Connection

First, install the required library:

```bash
pip install sqlmodel
```

## Creating a Table

In SQLModel, a class can represent both an API model AND a database table.

```python
from sqlmodel import SQLModel, Field, create_engine

class Hero(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    name: str
    secret_name: str
    age: int | None = None

sqlite_url = "sqlite:///database.db"
engine = create_engine(sqlite_url)

def create_db_and_tables():
    SQLModel.metadata.create_all(engine)
```

## Summary

- We use `table=True` to tell SQLModel this class belongs to the database.
- The `engine` is the bridge between Python and our SQL database (SQLite in this case).

---

## Homework:

1. Setup a simple SQLModel for a `Student` (id, name, grade).
2. Create the SQLite database file by calling `create_db_and_tables()`.
3. Verify that the `database.db` file is created in your project folder.

---

### [Next Topic: CRUD Operations with Databases](./Day6_CRUD_Operations.md)
