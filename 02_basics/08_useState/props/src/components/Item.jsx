import React from 'react'
import styles from "./Item.module.css"
function Item({foodItem,handleBuyButton,bought}) {

    
    return (
        <>
            <li  className="list-group-item">{foodItem}
            
            <button
            className={`${styles.button} btn btn-info`}
           
            onClick={handleBuyButton}
            


            >Buy</button>
            </li>
        </>
    )
}

export default Item