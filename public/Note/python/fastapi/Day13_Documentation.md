# Day 13: Swagger & API Documentation

One of FastAPI's greatest strengths is that it automatically documents your API as you build it. Today we’ll learn how to customize this documentation.

## 1. Swagger UI vs ReDoc

FastAPI provides two built-in documentation systems:

- **Swagger UI**: Found at `/docs`. It’s interactive—you can test your API directly.
- **ReDoc**: Found at `/redoc`. It’s a clean, professional read-only view.

## 2. Customizing Docs

You can add titles, descriptions, and version numbers to your app:

```python
app = FastAPI(
    title="My Super API",
    description="This API handles hero management.",
    version="1.0.0",
)
```

## 3. Tagging Routes

You can group related routes together using tags:

```python
@app.get("/users/", tags=["User Management"])
def get_users():
    ...
```

---

## Homework:

1. Customize your FastAPI app with a title and a description.
2. Group your routes into categories like "Authentication" and "Students" using tags.
3. Check both `/docs` and `/redoc` to see the results.

---

### [Next Topic: Background Tasks Overview](./Day14_Background_Tasks.md)
