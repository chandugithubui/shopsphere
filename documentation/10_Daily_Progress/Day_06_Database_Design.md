# Day 06 - Database Design

## Date
DD-MM-YYYY

---

# Goal

Design a production-ready MongoDB database for the ShopSphere E-Commerce Platform before starting backend development.

---

# Topics Covered

## 1. Introduction to Database Design

- Understood the importance of database design.
- Learned why databases should be planned before coding.

---

## 2. Functional Requirement Mapping

Mapped application features to MongoDB collections.

Examples:

- User Registration → Users
- Product Search → Products
- Orders → Orders
- Reviews → Reviews

---

## 3. Entity Identification

Identified the primary entities:

- Users
- Products
- Categories
- Cart
- Wishlist
- Orders
- Reviews
- Addresses
- Payments

---

## 4. Users Collection Design

Designed the Users collection.

Fields include:

- fullName
- email
- password
- phone
- role
- status
- createdAt
- updatedAt

---

## 5. Products Collection Design

Designed the Products collection.

Fields include:

- productName
- description
- price
- stock
- categoryId
- brand
- images
- rating

---

## 6. Database Relationships

Studied:

- One-to-One
- One-to-Many
- Many-to-Many

Also learned Embedding vs Referencing and why Referencing is preferred for ShopSphere.

---

## 7. Database Indexing Strategy

Learned:

- Purpose of indexes
- Unique indexes
- Compound indexes
- Indexed fields for ShopSphere

---

## 8. Database Best Practices

Covered:

- Naming conventions
- Data validation
- Password hashing
- Audit fields
- Soft Delete
- Security
- Backup strategy
- Performance optimization

---

## 9. Database Summary

Completed the Database Design document with:

- Summary
- Key decisions
- Future scalability
- Conclusion
- Revision history

---

# Key Learnings

✔ Importance of database planning

✔ Difference between collections and entities

✔ MongoDB schema design

✔ Database relationships

✔ Embedding vs Referencing

✔ Indexing strategy

✔ Production-ready database practices

---

# Outcome

Successfully completed the Database Design documentation for ShopSphere.

The project now has a clear database blueprint that will guide backend development.

---

# Git Commit

git add .

git commit -m "Complete Database Design documentation"

git push origin main

---

# Tomorrow's Goal

Begin API Design.

Topics:

- REST APIs
- API Standards
- Endpoint Design
- HTTP Methods
- Status Codes
- Request & Response Structure