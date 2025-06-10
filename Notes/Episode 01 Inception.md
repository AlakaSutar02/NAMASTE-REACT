# 📘 React Notes

## 💡 What is Emmet?
Emmet is a productivity tool that simplifies HTML and CSS coding by allowing developers to write shorthand syntax that expands into full code snippets. It's especially helpful for quickly generating complex markup structures.

---

## 🏗️ Difference Between a Library and a Framework
A **library** is a collection of reusable code that helps perform specific tasks without dictating the structure of your application.

A **framework**, on the other hand, provides a predefined structure and flow, guiding how your application should be built.

- **Library** = More flexibility  
- **Framework** = More structure and rules

---

## 🌐 What is a CDN and Why is it Used?
A **CDN (Content Delivery Network)** consists of multiple servers distributed across various geographic locations. It delivers web content to users from the nearest server, which:

- Enhances load times  
- Reduces server load  
- Improves website reliability and performance


---

## ⚛️ Why is React Called React?
**React**, also known as **React.js**, is named after its core idea of building **reactive** user interfaces. It enables dynamic, data-driven UI components that automatically respond to changes in data.


---

## 🔐 What Does `crossorigin` Do in a Script Tag?
The `crossorigin` attribute in a `<script>` tag controls how the browser handles cross-origin requests for external scripts. It enhances **security** by specifying how resources from different origins should be accessed and integrated.

---

## ⚙️ Difference Between React and ReactDOM

| Tool       | Description |
|------------|-------------|
| **React**  | JavaScript library for building UI components |
| **ReactDOM** | Handles rendering of React components into the DOM |

React library is the core of React ecosystem where the core react algorithm is written concepts like reconciliation, diffing algorithm and React Fibre thing there. where React DOM is used by React to modify the actual DOM (browser DOM) with the help of React DOM.
---

## 🆚 Difference Between `react.development.js` and `react.production.js` via CDN

- **react.development.js**  
  ➤ Includes debugging features and detailed error messages  
  ➤ Ideal for development environment

- **react.production.js**  
  ➤ Minified and optimized for better performance  
  ➤ Ideal for production deployment

---

Here's a cleaner and more accurate version of your answer for use in a `README.md` or technical document:

---

### ❓ Why doesn't the React team bundle `react` and `react-dom` together?

**A:**

React is designed to be **platform-agnostic**—it’s not just for web browsers.

* The `react` package contains the **core library** responsible for managing components, state, and rendering logic.
* The `react-dom` package is a **platform-specific renderer** for the **web browser DOM**.

React can also render on other platforms using different renderers:

* **React Native** (`react-native`) – for mobile apps
* **React 360** – for VR apps
* **Ink** – for CLI apps
* **React TV** – for smart TVs

> 💡 If React bundled `react-dom` directly, it would make it unusable on platforms that **don’t have a DOM**, like mobile or command-line interfaces.

By keeping them separate:

* React remains **flexible** and **cross-platform**.
* Developers can plug in different renderers based on their target environment.
---

### ❓ Create and Render a React Element Using Core React (without JSX). Explain it.

**A:**

#### ✅ Step 1: HTML file

```html
<div id="root"></div>
```

#### ✅ Step 2: React Code (No JSX)

```js
const heading = React.createElement(
  "h1",                  // Element type
  { id: "heading" },     // Attributes (props)
  "This is heading"      // Children
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

---

### 🧾 Output in DOM

```html
<div id="root">
  <h1 id="heading">This is heading</h1>
</div>
```

---

### 🔍 Explanation:

#### 🔹 `React.createElement()`

* This method is used to create a React element **without using JSX**.
* It takes **3 arguments**:

  1. **Tag name** (e.g., `"h1"`, `"div"`)
  2. **Attributes/Props** as an object (e.g., `{ id: "heading" }`)
  3. **Children** – what appears inside the tag (text, other elements, etc.)

  ```js
  React.createElement("button", { id: "btn", type: "button" }, "Click Me")
  ```

#### 🔹 `ReactDOM.createRoot()`

* Used to **create a root container** to render React elements into the DOM.
* It replaces `ReactDOM.render()` in React 18+ for enabling concurrent features.

#### 🔹 `root.render(element)`

* Renders the React element into the DOM inside the root.
* **It replaces the content** of the target DOM node (`<div id="root">`), it **does not append** to it.

---

### ⚠️ Note:

* `React.createElement()` returns a **React Element Object**.
* `ReactDOM.createRoot()` returns a **root object** used to manage rendering.

---

### ❓ What is Cross-Origin?

**A:**

**Cross-origin** refers to the situation where a web page tries to make a request to a **different domain, protocol, or port** than the one from which it was originally served.

---

### 📌 Example of Cross-Origin:

If your web app is served from:

```
https://example.com
```

And it tries to make a request to:

```
https://api.anotherdomain.com
```

This is a **cross-origin request** because the domains are different.

---

### 🧠 Technically, two URLs are of different origins if they differ in **any** of the following:

| Component    | Example Difference                 |
| ------------ | ---------------------------------- |
| **Protocol** | `http://` vs `https://`            |
| **Domain**   | `example.com` vs `api.example.com` |
| **Port**     | `:80` vs `:3000`                   |

So even `http://example.com` and `https://example.com` are **different origins**.

---

### 🔐 Why It Matters: **Security (Same-Origin Policy)**

Web browsers follow the **Same-Origin Policy**, which **blocks** scripts on one origin from accessing data on a different origin to prevent **Cross-Site Scripting (XSS)** and **Cross-Site Request Forgery (CSRF)** attacks.

---

### 🔓 How to Allow Cross-Origin Requests?

To allow cross-origin requests, the **target server** must explicitly permit them using **CORS (Cross-Origin Resource Sharing)** headers.

Example CORS header:

```http
Access-Control-Allow-Origin: *
```

Or:

```http
Access-Control-Allow-Origin: https://example.com
```

---

### ⚠️ Common Errors:

* `CORS policy: No 'Access-Control-Allow-Origin' header`
  This means the server didn't allow the request from your origin.

---

### ✅ Summary:

| Term                   | Meaning                                          |
| ---------------------- | ------------------------------------------------ |
| **Cross-Origin**       | Request made to a different domain/protocol/port |
| **Same-Origin Policy** | Browser rule that restricts such requests        |
| **CORS**               | A server-side mechanism to allow exceptions      |

---
