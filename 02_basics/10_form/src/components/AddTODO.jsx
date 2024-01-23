import React, { useState,useRef } from 'react'
import { FaCalendarPlus } from "react-icons/fa6";


function AddTODO({ onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    // console.log(event)
    // console.log(event.target.value)
    setTodoName(event.target.value)
  };
  const handleDateChange = (event) => {
    // console.log(event.target.value)
    setDueDate(event.target.value)
  };
  const handleAddButtonClick = (event) => {
    onNewItem(todoName, dueDate);
    // after add button , we have make screen blank for new todolist
    setDueDate("");
    setTodoName("");
    event.preventDefault();
    console.log(event)
  }

  return (
    <>

      <form 
        onSubmit={handleAddButtonClick}
       className="row">
      
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
          <button type="submit" className="btn btn-success"
            // onClick={() => onNewItem("a", "b")}
            // onSubmit={handleAddButtonClick}
            // onClick={handleAddButtonClick}


          >
            {/* ADD */}

            <FaCalendarPlus />
          </button>
        </div>
        
      </form>
    </>
  )
}

export default AddTODO