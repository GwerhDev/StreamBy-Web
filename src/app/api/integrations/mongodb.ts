import mongoose from "mongoose";
import { mongodbString } from "../config";

mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongodbString || "");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;