import React, { useContext } from 'react'
import { TodoItemsContext } from '../store/todoItemsStore'

function TodoItem({todoDate,todoName,}) {


  const {deleteItem}=useContext(TodoItemsContext)
  return (
   <>
    <div className="row">
            <div className="col-6">
            {todoName}






            </div>

            <div className="col-4">
             {todoDate}
            </div>


            <div className="col-2">
              <button type="button" className="btn btn-danger"
              onClick={()=>  deleteItem(todoName)}
              >Delete</button>
            </div>
          </div>
   </>
  )
}

export default TodoItem