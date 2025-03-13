// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary";

// Get the base URL from environment variable or default to '/'
const baseURL = import.meta.env.BASE_URL || "/";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter basename={baseURL}>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
);
