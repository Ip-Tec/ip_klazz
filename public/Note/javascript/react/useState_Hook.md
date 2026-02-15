# State with useState Hook

Props are great for passing data _to_ a component, but what if a component needs to change its _own_ data? For that, we use **State**.

## What is State?

State is like a component's memory. When the state changes, React automatically re-renders the component to show the new data.

## The `useState` Hook

To use state in a function component, we use the `useState` hook.

```jsx
import { useState } from "react";

function Counter() {
  // count is the data, setCount is the function to change it
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

## Rules of State:

- Never change state variables directly (e.g., `count = count + 1`). Always use the setter function.
- Changing state triggers a re-render.

---

## Homework:

1. Build a simple `Counter` component with "Increment" and "Decrement" buttons.
2. Create a `Toggle` component that shows "ON" or "OFF" when you click a button.
3. Why do we need `useState` instead of just a regular variable? (Think about re-rendering!)

---

### [Next Topic: Handling Events (Click, Change, Input)](./Handling_Events.md)

