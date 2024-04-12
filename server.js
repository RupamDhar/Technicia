const express = require('express');
const mongodb = require('./connectDB');
const path = require('path');

const app = express();
const portno = 8000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//processing GET request for home page
//updating database if query present
app.get('/', (req,res)=>
{
    res.sendFile(path.join(__dirname, '/public/index.html'));
    if(req.query.query!=null) mongodb.updateDBQuery(req.query.query, req.query.receiverNo);
});
app.get('/home', (req,res)=>
{
    res.sendFile(path.join(__dirname, '/public/index.html'));
    if(req.query.query!=null) mongodb.updateDBQuery(req.query.query, req.query.receiverNo);
});

//processing GET request for visit shop page
app.get('/visitshop', (req,res)=>
{
    res.sendFile(path.join(__dirname, '/public/HTML Files/visitshop.html'));
});

//processing GET request for book slot page
app.get('/bookslot', async (req,res)=>
{
    //registering new booking details
    if(req.query.time && req.query.date && req.query.name && req.query.address && req.query.phoneNo)
    {
        let time = req.query.time;
        let date = req.query.date;
        let name = req.query.name;
        let address = req.query.address;
        let phoneNo = req.query.phoneNo;

        mongodb.updateDBbooking(time, date, name, address, phoneNo);
        res.render('slotBookConfirm', {name: name});
    }
    //rendering bookSlot.ejs
    else if(req.query.day && req.query.index)
    {
        let bookedSlots = await mongodb.getBookedSlots(req.query.day);
        res.render('bookSlot', {
            index: req.query.index, 
            day: req.query.day,
            bookedSlots: bookedSlots
        });
        console.log(bookedSlots);
    }
    else res.sendFile(path.join(__dirname, '/public/HTML Files/bookSlot.html'));
});
//getting database datas
app.get('/pechiapi/:category', async (req, res)=>{
    let result = await mongodb.getJSONdata(req.params.category);
    res.json(result);
});


//LISTENING TO PORT
app.listen(portno, ()=>{
    console.log(`Listening to port ${portno} at http://127.0.0.1:${portno}...`);
});