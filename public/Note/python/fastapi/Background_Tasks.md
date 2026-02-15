# Background Tasks

Sometimes an API needs to do something that takes a long time, like sending an email or processing an image. You don't want the user to wait for this to finish!

## Using `BackgroundTasks`

FastAPI provides a simple way to run these tasks after returning the response.

**Example:**

```python
from fastapi import BackgroundTasks

def send_notification(email: str):
    # Imagine this takes 10 seconds
    print(f"Sending email to {email}...")

@app.post("/send-email/")
def send_email_api(email: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_notification, email)
    return {"message": "Email is being sent in the background!"}
```

## Why it's useful:

Your API stays fast and responsive, while the heavy work happens behind the scenes.

---

## Homework:

1. Create a function that writes a message to a file after a 5-second delay (use `import time`).
2. Implement a route that triggers this function as a background task.
3. Verify that the response is returned immediately.

---

### [Next Topic: Mini Project: Simple REST API](./Mini_Project.md)

