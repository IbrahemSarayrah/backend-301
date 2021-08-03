'use strict'

const myUserModel = require('./myUserModel')


function updateFromFavData(req,res){

    let index = Number(req.params.id)
    let {email,updateTitle,updateImageUrl}= req.body

    myUserModel.find({email:email},(error,userData)=>{

            if(error){
                res.send(error)
            }else {
                
                userData[0].color.splice(index,1,{
                    title:updateTitle,
                    imageUrl:updateImageUrl
                })
                userData[0].save()
                res.send(userData[0].color)
            }

    })
}

module.exports=updateFromFavData