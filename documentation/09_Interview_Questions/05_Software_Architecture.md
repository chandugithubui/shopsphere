# Software Architecture Interview Questions

---

## Q1. What is Software Architecture?

Answer:

Software Architecture is the high-level structure of a software application. It defines how different components interact, how responsibilities are divided, and how the application is organized for scalability, maintainability, and performance.

---

## Q2. Why is Software Architecture important?

Answer:

Software Architecture provides a clear blueprint for development, improves maintainability, enables scalability, enhances security, and helps multiple developers collaborate efficiently.

---

## Q3. What are the architectural goals of ShopSphere?

Answer:

- Scalability
- Maintainability
- Performance
- Security
- Reliability
- Modularity
- Reusability
- Testability
- Extensibility

---

## Q4. Explain the High-Level Architecture of ShopSphere.

Answer:

The application follows a client-server architecture.

Flow:

Customer → React Frontend → REST API → Express Backend → Business Logic → MongoDB → JSON Response → React UI.

---

## Q5. What is Three-Tier Architecture?

Answer:

Three-Tier Architecture divides the application into:

- Presentation Layer (React.js)
- Application Layer (Node.js + Express.js)
- Data Layer (MongoDB)

Each layer has a separate responsibility.

---

## Q6. What is MVC Architecture?

Answer:

MVC separates the backend into:

- Model
- View
- Controller

In ShopSphere, an additional Service Layer is used to keep business logic separate from controllers.

---

## Q7. Why do we use a Service Layer?

Answer:

The Service Layer contains business logic, making controllers lightweight, improving code reusability, maintainability, and testability.

---

## Q8. Explain the complete request lifecycle.

Answer:

React UI → Axios → Express Route → Middleware → Controller → Service → Model → MongoDB → Response → React UI.

---

## Q9. What is the responsibility of a Controller?

Answer:

Controllers receive HTTP requests, validate inputs, call service methods, and return HTTP responses. They should not contain business logic.

---

## Q10. What is the responsibility of a Model?

Answer:

Models define the database schema and perform CRUD operations on MongoDB.

---

## Q11. What is the responsibility of Middleware?

Answer:

Middleware executes before controllers and is responsible for tasks such as authentication, authorization, validation, logging, and error handling.

---

## Q12. What is DRY?

Answer:

DRY (Don't Repeat Yourself) means avoiding duplicate code by creating reusable functions, components, and utilities.

---

## Q13. What is KISS?

Answer:

KISS (Keep It Simple) encourages developers to implement the simplest solution that satisfies the requirements, avoiding unnecessary complexity.

---

## Q14. What is the Single Responsibility Principle (SRP)?

Answer:

A class, module, or function should have only one responsibility and one reason to change.

---

## Q15. What is Separation of Concerns (SoC)?

Answer:

Separation of Concerns divides the application into distinct parts, each handling a specific responsibility, such as UI, business logic, or data storage.

---

## Q16. Why should React not connect directly to MongoDB?

Answer:

Direct database access from the frontend exposes sensitive data and bypasses authentication and validation. All database operations should go through the backend APIs.

---

## Q17. Why is a modular folder structure important?

Answer:

A modular folder structure improves maintainability, readability, collaboration, scalability, and makes it easier to locate and update code.

---

## Q18. Why did you choose the MERN Stack?

Answer:

The MERN Stack allows full-stack JavaScript development with React, Node.js, Express.js, and MongoDB. It provides a consistent development experience and is well-suited for scalable web applications.

---

## Q19. What makes ShopSphere production-ready?

Answer:

ShopSphere follows Three-Tier Architecture, MVC with a Service Layer, RESTful APIs, JWT authentication, modular folder organization, clean coding principles, and scalable design practices.

---

## Q20. How does this architecture support future growth?

Answer:

The modular architecture allows new features such as coupons, AI recommendations, multi-vendor support, and mobile applications to be added with minimal changes to the existing codebase.