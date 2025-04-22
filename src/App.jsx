import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import AuthModal from "./components/AuthModal/AuthModal";
// import Navbar from "./components/Navbar/Navbar";
import { UserProvider } from "./context/UserContext";
import Checkout from "./Pages/Checkout/Checkout";
import { CartProvider } from "./contexts/CartContext";
import Payment from "./Pages/Payment/Payment";
import SignUp from "./Pages/SignUp/SignUp";
import SellerSignup from "./Pages/SellerSignup/SellerSignup";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowAuthModal(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <CartProvider>
      <UserProvider>
        <div style={{ minHeight: "100vh" }}>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  setShowAuthModal={setShowAuthModal}
                  isAuthModalOpen={showAuthModal}
                />
              }
            />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  setShowAuthModal={setShowAuthModal}
                  isAuthModalOpen={showAuthModal}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  setShowAuthModal={setShowAuthModal}
                  isAuthModalOpen={showAuthModal}
                />
              }
            />
            <Route
              path="/products"
              element={
                <Products
                  setShowAuthModal={setShowAuthModal}
                  isAuthModalOpen={showAuthModal}
                />
              }
            />
            <Route
              path="/checkout"
              element={
                <Checkout
                  setShowAuthModal={setShowAuthModal}
                  isAuthModalOpen={showAuthModal}
                />
              }
            />
            <Route
              path="/payment"
              element={
                <Payment
                  setShowAuthModal={setShowAuthModal}
                  isAuthModalOpen={showAuthModal}
                />
              }
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/seller-signup" element={<SellerSignup />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      </UserProvider>
    </CartProvider>
  );
}

export default App;
