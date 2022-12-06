import PlanetPortrait from "./PlanetPortrait";
import PlanetBio from "./PlanetBio";
import './App.css'
import Sun from "./Sun";

import {
    useParams,
  } from "react-router-dom";


const PlanetCards = ({planets}) => {  
   const {id} = useParams();
    return (
        <div>
                <div>
                    <PlanetPortrait planet={planets[id-1]} className='planet-container'/>
                    <PlanetBio planet={planets[id-1]} />
                    
                </div>
            </div>
    )
}


export default PlanetCards