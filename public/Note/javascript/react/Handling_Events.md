# Handling Events

Interactivity in React is handled through events. Today we’ll learn how to respond to user actions like clicks and keyboard input.

## Handling Clicks

In React, we use camelCase names for events (e.g., `onClick` instead of `onclick`).

```jsx
function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

## Input Events

To capture what a user types, we use the `onChange` event and access the value via `event.target.value`.

```jsx
function InputWatcher() {
  function handleChange(event) {
    console.log("Typed:", event.target.value);
  }

  return <input type="text" onChange={handleChange} />;
}
```

## Passing Arguments

If you need to pass data to your handler, use an arrow function:

```jsx
<button onClick={() => handleDelete(item.id)}>Delete</button>
```

---

## Homework:

1. Create a button that changes the background color of a `div` when clicked.
2. Build a logger that prints whatever the user types in an input field to the console.
3. Challenge: Create a component that displays "Success!" only after you type the word "secret".

---

### [Next Topic: Conditional Rendering & Mapping Lists](./Conditional_Rendering.md)

