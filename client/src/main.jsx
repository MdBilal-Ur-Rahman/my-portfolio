import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import "./index.css";
import App from "./App.jsx";

// Initialize Google Analytics
ReactGA.initialize("G-2ZMMWQ1LEE");

// Track page view
ReactGA.send({
  hitType: "pageview",
  page: window.location.pathname + window.location.search,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);