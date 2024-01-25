import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItem from './components/FoodItem'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'


function App() {

  // const foodItem = ['milk', "ghee", "nimbu pan", "bhang", "milk shake"]
  // // const foodItem=[]

  let [textState,setTextState]=useState("Food Item Entered by User");


  // other part
  let [foodItem,setFoodItem]=useState(['milk', "ghee", "nimbu pan"])

  const handleOnChange=(event)=>{
    console.log(event.target.value);
    setTextState(event.target.value)
    
  }
  const onKeyDown=(event)=>{
    if(event.key==="Enter"){
      let newFoodItem=event.target.value;
      console.log("food entered value is  "+newFoodItem);
      let newArray=[...foodItem,newFoodItem];
      setFoodItem(newArray);
    }
    console.log(event);
    setTextState(event.target.value)
    
  }
  return (
    <>

      <Container>
        <h1>
          Healthy Drink
        </h1>
        <ErrorMsg pilo={foodItem} />
        <FoodInput handleOnChange={(event)=>handleOnChange(event)} handleKeyDown={onKeyDown}/>
        <p>{textState}</p>
        <FoodItem pilo={foodItem} />


      </Container>
      <Container>

        <p>Above is the list of healthy foods that are good for
        your health and well being
        </p>
      </Container>




    </>



  )
}

export default App