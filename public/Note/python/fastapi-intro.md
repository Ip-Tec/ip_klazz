---
title: Introduction to FastAPI
description: A beginner's guide to FastAPI, a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints.
---

## Introduction to FastAPI

FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.7+ based on standard Python type hints. It is designed to be easy to use and to enable developers to build robust and efficient APIs quickly.

### Key Features of FastAPI

- **Fast**: Very high performance, on par with **NodeJS** and **Go** (thanks to Starlette and Pydantic).
- **Fast to code**: Increase the speed to develop features by about 200% to 300%.
- **Fewer bugs**: Reduce about 40% of human-induced errors.
- **Intuitive**: Great editor support. Completion everywhere. Less time debugging.
- **Easy**: Designed to be easy to use and learn. Less time reading docs.
- **Short**: Minimize code duplication. Multiple features from each parameter declaration.
- **Robust**: Get production-ready code. With automatic interactive documentation.
- **Standards-based**: Based on (and fully compatible with) the open standards for APIs: OpenAPI (previously known as Swagger) and JSON Schema.

### Installation

To get started with FastAPI, you need to install it along with an ASGI server, such as `uvicorn`.

```bash
pip install fastapi uvicorn
```

### Your First FastAPI Application

Creating a FastAPI application is straightforward. Create a file named `main.py` with the following code:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

To run the application, use `uvicorn`:

```bash
uvicorn main:app --reload
```

This command tells `uvicorn` to run the `app` object from the `main` module. The `--reload` flag makes the server restart after code changes.

Now, if you open your browser to `http://127.0.0.1:8000`, you will see the JSON response:

```json
{"Hello":"World"}
```

### Interactive API Docs

One of the most powerful features of FastAPI is the automatic generation of interactive API documentation. You can access it at `http://127.0.0.1:8000/docs`. This documentation, based on Swagger UI, allows you to interact with your API directly from the browser.

You can also find alternative documentation, based on ReDoc, at `http://12`

.0.0.1:8000/redoc`.

### Path Parameters

You can declare path "parameters" or "variables" with the same syntax used by Python format strings:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}
```

In this example, `item_id` is a path parameter. The type hint `int` ensures that the value passed in the URL is converted to an integer.

### Query Parameters

When you declare function parameters that are not part of the path, they are automatically interpreted as "query" parameters.

```python
from fastapi import FastAPI

app = FastAPI()

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
def read_item(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit]
```

The query is the set of key-value pairs that go after the `?` in a URL, separated by `&` characters. For example, in `http://127.0.0.1:8000/items/?skip=0&limit=10`, the query parameters are `skip` and `limit`.

### Next Steps

Now that you have a basic understanding of FastAPI, the next logical step is to explore how to handle more complex data structures using Pydantic models for request and response bodies.

---

> **Next lesson:**[Advanced FastAPI with Pydantic](fastapi-pydantic)

---
