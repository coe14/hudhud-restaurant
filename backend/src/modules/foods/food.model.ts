import { Schema, model, Document, type Types } from "mongoose";

export interface IFoodItem extends Document {
  name: string;
  slug: string;
  categoryId: Types.ObjectId;
  price: number;
  description?: string;
  image?: string;
  isAvailable?: boolean;
  isActive?: boolean; // 👈 ይህ መኖሩን አረጋግጥ
  preparationTimeMinutes?: number;
}

const foodItemSchema = new Schema<IFoodItem>(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, trim: true },
    image: { type: String },
    isAvailable: { type: Boolean, default: true },
    isActive: { type: Boolean, default: true }, // 👈 ይህ ስኪማው ላይ መኖሩን አረጋግጥ
    preparationTimeMinutes: { type: Number, default: 15 },
  },
  { timestamps: true },
);

export const FoodItem = model<IFoodItem>("FoodItem", foodItemSchema);
