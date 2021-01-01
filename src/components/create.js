/**
 * Name: Amy Finlay
 * ID: G00360784
 * Add Booking Page
 */

import React from 'react';
import axios from 'axios';
import { Carousel, Alert } from 'react-bootstrap';
import bar from './images/bar.jpg';
import concert from './images/concert.jpg';
import foodfest from './images/foodfest.jpg';
import 'react-inputs-validation/lib/react-inputs-validation.min.css';

//Creates header class and extends into component
export class Create extends React.Component {


    constructor() {
        super();

        //contains binding for each component
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeOccassion = this.onChangeOccassion.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCostPerPerson = this.onChangeCostPerPerson.bind(this);
        this.onChangeNoGuests = this.onChangeNoGuests.bind(this);

        //defines each state
        this.state = {
            Name: '',
            Occassion: '',
            Date: '',
            CostPerPerson: '',
            NoGuests: ''
        }
    }

    //Contains the event to change different values
    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeOccassion(e) {
        this.setState({
            Occassion: e.target.value
        });
    }

    onChangeDate(e) {
        this.setState({
            Date: e.target.value
        });
    }

    onChangeCostPerPerson(e) {
        this.setState({
            CostPerPerson: e.target.value
        });
    }

    onChangeNoGuests(e) {
        this.setState({
            NoGuests: e.target.value
        });
    }
    //Submit button
    onSubmit(e) {
        e.preventDefault();
        alert("Your booking has been confirmed!")
        const newBooking = {
            Name: this.state.Name,
            Occassion: this.state.Occassion,
            Date: this.state.Date,
            CostPerPerson: this.state.CostPerPerson,
            NoGuests: this.state.NoGuests
        }

        //Posts information to link provided
        axios.post('http://localhost:4000/api/booking', newBooking)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    //Displays form 
    render() {
        return (
            <div className='App' style={{ margin: "50px 200px" }}>
                <h1 className="display-4">Book your event with us today</h1>
                <form onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <input type='text'
                            className='form-control'
                            name='validation'
                            id='validation'
                            required
                            value={this.state.Name}
                            onChange={this.onChangeName} placeholder="Name"></input>
                    </div>

                    <div className="form-group">
                        <input type='text'
                            className='form-control'
                            name='validation'
                            id='validation'
                            required
                            value={this.state.Occassion}
                            onChange={this.onChangeOccassion} placeholder="Occassion"></input>
                    </div>

                    <div className="form-group">
                        <input type='text'
                            className='form-control'
                            name='validation'
                            id='validation'
                            required
                            value={this.state.Date}
                            onChange={this.onChangeDate} placeholder="Date DD/MM/YY"></input>
                    </div>
                    <div className="form-group">
                        <input type='text'
                            className='form-control'
                            name='validation'
                            id='validation'
                            required
                            value={this.state.CostPerPerson}
                            onChange={this.onChangeCostPerPerson} placeholder="Cost Per Person"></input>
                    </div>

                    <div className="form-group">
                        <input type='text'
                            className='form-control'
                            name='validation'
                            id='validation'
                            required
                            value={this.state.NoGuests}
                            onChange={this.onChangeNoGuests} placeholder="No. of Guests"></input>
                    </div>

                    <div className="form-group">
                        <input type='submit'
                            value='Add Booking'
                            className="btn" style={{ backgroundColor: '#B9321C', color: 'white' }}></input>
                    </div>
                </form>

                <Carousel >
                    <Carousel.Item>
                        <img style={{ maxidth: "80%", height:"auto", minWidth: "60%"}}
                            className="d-block w-100"
                            src={bar} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{ maxidth: "80%", height:"auto", minWidth: "60%"}}
                            className="d-block w-100"
                            src={concert} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img style={{ maxidth: "80%", height:"auto", minWidth: "60%"}}
                            className="d-block w-100"
                            src={foodfest} />
                    </Carousel.Item>
                </Carousel>

            </div>


        );
    }

}