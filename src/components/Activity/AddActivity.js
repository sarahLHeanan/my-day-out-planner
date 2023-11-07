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
            enteredAgeRange,
            enteredCondition,
            enteredPrice,
            enteredChildPrice
        );

        setActivity('');
        setLocation('');
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
            <Card className={classes.input}>
                <form onSubmit={addActivityHandler} className="mt-4">
                    <label htmlFor="name">Activity</label>
                    <input type="text"
                           id="name"
                           name="name"
                           value={enteredActivity}
                           onChange={(e) => setActivity(e.target.value)}
                    />
                    {/*@todo turn this into location selector by postcode*/}
                    <label htmlFor="location">Area</label>
                    <select id="location"
                            name="location"
                            value={enteredLocation}
                            onChange={(e) => setLocation(e.target.value)}>
                        <option value="sunderland">Sunderland</option>
                        <option value="newcastle">Newcastle</option>
                        <option value="durham">Durham</option>
                    </select>
                    <label htmlFor="ageRange">Children's Age Range</label>
                    <select id="ageRange"
                            name="ageRange"
                            value={enteredAgeRange}
                            onChange={(e) => setAgeRange(e.target.value)}>
                        <option value="5">0-5</option>
                        <option value="10">5-12</option>
                        <option value="15">12-18</option>
                    </select>
                    <label>
                        <input
                            type="radio"
                            name="condition"
                            value="indoor"
                            checked={true}
                            className="form-check-input"
                            onChange={(e) => setCondition(e.target.value)}
                        />
                        Indoor
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="condition"
                            value="outdoor"
                            className="form-check-input"
                            onChange={(e) => setCondition(e.target.value)}
                        />
                        Outdoor
                    </label>
                    <label htmlFor="price">Price per adult</label>
                    <input type="number"
                           id="price" name="price"
                           value={enteredPrice}
                           onChange={(e) => setPrice(e.target.value)}/>
                    <label htmlFor="child-price">Price per child</label>
                    <input type="number"
                           id="childPrice"
                           name="child-price"
                           value={enteredChildPrice}
                           onChange={(e) => setChildPrice(e.target.value)}/>
                    <button type="submit">Add Activity</button>
                </form>
            </Card>
        </div>

    )
};


export default AddActivity;
