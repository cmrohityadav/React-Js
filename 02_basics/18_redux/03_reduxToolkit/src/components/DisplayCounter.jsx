import React from 'react'
import { useSelector } from 'react-redux'

function DisplayCounter() {
    // const counter=useSelector(store=>store.counter)
    // console.log(counter)
    // console.log(counter.counterVal)
    const {counterVal}=useSelector(store=>store.counter)
    // console.log(counterVal)
  return (
   <>
     <p className="lead mb-4 ">
        counter current value: {counterVal}
     </p>
   </>
  )
}

export default DisplayCounter