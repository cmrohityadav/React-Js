import React, { useEffect, useState } from 'react'

function CurrentTime() {
  const [time,setTime]=useState(new Date());
   
useEffect(()=>{
  const intervalID=setInterval(()=>{
    setTime(new Date())
  },1000)

  return ()=>{
    clearInterval(intervalID)
  }
},[])

  return (<>

    <div><p className='lead'>This is the Today Date : {time.toLocaleDateString()}</p></div>
    <div className='lead'>This is the current Time : {time.toLocaleTimeString()}</div>
  </>
  )
}

export default CurrentTime