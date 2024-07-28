import React from "react";

export default function InputBox ({
    label,
    amount,
    onAmountChange,
    selectedCurrency,
    onCurrencyChange,
    convertedAmount,
    currencyOptions = [],
}){
    
    return (
        <>
            <div>
            <h2 className='text-2xl text-center mb-1'>{label}:</h2>
            <input className="mr-2 w-50 text-center" 
            type="number" 
            value={amount}
            onChange={(e) => onAmountChange(e.target.value === '' ? '' : Number(e.target.value))}
            ></input>
            
            <select value={selectedCurrency} 
                    onChange={(e) => onCurrencyChange(e.target.value)}
            >
            {currencyOptions.map((currency) => (
                <option key={currency}>{currency}</option>
            ))}
            </select>
            </div>
        </>
    )

}