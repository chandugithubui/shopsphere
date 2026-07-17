# API Documentation

## What is an API?

An API (Application Programming Interface) is a communication layer between the frontend and backend. It allows different software systems to exchange data securely using predefined endpoints.

In ShopSphere, the React frontend communicates with the Node.js backend through REST APIs. The backend processes requests, interacts with MongoDB, and returns structured JSON responses.

### Why APIs are Important

- Secure communication
- Data validation
- Authentication and authorization
- Error handling
- Scalability
- Separation of frontend and backend
- Easy maintenance

### ShopSphere API Modules

- Authentication
- Users
- Products
- Categories
- Cart
- Wishlist
- Orders
- Reviews
- Payments
- Coupons
- Admin



## REST API Principles

REST (Representational State Transfer) is a standard architectural style used to design web APIs. REST APIs use HTTP methods and resource-based URLs to perform operations.

### Characteristics of REST APIs

- Client-Server Architecture
- Stateless Communication
- Resource-Based URLs
- JSON Data Exchange
- Standard HTTP Methods
- Scalable and Maintainable

### REST Naming Convention

Use nouns instead of verbs.

Correct Examples:

- GET /api/products
- POST /api/products
- PUT /api/products/:id
- DELETE /api/products/:id

Incorrect Examples:

- /getProducts
- /deleteProduct
- /createProduct


## HTTP Methods

HTTP methods define the type of operation to perform on a resource.

### GET
Retrieves data from the server.

Example:
GET /api/products

### POST
Creates a new resource.

Example:
POST /api/auth/register

### PUT
Updates an entire resource.

Example:
PUT /api/products/:id

### PATCH
Updates specific fields of a resource.

Example:
PATCH /api/products/:id

### DELETE
Removes a resource.

Example:
DELETE /api/products/:id


## HTTP Status Codes

HTTP status codes indicate whether an API request was successful or failed.

| Status Code | Meaning |
|-------------|---------|
| 200 | OK - Request Successful |
| 201 | Created - Resource Created Successfully |
| 400 | Bad Request - Invalid Input |
| 401 | Unauthorized - Authentication Required |
| 403 | Forbidden - Access Denied |
| 404 | Not Found - Resource Not Found |
| 500 | Internal Server Error - Server Failure |

### Best Practice

Always return meaningful status codes along with structured JSON responses.

🧠 Easy Memory Trick
400 → Wrong Input

401 → Login Required

403 → Permission Denied

404 → Resource Missing

500 → Server Problem


## API Endpoint Naming Convention

All ShopSphere APIs follow RESTful naming conventions.

### Base URL

http://localhost:5000/api

### API Modules

- /api/auth
- /api/users
- /api/products
- /api/categories
- /api/cart
- /api/orders
- /api/wishlist
- /api/reviews
- /api/coupons
- /api/payments
- /api/admin

### Naming Guidelines

- Use nouns instead of verbs.
- Use lowercase URLs.
- Use hyphens for multi-word endpoints.
- Use HTTP methods to define actions.
- Use path parameters (e.g., `:id`) to identify specific resources.


## API Request & Response Structure

### Request Components

Every API request consists of:

- HTTP Method
- URL
- Headers
- Request Body (if applicable)

### Standard Success Response

```json
{
  "success": true,
  "message": "Operation Successful",
  "data": {}
}
```

### Standard Error Response

```json
{
  "success": false,
  "message": "Operation Failed"
}
```

Using a consistent response format makes frontend integration easier and improves maintainability.


## Authentication Flow

ShopSphere uses JWT (JSON Web Token) for user authentication.

### Authentication Steps

1. User submits email and password.
2. Backend validates credentials.
3. Password is verified using bcrypt.
4. JWT token is generated.
5. Token is returned to the frontend.
6. Frontend stores the token.
7. Future protected requests include the token in the Authorization header.
8. Backend verifies the token before processing the request.

### Public APIs

- GET /api/products
- GET /api/categories
- GET /api/reviews

### Protected APIs

- GET /api/profile
- GET /api/orders
- POST /api/orders
- GET /api/cart

### Admin APIs

- POST /api/products
- DELETE /api/products/:id
- GET /api/admin/dashboard


If an interviewer asks:

"Explain the login flow in your MERN project."

You should be able to explain it like this:
----------------------------------------------------

User enters email and password
        ↓
React sends POST /api/auth/login
        ↓
Express validates the request
        ↓
MongoDB finds the user
        ↓
bcrypt compares the password
        ↓
JWT token is generated
        ↓
Backend returns the token
        ↓
Frontend stores the token
        ↓
Future protected requests include:
Authorization: Bearer <JWT_TOKEN>
        ↓
Backend verifies the token
        ↓
If valid → Access granted
If invalid → 401 Unauthorized


# ShopSphere API Reference

## Authentication APIs
(Add Authentication API table)

