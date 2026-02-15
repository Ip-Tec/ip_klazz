# Day 11: User Registration & Login

Today we’ll tie everything together by creating a full Registration and Login system using the models and hashing we learned earlier.

## 1. User Model

We need a model to store users in the database.

```python
class User(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    username: str = Field(unique=True)
    hashed_password: str
```

## 2. Registration Route

```python
@app.post("/register/")
def register(username: str, password: str, session: Session = Depends(get_session)):
    hashed = hash_password(password)
    user = User(username=username, hashed_password=hashed)
    session.add(user)
    session.commit()
    return {"message": "User registered!"}
```

## 3. Login Route

A login route verifies the password and returns a JWT token.

---

## Homework:

1. Implement the registration route.
2. Create a login route that returns a JWT if the password is correct.
3. Use your new token to access a "protected" route.

---

### [Next Topic: Middleware & CORS Security](./Day12_Middleware_CORS.md)
