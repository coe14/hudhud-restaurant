import { Router } from "express";
import { getFoodItems, createFoodItem } from "./food.controller.js";

const router = Router();

router.get("/", getFoodItems);
router.post("/", createFoodItem);

export const foodRoutes = router;
