import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addStore, deleteList, editId } from '../store/todoSlice';
import { useNavigate } from 'react-router-dom';
import confAPI from '../../confi.js'


function Home() {
  const dispatch = useDispatch()
  const todoList = useSelector((state) => state.detailTodo.details)

  // console.log("this", todoList)

  const navigate = useNavigate()
  const handleDelete = (id) => {
    fetch(`${confAPI.mockApiKey}/${id}`, {
      method: 'DELETE',
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(task => {

    }).catch(error => {
      // handle error
    })
    dispatch(deleteList(id))


  }
  useEffect(() => {



    fetch('https://65c76c40e7c384aada6e8273.mockapi.io/detail', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    }).then(res => {
      if (res.ok) {
        return res.json();
      }
      // handle error
    }).then(tasks => {
      // console.log(tasks)
      dispatch(addStore(tasks))


    }).catch(error => {
      console.log(error)
    })
  }, [])

  const onEdit=(id,eachName,eachEmail)=>{
 
    dispatch(editId({id:id,name:eachName,email:eachEmail}));
    navigate('/editPost');
    


    
  }
  return (
    <>


      <div className="relative rounded-xl overflow-auto"><div className="shadow-sm overflow-hidden my-8">
        <table className="border-collapse table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-blue-300 text-center ">Sr. No.</th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-blue-300  text-center">Name</th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-blue-300  text-center" >Email</th>
              <th className="border-b dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left bg-blue-300  text-center" colSpan={2}>Actions</th>
             
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800">

            {todoList && todoList.map((eachList) => (
              <tr key={eachList.id}>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{eachList.id}</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">{eachList.name}</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">{eachList.email}</td>
                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><a
                  className="inline-block rounded border border-green-800 bg-green-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
                  
                 onClick={()=>onEdit(eachList.id,eachList.name,eachList.email)}
                  

                >
                Edit
                </a></td>
            

                <td className="border-b border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400"><a
                  className="inline-block rounded border border-red-800 bg-red-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
                  onClick={() => handleDelete(eachList.id)}
                 
                >
                 Delete
                </a></td>

              </tr>
            ))}

          </tbody>
        </table>
      </div>
        <button onClick={() => navigate('/post')}   className="inline-block rounded   mt-4  border border-red-800 bg-orange-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer">ADD NEW</button>
      </div>
    </>
  )
}

export default Home
