import { Router } from "express";
import { verifyPayment } from "./payment.controller.js";

const router = Router();

// የክፍያ ማረጋገጫ ራውት
router.post("/verify", verifyPayment);

export const paymentRoutes = router;
