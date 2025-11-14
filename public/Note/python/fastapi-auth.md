---

title: User Authentication with FastAPI
description: Learn how to implement secure user authentication in FastAPI using OAuth2, password hashing, and JWT tokens.

---

## User Authentication with FastAPI

Securing your API is crucial, and FastAPI provides powerful tools to handle authentication. We'll implement a common authentication scheme: **OAuth2 with password flow and JWT tokens**.

This means:

1. A user provides a username and password to a specific endpoint (e.g., `/token`).
2. The server verifies the credentials.
3. If valid, the server generates a JWT (JSON Web Token) and returns it to the client.
4. The client includes this token in the `Authorization` header for all subsequent requests to protected endpoints.

### Required Packages

First, install the necessary packages for password hashing and JWTs.

```bash
pip install "passlib[bcrypt]" "python-jose[cryptography]"
```

- `passlib` with `bcrypt`: For securely hashing and verifying passwords.
- `python-jose`: For creating and verifying JWTs.

### Password Hashing

Never store passwords in plain text. Create a `security.py` file to handle password-related functions.

```python
# security.py
from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)
```

### Creating JWTs

We also need functions to create and decode JWTs. Add these to your `security.py`.

```python
# security.py (continued)
from datetime import datetime, timedelta
from typing import Optional
from jose import JWTError, jwt

# These should be stored securely, e.g., in environment variables
SECRET_KEY = "your-secret-key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt
```

### OAuth2 Password Flow

FastAPI uses a dependency injection system to handle security. Let's set up the OAuth2 scheme in `main.py`.

```python
# main.py
from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

app = FastAPI()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

@app.post("/token")
async def login_for_access_token(form_data: OAuth2PasswordRequestForm = Depends()):
    # In a real app, you would look up the user in the database
    # and verify the password using security.verify_password
    user = {"username": form_data.username, "password": form_data.password} # Dummy user
    
    # This is a simplified example. Replace with real user verification.
    if not user or not security.verify_password(form_data.password, get_password_hash(form_data.password)):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
        
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer"}
```

The `/token` endpoint expects form data with `username` and `password`. It returns a JWT.

### Protected Endpoints

Now, let's create an endpoint that requires a valid token.

First, we need a way to get the current user from the token. This involves decoding the token and fetching the user from the database.

Let's expand `security.py` and `main.py` to handle this. We'll need Pydantic models for the user and token data.

```python
# schemas.py
from pydantic import BaseModel

class TokenData(BaseModel):
    username: Optional[str] = None

class User(BaseModel):
    username: str
    email: Optional[str] = None
    full_name: Optional[str] = None
    disabled: Optional[bool] = None
```

Now, a function to get the current user:

```python
# main.py (additions)
from jose import JWTError
from fastapi import HTTPException, status

# A dummy user database
fake_users_db = {
    "johndoe": {
        "username": "johndoe",
        "full_name": "John Doe",
        "email": "johndoe@example.com",
        "hashed_password": get_password_hash("secret"), # Hashed password
        "disabled": False,
    }
}

def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return schemas.UserInDB(**user_dict)

async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = schemas.TokenData(username=username)
    except JWTError:
        raise credentials_exception
    
    # In a real app, fetch the user from the database
    user = get_user(fake_users_db, username=token_data.username) 
    if user is None:
        raise credentials_exception
    return user

@app.get("/users/me/", response_model=schemas.User)
async def read_users_me(current_user: schemas.User = Depends(get_current_user)):
    return current_user
```

- `get_current_user` is a dependency that:
    1. Takes the token from the `Authorization` header.
    2. Decodes and validates the token.
    3. Fetches the user from the database (or our fake DB).
    4. Returns the user object.

- The `/users/me/` endpoint uses `Depends(get_current_user)`. FastAPI will handle calling this dependency and passing the result as `current_user`. If the token is missing or invalid, an error will be returned automatically.

This setup provides a robust and secure way to handle user authentication in your FastAPI applications.

---

**Next**: [Structuring Larger FastAPI Applications](fastapi-structure)

---
