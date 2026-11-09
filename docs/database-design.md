# HUDHUD RESTAURANT

# DATABASE DESIGN DOCUMENT

**Project:** HUDHUD RESTAURANT
**Document:** Database Design
**Version:** 1.0
**Database:** MongoDB
**ODM:** Mongoose
**Status:** Proposed — Pending Business Approval

---

## 1. Introduction

This document defines the proposed database structure for HUDHUD RESTAURANT.

The database will store and organize information related to:

- Registered customers and restaurant staff.
- Food categories.
- Food items.
- Customer orders.
- Payment records.

The design supports the initial MVP requirements and allows future improvements without unnecessarily complicating the first release.

## 2. Database Overview

**Database name:** `hudhud_restaurant_db`

### Collections

| Collection | Responsibility                       |
| ---------- | ------------------------------------ |
| users      | Customer and staff accounts          |
| categories | Restaurant food categories           |
| foodItems  | Food information and prices          |
| orders     | Customer takeaway orders             |
| payments   | Payment information and verification |

## 3. Collection Design

### 3.1 Users Collection

**Purpose:** Store registered customer and authorized staff account information.

| Field        | Data Type | Required | Description               |
| ------------ | --------- | -------- | ------------------------- |
| \_id         | ObjectId  | Yes      | Unique user identifier    |
| name         | String    | Yes      | Full name                 |
| phone        | String    | Yes      | Phone number              |
| email        | String    | No       | Email address             |
| passwordHash | String    | Yes      | Securely hashed password  |
| role         | String    | Yes      | CUSTOMER, ADMIN or STAFF  |
| isActive     | Boolean   | Yes      | Account activation status |
| createdAt    | Date      | Yes      | Account creation date     |
| updatedAt    | Date      | Yes      | Last update date          |

**Rules:**

- Passwords must never be stored as plain text.
- Guest customers do not need user documents.
- Only authorized staff can access administrative functions.
- Email is optional.
- Account roles must be validated.

### 3.2 Categories Collection

**Purpose:** Organize food items into manageable categories.

| Field       | Data Type | Required | Description                |
| ----------- | --------- | -------- | -------------------------- |
| \_id        | ObjectId  | Yes      | Unique category identifier |
| name        | String    | Yes      | Category name              |
| slug        | String    | Yes      | URL-friendly category name |
| cuisineType | String    | Yes      | ETHIOPIAN or INTERNATIONAL |
| description | String    | No       | Category description       |
| imageUrl    | String    | No       | Category image             |
| isActive    | Boolean   | Yes      | Category availability      |
| sortOrder   | Number    | No       | Display order              |
| createdAt   | Date      | Yes      | Creation date              |
| updatedAt   | Date      | Yes      | Last update date           |

**Example categories:**

Ethiopian:

- Injera Dishes
- Doro Wot
- Tibs
- Kitfo
- Shiro

International:

- Pizza
- Burgers
- Sandwiches
- Pasta
- Chicken

**Rules:**

- Administrators can create and update categories.
- Category names and slugs should be unique within their cuisine group.
- A category containing food items should not be permanently deleted without resolving those references.
- Inactive categories should not be offered for new orders.

### 3.3 Food Items Collection

**Purpose:** Store all restaurant food information.

| Field       | Data Type | Required | Description                 |
| ----------- | --------- | -------- | --------------------------- |
| \_id        | ObjectId  | Yes      | Unique food identifier      |
| name        | String    | Yes      | Food name                   |
| description | String    | No       | Food description            |
| categoryId  | ObjectId  | Yes      | Reference to category       |
| imageUrl    | String    | No       | Food image location         |
| priceMinor  | Number    | Yes      | Price in ETB minor units    |
| isAvailable | Boolean   | Yes      | Whether food can be ordered |
| isActive    | Boolean   | Yes      | Whether food is published   |
| createdAt   | Date      | Yes      | Creation date               |
| updatedAt   | Date      | Yes      | Last update date            |

**Example:**

A Doro Wot item might have:

- Name: Doro Wot
- Category: Doro Wot
- Price: 450 ETB
- priceMinor: 45000
- isAvailable: true
- isActive: true

**Rules:**

- Every food item must belong to a valid category.
- Administrators can add, update and deactivate food items.
- Unavailable items cannot be included in new orders.
- Existing orders must preserve the original food information and price.
- Price calculations must be performed by the backend.

### 3.4 Orders Collection

**Purpose:** Store customer takeaway orders and their complete order information.

| Field               | Data Type        | Required    | Description                           |
| ------------------- | ---------------- | ----------- | ------------------------------------- |
| \_id                | ObjectId         | Yes         | Unique order identifier               |
| orderNumber         | String           | Yes         | Human-readable unique order reference |
| customerId          | ObjectId or null | No          | Registered customer reference         |
| customerSnapshot    | Object           | Yes         | Customer name and phone at order time |
| items               | Array of Objects | Yes         | Ordered food items                    |
| subtotalMinor       | Number           | Yes         | Sum of ordered item prices            |
| totalMinor          | Number           | Yes         | Final order amount                    |
| currency            | String           | Yes         | ETB                                   |
| pickupType          | String           | Yes         | ASAP or SCHEDULED                     |
| requestedPickupAt   | Date or null     | Conditional | Requested pickup time                 |
| confirmedPickupAt   | Date or null     | No          | Restaurant-confirmed pickup time      |
| status              | String           | Yes         | Current order status                  |
| statusHistory       | Array            | Yes         | Record of status changes              |
| specialInstructions | String           | No          | Customer instructions                 |
| createdAt           | Date             | Yes         | Order creation time                   |
| updatedAt           | Date             | Yes         | Last update time                      |

#### Customer snapshot

Each order preserves:

- Customer name.
- Customer phone number.

