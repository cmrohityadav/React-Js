import React from 'react'
import Item from './Item'

function FoodItem({pilo}) {
    

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">water</li>

                {pilo.map((item) =><Item key={item}  foodItem={item} 
                    handleBuyButton={()=> console.log(`${item} bought `)}
                
                >

                </Item> )}

            </ul>
        </>
    )
}

export default FoodItem