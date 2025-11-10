
# Introduction to Flask

Welcome to the world of web development with Python! In this lesson, you'll be introduced to Flask, a popular and beginner-friendly web framework. You will learn the fundamentals of Flask and build a mini-project.

## What is Flask?

Flask is a **micro web framework** for Python. It's called "micro" because it keeps the core simple but allows you to add extensions for more functionality.

**Fun fact:** Flask was created by Armin Ronacher as an April Fool's Day joke in 2010, but it became so popular that it was developed into a serious framework!

### Key Characteristics

- **Lightweight and Simple**: Easy to get started with.
- **Flexible**: You can choose the tools and libraries you want to use.
- **Extensible**: Many extensions are available for things like databases and authentication.
- **Jinja2 Templating**: Comes with a powerful template engine to build dynamic HTML pages.

---

## 1. Your First Flask Application

Let's create a "Hello, World!" web application.

### Step 1: Install Flask

First, you need to install Flask using `pip`:

```bash
pip install Flask
```

### Step 2: Create a Python File

Create a new file called `app.py` and add the following code:

```python
from flask import Flask

# Create a Flask web server
app = Flask(__name__)

# Define a route for the home page
@app.route('/')
def hello_world():
    return 'Hello, World!'

# Run the app
if __name__ == '__main__':
    app.run(debug=True)
```

### Step 3: Run the Application

Open your terminal, navigate to the folder where you saved `app.py`, and run:

```bash
python app.py
```

### Step 4: View Your Web Page

Open your web browser and go to `http://127.0.0.1:5000/`. You should see "Hello, World!" on the page.

🎉 **Congratulations!** You've just created your first web application with Flask!

---

## 2. Flask Routing

Routing is how Flask maps URLs to functions.

### Multiple Routes

You can create multiple pages by adding more routes:

```python
@app.route('/')
def home():
    return 'This is the home page.'

@app.route('/about')
def about():
    return 'This is the about page.'
```

### Dynamic Routes

You can also create dynamic URLs:

```python
@app.route('/user/<username>')
def show_user_profile(username):
    return f'Hello, {username}!'
```

Now, if you go to `http://127.0.0.1:5000/user/Alice`, you'll see "Hello, Alice!".

---

## 3. Flask Templates

Instead of writing HTML in your Python code, you can use HTML files called templates.

### Step 1: Create a `templates` Folder

Create a folder named `templates` in the same directory as your `app.py` file. Flask will automatically look for templates in this folder.

### Step 2: Create an HTML File

Create a file named `index.html` inside the `templates` folder:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Flask App</title>
</head>
<body>
    <h1>{{ greeting }}</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

### Step 3: Render the Template

Update your `app.py` to render the template:

```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', greeting='Hello from a template!')
```

Now, when you run your app and go to the home page, you'll see the HTML page with the greeting "Hello from a template!".

---

## 4. Static Files (CSS, JS, Images)

To add CSS, JavaScript, and images, you need a `static` folder.

### Step 1: Create a `static` Folder

Create a folder named `static` in the same directory as your `app.py` file.

### Step 2: Create a CSS File

Create a file named `style.css` inside the `static` folder:

```css
body {
    font-family: sans-serif;
    background-color: #f0f0f0;
}
```

### Step 3: Link the CSS File

Update your `index.html` to link the CSS file:

```html
<head>
    <title>My Flask App</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
```

---

## 5. Handling Forms

Flask can also handle form submissions.

### Step 1: Create a Form in HTML

Add a form to your `index.html`:

```html
<form method="POST" action="/greet">
    <input type="text" name="name_input" placeholder="Enter your name">
    <button type="submit">Submit</button>
</form>
```

### Step 2: Handle the Form Submission

Update your `app.py` to handle the form submission:

```python
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html', greeting='Hello from a template!')

@app.route('/greet', methods=['POST'])
def greet():
    name = request.form['name_input']
    return f'Hello, {name}!'
```

---

## Mini-Project: A Simple Todo App

Let's create a simple "Todo" application that uses all the concepts we've learned.

### Step 1: Set up the Project

Your project structure should look like this:

```sh

/
|-- app.py
|-- templates/
|   |-- index.html
|-- static/
    |-- style.css
```

### Step 2: The Python Code (`app.py`)

```python
from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# In-memory "database"
todos = []

@app.route('/')
def index():
    return render_template('index.html', todos=todos)

@app.route('/add', methods=['POST'])
def add_todo():
    todo = request.form['todo_item']
    todos.append(todo)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)
```

### Step 3: The HTML (`templates/index.html`)

```html
<!DOCTYPE html>
<html>
<head>
    <title>Todo App</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='style.css') }}">
</head>
<body>
    <h1>Todo App</h1>
    <form action="{{ url_for('add_todo') }}" method="POST">
        <input type="text" name="todo_item" placeholder="Add a new todo">
        <button type="submit">Add</button>
    </form>
    <ul>
        {% for todo in todos %}
            <li>{{ todo }}</li>
        {% endfor %}
    </ul>
</body>
</html>
```

### Step 4: The CSS (`static/style.css`)

```css
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 40px;
}

h1 {
    color: #333;
}

form {
    margin-bottom: 20px;
}

input[type="text"] {
    padding: 10px;
    width: 300px;
}

button {
    padding: 10px;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #fff;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
}
```

### Step 5: Run the Project

Run `python app.py` and go to `http://127.0.0.1:5000/`. You should now have a working Todo application!

---

## Summary

In this lesson, you learned:

- ✅ The basics of Flask.
- ✅ How to create routes.
- ✅ How to use templates.
- ✅ How to serve static files.
- ✅ How to handle forms.
- ✅ How to build a simple web application.

**You've taken a huge step in your web development journey!** 🚀

From here, you can explore more advanced topics like databases, user authentication, and deploying your application to the web.

> **Next lesson:** [Introduction to Flask](flask-intro)

---