| Method | Endpoint                    | Description     | Auth |
| ------ | --------------------------- | --------------- | ---- |
| POST   | `/api/auth/register`        | Register User   | ❌    |
| POST   | `/api/auth/login`           | Login User      | ❌    |
| POST   | `/api/auth/logout`          | Logout User     | ✅    |
| POST   | `/api/auth/forgot-password` | Forgot Password | ❌    |
| POST   | `/api/auth/reset-password`  | Reset Password  | ❌    |


## Product APIs
(Add Product API table)

| Method | Endpoint            | Description        | Auth    |
| ------ | ------------------- | ------------------ | ------- |
| GET    | `/api/products`     | Get All Products   | ❌       |
| GET    | `/api/products/:id` | Get Single Product | ❌       |
| POST   | `/api/products`     | Create Product     | ✅ Admin |
| PUT    | `/api/products/:id` | Replace Product    | ✅ Admin |
| PATCH  | `/api/products/:id` | Update Product     | ✅ Admin |
| DELETE | `/api/products/:id` | Delete Product     | ✅ Admin |



## Category APIs
(Add Category API table)

| Method | Endpoint              | Description     | Auth    |
| ------ | --------------------- | --------------- | ------- |
| GET    | `/api/categories`     | Get Categories  | ❌       |
| POST   | `/api/categories`     | Create Category | ✅ Admin |
| PUT    | `/api/categories/:id` | Update Category | ✅ Admin |
| DELETE | `/api/categories/:id` | Delete Category | ✅ Admin |



## Cart APIs
(Add Cart API table)

| Method | Endpoint               | Description     | Auth |
| ------ | ---------------------- | --------------- | ---- |
| GET    | `/api/cart`            | View Cart       | ✅    |
| POST   | `/api/cart`            | Add to Cart     | ✅    |
| PATCH  | `/api/cart/:productId` | Update Quantity | ✅    |
| DELETE | `/api/cart/:productId` | Remove Product  | ✅    |



## Wishlist APIs
(Add Wishlist API table)


| Method | Endpoint                   | Description    | Auth |
| ------ | -------------------------- | -------------- | ---- |
| GET    | `/api/wishlist`            | View Wishlist  | ✅    |
| POST   | `/api/wishlist`            | Add Product    | ✅    |
| DELETE | `/api/wishlist/:productId` | Remove Product | ✅    |



## Order APIs
(Add Order API table)

| Method | Endpoint          | Description         | Auth    |
| ------ | ----------------- | ------------------- | ------- |
| GET    | `/api/orders`     | User Orders         | ✅       |
| GET    | `/api/orders/:id` | Single Order        | ✅       |
| POST   | `/api/orders`     | Place Order         | ✅       |
| PATCH  | `/api/orders/:id` | Update Order Status | ✅ Admin |



## Review APIs
(Add Review API table)


| Method | Endpoint                  | Description     | Auth |
| ------ | ------------------------- | --------------- | ---- |
| GET    | `/api/reviews/:productId` | Product Reviews | ❌    |
| POST   | `/api/reviews`            | Add Review      | ✅    |
| DELETE | `/api/reviews/:id`        | Delete Review   | ✅    |


## Coupon APIs
(Add Coupon API table)

| Method | Endpoint           | Description   | Auth    |
| ------ | ------------------ | ------------- | ------- |
| GET    | `/api/coupons`     | Get Coupons   | ✅ Admin |
| POST   | `/api/coupons`     | Create Coupon | ✅ Admin |
| PATCH  | `/api/coupons/:id` | Update Coupon | ✅ Admin |
| DELETE | `/api/coupons/:id` | Delete Coupon | ✅ Admin |



## Payment APIs
(Add Payment API table)

| Method | Endpoint                     | Description          | Auth |
| ------ | ---------------------------- | -------------------- | ---- |
| POST   | `/api/payments/create-order` | Create Payment Order | ✅    |
| POST   | `/api/payments/verify`       | Verify Payment       | ✅    |



## Admin APIs
(Add Admin API table)


| Method | Endpoint               | Description          | Auth    |
| ------ | ---------------------- | -------------------- | ------- |
| GET    | `/api/admin/dashboard` | Dashboard Statistics | ✅ Admin |
| GET    | `/api/admin/users`     | User List            | ✅ Admin |
| PATCH  | `/api/admin/users/:id` | Update User          | ✅ Admin |
| DELETE | `/api/admin/users/:id` | Delete User          | ✅ Admin |

## AI Module

| Method | Endpoint                      | Description                     | Auth    |
| ------ | ----------------------------- | ------------------------------- | ------- |
| POST   | `/api/ai/search`              | Natural Language Product Search | ✅       |
| POST   | `/api/ai/recommend`           | Product Recommendations         | ✅       |
| POST   | `/api/ai/product-description` | Generate Product Description    | ✅ Admin |
| POST   | `/api/ai/review-summary`      | Generate Review Summary         | ✅       |

