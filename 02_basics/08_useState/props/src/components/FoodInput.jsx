import React from 'react'
import styles from "./FoodInput.module.css"
function FoodInput({handleOnChange,handleKeyDown}) {
  
  return (


    <>

      <input
        type='text'
        placeholder='Enter Food Item Here'
        className={styles.foodInput}
      // onChange={(event)=> console.log(event.target.value)}
      // or
      onChange={handleOnChange}
      onKeyDown={handleKeyDown}


      />


    </>
  )
}

export default FoodInput