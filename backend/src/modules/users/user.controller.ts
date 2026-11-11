import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "./user.model.js";

// 1. አዲስ ተጠቃሚ መመዝገብ (Register: POST /api/users/register)
export const registerUser = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const { name, email, password, phone, role, address } = req.body;

    // ተጠቃሚው አስቀድሞ መኖሩን ማረጋገጥ
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res
        .status(400)
        .json({
          success: false,
          message: "User with this email already exists",
        });
      return;
    }

    // ፓስዎርድን ማቀነባበር (Hashing)
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // ተጠቃሚውን መፍጠር
    const user = await User.create({
      name,
      email,
      passwordHash,
      phone,
      role: role || "CUSTOMER",
      address,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};

// 2. ተጠቃሚ መግባት (Login: POST /api/users/login)
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // ተጠቃሚውን መፈለግ
    const user = await User.findOne({ email });
    if (!user) {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
      return;
    }

    // ፓስዎርድ ማመሳከር
    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      res
        .status(401)
        .json({ success: false, message: "Invalid email or password" });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: (error as Error).message });
  }
};
