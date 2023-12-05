import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Sponsor from './Sponsor'

function App() {
  // const drinkItem=[];
  const drinkItem=['milk',"ghee","nimbu pan","bhang","milk shake"]
  return (
    <React.Fragment>

      <h1>
        Healthy Food
      </h1>
      <ul className="list-group">
        <li className="list-group-item">Daal</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">milk</li>
        <li className="list-group-item">roti</li>
        <li className="list-group-item">chawl</li>
      </ul>

      <Sponsor/>

      <h1>
        Healthy Drink
      </h1>
      {drinkItem.length===0 ? <h3>NOT avaliable drinks</h3>:null}
      <ul className="list-group">
        <li className="list-group-item">water</li>
      
        {drinkItem.map((item)=><li key={item} className="list-group-item">{item}</li>)}
       
      </ul>

     


    </React.Fragment>



  )
}

export default App