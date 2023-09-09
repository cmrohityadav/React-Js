import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {joKahaHaiWahiLenaID}=useParams()
  return (
    <div className='bg-blue-800 text-white text-3xl
    '>User:{joKahaHaiWahiLenaID} </div>
  )
}

export default User