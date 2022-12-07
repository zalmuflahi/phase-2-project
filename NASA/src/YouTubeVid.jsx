import {
    useNavigate,
} from "react-router-dom";

const YouTubeVid = () => {
    const navigate = useNavigate()
    return (
        <div>
            <iframe
                src='https://www.youtube.com/embed/x1QTc5YeO6w'
                width="420" height="315"
                frameborder='0'
                allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
            />
            <button onClick={() => navigate('/solar')}>Main Page</button>
        </div>
    )
}


export default YouTubeVid