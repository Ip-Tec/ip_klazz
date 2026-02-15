# Day 2: Pydantic Models & Validation

One of the best things about FastAPI is how it handles data using **Pydantic**. Pydantic allows you to define the shape of your data using Python classes.

## What is Pydantic?

Pydantic is a library that performs data validation based on Python type hints. When you send data to your API, Pydantic ensures it matches the format you expect.

## Creating a Model

To create a model, inherit from `BaseModel`:

```python
from pydantic import BaseModel

class User(BaseModel):
    username: str
    age: int
    email: str
```

## Why use Models?

- **Validation**: If someone sends a string for `age`, FastAPI will return a clear error message automatically.
- **Editor Support**: You get auto-completion for your data attributes inside your code.
- **Security**: It ensures that only the data you define is processed by your application.

## Example in FastAPI

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float

@app.post("/items/")
def create_item(item: Item):
    return {"message": f"Item {item.name} created!", "total_price": item.price * 1.15}
```

---

## Homework:

1. Create a `Product` model with `name`, `description`, and `stock` count.
2. Build a POST route that accepts this model and returns a summary.
3. Try sending invalid data (e.g., a string for stock) using the `/docs` page to see the error.

---

### [Next Topic: Path & Query Parameters](./Day3_Parameters.md)
