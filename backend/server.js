import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

import productRouter from "./routes/productRoutes.js";
dotenv.config();
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/products', productRouter);


app.listen(port, () => console.log(`Server running on port ${port}`));
