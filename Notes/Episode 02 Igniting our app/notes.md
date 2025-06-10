# 🔥 Igniting Our App Theory

---

### ❓ What is NPM?

**A:**
NPM (Node Package Manager) is the default package manager for Node.js projects. It is installed automatically when Node.js is installed. NPM provides a command-line interface (CLI) to interact with the **NPM Registry**—a vast database of public and private packages (libraries).

You can use NPM to:

* Install packages:

  ```bash
  npm install package-name
  ```

* Update packages

* Manage dependencies

**Alternative:** Yarn is another popular package manager with similar functionality.

---

### ❓ What is NPX?

**A:**
`npx` is a package runner tool that comes with NPM (version 5.2+). Unlike `npm`, which installs packages, `npx` is used to **execute packages directly** without installing them globally.

**Example:**
To install Parcel:

```bash
npm install parcel
```

To execute Parcel without installing globally:

```bash
npx parcel index.html
```

---

### ❓ Dependencies vs DevDependencies in `package.json`

**A:**

* **Dependencies (`dependencies`)**: Required **at runtime** for the app to function.
  *Example:* `react`, `express`, `axios`

* **DevDependencies (`devDependencies`)**: Needed only **during development**.
  *Example:* `parcel`, `webpack`, `vite`, `eslint`

**Command to install as a devDependency:**

```bash
npm install --save-dev package-name
# or shorthand
npm i -D package-name
```

---

### ❓ What is a Transitive Dependency?

**A:**
A **transitive dependency** is a dependency of another dependency.
For example, if `parcel` depends on `babel`, and your app depends on `parcel`, then `babel` is a transitive dependency.

---

### ❓ `package.json` vs `package-lock.json`

#### `package.json`:

* Created via `npm init`
* Stores project metadata: `name`, `version`, `author`, `license`, etc.
* Lists dependencies and devDependencies
* Can define custom scripts

**Example:**

```json
{
  "name": "igniting-app",
  "version": "1.0.0",
  "scripts": {
    "start": "parcel index.html"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "parcel": "^2.9.3"
  }
}
```

#### `package-lock.json`:

* Auto-generated
* Records **exact versions** of installed dependencies and sub-dependencies
* Ensures consistent installs across environments

---

### ❓ What is the `node_modules` folder?

**A:**
When you install packages using NPM, they are stored in the `node_modules` folder. This is where all project dependencies are physically located.

---

### ❓ What is Parcel Bundler? Why do we need it?

**A:**
Parcel is a **zero-configuration web application bundler**. It compiles, bundles, and optimizes your code for both development and production builds.

#### 🔧 Key Features:

* HMR (Hot Module Replacement)
* File Watcher (written in C++ for performance)
* Minification & Compression
* Caching for faster rebuilds
* Automatic Code Splitting
* Tree Shaking
* Production & Development Builds
* Image Optimization
* HTTPS support in dev
* Legacy Browser Compatibility
* Consistent Hashing

---

### ❓ What is Tree Shaking?

**A:**
Tree shaking is a **dead code elimination** technique. It removes unused functions and variables during the build process, reducing bundle size and improving performance.

---

### ❓ What is `.parcel-cache`?

**A:**
`.parcel-cache` is a cache folder used by Parcel to **speed up builds**. It stores parsed and compiled data so Parcel doesn’t have to reprocess everything on each build.

---
