import { useState, useEffect, useTransition } from 'react';
import './WeatherDisplay.css';
import axios from "axios";

const WeatherDisplay = props => {
    const baseURL = "https://weatherapi-com.p.rapidapi.com/forecast.json";

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    const [forecastWeather, setForecastWeather] = useState(null);

    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            // First asynchronous operation
            getGeolocationData()
                .then(geolocation => {
                    console.log(geolocation);
                    setLatitude(geolocation.coords.latitude);
                    setLongitude(geolocation.coords.longitude);

                    // Second asynchronous operation dependent on the first
                    return fetchWeatherData(geolocation);
                })
                .then(result2 => {
                    console.log(result2);
                    setForecastWeather(result2.data);
                    // setData2(result2);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }, [startTransition]);

    /*Get geolocation so we can get weather for the current location*/
    async function getGeolocationData() {
        return new Promise(function (resolve, reject) {
            // Automatically passes the position to the callback
            navigator.geolocation
                .getCurrentPosition(resolve, reject);
        });
    }

    /*Return weather data once the geolocation has resolved*/
    async function fetchWeatherData(data) {
        return axios.get(baseURL, {
            params: {
                q: `${latitude}, ${longitude}`,
                days: 2,
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_XRAPID_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_XRAPID_API_HOST}`
            }
        })
    }

    return (
        <div>
            <div>
                {latitude ? (
                    <div>Data from operation 1: {latitude}</div>
                ) : isPending ? (
                    <div>Loading data 1...</div>
                ) : (
                    <div>Error loading data 1</div>
                )}
            </div>
            <div>
                {forecastWeather ? (
                    <div>
                        Data from operation 2:
                        <p>Condition: {forecastWeather.current.condition.text}</p>
                    </div>
                ) : isPending ? (
                    <div>Loading data 2...</div>
                ) : (
                    <div>Error loading data 2</div>
                )}
            </div>
        </div>
    );

    //
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(success, error);
    // } else {
    //     console.log("Geolocation not supported");
    // }
    //
    //
    // return (
    //     <div className="bg-white">
    //         <h2>Weather now:</h2>
    //         <p>Location: {latitude},{longitude}</p>
    //         <p>Condition: {forecastWeather.current.condition.text}</p>
    //         <p>
    //             Current temperature:&nbsp;
    //             {forecastWeather.current.temp_c}<span>&#8451;</span> | &nbsp;
    //             {forecastWeather.current.temp_f}<span>&#8457;</span>
    //         </p>
    //
    //         <h2>Weather tomorrow</h2>
    //         <p>Condition: {forecastWeather.forecast.forecastday[1].day.condition.text}</p>
    //         <p>
    //             Min temperature:&nbsp;
    //             {forecastWeather.forecast.forecastday[1].day.mintemp_c}<span>&#8451;</span> |&nbsp;
    //             {forecastWeather.forecast.forecastday[1].day.mintemp_f}<span>&#8457;</span>
    //         </p>
    //         <p>
    //             Max temperature:&nbsp;
    //             {forecastWeather.forecast.forecastday[1].day.maxtemp_c}<span>&#8451;</span> |&nbsp;
    //             {forecastWeather.forecast.forecastday[1].day.maxtemp_f}<span>&#8457;</span>
    //         </p>
    //     </div>
    // )
};

export default WeatherDisplay;