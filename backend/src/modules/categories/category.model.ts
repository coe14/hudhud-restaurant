import { Schema, model, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  cuisineType: "ETHIOPIAN" | "MIDDLE_EASTERN" | "FUSION";
  description?: string;
  imageUrl?: string;
  isActive: boolean;
  sortOrder: number;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    cuisineType: {
      type: String,
      enum: ["ETHIOPIAN", "MIDDLE_EASTERN", "FUSION"],
      required: true,
    },
    description: { type: String },
    imageUrl: { type: String },
    isActive: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Category = model<ICategory>("Category", categorySchema);
