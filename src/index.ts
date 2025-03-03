import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectToDatabase } from "./config/connectDb";
import projectRouter from './routes/projectRoutes'
import { errorHandle } from "./middleware/errorHandle";

dotenv.config();

const app: Express = express();
 
const corsOption = {
  origin: process.env.CORS,
  method: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors(corsOption));

app.use('/api/project',projectRouter)

app.use(errorHandle)

const PORT = process.env.PORT || 3000;
const startServer = async (): Promise<void> => {
  try {
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`server running on port${PORT}`);
    });
  } catch (error) {
    console.error("error:", error);
    process.exit(1);
  }
};

startServer();
