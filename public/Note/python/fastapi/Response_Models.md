# Request Body & Response Models

We’ve seen how to send data TO the API. Today, we focus on controlling the data that comes BACK from the API using **Response Models**.

## 1. Request Body (recap)

You use Pydantic models to define the data your API accepts in a POST or PUT request.

```python
class Item(BaseModel):
    name: str
    secret_code: str  # Sensitive data
```

## 2. Response Models

Sometimes your data contains sensitive info (like passwords or secret codes) that you don't want the user to see. You can use a separate model to "filter" what you return.

**Example:**

```python
class ItemOut(BaseModel):
    name: str

@app.post("/items/", response_model=ItemOut)
def create_item(item: Item):
    # We save the secret_code in the DB, but only return the name
    return item
```

## Why it matters:

- **Security**: Prevents leaking sensitive data.
- **Consistency**: Ensures your API always returns exactly what you promised in the documentation.

---

## Homework:

1. Create a `UserIn` model with `username` and `password`.
2. Create a `UserOut` model with ONLY the `username`.
3. Build a route that returns only the safe data.

---

### [Next Topic: Intro to SQLModel/SQLAlchemy](./Databases_Intro.md)

