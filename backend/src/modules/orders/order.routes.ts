import { Router } from "express";
import { createOrder, getAllOrders } from "./order.controller.js";

const router = Router();

// አዲስ ትዕዛዝ መስጠት እና ትዕዛዞችን ማምጣት
router.post("/", createOrder);
router.get("/", getAllOrders);

export const orderRoutes = router;
