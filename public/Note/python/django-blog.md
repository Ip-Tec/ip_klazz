
# Building a Blog with Django

In this tutorial, you'll build a complete blog application with Django. This project will build on the concepts you learned in the "Introduction to Django" lesson and introduce a few new ones.

## 1. Project Setup

Let's start by setting up a new Django project and a `blog` app.

### Step 1: Create the Project and App

```bash
django-admin startproject myblog
cd myblog
python manage.py startapp blog
```

### Step 2: Add the App to `settings.py`

Open `myblog/settings.py` and add `'blog'` to your `INSTALLED_APPS`:

```python
INSTALLED_APPS = [
    # ...
    'django.contrib.staticfiles',
    'blog',
]
```

---

## 2. The `Post` Model

Our blog will have posts, so let's define a `Post` model.

### Step 1: Define the Model

In `blog/models.py`, create the `Post` model:

```python
from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
```

### Step 2: Create Migrations

Now, create the database table for our `Post` model:

```bash
python manage.py makemigrations
python manage.py migrate
```

---

## 3. The Django Admin

Let's add our `Post` model to the Django admin so we can manage our blog posts.

### Step 1: Register the Model

In `blog/admin.py`, register the `Post` model:

```python
from django.contrib import admin
from .models import Post

admin.site.register(Post)
```

### Step 2: Create a Superuser

If you haven't already, create an admin user:

```bash
python manage.py createsuperuser
```

Now you can run the server (`python manage.py runserver`), go to `/admin/`, and create a few blog posts.

---

## 4. Creating the Views

We need two views: one to list all posts and one to show a single post.

### Update `blog/views.py`

```python
from django.shortcuts import render, get_object_or_404
from .models import Post

def post_list(request):
    posts = Post.objects.all().order_by('-created_at')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})
```

---

## 5. Setting up the URLs

Now, let's create the URLs for our views.

### Step 1: Create `blog/urls.py`

Create a new file `blog/urls.py`:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.post_list, name='post_list'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
]
```

### Step 2: Include the URLs in the Project

In `myblog/urls.py`, include the `blog` app's URLs:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
]
```

---

## 6. Creating the Templates

We need two templates: one for the post list and one for the post detail.

### Step 1: Create the Template Directory

Create the following directory structure: `blog/templates/blog/`.

### Step 2: `post_list.html`

Create `blog/templates/blog/post_list.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Blog</title>
</head>
<body>
    <h1>My Blog</h1>
    {% for post in posts %}
        <article>
            <h2><a href="{% url 'post_detail' pk=post.pk %}">{{ post.title }}</a></h2>
            <p>by {{ post.author }} on {{ post.created_at|date:"F d, Y" }}</p>
            <p>{{ post.content|truncatewords:30 }}</p>
        </article>
    {% endfor %}
</body>
</html>
```

### Step 3: `post_detail.html`

Create `blog/templates/blog/post_detail.html`:

```html
<!DOCTYPE html>
<html>
<head>
    <title>{{ post.title }}</title>
</head>
<body>
    <article>
        <h1>{{ post.title }}</h1>
        <p>by {{ post.author }} on {{ post.created_at|date:"F d, Y" }}</p>
        <div>{{ post.content|linebreaks }}</div>
    </article>
    <a href="{% url 'post_list' %}">Back to blog</a>
</body>
</html>
```

---

## 7. Adding Some Style

Let's add a little bit of CSS to make our blog look better.

### Step 1: Create the Static Directory

Create the following directory structure: `blog/static/blog/`.

### Step 2: Create `style.css`

Create `blog/static/blog/style.css`:

```css
body {
    font-family: sans-serif;
    margin: 40px auto;
    max-width: 800px;
    line-height: 1.6;
    font-size: 18px;
    color: #444;
    padding: 0 10px;
}

h1, h2 {
    line-height: 1.2;
}

a {
    text-decoration: none;
    color: #007bff;
}

a:hover {
    text-decoration: underline;
}
```

### Step 3: Load Static Files in a Base Template

Create a `base.html` in `blog/templates/blog/`:

```html
{% load static %}
<!DOCTYPE html>
<html>
<head>
    <title>{% block title %}My Blog{% endblock %}</title>
    <link rel="stylesheet" href="{% static 'blog/style.css' %}">
</head>
<body>
    <header>
        <h1><a href="{% url 'post_list' %}">My Blog</a></h1>
    </header>
    <main>
        {% block content %}{% endblock %}
    </main>
</body>
</html>
```

### Step 4: Update `post_list.html` and `post_detail.html`

Update both templates to extend the `base.html` template. For example, `post_list.html`:

```html
{% extends 'blog/base.html' %}

{% block title %}My Blog{% endblock %}

{% block content %}
    {% for post in posts %}
        <article>
            <h2><a href="{% url 'post_detail' pk=post.pk %}">{{ post.title }}</a></h2>
            <p>by {{ post.author }} on {{ post.created_at|date:"F d, Y" }}</p>
            <p>{{ post.content|truncatewords:30 }}</p>
        </article>
    {% endfor %}
{% endblock %}
```

---

## Summary

You've now built a functional blog with Django! You've learned how to:

- ✅ Create a more complex model.
- ✅ Use the Django admin to manage content.
- ✅ Create list and detail views.
- ✅ Use template inheritance.
- ✅ Serve static files.

This is a great foundation for building even more complex web applications with Django

---

> **Next lesson:** [Introduction to FastAPI](fastapi-intro)

---
