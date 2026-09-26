import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./../../styles/Navbar.css";

function Navbar() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    function handleLogout() {
        setIsAuthenticated(false);
        navigate("/");
    }
    return (
        <nav className="navbar">
            <div className="logo">

                <h2>ShopSphere AI</h2>

            </div>

            <ul className="nav-links">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/categories">Categories</NavLink>
                </li>
            
            </ul>


            <div className="nav-actions">
                <input
                    type="text"
                    placeholder="Search Products..."

                />

                <button>🛒 Cart (0)</button>

                {isAuthenticated ? (
                    <>
                        <NavLink to="/profile">Profile</NavLink>

                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <NavLink to="/login">
                        <button>Login</button>
                    </NavLink>
                )}

            </div>
        </nav>

    );
}

export default Navbar;