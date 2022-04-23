import React from 'react';
import "./WeatherCard.css";
import { format } from "date-fns/esm";

const WeatherCard = ({ weatherData }) => {
    return (
        <div className='grid-3'>
            {weatherData.list.map((weather, index) => (
                <div key={index}>
                    <div className="card">
                        <div className="card_info">
                            <div className="card_info_place">{weatherData.location}</div>
                            <div className="card_info_time">{format(new Date(weather.dt_txt), "p")}</div>
                            <div className="card_info_date">{format(new Date(weather.dt_txt), "PPPP")}</div>
                        </div>
                        <div className="card_weather">
                            {weather.weather[0].main === "Clouds" ?
                                <img className="card_weather_icon" src="https://img.icons8.com/color/48/000000/clouds.png" alt='clouds' />
                                :
                                (weather.weather[0].main === "Rain" ?
                                    <img className="card__weather_icon" src="https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-clouds-weather-nature-flat-icons-inmotus-design-6.png" alt='rain' />
                                    :
                                    <img className="card_weather_icon" src="https://img.icons8.com/fluency/48/000000/partly-cloudy-day.png" alt='normal-weather' />
                                )
                            }

                            <p className="card_weather_temp">{weather.main.temp}° C</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default WeatherCard