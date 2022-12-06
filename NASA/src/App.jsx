import PlanetCards from './PlanetCards'
import Home from './Home'
import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import './App.css'



function App() {
  const [planets, setPlanets] = useState([])

  


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home planets={planets}/>,
    },
    {
      path: "/:id",
      element: <PlanetCards planets={planets} />,
    },
  ]);
 


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
    <RouterProvider router={router} />
    </div>
  )
}

export default App
