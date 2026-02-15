# Conditional Rendering & Lists

Today we’ll learn how to show or hide elements based on logic, and how to display lists of data using JavaScript's `.map()` method.

## 1. Conditional Rendering

You can use `if-else` or the "Ternary Operator" `? :` inside your JSX.

**Ternary Example:**

```jsx
function AuthButton({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <button>Logout</button> : <button>Login</button>}</div>
  );
}
```

## 2. Conditional Rendering with `&&`

If you only want to show something when a condition is true, use `&&`.

```jsx
{
  hasError && <p className="error">Something went wrong!</p>;
}
```

## 3. Mapping Lists

To display a list of items, we use `.map()` to transform an array into JSX elements.

```jsx
const fruits = ["Apple", "Banana", "Orange"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}
```

**Important**: Always provide a unique `key` prop to each item in a list!

---

## Homework:

1. Create a `Status` component that shows a green dot if `isOnline` is true, and a red dot if false.
2. Given an array of objects `[{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }]`, display them as a list.
3. Why is the `key` prop important in React lists? Research "React reconciliation".

---

### [Next Topic: Managing Side Effects with useEffect](./useEffect_Hook.md)

