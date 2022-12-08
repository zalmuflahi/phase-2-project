import PlanetCards from './PlanetCards'
import Home from './Home'
import { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sun from "./Sun"
import './App.css'
import YouTubeVid from './YouTubeVid';
import Missions from './Missions';
import SpaceImg from './SpaceImg';
import GalaxyPage from './GalaxyPage';



function App() {
  const [planets, setPlanets] = useState([])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <GalaxyPage />,
    },
    {
      path: "/solar",
      element: <Home planets={planets} />,
    },
    {
      path: "/:id",
      element: <PlanetCards planets={planets} />,
    },
    {
      path: "/sun",
      element: <Sun />,
    },
    {
      path: "/yt",
      element: <YouTubeVid />,
    },
    {
      path: "/misson",
      element: <Missions />,
    },
    {
      path: "/spaceimg",
      element: <SpaceImg />,
    }
  ]);



  useEffect(() => {
    const request = async () => {
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
