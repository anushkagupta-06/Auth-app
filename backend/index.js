const express = require("express");
const app = express();
const bodyParser = require("body-parser");        //to fetch details from user
const cors = require("cors");
require("dotenv").config();
require("./models/db");
const authRouter = require("./routes/authRouter");
const Products = require("./routes/productRouter.js");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());       //to allow contact b/w servers on different port

app.use("/auth", authRouter);
app.use("/products", Products);

app.listen(PORT, () => {
    console.log(`App is listening on PORT : ${PORT}`);
}) 