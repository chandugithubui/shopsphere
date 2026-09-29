# Authentication Forms & Validation – Interview Questions

## 1. What is a controlled component in React?

A controlled component is a form element whose value is controlled by React state.

The input receives its value from state and updates that state using an event handler such as `onChange`.

---

## 2. Why do we use `e.preventDefault()`?

Forms have default browser submission behavior that can reload or navigate the page.

`e.preventDefault()` prevents that behavior so React can handle the form submission.

---

## 3. What is the purpose of `onSubmit`?

`onSubmit` handles the submission of a form.

It is generally preferred over handling only the button's `onClick` because it represents the form submission itself.

---

## 4. Why do we validate forms?

Validation ensures that user input satisfies required conditions before the data is processed or sent to a backend.

Examples include required fields, valid email formats, password requirements, and matching passwords.

---

## 5. What is an early return?

An early return stops function execution when a particular condition is satisfied.

Example:

```js
if (!email) {
  setError("Email is required");
  return;
}

6. How did you implement Show/Hide Password?
A boolean React state controls whether the input type is password or text.
type={showPassword ? "text" : "password"}

7. Why should a Show Password button use type="button"?
A button inside a form defaults to submission behavior.
Using:
type="button"

prevents the Show/Hide button from submitting the form.
8. Why are password and confirmPassword stored separately?
They represent two independent input values.
Keeping them in separate states allows us to compare them:
password !== confirmPassword

9. What is conditional rendering?
Conditional rendering means displaying UI based on a condition.
Example:
{error && <p>{error}</p>}

The paragraph renders only when error contains a truthy value.
10. Why use Link instead of an anchor tag for internal navigation?
React Router's Link performs client-side navigation without causing a complete browser page reload.
11. Is frontend validation enough for security?
No.
Frontend validation improves user experience but can be bypassed.
The backend must independently validate incoming data.
12. Does the current Register form create a real user?
No.
The current implementation validates the form and simulates successful registration.
Real registration requires sending the data to a backend API and storing the user securely in the database.
13. Does the current Forgot Password page send an email?
No.
It currently demonstrates frontend validation and UI state.
A real implementation requires backend token generation, email delivery, token verification, and password updating.
14. Why does the current authentication reset after refresh?
Authentication is currently stored in React state.
A full page reload recreates the application and initializes that state again.
Persistent authentication requires mechanisms such as secure cookies, sessions, or tokens.
15. How did you make the authentication pages responsive?
CSS Grid is used for the desktop two-column layout.
A media query changes the grid to one column on smaller screens.
16. Why reuse one Auth.css file?
Login, Register, and Forgot Password belong to the same UI system.
Sharing reusable CSS classes reduces duplication and maintains visual consistency.
