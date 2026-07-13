# Software Requirement Specification (SRS) - Interview Questions

---

## Q1. What is a Software Requirement Specification (SRS)?

Answer:

A Software Requirement Specification (SRS) is a technical document that defines the functional and non-functional requirements of a software system. It serves as a blueprint for developers, testers, and stakeholders during software development.

---

## Q2. What is the purpose of an SRS?

Answer:

The purpose of an SRS is to clearly define how the software should behave, reduce ambiguity, guide implementation, support testing, and ensure all stakeholders have a common understanding of the system.

---

## Q3. What is the difference between a PRD and an SRS?

Answer:

A PRD focuses on business goals and defines what should be built, while an SRS focuses on technical implementation and defines how the software should be built.

---

## Q4. What is a software module?

Answer:

A software module is an independent part of an application responsible for a specific functionality. Modular design improves maintainability, scalability, and allows multiple developers to work independently.

---

## Q5. Why is modular architecture important?

Answer:

Modular architecture separates responsibilities into independent components, making the application easier to develop, test, maintain, and scale.

---

## Q6. What user roles exist in ShopSphere?

Answer:

ShopSphere has two primary roles:

- Customer
- Administrator

Each role has different permissions and responsibilities.

---

## Q7. What is a Functional Flow?

Answer:

A Functional Flow describes the sequence of actions performed by users and the system to complete a business process, such as placing an order or managing products.

---

## Q8. Explain the customer workflow in ShopSphere.

Answer:

The customer browses products, searches or filters items, views product details, adds products to the cart, logs in or registers, checks out, completes payment, receives order confirmation, tracks the order, and finally leaves a review.

---

## Q9. Why did you choose the MERN Stack?

Answer:

The MERN Stack allows full-stack development using JavaScript. It provides a component-based frontend with React, a lightweight backend using Node.js and Express.js, and a flexible NoSQL database with MongoDB.

---

## Q10. What is Three-Tier Architecture?

Answer:

Three-Tier Architecture divides an application into:

- Presentation Layer (React)
- Application Layer (Node.js & Express)
- Data Layer (MongoDB)

This separation improves maintainability, scalability, and code organization.

---

## Q11. Why do we use JWT?

Answer:

JWT provides stateless authentication, allowing secure communication between the client and server without maintaining server-side sessions.

---

## Q12. Why is bcrypt used?

Answer:

bcrypt hashes passwords with salting, ensuring passwords are securely stored and protected even if the database is compromised.

---

## Q13. What is Role-Based Access Control (RBAC)?

Answer:

RBAC restricts access based on user roles. For example, customers can browse and purchase products, while administrators can manage products, users, and orders.

---

## Q14. Why do we use environment variables?

Answer:

Environment variables store sensitive configuration values such as JWT secrets, database URLs, and API keys outside the source code, improving security and deployment flexibility.

---

## Q15. Why is input validation important?

Answer:

Input validation prevents invalid or malicious data from entering the system, improving security, data integrity, and application stability.

---

## Q16. Why should APIs return proper HTTP status codes?

Answer:

HTTP status codes provide a standardized way for clients to understand the result of a request, making APIs easier to integrate, debug, and maintain.

---

## Q17. What is the purpose of application logging?

Answer:

Logging records important application events such as logins, payments, order creation, and server errors. Logs help monitor system health and simplify debugging.

---

## Q18. What are system dependencies?

Answer:

System dependencies are external technologies and services that the application relies on, such as React, Node.js, MongoDB Atlas, Razorpay, GitHub, and deployment platforms.

---

## Q19. What are system limitations?

Answer:

System limitations define features or capabilities that are intentionally excluded from the current release, such as mobile apps, multi-vendor support, or AI recommendations.

---

## Q20. How did the SRS help you build ShopSphere?

Answer:

The SRS transformed business requirements into technical requirements by defining user roles, workflows, modules, technology choices, security, architecture, and development standards. It serves as the technical blueprint that guides implementation and testing.

---

## Interview Tip

When explaining ShopSphere in an interview, don't just say "I built an e-commerce website."

Instead, explain your process:

1. Project Planning
2. Product Requirement Document (PRD)
3. Software Requirement Specification (SRS)
4. Software Architecture
5. Database Design
6. API Documentation
7. Frontend & Backend Architecture
8. Development
9. Testing
10. Deployment

This demonstrates your understanding of the complete Software Development Life Cycle (SDLC), which is highly valued for 1.5–2 years of experience.