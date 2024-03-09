import slugify from "slugify";
import CategoryModels from "../models/CategoryModels.js";

export const CategoryController = async (req, res) => {
    try {
        const { name } = req.body; // Destructure 'name' from req.body

        if (!name) {
            return res.status(404).send({
                message: "Name is required",
                success: false,
            });
        }

        // Check if category with the same name already exists
        const existingCategory = await CategoryModels.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                message: "Category already exists",
                success: true,
            });
        }

        // Create a new category
        const category = await new CategoryModels({
            name,
            slug: slugify(name),
        }).save();

        res.status(201).send({
            success: true,
            message: "New category added",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "An error occurred",
        });
    }
};

//update-category-cotroller
export const updateCategoryController=async(req,res)=>{
    try{
        const {name} =req.body
        const {id} = req.params
        const category = await CategoryModels.findByIdAndUpdate(id,{name,slug: slugify(name)},{new: true})
        res.status(200).send({
            success: true,
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            message:"Error Occured",
            success: false,
        })
    }
}

//getallcat

export const getAllCategoryController=async(req,res)=>{
try {
    const category = await CategoryModels.find({})
    res.status(200).send({
        success: true,
        message: "All category list",
        category,
    })
} catch (error) {
    console.log(error);
    res.status(500).send({
        message:"Error Occured",
        success: false,
    })
}
}

//single category controller

export const singleCategoryController=async(req,res)=>{
    try {
        const category = await CategoryModels.findOne({slug:req.params.slug})
        res.status(200).send({
            success: true,
            message: "single category options displayed.",
            category
        })
    } catch (error) {
        console.log(error);
        error
    }
}

//delete category controller

export const deleteCategoryController=async(req,res)=>{
    try {
        const {id} = req.params
       await CategoryModels.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: "Category Deleted Successfully.",
        })
    } catch (error) {
        console.log(error);
        error
    }
}