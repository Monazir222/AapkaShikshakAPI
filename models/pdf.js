const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fileName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

const Pdf = mongoose.model('pdfUpload', pdfSchema);
module.exports = Pdf;