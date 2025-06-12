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
