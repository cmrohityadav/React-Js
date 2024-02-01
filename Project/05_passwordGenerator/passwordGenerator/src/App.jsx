import Heading from './components/Heading'
import Container from './components/Container'
import Display from './components/Display'
import Controls from './components/Controls'
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [upper,setUpper]=useState(false);
  const [lower,setLower]=useState(false);


  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(upper){
      str="";
      let bada="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      str+=bada;
    }

    if(lower){
      str="";
      let bada="abcdefghijklmnopqrstuvwxyz";
      str+=bada;
    }

    if(lower && upper){
       str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    }
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword,upper,lower])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  //useEffect
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <Container>

        <Heading />
        <Display  copyPasswordToClipboard={copyPasswordToClipboard}
        password={password}
        passwordRef={passwordRef}

         />
        <Controls
        length={length} 
        setLength={ setLength}

         numberAllowed={numberAllowed}
         setNumberAllowed={setNumberAllowed}

         charAllowed={charAllowed}
         setCharAllowed={setCharAllowed}

         upper={upper}
         setUpper={setUpper}

         lower={lower}
         setLower={setLower}

          passwordGenerator={passwordGenerator}


        
         />


      </Container>
    </>
  )
}

export default App
