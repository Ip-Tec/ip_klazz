# Day 10: Password Hashing with Bcrypt

Just like in FastAPI, we should NEVER store plain passwords in Flask. We use **Flask-Bcrypt** to secure our user credentials.

## 1. Installation

```bash
pip install flask-bcrypt
```

## 2. Usage

```python
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

# Hashing a passord
hashed_pw = bcrypt.generate_password_hash('mypassword').decode('utf-8')

# Checking a password
is_valid = bcrypt.check_password_hash(hashed_pw, 'mypassword')
```

## 3. Implementation in Login

When a user tries to log in, you fetch their user record by username, then check if the entered password matches the stored `hashed_password`.

---

## Homework:

1. Add password hashing to your Registration route.
2. Update your Login route to use `check_password_hash`.
3. Try logging in with a wrong password and verify that it fails.

---

### [Next Topic: Session Management & Cookies](./Day11_Sessions.md)
