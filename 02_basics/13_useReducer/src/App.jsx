import React, { useReducer, useState } from 'react'
import AppName from './components/AppName'
import "./App.css"

import TodoItems from './components/TodoItems'
import AddTODO from './components/AddTODO'
import WelcomeMsg from './components/WelcomeMsg'
import { TodoItemsContext } from './store/todoItemsStore'

const todoItemReducer=(state,action)=>{

  let newTodoItems=state;
  if(action.type==='NEW_ITEM'){
    newTodoItems=[...state,{name:action.payload.itemName,dueDate:action.payload.itemDueDate}]

  }else if(action.type==='DELETE_ITEM'){
    newTodoItems=state.filter((item)=>item.name!==action.payload.itemName)
    
  }
  return newTodoItems;
}
function App() {

  // const [todoItems, setTodoItems] = useState([]);

  const [todoItems,dispatchTodoItem]=useReducer(todoItemReducer,[]);


  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction={
      type:'NEW_ITEM',
      payload:{
        itemName,
        itemDueDate
      }
    };
    dispatchTodoItem(newItemAction)

   /* console.log(`new item added: ${itemName}  Date: ${itemDueDate}`)

    const newTodoArray = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoArray);*/

  }

  const deleteItem = (todoItemName) => {
    console.log(`Item Deleted: ${todoItemName}`)

    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
    // setTodoItems(newTodoItems)

    const deleteItemAction={
      type:'DELETE_ITEM',
      payload:{
        itemName:todoItemName
        
      }
    };
    dispatchTodoItem(deleteItemAction)
  }

  

  return (

    <>
      <TodoItemsContext.Provider value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem
      }}>
        <center className='todoConatainer'>

          <AppName />
          <AddTODO />
          <WelcomeMsg />
          <TodoItems />


        </center>
      </TodoItemsContext.Provider>
    </>
  )
}

export default App