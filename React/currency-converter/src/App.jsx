import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
function App() {
  const [amount, setAmount] = useState()
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("npr")
  const[convertedAmount, setConvertedAmount] = useState(0)

  const currnecyInfo = useCurrencyInfo(from)

  const currencyOptions = Object.keys(currnecyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount) 
  }

  const convert = () => setConvertedAmount(amount * currnecyInfo[to])

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/589422272/photo/many-currency.jpg?s=612x612&w=0&k=20&c=vsBFoQDhWZH7DE6yqZdO2R3SLtcYMpT_c6_3Ztsf-ME=')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={currencyOptions}
                            onCurrencyChange={(currency) => {
                              setAmount(amount)
                              setFrom(currency)
                            }}

                            selectCurrency={from}
                            onAmountChange = {(amount) => {setAmount(amount)
                              convert()}
                            }
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={currencyOptions}
                            selectCurrency={to}
                            onCurrencyChange={(currency) => setTo(currency)}
                            
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert 
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}
 
export default App
