import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import morgan from 'morgan';
import registerController from './controllers/authControllers.js';
import { logincontroller } from './controllers/authControllers.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors';
import ProductRoutes from './routes/ProductRoutes.js'
import { CategoryController } from './controllers/CategoryController.js';
import categoryRoutes from './routes/CategoryRoutes.js';
import { productController } from './controllers/ProductController.js';

//dotenv configured


//database connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/products',ProductRoutes);


//rest api
app.get('/',(req,res)=>{
    res.send("<h1>hello</h1>");
});

//PORT
const PORT = 8080;

//Server start//listening
app.listen(PORT,()=>{
    console.log(`Server is running!! on ${PORT}`)
})