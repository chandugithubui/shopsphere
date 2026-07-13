# Day 05 - Software Architecture

## Date
DD-MM-YYYY

---

# Goal

Understand and document the complete Software Architecture of the ShopSphere E-Commerce Platform before starting implementation.

---

# Topics Covered

## 1. Introduction to Software Architecture

- Learned what Software Architecture is.
- Understood why architecture is important before development.
- Learned how architecture improves scalability, maintainability, and team collaboration.

---

## 2. Architectural Goals

Studied the technical goals of the application:

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

## 3. High-Level Architecture

Designed the overall architecture of ShopSphere.

Flow:

Customer
↓

React Frontend
↓

REST API
↓

Express Backend
↓

Business Logic
↓

MongoDB
↓

JSON Response
↓

React UI

---

## 4. Three-Tier Architecture

Studied the three layers of the application.

- Presentation Layer
- Application Layer
- Data Layer

Understood the responsibilities of each layer.

---

## 5. MVC Architecture

Learned the backend architecture.

Components:

- Routes
- Controllers
- Services
- Models
- Middleware

Also understood why the Service Layer is used in production applications.

---

## 6. Complete Request Lifecycle

Studied how every request travels through the application.

React

↓

Axios

↓

Route

↓

Middleware

↓

Controller

↓

Service

↓

Model

↓

MongoDB

↓

Response

↓

React UI

---

## 7. Production Folder Structure

Designed the production-ready folder structure for both frontend and backend.

Frontend folders:

- components
- pages
- layouts
- hooks
- services
- context
- validations
- utils
- assets

Backend folders:

- routes
- controllers
- services
- models
- middleware
- config
- validations
- uploads
- utils

---

## 8. Software Design Principles

Studied:

- Single Responsibility Principle (SRP)
- DRY
- KISS
- Separation of Concerns (SoC)
- Open/Closed Principle (OCP)
- Reusability
- Clean Code

---

## 9. Architecture Summary

Completed the Software Architecture document with:

- Architecture Summary
- Key Decisions
- Best Practices
- Future Scalability
- Conclusion
- Revision History

---

# Key Learnings

✔ Difference between Three-Tier Architecture and MVC

✔ Why React should never communicate directly with MongoDB

✔ Why business logic belongs inside Services

✔ Why Controllers should remain lightweight

✔ Importance of clean folder structure

✔ Importance of software design principles

✔ How real software companies organize applications

---

# Challenges Faced

- Understanding the difference between Three-Tier Architecture and MVC.
- Understanding why Service Layer is important.
- Understanding request flow from frontend to database.

---

# Outcome

Successfully completed the complete Software Architecture documentation for ShopSphere.

This architecture will act as the blueprint for the remaining development phases.

---

# Git Commit

git add .

git commit -m "Complete Software Architecture documentation"

git push origin main

---

# Tomorrow's Goal

Begin Database Design.

Topics:

- Database Concepts
- ER Diagram
- Collections
- Relationships
- MongoDB Schema Design