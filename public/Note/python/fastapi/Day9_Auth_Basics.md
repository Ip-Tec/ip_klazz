# Day 9: OAuth2 & Password Hashing

Security is a major part of any API. Today we’ll learn how to handle user credentials safely using **OAuth2** and **Password Hashing**.

## 1. Never Store Plain Passwords

Storing passwords as plain text is dangerous. If your database is compromised, everyone's account is at risk. Instead, we use "Hashing" to store a mathematical representation of the password.

## 2. Using Passlib

We use the `passlib` library to hash passwords.

```bash
pip install "passlib[bcrypt]"
```

**Implementation:**

```python
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def hash_password(password: str):
    return pwd_context.hash(password)

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
```

## 3. OAuth2 with Password Flow

FastAPI supports the OAuth2 standard. We use `OAuth2PasswordBearer` to indicate that a route requires a token.

---

## Homework:

1. Install `passlib`.
2. Create a script that takes a password, hashes it, and then verifies if a user's input matches the hash.
3. Why is hashing better than encryption? Research the difference.

---

### [Next Topic: JWT Token Verification](./Day10_JWT_Tokens.md)
