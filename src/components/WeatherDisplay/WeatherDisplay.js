import React from "react";
import './WeatherDisplay.css';
import axios from "axios";

const WeatherDisplay = props => {
    const baseURL = "https://weatherapi-com.p.rapidapi.com";
    const getForecast = 'forecast.json';
    const [forecastWeather, setForecastWeather] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${baseURL}/${getForecast}`, {
            params: {
                q: 'Sunderland',
                days: 2,
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_XRAPID_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_XRAPID_API_HOST}`
            }
        }).then((response) => {
            setForecastWeather(response.data);
        });
    }, []);

    console.log(forecastWeather);

    if (!forecastWeather) return null;

    return (
        <div className="bg-white">
            <h2>Weather now:</h2>
            <p>Condition: {forecastWeather.current.condition.text}</p>
            <p>
                Current temperature:&nbsp;
                {forecastWeather.current.temp_c}<span>&#8451;</span> | &nbsp;
                {forecastWeather.current.temp_f}<span>&#8457;</span>
            </p>

            <h2>Weather tomorrow</h2>
            <p>Condition: {forecastWeather.forecast.forecastday[1].day.condition.text}</p>
            <p>
                Min temperature:&nbsp;
                {forecastWeather.forecast.forecastday[1].day.mintemp_c}<span>&#8451;</span> |&nbsp;
                {forecastWeather.forecast.forecastday[1].day.mintemp_f}<span>&#8457;</span>
            </p>
            <p>
                Max temperature:&nbsp;
                {forecastWeather.forecast.forecastday[1].day.maxtemp_c}<span>&#8451;</span> |&nbsp;
                {forecastWeather.forecast.forecastday[1].day.maxtemp_f}<span>&#8457;</span>
            </p>
        </div>
    )
};

export default WeatherDisplay;