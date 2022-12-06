import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
    useParams,
  } from "react-router-dom";
  import './App.css'

function PlanetPortrait({planet}){

        return (
            <div>
           <img src={planet.image} alt={planet.name} style={{width: 500, height: 'auto' }}/>
           </div>
        )
}

export default PlanetPortrait 