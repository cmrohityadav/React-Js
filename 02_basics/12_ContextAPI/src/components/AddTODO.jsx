import React, { useContext, useState } from 'react'
import { TodoItemsContext } from '../store/todoItemsStore';

function AddTODO() {
  const {addNewItem}= useContext(TodoItemsContext)
    

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange=(event)=>{
    
    setTodoName(event.target.value)
  };
  const handleDateChange=(event)=>{
    
    setDueDate(event.target.value)
  };
const handleAddButtonClick=()=>{
  addNewItem(todoName,dueDate);
  // after add button , we have make screen blank for new todolist
  setDueDate("");
  setTodoName("");
}

  return (
    <>

      <div className="row">
        <div className="col-6">
          <input type='text' placeholder='Writer TODO Here'
            onChange={handleNameChange}
    value={todoName}

          >

          </input>
        </div>

        <div className="col-4">
          <input type="date" name="" id=""
            onChange={handleDateChange}
            value={dueDate}
           />
        </div>


        <div className="col-2">
          <button type="button" className="btn btn-success"
            // onClick={() => onNewItem("a", "b")}
            onClick={handleAddButtonClick}
          >Add</button>
        </div>
      </div>
    </>
  )
}

export default AddTODO