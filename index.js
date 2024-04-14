import express from "express";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import { connectDb } from "./config/connectDb.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import adminRoutes from "./routes/adminRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDb();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, (req, res) => {
  console.log(`SERVER RUNNING ON ${PORT}`);
});
