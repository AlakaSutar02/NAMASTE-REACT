### ✅ **1. What is Prop Drilling?**

**Definition**:
Prop drilling is the process of passing data from a parent component to deeply nested child components **via intermediate components**, even if those intermediate components don’t need the data themselves.

**Problem**:

- Makes components tightly coupled.
- Intermediate components become bloated and harder to maintain.
- Harder to refactor.

**Example**:

```jsx
function App() {
  const user = "Alka";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return <h1>Hello, {user}!</h1>;
}
```

Here, `user` is passed through `Parent` and `Child` just to reach `GrandChild`, which is **prop drilling**.

---

### ✅ **2. What is Lifting the State Up?**

**Definition**:
Lifting state up means **moving the state to the closest common ancestor** of the components that need to share or modify that state.

**Use Case**:
When **two or more sibling components** need to share and manipulate the same state.

**Example**:

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CounterDisplay count={count} />
      <CounterButton onClick={() => setCount(count + 1)} />
    </>
  );
}

function CounterDisplay({ count }) {
  return <h1>Count: {count}</h1>;
}

function CounterButton({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}
```

Here, `count` is **lifted to `Parent`**, and both `CounterDisplay` and `CounterButton` use it.

---

### ✅ **3. What is Context Provider and Context Consumer?**

**React Context** is a way to **share data globally** (like theme, language, user) without passing props manually at every level (avoids prop drilling).

- **Context Provider**: Supplies a value to the subtree.
- **Context Consumer**: Any component that reads the context value.

**Steps**:

1. Create context using `React.createContext()`.
2. Wrap your component tree with `Context.Provider` and pass a `value`.
3. Read the value using `useContext()` hook or `<Context.Consumer>`.

**Example**:

```jsx
const UserContext = React.createContext("DefaultUser");

function App() {
  return (
    <UserContext.Provider value="Alka">
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const user = useContext(UserContext); // "Alka"
  return <h1>Hello, {user}</h1>;
}
```

---

### ✅ **4. If you don’t pass a value to the provider does it take the default value?**

**Yes.**

If you create a context like this:

```jsx
const ThemeContext = React.createContext("light");
```

Then, **if no `value` is provided**, components using `useContext(ThemeContext)` will get `"light"` as the **default value**.

**Example**:

```jsx
const ThemeContext = React.createContext("light");

function Component() {
  const theme = useContext(ThemeContext); // "light"
  return <p>Theme is {theme}</p>;
}
```

If you later wrap with `<ThemeContext.Provider value="dark">`, then it will override the default.

---

### ✅ Summary Table:

| Concept                   | Purpose                                        | Solves Problem Of                    |
| ------------------------- | ---------------------------------------------- | ------------------------------------ |
| **Prop Drilling**         | Passing data through multiple levels via props | Overhead and clutter in deep trees   |
| **Lifting State Up**      | Sharing state among sibling components         | Sibling state coordination           |
| **Context Provider**      | Provides a global value to components          | Avoids prop drilling                 |
| **Context Default Value** | Used when no provider is wrapping the consumer | Allows fallback values automatically |
