import mongoose from "mongoose";
import { mongodbString } from "../config";

const connectDB = async () => {
 await mongoose.connect(mongodbString || "");
}

export default connectDB;