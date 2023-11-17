import React, {useState} from 'react';

import Card from '../UI/Card/Card.js';
import ErrorModal from "../UI/ErrorModal";
import classes from './activity.module.css';

const AddActivity = (props) => {

    //state variable array
    const [activities, setActivities] = useState([]);
    //individual field values
    const [enteredActivity, setActivity] = useState('');
    const [enteredLocation, setLocation] = useState('');
    const [enteredArea, setArea] = useState('');
    const [enteredAgeRange, setAgeRange] = useState('');
    const [enteredCondition, setCondition] = useState('');
    const [enteredPrice, setPrice] = useState('');
    const [enteredChildPrice, setChildPrice] = useState('');

    const [error, setError] = useState();

    const addActivityHandler = (event) => {
        event.preventDefault();

        setActivities([
            ...activities,
            {
                name: enteredActivity,
                location: enteredLocation,
                area: enteredArea,
                ageRange: enteredAgeRange,
                condition: enteredCondition,
                price: enteredPrice,
                childPrice: enteredChildPrice,
            },
        ]);

        console.log('activities set');
        console.log(activities);

        // //validation
        if(
            enteredActivity.trim().length === 0 ||
            enteredLocation.trim().length === 0 ||
            enteredArea.trim().length === 0 ||
            enteredPrice.trim().length === 0 ||
            enteredChildPrice.trim().length === 0
        ){
            console.log('invalid input');
            setError({
                title: 'Invalid input',
                message: 'Please check your form for empty fields',
            })
            return;
        }

        props.onAddActivity(
            enteredActivity,
            enteredLocation,
            enteredArea,
            enteredAgeRange,
            enteredCondition,
            enteredPrice,
            enteredChildPrice
        );

        setActivity('');
        setLocation('');
        setArea('');
        setAgeRange('');
        setCondition('');
        setPrice('');
        setChildPrice('');
        console.log('operation complete');
    };


    // @todo sort issue where select box value not recorded if its not 'changed' (set default null value?)
    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error && (<ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler} />
            )}

            <form onSubmit={addActivityHandler}>
                <div className="space-y-12 mx-40">
                    <div className="pb-12">
                        <div className="mt-10 mx-16 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 place-content-center">
                            <div className="sm:col-span-6">
                                <label htmlFor="name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Activity
                                </label>
                                <div className="mt-2">
                                    <input type="text"
                                        name="name"
                                        value={enteredActivity}
                                        onChange={(e) => setActivity(e.target.value)}
                                        autoComplete="activity-name"
                                        className="w-3/4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="name"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Location
                                </label>
                                <div className="mt-2">
                                    <input type="text"
                                        name="name"
                                        value={enteredLocation}
                                        onChange={(e) => setLocation(e.target.value)}
                                        autoComplete="activity-name"
                                        className="w-3/4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="area"
                                       className="block text-sm font-medium leading-6 text-gray-900">Area</label>
                                <div className="mt-2">
                                    <select id="area"
                                            name="area"
                                            value={enteredArea}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            onChange={(e) => setArea(e.target.value)}>
                                        <option value="">Please choose an area</option>
                                        <option value="sunderland">Sunderland</option>
                                        <option value="newcastle">Newcastle</option>
                                        <option value="durham">Durham</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="ageRange"
                                       className="block text-sm font-medium leading-6 text-gray-900">Age Range</label>
                                <div className="mt-2">
                                    <select id="ageRange"
                                            name="ageRange"
                                            value={enteredAgeRange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            onChange={(e) => setAgeRange(e.target.value)}>
                                        <option value="">Please choose an age range</option>
                                        <option value="5">0-5</option>
                                        <option value="10">5-12</option>
                                        <option value="15">12-18</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <div className="flex items-center gap-x-3">
                                    <input id="indoor"
                                           name="condition"
                                           type="radio"
                                           value="indoor"
                                           checked={enteredCondition === "indoor"}
                                           className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                           onChange={(e) => setCondition(e.target.value)}/>
                                    <label htmlFor="indoor"
                                           className="block text-sm font-medium leading-6 text-gray-900">Indoor</label>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <input id="outdoor"
                                           name="condition"
                                           type="radio"
                                           value="outdoor"
                                           className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                           onChange={(e) => setCondition(e.target.value)}/>
                                    <label htmlFor="outdoor"
                                           className="block text-sm font-medium leading-6 text-gray-900">Outdoor</label>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="price"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Price (adult)
                                </label>
                                <div className="mt-2">
                                <input
                                    type="text"
                                    name="price"
                                    id="price"
                                    autoComplete="price"
                                    value={enteredPrice}
                                    className="w-3/4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setPrice(e.target.value)}/>
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label htmlFor="child-price"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Price (child)
                                </label>
                                <div className="mt-2">
                                <input
                                    type="text"
                                    name="child-price"
                                    id="child-price"
                                    autoComplete="child-price"
                                    value={enteredChildPrice}
                                    className="w-3/4 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={(e) => setChildPrice(e.target.value)}/>
                                </div>
                            </div>

                            <div className="mt-6 flex items-center gap-x-6">
                                <button type="submit"
                                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>
        </div>

    )
};


export default AddActivity;
