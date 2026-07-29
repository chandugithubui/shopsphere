import { Routes, Route } from "react-router-dom";
import Home from "../pages/public/Home";
import Products from "../pages/public/Products";
import ProductDetails from "../pages/public/ProductDetails";
import Login from "../pages/auth/Login";
import NotFound from "../pages/public/NotFound";

function AppRoutes() {
    return (
        <Routes>
           
           <Route path="/" element= {<Home />} />

           <Route path="/products" element={<Products />} />

           <Route path="/products/:id"
           element={<ProductDetails />} 
           />
           <Route path="/login" element={<Login />} />
           <Route path="*" element={<NotFound />} />
        </Routes> 
    );
}

export default AppRoutes;
