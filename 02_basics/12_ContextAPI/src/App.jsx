import React, { useState } from 'react'
import AppName from './components/AppName'
import "./App.css"

import TodoItems from './components/TodoItems'
import AddTODO from './components/AddTODO'
import WelcomeMsg from './components/WelcomeMsg'
import { TodoItemsContext } from './store/todoItemsStore'
function App() {

  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    console.log(`new item added: ${itemName}  Date: ${itemDueDate}`)

    const newTodoArray = [...todoItems, { name: itemName, dueDate: itemDueDate }]
    setTodoItems(newTodoArray);
  }

  const deleteItem = (todoItemName) => {
    console.log(`Item Deleted: ${todoItemName}`)

    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName)
    setTodoItems(newTodoItems)
  }

  // const defaultTodoItem=[{name:'buy ghee',dueDate:'todoy'}]

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