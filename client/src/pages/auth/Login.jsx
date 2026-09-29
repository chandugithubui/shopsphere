import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/Auth.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();

  function handleLogin(e) {
    e.preventDefault();

    // 1. Empty fields
    if (!email || !password) {
      setError("please enter both email and password.");
      return;
    }

    // 2. Email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("please enter a valid email address.");
      return;
    }

    // 3. Password length

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setError("");

    alert("Login Successful!");

    setIsAuthenticated(true);

    navigate("/");
  }

    return (
  <div className="auth-page">
    <div className="auth-container">

      {/* Left Side */}
      <div className="auth-brand">
        <h2>ShopSphere AI</h2>

        <h1>
          Smarter Shopping,
          <br />
          Powered by AI.
        </h1>

        <p>
          Discover products, manage your shopping experience,
          and enjoy smarter recommendations.
        </p>
      </div>

      {/* Right Side */}
      <div className="auth-form-section">
        <div className="auth-form-card">

          <h1>Welcome Back</h1>

          <p className="auth-subtitle">
            Login to continue to ShopSphere AI
          </p>

          <form onSubmit={handleLogin}>

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

            <div className="forgot-password">
              <Link to="/forgot-password">
                Forgot Password?
              </Link>
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
              Login
            </button>

          </form>

          <p className="auth-switch">
            Don't have an account?{" "}
            <Link to="/register">
              Create Account
            </Link>
          </p>

        </div>
      </div>

    </div>
  </div>
  );
}

export default Login;