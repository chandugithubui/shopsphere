⭐ Core Questions
1. What is backend architecture?

Backend architecture defines how server-side components such as routes, middleware, controllers, services, models, and databases communicate with each other.

2. Explain the request-response lifecycle.
Request
 ↓
Middleware
 ↓
Route
 ↓
Controller
 ↓
Service
 ↓
Model
 ↓
Database
 ↓
Response
3. What is the difference between Controller and Service?

Controller handles HTTP requests and responses.

Service contains the application's business logic.

4. Why should controllers be thin?

Thin controllers are easier to:

Read
Test
Maintain

Business logic should be delegated to services.

5. What is Separation of Concerns?

It means dividing the application into separate layers where each layer has one primary responsibility.

6. What is middleware?

Middleware is a function that runs between the incoming request and the final response.

(req, res, next)
7. What happens if next() is not called?

The request does not continue to the next middleware or controller unless the middleware sends a response.

8. What is middleware chaining?

Multiple middleware functions execute sequentially:

Auth
 ↓
Role Check
 ↓
Validation
 ↓
Controller
9. What is Authentication?

Authentication verifies:

Who are you?

Example: JWT verification.

10. What is Authorization?

Authorization verifies:

What are you allowed to do?

Example: Checking whether a user has an admin role.

11. Difference between 401 and 403?
Status	Meaning
401	User is not authenticated
403	User is authenticated but lacks permission
12. What is JWT?

JWT is a token-based authentication mechanism that allows the backend to identify authenticated users.

13. What should not be stored in a JWT?

Never store:

Passwords
Credit card information
Sensitive private data
14. Why hash passwords?

Passwords should be hashed so that plain-text passwords are not stored in the database.

15. Why is backend validation necessary if frontend validation exists?

Frontend validation improves user experience.

Backend validation provides actual security because users can bypass the frontend.

16. What is centralized error handling?

Instead of handling errors separately in every controller, errors are passed to a centralized error middleware.

Error
 ↓
Error Middleware
 ↓
Standard Response
17. Which status code would you use for an out-of-stock product?

Usually:

409 Conflict

because the current product state conflicts with the requested operation.

18. What is the difference between validation error and business logic error?

Validation Error:

Invalid email
Missing product name
Negative price

Business Logic Error:

Product out of stock
Insufficient balance
Order cannot be cancelled
19. Why use environment variables?

To protect sensitive configuration such as:

Database URLs
JWT Secrets
AI API Keys
20. Why should .env not be committed to GitHub?

Because it may expose:

Database credentials
API keys
JWT secrets
🔥 SCENARIO-BASED INTERVIEW QUESTIONS
Scenario 1

A normal logged-in user requests:

GET /api/admin/orders

What happens?

JWT Verification
      ↓
User Authenticated
      ↓
Admin Role Check
      ↓
Not Admin
      ↓
403 Forbidden
Scenario 2

A user sends:

{
  "price": -500
}

What happens?

Validation
   ↓
Invalid Price
   ↓
400 Bad Request
Scenario 3

The product exists but:

stock = 0

What happens?

Order Service
   ↓
Business Logic Error
   ↓
Error Middleware
   ↓
409 Conflict
Scenario 4

The JWT token is missing.

Request
   ↓
Authentication Middleware
   ↓
No Token
   ↓
401 Unauthorized
Scenario 5

A database error occurs.

Database
   ↓
Error
   ↓
Error Middleware
   ↓
Safe Error Response