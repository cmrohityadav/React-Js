import React, { useState,useRef } from 'react'
import { FaCalendarPlus } from "react-icons/fa6";


function AddTODO({ onNewItem }) {
  /*use ref variable update hota hai par re-render nhi hota dom
  useState se ui update hota hai re-render hota hai har ek change par
  */
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  // const noOfUpdates=useRef(0);
  /* const handleNameChange = (event) => {
    // console.log(event)
    // console.log(event.target.value)
    setTodoName(event.target.value);
    noOfUpdates.current+=1;
    
    
  };
  const handleDateChange = (event) => {
    // console.log(event.target.value)
    setDueDate(event.target.value);
    console.log(`noOfUpdates are : ${noOfUpdates.current}`)
  };*/
  const todoNameElement=useRef();
  const dueDateElement=useRef();
  const handleAddButtonClick = (event) => {
    event.preventDefault();
    let todoName=todoNameElement.current.value;
    let dueDate=dueDateElement.current.value;
    onNewItem(todoName, dueDate);
    todoNameElement.current.value=""
    dueDateElement.current.value=""
  }

  return (
    <>

      <form 
        onSubmit={handleAddButtonClick}
       className="row">
      
        <div className="col-6">
          <input type='text' 
          ref={todoNameElement}
          placeholder='Writer TODO Here'
        
      

          >

          </input>
        </div>

        <div className="col-4">
          <input type="date" name="" id=""
          
           
            ref={dueDateElement}
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