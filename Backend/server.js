const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");

app.use(cors());
app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/api/booking', (req, res)=> {

    const mybooking = [ {
        "Name": "Jane Doe",
        "Occassion": "Wedding Party",
        "Date" : "23/04/2021",
        "CostPerPerson" : "100",
        "NoGuests" : "300"
        },
        {
        "Name": "John Doe",
        "Occassion": "30th Birthday",
        "Date" : "15/06/2021",
        "CostPerPerson" : "30",
        "NoGuests" : "120"
        },
        {
        "Name": "Bord Bia",
        "Occassion": "Food Festival",
        "Date" : "02/02/2021",
        "CostPerPerson" : "15",
        "NoGuests" : "200"
        }];

    res.status(200).json ({
    message : "Connection Successful",
    booking:mybooking});
})

app.post('/api/booking', (req, res)=>{
    console.log('Booking Confirmed');
    console.log(req.body.Name);
    console.log(req.body.Occassion);
    console.log(req.body.Date);
    console.log(req.body.CostPerPerson);
    console.log(req.body.NoGuests);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})