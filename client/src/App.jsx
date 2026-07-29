import Navbar from "./components/layout/Navbar";
import AppRoutes from "./routes/AppRoutes";
import Products from "./pages/public/Products";
import ProductDetails from "./pages/public/ProductDetails";
import "./App.css";


function App() {
  return(
    <>
    <Navbar/>


    <AppRoutes/>
  
    </>
  )
}

export default App;