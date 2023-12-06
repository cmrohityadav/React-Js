import React from 'react'
import styles from "./Item.module.css"

function Item(props) {
    // console.log(props);
    // let {foodItem}=props;
    // console.log(foodItem)
    return (
        <>
            <li  className= {styles.kgItem}>
            <span className={styles.kgSpan} >{props.foodItem}</span></li>
        </>
    )
}

export default Item