/**
 * Name: Amy Finlay
 * ID: G00360784
 * BookingRef
 */

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

//Creates header class and extends into component
export class BookingRef extends React.Component {

    constructor(){
    super();

    this.DeleteBooking = this.DeleteBooking.bind(this);

}

DeleteBooking(){
        console.log("Delete: "+this.props.booking._id);

        axios.delete("http://localhost:4000/api/booking/"+this.props.booking._id)
        .then(()=>{
            this.props.ReloadData();
        })
        .catch()
    }

    render() {
        return (
            <div>


            {/** Displays card which contains information about each event that has been added */}
                    <Card style={{backgroundColor: '#343A40',
                                    margin: '15px 50px', color: 'white', border: '0px'}}>
                        <Card.Header as="h4"> {this.props.booking.Occassion}</Card.Header>
                            <Card.Body style={{backgroundColor: '#E9ECEF', color: '#343A40'}}>
                                <Card.Title>{this.props.booking.Name}</Card.Title>
                                <Card.Text><b>Date: </b>{this.props.booking.Date}</Card.Text>
                                <Card.Text><b>Admission Fee:</b> <b>€</b>{this.props.booking.CostPerPerson}</Card.Text>
                                <Card.Text><b>Capacity: </b>{this.props.booking.NoGuests}</Card.Text>
                                <Link style={{padding: '5px 30px', margin: '5px'}} to={"/edit/"+this.props.booking._id} className="btn btn-primary">Edit Event</Link>
                        <Button style={{padding: '5px 30px', margin: '5px', backgroundColor: '#C4311A'}} onClick={this.DeleteBooking}><b>Cancel Event</b></Button>
                            </Card.Body>
                            </Card>
            </div>
        );
    }

}