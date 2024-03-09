import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://tanshuman145:Ansh%4012a1@cluster0.a87t2mr.mongodb.net/ecommerce',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected!! Hosted on ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
