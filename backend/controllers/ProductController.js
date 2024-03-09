import ProductModels from "../models/ProductModels.js";

export const productController=async(req,res)=>{
        try {
            const {name,slug,description,price,category,quantity,shipping} = req.fields
            const {photo} = req.fields
            //validation
            switch(true){
                case !name:
                    return res.status(500).send({error: "Name is required"});
                case !description:
                    return res.status(500).send({error: "Description is required"});
                case !category:
                    return res.status(500).send({error: "Category is required"});
                case !quantity:
                    return res.status(500).send({error: "Quantity is required"});
                case !photo && photo.size > 3000000:
                    return res.status(500).send({error: "Photo size must be less than 5MB."});         
            }

const products = new ProductModels({...req.fields,slug:slugify(name)})
if(photo){
    products.photo.data = fs.readFileSync(photo.path)
    products.photo.contentType = photo.type
}
await products.save();
res.status(200).send({
    success: true,
    message: "Product created successfully.",
    products,
})
        } catch (error) {
            console.log(error);
            error
        }
}

//get-product

export const GetProductController=async()=>{
    try {
        const products = await ProductModels.find({}).populate('category').select("-photo").limit(12).sort({createdAt: -1});
        res.status(200).send({
        message: "All Products",
        countotal: products.length,
        success: true,
        products,
    })
    } catch (error) {
        console.log(error);
    }
}

//single product getting

export const singleProductController=async()=>{
    try {
      const product = await ProductModels.findOne({slug:req.params.slug}).select('-photo').populate('category');
    } catch (error) {
        console.log(error);
    }
}

//photocontrollers

export const photoProductController=async(req,res)=>{
    try {
      const product = await ProductModels.findById(req.params.pid).select('photo')
      if(product.photo.data){
        res.set('content-type',product.photo.contentType)
        return res.status(200).send(product.photo.data);
      }
    } catch (error) {
        console.log(error);
    }
}

//delete controller product

export const deleteProductController=async()=>{
    try {
      await ProductModels.findByIdAndDelete(req.params.pid).select("-photo")
      res.status(200).send({
        success: true,
        message: "product deleted successfully",
      })
    } catch (error) {
        console.log(error);
    }
}

//update product controller

// export const updateProductController=async(req,res)=>{
//     try {
//         const {name,slug,description,price,category,quantity,shipping} = req.fields
//         const {photo} = req.fields
//         //validation
//         switch(true){
//             case !name:
//                 return res.status(500).send({error: "Name is required"});
//             case !description:
//                 return res.status(500).send({error: "Description is required"});
//             case !category:
//                 return res.status(500).send({error: "Category is required"});
//             case !quantity:
//                 return res.status(500).send({error: "Quantity is required"});
//             case !photo && photo.size > 3000000:
//                 return res.status(500).send({error: "Photo size must be less than 5MB."});         
//                 const products = new ProductModels({...req.fields,slug:slugify(name)})
//                 if(photo){
//                     products.photo.data = fs.readFileSync(photo.path)
//                     products.photo.contentType = photo.type
//                 }
//                 await products.save();
//                 res.status(200).send({
//                     success: true,
//                     message: "Product updated successfully.",
//                     products,
//     } catch (error) {
//         console.log(error);
//     }
// }