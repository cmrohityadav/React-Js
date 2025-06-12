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

# 
