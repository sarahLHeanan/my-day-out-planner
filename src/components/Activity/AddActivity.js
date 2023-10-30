import React, {useState} from 'react';

import Card from '../UI/Card/Card.js';
import classes from './activity.module.css';

const AddActivity = () => {

    // @todo return state in one array instead of slices
    const [enteredActivity, setActivity] = useState('');
    const [enteredLocation, setLocation] = useState('');
    const [enteredAgeRange, setAgeRange] = useState('');
    const [enteredCondition, setCondition] = useState('');
    const [enteredPrice, setPrice] = useState('');
    const [enteredChildPrice, setChildPrice] = useState('');


    const addActivityHandler = (event) => {
        event.preventDefault();
        console.log(enteredActivity);
        console.log(enteredLocation);
        console.log(enteredAgeRange);
        console.log(enteredCondition);
        console.log(enteredPrice);
        console.log(enteredChildPrice);
    };

    const activityChangeHandler = (event) => {
        setActivity(event.target.value);
    }

    const locationChangeHandler = (event) => {
        setLocation(event.target.value);
    }

    const ageRangeChangeHandler = (event) => {
        setAgeRange(event.target.value);
    }

    const conditionChangeHandler = (event) => {
        setCondition(event.target.value);
    }

    const priceChangeHandler = (event) => {
        setPrice(event.target.value);
    }

    const childPriceChangeHandler = (event) => {
        setChildPrice(event.target.value);
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addActivityHandler} className="mt-4">
                <label htmlFor="name">Activity</label>
                <input type="text" id="name" name="name" onChange={activityChangeHandler}/>

                {/*@todo turn this into location selector by postcode*/}
                <label htmlFor="location">Area</label>
                <select id="location" name="location" onChange={locationChangeHandler}>
                    <option value="sunderland">Sunderland</option>
                    <option value="newcastle">Newcastle</option>
                    <option value="durham">Durham</option>
                </select>
                <label htmlFor="ageRange">Children's Age Range</label>
                <select id="ageRange" name="ageRange" onChange={ageRangeChangeHandler}>
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
                        onChange={conditionChangeHandler}
                    />
                    Indoor
                </label>
                <label>
                    <input
                        type="radio"
                        name="condition"
                        value="outdoor"
                        className="form-check-input"
                        onChange={conditionChangeHandler}
                    />
                    Outdoor
                </label>
                <label htmlFor="price">Price per adult</label>
                <input type="number" id="price" name="price" onChange={priceChangeHandler}/>
                <label htmlFor="price">Price per child</label>
                <input type="number" id="childPrice" name="child-price" onChange={childPriceChangeHandler}/>
                <button type="submit">Add Activity</button>
            </form>
        </Card>
    )
};


export default AddActivity;
