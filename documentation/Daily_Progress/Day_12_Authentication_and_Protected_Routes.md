# Day 12 - Authentication Context and Protected Routes

## Objective

The goal of Day 14 was to build the basic frontend authentication flow for ShopSphere AI and understand how authentication state can control access to protected pages.

---

## Work Completed

### 1. Created AuthContext

Created `AuthContext.jsx` using React Context API.

Implemented:

- `createContext()`
- `AuthProvider`
- `useState`
- `useAuth()` custom hook
- Shared `isAuthenticated` state
- Shared `setIsAuthenticated` function

This allows authentication state to be accessed by different components without prop drilling.

---

### 2. Added AuthProvider

Wrapped the application with `AuthProvider` in `main.jsx`.

Current application structure:

BrowserRouter
→ AuthProvider
→ App
→ AppRoutes

This makes authentication state available throughout the application.

---

### 3. Created ProtectedRoute

Implemented `ProtectedRoute.jsx` using:

- `useAuth()`
- `Navigate`
- `Outlet`

Logic:

If the user is not authenticated:

`/profile → /login`

If the user is authenticated:

`ProtectedRoute → Outlet → requested protected page`

---

### 4. Added Protected User Routes

Protected routes currently include:

- `/profile`
- `/cart`
- `/orders`
- `/wishlist`
- `/checkout`

These routes require `isAuthenticated` to be `true`.

---

### 5. Connected Login with AuthContext

Updated `Login.jsx` to use:

`setIsAuthenticated(true)`

After successful temporary login:

`Login → Authentication state becomes true → Navigate to Home`

---

### 6. Connected Navbar Login Navigation

The Navbar Login button was connected to the `/login` route.

This fixed the issue where the Login button was visible but did not navigate anywhere.

---

### 7. Added Conditional Navbar Rendering

Navbar now checks:

`isAuthenticated`

When logged out:

`Login`

When logged in:

`Profile + Logout`

This was implemented using conditional rendering with the ternary operator.

---

### 8. Added Logout Functionality

Created `handleLogout()`.

Logout flow:

`Logout → setIsAuthenticated(false) → navigate("/")`

After logout, protected routes become inaccessible again.

---

### 9. Tested Protected Route Flow

Verified:

- Logged-out users are redirected to Login.
- Login changes authentication state.
- Authenticated users can access Profile through client-side navigation.
- Logout resets authentication state.
- Protected routes become inaccessible after logout.

---

### 10. Fixed JSX Console Warning

Fixed:

`Invalid DOM property 'class'. Did you mean 'className'?`

Changed the incorrect JSX attribute in `ProductCard.jsx`:

`class` → `className`

---

## Important Concept Learned

The current authentication system uses React state:

`useState(false)`

Therefore authentication is currently temporary.

A full browser refresh recreates the React application and resets authentication state back to `false`.

Later this will be replaced with persistent authentication using the backend, JWT/token handling, and proper authentication verification.

---

## Concepts Practiced

- React Context API
- createContext
- useContext
- Custom hooks
- Global authentication state
- Protected routes
- Navigate
- Outlet
- useNavigate
- Conditional rendering
- Ternary operator
- Login/logout flow
- Client-side navigation
- JSX `className`

---

## Day 12 Status

Frontend authentication architecture: Completed

Protected route functionality: Completed

Login/logout state handling: Completed

Conditional Navbar authentication UI: Completed

Persistent backend authentication: Pending for future development