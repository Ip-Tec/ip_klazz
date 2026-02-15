# Function Components & Props

Components are the heart of React. Today we’ll learn how to build our own components and pass data to them using **Props**.

## 1. Function Components

A component is just a JavaScript function that returns JSX.

```jsx
function Welcome() {
  return <h1>Welcome to my App!</h1>;
}
```

## 2. Using Components

You can use a component just like an HTML tag! **Note**: React component names must always start with a **Capital Letter**.

```jsx
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}
```

## 3. Props (Properties)

Props are like function arguments. They allow you to pass data from a parent component to a child component.

**Example:**

```jsx
function Greet(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greet name="Alice" />;
}
```

---

## Homework:

1. Create a `UserCard` component that displays a name and a job title.
2. Use props to pass the name and title to the `UserCard`.
3. Render three different `UserCard` components in your `App.jsx` with different names.

---

### [Next Topic: State with useState Hook](./useState_Hook.md)

