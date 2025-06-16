
### 📘 Chapter 07 - Finding the Path

---

### ❓ What are the various ways to **add images** to a React App? (with code examples)

React allows multiple ways to add images, depending on where the image is hosted and how your app is structured.

---

#### ✅ 1. Using a Public Image URL (CDN or Web)

```jsx
<img src="https://reactjs.org/logo-og.png" alt="React Logo" />
```

This loads an image directly from a remote server.

---

#### ✅ 2. Importing Local Images into Your Project

* First, **drag and drop** the image file into your project folder.
* Then, **import** it into your component and use it.

```jsx
import reactLogo from "./reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="React Logo" />;
}
```

---

#### ✅ 3. Using a Structured `assets/images` Folder

Organizing assets in folders improves scalability and structure.

```jsx
import reactLogo from "../../assets/images/reactLogo.png";

export default function App() {
  return <img src={reactLogo} alt="React Logo" />;
}
```

> 💡 Use `public/` folder for static files that don’t need importing, or `src/assets` for versioned, imported assets.

---

### ❓ What happens when we run `console.log(useState())`?

When you call `useState()` without an initial value:

```js
console.log(useState());
```

You get an array:

```js
[undefined, function]
```

* `undefined` → the initial state value (because none was provided)
* `function` → the `setState` function to update the state

> 📌 This shows how `useState()` returns a **stateful value and a setter function**, even without initial input.


The `useState` hook is one of the most fundamental and commonly used **React hooks**, introduced in React **v16.8**, that allows you to **add state to functional components**.

---

### ✅ What is `useState`?

In simple terms:

> `useState` lets you **create and manage state** (i.e., variables that React tracks and updates the UI when changed) **inside a functional component**.

---

### 🧠 Why is it needed?

Before hooks, only **class components** could have state. With `useState`, **functional components** can now store and manage dynamic data—like user input, counters, fetched data, UI toggles, etc.

---

### 🔧 Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

* `state`: Current value of the state.
* `setState`: Function to update the state.
* `initialValue`: The starting value of the state.

---

### 🧪 Example: Counter App

```jsx
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // Initial value is 0

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}
```

➡️ Every time the button is clicked:

* `setCount` updates the state
* React re-renders the component
* UI reflects the new value

---

### 🪄 Key Features:

* Can store **any type**: number, string, object, array, boolean, etc.
* Each state variable is **independent**.
* Updating state **triggers a re-render**.
* **Does not merge** objects like `this.setState` in class components—you must do that manually.

---

### ⚠️ Common Pitfalls:

* **Direct mutation won't work**:

  ```js
  count = count + 1; // ❌ UI won't update
  setCount(count + 1); // ✅ Triggers re-render
  ```

* If you’re updating state **based on the previous state**, always use a callback:

  ```js
  setCount(prevCount => prevCount + 1);
  ```

---

### 🏁 Summary:

| Feature            | Description                        |
| ------------------ | ---------------------------------- |
| Hook name          | `useState`                         |
| Purpose            | Add state to functional components |
| Returns            | `[state, setState]` array          |
| Triggers re-render | ✅ When state is updated            |

---

### ❓ What happens if we **don’t add a dependency array** in `useEffect()`?

The behavior of `useEffect()` depends on its **dependency array**:

---

#### 🔁 Case 1: No Dependency Array

```js
useEffect(() => {
  console.log("Runs after every render");
});
```

* Effect runs **after every render and re-render**.
* Can cause performance issues if not managed properly.

---

#### 🕐 Case 2: Empty Dependency Array

```js
useEffect(() => {
  console.log("Runs only once - on initial mount");
}, []);
```

* Runs **only once**, just after the component is mounted.
* Great for initialization logic (e.g., fetch calls, subscriptions).

---

#### 🎯 Case 3: With Dependencies

```js
useEffect(() => {
  console.log("Runs when `condition` changes");
}, [condition]);
```

* Runs on **initial render**, and **whenever `condition` changes**.

> ⚠️ Always specify dependencies explicitly to avoid stale or unintended state.

---

### ❓ What is an `SPA`?

**SPA (Single Page Application)** is a web application that **loads a single HTML page** and dynamically updates content using JavaScript—**without refreshing the page**.

✅ Key Features:

* Faster navigation between views
* No full-page reloads
* Data is fetched dynamically with APIs
* Seamless user experience like desktop apps

> Popular SPA frameworks: React, Angular, Vue

---

### ❓ What is the difference between **Client-Side Routing** and **Server-Side Routing**?

| Feature      | Server-Side Routing (SSR)                         | Client-Side Routing (CSR)         |
| ------------ | ------------------------------------------------- | --------------------------------- |
| How it works | Each URL change makes a new request to the server | Routes are handled in the browser |
| Page Reload  | Full page reload                                  | No reload                         |
| Speed        | Slower navigation                                 | Faster, smoother transitions      |
| Initial Load | Fast HTML rendering                               | Larger JS bundle initially        |
| Used In      | Traditional websites, Next.js                     | SPAs like React, Vue              |

---

**Summary**:

* 🔁 SSR reloads entire pages from the server on every navigation.
* ⚡ CSR updates only the view using JavaScript, making transitions fast and fluid.

> React applications typically use **Client-Side Routing** with libraries like `react-router-dom`.

---
