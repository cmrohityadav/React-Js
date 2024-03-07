import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
   <>
   <div className="App  h-[100vh]  flex justify-center items-center">
        <Outlet/>
    </div>
    
   </>
  )
}

export default Layout