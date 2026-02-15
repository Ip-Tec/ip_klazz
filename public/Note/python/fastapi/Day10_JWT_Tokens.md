# Day 10: JWT Token Verification

When a user logs in, we don't want them to send their username/password for every single request. Instead, we give them a **JWT (JSON Web Token)**.

## What is a JWT?

A JWT is a signed string that contains information about the user. The server can verify this token without checking the database for every request.

## Creating Tokens

We use the `python-jose` library for JWTs.

```bash
pip install "python-jose[cryptography]"
```

**Implementation:**

```python
from jose import JWTError, jwt
from datetime import datetime, timedelta

SECRET_KEY = "super-secret-key"
ALGORITHM = "HS256"

def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
```

## Summary

- User logs in (Day 11).
- Server creates a JWT.
- User sends the JWT in the "Authorization" header for future requests.

---

## Homework:

1. Install `python-jose`.
2. Create a function that generates a token for a username.
3. Try to decode the token you created to see the data inside.

---

### [Next Topic: Secure Routes & User Registration](./Day11_User_Registration.md)
