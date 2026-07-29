# Interview Day 12 – React Router

---

## 1. Why do we use React Router?

Answer:

React Router is used for client-side routing in React applications. It allows users to navigate between different pages without reloading the entire browser, providing a faster and smoother user experience.

---

## 2. What is BrowserRouter?

Answer:

BrowserRouter is a router component that uses the HTML5 History API to keep the UI synchronized with the browser URL without refreshing the page. It wraps the entire React application to enable routing.

Example:

<BrowserRouter>
    <App />
</BrowserRouter>

---

## 3. What is Routes?

Answer:

Routes is a container that holds multiple Route components. It checks the current URL and renders the matching route.

Example:

<Routes>
    <Route path="/" element={<Home />} />
</Routes>

---

## 4. What is Route?

Answer:

A Route defines which component should be rendered for a particular URL path.

Example:

<Route path="/login" element={<Login />} />

---

## 5. What are Dynamic Routes?

Answer:

Dynamic routes contain URL parameters that change based on the requested resource.

Example:

/products/:id

Here, ":id" is a dynamic parameter.

---

## 6. What is Link?

Answer:

Link is used for navigation between pages in React without refreshing the browser.

Example:

<Link to="/products">
    Products
</Link>

---

## 7. Why do we use Link instead of <a>?

Answer:

We use Link because it performs client-side routing. Unlike the <a> tag, it does not reload the entire page. It updates only the required component, making navigation faster and preserving application state.

---

## 8. What is useParams()?

Answer:

useParams() is a React Router hook that returns an object containing the dynamic parameters from the current URL.

Example:

URL:

/products/101

Route:

<Route path="/products/:id" />

Code:

const { id } = useParams();

Output:

id = "101"

---

## 9. Why does useParams() return an object?

Answer:

Because a route can contain multiple dynamic parameters.

Example:

/users/:userId/orders/:orderId

useParams() returns:

{
    userId: "15",
    orderId: "8"
}

---

## 10. Why do we use Number(id)?

Answer:

useParams() returns values as strings. Our product IDs are numbers, so we convert the string to a number before comparison.

Without conversion:

2 === "2" ❌

After conversion:

2 === Number("2") ✅

---

## 11. Why do we use find() instead of filter()?

Answer:

find() returns the first matching object and stops searching after finding it. It is faster and more suitable because product IDs are unique.

filter() returns an array and continues checking every item, which is unnecessary when we need only one product.

---

## 12. What is useNavigate()?

Answer:

useNavigate() is a React Router hook used for programmatic navigation. It allows JavaScript to navigate to another route after an event such as login, logout, payment success, or form submission.

Example:

const navigate = useNavigate();

navigate("/");

---

## 13. Difference between Link and useNavigate()?

Answer:

Link is used when the user manually clicks to navigate.

useNavigate() is used when JavaScript decides when to navigate, such as after login or successful payment.

---

## 14. What are Public Routes?

Answer:

Public routes can be accessed without authentication.

Examples:

- Home
- Products
- Product Details
- Login
- Register

---

## 15. What are Protected Routes?

Answer:

Protected routes require the user to be authenticated before accessing them.

Examples:

- Profile
- Cart
- Wishlist
- Orders
- Checkout
- Admin Dashboard

---

## 16. Why do we organize pages into public, auth, user, and admin folders?

Answer:

This keeps the project organized, scalable, and easy to maintain. It also improves team collaboration by grouping related pages together, following industry best practices.

---

## 17. Why should path="*" always be the last route?

Answer:

path="*" matches every URL. React Router evaluates routes from top to bottom. If it is placed before specific routes, it will match first and prevent valid routes from rendering. Therefore, it must always be the last route.

---

## 18. Why do we show "Product Not Found" instead of redirecting to Home?

Answer:

Showing "Product Not Found" provides clear feedback to the user that the requested product does not exist. Redirecting to the Home page hides the actual issue and creates confusion.

---

## 19. Explain the complete flow of Product Details.

Answer:

User clicks a product
        ↓
Link navigates to
/products/:id
        ↓
React Router matches the route
        ↓
useParams() extracts the ID
        ↓
find() searches the product
        ↓
Product details are displayed
If not found
        ↓
Product Not Found page

---

## 20. What did you implement in your ShopSphere AI project today?

Answer:

- Configured React Router
- Created AppRoutes
- Added public routes
- Implemented dynamic routing
- Used Link for navigation
- Used useParams() to read route parameters
- Displayed Product Details dynamically
- Implemented Product Not Found page
- Learned and implemented useNavigate()
- Added wildcard 404 route