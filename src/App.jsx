import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import Cart from "./Pages/Cart/Cart";
import AuthModal from "./components/AuthModal/AuthModal";
// import Navbar from "./components/Navbar/Navbar";
import { UserProvider } from "./context/UserContext";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </UserProvider>
  );
}

export default App;
