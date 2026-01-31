---
title: "Introduction to React"
description: "Learn the basics of React, a popular JavaScript library for building user interfaces."
premium: false
---

# Introduction to React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

## Why React?

- **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Learn Once, Write Anywhere**: You can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.

## Your First React Component

```jsx
import React from 'react';

function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to your first React component!</p>
    </div>
  );
}

export default HelloWorld;
```

## JSX

JSX is a syntax extension to JavaScript. It is used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
