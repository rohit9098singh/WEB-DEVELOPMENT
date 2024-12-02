import foodModel from "../models/foodModel.js";
import fs from "fs";

// Add food items
const addFood = async (req, res) => {
    let image_filename = req.file ? req.file.filename : null;

    const food = new foodModel({
        name:req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: image_filename,
        category: req.body.category,
    });

    try {
        await food.save();
        res.json({
            success: true,
            message: "Food added successfully",
        });
    } catch (error) {
        console.error(error);
        res.json({
            success: false,
            message: "Error while adding food",
        });
    }
};


const getAllFood = async (req, res) => {
    try {
        const foods=await foodModel.find({});
        res.json({
            success:true,
            data:foods
        })
    } catch (error) {
         console.log(Error);
         res.json({
            success:false,
            message:"some error occured"
         })
         
    }
};

const removeFood = async (req, res) => {
     try {
        const food=await foodModel.findById(req.body.id);
        fs.unlink(`uploads/₹{food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success:true,
            message:"food removed successfully"
        })
     } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:"some error occured"
        })
     }
};


// Correct ESM export
export { addFood, removeFood, getAllFood };
