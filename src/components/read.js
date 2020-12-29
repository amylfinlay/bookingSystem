/**
 * Name: Amy Finlay
 * ID: G00360784
 * Read UpComing Events
 */

import React from 'react';
import { Booking } from './booking';

//Creates header class and extends into component
export class Read extends React.Component {

    state = {
        booking: [
            {
            "Name": "Jane Doe",
            "Occassion": "Wedding Party",
            "Date" : "23/04/2021",
            "CostPerPerson" : "100",
            "NoGuests" : "300"
            },
            {
            "Name": "John Doe",
            "Occassion": "30th Birthday",
            "Date" : "15/06/2021",
            "CostPerPerson" : "30",
            "NoGuests" : "120"
            },
            {
            "Name": "Bord Bia",
            "Occassion": "Food Festival",
            "Date" : "02/02/2021",
            "CostPerPerson" : "15",
            "NoGuests" : "200"
            }
        ]
    };

    render() {
        return (
            <div>
                {/**Displays text */} 
                <h1>View our upcoming events...</h1>
                <Booking booking={this.state.booking}></Booking>
            </div>
        );
    }

}