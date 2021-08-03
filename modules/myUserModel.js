'use strict'

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let colorData = new Schema({
    title: String,
    imageUrl: String,
})

let userData = new Schema({
    email: String,
    color: [colorData]
})

let myUserModel = mongoose.model("color", userData);


function seed() {
    let userData = new myUserModel({
        email: 'ibrahem.sarayrah@gmail.com',
        color: [
            {
                title: "Black",
                imageUrl: "http://www.colourlovers.com/img/000000/100/100/Black.png",
            },
            {
                title: "dutch teal",
                imageUrl: "http://www.colourlovers.com/img/1693A5/100/100/dutch_teal.png",
            },
            {
                title: "heart of gold",
                imageUrl: "http://www.colourlovers.com/img/FBB829/100/100/heart_of_gold.png",
            }
        ]
    })
    // userData.save()
}

// seed();

module.exports = myUserModel