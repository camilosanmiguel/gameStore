const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
    amount:String,
    date: {type:Date,default:Date.now},
    direction:String,
    productId: {type:mongoose.Schema.ObjectId,ref:"product"},
});

const stock = mongoose.model("stock",stockSchema);
module.exports = stock;