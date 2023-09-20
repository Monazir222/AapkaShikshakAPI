require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db/connect");

app.use(express.json());
// app.use(cors());

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/", (req, res) => {
     res.send("aapka shikshak !");
});

//middleware or To set routes
app.use("/api/products", products_routes )

const start = async () => {
    try {
     await connectDB(process.env.MONGODB_URL);
     app.listen(PORT, () => {
     console.log(`${PORT} Connected`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();

  
// app.listen(5500, () => {
//     console.log("Connected to backend.!!");
//   });