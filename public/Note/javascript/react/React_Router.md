# React Router

In a Single Page Application (SPA), we don't actually reload the page to change views. Instead, we use **Client-Side Routing**. The industry standard for this is **React Router**.

## 1. Installation

```bash
npm install react-router-dom
```

## 2. Basic Setup

Wrap your App in a `BrowserRouter` and define your `Routes`.

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## 3. Why use `Link` instead of `<a>`?

The `<Link>` component prevents the browser from doing a full page refresh, making the navigation instant!

---

## Homework:

1. Install `react-router-dom` in your project.
2. Create three pages: `Home`, `Projects`, and `Contact`.
3. Set up a navigation bar that lets you switch between them instantly.

---

### [Next Topic: Global State with Context API](./Context_API.md)

