import express from 'express';
import { isAdmin,requireSignIn } from '../middlewares/authMiddleware.js';
import { GetProductController, deleteProductController, photoProductController, productController, singleProductController } from '../controllers/ProductController.js';
import { singleCategoryController } from '../controllers/CategoryController.js';

const router = express.Router();

//routes
router.post('/create-product',requireSignIn,isAdmin,productController);
router.post('/update-product',requireSignIn,isAdmin,);
router.get('/get-product',GetProductController);
router.get('/get-product/:slug',singleProductController);
router.get('/product-photo/:pid',photoProductController);
router.delete('/product',requireSignIn,isAdmin,deleteProductController);

export default router;