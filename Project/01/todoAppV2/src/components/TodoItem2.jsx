import React from 'react'

function TodoItem2() {

  let todoDate="12-12-2024";
  let todoName="play game";
  return (
   <>
    <div class="row">
            <div class="col-6">
            {todoName}






            </div>

            <div class="col-4">
             {todoDate}
            </div>


            <div class="col-2">
              <button type="button" class="btn btn-danger">Delete</button>
            </div>
          </div>
   </>
  )
}

export default TodoItem2