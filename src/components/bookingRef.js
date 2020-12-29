/**
 * Name: Amy Finlay
 * ID: G00360784
 * Booking
 */

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
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
                <h1>This is my bookingref component</h1>

                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                            {this.props.booking.Occassion}
      </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <p>{this.props.booking.Name}</p>
                                <p>{this.props.booking.Date}</p>
                                <p>{this.props.booking.CostPerPerson}</p>
                                <p>{this.props.booking.NoGuests}</p>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Link to={"/edit/"+this.props.booking._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteBooking}>Cancel</Button>
                    </Card>
                </Accordion>

            </div>
        );
    }

}