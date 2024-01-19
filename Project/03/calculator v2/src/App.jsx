import React, { useCallback, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import styles from './App.module.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'

function App() {
  let [calVal,setCalVal]=useState("r");
const onButtonClick=(buttonName)=> {

  if(buttonName==='C'){
    setCalVal("");
  }else if(buttonName==='='){
      const result=eval(calVal);
      setCalVal(result);
  }else{
    const newDisplayValue=calVal+buttonName
    setCalVal(newDisplayValue);
  }
}
  return (
    <div  className={styles.calculator}>
      <Display

        displayValue={calVal}
      />

      <ButtonContainer
        onButtonClick={onButtonClick}


      />

    </div>
  )
}

export default App