import mongoose from "mongoose"

export const connectDB = async (uri) => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected", conn.connection.host);
        
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1); // status code 1 means failure , 0 means success
    }
}