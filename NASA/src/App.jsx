import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [planets, setPlanets] = useState([])
  useEffect(()=>{
    const request = async() => {
      let req = await fetch('http://localhost:3000/PLANETS')
      let res = await req.json()
      setPlanets(res)
    }
    request()
  }, [])

  return (
    <div className="App">
    </div>
  )
}

export default App
