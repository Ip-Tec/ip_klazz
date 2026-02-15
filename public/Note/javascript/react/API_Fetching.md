# Fetching Data from APIs

Most real apps aren't static—they get data from a server. Today we’ll learn how to fetch data from an API using the `fetch` function and `useEffect`.

## Basic Fetch in React

We usually fetch data inside a `useEffect` so it happens as soon as the component loads.

```jsx
import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []); // Run only ONCE on mount

  if (isLoading) return <p>Loading...</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Handling Errors

Always wrap your fetch logic in a try-catch block or check `response.ok` to avoid crashing your app when the internet goes down.

---

## Homework:

1. Build a component that fetches and displays a list of "Posts" from JSONPlaceholder.
2. Add a button that "Refreshes" the data by triggering the fetch again.
3. Show a "Loading..." message while the data is being fetched.

---

### [Next Topic: Client-Side Routing with React Router](./React_Router.md)

