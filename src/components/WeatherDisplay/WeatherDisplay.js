import React from "react";
import './WeatherDisplay.css';
import axios from "axios";

const WeatherDisplay = props => {
    const baseURL = "https://weatherapi-com.p.rapidapi.com/current.json";

    const [weather, setWeather] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL, {
            params: {
                q: 'Newcastle-upon-tyne',
            },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_XRAPID_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.REACT_APP_XRAPID_API_HOST}`
            }
        }).then((response) => {
            setWeather(response.data);
        });
    }, []);

    if (!weather) return null;

    console.log(weather);

    return (
        <div>
            <h2>Weather now:</h2>
            <p>Condition: {weather.current.condition.text}</p>
            <p>
                Current temperature:&nbsp;
                {weather.current.temp_c}<span>&#8451;</span> | &nbsp;
                {weather.current.temp_f}<span>&#8457;</span>
            </p>

            <h2>Weather tomorrow</h2>
            <p>Condition: {weather.current.condition.text}</p>
            <p>Min temperature:</p>
            <p>Max temperature:</p>
        </div>
        // <div className="weather-display">
        //     <h2>The weather today is mostly</h2>
        //     <p>Weather data here</p>
        //     <p>We recommend an indoor/outdoor event</p>
        // </div>

    )
};

export default WeatherDisplay;