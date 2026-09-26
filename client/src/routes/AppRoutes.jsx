import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";
import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import ProductDetails from "../pages/public/ProductDetails";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import NotFound from "../pages/public/NotFound";
import Profile from "../pages/user/Profile";
import Cart from "../pages/user/Cart";
import Orders from "../pages/user/Orders";
import Wishlist from "../pages/user/Wishlist";
import Checkout from "../pages/user/Checkout";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Route>
        
      {/* Authentication Routes */}
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      

      {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>

                <Route
                    path="/profile"
                    element={<Profile />}
                />

                <Route
                    path="/cart"
                    element={<Cart />}
                />

                <Route
                   path="/orders"
                   element={<Orders />}
                />
              
                <Route
                   path="/wishlist"
                   element={<Wishlist />}
                />

                <Route
                   path="/checkout"
                   element={<Checkout />}
                />
                
            </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;