import React from 'react'
import "./App.css"
import Heading from './components/Heading'
import Slogan from './components/Slogan'
import CurrentTime from './components/CurrentTime';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
   <><center>
    <Heading/>
    <Slogan/>
    <CurrentTime/>
   </center>
    

   </>
  )
}

export default App