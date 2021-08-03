'use strict'

const myUserModel = require('./myUserModel')

function addToFav(req, res) {

    let { email, title, imageUrl } = req.body

    myUserModel.find({ email: email }, (error, userData) => {

        if (error) {
            res.send(error)
        } else {
            userData[0].color.push({
                title: title,
                imageUrl: imageUrl,
            })
            userData[0].save()
            res.send(userData[0].color)
        }
    })
}

module.exports=addToFav
