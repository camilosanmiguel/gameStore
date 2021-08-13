const Sale = require("../models/sale");
const Product = require("../models/product");
const User = require("../models/user");

const registerSale = async (req,res) => {
    if (!req.body.name) {
        return res.status(401).send("Process failed: Imcoplete data");
    }
    let product = await Product.findOne({name:req.body.productName});
    if ( !product ) return res.status(400).send("Process failed: No product was assigned");

    let user = await User.findOne({name:req.body.userName});
    if ( !user ) return res.status(400).send("Process failed: No user was assigned");

    const sale = new Sale({
        productId: product._id,
        userId: user._id,
        price:req.body.price,
    });
    const result = await sale.save();
    if (!result) return res.status(401).send("Failed to register sale")
    return res.status(200).send({sale});
};

const listSale = async (req,res) => {
    const Sale = await Sale.find();
    if(!Sale) return res.status(401).send("No Sale");
    return res.status(200).send({sale});
};

module.exports = { registerSale , listSale };