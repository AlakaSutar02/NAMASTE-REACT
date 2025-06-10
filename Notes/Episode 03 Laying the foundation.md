
## 🧱 Laying the Foundation 

### ❓ What is JSX?
* JSX stands for **JavaScript XML**.
* JSX allows writing **HTML-like code inside JavaScript**, which is then **transpiled into JavaScript**.
---

### 🔁 JSX Compilation Flow

```txt
JSX
 ↓ (transpiled by Babel)
React.createElement()
 ↓
ReactElement (JS Object)
 ↓
HTMLElement (via ReactDOM.render)
 ↓
Browser DOM
```

### 📦 Behind the Scenes

* JSX is **syntactic sugar** for `React.createElement`.
* JSX is **not valid JavaScript** on its own—it must be transpiled using **Babel**.
* Bundlers like **Parcel** (or Vite/Webpack) include **Babel** to handle this transformation automatically.

```txt
JSX → Babel (Transpiler) → React.createElement → ReactDOM → DOM
```
---

### 🔒 Security

* JSX **prevents cross-site scripting (XSS) attacks**.
* Any dynamic value in JSX is **escaped by default**, making it safer than using raw HTML strings.
---

### ✅ Why Use JSX?

* It improves **readability** and **developer experience**.
* JSX allows you to **write UI code declaratively** using familiar HTML-like syntax.
* JSX is **optional**—you can still use `React.createElement()` directly.
---

### 🧪 JSX Example

```jsx
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```
This JSX code is transpiled by Babel to:

```js
const jsxHeading = React.createElement("h1", { id: "heading" }, "Namaste React using JSX 🚀");
```

---
### ❌ Why JSX doesn't work directly?

JS engine, React, or ReactDOM **do not understand JSX**.

```js
// Error - JSX is not valid JavaScript
root.render(<h1>This is heading</h1>);
```

This causes an error because `render()` expects a **React Element object**, not raw JSX.

✅ **Solution:**
Use a bundler like **Parcel, Vite, or Webpack**, which internally uses **Babel** to convert JSX into JavaScript.

```js
// JSX
const myElement = <h1>I Love JSX!</h1>;
// Babel transforms it into:
React.createElement("h1", null, "I Love JSX!");
```

---
### 🚀 Superpowers of JSX

* Write HTML-like elements inside JavaScript
* Embed JavaScript expressions using `{}`

```jsx
function greeting(user) {
  const date = new Date();
  return (
    <h1>
      {user}, How are you!!! @{date.getFullYear()}
    </h1>
  );
}
```
---

### 🤔 `{TitleComponent}` vs `{<TitleComponent />}` vs `<TitleComponent></TitleComponent>`

| Syntax                                   | Description                                                        |
| ---------------------------------------- | ------------------------------------------------------------------ |
| `{TitleComponent}`                       | Refers to a variable or function reference.                        |
| `<TitleComponent />`                     | Renders the **component output** (invokes the component function). |
| `<TitleComponent>{...}</TitleComponent>` | Same as above, but allows passing children inside the component.   |

**Examples:**

```jsx
// 1. Using variable
const name = "World";
<h1>{name}</h1>

// 2. Component
const Title = () => <h1>Hello</h1>;
<Title />

// 3. Component with children
<TitleComponent>Some content here</TitleComponent>
```
---
### ✅ What Makes React Code Readable?
**JSX improves readability** and makes the structure visually similar to HTML.
```jsx

// With JSX
const Title = () => (
  <div>
    <h1>This is heading</h1>
  </div>
);

// Without JSX (harder to read)
const Title = () =>
  React.createElement("div", {}, 
    React.createElement("h1", {}, "This is heading")
  );
```

---
## ⚛️ React Components

React components are **reusable pieces of UI**. They are the **building blocks** of any React application.

---

### 🧩 Types of React Components

React provides **two main types** of components:

1. **Functional Component** *(Modern - Preferred)*
2. **Class Component** *(Legacy - Less Common)*

---

### 📌 What is a React Component?

* A React Component is a **JavaScript function or class** that **returns a React Element** (JS Object).
* It accepts **props** (inputs) and returns **JSX** or `React.createElement`.
* It enables **reusability**, **readability**, and **modular code architecture**.

---

### 🧠 Functional Component (Modern)

A functional component is a **pure JavaScript function** that returns JSX:

```jsx
const Title = () => (
  <h1 className="head" id="heading">
    Namaste React using Functional Component 🚀
  </h1>
);
```

### 🛠 Rendering the Component

To render the component into the DOM:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));

// Using JSX syntax (preferred)
root.render(<Title />);

// OR, directly calling the function (less common)
root.render(Title());
```
---

### 💡 What is a Functional Component?

A **Functional Component** is a JavaScript function that returns **JSX**.

```jsx
const Hello = () => <h1>Hello, World!</h1>;
```

JSX is compiled by Babel to regular JavaScript before it runs in the browser.

---

### ❓ Is `<Title />` the same as `Title()`?

✅ Yes. Under the hood, `<Title />` is just syntactic sugar for calling the component as a function: `Title()`.

---

## 🧩 Component Composition in React

**Component Composition** is the process of **nesting multiple components** inside another component to build **more complex and reusable UIs**.

Rather than building large components, React encourages creating smaller components and composing them together.

---

### 🔧 Why Use Component Composition?

* **Reusability** – Break UI into smaller, reusable pieces.
* **Readability** – Cleaner, more maintainable code.
* **Separation of Concerns** – Each component handles one piece of functionality.

---

### 📦 Example:

```jsx
const Title = () => {
  return <h1>This is the Title Component</h1>;
};

const Header = () => {
  return (
    <div>
      <Title />
      <h2>This is the Header Component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
```
---

### ✅ Output:

```html
<div>
  <h1>This is the Title Component</h1>
  <h2>This is the Header Component</h2>
</div>
```
This is **Component Composition**—using small components like `Title` inside larger components like `Header`.
---

This helps build complex UIs from small, reusable pieces.

---
