import express from "express";
import dotenv from "dotenv";
import { connectedToDB } from "./config/db";
import router from "./routes/index.route";
dotenv.config();

const PORT: number = parseInt(process.env.PORT as string) || 4000;

const app = express();

app.use(express.json());

app.use("/api", router);

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
