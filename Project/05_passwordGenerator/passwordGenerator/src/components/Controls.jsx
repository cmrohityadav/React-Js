import React from 'react'

function Controls({length, numberAllowed, charAllowed, setLength,setNumberAllowed,setCharAllowed,upper,setUpper,lower,setLower}) {
    return (
        <>
            <div className='mt-10 flex flex-col ' >
            
                <div className='flex justify-center '>
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer w-52'
                        onChange={(e) => { setLength(e.target.value) }}
                    />
                    <label className='ml-2 text-red-400'>Length: {length}</label>
                </div>
                <div className='flex justify-center mt-5'>
                    <input
                        type="checkbox"
                          defaultChecked={upper}
                        id="uppercase"
                        onChange={() => {
                              setUpper((prev) => !prev )
                        }}
                    />
                    <label className='text-red-400 ml-2' htmlFor="uppercase">Upper Case </label>
                </div>
                <div className='flex justify-center mt-5'>
                    <input
                        type="checkbox"
                          defaultChecked={lower}
                        id="lowercase"
                        onChange={() => {
                              setLower((prev) => !prev )
                        }}
                    />
                    <label className='text-red-400 ml-2' htmlFor="lowercase">Lower Case </label>
                </div>
                <div className='flex justify-center mt-5'>
                    <input
                        type="checkbox"
                          defaultChecked={numberAllowed}
                        id="numberInput"
                        onChange={() => {
                              setNumberAllowed((prev) => !prev);
                        }}
                    />
                    <label className='text-red-400 ml-2' htmlFor="numberInput">Numbers</label>
                </div>
                <div className='flex justify-center mt-5'>
                    <input
                        type="checkbox"
                          defaultChecked={charAllowed}
                        id="special char"
                        onChange={() => {
                              setCharAllowed((prev) => !prev )
                        }}
                    />
                    <label className='text-red-400 ml-2' htmlFor="special char">Sepcial Character</label>
                </div>
                

            </div>

        </>
    )
}

export default Controls