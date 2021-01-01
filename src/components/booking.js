/**
 * Name: Amy Finlay
 * ID: G00360784
 * Booking 
 */

import React from 'react';
import { BookingRef } from './bookingRef'

//Creates header class and extends into component
export class Booking extends React.Component {

    render() {
        return this.props.booking.map( (booking)=> {
            return <BookingRef booking={booking} ReloadData={this.props.ReloadData}></BookingRef> 
        })
    }

}