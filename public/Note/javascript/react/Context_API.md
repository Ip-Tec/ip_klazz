# The Context API

What if you have a piece of data (like a user's theme or login status) that is needed by EVERY component? Passing it down through 10 levels of props is exhausting. For this, we use the **Context API**.

## What is Context?

Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

## Step 1: Create the Context

```jsx
const ThemeContext = createContext("light");
```

## Step 2: Provide the Value

Wrap your app with the Provider.

```jsx
<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
```

## Step 3: Consume the Value

Use the `useContext` hook to access the data anywhere!

```jsx
import { useContext } from "react";

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click Me</button>;
}
```

---

## Homework:

1. Create a `UserContext` that stores a username.
2. Build a `Profile` component that displays the username from context.
3. Why is Context better than "Prop Drilling"? (Research what prop drilling is!)

---

### [Next Topic: Building Scalable Components (Patterns)](./Patterns.md)

