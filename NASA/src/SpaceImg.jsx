import { useNavigate } from "react-router-dom";

const SpaceImg = () => {
    const navigate = useNavigate()
    return(
        <div>
        <div className='space-img'>
            
            <img src="https://spaceplace.nasa.gov/gallery-space/en/NGC2336-galaxy.en.jpg" style={{ height : 'auto', width: '49%'}} />
            <img src="https://static01.nyt.com/images/2022/10/25/science/19sci-webb-pillars-01/19sci-webb-pillars-01-facebookJumbo.jpg" style={{ height : 'auto', width: '48%'}}/>
            <img src="https://cdn.mos.cms.futurecdn.net/pJDtktsNzin7UXtu9FcuSU.jpg" style={{ height : 'auto', width: '49%'}}/>
            <img src="https://www.nhm.ac.uk/content/dam/nhmwww/discover/mars2020-rover-factfile/mars2020-rover-factfile-full-width.jpg.thumb.1160.1160.jpg" style={{ height : 'auto', width: '48%'}}/>
            <img src="https://wallpaperaccess.com/full/3010132.jpg" style={{ height : 'auto', width: '100%'}}/>
        </div>
        
            <button className='button' onClick={()=> navigate('/solar')}>Main Page</button>
        </div>
       
    )
}

export default SpaceImg 