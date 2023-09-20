const mongoose = require("mongoose");
// const { options } = require("../routes/products");

// uri = 
// "mongodb+srv://monaziralam7860:mannu7890@aapkashikshakapi.erlgbcy.mongodb.net/aapkashikshakapi?retryWrites=true&w=majority";



const connectDB = (uri) => {
    // console.log("DB connected");
    return mongoose.connect (uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    });
}

module.exports = connectDB;
