# The useEffect Hook

Sometimes your component needs to do something outside of just showing a UI, like fetching data or setting up a timer. These are called **Side Effects**.

## What is `useEffect`?

The `useEffect` hook allows you to run code after the component renders.

```jsx
import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // This runs after every render
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Clean up (runs when component unmounts)
    return () => clearInterval(interval);
  }, []); // [] means "run only once on mount"

  return <p>Seconds passed: {seconds}</p>;
}
```

## The Dependency Array `[]`

- `[]`: Run only ONCE when the component starts.
- `[variable]`: Run whenever `variable` changes.
- (None): Run after EVERY render.

---

## Homework:

1. Create a component that console logs "Hello!" only when it first appears on the screen.
2. Build a document title updater that changes `document.title` to the current count of a counter.
3. Research: Why do we need the "Clean up" function in `useEffect`?

---

### [Next Topic: Controlled Components & Forms](./Forms.md)

