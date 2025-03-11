import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conncted to MongoDB");
        return conn;
    } catch (error) {
        console.log(error);
    }
}
