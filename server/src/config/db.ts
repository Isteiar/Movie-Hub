import { connect } from "mongoose";

export const connectedToDB = async () => {
  await connect(process.env.DB_URL || "");
};
