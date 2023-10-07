const express = require('express')
const router = express.Router()

const {
    storePDf, 
} = require('../controllers/pdf')
const upload = require('../middleware/uploadPdf')

// router.post('/storePdf',storePDF)
// router.route("/storePdf").post(storePDF);
router.post('/',upload.single('fileName'), storePDf);

module.exports = router