import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://modsuhail25:12345@cluster0.62xzl.mongodb.net/data"
    );
    console.log(`Mongodb Connected:${conn.connection.host}`);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default connectDb;
