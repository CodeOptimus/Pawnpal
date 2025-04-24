import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import { UserProvider } from "./context/UserContext";
import Checkout from "./Pages/Checkout/Checkout";
import { CartProvider } from "./contexts/CartContext";
import Payment from "./Pages/Payment/Payment";
import Login from "./Pages/Login/Login";
import SellerSignup from "./Pages/SellerSignup/SellerSignup";

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<Products />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/seller-signup" element={<SellerSignup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </UserProvider>
    </CartProvider>
  );
}

export default App;
