import React from 'react';

const AddActivity = () => {

    const addActivityHandler = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={addActivityHandler} className="bg-white mt-4">
            <label htmlFor="name">Activity</label>
            <input type="text" id="name" name="name"/>

            {/*@todo turn this into location selector by postcode*/}
            <label htmlFor="location">Area</label>
            <select id="location" name="location">
                <option value="sunderland">Sunderland</option>
                <option value="newcastle">Newcastle</option>
                <option value="durham">Durham</option>
            </select>
            <label htmlFor="ageRange">Children's Age Range</label>
            <select id="ageRange" name="ageRange">
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
                />
                Indoor
            </label>
            <label>
                <input
                    type="radio"
                    name="condition"
                    value="outdoor"
                    checked={true}
                    className="form-check-input"
                />
                Outdoor
            </label>
            <label htmlFor="price">Price Range</label>
            <select id="price" name="price">
                <option value="0">Free</option>
                <option value="10">Up to £10</option>
                <option value="20">Up to £20</option>
                <option value="21">£20+</option>
            </select>
            <button type="submit">Find Activity</button>
        </form>
    )

};

export default AddActivity;