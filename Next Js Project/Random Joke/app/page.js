'use client'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [jokeData, setJokeData] = useState("")
  const [punchline, setPunchline] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const API = 'https://official-joke-api.appspot.com/random_joke'

  const randomJokeFunction = async () => {
    try {
      setIsLoading(true)
      setPunchline(false)
      const res = await fetch(API)
      const data = await res.json();
      setJokeData(data)

    } catch (error) {
      console.log("Something went wrong : ", error);
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    randomJokeFunction()
  }, [])
  return (
    <div className="max-w-md mx-auto mt-10 p-6 rounded-2xl shadow-lg bg-white text-center ">
      <h2 className="text-xl font-bold mb-4 text-gray-950">Random Jokes Generator</h2>
      <p className="text-gray-700 mb-4">{isLoading ? "Loading... " : jokeData.setup}</p>


      <p className="text-gray-900 font-semibold mb-4">{punchline ? jokeData.punchline : ""}</p>

      <div className="flex flex-col gap-3 items-center">
        <button disabled={isLoading}
          onClick={() => setPunchline(prev => !prev)}
          className="px-4 py-2 cursor-pointer bg-orange-400 hover:bg-orange-500 text-white font-medium rounded-lg shadow-md"
        >
          {punchline ?
            "Hide Punchline"
            : "Reveal Punchline"}
        </button>

        <button disabled={isLoading}
          onClick={() => randomJokeFunction()}
          className="px-4 py-2 cursor-pointer bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-medium rounded-lg shadow-md"
        >
          Next
        </button>
      </div>

      <p className="text-sm text-gray-500 mt-4">Joke ID:{jokeData.id}</p>
    </div>
  )
}

export default Home