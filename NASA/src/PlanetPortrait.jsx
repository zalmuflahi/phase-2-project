import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
    useParams,
  } from "react-router-dom";

function PlanetPortrait({planet}){
    const navigate = useNavigate()
    let {id} = useParams()
        return (
           <img src={planet.image} alt={planet.name} onClick={() => navigate(`/${planet.id}`)} />
        )
}

export default PlanetPortrait 