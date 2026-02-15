# Day 14: Working with APIs in Flask

So far, we’ve been returning HTML pages. But what if we want to talk to another app or a frontend like React? We need to return **JSON**.

## 1. Returning JSON

Flask provides `jsonify` to convert Python dictionaries into JSON.

```python
from flask import jsonify

@app.route('/api/data')
def get_data():
    data = {"name": "Laptop", "price": 999}
    return jsonify(data)
```

## 2. Calling External APIs

You can also make requests to OTHER APIs from inside your Flask app using the `requests` library.

```python
import requests

@app.route('/weather')
def get_weather():
    response = requests.get('https://api.weather.com/v1/...')
    return response.json()
```

---

## Homework:

1. Create a route `/api/users` that returns a list of users from your database in JSON format.
2. Install the `requests` library (`pip install requests`).
3. Find a free public API (like JSONPlaceholder) and display some of its data in your Flask app.

---

### [Next Topic: Mini Project: Simple Todo App](./Day15_Mini_Project.md)
