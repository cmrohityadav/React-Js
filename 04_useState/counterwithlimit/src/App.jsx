import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [count, setCount] = useState(0)
 
  //add
  const add=()=>{
    
    if(count<20)  setCount(++count)
  }

  //remove
  const rem=()=>{
    if(count>0) setCount(--count)
   
  }

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={add}>+1</button>
      <br />
      <button onClick={rem}>-1</button>
    </>
  )
}

export default App
