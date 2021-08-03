'use strict'

require('dotenv').config();
const express=require('express')
const cors=require('cors')
const app=express();

app.use(cors());
app.use(express.json());
const PORT=process.env.PORT

const mongoose = require("mongoose");

// 'mongodb://localhost:27017/ColorDataBase'
// 'mongodb://ibrahem:mkexU8D3U8ME0Irb@cluster0-shard-00-00.lcjdj.mongodb.net:27017,cluster0-shard-00-01.lcjdj.mongodb.net:27017,cluster0-shard-00-02.lcjdj.mongodb.net:27017/ColorDataBase?ssl=true&replicaSet=atlas-mhw0gl-shard-0&authSource=admin&retryWrites=true&w=majority'
mongoose.connect(process.env.MONGODB,{ useNewUrlParser: true, useUnifiedTopology: true });

const myUserModel=require('./modules/myUserModel')


const  testhandler=require('./modules/testhandler')
const getMyFavData=require('./modules/getMyFavData')
const getApiColorsData=require('./modules/getApiColorsData')
const addToFav=require('./modules/addToFav')
const deleteFromFavData=require('./modules/deleteFromFavData')



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



app.listen(PORT, () =>{
    console.log(`listin on ${PORT}`);
})
