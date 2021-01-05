const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());
app.use(function(req, res, next) { 
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept"); 
    next(); });

//Lines for configuration to show where build and static folder is located
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const myConnectionString = 'mongodb+srv://amy_admin:AmyFinlay@cluster0.qmqwz.mongodb.net/booking?retryWrites=true&w=majority';
mongoose.connect(myConnectionString, {useNewUrlParser: true});

const Schema = mongoose.Schema

var bookingSchema = new Schema({
    Name: String,
    Occassion: String,
    Date: String,
    CostPerPerson: String,
    NoGuests: String
});

var BookingModel = mongoose.model("booking", bookingSchema);

app.get('/api/booking', (req, res)=> {

    BookingModel.find((err, data)=>{
        res.json(data);
    })
})

app.get('/api/booking/:id', (req,res)=>{
    console.log(req.params.id);

    BookingModel.findById(req.params.id, (err, data) =>{
        res.json(data);
    })
})

app.put('/api/booking/:id', (req, res,) => {
    console.log("Update Booking:"+req.params.id);
    console.log(req.body);

    BookingModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

app.delete('/api/booking/:id', (req, res) => {
    console.log("Delete Booking: " +req.params.id);

    BookingModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

app.post('/api/booking', (req, res)=>{
    console.log('Booking Confirmed');
    console.log(req.body.Name);
    console.log(req.body.Occassion);
    console.log(req.body.Date);
    console.log(req.body.CostPerPerson);
    console.log(req.body.NoGuests);

    BookingModel.create({
        Name:req.body.Name,
        Occassion:req.body.Occassion,
        Date:req.body.Date,
        CostPerPerson:req.body.CostPerPerson,
        NoGuests:req.body.NoGuests
    })

    res.send('Booking Confirmed');
})

//All other routes sent to index.html
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})