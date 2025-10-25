# Working with APIs in Python

## What is an API?

An **API (Application Programming Interface)** is a set of rules and protocols that allows different software applications to communicate with each other. When you hear about "working with an API" in the context of web development, it usually refers to a **Web API**.

A Web API allows you to request data from a remote server over the internet. This is how a mobile app gets your social media feed, or how a weather website gets the latest forecast.

### How Web APIs Work

1. **Client Makes a Request:** Your Python script (the client) sends an HTTP request to a specific URL (the **endpoint**).
2. **Server Processes the Request:** The server receives the request, performs an action (like fetching data from a database), and prepares a response.
3. **Server Sends a Response:** The server sends the data back to your script, usually in a structured format like **JSON**.

## The **requests** Library

While Python has built-in modules for making HTTP requests, the third-party **requests** library is the de facto standard. It's much more user-friendly.

### Installation

First, you need to install it using pip:

```bash
pip install requests
```

## Making a **GET** Request

A **GET** request is used to retrieve data from a server.

Let's use the **JSONPlaceholder API**, a free fake API for testing, to get a list of posts.

```python
import requests
import json

# The API endpoint URL
url = "https://jsonplaceholder.typicode.com/posts"

# Make the GET request
response = requests.get(url)

# Check the status code
print(f"Status Code: {response.status_code}")

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Get the JSON data from the response
    posts = response.json()
    
    # Print the first post
    print("First post:")
    # Use json.dumps for pretty printing
    print(json.dumps(posts[0], indent=2))
else:
    print(f"Failed to retrieve data. Status code: {response.status_code}")
```

### Key Parts of the Response

- **response.status_code**: An integer indicating the result of the request. **200 OK** means success. Other common codes include **404 Not Found** and **500 Internal Server Error**.
- **response.json()**: A built-in method in **requests** that parses the JSON response into a Python dictionary or list.
- **response.text**: The raw text content of the response.

## Using Query Parameters

You can customize a **GET** request by adding **query parameters** to the URL. These are key-value pairs that come after a **?** in the URL.

For example, to get only the posts from user with ID 1:
**<https://jsonplaceholder.typicode.com/posts?userId=1>**

The **requests** library lets you provide these as a dictionary.

```python
import requests
import json

url = "https://jsonplaceholder.typicode.com/posts"

# Define the query parameters as a dictionary
params = {"userId": 1}

# Pass the params to the get() method
response = requests.get(url, params=params)

if response.status_code == 200:
    user1_posts = response.json()
    print(f"Found {len(user1_posts)} posts for user 1.")
    print("First post title:", user1_posts[0]["title"])
else:
    print("Failed to retrieve data.")
```

## Making a **POST** Request

A **POST** request is used to send data to a server to create a new resource.

Let's add a new post to the JSONPlaceholder API.

```python
import requests
import json

url = "https://jsonplaceholder.typicode.com/posts"

# The data to send (the new post)
new_post = {
    "title": "My New Post",
    "body": "This is the content of my new post.",
    "userId": 5
}

# Make the POST request, sending the data as JSON
response = requests.post(url, json=new_post)

# Check the status code (201 Created indicates success)
print(f"Status Code: {response.status_code}")

if response.status_code == 201:
    # The server often sends back the created object with its new ID
    created_post = response.json()
    print("Post created successfully:")
    print(json.dumps(created_post, indent=2))
else:
    print("Failed to create post.")
```

## Working with Headers

Some APIs require you to send custom **headers**, such as an **Authorization** header containing an API key.

```python
url = "https://api.example.com/data"

headers = {
    "Authorization": "Bearer YOUR_API_KEY_HERE",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
```

## Key Takeaways

- An **API** allows applications to communicate over the internet.
- The **requests** library is the standard for making HTTP requests in Python.
- Use **requests.get()** to retrieve data and **requests.post()** to create data.
- The **response.status_code** tells you if the request was successful.
- **response.json()** parses the JSON response into a Python object.
- Use the **params** argument for query parameters and the **json** argument to send **POST** data.

## Practice Exercises

1. **Fetch a User**: Use the JSONPlaceholder API to fetch data for a single user with ID 5. The endpoint is **<https://jsonplaceholder.typicode.com/users/5>**. Print the user's name and email.
2. **List To-Dos**: Fetch all the to-do items for user with ID 2. The endpoint is **<https://jsonplaceholder.typicode.com/todos>**, and you'll need to use a query parameter.
3. **Public APIs**: Find a free public API (like the [Public APIs](https://github.com/public-apis/public-apis) list) and write a script to fetch and display some data from it.

---

## Solutions

```python
import requests
import json

# Exercise 1: Fetch a User
user_id = 5
user_url = f"https://jsonplaceholder.typicode.com/users/{user_id}"

response1 = requests.get(user_url)

if response1.status_code == 200:
    user = response1.json()
    print(f"User {user_id} Info:")
    print(f"  Name: {user['name']}")
    print(f"  Email: {user['email']}")
else:
    print(f"Failed to fetch user {user_id}.")

print("-"*20)

# Exercise 2: List To-Dos
todos_url = "https://jsonplaceholder.typicode.com/todos"
params2 = {"userId": 2}

response2 = requests.get(todos_url, params=params2)

if response2.status_code == 200:
    todos = response2.json()
    print(f"Found {len(todos)} to-do items for user 2.")
    # Print the first 3 to-dos
    for todo in todos[:3]:
        print(f"  - Title: {todo['title']}, Completed: {todo['completed']}")
else:
    print("Failed to fetch to-dos.")

print("-"*20)

# Exercise 3: Public APIs (Example using the Cat Facts API)
cat_fact_url = "https://catfact.ninja/fact"

response3 = requests.get(cat_fact_url)

if response3.status_code == 200:
    fact = response3.json()
    print("Random Cat Fact:")
    print(fact['fact'])
else:
    print("Failed to fetch a cat fact.")

```

---

> **Next lesson:** [Data Serialization](serialization)

---
