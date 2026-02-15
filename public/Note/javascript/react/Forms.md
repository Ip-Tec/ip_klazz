# Controlled Components & Forms

In React, we want "Single Source of Truth". This means React should control the value of our input fields using **State**.

## What is a Controlled Component?

Instead of the browser handling the input text, we link the input's `value` to a state variable.

```jsx
import { useState } from "react";

function LoginForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page from refreshing!
    alert("Submitted: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

## Why do this?

- You can validate the input as the user types.
- You can easily clear or change the input value from your code.

---

## Homework:

1. Build a registration form with `username`, `email`, and `password`.
2. Disable the "Submit" button if the `username` is less than 3 characters long.
3. How do you handle multiple input fields without creating 10 different `useState` variables? (Hint: Use an object in state!)

---

### [Next Topic: Lifting State Up & Component Composition](./Lifting_State.md)

