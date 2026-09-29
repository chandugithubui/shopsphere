# Day 13 – Authentication Forms, Validation & UI

## Objective

Build functional and responsive authentication pages for ShopSphere AI using React controlled components, form validation, React Router navigation, and reusable CSS.

---

## Work Completed

### 1. Login Form

Implemented a controlled Login form using React `useState`.

Fields:
- Email
- Password

Features:
- Empty field validation
- Email format validation
- Minimum password length validation
- Show/Hide password
- Forgot Password navigation
- Register navigation
- Successful login updates authentication state
- Redirect to Home after login

---

### 2. Controlled Components

Form inputs are controlled through React state.

Example:

```jsx
const [email, setEmail] = useState("");

<input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

3. Form Submission
Used:
<form onSubmit={handleLogin}>

and:
e.preventDefault();

This prevents the browser's default form submission and allows React to handle validation and authentication logic.
4. Login Validation
Implemented:
- Empty field validation
- Email validation using Regular Expression
- Password minimum length validation
Email pattern:
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

Used early return statements to stop execution when validation fails.
5. Register Form
Created controlled fields for:
- Name
- Email
- Password
- Confirm Password
Implemented validation for:
- Empty fields
- Invalid email
- Password length
- Password confirmation
Successful frontend registration redirects the user to /login.
6. Password Visibility
Implemented Show/Hide Password functionality using boolean state.
const [showPassword, setShowPassword] = useState(false);

Input type changes dynamically:
type={showPassword ? "text" : "password"}

Register uses separate state for Password and Confirm Password visibility.
7. Forgot Password
Created a Forgot Password form with:
- Controlled email input
- Empty email validation
- Email format validation
- Success message
- Back to Login navigation
Current implementation is frontend-only and does not send an actual reset email.
8. Authentication UI
Created reusable:
src/styles/Auth.css

The same authentication design is shared by:
- Login
- Register
- Forgot Password
Implemented:
- Two-column desktop layout
- ShopSphere AI branding section
- Authentication form section
- Styled inputs and buttons
- Error and success messages
- Password toggle
- Responsive mobile layout
9. Responsive Design
Used CSS Grid:
grid-template-columns: 1fr 1fr;

Desktop displays two columns.
For mobile:
grid-template-columns: 1fr;

The layout changes to a single-column structure.
Testing Completed
Tested:
- Empty Login fields
- Invalid Login email
- Short password
- Login Show/Hide Password
- Successful Login
- Empty Register fields
- Invalid Register email
- Short Register password
- Password mismatch
- Register password visibility
- Successful Register redirect
- Forgot Password validation
- Forgot Password success message
- Mobile responsive layout
- Protected Route behavior
- Logout behavior
Current Limitation
Authentication is still frontend-based.
Registration does not currently create a user in MongoDB.
Forgot Password does not currently send an email.
Authentication state is stored temporarily in React Context and resets after a full browser refresh.
Backend authentication and persistent login will be implemented later.