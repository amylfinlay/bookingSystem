/**
 * Name: Amy Finlay
 * ID: G00360784
 * Booking
 */

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


//Creates header class and extends into component
export class BookingRef extends React.Component {

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
                    </Card>
                </Accordion>

            </div>
        );
    }

}