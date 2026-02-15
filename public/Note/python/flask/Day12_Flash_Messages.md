# Day 12: Flash Messages & UI Feedback

Users need to know when something happens! If a login fails or a post is created, we should show a message. In Flask, we call this **Flashing**.

## 1. Flashing a Message

```python
from flask import flash, redirect, url_for

@app.route('/login', methods=['POST'])
def login():
    flash('Log in successful!', 'success')
    return redirect(url_for('home'))
```

## 2. Displaying in HTML

You can retrieve these messages in your template using `get_flashed_messages()`:

```html
{% with messages = get_flashed_messages(with_categories=true) %} {% if messages
%} {% for category, message in messages %}
<div class="alert alert-{{ category }}">{{ message }}</div>
{% endfor %} {% endif %} {% endwith %}
```

---

## Homework:

1. Add a flash message to your Registration, Login, and Logout routes.
2. Style your flash messages using CSS (e.g., green for success, red for danger).
3. Verify that the message disappears after you refresh the page.

---

### [Next Topic: Blueprints (Large App Structure)](./Day13_Blueprints.md)
