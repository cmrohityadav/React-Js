import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

function Controls() {

    const dispatch = useDispatch();

    const inputElementRef=useRef()


    const handleIncreament = () => {
        dispatch({
            type: 'INCREAMENT'
        })
    };

    const handleDecreament = () => {
        dispatch({
            type: 'DECREAMENT'
        })
    };
    const handleAdd = () => {
        dispatch({
            type: 'ADD',
            payload:{
                num: inputElementRef.current.value,
            }
        })
        inputElementRef.current.value=""
    };
    const handleSub = () => {
       
        dispatch({
            type: 'SUB',
            payload:{
                num: inputElementRef.current.value,
            }
        })
        inputElementRef.current.value=""
    };
    const handlePrivacyToggle = () => {
       
        dispatch({
            type: 'PRIVACY_TOGGLE',
            
        })
       
    };

    return (
        <>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-primary btn-lg px-4 gap-3"
                    onClick={handleIncreament}
                >+1</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4"
                    onClick={handleDecreament}
                >-1</button>
                <button type="button" className="btn btn-warning"
                onClick={handlePrivacyToggle}
                >Privacy</button>
            </div>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-2">
                <input type="text"
                    placeholder='  Enter Number'
                    ref={inputElementRef}
                />
                <button type="button" className="btn btn-outline-secondary btn-lg px-4 btn-success text-light "
                onClick={handleAdd}
                >Add</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4 btn-success text-light "
                
                onClick={handleSub}
                >Sub</button>


            </div>
        </>
    )
}

export default Controls