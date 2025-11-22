import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";

import ApiTester from "./pages/ApiTester";
import Cart from "./pages/Cart";
import Home from "./pages/Home";   // NEW


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
<Route path="/checkout" element={<Checkout />} />

        <Route path="/test-api" element={<ApiTester />} />
      </Routes>
    </Router>
  );
}

export default App;
