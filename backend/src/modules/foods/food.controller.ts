import type { Request, Response } from "express";
import { FoodItem } from "./food.model.js";

// የምግብ እቃዎችን በሙሉ ለማምጣት (GET /api/foods)
export const getFoodItems = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const foods = await FoodItem.find({ isAvailable: true }).populate(
      "categoryId",
      "name slug",
    );
    res.status(200).json({
      success: true,
      count: foods.length,
      data: foods,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

// አዲስ ምግብ ለመጨመር (POST /api/foods)
export const createFoodItem = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const {
      name,
      slug,
      categoryId,
      price,
      description,
      imageUrl,
      preparationTimeMinutes,
    } = req.body;

    const existingFood = await FoodItem.findOne({ slug });
    if (existingFood) {
      res
        .status(400)
        .json({
          success: false,
          message: "Food item with this slug already exists",
        });
      return;
    }

    const foodItem = await FoodItem.create({
      name,
      slug,
      categoryId,
      price,
      description,
      imageUrl,
      preparationTimeMinutes,
    });

    res.status(201).json({
      success: true,
      message: "Food item created successfully",
      data: foodItem,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
