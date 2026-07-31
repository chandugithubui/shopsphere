# Day 13 Interview Questions

## 1. What is NavLink?

NavLink is a special version of Link provided by React Router. It automatically detects whether the current URL matches its route and applies active styling.

---

## 2. Difference between Link and NavLink?

Link
- Only navigates
- No active styling

NavLink
- Navigates
- Automatically detects active route
- Useful for Navigation Bars

---

## 3. Why do we use NavLink in Navbar?

Because it automatically highlights the current active page, improving user experience.

---

## 4. Why should Navbar be outside <Routes>?

Navbar is a shared layout component.

Keeping it outside Routes ensures:

- It renders only once
- Remains visible across all pages
- Prevents duplicate code
- Improves maintainability

---

## 5. Why do we create Footer separately?

Footer is used on multiple pages.

Creating a reusable component follows the DRY principle (Don't Repeat Yourself).

---

## 6. What is Component Reusability?

Creating one component that can be used multiple times throughout the application without rewriting code.

Example:

Navbar
Footer
Button
ProductCard

---

## 7. Why should Home.jsx remain small?

Large files are difficult to understand.

Breaking the UI into reusable components improves:

- Readability
- Maintainability
- Scalability

---

## 8. Why do companies use Modular Architecture?

Because it makes projects easier to scale and allows multiple developers to work independently.

---

## 9. What are Shared Layout Components?

Components used on multiple pages.

Examples:

Navbar
Footer
Sidebar

---

## 10. Explain today's folder structure.

components/
layout/
home/
product/

Each folder contains components related to one feature, making the project organized and easier to maintain.

---

## 11. What is Separation of Concerns?

Each component should have one clear responsibility.

Example:

Hero.jsx → Hero Section

Navbar.jsx → Navigation

Footer.jsx → Footer

ProductCard.jsx → Single Product

ProductGrid.jsx → Product List

---

## 12. Why do companies prefer reusable components?

- Less code duplication
- Easy maintenance
- Faster development
- Better collaboration
- Cleaner architecture

---

## 13. Why is Hero a separate component?

Hero belongs only to the Home page.

Keeping it separate makes redesigning or updating the Hero section easier without affecting the rest of Home.jsx.