This information remains available even if the customer later changes their account information.

#### Order items structure

Each item inside the order contains:

| Field          | Data Type | Description                       |
| -------------- | --------- | --------------------------------- |
| foodItemId     | ObjectId  | Original food reference           |
| foodName       | String    | Food name at purchase time        |
| unitPriceMinor | Number    | Original unit price               |
| quantity       | Number    | Ordered quantity                  |
| lineTotalMinor | Number    | Unit price multiplied by quantity |

#### Order statuses

- PENDING
- CONFIRMED
- PREPARING
- READY_FOR_PICKUP
- COMPLETED
- CANCELLED

#### Pickup types

- ASAP
- SCHEDULED

#### Status history structure

Each status history entry contains:

- Previous status.
- New status.
- Changed by user ID, where applicable.
- Date and time.
- Optional reason or note.

**Important rules:**

1. Every order must have a unique order number.
2. Every order must contain at least one item.
3. The backend must calculate order totals.
4. Historical food prices must never depend on current menu prices.
5. A guest order must preserve customer contact information.
6. Order and payment statuses must remain separate.
7. Status changes must be recorded.
8. Scheduled pickup requires a requested pickup date and time.

### 3.5 Payments Collection

**Purpose:** Store payment information independently from order information.

| Field                | Data Type        | Required | Description                           |
| -------------------- | ---------------- | -------- | ------------------------------------- |
| \_id                 | ObjectId         | Yes      | Unique payment identifier             |
| orderId              | ObjectId         | Yes      | Related order                         |
| method               | String           | Yes      | CASH, BANK_TRANSFER or MOBILE_PAYMENT |
| amountMinor          | Number           | Yes      | Payment amount                        |
| currency             | String           | Yes      | ETB                                   |
| status               | String           | Yes      | Payment status                        |
| providerName         | String           | No       | Bank or mobile provider               |
| transactionReference | String           | No       | Transaction reference                 |
| verifiedBy           | ObjectId or null | No       | Staff member who verified payment     |
| verifiedAt           | Date or null     | No       | Verification date                     |
| createdAt            | Date             | Yes      | Payment record creation               |
| updatedAt            | Date             | Yes      | Last update                           |

#### Payment methods

- CASH
- BANK_TRANSFER
- MOBILE_PAYMENT

#### Payment statuses

- UNPAID
- AWAITING_VERIFICATION
- PAID
- FAILED
- REFUNDED

**Rules:**

- Cash payments can be recorded as unpaid until received.
- Bank and mobile payments require verification by authorized staff.
- Only authorized staff can confirm payment.
- Payment information must be connected to its corresponding order.
- Payment status must not automatically change the food order status.

The exact payment providers and payment evidence requirements remain subject to business approval.

## 4. Database Relationships

The proposed relationships are:

| Relationship            | Type                          |
| ----------------------- | ----------------------------- |
| User → Orders           | One-to-Many                   |
| Category → Food Items   | One-to-Many                   |
| Order → Order Items     | One-to-Many (embedded array)  |
| Food Item → Order Items | One-to-Many references        |
| Order → Payment         | One-to-One in the initial MVP |
| User → Processed Orders | One-to-Many                   |

Guest orders do not require a registered user reference.

Order items are embedded in the order document to preserve historical purchase information.

## 5. Indexing Strategy

The following indexes are proposed:

| Collection | Index                  | Purpose                  |
| ---------- | ---------------------- | ------------------------ |
| users      | phone                  | Account lookup           |
| users      | email                  | Optional account lookup  |
| categories | slug + cuisineType     | Category lookup          |
| foodItems  | categoryId             | Filter by category       |
| foodItems  | name                   | Food search              |
| orders     | orderNumber            | Find an order            |
| orders     | customerId + createdAt | Customer order history   |
| orders     | status + createdAt     | Staff order management   |
| payments   | orderId                | Find payment information |

Unique constraints and optional-field behavior must be finalized during implementation.

## 6. Data Integrity and Security

The following rules must be implemented:

1. Validate all incoming data.
2. Protect customer information.
3. Hash passwords securely.
4. Enforce role-based authorization.
5. Validate category references.
6. Prevent orders containing unavailable food.
7. Calculate prices on the backend.
8. Preserve historical order information.
9. Prevent unauthorized payment verification.
10. Record important order status changes.

## 7. Future Database Extensions

The following collections are not required in the initial MVP:

| Collection          | Future purpose                   |
| ------------------- | -------------------------------- |
| reviews             | Customer reviews and ratings     |
| notifications       | Customer and staff notifications |
| branches            | Multiple restaurant branches     |
| deliveryAssignments | Delivery operations              |
| loyaltyTransactions | Reward points                    |
| reservations        | Restaurant reservations          |

These should only be introduced when their business requirements are approved.

## 8. Unresolved Business Requirements

The following matters require further discussion before final database approval:

1. Exact cancellation rules and permissions.
2. Detailed administrator and staff permissions.
3. Guest order tracking and secure access.
4. Accepted bank and mobile payment providers.
5. ASAP and scheduled pickup availability rules.
6. Whether staff must approve scheduled pickup times.
7. Customer authentication identifier when email is optional.
8. Whether food customization, sizes and extras are required.
9. Whether inventory or food quantity limits are needed.
10. Tax or additional service charges, if applicable.

These matters must not be treated as confirmed requirements.

## 9. Conclusion

This database design provides a proposed foundation for HUDHUD RESTAURANT.

It separates customer accounts, categories, food items, orders and payments into clearly defined collections.

The design prioritizes data integrity, security, maintainability and the restaurant's initial takeaway ordering workflow.

**Document Status:** Proposed Database Design — Pending Review and Approval.

**Next Stage:** Database Schema Planning and Validation Before Mongoose Implementation.
