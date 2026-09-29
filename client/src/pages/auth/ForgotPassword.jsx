import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Auth.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleReset(e) {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      setMessage("");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    setError("");
    setMessage("Password reset instructions have been sent to your email.");
  }

  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <h2>ShopSphere AI</h2>

          <h1>
            Reset Your
            <br />
            Password.
          </h1>

          <p>
            Enter your email address and we'll help you
            get back into your ShopSphere AI account.
          </p>
        </div>

        <div className="auth-form-section">
          <div className="auth-form-card">

            <h1>Forgot Password?</h1>

            <p className="auth-subtitle">
              Enter the email associated with your account
            </p>

            <form onSubmit={handleReset}>

              <div className="auth-field">
                <label>Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {error && (
                <p className="auth-error">
                  {error}
                </p>
              )}

              {message && (
                <p className="auth-success">
                  {message}
                </p>
              )}

              <button
                type="submit"
                className="auth-submit"
              >
                Send Reset Link
              </button>

            </form>

            <p className="auth-switch">
              Remember your password?{" "}
              <Link to="/login">Back to Login</Link>
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ForgotPassword;