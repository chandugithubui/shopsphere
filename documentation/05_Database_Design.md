# Database Design

## Introduction

The Database Design document defines how data will be stored, organized, related, and accessed in the ShopSphere E-Commerce Platform.

A well-designed database improves performance, scalability, consistency, and maintainability while reducing redundancy and ensuring data integrity.

ShopSphere uses MongoDB Atlas as its primary NoSQL database.


## Objectives

The objectives of the database design are:

- Store application data efficiently.
- Avoid unnecessary data duplication.
- Maintain relationships between collections.
- Support fast searching and filtering.
- Ensure data consistency.
- Improve scalability.
- Support future feature expansion.


## Importance of Database Design

A well-designed database provides:

- Better application performance.
- Easier maintenance.
- Improved scalability.
- Better data consistency.
- Reduced redundancy.
- Faster development.
- Easier reporting and analytics.


## Why MongoDB?

ShopSphere uses MongoDB because:

- It stores data as flexible JSON-like documents.
- It integrates naturally with JavaScript and Node.js.
- It scales horizontally.
- It is suitable for modern web applications.
- It supports fast development with Mongoose.


# Functional Requirements to Database Mapping

Each functional requirement of ShopSphere is mapped to one or more MongoDB collections.

This mapping ensures that every feature has a dedicated data structure and avoids storing unrelated data together.



## Functional Requirement Mapping

| Functional Requirement | Collection |
|------------------------|------------|
| User Registration | Users |
| User Login | Users |
| User Profile | Users |
| Browse Products | Products |
| Product Categories | Categories |
| Product Search | Products |
| Product Filters | Products |
| Shopping Cart | Cart |
| Wishlist | Wishlist |
| Product Reviews | Reviews |
| Place Order | Orders |
| Shipping Address | Addresses |
| Payment | Payments |
| Order Tracking | Orders |
| Admin Product Management | Products |
| Admin User Management | Users |

## Why Separate Collections?

Each collection is responsible for storing a specific type of data.

This separation provides:

- Better organization
- Easier maintenance
- Faster queries
- Better scalability
- Reduced data redundancy

For example:

Users Collection stores only user-related information.

Products Collection stores only product information.

Orders Collection stores only order information.


## Feature to Collection Flow

Customer Registers

↓

Users Collection

------------------------------------

Customer Searches Product

↓

Products Collection

------------------------------------

Customer Adds Product to Cart

↓

Cart Collection

------------------------------------

Customer Places Order

↓

Orders Collection

------------------------------------

Customer Writes Review

↓

Reviews Collection


# Initial Database Collections

The ShopSphere database will contain the following collections:

1. Users
2. Products
3. Categories
4. Cart
5. Wishlist
6. Orders
7. Reviews
8. Addresses
9. Payments


# Entity Identification

An entity represents a real-world object whose information needs to be stored in the database.

In MongoDB, each major entity is stored as a separate collection.

The ShopSphere platform contains the following primary entities:

- Users
- Products
- Categories
- Cart
- Wishlist
- Orders
- Reviews
- Addresses
- Payments


## Collection Overview

| Collection | Purpose |
|------------|---------|
| Users | Stores customer and admin information |
| Products | Stores all product details |
| Categories | Organizes products into categories |
| Cart | Stores products added before checkout |
| Wishlist | Stores favorite products |
| Orders | Stores completed purchase information |
| Reviews | Stores customer ratings and reviews |
| Addresses | Stores shipping addresses |
| Payments | Stores payment transaction details |


## Responsibilities of Each Collection

### Users
Stores account details, authentication information, profile details, and user roles.

### Products
Stores product name, description, price, stock, images, and category information.

### Categories
Stores product category names and descriptions.

### Cart
Stores products that users intend to purchase.

### Wishlist
Stores products saved for future purchase.

### Orders
Stores placed orders, order status, purchased items, and totals.

