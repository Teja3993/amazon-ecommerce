import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import ProductDetails from "./pages/ProductDetails";

import ApiTester from "./pages/ApiTester";
import Cart from "./pages/Cart";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
<Route path="/test-api" element={<ApiTester />} />
<Route path="/cart" element={<Cart />} />

        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
