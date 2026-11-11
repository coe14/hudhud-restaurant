import { type Request, type Response } from "express";
import { Order } from "./order.model.js";
import { FoodItem } from "../foods/food.model.js";

// አዲስ ትዕዛዝ መፍጠር (ከ Snapshot ሎጂክ ጋር)
export const createOrder = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { customerId, items, deliveryAddress, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      res
        .status(400)
        .json({ success: false, message: "No items provided in the order" });
      return;
    }

    let calculatedTotal = 0;
    const orderItems: Array<{
      foodItemId: any;
      name: string;
      price: number;
      quantity: number;
    }> = [];

    // እያንዳንዱን የምግብ እቃ በማጣራት ዋጋውን ከዳታቤዝ እናመጣለን (Backend-enforced pricing & Snapshot)
    for (const item of items) {
      const food = await FoodItem.findById(item.foodItemId);
      if (!food) {
        res
          .status(404)
          .json({
            success: false,
            message: `Food item not found: ${item.foodItemId}`,
          });
        return;
      }

      if (food.isAvailable === false) {
        res
          .status(400)
          .json({
            success: false,
            message: `Food item is currently not available: ${food.name}`,
          });
        return;
      }

      // የዕቃው ዋጋ በወቅቱ ተይዞ ይቀመጣል (Snapshot)
      const itemPrice = food.price;
      calculatedTotal += itemPrice * item.quantity;

      orderItems.push({
        foodItemId: food._id,
        name: food.name, // 👈 የምግቡ ስም በወቅቱ ይቀዳል
        price: itemPrice, // 👈 የምግቡ ዋጋ በወቅቱ ይቀዳል
        quantity: item.quantity,
      });
    }

    // አዲሱን ትዕዛዝ በዳታቤዝ መመዝገብ
    const newOrder = await Order.create({
      customerId,
      items: orderItems,
      totalAmount: calculatedTotal,
      deliveryAddress,
      paymentMethod: paymentMethod || "CASH_ON_DELIVERY",
      orderStatus: "PENDING",
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully with snapshot data",
      data: newOrder,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ሁሉንም ትዕዛዞች ማምጣት
export const getAllOrders = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const orders = await Order.find()
      .populate("customerId", "name email phone")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
