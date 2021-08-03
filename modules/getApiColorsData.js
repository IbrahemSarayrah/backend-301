'use strict'

const { default: axios } = require("axios")

function getApiColorsData(req, res) {

    let url = ('https://ltuc-asac-api.herokuapp.com/allColorData')

    axios.get(url)
        .then(colorsData => {
            let allColorsData = colorsData.data.map(data => {
                return new Colors(data)
            })
            res.send(allColorsData)
            // console.log(colorsData.data);
        }).catch(error => {
            res.send(error)
        })


}



class Colors {
    constructor(color) {
        this.title = color.title;
        this.imageUrl = color.imageUrl;
    }
}

module.exports= getApiColorsData