import React from 'react'
import styles from "./Item.module.css"
function Item({foodItem}) {
    // console.log(props);
    // let {foodItem}=props;
    // console.log(foodItem)
   
    // const handleBuy=(foodItem)=>{
    //     console.log(`clicked ${foodItem}`)

    // }

    const handleBuy=(event)=>{
        console.log(event)
        console.log(`clicked ${foodItem}`)

    }
    return (
        <>
            <li  className="list-group-item">{foodItem}
            
            <button
            className={`${styles.button} btn btn-info`}
            // onClick={()=> console.log(`clicked ${props.foodItem}`)}
                // onClick={()=> hadleBuy(foodItem)}
            // onClick={handleBuy}
            onClick={(event)=> handleBuy(event)}


            >Buy</button>
            </li>
        </>
    )
}

export default Item