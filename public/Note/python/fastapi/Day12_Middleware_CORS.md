# Day 12: Middleware & CORS Security

Before we finish our security week, we need to talk about how our API interacts with external websites.

## 1. CORS (Cross-Origin Resource Sharing)

By default, browsers prevent a website (like `myapp.com`) from talking to an API on a different domain (like `api.myapp.com`). We use **CORS Middleware** to allow our frontend to talk to our API.

```python
from fastapi.middleware.cors import CORSMiddleware

origins = ["http://localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## 2. Custom Middleware

Middleware is code that runs before EVERY request. You can use it to log information or check certain headers.

---

## Homework:

1. Add CORS middleware to your FastAPI app.
2. Research: Why is CORS important for preventing hackers from stealing data from other sites?
3. Create a simple middleware that prints "A request was received!" to the console for every call.

---

### [Next Topic: Swagger & API Documentation](./Day13_Documentation.md)
