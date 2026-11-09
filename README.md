# 🍽️ HUDHUD RESTAURANT — Full-Stack Web Application

HUDHUD RESTAURANT is a modern Ethiopian and international restaurant web application designed for online food ordering and takeaway pickup. Built as a 30-day full-stack software engineering project using the MERN stack and AI-assisted engineering practices.

---

## 🚀 Key Features

- **Customer Ordering:** Dynamic menu browsing, category filtering, guest checkout, and registered accounts.
- **Flexible Pickup:** Support for both **ASAP** and **Scheduled** takeaway pickup options.
- **Local Payment Support:** Prices in Ethiopian Birr (ETB) with Cash and Bank/Mobile Transfer payment options.
- **Admin Dashboard:** Menu management (CRUD), category organization, and live order tracking.

---

## 🛠️ Tech Stack

- **Frontend:** React, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express.js (TypeScript)
- **Database:** MongoDB, Mongoose ODM (`hudhud_restaurant_db`)
- **Authentication:** JSON Web Tokens (JWT) & bcrypt password hashing
- **Version Control:** Git & GitHub (`coe14/hudhud-restaurant`)

---

## 🗄️ Database Schema (`hudhud_restaurant_db`)

1. **`users`**: Customer and Admin accounts, roles, hashed passwords.
2. **`categories`**: Menu categories (e.g., Traditional Ethiopian, Fast Food, Beverages).
3. **`foodItems`**: Menu items with descriptions, ETB pricing, category linkage, and availability.
4. **`orders`**: Orders with guest/registered customer details, items, ETB totals, pickup times, and order statuses.
5. **`payments`**: Payment records tracking Cash vs. Bank/Mobile transfers.

---

## 📁 Project Structure

```text
hudhud-restaurant/
├── frontend/        # React + TypeScript + Tailwind CSS
├── backend/         # Node.js + Express + TypeScript + Mongoose
└── docs/            # Project specifications & architecture docs
    ├── requirements.md
    └── database-design.md
```
