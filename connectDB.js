const {MongoClient} = require('mongodb');

const uri = "mongodb://localhost:27017/";
const db = "BalajiElectronics";
const client = new MongoClient(uri);

//updating customer query, receiverNo and senderNo
async function updateDBQuery(message, receiverNo)
{  
    let document = {query:message, proprietorNo:receiverNo, status:'sent'};
    try{
        await client.connect();
        console.log("connected to db");

        let result = await client.db('BalajiElectronics').collection('Queries').insertOne(document);
        console.log(result);
    }
    catch(error) {
        console.log('Couldnt connect to db');
    }
    finally{
        console.log('disconnected from db');
        await client.close();
    }
}

//updating booking information
async function updateDBbooking(bookTime, bookDate, bookName, bookAddress, bookPhoneNo)
{  
    let document = {
        time: bookTime,
        date: bookDate,
        name: bookName,
        address: bookAddress,
        phoneNo: bookPhoneNo
    };
    try{
        await client.connect();
        console.log("connected to db");

        let result = await client.db('BalajiElectronics').collection('Booking').insertOne(document);
        console.log(result);
    }
    catch(error) {
        console.log('Couldnt connect to db');
    }
    finally{
        console.log('disconnected from db');
        await client.close();
    }
}

//returning booked slots
async function getBookedSlots(selectedDate)
{
    try{
        await client.connect();
        console.log("connected to db");

        let resultArr = [];
        let result = await client.db('BalajiElectronics').collection('Booking').find({date: selectedDate}).toArray();
        result.forEach((element, index)=>{
            if(index <= 2) resultArr.push(element.time);
        });
        console.log(resultArr);
        return resultArr;
    }
    catch(error) {
        console.log('Couldnt connect to db');
    }
    finally{
        console.log('disconnected from db');
        await client.close();
    }
}

async function getJSONdata(collection)
{
    try{
        await client.connect();
        return await client.db('BalajiElectronics').collection(collection).find({}).toArray();
    }
    catch(error) {
        console.log('Couldnt connect to db');
    }
    finally{
        console.log('disconnected from db');
        await client.close();
    }
}

module.exports = {
    updateDBQuery,
    updateDBbooking,
    getBookedSlots,
    getJSONdata
}