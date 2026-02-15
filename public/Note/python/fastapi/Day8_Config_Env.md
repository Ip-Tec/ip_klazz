# Day 8: Configuration & Env Variables

As your project grows, you should NEVER hardcode sensitive information (like database URLs or API keys) directly in your code. Today, we’ll learn how to handle settings professionally.

## 1. Environment Variables (.env)

We store settings in a `.env` file that is NOT shared on GitHub.

**Example `.env`:**

```text
DATABASE_URL=sqlite:///database.db
API_SECRET=myhiddenkey123
```

## 2. Using Pydantic Settings

FastAPI recommends using `pydantic-settings` to manage these.

```bash
pip install pydantic-settings
```

**Implementation:**

```python
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    api_secret: str

    class Config:
        env_file = ".env"

settings = Settings()
```

Now you can access `settings.database_url` anywhere in your app!

---

## Homework:

1. Create a `.env` file with a variable called `APP_NAME`.
2. Create a `Settings` class to load it.
3. Display the app name in your root `/` route.

---

### [Next Topic: OAuth2 & Password Hashing](./Day9_Auth_Basics.md)
