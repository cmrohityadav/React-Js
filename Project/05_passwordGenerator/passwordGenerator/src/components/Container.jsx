import React from 'react'

function Container({ children }) {
    return (
        <>
            <div className='container mx-auto bg-stone-700 max-h-full h-screen'>
                {children}


            </div>
        </>
    )
}

export default Container