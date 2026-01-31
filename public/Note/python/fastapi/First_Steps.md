---
title: "First Steps and Installation"
description: "Setting up your environment for FastAPI development."
premium: true
---

# First Steps and Installation

> [!IMPORTANT]
> This is a **Premium** lesson. Thank you for supporting Ip Klazz!

To start building with FastAPI, you need to install the library and an ASGI server, such as **Uvicorn**.

## Installation

Run the following command in your terminal:

```bash
pip install fastapi "uvicorn[standard]"
```

## Creating your first API

Create a file named `main.py` with:

```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello FastAPI"}
```

## Advanced Python Features

FastAPI relies heavily on Python **Type Hints**.

```python
def say_hello(name: str):
    return f"Hello {name}"
```

In the playground, you can test basic Python-like logic (though this playground currently prefers JavaScript/HTML, we can show logic here).

```javascript
// Simulating an API response structure
const response = {
  status: 200,
  data: {
    message: "Hello from FastAPI simulation"
  }
};
console.log(response.data.message);
```
