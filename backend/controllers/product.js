const Product = require("../models/product");

const registerProduct = async (req,res) => {
    if (!req.body.name) {
        return res.status(401).send("Process failed: Imcoplete data");
    }
    const product = new Product({
        name:req.body.name,
        price:req.body.price,
        cod:req.body.cod,
        description: req.body.description,
    });
    const result = await product.save();
    if (!result) return res.status(401).send("Failed to register product")
    return res.status(200).send({product});
};

const listProduct = async (req,res) => {
    const product = await Product.find();
    if(!product) return res.status(401).send("No product");
    return res.status(200).send({product});
};

module.exports = { registerProduct , listProduct };