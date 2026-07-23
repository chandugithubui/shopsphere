# ShopSphere AI Backend Architecture

## Introduction

Backend Architecture defines the structure and communication between the server, application logic, database, and external services.

The backend of ShopSphere AI is designed using a layered architecture that promotes separation of concerns, scalability, maintainability, and testability.

The backend is responsible for authentication, product management, cart operations, wishlist management, orders, reviews, payments, administration, and AI-powered features.

---

## Backend Architecture Goals

The ShopSphere AI backend is designed to:

- Provide secure REST APIs.
- Separate business logic from HTTP handling.
- Maintain clean communication between application layers.
- Support scalable feature development.
- Centralize validation and error handling.
- Support authentication and role-based authorization.
- Integrate AI-powered features.
- Maintain clean database communication.

---

## High-Level Backend Flow

```text
React Frontend
      │
      ▼
   API Request
      │
      ▼
 Express Server
      │
      ▼
     Routes
      │
      ▼
  Middleware
      │
      ▼
  Controller
      │
      ▼
   Service
      │
      ▼
    Model
      │
      ▼
   MongoDB
```

The response follows the reverse direction back to the frontend.

---

## Separation of Concerns

Each backend layer has a specific responsibility.

### Routes

Define API endpoints and connect requests to controllers.

### Middleware

Processes requests before they reach controllers.

Examples:

- Authentication
- Authorization
- Validation
- Logging
- Error Handling

### Controllers

Handle HTTP requests and responses.

Controllers should remain lightweight and delegate business logic to services.

### Services

Contain the main business logic of the application.

Examples:

- Creating orders
- Calculating cart totals
- Processing AI searches
- Managing wishlist operations

### Models

Define database schemas and provide database interaction.

### Database

Stores persistent application data.

---

## Example: Add to Cart Flow

```text
User
  │
  ▼
React Frontend
  │
  ▼
POST /api/cart
  │
  ▼
Cart Route
  │
  ▼
Authentication Middleware
  │
  ▼
Cart Controller
  │
  ▼
Cart Service
  │
  ▼
Cart Model
  │
  ▼
MongoDB
```

---

## Architecture Principles

- Separation of Concerns
- Single Responsibility
- Low Coupling
- High Cohesion
- Reusability
- Scalability
- Maintainability
- Testability



## Backend Folder Structure

ShopSphere AI follows a modular layered backend architecture.

```text
server/

├── src/
│
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── validations/
│   ├── utils/
│   ├── constants/
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

### config

Contains database, environment, and external service configurations.

### routes

Defines API endpoints and connects them to controllers.

### controllers

Handles HTTP requests and responses.

### services

Contains the application's business logic.

### models

Defines database schemas and database interaction.

### middlewares

Processes requests before they reach controllers.

### validations

Validates incoming request data.

### utils

Contains reusable helper functions.

### constants

Contains shared application constants.

### app.js

Creates and configures the Express application.

### server.js

Starts the server and initializes required infrastructure such as the database connection.


routes/
↓
Where is the API endpoint?

middlewares/
↓
Is the request allowed to continue?

validations/
↓
Is the input data valid?

controllers/
↓
How do we handle the HTTP request/response?

services/
↓
What is the business logic?

models/
↓
How do we interact with the database?

utils/
↓
Can this reusable helper be used anywhere?



## Backend Request–Response Lifecycle

The ShopSphere AI backend follows a structured request–response lifecycle.

### Request Flow

```text
React Frontend
      │
      ▼
HTTP Request
      │
      ▼
Express Server
      │
      ▼
Global Middleware
      │
      ▼
Route
      │
      ▼
Authentication
      │
      ▼
Validation
      │
      ▼
Controller
      │
      ▼
Service
      │
      ▼
Model
      │
      ▼
MongoDB
```

### Response Flow

```text
MongoDB
      │
      ▼
Model
      │
      ▼
Service
      │
      ▼
Controller
      │
      ▼
Error Handler / Express
      │
      ▼
React Frontend
```

### Layer Responsibilities

#### Global Middleware

Processes common requests before route handling.

Examples:

- CORS
- JSON parsing
- Logging

#### Route

Matches the HTTP method and URL to the appropriate controller.

#### Authentication

Verifies the user's identity using the JWT token.

#### Validation

Checks whether incoming request data is valid.

#### Controller

Handles the HTTP request and response.

#### Service

Executes application business logic.

#### Model

Communicates with the database.

#### Database

Persists application data.

---

### Example: Order Creation

```text
User
  ↓
React Frontend
  ↓
POST /api/orders
  ↓
Global Middleware
  ↓
Order Route
  ↓
Authentication
  ↓
Validation
  ↓
Order Controller
  ↓
Order Service
  ↓
Order Model
  ↓
MongoDB
  ↓
API Response
  ↓
