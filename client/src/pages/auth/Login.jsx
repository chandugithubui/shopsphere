import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { setIsAuthenticated } = useAuth();

  function handleLogin() {
    alert("Login Successful!");

    setIsAuthenticated(true);

    navigate("/");
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;