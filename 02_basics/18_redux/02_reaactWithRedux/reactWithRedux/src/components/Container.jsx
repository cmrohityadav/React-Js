import React from 'react'

function Container({children}) {
  return (
 <>

<div className="card" style={{width: "25rem"}}>

  <div className="card-body">
    {children}
</div>
</div>
 </>
  )
}

export default Container