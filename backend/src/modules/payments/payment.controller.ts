import { type Request, type Response } from "express";
import { Payment } from "./payment.model.js";
import { Order } from "../orders/order.model.js";

// ክፍያ መመዝገብ ወይም ማረጋገጥ
export const verifyPayment = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { orderId, transactionId, status } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      res.status(404).json({ success: false, message: "Order not found" });
      return;
    }

    // ክፍያውን በዳታቤዝ መፈለግ ወይም መፍጠር
    let payment = await Payment.findOne({ orderId });

    if (!payment) {
      payment = await Payment.create({
        orderId,
        customerId: order.customerId,
        amount: order.totalAmount,
        paymentMethod: order.paymentMethod,
        paymentStatus: status || "COMPLETED",
        transactionId: transactionId || "CASH_TRX_" + Date.now(),
      });
    } else {
      payment.paymentStatus = status || "COMPLETED";
      if (transactionId) payment.transactionId = transactionId;
      await payment.save();
    }

    res.status(200).json({
      success: true,
      message: "Payment verified and updated successfully",
      data: payment,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, message: error.message });
  }
};
