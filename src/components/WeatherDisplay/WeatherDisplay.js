import React from "react";
import './WeatherDisplay.css';
import axios from "axios";

const WeatherDisplay = props => {
    const baseURL = "https://weatherapi-com.p.rapidapi.com/current.json";

    const [weather, setWeather] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL, {
            params: {
                q: 'London',
                days: '3'
            },
            headers: {
                'X-RapidAPI-Key': '4994d0f4eamsh915abe15ed1c81bp17f661jsn9a5a2f95fd4a',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
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
        </div>
        // <div className="weather-display">
        //     <h2>The weather today is mostly</h2>
        //     <p>Weather data here</p>
        //     <p>We recommend an indoor/outdoor event</p>
        // </div>

    )
};

export default WeatherDisplay;