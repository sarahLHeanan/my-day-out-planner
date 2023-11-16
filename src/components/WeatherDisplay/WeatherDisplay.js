import { useState, useEffect, useTransition } from 'react';
import './WeatherDisplay.css';
import axios from "axios";

const WeatherDisplay = props => {
    const baseURL = "https://weatherapi-com.p.rapidapi.com/forecast.json";

    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [location, setLocation] = useState(null);

    const [forecastWeather, setForecastWeather] = useState(null);

    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            // First asynchronous operation
            getGeolocationData()
                .then(geolocation => {
                    // console.log(geolocation);
                    setLatitude(geolocation.coords.latitude.toFixed(2));
                    setLongitude(geolocation.coords.longitude.toFixed(2));

                    console.log('type ' + typeof latitude);
                    // Second asynchronous operation dependent on the first
                    return fetchWeatherData(geolocation);
                })
                .then(weatherData => {
                    // console.log(weatherData);
                    setForecastWeather(weatherData.data);
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
                q: location ?? 'Newcastle-upon-tyne',
                days: 2,
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_XRAPID_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_XRAPID_API_HOST}`
            }
        })
    }

    return (
        <div className="">
            {forecastWeather ? (
                <div className="bg-white grid grid-cols-2 gap-4 place-content-center m-12 p-4">
                    <div className="col-span-2">
                        <p className="text-center text-xl font-bold">Location: {latitude ? `${latitude}, ${longitude}` : 'Newcastle Upon Tyne'}</p>
                    </div>
                    <div className="grid rounded-lg bg-sky-400 text-white text-center py-4">
                        <h2 className="text-xl font-bold mb-8">Weather today</h2>
                        <img src={forecastWeather.forecast.forecastday[0].day.condition.icon}
                             className="mt-8 m-auto" alt="weather icon today"/>
                        <p className="text-xl font-bold mt-8">
                            {forecastWeather.current.temp_c}<span>&#8451;</span> | &nbsp;
                            {forecastWeather.current.temp_f}<span>&#8457;</span>
                        </p>
                        <p>{forecastWeather.forecast.forecastday[0].day.condition.text}</p>
                    </div>
                    <div className="grid rounded-lg bg-sky-600 text-white text-center py-4">
                        <h2 className="text-xl font-bold mb-8">Weather tomorrow</h2>
                        <img src={forecastWeather.forecast.forecastday[1].day.condition.icon}
                             className="mt-8 m-auto" alt="weather icon tomorrow"/>
                        <p className="text-xl font-bold mt-8">
                             <p>
                                Min temp:&nbsp;
                                {forecastWeather.forecast.forecastday[1].day.mintemp_c}<span>&#8451;</span> |&nbsp;
                                {forecastWeather.forecast.forecastday[1].day.mintemp_f}<span>&#8457;</span>
                            </p>
                            <p>
                                Max temp:&nbsp;
                                {forecastWeather.forecast.forecastday[1].day.maxtemp_c}<span>&#8451;</span> |&nbsp;
                                {forecastWeather.forecast.forecastday[1].day.maxtemp_f}<span>&#8457;</span>
                            </p>
                        </p>
                        <p>{forecastWeather.forecast.forecastday[1].day.condition.text}</p>
                    </div>
                </div>
            ) : isPending ? (
                <div>Loading data ...</div>
            ) : (
                <div>Error loading data</div>
            )}
        </div>
    );
};

export default WeatherDisplay;