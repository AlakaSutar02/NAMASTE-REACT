### 📘 Chapter 06 - Exploring the World

---

### ❓ What is a `Microservice`?

A **microservice**—also known as microservice architecture—is a software development approach where the application is divided into small, independent services such as database, server, or UI modules. These services communicate through well-defined APIs and are maintained by self-contained, cross-functional teams.

✅ **Benefits of Microservices**:

* 🔄 Flexible Scaling
* 🚀 Easy Deployment
* 🧱 Technological Freedom
* ♻️ Reusable Code
* 🔒 Resilience

By decoupling features into modular services, teams can work independently, reuse logic, and scale efficiently.

---

### ❓ What is `Monolith Architecture`?

A **monolithic architecture** is a traditional software design model where the entire application is built as a single, unified unit. All services—UI, server, database—are combined into one codebase and deployed together.

This approach makes deployment and updates more restrictive. Even small changes may require rebuilding and redeploying the entire application.

---

### ❓ What is the difference between `Monolith` and `Microservice`?

| Feature     | Monolith Architecture | Microservice Architecture     |
| ----------- | --------------------- | ----------------------------- |
| Structure   | Single codebase       | Multiple independent services |
| Deployment  | Entire app redeployed | Deploy individual services    |
| Scalability | Scale entire app      | Scale specific services       |
| Flexibility | Low                   | High                          |
| Maintenance | Complex with growth   | Easier with modularity        |

> 💡 In microservices, each service handles a specific business capability and can be developed, tested, and deployed independently.

---

### ❓ Why do we need the `useEffect` Hook?

The `useEffect` hook in React handles **side effects** in functional components such as:

* Fetching API data
* Updating the DOM directly
* Setting up timers or subscriptions

**Syntax:**

```js
useEffect(() => {
  // side effect logic here
}, [dependencies]);
```

* ✅ If you pass an **empty array `[]`**, it runs only **once** after the initial render.
* ✅ If you pass **dependencies**, it runs when any dependency value changes.
* ❌ If you **omit** the array, it runs **after every render**.

Example:

```js
useEffect(() => {
  setCurrentState(true);
}, [currentState]);
```

---

### ❓ What is `Optional Chaining`?

**Optional chaining (`?.`)** allows you to safely access deeply nested properties without checking for `null` or `undefined` at each level.

```js
const userName = user?.info?.name; // returns undefined if info or name doesn't exist
```

✅ Prevents app crashes by returning `undefined` instead of throwing errors when a property doesn't exist.

---

### ❓ What is `Shimmer UI`?

**Shimmer UI** is a loading placeholder that mimics the structure of the content yet to load. It enhances user experience by giving users a visual cue that the content is being fetched.

> Instead of showing a generic loading spinner, shimmer UI shows a skeleton screen that resembles the final UI layout.

---

### ❓ Difference between `JS Expression` and `JS Statement`?

* **JS Expression**: Produces a value

  ```js
  1 + 2;
  "hello".toUpperCase();
  isUser ? "Yes" : "No";
  ```
* **JS Statement**: Performs an action

  ```js
  let x = 10;
  if (x > 5) { console.log("big"); }
  ```

📌 In JSX:

* Use expressions inside `{}`
* Statements are **not directly allowed** in JSX

---

### ❓ What is `Conditional Rendering`? (with example)

React allows rendering components or elements conditionally using standard JS syntax.

**Using Ternary Operator:**

```js
{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
```

**Using Logical AND (`&&`):**

```js
{isLoggedIn && <button>Logout</button>}
```

> ⚠️ `if...else` blocks must be used **outside** JSX or wrapped within a function.

---

### ❓ What is `CORS`?

**CORS (Cross-Origin Resource Sharing)** is a security feature implemented by browsers that restricts web pages from making requests to a different domain unless explicitly allowed by the server.

🧩 Example:
If your frontend app is hosted at `example.com`, it cannot make requests to `api.example2.com` unless the backend sends the proper CORS headers.

---

### ❓ What are `async` and `await`?

* **`async`**: Used to define a function that returns a Promise. It allows asynchronous code to be written like synchronous code.
* **`await`**: Pauses the execution inside an `async` function until the Promise resolves.

Example:

```js
async function getRestaurants() {
  const data = await fetch("FOOD_API_URL");
  const json = await data.json();
  console.log(json);
}
```

> `await` can only be used inside `async` functions.

---

### ❓ Why do we use `const json = await data.json()` in `getRestaurants()`?

The `fetch()` function returns a `Response` object. To extract the actual JSON body data, we use:

```js
const json = await data.json();
```

* `data.json()` is an asynchronous method that returns a Promise resolved with the parsed JSON.
* `await` ensures we wait for the JSON parsing to complete before using it.

---