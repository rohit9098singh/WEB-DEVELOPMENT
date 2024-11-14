const Product =require("../db").Product;

const getProductDetails = async (req, res) => {
       try {
         const data = await Product.find({}); // Make sure .toArray() works for your setup
         res.json(data); // Return the data
       } catch (error) {
         console.error(error);
         res.status(500).json({ error: "Failed to fetch product details", details: error.message });
       }
     };
     
module.exports =getProductDetails