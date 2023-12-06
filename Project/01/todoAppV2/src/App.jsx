import React from 'react'
import AppName from './components/AppName'
import "./App.css"

import TodoItems from './components/TodoItems'
function App() {

  const todoItems = [{ name: 'Buy Milk', dueDate: '3/10/2023' },
  { name: 'go to college', dueDate: '4/10/2023' },
  { name: ' coding', dueDate: '5/10/2023' }]
  return (
    <>
      <center className='todoConatainer'>

        <AppName />
        <TodoItems  todoItems={todoItems}/>
        
       
      </center>
    </>
  )
}

export default App