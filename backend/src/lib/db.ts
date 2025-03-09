import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`Connected to MongoDB: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDb;