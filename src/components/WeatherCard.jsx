import React from 'react';
import CurrentWeather from './CurrentWeather.jsx';
import ExtraInfo from './ExtraInfo.jsx';
function WeatherCard({ cityName,temp,condition,icon,region,country, ...props}) {
    return (
        <div className='weather-card-container'>
            <CurrentWeather
                cityName={cityName}
                temp={temp}
                condition={condition}
                icon={icon}
                region = {region}
                country = {country}
            />
            <ExtraInfo
                windspeed = {props.windSpeed}
                humidity  = {props.humidity}
                isDay = {props.isDay}
            />
        </div>
    );
}

export default WeatherCard;