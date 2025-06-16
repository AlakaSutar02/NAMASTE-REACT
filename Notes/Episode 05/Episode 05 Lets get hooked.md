# Chapter 05 - Let's get Hooked!


## Theory Assignment:
- What is the `difference` between `Named export`, `Default export`, and `* as export`?
- What is the `importance` of `config.js` file?
- What are `React Hooks`?
- Why do we need `useState Hook`?



### **1. What is Reconciliation in React?**

**Reconciliation** is the process React uses to **update the DOM efficiently**.

* React maintains a **virtual DOM**.
* When state/props change, it **compares** the new virtual DOM with the previous one.
* Only the **differences (diffs)** are updated in the real DOM.
* This makes updates **faster and more efficient**.

---

### **2. What is React Fiber?**

**React Fiber** is the **reconciliation engine** behind React 16+.

**Key features of Fiber:**

* Allows React to **pause, abort, or restart** work as needed.
* Enables **time-slicing**, **concurrent rendering**, and **better responsiveness**.
* Helps in prioritizing updates (e.g., animations vs user input).

> It’s a complete rewrite of React's core algorithm.

---
## ❓ What Is the Difference Between Named Export, Default Export, and `* as` Export in JavaScript?

ES6 introduced a standardized way to **export and import modules** in JavaScript. These modules allow code reusability and better structure. There are **three primary export patterns**: **Named Export**, **Default Export**, and **`* as` Export**.

---

### ✅ 1. **Named Export**

* Allows **multiple exports** per file.
* Must import using **curly braces `{}`**.
* The **imported name must match the exported name**.

**Exporting:**

```js
// MyComponent.js
export const MyComponent = () => {};
export const MyComponent2 = () => {};
```

**Importing:**

```js
// Import single named export
import { MyComponent } from "./MyComponent";

// Import multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";

// Rename during import
import { MyComponent2 as MyNewComponent } from "./MyComponent";
```

---

### ✅ 2. **Default Export**

* Only **one default export** is allowed per file.
* **Does not require curly braces** when importing.
* You can use **any name** when importing.

**Exporting:**

```js
// MyComponent.js
const MyComponent = () => {};
export default MyComponent;
```

**Importing:**

```js
// You can choose any name
import MyComponent from "./MyComponent";
```

---

### ✅ 3. **`* as` Export (Namespace Import)**

* Imports **all named exports** as a **single object**.
* Access each export using **dot notation**.

**Exporting:**

```js
// MyComponent.js
export const MyComponent = () => {};
export const MyComponent2 = () => {};
export const MyComponent3 = () => {};
```

**Importing:**

```js
import * as MainComponents from "./MyComponent";

// Usage in JSX
<MainComponents.MyComponent />
<MainComponents.MyComponent2 />
<MainComponents.MyComponent3 />
```

---

### 🔄 Combining Named and Default Exports

You can use **named and default exports together** in the same file.

**Exporting:**

```js
// MyComponent.js
export const MyComponent2 = () => {};
const MyComponent = () => {};
export default MyComponent;
```

**Importing:**

```js
import MyComponent, { MyComponent2 } from "./MyComponent";
```

---

### 📝 Summary Table

| Feature             | Named Export    | Default Export  | `* as` Export           |
| ------------------- | --------------- | --------------- | ----------------------- |
| Export Count        | Multiple        | One per file    | Multiple (all together) |
| Import Syntax       | `{ name }`      | `name`          | `* as alias`            |
| Rename While Import | ✅               | ✅ (freely)      | ✅ (via dot notation)    |
| JSX Usage           | `<Component />` | `<Component />` | `<Alias.Component />`   |

---

## ❓ What Is the Importance of a `config.js` File?

A `config.js` file is a centralized place to store configuration values that a program or application needs to function properly. These values can include API endpoints, user preferences, environment settings, feature flags, and more.

---

### 🔧 Why Is It Important?

1. **Centralized Configuration:**

   * Keeps all settings in one place for easier maintenance and clarity.

2. **Environment Flexibility:**

   * Easily switch between different environments (development, testing, production) by changing values in one file.

3. **Reduces Hardcoding:**

   * Prevents scattering of values throughout the codebase (e.g., API URLs, keys, constants).

