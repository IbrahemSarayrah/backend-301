'use strict'

const myUserModel = require('./myUserModel')


function deleteFromFavData(req,res){

    let index = Number(req.params.id)
    let email = req.query.email

    myUserModel.find({email:email},(error,userData)=>{

            if(error){
                res.send(error)
            }else {
                
                userData[0].color.splice(index,1)
                userData[0].save()
                res.send(userData[0].color)
            }

    })
}

module.exports=deleteFromFavData