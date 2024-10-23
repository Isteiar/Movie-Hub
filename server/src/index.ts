import express from "express";
import dotenv from "dotenv";
import { connectedToDB } from "./config/db";
dotenv.config();

const PORT: number = parseInt(process.env.PORT as string) || 4000;

const app = express();

app.use(express.json());

(async () => {
  try {
    await connectedToDB();
    console.log("DB is connected");

    app.listen(PORT, () =>
      console.log(`Server is runnig on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log("Server is not connected");
  }
})();
