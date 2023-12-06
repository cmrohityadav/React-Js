import React from 'react'

function AddTODO() {
  return (
    <>

<div className="row">
            <div className="col-6">
              <input type='text' placeholder='Wnter TODO Here'



              >

              </input>
            </div>

            <div className="col-4">
              <input type="date" name="" id="" />
            </div>


            <div className="col-2">
              <button type="button" className="btn btn-success">Add</button>
            </div>
          </div>
    </>
  )
}

export default AddTODO