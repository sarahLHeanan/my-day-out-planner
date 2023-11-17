import React from 'react';
import Card from '../UI/Card/Card.js';

const ActivityList = (props) => {

    return (
        <div className="bg-white mx-40 p-4 text-center rounded-md">
            <h2 className="mb-2">Activities</h2>
            {props.activities.length ?
                <div className="relative overflow-x-auto shadow-md sm:rounded-md">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-700">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-blue-100 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Location
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Area
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Age Range
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Indoor or Outdoor?
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Adult Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Child Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.activities.map((activity) => (
                                <tr className="bg-white hover:bg-gray-50 text-left" key={activity.id}>
                                    <td className="px-6 py-4">{activity.name}</td>
                                    <td className="px-6 py-4">{activity.location}</td>
                                    <td className="px-6 py-4">{activity.area}</td>
                                    <td className="px-6 py-4">{activity.ageRange}</td>
                                    <td className="px-6 py-4">{activity.condition}</td>
                                    <td className="px-6 py-4">{activity.price}</td>
                                    <td className="px-6 py-4">{activity.childPrice}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                // <table className="table-auto">
            //     <thead className="text-xl text-left bg-blue-200">
            //         <tr>
            //             <th>Name</th>
            //             <th>Location</th>
            //             <th>Age Range</th>
            //             <th>Indoor or Outdoor?</th>
            //             <th>Adult Price</th>
            //             <th>Child Price</th>
            //         </tr>
            //     </thead>
            //     <tbody className="text-xl text-left font-normal">
            //         {props.activities.map((activity) => (
            //             <tr key={activity.id}>
            //                 <td>{activity.name}</td>
            //                 <td>{activity.location}</td>
            //                 <td>{activity.ageRange}</td>
            //                 <td>{activity.condition}</td>
            //                 <td>{activity.price}</td>
            //                 <td>{activity.childPrice}</td>
            //             </tr>
            //         ))}
            //     </tbody>
            // </table>
           : <p>No activities added</p>
            }
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
