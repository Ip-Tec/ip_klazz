# Mini Project: Simple REST API

Today is project day! You will build a complete "Task Management API" that uses everything you’ve learned so far.

## Requirements:

1. **Models**: Create a `Task` SQLModel with `id`, `title`, `description`, and `is_completed`.
2. **CRUD**:
   - `POST /tasks`: Create a new task.
   - `GET /tasks`: List all tasks.
   - `PUT /tasks/{id}`: Mark a task as completed.
   - `DELETE /tasks/{id}`: Remove a task.
3. **Security**: Add a simple authentication check to the DELETE route.
4. **Docs**: Ensure all routes are tagged and described.

## Tips:

- Use `Depends` for your database session.
- Remember to use `response_model` to return clean data.

---

## Homework:

Complete the mini project and test it thoroughly using the Swagger UI docs.

---

### [Next Topic: Deployment Basics](./Deployment.md)