### Reviews
Stores ratings and comments submitted by customers.

### Addresses
Stores shipping and billing addresses.

### Payments
Stores payment method, payment status, transaction ID, and payment history.


## Relationship Between Collections

A user can:

- Create one account.
- Add many products to the cart.
- Save many products in the wishlist.
- Place many orders.
- Write many reviews.
- Store multiple addresses.

A product can:

- Belong to one category.
- Receive many reviews.
- Be added to many carts.
- Be added to many wishlists.


# Users Collection Design

The Users collection stores all information related to registered users and administrators.

Every user in the ShopSphere platform has one document inside the Users collection.

## Users Collection Fields

| Field Name | Data Type | Required | Description |
|------------|----------|----------|-------------|
| _id | ObjectId | Yes | Unique identifier generated by MongoDB |
| fullName | String | Yes | User's full name |
| email | String | Yes | User's email address (Unique) |
| password | String | Yes | Encrypted password |
| phone | String | Yes | Mobile number |
| profileImage | String | No | Profile image URL |
| role | String | Yes | Customer or Admin |
| isVerified | Boolean | Yes | Email verification status |
| status | String | Yes | Active / Blocked |
| createdAt | Date | Yes | Account creation date |
| updatedAt | Date | Yes | Last update date |


## Why These Fields?

- _id uniquely identifies every user.
- fullName stores the customer's name.
- email is used for login and communication.
- password is stored in encrypted form for security.
- phone is used for contact and OTP verification.
- profileImage stores the user's profile picture.
- role differentiates Admin and Customer.
- isVerified checks whether the email is verified.
- status determines whether the account is active or blocked.
- createdAt and updatedAt help track account activity.

## Sample User Document

```json
{
  "_id": "6879ab12cd34ef5678901234",
  "fullName": "Chandan Sahoo",
  "email": "chandan@gmail.com",
  "password": "$2b$10$hK3gL...",
  "phone": "9876543210",
  "profileImage": "https://example.com/profile.jpg",
  "role": "customer",
  "isVerified": true,
  "status": "active",
  "createdAt": "2026-07-10T09:30:00Z",
  "updatedAt": "2026-07-10T09:30:00Z"
}
```

## Best Practices

- Email should always be unique.
- Passwords must be hashed using bcrypt.
- Never expose passwords through APIs.
- Store timestamps using createdAt and updatedAt.
- Validate email and phone before saving.
- Use role-based access for Admin and Customer.


# Products Collection Design

The Products collection stores all information related to products available for purchase in ShopSphere.

Each product is stored as a separate document.


## Products Collection Fields

| Field Name | Data Type | Required | Description |
|------------|-----------|----------|-------------|
| _id | ObjectId | Yes | Unique product ID |
| productName | String | Yes | Name of the product |
| description | String | Yes | Product description |
| price | Number | Yes | Selling price |
| discount | Number | No | Discount percentage |
| stock | Number | Yes | Available quantity |
| categoryId | ObjectId | Yes | Reference to Categories collection |
| brand | String | No | Product brand |
| images | Array | Yes | Product image URLs |
| rating | Number | No | Average product rating |
| totalReviews | Number | No | Total number of reviews |
| isFeatured | Boolean | No | Featured product |
| status | String | Yes | Active / Inactive |
| createdAt | Date | Yes | Product creation date |
| updatedAt | Date | Yes | Last updated date |


## Why These Fields?

- productName helps customers identify the product.
- description explains product features.
- price stores the selling price.
- discount stores promotional offers.
- stock helps manage inventory.
- categoryId links the product to its category.
- brand identifies the manufacturer.
- images display product photos.
- rating shows customer satisfaction.
- totalReviews counts customer feedback.
- isFeatured highlights important products.
- status controls product visibility.
- createdAt and updatedAt help track product changes.


## Sample Product Document

