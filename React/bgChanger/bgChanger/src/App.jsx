import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  let [currentColor, changeColor] = useState('black')
  const colorChange = (color) => {
      changeColor(color)
  }

  return (
    <>
     <body style={{backgroundColor : currentColor} } className= {`h-screen w-screen m-0 p-0`}>

     <div className='main-container absolute bottom-10 left-1/2 transform -translate-x-1/2'>
     <button className='red' onClick={() =>colorChange('red')}>Red</button>
     <button  className='blue' onClick={() =>colorChange('blue')} >blue</button>
     <button className='green' onClick={() =>colorChange('green')}>green</button>
     <button className='yellow' onClick={() =>colorChange('yellow')}>yellow</button>
     </div>
     </body>


    
    </>
  )
}

export default App