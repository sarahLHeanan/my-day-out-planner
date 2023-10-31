import React from 'react';
import Card from '../UI/Card/Card.js';

const ActivityList = (props) => {
    console.log('activities: ' + props.activities);

    return (
        <Card>
            <ul>
                {props.activities.map((activity) => (
                    <li key={activity.id}>
                        {activity.name} : {activity.price}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default ActivityList;