```json
{
  "_id": "6879ab12cd34ef5678909999",
  "productName": "Apple iPhone 16",
  "description": "128GB, Black, 5G Smartphone",
  "price": 79999,
  "discount": 10,
  "stock": 45,
  "categoryId": "6879ab12cd34ef5678901001",
  "brand": "Apple",
  "images": [
    "iphone-front.jpg",
    "iphone-back.jpg"
  ],
  "rating": 4.8,
  "totalReviews": 125,
  "isFeatured": true,
  "status": "active",
  "createdAt": "2026-07-11T10:00:00Z",
  "updatedAt": "2026-07-11T10:00:00Z"
}
```


## Best Practices

- Keep product names clear and descriptive.
- Store multiple product images in an array.
- Never allow negative stock values.
- Validate product price before saving.
- Reference categories using categoryId.
- Maintain timestamps for every product document.


# Database Relationships

Collections in ShopSphere are connected through relationships.

Relationships help maintain data consistency and allow different collections to work together efficiently.

ShopSphere uses the following relationship types:

- One-to-One (1:1)
- One-to-Many (1:N)
- Many-to-Many (M:N)


## One-to-One Relationship

A One-to-One relationship means one document is associated with only one document in another collection.

Example:

One User → One Primary Address

Benefits:

- Better organization
- Easier maintenance
- Clear separation of data

## One-to-Many Relationship

One document is related to multiple documents.

Examples:

- One User → Many Orders
- One User → Many Reviews
- One Category → Many Products

Benefits:

- Flexible data organization
- Better scalability
- Easy querying

## Many-to-Many Relationship

Many documents from one collection can relate to many documents in another collection.

Examples:

- Users ↔ Wishlist ↔ Products
- Users ↔ Cart ↔ Products

Benefits:

- High flexibility
- Supports complex business requirements


# Relationship Diagram

Users
│
├── Orders (One-to-Many)
│
├── Reviews (One-to-Many)
│
├── Addresses (One-to-Many)
│
├── Cart (One-to-One)
│
└── Wishlist (One-to-One)

Categories
│
└── Products (One-to-Many)

Products
│
├── Reviews (One-to-Many)
│
├── Cart (Many-to-Many)
│
└── Wishlist (Many-to-Many)

Orders
│
└── Payments (One-to-One)


# Embedding vs Referencing

ShopSphere primarily uses Referencing.

Reason:

- Avoids duplicate data.
- Improves scalability.
- Simplifies updates.
- Maintains clean relationships.

Embedding may be used only for small, tightly related data where separate collections are unnecessary.


# Database Indexing Strategy

Database indexing improves query performance by allowing MongoDB to locate documents quickly without scanning the entire collection.

Indexes are especially important for applications with large amounts of data.

ShopSphere uses indexes on frequently searched fields.


## Why Indexing?

Database indexes help:

- Improve search performance.
- Reduce query execution time.
- Improve sorting performance.
- Speed up filtering.
- Improve login performance.
- Improve overall application scalability.


## Indexing Strategy

| Collection | Indexed Field | Reason |
|------------|--------------|--------|
| Users | email | Fast login and uniqueness |
| Products | productName | Product search |
| Products | categoryId | Category filtering |
| Products | price | Price sorting and filtering |
| Orders | userId | Retrieve user orders |
| Reviews | productId | Fetch product reviews |
| Cart | userId | Load user cart quickly |
| Wishlist | userId | Load wishlist quickly |
| Payments | orderId | Retrieve payment details |


## Unique Index

The email field in the Users collection should have a Unique Index.

Benefits:

- Prevents duplicate accounts.
- Ensures every email is unique.
- Improves login performance.


## Compound Index

A Compound Index combines multiple fields into a single index.

Example:

Category + Price

Benefits:

- Faster filtering.
- Faster sorting.
- Better performance for combined queries.


## Indexing Best Practices

