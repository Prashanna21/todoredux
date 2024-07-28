import './App.css'
import { useState } from 'react';
function App() {
  let [counter, setCounter]= useState(25)

  function increaseCounter(){
    setCounter(++counter)
  }
  function decreaseCounter(){
    setCounter()
  }



  return (
    <>
    <h1>Counter Value: {counter}</h1>

    <button onClick = {increaseCounter}> Add Value</button>
    <br></br> <br></br>
   <button onClick = {decreaseCounter}> Remove Value</button>
    </>
  )
}

export default App
