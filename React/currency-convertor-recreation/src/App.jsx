import { useEffect, useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import InputBox from './components/InputBox';

function App() {
  const [amount, setAmount] = useState('0')
  const [convertedAmount, setConvertedAmount] = useState('0')
  const [currencyTo, setCurrencyTo] = useState('usd')
  const [currencyFrom, setCurrencyFrom] = useState('npr')
  const currencyData = useCurrencyInfo(currencyFrom)
  const currencyOptions = Object.keys(currencyData)

  const convert = () => {
      setConvertedAmount(Number(amount) * currencyData[currencyTo])
  }

  useEffect(() => {convert()}, [amount, currencyFrom, currencyTo])

  return (
    <>
      <div className='flex justify-center flex-col items-center gap-3'>
        
      <h3 className='text-black text-center font-medium text-3xl font-openSans'>Currency Convertor</h3>

      
      <div className='border-2 border-black flex items-center justify-center gap-8 flex-col w-4/5 py-5'>
        

        <InputBox 
        label={"From"} 
        currencyOptions={currencyOptions} 
        amount={amount} 
        onAmountChange= {(amount) => 
                          setAmount(amount)}
        selectedCurrency={currencyFrom}
        onCurrencyChange={(currency) => setCurrencyFrom(currency)}

        />

        <InputBox label={"To"} 
        currencyOptions={currencyOptions}
        amount={convertedAmount}
        selectedCurrency={currencyTo}
        onCurrencyChange={(currency) => setCurrencyTo(currency)}
        />

        <button className='bg-gray-100 px-5 py-1' onClick={convert}>Submit</button>


      </div>

      </div>

    </>
  )
}

export default App
