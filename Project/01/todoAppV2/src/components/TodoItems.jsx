import React from 'react'
import TodoItem from './TodoItem'
import AddTODO from './AddTODO'
import style from "./TodoItems.module.css"

function TodoItems({ todoItems }) {
    // console.log(todoItems)
    return (
        <>

            <div className={style.itemContainer}>


                <AddTODO />
                {todoItems.map((i)=> <TodoItem todoDate={i.dueDate} todoName={i.name} /> )}
                <TodoItem todoDate={'06-12-2023'} todoName={'coding'} />
                <TodoItem todoDate={'07-12-2023'} todoName={'cricket'} />






            </div>
        </>
    )
}

export default TodoItems