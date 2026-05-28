import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import ExpenseContext from "./context/ExpenseContext.jsx";
createRoot(document.getElementById("root")).render(
  <ExpenseContext>
    <HashRouter>
      <App />
    </HashRouter>
  </ExpenseContext>,
);
