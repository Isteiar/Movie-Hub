import mongoose from "mongoose";

export const connectedToDB = async () => {
  await mongoose.connect(process.env.DB_URL || "");
};
