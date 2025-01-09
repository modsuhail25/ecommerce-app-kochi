import express from "express";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middlewares/errorHandler.js";
import dotenv from "dotenv";
dotenv.config();

connectDb();
const app = express();

app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Ecommerce App");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`ecommerce app listening on port ${port}`);
});
