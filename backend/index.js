const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();

const Product = require("./routes/product");
const User = require("./routes/almacen");
const Stock = require("./routes/almacen");
const Sale = require("./routes/almacen");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product",Product);
app.use("/api/user",User);
app.use("/api/stock",Stock);
app.use("/api/sale",Sale);

app.listen(process.env.PORT, () => console.log("backen server runnin ok, on port: ",process.env.PORT));

dbConnection();