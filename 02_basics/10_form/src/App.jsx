import React, { useState } from 'react'
import AppName from './components/AppName'
import "./App.css"

import TodoItems from './components/TodoItems'
import AddTODO from './components/AddTODO'
import WelcomeMsg from './components/WelcomeMsg'
function App() {

  // const todoItemsArray = [{ name: 'Buy Milk', dueDate: '3/10/2023' },
  // { name: 'go to college', dueDate: '4/10/2023' },
  // { name: ' coding', dueDate: '5/10/2023' }]

  // const [todoItems,setTodoItems]=useState(todoItemsArray);
  const [todoItems,setTodoItems]=useState([]);
  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`new item added: ${itemName}  Date: ${itemDueDate}`)

    const newTodoArray=[...todoItems,{name:itemName,dueDate:itemDueDate}]
    setTodoItems(newTodoArray);
  }

  const handleDeleteItem=(todoItemName)=>{
        console.log(`Item Deleted: ${todoItemName}`)

        const newTodoItems=todoItems.filter((item)=> item.name!==todoItemName)
        setTodoItems(newTodoItems)
  }

  return (
    <>
      <center className='todoConatainer'>

        <AppName  />
        <AddTODO onNewItem={handleNewItem} />
       {todoItems.length ===0 &&  <WelcomeMsg/>}
        <TodoItems  todoItems={todoItems}
          onDeleteClick={handleDeleteItem}

        />
        
       
      </center>
    </>
  )
}

export default App