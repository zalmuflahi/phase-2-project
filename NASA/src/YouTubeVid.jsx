import {
    useNavigate,
} from "react-router-dom";

import { useNavigate } from "react-router-dom";

const YouTubeVid = () => {

const YouTubeVid = () => {
    const navigate = useNavigate()
    return (
        <div>
        
        <div className='videos'>

            <iframe src='https://www.youtube.com/embed/x1QTc5YeO6w'
                width="625" height="500"
                frameborder='0'
                allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
            />
            <iframe src="https://www.youtube.com/embed/4mOlsvXJXUU"
                width="625" height="500"
                frameborder='0'
                allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
            
            />
                <iframe src="https://www.youtube.com/embed/eWbv2T3KsA0"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'

                />
                <iframe src="https://www.youtube.com/embed/8HtQJV12OHw"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'

                />
        </div>
            <button className='button' onClick={() => navigate('/solar')}>Main Page</button>
        </div>
    )
}


export default YouTubeVid