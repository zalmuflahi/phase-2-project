const PlanetBio = ({ planet }) => {
    return (
        <div className='info-dump'>
            <h2><strong>{planet.name}</strong></h2>
            <p>{planet.description}</p><br/>
            <p><em><strong>Distance From Sun:</strong></em> {planet.distance}</p><br/>
            <p><em><strong>Radius:</strong></em> {planet.size}</p><br/>
            <p><em><strong>Age Of {planet.name}:</strong></em> {planet.age}</p><br/>
            <p><em><strong>Population:</strong></em> {planet.populations}</p><br/>
            <p><em><strong>Orbital Period Around Sun:</strong></em> {planet.orbits}</p><br/>
            <p><em><strong>Fun Fact About {planet.name}:</strong></em> {planet.fun_fact}</p><br/>
        </div>
    )
}

export default PlanetBio 
