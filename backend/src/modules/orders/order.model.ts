import { Schema, model, Document, type Types } from "mongoose";

export interface IOrderItem {
  foodItemId: Types.ObjectId;
  name: string; // 👈 ሾትሾት (Snapshot name)
  price: number; // 👈 በወቅቱ የነበረው ዋጋ (Snapshot price)
  quantity: number;
}

export interface IOrder extends Document {
  customerId: Types.ObjectId;
  items: IOrderItem[];
  totalAmount: number;
  deliveryAddress: string;
  paymentMethod: "CASH_ON_DELIVERY" | "TELEBIRR" | "CHAPA";
  orderStatus: "PENDING" | "PREPARING" | "DELIVERED" | "CANCELLED";
  createdAt: Date;
  updatedAt: Date;
}

const orderItemSchema = new Schema<IOrderItem>({
  foodItemId: { type: Schema.Types.ObjectId, ref: "FoodItem", required: true },
  name: { type: String, required: true }, // 👈 የምግቡ ስም በወቅቱ ይቀመጣል
  price: { type: Number, required: true }, // 👈 የምግቡ ዋጋ በወቅቱ ይቀመጣል
  quantity: { type: Number, required: true, min: 1 },
});

const orderSchema = new Schema<IOrder>(
  {
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true, min: 0 },
    deliveryAddress: { type: String, required: true, trim: true },
    paymentMethod: {
      type: String,
      enum: ["CASH_ON_DELIVERY", "TELEBIRR", "CHAPA"],
      default: "CASH_ON_DELIVERY",
    },
    orderStatus: {
      type: String,
      enum: ["PENDing", "PENDING", "PREPARING", "DELIVERED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

export const Order = model<IOrder>("Order", orderSchema);
