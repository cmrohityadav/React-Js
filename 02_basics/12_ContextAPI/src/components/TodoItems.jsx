import React, { useContext } from 'react'
import TodoItem from './TodoItem'
import AddTODO from './AddTODO'
import style from "./TodoItems.module.css"
import { TodoItemsContext } from '../store/todoItemsStore'

function TodoItems() {

   const {todoItems,deleteItem}= useContext(TodoItemsContext)
    
    return (
        <>

            <div className={style.itemContainer}>


      
                {todoItems.map((i)=> <TodoItem todoDate={i.dueDate} todoName={i.name}
                 
                  key={i.name}
                
                 /> )}
               






            </div>
        </>
    )
}

export default TodoItems