4. **Improves Reusability & Readability:**

   * Configurations can be reused across modules, and it’s easier for new developers to understand project settings.

5. **User Customization:**

   * Allows user-defined preferences to be stored and retrieved dynamically.

---

### 🧱 Structure of a `config.js` File

Configuration files are typically simple key–value pairs, and in JavaScript, they're often exported as an object:

```js
// config.js
const config = {
  NAME: "Alka",
  SURNAME: "Sutar",
  API_URL: "https://api.example.com",
  TIMEOUT: 5000,
};

export default config;
```

**Usage:**

```js
import config from "./config";

console.log(config.NAME); // Output: Chetan
```

---

### 📝 Real-World Use Cases

* Setting **base URLs** for API calls.
* Defining **feature toggles** (e.g., `isBetaEnabled: true`).
* Managing **third-party service keys** (e.g., Google Maps API Key).
* Controlling **app behavior** via user settings or deployment flags.

---

### ✅ Summary

> A `config.js` file simplifies the management of app-wide settings, improves code maintainability, and enables dynamic behavior without altering core logic.
---

## 🔄 What Are React Hooks?

**React Hooks** are built-in functions introduced in **React v16.8** that allow you to use **state and lifecycle features** in **functional components**—features that were previously only available in class components.

> Hooks let you “hook into” React’s features like state, lifecycle methods, and context without writing a class.

---

### 🧠 Why Use Hooks?

* To **reuse stateful logic** without modifying component hierarchies.
* To write **cleaner and more modular code**.
* To **avoid class components** while retaining the same functionality.
* To enable **code reuse** via custom hooks across multiple components or projects.

---

## 🔌 Common Built-in React Hooks

### 1. **`useState`**

* Manages local **state** in functional components.
* Returns a pair: the current state and a function to update it.

```js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};
```

---

### 2. **`useEffect`**

* Handles **side-effects** such as API calls, DOM manipulation, or subscriptions.

```js
useEffect(() => {
  // Run on mount or when dependencies change
  fetchData();
}, []); // Empty array = run only once (on mount)
```

---

### 3. **`useContext`**

* Accesses the current value of a **React Context**.

```js
const user = useContext(UserContext);
```

---

### 4. **`useReducer`**

* A more powerful alternative to `useState` for **complex state logic**.

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

---

### 5. **`useCallback`**

* Returns a **memoized callback function** to prevent unnecessary re-renders.

```js
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

---

### 6. **`useMemo`**

* Memoizes the **result of a calculation**, optimizing performance.

```js
const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

---

### 7. **`useRef`**

* Stores a **mutable reference** that doesn’t trigger a re-render.

```js
const inputRef = useRef(null);
```

---

### 8. **`useLayoutEffect`**

* Like `useEffect`, but fires **synchronously after DOM mutations**.
* Use only when **DOM measurement** is needed before the browser paints.

---

### 9. **`useDebugValue`**

* Used in **custom hooks** to display a label in React DevTools.

```js
useDebugValue(value);
```

---

## 🔍 Why Do We Need `useState`?

The `useState` hook provides a way to manage and update **local state** within functional components. Unlike class components where state is handled via `this.state` and `this.setState()`, `useState` is simpler and more intuitive.

### 🧪 Syntax

```js
import React, { useState } from "react";

const Example = () => {
  const [name, setName] = useState("John");
  return <input value={name} onChange={(e) => setName(e.target.value)} />;
};
```

* `useState("John")`: Initializes state.
* Returns an array: `[stateValue, updaterFunction]`.
* You can call `useState` **multiple times** for different values.

---

## ✅ Summary

| Hook              | Purpose                                    |
| ----------------- | ------------------------------------------ |
| `useState`        | Add local state                            |
| `useEffect`       | Handle side effects                        |
| `useContext`      | Access context value                       |
| `useReducer`      | Handle complex state                       |
| `useCallback`     | Prevent re-renders of functions            |
| `useMemo`         | Prevent re-computation of expensive values |
| `useRef`          | Keep mutable value across renders          |
| `useLayoutEffect` | Sync effect after DOM changes              |
| `useDebugValue`   | Debug custom hooks                         |

---
