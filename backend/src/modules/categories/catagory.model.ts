import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  cuisineType: "ETHIOPIAN" | "INTERNATIONAL";
  description?: string;
  imageUrl?: string;
  isActive: boolean;
  sortOrder?: number;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    cuisineType: {
      type: String,
      required: true,
      enum: ["ETHIOPIAN", "INTERNATIONAL"],
    },
    description: { type: String },
    imageUrl: { type: String },
    isActive: { type: Boolean, default: true },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true },
);

export const Category = mongoose.model<ICategory>("Category", categorySchema);
