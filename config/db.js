import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongodburl);
        console.log('MongoDB connected');


    }
    catch (error) {
        console.error(error.message);
        process.emit(1);
    }

};
export default connectDB;

