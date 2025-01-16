import express from "express";
import {
  createProduct,
  createProductReviews,
  deleteProduct,
  getProducts,
  getProductsById,
  updateProduct,
} from "../controllers/productControllers.js";
import { admin, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductsById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);
router.route("/:id/review").post(protect, createProductReviews);

export default router;
