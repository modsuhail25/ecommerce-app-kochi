import express from "express";
import {
  createOrder,
  getMyOrders,
  getOrderById,
} from "../controllers/orderControllers.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, createOrder);
router.route("/:id").post(protect, getOrderById);
router.route("/mine").post(protect, getMyOrders);

export default router;
