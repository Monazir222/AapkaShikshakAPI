require("dotenv").config();
const connectDB = require("./db/connect");
const { startSession } = require("./models/products");
const Product = require("./models/products");

const ProductJSON = require("./product.json");

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.create(ProductJSON);
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start();