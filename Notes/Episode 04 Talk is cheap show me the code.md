
## 04 Talk is cheap show me the code

### **1. Is JSX mandatory for React?**

**No, JSX is not mandatory**, but it is highly recommended.

**Explanation:**

* JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code in JavaScript.
* Without JSX, you have to use `React.createElement()` manually, which is more verbose and harder to read.

**Example without JSX:**

```javascript
React.createElement('h1', null, 'Hello, world!');
```

**With JSX (easier):**

```javascript
<h1>Hello, world!</h1>
```

> JSX is syntactic sugar for `React.createElement()`.

---

### **2. Is ES6 mandatory for React?**

**No, ES6 is not mandatory**, but like JSX, it is **strongly recommended**.

**Why ES6 is preferred:**

* ES6 brings features like arrow functions, classes, destructuring, `let`/`const`, template literals, modules, etc.
* React codebases heavily use ES6+ features for cleaner and more concise code.

**Example using ES6:**

```javascript
const App = () => <h1>Hello</h1>;
```

**Without ES6:**

```javascript
var App = function() {
  return React.createElement('h1', null, 'Hello');
};
```

---

### **3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX**

| Syntax                              | Explanation                                                                 |
| ----------------------------------- | --------------------------------------------------------------------------- |
| `{TitleComponent}`                  | Refers to the component **function or class itself**, not rendering it.     |
| `{<TitleComponent/>}`               | **Incorrect syntax** – JSX does not support wrapping JSX in `{}` like that. |
| `<TitleComponent />`                | Correct JSX syntax to **render** the component.                             |
| `<TitleComponent></TitleComponent>` | Same as above – use either form for rendering, both are equivalent.         |

---

### **4. How can I write comments in JSX?**

You can write comments using curly braces and the `/* comment */` syntax inside JSX.

```jsx
return (
  <div>
    {/* This is a comment */}
    <h1>Hello</h1>
  </div>
);
```

> Outside of JSX, use `//` or `/* */` like normal JavaScript.

---

### **5. What is `<React.Fragment></React.Fragment>` and `<>...</>`?**

Both are used to **group multiple JSX elements** without adding extra nodes to the DOM.

* `<React.Fragment>` is the full syntax.
* `<>...</>` is a shorthand.

**Example:**

```jsx
return (
  <>
    <h1>Title</h1>
    <p>Paragraph</p>
  </>
);
```

They prevent adding unnecessary `<div>` wrappers.

---
### **6. Why do we need keys in React?**

**Keys** help React identify which items have changed, been added, or removed in a list.

Without keys:

* React may unnecessarily re-render or rearrange elements.

With keys:

* React can **track each element uniquely**, improving performance and avoiding bugs.

**Example:**

```jsx
{items.map(item => <li key={item.id}>{item.name}</li>)}
```

---

### **7. Can we use index as keys in React?**

**Yes, but only if:**

* The list is **static** (not reordered or filtered).
* The items have **no unique id**.

**Why avoid it in dynamic lists?**

* Using the index can lead to incorrect DOM updates during reordering.
* It can cause **bugs in component state or animations**.
---

### ❓ What are Props in React?

**A:** Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic. 
---

### ✅ Ways to Use Props in React

1. **Passing Props to a Component**

   ```jsx
   <Greeting name="Alka" />
   ```

2. **Accessing Props in the Component**

   ```jsx
   function Greeting(props) {
     return <h1>Hello, {props.name}!</h1>;
   }
   ```

3. **Destructuring Props**

   ```jsx
   function Greeting({ name }) {
     return <h1>Hello, {name}!</h1>;
   }
   ```

4. **Using Default Props**

   ```jsx
   function Button({ label = "Click me" }) {
     return <button>{label}</button>;
   }
   ```

5. **Passing Functions as Props**

   ```jsx
   function Child({ onClick }) {
     return <button onClick={onClick}>Click</button>;
   }

   function Parent() {
     const handleClick = () => alert("Button clicked!");
     return <Child onClick={handleClick} />;
   }
   ```

6. **Using `children` Prop to Pass JSX Content**

   ```jsx
   function Wrapper({ children }) {
     return <div className="wrapper">{children}</div>;
   }

   <Wrapper>
     <p>This is wrapped content.</p>
   </Wrapper>
   ```

---


---
