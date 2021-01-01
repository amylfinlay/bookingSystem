/**
 * Name: Amy Finlay
 * ID: G00360784
 * Contents page which is displayed on app.js
 */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Testimonials from './testimonials.js';
import drinks from './images/drinks.jpg';
import wedding from './images/wedding.jpg';


//Creates header class and extends into component
export class Contents extends React.Component {


    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">Events Planning Galway</h1>
                    <p className="lead">Planning an event?</p>
                    <p>Book with us to plan your next event. We cater for weddings, festivals, parties and any other celebrations.</p>
                    <p className="lead">
                        <a className="btn btn-dark btn-lg" href="/create" role="button">Book Now</a>
                    </p>
                </div>

                <Container style={{ margin: "20px" }}>
                    <Row>
                        <Col>
                            <img src={wedding} width="500px" height="300px" />
                        </Col>
                        <Col style={{ margin: "70px 20px" }}>
                            <p className="lead"><b>Planning a wedding?</b></p>
                            <p className="lead">Planning a wedding? Don't freight.. we will help you plan everything from the cutlery
                            on the table to your perfect wedding dress. We will assist you in picking your flowers, cake,
                            theme with the help our experts.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ margin: "70px 20px" }}>
                            <p className="lead"><b>Planning a Party?</b></p>
                            <p className="lead">We will make this a stress free event. We can help you pick your venue, plan your
                            guest lists and plan your theme. We will provide you with our best waiters and waitresses to make sure
                            you have the best party possible.</p>
                        </Col>
                        <Col>
                            <img src={drinks} width="500px" height="300px" />
                        </Col>
                    </Row>
                </Container>

                {/**Testimonials */}
                <div className="jumbotron" style={{ backgroundColor: '#343A40', margin: '15px 0px 0px 0px' }}>
                    <h1 className="display-4" style={{ color: 'white' }}>Testimonials</h1>
                    <Testimonials></Testimonials>
                </div>

            </div>
        );
    }

}