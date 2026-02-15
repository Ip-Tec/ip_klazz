# Lifting State Up & Component Composition

In React, data flows DOWN from parent to child via props. But what if two sibling components need to share the same data? We **Lift State Up**.

## What is Lifting State?

If Component A and Component B both need to access the same state, we move that state to their closest common parent.

**Example:**
Imagine two inputs that both need to show the same temperature. Instead of each having their own state, the parent holds the `temperature` state and passes it down to both.

## Component Composition

Instead of one massive component, you should break your UI into small, specialized ones. Use `props.children` to pass JSX into a component.

```jsx
function Layout(props) {
  return (
    <div className="container">
      <nav>My Navigation</nav>
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Layout>
      <h1>Welcome to my Homepage!</h1>
    </Layout>
  );
}
```

---

## Homework:

1. Create a `Parent` component with a state `text`.
2. Create two `Child` components that both display the `text` from the `Parent`.
3. Challenge: Add an input to one child that updates the state in the `Parent` (and thus updates the other child!).

---

### [Next Topic: Fetching Data from APIs (Fetch/Axios)](./API_Fetching.md)

