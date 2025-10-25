# Introduction to Requests

## What is Requests?

**Requests** is a simple yet elegant Python library for making HTTP requests. While Python has built-in modules like **urllib** to accomplish this, the Requests library is almost universally preferred because it provides a clean, intuitive API for sending and receiving data over the web.

It simplifies the process of interacting with web services and APIs, making it a go-to tool for web scraping, interacting with APIs, and other web-related tasks.

### Installation

First, you need to install Requests using pip:

```bash
pip install requests
```

Then, import it into your script:

```python
import requests
```

## Making a **GET** Request

The most common type of request is a **GET** request, which is used to retrieve data from a URL.

```python
# Make a GET request to the GitHub API
response = requests.get('https://api.github.com')

# The response object contains all the information from the server
print(f"Status Code: {response.status_code}")
```

### The Response Object

The **response** object is the heart of the library. It contains:

-   **response.status_code**: The HTTP status code (e.g., **200** for success, **404** for not found).
-   **response.text**: The raw text content of the response.
-   **response.content**: The content of the response in bytes.
-   **response.json()**: A special method that attempts to parse the response content as JSON and returns a Python dictionary or list.
-   **response.headers**: A dictionary-like object containing the response headers.

```python
if response.status_code == 200:
    print("Request was successful!")
    # Let's look at the headers
    print(f"Content-Type: {response.headers['Content-Type']}")
    # And the content
    # print(response.text)
else:
    print(f"Request failed with status code: {response.status_code}")
```

## Passing Parameters in URLs

Often, you need to pass data to an API through URL query parameters (e.g., **?key1=value1&key2=value2**). Requests allows you to provide these as a dictionary using the **params** argument.

```python
# Search for repositories on GitHub
response = requests.get(
    'https://api.github.com/search/repositories',
    params={'q': 'requests+language:python'}
)

# The actual URL that was requested:
print(f"Request URL: {response.url}")

# Parse the JSON response
json_response = response.json()
first_repo = json_response['items'][0]
print(f"First result: {first_repo['name']}")
```

## Other HTTP Methods

Besides **GET**, Requests supports all other standard HTTP methods.

-   **POST**: Used to send data to a server to create a new resource.

    ```python
    # Example: creating a new post on a blog API
    payload = {'title': 'My New Post', 'body': 'Hello, world!'}
    response = requests.post('https://api.example.com/posts', json=payload)
    ```

-   **PUT**: Used to update an existing resource.

    ```python
    payload = {'title': 'Updated Title'}
    response = requests.put('https://api.example.com/posts/1', json=payload)
    ```

-   **DELETE**: Used to delete a resource.

    ```python
    response = requests.delete('https://api.example.com/posts/1')
    ```

## Advanced Features

### Custom Headers

Some APIs require custom headers, for example, to provide an API key for authentication.

```python
headers = {'Authorization': 'Bearer YOUR_API_KEY'}
response = requests.get('https://api.example.com/data', headers=headers)
```

### Timeouts

It's good practice to set a timeout for your requests to prevent your program from hanging indefinitely if the server doesn't respond.

```python
try:
    # Wait a maximum of 3 seconds for a response
    response = requests.get('https://api.github.com', timeout=3)
except requests.exceptions.Timeout:
    print("The request timed out.")
```

### Error Handling

Requests will not raise an exception for bad status codes (like 4xx or 5xx). You can check the status code yourself, or use the **response.raise_for_status()** method, which will raise an **HTTPError** for bad responses.

```python
try:
    response = requests.get('https://api.github.com/invalid-url')
    response.raise_for_status() # Raises an exception for 4xx/5xx status codes
except requests.exceptions.HTTPError as err:
    print(f"HTTP Error: {err}")
```

## Key Takeaways

-   The **requests** library is the standard for making HTTP requests in Python.
-   **requests.get()** is used to retrieve data.
-   The **response** object contains the status code, headers, and content from the server.
-   **response.json()** is used to easily decode JSON responses.
-   Use the **params** argument for URL parameters and the **json** argument to send **POST** data.
-   Always consider adding **timeout** and error handling (**raise_for_status()**) to make your code more robust.

## Practice Exercises

1.  **Get a Joke**: The [Official Joke API](https://github.com/15Dkatz/official-joke-api) has an endpoint to get a random joke: **https://official-joke-api.appspot.com/random_joke**. Write a script to fetch a joke and print the setup and punchline.
2.  **Check a Website's Status**: Write a function **check_status(url)** that takes a URL, makes a **GET** request, and returns **True** if the status code is 200, and **False** otherwise.
3.  **Post Data**: Use **httpbin.org**, a service for testing requests, to **POST** some data. Send a dictionary **{'name': 'your_name', 'id': 123}** to **https://httpbin.org/post** and print the **json** field from the response.

---

## Solutions

```python
import requests
import json

# Exercise 1: Get a Joke
joke_url = "https://official-joke-api.appspot.com/random_joke"
try:
    response1 = requests.get(joke_url, timeout=5)
    response1.raise_for_status()
    joke_data = response1.json()
    print("Here's a joke for you:")
    print(f"  Setup: {joke_data['setup']}")
    print(f"  Punchline: {joke_data['punchline']}")
except requests.exceptions.RequestException as e:
    print(f"Could not fetch joke: {e}")

print("-"*20)

# Exercise 2: Check a Website's Status
def check_status(url):
    try:
        response = requests.get(url, timeout=5)
        return response.status_code == 200
    except requests.exceptions.RequestException:
        return False

print(f"Status of google.com: {'Online' if check_status('https://google.com') else 'Offline'}")
print(f"Status of fake-url.xyz: {'Online' if check_status('https://fake-url.xyz') else 'Offline'}")

print("-"*20)

# Exercise 3: Post Data
post_url = "https://httpbin.org/post"
my_data = {'name': 'Gemini', 'id': 123}

try:
    response3 = requests.post(post_url, json=my_data, timeout=5)
    response3.raise_for_status()
    response_data = response3.json()
    print("Data received by httpbin:")
    # httpbin returns the posted data in the 'json' field
    print(json.dumps(response_data['json'], indent=2))
except requests.exceptions.RequestException as e:
    print(f"Could not post data: {e}")

```

---

> **Next lesson:** [Introduction to Flask](flask-intro)

---
