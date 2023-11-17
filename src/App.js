import React, { useState } from 'react';
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import AddActivity from "./components/Activity/AddActivity";
import ActivityList from "./components/Activity/ActivityList";


function App() {
    const [activityList, setActivityList] = useState([]);

    const addActivityHandler = (name, location, ageRange, condition, price, childPrice) => {
        console.log('calling add activity handler');
        setActivityList((prevActivityList) => {
           return [...prevActivityList, {
               name: name,
               location: location,
               ageRange: ageRange,
               condition: condition,
               price: price,
               childPrice: childPrice,
               id: Math.random().toString()
           }]
        });
    };

    return (
        <div className="h-full bg-gradient-to-br from-cyan-200 to-slate-50 py-4 text-2xl font-extrabold">
            <h1 className="text-center">My Day Out Planner</h1>
            <WeatherDisplay/>
            <AddActivity onAddActivity={addActivityHandler} />
            <ActivityList activities={activityList} />
        </div>
        );
    }

export default App;
