# Installtion
## Without Framework 
```bash
npm create vite@latest
```

# JSX 
- JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file
- ** Return a single root element**
- for more refer docs
- wrong example, to correct: just single element or <> </> (fragment)
```jsx
export default function Bio() {
  return (
    <div class="intro">
      <h1>Welcome to my website!</h1>
    </div>
    <p class="summary">
      You can find my thoughts here.
      <br><br>
      <b>And <i>pictures</b></i> of scientists!
    </p>
  );
}

```

# Props
- prop is object 
- destruture it
```jsx
// parent to child

// parent component
function Parent(){
    return(
        const name="rohit"
        <>
         <h1>Hello</h1>
         <Profile infoName={name} age={20} />
        </>
    )
   

}

// child
function Profile(props){
    cosole.log(props)
    return(
        <>
        <h1>Child hu</h1>
        </>
    )
}

// output: {infoname:rohit,age:20

// destructure
Profile({infoName,age})
```


# CSS
## external css
```jsx
import './xyz.css'
function Profile(){
    
    return(
        <>
        <h1 className='hello'>Child hu</h1>
        </>
    )
}

```

```css
.hello{
    color:'red',
}

```

## Modular css

```jsx
import styles from "./Item.module.css";
import './styles.css';

function Profile() {
    return (
        <h1 className={`${styles.header} ${styles.large} anyCSSClass text-blue-500 text-xl`}
        style={{ color: 'blue', fontSize: '24px' }}
        >
            Child hu
        </h1>
    );
}

```

# Hooks
- Hooks are special functions that let you "hook into" React features—like state and lifecycle methods—from function components
## Rules
- Only call Hooks at the top level (not inside loops, conditions, or nested functions).
```jsx
//wrong
function MyComponent() {
  if (true) {
    const [count, setCount] = useState(0); // ❌
  }
}

//right
function MyComponent() {
  const [count, setCount] = useState(0); // ✅
}

```

- Only call Hooks from React functions (functional components or custom Hooks).
```jsx

function regularFunction() {
  const [x, setX] = useState(0); // ❌
}

function useCustomHook() {
  const [x, setX] = useState(0); // ✅
  return [x, setX];
}
```
# context api
- React's Context API is a way to share data globally across components without having to pass props manually at every level (prop drilling)

```js
// GlobalContext.js

import React, { createContext, useState } from "react";

// Create Context
export const GlobalContext = createContext();

```

```jsx
// GlobalContextProvider.jsx

import React, { useState } from "react";
import { GlobalContext } from "./GlobalContext"; // Import the context

export const GlobalContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <GlobalContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};


```

```jsx
// index.jsx or main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalContextProvider } from "./context/GlobalContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);


```

```jsx
// App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      <Login />
    </div>
  );
}

export default App;
```

```jsx
// Navbar.jsx

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(GlobalContext);

  return (
    <nav>
      <h1>My App</h1>
      {isLoggedIn ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <span>Please log in</span>
      )}
    </nav>
  );
};

export default Navbar;


```


```jsx
// Login.js

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Login = () => {
  const { login } = useContext(GlobalContext);

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default Login;

```

