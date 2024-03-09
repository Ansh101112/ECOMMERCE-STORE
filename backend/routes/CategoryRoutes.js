import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { CategoryController, deleteCategoryController, getAllCategoryController, singleCategoryController, updateCategoryController } from '../controllers/CategoryController.js';

const router = express.Router();

// Routes
router.post('/create-category', requireSignIn, isAdmin, CategoryController);
router.put('/update-category/:id', requireSignIn, isAdmin, updateCategoryController);
router.get('/getall-category', getAllCategoryController);
router.get('/single-category/:slug', singleCategoryController);
router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController);

export default router;
