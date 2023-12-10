import React from 'react'
import styles from "./FoodInput.module.css"
function FoodInput() {
  const handleOnChange=(event)=>{
    console.log(event.target.value)
  }
  return (


    <>

      <input
        type='text'
        placeholder='Enter Food Item Here'
        className={styles.foodInput}
      // onChange={(event)=> console.log(event.target.value)}
      // or
      onChange={handleOnChange}


      />


    </>
  )
}

export default FoodInput