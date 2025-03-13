// import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Welcome to Our Store
      </h1>
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
