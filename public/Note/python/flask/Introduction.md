# Intro to Flask, Routing & Views

Welcome to the world of web development with Python! Flask is a "micro" web framework, which means it keeps things simple and gives you the freedom to choose your own tools as you grow.

## What is Flask?

Unlike FastAPI which is built for APIs, Flask is designed to build full websites with HTML pages.

## Installation

First, let's install Flask:

```bash
pip install Flask
```

## Your First Flask App

Create a file named `app.py`:

```python
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return "<h1>Welcome to my first Flask website!</h1>"

if __name__ == '__main__':
    app.run(debug=True)
```

## Routing & Views

A **Route** is a URL path (like `/about`), and a **View** is the function that handles it.

**Dynamic Routes:**

```python
@app.route('/user/<name>')
def greet(name):
    return f"Hello, {name}!"
```

---

## Homework:

1. Setup a Flask project and run it.
2. Create three different routes: `/`, `/about`, and `/contact`.
3. Experiment with dynamic routes to pass names through the URL.

---

### [Next Topic: Templates with Jinja2](./Templates.md)

