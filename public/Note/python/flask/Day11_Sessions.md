# Day 11: Session Management & Cookies

How does the server remember who you are? It uses **Sessions** and **Cookies**.

## 1. What is a Cookie?

A cookie is a small piece of data stored on the user's browser. The browser sends this cookie to the server with every request.

## 2. Flask Sessions

Flask uses a "Signed Cookie" to store session data. To use it, you MUST set a `SECRET_KEY`.

```python
app.config['SECRET_KEY'] = 'my-secret-key-donot-share'
```

## 3. Persistent Logins

If you want the user to stay logged in even after they close the browser, use the `remember=True` parameter in Flask-Login:

```python
login_user(user, remember=True)
```

---

## Homework:

1. Set a secure `SECRET_KEY` in your app.
2. Research: What happens if someone steals your `SECRET_KEY`?
3. Add a "Remember Me" checkbox to your login form and implement it in your route.

---

### [Next Topic: Flash Messages & UI Feedback](./Day12_Flash_Messages.md)
