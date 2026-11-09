# HUDHUD RESTAURANT

## Software Requirements Specification (SRS)

**Version:** 1.1
**Project Stage:** Requirements and Planning

---

## 1. Project Overview

HUDHUD RESTAURANT is a modern Ethiopian and international restaurant web application.

The platform allows customers to explore Ethiopian and international food, view prices, create accounts, place online orders, and collect their orders through takeaway.

The system also provides an administration dashboard for restaurant staff to manage food items, categories, customers, and orders.

## 2. Business Concept

**Restaurant type:** Modern Ethiopian + International Restaurant.

**Services:**

- Online food ordering.
- Takeaway order collection.

**Important scope decision:**

The first version will focus on online ordering and takeaway. Dine-in table reservations and table-service management are not included in the initial scope.

## 3. Project Objectives

- Establish a professional online identity for HUDHUD RESTAURANT.
- Showcase Ethiopian and international food.
- Make food discovery and ordering easy.
- Allow customers to place takeaway orders online.
- Allow customers to track order progress.
- Help restaurant administrators manage food and orders.
- Provide a responsive experience on mobile, tablet, and desktop.

## 4. Target Users

### 4.1 Customers

People who want to explore the restaurant's food and place takeaway orders online.

### 4.2 Administrators

Authorized restaurant managers who control food, categories, customers, and orders.

### 4.3 Restaurant Staff

Authorized staff members who help process and prepare incoming orders. Detailed staff permissions can be defined later.

## 5. Food Categories

The menu should support two broad cuisine groups.

**Ethiopian cuisine**

- Injera dishes.
- Doro Wot.
- Tibs.
- Kitfo.
- Shiro.
- Other Ethiopian specialties.

**International cuisine**

- Pizza.
- Burgers.
- Sandwiches.
- Pasta.
- Chicken dishes.
- Other international meals.

Administrators should be able to create and manage menu categories rather than having all categories permanently fixed in the application.

## 6. Functional Requirements

### Customer Features

FR-01: Customers shall be able to view the restaurant homepage.

FR-02: Customers shall be able to browse Ethiopian and international food.

FR-03: Customers shall be able to filter food by cuisine and category.

FR-04: Customers shall be able to search for food items.

FR-05: Customers shall be able to view food details, descriptions, images, and prices.

FR-06: Customers shall be able to register and log in.

FR-07: Customers shall be able to add, remove, and update food quantities in their cart.

FR-08: Customers shall be able to submit takeaway orders.

FR-09: Customers shall be able to view their order history.

FR-10: Customers shall be able to view the status of their orders.

### Administrator Features

FR-11: Administrators shall be able to log in securely.

FR-12: Administrators shall be able to add food items.

FR-13: Administrators shall be able to update and delete food items.

FR-14: Administrators shall be able to manage food categories.

FR-15: Administrators shall be able to view customer orders.

FR-16: Administrators shall be able to update order statuses.

FR-17: Administrators shall be able to view basic restaurant statistics.

### Order Management

Initial order statuses:

- Pending.
- Confirmed.
- Preparing.
- Ready for Pickup.
- Completed.
- Cancelled.

The system should maintain order details, quantities, prices, customer information, and order status.

## 7. Non-Functional Requirements

- Responsive and accessible user interface.
- Secure authentication.
- Password hashing.
- Role-based authorization.
- Input validation.
- Secure handling of configuration and secrets.
- Maintainable and reusable code.
- Appropriate database design.
- Clear error handling.
- Good performance.

## 8. Proposed Technology Stack

**Frontend**

- React.
- TypeScript.
- Tailwind CSS.

**Backend**

- Node.js.
- Express.js.
- TypeScript.

**Database**

- MongoDB.
- Mongoose.

**Authentication**

- JWT-based authentication.
- Secure password hashing.

**Development and Testing**

- Git and GitHub.
- Postman.
- VS Code.

## 9. Initial MVP Scope

The first release will include:

1. Restaurant homepage.
2. Ethiopian and international food menu.
3. Food search and category filtering.
4. Customer registration and login.
5. Shopping cart.
6. Online takeaway ordering.
7. Order history and status.
8. Administrator dashboard.
9. Food and category management.
10. Order management.

## 10. Future Features

The following features are not required for the first release:

- Online payment gateway.
- Live delivery tracking.
- Delivery service management.
- Loyalty and reward points.
- Customer reviews and ratings.
- Advanced analytics.
- Restaurant table reservations.
- Multiple restaurant branches.

## 11. Project Success Criteria

The application will be considered successful when:

- Customers can browse Ethiopian and international food.
- Customers can register and log in.
- Customers can add food to their cart.
- Customers can submit takeaway orders.
- Orders are stored correctly in MongoDB.
- Administrators can manage menu items and orders.
- Customers can view order status.
- The application works on mobile and desktop.
- The application has been tested and deployed.

## 12. Open Business Decisions

These decisions require confirmation before final implementation:

1. Which payment methods will be supported?
2. Will customers collect orders immediately or choose a pickup time?
3. Will customers be required to provide a phone number?
4. What currency will be used?
5. Will customers be allowed to cancel orders?
6. Who can change order statuses?

These decisions will be finalized during requirements analysis.
