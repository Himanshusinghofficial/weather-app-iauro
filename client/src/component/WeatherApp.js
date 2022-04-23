import React, { useRef, useState } from 'react';
import WeatherCard from './WeatherCard';

const WeatherApp = () => {
    const inputRef = useRef(null);
    const [weatherData, setweatherData] = useState(null);
    const [eventstatus, setEventstatus] = useState(null);

    const fetchData = (e) => {
        e.preventDefault();
        setEventstatus('Loading ...');
        fetch(`/weather/?address=${inputRef.current.value}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => {
                response.json().then((data) => {
                    if (data.error) {
                        setEventstatus(data.error);
                    } else {
                        setEventstatus(null);
                        setweatherData(data);
                        // console.log(data.list.length)
                    }
                })
            })
    }

    return (
        <div className='container'>
            <div className="main-content">
                <div className='header'>
                    <h1>Weather App</h1>
                </div>
                <p>Use this site to get 5 days weather information(Call 5 day / 3 hour forecast data)!</p>
                <form onSubmit={fetchData}>
                    <input type="text" ref={inputRef} placeholder="Enter Location" />
                    <button type="submit">Search</button>
                    <div>{eventstatus === null ? (weatherData &&
                        <>
                            <WeatherCard weatherData={weatherData} />
                        </>
                    ) :
                        <p>
                            {eventstatus}
                        </p>
                    }</div>
                </form>
            </div>
            <div className='footer'>
                <p>Created by Himanshu Singh</p>
            </div>
        </div>
    )
}

export default WeatherApp