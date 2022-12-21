import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWind, faDroplet, faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
function ExtraInfo(props) {
    return (
        <div className='wind-container flex justify-around items-center text-center text-white shadow-2xl'>
            <div className="windSpeed">
                <FontAwesomeIcon icon={faWind} />
                <p>{props.windspeed} km/h</p>
                <p className=' opacity-70'>Wind</p>
            </div>
            <div className="humidity">
                <FontAwesomeIcon icon={faDroplet} />
                <p>{props.humidity}%</p>
                <p className=' opacity-70'>Humidity</p>
            </div>
            <div>
                {
                    props.isDay ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />
                }
                <p>{props.isDay ? "Day" : "Night"}</p>
                <p className=' opacity-70'>Day/Night</p>
            </div>
        </div>
    );
}

export default ExtraInfo;