# Building Scalable Components

Today we’ll talk about how to keep your code clean as your app grows. Professional React developers use certain **Patterns** to build components that are easy to reuse.

## 1. Separation of Concerns

Keep your logic (data fetching, state) separate from your presentation (JSX).

**Tip**: If a component is longer than 100 lines, it's probably doing too much!

## 2. Destructuring Props

Instead of using `props.name`, destructure them in the function arguments for cleaner code:

```jsx
function UserCard({ name, age, email }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age} years old</p>
    </div>
  );
}
```

## 3. Reusable UI Components

Build a "library" of small components like `Button`, `Input`, and `Card`. Use these throughout your app to ensure a consistent look and feel.

---

## Homework:

1. Look through your `App.jsx` and find a section of JSX that could be its own component.
2. Refactor it into a separate file and import it.
3. Create a `PrimaryButton` component that accepts a `label` and an `onClick` prop.

---

### [Next Topic: Mini Project: Personal Portfolio](./Mini_Project.md)

