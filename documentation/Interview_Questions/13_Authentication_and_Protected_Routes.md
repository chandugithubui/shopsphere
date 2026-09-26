# Day 12 - Authentication and Protected Routes Interview Questions

## 1. What is React Context API?

React Context API is a way to share data between multiple components without passing props manually through every level of the component tree.

In ShopSphere AI, I used Context API to share authentication state across components such as Login, Navbar, and ProtectedRoute.

---

## 2. Why did you create AuthContext in ShopSphere AI?

I created AuthContext to maintain authentication state in one central place.

It provides:

- `isAuthenticated`
- `setIsAuthenticated`

Components can access this state using the custom `useAuth()` hook.

This avoids prop drilling and duplicated authentication state.

---

## 3. What is the purpose of AuthProvider?

`AuthProvider` provides authentication state to the components rendered inside it.

In ShopSphere AI, the structure is:

BrowserRouter
→ AuthProvider
→ App
→ AppRoutes

Therefore components inside the application can access the authentication context.

---

## 4. What is a protected route?

A protected route is a route that should only be accessible when a user satisfies an authentication or authorization condition.

For example, ShopSphere AI currently protects:

- `/profile`
- `/cart`
- `/orders`
- `/wishlist`
- `/checkout`

If the user is not authenticated, ProtectedRoute redirects them to `/login`.

---

## 5. How does ProtectedRoute work in your project?

ProtectedRoute reads authentication state using:

`useAuth()`

If:

`isAuthenticated === false`

it returns:

`<Navigate to="/login" replace />`

If:

`isAuthenticated === true`

it returns:

`<Outlet />`

The Outlet renders the matched protected child route.

---

## 6. What is Outlet in React Router?

`Outlet` acts as a placeholder where the matched child route is rendered.

In my ProtectedRoute, Outlet renders the requested protected page after the authentication check succeeds.

---

## 7. What is Navigate in React Router?

`Navigate` is used to redirect a user declaratively.

For example:

`<Navigate to="/login" replace />`

redirects an unauthenticated user to the Login page.

---

## 8. What is the difference between Navigate and useNavigate?

`Navigate` is a component used for declarative redirection.

`useNavigate` is a hook used for programmatic navigation from JavaScript logic.

For example, after Login or Logout I can use:

`navigate("/")`

---

## 9. What happens when the user logs in?

Currently, the Login component calls:

`setIsAuthenticated(true)`

This updates the authentication state stored in AuthContext.

After that, the user is navigated to the Home page.

ProtectedRoute can then allow access to protected pages.

---

## 10. How did you implement Logout?

I created a `handleLogout()` function.

It performs:

`setIsAuthenticated(false)`

and then:

`navigate("/")`

Changing the authentication state causes components consuming AuthContext, such as Navbar, to update their rendered UI.

---

## 11. How does the Navbar know whether to show Login or Logout?

Navbar consumes:

`isAuthenticated`

from AuthContext.

It uses conditional rendering.

If the user is logged out:

`Login`

If the user is logged in:

`Profile + Logout`

---

## 12. What is conditional rendering in React?

Conditional rendering means displaying different JSX depending on a condition.

For example:

`isAuthenticated ? loggedInUI : loggedOutUI`

ShopSphere AI uses this approach to switch between Login and Profile/Logout controls.

---

## 13. Does React Context prevent re-renders?

No.

Components consuming a Context can re-render when the Context value they receive changes.

Context is useful here because it provides shared state and avoids prop drilling, not because it prevents re-renders.

---

## 14. What is the difference between setIsAuthenticated and navigate?

`setIsAuthenticated(true)` changes application authentication state.

`navigate("/")` changes the current route.

Navigation itself does not authenticate a user.

---

## 15. Why does authentication disappear after refreshing the page currently?

The current authentication state is stored only in React state:

`useState(false)`

A full browser refresh restarts the React application, so the state returns to its initial value.

This is temporary frontend authentication used while building the application architecture.

Persistent authentication will later be implemented using the backend and proper token/session handling.

---

## 16. Is ProtectedRoute enough to secure a real application?

No.

ProtectedRoute provides frontend route guarding and improves the user experience, but frontend checks alone cannot secure backend data or APIs.

The backend must independently verify authentication and authorization before returning protected resources.

---

## 17. Why use a custom useAuth hook?

Instead of importing AuthContext and calling `useContext(AuthContext)` in every component, I created:

`useAuth()`

This provides a cleaner and reusable interface for accessing authentication state.

---

## 18. What is prop drilling?

Prop drilling occurs when data has to be passed through multiple intermediate components just so a deeply nested component can receive it.

Using Context API can avoid unnecessary prop passing for shared application state such as authentication.

---

## 19. What is the difference between client-side navigation and a full page reload?

React Router navigation changes routes without reloading the complete application.

A full page reload restarts the React application.

In the current ShopSphere implementation, a full reload also resets the temporary authentication state because it is stored only in React memory.

---

## 20. Explain your current ShopSphere authentication flow.

The current frontend authentication flow is:

Login
→ update AuthContext
→ `isAuthenticated = true`
→ Navbar updates
→ ProtectedRoute allows protected pages

Logout
→ `isAuthenticated = false`
→ Navbar updates
→ ProtectedRoute blocks protected pages

This is currently a frontend authentication architecture. Persistent backend authentication will be implemented later.