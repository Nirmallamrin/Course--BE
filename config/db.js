import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

console.log(process.env.DB_URL);

const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("mongodb connected");
    } catch (error) {
        console.log("error", error);
    }
};

export default connect;
