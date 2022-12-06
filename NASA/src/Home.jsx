
import {
   
    useNavigate,
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
            <img
                style={{ width: '600px', height: 'auto' }}
                src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbwrfyf-3ad67c12-bf02-4231-bed9-fbb6f2b00ba5.png/v1/fill/w_900,h_900,strp/sun_on_a_transparent_background__by_prussiaart_dbwrfyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYndyZnlmLTNhZDY3YzEyLWJmMDItNDIzMS1iZWQ5LWZiYjZmMmIwMGJhNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iosIdwUZ5hFlqY7tTU35rkr2gKrVC5QbvtYgvjySbog'}
                alt='sun'
                onClick={() => navigate('/sun')}
            />
            <button onClick={()=>navigate('/yt')}>History Of Our Solar System</button>
        </div>

    )
}
