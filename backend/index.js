const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();

const Product = require("./routes/product");
const Role = require("./routes/role");
const User = require("./routes/user");
const Stock = require("./routes/stock");
const Sale = require("./routes/sale");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/product",Product);
app.use("/api/role",Role);
app.use("/api/user",User);
app.use("/api/stock",Stock);
app.use("/api/sale",Sale);

app.listen(process.env.PORT, () => console.log("backen server runnin ok, on port: ",process.env.PORT));

dbConnection();