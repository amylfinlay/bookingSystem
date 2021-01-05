/**
 * Name: Amy Finlay
 * ID: G00360784
 * Edit Booking Page
 */

import React from 'react';
import axios from 'axios';

//Creates header class and extends into component
export class Edit extends React.Component {

    constructor() {
        super();

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeOccassion = this.onChangeOccassion.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCostPerPerson = this.onChangeCostPerPerson.bind(this);
        this.onChangeNoGuests = this.onChangeNoGuests.bind(this);

        this.state = {
            Name: '',
            Occassion: '',
            Date: '',
            CostPerPerson: '',
            NoGuests: ''
        }
    }

    //life cycle hook and async function
    componentDidMount() {
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/booking/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Name: response.data.Name,
                    Occassion: response.data.Occassion,
                    Date: response.data.Date,
                    CostPerPerson: response.data.CostPerPerson,
                    NoGuests: response.data.NoGuests
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

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

    onSubmit(e) {
        e.preventDefault();
        alert("Your booking has been successfully changed");

        const newBooking = {
            Name: this.state.Name,
            Occassion: this.state.Occassion,
            Date: this.state.Date,
            CostPerPerson: this.state.CostPerPerson,
            NoGuests: this.state.NoGuests,
            _id: this.state._id
        }

        axios.put('http://localhost:4000/api/booking/' + this.state._id, newBooking)
            .then(res => {
                console.log(res.data)
            })
            .catch();

    }

    render() {
        return (
            <div className='App' style={{ margin: "50px 200px" }}>
                <h1 className="display-4">Edit your event...</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <p className="lead" style={{textAlign: "left"}}>Your Name/Company Name</p>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName} style={{ color: "red" }}></input>
                    </div>
                    <div className="form-group">
                    <p className="lead" style={{textAlign: "left"}}>Occassion</p>
                        <input type='text'
                            className='form-control'
                            value={this.state.Occassion}
                            onChange={this.onChangeOccassion} style={{ color: "red" }}></input>
                    </div>
                    <div className="form-group">
                    <p className="lead" style={{textAlign: "left"}}>Date</p>
                        <input type='text'
                            className='form-control'
                            value={this.state.Date}
                            onChange={this.onChangeDate} style={{ color: "red" }}></input>
                    </div>
                    <div className="form-group">
                    <p className="lead" style={{textAlign: "left"}}>Cost Per Person</p>
                        <input type='text'
                            className='form-control'
                            value={this.state.CostPerPerson}
                            onChange={this.onChangeCostPerPerson} style={{ color: "red" }}></input>
                    </div>
                    <div className="form-group">
                    <p className="lead" style={{textAlign: "left"}}>No. of Guests</p>
                        <input type='text'
                            className='form-control'
                            value={this.state.NoGuests}
                            onChange={this.onChangeNoGuests} style={{ color: "red" }}></input>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Edit Booking'
                            className="btn" style={{ backgroundColor: '#B9321C', color: 'white' }}></input>
                    </div>
                </form>
            </div>
        );
    }

}