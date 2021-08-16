'use strict'

require('dotenv').config();
const express=require('express')
const cors=require('cors')
const app=express();

app.use(cors());
app.use(express.json());
const PORT=process.env.PORT

const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB,{ useNewUrlParser: true, useUnifiedTopology: true });

const myUserModel=require('./modules/myUserModel')


const  testhandler=require('./modules/testhandler')
const getMyFavData=require('./modules/getMyFavData')
const getApiColorsData=require('./modules/getApiColorsData')
const addToFav=require('./modules/addToFav')
const deleteFromFavData=require('./modules/deleteFromFavData')
const updateFromFavData=require('./modules/updateFromFavData')


// http://localhost:3001/
app.get('/',testhandler)


// http://localhost:3001/myFav?email=ibrahem.sarayrah@gmail.com
app.get('/myFav' , getMyFavData)


// http://localhost:3001/colors
app.get('/colors', getApiColorsData)


// http://localhost:3001/addToFav
app.post('/addToFav' , addToFav)


// http://localhost:3001/delete
app.delete('/delete/:id',deleteFromFavData)


// http://localhost:3001/update
app.put('/update/:id',updateFromFavData)

app.listen(PORT, () =>{
    console.log(`listin on ${PORT}`);
})
