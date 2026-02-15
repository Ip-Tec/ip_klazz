# Path & Query Parameters

Today we’ll learn how to get extra information from the URL. Flask used various methods for this, but FastAPI makes it incredibly simple using function parameters.

## 1. Path Parameters

These are part of the URL itself. You use them when you're looking for a specific item.

**Syntax:**

```python
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id}
```

If you visit `/items/42`, the `item_id` will be `42`. Because we used `: int`, FastAPI will throw an error if you try to visit `/items/abc`.

## 2. Query Parameters

These appear after a `?` in the URL. They are typically used for filtering or pagination.

**Example:**

```python
@app.get("/search/")
def search_items(name: str, limit: int = 10):
    return {"searching_for": name, "max_results": limit}
```

URL: `/search/?name=laptop&limit=5`

FastAPI is smart enough to know that if a parameter isn't in the path, it must be a query parameter!

---

## Homework:

1. Create a route `/users/{user_id}` that displays the ID.
2. Add a search route that takes a `category` and an optional `page` number (default to 1).
3. Test your routes in the browser.

---

### [Next Topic: Request Body & Response Models](./Response_Models.md)

