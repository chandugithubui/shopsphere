import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Auth.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    // Check empty fields
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Check password length
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Check whether passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    alert("Account created successfully!");

    navigate("/login");
  }

  return (
  <div className="auth-page">
    <div className="auth-container">

      <div className="auth-brand">
        <h2>ShopSphere AI</h2>

        <h1>
          Join the Future
          <br />
          of Shopping.
        </h1>

        <p>
          Create your account and experience smarter,
          personalized shopping powered by AI.
        </p>
      </div>

      <div className="auth-form-section">
        <div className="auth-form-card">

          <h1>Create Account</h1>

          <p className="auth-subtitle">
            Join ShopSphere AI and start shopping smarter
          </p>

          <form onSubmit={handleRegister}>

            <div className="auth-field">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="auth-field">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="auth-field">
              <label>Confirm Password</label>

              <div className="password-field">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="auth-submit"
            >
              Create Account
            </button>

          </form>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Login</Link>
          </p>

        </div>
      </div>

    </div>
  </div>
);
}

export default Register;