React UI
```

## MVC and Layered Architecture

ShopSphere AI uses a layered backend architecture inspired by the MVC pattern.

### Traditional MVC

```text
View
  ↓
Controller
  ↓
Model
  ↓
Database
```

The React frontend acts as the View layer, while the Node.js backend contains the Controller and Model layers.

---

### ShopSphere AI Layered Architecture

```text
Route
   ↓
Middleware
   ↓
Validation
   ↓
Controller
   ↓
Service
   ↓
Model
   ↓
Database
```

### Route Layer

Defines API endpoints and connects requests to controllers.

### Middleware Layer

Processes requests before they reach controllers.

Examples:

- Authentication
- Authorization
- Request Logging

### Validation Layer

Validates incoming request data.

### Controller Layer

Handles HTTP requests and responses.

Controllers should remain lightweight and delegate business logic to services.

### Service Layer

Contains the core business logic of the application.

Examples:

- Order calculation
- Cart operations
- Product management
- AI search logic

### Model Layer

Defines database schemas and communicates with MongoDB.

---

### Benefits of Layered Architecture

- Separation of Concerns
- Single Responsibility
- Reusable Business Logic
- Easier Unit Testing
- Better Maintainability
- Improved Scalability
- Reduced Coupling


## Middleware Architecture

Middleware functions process requests before they reach the final controller.

```text
Request
   ↓
Middleware
   ↓
Next Middleware
   ↓
Controller
   ↓
Response
```

### Authentication Middleware

Authentication verifies the identity of the user, usually by validating a JWT token.

```text
Request
   ↓
Extract JWT
   ↓
Verify Token
   ↓
Identify User
   ↓
Attach User to Request
   ↓
Continue
```

### Authorization Middleware

Authorization determines whether an authenticated user has permission to perform an action.

Example:

```text
Authentication
      ↓
Authorization
      ↓
Controller
```

### Validation Middleware

Validation verifies that incoming request data satisfies the required rules.

Examples:

- Required fields
- Valid email format
- Valid password length
- Valid product price

### Error Handling Middleware

Centralizes error processing and returns consistent API error responses.

### Middleware Chaining

ShopSphere AI uses middleware chaining to process requests through multiple layers.

```text
Request
   ↓
Authentication
   ↓
Authorization
   ↓
Validation
   ↓
Controller
   ↓
Response
```

Middleware order is important because authorization depends on successful authentication.


## Authentication and Authorization Architecture

ShopSphere AI uses token-based authentication and role-based authorization.

### Authentication

Authentication verifies the identity of a user.

The application supports:

- Email and password authentication
- OAuth-based authentication
- JWT-based API authentication

---

### Registration Flow

```text
User
  ↓
Register Form
  ↓
POST /api/auth/register
  ↓
Validation
  ↓
Auth Controller
  ↓
Auth Service
  ↓
Password Hashing
  ↓
User Model
  ↓
MongoDB
```

Passwords are never stored in plain text and must be securely hashed before storage.

---

### Login Flow

```text
User
  ↓
Login Form
  ↓
POST /api/auth/login
  ↓
Validation
  ↓
Auth Controller
  ↓
Auth Service
  ↓
Verify Credentials
  ↓
Generate JWT
  ↓
Return Authentication Result
```

---

### JWT Request Flow

```text
Frontend
    ↓
Authorization Header
    ↓
Authentication Middleware
    ↓
JWT Verification
    ↓
User Identification
    ↓
Protected Controller
```

---

### Role-Based Authorization

ShopSphere AI initially supports:

- User
- Admin

Authentication verifies the identity of a user, while authorization determines whether that user has permission to perform an action.

---

### User Permissions

Users can:

- Browse products
- Search products
- Manage cart
- Manage wishlist
- Place orders
- Write reviews
- Use AI Product Search

---

### Admin Permissions

Administrators can:

- Create products
- Update products
- Delete products
- Manage orders
- Manage users
- Access the admin dashboard

---

### OAuth Login Flow

```text
User
  ↓
OAuth Provider
  ↓
User Authorization
  ↓
Provider User Profile
  ↓
ShopSphere Backend
  ↓
Find or Create User
  ↓
Generate Application Authentication Token
  ↓
Authenticated User
```

---

### Security Principles

- Never store plain-text passwords.
- Never store sensitive data in JWT payloads.
- Protect private APIs with authentication middleware.
- Protect admin APIs with authorization middleware.
- Validate all incoming user input.
- Store secrets in environment variables.


## Error Handling and Validation Architecture

ShopSphere AI uses centralized validation and error handling to provide consistent and predictable API behavior.

### Validation Flow

```text
Request
   ↓
Validation
   ↓
Valid? ── No → Error Response
   │
  Yes
   ↓
Controller
   ↓
Service
   ↓
