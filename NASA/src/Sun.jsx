import {
    useNavigate,
} from "react-router-dom";

export default function Sun() {
    const navigate = useNavigate();
    return (
        <div className="info-container">
            <img
                style={{ width: '600px', height: 'auto' }}
                src={'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dbwrfyf-3ad67c12-bf02-4231-bed9-fbb6f2b00ba5.png/v1/fill/w_900,h_900,strp/sun_on_a_transparent_background__by_prussiaart_dbwrfyf-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvMjVkNDUwMTQtOGNjMy00Yzk4LWIwMmMtNWEwY2YzYTU1ZGRkXC9kYndyZnlmLTNhZDY3YzEyLWJmMDItNDIzMS1iZWQ5LWZiYjZmMmIwMGJhNS5wbmciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.iosIdwUZ5hFlqY7tTU35rkr2gKrVC5QbvtYgvjySbog'}
                alt='sun'
                onClick={() => navigate('/solar')}
                className='image'
            
        />
            <div className='info-dump'> 
            <h1>Sun</h1>
            <p>The Sun is the star at the center of the Solar System. It is a nearly perfect ball of hot plasma, heated to incandescence by nuclear fusion reactions in its core. The Sun radiates this energy mainly as light, ultraviolet, and infrared radiation, and is the most important source of energy for life on Earth.</p><br />
            <p><em><strong>Star Type:</strong></em> Yellow dwarf</p><br />
            <p><em><strong>Surface Temperature:</strong></em> 5,778 K</p><br />
            <p><em><strong>Distance To Earth:</strong></em> 92.96 million mi</p><br />
            <p><em><strong>Age Of Sun:</strong></em> 4.603 billion years</p><br />
            <p><em><strong>Radius:</strong></em> 432,690 mi</p><br />
            <p><em><strong>Fun Fact:</strong></em> With a diameter of 109 times the size the Earth, the Sun makes a really big sphere. You could fit 1.3 million Earths inside the Sun. Or you could flatten out 11,990 Earths to cover the surface of the Sun.</p>
            </div>
        </div>
    )
}
