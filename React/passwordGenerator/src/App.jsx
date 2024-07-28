import { useState , useCallback, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(true)
  const [characters, setCharacters] = useState(true)
  const [password, setPassword] = useState()

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const num = "1234556890"
    const char = "!@#$%^&*()"
    let randomNum = ""


  

    if(characters) str += char
    if(numbers) str += num

    for(let i = 1; i <= length; i++)
      {
        randomNum = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(randomNum)
      }

      setPassword(pass)


  }, [length, numbers, characters, setPassword])

  useEffect(passwordGenerator, [length, numbers, characters])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md text-xl rounded-lg px-4 my-5 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center text-2xl mb-4 pt-3'>Password Generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type='text'
          value={password}
          className="outline-none w-full h-full py-1 px-3"
          placeholder='Password'
          readOnly
          ref={passwordRef} 
          ></input>
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 align-top' onClick={copyPassword}> Copy</button>
        </div>

        <div className='flex text-xl gap-x-2'>
          <div className='flex items-center gap-5'>
            <input type='range'
            min={8}
            max={50}
            className='cursor-pointer'
            defaultValue={8}
            id = "lengthInput"
            onChange={(e) => setLength(e.target.value)}
            ></input>
            <label>length: {length}</label>

            <div className='flex items-center gap-x-1'>
              <input 
                type='checkbox'
                defaultChecked  = {numbers}
                id = "numberInput"
                onChange={(e) => setNumbers((prev) => !prev)}
              ></input>
               <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characters}
              id="characterInput"
              onChange={() => {
                  setCharacters((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>  
        </div>
</div>
    </>
  )
}

export default App
