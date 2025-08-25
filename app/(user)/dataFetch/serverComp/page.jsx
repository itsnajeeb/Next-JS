'use client'
import React, { useState, useEffect } from 'react'

const DataFetcher = () => {
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState(null)

  const SubmitHandler=()=>{
    alert("Clicked")

    if (!inputValue) return   // don’t call API on empty input

    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.genderize.io/?name=${inputValue}`)
        const data = await res.json()
        console.log("Data > ", data);
        
        setResult(data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }
   // runs every time inputValue changes

  return (
    <div>
      <h1 className='text-3xl font-bold mb-5'>Fetching Data</h1>

      <div className='flex justify-center max-w-xl m-auto'>
        <input
        type="text"
        placeholder='Enter Your Name'
        name='name'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className=" w-full border pl-5  p-2 rounded-2xl"
      />
      <button onClick={SubmitHandler}
      className='bg-blue-900 text-white py-3 px-8 rounded-r-2xl -ml-28  cursor-pointer'>Submit</button>
      </div>

      {result && (
        <div className='flex flex-col gap-2 ml-5 mt-8 '>
          <p>Name : <span>{result.name}</span></p>
          <p>Gender : <span>{result.gender}</span></p>
          <p>Probability : <span>{Math.round(result.probability * 100)}%</span></p>
        </div>
      )}
    </div>
  )
}

export default DataFetcher
