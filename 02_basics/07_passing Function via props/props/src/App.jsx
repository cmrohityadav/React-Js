import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItem from './components/FoodItem'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'


function App() {

  const foodItem = ['milk', "ghee", "nimbu pan", "bhang", "milk shake"]
  // const foodItem=[]
  let textToShow="Food Item Entered by User";

  const handleOnChange=(event)=>{
    console.log(event.target.value);
    textToShow=event.target.value;
  }
  return (
    <>

      <Container>
        <h1>
          Healthy Drink
        </h1>
        <ErrorMsg pilo={foodItem} />
        <FoodInput handleOnChange={(event)=>handleOnChange(event)}/>
        <p>{textToShow}</p>
        <FoodItem pilo={foodItem} />


      </Container>
      {/* <Container>

        <p>Above is the list of healthy foods that are good for
        your health and well being
        </p>
      </Container> */}




    </>



  )
}

export default App