import axios from "axios";
import type { FoodItem, Category, Order } from "../types/index";const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// 1. ምግቦችን ከባክኤንድ / ዳታቤዝ ለማምጣት (GET Foods)
export const fetchFoods = async (): Promise<FoodItem[]> => {
  const response = await API.get("/foods");
  return response.data;
};

// 2. የምግብ ምድቦችን ለማምጣት (GET Categories)
export const fetchCategories = async (): Promise<Category[]> => {
  const response = await API.get("/categories");
  return response.data;
};

// 3. አዲስ ትዕዛዝ ወደ ባክኤንድ ለመላክ (POST Order)
export const createOrder = async (orderData: Order) => {
  const response = await API.post("/orders", orderData);
  return response.data;
};
