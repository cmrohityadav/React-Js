import Chai from "./chai"
function App() {
  const user="cmrohit"
  const num1=5;
  const num2=4;
  return (
    <>
    {/* <></> fragment */}

    
    <Chai/> 
    <h1>Hello world</h1>
    <p>hello {user}</p>
    <p>hii {num1+num2}</p>
    </>
  )
}

export default App
