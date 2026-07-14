# Database Design Interview Questions

## Q1. What is Database Design?

**Answer:**
Database Design is the process of organizing data into collections or tables, defining relationships, and planning how data will be stored, retrieved, and maintained efficiently.

---

## Q2. Why is Database Design important?

**Answer:**
It improves performance, scalability, maintainability, and data consistency while reducing redundancy.

---

## Q3. What is an entity?

**Answer:**
An entity is a real-world object whose information is stored in the database, such as a User, Product, or Order.

---

## Q4. What is a collection in MongoDB?

**Answer:**
A collection is a group of related documents. It is similar to a table in relational databases.

---

## Q5. Why are Users and Products stored in separate collections?

**Answer:**
They represent different business entities with different responsibilities. Separate collections improve organization, scalability, and maintenance.

---

## Q6. What is a One-to-One relationship?

**Answer:**
One document is associated with exactly one document in another collection, such as one order and one payment.

---

## Q7. What is a One-to-Many relationship?

**Answer:**
One document relates to multiple documents, such as one user placing many orders.

---

## Q8. What is a Many-to-Many relationship?

**Answer:**
Multiple documents from one collection relate to multiple documents in another collection, such as users and products through the wishlist.

---

## Q9. What is the difference between Embedding and Referencing?

**Answer:**
Embedding stores related data in the same document, while Referencing stores related data in separate collections connected using IDs. Referencing is preferred for scalable applications.

---

## Q10. What is an index?

**Answer:**
An index is a data structure that helps MongoDB find documents faster without scanning the entire collection.

---

## Q11. Why is the email field indexed?

**Answer:**
To speed up login queries and prevent duplicate accounts using a unique index.

---

## Q12. What is a compound index?

**Answer:**
A compound index uses multiple fields, such as `categoryId` and `price`, to optimize combined filtering and sorting queries.

---

## Q13. What is Soft Delete?

**Answer:**
Soft Delete marks a record as deleted using a flag like `isDeleted = true` instead of permanently removing it.

---

## Q14. Why do we hash passwords?

**Answer:**
Hashing protects user credentials by storing an encrypted version of the password instead of plain text.

---

## Q15. Why do we use `createdAt` and `updatedAt`?

**Answer:**
These fields help track document creation and modification, making debugging and auditing easier.

---

## Q16. Why did ShopSphere choose MongoDB?

**Answer:**
MongoDB provides flexible document storage, integrates well with JavaScript, scales effectively, and is well-suited for MERN applications.

---

## Q17. Why does ShopSphere prefer Referencing?

**Answer:**
Referencing avoids duplicate data, simplifies updates, improves scalability, and keeps collections clean and maintainable.

---

## Q18. Why shouldn't every field be indexed?

**Answer:**
Too many indexes consume storage and slow down write operations. Only frequently queried fields should be indexed.

---

## Q19. What are audit fields?

**Answer:**
Audit fields such as `createdAt` and `updatedAt` record when documents are created and modified.

---

## Q20. What are the main collections in ShopSphere?

**Answer:**

- Users
- Products
- Categories
- Cart
- Wishlist
- Orders
- Reviews
- Addresses
- Payments