import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.DB_URL) {
      console.log(`Missing DB_URL key in .env`);
      process.exit(1);
    }
    console.log(`Attempting to connect to MongoDB...`);
    await mongoose.connect(process.env.DB_URL);
    console.log(`Connected to MongoDB!`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
