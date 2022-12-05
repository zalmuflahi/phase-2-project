import PlanetPortrait from "./PlanetPortrait";
import PlanetBio from "./PlanetBio";

const PlanetCards = ({planets}) => {  
    return (
        <div>
            {
            planets.map((planet) => (
                <div>
                    <PlanetPortrait planet={planet} />
                    <PlanetBio planet={planet} />
                </div>
            ))
            }
            </div>
    )
}


export default PlanetCards