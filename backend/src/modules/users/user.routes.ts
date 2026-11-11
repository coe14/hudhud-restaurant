import { Router } from "express";
import { registerUser, loginUser } from "./user.controller.js";

const router = Router();

// Register እና Login ራውቶች
router.post("/register", registerUser);
router.post("/login", loginUser);

export const userRoutes = router;
