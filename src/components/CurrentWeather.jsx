import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
function CurrentWeather(props) {
    return (
        <div className='current-weather text-white shadow-2xl py-1'>
            <div className="weatherInfo text-center">
                <div className='flex p-1 gap-3 justify-center items-center font-bold'>
                    <div className='text-2xl'>
                        <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div>
                        <p className='text-xl'>{props.cityName}</p>
                        <p>{props.country}</p>
                    </div>
                </div>
                <p className='temp font-extrabold'><span>{props.temp}</span>&#8451;</p>
                <img src={props.icon} alt="" className='mx-auto w-24 bg-blue-600 rounded-xl shadow-2xl' />
                <p className='condition font-extrabold my-2'>Feels like <span className='bg-blue-500 p-1 rounded-lg shadow-lg'>{props.condition}</span></p>
            </div>
        </div>
    );
}

export default CurrentWeather;