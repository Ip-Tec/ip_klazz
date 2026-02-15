# Deployment Basics

You’ve built your API, now it’s time to show it to the world! Deployment is the process of putting your code on a server.

## 1. Using Docker

Docker allows you to "package" your API with all its dependencies so it runs exactly the same on any server.

**Simple Dockerfile:**

```dockerfile
FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
```

## 2. Shared Hosting vs. VPS

- **Render / Vercel**: Great for simple apps. They handle most of the setup for you.
- **Ubuntu VPS**: Gives you full control but requires you to setup security and updates yourself.

## Conclusion

Congratulations! You just finished the 1-month FastAPI intensive course. You now have the skills to build production-ready APIs with Python.

---

## Final Task:

1. Research how to deploy a FastAPI app to Render.com.
2. Download a Docker desktop and try to build an image for your project.

---

### [Back to Table of Contents](./Table_Of_Contents.md)

