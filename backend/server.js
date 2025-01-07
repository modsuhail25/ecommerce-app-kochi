import express from "express";
import connectDb from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middlewares/errorHandler.js";

connectDb();
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Ecommerce App");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`ecommerce app listening on port ${port}`);
});
