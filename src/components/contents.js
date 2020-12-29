/**
 * Name: Amy Finlay
 * ID: G00360784
 * Lab 3
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';


//Creates header class and extends into component
export class Contents extends React.Component {

    render() {
        return (
            <div>
            <div className="jumbotron">
                <h1 className="display-4">Events Planning Galway</h1>
                <p className="lead">Planning an event?</p>
                <p>Book with us to plan your next event. We cater for wedding, birthdays, parties and any other celebrations.</p>
                <p className="lead">
                    <a className="btn btn-dark btn-lg" href="#" role="button">Book Now</a>
                </p>
            </div>

            <div className="container">
            <Container>
            <Row>
            <Col xs={6} md={4}>
                <Image src="logo.png" rounded />
            </Col>
            <Col xs={6} md={4}>
                <Image src="logo.png" roundedCircle />
            </Col>
            <Col xs={6} md={4}>
                <Image src="logo.png" thumbnail />
            </Col>
            </Row>
            </Container>
            </div>
            </div>
        );
    }

}