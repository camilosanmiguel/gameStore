const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    cod:String,
    description:String,
    date: {type:Date,default:Date.now},
    // stockId: {type:mongoose.Schema.ObjectId,ref:"stock"},
});

const product = mongoose.model("product",productSchema);
module.exports = product;