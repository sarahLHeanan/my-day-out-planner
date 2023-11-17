import React from 'react';
import Card from '../UI/Card/Card.js';

const ActivityList = (props) => {

    return (
        <div className="bg-white mx-40">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Age Range</th>
                        <th>Indoor or Outdoor?</th>
                        <th>Adult Price</th>
                        <th>Child Price</th>
                    </tr>
                </thead>
                <tbody>
                {props.activities.map((activity) => (
                    <tr key={activity.id}>
                        <td>{activity.name}</td>
                        <td>{activity.location}</td>
                        <td>{activity.ageRange}</td>
                        <td>{activity.condition}</td>
                        <td>{activity.price}</td>
                        <td>{activity.childPrice}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        // <Card>
        //     <ul>
        //         {props.activities.map((activity) => (
        //             <li key={activity.id}>
        //                 {activity.name} : {activity.price}
        //             </li>
        //         ))}
        //     </ul>
        // </Card>
    );
};

export default ActivityList;
