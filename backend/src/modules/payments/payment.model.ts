import { Schema, model, Document, type Types } from "mongoose";

export interface IPayment extends Document {
  orderId: Types.ObjectId;
  customerId: Types.ObjectId;
  amount: number;
  paymentMethod: "CASH_ON_DELIVERY" | "TELEBIRR" | "CHAPA";
  paymentStatus: "PENDING" | "COMPLETED" | "FAILED";
  transactionId?: string; // 👈 ከ ባንክ ወይም ቴሌብር የሚመጣ የግብይት ማረጋገጫ ቁጥር (Reference)
  createdAt: Date;
  updatedAt: Date;
}

const paymentSchema = new Schema<IPayment>(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      unique: true,
    },
    customerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    amount: { type: Number, required: true, min: 0 },
    paymentMethod: {
      type: String,
      enum: ["CASH_ON_DELIVERY", "TELEBIRR", "CHAPA"],
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["PENDING", "COMPLETED", "FAILED"],
      default: "PENDING",
    },
    transactionId: { type: String, trim: true },
  },
  { timestamps: true },
);

export const Payment = model<IPayment>("Payment", paymentSchema);
