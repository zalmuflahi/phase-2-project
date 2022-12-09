import {
    useNavigate,
} from "react-router-dom";


export default function GalaxyPage() {
    const navigate = useNavigate();
    return (
        <img 
        src='https://phantomgalaxies.com/old/img/space@1x.png' 
        alt='galaxy' 
        onClick={() => navigate('/solar')}
        className='home-page'
        />
    )
}
