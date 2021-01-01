/**
 * Name: Amy Finlay
 * ID: G00360784
 * Read UpComing Events
 */

import axios from 'axios';
import React from 'react';
import { Booking } from './booking';

//Creates header class and extends into component
export class Read extends React.Component {

    constructor() {
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        booking: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/booking')
            .then(
                (response) => {
                    this.setState({ booking: response.data })
                })
            .catch((error) => {
                console.log(error)
            });
    }

    ReloadData() {
        axios.get('http://localhost:4000/api/booking')
            .then(
                (response) => {
                    this.setState({ booking: response.data })
                })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                {/**Displays text */}
                <h1 className="display-4">View our Upcoming Events...</h1>
                <Booking booking={this.state.booking} ReloadData={this.ReloadData}></Booking>
            </div>
        );
    }

}