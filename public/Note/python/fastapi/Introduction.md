# Introduction to FastAPI & Installation

Welcome to the world of high-performance APIs! FastAPI is a modern web framework for building APIs with Python 3.8+ based on standard Python type hints.

## What is FastAPI?

FastAPI is designed to be **fast**, **intuitive**, and **robust**. It is one of the fastest Python frameworks available, rivaling NodeJS and Go in performance.

### Key Features:

- **Automatic Docs**: Generates interactive Swagger UI and ReDoc documentation automatically.
- **Type Safety**: Uses Python type hints for data validation and editor support.
- **Asynchronous**: Built on Starlette, it supports `async` and `await` out of the box.

## Installation

To get started, you need to install FastAPI and an ASGI server like `uvicorn`:

```bash
pip install fastapi "uvicorn[standard]"
```

## Your First API

Create a file named `main.py`:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Welcome to my FastAPI!"}
```

To run your app:

```bash
uvicorn main:app --reload
```

Navigate to `http://127.0.0.1:8000` to see your response!

---

## Homework:

1. Install FastAPI and Uvicorn on your machine.
2. Create a basic API with a greeting message.
3. Visit `http://127.0.0.1:8000/docs` and explore the interactive documentation.

---

### [Next Topic: Pydantic Models & Validation](./Pydantic_Models.md)

