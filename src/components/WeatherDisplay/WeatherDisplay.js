import { useState, useEffect, useTransition, startTransition } from 'react';
import './WeatherDisplay.css';
import axios from "axios";

const WeatherDisplay = props => {

    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);

    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(() => {
            // First asynchronous operation
            fetchData1()
                .then(result1 => {
                    setData1(result1);

                    // Second asynchronous operation dependent on the first
                    return fetchData2(result1);
                })
                .then(result2 => {
                    setData2(result2);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        });
    }, [startTransition]);

    async function fetchData1() {
        // Simulate an asynchronous operation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('Data from operation 1');
            }, 2000);
        });
    }

    async function fetchData2(data) {
        // Simulate another asynchronous operation dependent on data from the first operation
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Data from operation 2 with ${data}`);
            }, 1500);
        });
    }

    return (
        <div>
            <div>
                {data1 ? (
                    <div>Data from operation 1: {data1}</div>
                ) : isPending ? (
                    <div>Loading data 1...</div>
                ) : (
                    <div>Error loading data 1</div>
                )}
            </div>
            <div>
                {data2 ? (
                    <div>Data from operation 2: {data2}</div>
                ) : isPending ? (
                    <div>Loading data 2...</div>
                ) : (
                    <div>Error loading data 2</div>
                )}
            </div>
        </div>
    );


    // const baseURL = "https://weatherapi-com.p.rapidapi.com/forecast.json";
    // const [forecastWeather, setForecastWeather] = React.useState(null);
    // const [loading, setLoading] = React.useState(true);
    // const [latitude, setLatitude] = React.useState(null);
    // const [longitude, setLongitude] = React.useState(null);
    // const [location, setLocation] = React.useState(null);
    //
    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(success, error);
    // } else {
    //     console.log("Geolocation not supported");
    // }
    //
    // function success(position) {
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //     setLocation(`${latitude},${longitude}`);
    //     console.log(`location: ${latitude},${longitude}`);
    //     setLoading(false);
    // }
    //
    // function error() {
    //     console.log("Unable to retrieve your location");
    // }
    //
    // //@todo turn this into promise so we get location data before this is called
    // React.useEffect(() => {
    //     axios.get(baseURL, {
    //         params: {
    //             q: `${latitude}, ${longitude}`,
    //             days: 2,
    //         },
    //         headers: {
    //             'X-RapidAPI-Key': `${process.env.REACT_APP_XRAPID_API_KEY}`,
    //             'X-RapidAPI-Host': `${process.env.REACT_APP_XRAPID_API_HOST}`
    //         }
    //     }).then((response) => {
    //         setForecastWeather(response.data);
    //         setLoading(false);
    //     });
    // }, []);
    //
    //
    // if (!forecastWeather) return null;
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