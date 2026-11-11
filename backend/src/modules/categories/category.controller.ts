import type { Request, Response } from "express";
import { Category } from "./category.model.js";

// የምግብ ምድቦችን በሙሉ ለማምጣት (GET /api/categories)
export const getCategories = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const categories = await Category.find({ isActive: true }).sort({
      sortOrder: 1,
    });
    res.status(200).json({
      success: true,
      count: categories.length,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

// አዲስ የምግብ ምድብ ለመጨመር (POST /api/categories)
export const createCategory = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, slug, cuisineType, description, imageUrl, sortOrder } =
      req.body;

    const existingCategory = await Category.findOne({ slug });
    if (existingCategory) {
      res
        .status(400)
        .json({
          success: false,
          message: "Category with this slug already exists",
        });
      return;
    }

    const category = await Category.create({
      name,
      slug,
      cuisineType,
      description,
      imageUrl,
      sortOrder,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
