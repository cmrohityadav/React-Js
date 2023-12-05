import React from 'react'

function ErrorMsg({pilo}) {
//    console.log(pilo)


    return (
        <>

            {pilo.length === 0 ? <h3>NOT avaliable drinks</h3> : null}
        </>
    )
}

export default ErrorMsg