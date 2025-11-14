---
title: Connecting to Databases with FastAPI
description: Learn how to connect your FastAPI application to a database using SQLAlchemy, perform CRUD operations, and manage database migrations with Alembic.
---

## Connecting to Databases with FastAPI

Most web applications need a database to store and retrieve data. FastAPI can work with any database, but relational databases are a common choice. We'll use **SQLAlchemy**, a popular SQL toolkit and Object-Relational Mapper (ORM), to interact with a database.

### Setting Up SQLAlchemy

First, install the necessary packages. We'll use `psycopg2-binary` for PostgreSQL, but you can choose a different driver for your database (e.g., `mysqlclient` for MySQL).

```bash
pip install sqlalchemy psycopg2-binary
```

Next, let's set up the database connection. Create a `database.py` file:

```python
# database.py
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"
# For SQLite, it would be:
# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False} # check_same_thread is only needed for SQLite
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
```

- `SQLALCHEMY_DATABASE_URL`: The connection string for your database.
- `create_engine`: Creates the SQLAlchemy engine.
- `SessionLocal`: This will be the class for our database sessions.
- `Base`: We will inherit from this class to create our database models.

### Creating Database Models

Define your database tables as Python classes in a `models.py` file.

```python
# models.py
from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
    price = Column(Float)
```

This `Item` model will be mapped to an `items` table with columns for `id`, `name`, `description`, and `price`.

### Pydantic Schemas

Create Pydantic models (`schemas.py`) to validate and serialize data coming from and going to the API. This keeps a clear separation between the database models and the API data structures.

```python
# schemas.py
from pydantic import BaseModel
from typing import Optional

class ItemBase(BaseModel):
    name: str
    description: Optional[str] = None
    price: float

class ItemCreate(ItemBase):
    pass

class Item(ItemBase):
    id: int

    class Config:
        orm_mode = True
```

- `ItemBase`: Contains the common attributes.
- `ItemCreate`: Used when creating a new item.
- `Item`: Used when reading an item from the database, includes the `id`.
- `orm_mode = True`: Tells Pydantic to read the data even if it is not a `dict`, but an ORM model.

### CRUD Operations

Now, let's create the functions to interact with the database (`crud.py`).

```python
# crud.py
from sqlalchemy.orm import Session
from . import models, schemas

def get_item(db: Session, item_id: int):
    return db.query(models.Item).filter(models.Item.id == item_id).first()

def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()

def create_item(db: Session, item: schemas.ItemCreate):
    db_item = models.Item(**item.dict())
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
```

### Integrating with FastAPI

Finally, bring everything together in your `main.py`.

```python
# main.py
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# Dependency to get a DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/items/", response_model=schemas.Item)
def create_item(item: schemas.ItemCreate, db: Session = Depends(get_db)):
    return crud.create_item(db=db, item=item)

@app.get("/items/", response_model=list[schemas.Item])
def read_items(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    items = crud.get_items(db, skip=skip, limit=limit)
    return items

@app.get("/items/{item_id}", response_model=schemas.Item)
def read_item(item_id: int, db: Session = Depends(get_db)):
    db_item = crud.get_item(db, item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item
```

- `models.Base.metadata.create_all(bind=engine)`: This line creates the database tables (but it's better to use migrations for production).
- `get_db`: A dependency that provides a database session for each request and closes it afterward.
- `Depends(get_db)`: Injects the database session into the path operation functions.

### Database Migrations with Alembic

In a real project, you shouldn't call `create_all` in your application code. Instead, use a database migration tool like **Alembic** to manage changes to your database schema.

1. **Install Alembic**:

    ```bash
    pip install alembic
    ```

2. **Initialize Alembic**:

    ```bash
    alembic init alembic
    ```

    This creates an `alembic` directory and an `alembic.ini` file.

3. **Configure Alembic**:
    - In `alembic.ini`, set the `sqlalchemy.url` to your database connection string.
    - In `alembic/env.py`, set `target_metadata = Base.metadata` from your models.

4. **Create a Migration**:

    ```bash
    alembic revision --autogenerate -m "Create items table"
    ```

    Alembic will inspect your models and generate a migration script.

5. **Apply the Migration**:

    ```bash
    alembic upgrade head
    ```

    This applies the migration to your database, creating the tables.

Using Alembic provides a version-controlled history of your database schema, making it easy to evolve your database along with your application.

**Next**: [User Authentication with FastAPI](fastapi-auth)
