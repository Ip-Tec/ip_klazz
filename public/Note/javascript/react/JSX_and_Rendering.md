---
title: "JSX and Rendering Elements"
description: "Understand JSX and how React renders elements to the DOM."
premium: false
---

# JSX and Rendering Elements

In React, we describe what we want to see on the screen using a syntax called **JSX**.

## What is JSX?

JSX stands for JavaScript XML. It allows us to write HTML-like code inside our JavaScript files.

```jsx
const element = <h1 className="greeting">Hello, world!</h1>;
```

It is essentially "Syntactic Sugar" for `React.createElement()`.

## Expressions in JSX

You can put any valid JavaScript expression inside curly braces in JSX:

```jsx
const name = 'Innocent';
const element = <h1>Hello, {name}</h1>;
```

## Try it out!

Use the playground below to experiment with JSX values.

```jsx
const user = { firstName: 'EduFun', lastName: 'Technik' };
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const element = (
  <h2>
    Hello, {formatName(user)}!
  </h2>
);

console.log("Rendering element...");
// In a real app, you'd use root.render(element);
```

