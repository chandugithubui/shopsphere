# API Design Interview Questions

## Q1. What is an API?

Answer:
API (Application Programming Interface) is a communication layer between two software systems. In MERN, React communicates with the Node.js backend through APIs.

---

## Q2. What is REST API?

Answer:
REST (Representational State Transfer) is an architectural style for designing web services using HTTP methods like GET, POST, PUT, PATCH, and DELETE. REST APIs are stateless and resource-based.

---

## Q3. What is Stateless?

Answer:
Each request contains all the information required to process it. The server does not remember previous requests.

---

## Q4. Difference between PUT and PATCH?

PUT:
Updates the complete resource.

PATCH:
Updates only selected fields.

---

## Q5. Difference between Authentication and Authorization?

Authentication:
Verifies user identity.

Authorization:
Determines what the authenticated user is allowed to access.

---

## Q6. What is JWT?

Answer:
JWT (JSON Web Token) is a secure token used for user authentication. It allows users to access protected resources without logging in for every request.

---

## Q7. Difference between 401 and 403?

401:
User is not authenticated.

403:
User is authenticated but does not have permission.

---

## Q8. Why should APIs use nouns instead of verbs?

Answer:
REST APIs represent resources. HTTP methods already define the action.

Correct:
GET /products

Wrong:
/getProducts

---

## Q9. What are HTTP Methods?

GET → Read Data

POST → Create Data

PUT → Replace Resource

PATCH → Partial Update

DELETE → Remove Resource

---

## Q10. What is the purpose of Status Codes?

Answer:
Status codes inform the client whether the request was successful or failed.

Examples:
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

---

## Q11. Explain the Login Flow.

User enters credentials
↓

POST /api/auth/login
↓

Backend validates request
↓

MongoDB finds user
↓

bcrypt compares password
↓

JWT generated
↓

Token returned
↓

Frontend stores token
↓

Future requests send Authorization: Bearer <JWT_TOKEN>

---

## Q12. Why is API documentation important?

Answer:
It helps frontend and backend developers understand endpoints, request formats, response formats, authentication requirements, and expected status codes without constant communication.