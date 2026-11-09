
HUDHUD RESTAURANT --- System Architecture
Project: HUDHUD RESTAURANT
Document: System Architecture
Version: 1.0
Status: Proposed architecture for Day 02
Architecture style: Client--server, REST API, modular monolith

1. Project Overview
HUDHUD RESTAURANT is a modern Ethiopian and international restaurant web
application. Its primary services are:

Online food ordering
Takeaway pickup
The application will allow customers to explore the restaurant's menu,
select food, manage a cart, place takeaway orders, and view their order
information. Administrators will manage menu content and process
customer orders.

The system will be developed as one application with separate frontend
and backend codebases. The backend will expose a REST API, and MongoDB
will store the application's persistent data.

2. Architecture Goals
The architecture is designed to:

Keep the frontend, backend, and database responsibilities separate.
Be understandable and manageable for a student developer.
Support the main customer ordering workflow.
Provide protected administrative functionality.
Make the code reusable, testable, and maintainable.
Allow future features without making the first version unnecessarily
complex.
3. High-Level Architecture
The system has three main layers:

Frontend: React user interface used by customers and
administrators.
Backend: Express REST API that applies business rules, validates
requests, and controls access.
Database: MongoDB accessed through Mongoose models.
3.1 Request flow
A typical request follows this path:

A customer performs an action in the React interface.
The frontend sends an HTTP request to the backend API.
Express receives the request.
Middleware checks relevant authentication, authorization, and
validation requirements.
The controller coordinates the requested operation.
The service layer applies business rules.
A Mongoose model reads or writes data in MongoDB.
The backend returns a JSON response.
The frontend updates the interface based on the response.
The frontend must not connect directly to MongoDB. Database credentials
and business rules remain on the backend.

4. Technology Stack
Layer Technology Responsibility

Frontend React Build the user
interface

Language TypeScript Add static type
checking

Styling Tailwind CSS Responsive styling and
reusable design
patterns

Backend runtime Node.js Run server-side
JavaScript

Backend framework Express.js Handle HTTP requests
and REST routes

Database MongoDB Store application data

ODM Mongoose Define schemas and
interact with MongoDB

Authentication JWT Support authenticated
sessions through tokens

Password security bcrypt or bcryptjs Hash passwords before
storage

API format REST + JSON Communication between
frontend and backend

Version control Git and GitHub Track and publish
project changes
Use only the technologies needed for the current feature. Additional
infrastructure such as Redis, message queues, microservices, or
WebSockets is not required for the initial version.

5. Main Application Modules
5.1 Frontend modules
Public website: Homepage, restaurant information, and
navigation.
Menu: Food categories, food cards, search, and filtering.
Food details: Food description, image, and price.
Cart: Selected food items, quantities, and subtotal.
Authentication: Customer registration and login.
Customer area: Customer profile and order history.
Checkout: Customer details, takeaway selection, and order
confirmation.
Admin dashboard: Protected administrative pages.
Admin menu management: Create, view, update, and deactivate menu
items and categories.
Admin order management: View orders and update their status.
5.2 Backend modules
Authentication: Registration, login, password hashing, and token
verification.
Users: Customer and administrator account data.
Categories: Food category operations.
Foods: Menu item operations.
Orders: Order creation, retrieval, and status updates.
Middleware: Authentication, role authorization, validation, and
error handling.
Keep the backend as a modular monolith: one backend application
divided into clear feature modules. Do not split it into microservices
for this project.

6. Main User Roles
Customer
A customer can:

Browse the restaurant menu.
Search and filter food items.
View food details and prices.
Add items to the cart and change quantities.
Register and log in.
Submit a takeaway order.
View their own order history and order status.
Administrator
An administrator can:

Log in to protected admin pages.
View the dashboard.
Create, edit, and deactivate food items.
Create and manage food categories.
View customer orders.
Update order statuses.
Administrative permissions must be checked by the backend, not only by
hiding frontend buttons or pages.

7. Core Data Areas
The database design document defines the detailed schemas. At the
architecture level, the main data areas are:

Data area Purpose

User Customer and administrator account
information

Category Groups menu items

Food Menu item name, description, price,
image reference, and availability

Order Customer order, selected items,
totals, and status
The cart can initially be managed in frontend application state. The
backend should calculate and verify prices when an order is submitted.
Never trust a total price sent by the browser.

An order should preserve a snapshot of each ordered item's name and
price so that later menu price changes do not rewrite old order records.

8. Main API Boundaries
The frontend communicates with the backend through versioned REST
endpoints. The following is the proposed initial API surface; exact
request and response schemas will be documented and implemented with
each feature.

Area Example endpoint Purpose

Health GET /api/health Check whether the API
is running

Authentication POST /api/auth/register Register a customer

Authentication POST /api/auth/login Log in

Authentication GET /api/auth/me Get the authenticated
user's information

Categories GET /api/categories List categories

Foods GET /api/foods List available menu
items

Foods GET /api/foods/:id Get one food item

Orders POST /api/orders Submit a customer order

Orders GET /api/orders/my-orders Get the current
customer's orders

Admin foods POST /api/admin/foods Create a food item

Admin foods PATCH /api/admin/foods/:id Update a food item

Admin orders GET /api/admin/orders List orders for
administration

Admin orders PATCH /api/admin/orders/:id/status Update an order status
Admin endpoints require authentication and administrator authorization.
Customers must only be able to access their own private order data.

9. Order Workflow
The initial ordering workflow is:

The backend must verify that every submitted food item exists and is
available, and calculate the order total from trusted database values.

Initial order status lifecycle
Use a small, clearly defined status set for the first version:

