const { z } = require("zod");
const Product = require("../db").Product;
const ProductSchema = require("../type").ProductSchema;

const productController = async (req, res) => {
  const { name, category, image, price, description } = req.body;
  const data = { 
    name, 
    category, 
    image, 
    price: parseFloat(price), 
    description 
  };  
  console.log("productcontrller data",data);
  
  try {
    // Validate request data
    const validationResult = ProductSchema.safeParse(data);
    console.log(validationResult.error);
    
    if (!validationResult.success) {
      return res.status(400).json({
        message: "Invalid data entered",
      });
    }

    // Save product to the database
    const newProduct = new Product({ category, description, image, name, price });
    console.log("your new product is ",newProduct);
    
    await newProduct.save();

    res.status(201).json({
      message: "Product uploaded successfully",
      product: newProduct,
    });
  } catch (error) {
    console.error("Error in productController:", error);
    res.status(500).json({
      message: "Server error, please try again later",
      error: error.message,
    });
  }
};

module.exports = productController;
