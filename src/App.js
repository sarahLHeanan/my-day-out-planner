import React from 'react';
import WeatherDisplay from "./components/WeatherDisplay/WeatherDisplay";
import AddActivity from "./components/Activity/AddActivity";


function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-cyan-200 to-slate-50">
        <h1 className="text-center">My Day Out Planner</h1>
        <WeatherDisplay/>
        <AddActivity />
    </div>
  );
}

export default App;
