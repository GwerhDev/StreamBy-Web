import mongoose from "mongoose";
import { mongodbString } from "../config";

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    return await mongoose.connect(mongodbString || "");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;