pending --- order has been submitted and awaits restaurant
confirmation.
confirmed --- restaurant has accepted the order.
preparing --- food preparation has started.
ready --- order is ready for pickup.
completed --- customer has collected the order.
cancelled --- order has been cancelled.
The backend should validate allowed status transitions. The initial
version focuses on takeaway pickup; delivery logistics are outside the
current scope.

10. Authentication and Security Boundaries
Hash passwords before saving them. Never store plain-text passwords.
Verify JWTs on protected backend routes.
Check the user's role on every administrator operation.
Validate and normalize incoming request data on the backend.
Keep secrets, database connection strings, and JWT secrets in
environment variables.
Do not commit .env files or credentials to GitHub.
Configure CORS for the frontend origin used by the application.
Use centralized error handling and avoid exposing stack traces or
secrets in production responses.
Do not trust user-submitted prices, totals, roles, or ownership
identifiers.
Ensure customers can only read their own private information and
orders.
Authentication transport details (for example, secure cookies versus
authorization headers) should be decided and documented before
implementing login. Do not mix approaches without a clear reason.

11. Proposed Project Structure
hudhud-restaurant/
│
├── docs/
│   ├── requirements.md
│   ├── architecture.md
│   └── database-design.md
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── features/
│       │   ├── auth/
│       │   ├── menu/
│       │   ├── cart/
│       │   ├── orders/
│       │   └── admin/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── services/
│       ├── types/
│       ├── utils/
│       ├── App.tsx
│       └── main.tsx
│
├── backend/
│   └── src/
│       ├── config/
│       ├── middleware/
│       ├── modules/
│       │   ├── auth/
│       │   ├── users/
│       │   ├── categories/
│       │   ├── foods/
│       │   └── orders/
│       ├── utils/
│       └── server.ts
│
├── .gitignore
└── README.md
This is the intended structure, not an instruction to create every
folder immediately. Add files and folders when their features are
approved and needed.

12. Configuration and Environment Variables
The backend will need environment variables such as:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_long_random_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=development
These are example variable names, not real credentials. Keep actual
values in a local .env file, exclude it from Git, and provide a safe
.env.example containing placeholders.

The frontend may use a public API base URL variable, such as
VITE_API_BASE_URL. Never put database credentials or JWT signing
secrets in frontend environment variables.

13. Error Handling and API Response Principles
The API should use appropriate HTTP status codes and predictable JSON
response structures.

Examples:

200 OK --- successful read or update.
201 Created --- resource successfully created.
400 Bad Request --- invalid request data.
401 Unauthorized --- authentication is missing or invalid.
403 Forbidden --- authenticated user lacks permission.
404 Not Found --- requested resource does not exist.
409 Conflict --- request conflicts with current resource state.
500 Internal Server Error --- unexpected server failure.
Do not expose database internals, secrets, or stack traces in
client-facing error responses.

14. Testing Strategy
Test each module as it is developed.

Frontend: Check navigation, forms, menu filtering, cart
calculations, and responsive layouts.
Backend: Check route behavior, validation, authentication,
authorization, and error responses.
Database: Check model validation, relationships/references, and
stored order data.
Integration: Check the complete customer ordering flow and the
administrator order workflow.
Security: Check that unauthenticated users cannot access
protected routes and customers cannot access administrator
operations or other customers' orders.
A feature is not complete just because its code has been generated. Run
it and verify its expected behavior.

15. Development and Deployment Environments
Development
Frontend runs locally using the Vite development server.
Backend runs locally using Node.js and Express.
MongoDB is accessed through the configured development database.
Frontend requests the backend through the configured API base URL.
Production
The planned production setup consists of:

A deployed frontend.
A deployed Node.js/Express backend.
A securely configured MongoDB database.
Production environment variables and allowed frontend origin.
HTTPS for application traffic.
The hosting providers and deployment configuration will be selected on
Day 29. They are intentionally not fixed in this architecture document.

16. Scope Boundaries
Included in the initial version
Restaurant homepage and menu.
Food categories and food details.
Search and filtering.
Customer registration and login.
Cart and takeaway checkout.
Order creation and order history.
Admin food/category management.
Admin order viewing and status updates.
Responsive design, testing, and deployment.
Not included unless separately approved
Delivery-driver tracking and delivery logistics.
Online payment gateway integration.
Real-time WebSocket notifications.
Multiple restaurant branches.
Microservices.
Advanced analytics and recommendation systems.
Redis, message queues, and other infrastructure not required by the
initial workflows.
These boundaries keep the first release achievable. New requirements can
be added after their value and impact are discussed.

17. Architecture Decisions
Decision Reason

Separate frontend and backend Clear responsibility boundaries

REST API with JSON Straightforward communication
between React and Express

Modular monolith Easier to build, test, and maintain
than microservices

MongoDB with Mongoose Fits the selected MERN stack

Backend-enforced roles Protects administrative operations

Frontend-managed initial cart Keeps the first cart implementation
simple

Backend-calculated order totals Prevents trusting modified browser
prices

Takeaway-first ordering Matches the agreed initial
restaurant service
18. Implementation Sequence
The architecture will be implemented incrementally:

Confirm requirements and project scope.
Finalize database entities and relationships.
Set up the frontend and backend project structure.
Build the frontend UI with sample data.
Build and test backend routes and database models.
Implement authentication and role authorization.
Connect the frontend to the REST API.
Implement and test the complete takeaway ordering workflow.
Build administrative operations.
Improve quality, security, documentation, and deployment.
Do not implement all modules at once. Each step must be inspected,
planned, approved, implemented, tested, and understood.

Document status: Proposed architecture.
Next step: Review this document against requirements.md and
database-design.md, resolve any differences, then approve the
architecture before project setup or implementation.

