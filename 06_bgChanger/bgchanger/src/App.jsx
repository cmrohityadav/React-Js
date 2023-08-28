import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>



      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadoe-lg bg-white rounded-3xl py-2 px-3'>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "red" }}
          onClick={()=> setColor("red")}>
            Red
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "blue" }} 
          onClick={()=> setColor("blue")}>
            Blue
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "orange" }} 
          onClick={()=> setColor("Orange")}>
            Orange
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "green" }} 
          onClick={()=> setColor("Green")}>
            Green
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Gray" }} 
          onClick={()=> setColor("Gray")}>
            Gray
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "yellow" }} 
          onClick={()=> setColor("yellow")}>
            Yellow
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Pink" }} 
          onClick={()=> setColor("Pink")}>
            Pink
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "Purple" }} 
          onClick={()=> setColor("Purple")}>
            Purple
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "lightblue" }} 
          onClick={()=> setColor("lightblue")}>
            lightblue
          </button>
          <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{ backgroundColor: "black" }} 
          onClick={()=> setColor("black")}>
            black
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