- Create indexes only on frequently searched fields.
- Avoid indexing every field.
- Use unique indexes where necessary.
- Review index usage periodically.
- Remove unused indexes.


# Database Best Practices

The ShopSphere database follows modern database design practices to ensure scalability, security, maintainability, and high performance.

## Naming Conventions

The project follows consistent naming conventions.

Collections

- users
- products
- categories
- orders
- reviews
- cart
- wishlist
- payments
- addresses

Fields

- fullName
- productName
- createdAt
- updatedAt
- categoryId
- userId

Benefits:

- Better readability
- Easier maintenance
- Consistent codebase


## Data Validation

All incoming data will be validated before saving to the database.

Examples:

- Email format validation
- Password length validation
- Required field validation
- Phone number validation
- Product price validation
- Stock validation

Benefits:

- Prevents invalid data
- Improves application reliability


## Password Security

Passwords are never stored as plain text.

The application uses bcrypt to hash passwords before storing them.

Benefits:

- Protects user accounts
- Improves application security


## Audit Fields

Every collection contains:

- createdAt
- updatedAt

Purpose:

- Track document creation.
- Track document updates.
- Support auditing and debugging.


## Soft Delete

Instead of permanently deleting important records, ShopSphere uses Soft Delete where appropriate.

Example:

isDeleted = true

Benefits:

- Prevents accidental data loss.
- Allows data recovery.
- Improves auditability.


## Security Practices

The database follows these security practices:

- Store passwords using bcrypt.
- Never expose passwords through APIs.
- Validate all inputs.
- Use JWT authentication.
- Restrict admin-only operations.
- Store secrets in environment variables.


## Backup Strategy

Regular database backups should be maintained.

Benefits:

- Disaster recovery.
- Protection against accidental deletion.
- Business continuity.


## Performance Recommendations

To maintain high performance:

- Use indexes wisely.
- Avoid duplicate data.
- Keep documents focused.
- Use referencing where appropriate.
- Limit unnecessary queries.
- Optimize frequently accessed collections.


# Database Best Practices Summary

| Practice | Purpose |
|----------|---------|
| Naming Conventions | Consistent structure |
| Data Validation | Prevent invalid data |
| Password Hashing | Improve security |
| Audit Fields | Track changes |
| Soft Delete | Recover deleted records |
| Security Practices | Protect sensitive information |
| Backup Strategy | Prevent data loss |
| Performance Optimization | Improve scalability |


# Database Design Summary

The ShopSphere E-Commerce Platform uses MongoDB Atlas as its primary NoSQL database.

The database is designed using a collection-based approach where each collection represents a specific business entity.

The design follows modern database engineering practices to ensure:

- Scalability
- Maintainability
- High Performance
- Security
- Data Consistency
- Future Extensibility

Collections are connected using appropriate relationships, indexed for performance, and designed to minimize data duplication.



# Key Database Design Decisions

The following design decisions have been made for ShopSphere:

- MongoDB Atlas selected as the database.
- Separate collections for each business entity.
- Referencing preferred over embedding for scalability.
- Indexes on frequently queried fields.
- Unique index on email.
- Passwords stored using bcrypt hashing.
- Audit fields included in all major collections.
- Soft Delete used where applicable.
- Validation before database insertion.


# Future Scalability

The database design allows future enhancements without major restructuring.

Future features may include:

- Multi-Vendor Marketplace
- Product Variants
- Coupons & Discounts
- Loyalty Program
- AI Recommendations
- Inventory Management
- Warehouse Management
- Return & Refund Management
- Subscription Products
- Analytics Dashboard


# Conclusion

The Database Design document defines how ShopSphere stores, organizes, and manages application data.

A well-designed database forms the foundation of a scalable and maintainable application.

This document will guide the implementation of MongoDB collections, Mongoose models, API development, and future feature enhancements.


# Revision History

| Version | Date | Description |
|----------|------|-------------|
| 1.0 | Day 6 | Initial Database Design Document |