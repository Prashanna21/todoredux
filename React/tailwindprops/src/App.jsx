import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-500 text-white p-5 rounded-3xl'>Tailwind test</h1>
    <Card userName = "Tyla"/>
    <Card />
    </>
  )
}

export default App
