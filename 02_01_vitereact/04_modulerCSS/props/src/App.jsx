import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import FoodItem from './components/FoodItem'
import ErrorMsg from './components/ErrorMsg'
import "./App.css"


function App() {
  
  const foodItem=['milk',"ghee","nimbu pan","bhang","milk shake"]
  // const foodItem=[]
  return (
    <>
      <h1 className='foodHeading'>
        Healthy Drink
      </h1>
      <ErrorMsg pilo={foodItem}/>
      
      <FoodItem   pilo={foodItem}/>

     


    </>



  )
}

export default App