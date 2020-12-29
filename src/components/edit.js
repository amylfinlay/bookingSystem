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
    componentDidMount(){
        console.log(this.props.match.params.id);

        axios.get('http://localhost:4000/api/booking/'+this.props.match.params.id)
        .then(response =>{
            this.setState({
            _id: response.data._id,
            Name: response.data.Name,
            Occassion: response.data.Occassion,
            Date: response.data.Date,
            CostPerPerson: response.data.CostPerPerson,
            NoGuests: response.data.NoGuests
            })
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }

    onChangeOccassion(e){
        this.setState({
            Occassion: e.target.value
        });
    }

    onChangeDate (e){
        this.setState({
            Date: e.target.value
        });
    }

    onChangeCostPerPerson (e){
        this.setState({
            CostPerPerson: e.target.value
        });
    }

    onChangeNoGuests (e){
        this.setState({
            NoGuests: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        alert("Name: "+this.state.Name +" " +this.state.Occassion+ " "+this.state.Date+" "+this.state.CostPerPerson+
        " "+this.state.NoGuests);

        const newBooking = {
        Name: this.state.Name,
        Occassion: this.state.Occassion,
        Date: this.state.Date,
        CostPerPerson: this.state.CostPerPerson,
        NoGuests: this.state.NoGuests,
        _id: this.state._id
        }

        axios.put('http://localhost:4000/api/booking/'+this.state._id, newBooking)
        .then(res =>{
            console.log(res.data)
        })
        .catch();

    }

    render() {
        return (
            <div className='App'>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Name}
                            onChange={this.onChangeName}></input>
                    </div>
                    <div className="form-group">
                        <label>Occassion:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Occassion}
                            onChange={this.onChangeOccassion}></input>
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Date}
                            onChange={this.onChangeDate}></input>
                    </div>
                    <div className="form-group">
                        <label>Cost Per Person: €</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.CostPerPerson}
                            onChange={this.onChangeCostPerPerson}></input>
                    </div>
                    <div className="form-group">
                        <label>No of Guests:</label>
                        <input type='text'
                            className='form-control'
                            value={this.state.NoGuests}
                            onChange={this.onChangeNoGuests}></input>
                    </div>
                    <div className="form-group">
                        <input type='submit'
                            value='Edit Booking'
                            className="btn btn-primary"></input>
                    </div>
                </form>
            </div>
        );
    }

}