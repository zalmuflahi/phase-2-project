
import {
    createBrowserRouter,
    RouterProvider,
    useNavigate,
    useParams,
  } from "react-router-dom";
  import YouTubeVid from "./YouTubeVid";


export default function Home({planets}) {
    const navigate = useNavigate()

    return (
       
        <div className="container">
    {        planets.map((planet)=> {
            return (
                <div key={planet.id} className="row" onClick={() => navigate(`/${planet.id}`)}>
                    <img src={planet.image} style={{ width: '100px' , height: 'auto'}}/>      
                    
                    </div>
                    )
        })
        }
            <YouTubeVid />
        
       
        </div>
    )
}