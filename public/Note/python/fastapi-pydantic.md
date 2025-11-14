---
title: Advanced FastAPI with Pydantic
description: Dive deeper into using Pydantic for more complex data validation and serialization in FastAPI.
---

## Advanced FastAPI with Pydantic

Pydantic is at the core of FastAPI's data handling. While we've seen basic usage, Pydantic offers powerful features for more complex scenarios.

### Using `Field` for Extra Validation

You can use `Field` from Pydantic to add more validation rules, default values, and examples to your model attributes.

```python
from fastapi import FastAPI
from pydantic import BaseModel, Field
from typing import Optional

app = FastAPI()

class Item(BaseModel):
    name: str = Field(..., example="Laptop")
    description: Optional[str] = Field(None, example="A powerful laptop for all your needs.")
    price: float = Field(..., gt=0, description="The price must be greater than zero.")
    tax: Optional[float] = Field(None, example=15.5)

@app.post("/items/")
async def create_item(item: Item):
    return item
```

In this example:

- `...` (Ellipsis) marks a field as required.
- `gt=0` ensures the `price` is greater than 0.
- `example` and `description` provide clear documentation in the API docs.

### Nested Models

Real-world applications often require nested JSON objects. Pydantic handles this seamlessly.

```python
from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl
from typing import List, Optional

app = FastAPI()

class Image(BaseModel):
    url: HttpUrl
    name: str

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: Optional[float] = None
    images: Optional[List[Image]] = None

@app.post("/items/")
async def create_item(item: Item):
    return item
```

You can now send a `POST` request with a body like this:

```json
{
    "name": "Smartphone",
    "price": 599.99,
    "images": [
        {
            "url": "http://example.com/image1.jpg",
            "name": "Front View"
        },
        {
            "url": "http://example.com/image2.jpg",
            "name": "Back View"
        }
    ]
}
```

### Response Model

FastAPI uses the `response_model` parameter in decorators to filter and validate the output data. This is useful for security (to avoid leaking data) and for ensuring the response conforms to a specific schema.

```python
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()

class UserIn(BaseModel):
    username: str
    password: str
    email: str

class UserOut(BaseModel):
    username: str
    email: str

@app.post("/users/", response_model=UserOut)
async def create_user(user: UserIn):
    # In a real app, you would save the user to a database
    return user
```

Even though the `create_user` function returns the full `user` object (including the password), FastAPI will filter the response to only include the fields defined in `UserOut`.

#### `response_model_exclude_unset`

Set `response_model_exclude_unset=True` to only include values that were explicitly set, omitting fields with default values if they weren't provided in the original data.

```python
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: float = 10.5

items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The Bar fighters", "price": 62, "tax": 20.2},
}

@app.get("/items/{item_id}", response_model=Item, response_model_exclude_unset=True)
async def read_item(item_id: str):
    return items[item_id]
```

- Requesting `/items/foo` will return `{"name": "Foo", "price": 50.2}` because `description` and `tax` were not set for it.
- Requesting `/items/bar` will return `{"name": "Bar", "description": "The Bar fighters", "price": 62, "tax": 20.2}`.

This concludes our look at advanced Pydantic usage in FastAPI. With these tools, you can build robust, well-documented, and secure APIs.

**Next**: [Connecting to Databases](fastapi-database)
