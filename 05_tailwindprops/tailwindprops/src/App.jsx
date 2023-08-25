import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"rohit",
    age:21,
    isLogin:true
  }
  let num=[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-2'>Tailwind Test</h1>
      {/* <Card channel="cmrohityadav" anyObject={myObj}  anyarray={num}/> */}
      <Card username="Rohit" btnText="View Me"/>
      <Card userage="21" username="Don"  btnText="View Me"/>
      
      <Card/>
      
      
      {/* commented codes */}
      {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/3532553/pexels-photo-3532553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"/>
          <div class="pt-6 space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div>
                Sarah Dayan
              </div>
              <div>
                Staff Engineer, Algolia
              </div>
            </figcaption>
          </div>
      </figure> */}

      {/* <div class="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          class="z-0 h-full w-full rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">Delba</h1>
          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div> */}
    </>
  )
}

export default App
