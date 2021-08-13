const Stock = require("../models/stock");
const Product = require("../models/product");

const registerStock = async (req,res) => {
    if (!req.body.name) {
        return res.status(401).send("Process failed: Imcoplete data");
    }
    let product = await Product.findOne({name:req.body.productName});
    if ( !product ) return res.status(400).send("Process failed: No product was assigned");

    const stock = new Stock({
        amount:req.body.amount,
        direction:req.body.direction,
        productId: product._id,
    });
    const result = await stock.save();
    if (!result) return res.status(401).send("Failed to register stock")
    return res.status(200).send({stock});
};

const listStock = async (req,res) => {
    const Stock = await Stock.find();
    if(!Stock) return res.status(401).send("No Stock");
    return res.status(200).send({stock});
};

module.exports = { registerStock , listStock };