import {useNavigate } from "react-router-dom";
  import './App.css'

function PlanetPortrait({ planet }) {
    const navigate = useNavigate();
    return (
        <div>
            <img src={planet.image} alt={planet.name} style={{ width: 500, height: 'auto' }} onClick={() => navigate('/solar')} className='planet-container'/>
        </div>
    )
}

export default PlanetPortrait 