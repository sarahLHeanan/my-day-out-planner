import React from "react";
import './WeatherDisplay.css';
import axios from "axios";

const WeatherDisplay = props => {
    const baseURL = "https://weatherapi-com.p.rapidapi.com/forecast.json";
    const [forecastWeather, setForecastWeather] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [latitude, setLatitude] = React.useState(null);
    const [longitude, setLongitude] = React.useState(null);
    const [location, setLocation] = React.useState(null);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        console.log("Geolocation not supported");
    }

    function success(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setLocation(`${latitude},${longitude}`);
        console.log(`location: ${latitude},${longitude}`);
    }

    function error() {
        console.log("Unable to retrieve your location");
    }

    React.useEffect(() => {
        axios.get(baseURL, {
            params: {
                q: `${latitude}, ${longitude}`,
                // q: '55.0,-1.61',
                days: 2,
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_XRAPID_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_XRAPID_API_HOST}`
            }
        }).then((response) => {
            setForecastWeather(response.data);
            setLoading(false);
        });
    }, []);

    if (!forecastWeather) return null;

    return (
        <div>
            <p>{loading ? 'loading' : 'condition: ' +  forecastWeather.current.condition.text}</p>
        </div>
    );

    // return (
    //
    //
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