import React from 'react'
import Item from './Item'

function FoodItem({pilo}) {
    // console.log(pilo)

    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">water</li>

                {pilo.map((item) =><Item key={item}  foodItem={item}></Item> )}

            </ul>
        </>
    )
}

export default FoodItem