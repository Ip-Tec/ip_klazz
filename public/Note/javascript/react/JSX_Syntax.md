# JSX Syntax & Rendering Elements

Today we’ll dive into **JSX**. It looks like HTML, but it's actually a syntax extension for JavaScript that React uses to describe what the UI should look like.

## What is JSX?

JSX stands for JavaScript XML. It allows us to write HTML-like code directly inside our JavaScript files.

**Example:**

```jsx
const element = <h1>Hello, JSX!</h1>;
```

## Why use JSX?

- It’s visual and easier to read than pure JavaScript (`React.createElement`).
- It allows you to embed JavaScript expressions using curly braces `{}`.

## Embedding Expressions

You can put any valid JavaScript expression inside `{}` in JSX.

```jsx
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

## JSX Rules

1. **Single Root Element**: You must return a single top-level element (or use a Fragment `<>...</>`).
2. **Closing Tags**: All tags must be closed (e.g., `<br />` instead of `<br>`).
3. **CamelCase**: Use `className` instead of `class` and `htmlFor` instead of `for`.

---

## Homework:

1. Open your `App.jsx` file and try changing the text inside the `<h1>` tag.
2. Create a variable for your name and display it using `{}`.
3. Try returning two `<h1>` tags without a wrapper and see the error in the console.

---

### [Next Topic: Function Components & Props](./Components_Props.md)