Database
```

Validation is performed before business logic is executed.

Examples:

- Required fields
- Email format
- Password rules
- Positive product price
- Valid stock quantity
- Valid MongoDB identifiers

---

### Centralized Error Handling

```text
Controller
    ↓
Service
    ↓
Error
    ↓
Error Middleware
    ↓
Standard API Response
```

All application errors are processed through centralized error-handling middleware.

---

### Standard Error Response

```json
{
  "success": false,
  "message": "Product not found",
  "statusCode": 404
}
```

Validation errors may include field-specific details.

---

### HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| 200 | Successful request |
| 201 | Resource created |
| 400 | Invalid request |
| 401 | Authentication required or invalid |
| 403 | Insufficient permission |
| 404 | Resource not found |
| 409 | Resource conflict |
| 500 | Internal server error |

---

### Error Handling Principles

- Use centralized error-handling middleware.
- Return consistent API error structures.
- Validate input before executing business logic.
- Use appropriate HTTP status codes.
- Avoid exposing sensitive internal error details.
- Handle asynchronous errors consistently.


## Backend Best Practices and Security

ShopSphere AI follows backend security and maintainability best practices.

### Environment Variables

Sensitive configuration is stored in environment variables.

Examples:

- Database connection strings
- JWT secrets
- AI API keys
- Third-party credentials

Sensitive `.env` files must never be committed to source control.

An `.env.example` file is maintained to document required variables.

---

### Password Security

Passwords are never stored in plain text.

```text
Plain Password
      ↓
Secure Hashing
      ↓
Hashed Password
      ↓
Database
```

---

### JWT Security

JWT payloads contain only the minimum required information.

Sensitive data such as passwords and payment information must never be stored inside JWT payloads.

Tokens should use:

- Strong secrets
- Appropriate expiration
- Secure configuration

---

### Input Validation

All user input is validated on the backend.

Frontend validation improves user experience, but backend validation is required for security.

---

### Authorization

Sensitive permissions are enforced on the backend.

Admin access is verified through:

```text
Authentication
      ↓
Role Verification
      ↓
Permission Granted or Denied
```

---

### Rate Limiting

Rate limiting helps protect APIs from excessive requests.

It is particularly useful for:

- Authentication endpoints
- Search endpoints
- AI-powered endpoints

---

### Logging

Application logging helps monitor system behavior and identify errors.

Sensitive information must never be logged.

---

### Security Principles

- Never trust client input.
- Never store plain-text passwords.
- Never expose secrets.
- Never rely only on frontend authorization.
- Use appropriate HTTP status codes.
- Validate all external input.
- Protect sensitive endpoints.
- Avoid exposing internal system details.

                         React Frontend
                               │
                               ▼
                         HTTP Request
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Global Middleware │
                    │ CORS, JSON, Logging │
                    └──────────┬──────────┘
                               │
                               ▼
                             Routes
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Authentication    │
                    │   Authorization     │
                    │   Validation        │
                    └──────────┬──────────┘
                               │
                               ▼
                         Controllers
                               │
                               ▼
                           Services
                               │
                               ▼
                            Models
                               │
                               ▼
                           MongoDB
                               │
                               ▼
                      Response / Error
                               │
                               ▼
                         React Frontend



server/

├── src/
│
│   ├── config/
│   │   ├── database.js
│   │   ├── env.js
│   │   └── ai.js
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── user.controller.js
│   │   ├── product.controller.js
│   │   ├── cart.controller.js
│   │   ├── wishlist.controller.js
│   │   ├── order.controller.js
│   │   ├── review.controller.js
│   │   └── ai.controller.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   ├── user.service.js
│   │   ├── product.service.js
│   │   ├── cart.service.js
│   │   ├── wishlist.service.js
│   │   ├── order.service.js
│   │   ├── review.service.js
│   │   └── ai.service.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Category.js
│   │   ├── Cart.js
│   │   ├── Wishlist.js
│   │   ├── Order.js
│   │   └── Review.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── user.routes.js
│   │   ├── product.routes.js
│   │   ├── cart.routes.js
│   │   ├── wishlist.routes.js
│   │   ├── order.routes.js
│   │   ├── review.routes.js
│   │   └── ai.routes.js
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── role.middleware.js
│   │   ├── error.middleware.js
│   │   └── validation.middleware.js
│   │
│   ├── validations/
│   │   ├── auth.validation.js
│   │   ├── product.validation.js
│   │   ├── order.validation.js
│   │   └── review.validation.js
│   │
│   ├── utils/
│   │   ├── generateToken.js
│   │   ├── apiResponse.js
│   │   ├── asyncHandler.js
│   │   └── logger.js
│   │
│   ├── constants/
│   │   ├── roles.js
│   │   ├── orderStatus.js
│   │   └── messages.js
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
└── README.md                         