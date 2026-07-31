import { NavLink } from "react-router-dom";
import "./../../styles/Navbar.css";

function Navbar() {
    return(
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

                <button>Login</button>

            </div>
        </nav>

    );
}

export default Navbar;