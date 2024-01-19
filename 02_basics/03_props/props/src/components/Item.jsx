import React from 'react'

function Item(props) {
    console.log(props);
    // let {foodItem}=props;
    // console.log(foodItem)
    return (
        <>
            <li  className="list-group-item">{props.foodItem}</li>
        </>
    )
}

export default Item