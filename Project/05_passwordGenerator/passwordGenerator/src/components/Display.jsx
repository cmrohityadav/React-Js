import React from 'react'

function Display({copyPasswordToClipboard,password,passwordRef}) {
    return (
        <><div className='mx-3 flex justify-center mt-5 '> 
              <input  className='h-10 '
              type="text"
            value={password}
        
            placeholder="Password"
            readOnly
           

            ref={passwordRef}
             />
            <button className='px-2 hover:bg-sky-700 bg-blue-700' onClick={copyPasswordToClipboard}> Click To Copy</button>
            
            </div>


        </>
    )
}

export default Display