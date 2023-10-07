const PDF = require('../models/pdf')

const storePDf = (req, res, next) => {
    let pdf = new PDF({
        name: req.body.name,
        description: req.body.description
    })
    if(req.file){
        pdf.fileName = req.file.path
    }
    pdf.save()
    .then(response => {
        res.json({
            message: "Pdf uploaded succesfully."
        })
    .catch(error => {
        res.json({
            message: "An error occured."
        })
    })
    })
}

module.exports = {storePDf};