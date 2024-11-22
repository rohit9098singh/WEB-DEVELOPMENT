const router=require("express").Router();
const {createProduct,getAllProducts,getProductById,updateProduct,deleteProduct}=require("../controllers/productController");
const authenticate=require("../middlewares/Auth");
const productValidation=require("../middlewares/productvalidation")


router.get("/",getAllProducts);

router.post("/create",authenticate,productValidation,createProduct);

router.get("/:id",getProductById);

router.put("/:id",authenticate,productValidation,updateProduct);

router.delete("/:id",authenticate,deleteProduct)

module.exports=router;