import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Products from "./pages/public/Products";
import ProductDetails from "./pages/public/ProductDetails";
import Footer from "./components/layout/Footer";
import "./App.css";


function App() {
  return(
    <>
    <Navbar/>


    <AppRoutes/>
  
    <Footer />
    </>
  )
}

export default App;