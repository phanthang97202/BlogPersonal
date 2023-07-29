import mongoose from "mongoose";
let isConnected = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Already Connecting to database");
    return;
  }
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {}
};
