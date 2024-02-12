import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import confAPI from '../../confi'

function EditPost() {
    const listDetail = useSelector((state) => state.detailTodo.idDetail);

    
    const navigate = useNavigate();
   

    

    const [name, setName] = useState(listDetail.name);
    const [email, setEmail] = useState(listDetail.email);
    const handleUpdate = (e) => {
        e.preventDefault();
       

        
            fetch(`${confAPI.mockApiKey}/${listDetail.id}`, {
                method: 'PUT',
                headers: { 'content-type': 'application/json' },
                // Send your data in the request body as JSON
                body: JSON.stringify({name:name,email:email})
            }).then(res => {
                if (res.ok) {
                    return res.json();
                }
                // handle error
            }).then(task => {
                // console.log(task)
                navigate('/home')
            }).catch(error => {
                // handle error
                console.log(error)
            })
       


    }

    return (
        <>
            <form onSubmit={handleUpdate} >
                <div className="lx yz ze alm aqv">
                    <div className="gx tn ul">
                        <div className="adu are asi aut bbm bbs bbw bce bgy bhd">
                            <label htmlFor="name" className="lu awb awd axu mx-2 ">Name:</label>
                            <input type="text" id="name" className="lu tn afa aqj axu bgc bnb cia cic" placeholder="name"
                                value={name}
                              
                                onChange={(e) => setName(e.target.value)}

                            />
                            {console.log(name,email)}
                        </div>
                    </div>
                    <div className="gx tn ul mt-3">
                        <div className="adu are asi aut bbm bbs bbw bce bgy bhd">
                            <label htmlFor="email" className="lu awb awd axu mx-2">Email:</label>
                            <input type="text" id="email" className="lu tn afa aqj axu bgc bnb cia cic" placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <button type='submit' className='inline-block rounded border mt-4  border-red-800 bg-red-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer' >Update</button>
                </div>
            </form>
            <a
                className="inline-block rounded   mt-4  border border-red-800 bg-red-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 cursor-pointer"
                onClick={() => navigate('/home')}

            >
                Back
            </a>

        </>
    )
}

export default EditPost