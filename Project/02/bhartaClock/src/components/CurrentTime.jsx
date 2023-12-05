import React from 'react'

function CurrentTime() {
    let time=new Date();


  return (<>

    <div><p className='lead'>This is the Today Date : {time.toLocaleDateString()}</p></div>
    <div className='lead'>This is the current Time : {time.toLocaleTimeString()}</div>
  </>
  )
}

export default CurrentTime