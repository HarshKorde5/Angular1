const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
//const router = require('@angular/router')
const port = 5555;
const {MongoClient} = require("mongodb");
const URL = "mongodb://localhost:27017";


const client = new MongoClient(URL);
const app = express();

app.use(bodyparser.json());
app.use(cors());

function StartServer()
{
    console.log("Server is running on port : "+port);
}
app.listen(port,StartServer);

async function GetConnectionp()
{
    let result = await client.connect();
    let db = result.db("Resto");
    return db.collection("posts");
}

async function GetConnections()
{
    let result = await client.connect();
    let db = result.db("Resto");
    return db.collection("signup");
}

async function Postsdata(req,res)
{
    let data = await GetConnectionp();
    data = await data.find().toArray();

    res.send(data);
}
app.get('/post',Postsdata);

async function Add(req,res)
{
    let newresto =req.body;

    let data = await GetConnectionp();
    let result = await data.insertOne(newresto);

    if(result.acknowledged)
    {
        console.log("Data inserted succesfully");
    }

    res.status(200).send({
        "status":true,
        "message":"Data inserted succesfully"
    })
}
app.post('/addresto',Add);

async function RemoveResto(req,res)
{
    let resto = req.params.id;
    console.log(resto);
    let data = await GetConnectionp();
    let result = await data.deleteOne({"name":resto});
    if(result.acknowledged)
    {
        console.log("Data Deleted succesfully");
    }

    res.send({
        "status":true,
        "message":"Data deleted succesfully"
    })
}
app.delete('/delete/:id',RemoveResto);

async function UpdateResto(req,res)
{
    let pid = req.params.id;
    let resto = req.body;
    
    let data = await GetConnectionp();
    let result = await data.updateOne({"name":pid},{$set : resto});

    if(result.acknowledged)
    {
        console.log("Data updated succesfully");
    }

    res.status(200).send({
        "status":true,
        "message":"Data updated succesfully"
    })
}
app.put('/update/:id',UpdateResto);

async function Signupdata(req,res)
{
    let data = await GetConnections();
    data = await data.find().toArray();

    res.send(data);
}
app.get('/signup',Signupdata);

function main()
{
    let ret;
    ret = GetConnectionp();
    console.log("Database connected");
}

main()