
# Introduction to Django

Welcome to the next step in your Python web development journey! In this lesson, you'll dive into Django, a powerful and high-level web framework. You'll learn its core concepts and build a simple project.

## What is Django?

Django is a **high-level Python web framework** that encourages rapid development and clean, pragmatic design. It's known for its "batteries-included" philosophy, meaning it comes with many features out of the box.

**Fun fact:** Django was created in a fast-paced newsroom environment, so it was designed to help developers build applications as quickly as possible.

### Key Characteristics

- **Batteries-Included**: Comes with an admin interface, an Object-Relational Mapper (ORM), authentication, and more.
- **Scalable**: Used by some of the biggest websites in the world (like Instagram and Pinterest).
- **Secure**: Helps developers avoid common security mistakes.
- **MVT Architecture**: Uses a Model-View-Template (MVT) architectural pattern.

---

## 1. Your First Django Application

Let's create a "Hello, World!" web application with Django.

### Step 1: Install Django

First, you need to install Django using `pip`:

```bash
pip install Django
```

### Step 2: Create a Django Project

In your terminal, run the following command to create a new project:

```bash
django-admin startproject myproject
```

This will create a `myproject` directory with the following structure:

```
myproject/
    manage.py
    myproject/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
```

### Step 3: Create a Django App

A Django project is made up of one or more "apps". Let's create an app for our project:

```bash
cd myproject
python manage.py startapp myapp
```

Now, you need to tell Django about your new app. Open `myproject/settings.py` and add `'myapp'` to the `INSTALLED_APPS` list:

```python
INSTALLED_APPS = [
    # ...
    'myapp',
]
```

### Step 4: Create a View

In `myapp/views.py`, create a simple view function:

```python
from django.http import HttpResponse

def hello_world(request):
    return HttpResponse("Hello, World!")
```

### Step 5: Create a URL

Create a new file `myapp/urls.py`:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.hello_world, name='hello_world'),
]
```

Now, include these URLs in your main project's `myproject/urls.py`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
]
```

### Step 6: Run the Development Server

Run the development server:

```bash
python manage.py runserver
```

Open your web browser and go to `http://127.0.0.1:8000/`. You should see "Hello, World!".

🎉 **Congratulations!** You've just created your first web application with Django!

---

## 2. Django Templates

Django has a powerful template language.

### Step 1: Create a `templates` Folder

Inside your `myapp` directory, create a `templates` folder, and inside that, another `myapp` folder: `myapp/templates/myapp/`.

### Step 2: Create an HTML File

Create `index.html` inside `myapp/templates/myapp/`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Django App</title>
</head>
<body>
    <h1>{{ greeting }}</h1>
</body>
</html>
```

### Step 3: Render the Template

Update `myapp/views.py`:

```python
from django.shortcuts import render

def hello_world(request):
    return render(request, 'myapp/index.html', {'greeting': 'Hello from a template!'})
```

---

## 3. Django Models

Django's ORM lets you interact with your database using Python code.

### Step 1: Define a Model

In `myapp/models.py`, define a simple model:

```python
from django.db import models

class Todo(models.Model):
    task = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.task
```

### Step 2: Create Migrations

Run the following commands to create the database table for your model:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 4. The Django Admin

Django comes with a built-in admin interface.

### Step 1: Register Your Model

In `myapp/admin.py`, register your `Todo` model:

```python
from django.contrib import admin
from .models import Todo

admin.site.register(Todo)
```

### Step 2: Create a Superuser

Create an admin user:

```bash
python manage.py createsuperuser
```

Follow the prompts to create your admin account.

### Step 3: Use the Admin

Run the server (`python manage.py runserver`) and go to `http://127.0.0.1:8000/admin/`. Log in with your superuser account, and you'll be able to add, edit, and delete `Todo` items.

---

## Summary

In this lesson, you learned:

- ✅ The basics of Django.
- ✅ How to create a project and an app.
- ✅ How to create views and URLs.
- ✅ How to use templates.
- ✅ The basics of Django models.
- ✅ How to use the Django admin.

Django is a powerful framework with a lot to offer. This is just the beginning of what you can do with it!

---

> **Next lesson:** [Building a Blog with Django](django-blog)

---
