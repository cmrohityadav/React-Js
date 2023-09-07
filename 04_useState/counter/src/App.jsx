import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=15;
  // const addValue=()=>{

  //   console.log("value added",Math.random())
  //   console.log("click",counter)

  //   counter++;
  // }







  //usestate

 let [number,updateNumber]= useState(0)

 const addValue=()=>{

   updateNumber(number+1)
   console.log("click",number)

   //interview
  //  updateNumber(number+1)
  //  updateNumber(number+1)

  //  updateNumber(number+1)
 updateNumber((prevCounter)=> prevCounter+1)



  }

  const remValue=()=>{

    updateNumber(number-1)
   console.log("click",number)

   

  }
  return (
    <>
       {/* <h1>Counter</h1>
       <h2>Couner value: {counter}</h2>
       <button onClick={addValue}>Increament</button>
       <br />
       <button>Decreament</button> */}
       <h1>Counter</h1>
       <h2>Couner value: {number}</h2>
       <button onClick={addValue}>Increament {number} by 1</button>
       <br />
       <button onClick={remValue}>Decreament {number} by 1</button>

    </>
  )
}

export default App
