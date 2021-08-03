'use strict'

const myUserModel=require('./myUserModel')


function getMyFavData (req,res){

    let email=req.query.email

    myUserModel.find({email:email}, (error,userData)=>{

        if(error){
            res.send(error)
        } else {
            res.send(userData[0].color)
        }

    })

}

module.exports=getMyFavData