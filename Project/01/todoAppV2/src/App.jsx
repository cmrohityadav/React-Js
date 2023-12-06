import React from 'react'
import AppName from './components/AppName'
import AddTODO from './components/AddTODO'
import TodoItem1 from './components/TodoItem1'
import TodoItem2 from './components/TodoItem2'
import "./App.css"
function App() {
  return (
    <>
      <center className='todoConatainer'>
        {/* <h1>TODO APP</h1>
         */}
         <AppName/>

        <div class="container text-center">
          {/* <div class="row">
            <div class="col-6">
              <input type='text' placeholder='Wnter TODO Here'



              >

              </input>
            </div>

            <div class="col-4">
              <input type="date" name="" id="" />
            </div>


            <div class="col-2">
              <button type="button" class="btn btn-success">Add</button>
            </div>
          </div> */}

          <AddTODO/>
          <AddTODO/>

          {/* 2nd row */}


          {/* <div class="row">
            <div class="col-6">
              Book






            </div>

            <div class="col-4">
              04-12-2023
            </div>


            <div class="col-2">
              <button type="button" class="btn btn-danger">Danger</button>
            </div>
          </div> */}

          <TodoItem1/>
          <TodoItem1/>

          {/* 3nd row */}

          {/* <div class="row">
            <div class="col-6">
              Coding






            </div>

            <div class="col-4">
              04-12-2023
            </div>


            <div class="col-2">
              <button type="button" class="btn btn-danger">Danger</button>
            </div>
          </div> */}

          <TodoItem2/>
          
          

        </div>
      </center>
    </>
  )
}

export default App